"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Blockchain_1 = require("./Blockchain");
const Block_1 = require("./Block");
const scruntCoin = new Blockchain_1.Blockchain(4);
scruntCoin.addNewBlock(new Block_1.Block(scruntCoin.blockchain.length, new Date().toISOString(), {
    currentAmount: 1
}));
scruntCoin.addNewBlock(new Block_1.Block(scruntCoin.blockchain.length, new Date().toISOString(), {
    currentAmount: 2
}));
scruntCoin.blockchain.forEach((block, index) => {
    console.log(`--- START BLOCK INDEX: ${index} ---`);
    console.log(block);
    console.log(`---- END BLOCK INDEX: ${index} ----`);
});
console.log('\nVerifying Chain Validity...');
console.log(`Chain ${scruntCoin.checkChainValidity() ? 'Valid' : 'Invalid'}`);
//# sourceMappingURL=index.js.map