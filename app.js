const output = document.querySelector('.output');

let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                output.innerText = '';
                break; 
            case 'DEL':
                if(output.innerText != 'undefined'){
                    output.innerText = output.innerText.slice(0, -1);
                break;
                } 
            case '=':
                try{
                    output.innerText = eval(output.innerText);
                }
                catch {
                    output.innerText = 'Error!';
                }
                break;
            default: 
                output.innerText += e.target.innerText;
        }
    })
})

window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'AC':
            output.innerText = '';
            break; 
        case 'DEL':
            if(output.innerText){
                output.innerText = output.innerText.slice(0, -1);
                break;
            }
            
            
        case 'Enter':
            try{
                output.innerText = eval(output.innerText);
            }
            catch {
                output.innerText = 'Error!';
            }
            break;
        default: 
            output.innerText += e.key;
    }
})

