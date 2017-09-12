substring-trie
====

Minimalistic trie implementation for prefix searches. It finds the longest string from the dictionary that matches the beginning of the input string, or `undefined` if no matching string can be found.

    npm install substring-trie

```js
var Trie = require('substring-trie');

var trie = new Trie(['banana', 'grape', 'grapefruit'])

trie.search('banana'); // 'banana'
trie.search('banan'); // undefined
trie.search('bananas'); // 'banana'
trie.search('grape'); // 'grape'
trie.search('grapefruit'); // 'grapefruit'
trie.search('grapefruit and other fruit'); // 'grapefruit'
```

Note this is not designed for autosuggestions. Instead this is designed as a replacement for regex-based prefix searching:

```js
var regex = /^(banana|grapefruit|grape)/

'banana'.match(regex); // ['banana']
'banan'.match(regex); // null
'bananas'.match(regex); // ['banana']
'grape'.match(regex); // ['grapefruit']
'grapefruit'.match(regex); // ['grapefruit']
'grapefruit and other fruit'.match(regex); // ['grapefruit']
```
