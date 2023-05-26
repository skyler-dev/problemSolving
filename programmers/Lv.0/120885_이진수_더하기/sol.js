// https://school.programmers.co.kr/learn/courses/30/lessons/120885
/** 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.*/

function solution(bin1, bin2) {
    const reversed1Arr = [...bin1].reverse();
    const reversed2Arr = [...bin2].reverse();
    const dex1 = reversed1Arr.reduce((acc,v,idx)=>{
        return acc + +v*2**idx
    },0)
    const dex2 = reversed2Arr.reduce((acc,v,idx)=>{
        return acc + +v*2**idx
    },0)
    let dexSum = Number(dex1+dex2);
    let binResultArr = [];
    while(dexSum/2>0){
        binResultArr.push(dexSum%2);
        dexSum = Math.floor(dexSum/2);
    }
    // 이진수로 변환해서 반환
    // 십진수의 합이 0일 경우, binResultArr가 []이기 때문에 예외처리
    return binResultArr.reverse().join("") || '0';
}