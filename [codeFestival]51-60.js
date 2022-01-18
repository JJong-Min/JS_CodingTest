// 문제 53: 소수판별
function problem53(gwalho) {
    let arr = gwalho.split('');
    let stack = [];
    const dict_gwalho = {']':'[', '}':'{', ')':'('};
    for (i=0;i<arr.length;i++) {
        if (arr[i] in dict_gwalho) {
            if (stack === []) {
                console.log('NO');
                return;
            } else {
                if (stack[stack.length - 1] !== dict_gwalho[arr[i]]) {
                    console.log('NO');
                    return;
                }
                stack.pop();
                continue;
            }
        }
        stack.push(arr[i]);
    }
    console.log('YES');
}

problem53('()({})');

// 문제54: 연속되는 수
function problem54(nums) {
    let arr = nums.split(' ');
    let now_num = arr[0];
    for (i=1;i<arr.length-1;i++) {
        if (now_num > arr[i]) {
            console.log('NO');
            return;
        }
        now_num = arr[i]
    }
    console.log('YES');
    return;
}

problem54('1 4 2 6 3');

// 문제 56: 객체의 함수 응용
function problem56() {
    const nationWidth = {
        'korea': 220877,
        'Rusia': 17098242,
        'China': 9596961,
        'France': 543965,
        'Japan': 377915,
        'England' : 242900,
    };
    
    const w = nationWidth['korea'];
    
    delete nationWidth['korea'];
    
    const entry = Object.entries(nationWidth);
    const values = Object.values(nationWidth);
    
    //gap에 최댓값 저장
    let gap = Math.max.apply(null, values);
    let item = [];

    for (let i in entry){
      if (gap > Math.abs(entry[i][1] - w)){
        gap = Math.abs(entry[i][1] - w);
        item = entry[i];
      }
    }
    
    console.log(item[0], item[1] - w);
}

problem56();

// 문제57: 1의 개수
function problem57() {
    let result = 0;
    for (let i=0; i<=1000; i++) {
        let tmp = i;
        while (tmp > 0) {
            if (tmp % 10 === 1) {
                result += 1;
            }
            tmp = parseInt(tmp/10);
        }
    }

    console.log(result);
}

problem57();

// 문제58: 콤마 찍기
function problem58(n) {
    parseInt(n);
    console.log(n.toLocaleString());
}

problem58(123456789);

// 문제59: 빈칸채우기
function problem59(string) {
    const n = 25 + parseInt((string.length/2));
    const a= string.padStart(n, '=');
    console.log(a.padEnd(50, '='));
}

problem59('hi');

// 문제60: 번호매기기
function problem60() {
    const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];

    students.sort();

    for (let key in students){
    console.log(`번호: ${parseInt(key, 10)+1}, 이름: ${students[key]}`);
    }
}

problem60();