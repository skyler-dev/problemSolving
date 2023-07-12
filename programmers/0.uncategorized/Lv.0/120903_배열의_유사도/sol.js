// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
    const intersection = s1.filter((v)=>(s2.includes(v)));
    return intersection.length;
}