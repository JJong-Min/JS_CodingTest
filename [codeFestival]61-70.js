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
function solution(blocks, rule){
    let answer = [];
    for (let block of blocks){
      answer.push(check(block, rule));
    }
    return answer;
  }
  
  function check(arr, rule){
    let toast = rule.indexOf(rule[0]);
    for (let chr of arr){
      if (rule.includes(chr)){
        if (toast > rule.indexOf(chr)){
          return '불가능';
        }
        toast = rule.indexOf(chr);
      }
    }
    return '가능';
  }
  
  
  const blocks = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
  const rule = 'ABCD';
  
  console.log(solution(blocks, rule));


  // 문제67: 민규의 약속
  function solution(n){
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;
    while(true){
      총악수 = parseInt((사람*(사람-1))/2, 10);
      if(n < 총악수){
        break;
      }
      temp = 총악수;
      사람 += 1;
    }
    return [parseInt(n-temp, 10), 사람];
  }
  
  const 악수의수 = 59;
  console.log(solution(악수의수));


  // 문제 68: 버스시간표
  function solution(버스시간, 기준시간){
    let answer = [];
    기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
    기준시간 = (기준시간[0] * 60) + 기준시간[1];
  
    for (let i in 버스시간){
      let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
      time = (time[0] * 60) + time[1];
  
      if (time < 기준시간){
        answer.push('지나갔습니다');
      } else{
        let 시간 = parseInt((time - 기준시간) / 60, 10);
        let 분 = (time - 기준시간) % 60;
        answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
      }
    }
    return answer;
  }
  
  console.log(solution(["12:30", "13:20", "14:13"], "12:40"));