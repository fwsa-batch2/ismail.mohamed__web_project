
function search(){
  let searchbar=document.getElementById("find").value;

  if("logo ideas" == searchbar){
    window.open('./../pages/logoideas.html',"_self")
  }
  else if("movie posters" == searchbar){
    window.open('./../pages/movieposters.html',"_self")
  }
  
  else{
    alert("Invalid keyword")
  }
}

function addDesign(){
  let getLs=JSON.parse(localStorage.getItem("DETAILS"));
  let lsLen=getLs.length;
  let emty="";

  for(let i=0; i<lsLen; i++ ){
    let index=getLs[i];
    emty +=`<a href="../pages/preview.html" ><div class="newly">               
               <img src="${index.thumb}" alt="smile designs logo" class="img-1" >
                <div class="img-over">
                 <div class="img-title">${index.titleName}</div>
                  <p class="img-des">${index.category}</p>
              </div>
              </a>
                <div>
                  <img src="./../assets/img/pro3.png" alt="profile pic" id="prof">
                  <p style="margin-left: 40px; margin-top: -26px;">Ismail_smile</p>
                </div>
              </div>`
  }
  document.getElementById("added").innerHTML=emty;
}
addDesign();