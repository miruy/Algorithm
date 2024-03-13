// 문자열 내 p와 y의 개수

function solution(s) {
    let pCount = 0
    let yCount = 0;

    if (s > 50) {
        return false
    } else {
        const arrayS = s.toUpperCase().split('')
        console.log(arrayS)

        arrayS.map((char) => {
            if (char === 'P') {
                pCount += 1
            } else if (char === 'Y') {
                yCount += 1
            }
        })

        return pCount === yCount;
    }
}

const value = solution("pPY")
console.log("return : ", value)


