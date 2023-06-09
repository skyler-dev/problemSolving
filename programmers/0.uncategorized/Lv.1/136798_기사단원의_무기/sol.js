// https://school.programmers.co.kr/learn/courses/30/lessons/136798
/**
 * 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.
 * 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
 * 예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
 * 기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.
 */

function solution(number, limit, power) {
    let result = 0;
    for(let knight = 1 ; knight<=number ; knight++){
        result += getPower(knight, limit, power);
    }
    return result;
}
function getPower(n, limit, power){
    let divisorCnt = 0;
    const end = Math.sqrt(n);
    // n이 제곱수라면
    if(Number.isInteger(end)) divisorCnt+=1;
    
    for(let i = 1 ; i<end ; i++){
        if(n%i===0) divisorCnt+=2;
        if(divisorCnt > limit) return power;
    }
    return divisorCnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (6.58ms, 35.5MB)
// 테스트 2 〉	통과 (2.60ms, 35.4MB)
// 테스트 3 〉	통과 (1.38ms, 36.6MB)
// 테스트 4 〉	통과 (2.54ms, 36.8MB)
// 테스트 5 〉	통과 (1.13ms, 35.5MB)
// 테스트 6 〉	통과 (8.09ms, 35.5MB)
// 테스트 7 〉	통과 (2.23ms, 35.6MB)
// 테스트 8 〉	통과 (2.41ms, 35.5MB)
// 테스트 9 〉	통과 (7.25ms, 35.5MB)
// 테스트 10 〉	통과 (1.46ms, 35.5MB)
// 테스트 11 〉	통과 (76.30ms, 35.5MB)
// 테스트 12 〉	통과 (81.54ms, 35.6MB)
// 테스트 13 〉	통과 (46.85ms, 35.5MB)
// 테스트 14 〉	통과 (75.07ms, 35.6MB)
// 테스트 15 〉	통과 (80.35ms, 35.5MB)
// 테스트 16 〉	통과 (66.69ms, 35.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (14.29ms, 35.6MB)
// 테스트 19 〉	통과 (2.19ms, 35.5MB)
// 테스트 20 〉	통과 (2.05ms, 35.6MB)
// 테스트 21 〉	통과 (0.06ms, 33.4MB)
// 테스트 22 〉	통과 (0.06ms, 33.5MB)
// 테스트 23 〉	통과 (0.14ms, 33.5MB)
// 테스트 24 〉	통과 (89.85ms, 35.6MB)
// 테스트 25 〉	통과 (81.52ms, 35.6MB)
// 테스트 26 〉	통과 (1.04ms, 35.6MB)
// 테스트 27 〉	통과 (1.19ms, 35.5MB)

// 아래는 리팩토링 이전 코드. 리팩토링해서 위와 같이 속도개선
// function solution(number, limit, power) {
//     let result = 0;
//     for(let knight = 1 ; knight<=number ; knight++){
//         const tmp = getDivisorCnt(knight);
//         result += tmp > limit ? power : tmp;
//     }
//     return result;
    
// }
// function getDivisorCnt(n){
//     let cnt = 0;
//     const end = Math.sqrt(n);
//     for(let i = 1 ; i<end ; i++){
//         if(n%i===0) cnt+=2;
//     }
//     // n이 제곱수라면
//     if(Number.isInteger(end)) cnt+=1;
//     return cnt;
// }

// 정확성  테스트
// 테스트 1 〉	통과 (52.64ms, 36.5MB)
// 테스트 2 〉	통과 (43.14ms, 36.4MB)
// 테스트 3 〉	통과 (19.85ms, 36.5MB)
// 테스트 4 〉	통과 (42.50ms, 36.4MB)
// 테스트 5 〉	통과 (20.93ms, 36.3MB)
// 테스트 6 〉	통과 (6.22ms, 35.5MB)
// 테스트 7 〉	통과 (2.04ms, 35.5MB)
// 테스트 8 〉	통과 (1.72ms, 35.5MB)
// 테스트 9 〉	통과 (6.25ms, 35.5MB)
// 테스트 10 〉	통과 (1.28ms, 35.4MB)
// 테스트 11 〉	통과 (88.20ms, 35.5MB)
// 테스트 12 〉	통과 (95.13ms, 35.6MB)
// 테스트 13 〉	통과 (91.75ms, 35.4MB)
// 테스트 14 〉	통과 (93.88ms, 35.5MB)
// 테스트 15 〉	통과 (97.69ms, 35.5MB)
// 테스트 16 〉	통과 (101.52ms, 35.6MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (96.61ms, 35.5MB)
// 테스트 19 〉	통과 (2.28ms, 35.5MB)
// 테스트 20 〉	통과 (1.99ms, 35.6MB)
// 테스트 21 〉	통과 (0.06ms, 33.4MB)
// 테스트 22 〉	통과 (0.07ms, 33.4MB)
// 테스트 23 〉	통과 (0.13ms, 33.5MB)
// 테스트 24 〉	통과 (97.17ms, 35.5MB)
// 테스트 25 〉	통과 (102.40ms, 35.5MB)
// 테스트 26 〉	통과 (0.97ms, 35.5MB)
// 테스트 27 〉	통과 (0.96ms, 35.4MB)