// https://school.programmers.co.kr/learn/courses/30/lessons/154538
/**
 * [문제 설명]
 * 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.
 * x에 n을 더합니다
 * x에 2를 곱합니다.
 * x에 3을 곱합니다.
 * 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.
 * 
 * [제한사항]
 * 1 ≤ x ≤ y ≤ 1,000,000
 * 1 ≤ n < y
 */

// dp(보텀업)
// 3가지 풀이 중 가장 안정적

// 인덱스 : 결과값
// 값 : 연산 횟수

function solution(x, y, n) {
    const dp = new Array(y + 1).fill(Infinity);
    // 시작점 처리
    dp[x] = 0;
    
    // i는 결과값 후보
    for(let i = x ; i <= y ; i += 1){
        // 연산결과로 나올 수 없는 (방문한 적 없는) i는, 
        if(dp[i] === Infinity) continue;
        // 기존의 값과 계산된 값 비교
        if( i + n <= y ) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        if( i * 2 <= y ) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if( i * 3 <= y ) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
    return dp[y] === Infinity ? -1 : dp[y]
}

// 정확성  테스트
// 테스트 1 〉	통과 (9.84ms, 42.8MB)
// 테스트 2 〉	통과 (16.43ms, 51MB)
// 테스트 3 〉	통과 (10.86ms, 46.8MB)
// 테스트 4 〉	통과 (0.30ms, 33.7MB)
// 테스트 5 〉	통과 (5.37ms, 38.1MB)
// 테스트 6 〉	통과 (0.17ms, 33.6MB)
// 테스트 7 〉	통과 (9.14ms, 38.2MB)
// 테스트 8 〉	통과 (19.71ms, 51.9MB)
// 테스트 9 〉	통과 (26.20ms, 51.8MB)
// 테스트 10 〉	통과 (26.32ms, 51.9MB)
// 테스트 11 〉	통과 (21.45ms, 51.9MB)
// 테스트 12 〉	통과 (10.91ms, 45.8MB)
// 테스트 13 〉	통과 (12.45ms, 47.1MB)
// 테스트 14 〉	통과 (9.24ms, 40.4MB)
// 테스트 15 〉	통과 (16.08ms, 49.2MB)
// 테스트 16 〉	통과 (17.70ms, 51MB)