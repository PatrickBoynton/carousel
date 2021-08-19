const container = document.querySelector('.container');
const btn = document.querySelector('.btn-l');
const btn1 = document.querySelector('.btn-r');
let div;

const img_urls = [
    { image: './images/food.jpg', title: 'food' },
    { image: './images/woman.jpg', title: 'woman' },
    { image: './images/waterfall.jpg', title: 'waterfall' }
];

// img_urls.map((url, i) => {
//     const h1 = document.createElement('h1');
//     const img = document.createElement('img');
//     div = document.createElement('div');
//
//     h1.innerHTML = url.title;
//     img.src = url.image;
//     img.alt = url.title;
//
//     div.classList.add('image-' + (i + 1));
//     div.classList.add('img');
//
//     container.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(img);
// });


let i = 0;

btn.addEventListener('click', () => {
    i--;

    if (i < 0) i = 2;

});

btn1.addEventListener('click', () => {
    i++;

    if (img_urls[i] === undefined) i = 0;

    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    div = document.createElement('div');

    h1.innerHTML = img_urls[i].title;
    img.src = img_urls[i].image;
    img.alt = img_urls[i].title;

    container.appendChild(div);
    div.appendChild(h1);
    div.appendChild(img);
});
