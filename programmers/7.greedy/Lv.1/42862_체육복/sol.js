// https://school.programmers.co.kr/learn/courses/30/lessons/42862
/**
 * [문제 설명]
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
 * 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * [제한 사항]
 * 전체 학생의 수는 2명 이상 30명 이하입니다.
 * 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 * 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 * 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
 * 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 */

// 현재 상황에서 제일 합리적인 판단

function solution(n, lost, reserve) {
    // 학생들 번호에 인덱스 맞추기
    const students = new Array(n+1).fill(1); // 모두 1벌씩 가져옴
    students[0] = null; // 0번은 없는 사람
    
    // 여벌옷 처리
    for(let reserveStudent of reserve){
        students[reserveStudent] += 1;
    }
    // 분실 처리
    for(let lostStudent of lost){
        students[lostStudent] -= 1;
    }
    // 0벌인 학생에게 앞과 뒤 중에서 빌려주기
    for(let i = 1 ; i <= n ; i++){
        if(students[i] === 0){
            if(students[i-1] >= 2){
                students[i-1] -= 1;
                students[i] += 1;
                continue;
            }
            if(students[i+1] >= 2){
                students[i+1] -= 1;
                students[i] += 1;
                continue;
            }
        }
    }
    // 1벌 이상 가진 학생
    return students.filter((item)=>item>=1).length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.6MB)
// 테스트 3 〉	통과 (0.09ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.09ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)
// 테스트 10 〉	통과 (0.10ms, 33.6MB)
// 테스트 11 〉	통과 (0.09ms, 33.5MB)
// 테스트 12 〉	통과 (0.08ms, 33.4MB)
// 테스트 13 〉	통과 (0.09ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 테스트 15 〉	통과 (0.08ms, 33.4MB)
// 테스트 16 〉	통과 (0.08ms, 33.5MB)
// 테스트 17 〉	통과 (0.09ms, 33.6MB)
// 테스트 18 〉	통과 (0.10ms, 33.6MB)
// 테스트 19 〉	통과 (0.09ms, 33.4MB)
// 테스트 20 〉	통과 (0.16ms, 33.5MB)
// 테스트 21 〉	통과 (0.08ms, 33.5MB)
// 테스트 22 〉	통과 (0.13ms, 33.6MB)
// 테스트 23 〉	통과 (0.08ms, 33.4MB)
// 테스트 24 〉	통과 (0.14ms, 33.5MB)
// 테스트 25 〉	통과 (0.08ms, 33.5MB)
// 테스트 26 〉	통과 (0.08ms, 33.5MB)
// 테스트 27 〉	통과 (0.09ms, 33.5MB)
// 테스트 28 〉	통과 (0.09ms, 33.6MB)
// 테스트 29 〉	통과 (0.09ms, 33MB)
// 테스트 30 〉	통과 (0.09ms, 33.6MB)