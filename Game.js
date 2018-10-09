const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    START:  Symbol("start"),
    RUNNING: Symbol("running")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "You stand outside an old delapidated house.  Your friends are daring you to go inside, do you ENTER or RUN?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.START;
                break;
            case GameState.START:
                if(sInput.toLowerCase().match("run")){
                    sReply = "You pee your pants and run away crying.  Your friends are laughing at you.  Do you GO back or KEEP running?"
                    this.stateCur = GameState.RUNNING;
                }else if(sInput.toLowerCase().match("enter")){
                    sReply = "You open the door and enter.  The inside of the house is dark and it's hard to see.  You can make out a room to the LEFT, a HALL ahead of you and STAIRS to the right. Which way do you go??";
                }else{
                    sReply = "You stand there paralized with fear.  Do you RUN or ENTER?";
                }
                
                break;
            case GameState.RUNNING:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You have rejoined your friends and the still are daring you to enter the house, do you ENTER or RUN? ";
                    this.stateCur = GameState.START;
                }else {
                    sReply = "You keep running until you are home safe with your mommy.  She tells you to go back and find your friends";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
        }
        return(sReply);
    }
}
