// SLIDESHOW //

let slideIndex = 0;

let arrows = document.getElementById("arrows");

// Buttons //

const leftBtn = document.getElementById("backBtn");

const rightBtn = document.getElementById("forwardBtn");

// NEXT & PREVIOUS CONTROLS //

const plusSlides = (n) => {
    showSlides(slideIndex += n)
}

// THUMBNAIL IMAGE CONTROLS //

const currentSlide = (n) => {
    showSlides(slideIndex = n)
}

const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll('.image');
    let dots = document.getElementsByClassName('fa fa-circle');

    if(n > slides.length){slideIndex = n};

    if(n < 1){slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //for(i = 0; i < slides.length; i++){
    //    slides[i].style.display = "none";
    //}
    //slideIndex++;
    //if (slideIndex > slides.length) {slideIndex = 1}
    //slides[slideIndex-1].style.display = "block";
    // setTimeout(showSlides, 6000); // Change image every 6 seconds

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
}

plusSlides();
currentSlide();
showSlides(n);


    // NEXT BUTTON //
    //rightBtn.addEventListener('click', (e) => {
    //    if(e.target.value === rightBtn){
    //    }
    // })
    

    // BACK BUTTON //
    //  leftBtn.addEventListener('click', (e) => {
    //    if(e.target.value === leftBtn){
    //  }
    //})