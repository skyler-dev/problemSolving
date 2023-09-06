// https://school.programmers.co.kr/learn/courses/30/lessons/154540
/**
 * [문제 설명]
 * 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다. 지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다. 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며, 격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다. 지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다. 이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다. 지도의 각 칸에 적힌 숫자는 식량을 나타내는데, 상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다. 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.
 * 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.
 * 
 * [제한사항]
 * 3 ≤ maps의 길이 ≤ 100
 * * 3 ≤ maps[i]의 길이 ≤ 100
 * * maps[i]는 'X' 또는 1 과 9 사이의 자연수로 이루어진 문자열입니다.
 * * 지도는 직사각형 형태입니다.
 */

// DFS

// x와 y 순서 주의
// 좌표계에서는 (x, y) 이지만, 2차원 배열에서는 array[y][x] 여야 해당 값에 접근 가능

// 각각 '지도, 방문체크, x 좌표 방향들, y 좌표 방향들, 지도의 x 한계, 지도의 y 한계, 모으고 있는 식량들, 현재 노드 좌표'
function dfs(maps, check, dx, dy, xLimit, yLimit, foods, currentNode) {
    const [y, x] = currentNode;
    // 간선들 중 방문할 수 있는 곳이 남아 있는 지 확인
    for(let k = 0 ; k < 4 ; k++){
        const nextX = x + dx[k];
        const nextY = y + dy[k];
        if(
            nextX >= 0 && nextX < xLimit &&
            nextY >= 0 && nextY < yLimit &&
            maps[nextY][nextX] !== "X" &&
            !check[nextY][nextX]
        ){
            // 아직은 현재 노드에 있지만,
            foods.push(+maps[nextY][nextX]); // 미리 인접노드의 식량 담고
            check[nextY][nextX] = true; // 미리 방문처리하고
            // 인접노드로 이동
            dfs(maps, check, dx, dy, xLimit, yLimit, foods, [nextY, nextX]); 
        }
    }
}

function solution(maps) {
    // 지도
    const yLimit = maps.length;
    const xLimit = maps[0].length;
    // 방문처리
    const check = Array.from(Array(yLimit), ()=>Array(xLimit).fill(false));
    // 땅 별로 식량의 합을 담을 배열
    const result = [];
    // 인접 노드로 갈 4 방향
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 지도를 둘러보며, X가 아니고, 방문한 적 없으면 깊게 들어가보기
    maps.forEach((rows, y)=>{
        rows.split('').forEach((item, x)=>{
            if(item !== 'X' && !check[y][x]){
                const foods = [+item]; // 현재 땅(노드)의 식량을 담고
                check[y][x] = true; // 방문처리하고
                dfs(maps, check, dx, dy, xLimit, yLimit, foods, [y, x]); // 이동 시작
                // 모은 식량들을 모두 합해서 기록
                result.push(foods.reduce((acc, cur) => acc + cur));
            }
        })
    })
    
    // 식량이 있는 땅이 없었다면 [-1] 반환
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.5MB)
// 테스트 2 〉	통과 (0.48ms, 33.5MB)
// 테스트 3 〉	통과 (0.37ms, 33.5MB)
// 테스트 4 〉	통과 (0.40ms, 33.7MB)
// 테스트 5 〉	통과 (0.97ms, 33.7MB)
// 테스트 6 〉	통과 (2.07ms, 37.6MB)
// 테스트 7 〉	통과 (1.01ms, 33.7MB)
// 테스트 8 〉	통과 (2.78ms, 37.9MB)
// 테스트 9 〉	통과 (3.40ms, 38.2MB)
// 테스트 10 〉	통과 (3.32ms, 38.2MB)
// 테스트 11 〉	통과 (3.39ms, 38.1MB)
// 테스트 12 〉	통과 (5.21ms, 38.5MB)
// 테스트 13 〉	통과 (5.11ms, 38.5MB)
// 테스트 14 〉	통과 (7.42ms, 39.2MB)
// 테스트 15 〉	통과 (6.87ms, 39.1MB)
// 테스트 16 〉	통과 (8.84ms, 39.3MB)
// 테스트 17 〉	통과 (0.63ms, 33.5MB)
// 테스트 18 〉	통과 (10.06ms, 39.4MB)
// 테스트 19 〉	통과 (13.26ms, 40.1MB)
// 테스트 20 〉	통과 (0.56ms, 33.9MB)
// 테스트 21 〉	통과 (0.74ms, 33.8MB)
// 테스트 22 〉	통과 (0.62ms, 33.7MB)
// 테스트 23 〉	통과 (6.11ms, 38.7MB)
// 테스트 24 〉	통과 (5.88ms, 38.3MB)
// 테스트 25 〉	통과 (0.46ms, 33.5MB)