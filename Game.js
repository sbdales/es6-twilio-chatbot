const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    START:  Symbol("start"),
    RUNNING: Symbol("running"),
    HOME: Symbol("home"),
    ENTRANCE: Symbol("entrance"),
    ROOM1: Symbol("room1"),
    HALL1: Symbol("hall1")
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
                    sReply = "You open the door and enter.  The inside of the house is dark and it's hard to see.  You can make out a DOOR to the left, a HALL ahead of you and STAIRS to the right. Which way do you go??";
                    this.stateCur = GameState.
                }else{
                    sReply = "You stand there paralyzed with fear.  Do you RUN or ENTER?";
                }
                break;
            case GameState.RUNNING:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You have rejoined your friends and they still are daring you to enter the house, do you ENTER or RUN? ";
                    this.stateCur = GameState.START;
                }else {
                    sReply = "You keep running until you are home safe with your mommy.  She tells you to go back and find your friends, do you change your pants first?";
                    this.stateCur = GameState.HOME;
                }
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You change your pants and rejoin your friends. They are still daring you to enter the house, do you ENTER or RUN? ";
                    this.stateCur = GameState.START;
                }else {
                    sReply = "You return to your friends with you urine soaked pants still on.  They are still daring you to enter the house, do you ENTER or RUN?";
                    this.stateCur = GameState.START;
                }
                break;
            case GameState.ENTRANCE:
                if(sInput.toLowerCase().match("door")){
                    sReply = "You enter a room that's in tatters.  There are holes in the walls and floor.  You can see a door across the room, but there's a spider between you and the door.  You can AVOID the spider and go to the door, STEP on the spider, or TURN around.  What do you do?"
                    this.stateCur = GameState.ROOM1;
                }
                break;
            case GameState.ROOM1:
                if(sInput.toLowerCase().match("avoid"){
                   sReply = "You avoid the spider, open the door and find a hallway.  In the hall, there are two doors and you can see the hall turns a corner.  Do you open door number ONE, TWO or FOLLOW the hall?";
                   this.stateCur = GameState.HALL1;
                }else if(sInput.toLowerCase().match("step"){
                    sReply = "You step on the spider and squash is.  Another spider crawls up from between the floorboards.  You can AVOID it, STEP on it or TURN around. What do you do?";    
                }else if(sInput.toLowerCase().match("turn"){
                    sReply = "There are STAIRS, a HALL, and the DOOR behind you.  Where do you go?";
                    this.stateCur = GameState.ENTRANCE;     
                }else {
                    sReply = "You stand there paralyzed with fear, what do you do, AVOID, STEP or TURN";   
                }
                break;
                   
        }
        return(sReply);
    }
}
