export function romanToInteger(str) {
    let result = 0;
    const romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let prevValue = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        let currentValue = romanObject[str[i]];
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
    }
    return result;
}
