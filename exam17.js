// 체육복
function solution(n, lost, reserve) {

    const realLost = lost.filter(l => !reserve.includes(l)); // 체육복 잃어버린 학생 들 중 여벌을 가지고 온 학생이 있는지 확인
    let realReserve = reserve.filter(r => !lost.includes(r)); // 여벌을 가지고 온 학생 중 체육복을 잃어버린 학생이 있는지 확인

    realLost.sort((a, b) => a - b); // 뒤로 갈수록 커지는 정렬(오름차순)
    realReserve.sort((a, b) => a - b); // 뒤로 갈수록 커지는 정렬(오름차순)

    realLost.forEach(lostStudent => {

        // 체육복을 빌려줄 수 있는 만큼 최대한 빌려주고 남은 학생 수가 1보다 작거나 같을 떼 남은 그 학생의 번호
        const index = realReserve.findIndex(reserveStudent => Math.abs(reserveStudent - lostStudent) <= 1);

        if (index !== -1) {
            realReserve.splice(index, 1); // 여벌 체육복 있는 학생에서 제거하여, 다른 학생에게 빌려줄 수 없게 함
        } else {
            n -= 1; // 체육복을 빌리지 못한 경우, 수업에 참여할 수 있는 학생 수 감소
        }
    });

}

const value = solution(5, [2, 4], [1, 3, 5])
console.log("return : ", value)


