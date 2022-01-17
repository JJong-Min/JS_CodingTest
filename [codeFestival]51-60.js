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

