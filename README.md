# async-blocking-queue

```
npm install --save async-blocking-queue
```



AsyncBlockingQueue
------------------


```javascript
import AsyncBlockingQueue from 'async-blocking-queue';

var queue = new AsyncBlockingQueue();

// wait for next enqueue() result
queue.dequeue().then((result) => console.info(result));

setTimeout(() => {
  queue.enqueue('hello world')
}, 1000);

```
