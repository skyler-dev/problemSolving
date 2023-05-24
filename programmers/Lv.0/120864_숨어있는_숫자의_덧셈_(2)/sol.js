// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    const strNums = [];
    [...my_string].forEach((v,idx,arr)=>{
        // 0과 NaN도 숫자이기 때문에, NaN만 거르기 위해 isInteger()사용
        if(Number.isInteger(+v)){
            // 이전 값도 숫자라면?
            if(Number.isInteger(+arr[idx-1])){
                const beforeValue = strNums.pop();
                strNums.push(beforeValue+v);
            // 아니라면?
            }else{
                strNums.push(v);
            }
        }
    })
    return strNums.reduce((acc,v)=>acc+ +v,0);
}