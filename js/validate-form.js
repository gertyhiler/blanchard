const contactsForm = new JustValidate('.contacts__form', {
  errorFieldCssClass: 'is-invalid',
}); 
const errorMassage = 'Недопустимый формат';
const inputTel = document.querySelector('#tel'); 
let inputMask = new Inputmask("+7 (999) 999-99-99");
inputMask.mask(inputTel);

contactsForm.addField('.contacts__input[type="text"]', [
  
  {
    rule: 'minLength',
    value: 2,
    errorMessage: errorMassage,
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: errorMassage,
  },
  {
    rule: 'required',
    errorMessage: errorMassage,
  }
]);

contactsForm.addField('#tel', [
  {
    rule: 'required',
    errorMessage: errorMassage,
  },
  {
    validator: () => {
      return [...document.querySelector ('#tel').inputmask.unmaskedvalue()].length === 10;
    },
    errorMessage: errorMassage,
  }
]);