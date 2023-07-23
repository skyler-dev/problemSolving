// https://school.programmers.co.kr/learn/courses/30/lessons/68644
/**
 * 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 */

// 조합 구하기
// 합 구하기
// 중복 제거
// 오름차순 정렬

function combinations(arr, n) {
    // Base Case
    if(n===1) return arr.map((v)=>[v]);
    const result = [];
    
    arr.forEach((fixed, idx, arr)=>{
        // 조합이니까, 현재 idx 이후 요소 추출
        const rest = arr.slice(idx + 1);
        // Recursive Case
        const combis = combinations(rest, n-1);
        // 선택된 요소와 재귀호출을 통해 구한 조합 합치기
        const combine = combis.map((v)=>[fixed, ...v]);
        result.push(...combine);
    })
    
    return result;
}

function solution(numbers) {
    return [...new Set(combinations(numbers, 2).map((combi)=>combi[0]+combi[1]))].sort((a,b)=>a-b)
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.25ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (0.22ms, 33.6MB)
// 테스트 5 〉	통과 (0.24ms, 33.5MB)
// 테스트 6 〉	통과 (0.41ms, 33.5MB)
// 테스트 7 〉	통과 (3.72ms, 38.2MB)
// 테스트 8 〉	통과 (4.27ms, 38.3MB)
// 테스트 9 〉	통과 (3.64ms, 38.5MB)