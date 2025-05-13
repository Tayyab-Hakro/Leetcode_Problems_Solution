function greedyCoinChange(coins, amount) {
  coins.sort((a, b) => b - a); // Sort descending
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
        console.log(amount)
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}

console.log(greedyCoinChange([25, 10, 5, 1], 63)); 
// Output: [25, 25, 10, 1, 1, 1] => Total = 6 coins
