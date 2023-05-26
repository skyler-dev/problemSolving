// https://school.programmers.co.kr/learn/courses/30/lessons/120880
/** 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.*/

function solution(numlist, n) {
    // 거리가 작은 수 부터 먼저 오도록 오름자순 정렬
    // 거리가 같다면 더 큰수가 앞에 오도록 내림차순 정렬
    // 이유: sort의 콜백은 0을 반환할 경우 정렬하지 않고 넘어감
    return numlist.sort((a,b)=>Math.abs(a-n)-Math.abs(b-n) || b-a);
}