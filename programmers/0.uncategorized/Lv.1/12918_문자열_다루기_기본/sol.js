// https://school.programmers.co.kr/learn/courses/30/lessons/12918
/**
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 */

function solution(s) {
    const size = s.length;
    if(size===4||size===6){
        return [...s].filter((c)=>c.codePointAt(0)>=48&&c.codePointAt(0)<=57).length===size ? true : false;
    }else{
        return false;
    }
}