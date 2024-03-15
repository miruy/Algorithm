// 신규 아이디 추천
function solution(new_id) {
    // 1단계
    let tempResult = new_id.toLowerCase();

    // 2단계
    tempResult = tempResult.split('').filter(c =>
        (c >= 'a' && c <= 'z') ||
        (c >= '0' && c <= '9') ||
        c === '-' || c === '_' || c === '.'
    ).join('');

    // 3단계
    while (tempResult.includes('..')) {
        tempResult = tempResult.replace('..', '.');
    }

    // 4단계
    if (tempResult.startsWith('.')) tempResult = tempResult.slice(1);
    if (tempResult.endsWith('.')) tempResult = tempResult.slice(0, -1);

    // 5단계
    if (tempResult === '') tempResult = 'a';

    // 6단계
    if (tempResult.length >= 16) {
        tempResult = tempResult.slice(0, 15);
        if (tempResult.endsWith('.')) tempResult = tempResult.slice(0, -1);
    }

    // 7단계
    while (tempResult.length < 3) {
        tempResult += tempResult.charAt(tempResult.length - 1);
    }

    return tempResult;
}

const value = solution("abcdefghijklmn.p")
console.log("return : ", value)


