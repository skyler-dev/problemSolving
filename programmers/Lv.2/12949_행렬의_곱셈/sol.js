arr1 : [[1, 2, 3], [4, 5, 6]]

// https://school.programmers.co.kr/learn/courses/30/lessons/12949
/**
 * 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
 * 
 * 제한조건
 * * 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 * * 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
 * * 곱할 수 있는 배열만 주어집니다.
 */

function solution(arr1, arr2) {
    const result = [];
    // 두 행렬의 크기가 AxB, CxD인 행렬을 곱할려면 B와 C가 같아야 한다.
    // result[A][D] += arr1[A][k] * arr2[k][D]
    for(let rowIdx = 0 ; rowIdx < arr1.length ; rowIdx++){
        const row = [];
        for(let colIdx = 0 ; colIdx < arr2[0].length ; colIdx++){
            let sum = 0;
            for(let k = 0 ; k < arr2.length ; k++){
                sum += arr1[rowIdx][k] * arr2[k][colIdx];
            }
            row.push(sum);
            
        }
        result.push(row)
    }
    
    return result
}