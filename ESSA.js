// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// })

var readMoreBtn1 = document.querySelector(".read-more-btn1");
var text1 = document.querySelector(".text1");

readMoreBtn1.addEventListener("click", (e) => {
  text1.classList.toggle("show-more1");
  if (readMoreBtn1.innerText === "Read More") {
    readMoreBtn1.innerText = "Read Less";
  } else {
    readMoreBtn1.innerText = "Read More";
  }
});

var readMoreBtn2 = document.querySelector(".read-more-btn2");
var text2 = document.querySelector(".text2");

readMoreBtn2.addEventListener("click", (e) => {
  text2.classList.toggle("show-more2");
  if (readMoreBtn2.innerText === "Read More") {
    readMoreBtn2.innerText = "Read Less";
  } else {
    readMoreBtn2.innerText = "Read More";
  }
});
var readMoreBtn3 = document.querySelector(".read-more-btn3");
var text3 = document.querySelector(".text3");

readMoreBtn3.addEventListener("click", (e) => {
  text3.classList.toggle("show-more3");
  if (readMoreBtn3.innerText === "Read More") {
    readMoreBtn3.innerText = "Read Less";
  } else {
    readMoreBtn3.innerText = "Read More";
  }
});

var readMoreBtn5 = document.querySelector(".read-more-btn5");
var text5 = document.querySelector(".text5");

readMoreBtn5.addEventListener("click", (e) => {
  text5.classList.toggle("show-more5");
  if (readMoreBtn5.innerText === "Read More") {
    readMoreBtn5.innerText = "Read Less";
  } else {
    readMoreBtn5.innerText = "Read More";
  }
});
var readMoreBtn6 = document.querySelector(".read-more-btn6");
var text6 = document.querySelector(".text6");

readMoreBtn6.addEventListener("click", (e) => {
  text6.classList.toggle("show-more6");
  if (readMoreBtn6.innerText === "Read More") {
    readMoreBtn6.innerText = "Read Less";
  } else {
    readMoreBtn6.innerText = "Read More";
  }
});
var readMoreBtn4 = document.querySelector(".read-more-btn4");
var text4 = document.querySelector(".text4");

readMoreBtn4.addEventListener("click", (e) => {
  text4.classList.toggle("show-more4");
  if (readMoreBtn4.innerText === "Read More") {
    readMoreBtn4.innerText = "Read Less";
  } else {
    readMoreBtn4.innerText = "Read More";
  }
});




