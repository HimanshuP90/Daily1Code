/**
    Problem Statement:
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    Example:
        Input: nums1 = [1,3], nums2 = [2]
        Output: 2.00000
        Explanation: merged array = [1,2,3] and median is 2.    
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (arr.length % 2 > 0 ? false : true) {
    let r = arr.length / 2;
    let l = r - 1;
    return (arr[l] + arr[r]) / 2;
  } else {
    return arr[(arr.length + 1) / 2 - 1];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
