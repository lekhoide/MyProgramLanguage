// Method
var index = 0;
var dataLength = 0;
var idCarsousel = document.getElementById("carouselExampleControls");
var btnNext = document.querySelector(".carousel-control-next");
var btnPrev = document.querySelector(".carousel-control-prev");
var btnSubscribe = document.getElementById('btn-subscribe');

// Function Active Carouse and Active Firebase Hosting
function activeCarouse() {
  var myCarousel = new bootstrap.Carousel(idCarsousel, {
    interval: false,
    wrap: false,
  });
  var db = firebase.firestore();
  db.collection("data")
    .get()
    .then((querySnapshot) => {
        changeElement(querySnapshot.docs);
        dataLength = querySnapshot.docs.length;
    });
}

// Function Change Content Section
function changeElement(data) {
  var images = idCarsousel.firstElementChild;
  var captions = document.getElementById("caption-image");
  images.innerHTML = `
        <div class="carousel-item active">
            <img src="${data[index].data().src}" class="card-img-top d-block w-100" alt="${data[index].data().id}" style="height: 254px;">
        </div>`;
  var typewriter = new Typewriter(captions, {
    strings: `${data[index].data().caption}`,
    cursor: "&#128024;",
    delay: 25,
    deleteSpeed: "natural",
    loop: true,
    autoStart: true,
  });
  typewriter
    .typeString(` (<em>${data[index].data().id + 1}/${data.length}</em>).`)
    .pauseFor(3500)
    .start();
}

// Function Next Img and Caption
function buttonNext() {
  ++index;
  if (index == dataLength) {
    this.setAttribute("disabled", "disabled");
    return -1;
  }
  if (btnPrev.hasAttribute("disabled")) {
    btnPrev.removeAttribute("disabled");
  }
  activeCarouse();
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
  activeCarouse();
}

function writeEmail() {
  var inputEmail = document.getElementById("inputEmail");
  if(inputEmail.value == '') {
    return -1;
  }
  var newEmail = { email: inputEmail.value };
  var db = firebase.firestore();
  db.collection("subscribe")
    .add(newEmail)
    .then(function(docRef) {
      return docRef.get();
    })
    .then(function(snap) {
      inputEmail.value = '';
    });
}

// Event Listener
btnNext.addEventListener("click", buttonNext);
btnPrev.addEventListener("click", buttonPrev);
btnSubscribe.addEventListener("click", writeEmail);
document.addEventListener("DOMContentLoaded", activeCarouse);
