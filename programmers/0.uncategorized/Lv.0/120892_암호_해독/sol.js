// https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// * 암호화된 문자열 cipher를 주고받습니다.
// * 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
    // 문자열에서 암호배열 생성
    const scretArr = cipher.split('');
    // 배수 배열 생성
    // 암호의 길이를 통해 사용할 배수의 갯수 결정. 콜백으로 배수의 값 생성.
    const multipleArr = Array.from({length: Math.floor(cipher.length/code)}, (v,i)=>((i+1)*code));
    // 암호배열에서, 배수 배열의 아이템을 인덱스로 사용
    // 원하는 인덱스에 있는 값만 필터링
    const answer = scretArr.filter((v,idx)=>(multipleArr.includes(idx+1)));
    // 배열을 문자열로 만들어 반환
    return answer.join('');
}