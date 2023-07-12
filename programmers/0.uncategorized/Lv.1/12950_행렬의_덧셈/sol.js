// https://school.programmers.co.kr/learn/courses/30/lessons/12950
/**
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */

function solution(arr1, arr2) {
    // 2차원 배열은 참조값 변경안하게 조심
    const result = Array.from({length : arr1.length})
    arr1.forEach((row, rowIdx)=>{
        result[rowIdx]=[]; // 속성만들어주기
        row.forEach((col, colIdx)=>{
            result[rowIdx][colIdx] = arr2[rowIdx][colIdx] + col;
        })
    })
    return result;
}