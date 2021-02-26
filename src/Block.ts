import SHA256 from 'crypto-js/sha256';

export class Block {

  data: any;
  hash: string;
  index: number;
  nonce: number;
  precedingHash: string;
  timestamp: string;

  constructor(index: number, timestamp: string, data: any, precedingHash: string= "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
      this.precedingHash +
      this.timestamp +
      JSON.stringify(this.data) +
      this.nonce
    ).toString();
  }

  proofOfWork(difficulty: number) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.computeHash();
    }

    console.log(`Found hash: ${this.hash} with difficultly ${difficulty} and nonce value: ${this.nonce}`);
  }
}
