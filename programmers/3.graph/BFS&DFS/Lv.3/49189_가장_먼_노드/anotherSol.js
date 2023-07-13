// https://school.programmers.co.kr/learn/courses/30/lessons/49189
/**
 * n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
 * 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
 */

// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

// BFS + Queue 버전

class Queue {
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.queue[this.rear++] = value;
    }
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(n, edge) {
    // 그래프 구현
    const graph = Array.from(Array(n + 1), ()=>[]);
    for(const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    // 각 정점의 거리 기록 (방문처리 겸)
    const distance = Array(n + 1).fill(0);
    distance[1] = 1; // 첫 정점 방문처리

    // BFS
    const queue = new Queue();
    queue.enqueue(1);
    while(!queue.isEmpty()) {
        const src = queue.dequeue();
        // 인접 정점 방문
        for(const dest of graph[src]) {
            // 방문했던 곳은 무시
            // 방문하지 않았던 정점만,
            if(distance[dest] === 0) {
                // 큐에 추가하고
                queue.enqueue(dest);
                // 방문처리
                distance[dest] = distance[src] + 1;
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((v)=> v === max ).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.26ms, 33.4MB)
// 테스트 2 〉	통과 (0.37ms, 33.4MB)
// 테스트 3 〉	통과 (0.37ms, 33.5MB)
// 테스트 4 〉	통과 (0.57ms, 33.7MB)
// 테스트 5 〉	통과 (1.59ms, 33.9MB)
// 테스트 6 〉	통과 (3.47ms, 34.9MB)
// 테스트 7 〉	통과 (24.32ms, 48.5MB)
// 테스트 8 〉	통과 (37.52ms, 56MB)
// 테스트 9 〉	통과 (30.06ms, 55.7MB)