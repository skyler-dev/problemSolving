// https://school.programmers.co.kr/learn/courses/30/lessons/132265
/**
 * [문제 설명]
 * 철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다. 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다. 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다. 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.
 * 예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다. 토핑들을 1, 2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4, 1, 2] 순서로 올려져 있습니다. 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다. 철수가 [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면 철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다. 만약 롤케이크의 네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1, 2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지 토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다. 공평하게 롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1, 3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.
 * 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * [제한사항]
 * 1 ≤ topping의 길이 ≤ 1,000,000
 * 1 ≤ topping의 원소 ≤ 10,000
 */

// O(N) 또는 O(N log N) 필요

// 완전 탐색 && 해시
// 한쪽에 모두 몰아주고 하나씩 빼기

// 공평 : 동일한 가짓수
// 반환 값 : 공평하게 자르는 경우의 수

function solution(topping) {
    let result = 0;
    
    const olderMap = new Map();
    const youngerMap = new Map();
    // 토핑 가짓수 초기 분배(동생이 다 가져감, 토핑 종류 -> 갯수)
    for(let t of topping){
        youngerMap.set(t ,(youngerMap.get(t) ?? 0) + 1)
    }
    
    // 토핑 순회
    for(let t of topping){
        olderMap.set(t ,(olderMap.get(t) ?? 0) + 1);
        youngerMap.set(t ,youngerMap.get(t) - 1);
        
        // 철수가 한 종류의 토핑을 모두 가져갈 경우, 동생의 토핑 가짓수 -= 1
        if(youngerMap.get(t) === 0) youngerMap.delete(t);
        // 공평한 경우
        if(olderMap.size === youngerMap.size) result += 1;
        // 철수의 토핑 가짓수가 동생보다 많아지면, 더이상 확인할 필요가 없어 종료
        if(olderMap.size > youngerMap.size) break;
        
    }

    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.70ms, 34.4MB)
// 테스트 2 〉	통과 (19.87ms, 43.2MB)
// 테스트 3 〉	통과 (17.74ms, 39.4MB)
// 테스트 4 〉	통과 (14.25ms, 39.2MB)
// 테스트 5 〉	통과 (94.00ms, 65.7MB)
// 테스트 6 〉	통과 (148.87ms, 71.4MB)
// 테스트 7 〉	통과 (97.08ms, 71.5MB)
// 테스트 8 〉	통과 (127.58ms, 71.4MB)
// 테스트 9 〉	통과 (66.47ms, 71.3MB)
// 테스트 10 〉	통과 (55.45ms, 71.3MB)
// 테스트 11 〉	통과 (11.92ms, 39.4MB)
// 테스트 12 〉	통과 (6.58ms, 35.5MB)
// 테스트 13 〉	통과 (130.70ms, 71.3MB)
// 테스트 14 〉	통과 (141.08ms, 71.2MB)
// 테스트 15 〉	통과 (144.06ms, 71.2MB)
// 테스트 16 〉	통과 (111.73ms, 71.2MB)
// 테스트 17 〉	통과 (107.59ms, 71.3MB)
// 테스트 18 〉	통과 (104.69ms, 71.4MB)
// 테스트 19 〉	통과 (77.36ms, 71.4MB)
// 테스트 20 〉	통과 (72.88ms, 71.5MB)