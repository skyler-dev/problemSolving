// https://school.programmers.co.kr/learn/courses/30/lessons/12945
/**
 * 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
 * 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
 */

// dp
// 반복문 사용
function solution(n){
    const dp = Array.from({length: n+1}, ()=>0n); 
    dp[1]=1n;
    for(let i = 2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp)
    return dp[n]%1234567n;
}


// 재귀함수 사용 : JavaScript는 타 언어에 비해 최대 재귀 호출 깊이가 작다. 때문에 BigInt를 사용해도 마지막 케이스 2개는 런타임에러가 발생한다.
// const dp = Array.from({length: 100001}, ()=>0n); 
// function solution(n) {
//     if(n<=2){
//         return 1n;
//     }
//     // 이미 구한 값이라면, 이미 구한 값 자체를 반환
//     if(dp[n]!==0n){
//         return dp[n];
//     }
//     // 구했던 적이 없었다면, 업데이트 후 반환
//     dp[n] = solution(n-1) + solution(n-2);
//     return dp[n]%1234567n;
// }
