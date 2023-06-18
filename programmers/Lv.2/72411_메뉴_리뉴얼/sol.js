// https://school.programmers.co.kr/learn/courses/30/lessons/72411
/**
 * 레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
 * 기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공하기로 결정했습니다. 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
 * 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다. 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했습니다.
 * 예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
 * (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)
 * [손님 번호]	[주문한 단품메뉴 조합]
 * 1번 손님	    A, B, C, F, G
 * 2번 손님	    A, C
 * 3번 손님	    C, D, E
 * 4번 손님	    A, C, D, E
 * 5번 손님	    B, C, F, G
 * 6번 손님	    A, C, D, E, H
 * 가장 많이 함께 주문된 단품메뉴 조합에 따라 "스카피"가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.
 * [코스 종류]	    [메뉴 구성]	    [설명]
 * 요리 2개 코스	A, C	        1번, 2번, 4번, 6번 손님으로부터 총 4번 주문됐습니다.
 * 요리 3개 코스	C, D, E	        3번, 4번, 6번 손님으로부터 총 3번 주문됐습니다.
 * 요리 4개 코스	B, C, F, G	    1번, 5번 손님으로부터 총 2번 주문됐습니다.
 * 요리 4개 코스	A, C, D, E	    4번, 6번 손님으로부터 총 2번 주문됐습니다.
 * [문제]
 * 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 */

function solution(orders, course) {
    const map = new Map();
    // 단품메뉴 갯수에 맞춰, 메뉴조합 당 주문한 사람 수 map으로 구성하기
    course.forEach((menuNum)=>{
        orders.forEach((order)=>{
            const menuCombiList = combination([...order], menuNum).map((menuCombi)=>menuCombi.sort().join(''));
            for(let menuCombi of menuCombiList){
                map.has(menuCombi) ? map.set(menuCombi, map.get(menuCombi)+1) : map.set(menuCombi, 1);
            }
        })
    })
    const result = [];
    // 주문한 사람 수가 2이상인 메뉴 조합 중 가장 많이 팔린 메뉴조합 찾기
    for(let menuNum of course){
        let max = 0;
        // 가장 많이 주문된 횟수(max) 구하기
        for(let [menuCombi, cnt] of map){
            if(cnt < 2) continue;
            if(menuCombi.length===menuNum) max = Math.max(max, cnt);
        }
        if(max < 2) continue;
        // 값이 max인 메뉴조합 찾아서 result에 넣기
        for(let [menuCombi, cnt] of map){
            if(menuCombi.length===menuNum && cnt === max) result.push(menuCombi);
        }
    }
    return result.sort();
    
}

function combination(arr, num){
    const result = [];
    // 길이가 1인 배열들을 구하는 경우
    if(num === 1) return arr.map((v)=>[v]);
    
    arr.forEach((fix, idx, arr)=>{
        // fix 이전이 없는 배열 
        const restArr = arr.slice(idx+1);
        const fixAndRest = combination(restArr, num-1).map((v)=>[fix, ...v]);
        result.push(...fixAndRest);
    })
    return result;
}
// 다음 링크에서 순열과 조합 알고리즘 참고 
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0