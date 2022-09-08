//находим элементы на странице
const field = document.getElementById('field');
const btn = document.getElementById('sendReq');
const massage = document.getElementById('massage');
const btnClear = document.getElementById('clearVal');
const cardsBox = document.getElementById('cards');

//запрос
function useRequest(limit, async) {
   //создаем запрос
    let xhr = new XMLHttpRequest();
    //передаем в url цыфру из поля
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${limit}`, async);
    //отправляем
    xhr.send();

    xhr.onload = function () {
        //если запрос прощел
        if (xhr.status == 200) {
            //полученный данные праспаршиваем и передаем в функцию отображения
            displayResult(JSON.parse(xhr.response));
        }
    };
}

//выводим ответ
function displayResult(apiData) {
    //проходим по элементам
    apiData.forEach(item => {
        //создаем карточку с версткой
        let card = `<div class="main__picture">
                        <div class="main__img">
                            <img src="${item.download_url}" alt="${item.author}">
                        </div>
                        <span>${item.author}</span>
                    </div>`;
        //добавляем верстку в блок
        cardsBox.innerHTML +=card;
    });
}

//вещаем событие клика на кнопку
btn.addEventListener('click', () => {
    let fieldValue = field.value;
    let number;
    if (fieldValue != '') {
        number = parseInt(fieldValue, 10);
        //если в поле введена не цыфра
        showNotification(number);
    } else {
        //если поле пустое
        showNotification();
    }
})

//очищаем поле
btnClear.addEventListener('click', () => {
    clearField();
})

//вызываем окно об ошибке
function showNotification(val) {
    console.log(val);
    //если введена не цыфра
    if (!isNaN(val)) {
        let value = parseInt(val, 10);
        if (value > 10) {
            console.log(value);
            massage.classList.add('main__msg--active');
            massage.innerText = 'Число вне диапазона от 1 до 10!';
        } else {
            massage.classList.remove('main__msg--active');
            massage.innerText = ' ';
            useRequest(val, true);
        }
    } else {
        massage.classList.add('main__msg--active');
        massage.innerText = 'Вы ввели неверное значение';
    }
}

//очистить значение поля
function clearField() {
    field.value = '';
    massage.classList.remove('main__msg--active');
    massage.innerText = ' ';
    cardsBox.innerHTML = '';
}
