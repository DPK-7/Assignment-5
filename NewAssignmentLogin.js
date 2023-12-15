async function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    

    let formData={
        username,
        password,

        
    };
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      await fetch("http://localhost:3000/users/login",options).then(res=>res.json()).then(data=>{
          console.log('data: ', data);
          if(data?.UserName){
              document.getElementById("loginform").reset();
              window.location.href = "./NewAssignmentInput.html"
              localStorage.setItem("user", JSON.stringify(data))
  
          }
  
      })

    console.log("FormData" , formData);
};

document.addEventListener('DOMContentLoaded',function(){
const loginform =document.getElementById('loginform');

console.log("loginForm", loginform)
loginform?.addEventListener('submit',login)

});

    
