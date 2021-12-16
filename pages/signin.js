        let list=[];
        function getData(){
          event.preventDefault();
          const username=document.getElementById("name").value;
          const pass=document.getElementById("pass").value;


          const store = JSON.parse(localStorage.getItem("signup"));

            for(let i=0; i<store.length; i++){
                if(store[i].username == username && store[i].password==pass){
                    alert( "Hi " +username+ ", Welcome to Smyle Designs ");
                    window.location.href="../index.html";
                    break;
                }
                
                else{
                    alert("Invalid username or password");
                    break;  
                }
            }
        }
