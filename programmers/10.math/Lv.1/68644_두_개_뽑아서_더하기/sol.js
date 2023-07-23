// https://school.programmers.co.kr/learn/courses/30/lessons/68644
/**
 * 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
    // set으로 중복 제거
    const sumSet = new Set();
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length ; j++){
            sumSet.add(numbers[i]+numbers[j]);
        }
    }
    return [...sumSet].sort((a,b)=>a-b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.19ms, 33.4MB)
// 테스트 6 〉	통과 (0.23ms, 33.5MB)
// 테스트 7 〉	통과 (0.70ms, 33.6MB)
// 테스트 8 〉	통과 (0.75ms, 33.5MB)
// 테스트 9 〉	통과 (0.70ms, 33.5MB)