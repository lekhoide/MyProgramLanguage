// data
var data = [
    {
        id: 0,
        caption: ``,
        src: 'https://i.pinimg.com/564x/4a/cd/42/4acd42d63bcf5d883c939f24644348e9.jpg'
    }
];

// Method
var index = 0;
var idCarsousel = document.getElementById('carouselExampleControls');
var btnNext = document.querySelector('.carousel-control-next');
var btnPrev = document.querySelector('.carousel-control-prev');
var btnSubscribe = document.getElementById('btn-subscribe');

// Function Active Carouse
function activeCarouse() {
    var myCarousel = new bootstrap.Carousel(idCarsousel, {
        interval: false,
        wrap: false
    });
    changeElement();
}

// Function Change Content Section
function changeElement() {
    var images = idCarsousel.firstElementChild;
    var captions = document.getElementById('caption-image');
    images.innerHTML = `
        <div class="carousel-item active">
            <img src="${data[index].src}" class="card-img-top d-block w-100" alt="${data[index].id}" style="height: 254px;">
        </div>`
    var typewriter = new Typewriter(captions, {
        strings: `${data[index].caption}`,
        cursor: '&#128024;',
        delay: 25,
        deleteSpeed: 'natural',
        loop: true,
        autoStart: true
    });
    typewriter
        .typeString(` (<em>${data[index].id + 1}/${data.length}</em>).`)
        .pauseFor(3500)
        .start();
}

// Function Next Img and Caption
function buttonNext() {
    ++index;
    if (index == data.length) {
        this.setAttribute("disabled", "disabled");
        return -1;
    }
    if (btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
    }
    activeCarouse()
}

// Function Prev Img and Caption
function buttonPrev() {
    --index;
    if (index < 0) {
        this.setAttribute("disabled", "disabled");
        return -1;
    }
    if (btnNext.hasAttribute("disabled")) {
        btnNext.removeAttribute("disabled");
    }
    activeCarouse()
}

function writeEmail() {
    var inputEmail = document.getElementById("inputEmail");
    console.log(inputEmail.value);
}

// Event Listener
btnNext.addEventListener('click', buttonNext);
btnPrev.addEventListener('click', buttonPrev);
btnSubscribe.addEventListener("click", writeEmail);
document.addEventListener('DOMContentLoaded', activeCarouse);