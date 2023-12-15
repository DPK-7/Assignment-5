async function register(event) {
    event.preventDefault();

    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let formData={
        username,
        email,
        password
    };

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    await fetch("http://localhost:3000/users/register",options).then(res=>res.json()).then(data=>{
        console.log('data: ', data);
        if(data?.UserName){
            document.getElementById("registerForm").reset();
            window.alert(`User registered successfully`);

        }

    })

    console.log(formData);
};

document.addEventListener('DOMContentLoaded',function(){
const registerForm =document.getElementById('registerForm');
registerForm.addEventListener('submit',register)

});

    
