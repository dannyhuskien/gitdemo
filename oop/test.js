const _ = require('lodash');
const nums1 = _.range(1,20);
const nums2 = _.shuffle(nums1);
const x = _.sample(nums1);
console.log(nums1);
console.log(nums2);
console.log(x);
