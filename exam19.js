// 외톨이 알파벳
function solution(input_string) {

    let charPositions = {}; // 문자의 위치를 저장할 객체
    let result = new Set(); // 결과로 반환될 Set (중복된 값을 자동으로 제거)

    // 문자열을 순회하면서 각 문자가 나타나는 위치를 저장
    for (let i = 0; i < input_string.length; i++) {
        let char = input_string[i];
        if (charPositions[char]) {
            charPositions[char].push(i);
        } else {
            charPositions[char] = [i];
        }
    }

    // 각 문자에 대해 연속되지 않고 떨어져 나타나는지 확인
    for (let char in charPositions) {
        let positions = charPositions[char];
        if (positions.length > 1) {
            // 문자가 두 번 이상 나타남
            let isSeparated = true; // 문자가 연속되지 않고 떨어져 있는지 확인하는 플래그
            for (let i = 1; i < positions.length; i++) {
                if (positions[i] - positions[i - 1] === 1) {
                    // 연속되어 나타나는 경우
                    isSeparated = false;
                    break;
                }
            }
            if (isSeparated) {
                result.add(char); // 연속되지 않고 떨어져 나타나면 결과에 추가
            }
        }
    }

    // 결과를 배열로 변환하고 알파벳 순으로 정렬한 뒤 문자열로 합쳐서 반환
    return result.size > 0 ? Array.from(result).sort().join('') : "N";

}

const value = solution("edeaaabbccd")
console.log("return : ", value)


