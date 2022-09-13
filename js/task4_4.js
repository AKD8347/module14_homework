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
        .then(json => console.log(json))
        .catch(() => { console.log('error') });
}

//вещаем событие клика на кнопку
btn.addEventListener('click', () => {
    let imgWidth = parseInt((firstVal.value), 10);
    let imgHeight = parseInt((secondVal.value), 10);

    useRequest(320, 240);

    showNotification(imgWidth, imgHeight);

    // let fieldValue = field.value;
    // let number;
    // if (fieldValue != '') {
    //     number = parseInt(fieldValue, 10);
    //     //если в поле введена не цыфра
    //     showNotification(number);
    // } else {
    //     //если поле пустое
    //     showNotification();
    // }
})

//вызываем окно об ошибке
function showNotification(width, heigts) {

    if(!isNaN(width) || !isNaN(heigts)) {
        //если введены цыфры вне диапазона
        if (width < 100 || width > 500 && heigts < 100 || heigts > 500) {
            massage.classList.add('main__msg--active');
            massage.innerText = 'Значение вне диапазона!';
        } else {
            massage.classList.remove('main__msg--active');
            massage.innerText = ' ';
        }
        //если введена не цыфра
    } else {
        massage.classList.add('main__msg--active');
        massage.innerText = 'Вы ввели неверное значение первого поля';
    }
}
