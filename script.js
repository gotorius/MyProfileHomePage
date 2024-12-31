// ダークモード切替
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// プロジェクトのスライダー機能
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // 自動でスライドを切り替え

// 最初のスライドを表示
showSlide(currentSlide);

// お問い合わせフォームの送信
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('メッセージが送信されました');
});