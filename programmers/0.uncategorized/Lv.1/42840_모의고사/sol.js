// https://school.programmers.co.kr/learn/courses/30/lessons/42840
/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

function solution(answers) {
    const firstPerson = [1, 2, 3, 4, 5]; // 5개
    const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개
    const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개

    let firstScore = 0;
    let secondScore = 0;
    let thirdScore = 0;
    answers.forEach((v, i)=>{
        if(firstPerson[i%5]===v) firstScore++;
        if(secondPerson[i%8]===v) secondScore++;
        if(thirdPerson[i%10]===v) thirdScore++;
    })
    
    const max = Math.max(firstScore,secondScore,thirdScore);
    const result = [];
    if(max===firstScore){
        result.push(1);
    }
    if(max===secondScore){
        result.push(2);
    }
    if(max===thirdScore){
        result.push(3);
    }
    return result;
}