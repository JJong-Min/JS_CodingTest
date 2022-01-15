// 문제 32: 문자열 만들기
function problem32(string) {
    let arr = string.split(" ");
    console.log(arr.length);
}

problem32("안녕. 나는 제주대학교 컴공 혜림");

// 문제 33: 거꾸로 출력하기
function problem33(nums) {
    let arr = nums.split(" ").reverse().join(" ");
    console.log(arr);
}

problem33("1 2 3 4 5");

// 문제34: sort 구현하기
function problem34(heights) {
    let arr = heights.split(" ");
    for (let i=0; i<arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

// 문제36: 구구단 출력하기
function problem36(n) {
    let result = '';
    for (let i=1; i<=9; i++) {
        result += i*n + " ";
    }

    console.log(result);
}

problem36(2);

// 문제37: 반장 선거
function problem37(votes) {
    let array = votes.split(' ');
    let result = {};
    let winner = "";

    for(let index in array) {
        let val = array[index];
        result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
    }

    winner = Object.keys(result).reduce(function(a, b) {
        return result[a] > result[b] ? a: b;
    });

    console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}

// 문제38: 호준이의 아르바이트
function problem38(scores) {
    let arr = scores.split(" ").map(function(n) {
        return parseInt(n, 10);
    });
    arr.sort();
    
    let count = 0;
    let stack = [];

    while (stack.length < 3) {
        let n = arr.pop();
        if (!stack.includes(n)) {
            stack.push(n);
        }
        count += 1;
    }
    console.log(count);
}

problem38("97 86 75 66 55 97 85 97 97 95");

// 문제39: 오타 수정하기
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

function problem39(str) {
    console.log(replaceAll(str, 'q', 'e'));
}

problem39("hqllo my namq is hyqwon");
