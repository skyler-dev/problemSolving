// https://school.programmers.co.kr/learn/courses/30/lessons/154539
/**
 * [문제 설명]
 * 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
 * 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.
 * [제한 사항]
 * 4 ≤ numbers의 길이 ≤ 1,000,000
 * * 1 ≤ numbers[i] ≤ 1,000,000
 */

// 아직 뒤의 원소들이 뭔지 알 수 없는 상태이므로 예약 필요 -> stack에 넣어 놓기
// 뒤의 원소 순회 중, 판명 가능해진 원소들 처리하기 -> stack을 쓰므로 가장 최근에 넣은 인덱스 부터 확인

function solution(numbers) {
    // 일단 뒷 큰수가 존재하지 않는 다고 가정
    const result = new Array(numbers.length).fill(-1);
    const stack = []; // 인덱스들이 판명될 때까지 대기할 장소
    
    for(let curIdx = 0 ; curIdx < numbers.length ; curIdx++){
        while(stack && numbers[stack.at(-1)] < numbers[curIdx]){
            result[stack.pop()] = numbers[curIdx];
        }
        
        stack.push(curIdx);
    }
    
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.7MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.40ms, 33.7MB)
// 테스트 6 〉	통과 (4.83ms, 38.2MB)
// 테스트 7 〉	통과 (4.69ms, 38.2MB)
// 테스트 8 〉	통과 (10.13ms, 42.5MB)
// 테스트 9 〉	통과 (10.08ms, 42.8MB)
// 테스트 10 〉	통과 (18.29ms, 45MB)
// 테스트 11 〉	통과 (17.05ms, 45.1MB)
// 테스트 12 〉	통과 (33.27ms, 52MB)
// 테스트 13 〉	통과 (31.49ms, 52.3MB)
// 테스트 14 〉	통과 (78.19ms, 78.8MB)
// 테스트 15 〉	통과 (151.68ms, 126MB)
// 테스트 16 〉	통과 (153.34ms, 126MB)
// 테스트 17 〉	통과 (150.27ms, 126MB)
// 테스트 18 〉	통과 (166.43ms, 126MB)
// 테스트 19 〉	통과 (146.98ms, 126MB)
// 테스트 20 〉	통과 (156.52ms, 160MB)
// 테스트 21 〉	통과 (98.71ms, 152MB)
// 테스트 22 〉	통과 (105.86ms, 108MB)
// 테스트 23 〉	통과 (99.94ms, 149MB)

