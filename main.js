function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Пожалуйста, введите оба числа.';
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Деление на ноль невозможно';
                break;
            case '^':
                result = Math.pow(num1, num2);
                break;
            case 'root':
                result = num2 !== 0 ? Math.pow(num1, 1 / num2) : 'Корень нулевой степени не определён';
                break;
            default:
                result = 'Неизвестная операция';
        }
    }
    document.getElementById('result').innerText = `Результат: ${result}`;
}





