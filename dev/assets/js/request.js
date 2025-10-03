const requestData = document.querySelector('#request-data')
const locationsSelect = document.querySelector('#locations-select')
const dateInput = document.querySelector('#date')
const trigerRequest = document.querySelector('#triger-request')
const membersSelect = document.querySelector('#members-select')
const requesConfig = {
    location: "",
    date: "",
    members: "",
}

dateInput.addEventListener('change', () => {
    let value = dateInput.value
    requesConfig.date = value
    console.log(requesConfig);
})

locationsSelect.addEventListener('change', () => {
    let value = locationsSelect.value
    requesConfig.location = value
    console.log(requesConfig);
})

membersSelect.addEventListener('change', () => {
    let value = membersSelect.value
    requesConfig.members = value
    console.log(requesConfig);
})

const setValue = () => {
    const formValue = `Локация для тура: ${requesConfig.location}\nДата похода: ${requesConfig.date}\nУчастники: ${requesConfig.members}`
    requestData.innerHTML = formValue
}

trigerRequest.addEventListener('click', setValue)


const modalLocationsSelect = document.querySelector('#modal-locations-select')
const dateMobile = document.querySelector('#date-mobile')
const modalMembersSelect = document.querySelector('#modal-members-select')
const submitButton = document.querySelector('#submit-button')
const massage = document.querySelector('.massage')
const stepsNav = document.querySelector('.steps__nav')
const stepsNavButtonFirst = document.querySelector('.steps__nav .btn_step-first')
const stepsNavButtonSecond = document.querySelector('.steps__nav .btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepTwo =  document.querySelector('.steps__second-step')

layoutStepTwo.classList.add('steps__second-step_hidden')

 


const formConfig = {
    emptyMassage: "",
    errorMassage: "Всі поля обов'язкові. Заповніть будь ласка поля.",
    validMassage: "Всі поля заповнені. ✓",
}

const errorMassage = () => {
    massage.classList.remove('massage__hidden')
    massage.classList.remove('massage__valid')
    massage.innerHTML = formConfig.errorMassage
}

const removeValidMassage = () => {
    massage.classList.add('massage__hidden')
    massage.innerHTML = formConfig.emptyMassage
}

const validMassage = () => {
    massage.classList.add('massage__valid')
    massage.innerHTML = formConfig.validMassage
    setTimeout(removeValidMassage, 2000);
}

const showNav = () => {
    stepsNav.classList.add('steps-nav_show')
}



const showStepFirst = ()=>{
    layoutStepFirst.classList.remove('steps__first-step_hidden')
    layoutStepTwo.classList.add('steps__second-step_hidden')
}

const showStepSecond = ()=>{
    layoutStepFirst.classList.add('steps__first-step_hidden')
    layoutStepTwo.classList.remove('steps__second-step_hidden')
}

 
stepsNavButtonFirst.addEventListener('click', showStepFirst)
stepsNavButtonSecond.addEventListener('click', showStepSecond)


const stepSecond = () => {
    validMassage();
    showNav();
    showStepSecond()
    console.log('step 2');
}


const checkedValue = () => {
    if (modalLocationsSelect.value === "" || dateMobile.value === "" || modalMembersSelect.value === "") {
        errorMassage()
    } else {
        stepSecond()
    }
}

submitButton.addEventListener('click', checkedValue);


/*
Перевірка - заповнили поля чи ні:

- якщо заповнені, інший крок
  -
  -
  -

- якщо не заповнені, повідомити що потрібно заповнити
  -
  -
  -
*/