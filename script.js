var button = document.getElementById("butt");
var isPurple = false;

// button.addEventListener("click", buttonColorChange);

// function buttonColorChange() {
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// }; 

                        // orrrrrrr

button.addEventListener("click", buttonToggle)

function buttonToggle(){
    document.body.classList.toggle("purple")
}