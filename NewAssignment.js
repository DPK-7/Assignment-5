function register(event) {
    event.preventDefault();

    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let formData={
        Name:Name,
        email:email,
        password:password
    };

    console.log(formData);
};

document.addEventListener('DOMContentLoaded',function(){
const registerForm =document.getElementById('registerForm');
registerForm.addEventListener('submit',register)

});

    
