// https://school.programmers.co.kr/learn/courses/30/lessons/86971
/**
 * [문제 설명]
 * n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.
 * 송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.
 * 
 * [제한사항]
 * n은 2 이상 100 이하인 자연수입니다.
 * wires는 길이가 n-1인 정수형 2차원 배열입니다.
 * * wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
 * * 1 ≤ v1 < v2 ≤ n 입니다.
 * * 전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.
 */

// 완전 탐색 & union-find

// 하나 끊어서, 노드의 개수를 최대한 비슷하게 두 전력망으로 나누기
// 송전탑 개수 차이 반환

function solution(n, wires) {
    let dif = Infinity;
    // 완전 탐색(모든 경우 계산)
    for(let i = 0 ; i < wires.length ; i++){
        // 부모 테이블 초기화
        const parent = Array.from(Array(n + 1), (_,i)=>i); // 노드 번호 1부터 시작
        
        const iterator = wires.entries();
        for(const [idx, [a, b]] of iterator){
            // 간선 하나씩 빼기
            if(idx === i) continue;
            
            // 서로소 집합 자료구조 만들기
            union(parent, a, b);
        }
        // 모든 union 함수 처리후, 각 원소에 대해 find 함수 수행
        for(let i = 1 ; i <= n ; i++){
            parent[i] = find(parent, i);
        }
        const rootA = parent[1];
        let cnt = 0;
        for(let p of parent){
            if(p === rootA) cnt++;
        }
        // A = cnt
        // B = n- cnt
        // 차이 = |B-A| = |n-2cnt|
        dif = Math.min(dif, Math.abs(n-2*cnt));
    }
    return dif;
}

function find(parent, x){
    if(parent[x] === x) return x;
    // 경로 압축 최적화
    return parent[x] = find(parent, parent[x]);
}

function union(parent, a, b){
    a = find(parent, a); // a의 루트
    b = find(parent, b); // b의 루트
    
    if(a < b){
        parent[b] = a;
    } else {
        parent[a] = b;  
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (26.14ms, 38.2MB)
// 테스트 2 〉	통과 (19.65ms, 38.1MB)
// 테스트 3 〉	통과 (13.95ms, 37.9MB)
// 테스트 4 〉	통과 (14.06ms, 37.8MB)
// 테스트 5 〉	통과 (15.98ms, 37.8MB)
// 테스트 6 〉	통과 (0.35ms, 33.5MB)
// 테스트 7 〉	통과 (0.24ms, 33.6MB)
// 테스트 8 〉	통과 (0.64ms, 33.8MB)
// 테스트 9 〉	통과 (0.82ms, 33.7MB)
// 테스트 10 〉	통과 (19.43ms, 38.1MB)
// 테스트 11 〉	통과 (20.58ms, 38.1MB)
// 테스트 12 〉	통과 (19.68ms, 38.2MB)
// 테스트 13 〉	통과 (19.77ms, 38.3MB)