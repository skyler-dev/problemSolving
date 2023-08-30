// https://school.programmers.co.kr/learn/courses/30/lessons/12927

/**
 * [문제 설명
 * 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.
 * 
 * [제한 사항]
 * works는 길이 1 이상, 20,000 이하인 배열입니다.
 * works의 원소는 50000 이하인 자연수입니다.
 * n은 1,000,000 이하인 자연수입니다.
 */

// works 평탄화 -> 최대 힙

class MaxHeap{
    constructor(){
        this.heap = [null];
    }
    swap(aIdx, bIdx){
        [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]]
    }
    push(value){
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx/2);
        
        while(parentIdx !== 0 && this.heap[parentIdx] < value){
            this.swap(parentIdx, currentIdx);
            
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2);
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
        if(this.isEmpty()){
            console.log('Empty');
            return;
        }
        if(this.size() === 1){
            return this.heap.pop();
        }
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        while(
            this.heap[currentIdx] < this.heap[leftIdx] ||
            this.heap[currentIdx] < this.heap[rightIdx]
        ){
            if(this.heap[leftIdx] < this.heap[rightIdx]){
                this.swap(currentIdx, rightIdx);
                currentIdx = rightIdx;
            } else {
                this.swap(currentIdx, leftIdx);
                currentIdx = leftIdx;
            }
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1;
        }
        return returnValue;
    }
}

function solution(n, works) {
    const heap = new MaxHeap();
    for(const work of works){
        heap.push(work)
    }
    // (평탄화) 가장 큰 것 꺼내서 1 빼고 다시 넣기
    for(let i = 0 ; i < n ; i++){
        let bigOne = heap.pop();
        heap.push(bigOne - 1);
    }
    // 남은 작업량이 없을 경우
    if(heap.peek() <= 0){
        return 0;
    }
    let result = 0;
    // 양수인 작업량이 있을 경우
    while(heap.peek() > 0){
        result += heap.pop() ** 2;
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.47ms, 33.5MB)
// 테스트 2 〉	통과 (0.64ms, 33.5MB)
// 테스트 3 〉	통과 (0.34ms, 33.5MB)
// 테스트 4 〉	통과 (0.72ms, 33.4MB)
// 테스트 5 〉	통과 (0.67ms, 33.4MB)
// 테스트 6 〉	통과 (0.48ms, 33.4MB)
// 테스트 7 〉	통과 (0.41ms, 33.4MB)
// 테스트 8 〉	통과 (4.73ms, 37.3MB)
// 테스트 9 〉	통과 (5.29ms, 37.3MB)
// 테스트 10 〉	통과 (0.39ms, 33.5MB)
// 테스트 11 〉	통과 (0.45ms, 33.5MB)
// 테스트 12 〉	통과 (0.41ms, 33.4MB)
// 테스트 13 〉	통과 (0.29ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (162.79ms, 38.5MB)
// 테스트 2 〉	통과 (123.30ms, 37.7MB)