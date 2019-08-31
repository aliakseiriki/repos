function createHuman() {
    var human = {};
    var teenager = '';

    var firstName = prompt('Type first name');
    var lastName = prompt('Type last name');
    do {
    var age = prompt('Type age');
    if(isNaN(age)) {
    alert('wrong data');}}
    while(isNaN(age));
    var sex = prompt('Type sex');

    
    human.firstName = firstName;
    human.lastName = lastName;
    human.age = age;
    human.sex = sex;

    if(age >=13 && age <=19) {
        teenager = 'He is teenager';
    }
        else {
        teenager = 'He isn\' teenager';
    }

    console.log(human);

    alert('Имя: '+ human.firstName + '\nФамилия: ' + human.lastName + '\n Пол: ' + human.sex + '\nВозраст: ' + human.age);
}

createHuman();