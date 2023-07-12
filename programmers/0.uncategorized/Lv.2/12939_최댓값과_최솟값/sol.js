// https://school.programmers.co.kr/learn/courses/30/lessons/12939
/**
 * 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
 * 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
 */

function solution(s) {
    const nums = s.split(' ');
    let min = Infinity;
    let max = -Infinity;
    for(let num of nums){
        if(num==='') continue;
        min = Math.min(min, +num);
        max = Math.max(max, +num);
    }
    return `${min} ${max}`;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 33.5MB)
// 테스트 2 〉	통과 (0.17ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.24ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.4MB)
// 테스트 10 〉	통과 (0.18ms, 33.6MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.22ms, 33.6MB)