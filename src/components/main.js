const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__navigation');
const buttonSub = document.querySelector('.head__input-button')
const input = document.querySelector('input')
const errorArea = document.querySelector('.head__error')
const description = document.querySelector('.head__description')


if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle("active");
   });
}

buttonSub.addEventListener("click", () => {
   errorArea.innerHTML = ""
   if (input.value.length > 3 && input.value.length < 13) {
      if (input.value.match(/[!@#$%^&*()]+/)) {
         errorArea.innerHTML = "prohibition on entering characters !@#$%^&*()"
      } else {
         input.value = "";
         alert('Submit Done')
      }
   } else {
      errorArea.innerHTML = "min:4 - max: 12 symbols"
   }

})

fetch("https://baconipsum.com/api/?type=lucky").then(function (response) {
   response.text().then(function (text) {
      description.innerHTML = text.slice(1).slice(0, -1)
   });
})
