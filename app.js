const output = document.querySelector('.output');

let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                output.innerText = '';
                break; 
            case '=':
                output.innerText = eval(output.innerText);
                break;
            default: 
                output.innerText += e.target.innerText;
        }
    })
})