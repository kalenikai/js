// Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
for (let i = 1; i <= 19; i++) {
    let symbols = '';
    for (let j = 1; j <= i; j++) {
        symbols += '*';
    }
    console.log(symbols);
}

