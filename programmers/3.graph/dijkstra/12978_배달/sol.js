// https://school.programmers.co.kr/learn/courses/30/lessons/12978
/**
 * [문제 설명]
 * N개의 마을로 이루어진 나라가 있습니다. 이 나라의 각 마을에는 1부터 N까지의 번호가 각각 하나씩 부여되어 있습니다. 각 마을은 양방향으로 통행할 수 있는 도로로 연결되어 있는데, 서로 다른 마을 간에 이동할 때는 이 도로를 지나야 합니다. 도로를 지날 때 걸리는 시간은 도로별로 다릅니다. 현재 1번 마을에 있는 음식점에서 각 마을로 음식 배달을 하려고 합니다. 각 마을로부터 음식 주문을 받으려고 하는데, N개의 마을 중에서 K 시간 이하로 배달이 가능한 마을에서만 주문을 받으려고 합니다. 다음은 N = 5, K = 3인 경우의 예시입니다.
 * 배달_1_uxun8t.png
 * 위 그림에서 1번 마을에 있는 음식점은 [1, 2, 4, 5] 번 마을까지는 3 이하의 시간에 배달할 수 있습니다. 그러나 3번 마을까지는 3시간 이내로 배달할 수 있는 경로가 없으므로 3번 마을에서는 주문을 받지 않습니다. 따라서 1번 마을에 있는 음식점이 배달 주문을 받을 수 있는 마을은 4개가 됩니다.
 * 마을의 개수 N, 각 마을을 연결하는 도로의 정보 road, 음식 배달이 가능한 시간 K가 매개변수로 주어질 때, 음식 주문을 받을 수 있는 마을의 개수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * [제한사항]
 * 마을의 개수 N은 1 이상 50 이하의 자연수입니다.
 * road의 길이(도로 정보의 개수)는 1 이상 2,000 이하입니다.
 * road의 각 원소는 마을을 연결하고 있는 각 도로의 정보를 나타냅니다.
 * road는 길이가 3인 배열이며, 순서대로 (a, b, c)를 나타냅니다.
 * * a, b(1 ≤ a, b ≤ N, a != b)는 도로가 연결하는 두 마을의 번호이며, c(1 ≤ c ≤ 10,000, c는 자연수)는 도로를 지나는데 걸리는 시간입니다.
 * * 두 마을 a, b를 연결하는 도로는 여러 개가 있을 수 있습니다.
 * * 한 도로의 정보가 여러 번 중복해서 주어지지 않습니다.
 * K는 음식 배달이 가능한 시간을 나타내며, 1 이상 500,000 이하입니다.
 * 임의의 두 마을간에 항상 이동 가능한 경로가 존재합니다.
 * 1번 마을에 있는 음식점이 K 이하의 시간에 배달이 가능한 마을의 개수를 return 하면 됩니다.
 */

// 거쳐가는 노드 기준 알고리즘 종류
// - 한 지점에서 다른 특정 지점까지의 최단 경로를 구해야 하는 경우 → 다익스트라
// - 모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구해야 하는 경우 → 플로이드 워셜

// 가중치
// 최소 비용이 K이하인 마을 갯수 반환
// 한 지점에서 다른 특정 지점까지의 최단 경로 구하기 -> 다익스트라

class MinHeap {
    constructor() {
        this.heap = [null];
    }
    _swap(aIdx, bIdx) {
        [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    push(value) {
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx/2);
        // 정점 상태 : 객체
        while(parentIdx !== 0 && this.heap[parentIdx].cost > value.cost) {
            this._swap(currentIdx, parentIdx);
            
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2);
        }
    }
    pop() {
        if(this.isEmpty()) return;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        // 정점 상태 : 객체
        while(
            this.heap[currentIdx].cost > this.heap[leftIdx]?.cost ||
            this.heap[currentIdx].cost > this.heap[rightIdx]?.cost 
        ) {
            if(this.heap[leftIdx].cost > this.heap[rightIdx]?.cost) { // 왼쪽 인덱스는 무조건 있음
                this._swap(currentIdx, rightIdx);
                currentIdx = rightIdx;
            } else {
                this._swap(currentIdx, leftIdx);
                currentIdx = leftIdx;
            }
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1;
        }
        
        return returnValue;
    }
}
// 정점, 간선 정보 필요
function dijkstra(road, N) {
    const heap = new MinHeap(); // 현재 가장 가까운 노드 저장 목적
    heap.push({ node : 1, cost : 0 });
    
    const dist = new Array(N + 1).fill(Infinity); // 계산하기 편하도록 인덱스 1부터 사용
    dist[1] = 0; // 자기자신까지 도달하는 거리
    
    // heap을 모두 비울 때까지
    while(!heap.isEmpty()){
        const { node: currentNode, cost: currentCost } = heap.pop();
        
        // 해당 노드를 이미 처리한 적이 있다면 무시
        if(dist[currentNode] < currentCost) continue;
        
        // 비용 계산, 최단거리 갱신
        for(const [src, dest, eachCost] of road) {
            const nextCost = currentCost + eachCost;
            // 하나의 간선이지만, 양방향으로 제시되었다.
            if(src === currentNode && nextCost < dist[dest]) {
                // src가 현재 선택된 정점이면서 목적지까지 더 저렴한 경우
                dist[dest] = nextCost;
                heap.push({ node: dest, cost: nextCost });
            } else if (dest === currentNode && nextCost < dist[src]) {
                dist[src] = nextCost;
                heap.push({ node: src, cost: nextCost });
            }
        }
    }
    
    return dist; // 각 노드로의 최단 거리
}

