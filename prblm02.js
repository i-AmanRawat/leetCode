//question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

nums = [2, 1, 11, 15];
target = 4;

function finder(nums){
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const second = target - first;
    const isPresent = nums.filter((x) => x === second);
    if (isPresent.length) {
      const firstIndex = nums.indexOf(first);
      const secondIndex = nums.indexOf(second);
      return { status: true, firstIndex, secondIndex };
    }
  }
  return { status: false, firstIndex: null, secondIndex: null };
}

const result = finder(nums);
result.status
  ? console.log([result.firstIndex, result.secondIndex])
  : console.log("Not found");
