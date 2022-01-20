function filter(value){
  console.log(value)
  
  document.getElementById("flex").style.display="flex";

  
    if(value == "red"){
      document.getElementById("orange1").style.display = "none";
      document.getElementById("orange2").style.display = "none";
      document.getElementById("orange3").style.display = "none";
      document.getElementById("blue1").style.display="none";
      document.getElementById("blue2").style.display="none";
      document.getElementById("red").style.display = "block";
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
      document.getElementById("blue1").style.display="block";
      document.getElementById("blue2").style.display="block";
      document.getElementById("white1").style.display="none";
      document.getElementById("white2").style.display="none";
      document.getElementById("white3").style.display="none";
      document.getElementById("black1").style.display="none";
      document.getElementById("black2").style.display="none";
    }
  
  
  
  
    else if(value == "orange"){
      document.getElementById("orange1").style.display = "block";
      document.getElementById("orange2").style.display = "block";
      document.getElementById("orange3").style.display = "block";
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
      document.getElementById("white1").style.display="block";
      document.getElementById("white2").style.display="block";
      document.getElementById("white3").style.display="block";
    }
  
    else if(value == "black"){
      document.getElementById("blue1").style.display="none";
      document.getElementById("blue2").style.display="none";
      document.getElementById("black1").style.display="block";
      document.getElementById("black2").style.display="block";
      document.getElementById("orange1").style.display="none";
      document.getElementById("orange2").style.display="none";
      document.getElementById("orange3").style.display="none";
      document.getElementById("white1").style.display="none";
      document.getElementById("white2").style.display="none";
      document.getElementById("white3").style.display="none";
    }
  }

  function refresh(){
    window.open("./../pages/logoideas.html","_self");
  }