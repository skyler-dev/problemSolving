// https://school.programmers.co.kr/learn/courses/30/lessons/131128
/**
 * 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
 * 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
 * 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
 */

function solution(X, Y) {
    // 1. 공통원소만 모으기. 이 때 등장하는 횟수 카운트.
    // 2. map에서 숫자를 서로 가지고 있다면, 값의 최소값만큼 뽑기
    // 3. 정렬하기
    // 4. 각 숫자의 최소값만큼 더해서 붙여나감
    let result = '';
    const xMap = new Map();
    const yMap = new Map();
    const tmp = [];
    
    for(let i = 0 ; i < X.length ; i++){
        xMap.has(X[i]) ? xMap.set(X[i], xMap.get(X[i])+1) : xMap.set(X[i], 1)
    }
    for(let i = 0 ; i < Y.length ; i++){
        yMap.has(Y[i]) ? yMap.set(Y[i], yMap.get(Y[i])+1) : yMap.set(Y[i], 1)
    }
    


    for(let [num, cnt]of xMap){
        if(yMap.has(num))tmp.push([num, Math.min(cnt, yMap.get(num))])            
    }
    
    tmp.sort((a,b)=>b[0]-a[0])
    
    for(let [num, cnt] of tmp){
        result+=num.repeat(cnt)
    }

    if(result==='')return '-1';
    return +result ? result : '0';
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.15ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.13ms, 33.3MB)
// 테스트 6 〉	통과 (0.48ms, 33.4MB)
// 테스트 7 〉	통과 (0.44ms, 33.5MB)
// 테스트 8 〉	통과 (0.48ms, 33.4MB)
// 테스트 9 〉	통과 (0.40ms, 33.4MB)
// 테스트 10 〉	통과 (0.40ms, 33.4MB)
// 테스트 11 〉	통과 (250.71ms, 60.3MB)
// 테스트 12 〉	통과 (270.83ms, 60.2MB)
// 테스트 13 〉	통과 (263.93ms, 60.3MB)
// 테스트 14 〉	통과 (257.38ms, 60.3MB)
// 테스트 15 〉	통과 (273.80ms, 60.3MB)
// 테스트 16 〉	통과 (0.11ms, 33.4MB)
// 테스트 17 〉	통과 (0.12ms, 33.4MB)
// 테스트 18 〉	통과 (0.11ms, 33.4MB)
// 테스트 19 〉	통과 (0.12ms, 33.5MB)
