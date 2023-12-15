async function input(event) {
    event.preventDefault();

    let todo = document.getElementById("todo").value;
    let user = JSON.parse(localStorage.getItem("user")??{})
    let formData={
        todoDescription:todo,
        UserId: user.UserId
    };

    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      await fetch("http://localhost:3000/todos/add-todo",options).then(res=>res.json()).then(data=>{
          console.log('data: ', data);
          if(data?.success){
              document.getElementById("inputForm").reset();
            //   window.alert(`Todo added successfully`);

            document.getElementById("list").appendChild(addListItem(formData));
          }
  
      })

    console.log("FormData" , formData);
};

const addListItem = (newItem)=>{
    document.getElementById("no-list")?.remove()
    const li = document.createElement("li");
    li.innerHTML = newItem.todoDescription;
    li.classList.add("listItem")
    return li;
}
document.addEventListener('DOMContentLoaded',async function(){
const inputForm =document.getElementById('inputForm');
inputForm.addEventListener('submit',input)
let user = JSON.parse(localStorage.getItem("user"))

await fetch(`http://localhost:3000/todos/get-todo-by-userId/${user.UserId}`).then(res=>res.json()).then(data=>{
    if(data.length>0){
        
        data.map(listItem=>{
            document.getElementById("list").appendChild(addListItem(listItem))
        })
    }else{
        const li = document.createElement("li");
        li.classList.add("listItem")
        li.setAttribute("id", "no-list")
    li.innerHTML ="No todos found for this user please add one to see...";
        document.getElementById("list").appendChild(li)
    }
})

});

    
