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

// BFS & Tree & Queue

// 따로 그래프 만들지 않고 주어진 간선으로 둘러보기
// Tree는 해당 노드까지 가는 경로가 하나뿐이지만, 결과값이 중복될 수 있으므로 dist 배열 생성

// 정점 상태 : 결과값
// 이동 조건 : x < 결과값 <= y && 방문한 적 없을 것
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

function solution(x, y, n) {
    // 간선 만들기
    const edges = [
        (parent)=>(parent += n),
        (parent)=>(parent *= 2),
        (parent)=>(parent *= 3),
    ];
    
    // dist 배열 만들기
    const dist = new Array(y+1).fill(Infinity);
    dist[x] = 0;
    
    // 큐에 시작정점 넣기
    const queue = new Queue();
    queue.enqueue(x);
    
    if(x === y) return 0;
    
    // BFS
    while(!queue.isEmpty()){
        const curX = queue.dequeue();
        
        // 간선 둘러보기
        for(let go of edges){
            const nextX = go(curX);
            
            // y에 도달했다면, 
            if(nextX === y) return dist[curX] + 1;
            if(nextX > y) continue;
            
            // 범위 이내 이고, 처음보는 결과값이면
            if(nextX <= y && dist[nextX] === Infinity){
                queue.enqueue(nextX);
                dist[nextX] = dist[curX] + 1;
            }
        }
    }
    return -1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (5.27ms, 39.7MB)
// 테스트 2 〉	통과 (12.79ms, 48.1MB)
// 테스트 3 〉	통과 (8.87ms, 43.8MB)
// 테스트 4 〉	통과 (0.25ms, 33.6MB)
// 테스트 5 〉	통과 (42.30ms, 40.4MB)
// 테스트 6 〉	통과 (0.24ms, 33.7MB)
// 테스트 7 〉	통과 (19.04ms, 40.5MB)
// 테스트 8 〉	통과 (13.25ms, 48.8MB)
// 테스트 9 〉	통과 (80.69ms, 57.6MB)
// 테스트 10 〉	통과 (68.31ms, 57.6MB)
// 테스트 11 〉	통과 (44.14ms, 54.2MB)
// 테스트 12 〉	통과 (8.54ms, 42.8MB)
// 테스트 13 〉	통과 (9.62ms, 44.3MB)
// 테스트 14 〉	통과 (5.47ms, 37.6MB)
// 테스트 15 〉	통과 (11.34ms, 46.2MB)
// 테스트 16 〉	통과 (12.30ms, 48MB)