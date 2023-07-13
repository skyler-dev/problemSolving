// https://school.programmers.co.kr/learn/courses/30/lessons/49189
/**
 * n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
 * 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
 */

// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

// DFS 버전
// 가능하면 BFS 사용 할 것 : 자바스크립트는 재귀 호출의 한계점이 낮아 스택콜 한계로 인해 런타임에러 발생
// 더욱이 최단경로 및 임의의 경로를 찾을 때는 BFS가 유리하다.

// 깊이 들어가는 조건
// 1. 아직 방문한 적 없고
// 2. "기존에 구해둔 도착노드까지의 최단거리"와, "지금 해당 경로에서 새로이 도착노드로 갈 때의 예상 거리" 중 후자가 더 최소일 때(최단 거리 갱신 가능)

// 깊이 들어간 후
// 1  방문체크
// 2. 최단 거리 갱신
// 3. (아직 갈 수 있는 곳이 있으면) 다음노드로 넘어가서, 더 깊게 들어 갈 수 있는 지 확인
// 4. (더이상 갈 수 있는 곳이 없으면) 방문해제

// 방문 체크해제 이유 : 
// 다음 경로가 최단경로 일수도 있디. 그러므로 새로운 다음 경로를 위해 해제해놓는다.

// 각각 `그래프, 최단거리, 방문 체크, 시작 노드 번호, 거리`
function dfs(graph, distance, check, src, count) {
    for (const dest of graph[src]) { // 간선들 중
        // count === distance[src]
        if (distance[dest] > count + 1 && !check[dest]) { // 새로운 예상거리가 더 최소 && 방문한적없는 정점이면,
            check[dest] = true; // 도착정점 방문처리
            distance[dest] = count + 1; // 도착정점까지 최단거리 갱신
                                                                                    //console.log(dest,"에 방문 중", check)
                                                                                    //console.log(distance)
            dfs(graph, distance, check, dest, count + 1); // 다음노드로 넘어가기(재귀)
            check[dest] = false; // 방문 해제
                                                                                    //console.log(dest,"에서 방문해제후", check)
        }
    }
}

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    
    // 방문체크용 배열
    const check = Array(n + 1).fill(false); 
    // 1번 노드와 거리를 기록하기 위한 배열(최단경로 찾기 위해 가장 최악의 거리로 초기화)
    const distance = Array(n + 1).fill(20001); 

    check[1] = true; // 1번은 미리 방문
    distance[1] = 1; // 1번 노드 스스로의 거리는 1
    dfs(graph, distance, check, 1, 1); // DFS 시작
    
    const max = Math.max(...distance.slice(1));
    return distance.filter(item => item === max).length;
}


// 정확성  테스트
// 테스트 1 〉	통과 (0.25ms, 33.5MB)
// 테스트 2 〉	통과 (0.27ms, 33.5MB)
// 테스트 3 〉	통과 (0.44ms, 33.5MB)
// 테스트 4 〉	통과 (3.88ms, 38.2MB)
// 테스트 5 〉	통과 (7.38ms, 38.5MB)
// 테스트 6 〉	통과 (35.18ms, 39.4MB)

// 자바스크립트는 재귀 호출의 한계점이 낮아 스택콜 한계로 인해 런타임에러 발생

// 테스트 7 〉	실패 (런타임 에러)
// 테스트 8 〉	실패 (런타임 에러)
// 테스트 9 〉	실패 (런타임 에러)


//   3 에 방문 중 [
//     false, true,
//     false, true,
//     false, false,
//     false
//   ]

//   6 에 방문 중 [
//     false, true,
//     false, true,
//     false, false,
//     true
//   ]

//   6 에서 방문해제후 [
//     false, true,
//     false, true,
//     false, false,
//     false
//   ]
//   4 에 방문 중 [
//     false, true,
//     false, true,
//     true,  false,
//     false
//   ]

//   2 에 방문 중 [
//     false, true,
//     true,  true,
//     true,  false,
//     false
//   ]

//   5 에 방문 중 [
//     false, true,
//     true,  true,
//     true,  true,
//     false
//   ]

//   5 에서 방문해제후 [
//     false, true,
//     true,  true,
//     true,  false,
//     false
//   ]
//   2 에서 방문해제후 [
//     false, true,
//     false, true,
//     true,  false,
//     false
//   ]
//   4 에서 방문해제후 [
//     false, true,
//     false, true,
//     false, false,
//     false
//   ]
//   2 에 방문 중 [
//     false, true,
//     true,  true,
//     false, false,
//     false
//   ]

//   5 에 방문 중 [
//     false, true,
//     true,  true,
//     false, true,
//     false
//   ]

//   5 에서 방문해제후 [
//     false, true,
//     true,  true,
//     false, false,
//     false
//   ]
//   2 에서 방문해제후 [
//     false, true,
//     false, true,
//     false, false,
//     false
//   ]
//   3 에서 방문해제후 [
//     false, true,
//     false, false,
//     false, false,
//     false
//   ]
//   2 에 방문 중 [
//     false, true,
//     true,  false,
//     false, false,
//     false
//   ]

//   5 에 방문 중 [
//     false, true,
//     true,  false,
//     false, true,
//     false
//   ]

//   5 에서 방문해제후 [
//     false, true,
//     true,  false,
//     false, false,
//     false
//   ]
//   2 에서 방문해제후 [
//     false, true,
//     false, false,
//     false, false,
//     false
//   ]