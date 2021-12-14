

        let list=[];
        function getData(){
          event.preventDefault();
          const username=document.getElementById("name").value;
          const mail=document.getElementById("id").value;
          const pass=document.getElementById("pass").value;
          const cpass=document.getElementById("cpass").value;

        const obj = {
          "username":username,
          "mailid":mail,
          "password":pass,
          "confirmPassword":cpass
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
            window.location.href="signin.html";

          }

        }

        function myFunction() {
          document.getElementById("invalid").innerHTML;
        }

        myFunction();
