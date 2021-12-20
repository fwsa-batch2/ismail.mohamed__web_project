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

  const store = JSON.parse(localStorage.getItem("signup"));
  for (i = 0; i < store.length; i++) {

    // console.log(store.length);
    // console.log(store[i].username);
    // console.log( store[i].pass);

    // console.log(store[i].username) 
    // console.log(store[i].password) 

    // console.log(username)
    // console.log(pass)


    if (store[i].username == username && store[i].password == pass) {
      alert("Hi " + username + ", Welcome to Smyle Designs ");
      window.location.href = "../index.html";
      return;
    } 
    
    else {
      alert("Invalid username or password");
    
    }
    
  }



}

function showpassword(){
  let pswd=document.getElementById("pass");
  // let show=document.getElementById("cpass");

  if(pswd.type === "password"){
    pswd.type="text";
  }
  else{
    pswd.type="Password";
    

  }
}
