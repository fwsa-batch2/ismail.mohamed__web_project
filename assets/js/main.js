
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

function addDesign(){
  let getLs=JSON.parse(localStorage.getItem("details"));
  let lsLen=getLs.length;
  let emty="";

  for(let i=0; i<lsLen; i++ ){
    let index=getLs[i];
    let prnt=`<div class="newly">
               <img src="${index.image}" alt="smile designs logo" class="img-1" />
                <div class="img-over">
                 <div class="img-title">${index.titleName}</div>
                  <p class="img-des">${index.category}</p>
              </div>
                <div>
                  <img src="./assets/img/pro3.png" alt="profile pic" id="prof">
                  <label>${index.designerName}</label>
                </div>
              </div>`
    emty=emty+prnt;
  }
  document.getElementById("added").innerHTML=emty;

}

addDesign();