

        let list=[];
        function getData(){
          event.preventDefault();
          let username=document.getElementById("name").value;
          let mail=document.getElementById("id").value;
          let pass=document.getElementById("pass").value;
          let cpass=document.getElementById("cpass").value;

        let obj = {
          "username":username,
          "mailid":mail,
          "password":pass,
          "confirmPassword":cpass,
        }

          list.push(obj);

          const string = JSON.stringify(list);

          localStorage.setItem("signup",string);
        
          checkPassword();

        }
        
        function checkPassword(){
          let pass=document.getElementById("pass").value;
          let cpass=document.getElementById("cpass").value;
          if( pass != cpass){
            document.getElementById("invalid").innerHTML="Those passwords didn't match, Try again."
          } 
          else{
          let username=document.getElementById("name").value;
            alert( "Hi " +username+ ", Welcome to Smyle Designs ")
            window.location.href="../index.html";

          }

        }


        function getItem(){

          let getLocal=localStorage.getItem("signup");
          let parse=JSON.parse(getLocal);
          if(parse){
            list=parse;
          }

        }
        getItem();

        function myFunction() {
          document.getElementById("demo").innerHTML;
        }

        myFunction();