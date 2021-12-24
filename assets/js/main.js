
function search(){
  let searchbar=document.getElementById("find").value;

  if("logo ideas" == searchbar){
    window.open('./pages/logoideas.html')
  }
  else if("cake forest" == searchbar){
    window.open('./pages/cakeforest.html')
  }
  
  else{
    alert("Invalid keyword")
  }
}