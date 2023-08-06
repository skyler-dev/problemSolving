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

// Tree & Set 

// 큐를 사용한 풀이보다 간결 (그러나 성능이 안정적이지 않음)
// 동일한 깊이에서, set으로 중복 제거
// 트리의 깊이 - 1 = 연산 횟수 (루트 깊이를 1이라 볼 때)

function solution (x, y, n) {
    let cnt = 0;
    let set = new Set();
    set.add(x);
    
    while(set.size){
        if(set.has(y)) return cnt;
        
        const children = new Set();
        for(const parent of set){
            if(parent + n <= y) children.add(parent + n);
            if(parent * 2 <= y) children.add(parent * 2);
            if(parent * 3 <= y) children.add(parent * 3);
        }
        // 다음 깊이로 넘어감
        set = children;
        cnt += 1;
    }
    
    return -1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.6MB)
// 테스트 5 〉	통과 (39.44ms, 52.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.6MB)
// 테스트 7 〉	통과 (36.36ms, 52MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (321.45ms, 83.5MB)
// 테스트 10 〉	통과 (359.42ms, 88.4MB)
// 테스트 11 〉	통과 (54.45ms, 56.7MB)
// 테스트 12 〉	통과 (0.09ms, 33.5MB)
// 테스트 13 〉	통과 (0.08ms, 33.6MB)
// 테스트 14 〉	통과 (4.25ms, 37.4MB)
// 테스트 15 〉	통과 (0.25ms, 33.6MB)
// 테스트 16 〉	통과 (0.77ms, 33.8MB)