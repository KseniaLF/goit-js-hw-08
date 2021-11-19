import throttle from "lodash.throttle";

const FORM_DATA = "feedback-form-state";

const form = document.querySelector("form");
const refs = {
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
}

form.addEventListener("submit", onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    console.log(JSON.parse(localStorage.getItem(FORM_DATA)));

    localStorage.removeItem(FORM_DATA);
}
getSavedData()
form.addEventListener("input", throttle(savedLocalData, 500));

const formData = {};

function savedLocalData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_DATA, JSON.stringify(formData))
}

function getSavedData(event) {
    const getData = localStorage.getItem(FORM_DATA);
    const parseData = JSON.parse(getData)

    if (parseData) {
        if (parseData.email) {
            refs.input.value = parseData.email;
        }
        if (parseData.message) {
            refs.textarea.value = parseData.message;
        }
    }
}
