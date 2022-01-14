// 문제1: 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
function problem1(arr, num1, num2) {
    const num1Index = arr.indexOf(num1);
    const num2Index = arr.indexOf(num2);
    arr.splice(num1Index, num2Index);
    console.log(arr);
    return;
}

let arr1 = [100, 200, 300, 400, 500];
problem1(arr1, 400, 500);

// 문제2: <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
let arr2 = [200, 100, 300];
//pass start
arr2.splice(2, 0, 10000);
//pass end
console.log(arr2);

// 문제9: concat을 활용한 출력 방법
let datas = {'year': '2019', 'month': '04', 'day': '26', 'hour': '11', 'minute': '34', 'second': '27'};
let dateOfFront = datas['year'].concat('/', datas['month']).concat('/', datas['day']);
let dateOfBack = datas['hour'].concat(':', datas['minute']).concat(':', datas['second']);
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
let date = dateOfFront.concat(' ', dateOfBack);
console.log(date);

// 문제10: 별 찍기
function printStarTree(n) {
    let tree = '';

    for(let i=1; i<=n; i++){
    let star = '';
    for(let j=1; j<=n-i; j++){
        star += ' ';
    }
    for(let k=1; k<=2*i-1; k++){
        star += '*';
    }
    tree += star + '\n';
    }

    console.log(tree);
}
printStarTree(5);