// var uniquePaths = function (m, n) {
//   const dp = [];
//   for (let i = 0; i < m; i++) {
//     dp.push([]);
//     for (let j = 0; j < n; j++) {
//       if (i === 0 || j === 0) {
//         dp[i][j] = 1;
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//   }
//   return dp[m - 1][n - 1];
// };
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cache = {};

  const dp = (i, j) => {
    if (i === 0 || j === 0) {
      return 1;
    }
    const key = `${i}-${j}`;
    if (cache[key]) {
      return cache[key];
    }
    return (cache[key] = dp(i, j - 1) + dp(i - 1, j));
  };
  return dp(m - 1, n - 1);
};
