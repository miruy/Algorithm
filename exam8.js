// 신규 아이디 추천
function solution(new_id) {
    let result = ""
    const lowerCaseNewId = new_id.toLowerCase() // 1단계

    for (let i = 0; i < lowerCaseNewId.length; i++) {   // 2단계
        if ((lowerCaseNewId[i] >= 'a' && lowerCaseNewId[i] <= 'z') ||
            (lowerCaseNewId[i] >= '0' && lowerCaseNewId[i] <= '9') ||
            lowerCaseNewId[i] === '-' ||
            lowerCaseNewId[i] === '_' ||
            lowerCaseNewId[i] === '.') {
            result += lowerCaseNewId[i]
        }
    }

    // for (let i = 1; i < result.length; i++) {
    //     if (result[i] !== result[i - 1]) {  // 이전 값과 다음 값이 같지 않으면 = 연속된 문자가 아니라면
    //         result += result[i]
    //     }
    // }


    return result

}

const value = solution("...!@BaT#*..y.abcdefghijklm")
console.log("return : ", value)





