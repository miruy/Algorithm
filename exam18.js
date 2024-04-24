// 신고 결과 받기
function solution(id_list, report, k) {

    let reportCount = {}; // 각 유저가 신고당한 횟수를 저장할 객체
    let mailCount = {}; // 각 유저가 받을 결과 메일의 수를 저장할 객체
    let reportedBy = {}; // 누가 누구를 신고했는지 저장할 객체

    // 초기화
    id_list.forEach(id => {
        reportCount[id] = 0;
        mailCount[id] = 0;
        reportedBy[id] = new Set();
    });

    // 신고 정보 처리
    report.forEach(r => {
        const [reporter, reported] = r.split(' ');
        if (!reportedBy[reported].has(reporter)) {
            reportCount[reported]++;
            reportedBy[reported].add(reporter);
        }
    });

    // 결과 메일 수 계산
    for (const [reported, reporters] of Object.entries(reportedBy)) {
        if (reportCount[reported] >= k) {
            reporters.forEach(reporter => {
                mailCount[reporter]++;
            });
        }
    }

    // 결과 반환
    return id_list.map(id => mailCount[id]);

}

const value = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)
console.log("return : ", value)


