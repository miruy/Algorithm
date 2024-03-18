// 두 개 뽑아서 더하기
function solution(numbers) {
    let answer = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j]

            if (!answer.includes(sum)) {  // includes : 앞 배열에 인자값이 있는지 확인하는 함수, 앞에 ! 가 있으므로 여기서는 없는지를 확인
                answer.push(sum);
            }
        }
    }

    return answer.sort((a, b) => (a - b))
}

const value = solution([2, 1, 3, 4, 1])
console.log("return : ", value)


