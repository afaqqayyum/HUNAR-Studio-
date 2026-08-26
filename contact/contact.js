    const menuBtn = document.querySelector("#menuBtn")
    const menu = document.querySelector("#menu")
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden")
    })

    // submit popup

    const popup = document.querySelector("#popup")
    const close=document.querySelector("#close")
    close.addEventListener("click", function() {
        popup.classList.add("hidden")
        contactForm.reset()
    })

    // form 

    const contactForm = document.querySelector("#contactForm")

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault()   
        console.log("form sumbitted")
        popup.classList.remove("hidden")

    })

