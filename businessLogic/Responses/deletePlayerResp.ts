export class DeletePlayerResp {

    public deletePlayerAcknowledged: boolean;
    public playerDeleted: number;
    public deleteCharacterAcknowledged: boolean;
    public characterDeleted: number;

    constructor(

        deletePlayerAcknowledged: boolean = false,
        playerDeleted: number = 0,
        deleteCharacterAcknowledged: boolean = false,
        characterDeleted: number = 0

    ) {

        this.deletePlayerAcknowledged = deletePlayerAcknowledged;
        this.playerDeleted = playerDeleted;
        this.deleteCharacterAcknowledged = deleteCharacterAcknowledged;
        this.characterDeleted = characterDeleted;
        
    }
}