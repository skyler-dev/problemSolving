// https://school.programmers.co.kr/learn/courses/30/lessons/12952
/**
 * [문제 설명}
 * 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
 * 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.
 * (이미지)
 * 체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.
 * 
 * [제한사항]
 * 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
 * n은 12이하의 자연수 입니다.
 */

// 백트래킹

// 모든 경우의 수 탐색
// 뚜렷한 제약조건 -> 가지치기 대상 : 퀸이 이동할 수 있는 3가지 방법들

// 가치치기 대상인 지 확인(1차원 배열, 현재 처리 중인 행)
function check(queen, row){
    // 이미 선점된 퀸의 위치 확인(현재 처리 중인 행 이전 까지)
    for(let i = 0 ; i < row ; i++){
        // 현재 처리 중인 퀸의 열,대각선 위치 체크
        if(
            queen[row] === queen[i] || 
            Math.abs(queen[row] - queen[i]) === row - i
        ){
            // [현재 옵션 제거] 즉, 가지치기
            // 역추적해서 나머지 사용가능한 옵션 중 다른 옵션 선택 필요
            return false;
        }
    }
    // [현재 옵션 선택] 해결책을 찾을 수 있는 선택지로 더 나아가기
    return true;
}

// 모든 경우의 수 탐색(1차원 배열, 현재 처리 중인 행)
function search(queen, row){
    const N = queen.length;
    let cnt = 0;
    
    // Base Case
    if(row === N){ // 마지막 행을 넘어서까지 도달했을 경우 *하나의 해결책*을 찾은 것
        return 1;
    }
    
    // 현재 처리 중인 행에서 모든 경우의 위치 순회
    for(let col = 0 ; col < N ; col++){
        // 가능한 한 가지 옵션
        queen[row] = col;
        // 가지치기 대상이 아니라면,
        if(check(queen, row)){
            // Recursive Case
            cnt += search(queen, row + 1);
        }
    }
    return cnt;
}

function solution(n) {
    return search(Array(n).fill(0), 0);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.6MB)
// 테스트 4 〉	통과 (0.20ms, 33.4MB)
// 테스트 5 〉	통과 (0.35ms, 33.4MB)
// 테스트 6 〉	통과 (1.47ms, 35.6MB)
// 테스트 7 〉	통과 (2.83ms, 35.7MB)
// 테스트 8 〉	통과 (4.46ms, 35.9MB)
// 테스트 9 〉	통과 (11.50ms, 35.8MB)
// 테스트 10 〉	통과 (60.88ms, 35.8MB)
// 테스트 11 〉	통과 (252.51ms, 35.8MB)