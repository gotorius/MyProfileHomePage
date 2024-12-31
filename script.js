// script.js
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // ダークモード用のCSSを動的に変更
  const darkModeStyles = `
    body.dark-mode {
      background-color: #333;
      color: #fff;
    }
    body.dark-mode header {
      background-color: #222;
    }
    body.dark-mode footer {
      background-color: #222;
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = darkModeStyles;
  document.head.appendChild(styleSheet);
  