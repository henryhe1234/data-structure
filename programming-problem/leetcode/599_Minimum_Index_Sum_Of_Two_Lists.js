// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".


var findRestaurant = function(list1, list2) {
  let answer = [];
  let map = {};
  let indexSum = Number.MAX_SAFE_INTEGER;
  for(let i = 0;i<list1.length;i++){
      map[list1[i]] = i;
  }
  for(let i = 0;i<list2.length;i++){
      
      if(map[list2[i]] !== undefined){
          map[list2[i]] += i;
          indexSum = Math.min(indexSum,map[list2[i]]);
      }
  }
 for(let i = 0;i<list2.length;i++){
     if(map[list2[i]] !== undefined && map[list2[i]] === indexSum){
         answer.push(list2[i]);
     }
 }
  
  
  return answer;
};
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));