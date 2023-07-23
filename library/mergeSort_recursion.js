// 합병정렬
// 결합
const merge = (a, b) => {
    // 예 : merge([2], [3])일 때, 재귀 로직 중 [2].slice(1) 즉 []가 되는 순간이 생김
    if (a.length === 0) return b;
    else if (b.length === 0) return a;
    else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
    else return [b[0], ...merge(a, b.slice(1))];
}    

// 분해
const mergesort = (arr) => {
    // 원소 갯수가 1이면 더이상 분해하지 않는다.
    if(arr.length < 2) return arr;
    else {
        const mid = Math.floor(arr.length / 2);
        return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)));
    }
}

console.log(
    mergesort([21, 10, 12, 20, 25, 13, 15, 22])
)// [  10, 12, 13, 15,  20, 21, 22, 25]