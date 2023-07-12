// https://school.programmers.co.kr/learn/courses/30/lessons/120888
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    // 문자열 초기화
    let answerStr = "";
    // 순회
    for(let letter of my_string){
        // 중복된 문자인지 확인
        // 중복된 문자가 아니라면 추가
        if(!answerStr.includes(letter)){
            answerStr+=letter;
        }
    }
    // 반환
    return answerStr;
}