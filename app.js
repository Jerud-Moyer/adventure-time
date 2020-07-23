import { makeUser } from './userUtils.js';

const form = document.querySelector('form');




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const user = makeUser(formData);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
console.log(user);
});