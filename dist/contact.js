"use strict";
// Event listener on contact button click -> User is redirected to contact page
document.getElementById('btn-home')?.addEventListener('click', () => {
    if (document.getElementsByTagName('html')[0].lang === 'en') {
        window.location.href = 'index_en.html';
    }
    else {
        window.location.href = 'index.html';
    }
});
