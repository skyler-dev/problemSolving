// https://school.programmers.co.kr/learn/courses/30/lessons/12915
/**
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 */

function solution(strings, n) {
    return [...strings].sort((a,b)=>{
        const cpA = a.codePointAt(n);
        const cpB = b.codePointAt(n);
        // 인덱스 n의 글자가 같으면, 사전순 정렬. 비교연산자는 문자열 비교 가능하다.
        if(cpA===cpB) return a<b ? -1 : 1;
        return cpA - cpB;
    })
}