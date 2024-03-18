// K번째 수
function solution(array, commands) {
    return commands.map((command) => {
        const answer = array.slice(command[0] - 1, command[1]).sort((a, b) => (a - b))
        return answer[command[2] - 1]
    });
}

const value = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
console.log("return : ", value)


