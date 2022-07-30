const contactForm = document.querySelector('.contacts__form');

const contactsForm = new JustValidate(contactForm, {
  errorFieldCssClass: 'is-invalid',
});

const submitFormBtn = document.querySelector('.contacts__btn');
const inputTel = document.querySelector('#tel');

const errorMassage = 'Недопустимый формат';
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

function showMessage (massage, duration = 3000, gravity = "bottom", position = "left") {
  Toastify({
    text: massage,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: gravity,
    position: position,
  }).showToast();
}

submitFormBtn.addEventListener('click', async (el) => {
  if (contactsForm.onSuccess(event).isValid) {
    el.preventDefault();

    let response = await fetch('https://formspree.io/f/mbjbrdbl', {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
          'Accept': 'application/json'
      }
    }).then(respouns => {
      if (respouns.ok) {
        contactForm.reset();
        showMessage("Форма отправлена с помощью formspree.io");
      } else {
        showMessage("Ошибка при отправке формы");
      };
    });
  }
})
