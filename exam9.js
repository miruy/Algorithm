// 모의고사
function solution(answers) {

    const supojasAnswers = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    const supojasScores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {  // 수포자들의 답과 정답틀 비교
        for (let j = 0; j < supojasAnswers.length; j++) {
            const supojaAnswer = supojasAnswers[j];

            if (answers[i] === supojaAnswer[i % supojaAnswer.length]) {
                supojasScores[j]++;
            }
        }
    }

}

const value = solution([1, 3, 2, 4, 2])
console.log("return : ", value)


