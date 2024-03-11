const items = document.querySelectorAll('.item');
const cards = document.querySelectorAll('.card');
const home = document.querySelector('.home');
const container = document.querySelector('.container');

document.querySelector(".card i").addEventListener('click', function () {
    container.style.scale = "0";
    setTimeout(() => {
        container.style.scale = "1";
    }, "3000");
});

items.forEach(item => {
    item.addEventListener('click', ()=> {
        item.classList.toggle('active');
    })
})

document.querySelector('.btn').addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.toggle('active');
    })
})

home.addEventListener('click', ()=> {
    cards.forEach(card => {
        card.classList.toggle('active');
        console.log('object');
    });
});