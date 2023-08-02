// https://school.programmers.co.kr/learn/courses/30/lessons/49191
/**
 * [문제 설명]
 * n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
 * 선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.
 * 
 * [제한 사항]
 * * 선수의 수는 1명 이상 100명 이하입니다.
 * * 경기 결과는 1개 이상 4,500개 이하입니다.
 * * results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
 * * 모든 경기 결과에는 모순이 없습니다.
 */

// 정확하게 순위를 매길 수 있는 선수 : 
// 1. 다른 모든 정점과 간선으로 연결되어 있는 경우
// 2. 연결되어 있지 않은 정점이라도, src > mid 이고, mid > dest이면, src > dest 이므로 src정점과 dest정점 사이를 [src, dest]로 연결가능

// mid = 거쳐가는 정점
// src = 출발 정점
// dest = 도착 정점

// 플로이드와샬(O(n^3))
// 거쳐가는 정점을 반복문의 중심에 있게 해서 (이차원배열을 갱신해나가며) 문제를 해결하는 방법
// 알고리즘 참고 : 나동빈님 블로그 https://blog.naver.com/ndb796/221234427842
// 참고
// - 한 지점에서 다른 특정 지점까지의 최단 경로를 구해야 하는 경우 → 다익스트라
// - 모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구해야 하는 경우 → 플로이드 워셜

function solution(n, results) {
    // 각 정점의 간선 수 기록
    const edge = Array(n+1).fill(0);
    edge[0] = null;
    
    
    // 인접행렬로 구현
    const graph = Array.from(Array(n+1), ()=>Array(n+1).fill(false));
    // 자기자신과 0번 인덱스는 범위 밖이므로, null로 초기화
    for(let i = 0 ; i < n + 1 ; i++) {
        graph[i][i] = null;
        graph[0][i] = null;
        graph[i][0] = null;
    }
    // 간선이 있으면 true, 없으면 false로 남음
    results.forEach(([src, dest])=>{
        graph[src][dest] = true;
        edge[src] += 1;
        edge[dest] += 1;
    })
    
    // 거쳐가는 정점을 기준으로 인접행렬 갱신
    for(let mid = 1 ; mid <= n ; mid++) {
        for(let src = 1 ; src <= n ; src++) {
            for(let dest = 1 ; dest <= n ; dest++) {
                if(graph[src][mid] === true && graph[mid][dest] === true && graph[src][dest]===false){
                    graph[src][dest] = true;
                    // 간선의 수도 갱신
                    edge[src] += 1;
                    edge[dest] += 1;
                }
            } 
        }  
    }
    
    // 간선의 수가 n-1개인 정점이 모든 정점과 연결되어 있다.
    return edge.filter((e) => e === n-1).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.24ms, 33.4MB)
// 테스트 2 〉	통과 (0.25ms, 33.5MB)
// 테스트 3 〉	통과 (0.31ms, 33.5MB)
// 테스트 4 〉	통과 (0.58ms, 33.4MB)
// 테스트 5 〉	통과 (4.33ms, 36.5MB)
// 테스트 6 〉	통과 (4.41ms, 36.6MB)
// 테스트 7 〉	통과 (5.15ms, 36.9MB)
// 테스트 8 〉	통과 (7.40ms, 37.3MB)
// 테스트 9 〉	통과 (14.20ms, 37.7MB)
// 테스트 10 〉	통과 (10.25ms, 37.9MB)