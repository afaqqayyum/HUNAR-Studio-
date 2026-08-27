const menubtn=document.querySelector("#menubtn")
const menu=document.querySelector("#menu")
menubtn.addEventListener("click",function(){
    menu.classList.toggle("hidden")
})

// Testimonial 

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const dots = document.querySelectorAll(".dot")

const testimonialText = document.querySelector("#testimonialText")
const testimonialAuthor = document.querySelector("#testimonialAuthor")

// testimonials array

const testimonials = [
    {
        text: "HUNAR Studio understood our vision and turned it into a website that feels exactly right for our brand.",
        author: "— Hamza R., Noura"
    },
    {
        text: "The whole process was smooth, creative, and professional. We loved the final visual direction.",
        author: "— Sara M., Riwaq"
    },
    {
        text: "Clean design, great attention to detail, and a fresh digital experience from start to finish.",
        author: "— Usman K., Creative Business"
    }
]

let currentIndex = 0
function showTestimonial() {

    testimonialText.innerText = testimonials[currentIndex].text

    testimonialAuthor.innerText = testimonials[currentIndex].author

    dots.forEach(function(dot, index) {

        if (index === currentIndex) {
            dot.classList.remove("bg-gray-300")
            dot.classList.add("bg-black")
        } else {
            dot.classList.remove("bg-black")
            dot.classList.add("bg-gray-300")
        }

    })

}

// nextbtn click event

nextBtn.addEventListener("click", function () {

    currentIndex++

    if (currentIndex >= testimonials.length) {
        currentIndex = 0
    }

    showTestimonial()

})

// prevbtn click event

prevBtn.addEventListener("click", function () {

    currentIndex--

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1
    }

    showTestimonial()

})


// FAQ

const questions = document.querySelectorAll(".faq-question")

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = question.nextElementSibling
        const icon = question.querySelector(".faq-icon")

        answer.classList.toggle("hidden")

        if (answer.classList.contains("hidden")) {
            icon.innerText = "+"
        } else {
            icon.innerText = "−"
        }

    })

})