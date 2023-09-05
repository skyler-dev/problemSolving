// https://school.programmers.co.kr/learn/courses/30/lessons/42895
/**
 * [문제 설명]
 * 아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.
 * 12 = 5 + 5 + (5 / 5) + (5 / 5)
 * 12 = 55 / 5 + 5 / 5
 * 12 = (55 + 5) / 5
 * 5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
 * 이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.
 * 
 * [제한사항]
 * N은 1 이상 9 이하입니다.
 * number는 1 이상 32,000 이하입니다.
 * 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
 * 최솟값이 8보다 크면 -1을 return 합니다.
 */

// DP

// 1. 가장 작은 문제 정의?
// table[1] = [5, ...]
// table[2] = [55, ...]
// table[3] = [555, ...]
// 연속된 숫자는 그냥 붙이는 것이 가장 빠르다.
// -> N을 i개 써서 만들 수 있는 가장 큰 숫자 

// 2. 작은 문제로 큰 문제 해결가능?
// table[3] = [555, 5+(5*5), (5+5)*5, 55+5,...]
// table[i] = [
//      ...
//     [..."table[i-1]중 골라" <연산> "table[1]중 골라" 한 것들], 
//     [..."table[i-2]중 골라" <연산> "table[2]중 골라" 한 것들],
//     ...
// ]

// 3. 테이블 셋팅
// table[i] = [숫자 N을 i개 사용해서 만들 수 있는 숫자들의 배열]

// 최솟값이 8보다 크면 -1 return -> 최솟값 1 ~ 8까지만 확인하면 된다.
// N 사용횟수가 i일 때, 만들 수 있는 숫자들 중 number가 포함되어 있을 것이다.
// number가 처음으로 나타났을 때의 i가 그 number를 만들기 위한 N의 최솟값이다(table).
// -> 중복 방지 필요 -> set으로 check!

function solution(N, number) {
    // 인덱스와 N 사용 횟수 맞추기위해 1부터 시작
    const table = Array.from(Array(9), ()=>[]);
    // 중복 방지
    const check = new Set();
    
    // N을 i개 써서 만들 수 있는 가장 큰 숫자 추가(가장 작은 문제 정의)
    for(let i = 1 ; i < 9 ; i++){
        const tmp = +`${N}`.repeat(i);
        if(tmp === number) return i; // 미리 반환
        
        table[i].push(tmp);
        check.add(tmp);
    }
    // N을 하나 써서는 'N'밖에 못 만드므로 i는 2부터 시작
    for(let i = 2 ; i < 9 ; i++){
        
        for(let j = 1 ; j < i ; j++){
            const k = i - j;
            // "table[i-1]중 골라" <연산> "table[1]중 골라" 한 것들
            for(let operand1 of table[j]){
                for(let operand2 of table[k]){
                    // 4가지 경우
                    // N의 최소 사용을 찾는 것이므로 음수나 0은 체크할 필요가 없다
                    const tmps = [
                        operand1 + operand2,
                        Math.abs(operand1 - operand2),
                        Math.floor(operand1 / operand2),
                        operand1 * operand2,
                    ];
                    for(const tmp of tmps){
                        if(tmp === number) return i; // 반환
                        if(tmp !== 0 && !check.has(tmp)){ 
                            table[i].push(tmp);
                            check.add(tmp);
                        }
                    }
                }
            }
        }
        // console.log(table)
    }
    return -1;
}
// 71줄에서의 table 모습
// [
//   [],
//   [ 5 ],
//   [ 55, 10, 1, 25 ],
//   [ 555 ],
//   [ 5555 ],
//   [ 55555 ],
//   [ 555555 ],
//   [ 5555555 ],
//   [ 55555555 ]
// ]
// [
//   [],
//   [ 5 ],
//   [ 55, 10, 1, 25 ],
//   [
//     555, 60, 50, 275,  15,
//       6,  4, 30,  20, 125,
//      11,  2
//   ],
//   [ 5555 ],
//   [ 55555 ],
//   [ 555555 ],
//   [ 5555555 ],
//   [ 55555555 ]
// ]

// 정확성  테스트
// 테스트 1 〉	통과 (0.46ms, 33.7MB)
// 테스트 2 〉	통과 (0.12ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (27.86ms, 40.2MB)
// 테스트 5 〉	통과 (3.02ms, 34.4MB)
// 테스트 6 〉	통과 (0.51ms, 33.5MB)
// 테스트 7 〉	통과 (0.35ms, 33.6MB)
// 테스트 8 〉	통과 (21.55ms, 40.3MB)
// 테스트 9 〉	통과 (0.11ms, 33.5MB)