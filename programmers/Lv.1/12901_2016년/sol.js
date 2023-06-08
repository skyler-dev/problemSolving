// https://school.programmers.co.kr/learn/courses/30/lessons/12901
/**
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
 * 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
 * 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
 */

function solution(a, b) {
    // 윤년 : 2월 29일 존재
    const initalMap = new Map([
        // 1월 7일은 목요일. 7로 나눴을 때 나머지는 0. 그러므로 0을 목요일로 설정.
        [0, 'THU'], [1, 'FRI'], [2, 'SAT'], [3, 'SUN'], 
        [4, 'MON'], [5, 'TUE'], [6, 'WED']
    ])
    const lastDayMap = new Map([
        [1, 31], [2, 29], [3, 31], [4, 30], [5, 31],
        [6, 30], [7, 31], [8, 31], [9, 30], [10, 31],
        [11, 30], [12, 31]
    ])
    let days = 0;
    for(let i = 1 ; i < a ; i++){
        days += lastDayMap.get(i);
    }
    days += b;
    return initalMap.get(days%7);
}