// 신고 결과 받기
function solution(id_list, report, k) {

    let reportCount = {}; // 각 유저가 신고당한 횟수를 저장할 객체
    let mailCount = {}; // 각 유저가 받을 결과 메일의 수를 저장할 객체
    let reportedBy = {}; // 누가 누구를 신고했는지 저장할 객체

    // 초기화 == 모든 사용자가 처음에는 신고를 받지 않았음을 표시
    id_list.forEach(id => {
        console.log("id", id)
        reportCount[id] = 0; //  reportCount[id] : key-value
        mailCount[id] = 0;
        reportedBy[id] = new Set();
    });

    // 신고 정보 처리
    report.forEach(r => {
        console.log("r", r)
        const [reporter, reported] = r.split(' '); // ["신고자" "신고된자"] 형태이므로 공백을 기준으로 나누어 reporter, reported로 추출

        // 신고자가 (해당 신고자가 신고한) 신고된자를 신고한 적이 없다면 -> 신고 중복 방지를 위한 코드
        // 어떤 유저가 특정 유저를 처음 신고했을 때 작동하는 코드
        if (!reportedBy[reported].has(reporter)) { // has() : Set 객체 내에 존재하는지 여부를 확인할 때 사용(boolean)
            reportCount[reported]++; // 신고된자에 대한 신고횟수 증가, key-value 형식
            reportedBy[reported].add(reporter); // 신고자/신고된자 목록 배열에 key-value형식으로 객체 추가
        }
    });

    // 결과 메일 수 계산

    // Object.entries() : 객체를 배열 형태로 반환해주는 메서드
    /*
     ex)
     const reportedBy = {"muzi" : "prodo", "neo" : "apeach"}
     console.log(Object.entries(reportedBy)

     결과
     ["muzi", "prodo"], ["neo", "apeach"]
    */
    for (const [reported, reporters] of Object.entries(reportedBy)) { // 객체를 배열 형태로 반환하여 key, value로 추출
        if (reportCount[reported] >= k) { // 신고된자의 신고됫 횟수가 정짖기준횟수 K 보다 크거나 같으면
            reporters.forEach(reporter => { // 해당 신고된자를 정지시켜야하므로 해당 신고된자를 신고한 신고자에게 매일발송위한 코드 처리
                mailCount[reporter]++; // 해당 신고자에게 매일 보낸 횟수 증가
            });
        }
    }

    // 결과 반환
    return id_list.map(id => mailCount[id]); // key-value 형식으로 각 유저들이 받은 메일 횟수를 리턴

}

const value = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)
console.log("return : ", value)


