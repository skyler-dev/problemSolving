// https://school.programmers.co.kr/learn/courses/30/lessons/120871
/**
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
 * (표 생략_사이트 참고)
 * 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
    let cnt = 0;
    let ans = 0;
    while(cnt!==n && ++ans){
        if(!ans.toString().includes('3') && ans%3!==0){
            cnt++;
        }
    }
    return ans;
}