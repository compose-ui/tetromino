var EventEmitter2 = require('eventemitter2').EventEmitter2
var extend = require('compose-extend')

module.exports = Tetromino

function Tetromino(options){
  this.options = (options || {})
  this._eventEmitter = new EventEmitter2()
  this.initialize.apply(this, arguments)
}

var noop = function(){}
Tetromino.prototype.initialize = noop

Tetromino.prototype.emit = function(){
  this._eventEmitter.emit.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.on = function(){
  this._eventEmitter.on.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.once = function(){
  this._eventEmitter.once.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.off = function(){
  this._eventEmitter.off.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.onAll = function(){
  this._eventEmitter.onAny.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.offAll = function(){
  this._eventEmitter.offAny.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.prototype.listeners = function(){
  this._eventEmitter.listeners.apply(this._eventEmitter, arguments)
  return this
}

Tetromino.extend = function(){
  return extend.apply(this, arguments)
}