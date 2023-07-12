// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    const unitArr = [...my_str];
    const ans = [];
    const count = Math.ceil(my_str.length/n);
    for(let i = 0 ; i < count ; i++){
        if(unitArr.length < n){
        ans.push(unitArr.join(""))
        }else{
            ans.push(unitArr.slice(0,n).join(""));
            // 업데이트
            unitArr.splice(0,n);
        }
        // console.log(unitArr)
        // console.log(ans)
    }
    return ans;
}