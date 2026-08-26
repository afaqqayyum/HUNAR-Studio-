const menubtn=document.querySelector("#menubtn")
const menu=document.querySelector("#menu")
menubtn.addEventListener("click",function(){
    menu.classList.toggle("hidden")
})

const projectModal = document.querySelector(".projectmodel")
const modalTitle = document.querySelector(".modeltitle")
const modalText = document.querySelector(".modeltext")
const closeModal = document.querySelector(".closemodel")

const nourabtn=document.querySelector(".nourabtn")
const riwaqbtn=document.querySelector(".riwaqbtn")

nourabtn.addEventListener("click",function(e){
    e.preventDefault()
    modalTitle.innerText="Noura"
    modalText.innerText = "A clean digital experience created for a modern lifestyle brand."
    projectModal.classList.remove("hidden")

})

riwaqbtn.addEventListener("click", function (e) {

    e.preventDefault();
    modalTitle.innerText = "Riwaq"
    modalText.innerText = "A refined visual identity created for a creative business."

    projectModal.classList.remove("hidden")

});
closeModal.addEventListener("click", function () {

    projectModal.classList.add("hidden")

});

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
