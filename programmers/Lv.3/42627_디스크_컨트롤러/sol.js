// https://school.programmers.co.kr/learn/courses/30/lessons/42627
/**
 * 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.
 * 예를들어
 * - 0ms 시점에 3ms가 소요되는 A작업 요청
 * - 1ms 시점에 9ms가 소요되는 B작업 요청
 * - 2ms 시점에 6ms가 소요되는 C작업 요청
 * 와 같은 요청이 들어왔습니다. 이를 그림으로 표현하면 아래와 같습니다.
 * (그림)
 * 한 번에 하나의 요청만을 수행할 수 있기 때문에 각각의 작업을 요청받은 순서대로 처리하면 다음과 같이 처리 됩니다.
 * (그림)
 * - A: 3ms 시점에 작업 완료 (요청에서 종료까지 : 3ms)
 * - B: 1ms부터 대기하다가, 3ms 시점에 작업을 시작해서 12ms 시점에 작업 완료(요청에서 종료까지 : 11ms)
 * - C: 2ms부터 대기하다가, 12ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 16ms)
 * 이 때 각 작업의 요청부터 종료까지 걸린 시간의 평균은 10ms(= (3 + 11 + 16) / 3)가 됩니다.
 * 하지만 A → C → B 순서대로 처리하면
 * (그림)
 * - A: 3ms 시점에 작업 완료(요청에서 종료까지 : 3ms)
 * - C: 2ms부터 대기하다가, 3ms 시점에 작업을 시작해서 9ms 시점에 작업 완료(요청에서 종료까지 : 7ms)
 * - B: 1ms부터 대기하다가, 9ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 17ms)
 * 이렇게 A → C → B의 순서로 처리하면 각 작업의 요청부터 종료까지 걸린 시간의 평균은 9ms(= (3 + 7 + 17) / 3)가 됩니다.
 * 각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)
 */

class MinHeap{
    constructor(){
        this.heap = [null]
    }
    swap(aIdx, bIdx) {
        [ this.heap[aIdx], this.heap[bIdx] ] = [ this.heap[bIdx], this.heap[aIdx] ];
    }
    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex/2);
        // 배열이 들어오므로 수정
        while(parentIndex!==0&&this.heap[parentIndex][1] > value[1]){
            this.swap(currentIndex, parentIndex);
            
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
    size(){
        return this.heap.length-1;
    }
    isEmpty(){
        return this.heap.length > 1 ? false : true;
    }
    pop(){
        if(this.isEmpty()){
            return console.log('텅 비었습니다.');
        }
        if(this.size()===1){
            return this.heap.pop();
        }
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        // 배열이 들어오므로 수정
        while(
            this.heap[currentIndex][1] > this.heap[leftIndex]?.[1] ||
            this.heap[currentIndex][1] > this.heap[rightIndex]?.[1]
        ){
            if(this.heap[leftIndex]?.[1] > this.heap[rightIndex]?.[1]){
                this.swap(currentIndex, rightIndex);

                currentIndex = rightIndex;
            }else{
                this.swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex*2;
            rightIndex = currentIndex*2 + 1;
        }
        return returnValue;
    }
}

function solution(jobs) {
    // 작업이 요청되는 시점에 수행하는 작업이 없고, 요청된 작업이 하나면, 바로실행
    // 작업이 요청되는 시점에 수행하는 작업이 있다면, heap에 넣고 pop되는 순서대로 처리
    const heap = new MinHeap() // 대기열
    let curTime = 0;
    let completedTime = 0; // 어떤 작업이 완료되고 나서의 시점 : 현재시간 + 소요시간
    let sum = 0; // 요청에서 종료까지(completedTime - 요청시간)의 합

    
    jobs.sort((a,b)=>a[0]-b[0])
    
    let i = 0;
    while( i<jobs.length || heap.size()){
        // 동일한 요청시간에 여러개의 작업이 있을 수 있으므로 반복문 사용
        while(i<jobs.length){
            let [requestTime, needTime] = jobs[i];
            if(requestTime===curTime){
                heap.push([requestTime, needTime]);
                i++;
            }else{
                break;
            }
        }
        // 대기중인 것이 있고 현재 수행중인 것이 없다면
        if(heap.size() && completedTime <= curTime){
            let [requestTime, needTime] = heap.pop();
            completedTime = needTime + curTime;
            sum += (completedTime - requestTime)
        }
        curTime++;
    }
    return Math.floor(sum/(jobs.length))
}

// 정확성  테스트
// 테스트 1 〉	통과 (26.67ms, 37.9MB)
// 테스트 2 〉	통과 (16.60ms, 37.7MB)
// 테스트 3 〉	통과 (25.67ms, 37.9MB)
// 테스트 4 〉	통과 (25.16ms, 37.5MB)
// 테스트 5 〉	통과 (26.49ms, 37.9MB)
// 테스트 6 〉	통과 (1.64ms, 35.6MB)
// 테스트 7 〉	통과 (14.66ms, 37.5MB)
// 테스트 8 〉	통과 (14.28ms, 37.6MB)
// 테스트 9 〉	통과 (13.31ms, 37.3MB)
// 테스트 10 〉	통과 (16.39ms, 37.9MB)
// 테스트 11 〉	통과 (0.44ms, 33.5MB)
// 테스트 12 〉	통과 (0.51ms, 33.5MB)
// 테스트 13 〉	통과 (0.48ms, 33.5MB)
// 테스트 14 〉	통과 (0.36ms, 33.5MB)
// 테스트 15 〉	통과 (0.40ms, 33.5MB)
// 테스트 16 〉	통과 (0.25ms, 33.5MB)
// 테스트 17 〉	통과 (0.21ms, 33.5MB)
// 테스트 18 〉	통과 (0.24ms, 33.4MB)
// 테스트 19 〉	통과 (0.24ms, 33.6MB)
// 테스트 20 〉	통과 (0.19ms, 33.6MB)