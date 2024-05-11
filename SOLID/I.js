// Пример, демонстрирующий принцип разделения интерфейсов
// Классы Printer, Scanner и FaxMachine демонстрируют принцип разделения интерфейсов

//В этом примере классы AllInOnePrinterScanner и AllInOnePrinterScannerFaxMachine наследуются только от тех классов, функциональность которых им нужна.
// Это позволяет избежать заставления клиента реализовывать интерфейсы, которые не имеют к нему отношения.

// Класс Printer определяет интерфейс для печати

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

class Scanner {
    scan() {
        // Метод для сканирования
    }
}

class FaxMachine {
    fax() {
        // Метод для отправки факса
    }
}

// Класс AllInOnePrinterScanner реализует методы принтера и сканера
class AllInOnePrinterScanner {
    constructor() {
        this.printer = new Printer();
        this.scanner = new Scanner();
    }

    print() {
        this.printer.print();
    }

    scan() {
        this.scanner.scan();
    }
}

// Класс AllInOnePrinterScannerFaxMachine реализует методы принтера, сканера и факса
class AllInOnePrinterScannerFaxMachine {
    constructor() {
        this.printer = new Printer();
        this.scanner = new Scanner();
        this.faxMachine = new FaxMachine();
    }

    print() {
        this.printer.print();
    }

    scan() {
        this.scanner.scan();
    }
}
