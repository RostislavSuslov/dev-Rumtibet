const requestData = document.querySelector('#request-data')
const locationSelect = document.querySelector('#location-select')
const calendarInput = document.querySelector('#calendar')
const memberSelect = document.querySelector('#member-select')
const triggerRequest = document.querySelector('#trigger-request')

const requestConfig = {
    location: "",
    date: "",
    member: ""
}

locationSelect.addEventListener("change", () => {
    let value = locationSelect.value
    requestConfig.location = value
    console.log(requestConfig)
})

calendarInput.addEventListener("change", () => {
    let value = calendarInput.value
    requestConfig.date = value
    console.log(requestConfig)
})

memberSelect.addEventListener("change", () => {
    let value = memberSelect.value
    requestConfig.member = value
    console.log(requestConfig)
})

const setValue = () => {
    const formValue = `Локация для тура: ${requestConfig.location}\nДата похода: ${requestConfig.date}\nУчастники: ${requestConfig.member}`
    requestData.innerHTML = formValue
}

triggerRequest.addEventListener("click", setValue)

const modalLocationSelect = document.querySelector('#modal-location-select')
const mobileCalendar = document.querySelector('#mobile-calendar')
const modalMemberSelect = document.querySelector('#modal-member-select')
const submitButton = document.querySelector('#submit-button')
const stepsNav = document.querySelector('.steps__nav')
const stepNavButtonFirst = document.querySelector('.btn_step-first')
const stepNavButtonSecond = document.querySelector('.btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepSecond = document.querySelector('.steps__second-step')
const requiredFieldStepFirst = layoutStepFirst.querySelectorAll('[data-required-field]')
const requiredFieldStepSecond = layoutStepSecond.querySelectorAll('[data-required-field]')

const formConfig = {
    errorMessage: "Усі поля обов'язкові. Будь ласка, заповніть поля.",
    validMessage: "Обов'язкове поле заповнене ✓"
}

const createErrorMsg = (field) => {
    field.closest(".input-box").classList.add("error-field")
    field.closest(".input-box").classList.remove("valid-field")
    const errorMsg = `<div class="message">${formConfig.errorMessage}</div>`
    const message = field.closest('.input-box').querySelector('.message')
    message ? null : field.closest(".input-box").insertAdjacentHTML("beforeend", errorMsg)
    if (message) {
        message.classList.remove('message__valid')
        message.innerHTML = formConfig.errorMessage
    } else {
        null
    }
}

const destroyErrorMsg = (field) => {
    field.closest('.input-box').classList.remove("error-field")
    field.closest(".input-box").classList.add("valid-field")
    const message = field.closest('.input-box').querySelector('.message')
    if (message) {
        message.classList.add('message__valid')
        message.innerHTML = formConfig.validMessage
    } else {
        const validMsg = `<div class="message message__valid">${formConfig.validMessage}</div>`
        field.closest(".input-box").insertAdjacentHTML("beforeend", validMsg)
    }
    
    setTimeout(function() {
        const message = field.closest('.input-box').querySelector('.message')
        message.remove()
    }, 2000)
}

requiredFieldStepFirst.forEach(field => {
    field.addEventListener('change', () => {
        field.value === "" ? createErrorMsg(field) : destroyErrorMsg(field)        
    })
})

const errorMessage = () => {
    requiredFieldStepFirst.forEach(field => {
        field.value === "" ? createErrorMsg(field) : destroyErrorMsg(field)
    })
}

const layoutStepTwo = document.querySelector('.steps__second-step')

const showNav = () => {
    stepsNav.classList.add('steps__nav_show')
}

const showFirstStep = () => {
    layoutStepFirst.classList.remove('steps__second-step_hidden')
    layoutStepSecond.classList.add('steps__second-step_hidden')
}

const showSecondStep = () => {
    layoutStepFirst.classList.add('steps__second-step_hidden')
    layoutStepSecond.classList.remove('steps__second-step_hidden')
}

stepNavButtonFirst.addEventListener('click', showFirstStep)
stepNavButtonSecond.addEventListener('click', showSecondStep)

const stepSecond = () => {
    showNav()
    showSecondStep()
}

const checkedValue = () => {
    errorMessage()
    if (modalLocationSelect.value === "" || mobileCalendar.value === "" || modalMemberSelect.value === "") {
        errorMessage()
    } else {
        stepSecond()
    }
}

submitButton.addEventListener('click', checkedValue)