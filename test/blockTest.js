let chai = require('chai');
  path = require('path');

  chai.should();

let Block = require(path.join(__dirname, '../app/', 'block'));

describe('Block', () => {
  beforeEach(() => {
    date = new Date
    time = date.getTime()
    block = new Block(time, 'data')
  });

  it('should have a timestamp', () => {
    block.timestamp.should.equal(time)
  })
  it('should contain data', () => {
    block.data.should.equal('data')
  })
})
