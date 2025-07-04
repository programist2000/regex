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

document.getElementById("inp").addEventListener("keyup", function () {
    d = document.getElementById("inp").value

    if (d != 0) {
        // Сначала ищем номера после №
        let oldResult = d.match(/\№(\d+)/gmi);
        if (oldResult && oldResult.length > 0) {
            // Старый способ: извлекаем числа после №
            result = oldResult.map(x => x.slice(1));
        } else {
            // Новый способ: ищем все числа до первого _ или пробела
            let words = d.split(/\s+/);
            result = words.map(word => {
                let match = word.match(/^(\d+)/); // ищем число в начале
                return match ? match[1] : null;
            }).filter(Boolean); // убираем null
        }
        if (result.length > 0) {
            document.getElementById('result-row').value = result.join(' ')
            document.getElementById('result-col').value = result.join('\n')
        } else {
            clearinfo()
        }
    } else {
        clearinfo()
    }
});

document.getElementById("inp2").addEventListener("keyup", function () {

    dTwo = document.getElementById("inp2").value

    if (dTwo != 0) {
        resultTwo = dTwo.match(/\d+/gmi);
        document.getElementById('result-row').value = resultTwo.join(' ')
        document.getElementById('result-col').value = resultTwo.join('\n')
    } else {
        clearinfo()
    }
});

document.getElementById("clear_input_one").addEventListener("click", function () {
    clearInputOne();
});

document.getElementById("clear_input_two").addEventListener("click", function () {
    clearInputTwo();
});

let ButtonCopy = document.getElementById("Copy");
ButtonCopy.addEventListener("click", CopyTextArea);
function CopyTextArea() {
    let area = document.createElement('textarea'); /* Создали */
    area.value = document.getElementById('result-row').value; /* Вставили текст */
    document.body.appendChild(area).select(); /* Добавили на страницу и выделили */
    document.execCommand('copy'); /* Скопировали */
    area.remove(); /* Удалили */
}

let ButtonCopyStolb = document.getElementById("Copy_Stolb");
ButtonCopyStolb.addEventListener("click", CopyTextAreaStolb);
function CopyTextAreaStolb() {
    let area = document.createElement('textarea'); /* Создали */
    area.value = document.getElementById('result-col').value; /* Вставили текст */
    document.body.appendChild(area).select(); /* Добавили на страницу и выделили */
    document.execCommand('copy'); /* Скопировали */
    area.remove(); /* Удалили */
}

// Показ патчноута
const patchnoteBtn = document.getElementById('show_patchnote');
const patchnoteModal = document.getElementById('patchnote-modal');
const patchnoteContent = document.getElementById('patchnote-content');
const patchnoteClose = document.getElementById('close-patchnote');

if (patchnoteBtn && patchnoteModal && patchnoteContent && patchnoteClose) {
    patchnoteBtn.addEventListener('click', function () {
        fetch('CHANGELOG.md')
            .then(r => r.text())
            .then(text => {
                // Рендерим markdown в HTML
                patchnoteContent.innerHTML = marked.parse(text);
                patchnoteModal.style.display = 'flex';
            });
    });
    patchnoteClose.addEventListener('click', function () {
        patchnoteModal.style.display = 'none';
    });
    patchnoteModal.addEventListener('click', function (e) {
        if (e.target === patchnoteModal) patchnoteModal.style.display = 'none';
    });
}