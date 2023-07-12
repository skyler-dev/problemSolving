// https://school.programmers.co.kr/learn/courses/30/lessons/92334
/**
 * 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
 * * 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
 * * * 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
 * * *한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
 * * k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
 * * * 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
 * 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 */

// 주요 제한 사항 1 ≤ report의 길이 ≤ 200,000, 2 ≤ id_list의 길이 ≤ 1,000
function solution(id_list, report, k) {
    const idToRIdM = new Map();
    const rIdToCntM = new Map();
    report.forEach((item)=>{
        let [id, rid] = item.split(" "); // rid = reported id
        let cnt = rIdToCntM.get(rid)??0;
        if(!idToRIdM.has(id)){
            // (1) 처음 신고하는 유저일 경우
            // (1-1) 유저당 신고한 id 설정
            idToRIdM.set(id, [rid]);
            // (1-2) 신고당한 rid 당 신고당한 횟수 설정
            rIdToCntM.set(rid, cnt+1);
        }else{
            // (2) 다시 신고하는 유저일 경우
            // (2-1,2) 같은 유저를 여러번 신고하지 않은 경우만 추가 및 변경
            if(!idToRIdM.get(id).includes(rid)){
                idToRIdM.get(id).push(rid);
                rIdToCntM.set(rid, cnt+1);
            }
        }                    
    })
    // (3) 유저당 신고한 rid가 정지된 rid가 된 경우만 모아 반환
    let result =  id_list.map((id)=>{
        // 신고한 적 없는 유저의 id에겐 기본값 제공
        return (idToRIdM.get(id)??[0]).filter((rid)=>{
            return rIdToCntM.get(rid)>=k;
        }).length;
    })
    return result;
}