// https://school.programmers.co.kr/learn/courses/30/lessons/159993
/**
 * [문제 설명]
 * 1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.
 * 미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.
 * 
 * [제한사항]
 * 5 ≤ maps의 길이 ≤ 100
 * 5 ≤ maps[i]의 길이 ≤ 100
 * maps[i]는 다음 5개의 문자들로만 이루어져 있습니다.
 * S : 시작 지점
 * E : 출구
 * L : 레버
 * O : 통로
 * X : 벽
 * 시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.
 * 출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.
 */

// BFS && 꼭 거쳐야하는 중간 지점이 있는 경우

// 출발지점 -> 레버 -> 도착지점
// 맵 제공 : 
// 위 아래 왼쪽 오른쪽이 간선, 간선의 가중치 공평하게 1

// dist 배열 : 2차원 배열로 만들기 , 거리 기록
// 정점 상태 : 좌표
// 이동 조건 : 지도 범위 이내 && 'X'가 아닐 것 && 방문한 적 없을 것

function solution(maps) {
    // { 'start' => [ 0, 0 ], 'lever' => [ 0, 4 ], 'end' => [ 4, 4 ] }
    const points = new Map();
    // 지도만들기 2차원 배열 : 만들면서 시작점 좌표, 레버 좌표, 도착점 좌표 얻기
    const defaultMap = maps.map((st, row)=>{
        if(st.includes('S')) points.set('start', [row, st.indexOf('S')]);
        if(st.includes('L')) points.set('lever', [row, st.indexOf('L')]);
        if(st.includes('E')) points.set('end', [row, st.indexOf('E')]);
        
        return [...st];
    });
    
    // 간선 만들기
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // dist 배열 만들기
    const limitX = defaultMap.length;
    const limitY = defaultMap[0].length;
    const dist = Array.from(Array(limitX), ()=>Array(limitY).fill(Infinity));
    
    // 큐에 시작점 넣기
    const queue = []; // 임시
    queue.push(points.get('start'));
    dist[points.get('start')[0]][points.get('start')[1]] = 0; // 시작점은 거리 0
    
    // BFS 시작
    while(queue.length > 0){
        // 정점 꺼내고
        const [x, y] = queue.shift();
        
        // 인접 정접 둘러보기. 이동가능하면 들어가서 거리 갱신 큐에 넣기. lever만나면 종료
        for(let k = 0 ; k < 4 ; k++){
            const nextX = x + dx[k];
            const nextY = y + dy[k];
            
            if(
                nextX >= 0 && nextX < limitX &&
                nextY >= 0 && nextY < limitY &&
                defaultMap[nextX][nextY] !== 'X' &&
                dist[nextX][nextY] === Infinity
            ){
                
                // lever에 도착했다면,
                if(defaultMap[nextX][nextY] === 'L'){
                    let leverDist = dist[x][y] + 1; // lever까지의 거리는 확보
                    // 큐 모두 비우고
                    queue.length = 0;
                    // 비워진 큐에 lever좌표 넣기
                    queue.push([nextX, nextY]);
                    
                    // 거리도 모두 리셋하고
                    for(let i = 0 ; i < limitX ; i++){
                        for(let j = 0 ; j < limitY ; j++){
                            dist[i][j] = Infinity;
                        }
                    }
                    // lever 까지 거리 기록
                    dist[nextX][nextY] = leverDist;
                    
                    // 현재 인접정점 둘러보는 것 스탑
                    break;
                    // 이제 lever 좌표부터 도착점까지 찾기.
                }
                // lever 좌표 도달 후 도착지점에 도착했다면,
                if(
                    dist[points.get('lever')[0]][points.get('lever')[1]] !== Infinity &&
                    defaultMap[nextX][nextY] === 'E'
                ){
                    dist[nextX][nextY] = dist[x][y] + 1;
                    // 도착지점까지 최단 거리 반환
                    return dist[nextX][nextY]
                }
                
                dist[nextX][nextY] = dist[x][y] + 1;
                queue.push([nextX, nextY]);
            }
        }
    }
    
    // 탈출 불가 시
    return -1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.37ms, 33.5MB)
// 테스트 2 〉	통과 (0.43ms, 33.5MB)
// 테스트 3 〉	통과 (0.72ms, 33.5MB)
// 테스트 4 〉	통과 (0.47ms, 33.6MB)
// 테스트 5 〉	통과 (0.48ms, 33.5MB)
// 테스트 6 〉	통과 (0.41ms, 33.5MB)
// 테스트 7 〉	통과 (1.80ms, 33.9MB)
// 테스트 8 〉	통과 (5.03ms, 34.3MB)
// 테스트 9 〉	통과 (0.43ms, 33.6MB)
// 테스트 10 〉	통과 (0.19ms, 33.5MB)
// 테스트 11 〉	통과 (1.02ms, 33.8MB)
// 테스트 12 〉	통과 (3.81ms, 34.5MB)
// 테스트 13 〉	통과 (4.78ms, 34.5MB)
// 테스트 14 〉	통과 (3.24ms, 34.5MB)
// 테스트 15 〉	통과 (1.19ms, 33.5MB)
// 테스트 16 〉	통과 (10.55ms, 38.1MB)
// 테스트 17 〉	통과 (18.78ms, 38.5MB)
// 테스트 18 〉	통과 (0.69ms, 33.5MB)
// 테스트 19 〉	통과 (0.49ms, 33.6MB)
// 테스트 20 〉	통과 (11.83ms, 38.4MB)
// 테스트 21 〉	통과 (1.71ms, 34MB)
// 테스트 22 〉	통과 (0.49ms, 33.5MB)
// 테스트 23 〉	통과 (0.48ms, 33.5MB)