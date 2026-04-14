# JS Assignment

### NAMIT TIWARI

### Q1
In this question I took three inputs L, R and K using prompt() from the user.
Then I run a loop from L to R to check each number one by one.
In this loop using if else conditonal statement I checked wether it is divisible by K or not, then does it contain digit 0,then I calculated the sum of the digits, and finally checked if the number is prime or not.
If all conditions are true then incremented count.
Time Complexity:
The loop runs from L to R, so it takes O(N) time.
For each number, digit operations take O(d) where d is number of digits (max 6).
Prime check takes O(√sum), but sum is small, so it is almost constant.
Overall complexity is approximately O(N).

### Q2
In this question I took N and seed as input.
I stored N in a variable called current and updated it 3 times.
If current is even, I divided it by 2 and added seed.
Otherwise, I multiplied it by 3 and subtracted seed.
After 3 steps:
I checked if the number is between 100 and 999.
Then I took out the middle digit and compared it with seed.
Time Complexity:
The loop runs only 3 times and all operations are constant.
So overall complexity is O(1).

### Q3
In this question I tried all values of X from 0 to 100000.
For each X:
I calculated N + X.
Checked if it is divisible by K.
Then I checked if it is a palindrome by reversing the number.
As soon as I found a valid X, I stopped the loop.
Time Complexity:
In worst case the loop runs 100000 times.
For each number, reversing takes O(d) time.
So overall complexity is O(100000 × d), which is acceptable since d is small.

### Q4
In this question I calculated the fare step by step.
First I calculated base + 7 × distance.
Then I added 20 if minutesLate > 15.
Then I added 10% of fare if distance > 10.
After that I added or subtracted seed depending on whether it is even or odd.
Finally I rounded the fare to nearest multiple of 5 using Math.ceil().
Time Complexity:
Only arithmetic operations and conditions are used.
So time complexity is O(1).

### Q5
In this question I used a while loop to keep adding numbers starting from 1.
If a number is divisible by (seed + 2), I skipped it.
Otherwise I added it to the sum.
The loop continues until sum becomes greater than or equal to N.
Time Complexity:
Sum grows roughly like 1 + 2 + 3 + ... + m ≈ m²/2.
So to reach N, m is approximately √N.
Therefore time complexity is O(√N).

### Q6
In this question I calculated score using the formula:
score = 3a + b − 2c
If score becomes negative, I set it to 0.
If total attempts are greater than 50, I subtracted 10.
Again I ensured score does not go below 0.
Finally I checked if score is at least 60 to decide PASS or FAIL.
Time Complexity:
Only arithmetic operations and conditions are used.
So time complexity is O(1).