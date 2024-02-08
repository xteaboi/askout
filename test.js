var noarr=
[
    '<i class="bi bi-x-circle"></i>',
    'Please ? <i class="bi bi-x-square"></i>',
    'Pyaar nahi karti?  <i class="bi bi-emoji-frown"></i>',
    'Kya hua tera vada?',
    'Wo kasam wo irada?',
    'You serious?',
    '😭',
    'Momos khilaunga!!',
    'yar 🥺'
]

var i = 0;
var arrlen=noarr.length;
const nobtn=document.getElementById('nobtn');
const yesbtn=document.getElementById('yesbtn');
const gifimage=document.getElementById('gifimage');

function success()
{
    const successChange=document.getElementById('successChange');
    successChange.innerHTML=
    `<h1 style='text-align:center'>Ok yay !!!</h1>`;
    gifimage.innerHTML=
    `<img src='https://c.tenor.com/pFn8y5a7HXEAAAAC/tenor.gif'>`;
}

function failPile()
{
    if(i<arrlen-1){
        if(i==4){
            gifimage.innerHTML=
            `<img src='https://64.media.tumblr.com/36d07cccc3d416317878eb75c72069f8/tumblr_o0e3pd12cy1qifhw3o1_500.gif'>`;
        }
        i++;
        showNoBtn();
        var currentSize=parseFloat(window.getComputedStyle(yesbtn).fontSize);
        var newSize=currentSize+30;
        yesbtn.style.fontSize=newSize+'px';
        }
    else{
        i=0;
        showNoBtn();
        var currentSize=parseFloat(window.getComputedStyle(yesbtn).fontSize);
        var newSize=currentSize+4;
        yesbtn.style.fontSize=newSize+'px';
    }
}

function showNoBtn()
{
    nobtn.innerHTML=noarr[i];
}

showNoBtn();