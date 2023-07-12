// https://school.programmers.co.kr/learn/courses/30/lessons/120882
/** 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.*/

function solution(score) {
    // 평균배열 만들기. 위치 기억
    const averageArr = score.map(([eng, math], idx)=>[(eng+math)/2, idx]);
    // 점수가 높은 순서대로 정렬
    averageArr.sort((a, b)=>b[0]-a[0]);
    // 등수 매기기
    let cnt = 0;
    let tmp = 0;
    const rankedArr = averageArr.map(([average, location], idx, arr)=>{
        cnt++;
        if(average !== arr?.[idx-1]?.[0]){
            tmp = cnt;
            return [cnt, location];
        } else {
            // 동점일 시
            return [tmp, location];
        }
    })
    // 초기 위치로 정렬 후 등수만 반환
    return rankedArr.sort((a,b)=>a[1]-b[1]).map(([rank])=>rank);
}