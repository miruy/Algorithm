// 문자열 내림차순으로 배치하기
function solution(s) {
    return s.split('').sort().reverse().join('')
    // 인자가 없는 sort()는 문자열을 오름차순으로 정렬시킴
    /* 1. 문자열을 배열로 변환
     2. 배열을 오름차순으로 정렬
     3. 오름차순으로 정렬된 배열을 내림차순으로 변환
     4. 배열을 댜시 문자열로 변환 */
}

const value = solution("Zbcdefg")
console.log("return : ", value)


