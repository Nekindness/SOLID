// Пример, демонстрирующий принцип разделения интерфейсов
// Классы Printer, Scanner и FaxMachine демонстрируют принцип разделения интерфейсов

//В этом примере классы AllInOnePrinterScanner и AllInOnePrinterScannerFaxMachine наследуются только от тех классов, функциональность которых им нужна.
// Это позволяет избежать заставления клиента реализовывать интерфейсы, которые не имеют к нему отношения.

// Класс Printer определяет интерфейс для печати

class Printer {
    print() {
        // Метод для печати
    }
}

// Класс Scanner определяет интерфейс для сканирования

class Scanner {
    scan() {
        // Метод для сканирования
    }
}

// Класс FaxMachine определяет интерфейс для отправки факса

class FaxMachine {
    fax() {
        // Метод для отправки факса
    }
}

// Класс AllInOnePrinterScanner реализует методы принтера и сканера

class AllInOnePrinterScanner extends Printer, Scanner {
    // Класс, реализующий методы принтера и сканера
}

// Класс AllInOnePrinterScannerFaxMachine реализует методы принтера, сканера и факса

class AllInOnePrinterScannerFaxMachine extends Printer, Scanner, FaxMachine {
    // Класс, реализующий методы принтера, сканера и факса
}
