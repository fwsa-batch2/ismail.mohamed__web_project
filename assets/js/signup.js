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

function getData(event) {

  event.preventDefault();

  let username = document.getElementById("name").value;
  let mail = document.getElementById("id").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  let check = already(mail);

  if (check) {
    document.getElementById("invalidmail").innerText =
      "This mail is already exist";
      return;
  }

  if (pass != cpass) {
    document.getElementById("invalidpass").innerText =
      "Those passwords didn't match, Try again.";

  } 
  
  else {
    let obj = {
      username: username,
      mailid: mail,
      password: pass,
      confirmPassword: cpass,
    };

    list.push(obj);



    let local = JSON.stringify(list);

    localStorage.setItem("signup", local);

    window.location.href = "./signin.html";
  }
}

function already(current) {
  let isExist = false;
  let len=list.length;
  for (let i = 0; i < len; i++) {

    if (current == list[i].mailid) {
      isExist = true;
      break;
    }
  }
  return isExist;

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