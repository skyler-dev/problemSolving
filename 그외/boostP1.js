// https://blog.naver.com/boostcamp_official/223085597916
// 코딩테스트 유형 Q1. 함수구현 문제

function solution(arr){
    const newArr = [...arr];
    // 위치 확인용
    const set = new Set([...newArr]);
    // 중복 횟수 확인용
    const map = new Map();
    for(let n of newArr){
        // 첫 등장일 때
        if(!map.has(n)){
            map.set(n,1)
        }else{
            // 중복 등장일 때
            const cnt = map.get(n)+1;
            map.set(n, cnt);
        }
    }
    const result = [];
    for(let onlyN of set){
        // 중복일 때만, set의 순서대로 중복횟수 담기
        if(map.get(onlyN)>1){
            result.push(map.get(onlyN))
        }
    }
    return result.length===0 ? [-1] : result;
}
console.log(solution([1,2,3,3,3,3,4,4])) // [ 4, 2 ]
console.log(solution([3,2,4,4,2,5,2,5,5])) // [ 3, 2, 3 ]
console.log(solution([3,5,7,9,1])) // [ -1 ]
console.log(solution([7,8,8,1,30,4,4,9,4,30,1,1,1])) // [2,4,2,3]