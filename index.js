'use strict'

var CODA_MARKER = '$$' // marks the end of the string

function MiniTrie (words) {
  this._dict = {}
  for (var i = 0, len = words.length; i < len; i++) {
    var word = words[i]
    var dict = this._dict
    for (var j = 0, len2 = word.length; j < len2; j++) {
      var char = word.charAt(j)
      dict = (dict[char] = dict[char] || {})
    }
    dict[CODA_MARKER] = true
  }
}

MiniTrie.prototype.search = function (str) {
  var i = -1
  var len = str.length
  var stack = [this._dict]
  while (++i < len) {
    var dict = stack[i]
    var char = str.charAt(i)
    if (char in dict) {
      stack.push(dict[char])
    } else {
      break
    }
  }
  while (stack.length) {
    if (stack.pop()[CODA_MARKER]) {
      return str.substring(0, stack.length)
    }
  }
}

module.exports = MiniTrie
