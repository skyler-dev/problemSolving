// https://school.programmers.co.kr/learn/courses/30/lessons/133499
/**
 * 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(babbling) {
    // 옹알이 한 글자씩 tmp에 +=하기
    // tmp가 유효발음이 되면 stack에 넣고 tmp는 ''으로 초기화하기
    // 유효발음이 아니거나, 연속된 발음이면 다음 글자로 넘어가기
    // stack을 join한 길이가 babbling의 원소길이와 같다면 result++
    let tmp = '';
    const stack = [];
    let result = 0;
    const vaild = new Set([ "aya", "ye", "woo", "ma" ])
    babbling.forEach((bab)=>{
        for(let char of bab){
            tmp+=char;
            if(stack[stack.length-1]===tmp){
                tmp = '';
                continue;
            }
            if(vaild.has(tmp)){
                stack.push(tmp);
                tmp = '';
                continue;
            }
        }
        if(stack.join('').length===bab.length){
            result++
        }
        stack.length = 0; // stack.splice(0)
        tmp = '';
    })
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.22ms, 33.6MB)
// 테스트 2 〉	통과 (0.21ms, 33.5MB)
// 테스트 3 〉	통과 (0.22ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.6MB)
// 테스트 5 〉	통과 (0.22ms, 33.4MB)
// 테스트 6 〉	통과 (0.23ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.6MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.22ms, 33.5MB)
// 테스트 10 〉	통과 (0.21ms, 33.5MB)
// 테스트 11 〉	통과 (0.22ms, 33.4MB)
// 테스트 12 〉	통과 (0.45ms, 33.6MB)
// 테스트 13 〉	통과 (0.54ms, 33.7MB)
// 테스트 14 〉	통과 (0.45ms, 33.5MB)
// 테스트 15 〉	통과 (0.64ms, 33.7MB)
// 테스트 16 〉	통과 (0.66ms, 33.6MB)
// 테스트 17 〉	통과 (0.75ms, 33.6MB)
// 테스트 18 〉	통과 (0.46ms, 33.6MB)
// 테스트 19 〉	통과 (0.25ms, 33.5MB)
// 테스트 20 〉	통과 (0.31ms, 33.6MB)