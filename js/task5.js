//находим элементы на странице
const firstVal = document.getElementById('firstNum');
const secondVal = document.getElementById('secondNum');
const btn = document.getElementById('sendReq');
const massage = document.getElementById('massage');
const cardsBox = document.getElementById('cards');

//вещаем событие клика на кнопку
btn.addEventListener('click', async () => {
    let number = parseInt((firstVal.value), 10);
    let limit = parseInt((secondVal.value), 10);
    cardsBox.innerHTML = ' ';
    await showNotification(number, limit);
})

//вызываем окно об ошибке
function showNotification(number, limit) {

    if (!isNaN(number) && !isNaN(limit)) {
        if ((number >= 1 && number <= 10) && (limit >= 1 && limit <= 10)) {
            useRequest(number, limit);
        } else {
            console.log(number, limit);
            if(number < 1 || number > 10) {
                massage.classList.add('main__msg--active');
                massage.innerText = 'Номер страницы вне диапазона от 1 до 10';
            }
            if (limit < 1 || limit > 10) {
                massage.classList.add('main__msg--active');
                massage.innerText = 'Лимит вне диапазона от 1 до 10';
            }
        }

    } else {
        //если введена не цыфра
        massage.classList.add('main__msg--active');
        massage.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
}

//запрос
function useRequest(number, limit) {
    //создаем запрос
    let url = `https://picsum.photos/v2/list?page=${number}&limit=${limit}`;
    //записываем данные в локальное хранилище
    localStorage.setItem('number', number);
    localStorage.setItem('limit', limit);
    return fetch(url)
        .then(response => response.json())
        .then(json => displayResult(json))
        .catch(() => {
            console.log('error')
        });

}

//выводим ответ
function displayResult(apiData) {
    //проходим по элементам
    apiData.forEach(item => {
        console.log(item);
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

//при загрузке окна
document.addEventListener("DOMContentLoaded", function () {
    //берем данные из localStorage
    let number = localStorage.getItem('number');
    let limit = localStorage.getItem('limit');
    if(number !== null && limit !== null) {
        useRequest(number, limit)
    }
});
