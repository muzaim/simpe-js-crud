class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
         let min = arr[0]
  let maxProfit = 0
  for(let i=0;i<arr.length;i++){
    let num = arr[i]
    if(num<min){
      min=num
    }
   let profit = num-min
    if(profit>maxProfit ){
      maxProfit=profit
    }
  
  }
  
 return maxProfit
    }
}
