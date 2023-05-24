// https://school.programmers.co.kr/learn/courses/30/lessons/120860
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    // 좌표가 순서대로 들어 있지 않음
    const xArr = dots.map((v)=>v[0]).sort((a,b)=>a-b);
    const yArr = dots.map((v)=>v[1]).sort((a,b)=>a-b);
    const width = xArr.pop()-xArr[0];
    const height = yArr.pop()-yArr[0];
    return width*height;
}