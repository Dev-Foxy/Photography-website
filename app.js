const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const btnUp = document.querySelector(".btn-up")
const btnDown = document.querySelector(".btn-down")

btnUp.addEventListener("click", () =>{
    page1.classList.add("up")
    page1.classList.remove("down")
})
btnDown.addEventListener("click", () =>{
    page1.classList.add("down")
    page1.classList.remove("up")
})