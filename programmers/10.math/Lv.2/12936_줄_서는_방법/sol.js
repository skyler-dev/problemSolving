// https://school.programmers.co.kr/learn/courses/30/lessons/12936
/**
 * [문제 설명]
 * n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.
 * [1, 2, 3]
 * [1, 3, 2]
 * [2, 1, 3]
 * [2, 3, 1]
 * [3, 1, 2]
 * [3, 2, 1]
 * 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.
 * 
 * [제한 사항]
 * n은 20이하의 자연수 입니다.
 * k는 n! 이하의 자연수 입니다.
 */

// 순열들의 인덱스 0의 값들은 오름차순 -> 1,1,2,2,3,3
// "이전 인덱스(0)의 값이 같은" 순열들의 인덱스 1의 값들도 오름차순 
// -> "1"인 순열들의 인덱스 1의 값은 2,3
// -> "2"인 순열들의 인덱스 1의 값은 1,3
// -> "3"인 순열들의 인덱스 1의 값은 1,2

// k번째 순열만 만들기

function solution(n, k) {
    const result = [];
    const people = Array.from(Array(n), (_,i)=>i+1); // [1,2,3] 오름차순
    
    const factorial = (num) => {
        // 0! = 1
        return Array.from(Array(num), (_,i)=>i+1).reduce((acc, cur)=>acc * cur, 1)
    }
    
    while(result.length !== n) {
        const pickedNumShowingCnt = factorial(people.length-1);
        const pickedIdx = Math.ceil(k / pickedNumShowingCnt) - 1;
        result.push(people[pickedIdx]);
        
        people.splice(pickedIdx, 1); // 뽑힌 사람 제거
        k = k - pickedIdx * pickedNumShowingCnt; // pickedNum이 같은 순열([3, 1, 2],[3, 2, 1]) 중 몇 번째인지 갱신
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 33.6MB)
// 테스트 2 〉	통과 (0.19ms, 33.4MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (0.12ms, 33.6MB)
// 테스트 5 〉	통과 (0.19ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.5MB)
// 테스트 7 〉	통과 (0.20ms, 33.5MB)
// 테스트 8 〉	통과 (0.12ms, 33.5MB)
// 테스트 9 〉	통과 (0.10ms, 33.5MB)
// 테스트 10 〉	통과 (0.19ms, 33.5MB)
// 테스트 11 〉	통과 (0.21ms, 33.5MB)
// 테스트 12 〉	통과 (0.20ms, 33.5MB)
// 테스트 13 〉	통과 (0.20ms, 33.6MB)
// 테스트 14 〉	통과 (0.10ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.27ms, 33MB)
// 테스트 2 〉	통과 (0.24ms, 33.1MB)
// 테스트 3 〉	통과 (0.24ms, 33MB)
// 테스트 4 〉	통과 (0.26ms, 32.9MB)
// 테스트 5 〉	통과 (0.20ms, 33.4MB)