// 문제24: 대문자로 바꿔주세요!
function problem24(name) {
    console.log(name.toUpperCase());
    return;
}

problem24("mary");

// 문제 25: 원의 넓이를 구하세요
function problem25(n) {
    let circle = n * n * 3.14;
    console.log(circle);
}

problem25(3);

// 문제26: 행성 문제2
function problem26(name) {
    const solar = {"수성" : "Mercury", "금성" : "Venus", "지구" : "Earth", "화성" : "Mars", "목성": "Jupiter", "토성" : "Saturn", "천왕성" : "Uranus", "해왕성" : "Neptune"};
    console.log(solar[name]);
}

problem26("수성");

// 문제28: 2-gram
function problem28(string) {
    let arr = string.split('');
    for (let i=0; i<arr.length - 1; i++) {
        console.log(arr[i], arr[i + 1]);
    }
}
problem28("Javascript");

// 문제30: 문자열 속 문자 찾기
function problem30(string, word) {
    console.log(string.indexOf(word));
}

problem30("pineapple is yummy", "apple");