
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

