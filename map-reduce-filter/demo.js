const output = [5, 6, 7].map(n => n * n).map(n=>n*n);
console.log('output:', output);

const output2 = [1,2,3,4,5].filter(n => n % 2 === 1).map(n => n * n);
console.log('output2:', output2);

const output3 = [1,2,3,4,5].reduce((acc, val) => acc + val);
console.log('output3:', output3);

const output4 = [1,2,3,4,5].reduce((acc, val) => acc + val, 10);
console.log('output4:', output4);
