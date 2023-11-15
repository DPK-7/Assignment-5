function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    let formData={
        email:email,
        password:password,

        
    };

    console.log("FormData" , formData);
};

document.addEventListener('DOMContentLoaded',function(){
const loginform =document.getElementById('loginform');

console.log("loginForm", loginform)
loginform?.addEventListener('submit',login)

});

    
