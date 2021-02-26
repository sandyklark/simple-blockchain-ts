"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const Block_1 = require("./Block");
class Blockchain {
    constructor(initialDifficulty = 4) {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = initialDifficulty;
    }
    startGenesisBlock() {
        return new Block_1.Block(0, "01/01/2020", "Initial Block in the Chain", "0");
    }
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        console.log(`Adding new block...`);
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    }
    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            console.log(`Validating Block ${i}`);
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];
            const currentBlockHashValid = currentBlock.hash === currentBlock.computeHash();
            const precedingBlockHashValid = currentBlock.precedingHash === precedingBlock.hash;
            if (!currentBlockHashValid || !precedingBlockHashValid) {
                console.log(`Block ${i} Invalid`);
                return false;
            }
            console.log(`Block ${i} Valid`);
        }
        return true;
    }
}
exports.Blockchain = Blockchain;
//# sourceMappingURL=Blockchain.js.map