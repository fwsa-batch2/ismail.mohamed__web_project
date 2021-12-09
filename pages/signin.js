
        let list=[];
        function getData(){
          event.preventDefault();
          let username=document.getElementById("name").value;
          let pass=document.getElementById("pass").value;

          let lstorage=localStorage.getItem("signup");

          let store = JSON.parse(lstorage);

            for(let i=0; i<store.length; i++){
                if(store[i].username == username && store[i].password==pass){
                    alert( "Hi " +username+ ", Welcome to Smyle Designs ");
                    window.location.href="../index.html";
                }
                else{
                    alert("error");
                }
            }
        }




