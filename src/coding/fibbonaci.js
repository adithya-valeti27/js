function fibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }
  
  // Example usage
  const numTerms = 10;
  const fibSequence = fibonacciIterative(numTerms);
  console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  