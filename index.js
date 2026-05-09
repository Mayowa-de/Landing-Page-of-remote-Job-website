document.addEventListener("DOMContentLoaded", () =>{

openBtn = document.getElementById("open-btn")
closeBtn = document.getElementById("close-btn")
sideBar =document.querySelector(".side-bar-container")
arrowDownBtn1 = document.getElementById("arrowDownBtn1")
arrowUpBtn1 = document.getElementById("arrowUpBtn1")
arrowDownBtn2 = document.getElementById("arrowDownBtn2")
arrowUpBtn2 = document.getElementById("arrowUpBtn2")
subFeature = document.getElementById("sublist-feature")
subCompany = document.getElementById("sublist-company")


openBtn.addEventListener("click", ()=>{
    sideBar.style.display= "flex"
    openBtn.style.display="none"
} )

closeBtn.addEventListener("click", ()=>{
    sideBar.style.display= "none"
    openBtn.style.display="flex"
} )
arrowDownBtn1.addEventListener("click", ()=>{
    subFeature.style.display= "flex"
    arrowUpBtn1.style.display="flex"
    arrowDownBtn1.style.display="none"
} )
arrowUpBtn1.addEventListener("click", ()=>{
    subFeature.style.display= "none"
    arrowDownBtn1.style.display="flex"
    arrowUpBtn1.style.display = "none"
} )
arrowDownBtn2.addEventListener("click", ()=>{
    subCompany.style.display= "flex"
    arrowUpBtn2.style.display="flex"
    arrowDownBtn2.style.display="none"
} )
arrowUpBtn2.addEventListener("click", ()=>{
    subCompany.style.display= "none"
    arrowDownBtn2.style.display="flex"
    arrowUpBtn2.style.display = "none"
} )

})