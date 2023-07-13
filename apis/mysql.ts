
import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

const sqlPool = mysql.createPool(process.env.DATABASE_URL);

export const sqlQueryMaker = (query: string, params?: any[]) => {
  return new Promise((resolve, reject) => {
    sqlPool.getConnection((err, conn) => {
      if (err) {
        reject(err);
        return;
      }
      conn.query(query, params, (err, results) => {
       
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }

        conn.release();
      });
    });
  });
};

//import mysql from 'mysql2/promise';

// const pool: mysql.Pool = mysql.createPool({
// 	host: 'mysql-rfam-public.ebi.ac.uk',
// 	port: 4497,
// 	user: 'rfamro',
// 	database: 'Rfam',
// 	enableKeepAlive: false,
// 	connectionLimit: 1,
// 	idleTimeout: 1000,
// });

// interface Taxonomy extends mysql.RowDataPacket {
// 	id: number;
// 	species: string;
// }

// const interval: NodeJS.Timer = setInterval(async () => {
// 	const [ rows ] = await pool.query<Taxonomy[]>(`SELECT ncbi_id AS id, LEFT(species, 10) AS species FROM taxonomy ORDER BY species ASC LIMIT 10`);
// 	for (const row of rows) {
// 		console.log({ id: row.id, species: row.species });
// 	}
// }, 2000);

// pool.on('acquire', () => console.log('acquire event'));
// pool.on('connection', () => console.log('connection event'));
// pool.on('enqueue', () => console.log('enqueue event'));
// pool.on('release', () => console.log('release event'));

// setTimeout(() => {
// 	clearInterval(interval);
// 	pool.end();
// }, 10000);