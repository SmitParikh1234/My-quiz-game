class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantsIndex = "contestants/contestant" + this.index;
      database.ref(contestantsIndex).set({
        name : this.name,
        distance : this.distance
      });
    }
  
      static getContestantsInfo(){
        var contestantInfoRef = database.ref('players');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.value
        })
      }
  }
  
  
  