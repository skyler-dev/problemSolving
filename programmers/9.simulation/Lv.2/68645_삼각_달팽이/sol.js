// https://school.programmers.co.kr/learn/courses/30/lessons/68645
/**
 * [문제 설명]
 * 정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.
 * (이미지)
 * [제한 사항]
 * n은 1 이상 1,000 이하입니다.
 */

// 시뮬레이션 : 문제에서 제시한 알고리즘을 한 단계씩 차례대로 직접 수행

function solution(n) {
    const arr = Array.from(Array(n), (_,i)=>Array(i+1).fill(0));
    
    let curX = -1; // 현재는 아직 삼각달팽이 진입 전
    let curY = 0;
    let willBePopulatedValue = 1;
    
    // 각각 `goDown, goRight, goUpAndLeft`
    const dx = [1, 0, -1];
    const dy = [0, 1, -1];

    let nowDirectionIdx = 0; // goDown 행동 예약
    
    for(let doCnt = n ; doCnt > 0 ; doCnt-=1){
        // 예약된 행동 실행
        const [updatedCurX, updatedCurY, updatedValue] = go(
            arr, 
            curX, 
            curY, 
            dx[nowDirectionIdx], 
            dy[nowDirectionIdx], 
            doCnt, 
            willBePopulatedValue
        );
        
        // 갱신
        curX = updatedCurX;
        curY = updatedCurY;
        willBePopulatedValue = updatedValue;
        nowDirectionIdx = (nowDirectionIdx + 1) % 3; // 방향(다음에 할 행동) 예약
    }
    
    return arr.flat(1);
}
// 각각 `배열, 현재 X좌표, 현재 Y좌표, 행동 당 X이동단위, 행동당 Y이동단위, 현재 Y좌표에서 이동해야하는 거리, 행동 횟수, 채워지는 값`
function go(arr, curX, curY, dx, dy, doCnt, willBePopulatedValue) {
    let movedX = curX;
    let movedY = curY;
    let countedValue = willBePopulatedValue;
    
    // 행동 횟수 만큼 채워나가며 이동
    for(let i = 0 ; i < doCnt ; i++){
        movedX += dx;
        movedY += dy;
        arr[movedX][movedY] = countedValue;
        countedValue += 1;
    }
    // 각각 `갱신된 현재 X좌표, 갱신된 현재 Y좌표, 다음에 채워져야 하는 값`
    return [movedX, movedY, countedValue];
}


// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.12ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (1.32ms, 37.4MB)
// 테스트 5 〉	통과 (1.26ms, 37.5MB)
// 테스트 6 〉	통과 (1.32ms, 37.4MB)
// 테스트 7 〉	통과 (87.19ms, 98.6MB)
// 테스트 8 〉	통과 (91.31ms, 99.2MB)
// 테스트 9 〉	통과 (87.12ms, 101MB)