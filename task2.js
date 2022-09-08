//создаем джейсон, который парсим
const jsonString = `
            {
             "list": [
              {
               "name": "Petr",
               "age": "20",
               "prof": "mechanic"
              },
              {
               "name": "Vova",
               "age": "60",
               "prof": "pilot"
              }
             ]
            }`;

//парсим элемент через класс баузера
const jsonData = JSON.parse(jsonString);
// console.log(jsonData);
const result = {
    list: [
        {
            name: jsonData.list[0].name,
            age: parseInt((jsonData.list[0].age), 10),
            prof: jsonData.list[0].prof
        }, {
            name: jsonData.list[1].name,
            age: parseInt((jsonData.list[1].age), 10),
            prof: jsonData.list[1].prof
        }
    ]
}
console.log(result);
