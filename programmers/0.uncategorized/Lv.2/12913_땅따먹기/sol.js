// https://school.programmers.co.kr/learn/courses/30/lessons/12913
/**
 * 땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다. 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다. 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
 * 예를 들면,
 * | 1 | 2 | 3 | 5 |
 * | 5 | 6 | 7 | 8 |
 * | 4 | 3 | 2 | 1 |
 * 로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.
 * 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요. 
 * 위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 16점이 최고점이 되므로 16을 return 하면 됩니다.
 */

// DP 중 보텀업
function solution(land) {
    // deep copy 흉내내기
    const dp = land.map((row)=>[...row]);
    // 원본 변형여부 확인 코드
    // console.log(copy.shift().shift())
    // console.log("land", land)
    // console.log("copy", copy)
    dp.forEach((row, rowIdx)=>{
        // For practical purposes, return in a forEach() callback is equivalent to continue in a conventional for loop.
        if(rowIdx < 1) return;

        row.forEach((item, colIdx)=>{
            // 이전에 선택한 인덱스를 제외한 아이템들 중 최대값 찾기
            const max = dp[rowIdx-1].reduce((acc, cur, idx)=>{
                if(idx === colIdx) return acc;

                return acc < cur ? cur : acc ;
            }, 0);

            row[colIdx] = item + max;
        })
    })
    return Math.max(...dp[dp.length-1]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.24ms, 36.2MB)
// 테스트 2 〉	통과 (1.76ms, 36.1MB)
// 테스트 3 〉	통과 (1.83ms, 36.3MB)
// 테스트 4 〉	통과 (1.77ms, 36.1MB)
// 테스트 5 〉	통과 (2.92ms, 36.2MB)
// 테스트 6 〉	통과 (3.16ms, 37.5MB)
// 테스트 7 〉	통과 (1.96ms, 36.1MB)
// 테스트 8 〉	통과 (2.84ms, 36.2MB)
// 테스트 9 〉	통과 (2.94ms, 36.2MB)
// 테스트 10 〉	통과 (2.29ms, 36.1MB)
// 테스트 11 〉	통과 (2.50ms, 36.3MB)
// 테스트 12 〉	통과 (1.76ms, 36.1MB)
// 테스트 13 〉	통과 (1.73ms, 36.1MB)
// 테스트 14 〉	통과 (2.00ms, 36.2MB)
// 테스트 15 〉	통과 (2.84ms, 36.1MB)
// 테스트 16 〉	통과 (1.75ms, 36.1MB)
// 테스트 17 〉	통과 (1.83ms, 36.1MB)
// 테스트 18 〉	통과 (1.79ms, 36.1MB)
// 효율성  테스트
// 테스트 1 〉	통과 (37.75ms, 76.5MB)
// 테스트 2 〉	통과 (34.04ms, 77.2MB)
// 테스트 3 〉	통과 (69.92ms, 78.4MB)
// 테스트 4 〉	통과 (54.67ms, 77.7MB)