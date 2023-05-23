// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    // 정규표현식(동적)
    const regExp = new RegExp(`.{1,${n}}`,"g")
    return my_str.match(regExp);
}