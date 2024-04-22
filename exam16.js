// 키패드 누르기

/*
맨해튼 거리 계산
 격자 모양의 맵에서 두 점 사이의 최단 거리를 구할 때, 대각선 이동이 허용되지 않고 오로지 상하좌우 방향으로만 이동할 수 있을 때의 거리를 말합니다.
이는 격자 형태의 도시에서 두 지점 사이를 이동할 때, 거리를 측정하는 방법으로 사용됩니다.
 */

function solution(numbers, hand) {

    const keypad = { // 키패드 좌표
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };

    let result = '';
    let left = keypad['*']; // 왼손 검지 시작을 *로 초기화
    let right = keypad['#']; // 오른손 검지 시작을 #으로 초기화

    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) { // 왼손으로 누를 수 있는 1, 4, 7일 경우
            result += 'L'; // 결과값 리턴을 위한 L 문자 저장
            left = keypad[num]; // 왼손 배열에 넣기
        } else if (num === 3 || num === 6 || num === 9) { // 오른손으로 누를 수 있는 3, 6, 9일 경우
            result += 'R'; // 결과값 리턴을 위한 R 문자 저장
            right = keypad[num]; // 오른손 배열에 넣기
        } else { // 중간 자리 숫자인 2,5,8,0의 경우 왼손과 오른손 중 가까운 손가락이 이동해야하므로 우선 각 손가락의 거리 계산
            const target = keypad[num];

            // Math.abs() : 절댓값으로 표현
            // left[0] - target[0] : 왼손의 현재 위치와 목표 위치 사이의 x축 거리 차이
            // left[1] - target[1] : 왼손의 현재 위치와 목표 위치 사이의 y축 거리 차이
            // 위 두 값을 더함으로써 왼손이 목표 위치까지 이동하는데 필요한 총 거리를 구할 수 있음
            const leftDist = Math.abs(left[0] - target[0]) + Math.abs(left[1] - target[1]);

            // left[0] - target[0] : 오른손의 현재 위치와 목표 위치 사이의 x축 거리 차이
            // left[1] - target[1] : 오른손의 현재 위치와 목표 위치 사이의 y축 거리 차이
            // 위 두 값을 더함으로써 오른손이 목표 위치까지 이동하는데 필요한 총 거리를 구할 수 있음
            const rightDist = Math.abs(right[0] - target[0]) + Math.abs(right[1] - target[1]);

            if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) { // 왼손이 이동해야할 거리가 오른손이 이동해야할 거리보다 작다면 -> 더 가깝다는 의미
                result += 'L';
                left = target;
            } else {
                result += 'R';
                right = target;
            }
        }
    });

    return result;

}

const value = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
console.log("return : ", value)


