// https://school.programmers.co.kr/learn/courses/30/lessons/42746
/**
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 * 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */

function solution(numbers) {
    const result = numbers.sort(compareFn).join('');
    return result[0]==='0' ? '0' : result;
}

function compareFn(a, b) {
    // ab와 ba는 자릿수가 같다. 그래서 사전상 비교나 숫자상 비교나 동일한 결과를 의미.
    // 1. 두 원소들 간에 서로 결합 -> 자릿수가 같은 숫자문자열
    const ab = a+''+b;
    const ba = b+''+a;
    // 2. 사전 기준으로 비교연산자 사용해 내림차순 정렬 -> 타입변환없이 비교 가능
    // 2-1. 만약, '-'를 사용한다면 숫자로 강제변환되어 성능이 나빠짐 (아래 Bad 코드 참고)
    if (ba <  ab) {
        return -1;
    }
    if (ab > ba) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

// 정확성  테스트
// 테스트 1 〉	통과 (77.35ms, 43.8MB)
// 테스트 2 〉	통과 (42.49ms, 42.2MB)
// 테스트 3 〉	통과 (93.66ms, 44.9MB)
// 테스트 4 〉	통과 (3.19ms, 36.5MB)
// 테스트 5 〉	통과 (63.88ms, 44.8MB)
// 테스트 6 〉	통과 (55.88ms, 44.6MB)
// 테스트 7 〉	통과 (0.07ms, 33.6MB)
// 테스트 8 〉	통과 (0.06ms, 33.6MB)
// 테스트 9 〉	통과 (0.06ms, 33.6MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.6MB)

// Bad
// '-'를 사용해 숫자로 강제 변환하기 때문에 위의 코드보다 성능이 나쁘다.
// function solution(numbers) {
//     const result = numbers.sort((a, b)=>{
//         const ab = a+''+b;
//         const ba = b+''+a;
        
//         return ba - ab;
//     }).join('');
//     return result[0]==='0' ? '0' : result;
// }

// 정확성  테스트
// 테스트 1 〉	통과 (131.83ms, 43.1MB)
// 테스트 2 〉	통과 (86.35ms, 42.1MB)
// 테스트 3 〉	통과 (173.05ms, 44.5MB)
// 테스트 4 〉	통과 (4.90ms, 36.3MB)
// 테스트 5 〉	통과 (132.99ms, 44.8MB)
// 테스트 6 〉	통과 (108.83ms, 44.1MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.6MB)
// 테스트 10 〉	통과 (0.06ms, 33.6MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)
// 테스트 14 〉	통과 (0.09ms, 33.5MB)
// 테스트 15 〉	통과 (0.06ms, 33.4MB)