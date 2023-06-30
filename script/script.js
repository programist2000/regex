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
    document.getElementById('inp2').value = '';
    clearinfo();
}

function clearInputTwo() {
    document.getElementById('inp').value = '';
    document.getElementById('inp2').value = '';
    clearinfo();
}

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

document.getElementById("clear_input_one").addEventListener("click", function(){
    clearInputOne();
});

document.getElementById("clear_input_two").addEventListener("click", function(){
    clearInputTwo();
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


// Открытие УТМ

// let buttonOpenUTM = document.getElementById("openUTM");

// function openUTM (){
//     let resultRow = document.getElementById('result-row').value;
//     let shopsArr = resultRow.split(' ');

//     shopsArr.forEach(item => {
//         console.log(item)
//     });

//     shopsArr.forEach(element => {
//         if (element <=255) {
//             window.open(`192.168.${element}.2:8080`);
//         }
//         if (element <=19999) {
//             window.open(`192.168.${element}.2:8080`);
//         }
//     });


//     console.log(shopsArr)
// }

// buttonOpenUTM.addEventListener("click", openUTM);


// function parseWebsite(url) {
//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         // Создаем временный элемент div, чтобы разместить HTML-код
//         const tempDiv = document.createElement("div");
//         tempDiv.innerHTML = html;
  
//         // Находим все таблицы на странице
//         const tables = tempDiv.querySelectorAll("table");
  
//         // Проходимся по каждой таблице
//         for (let i = 0; i < tables.length; i++) {
//           const table = tables[i];
  
//           // Находим все строки таблицы
//           const rows = table.querySelectorAll("tr");
  
//           // Проходимся по каждой строке
//           for (let j = 0; j < rows.length; j++) {
//             const row = rows[j];
  
//             // Получаем последнюю ячейку строки
//             const cells = row.cells;
//             const lastCell = cells[cells.length - 1];
  
//             // Извлекаем содержимое последней ячейки
//             const content = lastCell.textContent;
//             console.log(content);
//           }
//         }
//       });
//   }


//   parseWebsite("http://sps-holding.ru/addrbook/?p=-2");

// // Адрес страницы с таблицей
// const url = "http://sps-holding.ru/addrbook/?p=-2";

// // Получаем HTML-код страницы с таблицей
// fetch(url)
//   .then(response => response.text())
//   .then(html => {
//     // Создаем временный элемент div
//     const temp = document.createElement("div");
//     temp.innerHTML = html;

//     // Находим таблицу на странице
//     const table = temp.querySelector("table");

//     // Получаем список строк таблицы
//     const rows = table.querySelectorAll("tr");

//     // Проходим циклом по строкам таблицы
//     rows.forEach(row => {
//       // Получаем список ячеек в текущей строке
//       const cells = row.querySelectorAll("td");

//       // Выводим содержимое ячеек
//       cells.forEach(cell => {
//         console.log(cell.innerText);
//       });
//     });
//   })
//   .catch(error => console.log(error));
