// https://school.programmers.co.kr/learn/courses/30/lessons/120887
/** 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.*/

function solution(i, j, k) {
    const strNumArr = Array.from({length: j-i+1},(_,idx)=>`${i+idx}`);
    let cnt = 0;
    let kStr = k.toString();
    // k가 포함된 수만 모으고, 일의 자릿수로 쪼깨기
    const intStrArr = strNumArr.filter((v)=>v.includes(kStr)).flatMap((v)=>[...v]);
    for(let intStr of intStrArr){
        if(intStr===kStr){
            cnt++;
        }
    }
    return cnt;
}