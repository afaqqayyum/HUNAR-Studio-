const menu=document.querySelector("#menu")
const menubtn=document.querySelector("#menubtn")
menubtn.addEventListener("click",function(){
    menu.classList.toggle("hidden")
})

// Services Tabs

const webTab = document.querySelector("#webTab")
const uiTab = document.querySelector("#uiTab")
const brandTab = document.querySelector("#brandTab")

const webContent = document.querySelector("#webContent")
const uiContent = document.querySelector("#uiContent")
const brandContent = document.querySelector("#brandContent")

// Web Design Tab
webTab.addEventListener("click", function() {

    webContent.classList.remove("hidden")
    uiContent.classList.add("hidden")
    brandContent.classList.add("hidden")

    webTab.classList.add("bg-black", "text-white")
    uiTab.classList.remove("bg-black", "text-white")
    brandTab.classList.remove("bg-black", "text-white")

})

// UI/UX Tab
uiTab.addEventListener("click", function() {

    uiContent.classList.remove("hidden")
    webContent.classList.add("hidden")
    brandContent.classList.add("hidden")

    uiTab.classList.add("bg-black", "text-white")
    webTab.classList.remove("bg-black", "text-white")
    brandTab.classList.remove("bg-black", "text-white")

})

// Brand Identity Tab
brandTab.addEventListener("click", function() {

    brandContent.classList.remove("hidden")
    webContent.classList.add("hidden")
    uiContent.classList.add("hidden")

    brandTab.classList.add("bg-black", "text-white")
    webTab.classList.remove("bg-black", "text-white")
    uiTab.classList.remove("bg-black", "text-white")

})

// Check selected tab from URL

const params = new URLSearchParams(window.location.search)
const selectedTab = params.get("tab")

if (selectedTab === "ui") {
    uiTab.click()
}

if (selectedTab === "brand") {
    brandTab.click()
}