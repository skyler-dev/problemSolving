// https://school.programmers.co.kr/learn/courses/30/lessons/43165
/**
 * n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
 */

// DFS & Tree
function solution(numbers, target) {
    let result = 0;
    
    dfs(1, 0, 0); // Level 1 Root
    
    function dfs(deep, idx, sum) {
        // 해당 정점이 말단이라면,
        if(deep === numbers.length + 1){
            if(sum === target) result++;
            return; // 스택에서 제거
        }
        
        // 해당 정점이 부모노드라면, 자식정점 탐색
        dfs(deep + 1, idx + 1, sum + numbers[idx]) // + 인 자식 노드로 가기(재귀)
        dfs(deep + 1, idx + 1, sum - numbers[idx]) // - 인 자식 노드로 가기(재귀)
        
        // 부모노드는 본문 다 실행되야만, 스택에서 제거됨
    }
    
    return result
}

// 정확성  테스트
// 테스트 1 〉	통과 (37.43ms, 36.5MB)
// 테스트 2 〉	통과 (16.49ms, 35.5MB)
// 테스트 3 〉	통과 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.82ms, 35.6MB)
// 테스트 5 〉	통과 (1.89ms, 35.5MB)
// 테스트 6 〉	통과 (0.33ms, 33.4MB)
// 테스트 7 〉	통과 (0.20ms, 33.4MB)
// 테스트 8 〉	통과 (1.22ms, 35.4MB)