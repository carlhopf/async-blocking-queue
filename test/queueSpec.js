const assert = require('assert');
const AsyncBlockingQueue = require('../index.js');

describe(__filename, function () {
  it('enqueue, dequeue', async function () {
    const queue = new AsyncBlockingQueue();

    setTimeout(() => {
      queue.enqueue(Promise.resolve(1))
    }, 100)
    
    setTimeout(() => {
      queue.enqueue(Promise.resolve(2))
    }, 200)

    assert.equal(1, await queue.dequeue());
    assert.equal(2, await queue.dequeue());
  })
})
