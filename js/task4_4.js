//находим элементы на странице
const firstVal = document.getElementById('firstNum');
const secondVal = document.getElementById('secondNum');
const btn = document.getElementById('sendReq');
const massage = document.getElementById('massage');
const cardsBox = document.getElementById('cards');

//запрос
function useRequest(width, heigth) {
    //создаем запрос
    return fetch(` https://loremflickr.com/json/g/${width}/${heigth}/all`)
        .then(response => response.json())
        .then(json => displayResult(json))
        .catch(() => {
            console.log('error')
        });
}

//вещаем событие клика на кнопку
btn.addEventListener('click', async () => {
    let imgWidth = parseInt((firstVal.value), 10);
    let imgHeight = parseInt((secondVal.value), 10);
    await showNotification(imgWidth, imgHeight);
})

//вызываем окно об ошибке
function showNotification(width, heigts) {

    if (!isNaN(width) || !isNaN(heigts)) {

        if ((width >= 100 && width <= 500) && (heigts >= 100 && heigts <= 500)) {
            useRequest(width, heigts);
        } else {
            //если введены цыфры вне диапазона
            massage.classList.add('main__msg--active');
            massage.innerText = 'Значение вне диапазона!';
        }

    } else {
        //если введена не цыфра
        massage.classList.add('main__msg--active');
        massage.innerText = 'Вы ввели неверное полей';
    }
}

//выводим ответ
function displayResult(apiData) {
    //создаем карточку с версткой
    let card = `<div class="main__picture">
                        <div style="width: ${apiData.width}px; height: ${apiData.height}px" class="main__img">
                            <img src="${apiData.file}" alt="${apiData.owner}">
                        </div>
                        <span>${apiData.owner}</span>
                    </div>`;
    //добавляем верстку в блок
    cardsBox.innerHTML += card;
}
