// https://school.programmers.co.kr/learn/courses/30/lessons/120889
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
    // 정렬 (기존배열 변경)
    sides.sort((a,b)=>(a-b));
    // 앞의 두 아이템의 합이 세번째 아이템보다 > 이면 1 반환
    // 이외는 2 반환
    return (sides[0]+sides[1] > sides[2]) ? 1 : 2;
}