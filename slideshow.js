let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  let divs = document.querySelector('.news-container').querySelectorAll('div');
  let headlines = [];
  divs.forEach(div => {
    div.querySelectorAll('a').forEach(element => {
      headlines.push(element);
    });
  })

  let index = 0;
  headlines.forEach(element => {
    if (index == slideIndex - 1) {
      element.className = "yellow-border";
      console.log(index, slideIndex, element, element.className)
    }
    else {
      element.className = "";
    }
    index++;
  });
}