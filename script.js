var rotation=-75;
function rotate_box(){
    rotation +=5;
    if(rotation > 75){
        rotation=-75;
    }
    document.getElementById("box").style.transform= "rotate("+rotation+"deg)";
    rotate_box();
}
function start(){
    document.getElementById("start_screen").style.display="none";
    // document.body.style.backgroundColor="brown";
    document.getElementById("goal_background").style.display="block";
    setTimeout(function(){
        document.getElementById("goal_background").style.display="none";
    },1000);
    setTimeout(function(){
        document.getElementById("ground").style.display="block";
        document.getElementById("b_gold1").style.display="block";
        document.getElementById("b_gold2").style.display="block";
        document.getElementById("s_gold1").style.display="block";
        document.getElementById("s_gold2").style.display="block";
        document.getElementById("s_gold3").style.display="block";
        document.getElementById("s_gold4").style.display="block";
        document.querySelector("#box").style.display="block";
    },1000)
}
