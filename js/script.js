'script'
var ESC_KEYCODE = 27;
var ENT_KEYCODE = 13;

var inputSelect = document.querySelector('.form__input');
var listItem = document.querySelector('.form__list-item--current');

var formWrapp = document.querySelector('.form__wrapp');
var category = document.querySelector('.category');
var subcategory = document.querySelector('.subcategory');
var formBtn = document.querySelector('.form__btn');


var onWindowPressEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hiddenSelect();
  }
};

var onSubcategoryClick = function (evt) {
  getValue(evt);
  hiddenSelect();
  formBtn.disabled = false;
}

//открыть категории

var openCategory = function () {
  formWrapp.classList.remove('hidden');
  category.classList.remove('hidden');
  subcategory.classList.add('hidden');
  document.addEventListener('keydown', onWindowPressEsc);
}

//открыть субкатегории

var openSubcategory = function () {
  subcategory.classList.remove('hidden');
  subcategory.addEventListener('click', onSubcategoryClick);
}

//Спрятать категории и субкатегории

var hiddenSelect = function () {
  formWrapp.classList.add('hidden');
  document.removeEventListener('keydown', onWindowPressEsc);
}

//получить выбор в value инпута

var getValue = function (evt) {
  inputSelect.value = listItem.textContent + ': ' + evt.target.textContent;
  inputSelect.style.color = '#273748';
}

//обработчики открытия категории и субкатегории

inputSelect.addEventListener('click', function (evt) {
  openCategory(evt);
});

listItem.addEventListener('click', function (evt) {
  openSubcategory(evt);
});

// // вернуть значения к стандартным после отправки
// formBtn.addEventListener('click', function () {
//   inputSelect.value = "Категория";
//   formBtn.disabled = true;
// })



