// https://school.programmers.co.kr/learn/courses/30/lessons/42885
/**
 * [문제 설명]
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
 * 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
 * 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 * 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * [제한 사항]
 * 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
 * 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
 */

function solution(people, limit) {
    // 몸무게 높은 사람 순으로 정렬
    people.sort((a,b)=>b-a);
    
    let boatCnt = 0;
    let bigIdx = 0;
    let smallIdx = people.length -1;

    // 두 사람이 같은 사람이되거나, 이미 보트에 탄 사람이 되면 종료
    while(bigIdx < smallIdx){
        const sum = people[bigIdx] + people[smallIdx];
        
        // 두 사람이 짝궁이면, 짝궁(작은 사람)까지 함께 태운다.
        if(sum <= limit) smallIdx--;
        // 짝궁여부 상관없이 큰 사람은 무조건 태우기
        bigIdx++;
        boatCnt+=1;
        
    }
    // 혼자 남아있는 사람이 있다면,
    if(bigIdx === smallIdx) boatCnt+=1;

    return boatCnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.04ms, 35.3MB)
// 테스트 2 〉	통과 (1.16ms, 33.5MB)
// 테스트 3 〉	통과 (1.19ms, 33.2MB)
// 테스트 4 〉	통과 (1.11ms, 33.1MB)
// 테스트 5 〉	통과 (0.71ms, 33.5MB)
// 테스트 6 〉	통과 (0.43ms, 33.5MB)
// 테스트 7 〉	통과 (0.66ms, 33.5MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.4MB)
// 테스트 10 〉	통과 (1.16ms, 33.5MB)
// 테스트 11 〉	통과 (1.03ms, 33.5MB)
// 테스트 12 〉	통과 (0.91ms, 33.5MB)
// 테스트 13 〉	통과 (1.13ms, 33.4MB)
// 테스트 14 〉	통과 (1.33ms, 33.5MB)
// 테스트 15 〉	통과 (0.34ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (34.91ms, 37.8MB)
// 테스트 2 〉	통과 (36.78ms, 37.9MB)
// 테스트 3 〉	통과 (41.75ms, 37.7MB)
// 테스트 4 〉	통과 (27.38ms, 37.9MB)
// 테스트 5 〉	통과 (25.61ms, 37.7MB)