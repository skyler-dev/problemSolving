// https://school.programmers.co.kr/learn/courses/30/lessons/77884
/**
 * 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(left, right) {
    // n이 제곱수일 경우 약수의 갯수는 홀수
    // 1도 제곱수임
    let result = 0;
    for(let n = left ; n<=right ; n++){
        isSquareN(n) ? result-=n : result+=n;
    }
    return result;
    
}
function isSquareN(n){
    return Number.isInteger(Math.sqrt(n));
}