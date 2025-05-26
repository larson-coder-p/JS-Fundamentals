// 10-factorial.js

/**
 * Recursively computes the factorial of n.
 * If n is NaN or n ≤ 1, returns 1.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (isNaN(n) || n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const n = parseInt(process.argv[2], 10);
  console.log(factorial(n));
  