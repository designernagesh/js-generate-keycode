let overlay = document.querySelector('.overlay'),
key = document.querySelector('.key h2')
keyCodes = document.querySelector('.keyCode h2')
btnCopy = document.querySelector('.btn-copy');

window.addEventListener('keyup', (e) => {
    overlay.classList.add('hide');    

    key.innerHTML = e.key;
    keyCodes.innerHTML = e.keyCode;

    if(e.keyCode === 32){
        key.innerHTML = 'space';
    }
})

btnCopy.addEventListener('click', ()=>{
    let textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';

    textarea.innerText = keyCodes.innerHTML;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    btnCopy.innerHTML = 'Copied Text'; 

    setTimeout(() => {
        btnCopy.innerHTML = 'Click to Copy';
    }, 2000)
})