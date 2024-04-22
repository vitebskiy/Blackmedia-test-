// burger

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.body;
const navItems = nav.querySelectorAll('a')

burger.addEventListener("click", () => {
  body.classList.toggle('stop-scroll')
  burger.classList.toggle('burger--active')
  nav.classList.toggle('nav--active')
});

navItems.forEach(element => {
  element.addEventListener('click', () => {
    body.classList.remove('stop-scroll')
    burger.classList.remove('burger--active')
    nav.classList.remove('nav--active')
  })
});



// Selector
const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach((select) => {
  const selectSelected = select.querySelector('.select-selected');
  const selectArrow = select.querySelector('.select-arrow');
  const selectItems = select.querySelector('.select-items');

  selectSelected.addEventListener('click', function () {
    if (selectItems.style.display === 'block') {
      selectItems.style.display = 'none';
      selectArrow.style.backgroundImage = 'url(../img/arrow.svg)';
      selectSelected.style.backgroundColor = '#fff';
      selectSelected.style.color = '#000';
    } else {
      selectItems.style.display = 'block';
      selectArrow.style.backgroundImage = 'url(../img/arrow-up.svg)';
      selectSelected.style.backgroundColor = '#3D4050';
      selectSelected.style.color = '#fff';

      customSelects.forEach((select) => {
        select.style.border = '1px solid #3D4050';
      });
    }
  });

  selectItems.querySelectorAll('div').forEach((item) => {
    item.addEventListener('click', function () {
      selectSelected.innerText = item.innerText;
      selectItems.style.display = 'none';
      selectArrow.innerHTML = '&#9660;';
      selectSelected.style.backgroundColor = '#fff';
      selectSelected.style.color = '#000';

      select.dataset.value = item.getAttribute('data-value');
    });
  });

  document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
      selectItems.style.display = 'none';
      selectArrow.innerHTML = '&#9660;';
      selectSelected.style.backgroundColor = '#fff';
      selectSelected.style.color = '#000';
    }
  });
});

// ranger
let range = document.querySelector('.form__range');
let rangeNum = document.querySelector('.value');
range.oninput = function () {
  rangeNum.innerHTML = this.value;
};
