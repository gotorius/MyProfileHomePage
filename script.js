// ダークモードの切替
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // ダークモードの状態をlocalStorageに保存
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

// ページ読み込み時にダークモードの状態を適用
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
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

// 自動でスライドを切り替え
setInterval(nextSlide, 5000);

// 最初のスライドを表示
showSlide(currentSlide);

// スライドのナビゲーションボタン
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('prev-slide').addEventListener('click', prevSlide);

// お問い合わせフォームの送信
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // フォームの入力チェック
    if (!name || !email || !message) {
        alert('すべてのフィールドを入力してください');
        return;
    }

    // メッセージが送信されたときの処理
    alert('メッセージが送信されました');
});
