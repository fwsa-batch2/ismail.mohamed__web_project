let list = [];
function onLoad() {
  console.group("onLoad");
  let a = JSON.parse(localStorage.getItem("signup"));
  if (a != null) {
    list = a;
  }
  console.groupEnd();
}

onLoad();

function getData() {
  event.preventDefault();
  const username = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;
  let isuser=false;
  
  const store = JSON.parse(localStorage.getItem("signup"));
  for (let i = 0; i < store.length; i++) {

    if (store[i].username == username && store[i].password == pass) {
      isuser=true;
      break;
    } 

  }

  if(isuser){
    alert("Hi " + username + ", Welcome to Smyle Designs ");
      window.location.href = "../index.html";
  }

  else{
    alert("Invalid username or password");
    return null;
  }

}

function showpassword(){
  let pswd=document.getElementById("pass");

  if(pswd.type === "password"){
    pswd.type="text";
  }

  else{
    pswd.type="Password";
  }
}

