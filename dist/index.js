"use strict";
// Buttons:
// - Contact
const btnContact = document.getElementById('btn-contact');
// Event listener on contact button click -> User is redirected to contact page
if (btnContact !== null) {
    btnContact.addEventListener('click', () => {
        location.href = 'contact.html';
    });
}
