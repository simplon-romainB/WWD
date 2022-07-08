// const anim = document.querySelector('.sec2texte1');
// const anim2 = document.querySelector('.sec2img');

// anim2.addEventListener('mouseover', function(){

//     anim.classList.toggle('sec2texte1-change');
// })


const sect2btn = document.querySelector('.sect2btn');
const sec2texte1 = document.querySelector('.sec2texte1');
const sect2btn2 = document.querySelector('.sect2btn2');
const sec2texte2 = document.querySelector('.sec2texte2');
const sect2btn3 = document.querySelector('.sect2btn3');
const sec2texte3 = document.querySelector('.sec2texte3');
const sect2btn4 = document.querySelector('.sect2btn4');
const sec2texte4 = document.querySelector('.sec2texte4');

function textopen() {
    console.log('ok')
    sec2texte1.classList.toggle('textanim')
    sect2btn.classList.toggle('btndisp')
    
}

function textopen2() {
    console.log('ok')
    sec2texte2.classList.toggle('textanim2')
    sect2btn2.classList.toggle('btndisp')
}

function textopen3() {
    
    sec2texte3.classList.toggle('textanim3')
    console.log('ok')
    sect2btn3.classList.toggle('btndisp')
}

function textopen4() {
    
    sec2texte4.classList.toggle('textanim4')
    console.log('ok')
    sect2btn4.classList.toggle('btndisp')
}