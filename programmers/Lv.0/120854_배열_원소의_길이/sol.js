// https://school.programmers.co.kr/learn/courses/30/lessons/120854
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function solution(strlist) {
    // 배열 초기화
    const answerArr = [];
    // 인자로 받은 값 순회
    for(let item of strlist){
        // 각 문자열 길이를 초기화한 배열에 밀어넣기
        answerArr.push(item.length);
    }
    // 완성된 배열 반환
    return answerArr;
}