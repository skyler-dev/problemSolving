// 순열 
// 서로 다른 n개에서 r개를 선택하여 일렬로 나열하는 것
// nPr = n! / (n-r)!

// O(n!)
// 재귀함수

function permutations(arr, n) {
    // Base Case
    if (n === 1) return arr.map((v) => [v]);
    let result = [];

    // 요소를 순환한다
    arr.forEach((fixed, idx, arr) => {
        // 현재 idx만 제외하고 모든 요소 추출
        const rest = arr.filter((_, index) => index !== idx);
		// Recursive Case
        const perms = permutations(rest, n - 1);
        // 선택된 요소와 재귀 호출을 통해 구한 순열 합치기
        const combine = perms.map((v) => [fixed, ...v]);
        result.push(...combine);
    });

    return result;
}