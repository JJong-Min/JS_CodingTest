// 문제 41: 소수판별
function problem41(num) {
    for (let i=2; i<num;i++) {
        const result = num % i;
        if (result === 0) {
            console.log('NO');
            return false;
        }
    }
    if (num === 1) {
        console.log("NO");
        return;
    }
    console.log('YES');
}

problem41(3);

// 문제42: 2020년
function problem42(a, b) {
    let day = 0;
    const months = {'1':31, '2':29, '3':31, '4':30, '5':31, '6':30, '7':31, '8':31, '9':30, '10':31, '11':30, '12':31};
    for (let i=1; i<a; i++) {
        day += months[i];
    }
    day += b - 1;

    const days = {'0':'WED', '1':'THU', '2':'FRI', '3':'SAT', '4':'SUN', '5':'MON', '6':'TUE'};
    let result = days[day%7];
    console.log(result);
}

problem42(5, 24);

// 문제43: 10진수를 2진수로
function problem43(num) {
    let result = '';
    while (num > 1) {
        result += (num % 2);
        num = parseInt(num / 2);
        console.log(result);
    }
    result += num;
    result = result.split('').reverse().join('');
    console.log(result);
}

problem43(13);

// 문제44: 각 자리수의 합
function problem44(num) {
    let arr = String(num).split('');
    const result = arr.reduce(function add(sum, currValue) {
        return sum + parseInt(currValue);
    }, 0);
    console.log(result);
}

problem44(18234);

// 문제 45: gettime()함수 사용하기
function problem45() {
    let date = new Date();
    let year = Math.floor(date.getTime()/(3600*24*365*1000))+1970
    console.log(year);
};

problem45();

// 문제 46: 각 자리수의 합 2
function problem46() {
    let num = '1';
    for (i=2; i<=20; i++) {
        num += String(i);
    }

    let arr = num.split('');
    const result = arr.reduce(function add(sum, currValue) {
        return sum + parseInt(currValue);
    }, 0);
    console.log(result);
}

problem46();

// 문제 48: 대소문자 바꿔서 출력하기
function problem48(string) {
    let arr = string.split('');
    for (i=0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }
    }
    let result = arr.join('');
    console.log(result);
}

problem48('AAABBBcccddd');

//문제 49: 최댓값 구하기
function problem49(numbers) {
    let arr = numbers.split(' ').map((n) => {
        return parseInt(n, 10);
    })

    arr.sort((a, b) => {
        return b-a;
    });

    console.log(arr[0]);
}

problem49('1 2 10 3');

// 문제 50: 
