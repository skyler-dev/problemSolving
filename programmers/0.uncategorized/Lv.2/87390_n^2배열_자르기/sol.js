// https://school.programmers.co.kr/learn/courses/30/lessons/87390
/**
 * [문제 설명]
 * 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.
 * 1. n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
 * 2. i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
 * * 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
 * 3. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
 * 4. 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
 * 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.
 * 
 * [제한사항]
 * * 1 ≤ n ≤ 10^7
 * * 0 ≤ left ≤ right < n^2
 * * right - left < 10^5
 */

function solution(n, left, right) {
    // 행렬(x, y)의 값은 Math.max(x+1, y+1)
    return Array.from(Array(right-left+1), (_, k)=>{
        const idx = k + left;
        return Math.max(Math.floor(idx/n) + 1, idx%n + 1);
    })
}

// Bad : core dumped -> 행렬을 1차원으로 표현해야 하는 이유
// function solution(n, left, right) {
//     const arr = Array.from(new Array(n+1) ,()=>new Array(n+1));
//     for(let i = 0 ; i < n ; i++) {
//         arr[i][i]  = i + 1;
  
//         for(let k = 0 ; k < i ; k++) {
//             arr[k][i] = i + 1;
//             arr[i][k] = i + 1;
//         } 
//     }
//     return arr.flat(1).slice(left, right + 1)
// }