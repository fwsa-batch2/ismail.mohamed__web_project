        let list=[];
        function getData(){
          event.preventDefault();
          const username=document.getElementById("name").value;
          const mail=document.getElementById("id").value;
          const pass=document.getElementById("pass").value;
          const cpass=document.getElementById("cpass").value;

          let local=localStorage.getItem("signup");

          let parse=JSON.parse(local);


          let already=false;

          for(i=0; i<parse.length; i++){
            let vanganum=parse[i].mailid;
            if(mail==vanganum){
              already=true;
              break;
            }

          }
          if(already){
            alert("Mail ID already exist")
            
          }


        const obj = {
          "username":username,
          "mailid":mail,
          "password":pass,
          "confirmPassword":cpass
        }
        
          if(pass != cpass){
            document.getElementById("invalid").innerText="Those passwords didn't match, Try again."
            return;
          }

          list.push(obj);

          const string = JSON.stringify(list);

          localStorage.setItem("signup",string);
        
          window.location.href="./signin.html"


        }
        

        function myFunction() {
          document.getElementById("invalid").innerText;
        }

        myFunction();

        function onLoad(){
          let a=JSON.parse(localStorage.getItem("signup"));
          if(a != null){
            list=a;
          }
          else{
            list=[];
            localStorage.setItem("signup",JSON.stringify(list));
          }
          return list;
        }
        
        onLoad();
