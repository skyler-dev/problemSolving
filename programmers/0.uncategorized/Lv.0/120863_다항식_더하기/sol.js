// https://school.programmers.co.kr/learn/courses/30/lessons/120863
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
    // 더하기 연산만 있음
    const termArr = polynomial.split(" + ")
    // x항 정리
    const xArr = [...termArr].filter((v)=>v.includes('x'));
    const parsedXArr = xArr.map((v)=>parseInt(v) ? parseInt(v) : 1 );
    const xCal = parsedXArr.reduce((acc,v)=>acc+v,0);
    // 상수항 정리
    const nArr = [...termArr].filter((v)=>!v.includes('x'));
    const nCal = nArr.reduce((acc,v)=>acc + +v,0);
    
    // 식 조합해서 반환
    const result = [];
    // x항 표시방법 결정. 0인 경우는 표시안함. 계수 1 생략
    if(xCal===1){
        result.push('x');
    }else if(xCal>1){
        result.push(`${xCal}x`);
    }
    // +연산자 표시여부 결정
    if(xCal!==0&&nCal!==0){
        result.push(' + ');
    }
    // 상수항 0인 경우는 표시 안함
    if(nCal>=1){
        result.push(`${nCal}`);
    }
    return result.join('');
}