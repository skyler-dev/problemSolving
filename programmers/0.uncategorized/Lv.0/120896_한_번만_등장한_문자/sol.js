// https://school.programmers.co.kr/learn/courses/30/lessons/120896
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
    const answer = [];
    for(v of s){
        if(s.indexOf(v)===s.lastIndexOf(v)){
            answer.push(v);
        }
    }
    return answer.sort().join("");
}