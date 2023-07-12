// https://school.programmers.co.kr/learn/courses/30/lessons/120862
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    const negativeNums = [];
    const positiveNums = [];//0포함
    let maxFromNP;
    let maxFromNegative;
    let maxFromPositive;
    const arrToCompare = [];
    // 음수 양수 분류
    for(let num of numbers){
        if(num<0){
            negativeNums.push(num);
        } else if(num>=0){
            positiveNums.push(num);
        }
    }
    // 음수양수 하나씩 곱하면 음의 최대값 또는 0
    if(positiveNums.length===1){
        negativeNums.sort((a,b)=>a-b);
        maxFromNP = negativeNums.pop() * positiveNums.pop();
        arrToCompare.push(maxFromNP);
    }
    // 음수 두개를 곱하면 양의 최댓값
    if(negativeNums.length>1){
        negativeNums.sort((a,b)=>b-a);
        maxFromNegative = negativeNums.pop() * negativeNums.pop();
        arrToCompare.push(maxFromNegative);
    }
    // 양수 두개를 곱하면 양의 최댓값
    if(positiveNums.length>1){
        positiveNums.sort((a,b)=>a-b);
        maxFromPositive = positiveNums.pop() * positiveNums.pop();
        arrToCompare.push(maxFromPositive);
    }
    // 셋 중 큰 값 반환
    return Math.max(...arrToCompare)
}