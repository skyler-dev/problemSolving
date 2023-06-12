// https://school.programmers.co.kr/learn/courses/30/lessons/12912
/**
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 */

function solution(a, b) {
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    let result = 0;
    if(min===max) return min;
    for(let i = min ; i<=max ; i++){
        result += i
    }
    return result;
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)

// 테스트 4 〉	통과 (43.65ms, 36.7MB)
// 테스트 5 〉	통과 (16.55ms, 36.7MB)
// 테스트 6 〉	통과 (13.87ms, 36.7MB)
// 테스트 7 〉	통과 (7.37ms, 36.6MB)
// 테스트 8 〉	통과 (44.01ms, 36.7MB)
// 테스트 9 〉	통과 (9.24ms, 36.6MB)
// 테스트 10 〉	통과 (3.11ms, 36.6MB)

// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.25ms, 33.4MB)
// 테스트 13 〉	통과 (0.17ms, 33.4MB)
// 테스트 14 〉	통과 (0.04ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.4MB)
// 테스트 16 〉	통과 (0.13ms, 33.4MB)