// Пример, демонстрирующий принцип единственной ответственности
// Класс User отвечает только за представление данных пользователя

//В этом примере класс User отвечает только за представление данных пользователя
// Kлассы EmailService и DatabaseService отвечают за отправку электронной почты и сохранение пользователя в базу данных соответственно.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

// Класс EmailService отвечает только за отправку электронной почты

class EmailService {
    sendEmail(user, subject, message) {
        // Логика отправки электронной почты
    }
}

// Класс DatabaseService отвечает только за сохранение пользователя в базу данных

class DatabaseService {
    saveUser(user) {
        // Логика сохранения пользователя в базу данных
    }
}
