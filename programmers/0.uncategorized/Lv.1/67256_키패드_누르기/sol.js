// https://school.programmers.co.kr/learn/courses/30/lessons/67256
/**
 * 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
 * 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
 * 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.
 * 
 * 1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
 * 2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
 * 3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
 * 4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
 * 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
 * 
 * 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers, hand) {
    // Coordinates Map
    const crdntMap = getCrdntMap([[1,2,3],[4,5,6],[7,8,9],['*',0,'#']])
    let leftHand = '*';
    let rightHand = '#';
    const result = [];
    const leftNums = [1,4,7];
    const rightNums = [3,6,9];
    for(let v of numbers){
        if(leftNums.includes(v)){
            result.push('L');
            leftHand = v;
            continue;
        }
        if(rightNums.includes(v)){
            result.push('R');
            rightHand = v;
            continue;
        }
        const leftDis = getDistance(crdntMap.get(v), crdntMap.get(leftHand));
        const rightDis = getDistance(crdntMap.get(v), crdntMap.get(rightHand));
        if(leftDis<rightDis || leftDis===rightDis&&hand==="left"){
            result.push('L');
            leftHand = v;
            continue;
        }
        if(leftDis>rightDis || leftDis===rightDis&&hand==="right"){
            result.push('R');
            rightHand = v;
            continue;
        }
    }
    return result.join('')
}

function getCrdntMap(twoDimArr){
    const arr = [...twoDimArr];
    const crdntMap = new Map();
    arr.forEach((item,rowIdx)=>{
        item.forEach((v, culIdx)=>{
            crdntMap.set(v,[rowIdx,culIdx])
        })
    })
    return crdntMap;
}

function getDistance(arr1, arr2){
    const oneArr = [...arr1];
    const otherArr = [...arr2];
    return Math.abs(oneArr[0]-otherArr[0]) + Math.abs(oneArr[1]-otherArr[1]);
}