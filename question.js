class Form{
    constructor(){
    }
    display(){
        var title= createElement('h1');
        title.html("MY QUIZ GAME");
        title.position(130,20);

        var input=createInput("WHATS MY NAME");
        var button=createButton('CLICK ME');
        var greeting=createElement('h3');
        
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            contestantCount+=1;
            contestant.update(name);
            contestant.updateCount(contestantCount);

            greeting.html("HELLLLOO "+name);
            greeting.position(130,160);
        })
    }
}