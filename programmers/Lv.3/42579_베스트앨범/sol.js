// https://school.programmers.co.kr/learn/courses/30/lessons/42579
/**
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 */

function solution(genres, plays) {
    // 1. 배열들을 하나로 *묶기* -> 배열로 묶기
    
    // 2. 데이터 만들기 -> 특정 장르를 기록하고 찾기 위해 맵 사용
    // 2-1. 묶인 노래들을 재생순으로 *정렬*하기 -> 맵에 재생수도 넣어야함
    // 2-2. 노래들을 2개까지만 자르기
    
    // 3. 반환값 만들기
    // 3-1. 맵에 있는 값들 배열로 빼오기
    const genreMap = new Map();
    genres
        .map((genre, idx)=>[genre, plays[idx]])
        .forEach(([genre, play], idex) => {
            const data = genreMap.get(genre) ?? {total: 0 , songs: []}
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, {play, idex}]
                    .sort((a,b)=>b.play - a.play)
                    .slice(0,2)
            })
        })
    return Array.from(genreMap)
                .sort((a,b)=>b[1].total-a[1].total)
                .flatMap((item)=>item[1].songs)
                .map((song)=>song.idex)
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.6MB)
// 테스트 2 〉	통과 (0.18ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.6MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.45ms, 33.6MB)
// 테스트 6 〉	통과 (0.42ms, 33.5MB)
// 테스트 7 〉	통과 (0.40ms, 33.6MB)
// 테스트 8 〉	통과 (0.37ms, 33.5MB)
// 테스트 9 〉	통과 (0.19ms, 33.5MB)
// 테스트 10 〉	통과 (0.46ms, 33.7MB)
// 테스트 11 〉	통과 (0.28ms, 33.4MB)
// 테스트 12 〉	통과 (0.39ms, 33.6MB)
// 테스트 13 〉	통과 (0.44ms, 33.5MB)
// 테스트 14 〉	통과 (0.45ms, 33.7MB)
// 테스트 15 〉	통과 (0.19ms, 33.5MB)
