// 이상한 문자 만들기 – Level 1

function solution(s) {
    var answer = "";
    const chars = s.split(" ")

    chars.forEach((char, index) => {
        const keys = char.split('')

        keys.forEach((key, index) => {
            if (index % 2 === 0) {
                keys[index] = key.toUpperCase()
            }else {
                keys[index] = key.toLowerCase()
            }
        })

        const returnValue = keys.join('')
        answer += (index < chars.length - 1) ? returnValue + " " : returnValue;
    })

    return answer
}

const value = solution("try hello world")
console.log("return : ", value)


