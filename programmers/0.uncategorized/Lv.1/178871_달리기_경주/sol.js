// https://school.programmers.co.kr/learn/courses/30/lessons/178871
/**
 * 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
 * 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
 */

function solution(players, callings) {
    // Map 초기화시 키가 등수인 버전, 선수인 버전 필요
    // 이유: 
    // 앞 선수를 알려면 등수로 사람을 찾아야 함
    // 추월시키려면 현재 선수가 몇등인지 찾아야 함
    const map = new Map();
    players.forEach((v,idx)=>{
        map.set(idx+1,v);
        map.set(v,idx+1)
    })
    callings.forEach((v,idx,arr)=>{
        const curRank = map.get(v);
        const bfrP = map.get(curRank-1);
        map.set(v,curRank-1);
        map.set(curRank-1, v);
        map.set(bfrP, curRank);
        map.set(curRank, bfrP);
    })
    const result = [];
    for(let i=1; i<=players.length; i++){
        result.push(map.get(i));
    }
    return result;
}

// 아래 코드는 시간초과 실패. 이유: 시간 복잡도
// 주요 제한사항 : 2 ≤ callings의 길이 ≤ 1,000,000
// function solution(players, callings) {
//     const currentPlayers = [...players];
//     callings.forEach((v,idx,arr)=>{
//         const tmp = v;
//         const curIdx = currentPlayers.indexOf(tmp);
//         currentPlayers.splice(curIdx,1);
//         currentPlayers.splice(curIdx-1,0,tmp);
        
//     })
//     return currentPlayers;
// }