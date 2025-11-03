// CARDS SECTION LOGIC


let slider = document.getElementById("slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let currentIndex = 0;

next.addEventListener("click",()=>{
   if(currentIndex == 0){
       currentIndex = 4;
        btnOpen()
   } else if(currentIndex == 4){
        currentIndex = 6;
   } else {
      currentIndex = 6;
   }

   updateCard();

})



 function updateCard(){
    let cardWidth = slider.querySelector("div").offsetWidth;
    slider.style.transform = `translateX(-${cardWidth*currentIndex}px)`;
 }


 function btnOpen(){
  let prevBtn = document.createElement("button");
  let img = document.createElement("img");
  let btnBox = document.getElementById("btnBox");
  img.src = "img/left.svg";
  prevBtn.classList.add("absolute", "left-30", "top-10", "w-[24px]", "h-[120px]", "bg-[#ffffff1a]", "hover:bg-[#ffffff3a]", "pointer", "border-none", "rounded-md");
  prevBtn.prepend(img);
  btnBox.prepend(prevBtn);
  

  prevBtn.addEventListener("click",()=>{
   if(currentIndex == 6){
       currentIndex = 4;
   } else if(currentIndex == 4){
        currentIndex = 0;
        btnBox.removeChild(prevBtn);
   } else {
      currentIndex = 0;
   }

   updateCard();

})

 }




// FAQ Section Logic

 function faqtoggle(button){
   const answer = button.nextElementSibling;
   const plusIcon = button.querySelector(".plus");
   const crossIcon = button.querySelector(".cross");

  
               
   answer.classList.toggle("hidden");
   plusIcon.classList.toggle("hidden");
   crossIcon.classList.toggle("hidden");
 }

// GET STARTED BUTTON LOGIC (New Function)
function checkEmailAndRedirect(inputId) {
    const emailInput = document.getElementById(inputId);
    const emailValue = emailInput.value.trim();

    if (emailValue.length > 0) {
        // Simple check: if not empty, redirect to the payment page
        window.location.href = 'payment.html';
    } else {
        // Optional: Add visual feedback (like a red border or an alert) for empty input
        emailInput.placeholder = "Email is required!";
        emailInput.classList.add("border-red-500", "placeholder-red-500");
        setTimeout(() => {
            emailInput.placeholder = "Email address";
            emailInput.classList.remove("border-red-500", "placeholder-red-500");
        }, 3000);
    }
}