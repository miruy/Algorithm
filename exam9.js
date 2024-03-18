// 모의고사
function solution(answers) {
    const result = [];

    const supojasAnswers = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    const supojasScores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {  // 수포자들의 답과 정답틀 비교
        for (let j = 0; j < supojasAnswers.length; j++) {
            const supojaAnswer = supojasAnswers[j];

            if (answers[i] === supojaAnswer[i % supojaAnswer.length])   // 정답 갯수보다 수포자들의 답 갯수가 많으면 정답 갯수 만큼만 비교할 수 있도록 정답 갯수시점에서 다시 순환
                supojasScores[j]++; // 정답을 맞춘 수포자들 점수 1점씩 올라감
        }
    }

    let maxScore = supojasScores[0]; // 기준 : 수포자1의 정답개수를 제일 높은 점수라고 정의 / 기준을 수포자1로 잡지 않아도 아래 for문에서 비교

    for (let i = 1; i < supojasScores.length; i++) { // 3명의 수포자들 점수만큼 반복
        if (supojasScores[i] > maxScore) { // 각각의 수포자가 기준으로 잡은 수포자1의 정답개수보다 많으면
            maxScore = supojasScores[i]; // 수포자1보다 인덱스가 빠른 위치에 넣음 (가장 점수 많이 맞춘 사람 순으로)
        }
    }

    for (let i = 0; i < supojasScores.length; i++) {    // 수포자들의 각 정답개수가 최대점수와 같은지 비교
        if (supojasScores[i] === maxScore) {    // 최대 점수랑 같으면 결과 배열에 수포자 번호(index) 넣음
            result.push(i + 1);
        }
    }

    return result
}

const value = solution([1, 2, 3, 4, 5])
console.log("return : ", value)


