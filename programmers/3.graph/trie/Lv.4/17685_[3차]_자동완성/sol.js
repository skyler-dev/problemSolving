// https://school.programmers.co.kr/learn/courses/30/lessons/17685
/**
 * 포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다. 예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다! 단, 학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
 * 효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.
 * 예를 들어, 학습된 단어들이 아래와 같을 때
 * * ['go', 'gone', 'guild']
 * * go를 찾을 때 go를 모두 입력해야 한다.
 * * gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신할 수 없다.)
 * * guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
 * 이 경우 총 입력해야 할 문자의 수는 7이다.
 * 라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.
 */

// 문자는 간선에만 저장하면 된다. 정점에는 저장하지 않아도 된다.
function solution(words) {
    const trie = new Trie();
    let result = 0;
    for(let word of words) {
        trie.insert(word);
    }
    for(let word of words){
        result += trie.getMinLength(word);
    }
    return result;
}

class Node {
    constructor(cnt = 0){ // 루트 정점 기본값
        // 단어문자열은 이후에 쓰지 않으므로 저장하지 않음
        this.cnt = cnt; // 해당 문자 추가시 카운팅
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(string) {
        let currentNode = this.root;
        
        for(const char of string) {
            if(!currentNode.children.has(char)) {
                currentNode.children.set(
                    char,
                    new Node()
                );
            }
            currentNode = currentNode.children.get(char); // 간선을 따라서 이동
            currentNode.cnt += 1; // 이동 후 정점마다 카운트
        }
    }
    getMinLength(string){
        let currentNode = this.root;
        let length = 0;
        for(const char of string) {
            if(currentNode.cnt === 1) {
                return length;
            }
            currentNode = currentNode.children.get(char);
            length += 1;
        }
        return length;
    }
}