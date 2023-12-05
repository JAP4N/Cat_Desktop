let CloseOpenForm = document.querySelector('.button-form-hostle'),
    FormHostel = document.querySelector('.form-hostel'),
    SearchForm =  document.querySelector('.search_form');
    BodyBack = document.querySelector('.overlay'),


CloseOpenForm.addEventListener('click', function () {
  FormHostel.classList.toggle('visible-form');
  BodyBack.classList.toggle('back-color');
})