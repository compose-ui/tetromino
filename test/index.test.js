var Tetromino = require('../')
var assert = require('chai').assert
var sinon = require('sinon')

var AModel = Tetromino.extend()
var a = new AModel()

describe('Tetromino', function(){
  describe('extend', function(){
    it('can extend', function(){
      assert.isFunction(AModel.extend)
    })
  })
  describe('events', function(){
    before(function(){
      this.onSpy = sinon.spy()
      this.onAllSpy = sinon.spy()
      a.on('test', this.onSpy)
      a.onAll(this.onAllSpy)
      a.emit('test', 'yo', 'dawg')
    })
    it('emitted the test event with the correct args', function(){
      assert.strictEqual(this.onSpy.callCount, 1)
      assert.sameMembers(this.onSpy.args[0], ['yo', 'dawg'])
    })
    it('called the `onAll` callback with the correct args', function(){
      assert.strictEqual(this.onAllSpy.callCount, 1)
      assert.sameMembers(this.onAllSpy.args[0], ['yo', 'dawg'])
    })
  })
})