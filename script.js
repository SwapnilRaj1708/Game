function start(){
    document.getElementById("start_screen").style.display="none";
    // document.body.style.backgroundColor="brown";
    document.getElementById("goal_background").style.display="block";
    setTimeout(function(){
        document.getElementById("goal_background").style.display="none";
    },1000);
    setTimeout(function(){
        document.getElementById("ground").style.display="block";
    },3501)
    
}