// https://school.programmers.co.kr/learn/courses/30/lessons/12921
/**
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 * 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.(1은 소수가 아닙니다.)
 */

function solution(n) {
    // 1부터 n까지의 홀수로 구성된 Set
    const set = new Set();
    for (let i = 1; i <= n; i+=2) {
        set.add(i);
     }
    set.delete(1);// 1은 소수가 아니니까 제거
    set.add(2);
    
    const end = Math.floor(Math.sqrt(n));
    //1은 모든 수의 약수니까 3부터 시작한다.
    for(let i =3 ; i <= end ; i++){
        // set에 있는 수라면,
        if(set.has(i)){
            // 본인 제외한 자신의 배수인 수 삭제
            for(let j = i**2 ; j<=n ; j+=i){
                set.delete(j);
            }
        }
    }
    return set.size;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.24ms, 33.6MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (1.35ms, 34MB)
// 테스트 7 〉	통과 (0.42ms, 33.7MB)
// 테스트 8 〉	통과 (0.92ms, 33.8MB)
// 테스트 9 〉	통과 (1.47ms, 33.9MB)
// 테스트 10 〉	통과 (44.77ms, 51.1MB)
// 테스트 11 〉	통과 (150.33ms, 57MB)
// 테스트 12 〉	통과 (52.39ms, 51.1MB)
// 효율성  테스트
// 테스트 1 〉	통과 (159.04ms, 57MB)
// 테스트 2 〉	통과 (132.47ms, 57MB)
// 테스트 3 〉	통과 (134.26ms, 56.9MB)
// 테스트 4 〉	통과 (134.83ms, 56.9MB)