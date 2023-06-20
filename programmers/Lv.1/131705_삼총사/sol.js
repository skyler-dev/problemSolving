// https://school.programmers.co.kr/learn/courses/30/lessons/131705
/**
 * 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
 * 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
 */

function solution(number) {
    // number에서 3개의 조합을 꺼내서 그 조합의 합이 0이 되는 것만 카운트
    let cnt = 0;
    const combinations = getCombination(number, 3);
    combinations.forEach((combi)=>{
        if(combi.reduce((acc, cur)=>acc+cur,0)===0) cnt++;
    })
    return cnt;
}
// array는 주어지는 아이템들, num은 뽑아야 되는 갯수
// 반환은 num에 맞춰 뽑은 아이템들의 중첩 배열
function getCombination(array, num){
    const result = [];
    if(num===1) return array.map((item)=>[item]);
    array.forEach((fixed, idx, arr)=>{
        const rest = arr.slice(idx+1);
        // 나머지에 대해 조합구하기
        const combinations = getCombination(rest, num-1);
        // 돌아온 조합에 fixed 값 붙이기
        const attached = combinations.map((v)=>[fixed, ...v]);
        result.push(...attached);
    })
    return result;
}
// 다음 링크에서 순열과 조합 알고리즘 참고 
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0