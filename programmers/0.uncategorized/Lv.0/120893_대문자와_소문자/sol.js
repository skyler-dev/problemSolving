function isUpper(str){
    return str === str.toUpperCase() ? true : false;
}

function isLower(str){
    return str === str.toLowerCase() ? true : false;
}

function solution(my_string) {
    // 문자열에서 배열 생성
    const arr = my_string.split('');
    // 새로 만든 함수를 이용해 대문자인지 소문자인지 판별
    // 대문자는 소문자로 소문자는 대문자로 변환
    const anwerArr = arr.map((letter)=>{
        if(isUpper(letter)){
            return letter.toLowerCase();
        } else if(isLower(letter)){
            return letter.toUpperCase();
        }
    })
    // 배열에서 문자열을 생성하고 반환
    return anwerArr.join("");
}