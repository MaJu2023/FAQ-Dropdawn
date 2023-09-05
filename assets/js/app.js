
let expandArr = document.querySelectorAll(".expand");
let answerArr = document.querySelectorAll(".answer");

answerArr.forEach(answer=> {
    answer.setAttribute("hidden", true);
});

expandArr = Array.from(expandArr);

expandArr.forEach(expand => {
    expand.addEventListener("click", function(){
        const posicion = expandArr.indexOf(expand);
        answerArr[posicion].toggleAttribute("hidden");
    });
});






