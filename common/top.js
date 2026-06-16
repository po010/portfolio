window.addEventListener("DOMContentLoaded", () => {
  /* トップ */
  const paths = document.querySelectorAll("#name-svg path");

  paths.forEach((path) => {
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = "stroke-dashoffset 3s ease";
    path.style.strokeDashoffset = "0";
  });


  /* 上に戻るボタン */
  const pageTopBtn = document.getElementById('pageTop');

  window.addEventListener("scroll", () => {
    pageTopBtn.classList.toggle("show", window.scrollY > 800);
  });

  pageTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* ハンバーガーメニュー */
  const hamburger = document.getElementById('nav-toggle');
  const headNav = document.querySelector('.sp-nav');

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
      headNav.classList.remove('is-active')
    } else {
      hamburger.classList.add('is-active');
      headNav.classList.add('is-active')
    }
  });

  headNav.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active')
  });
});