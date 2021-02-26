import {Blockchain} from "./Blockchain";
import {Block} from "./Block";

const scruntCoin = new Blockchain(4);

scruntCoin.addNewBlock(
  new Block(
    scruntCoin.blockchain.length,
    new Date().toISOString(),
    {
      currentAmount: 1
    },
  )
);

scruntCoin.addNewBlock(
  new Block(
    scruntCoin.blockchain.length,
    new Date().toISOString(),
    {
      currentAmount: 2
    },
  )
);

scruntCoin.blockchain.forEach((block, index) => {
  console.log(`--- START BLOCK INDEX: ${index} ---`);
  console.log(block);
  console.log(`---- END BLOCK INDEX: ${index} ----`);
});

console.log('\nVerifying Chain Validity...');
console.log(`Chain ${scruntCoin.checkChainValidity() ? 'Valid' : 'Invalid'}`);
