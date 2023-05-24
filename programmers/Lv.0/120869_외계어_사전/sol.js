// https://school.programmers.co.kr/learn/courses/30/lessons/120869
/**
 * PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
 */

function solution(spell, dic) {
    // 참조를 전달하지 않도록 원시값 문자열 사용
    const strSpell = spell.sort().join("");
    // set으로 중복 제거
    const set = new Set();
    set.add(strSpell)
    for(let word of dic){
        const strWord = [...word].sort().join("");
        set.add(strWord);
    }
    // 제거된 중복이 있다면 1, 없다면 2
    return set.size===dic.length ? 1 : 2 ;
}