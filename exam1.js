// 자연수 뒤집어 배열로 만들기 – Level 1

function solution(n) {
    var answer = [];

    const stringN = n.toString() // n을 문자열로 변환
    console.log("stringN", stringN)

    const arrayN = stringN.split('').map((data) => parseInt(data)) // 각 자리수 값을 숫자로 변환하여 배열로 만듬
    console.log("arrayN", arrayN)
    answer = arrayN.reverse();

    return answer;
}

const value = solution(12345)
console.log("return : ", value)


