// https://school.programmers.co.kr/learn/courses/30/lessons/42883
/**
 * [문제 설명]
 * 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
 * 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
 * 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
 * [제한 조건]
 * number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
 * k는 1 이상 number의 자릿수 미만인 자연수입니다.
 */

// N이 백만이면 O(N), O(N log N)

// 큰값이 나오면 이전 값중 더 작은 값은 전부다 삭제
// 즉, 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열이 되어야 한다.

function solution(number, k) {
    const stack=[];
    let cnt = 0;

    for(const item of number){
        // 제거횟수가 남아 있고, 현재 보고 있는 숫자(item)가 stack의 탑값(이전값)보다 크면
        while(cnt < k && stack[stack.length - 1] < item){
            stack.pop(); // stack 탑값 제거
            cnt += 1; // 제거횟수 갱신
        }
        stack.push(item)
    }

    // stack이 내림차순으로 정렬되어 있지만, 제거횟수가 남아있는 경우
    while(cnt < k){
        stack.pop();
        cnt += 1;
    }
    
    return stack.join("");
}