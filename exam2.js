// 시저 암호 - Level 1

function solution(s, n) {
    return s
        .split('')
        .map((char) => {

            if (char === ' ') return char
            // Z -> A
            // 88 + 3 _ 90
            if (char.charCodeAt(0) <= 'Z'.charCodeAt(0)) {  // A~Z
                if (char.charCodeAt(0) + n > 'Z'.charCodeAt(0)) {
                    return String.fromCharCode('A'.charCodeAt(0) - 1 + (char.charCodeAt(0) + n - 'Z'.charCodeAt(0)));
                }
            } else {
                if (char.charCodeAt(0) + n > 'z'.charCodeAt(0)) {
                    return String.fromCharCode('a'.charCodeAt(0) - 1 + (char.charCodeAt(0) + n - 'z'.charCodeAt(0)));
                }
            }

            return String.fromCharCode(char.charCodeAt(0) + n);
        })
        .join('')
}

const value = solution("a B z", 4)
console.log("return : ", value)


