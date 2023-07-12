// https://school.programmers.co.kr/learn/courses/30/lessons/76502
/**
 * 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
 * * (), [], {} 는 모두 올바른 괄호 문자열입니다.
 * * 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
 * * 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
 * 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(s) {
    if(s.length % 2 !== 0) return 0;

    const leng = s.length;
    const arr = [...s];
    let result = 0;
    
    for(let x = 0 ; x < s.length ; x++) {
        let rotated = arr.map((_, i, srcArr)=>{
            return srcArr[(i+x)%leng]
        }).join('');
        if(isVaild(rotated)) result++;
    }
    
    return result;
}
function isVaild(s) {
    const stack = [];
    const waitingLine = [];
    
    const opened = new Set(['(', '[', '{']);
    const closed = new Set([')', ']', '}']);
    const needClosed = new Map([
        ['(', ')'], ['[', ']'], ['{', '}']
    ]);
    for(let c of s){
        if(opened.has(c)){
            stack.push(c);
            waitingLine.push(needClosed.get(c));
        }
        if(closed.has(c)){
            if(stack.length === 0) return false;
            if(waitingLine[waitingLine.length-1] !== c) return false;
            
            waitingLine.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}
