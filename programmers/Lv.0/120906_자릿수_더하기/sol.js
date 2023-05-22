// https://school.programmers.co.kr/learn/courses/30/lessons/120906
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
    const nStrArr = n.toString().split("");
    const ans = nStrArr.reduce((acc, v)=>(acc + +v), 0);
    return ans;
}