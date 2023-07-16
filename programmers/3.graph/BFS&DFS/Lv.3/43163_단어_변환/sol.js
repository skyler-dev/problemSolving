// https://school.programmers.co.kr/learn/courses/30/lessons/43163
/**
 * [문제 설명]
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다.
 * 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 * 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 * [제한 사항]
 * 각 단어는 알파벳 소문자로만 이루어져 있습니다.
 * 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
 * words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
 * begin과 target은 같지 않습니다.
 * 변환할 수 없는 경우에는 0를 return 합니다.
 */

// BFS

// 정점상태? : 문자열
// 그래프 구현이 필요한가? : words 사용하면 될 듯
// 방문체크용 배열 필요? : yes. "최소"단계 찾는 것임 -> 단계 배열과 겸할 것
// 정점이동조건 : 연결되어 있을 것 === 이전 노드와 글자 하나만 다를 것, 방문한적 없을 것

// 예외 : 
// target이 words에 포함되어 있지 않으면 0 반환

function solution(begin, target, words) {
    const queue = [];
    // 방문체크 겸용 단계 배열
    const stage = new Map();
    
    queue.push(begin); // 큐에 루트정점넣기
    stage.set(begin, 0) // 시작정점 단계 기록
    
    while(queue.length > 0){
        const src = queue.shift();
        
        for(let dest of words) {
            if(
                isConnected(src, dest) && 
                !stage.has(dest)
            ) {
                queue.push(dest);
                stage.set(dest, stage.get(src) + 1);
                if(dest === target){
                    return stage.get(dest); // 목표노드에 도착시
                }
            }
        }
    }
    return 0;
}
// 글자 하나만 달라야 연결되어있는 정점임
function isConnected(src, dest) {
    if(src.length !== dest.length) return false; // 사이즈가 다를 때
    
    let cnt = 0;
    for(let i = 0 ; i < src.length ; i++){
        if(src[i] === dest[i]) continue;
        
        cnt += 1;
        if(cnt > 1) return false; // 글자가 둘 이상 다를 때
    }
    return cnt === 1 ? true : false; // 다른 글자가 하나도 없을 때 0
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.26ms, 33.4MB)
// 테스트 3 〉	통과 (0.27ms, 33.5MB)
// 테스트 4 〉	통과 (0.22ms, 33.6MB)
// 테스트 5 〉	통과 (0.11ms, 33.4MB)