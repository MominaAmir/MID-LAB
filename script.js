var input = document.getElementById("input");
var todo = document.querySelector(".todos");

btn.addEventListener('click' ,function(){ 
  if (input.value == "") {
    alert("ENTER SOME TEXT");
  } else {
    var newtask = document.createElement("li");
    var newtask1 = document.createElement("p");
    newtask.innerHTML = input.value;
    newtask1.innerHTML = "DELETE";
    newtask1.style.cursor = 'pointer';
    todo.appendChild(newtask);
    todo.appendChild(newtask1);
    newtask1.addEventListener("click", function(){
      newtask.remove();
      newtask1.remove();
    });
    const textElement = newtask;
    textElement.addEventListener("click", function () {
      textElement.classList.toggle("underlined");
    });
  }
});
