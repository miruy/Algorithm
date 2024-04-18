// 완주하지 못한 선수
function solution(participant, completion) {

    let answer = '';

    completion[completion.length] = ''; // completion 배열의 끝에 빈 문자열을 추가해 참가자 목록과 완주자 목록의 길이를 같게 만들어, 반복문에서 비교할 때 인덱스 에러를 방지

    const participantSort = participant.sort(); // 알파벳 순으로 정렬
    const completionSort = completion.sort(); // 알파벳 순으로 정렬

    for (let i = 0; i < participantSort.length; i++) {

        if (participantSort[i] !== completionSort[i]) {

            answer = participantSort[i];

        }

    }

    return answer;

}

const value = solution(["leo", "kiki", "eden"], ["eden", "kiki"])
console.log("return : ", value)


