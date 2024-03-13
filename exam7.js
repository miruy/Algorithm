// 문자열 다루기 기본
function solution(s) {
    var answer = false

    if (1 <= s.length <= 8) {
        if (s.length === 4 || s.length === 6) {

            // s 통째로 확인 말고, 자릿 수 하나하나 확인해야함
            for (let i = 0; i < s.length; i++) {
                if (isNaN(+s[i])) {
                    return false;
                }
            }
            return true

        } else {
            return false
        }

    } else {
        return false
    }
}

const value = solution("10e1")
console.log("return : ", value)





