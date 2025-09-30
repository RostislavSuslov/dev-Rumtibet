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

console.log(`${requesConfig.data}`);


dateInput.addEventListener('change', ()=> {
    let value = dateInput.value
    requesConfig.date = value
    console.log(requesConfig);
})

locationsSelect.addEventListener('change', ()=> {
    let value = locationsSelect.value
    requesConfig.location = value
    console.log(requesConfig);
})

membersSelect.addEventListener('change', ()=> {
    let value = membersSelect.value
    requesConfig.members = value
    console.log(requesConfig);
})

const setValue = ()=> {
    const formValue = `Локация для тура: ${requesConfig.location}\nДата похода: ${requesConfig.date}\nУчастники: ${requesConfig.members}`
    requestData.innerHTML = formValue
}

trigerRequest.addEventListener('click', setValue)


