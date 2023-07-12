// https://school.programmers.co.kr/learn/courses/30/lessons/120866
/**
 * 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
 * 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
 * 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(board) {
    const n = board.length;
    // 안전 지대 초기값 설정
    let ans = n * n;
    // 지뢰 좌표 구하기
    const bombArr = [];
    board.forEach((line,lIdx)=>{
        line.forEach((unit,uIdx)=>{
            if(unit===1){
                bombArr.push([lIdx,uIdx]);
                ans--;
            }
        })
    })
    // 전부 지뢰라면, 먼저 0 반환
    if(ans===0) return 0;
    
    // 지뢰좌표 사용해서 위험지대로 분류
    bombArr.forEach((bomb)=>{
        // board의 1단계 인덱스
        let deep1idx = bomb[0];
        // board의 2단계 인덱스
        let deep2idx = bomb[1];
        // board[deep1idx][deep2idx]가 지뢰 좌표

        /**
         * Optional chaining으로 참조가 유효한지 검증
         * 목적 : 참조한 부분이 null이나 undefined일 경우, 에러가 발생하는 것이 아니라 undefined 반환
         */

        //지뢰있는 라인의 윗 줄 
        //0이라면, 1로 설정하고 안전지대 카운트 감소
        if(board[deep1idx-1]?.[deep2idx-1] === 0){
            board[deep1idx-1][deep2idx-1] = 1;
            ans--;
        }
        if(board[deep1idx-1]?.[deep2idx] === 0){
            board[deep1idx-1][deep2idx] = 1;
            ans--;
        }
        if(board[deep1idx-1]?.[deep2idx+1] === 0){
            board[deep1idx-1][deep2idx+1] = 1;
            ans--;
        }
        //지뢰있는 라인
        if(board[deep1idx]?.[deep2idx-1] === 0){
            board[deep1idx][deep2idx-1] = 1;
            ans--;
        }
        if(board[deep1idx]?.[deep2idx+1] === 0){
            board[deep1idx][deep2idx+1] = 1;
            ans--;
        }
        //지뢰있는 라인의 아랫 줄
        if(board[deep1idx+1]?.[deep2idx-1] === 0){
            board[deep1idx+1][deep2idx-1] = 1;
            ans--;
        }
        if(board[deep1idx+1]?.[deep2idx] === 0){
            board[deep1idx+1][deep2idx] = 1;
            ans--;
        }
        if(board[deep1idx+1]?.[deep2idx+1] === 0){
            board[deep1idx+1][deep2idx+1] = 1;
            ans--;
        }
    })

    console.log(board)
    return ans;
}


// 런타임 에러가 발생한 이전 풀이
// function solution(board) {
//     const n = board.length;
//     // 안전 지대 초기값 설정
//     let ans = n * n;
//     // 지뢰 좌표 구하기
//     const bombArr = [];
//     board.forEach((line,lIdx)=>{
//         line.forEach((unit,uIdx)=>{
//             if(unit===1){
//                 bombArr.push([lIdx,uIdx]);
//                 ans--;
//             }
//         })
//     })
//     // 전부 지뢰라면, 먼저 0 반환
//     if(ans===0) return 0;
    
//     // 지뢰좌표 사용해서 위험지대로 분류
//     bombArr.forEach((bomb)=>{
//         // board의 1단계 인덱스
//         let deep1idx = bomb[0];
//         // board의 2단계 인덱스
//         let deep2idx = bomb[1];
//         // board[deep1idx][deep2idx]가 지뢰 좌표
        
//         //지뢰있는 라인의 윗 줄 
//             //0이라면, 1로 설정하고 안전지대 카운트 감소
//         if(board[deep1idx-1][deep2idx-1] === 0){
//             board[deep1idx-1][deep2idx-1] = 1;
//             ans--;
//         }
//         if(board[deep1idx-1][deep2idx] === 0){
//             board[deep1idx-1][deep2idx] = 1;
//             ans--;
//         }
//         if(board[deep1idx-1][deep2idx+1] === 0){
//             board[deep1idx-1][deep2idx+1] = 1;
//             ans--;
//         }
//         //지뢰있는 라인
//         if(board[deep1idx][deep2idx-1] === 0){
//             board[deep1idx][deep2idx-1] = 1;
//             ans--;
//         }
//         if(board[deep1idx][deep2idx+1] === 0){
//             board[deep1idx][deep2idx+1] = 1;
//             ans--;
//         }
//         //지뢰있는 라인의 아랫 줄
//         if(board[deep1idx+1][deep2idx-1] === 0){
//             board[deep1idx+1][deep2idx-1] = 1;
//             ans--;
//         }
//         if(board[deep1idx+1][deep2idx] === 0){
//             board[deep1idx+1][deep2idx] = 1;
//             ans--;
//         }
//         if(board[deep1idx+1][deep2idx+1] === 0){
//             board[deep1idx+1][deep2idx+1] = 1;
//             ans--;
//         }
//     })
//     console.log(board)
//     return ans;
// }

// 테스트 1 〉	실패 (런타임 에러)

// 테스트 3 〉	실패 (런타임 에러)
// 테스트 4 〉	실패 (런타임 에러)
// 테스트 5 〉	실패 (런타임 에러)

// 테스트 7 〉	실패 (런타임 에러)

// 테스트 11 〉	실패 (런타임 에러)
