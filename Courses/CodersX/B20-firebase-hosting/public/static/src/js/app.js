// data
var data = [
    {
        id: 0,
        caption: `Gửi em Đậu hũ, chúc mừng sinh nhật nhá. Em Đậu có vẻ rất thích rất thích biệt danh này nhỉ 😊,\
        và thấy trang Website này thế nào, nhìn vậy mà tốn vài tuần nghĩ ra Idea rồi vài đêm Coding đấy.\
        Nhấp mũi tên bên phải bức ảnh, để qua trang nhé`,
        src: 'https://i.pinimg.com/564x/7b/9f/8b/7b9f8bb97d72f3f17329ecad5f17de78.jpg'
    },
    {
        id: 1,
        caption: 'Nhắm mắt thấy mùa hè, em Đậu thích phim này mà nhỉ. Tớ không thể mua được bộ phim nhưng có thể mua bài nhạc phim em Đậu thích.\
        Ngầu chưa! rụng tim cha-lá-cà chưa (hzz đang lẩm bẩm không bao giờ chứ gì 😌)\
        Nhấp vào <a href="https://drive.google.com/drive/folders/1-7Qtvp9MD0EwAY9r1MT1FK2twYZAMxdF?usp=sharing" target="_blank">đây</a> nhận Ablum <strong>Điều Vô Lý Thứ Nhất</strong> của chị <em>Nguyên Hà</em> nhé',
        src: 'https://i.pinimg.com/564x/fe/2b/f0/fe2bf0a65b5dac2f51c89a21b9cd1108.jpg'
    },
    {
        id: 2,
        caption: 'Điều cuối cùng, tớ thường không chúc mừng cho bố mẹ mình lẫn bạn bè dù thân và cả .............\
        bản thân mình vào ngày sinh nhật. Chỉ mong hôm nay, em Đậu được ăn bánh sinh nhật và có gia đình bạn bè chung vui cùng em.\
        Vì hôm nay em Đậu đã được 23 tuổi rồi cơ đấy 🤭.\
        Bye từ LKD - 18/10/2021',
        src: 'https://i.pinimg.com/564x/74/eb/c0/74ebc0c468ea1865a7f2674f2bef8c4b.jpg'
    }
];

// Method
var index = 0;
var idCarsousel = document.getElementById('carouselExampleControls');
var btnNext = document.querySelector('.carousel-control-next');
var btnPrev = document.querySelector('.carousel-control-prev');

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
        delay: 50,
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

// Event Listener
btnNext.addEventListener('click', buttonNext);
btnPrev.addEventListener('click', buttonPrev);
document.addEventListener('DOMContentLoaded', activeCarouse);