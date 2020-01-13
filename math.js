module.exports = {
    FibonacciNumber: function(n) {
      if (n < 0) throw new Error("n must be greater than zero");
      var fib = [0, 1];
      for (var i = 2; i <= n; i++) fib[i] = fib[i - 1] + fib[i - 2];
      return fib[n];
    }
  }