// https://school.programmers.co.kr/learn/courses/30/lessons/120890
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
    // 정렬
    array.sort((a, b)=>(a - b));
    // 절대값 배열 만들기
    const absArr = array.map((item)=>Math.abs(item-n));
    // 0인 아이템(n과 똑 같은 숫자)이 있는 지 확인
    // 존재한다면, 인덱스로 찾아서 반환
    if(absArr.includes(0)){
        return array[absArr.indexOf(0)]
    }
    // 절대값 배열에서 최소값 찾기
    const minAbs = Math.min(...absArr);
    // 찾은 최소값으로 인덱스 찾기
    const minIdx = absArr.indexOf(minAbs);
    // 인덱스로 원본 배열에서 정답 찾아서 반환
    return array[minIdx];
}