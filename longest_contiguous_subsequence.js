let longestSubSequence = (arr) => {
    let ans = 0;
    let n = arr.length;
    let s = new Set();
    arr.forEach((i) => {
        s.add(i)
    });
    for (let i = 0; i < n; i++) {
        if (!s.has(arr[i] - 1)) {
            let j = arr[i];
            while (s.has(j)) {
                j += 1;
            }
            ans = Math.max(ans, j - arr[i]);
        }
    }
    return ans;
}

console.log(`The longest contiguous subsequence is ${longestSubSequence([1, 9, 3, 10, 4, 20, 2, 5, 5, 4])}`);
