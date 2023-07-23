// 조합
/**
 * 서로 다른 n개에서 순서에 상관없이 서로 다른 r개를 선택하는 것
 * nCr = n! / r! * (n-r)!
 * 
 * 일단 순서대로 나열한 다음에 그 순서로 인해 중복된 경우들을 나눗셈으로 상쇄한다.
 * nCr
 * = nPr / r!
 * = n개 중 r개를 순서대로 뽑는 경우의 수 / 뽑은 r개를 줄 세우는 경우의 수
 */

// O(2^n)
// 재귀함수

function combinations(arr, n) {
  // Base Case
  if(n===1) return arr.map((v)=>[v]);
  const result = [];
  
  arr.forEach((fixed, idx, arr)=>{
      // 조합이니까, 현재 idx 이후 요소 추출
      const rest = arr.slice(idx + 1);
      // Recursive Case
      const combis = combinations(rest, n-1);
      // 선택된 요소와 재귀호출을 통해 구한 조합 합치기
      const combine = combis.map((v)=>[fixed, ...v]);
      result.push(...combine);
  })
  
  return result;
}