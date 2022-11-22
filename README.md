This project is meant to practice writing a pub-sub [mitt](https://github.com/developit/mitt) library from scratch
without looking at the existing source code.

### Usage

```js
import pubsub from './src'

const ps = pubsub()

const foo1 = e => console.log('foo1', e)
const foo2 = e => console.log('foo2', e)
const bar = e => console.log('bar', e)
const wildcard = e => console.log('*', e)

/* register event listener */
ps.on('foo', foo1);
ps.on('foo', foo2);
ps.on('bar', bar)

/* register wildcard event listener */
ps.on('*', wildcard)

/* fire an event */
ps.emit('foo', { a: 'b' })
ps.emit('bar')

/* clear specific event listener */
ps.off('foo', foo1)

/* clear all event listeners of specific event name */
ps.clear('foo')

/* clear all event listeners */
ps.clear()
```