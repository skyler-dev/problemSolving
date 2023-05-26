// https://school.programmers.co.kr/learn/courses/30/lessons/120876
/**선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
 * 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
 */

function solution(lines) {
    const axiosArr = Array.from({length: 201}, ()=>0);
    lines.forEach(([start, end])=>{
        while(start<end){
            axiosArr[start+100]++;
            start++
        }
    })
    return axiosArr.filter((v)=>v>=2).length;
}