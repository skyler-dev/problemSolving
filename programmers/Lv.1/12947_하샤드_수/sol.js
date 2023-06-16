// https://school.programmers.co.kr/learn/courses/30/lessons/12947
/**
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 */

function solution(x) {
    // 숫자 문자열로 바꾸기
    // 문자열 한 문자씩 배열로 끊기
    const arr = [...x.toString()]
    // 배열내 원소 모두 더한 값 sum으로 변수 저장
    const sum = arr.reduce((acc,v)=>acc + +v,0);
    // x가 sum으로 나눴을 때 나머지가 0이면 true반환 
    return x%sum===0;
}