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
const programUserName = document.querySelector('#program-user-name')
const programUserEmail = document.querySelector('#program-e-mail')
const programUserTelephone = document.querySelector('#program-telephone')

const submitButton = document.querySelector('#submit-button')
const message = document.querySelector('.message')
const stepsNav = document.querySelector('.steps__nav')
const stepsNavButtonFirst = document.querySelector('.steps__nav .btn_step-first')
const stepsNavButtonSecond = document.querySelector('.steps__nav .btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepTwo = document.querySelector('.steps__second-step')
const requiredFieldStepFirst = layoutStepFirst.querySelectorAll('[data-required-field]')
const requiredFieldStepSecond = layoutStepTwo.querySelectorAll('[data-required-field]')

submitButton.setAttribute('data-step', '1')
const submitButtonStepFirst = document.querySelector("[data-step='1']")

layoutStepTwo.classList.add('steps__second-step_hidden')

const formConfig = {
    errorMessage: "Усі поля обов'язкові. Будь ласка, заповніть поля.",
    validMessage: "Обов'язкове поле заповнене ✓",
    warnnigMessage: "warnnigMessage!",
    empty_fields: true,
}

const createMessageText = (field, text) => {
    const msg = `
                <div class="message">
                    ${text} 
                </div>
            `;

    const message = field.closest('.input-box').querySelector('.message')
    message ? message.innerHTML = text : field.closest('.input-box').insertAdjacentHTML('beforeEnd', msg);
}

const createSuccessMessage = (field) => {
    field.closest('.input-box').classList.remove('error-field')
    field.closest('.input-box').classList.add('valid-field')
    createMessageText(field, formConfig.validMessage)
}

const createErrorMessage = (field) => {
    field.closest('.input-box').classList.remove('valid-field')
    field.closest('.input-box').classList.add('error-field')
    createMessageText(field, formConfig.errorMessage)
}

/*<refactor: 1>*/
requiredFieldStepFirst.forEach(field => {
    field.addEventListener('change', () => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
})

requiredFieldStepSecond.forEach(field => {
    field.addEventListener('input', () => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
})
/*</refactor: 1>*/


/*<refactor: 2>*/
const createMessage = () => {
    requiredFieldStepFirst.forEach(field => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
}

const createMessageStepSecond = () => {
    requiredFieldStepSecond.forEach(field => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
}
/*</refactor: 2>*/

const showNav = () => {
    stepsNav.classList.add('steps-nav_show')
}

const showStepFirst = () => {
    submitButton.setAttribute('data-step', '1')
    layoutStepFirst.classList.remove('steps__first-step_hidden')
    layoutStepTwo.classList.add('steps__second-step_hidden')
}

const showStepSecond = () => {
    if (modalLocationsSelect.value === "" || dateMobile.value === "" || modalMembersSelect.value === "") {
        createMessage()
    } else {
        submitButton.setAttribute('data-step', '2')
        layoutStepFirst.classList.add('steps__first-step_hidden')
        layoutStepTwo.classList.remove('steps__second-step_hidden')
    }
}


stepsNavButtonFirst.addEventListener('click', showStepFirst)
stepsNavButtonSecond.addEventListener('click', showStepSecond)

const checkedValue2 = () => {


    if (programUserName.value === "" || programUserEmail.value === "" || programUserTelephone.value === "") {
        createMessageStepSecond()
    } else if (programUserName.value !== "" && programUserEmail.value !== "" && programUserTelephone.value !== "" && modalLocationsSelect.value !== "" && dateMobile.value !== "" && modalMembersSelect.value !== "") {
        console.log("submit form");
        submitButton.setAttribute('type', 'submit')
    }
}

// array.forEach(field => {
//     field.value !== "" ? console.log("submit form") : null
// })

const stepSecond = () => {
    console.log('step 2');
    submitButton.setAttribute('data-step', '2')

    const submitButtonStepSecond = document.querySelector("[data-step='2']")
    submitButtonStepSecond.addEventListener('click', checkedValue2);

    showNav();
    showStepSecond()

}




const checkedValue = () => {
    if (modalLocationsSelect.value === "" || dateMobile.value === "" || modalMembersSelect.value === "") {
        createMessage()
    } else {
        stepSecond()
    }
}

// const showSecondStep = () => {
//     if (modalLocationSelect.value === "" || mobileCalendar.value === "" || modalMemberSelect.value === "") {
//         errorMessageStepFirst()
//     } else {
//         layoutStepFirst.classList.add('steps__second-step_hidden')
//         layoutStepSecond.classList.remove('steps__second-step_hidden')
//     }
// }

submitButtonStepFirst.addEventListener('click', checkedValue);


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