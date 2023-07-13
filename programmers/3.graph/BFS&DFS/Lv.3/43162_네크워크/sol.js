// https://school.programmers.co.kr/learn/courses/30/lessons/43162
/**
 * [문제 설명]
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
 * 
 * [제한사항]
 * * 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
 * * 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
 * * i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
 * * computer[i][i]는 항상 1입니다.
 */

// 인접행렬 & 비연결 & DFS

// 모든 정점을 방문해야 함 -> DFS -> 방문 처리
// -> 최소값을 구하는 것이 아니므로 방문 해제 필요 없음

// 비연결 그래프 -> 루트 노드(?)가 여러 개
// 1. 방문처리 안되어 있으면 루트 노드(?)로 취급
// 2. DFS 시작
// 3. 연결된 모든 정점을 방문하면 DFS종료, 
// 4. 네트워크 갯수 갱신, 
// 5. 다음 루트 노드(?)의 DFS 시작

// 각각 `인접행렬, 컴퓨터 갯수, 방문체크, 시작노드 번호`
function dfs(computers, n, check, src) {
    // 간선들 중 (인접행렬 탐색)
    for(let dest = 0 ; dest < n ; dest++){
        // 방문할 수 있는 자식이 있다면,
        if(computers[src][dest] === 1 && !check[dest]){
            check[dest] = true;
            dfs(computers, n, check, dest);
        }            
    }
}

function solution(n, computers) {
    let netWork = 0;
    
    const check = new Array(n).fill(false);
    
    computers.forEach((_, src)=>{
        if(!check[src]){
            check[src] = true; // 미리 방문
            dfs(computers, n, check, src);
            netWork++;
        }
    })
    
    return netWork;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.18ms, 33.5MB)
// 테스트 2 〉	통과 (0.18ms, 33.4MB)
// 테스트 3 〉	통과 (0.26ms, 33.6MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.29ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.6MB)
// 테스트 8 〉	통과 (0.21ms, 33.4MB)
// 테스트 9 〉	통과 (0.22ms, 33.5MB)
// 테스트 10 〉	통과 (0.19ms, 33.5MB)
// 테스트 11 〉	통과 (0.43ms, 33.7MB)
// 테스트 12 〉	통과 (0.38ms, 33.8MB)
// 테스트 13 〉	통과 (0.26ms, 33.6MB)