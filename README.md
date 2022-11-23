### PS
- Pub/Sub JS library that's inspirated from [mitt](https://github.com/developit/mitt).
- The project's goal is to practice building the pub/sub library from scratch.

#### Installation

Add `.npmrc` into project
```bash
@culee:registry=https://npm.pkg.github.com
```

```bash
npm install @culee/ps
```

#### Usage

```js
import pubsub from '@culee/ps'

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