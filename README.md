# Problem Solving 
It is a repository of problem solving to get used to Javascript.
- Each file contains a link to the problem, a brief description, and a problem solving.
## Structure
- 경로
  - programmers > [문제 유형] > [레벨] > [문제 번호와 제목] > sol.js
  - 또는 programmers > [문제 유형] > [세부 유형] > [레벨] > [문제 번호와 제목] > sol.js
- 패턴 학습을 위해, 최근의 풀이들은 최대한 문제 유형별로 분류하고 있습니다.
  - 문제 유형이 공개되어 있지 않는 문제일 경우 학습경험을 바탕으로 분류했습니다.
  - 배우고 있는 단계이기 때문에 유형이 틀렸을 경우 알려주시면 감사합니다.
- 한 문제를 여러 방법으로 풀이하기도 했습니다.
  - 보통 sol.js, anotherSol.js의 순서대로 작성했습니다.
  - 접근방법을 표시하고 싶은 경우 -With 접미사를 덧붙였습니다.
    - 예 : anotherSolWithSet.js, anotherSolWithRecursion.js

## In a JS file...
다음과 같은 내용이 포함되어 있습니다.
1. 문제 링크
2. 문제 설명
3. 문제 접근 과정
4. 코드와 주석
5. 성능 테스트
- 예 : /programmers/3.graph/BFS&DFS/Lv.3/43162_네크워크/sol.js
  ```javascript
  // https://school.programmers.co.kr/learn/courses/30/lessons/43162
  /**
   * [문제 설명]
   * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
   * ...(중략)...
   * 
   * [제한사항]
   * * 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
   * ...(중략)...
   */
  
  // 인접행렬 & 비연결 & DFS
  
  // 모든 정점을 방문해야 함 -> DFS -> 방문 처리
  // ...(중략)...
  
  // 각각 `인접행렬, 컴퓨터 갯수, 방문체크, 시작노드 번호`
  function dfs(computers, n, check, src) {
      // 간선들 중 (인접행렬 탐색)
      for(let dest = 0 ; dest < n ; dest++){
          // 방문할 수 있는 자식이 있다면,
          if(computers[src][dest] === 1 && !check[dest]){
              check[dest] = true;
              dfs(computers, n, check, dest);
          }            
      }
  }
  
  // ...(이후 코드 중략)...
  
  // 정확성  테스트
  // 테스트 1 〉	통과 (0.18ms, 33.5MB)
  // 테스트 2 〉	통과 (0.18ms, 33.4MB)
  // 테스트 3 〉	통과 (0.26ms, 33.6MB)
  // ...(중략)...
  ```
## 더 읽을 거리
몇몇 문제는 접근법, 패턴, 추가 학습한 내용 등을 notion에 정리해두었습니다. 아래 링크를 참고해주세요.
- [[패턴] 백트래킹(feat. N-Queen 문제)](https://skyler-dev.notion.site/feat-N-Queen-02c9a274d1804392ad4bb5f119512940?pvs=4)
- [[패턴] union-find (feat. 전력망을 둘로 나누기 문제)](https://skyler-dev.notion.site/union-find-feat-5302132d196543ab9b347c014ab626cb?pvs=4)
- [[패턴][알고리즘] 슬라이딩 윈도우 패턴 (feat. 할인 행사 문제)](https://skyler-dev.notion.site/feat-d947bf373a024d61977e0d18f67043e8?pvs=4)
- [[오늘의 문제] BFS & 꼭 거쳐가야 하는 중간 지점이 있는 경우 (feat. 미로 탈출 문제)](https://skyler-dev.notion.site/BFS-feat-4fda2a7b195f4c5fafbbccf691fa666c?pvs=4)
- [[알고리즘] 합병정렬 구현(feat. 재귀 접근 패턴, 합병정렬 패턴)](https://skyler-dev.notion.site/feat-39e91acc614b44a795bd773d7012ce68?pvs=4)
- [[오늘의 문제] 방문 길이 (feat. 4차원배열로 좌표간 간선 방문 체크)](https://skyler-dev.notion.site/feat-4-00e00d58cf5f4c88bc31ac14e6ba3362?pvs=4)
- [[알고리즘] 에라토스테네스의 체 구현(feat. arr.filter(Boolean), 소수찾기 문제)](https://skyler-dev.notion.site/feat-arr-filter-Boolean-a8097be6ffb8415187e491c9566c4c6f?pvs=4)
- [[알고리즘] BFS 패턴 (feat. 게임맵최단거리 문제)](https://skyler-dev.notion.site/BFS-feat-e638e8c145ba41fb858f599a03775188?pvs=4)
- [[오늘의 문제] 하노이의 탑(feat.재귀)](https://skyler-dev.notion.site/feat-7ed2e25a76cc4d2eb58af1bc2731b4e7?pvs=4)
- [[오늘의 문제] 시저 암호 (feat. 이모지에서 코드뽑아내기, 서로게이트쌍 문제 방지)](https://skyler-dev.notion.site/feat-8970b99701fe4468a5778ceb82d9d2c5?pvs=4)
- [[오늘의 문제] [1차] 비밀지도 (feat.비트연산자, padStart())](https://skyler-dev.notion.site/1-feat-padStart-4eb4ebcfde4d4565969cdf2a2e6d4f52?pvs=4)
- [[오늘의 문제] 폰켓몬 (feat. Set)](https://skyler-dev.notion.site/feat-Set-513d5d82e8e2482e8ce93d0988bb5bac?pvs=4)

### site
- programmers(https://school.programmers.co.kr/learn/challenges)
