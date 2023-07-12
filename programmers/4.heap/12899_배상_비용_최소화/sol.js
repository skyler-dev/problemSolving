// https://school.programmers.co.kr/learn/courses/13213/lessons/91086

/**
 * OO 조선소에서는 태풍으로 인한 작업지연으로 수주한 선박들을 기한 내에 완성하지 못할 것이 예상됩니다. 기한 내에 완성하지 못하면 손해 배상을 해야 하므로 남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.
 * 배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다.
 * 조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다. 조선소에서 작업할 수 있는 N 시간과 각 일에 대한 작업량이 담긴 배열(works)이 있을 때 배상 비용을 최소화한 결과를 반환하는 함수를 만들어 주세요. 예를 들어, N=4일 때, 선박별로 남은 일의 작업량이 works = [4, 3, 3]이라면 배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 배상 비용은 22 + 22 + 22 = 12가 되어 12를 반환해 줍니다.
 */

/**
 * 제한사항
 * 일할 수 있는 시간 N : 1,000,000 이하의 자연수
 * 배열 works의 크기 : 1,000 이하의 자연수
 * 각 일에 대한 작업량 : 1,000 이하의 자연수
 */

/**
 * 입출력 예
 * N	works	result
 * 4	[4,3,3]	12
 * 2	[3,3,3]	17
 */

class MaxHeap{
    constructor(){
        this.heap = [null];
    }
    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex/2);
        while(parentIndex!==0 && this.heap[parentIndex]<value){
            const tmp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = tmp;
            
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
    peek(){
        return this.heap[1];
    }
    pop(){
        if(this.isEmpty()){
            return console.log('비었습니다.')
        }
        if(this.size()===1){
            return this.heap.pop();
        }
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(
            this.heap[currentIndex]<this.heap[leftIndex] ||
            this.heap[currentIndex]<this.heap[rightIndex]
        ){
            if(this.heap[leftIndex]<this.heap[rightIndex]){
                const tmp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = tmp;
                currentIndex = rightIndex;
            }else{
                const tmp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = tmp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex*2;
            rightIndex = currentIndex*2+1;
        }
        return returnValue;
    }
}

function solution(no, works) {
    // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
    if(works.reduce((acc,cur)=>acc+cur,0)<=no)return 0;
    let result = 0;
    // 작업들을 일정하게 최대한 낮게 유지
    // 작업들 중 가장 큰 것을 먼저 내보내고 -1 시키고 다시 넣기
    const heap = new MaxHeap();
    for(let w of works){
        heap.push(w)
    }
    for(let i = 0; i < no; i += 1){
        heap.push(heap.pop()-1);
    }
    while(!heap.isEmpty()){
        result += Math.pow(heap.pop(), 2)
    }
    return result;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.6MB)
// 테스트 2 〉	통과 (0.48ms, 33.5MB)
// 테스트 3 〉	통과 (0.48ms, 33.5MB)
// 테스트 4 〉	통과 (0.53ms, 33.4MB)
// 테스트 5 〉	통과 (0.47ms, 33.5MB)
// 테스트 6 〉	통과 (0.36ms, 33.6MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.6MB)
// 테스트 9 〉	통과 (0.38ms, 33.4MB)
// 테스트 10 〉	통과 (0.99ms, 33.5MB)
// 테스트 11 〉	통과 (0.62ms, 33.5MB)
// 테스트 12 〉	통과 (0.46ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (78.96ms, 36.7MB)
// 테스트 2 〉	통과 (88.48ms, 36.7MB)
