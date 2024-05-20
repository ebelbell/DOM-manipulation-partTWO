
//select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main'); //querySelector will help get info from the DOM by the first element

//set te=he background color of mainEl to the value of the css property
mainEl.style.backgroundColor = 'var(--main-bg)';

//set the content of the mainEl to <h1>DOM Manipulation</h1>;
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//add a class of flex-ctr tp mainEl
mainEl.classList.add('flex-ctr');

//select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

console.log(mainEl);

//Nav Buttons
var menuLinks = [
    {text: 'about', href: '/about' },
    {text: 'catalog', href: '/catalog' },
    {text: 'orders', href: '/orders' },
    {text: 'account', href: '/account' },
];

//select and cache the <nav> element in a variable named S=subMenuEl
const subMenuEl = document.getElementById('sub-menu');

//get the parent element to append the <a> elements
const parentElement = document.getElementById('top-menu');

//iterate over the entire menuData array
menuData.forEach(link => {
    //<a> element for each object in the array
    const anchorElement = document.createElement('a');

    //append the <a> element to the parent element
    parentElement.appendChild(anchorElement);
});
