// https://school.programmers.co.kr/learn/courses/30/lessons/42576
/**
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 */

function solution(participant, completion) {
    const map = new Map();
    for(let idx = 0 ; idx < participant.length ; idx++){
        // 참여자는 -1점
        const pScore = map.get(participant[idx]) ?? 0;
        map.set(participant[idx], pScore-1);
        // 완주자는 +1점
        if(!completion[idx]) break;
        const cScore = map.get(completion[idx]) ?? 0;
        map.set(completion[idx], cScore+1);
    }
    // 참여도하고 완주도 하면 0점
    // 예: 동명이인 모두 완주하면 0점, 한명이 완주 못하면 -1점
    for(let [name, score] of map){
        if(score<0) return name;
    }
}