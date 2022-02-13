#target photoshop
// Start Timer
var timeDiff = {
    setStartTime:function (){d = new Date(); time  = d.getTime();},
    getDiff:function (){d = new Date(); t = d.getTime() - time; time = d.getTime(); return t;}
};
timeDiff.setStartTime();
//Play Action
app.doAction("My Action","My Action Set.atn")
// Stop Timer
alert("Run Time: " + timeDiff.getDiff() / 1000 + " seconds");
