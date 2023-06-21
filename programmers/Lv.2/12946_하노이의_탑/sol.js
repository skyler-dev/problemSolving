// https://school.programmers.co.kr/learn/courses/30/lessons/12946
/**
 * 하노이 탑(Tower of Hanoi)은 퍼즐의 일종입니다. 세 개의 기둥과 이 기동에 꽂을 수 있는 크기가 다양한 원판들이 있고, 퍼즐을 시작하기 전에는 한 기둥에 원판들이 작은 것이 위에 있도록 순서대로 쌓여 있습니다. 게임의 목적은 다음 두 가지 조건을 만족시키면서, 한 기둥에 꽂힌 원판들을 그 순서 그대로 다른 기둥으로 옮겨서 다시 쌓는 것입니다.
 * 1. 한 번에 하나의 원판만 옮길 수 있습니다.
 * 2. 큰 원판이 작은 원판 위에 있어서는 안됩니다.
 * 하노이 탑의 세 개의 기둥을 왼쪽 부터 1번, 2번, 3번이라고 하겠습니다. 1번에는 n개의 원판이 있고 이 n개의 원판을 3번 원판으로 최소 횟수로 옮기려고 합니다.
 * 1번 기둥에 있는 원판의 개수 n이 매개변수로 주어질 때, n개의 원판을 3번 원판으로 최소로 옮기는 방법을 return하는 solution를 완성해주세요.
 */

function solution(n) {
    // 옮기는 방법들이, steps 배열에 담겨서 반환됨
    const steps=[];
    hanoi(n, 1, 3, steps);
    return steps;
}
// n은 원반 갯수
// start는 n개의 원반이 원래 있던 기둥
// end는 n개의 원반이 가고자하는 기둥
function hanoi(n, start, end, steps){
    if(n===1) return pm(start, end, steps);
    
    // 다른 막대에 대한 참조 필요
    let other = 6-(start+end);
    
    hanoi(n-1, start, other, steps);
    pm(start, end, steps);
    hanoi(n-1, other, end, steps);
}
// 헬퍼 함수
function pm(start, end, steps){
    steps.push([start, end]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.09ms, 33.2MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.17ms, 33.1MB)
// 테스트 5 〉	통과 (0.17ms, 33.6MB)
// 테스트 6 〉	통과 (0.17ms, 33.7MB)
// 테스트 7 〉	통과 (0.24ms, 33.7MB)
// 테스트 8 〉	통과 (0.28ms, 37.8MB)
// 테스트 9 〉	통과 (0.47ms, 38.4MB)
// 테스트 10 〉	통과 (1.06ms, 38MB)
// 테스트 11 〉	통과 (1.98ms, 39.5MB)
// 테스트 12 〉	통과 (5.33ms, 42.5MB)
// 테스트 13 〉	통과 (5.38ms, 48.5MB)

// 아래 함수는 방법들을 출력만 하는 함수로, 개념을 더 잘 볼 수 있다.
// function solution(n) {
//     return hanoi(n, 1, 3);
// }
// // n은 원반 갯수
// // start는 n개의 원반이 원래 있던 기둥
// // end는 n개의 원반이 가고자하는 기눙
// function hanoi(n, start, end){
//     if(n===1) return pm(start, end);
//     // 다른 막대에 대한 참조 필요
//     let other = 6-(start+end);
//     hanoi(n-1, start, other);
//     pm(start, end);
//     hanoi(n-1, other, end);
// }
// // 헬퍼 함수
// function pm(start, end){
//     console.log(start, '->', end);
// }