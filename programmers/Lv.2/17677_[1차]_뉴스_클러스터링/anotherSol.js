// https://school.programmers.co.kr/learn/courses/30/lessons/17677
/**
 * 여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아 정작 필요한 기사를 찾기가 어렵다. Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다.
 * 개발의 방향을 잡기 위해 튜브는 우선 최근 화제가 되고 있는 "카카오 신입 개발자 공채" 관련 기사를 검색해보았다.
 * * 카카오 첫 공채..'블라인드' 방식 채용
 * * 카카오, 합병 후 첫 공채.. 블라인드 전형으로 개발자 채용
 * * 카카오, 블라인드 전형으로 신입 개발자 공채
 * * 카카오 공채, 신입 개발자 코딩 능력만 본다
 * * 카카오, 신입 공채.. "코딩 실력만 본다"
 * * 카카오 "코딩 능력만으로 2018 신입 개발자 뽑는다"
 * 기사의 제목을 기준으로 "블라인드 전형"에 주목하는 기사와 "코딩 테스트"에 주목하는 기사로 나뉘는 걸 발견했다. 튜브는 이들을 각각 묶어서 보여주면 카카오 공채 관련 기사를 찾아보는 사용자에게 유용할 듯싶었다.
 * 유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브는 "자카드 유사도"라는 방법을 찾아냈다.
 * 자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다. 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
 * 예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로, 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.
 * 자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다. 다중집합 A는 원소 "1"을 3개 가지고 있고, 다중집합 B는 원소 "1"을 5개 가지고 있다고 하자. 이 다중집합의 교집합 A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다. 다중집합 A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2}, 합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 J(A, B) = 3/7, 약 0.42가 된다.
 * 이를 이용하여 문자열 사이의 유사도를 계산하는데 이용할 수 있다. 문자열 "FRANCE"와 "FRENCH"가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다. 각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며, 교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로, 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.
 */
/**
 * 입력형식 :
 * * 입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
 * * 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
 * * 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.
 */
/**
 * 출력형식 : 
 * 입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.
 */

// 어차피 교집합, 합집합의 원소는 다시 안쓰므로 사이즈만 측정하면 된다.
function solution(str1, str2) {
    // 0. 대소문자 구분 안하니까 toLowerCase 미리 적용
    const strA = str1.toLowerCase();
    const strB = str2.toLowerCase();
    // 1. 두 글자씩 끊기
    // 1-1. 입력에 이모지같은 서로게이트쌍이 포함되어 있을지도?
    const arrA = Array.from(strA);// 한 인덱스에 한 글자가 있도록 배열 생성
    const arrB = Array.from(strB);
    const twoArrA = arrA.map((c, idx, arr)=>{
        return idx!==arr.length-1 ? c+arr[idx+1] : '0';
    });
    twoArrA.pop();
    const twoArrB = arrB.map((c, idx, arr)=>{
        return idx!==arr.length-1 ? c+arr[idx+1] : '0';
    });
    twoArrB.pop();
    // 2. 공백, 숫자, 특수문자 포함된 건 버림
    const cleantwoArrA = twoArrA.filter((v,idx)=>{
        return v.codePointAt(0)>=97 && v.codePointAt(0)<=122 && v.codePointAt(1)>=97 && v.codePointAt(1)<=122;
    })
    const cleantwoArrB = twoArrB.filter((v,idx)=>{
        return v.codePointAt(0)>=97 && v.codePointAt(0)<=122 && v.codePointAt(1)>=97 && v.codePointAt(1)<=122;
    })
    // 3. map형성
    // 3-1. 해당 원소 갯수를 품은 mapA
    const mapA = getCntMap(cleantwoArrA);
    // 3-2. 해당 원소 갯수를 품은 mapB
    const mapB = getCntMap(cleantwoArrB);
    // 4. mapA와 mapB의 값으로 해당 원소에 대한 갯수 정해서 교집합,합집합 사이즈 카운트
    let intersectionSize = 0;
    let unionSize = 0;
    for(let item of mapA.keys()){
        if(mapB.has(item)){
            // 교집합 카운트
            const min = Math.min(mapA.get(item), mapB.get(item));
            intersectionSize+=min;
        }
        // A의 여집합,교집합 부분 합집합에 추가 카운트
        const max = Math.max(mapA.get(item), mapB.get(item)??0);
        unionSize+=max;
    }

    // 4-1. B의 여집합 부분 합집합에 추가 카운트
    for(let item of mapB.keys()){
        if(!mapA.has(item)){
            unionSize+=mapB.get(item);
        }
    }
    // 5. 반환
    if(intersectionSize===0&&unionSize===0)return 65536;
    return Math.floor((intersectionSize/unionSize)*65536);
}

function getCntMap(arr){
    const tmpArr = [...arr];
    const map = new Map();
    for(let item of tmpArr){
        // 처음보는 item이면?
        if(!map.has(item)){
            map.set(item, 1);
        }else{
            // 기존에 있던 item이면?
            let plus = map.get(item)+1;
            map.set(item, plus);
        }
    }
    return map;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.20ms, 33.4MB)
// 테스트 2 〉	통과 (0.30ms, 33.4MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (1.25ms, 33.7MB)
// 테스트 5 〉	통과 (0.33ms, 33.5MB)
// 테스트 6 〉	통과 (0.19ms, 33.4MB)
// 테스트 7 〉	통과 (0.47ms, 33.5MB)
// 테스트 8 〉	통과 (0.29ms, 33.6MB)
// 테스트 9 〉	통과 (0.79ms, 33.5MB)
// 테스트 10 〉	통과 (0.52ms, 33.5MB)
// 테스트 11 〉	통과 (0.59ms, 33.5MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (0.39ms, 33.5MB)