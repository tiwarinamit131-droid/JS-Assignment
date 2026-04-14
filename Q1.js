let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));
let count = 0;
for (let x = L; x <= R; x++) {
if (x % K !== 0) continue;
let terminates_with_Zero = false;
    let temp = x;
    while (temp > 0) {
        if (temp % 10 === 0) {
            terminates_with_Zero = true;
            break;
        }
        temp = Math.floor(temp / 10);
    }
    if (terminates_with_Zero) continue;
    let temp1 = x;
    let sum = 0;
    while (temp1 > 0) {
        sum += temp1 % 10;
        temp1 = Math.floor(temp1 / 10);
    }
    let Prime = true;
    if (sum < 2) Prime = false;
    for (let i = 2; i * i <= sum; i++) {
        if (sum % i === 0) {
            Prime = false;
            break;
        }
    }
    if (Prime) count++;
}
alert(count);