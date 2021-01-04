class Form{
   constructor(){
       this.title = createElement('h2');
       this.input = createInput("Enter Name");
       this.button = createButton('play');
       this.greetings = createElement('h2');
   }
   display(){
       this.title.html("Welcome To Car Racing");
       this.title.position(150, 150);
       this.input.position(150, 250);
       this.button.position(150, 350);
       this.button.mousePressed(()=>{
        this.title.hide();
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount += 1;
       player.index = playerCount;
       player.updateCount(playerCount);
       player.update();
       this.greetings.html("hello" + player.name);
       this.greetings.position(150, 150);
       }
       
       
       )
   }
   hide(){
       this.title.hide();
       this.button.hide();
       this.input.hide();
       this.greetings.hide();

   }

   end(){
       var greetings2 = createElement('h1');
       greetings2.html("congratulations " + player.name + " your rank is " + prank);
       greetings2.position(200, 250);
    if(player.rank >= 4){

    
       var reset = createButton('reset');
       reset.position(250, 300);
       reset.mousePressed(()=>{
           player.updateCount(0);
           player.updateRank(0);
           game.UpdateState(0);
           database.ref('players').remove();
           greetings2.hide();
       })
       var message = createElement('h2');
       message.html("click on reset and reload the page to play again");
       message.position(200, 500);
    }
   }

}