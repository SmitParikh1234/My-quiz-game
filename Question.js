class Question {
   constructor(){
       this.input = createInput("ENTER YOUR NAME HERE");
       this.button = createButton("SUBMIT");
       this.greeting = createElement('h2');
       this.question = question;

   }

     

    display(){
         var title = createElement('h2');
         title.html("MY QUIZ GAME");
         title.position(350,0);
         this.input.position(130,160);
         this.button.position(250,200);

        
         


             this.button.mousePressed(function(){
             this.input.hide();
             this.button.hide();

             this.greeting.html("WELCOME TO MY QUIZ GAME , " + contestant.name);
             this.greeting.position(130,160);

             this.question.html("Question : Which Game Did 'Abhinav Bindra' Is Associated With ?");
             this.question.position(150,80);
             this.option1.html(" 1 : Weight Lifting");
             this.option1.position(150,100);
             this.option2.html(" 2 : Boxing");
             this.option2.position(150,120);
             this.option3.html(" 3 : Rifle Shooting");
             this.option3.position(150,140);
             this.option4.html(" 4 : Football");
             this.option4.position(150,160);
    

             contestant.name = this.input.value();
             contestantCount+=1;
             contestant.index = contestantCount;
             contestant.update();
             contestant.updateCount(contestantCount);
             
            
         })
     }
};