// https://school.programmers.co.kr/learn/courses/30/lessons/120924
/**
 * 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
 */

function isAS(common){
    const initial = common[0];
    const numByRole = common[1]-common[0];
    const differenceArr = common.map((v,idx,arr)=>{
        const btr = arr[idx-1] ?? initial;
        return v-btr;
    })
    let result = true;
    differenceArr.forEach((v,idx)=>{
        if(idx>0 && v!==numByRole){
            result = false;
        }
    })
    return result;   
}
function isGS(common){
    const initial = common[0];
    // 0/0은 NaN
    const numByRole = common[1]/common[0] || 0;
    const differenceArr = common.map((v,idx,arr)=>{
        const btr = arr[idx-1] ?? initial;
        return v/btr || 0;
    })
    let result = true;
    differenceArr.forEach((v,idx)=>{
        if(idx>0 && v!==numByRole){
            result = false;
        }
    })
    return result; 
}

function solution(common) {
    let result;
    if(isGS(common)){
        result = common[common.length-1]*(common[1]/common[0]||0);
    }
    if(isAS(common)){
        result = common[common.length-1]+(common[1]-common[0]);
    }
    return result;
}