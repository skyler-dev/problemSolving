// https://school.programmers.co.kr/learn/courses/30/lessons/42587
/**
 * 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
 * 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
 * 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
 * 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
 *  3-1. 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
 * 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.
 * 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
 */

// 배열로 큐 구현
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.queue[this.rear++] = value;
    }
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek(){
        return this.queue[this.front];
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    for(let i = 0 ; i < priorities.length ; i++){
        // [중요도, 프로세스의 원래 위치]
        queue.enqueue([priorities[i], i])
    }
    // 전체 중요도 
    priorities.sort((a,b)=>b-a);
    
    let cnt = 0; // 프로세스 실행횟수
    while(true){
        const curProcess = queue.peek();
        if(curProcess[0] < priorities[cnt]){
            queue.enqueue(queue.dequeue());
        }else{
            const executedProcess = queue.dequeue();
            cnt++;
            if(executedProcess[1]===location) return cnt;
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.28ms, 33.5MB)
// 테스트 2 〉	통과 (0.45ms, 33.5MB)
// 테스트 3 〉	통과 (0.29ms, 33.4MB)
// 테스트 4 〉	통과 (0.29ms, 33.5MB)
// 테스트 5 〉	통과 (0.13ms, 33.4MB)
// 테스트 6 〉	통과 (0.29ms, 33.5MB)
// 테스트 7 〉	통과 (0.30ms, 33.6MB)
// 테스트 8 〉	통과 (0.38ms, 33.4MB)
// 테스트 9 〉	통과 (0.24ms, 33.4MB)
// 테스트 10 〉	통과 (0.34ms, 33.6MB)
// 테스트 11 〉	통과 (0.39ms, 33.4MB)
// 테스트 12 〉	통과 (0.29ms, 33.6MB)
// 테스트 13 〉	통과 (0.35ms, 33.5MB)
// 테스트 14 〉	통과 (0.19ms, 33.5MB)
// 테스트 15 〉	통과 (0.28ms, 33.5MB)
// 테스트 16 〉	통과 (0.26ms, 33.6MB)
// 테스트 17 〉	통과 (0.40ms, 33.4MB)
// 테스트 18 〉	통과 (0.33ms, 33.5MB)
// 테스트 19 〉	통과 (0.36ms, 33.5MB)
// 테스트 20 〉	통과 (0.48ms, 33.4MB)