import { MongoClient } from "mongodb";
import { PlayerCommandModel } from "../types/player/commnads";

const dbName = 'MathGame';

const playerDal = {

  getAllPlayers: async (client: MongoClient, collectionName: string) => {

    try {

      const pipeline = [
        {
          $lookup: {
            from: 'Character',
            localField: '_id',
            foreignField: 'playerId',
            as: 'characters'
          }
        },
        {
          $addFields: {
            hasCharacters: {
              $gt: [{ $size: '$characters' }, 0]
            }
          }
        },
        {
          $unwind: {
            path: '$characters',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: 'ClassLevel',
            let: {
              classId: '$characters.classId',
              level: '$characters.level'
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      {
                        $eq: ['$classId', '$$classId']
                      },
                      { $eq: ['$level', '$$level'] }
                    ]
                  }
                }
              }
            ],
            as: 'classLevel'
          }
        },
        {
          $unwind: {
            path: '$classLevel',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $group: {
            _id: '$_id',
            name: { $first: '$name' },
            hasCharacters: {
              $first: '$hasCharacters'
            },
            characters: {
              $push: {
                _id: '$characters._id',
                class: '$characters.class',
                level: '$characters.level',
                //classLevel: '$classLevel'
                classLevel: {
                  baseHitPoints: '$classLevel.baseHitPoints'
                }
              }
            }
          }
        },
        {
          $project: {
            _id: 1,
            name: 1,
            characters: {
              $cond: {
                if: {
                  $eq: ['$hasCharacters', false]
                },
                then: [],
                else: '$characters'
              }
            }
          }
        }
      ]

      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      let findResult = await collection.aggregate(pipeline).toArray();
      return findResult;

    } catch (error) {

      console.log('[MongoQuery] - error');
      console.log(error);
      throw error;

    } finally {

      client.close();

    }
  },

  addPlayer: async (client: MongoClient, collectionName: string, addPlayerCommandModel: PlayerCommandModel.AddPlayer) => {

    try {
      
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      let player = { name: addPlayerCommandModel.name }

      await collection.insertOne(player)

    } catch (error) {

      console.log('[MongoQuery] - error');
      console.log(error);
      throw error;

    } finally {

      client.close();

    }
  }
}

export default playerDal;