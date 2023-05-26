// https://school.programmers.co.kr/learn/courses/30/lessons/120956
/**머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요. */

function isExist(word){
    const pronunciations = ["aya","ye","woo","ma"];
    let ansWithComa = word;
    for(let pr of pronunciations){
        if(word.includes(pr)){
            //콤마를 쓰는 이유 : 합쳐져서 허용되는 발음이 되는 것 방지
            ansWithComa = ansWithComa.split(pr).join(','); 
        }
    }
    const cleanAns = ansWithComa.split(',').join("");
    return cleanAns.length===0 ? true : false;
}

function solution(babbling) {
    return babbling.filter((v)=>isExist(v)).length;
}