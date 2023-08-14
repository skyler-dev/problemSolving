// https://school.programmers.co.kr/learn/courses/30/lessons/42861
/**
 * [문제 설명]
 * n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.
 * 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.
 * 
 * [제한사항]
 * 섬의 개수 n은 1 이상 100 이하입니다.
 * costs의 길이는 ((n-1) * n) / 2이하입니다.
 * 임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.
 * 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.
 * 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
 * 연결할 수 없는 섬은 주어지지 않습니다.
 */

// 최소의 비용으로 모든 섬이 서로 통행 가능하도록 -> 크루스칼
// 무방향

function solution(n, costs) {
    let result = 0;
    // 간선 정렬
    const sortedEdges = costs.sort((a, b)=>a[2]-b[2]);
    // 부모 테이블 초기화
    const parent = Array.from(Array(n), (_,i)=>i);
    
    // 정렬된 간선 순회(그리디)
    for(const [a, b, cost] of sortedEdges){
        // 사이클이 발생하지 않는 경우에만, union 연산
        if(!compare(parent, a, b)){
            result += cost; // 최소신장 트리에 포함되는 가중치만 모으기
            union(parent, a, b);
        }
        // 사이클의 경우, 최소신장트리에 포함하지 않음
    }
    return result; // 최종 비용 반환
}

// find 연산(루트노드 찾기)
function find(parent, x){
    if(parent[x] === x) return x; // 루트
    // 경로압축 최적화
    return parent[x] = find(parent, parent[x]);
}

// union 연산(하나의 집합으로 합치기)
function union(parent, a, b){
    a = find(parent, a); // a의 루트
    b = find(parent, b); // b의 루트
    // 더 번호가 작은 노드가 부모노드가 되도록 규칙
    if(a < b){ 
        parent[b] = a;
    } else {
        parent[a] = b;
    }
}

// 두 정점이 같은 집합에 속하는 지 확인
function compare(parent, a, b){
    a = find(parent, a); // a의 루트
    b = find(parent, b); // b의 루트
    return a === b;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.22ms, 33.5MB)
// 테스트 4 〉	통과 (0.30ms, 33.4MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.40ms, 33.6MB)
// 테스트 7 〉	통과 (0.30ms, 33.5MB)
// 테스트 8 〉	통과 (0.20ms, 33.4MB)