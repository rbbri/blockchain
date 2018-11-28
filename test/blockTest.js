let chai = require('chai');
 path = require('path');

  chai.should();

let Block = require(path.join(__dirname, '../app/', 'block'));

describe('Block', () => {

  beforeEach(() => {
    date = new Date
    time = date.getTime()
    block = new Block(time, 'data', this.hash='0')
  });

  it('should have a timestamp', () => {
    block.timestamp.should.equal(time)
  })
  it('should contain data', () => {
    block.data.should.equal('data')
      })
  it('should have an index 0', () => {
    block.index.should.equal(0)
  })
  it('should have previous hash 0', () => {
    block.previousHash.should.equal('0')
  })
  it('should have nonce 0', () => {
    block.nonce.should.equal(0)
  })

  describe('calcHash', () => {
    it('should calculate the block hash', () => {
      block.hash.should.equal(block.calcHash())
    })
  })
})
