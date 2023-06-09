// https://school.programmers.co.kr/learn/courses/30/lessons/68935
/**
 * 자연수 n이 매개변수로 주어집니다. 
 * n을 3진법 상에서 앞뒤로 뒤집은 후, 
 * 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
    const result = [];
    while(n!==0){
        result.unshift(n%3);
        n = Math.floor(n/3);
    }
    // 좌우반전(3진법) 10진법으로 표현
    return result.reduce((acc,v,idx)=>acc+v*Math.pow(3, idx),0)
}