let button = document.querySelectorAll(".button");
let input = document.querySelector(".input");
window.onload = () => {
  input.focus();
};
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    let s = e.target.innerHTML;
    if (s == "C") {
      s = "";
      input.value = s;
    }
    else if (s == "D") {
      s = input.value.slice(0, -1);
      input.value = "";
      input.value = s;
    }
    else if (s == "=") {
      try {
        input.value = eval(input.value);
      }
      catch (err) {
        input.value = "Invalid Input"
        setTimeout(()=>{
          input.value = "";
      },2000)}
    }
      else if(s == "X"){
        s = "*";
        input.value = input.value + s;
      }
    else
      input.value = input.value + s;
  });
  
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      try {
        input.value = eval(input.value);
      } catch (err) {
        input.value = "Invalid Input";
        setTimeout(() => {
          input.value = "";
        }, 2000);
      }
    }
    else if (e.key === "Backspace") {
       s = input.value.slice(0, -1);
      input.value = "";
      input.value = s;
    }
  });
});