// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    return strings.sort((a, b) => { // 비교할 a : 첫번째 문자열, b : 두번째 문자열
        if (a[n] !== b[n]) { // 비교할 두 문자열의 n번째 문자가 같은 문자가 아니라면
            return a[n] > b[n] ? 1 : -1 // 둘중에 뭐가 큰지 비교 (1 : 크니까 뒤로, -1 : 작으니까 앞으로)
        }
        return a > b ? 1 : -1  // 비교할 두 문자열의 n번째 문자가 같은 문자라면
    })
}

const value = solution(["sun", "bed", "car"], 1)
console.log("return : ", value)


