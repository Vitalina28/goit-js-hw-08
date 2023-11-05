import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';


const refs = {
    formEl: document.querySelector(".feedback-form"),
    emailInput: document.querySelector('.feedback-form input[name="email"]'),
    messageInput: document.querySelector('.feedback-form textarea'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onTextareaInput, 500));

refs.formEl.addEventListener('change', evt => {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};
    
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = {
        email: refs.emailInput.value,
        message:refs.messageInput.value
    }
    console.log({...formData});

    localStorage.removeItem(STORAGE_KEY);
    refs.formEl.reset();
   }

function onTextareaInput(evt) {
     
    const email = refs.emailInput.value;
    const message = refs.messageInput.value;
    const data = { email, message };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.getItem(STORAGE_KEY);
}

 
function populateTextarea() {
   let savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        Object.entries(savedMessage).forEach(([name, value]) => {
            refs.formEl.elements[name].value = value;
        })
    }
}

