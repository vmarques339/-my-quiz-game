class Contestant {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;

    }
    getCount(){
        var ContestantCountRef=database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount=data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }

    update(name){
        var playerIndex="contestants/contestant "+this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
}