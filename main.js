const icon = document.querySelector(".enable")
const svg = document.querySelector(".svg-toggle")
const btn = document.querySelector(".icon-holder")

btn.getAttribute("data-visible")

btn.addEventListener("click", (e) => {
    
    if(icon.classList.contains("enable")){
        btn.setAttribute("data-visible", true)
        svg.classList.remove("svg-toggle")
        icon.classList.remove("enable")
        bg.classList.remove()
    }
    
    else{
        btn.setAttribute("data-visible", false)
        svg.classList.add("svg-toggle")
        icon.classList.add("enable")
    }

      
  
    
})


