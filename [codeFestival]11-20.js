// 문제11: 1부터 100까지 더하는 code를 <pass>부분을 완성.
function problem11() {
    let s = 0;
    // pass start
    for (i=1; i<=100; i++) {
        s += i;
    }
    console.log(s);
}

problem11();

// 문제12: 게임 캐릭터 클래스 만들기
const Wizard = class Wizard {
    constructor (health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼');
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 문제13: 몇 번째 행성인가요?
const solar = ['', '수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
console.log(solar[1]);

// 문제14: 3의 배수인가요?
function problem14(n) {
    if (n%3 === 0) {
        console.log("짝");
    } else {
        console.log(n);
    }
};

problem14(10);

// 문제15: 자기소개
function problem15(name) {
    console.log("안녕하세요. 저는 " + name + "입니다.");
}

problem15('김다정');

// 문제16: 로꾸거
function problem16(inputStr) {
    console.log(inputStr.split("").reverse().join(""));
}

problem16("거꾸로");

// 문제 17: 놀이기구 키 제한
function problem17(height) {
    console.log(height > 150);
}

problem17(150);

// 문제 18: 평균 점수
function problem18(num1, num2, num3) {
    let average = parseInt((num1 + num2 + num3) / 3);
    console.log(average);
}

problem18(20, 30, 40);

// 문제 19: 제곱을 구하자.
function problem19(nums) {
    let nums_split = nums.split(" ");
    let a = nums_split[0];
    let b = nums_split[1];
    console.log(a**b);
}

problem19('2 3');

// 문제 20: 몫과 나머지
function problem20(nums) {
    let nums_split = nums.split(" ");
    let a = nums_split[0];
    let b = nums_split[1];
    let result1 = parseInt(a / b);
    let result2 = a % b;
    console.log(result1, result2);
}

problem20('10 2');