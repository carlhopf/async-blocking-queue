 class AsyncBlockingQueue {
  constructor() {
    this.resolvers = [];
    this.promises = [];
  }

  _push() {
    this.promises.push(
      new Promise(resolve => {
        this.resolvers.push(resolve);
      })
    );
  }

  enqueue(t) {
    if (!this.resolvers.length) this._push();
    this.resolvers.shift()(t);
  }

  dequeue() {
    if (!this.promises.length) this._push();
    return this.promises.shift();
  }
 }

module.exports = AsyncBlockingQueue;
