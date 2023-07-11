// https://school.programmers.co.kr/learn/courses/30/lessons/49189
/**
 * n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
 * 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
 */

// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
    // 인접리스트로 그래프 구현
    // 1. 정점의 수만큼 배열 만들기
    // 1-1.편의상 0이 아니라 1부터 시작하기(노드)
    const graph = Array.from(Array(n + 1), ()=>[]);
    // 2. 연결할 정점을 배열에 추가하기
    for(const [src, dest] of edge) {
        // 양방향 구현
        graph[src].push(dest);
        graph[dest].push(src);
    }

    // 각 정점의 거리 기록
    const distance = Array(n + 1).fill(0);
    distance[1] = 1; // 첫 정점

    // BFS
    const queue = [1];
    // 빈 큐가 되면 종료
    while(queue.length > 0) {
        const src = queue.shift();// shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해준다.
        for(const dest of graph[src]) {
            // 가지않은 경로는
            if(distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((v)=> v === max ).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (0.28ms, 33.4MB)
// 테스트 3 〉	통과 (0.29ms, 33.5MB)
// 테스트 4 〉	통과 (0.48ms, 33.8MB)
// 테스트 5 〉	통과 (1.36ms, 34.1MB)
// 테스트 6 〉	통과 (2.79ms, 35.7MB)
// 테스트 7 〉	통과 (21.10ms, 48.9MB)
// 테스트 8 〉	통과 (38.86ms, 55.2MB)
// 테스트 9 〉	통과 (43.14ms, 55.9MB) // shift 최적화 어려워짐