// https://school.programmers.co.kr/learn/courses/30/lessons/42583
/**
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 * 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
    0	        []	                []	             [7,4,5,6]
    1~2	        []	                [7]	             [4,5,6]
    3	        [7]	                [4]	             [5,6]
    4	        [7]	                [4,5]	         [6]
    5	        [7,4]	            [5]	             [6]
    6~7	        [7,4,5]	            [6]	             []
    8	        [7,4,5,6]	        []	             []
 * 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 * solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 */

class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.sum = 0;
    }
    enqueue(value){
        this.queue[this.rear++] = value;
        this.sum += value
    }
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        this.sum -= value
        return value;
    }
    peek(){
        return this.queue[this.front];
    }
    size(){
        return this.rear - this.front;
    }
}

function solution(bridge_length, weight, truck_weights) {
    // 0. bridgeQueue의 앞에는 이미 bridge_length만큼의 공간이 있디.
    // 1. truckQueue에서 나온 트럭이 bridgeQueue로 들어가면(peek), bridgeQueue의 원소들 합이 weight이하인지 확인한다.
    // 1-1. 가능하다면, bridgeQueue 디큐. truckQueue에서 디큐한 값을 bridgeQueue로 엔큐한다. 
    // 1-2. 불가하다면, bridgeQueue 디큐. 0엔큐
    // 2. truckQueue에 원소가 없고, bridgeQueue의 원소들 합이 0이면, cnt반환
    let cnt = 0;
    const bridgeQueue = new Queue()
    const truckQueue = new Queue()
    for(let i = 0 ; i<bridge_length ; i++){
        bridgeQueue.enqueue(0)
    }
    for(let i = 0 ; i<truck_weights.length ; i++){
        truckQueue.enqueue(truck_weights[i])
    }
    while(!(truckQueue.size()===0&&bridgeQueue.sum===0)){
        bridgeQueue.dequeue();
        if(bridgeQueue.sum + truckQueue.peek() <= weight){
            bridgeQueue.enqueue(truckQueue.dequeue());
        }else{
            bridgeQueue.enqueue(0);
        }
        cnt+=1;
    }
    return cnt;
}
// 정확성  테스트
// 테스트 1 〉	통과 (2.02ms, 35.6MB)
// 테스트 2 〉	통과 (13.53ms, 37.1MB)
// 테스트 3 〉	통과 (0.28ms, 33.5MB)
// 테스트 4 〉	통과 (9.78ms, 36.4MB)
// 테스트 5 〉	통과 (164.14ms, 45.1MB)
// 테스트 6 〉	통과 (33.30ms, 39.2MB)
// 테스트 7 〉	통과 (1.09ms, 33.5MB)
// 테스트 8 〉	통과 (0.78ms, 33.5MB)
// 테스트 9 〉	통과 (9.86ms, 36.6MB)
// 테스트 10 〉	통과 (0.74ms, 33.5MB)
// 테스트 11 〉	통과 (0.32ms, 33.5MB)
// 테스트 12 〉	통과 (0.56ms, 33.5MB)
// 테스트 13 〉	통과 (2.47ms, 35.9MB)
// 테스트 14 〉	통과 (0.31ms, 33.6MB)