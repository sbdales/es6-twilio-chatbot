const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    START: Symbol("start"),
    RUNNING: Symbol("running"),
    HOME: Symbol("home"),
    ENTRANCE: Symbol("entrance"),
    ROOM1: Symbol("room1"),
    HALL1: Symbol("hall1"),
    HALL2: Symbol("hall2"),
    HALL3: Symbol("hall3"),
    DINNING: Symbol("dinning"),
    KITCHEN: Symbol("kitchen"),
    ROOM2: Symbol("room2"),
    ROOM3: Symbol("room3"),
    ROOM4: Symbol("room4"),
    ROOM5: Symbol("room5"),
    STAIRS: Symbol("stairs"),
    BROOM: Symbol("broom"),
    BACKYARD: Symbol("backyard")
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
                if(sInput.toLowerCase().match("run"))
                {
                    sReply = "You pee your pants and run away crying.  Your friends are laughing at you.  Do you GO back or KEEP running?";
                    this.stateCur = GameState.RUNNING;
                }
                else if(sInput.toLowerCase().match("enter")){
                    sReply = "You open the door and enter.  The inside of the house is dark and it's hard to see.  You can make out a DOOR to the left, a HALL ahead of you and STAIRS to the right. Which way do you go?";
                    this.stateCur = GameState.ENTRANCE;
                }
                else{
                    sReply = "You stand there paralyzed with fear.  Do you RUN or ENTER?";
                }
                break;
            case GameState.RUNNING:
                if(sInput.toLowerCase().match("go"))
                {
                    sReply = "You have rejoined your friends and they still are daring you to enter the house, do you ENTER or RUN? ";
                    this.stateCur = GameState.START;
                }
                else 
                {
                    sReply = "You keep running until you are home safe with your mommy.  She tells you to go back and find your friends, do you change your pants first?";
                    this.stateCur = GameState.HOME;
                }
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("yes"))
                {
                    sReply = "You change your pants and rejoin your friends. They are still daring you to enter the house, do you ENTER or RUN? ";
                    this.stateCur = GameState.START;
                }
                else 
                {
                    sReply = "You return to your friends with you urine soaked pants still on.  They are still daring you to enter the house, do you ENTER or RUN?";
                    this.stateCur = GameState.START;
                }
                break;
            case GameState.ENTRANCE:
                if(sInput.toLowerCase().match("door"))
                {
                    sReply = "You enter a room that's in tatters.  There are holes in the walls and floor.  You can see aa archway, there's a spider on the floor and a door.  You can go through the ARCHWAY, STEP on the spider, or go through the DOOR.  What do you do?";
                    this.stateCur = GameState.ROOM1;
                }
                else if(sInput.toLowerCase().match("hall"))
                {
                    sReply = "You follow the hall.  You find a door and the hall continues around a corner. Do you open the DOOR, go around the CORNER or the the ENTRANCE?";
                    this.stateCur = GameState.HALL1;
                }
                else if(sInput.toLowerCase().match("stairs")){
                    sReply = "The stairs creek under foot as you ascend up.  You reach the top and find a hallway with four doors. Do you open door ONE, TWO, THREE or FOUR. Or do you go BACK downstairs?";
                    this.stateCur = GameState.HALL3;
                }
                else if (sInput.toLowerCase().match("EXIT")){
                    sReply = "You leave the building and return to your friends.  They tease you that you must be scared because you can't stay ing the house.  You can RUN away or ENTER the house again, what do you do?";
                    this.stateCur = GameState.START;
                }
                else
                {
                   sReply = "You stand paralyzed with fear, do you enter the DOOR, go down the HALL, go up the STAIRS or EXIT?";
                }
                break;
            case GameState.ROOM1:
                if(sInput.toLowerCase().match("archway"))
                {
                   sReply = "You go through the archway and find a hallway.  In the hall, there's a sliding door, a red door and you can see the hall turns a corner.  Do you open SLIDING door, the RED door, or FOLLOW the hall, or go through the archway?";
                   this.stateCur = GameState.HALL2;
                }
                else if(sInput.toLowerCase().match("step"))
                {
                    sReply = "You step on the spider and squash is.  Another spider crawls up from between the floorboards.  You can STEP on it, go through the ARCHWAY or the DOOR. What do you do?";    
                }
                else if(sInput.toLowerCase().match("door"))
                {
                    sReply = "There are STAIRS, a HALL, a DOOR and the EXIT.  Where do you go?";
                    this.stateCur = GameState.ENTRANCE;     
                }
                else 
                {
                    sReply = "You stand there paralyzed with fear, what's your choice, ARCHWAY, STEP or DOOR?";   
                }
                break;
            case GameState.HALL1:
                if(sInput.toLowerCase().match("corner"))
                {
                    sReply = "You continue around the corner and find you can enter a RED door, a SLIDING door, an ARCHWAY or FOLLOW the hall back around the corner?";
                    this.stateCur = GameState.HALL2;
                }
                else if(sinput.ToLowerCase().match("door"))
                {
                    sReply = "The door reveals a staircase down.  You can go DOWNSTAIRS or CLOSE the door.";
                    this.stateCur = GameState.STAIRS;
                    
                }
                else if (sInput.toLowerCase().match("entrance")){
                    sReply = "You are back at the entrance.  You can go up STAIRS, through the DOOR, follow the HALL or EXIT";
                    this.stateCur = GameState.ENTRANCE;                
                else
                {
                    sReply = "You stand paralyzed with fear. do you gor around the CORNER, open the DOOR or go back to the ENTRANCE?";
                }
                break;
            case GameState.HALL2:
                if(sInput.toLowerCase().match("sliding"))
                {
                    sReply = "You open the door and find what once was a dinning room.  Now it's in ruin, There are holes in the floor and walls.  A table surrounded by chairs fills most of the room.  There is another door too. Do you SIT on a chair, go through the SLIDING door or the SWINGING door?";
                    this.stateCur = GameState.DINNING;
                }
                else if(sInput.toLowerCase().match("red"))
                {
                    sReply = "On the otherside of this door is a kitchen in shambles.  There is stuff covering the floor and counter. do you LOOT through the stuff or go BACK?";
                    this.stateCur = GameState.KITCHEN;
                }
                else if(sInput.toLowerCase().match("follow"))
                {
                    sReply = "You return to the entrance of the house. Do you open the DOOR, take the STAIRS, return down the HALL or EXIT?";
                    this.stateCur = GameState.ENTRANCE;
                }
                else if(sInput.toLowerCase().match("archway"))
                {
                    sReply = "You Enter the room again jumping over the spider.  You can STEP on the spider, AVOID it to go to the hall or go BACK to the entrance";
                    this.curState = GameState.ROOM1;
                }
                else
                {
                   sReply = "You stand there paralyzed with fear, do you open the SLIDING door, the RED door, FOLLOW the hall or go through the ARCHWAY?";
                }
                break;
            case GameState.DINNING:
                if(sInput.toLowerCase().match("sit"))
                {
                    sReply = "The chair breaks under you weight.  Do you SIT on another chair, go through the other DOOR, or go BACK";
                }
                else if(sinput.ToLowerCase().match("swinging"))
                {
                    sReply = "On the otherside of this door is a kitchen in shambles.  There is stuff covering the floor and counter. do you LOOT through the stuff or go BACK?";
                    this.stateCur = GameState.KITCHEN;                
                }
                else if(sinput.ToLowerCase().match("sliding"))
                {
                    sReply = "You are back in the hall.  You can go in door ONE, door TWO, FOLLOW the hall or BACK into the front room";
                    this.stateCur = GameState.ROOM1;
                }                
                else
                {
                    sReply = "You stand there paralyzed with fear, do you SIT, go through the SLIDING door, or the SWINGING?";
                }
                break;
            case GameState.HALL3:
                if(sInput.toLowerCase().match("back"))
                {
                    sReply = "You return to the bottom of the stairs, There is the DOOR, a HALL, and some STAIRS where do you go?";
                    this.stateCur = GameState.ENTRANCE;
                }
                else if(sInput.toLowerCase().match("one"))
                {
                    sReply = "You enter the room and see there is a large bee hive. You can POKE the hive, or LEAVE the room. Which do you do?";
                    this.stateCur = GameState.ROOM2;
                }
                else if(sInput.toLowerCase().match("two"))
                {
                    sReply = "Once inside the door you see several bats hanging from the ceiling.  Something glitters on the far wall, do you CHECK it out or go BACK? ";
                    this.stateCur = GameState.ROOM3;
                }
                else if(sInput.toLowerCase().match("three"))
                {
                    sReply = "In this small room you find some broken shelves and the remnents of books all over the place.  Do you SEARCH through the debris or go BACK to the hall?";
                    this.stateCur = GameState.ROOM4;
                }
                else if(sInput.toLowerCase().match("four"))
                {
                    sReply = "You try to open this door but it is stuck.  Do you PUSH harder or GIVE up?";
                    this.stateCur = GameState.ROOM5;
                }
                else
                {
                    sReply = "You stand there paralyzed with fear, do you open door ONE, TWO, THREE, FOUR, or go BACK?"; 
                }
                break;
            case GameState.ROOM2:
                if(sInput.toLowerCase().match("poke"))
                {
                    sReply = "You poke the hive and some bees come out.  You get stung.  Do you POKE the hive again or LEAVE?";
                }
                else if(sinput.ToLowerCase().match("leave"))
                {
                    sReply = "You leave the room and are back in the hall.  You can open door ONE, TWO, THREE, FOUR or go BACK downstairs.";
                    this.stateCur = GameState.HALL3;
                }
                else
                {
                
                }
                break;
            case GameState.ROOM3:
                if(sInput.toLowerCase().match("check"))
                {
                    sReply = "The glitter disappears and then you see it on a different wall.  Do you CHECK it out or go BACK to the hall?";
                }
                else if(sinput.ToLowerCase().match("back"))
                {
                    sReply = "You leave the room and are back in the hall.  You can open door ONE, TWO, THREE, FOUR or go BACK downstairs.";
                    this.stateCur = GameState.HALL3;
                }
                else
                {
                    sReply = "You stand there paralyzed with fear, do you CHECK out the glitter or go BACK?";
                }
                break;
            case GameState.ROOM4:
                if(sInput.toLowerCase().match("search"))
                {
                    sReply = "You lift something and a mouse runs out.  You scream and drop what was in you hand.  Do you SEARCH more or go BACK to the hall?";
                }
                else if(sinput.ToLowerCase().match("back"))
                {
                    sReply = "You leave the room and are back in the hall.  You can open door ONE, TWO, THREE, FOUR or go BACK downstairs.";
                    this.stateCur = GameState.HALL3;                
                }
                else
                {
                    sReply = "You stand there paralyzed with fear, do you SEARCH or go BACK to the hall";
                }
                break;
            case GameState.ROOM5:
                if(sInput.toLowerCase().match("push"))
                {
                    sReply = "You push and the door doesn't move.  Do you PUSH harder or GIVE up";
                }
                else if(sinput.ToLowerCase().match("give"))
                {
                    sReply = "You give up on opening the door and face the hall.  You can open door ONE, TWO, THREE, FOUR or go BACK downstairs.";
                    this.stateCur = GameState.HALL3;
                }
                else
                {
                    sReply = "You stand there paralyzed with fear, do you PUSH harder or GIVE up";
                }
                break;
            case GameState.STAIRS:
                if(sInput.toLowerCase().match("downstairs"))
                {
                    sReply = "You decend the stairs to find stone basement with a dirt floor.  You can see another room, and some moonlight coming through the storm doors.  Do you go to the other ROOM, open the storm DOORS or go BACK upstairs?";
                    this.stateCur = GameState.BASEMENT;
                }
                else if(sInput.toLowerCase().match("close"))
                {
                    sRelpy = "You close the door, do you go around the CORNER, open the DOOR or go to the ENTRANCE?";
                    this.stateCur = GameState.HALL1;
                }
                else
                {
                    sReply = "You stand there paralyzed with fear, do you go DOWNSTAIRS or CLOSE the door?";   
                }
                break;
            case GameState.BASEMENT:
                if(sInput.toLowerCase().match("room"))
                {
                    sReply = "You find another room.  You can SIT for a while or LEAVE the room.";
                    this.stateCur = GameState.BROOM;
                }
                else if(sInput.toLowerCase().match("doors"))
                {
                    sReply = "You open the storm doors revealing the night sky.  Climbing the stairs out, you find yourself in the backyard.  The yard is enclosed by tall bushes.  You can try the GATE or go back to the storm DOORS";
                    this.stateCur = GameState.BACKYARD;
                }
                else if(sInput.toLowerCase().match("back"))
                {
                    sReply = "You return to the top of the stairs. do you CLOSE the door or go back DOWNSTAIRS";
                    this.stateCur = GameState.STAIRS;
                }
                else
                {
                    sReply = "You stand paralyzed with fear.  Do you open the storm DOORS, enter the ROOM or go BACK upstairs?";   
                }
                break;
            case GameState.BROOM:
                if(sInput.toLowerCase().match("sit"))
                {
                    sReply = "You sit for a while.  You get a little bored.  Do you SIT longer or LEAVE the room?";
                }
                else if(sInput.toLowerCase().match("leave"))
                {
                    sReply = "You return to the bottom of the stairs.  You can go in the ROOM, open the storm DOORS or go BACK upstairs.";
                    this.stateCur = GameState.BASEMENT;
                }
                break;
            case GameState.BACKYARD:
                if(sInput.toLowerCase().match("GATE"))
                {
                    sReply = "You try the gate but is is stuck.  You can try the GATE again or go back in the storm DOORS";   
                }
                else if(sInput.toLowerCase().match("doors"))
                {
                    sReply = "You are back in the basement.  You can go BACK upstairs, enter the ROOM or through the storm DOORS?";
                    this.stateCur = GameState.BASEMENT;
                }
                break;

        }
        return(sReply);
    }
}
