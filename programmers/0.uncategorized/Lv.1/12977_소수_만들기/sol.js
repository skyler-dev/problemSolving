// https://school.programmers.co.kr/learn/courses/30/lessons/12977
/**
 * 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(nums) {
    // 1. 조합 알고리즘
    // [[1,2,3], [1,2,4],...] getCombination(nums,3)
    // [6, 7,...] sumsByCombi
    const sumsByCombi = getCombination(nums,3).map((arr)=>arr.reduce((acc,cur)=>acc+cur,0));
    // 2. 소수판별
    let cnt = 0;
    for(let sum of sumsByCombi){
        if(isPrime(sum)) cnt++;
    }
    return cnt;
}
function getCombination(array, num){
    const result = [];
    if(num===1) return array.map((v)=>[v]);
    
    array.forEach((fixed, idx, arr)=>{
        const rest = arr.slice(idx+1);
        const combinations = getCombination(rest, num-1);
        const attached = combinations.map((v)=>[fixed, ...v]);
        result.push(...attached)
    })
    return result;
}
function isPrime(num){
    const end = Math.floor(Math.sqrt(num));
    if(num===1) return false;
    if(num===2) return true;
    for(let i = 2 ; i<=end ; i++){
        if(num%i===0) return false;
    }
    return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (8.33ms, 37.8MB)
// 테스트 2 〉	통과 (11.73ms, 38.8MB)
// 테스트 3 〉	통과 (1.99ms, 34.2MB)
// 테스트 4 〉	통과 (1.84ms, 34.1MB)
// 테스트 5 〉	통과 (13.79ms, 39.4MB)
// 테스트 6 〉	통과 (10.00ms, 40.7MB)
// 테스트 7 〉	통과 (0.68ms, 33.6MB)
// 테스트 8 〉	통과 (18.24ms, 46.6MB)
// 테스트 9 〉	통과 (2.93ms, 34.5MB)
// 테스트 10 〉	통과 (16.52ms, 44.4MB)
// 테스트 11 〉	통과 (0.67ms, 33.6MB)
// 테스트 12 〉	통과 (0.45ms, 33.5MB)
// 테스트 13 〉	통과 (0.66ms, 33.6MB)
// 테스트 14 〉	통과 (0.60ms, 33.5MB)
// 테스트 15 〉	통과 (0.60ms, 33.5MB)
// 테스트 16 〉	통과 (18.36ms, 46.5MB)
// 테스트 17 〉	통과 (24.61ms, 48.4MB)
// 테스트 18 〉	통과 (0.54ms, 33.5MB)
// 테스트 19 〉	통과 (0.36ms, 33.4MB)
// 테스트 20 〉	통과 (27.20ms, 48.2MB)
// 테스트 21 〉	통과 (20.73ms, 47.4MB)
// 테스트 22 〉	통과 (6.46ms, 38.2MB)
// 테스트 23 〉	통과 (0.18ms, 33.4MB)
// 테스트 24 〉	통과 (21.55ms, 46.6MB)
// 테스트 25 〉	통과 (18.22ms, 46.6MB)
// 테스트 26 〉	통과 (0.22ms, 33.4MB)