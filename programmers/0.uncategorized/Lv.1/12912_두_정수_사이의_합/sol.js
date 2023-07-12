// https://school.programmers.co.kr/learn/courses/30/lessons/12912
/**
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 */

function solution(a, b) {
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    const arr = Array.from({length: max-min+1}, (_,i)=>min+i);
    return arr.reduce((acc,v)=>acc+v,0)
}

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.6MB)
// 테스트 3 〉	통과 (0.09ms, 33.6MB)

// 테스트 4 〉	통과 (1692.54ms, 184MB)
// 테스트 5 〉	통과 (1341.56ms, 139MB)
// 테스트 6 〉	통과 (1097.27ms, 123MB)
// 테스트 7 〉	통과 (451.95ms, 78MB)
// 테스트 8 〉	통과 (798.73ms, 105MB)
// 테스트 9 〉	통과 (590.61ms, 88.8MB)
// 테스트 10 〉	통과 (149.13ms, 50.1MB)

// 테스트 11 〉	통과 (0.64ms, 33.6MB)
// 테스트 12 〉	통과 (1.63ms, 33.6MB)
// 테스트 13 〉	통과 (0.79ms, 33.6MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.16ms, 33.5MB)
// 테스트 16 〉	통과 (0.38ms, 33.6MB)