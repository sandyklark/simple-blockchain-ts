import {Block} from "./Block";

export class Blockchain {

  blockchain: Block[];
  difficulty: number;

  constructor(initialDifficulty: number = 4) {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = initialDifficulty;
  }

  startGenesisBlock() {
    return new Block(0, "01/01/2020", "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock: Block) {

    console.log(`Adding new block...`)
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {

    for(let i = 1; i < this.blockchain.length; i++){

      console.log(`Validating Block ${i}`);
      const currentBlock: Block = this.blockchain[i];
      const precedingBlock: Block = this.blockchain[i-1];
      const currentBlockHashValid: boolean = currentBlock.hash === currentBlock.computeHash();
      const precedingBlockHashValid: boolean = currentBlock.precedingHash === precedingBlock.hash;

      if(!currentBlockHashValid || !precedingBlockHashValid) {
        console.log(`Block ${i} Invalid`);
        return false;
      }

      console.log(`Block ${i} Valid`);
    }

    return true;
  }
}
