// https://school.programmers.co.kr/learn/courses/30/lessons/12921
/**
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 * 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.(1은 소수가 아닙니다.)
 */

// 에라토스테네스의 체
// O(n log log n)
function get_primes(num) {
    const prime = [false, false, ...new Array(num-1).fill(true)]; // 0과 1은 소수가 아님
    
    // 소수가 아니었다면, 이미 제곱근까지의 과정중에서 체크되었을 것임
    for(let i = 2 ; i * i <= num ; i += 1) {
        // 체크되지 않았다면,
        if(prime[i]){
            // i의 배수들 체크
            for(let j = i * 2 ; j <= num ; j += i){
                prime[j] = false;
            }
        }
    }
    // 소수들을 얻고 싶은 경우
    // return prime.map((v, i)=> v ? i : null).filter(Boolean)
    // 소수 갯수를 얻고 싶은 경우
    return prime.filter(Boolean);
}

function solution(n) {
    return get_primes(n).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.29ms, 33.5MB)
// 테스트 3 〉	통과 (0.30ms, 33.6MB)
// 테스트 4 〉	통과 (0.28ms, 33.6MB)
// 테스트 5 〉	통과 (0.24ms, 33.5MB)
// 테스트 6 〉	통과 (1.34ms, 34.1MB)
// 테스트 7 〉	통과 (0.49ms, 33.7MB)
// 테스트 8 〉	통과 (0.99ms, 34.1MB)
// 테스트 9 〉	통과 (1.84ms, 34.3MB)
// 테스트 10 〉	통과 (27.55ms, 52.3MB)
// 테스트 11 〉	통과 (114.88ms, 73.2MB)
// 테스트 12 〉	통과 (39.78ms, 52.7MB)
// 효율성  테스트
// 테스트 1 〉	통과 (88.76ms, 74.1MB)
// 테스트 2 〉	통과 (92.16ms, 73.1MB)
// 테스트 3 〉	통과 (89.74ms, 74.1MB)
// 테스트 4 〉	통과 (110.89ms, 73.6MB)