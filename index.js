var landingButton = document.querySelector(".brand"),
    worksButtons = document.querySelectorAll(".works-link"),
    contactButtons = document.querySelectorAll(".contact-link"),
    contact = document.querySelector(".contact"),
    works = document.querySelector('.works'),
    landing = document.querySelector('.landing');

landingButton.addEventListener("click", showLanding);

worksButtons.forEach(function(worksButton) {
    worksButton.addEventListener("click", showWorks);
});

contactButtons.forEach(function(contactButton) {
    contactButton.addEventListener("click", showContact);
});

function showLanding(e) {
    if(e.target.classList.contains("brand")) {
        //console.log("active");
        works.classList.remove("active");
        contact.classList.remove("active");
        landing.classList.add("active");
    }
}

function showWorks(e) {
    if(e.target.classList.contains("works-link")) {
        //console.log("active");
        landing.classList.remove("active");
        contact.classList.remove("active");
        works.classList.add("active");
        //console.log(works);
    }
}

function showContact(e) {
    if(e.target.classList.contains("contact-link")) {
        //console.log("active");
        landing.classList.remove("active");
        works.classList.remove("active");
        contact.classList.add("active");
        //console.log(contact);
    }
}