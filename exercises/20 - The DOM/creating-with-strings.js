console.log(`we in here!!!`);

const item = document.querySelector('.item');
const width = 500;
const src = `https://source.unsplash.com/random/${width}`;
const alt = 'Cute Pup';
const myHtml = `
<div class="pup-wrapper">
    <h2>Cute Pup!!!</h2>
    <img src="${src}" alt= "${alt}" />
</div>
`;
// Turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHtml);

document.body.append(myFragment);
