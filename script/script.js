/* Для меню бургера на телефонах, планшетах*/

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navinks = document.getElementById("navinks");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navinks.classList.toggle("active");
    overlay.classList.toggle("active");

    // Блокировка прокрутки при открытом меню
    if (navinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Закрытие меню при клике на оверлей

  overlay.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navinks.classList.remove("active");
    this.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Закрытие меню при клике на пункт меню (для мобильных)
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navinks.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});

// Ждем полной загрузки страницы

window.addEventListener("load", function () {
  // Добавляем небольшую задержку для плавности
  setTimeout(function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("hidden");

    // Удаляем прелоадер из DOM после анимации
    setTimeout(function () {
      preloader.remove();
    }, 500);
  }, 1000);
});

//     document.getElementById('hamburger').addEventListener('click', function() {
//     classList.toggle('active');
//     document.querySelector('.nav-links').classList.toggle('active');
// });
