function input(event) {
    event.preventDefault();

    let todo = document.getElementById("todo").value;

    let formData={
        todo:todo,
        
    };

    console.log("FormData" , formData);
};

document.addEventListener('DOMContentLoaded',function(){
const inputForm =document.getElementById('inputForm');
inputForm.addEventListener('submit',input)

});

    
