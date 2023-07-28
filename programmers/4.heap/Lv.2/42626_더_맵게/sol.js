// https://school.programmers.co.kr/learn/courses/30/lessons/42626
/**
 * [문제 설명]
 * 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.
 * 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
 * Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
 * Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.
 * 
 * [제한 사항]
 * scoville의 길이는 2 이상 1,000,000 이하입니다.
 * K는 0 이상 1,000,000,000 이하입니다.
 * scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
 * 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
 */

class MinHeap{
    constructor(){
        this.heap = [null];
    }
    swap(aIdx, bIdx){
        [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
    }
    push(value){
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx/2);
        while(parentIdx !== 0 && this.heap[parentIdx] > value){
            this.swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2)
        }
    }
    size(){
        return this.heap.length - 1;
    }
    isEmpty(){
        return this.heap.length > 1 ? false : true;
    }
    peek(){
        return this.heap[1];
    }
    pop(){
        if(this.isEmpty()) return;
        if(this.size()===1) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        while(
            this.heap[currentIdx] > this.heap[leftIdx] ||
            this.heap[currentIdx] > this.heap[rightIdx]
        ){
            if(this.heap[leftIdx] > this.heap[rightIdx]){
                this.swap(currentIdx, rightIdx);
                currentIdx = rightIdx;
            } else {
                this.swap(currentIdx, leftIdx);
                currentIdx = leftIdx;
            }
            leftIdx = currentIdx*2;
            rightIdx = currentIdx*2 + 1;
        }
        return returnValue;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    let cnt = 0;
    // 최소힙에 넣기
    for(const v of scoville){
        minHeap.push(v);
    }
    // 섞는 작업
    while(minHeap.peek() < K){
        if(minHeap.size() < 2) return -1;
        
        const mixed = minHeap.pop() + (minHeap.pop() * 2);
        minHeap.push(mixed);
        
        cnt += 1;
    }
    return cnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.5MB)
// 테스트 2 〉	통과 (0.18ms, 33.6MB)
// 테스트 3 〉	통과 (0.36ms, 33.6MB)
// 테스트 4 〉	통과 (0.18ms, 33.6MB)
// 테스트 5 〉	통과 (0.26ms, 33.5MB)
// 테스트 6 〉	통과 (4.51ms, 37.2MB)
// 테스트 7 〉	통과 (4.45ms, 37.2MB)
// 테스트 8 〉	통과 (0.70ms, 33.7MB)
// 테스트 9 〉	통과 (0.64ms, 33.6MB)
// 테스트 10 〉	통과 (4.26ms, 37.2MB)
// 테스트 11 〉	통과 (2.54ms, 36.5MB)
// 테스트 12 〉	통과 (6.38ms, 37.3MB)
// 테스트 13 〉	통과 (4.59ms, 37.2MB)
// 테스트 14 〉	통과 (0.49ms, 33.7MB)
// 테스트 15 〉	통과 (4.80ms, 37.3MB)
// 테스트 16 〉	통과 (0.15ms, 33.5MB)
// 테스트 17 〉	통과 (0.18ms, 33.2MB)
// 테스트 18 〉	통과 (0.11ms, 33.4MB)
// 테스트 19 〉	통과 (0.28ms, 33.6MB)
// 테스트 20 〉	통과 (0.18ms, 33.5MB)
// 테스트 21 〉	통과 (0.17ms, 33.5MB)
// 테스트 22 〉	통과 (0.15ms, 33.5MB)
// 테스트 23 〉	통과 (0.19ms, 33.5MB)
// 테스트 24 〉	통과 (0.30ms, 33.6MB)
// 테스트 25 〉	통과 (0.29ms, 33.5MB)
// 테스트 26 〉	통과 (0.35ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (129.73ms, 46.9MB)
// 테스트 2 〉	통과 (225.35ms, 58MB)
// 테스트 3 〉	통과 (817.87ms, 102MB)
// 테스트 4 〉	통과 (113.85ms, 44.7MB)
// 테스트 5 〉	통과 (840.54ms, 104MB)