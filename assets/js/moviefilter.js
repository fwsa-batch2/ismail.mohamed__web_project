function filter(value){
  console.log(value)
  document.getElementById("flex").style.display="flex";
  

    if(value == "green"){
      document.getElementById("yellow").style.display = "none";
      document.getElementById("green").style.display = "block";
      document.getElementById("black").style.display = "none";
    }
  
    else if(value == "yellow"){
      document.getElementById("green").style.display = "none";
      document.getElementById("yellow").style.display = "block";
      document.getElementById("black").style.display = "none";
    }

    else if(value == "black"){
      document.getElementById("yellow").style.display = "none";
      document.getElementById("black").style.display = "block";
      document.getElementById("green").style.display = "none";
    }
  
  
  
  
  
  }