
function search(){
  let searchbar=document.getElementById("find").value;

  if("logo ideas" == searchbar){
    window.open('./pages/logoideas.html',"_self")
  }
  else if("movie posters" == searchbar){
    window.open('./pages/movieposters.html',"_self")
  }
  
  else{
    alert("Invalid keyword")
  }
}

function filter(value){
console.log(value)


  if(value == "red"){
    document.getElementById("orange1").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("orange3").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";

    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "blue"){

    document.getElementById("red").style.display = "none";
    document.getElementById("orange1").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("orange3").style.display = "none";

    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";


  }




  else if(value == "orange"){

    document.getElementById("red").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";

    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "white"){

    document.getElementById("red").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";
    document.getElementById("orange1").style.display="none";
    document.getElementById("orange2").style.display="none";
    document.getElementById("orange3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "black"){
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";

    document.getElementById("orange1").style.display="none";
    document.getElementById("orange2").style.display="none";
    document.getElementById("orange3").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
  }





}