// 체육복
function solution(n, lost, reserve) {

    const realLost = lost.filter(l => !reserve.includes(l)); // 체육복 잃어버린 학생 들 중 여벌을 가지고 온 학생이 있는지 확인
    let realReserve = reserve.filter(r => !lost.includes(r)); // 여벌을 가지고 온 학생 중 체육복을 잃어버린 학생이 있는지 확인

    realLost.sort((a, b) => a - b); // 뒤로 갈수록 커지는 정렬(오름차순)
    realReserve.sort((a, b) => a - b); // 뒤로 갈수록 커지는 정렬(오름차순)

    realLost.forEach(lostStudent => {

        // findIndex() : 괄혼 안 조건문을 만족하는 결과의 첫번째 요소 인덱스 -> forEach문에서 사용하였으므로 반복해서 조건문 만족하는 결과의 요소를 가져올
        // reserveStudent : 여벌을 가지고온 학생의 번호, lostStudent : 체육복 잃어버린 학생 번호
        // 여벌을 가지고온 학생의 번호 - 체육복 잃어버린 학생 번호 : 두 학생의 번호 차이
        // 두 학생의 번호 차이가 1보다 작거나 같다 == 바로 앞뒤에 있는 학생 == 체육복을 빌려줄 수 있음
        const index = realReserve.findIndex(reserveStudent => Math.abs(reserveStudent - lostStudent) <= 1);

        if (index !== -1) { // -1이 아니다 == 조건문을 만족하는 요소가 있다면 -> 체육복을 빌릴 수 있음
            realReserve.splice(index, 1); // 체육복을 빌려주었으니 여벌 체육복 있는 학생수 한명 제거
        } else { // 조건문을 만족하는 요소가 없다면 -> 체육복을 못 빌림
            n -= 1; // 수업에 참여할 수 있는 학생 수 감소
        }
    });

}

const value = solution(5, [2, 4], [1, 3, 5])
console.log("return : ", value)


