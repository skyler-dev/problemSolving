// https://school.programmers.co.kr/learn/courses/30/lessons/120882
/** 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.*/

function solution(score) {
    const averageArr = score.map(([eng, math])=>(eng+math)/2);
    const sortedArr = [...averageArr].sort((a,b)=>b-a);
    // indexOf는 처음의 인덱스만 반영
    const rankedArr = averageArr.map((average)=>sortedArr.indexOf(average)+1);
    return rankedArr;
}