//создаем переменную, которую парсим
const xml = `
        <list>
          <student>
            <name lang="en">
              <first>Ivan</first>
              <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
          </student>
          <student>
            <name lang="ru">
              <first>Петр</first>
              <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
          </student>
        </list>`;

//парсим элемент через класс баузера
const XMLDom = new DOMParser().parseFromString(xml, 'text/xml');

//парсим первого студента
const firstStudent = XMLDom.getElementsByTagName('student')[0];
const firstStudentName = firstStudent.querySelector('first').textContent;
const firstStudentSurname = firstStudent.querySelector('second').textContent;
const firstStudentAge = parseInt((firstStudent.querySelector('age').textContent), 10);
const firstStudentProf = firstStudent.querySelector('prof').textContent;
const firstStudentLang = firstStudent.querySelector('name').getAttribute('lang');
//парсим второо студента
const secondStudent = XMLDom.getElementsByTagName('student')[1];
const secondStudentName = secondStudent.querySelector('first').textContent;
const secondStudentSurname = secondStudent.querySelector('second').textContent;
const secondStudentAge = parseInt((secondStudent.querySelector('age').textContent), 10);
const secondStudentProf = secondStudent.querySelector('prof').textContent;
const secondStudentLang = secondStudent.querySelector('name').getAttribute('lang');
//результатт записываем в обьект
const result = {
    list: [
        {
            name: firstStudentName + ' ' + firstStudentSurname,
            age: firstStudentAge,
            prof: firstStudentProf,
            lang: firstStudentLang
        },
        {
            name: secondStudentName + ' ' + secondStudentSurname,
            age: secondStudentAge,
            prof: secondStudentProf,
            lang: secondStudentLang
        }
    ],
}
//выводим результат в консоль
console.log(result);
