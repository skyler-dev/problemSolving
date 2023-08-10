// https://school.programmers.co.kr/learn/courses/30/lessons/155651
/**
 * [문제 설명]
 * 호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다. 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
 * 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.
 * [제한사항]
 * * 1 ≤ book_time의 길이 ≤ 1,000
 * * * book_time[i]는 ["HH:MM", "HH:MM"]의 형태로 이루어진 배열입니다
 * * * * [대실 시작 시각, 대실 종료 시각] 형태입니다.
 * * * 시각은 HH:MM 형태로 24시간 표기법을 따르며, "00:00" 부터 "23:59" 까지로 주어집니다.
 * * * * 예약 시각이 자정을 넘어가는 경우는 없습니다.
 * * * * 시작 시각은 항상 종료 시각보다 빠릅니다.
 */

// 그리디

// 현재 상황에서 기준에 따라 제일 합리적인 판단
// 기준 : 입실이 가장 빠른 순으로 예약건 처리중, 충돌이 일어날 때만 방을 새로 생성

// 충돌이 일어나는 지 어떻게 아는 가?
// ㄴ 입실 가능한 시간의 방이 없으면, 충돌
// 입실 가능한 시간 = 이전 예약 건 퇴실 시간 + 10분 -> 지속적인 갱신 필요

function solution(book_time) {
    // 초기값은, 하나 방의 입실 가능시간 0분
    const rooms = [0];
    // 입실이 가장 빠른 순으로 정렬된 예약건들
    const sortedMins = getMins(book_time).sort((a,b)=>a[0]-b[0]);
    
    // 순서대로 예약건 처리
    sortedMins.forEach(([curStart, curEnd])=>{
        // 현재 예약을 수용할 수 있는 방의 인덱스
        const curRoomKey = rooms.findIndex((vaildTime) => vaildTime <= curStart);
        // (다음 손님) 입실 가능한 시간
        const updatedVaildTime = curEnd + 10;

        if(curRoomKey === -1){
            // 방 생성 필요
            rooms.push(updatedVaildTime);
        } else {
            // 현재 방에 예약
            rooms[curRoomKey] = updatedVaildTime;
        }
    })
    return rooms.length;
}

function getMins(book_time){
    return book_time.map(([start, end])=>{
        const startArr = start.split(":");
        const endArr = end.split(":");
        return [+startArr[0]*60 + +startArr[1], +endArr[0]*60 + +endArr[1]]
    })
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.29ms, 33.4MB)
// 테스트 2 〉	통과 (0.77ms, 32.5MB)
// 테스트 3 〉	통과 (4.59ms, 35.1MB)
// 테스트 4 〉	통과 (2.57ms, 35.7MB)
// 테스트 5 〉	통과 (0.13ms, 33.5MB)
// 테스트 6 〉	통과 (3.95ms, 35.9MB)
// 테스트 7 〉	통과 (4.48ms, 35.9MB)
// 테스트 8 〉	통과 (1.45ms, 33.7MB)
// 테스트 9 〉	통과 (1.02ms, 33.6MB)
// 테스트 10 〉	통과 (5.31ms, 35.9MB)
// 테스트 11 〉	통과 (5.44ms, 36.2MB)
// 테스트 12 〉	통과 (4.79ms, 36MB)
// 테스트 13 〉	통과 (1.24ms, 33.5MB)
// 테스트 14 〉	통과 (4.41ms, 35.9MB)
// 테스트 15 〉	통과 (9.05ms, 36MB)
// 테스트 16 〉	통과 (2.47ms, 33.6MB)
// 테스트 17 〉	통과 (7.19ms, 36.1MB)
// 테스트 18 〉	통과 (3.38ms, 35.9MB)
// 테스트 19 〉	통과 (10.58ms, 36.1MB)