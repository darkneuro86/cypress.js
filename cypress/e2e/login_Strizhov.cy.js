describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); //Ввел верный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверил что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); //Ввел верный логин
        cy.get('#pass').type('qa_one_love8'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверил что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('Herman@dolnikov.ru'); //Ввел неверный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверил что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('Germandolnikov.ru'); //Ввел неверный логин без @
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверил что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Восстановление пароля на рандомный email', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#forgotEmailButton').click(); // Нажал кнопку восст. пароль
        cy.get('#mailForgot').type('german@popov.ru'); // Ввожу email для восстановления
        cy.get('#restoreEmailButton').click(); // Отправить код на почту


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Заглавные буквы в поле логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввел верный логин, но с заглавынми буквами
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверил что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

})

// План действий
// + Найти поле логин и ввести правильный логин
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку Войти и нажать на нее
// + Проверить, что авторизация прошла успешно