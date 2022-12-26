let d
let dTwo
let result
let resultTwo
let Copy

function clearinfo() {
    document.getElementById('result-row').innerHTML = "";
    document.getElementById('result-col').innerHTML = "";
}

function clearInputOne() {
    document.getElementById('inp').value = '';
    clearinfo();
}

function clearInputTwo() {
    document.getElementById('inp2').value = '';
    clearinfo();
}

document.getElementById("clear_input_one").addEventListener("click", function(){
    clearInputOne();
});

document.getElementById("clear_input_two").addEventListener("click", function(){
    clearInputTwo();
});

document.getElementById("inp").addEventListener("keyup", function(){
    
    d = document.getElementById("inp").value 

    if (d != 0) {
        result = (d.match(/\№\d+/gmi));
            if (result !=null) {
                for (let i = 0; i < result.length; i++) {
                    result[i] = result[i].slice(1);
                }
                document.getElementById('result-row').innerHTML = result.join(' ')
                document.getElementById('result-col').innerHTML = result.join('\n')     
            }
                
    } else {
        clearinfo()
    }


});

document.getElementById("inp2").addEventListener("keyup", function(){

    dTwo = document.getElementById("inp2").value

    if (dTwo != 0) {
        resultTwo = dTwo.match(/\d+/gmi);
        document.getElementById('result-row').innerHTML = resultTwo.join(' ')
        document.getElementById('result-col').innerHTML = resultTwo.join('\n')      
    } else {
        clearinfo()
    }    
 
});

let ButtonCopy = document.getElementById("Copy");
ButtonCopy.addEventListener("click", CopyTextArea);
function CopyTextArea (){
let area = document.createElement('textarea'); /* Создали */
    area.value = document.getElementById('result-row').innerHTML; /* Вставили текст */
    document.body.appendChild(area).select(); /* Добавили на страницу и выделили */
    document.execCommand('copy'); /* Скопировали */
    area.remove(); /* Удалили */}

let ButtonCopyStolb = document.getElementById("Copy_Stolb");
ButtonCopyStolb.addEventListener("click", CopyTextAreaStolb);
function CopyTextAreaStolb() {
    let area = document.createElement('textarea'); /* Создали */
    area.value = document.getElementById('result-col').innerHTML; /* Вставили текст */
    document.body.appendChild(area).select(); /* Добавили на страницу и выделили */
    document.execCommand('copy'); /* Скопировали */
    area.remove(); /* Удалили */
}