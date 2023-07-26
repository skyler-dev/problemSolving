// https://school.programmers.co.kr/learn/courses/30/lessons/42839
/**
 * [문제 설명]
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 *  종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 * [제한사항]
 * numbers는 길이 1 이상 7 이하인 문자열입니다.
 * numbers는 0~9까지 숫자만으로 이루어져 있습니다.
 * "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
 */

// 완전 탐색 : 가능한 경우의 수를 모두 검사해보는 탐색 방법

// numbers로 만들 수 있는 숫자들 구하기
    // 하나를 구하는 경우, 둘을 구하는 경우, 셋을 구하는 경우...
    // 0, 1, 1 / 01, 11, 01 -> 순열(이어야 10 가능)
// 구한 숫자 중 앞 자리가 0이면 제거 -> 문자열 숫자화 필요
// 중복 제거 -> set
// 소수 확인 알고리즘 필요

function solution(numbers) {
    const numUnits = [...numbers];
    const set = new Set();
    
    for(let pickN = 1 ; pickN <= numbers.length ; pickN++){
        const perms = permutations(numUnits, pickN);
        perms.forEach((p) => set.add(+p.join('')));
    }

    let result = 0;
    
    set.forEach((v)=>{
        if(is_prime(v)) result++;
    })

    return result;
}

function permutations(arr, n) {
    // Base Case
    if(n===1) return arr.map((v)=>[v]);
    
    let result = [];
    arr.forEach((fixed, idx, arr)=>{
        const rest = arr.filter((_, i)=>i !==idx);
        // Recursive Case
        const perms = permutations(rest, n-1);
        const combi = perms.map((v)=>[fixed, ...v]);
        
        result.push(...combi)
    })
    
    return result;
}

function is_prime(num){
    if(num < 2) return false;
    
    for(let i = 2 ; i*i <= num ; i+=1 ){
        if(num%i===0) return false;
    }
    
    return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.44ms, 33.6MB)
// 테스트 2 〉	통과 (6.88ms, 38.3MB)
// 테스트 3 〉	통과 (0.18ms, 33.4MB)
// 테스트 4 〉	통과 (5.42ms, 37.9MB)
// 테스트 5 〉	통과 (25.97ms, 49.5MB)
// 테스트 6 〉	통과 (0.18ms, 33.4MB)
// 테스트 7 〉	통과 (0.45ms, 33.6MB)
// 테스트 8 〉	통과 (25.16ms, 49.4MB)
// 테스트 9 〉	통과 (0.36ms, 33.4MB)
// 테스트 10 〉	통과 (7.14ms, 38.1MB)
// 테스트 11 〉	통과 (1.51ms, 34.1MB)
// 테스트 12 〉	통과 (1.20ms, 34.2MB)