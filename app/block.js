var sha256 = require('js-sha256')

class Block {

  constructor(timestamp, data) {
    this.timestamp = timestamp;
    this.data = data;
    this.index = 0;
    this.previousHash = '0'
    this.nonce = 0;
    this.hash = this.calcHash()
  }

  calcHash() {
    return sha256(
      this.timestamp +
      this.data +
      this.index +
      this.previousHash +
      this.nonce).toString()
  }


}

module.exports = Block;
