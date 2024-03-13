// 숫자 문자열과 영단어
// isNaN(+char)가 true를 반환하면, 해당 문자는 숫자가 아니라는 것을 의미
function solution(s) {
    var EnChar = ""
    const copyArray = []
    const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    const arrayS = s.split("")

    arrayS.map((char, index) => {
        if (isNaN(+char)) { // char가 문자라면
            EnChar += char

            const numIndex = numberWords.indexOf(EnChar);
            if (numIndex !== -1) { // numberWords에 EnChar문자열과 같은 값이 있으면 해당 인덱스 반환/없으면 -1 반환
                copyArray.push(numIndex);
                EnChar = "";
            }

        } else if (!isNaN(+char)) { // char가 숫자라면
            copyArray.push(+char);
        }
    })

    return parseInt(copyArray.join(''))
}

const value = solution("one4seveneight")
console.log("return : ", value)


