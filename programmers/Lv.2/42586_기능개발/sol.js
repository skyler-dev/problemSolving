// https://school.programmers.co.kr/learn/courses/30/lessons/42586
/**
 * 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 * 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 * 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
 */

class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(newValue){
        this.queue[this.rear++] = newValue;
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
    size(){
        return this.rear-this.front;
    }
}

function solution(progresses, speeds) {
    const result = [];
    // 각 배포마다 몇 개의 기능이 배포되는지
    const queue = new Queue();
    for(let i = 0 ; i < progresses.length ; i++){
        // 각 속도로 몇일 걸리는 지 계산
        const days = Math.ceil((100 - progresses[i])/speeds[i]);
        queue.enqueue(days);
    }
    
    // 가장 앞의 작업을 dequeue(배포)할 때,
    let dstrbDate = queue.dequeue();
    let cnt = 1;
    while(queue.size()>0){
        if(queue.peek()<=dstrbDate){
            // 뒤에 남은 기능의 일수가 해당 작업일수 이하면 함께 dequeue
            queue.dequeue();
            cnt++;
        }else{
            // 함께 배포 불가능하면 다음 배포날짜로 갱신
            result.push(cnt);
            dstrbDate = queue.dequeue();
            cnt=1;
        }
        // 모든 배포를 다했다면 마지막 날 몇 개의 기능을 배포했는지도 추가
        if(queue.size()===0) result.push(cnt);
    }
    return result;
}