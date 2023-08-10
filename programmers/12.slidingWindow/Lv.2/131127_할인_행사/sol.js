// https://school.programmers.co.kr/learn/courses/30/lessons/131127
/**
 * [문제 설명]
 * XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여합니다. XYZ 마트에서는 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다. 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.
 * 예를 들어, 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며, XYZ 마트에서 15일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다. 첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않습니다. 둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다. 셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.
 * 정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때, 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성하시오. 가능한 날이 없으면 0을 return 합니다.
 * 
 * 제한사항
 * * 1 ≤ want의 길이 = number의 길이 ≤ 10
 * * * 1 ≤ number의 원소 ≤ 10
 * * * number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
 * * 10 ≤ discount의 길이 ≤ 100,000
 * * want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
 * * * 1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12
 */

// 슬라이딩 윈도우
// 고정된 범위 : 10칸

function solution(want, number, discount) {
    const X = 10; // 고정된 범위
    const suggestedMap = new Map(); // 윈도우 역할
    let result = 0;

    const wantMap = new Map();
    for(let i = 0 ; i < want.length ; i++){
        wantMap.set(want[i], number[i])
    }

    // 윈도우 슬라이딩 시키기
    for(let i = 0 ; i < discount.length - X + 1 ; i++){
        // 디폴트 윈도우 구하기
        if(i === 0){
            for(let j = 0 ; j < X ; j++){
                suggestedMap.set(discount[j], (suggestedMap.get(discount[j]) || 0) + 1);
            }
            if(isMatched(suggestedMap, wantMap)) result += 1;
        }
        if(i > 0){
            // 디폴트 윈도우에서 맨 왼쪽 값 빼고,
            suggestedMap.set(discount[i - 1], suggestedMap.get(discount[i - 1]) - 1);
            if(suggestedMap.get(discount[i - 1]) === 0) suggestedMap.delete(discount[i - 1]); // isMatched 성능 개선을 위함
            // 맨 오른쪽 값 더하기
            suggestedMap.set(discount[i + X - 1], (suggestedMap.get(discount[i + X - 1]) || 0) + 1);
            if(isMatched(suggestedMap, wantMap)) result += 1;
        }
    }
    return result;
}
// 제안되는 맵과 원하는 맵이 일치는 하는 지
function isMatched(suggestedMap, wantMap) {
    if(suggestedMap.size !== wantMap.size) return false;
    for(const [item, num] of wantMap){
        if(
            !suggestedMap.has(item) ||
            suggestedMap.get(item) !== num
          ){
            return false;
        }
    }
    return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (7.94ms, 37.9MB)
// 테스트 2 〉	통과 (18.75ms, 41MB)
// 테스트 3 〉	통과 (8.70ms, 37.5MB)
// 테스트 4 〉	통과 (14.66ms, 39.2MB)
// 테스트 5 〉	통과 (12.59ms, 39.7MB)
// 테스트 6 〉	통과 (12.24ms, 37.9MB)
// 테스트 7 〉	통과 (11.48ms, 38.4MB)
// 테스트 8 〉	통과 (18.31ms, 41MB)
// 테스트 9 〉	통과 (8.12ms, 37.6MB)
// 테스트 10 〉	통과 (14.17ms, 40.2MB)
// 테스트 11 〉	통과 (14.52ms, 38.2MB)
// 테스트 12 〉	통과 (0.11ms, 33.4MB)