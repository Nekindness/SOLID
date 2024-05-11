// Пример, демонстрирующий принцип инверсии зависимостей
// Классы UserRepository и UserService демонстрируют принцип инверсии зависимостей

//В этом примере классы UserService зависит от абстракции IUserRepository, а не от конкретной реализации UserRepository.
//Это позволяет легко расширять и заменять реализацию хранилища пользователей, не изменяя код класса UserService.

// Абстракция IUserRepository определяет интерфейс для работы с хранилищем пользователей

class IUserRepository {
    getUsers() {
        // Абстрактный метод для получения пользователей
    }

    saveUser(user) {
        // Абстрактный метод для сохранения пользователя
    }
}

// Класс UserRepository реализует интерфейс IUserRepository и отвечает за работу с базой данных

class UserRepository extends IUserRepository {
    getUsers() {
        // Логика получения пользователей из базы данных
    }

    saveUser(user) {
        // Логика сохранения пользователя в базе данных
    }
}

// Класс UserService зависит от абстракции IUserRepository, а не от конкретной реализации

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    getUsers() {
        return this.repository.getUsers();
    }

    saveUser(user) {
        this.repository.saveUser(user);
    }
}

// Создание экземпляра UserRepository и передача его в UserService

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
