let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));
if (Number.isNaN(N) || Number.isNaN(seed)) {
    alert("Please enter valid numbers only!");
} else {
    let m = 0;
    let sum = 0;
    let skip = seed + 2;
    while (sum < N) {
        m++;
        if (m % skip !== 0) {
            sum += m;
        }
    }
    alert(m + " " + sum);
}