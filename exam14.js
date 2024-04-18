// 없는 숫자 더하기
function solution(numbers) {
    var answer = 0;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const uncluded = array.filter(value => !numbers.includes(value));

    uncluded.map((value) => (
        answer += value
    ))

    return answer
}

const value = solution([1, 2, 3, 4, 6, 7, 8, 0])
console.log("return : ", value)


