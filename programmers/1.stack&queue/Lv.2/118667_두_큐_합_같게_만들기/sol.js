// https://school.programmers.co.kr/learn/courses/30/lessons/118667
/**
 * [문제 설명]
 * 길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다. 이때 필요한 작업의 최소 횟수를 구하고자 합니다. 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주합니다.
 * 큐는 먼저 집어넣은 원소가 먼저 나오는 구조입니다. 이 문제에서는 큐를 배열로 표현하며, 원소가 배열 앞쪽에 있을수록 먼저 집어넣은 원소임을 의미합니다. 즉, pop을 하면 배열의 첫 번째 원소가 추출되며, insert를 하면 배열의 끝에 원소가 추가됩니다. 예를 들어 큐 [1, 2, 3, 4]가 주어졌을 때, pop을 하면 맨 앞에 있는 원소 1이 추출되어 [2, 3, 4]가 되며, 이어서 5를 insert하면 [2, 3, 4, 5]가 됩니다.
 * 다음은 두 큐를 나타내는 예시입니다.
 * queue1 = [3, 2, 7, 2]
 * queue2 = [4, 6, 5, 1]
 * 두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 예를 들어, 다음과 같이 2가지 방법이 있습니다.
 * queue2의 4, 6, 5를 순서대로 추출하여 queue1에 추가한 뒤, queue1의 3, 2, 7, 2를 순서대로 추출하여 queue2에 추가합니다. 그 결과 queue1은 [4, 6, 5], queue2는 [1, 3, 2, 7, 2]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 7번 수행합니다.
 * queue1에서 3을 추출하여 queue2에 추가합니다. 그리고 queue2에서 4를 추출하여 queue1에 추가합니다. 그 결과 queue1은 [2, 7, 2, 4], queue2는 [6, 5, 1, 3]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 2번만 수행하며, 이보다 적은 횟수로 목표를 달성할 수 없습니다.
 * 따라서 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수는 2입니다.
 * 길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다. 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요. 단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.
 * 
 * [제한사항]
 * 1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000
 * 1 ≤ queue1의 원소, queue2의 원소 ≤ 109
 * 주의: 언어에 따라 합 계산 과정 중 산술 오버플로우 발생 가능성이 있으므로 long type 고려가 필요합니다.
 */

// 필요한 작업의 최소 횟수
// 합이 큰 큐에서 값을 빼고 합이 작은 큐에 넣어주기
// 언제까지? (큐1사이즈 + 큐2사이즈) * 2 작업까지. (서로 완전히 바뀜)
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.sum = 0; // 값들의 합
    }
    enqueue(value){
        this.queue[this.rear++] = value;
        this.sum += value; // 합에 추가
    }
    dequeue(){
        const returnValue = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        this.sum -= returnValue; // 합에서 빼기
        return returnValue;
    }
}

function solution(queue1, queue2) {
    const queueA = new Queue();
    const queueB = new Queue();
    // queue1의 길이 = queue2의 길이
    for(let i = 0 ; i < queue1.length ; i++){
        queueA.enqueue(queue1[i]);
        queueB.enqueue(queue2[i]);
    }
    let cnt = 0;

    while(cnt < queue1.length * 4){
        if(queueA.sum === queueB.sum) return cnt;
        
        if(queueA.sum < queueB.sum){
            queueA.enqueue(queueB.dequeue());
        }else{
            queueB.enqueue(queueA.dequeue());
        }
        cnt += 1;
    }
    return -1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.31ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.20ms, 33.5MB)
// 테스트 4 〉	통과 (0.23ms, 33.5MB)
// 테스트 5 〉	통과 (0.28ms, 33.5MB)
// 테스트 6 〉	통과 (0.32ms, 33.6MB)
// 테스트 7 〉	통과 (0.29ms, 33.5MB)
// 테스트 8 〉	통과 (0.43ms, 33.5MB)
// 테스트 9 〉	통과 (0.69ms, 33.6MB)
// 테스트 10 〉	통과 (1.24ms, 33.6MB)
// 테스트 11 〉	통과 (30.44ms, 44.7MB)
// 테스트 12 〉	통과 (13.89ms, 40.3MB)
// 테스트 13 〉	통과 (8.62ms, 41.9MB)
// 테스트 14 〉	통과 (10.51ms, 45.2MB)
// 테스트 15 〉	통과 (18.52ms, 45.4MB)
// 테스트 16 〉	통과 (12.03ms, 45.5MB)
// 테스트 17 〉	통과 (13.12ms, 43.1MB)
// 테스트 18 〉	통과 (24.33ms, 61.5MB)
// 테스트 19 〉	통과 (27.85ms, 62.1MB)
// 테스트 20 〉	통과 (41.50ms, 62.2MB)
// 테스트 21 〉	통과 (50.93ms, 61.4MB)
// 테스트 22 〉	통과 (60.98ms, 62.6MB)
// 테스트 23 〉	통과 (46.06ms, 63.1MB)
// 테스트 24 〉	통과 (90.07ms, 61.5MB)
// 테스트 25 〉	통과 (0.33ms, 33.5MB)
// 테스트 26 〉	통과 (0.28ms, 33.5MB)
// 테스트 27 〉	통과 (0.42ms, 33.5MB)
// 테스트 28 〉	통과 (61.62ms, 55.3MB)
// 테스트 29 〉	통과 (2.57ms, 36.7MB)
// 테스트 30 〉	통과 (44.13ms, 51.3MB)