// https://school.programmers.co.kr/learn/courses/30/lessons/120878
/**소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
 * *기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
 * 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
 */

function getDivisors(int){
    const intDivisors = [];
    for(let i = 1 ; i<=Math.sqrt(int) ; i++){
        if(int%i===0){
            intDivisors.push(i, int/i)
        }
    }
    return intDivisors.sort((a,b)=>a-b);
}

function solution(a, b) {
    // 최대공약수 구하기
    const aDivisors = getDivisors(a);
    const bDivisors = getDivisors(b);
    const greatestCommonDs = aDivisors.filter((v)=>bDivisors.includes(v)).pop();
    // 기약분수로 나타내기
    if(greatestCommonDs!==1){
        a = a/greatestCommonDs;
        b = b/greatestCommonDs;
    }
    // 기약분수 분모의 약수 구하기
    console.log(a,"/",b);
    const irreducibleBDs = getDivisors(b);
    console.log(irreducibleBDs);
    // 2의 배수와 5의 배수만 존재하는 지 확인
    const ans = [];
    irreducibleBDs.forEach((v,idx,arr)=>{
        if(v!==1 && v%2!==0 && v%5!==0){
            ans.push(v);
        }
    });
    console.log(ans);
    // ans에 길이가 존재하면 2의 배수와 5의 배수만 존재하는 것이 아님. 즉 무한소수
    return ans.length ? 2 : 1;
}