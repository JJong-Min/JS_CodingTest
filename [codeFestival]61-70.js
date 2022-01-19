// 문제61: 문자열 압축하기
function problem61(string) {
    let arr = string.split('');
    let cnt = 1;
    let now_chr = arr[0];
    let result = '';
    for (i=1; i<arr.length; i++) {
        if (now_chr === arr[i]) {
            cnt += 1;
        } else {
            result += (now_chr + cnt);
            now_chr = arr[i];
            cnt = 1;
        }
    }
    result += (now_chr + cnt);
    console.log(result);
}

problem61('aaabbbcdddd');

// 문제63: 친해지고 싶어
function problem63(string) {
    let arr = string.split(' ');
    let result = '';
    for (i=0; i<arr.length; i++) {
        result += arr[i][0];
    }
    console.log(result);
}

problem63('복잡한 세상 편하게 살자');

// 문제64: 이상한 엘레베이터
function problem64(n) {
    let result = 0;
    result += parseInt(n / 7);
    n = n % 7;
    result += parseInt(n / 3);
    if (n % 3 !== 0) {
        console.log(-1);
    } else {
        console.log(result);
    }
}

problem64(24);

// 문제 65: 변형된 리스트
function problem65(a, b) {
    let result = [];
    for (i=0; i<a.length; i++) {
        if (i % 2 === 0) {
            result.push([a[i], b[i]]);
        } else {
            result.push([b[i], a[i]]);
        }
    }

    console.log(result);
}

problem65([1, 2, 3, 4], ['a', 'b', 'c', 'd']);

// 문제 66: 블럭탑쌓기
