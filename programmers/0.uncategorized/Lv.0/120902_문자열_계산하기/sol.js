// https://school.programmers.co.kr/learn/courses/30/lessons/120902
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

// eval() 사용 지양
function solution(my_string) {
    const strArr = my_string.split(" ");
    const ans = strArr.reduce((acc, v, idx, arr)=>{
        if(v==='+'){
            return acc
        }else if(v==='-'){
            arr[idx+1] = -arr[idx+1];
            return acc
        }else{
            return acc + Number(v)
        }
    },0)
    return ans;
}