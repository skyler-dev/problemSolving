// https://school.programmers.co.kr/learn/courses/30/lessons/120875
/**점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
 * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
 * 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

function makeSlope(dot1, dot2){
    // 기울기 공식
    return (dot2[1]-dot1[1])/(dot2[0]-dot1[0]);
}

function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots;
    // dot1, dot2 와 dot3, dot4 비교
    if(makeSlope(dot1, dot2) === makeSlope(dot3, dot4)) return 1;
    // dot1, dot3 와 dot2, dot4 비교
    if(makeSlope(dot1, dot3) === makeSlope(dot2, dot4)) return 1;
    // dot1, dot4 와 dot2, dot3 비교
    if(makeSlope(dot1, dot4) === makeSlope(dot2, dot3)) return 1;
    return 0;
}