function solution(N, road, K) {
    const dist = dijkstra(road, N);
    return dist.filter((v)=>v <= K).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.42ms, 33.4MB)
// 테스트 2 〉	통과 (0.41ms, 33.4MB)
// 테스트 3 〉	통과 (0.40ms, 33.5MB)
// 테스트 4 〉	통과 (0.41ms, 33.4MB)
// 테스트 5 〉	통과 (0.58ms, 33.5MB)
// 테스트 6 〉	통과 (0.38ms, 33.6MB)
// 테스트 7 〉	통과 (0.39ms, 33.6MB)
// 테스트 8 〉	통과 (0.40ms, 33.5MB)
// 테스트 9 〉	통과 (0.37ms, 33.6MB)
// 테스트 10 〉	통과 (0.57ms, 33.5MB)
// 테스트 11 〉	통과 (0.46ms, 33.5MB)
// 테스트 12 〉	통과 (0.93ms, 33.8MB)
// 테스트 13 〉	통과 (0.83ms, 33.8MB)
// 테스트 14 〉	통과 (12.72ms, 39.2MB)
// 테스트 15 〉	통과 (13.31ms, 39.4MB)
// 테스트 16 〉	통과 (0.55ms, 33.5MB)
// 테스트 17 〉	통과 (0.64ms, 33.7MB)
// 테스트 18 〉	통과 (11.68ms, 38.7MB)
// 테스트 19 〉	통과 (12.90ms, 39.3MB)
// 테스트 20 〉	통과 (11.85ms, 38.8MB)
// 테스트 21 〉	통과 (18.32ms, 40.1MB)
// 테스트 22 〉	통과 (12.62ms, 38.7MB)
// 테스트 23 〉	통과 (18.27ms, 40MB)
// 테스트 24 〉	통과 (12.92ms, 39.2MB)
// 테스트 25 〉	통과 (23.28ms, 40.2MB)
// 테스트 26 〉	통과 (17.85ms, 40.1MB)
// 테스트 27 〉	통과 (19.91ms, 40MB)
// 테스트 28 〉	통과 (19.81ms, 40MB)
// 테스트 29 〉	통과 (19.26ms, 40.1MB)
// 테스트 30 〉	통과 (18.06ms, 40.1MB)
// 테스트 31 〉	통과 (1.08ms, 34MB)
// 테스트 32 〉	통과 (1.73ms, 34.5MB)

// heap 안의 노드 중복으로 들어가면?
// 해당 노드를 이미 처리한 적이 있다면 무시

// 테스트 케이스 추가 (중복처리 확인용)
// N : 6
// road : [[1, 4, 2], [1, 2, 5], [1, 3, 1], [4, 5, 2], [3, 5, 4], [3, 6, 7], [2, 6, 12], [5, 6, 3]]
// K : 3
// 반환값 : 3

// -----------
// MinHeap { heap: [ null, { node: 1, cost: 0 } ] }
// 꺼낸 원소: { node: 1, cost: 0 }
// for 루프 안
// if문 1
// for 루프 안
// if문 1
// for 루프 안
// if문 1
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// -----------
// MinHeap {
//   heap: [
//     null,
//     { node: 3, cost: 1 },
//     { node: 2, cost: 5 },
//     { node: 4, cost: 2 }
//   ]
// }
// 꺼낸 원소: { node: 3, cost: 1 }
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// if문 1
// for 루프 안
// if문 1
// for 루프 안
// for 루프 안
// -----------
// MinHeap {
//   heap: [
//     null,
//     { node: 4, cost: 2 },
//     { node: 2, cost: 5 },
//     { node: 5, cost: 5 },
//     { node: 6, cost: 8 }
//   ]
// }
// 꺼낸 원소: { node: 4, cost: 2 }
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// if문 1
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// -----------
// MinHeap {
//   heap: [
//     null,
//     { node: 5, cost: 4 },
//     { node: 2, cost: 5 },
//     { node: 5, cost: 5 },
//     { node: 6, cost: 8 }
//   ]
// }
// 꺼낸 원소: { node: 5, cost: 4 }
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// if문 1
// -----------
// MinHeap {
//   heap: [
//     null,
//     { node: 2, cost: 5 },
//     { node: 6, cost: 7 },
//     { node: 5, cost: 5 },
//     { node: 6, cost: 8 }
//   ]
// }
// 꺼낸 원소: { node: 2, cost: 5 }
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// -----------
// MinHeap {
//   heap: [
//     null,
//     { node: 5, cost: 5 },
//     { node: 6, cost: 7 },
//     { node: 6, cost: 8 }
//   ]
// }
// 꺼낸 원소: { node: 5, cost: 5 }     // -> node 5는 이미 처리한 적이 있어 무시됨
// -----------
// MinHeap { heap: [ null, { node: 6, cost: 7 }, { node: 6, cost: 8 } ] }
// 꺼낸 원소: { node: 6, cost: 7 }
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// for 루프 안
// -----------
// MinHeap { heap: [ null, { node: 6, cost: 8 } ] }
// 꺼낸 원소: { node: 6, cost: 8 }      // -> node 6은 이미 처리한 적이 있어 무시됨

