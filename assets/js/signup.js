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
  // console.group("getdata");
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
    return;
  } 
  
  else {
    let obj = {
      username: username,
      mailid: mail,
      password: pass,
      confirmPassword: cpass,
    };

    list.push(obj);

    // console.log(list);

    let local = JSON.stringify(list);

    localStorage.setItem("signup", local);

    window.location.href = "./signin.html";
  }
}

function already(current) {
  let isExist = false;

  for (i = 0; i < list.length; i++) {
    // console.table(list[i]);
    if (current == list[i].mailid) {
      isExist = true;
      break;
    }
  }
  return isExist;

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