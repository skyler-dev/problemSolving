// https://school.programmers.co.kr/learn/courses/30/lessons/140107
/**
 * [문제 설명]
 * 좌표평면을 좋아하는 진수는 x축과 y축이 직교하는 2차원 좌표평면에 점을 찍으면서 놀고 있습니다. 진수는 두 양의 정수 k, d가 주어질 때 다음과 같이 점을 찍으려 합니다.
 * 원점(0, 0)으로부터 x축 방향으로 a*k(a = 0, 1, 2, 3 ...), y축 방향으로 b*k(b = 0, 1, 2, 3 ...)만큼 떨어진 위치에 점을 찍습니다.
 * 원점과 거리가 d를 넘는 위치에는 점을 찍지 않습니다.
 * 예를 들어, k가 2, d가 4인 경우에는 (0, 0), (0, 2), (0, 4), (2, 0), (2, 2), (4, 0) 위치에 점을 찍어 총 6개의 점을 찍습니다.
 * 정수 k와 원점과의 거리를 나타내는 정수 d가 주어졌을 때, 점이 총 몇 개 찍히는지 return 하는 solution 함수를 완성하세요.
 * 
 * [제한사항]
 * 1 ≤ k ≤ 1,000,000
 * 1 ≤ d ≤ 1,000,000
 */

// 시간복잡도 주의
// O(n)
function solution(k, d) {
    let cnt = 0;
    // k의 배수인 x 순회
    for(let x = 0 ; x <= d ; x += k) {
        // x에 따른 y 최대 위치 구하기
        let maxY = Math.sqrt(d**2 - x**2);
        // x가 동일 할 때, y가 k의 배수인 점의 갯수(1은 y가 0일 경우)
        cnt += Math.floor(maxY/k) + 1;
    }
    return cnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.51ms, 33.7MB)
// 테스트 4 〉	통과 (0.34ms, 33.5MB)
// 테스트 5 〉	통과 (0.72ms, 33.8MB)
// 테스트 6 〉	통과 (0.66ms, 33.8MB)
// 테스트 7 〉	통과 (0.61ms, 33.6MB)
// 테스트 8 〉	통과 (3.49ms, 37MB)
// 테스트 9 〉	통과 (0.70ms, 33.8MB)
// 테스트 10 〉	통과 (2.25ms, 37.1MB)
// 테스트 11 〉	통과 (7.76ms, 37.2MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)
// 테스트 13 〉	통과 (5.15ms, 37.4MB)
// 테스트 14 〉	통과 (4.03ms, 37.2MB)
// 테스트 15 〉	통과 (0.04ms, 33.5MB)
// 테스트 16 〉	통과 (0.04ms, 33.5MB)