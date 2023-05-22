// https://school.programmers.co.kr/learn/courses/30/lessons/120907
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// X [연산자] Y 부분 계산 담당
function calculate(my_string) {
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

function solution(quiz) {
    const ans = quiz.map((v)=>{
        const [before, after] = v.split(" = ");
        return calculate(before) === +after ? "O" : "X";
    })
    return ans;
}