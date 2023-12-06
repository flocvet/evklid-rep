const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.nav__link');
const searchForm = document.querySelector('.search-form');
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');
  });
});



search.addEventListener('click',

  function () {

    searchForm.classList.toggle('search-form--active');

    searchBtn.classList.toggle('search-btn--active');

    closeBtn.classList.toggle('close-btn--active');

    search.classList.toggle('search--active');
  });


closeBtn.addEventListener('click', function () {

  searchForm.classList.remove('search-form--active');

  searchBtn.classList.remove('search-btn--active');

  closeBtn.classList.remove('close-btn--active');

  search.classList.remove('search--active');
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


const tabsBtn = document.querySelectorAll('.how__list-btn');
const tabsItem = document.querySelectorAll('.how__tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how__list-btn--active')});
    e.currentTarget.classList.add("how__list-btn--active");

    tabsItem.forEach(function(element){ element.classList.remove('how__tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__tabs-item--active');
  });
});

new Accordion('.accordion');
