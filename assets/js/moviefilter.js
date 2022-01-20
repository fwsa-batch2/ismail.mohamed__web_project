function filter(value){
  console.log(value)
  document.getElementById("flex").style.display="flex";


switch(value){

  case "green":
    document.getElementById("yellow").style.display = "none";
    document.getElementById("green").style.display = "block";
    document.getElementById("black").style.display = "none";
    break;

  case "yellow":
    document.getElementById("green").style.display = "none";
    document.getElementById("yellow").style.display = "block";
    document.getElementById("black").style.display = "none";
    break;

  case "black":
    document.getElementById("yellow").style.display = "none";
    document.getElementById("black").style.display = "block";
    document.getElementById("green").style.display = "none";
    break;

}
}


function refresh(){
  window.open("./../pages/movieposters.html","_self");
}
