function solution(n) {
    var answer = [];

    const stringN = n.toString() // n을 문자열로 변환
    console.log("stringN", stringN)

    const arrayN = stringN.split('').map((data) => parseInt(data)) // 각 자리수 값을 숫자로 변환하여 배열로 만듬
    console.log("arrayN", arrayN)

    // for (let i = arrayN.length; i > 0; i--) {   // 큰 수부터 작은수까지 반복문을 사용하여 뺀 후 새로운 배열에 넣음
    //     console.log(i)
    //     answer.push(i)
    // }
    answer = arrayN.reverse();

    return answer;
}

const value = solution(12345)
console.log("return : ", value)


