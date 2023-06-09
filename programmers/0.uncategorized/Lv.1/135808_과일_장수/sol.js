// https://school.programmers.co.kr/learn/courses/30/lessons/135808
/**
 * 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.
 * * 한 상자에 사과를 m개씩 담아 포장합니다.
 * * 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
 * 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)
 * 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.
 * * (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
 * 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.
 */

function solution(k, m, score) {
    // 가장 낮은 점수의 사과가 전체 박스의 가격을 결정
    // 정렬하고 큰 것 부터 m개씩 담는다고 할 때, 각 박스별로 최소 점수를 구해 m을 곱하고 더해가기
    const apples = [...score].sort((a,b)=>b-a);
    let result = 0;
    for(let i = m-1 ; i<apples.length ; i = i+m){
        result += apples[i]*m
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.15ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.6MB)
// 테스트 6 〉	통과 (13.94ms, 39.5MB)
// 테스트 7 〉	통과 (14.77ms, 37.8MB)
// 테스트 8 〉	통과 (2.89ms, 35.9MB)
// 테스트 9 〉	통과 (25.91ms, 37.8MB)
// 테스트 10 〉	통과 (11.28ms, 38.7MB)
// 테스트 11 〉	통과 (192.58ms, 83.5MB)
// 테스트 12 〉	통과 (196.72ms, 83.9MB)
// 테스트 13 〉	통과 (194.01ms, 83.3MB)
// 테스트 14 〉	통과 (193.72ms, 82.4MB)
// 테스트 15 〉	통과 (212.14ms, 82.4MB)
// 테스트 16 〉	통과 (0.06ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (0.16ms, 33.4MB)
// 테스트 19 〉	통과 (0.14ms, 33.5MB)
// 테스트 20 〉	통과 (0.13ms, 33.4MB)
// 테스트 21 〉	통과 (0.05ms, 33.4MB)
// 테스트 22 〉	통과 (0.05ms, 33.6MB)
// 테스트 23 〉	통과 (0.05ms, 33.4MB)
// 테스트 24 〉	통과 (0.06ms, 33.4MB)

// 아래의 풀이도 통과되지만, 배열에 담는 중간 단계를 개선한 풀이가 위의 풀이이다. 
// function solution(k, m, score) {
//     // 가장 낮은 점수의 사과가 전체 박스의 가격을 결정
//     // 정렬하고 큰 것 부터 m개씩 담는다고 할 때, 각 박스별로 최소 점수 mins에 담기
//     const apples = [...score].sort((a,b)=>b-a);
//     const mins = [];
//     for(let i = m-1 ; i<apples.length ; i = i+m){
//         mins.push(apples[i])
//     }
//     return mins.reduce((acc, cur)=>acc + cur, 0)*m;
// }

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.6MB)
// 테스트 5 〉	통과 (0.07ms, 33.6MB)
// 테스트 6 〉	통과 (17.11ms, 39.8MB)
// 테스트 7 〉	통과 (16.50ms, 37.7MB)
// 테스트 8 〉	통과 (2.90ms, 35.9MB)
// 테스트 9 〉	통과 (17.22ms, 37.8MB)
// 테스트 10 〉	통과 (14.03ms, 38.7MB)
// 테스트 11 〉	통과 (212.60ms, 86.3MB)
// 테스트 12 〉	통과 (226.86ms, 85.4MB)
// 테스트 13 〉	통과 (242.74ms, 85.8MB)
// 테스트 14 〉	통과 (280.09ms, 85.1MB)
// 테스트 15 〉	통과 (261.98ms, 85MB)
// 테스트 16 〉	통과 (0.10ms, 33.5MB)
// 테스트 17 〉	통과 (0.11ms, 33.5MB)
// 테스트 18 〉	통과 (0.31ms, 33.5MB)
// 테스트 19 〉	통과 (0.08ms, 33.4MB)
// 테스트 20 〉	통과 (0.08ms, 33.4MB)
// 테스트 21 〉	통과 (0.06ms, 33.4MB)
// 테스트 22 〉	통과 (0.07ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
// 테스트 24 〉	통과 (0.10ms, 33.5MB)