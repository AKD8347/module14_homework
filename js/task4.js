//генерируем случайное число от 1 до 100
const value = Math.floor(Math.random() * 100);

// Создаем promise
const promise = new Promise((resolve, reject) => {
    //если сгененрированое число четное
    if (value % 2 == 0) {
        //с 3-х секундной задержкой возвращаем положительный результат
        setTimeout(() => {
            resolve({
                message: `Завершено успешно. Сгенерированное число — ${value}`,
                data: value,
            });
        }, 3000);
    //если отрицательное
    } else {
        setTimeout(() => {
            //с 3-х секундной задержкой возвращаем ошибку
            reject({
                message: `Завершено с ошибкой. Сгенерированное число — ${value}`,
                data: value,
            });
        }, 3000);
    }
});

//выполняем промис
promise
    //выводим положительный результат, если promise сработал
    .then((result) => {
        console.log(result.message);
    })
    //выводим ошибку
    .catch((result) => {
        console.log(result.message);
    });
