'use strict'

/* global it,describe */

var expect = require('chai').expect
var Trie = require('./')

describe('main', function () {
  it('test basic', function () {
    var trie = new Trie(['banana'])
    expect(trie.search('bananas')).to.equal('banana')
    expect(trie.search('banana')).to.equal('banana')
    expect(trie.search('bananass')).to.equal('banana')
    expect(trie.search('banan')).to.equal(undefined)
  })

  it('test substring', function () {
    var trie = new Trie(['banana', 'bananas'])
    expect(trie.search('bananas')).to.equal('bananas')
    expect(trie.search('banana')).to.equal('banana')
    expect(trie.search('bananass')).to.equal('bananas')
    expect(trie.search('bananat')).to.equal('banana')
    expect(trie.search('banan')).to.equal(undefined)
  })

  it('test substring ordering', function () {
    var trie = new Trie(['bananas', 'banana'])
    expect(trie.search('bananas')).to.equal('bananas')
    expect(trie.search('banana')).to.equal('banana')
    expect(trie.search('bananass')).to.equal('bananas')
    expect(trie.search('bananat')).to.equal('banana')
    expect(trie.search('banan')).to.equal(undefined)
  })

  it('test readme examples', function () {
    var trie = new Trie(['banana', 'grape', 'grapefruit'])
    expect(trie.search('banana')).to.equal('banana')
    expect(trie.search('banan')).to.equal(undefined)
    expect(trie.search('bananas')).to.equal('banana')
    expect(trie.search('grape')).to.equal('grape')
    expect(trie.search('grapefruit')).to.equal('grapefruit')
    expect(trie.search('grapefruit and other fruit')).to.equal('grapefruit')
  })

  it('test negative cases', function () {
    var trie = new Trie(['banana', 'grape', 'grapefruit'])
    expect(trie.search('apple')).to.equal(undefined)
    expect(trie.search('grapple')).to.equal(undefined)
    expect(trie.search('')).to.equal(undefined)
  })
})
