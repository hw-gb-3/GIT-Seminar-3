const celsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия:", ""));
const fahrenheit =  ((9 / 5) * celsius + 32).toFixed(1);
alert(`Цельсий (°C): ${celsius}, Фаренгейт (°F): ${fahrenheit}`);