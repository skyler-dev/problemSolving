// https://school.programmers.co.kr/learn/courses/30/lessons/12928
/**
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 */

function solution(n) {
    let sum = 0;
    const end = Math.sqrt(n);
    for(let i = 1 ; i <= end ; i++){
        if(n%i===0){
            // n이 제곱수일 경우
            if(i===end){
                sum += i;
                break;
            }
            sum += (i + n/i);
        }
    }
    return sum;
}