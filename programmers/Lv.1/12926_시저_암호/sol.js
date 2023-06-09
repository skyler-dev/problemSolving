// https://school.programmers.co.kr/learn/courses/30/lessons/12926
/**
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
 * "z"는 1만큼 밀면 "a"가 됩니다. 
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 */

function solution(s, n) {
    let result = "";
    for(let c of s){
        let cdPnt = c.codePointAt(0);
        if(cdPnt>=65&&cdPnt<=90){
            let pushedCdPnt = c.codePointAt(0)+n;
            if(pushedCdPnt>90){
                pushedCdPnt = pushedCdPnt-90+64;
            }
            result+=String.fromCodePoint(pushedCdPnt);
            continue;
        }
        if(cdPnt>=97&&cdPnt<=122){
            let pushedCdPnt = c.codePointAt(0)+n;
            if(pushedCdPnt>122){
                pushedCdPnt = pushedCdPnt-122+96;;
            }
            result+=String.fromCodePoint(pushedCdPnt);
            continue;
        }
        if(cdPnt===32){
            result+=c;
            continue;
        }
    }
    return result;
}
//     console.log(' '.codePointAt(0)) // 32
    
//     console.log('A'.codePointAt(0)) // 65
//     console.log('Z'.codePointAt(0)) // 90
    
//     console.log('a'.codePointAt(0)) // 97
//     console.log('z'.codePointAt(0)) // 122