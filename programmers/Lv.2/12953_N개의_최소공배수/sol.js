// https://school.programmers.co.kr/learn/courses/30/lessons/12953
/**
 * 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
 * 예를 들어 2와 7의 최소공배수는 14가 됩니다. 
 * 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. 
 * n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
 */

function solution(arr) {
    // 최대공약수 GCD
    // 최소공배수 LCM = 두 자연수의 곱 / GDC
    arr.sort((a, b)=>a - b);
    return arr.reduce((acc, cur)=>{
        let big = Math.max(acc, cur);
        let small = Math.min(acc, cur);
        let LCM = big*small / getGCD(big, small);
        return LCM;
    })
    
}
function getGCD(big, small) {
    if(big % small === 0) return small;
    return getGCD(small, big % small);
}