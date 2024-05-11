// Пример, демонстрирующий принцип подстановки Барбары Лисков
// Классы Rectangle и Square демонстрируют принцип подстановки Барбары Лисков

//В этом примере класс Square нарушает принцип подстановки Барбары Лисков, так как переопределяет методы setWidth() и setHeight(), нарушая ожидаемое поведение.
// В результате, при передаче объекта Square в функцию printArea(), получаем неправильный результат.

// Класс Rectangle определяет логику прямоугольника
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Класс Square наследуется от Rectangle, но нарушает принцип подстановки Барбары Лисков

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

// Функция printArea принимает объект типа Rectangle и выводит его площадь

function printArea(rectangle) {
    rectangle.setWidth(5);
    rectangle.setHeight(4);
    console.log(rectangle.getArea());
}

const rectangle = new Rectangle(5, 4);
const square = new Square(5);

printArea(rectangle); // Вывод: 20
printArea(square); // Вывод: 25 (Неправильный результат!)
