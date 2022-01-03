
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
    // document.getElementById("yellow").style.display="none";
    // document.getElementById("green").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "blue"){
    // alert("hello")
    document.getElementById("red").style.display = "none";
    document.getElementById("orange1").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("orange3").style.display = "none";
    // document.getElementById("blue1").style.display="none";
    // document.getElementById("blue2").style.display="none";
    // document.getElementById("yellow").style.display="none";
    // document.getElementById("green").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "yellow"){
    // // alert("hello")
    // document.getElementById("red").style.display = "none";
    // document.getElementById("blue1").style.display="none";
    // document.getElementById("blue2").style.display="none";
    // // document.getElementById("yellow").style.display="none";
    // // document.getElementById("green").style.display="none";
    // document.getElementById("white1").style.display="none";
    // document.getElementById("white2").style.display="none";
    // document.getElementById("white3").style.display="none";
    // document.getElementById("black1").style.display="none";
    // document.getElementById("black2").style.display="none";
  }

  else if(value == "green"){
    // // alert("hello")
    // document.getElementById("red").style.display = "none";
    // document.getElementById("blue1").style.display="none";
    // document.getElementById("blue2").style.display="none";
    // // document.getElementById("yellow").style.display="none";
    // // document.getElementById("green").style.display="none";
    // document.getElementById("white1").style.display="none";
    // document.getElementById("white2").style.display="none";
    // document.getElementById("white3").style.display="none";
    // document.getElementById("black1").style.display="none";
    // document.getElementById("black2").style.display="none";
  }


  else if(value == "violet"){
    // // alert("hello")
    // document.getElementById("red").style.display = "none";
    // document.getElementById("blue1").style.display="none";
    // document.getElementById("blue2").style.display="none";
    // // document.getElementById("yellow").style.display="none";
    // // document.getElementById("green").style.display="none";
    // document.getElementById("white1").style.display="none";
    // document.getElementById("white2").style.display="none";
    // document.getElementById("white3").style.display="none";
    // document.getElementById("black1").style.display="none";
    // document.getElementById("black2").style.display="none";
  }


  else if(value == "orange"){
    // alert("hello")
    document.getElementById("red").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";
    // document.getElementById("yellow").style.display="none";
    // document.getElementById("green").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "white"){
    // alert("hello")
    document.getElementById("red").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";
    // document.getElementById("yellow").style.display="none";
    // document.getElementById("green").style.display="none";
    document.getElementById("orange1").style.display="none";
    document.getElementById("orange2").style.display="none";
    document.getElementById("orange3").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("black2").style.display="none";
  }

  else if(value == "black"){
    // alert("hello")
    // document.getElementById("red").style.display = "none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("blue2").style.display="none";
    // document.getElementById("yellow").style.display="none";
    // document.getElementById("green").style.display="none";
    document.getElementById("orange1").style.display="none";
    document.getElementById("orange2").style.display="none";
    document.getElementById("orange3").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    // document.getElementById("black1").style.display="none";
    // document.getElementById("black2").style.display="none";
  }





}