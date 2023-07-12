// https://school.programmers.co.kr/learn/courses/30/lessons/120923
/**
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 */

function solution(num, total) {
    // min + (min+1) + (min+2) + ... + (min+num-1) = total
    // min = (total - (num-1)!) / num
    const factorial = Array.from({length: num-1},(_,idx)=>idx+1).reduce((acc,v)=>acc+v,0);
    const min = (total-factorial)/num;
    return Array.from({length: num},(_,idx)=>min+idx);
}