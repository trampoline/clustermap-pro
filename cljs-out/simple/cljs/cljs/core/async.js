// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24481 = (function (f,fn_handler,meta24482){
this.f = f;
this.fn_handler = fn_handler;
this.meta24482 = meta24482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24481.cljs$lang$type = true;
cljs.core.async.t24481.cljs$lang$ctorStr = "cljs.core.async/t24481";
cljs.core.async.t24481.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24481");
});
cljs.core.async.t24481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24483){var self__ = this;
var _24483__$1 = this;return self__.meta24482;
});
cljs.core.async.t24481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24483,meta24482__$1){var self__ = this;
var _24483__$1 = this;return (new cljs.core.async.t24481(self__.f,self__.fn_handler,meta24482__$1));
});
cljs.core.async.__GT_t24481 = (function __GT_t24481(f__$1,fn_handler__$1,meta24482){return (new cljs.core.async.t24481(f__$1,fn_handler__$1,meta24482));
});
}
return (new cljs.core.async.t24481(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24485 = buff;if(G__24485)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24485.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24485);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24486 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24486);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24486,ret){
return (function (){return fn1.call(null,val_24486);
});})(val_24486,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24487 = n;var x_24488 = (0);while(true){
if((x_24488 < n__4508__auto___24487))
{(a[x_24488] = (0));
{
var G__24489 = (x_24488 + (1));
x_24488 = G__24489;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24490 = (i + (1));
i = G__24490;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24494 = (function (flag,alt_flag,meta24495){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24495 = meta24495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24494.cljs$lang$type = true;
cljs.core.async.t24494.cljs$lang$ctorStr = "cljs.core.async/t24494";
cljs.core.async.t24494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24494");
});})(flag))
;
cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24496){var self__ = this;
var _24496__$1 = this;return self__.meta24495;
});})(flag))
;
cljs.core.async.t24494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24496,meta24495__$1){var self__ = this;
var _24496__$1 = this;return (new cljs.core.async.t24494(self__.flag,self__.alt_flag,meta24495__$1));
});})(flag))
;
cljs.core.async.__GT_t24494 = ((function (flag){
return (function __GT_t24494(flag__$1,alt_flag__$1,meta24495){return (new cljs.core.async.t24494(flag__$1,alt_flag__$1,meta24495));
});})(flag))
;
}
return (new cljs.core.async.t24494(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24500 = (function (cb,flag,alt_handler,meta24501){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24501 = meta24501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24500.cljs$lang$type = true;
cljs.core.async.t24500.cljs$lang$ctorStr = "cljs.core.async/t24500";
cljs.core.async.t24500.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24500");
});
cljs.core.async.t24500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24502){var self__ = this;
var _24502__$1 = this;return self__.meta24501;
});
cljs.core.async.t24500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24502,meta24501__$1){var self__ = this;
var _24502__$1 = this;return (new cljs.core.async.t24500(self__.cb,self__.flag,self__.alt_handler,meta24501__$1));
});
cljs.core.async.__GT_t24500 = (function __GT_t24500(cb__$1,flag__$1,alt_handler__$1,meta24501){return (new cljs.core.async.t24500(cb__$1,flag__$1,alt_handler__$1,meta24501));
});
}
return (new cljs.core.async.t24500(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24503_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24503_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24504_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24504_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24505 = (i + (1));
i = G__24505;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24506){var map__24508 = p__24506;var map__24508__$1 = ((cljs.core.seq_QMARK_.call(null,map__24508))?cljs.core.apply.call(null,cljs.core.hash_map,map__24508):map__24508);var opts = map__24508__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24506 = null;if (arguments.length > 1) {
  p__24506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24506);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24509){
var ports = cljs.core.first(arglist__24509);
var p__24506 = cljs.core.rest(arglist__24509);
return alts_BANG___delegate(ports,p__24506);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24604){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24604){
return (function (state_24580){var state_val_24581 = (state_24580[(1)]);if((state_val_24581 === (7)))
{var inst_24576 = (state_24580[(2)]);var state_24580__$1 = state_24580;var statearr_24582_24605 = state_24580__$1;(statearr_24582_24605[(2)] = inst_24576);
(statearr_24582_24605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (1)))
{var state_24580__$1 = state_24580;var statearr_24583_24606 = state_24580__$1;(statearr_24583_24606[(2)] = null);
(statearr_24583_24606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (4)))
{var inst_24559 = (state_24580[(7)]);var inst_24559__$1 = (state_24580[(2)]);var inst_24560 = (inst_24559__$1 == null);var state_24580__$1 = (function (){var statearr_24584 = state_24580;(statearr_24584[(7)] = inst_24559__$1);
return statearr_24584;
})();if(cljs.core.truth_(inst_24560))
{var statearr_24585_24607 = state_24580__$1;(statearr_24585_24607[(1)] = (5));
} else
{var statearr_24586_24608 = state_24580__$1;(statearr_24586_24608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (13)))
{var state_24580__$1 = state_24580;var statearr_24587_24609 = state_24580__$1;(statearr_24587_24609[(2)] = null);
(statearr_24587_24609[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (6)))
{var inst_24559 = (state_24580[(7)]);var state_24580__$1 = state_24580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24580__$1,(11),to,inst_24559);
} else
{if((state_val_24581 === (3)))
{var inst_24578 = (state_24580[(2)]);var state_24580__$1 = state_24580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24580__$1,inst_24578);
} else
{if((state_val_24581 === (12)))
{var state_24580__$1 = state_24580;var statearr_24588_24610 = state_24580__$1;(statearr_24588_24610[(2)] = null);
(statearr_24588_24610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (2)))
{var state_24580__$1 = state_24580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24580__$1,(4),from);
} else
{if((state_val_24581 === (11)))
{var inst_24569 = (state_24580[(2)]);var state_24580__$1 = state_24580;if(cljs.core.truth_(inst_24569))
{var statearr_24589_24611 = state_24580__$1;(statearr_24589_24611[(1)] = (12));
} else
{var statearr_24590_24612 = state_24580__$1;(statearr_24590_24612[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (9)))
{var state_24580__$1 = state_24580;var statearr_24591_24613 = state_24580__$1;(statearr_24591_24613[(2)] = null);
(statearr_24591_24613[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (5)))
{var state_24580__$1 = state_24580;if(cljs.core.truth_(close_QMARK_))
{var statearr_24592_24614 = state_24580__$1;(statearr_24592_24614[(1)] = (8));
} else
{var statearr_24593_24615 = state_24580__$1;(statearr_24593_24615[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (14)))
{var inst_24574 = (state_24580[(2)]);var state_24580__$1 = state_24580;var statearr_24594_24616 = state_24580__$1;(statearr_24594_24616[(2)] = inst_24574);
(statearr_24594_24616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (10)))
{var inst_24566 = (state_24580[(2)]);var state_24580__$1 = state_24580;var statearr_24595_24617 = state_24580__$1;(statearr_24595_24617[(2)] = inst_24566);
(statearr_24595_24617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24581 === (8)))
{var inst_24563 = cljs.core.async.close_BANG_.call(null,to);var state_24580__$1 = state_24580;var statearr_24596_24618 = state_24580__$1;(statearr_24596_24618[(2)] = inst_24563);
(statearr_24596_24618[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___24604))
;return ((function (switch__11461__auto__,c__11517__auto___24604){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24600 = [null,null,null,null,null,null,null,null];(statearr_24600[(0)] = state_machine__11462__auto__);
(statearr_24600[(1)] = (1));
return statearr_24600;
});
var state_machine__11462__auto____1 = (function (state_24580){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24580);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24601){if((e24601 instanceof Object))
{var ex__11465__auto__ = e24601;var statearr_24602_24619 = state_24580;(statearr_24602_24619[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24620 = state_24580;
state_24580 = G__24620;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24580){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24604))
})();var state__11519__auto__ = (function (){var statearr_24603 = f__11518__auto__.call(null);(statearr_24603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24604);
return statearr_24603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24604))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__24804){var vec__24805 = p__24804;var v = cljs.core.nth.call(null,vec__24805,(0),null);var p = cljs.core.nth.call(null,vec__24805,(1),null);var job = vec__24805;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results){
return (function (state_24810){var state_val_24811 = (state_24810[(1)]);if((state_val_24811 === (2)))
{var inst_24807 = (state_24810[(2)]);var inst_24808 = cljs.core.async.close_BANG_.call(null,res);var state_24810__$1 = (function (){var statearr_24812 = state_24810;(statearr_24812[(7)] = inst_24807);
return statearr_24812;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24810__$1,inst_24808);
} else
{if((state_val_24811 === (1)))
{var state_24810__$1 = state_24810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24810__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24816 = [null,null,null,null,null,null,null,null];(statearr_24816[(0)] = state_machine__11462__auto__);
(statearr_24816[(1)] = (1));
return statearr_24816;
});
var state_machine__11462__auto____1 = (function (state_24810){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24810);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24817){if((e24817 instanceof Object))
{var ex__11465__auto__ = e24817;var statearr_24818_24988 = state_24810;(statearr_24818_24988[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24989 = state_24810;
state_24810 = G__24989;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24810){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24819 = f__11518__auto__.call(null);(statearr_24819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24987);
return statearr_24819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24987,res,vec__24805,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24820){var vec__24821 = p__24820;var v = cljs.core.nth.call(null,vec__24821,(0),null);var p = cljs.core.nth.call(null,vec__24821,(1),null);var job = vec__24821;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24990 = n;var __24991 = (0);while(true){
if((__24991 < n__4508__auto___24990))
{var G__24822_24992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24822_24992) {
case "async":
var c__11517__auto___24994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24991,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24991,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function (state_24835){var state_val_24836 = (state_24835[(1)]);if((state_val_24836 === (7)))
{var inst_24831 = (state_24835[(2)]);var state_24835__$1 = state_24835;var statearr_24837_24995 = state_24835__$1;(statearr_24837_24995[(2)] = inst_24831);
(statearr_24837_24995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24836 === (6)))
{var state_24835__$1 = state_24835;var statearr_24838_24996 = state_24835__$1;(statearr_24838_24996[(2)] = null);
(statearr_24838_24996[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24836 === (5)))
{var state_24835__$1 = state_24835;var statearr_24839_24997 = state_24835__$1;(statearr_24839_24997[(2)] = null);
(statearr_24839_24997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24836 === (4)))
{var inst_24825 = (state_24835[(2)]);var inst_24826 = async.call(null,inst_24825);var state_24835__$1 = state_24835;if(cljs.core.truth_(inst_24826))
{var statearr_24840_24998 = state_24835__$1;(statearr_24840_24998[(1)] = (5));
} else
{var statearr_24841_24999 = state_24835__$1;(statearr_24841_24999[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24836 === (3)))
{var inst_24833 = (state_24835[(2)]);var state_24835__$1 = state_24835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24835__$1,inst_24833);
} else
{if((state_val_24836 === (2)))
{var state_24835__$1 = state_24835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24835__$1,(4),jobs);
} else
{if((state_val_24836 === (1)))
{var state_24835__$1 = state_24835;var statearr_24842_25000 = state_24835__$1;(statearr_24842_25000[(2)] = null);
(statearr_24842_25000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__24991,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
;return ((function (__24991,switch__11461__auto__,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24846 = [null,null,null,null,null,null,null];(statearr_24846[(0)] = state_machine__11462__auto__);
(statearr_24846[(1)] = (1));
return statearr_24846;
});
var state_machine__11462__auto____1 = (function (state_24835){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24835);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object))
{var ex__11465__auto__ = e24847;var statearr_24848_25001 = state_24835;(statearr_24848_25001[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25002 = state_24835;
state_24835 = G__25002;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24835){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24991,switch__11461__auto__,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24849 = f__11518__auto__.call(null);(statearr_24849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24994);
return statearr_24849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24991,c__11517__auto___24994,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___25003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24991,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24991,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function (state_24862){var state_val_24863 = (state_24862[(1)]);if((state_val_24863 === (7)))
{var inst_24858 = (state_24862[(2)]);var state_24862__$1 = state_24862;var statearr_24864_25004 = state_24862__$1;(statearr_24864_25004[(2)] = inst_24858);
(statearr_24864_25004[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24863 === (6)))
{var state_24862__$1 = state_24862;var statearr_24865_25005 = state_24862__$1;(statearr_24865_25005[(2)] = null);
(statearr_24865_25005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24863 === (5)))
{var state_24862__$1 = state_24862;var statearr_24866_25006 = state_24862__$1;(statearr_24866_25006[(2)] = null);
(statearr_24866_25006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24863 === (4)))
{var inst_24852 = (state_24862[(2)]);var inst_24853 = process.call(null,inst_24852);var state_24862__$1 = state_24862;if(cljs.core.truth_(inst_24853))
{var statearr_24867_25007 = state_24862__$1;(statearr_24867_25007[(1)] = (5));
} else
{var statearr_24868_25008 = state_24862__$1;(statearr_24868_25008[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24863 === (3)))
{var inst_24860 = (state_24862[(2)]);var state_24862__$1 = state_24862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24862__$1,inst_24860);
} else
{if((state_val_24863 === (2)))
{var state_24862__$1 = state_24862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24862__$1,(4),jobs);
} else
{if((state_val_24863 === (1)))
{var state_24862__$1 = state_24862;var statearr_24869_25009 = state_24862__$1;(statearr_24869_25009[(2)] = null);
(statearr_24869_25009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__24991,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
;return ((function (__24991,switch__11461__auto__,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24873 = [null,null,null,null,null,null,null];(statearr_24873[(0)] = state_machine__11462__auto__);
(statearr_24873[(1)] = (1));
return statearr_24873;
});
var state_machine__11462__auto____1 = (function (state_24862){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24862);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24874){if((e24874 instanceof Object))
{var ex__11465__auto__ = e24874;var statearr_24875_25010 = state_24862;(statearr_24875_25010[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25011 = state_24862;
state_24862 = G__25011;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24991,switch__11461__auto__,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24876 = f__11518__auto__.call(null);(statearr_24876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25003);
return statearr_24876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24991,c__11517__auto___25003,G__24822_24992,n__4508__auto___24990,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25012 = (__24991 + (1));
__24991 = G__25012;
continue;
}
} else
{}
break;
}
var c__11517__auto___25013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25013,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25013,jobs,results,process,async){
return (function (state_24898){var state_val_24899 = (state_24898[(1)]);if((state_val_24899 === (9)))
{var inst_24891 = (state_24898[(2)]);var state_24898__$1 = (function (){var statearr_24900 = state_24898;(statearr_24900[(7)] = inst_24891);
return statearr_24900;
})();var statearr_24901_25014 = state_24898__$1;(statearr_24901_25014[(2)] = null);
(statearr_24901_25014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24899 === (8)))
{var inst_24884 = (state_24898[(8)]);var inst_24889 = (state_24898[(2)]);var state_24898__$1 = (function (){var statearr_24902 = state_24898;(statearr_24902[(9)] = inst_24889);
return statearr_24902;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24898__$1,(9),results,inst_24884);
} else
{if((state_val_24899 === (7)))
{var inst_24894 = (state_24898[(2)]);var state_24898__$1 = state_24898;var statearr_24903_25015 = state_24898__$1;(statearr_24903_25015[(2)] = inst_24894);
(statearr_24903_25015[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24899 === (6)))
{var inst_24879 = (state_24898[(10)]);var inst_24884 = (state_24898[(8)]);var inst_24884__$1 = cljs.core.async.chan.call(null,(1));var inst_24885 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24886 = [inst_24879,inst_24884__$1];var inst_24887 = (new cljs.core.PersistentVector(null,2,(5),inst_24885,inst_24886,null));var state_24898__$1 = (function (){var statearr_24904 = state_24898;(statearr_24904[(8)] = inst_24884__$1);
return statearr_24904;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24898__$1,(8),jobs,inst_24887);
} else
{if((state_val_24899 === (5)))
{var inst_24882 = cljs.core.async.close_BANG_.call(null,jobs);var state_24898__$1 = state_24898;var statearr_24905_25016 = state_24898__$1;(statearr_24905_25016[(2)] = inst_24882);
(statearr_24905_25016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24899 === (4)))
{var inst_24879 = (state_24898[(10)]);var inst_24879__$1 = (state_24898[(2)]);var inst_24880 = (inst_24879__$1 == null);var state_24898__$1 = (function (){var statearr_24906 = state_24898;(statearr_24906[(10)] = inst_24879__$1);
return statearr_24906;
})();if(cljs.core.truth_(inst_24880))
{var statearr_24907_25017 = state_24898__$1;(statearr_24907_25017[(1)] = (5));
} else
{var statearr_24908_25018 = state_24898__$1;(statearr_24908_25018[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24899 === (3)))
{var inst_24896 = (state_24898[(2)]);var state_24898__$1 = state_24898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24898__$1,inst_24896);
} else
{if((state_val_24899 === (2)))
{var state_24898__$1 = state_24898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24898__$1,(4),from);
} else
{if((state_val_24899 === (1)))
{var state_24898__$1 = state_24898;var statearr_24909_25019 = state_24898__$1;(statearr_24909_25019[(2)] = null);
(statearr_24909_25019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___25013,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___25013,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24913 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24913[(0)] = state_machine__11462__auto__);
(statearr_24913[(1)] = (1));
return statearr_24913;
});
var state_machine__11462__auto____1 = (function (state_24898){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24898);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24914){if((e24914 instanceof Object))
{var ex__11465__auto__ = e24914;var statearr_24915_25020 = state_24898;(statearr_24915_25020[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25021 = state_24898;
state_24898 = G__25021;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24898){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25013,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24916 = f__11518__auto__.call(null);(statearr_24916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25013);
return statearr_24916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25013,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24954){var state_val_24955 = (state_24954[(1)]);if((state_val_24955 === (7)))
{var inst_24950 = (state_24954[(2)]);var state_24954__$1 = state_24954;var statearr_24956_25022 = state_24954__$1;(statearr_24956_25022[(2)] = inst_24950);
(statearr_24956_25022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (20)))
{var state_24954__$1 = state_24954;var statearr_24957_25023 = state_24954__$1;(statearr_24957_25023[(2)] = null);
(statearr_24957_25023[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (1)))
{var state_24954__$1 = state_24954;var statearr_24958_25024 = state_24954__$1;(statearr_24958_25024[(2)] = null);
(statearr_24958_25024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (4)))
{var inst_24919 = (state_24954[(7)]);var inst_24919__$1 = (state_24954[(2)]);var inst_24920 = (inst_24919__$1 == null);var state_24954__$1 = (function (){var statearr_24959 = state_24954;(statearr_24959[(7)] = inst_24919__$1);
return statearr_24959;
})();if(cljs.core.truth_(inst_24920))
{var statearr_24960_25025 = state_24954__$1;(statearr_24960_25025[(1)] = (5));
} else
{var statearr_24961_25026 = state_24954__$1;(statearr_24961_25026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (15)))
{var inst_24932 = (state_24954[(8)]);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24954__$1,(18),to,inst_24932);
} else
{if((state_val_24955 === (21)))
{var inst_24945 = (state_24954[(2)]);var state_24954__$1 = state_24954;var statearr_24962_25027 = state_24954__$1;(statearr_24962_25027[(2)] = inst_24945);
(statearr_24962_25027[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (13)))
{var inst_24947 = (state_24954[(2)]);var state_24954__$1 = (function (){var statearr_24963 = state_24954;(statearr_24963[(9)] = inst_24947);
return statearr_24963;
})();var statearr_24964_25028 = state_24954__$1;(statearr_24964_25028[(2)] = null);
(statearr_24964_25028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (6)))
{var inst_24919 = (state_24954[(7)]);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(11),inst_24919);
} else
{if((state_val_24955 === (17)))
{var inst_24940 = (state_24954[(2)]);var state_24954__$1 = state_24954;if(cljs.core.truth_(inst_24940))
{var statearr_24965_25029 = state_24954__$1;(statearr_24965_25029[(1)] = (19));
} else
{var statearr_24966_25030 = state_24954__$1;(statearr_24966_25030[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (3)))
{var inst_24952 = (state_24954[(2)]);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24954__$1,inst_24952);
} else
{if((state_val_24955 === (12)))
{var inst_24929 = (state_24954[(10)]);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(14),inst_24929);
} else
{if((state_val_24955 === (2)))
{var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(4),results);
} else
{if((state_val_24955 === (19)))
{var state_24954__$1 = state_24954;var statearr_24967_25031 = state_24954__$1;(statearr_24967_25031[(2)] = null);
(statearr_24967_25031[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (11)))
{var inst_24929 = (state_24954[(2)]);var state_24954__$1 = (function (){var statearr_24968 = state_24954;(statearr_24968[(10)] = inst_24929);
return statearr_24968;
})();var statearr_24969_25032 = state_24954__$1;(statearr_24969_25032[(2)] = null);
(statearr_24969_25032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (9)))
{var state_24954__$1 = state_24954;var statearr_24970_25033 = state_24954__$1;(statearr_24970_25033[(2)] = null);
(statearr_24970_25033[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (5)))
{var state_24954__$1 = state_24954;if(cljs.core.truth_(close_QMARK_))
{var statearr_24971_25034 = state_24954__$1;(statearr_24971_25034[(1)] = (8));
} else
{var statearr_24972_25035 = state_24954__$1;(statearr_24972_25035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (14)))
{var inst_24934 = (state_24954[(11)]);var inst_24932 = (state_24954[(8)]);var inst_24932__$1 = (state_24954[(2)]);var inst_24933 = (inst_24932__$1 == null);var inst_24934__$1 = cljs.core.not.call(null,inst_24933);var state_24954__$1 = (function (){var statearr_24973 = state_24954;(statearr_24973[(11)] = inst_24934__$1);
(statearr_24973[(8)] = inst_24932__$1);
return statearr_24973;
})();if(inst_24934__$1)
{var statearr_24974_25036 = state_24954__$1;(statearr_24974_25036[(1)] = (15));
} else
{var statearr_24975_25037 = state_24954__$1;(statearr_24975_25037[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (16)))
{var inst_24934 = (state_24954[(11)]);var state_24954__$1 = state_24954;var statearr_24976_25038 = state_24954__$1;(statearr_24976_25038[(2)] = inst_24934);
(statearr_24976_25038[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (10)))
{var inst_24926 = (state_24954[(2)]);var state_24954__$1 = state_24954;var statearr_24977_25039 = state_24954__$1;(statearr_24977_25039[(2)] = inst_24926);
(statearr_24977_25039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (18)))
{var inst_24937 = (state_24954[(2)]);var state_24954__$1 = state_24954;var statearr_24978_25040 = state_24954__$1;(statearr_24978_25040[(2)] = inst_24937);
(statearr_24978_25040[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24955 === (8)))
{var inst_24923 = cljs.core.async.close_BANG_.call(null,to);var state_24954__$1 = state_24954;var statearr_24979_25041 = state_24954__$1;(statearr_24979_25041[(2)] = inst_24923);
(statearr_24979_25041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto__,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto__,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24983 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24983[(0)] = state_machine__11462__auto__);
(statearr_24983[(1)] = (1));
return statearr_24983;
});
var state_machine__11462__auto____1 = (function (state_24954){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24954);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object))
{var ex__11465__auto__ = e24984;var statearr_24985_25042 = state_24954;(statearr_24985_25042[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25043 = state_24954;
state_24954 = G__25043;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24986 = f__11518__auto__.call(null);(statearr_24986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,jobs,results,process,async))
);
return c__11517__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___25144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25144,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25144,tc,fc){
return (function (state_25119){var state_val_25120 = (state_25119[(1)]);if((state_val_25120 === (7)))
{var inst_25115 = (state_25119[(2)]);var state_25119__$1 = state_25119;var statearr_25121_25145 = state_25119__$1;(statearr_25121_25145[(2)] = inst_25115);
(statearr_25121_25145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (1)))
{var state_25119__$1 = state_25119;var statearr_25122_25146 = state_25119__$1;(statearr_25122_25146[(2)] = null);
(statearr_25122_25146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (4)))
{var inst_25096 = (state_25119[(7)]);var inst_25096__$1 = (state_25119[(2)]);var inst_25097 = (inst_25096__$1 == null);var state_25119__$1 = (function (){var statearr_25123 = state_25119;(statearr_25123[(7)] = inst_25096__$1);
return statearr_25123;
})();if(cljs.core.truth_(inst_25097))
{var statearr_25124_25147 = state_25119__$1;(statearr_25124_25147[(1)] = (5));
} else
{var statearr_25125_25148 = state_25119__$1;(statearr_25125_25148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (13)))
{var state_25119__$1 = state_25119;var statearr_25126_25149 = state_25119__$1;(statearr_25126_25149[(2)] = null);
(statearr_25126_25149[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (6)))
{var inst_25096 = (state_25119[(7)]);var inst_25102 = p.call(null,inst_25096);var state_25119__$1 = state_25119;if(cljs.core.truth_(inst_25102))
{var statearr_25127_25150 = state_25119__$1;(statearr_25127_25150[(1)] = (9));
} else
{var statearr_25128_25151 = state_25119__$1;(statearr_25128_25151[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (3)))
{var inst_25117 = (state_25119[(2)]);var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25119__$1,inst_25117);
} else
{if((state_val_25120 === (12)))
{var state_25119__$1 = state_25119;var statearr_25129_25152 = state_25119__$1;(statearr_25129_25152[(2)] = null);
(statearr_25129_25152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (2)))
{var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25119__$1,(4),ch);
} else
{if((state_val_25120 === (11)))
{var inst_25096 = (state_25119[(7)]);var inst_25106 = (state_25119[(2)]);var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25119__$1,(8),inst_25106,inst_25096);
} else
{if((state_val_25120 === (9)))
{var state_25119__$1 = state_25119;var statearr_25130_25153 = state_25119__$1;(statearr_25130_25153[(2)] = tc);
(statearr_25130_25153[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (5)))
{var inst_25099 = cljs.core.async.close_BANG_.call(null,tc);var inst_25100 = cljs.core.async.close_BANG_.call(null,fc);var state_25119__$1 = (function (){var statearr_25131 = state_25119;(statearr_25131[(8)] = inst_25099);
return statearr_25131;
})();var statearr_25132_25154 = state_25119__$1;(statearr_25132_25154[(2)] = inst_25100);
(statearr_25132_25154[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (14)))
{var inst_25113 = (state_25119[(2)]);var state_25119__$1 = state_25119;var statearr_25133_25155 = state_25119__$1;(statearr_25133_25155[(2)] = inst_25113);
(statearr_25133_25155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (10)))
{var state_25119__$1 = state_25119;var statearr_25134_25156 = state_25119__$1;(statearr_25134_25156[(2)] = fc);
(statearr_25134_25156[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25120 === (8)))
{var inst_25108 = (state_25119[(2)]);var state_25119__$1 = state_25119;if(cljs.core.truth_(inst_25108))
{var statearr_25135_25157 = state_25119__$1;(statearr_25135_25157[(1)] = (12));
} else
{var statearr_25136_25158 = state_25119__$1;(statearr_25136_25158[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___25144,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___25144,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25140 = [null,null,null,null,null,null,null,null,null];(statearr_25140[(0)] = state_machine__11462__auto__);
(statearr_25140[(1)] = (1));
return statearr_25140;
});
var state_machine__11462__auto____1 = (function (state_25119){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25119);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25141){if((e25141 instanceof Object))
{var ex__11465__auto__ = e25141;var statearr_25142_25159 = state_25119;(statearr_25142_25159[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25141;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25160 = state_25119;
state_25119 = G__25160;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25119){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25144,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_25143 = f__11518__auto__.call(null);(statearr_25143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25144);
return statearr_25143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25144,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_25207){var state_val_25208 = (state_25207[(1)]);if((state_val_25208 === (7)))
{var inst_25203 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25209_25225 = state_25207__$1;(statearr_25209_25225[(2)] = inst_25203);
(statearr_25209_25225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (6)))
{var inst_25196 = (state_25207[(7)]);var inst_25193 = (state_25207[(8)]);var inst_25200 = f.call(null,inst_25193,inst_25196);var inst_25193__$1 = inst_25200;var state_25207__$1 = (function (){var statearr_25210 = state_25207;(statearr_25210[(8)] = inst_25193__$1);
return statearr_25210;
})();var statearr_25211_25226 = state_25207__$1;(statearr_25211_25226[(2)] = null);
(statearr_25211_25226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (5)))
{var inst_25193 = (state_25207[(8)]);var state_25207__$1 = state_25207;var statearr_25212_25227 = state_25207__$1;(statearr_25212_25227[(2)] = inst_25193);
(statearr_25212_25227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (4)))
{var inst_25196 = (state_25207[(7)]);var inst_25196__$1 = (state_25207[(2)]);var inst_25197 = (inst_25196__$1 == null);var state_25207__$1 = (function (){var statearr_25213 = state_25207;(statearr_25213[(7)] = inst_25196__$1);
return statearr_25213;
})();if(cljs.core.truth_(inst_25197))
{var statearr_25214_25228 = state_25207__$1;(statearr_25214_25228[(1)] = (5));
} else
{var statearr_25215_25229 = state_25207__$1;(statearr_25215_25229[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (3)))
{var inst_25205 = (state_25207[(2)]);var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25207__$1,inst_25205);
} else
{if((state_val_25208 === (2)))
{var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25207__$1,(4),ch);
} else
{if((state_val_25208 === (1)))
{var inst_25193 = init;var state_25207__$1 = (function (){var statearr_25216 = state_25207;(statearr_25216[(8)] = inst_25193);
return statearr_25216;
})();var statearr_25217_25230 = state_25207__$1;(statearr_25217_25230[(2)] = null);
(statearr_25217_25230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25221 = [null,null,null,null,null,null,null,null,null];(statearr_25221[(0)] = state_machine__11462__auto__);
(statearr_25221[(1)] = (1));
return statearr_25221;
});
var state_machine__11462__auto____1 = (function (state_25207){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25207);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object))
{var ex__11465__auto__ = e25222;var statearr_25223_25231 = state_25207;(statearr_25223_25231[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25232 = state_25207;
state_25207 = G__25232;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25224 = f__11518__auto__.call(null);(statearr_25224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_25306){var state_val_25307 = (state_25306[(1)]);if((state_val_25307 === (7)))
{var inst_25288 = (state_25306[(2)]);var state_25306__$1 = state_25306;var statearr_25308_25331 = state_25306__$1;(statearr_25308_25331[(2)] = inst_25288);
(statearr_25308_25331[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (1)))
{var inst_25282 = cljs.core.seq.call(null,coll);var inst_25283 = inst_25282;var state_25306__$1 = (function (){var statearr_25309 = state_25306;(statearr_25309[(7)] = inst_25283);
return statearr_25309;
})();var statearr_25310_25332 = state_25306__$1;(statearr_25310_25332[(2)] = null);
(statearr_25310_25332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (4)))
{var inst_25283 = (state_25306[(7)]);var inst_25286 = cljs.core.first.call(null,inst_25283);var state_25306__$1 = state_25306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25306__$1,(7),ch,inst_25286);
} else
{if((state_val_25307 === (13)))
{var inst_25300 = (state_25306[(2)]);var state_25306__$1 = state_25306;var statearr_25311_25333 = state_25306__$1;(statearr_25311_25333[(2)] = inst_25300);
(statearr_25311_25333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (6)))
{var inst_25291 = (state_25306[(2)]);var state_25306__$1 = state_25306;if(cljs.core.truth_(inst_25291))
{var statearr_25312_25334 = state_25306__$1;(statearr_25312_25334[(1)] = (8));
} else
{var statearr_25313_25335 = state_25306__$1;(statearr_25313_25335[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (3)))
{var inst_25304 = (state_25306[(2)]);var state_25306__$1 = state_25306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,inst_25304);
} else
{if((state_val_25307 === (12)))
{var state_25306__$1 = state_25306;var statearr_25314_25336 = state_25306__$1;(statearr_25314_25336[(2)] = null);
(statearr_25314_25336[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (2)))
{var inst_25283 = (state_25306[(7)]);var state_25306__$1 = state_25306;if(cljs.core.truth_(inst_25283))
{var statearr_25315_25337 = state_25306__$1;(statearr_25315_25337[(1)] = (4));
} else
{var statearr_25316_25338 = state_25306__$1;(statearr_25316_25338[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (11)))
{var inst_25297 = cljs.core.async.close_BANG_.call(null,ch);var state_25306__$1 = state_25306;var statearr_25317_25339 = state_25306__$1;(statearr_25317_25339[(2)] = inst_25297);
(statearr_25317_25339[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (9)))
{var state_25306__$1 = state_25306;if(cljs.core.truth_(close_QMARK_))
{var statearr_25318_25340 = state_25306__$1;(statearr_25318_25340[(1)] = (11));
} else
{var statearr_25319_25341 = state_25306__$1;(statearr_25319_25341[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (5)))
{var inst_25283 = (state_25306[(7)]);var state_25306__$1 = state_25306;var statearr_25320_25342 = state_25306__$1;(statearr_25320_25342[(2)] = inst_25283);
(statearr_25320_25342[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (10)))
{var inst_25302 = (state_25306[(2)]);var state_25306__$1 = state_25306;var statearr_25321_25343 = state_25306__$1;(statearr_25321_25343[(2)] = inst_25302);
(statearr_25321_25343[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (8)))
{var inst_25283 = (state_25306[(7)]);var inst_25293 = cljs.core.next.call(null,inst_25283);var inst_25283__$1 = inst_25293;var state_25306__$1 = (function (){var statearr_25322 = state_25306;(statearr_25322[(7)] = inst_25283__$1);
return statearr_25322;
})();var statearr_25323_25344 = state_25306__$1;(statearr_25323_25344[(2)] = null);
(statearr_25323_25344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25327 = [null,null,null,null,null,null,null,null];(statearr_25327[(0)] = state_machine__11462__auto__);
(statearr_25327[(1)] = (1));
return statearr_25327;
});
var state_machine__11462__auto____1 = (function (state_25306){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25306);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25328){if((e25328 instanceof Object))
{var ex__11465__auto__ = e25328;var statearr_25329_25345 = state_25306;(statearr_25329_25345[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25346 = state_25306;
state_25306 = G__25346;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25330 = f__11518__auto__.call(null);(statearr_25330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj25348 = {};return obj25348;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25350 = {};return obj25350;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25572 = (function (cs,ch,mult,meta25573){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25572.cljs$lang$type = true;
cljs.core.async.t25572.cljs$lang$ctorStr = "cljs.core.async/t25572";
cljs.core.async.t25572.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25572");
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25574){var self__ = this;
var _25574__$1 = this;return self__.meta25573;
});})(cs))
;
cljs.core.async.t25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25574,meta25573__$1){var self__ = this;
var _25574__$1 = this;return (new cljs.core.async.t25572(self__.cs,self__.ch,self__.mult,meta25573__$1));
});})(cs))
;
cljs.core.async.__GT_t25572 = ((function (cs){
return (function __GT_t25572(cs__$1,ch__$1,mult__$1,meta25573){return (new cljs.core.async.t25572(cs__$1,ch__$1,mult__$1,meta25573));
});})(cs))
;
}
return (new cljs.core.async.t25572(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25793 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25793,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25793,cs,m,dchan,dctr,done){
return (function (state_25705){var state_val_25706 = (state_25705[(1)]);if((state_val_25706 === (7)))
{var inst_25701 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25707_25794 = state_25705__$1;(statearr_25707_25794[(2)] = inst_25701);
(statearr_25707_25794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (20)))
{var inst_25606 = (state_25705[(7)]);var inst_25616 = cljs.core.first.call(null,inst_25606);var inst_25617 = cljs.core.nth.call(null,inst_25616,(0),null);var inst_25618 = cljs.core.nth.call(null,inst_25616,(1),null);var state_25705__$1 = (function (){var statearr_25708 = state_25705;(statearr_25708[(8)] = inst_25617);
return statearr_25708;
})();if(cljs.core.truth_(inst_25618))
{var statearr_25709_25795 = state_25705__$1;(statearr_25709_25795[(1)] = (22));
} else
{var statearr_25710_25796 = state_25705__$1;(statearr_25710_25796[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (27)))
{var inst_25653 = (state_25705[(9)]);var inst_25577 = (state_25705[(10)]);var inst_25648 = (state_25705[(11)]);var inst_25646 = (state_25705[(12)]);var inst_25653__$1 = cljs.core._nth.call(null,inst_25646,inst_25648);var inst_25654 = cljs.core.async.put_BANG_.call(null,inst_25653__$1,inst_25577,done);var state_25705__$1 = (function (){var statearr_25711 = state_25705;(statearr_25711[(9)] = inst_25653__$1);
return statearr_25711;
})();if(cljs.core.truth_(inst_25654))
{var statearr_25712_25797 = state_25705__$1;(statearr_25712_25797[(1)] = (30));
} else
{var statearr_25713_25798 = state_25705__$1;(statearr_25713_25798[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (1)))
{var state_25705__$1 = state_25705;var statearr_25714_25799 = state_25705__$1;(statearr_25714_25799[(2)] = null);
(statearr_25714_25799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (24)))
{var inst_25606 = (state_25705[(7)]);var inst_25623 = (state_25705[(2)]);var inst_25624 = cljs.core.next.call(null,inst_25606);var inst_25586 = inst_25624;var inst_25587 = null;var inst_25588 = (0);var inst_25589 = (0);var state_25705__$1 = (function (){var statearr_25715 = state_25705;(statearr_25715[(13)] = inst_25587);
(statearr_25715[(14)] = inst_25586);
(statearr_25715[(15)] = inst_25588);
(statearr_25715[(16)] = inst_25623);
(statearr_25715[(17)] = inst_25589);
return statearr_25715;
})();var statearr_25716_25800 = state_25705__$1;(statearr_25716_25800[(2)] = null);
(statearr_25716_25800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (39)))
{var state_25705__$1 = state_25705;var statearr_25720_25801 = state_25705__$1;(statearr_25720_25801[(2)] = null);
(statearr_25720_25801[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (4)))
{var inst_25577 = (state_25705[(10)]);var inst_25577__$1 = (state_25705[(2)]);var inst_25578 = (inst_25577__$1 == null);var state_25705__$1 = (function (){var statearr_25721 = state_25705;(statearr_25721[(10)] = inst_25577__$1);
return statearr_25721;
})();if(cljs.core.truth_(inst_25578))
{var statearr_25722_25802 = state_25705__$1;(statearr_25722_25802[(1)] = (5));
} else
{var statearr_25723_25803 = state_25705__$1;(statearr_25723_25803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (15)))
{var inst_25587 = (state_25705[(13)]);var inst_25586 = (state_25705[(14)]);var inst_25588 = (state_25705[(15)]);var inst_25589 = (state_25705[(17)]);var inst_25602 = (state_25705[(2)]);var inst_25603 = (inst_25589 + (1));var tmp25717 = inst_25587;var tmp25718 = inst_25586;var tmp25719 = inst_25588;var inst_25586__$1 = tmp25718;var inst_25587__$1 = tmp25717;var inst_25588__$1 = tmp25719;var inst_25589__$1 = inst_25603;var state_25705__$1 = (function (){var statearr_25724 = state_25705;(statearr_25724[(18)] = inst_25602);
(statearr_25724[(13)] = inst_25587__$1);
(statearr_25724[(14)] = inst_25586__$1);
(statearr_25724[(15)] = inst_25588__$1);
(statearr_25724[(17)] = inst_25589__$1);
return statearr_25724;
})();var statearr_25725_25804 = state_25705__$1;(statearr_25725_25804[(2)] = null);
(statearr_25725_25804[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (21)))
{var inst_25627 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25729_25805 = state_25705__$1;(statearr_25729_25805[(2)] = inst_25627);
(statearr_25729_25805[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (31)))
{var inst_25653 = (state_25705[(9)]);var inst_25657 = done.call(null,null);var inst_25658 = cljs.core.async.untap_STAR_.call(null,m,inst_25653);var state_25705__$1 = (function (){var statearr_25730 = state_25705;(statearr_25730[(19)] = inst_25657);
return statearr_25730;
})();var statearr_25731_25806 = state_25705__$1;(statearr_25731_25806[(2)] = inst_25658);
(statearr_25731_25806[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (32)))
{var inst_25647 = (state_25705[(20)]);var inst_25648 = (state_25705[(11)]);var inst_25646 = (state_25705[(12)]);var inst_25645 = (state_25705[(21)]);var inst_25660 = (state_25705[(2)]);var inst_25661 = (inst_25648 + (1));var tmp25726 = inst_25647;var tmp25727 = inst_25646;var tmp25728 = inst_25645;var inst_25645__$1 = tmp25728;var inst_25646__$1 = tmp25727;var inst_25647__$1 = tmp25726;var inst_25648__$1 = inst_25661;var state_25705__$1 = (function (){var statearr_25732 = state_25705;(statearr_25732[(20)] = inst_25647__$1);
(statearr_25732[(11)] = inst_25648__$1);
(statearr_25732[(22)] = inst_25660);
(statearr_25732[(12)] = inst_25646__$1);
(statearr_25732[(21)] = inst_25645__$1);
return statearr_25732;
})();var statearr_25733_25807 = state_25705__$1;(statearr_25733_25807[(2)] = null);
(statearr_25733_25807[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (40)))
{var inst_25673 = (state_25705[(23)]);var inst_25677 = done.call(null,null);var inst_25678 = cljs.core.async.untap_STAR_.call(null,m,inst_25673);var state_25705__$1 = (function (){var statearr_25734 = state_25705;(statearr_25734[(24)] = inst_25677);
return statearr_25734;
})();var statearr_25735_25808 = state_25705__$1;(statearr_25735_25808[(2)] = inst_25678);
(statearr_25735_25808[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (33)))
{var inst_25664 = (state_25705[(25)]);var inst_25666 = cljs.core.chunked_seq_QMARK_.call(null,inst_25664);var state_25705__$1 = state_25705;if(inst_25666)
{var statearr_25736_25809 = state_25705__$1;(statearr_25736_25809[(1)] = (36));
} else
{var statearr_25737_25810 = state_25705__$1;(statearr_25737_25810[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (13)))
{var inst_25596 = (state_25705[(26)]);var inst_25599 = cljs.core.async.close_BANG_.call(null,inst_25596);var state_25705__$1 = state_25705;var statearr_25738_25811 = state_25705__$1;(statearr_25738_25811[(2)] = inst_25599);
(statearr_25738_25811[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (22)))
{var inst_25617 = (state_25705[(8)]);var inst_25620 = cljs.core.async.close_BANG_.call(null,inst_25617);var state_25705__$1 = state_25705;var statearr_25739_25812 = state_25705__$1;(statearr_25739_25812[(2)] = inst_25620);
(statearr_25739_25812[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (36)))
{var inst_25664 = (state_25705[(25)]);var inst_25668 = cljs.core.chunk_first.call(null,inst_25664);var inst_25669 = cljs.core.chunk_rest.call(null,inst_25664);var inst_25670 = cljs.core.count.call(null,inst_25668);var inst_25645 = inst_25669;var inst_25646 = inst_25668;var inst_25647 = inst_25670;var inst_25648 = (0);var state_25705__$1 = (function (){var statearr_25740 = state_25705;(statearr_25740[(20)] = inst_25647);
(statearr_25740[(11)] = inst_25648);
(statearr_25740[(12)] = inst_25646);
(statearr_25740[(21)] = inst_25645);
return statearr_25740;
})();var statearr_25741_25813 = state_25705__$1;(statearr_25741_25813[(2)] = null);
(statearr_25741_25813[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (41)))
{var inst_25664 = (state_25705[(25)]);var inst_25680 = (state_25705[(2)]);var inst_25681 = cljs.core.next.call(null,inst_25664);var inst_25645 = inst_25681;var inst_25646 = null;var inst_25647 = (0);var inst_25648 = (0);var state_25705__$1 = (function (){var statearr_25742 = state_25705;(statearr_25742[(27)] = inst_25680);
(statearr_25742[(20)] = inst_25647);
(statearr_25742[(11)] = inst_25648);
(statearr_25742[(12)] = inst_25646);
(statearr_25742[(21)] = inst_25645);
return statearr_25742;
})();var statearr_25743_25814 = state_25705__$1;(statearr_25743_25814[(2)] = null);
(statearr_25743_25814[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (43)))
{var state_25705__$1 = state_25705;var statearr_25744_25815 = state_25705__$1;(statearr_25744_25815[(2)] = null);
(statearr_25744_25815[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (29)))
{var inst_25689 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25745_25816 = state_25705__$1;(statearr_25745_25816[(2)] = inst_25689);
(statearr_25745_25816[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (44)))
{var inst_25698 = (state_25705[(2)]);var state_25705__$1 = (function (){var statearr_25746 = state_25705;(statearr_25746[(28)] = inst_25698);
return statearr_25746;
})();var statearr_25747_25817 = state_25705__$1;(statearr_25747_25817[(2)] = null);
(statearr_25747_25817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (6)))
{var inst_25637 = (state_25705[(29)]);var inst_25636 = cljs.core.deref.call(null,cs);var inst_25637__$1 = cljs.core.keys.call(null,inst_25636);var inst_25638 = cljs.core.count.call(null,inst_25637__$1);var inst_25639 = cljs.core.reset_BANG_.call(null,dctr,inst_25638);var inst_25644 = cljs.core.seq.call(null,inst_25637__$1);var inst_25645 = inst_25644;var inst_25646 = null;var inst_25647 = (0);var inst_25648 = (0);var state_25705__$1 = (function (){var statearr_25748 = state_25705;(statearr_25748[(20)] = inst_25647);
(statearr_25748[(11)] = inst_25648);
(statearr_25748[(30)] = inst_25639);
(statearr_25748[(29)] = inst_25637__$1);
(statearr_25748[(12)] = inst_25646);
(statearr_25748[(21)] = inst_25645);
return statearr_25748;
})();var statearr_25749_25818 = state_25705__$1;(statearr_25749_25818[(2)] = null);
(statearr_25749_25818[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (28)))
{var inst_25664 = (state_25705[(25)]);var inst_25645 = (state_25705[(21)]);var inst_25664__$1 = cljs.core.seq.call(null,inst_25645);var state_25705__$1 = (function (){var statearr_25750 = state_25705;(statearr_25750[(25)] = inst_25664__$1);
return statearr_25750;
})();if(inst_25664__$1)
{var statearr_25751_25819 = state_25705__$1;(statearr_25751_25819[(1)] = (33));
} else
{var statearr_25752_25820 = state_25705__$1;(statearr_25752_25820[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (25)))
{var inst_25647 = (state_25705[(20)]);var inst_25648 = (state_25705[(11)]);var inst_25650 = (inst_25648 < inst_25647);var inst_25651 = inst_25650;var state_25705__$1 = state_25705;if(cljs.core.truth_(inst_25651))
{var statearr_25753_25821 = state_25705__$1;(statearr_25753_25821[(1)] = (27));
} else
{var statearr_25754_25822 = state_25705__$1;(statearr_25754_25822[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (34)))
{var state_25705__$1 = state_25705;var statearr_25755_25823 = state_25705__$1;(statearr_25755_25823[(2)] = null);
(statearr_25755_25823[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (17)))
{var state_25705__$1 = state_25705;var statearr_25756_25824 = state_25705__$1;(statearr_25756_25824[(2)] = null);
(statearr_25756_25824[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (3)))
{var inst_25703 = (state_25705[(2)]);var state_25705__$1 = state_25705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25705__$1,inst_25703);
} else
{if((state_val_25706 === (12)))
{var inst_25632 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25757_25825 = state_25705__$1;(statearr_25757_25825[(2)] = inst_25632);
(statearr_25757_25825[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (2)))
{var state_25705__$1 = state_25705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25705__$1,(4),ch);
} else
{if((state_val_25706 === (23)))
{var state_25705__$1 = state_25705;var statearr_25758_25826 = state_25705__$1;(statearr_25758_25826[(2)] = null);
(statearr_25758_25826[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (35)))
{var inst_25687 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25759_25827 = state_25705__$1;(statearr_25759_25827[(2)] = inst_25687);
(statearr_25759_25827[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (19)))
{var inst_25606 = (state_25705[(7)]);var inst_25610 = cljs.core.chunk_first.call(null,inst_25606);var inst_25611 = cljs.core.chunk_rest.call(null,inst_25606);var inst_25612 = cljs.core.count.call(null,inst_25610);var inst_25586 = inst_25611;var inst_25587 = inst_25610;var inst_25588 = inst_25612;var inst_25589 = (0);var state_25705__$1 = (function (){var statearr_25760 = state_25705;(statearr_25760[(13)] = inst_25587);
(statearr_25760[(14)] = inst_25586);
(statearr_25760[(15)] = inst_25588);
(statearr_25760[(17)] = inst_25589);
return statearr_25760;
})();var statearr_25761_25828 = state_25705__$1;(statearr_25761_25828[(2)] = null);
(statearr_25761_25828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (11)))
{var inst_25586 = (state_25705[(14)]);var inst_25606 = (state_25705[(7)]);var inst_25606__$1 = cljs.core.seq.call(null,inst_25586);var state_25705__$1 = (function (){var statearr_25762 = state_25705;(statearr_25762[(7)] = inst_25606__$1);
return statearr_25762;
})();if(inst_25606__$1)
{var statearr_25763_25829 = state_25705__$1;(statearr_25763_25829[(1)] = (16));
} else
{var statearr_25764_25830 = state_25705__$1;(statearr_25764_25830[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (9)))
{var inst_25634 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25765_25831 = state_25705__$1;(statearr_25765_25831[(2)] = inst_25634);
(statearr_25765_25831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (5)))
{var inst_25584 = cljs.core.deref.call(null,cs);var inst_25585 = cljs.core.seq.call(null,inst_25584);var inst_25586 = inst_25585;var inst_25587 = null;var inst_25588 = (0);var inst_25589 = (0);var state_25705__$1 = (function (){var statearr_25766 = state_25705;(statearr_25766[(13)] = inst_25587);
(statearr_25766[(14)] = inst_25586);
(statearr_25766[(15)] = inst_25588);
(statearr_25766[(17)] = inst_25589);
return statearr_25766;
})();var statearr_25767_25832 = state_25705__$1;(statearr_25767_25832[(2)] = null);
(statearr_25767_25832[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (14)))
{var state_25705__$1 = state_25705;var statearr_25768_25833 = state_25705__$1;(statearr_25768_25833[(2)] = null);
(statearr_25768_25833[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (45)))
{var inst_25695 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25769_25834 = state_25705__$1;(statearr_25769_25834[(2)] = inst_25695);
(statearr_25769_25834[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (26)))
{var inst_25637 = (state_25705[(29)]);var inst_25691 = (state_25705[(2)]);var inst_25692 = cljs.core.seq.call(null,inst_25637);var state_25705__$1 = (function (){var statearr_25770 = state_25705;(statearr_25770[(31)] = inst_25691);
return statearr_25770;
})();if(inst_25692)
{var statearr_25771_25835 = state_25705__$1;(statearr_25771_25835[(1)] = (42));
} else
{var statearr_25772_25836 = state_25705__$1;(statearr_25772_25836[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (16)))
{var inst_25606 = (state_25705[(7)]);var inst_25608 = cljs.core.chunked_seq_QMARK_.call(null,inst_25606);var state_25705__$1 = state_25705;if(inst_25608)
{var statearr_25773_25837 = state_25705__$1;(statearr_25773_25837[(1)] = (19));
} else
{var statearr_25774_25838 = state_25705__$1;(statearr_25774_25838[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (38)))
{var inst_25684 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25775_25839 = state_25705__$1;(statearr_25775_25839[(2)] = inst_25684);
(statearr_25775_25839[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (30)))
{var state_25705__$1 = state_25705;var statearr_25776_25840 = state_25705__$1;(statearr_25776_25840[(2)] = null);
(statearr_25776_25840[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (10)))
{var inst_25587 = (state_25705[(13)]);var inst_25589 = (state_25705[(17)]);var inst_25595 = cljs.core._nth.call(null,inst_25587,inst_25589);var inst_25596 = cljs.core.nth.call(null,inst_25595,(0),null);var inst_25597 = cljs.core.nth.call(null,inst_25595,(1),null);var state_25705__$1 = (function (){var statearr_25777 = state_25705;(statearr_25777[(26)] = inst_25596);
return statearr_25777;
})();if(cljs.core.truth_(inst_25597))
{var statearr_25778_25841 = state_25705__$1;(statearr_25778_25841[(1)] = (13));
} else
{var statearr_25779_25842 = state_25705__$1;(statearr_25779_25842[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (18)))
{var inst_25630 = (state_25705[(2)]);var state_25705__$1 = state_25705;var statearr_25780_25843 = state_25705__$1;(statearr_25780_25843[(2)] = inst_25630);
(statearr_25780_25843[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (42)))
{var state_25705__$1 = state_25705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25705__$1,(45),dchan);
} else
{if((state_val_25706 === (37)))
{var inst_25577 = (state_25705[(10)]);var inst_25673 = (state_25705[(23)]);var inst_25664 = (state_25705[(25)]);var inst_25673__$1 = cljs.core.first.call(null,inst_25664);var inst_25674 = cljs.core.async.put_BANG_.call(null,inst_25673__$1,inst_25577,done);var state_25705__$1 = (function (){var statearr_25781 = state_25705;(statearr_25781[(23)] = inst_25673__$1);
return statearr_25781;
})();if(cljs.core.truth_(inst_25674))
{var statearr_25782_25844 = state_25705__$1;(statearr_25782_25844[(1)] = (39));
} else
{var statearr_25783_25845 = state_25705__$1;(statearr_25783_25845[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25706 === (8)))
{var inst_25588 = (state_25705[(15)]);var inst_25589 = (state_25705[(17)]);var inst_25591 = (inst_25589 < inst_25588);var inst_25592 = inst_25591;var state_25705__$1 = state_25705;if(cljs.core.truth_(inst_25592))
{var statearr_25784_25846 = state_25705__$1;(statearr_25784_25846[(1)] = (10));
} else
{var statearr_25785_25847 = state_25705__$1;(statearr_25785_25847[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___25793,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25793,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25789[(0)] = state_machine__11462__auto__);
(statearr_25789[(1)] = (1));
return statearr_25789;
});
var state_machine__11462__auto____1 = (function (state_25705){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25705);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25790){if((e25790 instanceof Object))
{var ex__11465__auto__ = e25790;var statearr_25791_25848 = state_25705;(statearr_25791_25848[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25849 = state_25705;
state_25705 = G__25849;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25705){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25793,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25792 = f__11518__auto__.call(null);(statearr_25792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25793);
return statearr_25792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25793,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj25851 = {};return obj25851;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25852){var map__25857 = p__25852;var map__25857__$1 = ((cljs.core.seq_QMARK_.call(null,map__25857))?cljs.core.apply.call(null,cljs.core.hash_map,map__25857):map__25857);var opts = map__25857__$1;var statearr_25858_25861 = state;(statearr_25858_25861[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25857,map__25857__$1,opts){
return (function (val){var statearr_25859_25862 = state;(statearr_25859_25862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25857,map__25857__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25860_25863 = state;(statearr_25860_25863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25852 = null;if (arguments.length > 3) {
  p__25852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25852);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25864){
var state = cljs.core.first(arglist__25864);
arglist__25864 = cljs.core.next(arglist__25864);
var cont_block = cljs.core.first(arglist__25864);
arglist__25864 = cljs.core.next(arglist__25864);
var ports = cljs.core.first(arglist__25864);
var p__25852 = cljs.core.rest(arglist__25864);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25852);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25984 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25985){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25985 = meta25985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25984.cljs$lang$type = true;
cljs.core.async.t25984.cljs$lang$ctorStr = "cljs.core.async/t25984";
cljs.core.async.t25984.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25984");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25986){var self__ = this;
var _25986__$1 = this;return self__.meta25985;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25986,meta25985__$1){var self__ = this;
var _25986__$1 = this;return (new cljs.core.async.t25984(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25985__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25984 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25985){return (new cljs.core.async.t25984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25985));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25984(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___26103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26056){var state_val_26057 = (state_26056[(1)]);if((state_val_26057 === (7)))
{var inst_26000 = (state_26056[(7)]);var inst_26005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26000);var state_26056__$1 = state_26056;var statearr_26058_26104 = state_26056__$1;(statearr_26058_26104[(2)] = inst_26005);
(statearr_26058_26104[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (20)))
{var inst_26015 = (state_26056[(8)]);var state_26056__$1 = state_26056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26056__$1,(23),out,inst_26015);
} else
{if((state_val_26057 === (1)))
{var inst_25990 = (state_26056[(9)]);var inst_25990__$1 = calc_state.call(null);var inst_25991 = cljs.core.seq_QMARK_.call(null,inst_25990__$1);var state_26056__$1 = (function (){var statearr_26059 = state_26056;(statearr_26059[(9)] = inst_25990__$1);
return statearr_26059;
})();if(inst_25991)
{var statearr_26060_26105 = state_26056__$1;(statearr_26060_26105[(1)] = (2));
} else
{var statearr_26061_26106 = state_26056__$1;(statearr_26061_26106[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (24)))
{var inst_26008 = (state_26056[(10)]);var inst_26000 = inst_26008;var state_26056__$1 = (function (){var statearr_26062 = state_26056;(statearr_26062[(7)] = inst_26000);
return statearr_26062;
})();var statearr_26063_26107 = state_26056__$1;(statearr_26063_26107[(2)] = null);
(statearr_26063_26107[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (4)))
{var inst_25990 = (state_26056[(9)]);var inst_25996 = (state_26056[(2)]);var inst_25997 = cljs.core.get.call(null,inst_25996,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25998 = cljs.core.get.call(null,inst_25996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25999 = cljs.core.get.call(null,inst_25996,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26000 = inst_25990;var state_26056__$1 = (function (){var statearr_26064 = state_26056;(statearr_26064[(11)] = inst_25999);
(statearr_26064[(12)] = inst_25997);
(statearr_26064[(7)] = inst_26000);
(statearr_26064[(13)] = inst_25998);
return statearr_26064;
})();var statearr_26065_26108 = state_26056__$1;(statearr_26065_26108[(2)] = null);
(statearr_26065_26108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (15)))
{var state_26056__$1 = state_26056;var statearr_26066_26109 = state_26056__$1;(statearr_26066_26109[(2)] = null);
(statearr_26066_26109[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (21)))
{var inst_26008 = (state_26056[(10)]);var inst_26000 = inst_26008;var state_26056__$1 = (function (){var statearr_26067 = state_26056;(statearr_26067[(7)] = inst_26000);
return statearr_26067;
})();var statearr_26068_26110 = state_26056__$1;(statearr_26068_26110[(2)] = null);
(statearr_26068_26110[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (13)))
{var inst_26052 = (state_26056[(2)]);var state_26056__$1 = state_26056;var statearr_26069_26111 = state_26056__$1;(statearr_26069_26111[(2)] = inst_26052);
(statearr_26069_26111[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (22)))
{var inst_26050 = (state_26056[(2)]);var state_26056__$1 = state_26056;var statearr_26070_26112 = state_26056__$1;(statearr_26070_26112[(2)] = inst_26050);
(statearr_26070_26112[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (6)))
{var inst_26054 = (state_26056[(2)]);var state_26056__$1 = state_26056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26056__$1,inst_26054);
} else
{if((state_val_26057 === (25)))
{var state_26056__$1 = state_26056;var statearr_26071_26113 = state_26056__$1;(statearr_26071_26113[(2)] = null);
(statearr_26071_26113[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (17)))
{var inst_26030 = (state_26056[(14)]);var state_26056__$1 = state_26056;var statearr_26072_26114 = state_26056__$1;(statearr_26072_26114[(2)] = inst_26030);
(statearr_26072_26114[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (3)))
{var inst_25990 = (state_26056[(9)]);var state_26056__$1 = state_26056;var statearr_26073_26115 = state_26056__$1;(statearr_26073_26115[(2)] = inst_25990);
(statearr_26073_26115[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (12)))
{var inst_26030 = (state_26056[(14)]);var inst_26016 = (state_26056[(15)]);var inst_26011 = (state_26056[(16)]);var inst_26030__$1 = inst_26011.call(null,inst_26016);var state_26056__$1 = (function (){var statearr_26074 = state_26056;(statearr_26074[(14)] = inst_26030__$1);
return statearr_26074;
})();if(cljs.core.truth_(inst_26030__$1))
{var statearr_26075_26116 = state_26056__$1;(statearr_26075_26116[(1)] = (17));
} else
{var statearr_26076_26117 = state_26056__$1;(statearr_26076_26117[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (2)))
{var inst_25990 = (state_26056[(9)]);var inst_25993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25990);var state_26056__$1 = state_26056;var statearr_26077_26118 = state_26056__$1;(statearr_26077_26118[(2)] = inst_25993);
(statearr_26077_26118[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (23)))
{var inst_26041 = (state_26056[(2)]);var state_26056__$1 = state_26056;if(cljs.core.truth_(inst_26041))
{var statearr_26078_26119 = state_26056__$1;(statearr_26078_26119[(1)] = (24));
} else
{var statearr_26079_26120 = state_26056__$1;(statearr_26079_26120[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (19)))
{var inst_26038 = (state_26056[(2)]);var state_26056__$1 = state_26056;if(cljs.core.truth_(inst_26038))
{var statearr_26080_26121 = state_26056__$1;(statearr_26080_26121[(1)] = (20));
} else
{var statearr_26081_26122 = state_26056__$1;(statearr_26081_26122[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (11)))
{var inst_26015 = (state_26056[(8)]);var inst_26021 = (inst_26015 == null);var state_26056__$1 = state_26056;if(cljs.core.truth_(inst_26021))
{var statearr_26082_26123 = state_26056__$1;(statearr_26082_26123[(1)] = (14));
} else
{var statearr_26083_26124 = state_26056__$1;(statearr_26083_26124[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (9)))
{var inst_26008 = (state_26056[(10)]);var inst_26008__$1 = (state_26056[(2)]);var inst_26009 = cljs.core.get.call(null,inst_26008__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26010 = cljs.core.get.call(null,inst_26008__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26011 = cljs.core.get.call(null,inst_26008__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26056__$1 = (function (){var statearr_26084 = state_26056;(statearr_26084[(17)] = inst_26010);
(statearr_26084[(10)] = inst_26008__$1);
(statearr_26084[(16)] = inst_26011);
return statearr_26084;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_26056__$1,(10),inst_26009);
} else
{if((state_val_26057 === (5)))
{var inst_26000 = (state_26056[(7)]);var inst_26003 = cljs.core.seq_QMARK_.call(null,inst_26000);var state_26056__$1 = state_26056;if(inst_26003)
{var statearr_26085_26125 = state_26056__$1;(statearr_26085_26125[(1)] = (7));
} else
{var statearr_26086_26126 = state_26056__$1;(statearr_26086_26126[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (14)))
{var inst_26016 = (state_26056[(15)]);var inst_26023 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26016);var state_26056__$1 = state_26056;var statearr_26087_26127 = state_26056__$1;(statearr_26087_26127[(2)] = inst_26023);
(statearr_26087_26127[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (26)))
{var inst_26046 = (state_26056[(2)]);var state_26056__$1 = state_26056;var statearr_26088_26128 = state_26056__$1;(statearr_26088_26128[(2)] = inst_26046);
(statearr_26088_26128[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (16)))
{var inst_26026 = (state_26056[(2)]);var inst_26027 = calc_state.call(null);var inst_26000 = inst_26027;var state_26056__$1 = (function (){var statearr_26089 = state_26056;(statearr_26089[(18)] = inst_26026);
(statearr_26089[(7)] = inst_26000);
return statearr_26089;
})();var statearr_26090_26129 = state_26056__$1;(statearr_26090_26129[(2)] = null);
(statearr_26090_26129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (10)))
{var inst_26015 = (state_26056[(8)]);var inst_26016 = (state_26056[(15)]);var inst_26014 = (state_26056[(2)]);var inst_26015__$1 = cljs.core.nth.call(null,inst_26014,(0),null);var inst_26016__$1 = cljs.core.nth.call(null,inst_26014,(1),null);var inst_26017 = (inst_26015__$1 == null);var inst_26018 = cljs.core._EQ_.call(null,inst_26016__$1,change);var inst_26019 = (inst_26017) || (inst_26018);var state_26056__$1 = (function (){var statearr_26091 = state_26056;(statearr_26091[(8)] = inst_26015__$1);
(statearr_26091[(15)] = inst_26016__$1);
return statearr_26091;
})();if(cljs.core.truth_(inst_26019))
{var statearr_26092_26130 = state_26056__$1;(statearr_26092_26130[(1)] = (11));
} else
{var statearr_26093_26131 = state_26056__$1;(statearr_26093_26131[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (18)))
{var inst_26010 = (state_26056[(17)]);var inst_26016 = (state_26056[(15)]);var inst_26011 = (state_26056[(16)]);var inst_26033 = cljs.core.empty_QMARK_.call(null,inst_26011);var inst_26034 = inst_26010.call(null,inst_26016);var inst_26035 = cljs.core.not.call(null,inst_26034);var inst_26036 = (inst_26033) && (inst_26035);var state_26056__$1 = state_26056;var statearr_26094_26132 = state_26056__$1;(statearr_26094_26132[(2)] = inst_26036);
(statearr_26094_26132[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26057 === (8)))
{var inst_26000 = (state_26056[(7)]);var state_26056__$1 = state_26056;var statearr_26095_26133 = state_26056__$1;(statearr_26095_26133[(2)] = inst_26000);
(statearr_26095_26133[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26099[(0)] = state_machine__11462__auto__);
(statearr_26099[(1)] = (1));
return statearr_26099;
});
var state_machine__11462__auto____1 = (function (state_26056){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26056);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26100){if((e26100 instanceof Object))
{var ex__11465__auto__ = e26100;var statearr_26101_26134 = state_26056;(statearr_26101_26134[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26135 = state_26056;
state_26056 = G__26135;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26056){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_26102 = f__11518__auto__.call(null);(statearr_26102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26103);
return statearr_26102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj26137 = {};return obj26137;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__26138_SHARP_){if(cljs.core.truth_(p1__26138_SHARP_.call(null,topic)))
{return p1__26138_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26138_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26261 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26262){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26262 = meta26262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26261.cljs$lang$type = true;
cljs.core.async.t26261.cljs$lang$ctorStr = "cljs.core.async/t26261";
cljs.core.async.t26261.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26261");
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26263){var self__ = this;
var _26263__$1 = this;return self__.meta26262;
});})(mults,ensure_mult))
;
cljs.core.async.t26261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26263,meta26262__$1){var self__ = this;
var _26263__$1 = this;return (new cljs.core.async.t26261(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26262__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26261 = ((function (mults,ensure_mult){
return (function __GT_t26261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26262){return (new cljs.core.async.t26261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26262));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26261(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26383,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26383,mults,ensure_mult,p){
return (function (state_26335){var state_val_26336 = (state_26335[(1)]);if((state_val_26336 === (7)))
{var inst_26331 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26337_26384 = state_26335__$1;(statearr_26337_26384[(2)] = inst_26331);
(statearr_26337_26384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (20)))
{var state_26335__$1 = state_26335;var statearr_26338_26385 = state_26335__$1;(statearr_26338_26385[(2)] = null);
(statearr_26338_26385[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (1)))
{var state_26335__$1 = state_26335;var statearr_26339_26386 = state_26335__$1;(statearr_26339_26386[(2)] = null);
(statearr_26339_26386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (24)))
{var inst_26314 = (state_26335[(7)]);var inst_26323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26314);var state_26335__$1 = state_26335;var statearr_26340_26387 = state_26335__$1;(statearr_26340_26387[(2)] = inst_26323);
(statearr_26340_26387[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (4)))
{var inst_26266 = (state_26335[(8)]);var inst_26266__$1 = (state_26335[(2)]);var inst_26267 = (inst_26266__$1 == null);var state_26335__$1 = (function (){var statearr_26341 = state_26335;(statearr_26341[(8)] = inst_26266__$1);
return statearr_26341;
})();if(cljs.core.truth_(inst_26267))
{var statearr_26342_26388 = state_26335__$1;(statearr_26342_26388[(1)] = (5));
} else
{var statearr_26343_26389 = state_26335__$1;(statearr_26343_26389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (15)))
{var inst_26308 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26344_26390 = state_26335__$1;(statearr_26344_26390[(2)] = inst_26308);
(statearr_26344_26390[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (21)))
{var inst_26328 = (state_26335[(2)]);var state_26335__$1 = (function (){var statearr_26345 = state_26335;(statearr_26345[(9)] = inst_26328);
return statearr_26345;
})();var statearr_26346_26391 = state_26335__$1;(statearr_26346_26391[(2)] = null);
(statearr_26346_26391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (13)))
{var inst_26290 = (state_26335[(10)]);var inst_26292 = cljs.core.chunked_seq_QMARK_.call(null,inst_26290);var state_26335__$1 = state_26335;if(inst_26292)
{var statearr_26347_26392 = state_26335__$1;(statearr_26347_26392[(1)] = (16));
} else
{var statearr_26348_26393 = state_26335__$1;(statearr_26348_26393[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (22)))
{var inst_26320 = (state_26335[(2)]);var state_26335__$1 = state_26335;if(cljs.core.truth_(inst_26320))
{var statearr_26349_26394 = state_26335__$1;(statearr_26349_26394[(1)] = (23));
} else
{var statearr_26350_26395 = state_26335__$1;(statearr_26350_26395[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (6)))
{var inst_26314 = (state_26335[(7)]);var inst_26316 = (state_26335[(11)]);var inst_26266 = (state_26335[(8)]);var inst_26314__$1 = topic_fn.call(null,inst_26266);var inst_26315 = cljs.core.deref.call(null,mults);var inst_26316__$1 = cljs.core.get.call(null,inst_26315,inst_26314__$1);var state_26335__$1 = (function (){var statearr_26351 = state_26335;(statearr_26351[(7)] = inst_26314__$1);
(statearr_26351[(11)] = inst_26316__$1);
return statearr_26351;
})();if(cljs.core.truth_(inst_26316__$1))
{var statearr_26352_26396 = state_26335__$1;(statearr_26352_26396[(1)] = (19));
} else
{var statearr_26353_26397 = state_26335__$1;(statearr_26353_26397[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (25)))
{var inst_26325 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26354_26398 = state_26335__$1;(statearr_26354_26398[(2)] = inst_26325);
(statearr_26354_26398[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (17)))
{var inst_26290 = (state_26335[(10)]);var inst_26299 = cljs.core.first.call(null,inst_26290);var inst_26300 = cljs.core.async.muxch_STAR_.call(null,inst_26299);var inst_26301 = cljs.core.async.close_BANG_.call(null,inst_26300);var inst_26302 = cljs.core.next.call(null,inst_26290);var inst_26276 = inst_26302;var inst_26277 = null;var inst_26278 = (0);var inst_26279 = (0);var state_26335__$1 = (function (){var statearr_26355 = state_26335;(statearr_26355[(12)] = inst_26301);
(statearr_26355[(13)] = inst_26279);
(statearr_26355[(14)] = inst_26278);
(statearr_26355[(15)] = inst_26277);
(statearr_26355[(16)] = inst_26276);
return statearr_26355;
})();var statearr_26356_26399 = state_26335__$1;(statearr_26356_26399[(2)] = null);
(statearr_26356_26399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (3)))
{var inst_26333 = (state_26335[(2)]);var state_26335__$1 = state_26335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26335__$1,inst_26333);
} else
{if((state_val_26336 === (12)))
{var inst_26310 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26357_26400 = state_26335__$1;(statearr_26357_26400[(2)] = inst_26310);
(statearr_26357_26400[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (2)))
{var state_26335__$1 = state_26335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26335__$1,(4),ch);
} else
{if((state_val_26336 === (23)))
{var state_26335__$1 = state_26335;var statearr_26358_26401 = state_26335__$1;(statearr_26358_26401[(2)] = null);
(statearr_26358_26401[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (19)))
{var inst_26316 = (state_26335[(11)]);var inst_26266 = (state_26335[(8)]);var inst_26318 = cljs.core.async.muxch_STAR_.call(null,inst_26316);var state_26335__$1 = state_26335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26335__$1,(22),inst_26318,inst_26266);
} else
{if((state_val_26336 === (11)))
{var inst_26290 = (state_26335[(10)]);var inst_26276 = (state_26335[(16)]);var inst_26290__$1 = cljs.core.seq.call(null,inst_26276);var state_26335__$1 = (function (){var statearr_26359 = state_26335;(statearr_26359[(10)] = inst_26290__$1);
return statearr_26359;
})();if(inst_26290__$1)
{var statearr_26360_26402 = state_26335__$1;(statearr_26360_26402[(1)] = (13));
} else
{var statearr_26361_26403 = state_26335__$1;(statearr_26361_26403[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (9)))
{var inst_26312 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26362_26404 = state_26335__$1;(statearr_26362_26404[(2)] = inst_26312);
(statearr_26362_26404[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (5)))
{var inst_26273 = cljs.core.deref.call(null,mults);var inst_26274 = cljs.core.vals.call(null,inst_26273);var inst_26275 = cljs.core.seq.call(null,inst_26274);var inst_26276 = inst_26275;var inst_26277 = null;var inst_26278 = (0);var inst_26279 = (0);var state_26335__$1 = (function (){var statearr_26363 = state_26335;(statearr_26363[(13)] = inst_26279);
(statearr_26363[(14)] = inst_26278);
(statearr_26363[(15)] = inst_26277);
(statearr_26363[(16)] = inst_26276);
return statearr_26363;
})();var statearr_26364_26405 = state_26335__$1;(statearr_26364_26405[(2)] = null);
(statearr_26364_26405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (14)))
{var state_26335__$1 = state_26335;var statearr_26368_26406 = state_26335__$1;(statearr_26368_26406[(2)] = null);
(statearr_26368_26406[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (16)))
{var inst_26290 = (state_26335[(10)]);var inst_26294 = cljs.core.chunk_first.call(null,inst_26290);var inst_26295 = cljs.core.chunk_rest.call(null,inst_26290);var inst_26296 = cljs.core.count.call(null,inst_26294);var inst_26276 = inst_26295;var inst_26277 = inst_26294;var inst_26278 = inst_26296;var inst_26279 = (0);var state_26335__$1 = (function (){var statearr_26369 = state_26335;(statearr_26369[(13)] = inst_26279);
(statearr_26369[(14)] = inst_26278);
(statearr_26369[(15)] = inst_26277);
(statearr_26369[(16)] = inst_26276);
return statearr_26369;
})();var statearr_26370_26407 = state_26335__$1;(statearr_26370_26407[(2)] = null);
(statearr_26370_26407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (10)))
{var inst_26279 = (state_26335[(13)]);var inst_26278 = (state_26335[(14)]);var inst_26277 = (state_26335[(15)]);var inst_26276 = (state_26335[(16)]);var inst_26284 = cljs.core._nth.call(null,inst_26277,inst_26279);var inst_26285 = cljs.core.async.muxch_STAR_.call(null,inst_26284);var inst_26286 = cljs.core.async.close_BANG_.call(null,inst_26285);var inst_26287 = (inst_26279 + (1));var tmp26365 = inst_26278;var tmp26366 = inst_26277;var tmp26367 = inst_26276;var inst_26276__$1 = tmp26367;var inst_26277__$1 = tmp26366;var inst_26278__$1 = tmp26365;var inst_26279__$1 = inst_26287;var state_26335__$1 = (function (){var statearr_26371 = state_26335;(statearr_26371[(13)] = inst_26279__$1);
(statearr_26371[(17)] = inst_26286);
(statearr_26371[(14)] = inst_26278__$1);
(statearr_26371[(15)] = inst_26277__$1);
(statearr_26371[(16)] = inst_26276__$1);
return statearr_26371;
})();var statearr_26372_26408 = state_26335__$1;(statearr_26372_26408[(2)] = null);
(statearr_26372_26408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (18)))
{var inst_26305 = (state_26335[(2)]);var state_26335__$1 = state_26335;var statearr_26373_26409 = state_26335__$1;(statearr_26373_26409[(2)] = inst_26305);
(statearr_26373_26409[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26336 === (8)))
{var inst_26279 = (state_26335[(13)]);var inst_26278 = (state_26335[(14)]);var inst_26281 = (inst_26279 < inst_26278);var inst_26282 = inst_26281;var state_26335__$1 = state_26335;if(cljs.core.truth_(inst_26282))
{var statearr_26374_26410 = state_26335__$1;(statearr_26374_26410[(1)] = (10));
} else
{var statearr_26375_26411 = state_26335__$1;(statearr_26375_26411[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26383,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26383,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26379[(0)] = state_machine__11462__auto__);
(statearr_26379[(1)] = (1));
return statearr_26379;
});
var state_machine__11462__auto____1 = (function (state_26335){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26335);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26380){if((e26380 instanceof Object))
{var ex__11465__auto__ = e26380;var statearr_26381_26412 = state_26335;(statearr_26381_26412[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26413 = state_26335;
state_26335 = G__26413;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26335){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26383,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26382 = f__11518__auto__.call(null);(statearr_26382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26383);
return statearr_26382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26383,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11517__auto___26550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26520){var state_val_26521 = (state_26520[(1)]);if((state_val_26521 === (7)))
{var state_26520__$1 = state_26520;var statearr_26522_26551 = state_26520__$1;(statearr_26522_26551[(2)] = null);
(statearr_26522_26551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (1)))
{var state_26520__$1 = state_26520;var statearr_26523_26552 = state_26520__$1;(statearr_26523_26552[(2)] = null);
(statearr_26523_26552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (4)))
{var inst_26484 = (state_26520[(7)]);var inst_26486 = (inst_26484 < cnt);var state_26520__$1 = state_26520;if(cljs.core.truth_(inst_26486))
{var statearr_26524_26553 = state_26520__$1;(statearr_26524_26553[(1)] = (6));
} else
{var statearr_26525_26554 = state_26520__$1;(statearr_26525_26554[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (15)))
{var inst_26516 = (state_26520[(2)]);var state_26520__$1 = state_26520;var statearr_26526_26555 = state_26520__$1;(statearr_26526_26555[(2)] = inst_26516);
(statearr_26526_26555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (13)))
{var inst_26509 = cljs.core.async.close_BANG_.call(null,out);var state_26520__$1 = state_26520;var statearr_26527_26556 = state_26520__$1;(statearr_26527_26556[(2)] = inst_26509);
(statearr_26527_26556[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (6)))
{var state_26520__$1 = state_26520;var statearr_26528_26557 = state_26520__$1;(statearr_26528_26557[(2)] = null);
(statearr_26528_26557[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (3)))
{var inst_26518 = (state_26520[(2)]);var state_26520__$1 = state_26520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26520__$1,inst_26518);
} else
{if((state_val_26521 === (12)))
{var inst_26506 = (state_26520[(8)]);var inst_26506__$1 = (state_26520[(2)]);var inst_26507 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26506__$1);var state_26520__$1 = (function (){var statearr_26529 = state_26520;(statearr_26529[(8)] = inst_26506__$1);
return statearr_26529;
})();if(cljs.core.truth_(inst_26507))
{var statearr_26530_26558 = state_26520__$1;(statearr_26530_26558[(1)] = (13));
} else
{var statearr_26531_26559 = state_26520__$1;(statearr_26531_26559[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (2)))
{var inst_26483 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26484 = (0);var state_26520__$1 = (function (){var statearr_26532 = state_26520;(statearr_26532[(9)] = inst_26483);
(statearr_26532[(7)] = inst_26484);
return statearr_26532;
})();var statearr_26533_26560 = state_26520__$1;(statearr_26533_26560[(2)] = null);
(statearr_26533_26560[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (11)))
{var inst_26484 = (state_26520[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26520,(10),Object,null,(9));var inst_26493 = chs__$1.call(null,inst_26484);var inst_26494 = done.call(null,inst_26484);var inst_26495 = cljs.core.async.take_BANG_.call(null,inst_26493,inst_26494);var state_26520__$1 = state_26520;var statearr_26534_26561 = state_26520__$1;(statearr_26534_26561[(2)] = inst_26495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (9)))
{var inst_26484 = (state_26520[(7)]);var inst_26497 = (state_26520[(2)]);var inst_26498 = (inst_26484 + (1));var inst_26484__$1 = inst_26498;var state_26520__$1 = (function (){var statearr_26535 = state_26520;(statearr_26535[(10)] = inst_26497);
(statearr_26535[(7)] = inst_26484__$1);
return statearr_26535;
})();var statearr_26536_26562 = state_26520__$1;(statearr_26536_26562[(2)] = null);
(statearr_26536_26562[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (5)))
{var inst_26504 = (state_26520[(2)]);var state_26520__$1 = (function (){var statearr_26537 = state_26520;(statearr_26537[(11)] = inst_26504);
return statearr_26537;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26520__$1,(12),dchan);
} else
{if((state_val_26521 === (14)))
{var inst_26506 = (state_26520[(8)]);var inst_26511 = cljs.core.apply.call(null,f,inst_26506);var state_26520__$1 = state_26520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26520__$1,(16),out,inst_26511);
} else
{if((state_val_26521 === (16)))
{var inst_26513 = (state_26520[(2)]);var state_26520__$1 = (function (){var statearr_26538 = state_26520;(statearr_26538[(12)] = inst_26513);
return statearr_26538;
})();var statearr_26539_26563 = state_26520__$1;(statearr_26539_26563[(2)] = null);
(statearr_26539_26563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (10)))
{var inst_26488 = (state_26520[(2)]);var inst_26489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26520__$1 = (function (){var statearr_26540 = state_26520;(statearr_26540[(13)] = inst_26488);
return statearr_26540;
})();var statearr_26541_26564 = state_26520__$1;(statearr_26541_26564[(2)] = inst_26489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26521 === (8)))
{var inst_26502 = (state_26520[(2)]);var state_26520__$1 = state_26520;var statearr_26542_26565 = state_26520__$1;(statearr_26542_26565[(2)] = inst_26502);
(statearr_26542_26565[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26546[(0)] = state_machine__11462__auto__);
(statearr_26546[(1)] = (1));
return statearr_26546;
});
var state_machine__11462__auto____1 = (function (state_26520){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26520);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26547){if((e26547 instanceof Object))
{var ex__11465__auto__ = e26547;var statearr_26548_26566 = state_26520;(statearr_26548_26566[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26567 = state_26520;
state_26520 = G__26567;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26549 = f__11518__auto__.call(null);(statearr_26549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26550);
return statearr_26549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26550,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26675,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26675,out){
return (function (state_26651){var state_val_26652 = (state_26651[(1)]);if((state_val_26652 === (7)))
{var inst_26630 = (state_26651[(7)]);var inst_26631 = (state_26651[(8)]);var inst_26630__$1 = (state_26651[(2)]);var inst_26631__$1 = cljs.core.nth.call(null,inst_26630__$1,(0),null);var inst_26632 = cljs.core.nth.call(null,inst_26630__$1,(1),null);var inst_26633 = (inst_26631__$1 == null);var state_26651__$1 = (function (){var statearr_26653 = state_26651;(statearr_26653[(7)] = inst_26630__$1);
(statearr_26653[(9)] = inst_26632);
(statearr_26653[(8)] = inst_26631__$1);
return statearr_26653;
})();if(cljs.core.truth_(inst_26633))
{var statearr_26654_26676 = state_26651__$1;(statearr_26654_26676[(1)] = (8));
} else
{var statearr_26655_26677 = state_26651__$1;(statearr_26655_26677[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (1)))
{var inst_26622 = cljs.core.vec.call(null,chs);var inst_26623 = inst_26622;var state_26651__$1 = (function (){var statearr_26656 = state_26651;(statearr_26656[(10)] = inst_26623);
return statearr_26656;
})();var statearr_26657_26678 = state_26651__$1;(statearr_26657_26678[(2)] = null);
(statearr_26657_26678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (4)))
{var inst_26623 = (state_26651[(10)]);var state_26651__$1 = state_26651;return cljs.core.async.ioc_alts_BANG_.call(null,state_26651__$1,(7),inst_26623);
} else
{if((state_val_26652 === (6)))
{var inst_26647 = (state_26651[(2)]);var state_26651__$1 = state_26651;var statearr_26658_26679 = state_26651__$1;(statearr_26658_26679[(2)] = inst_26647);
(statearr_26658_26679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (3)))
{var inst_26649 = (state_26651[(2)]);var state_26651__$1 = state_26651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26651__$1,inst_26649);
} else
{if((state_val_26652 === (2)))
{var inst_26623 = (state_26651[(10)]);var inst_26625 = cljs.core.count.call(null,inst_26623);var inst_26626 = (inst_26625 > (0));var state_26651__$1 = state_26651;if(cljs.core.truth_(inst_26626))
{var statearr_26660_26680 = state_26651__$1;(statearr_26660_26680[(1)] = (4));
} else
{var statearr_26661_26681 = state_26651__$1;(statearr_26661_26681[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (11)))
{var inst_26623 = (state_26651[(10)]);var inst_26640 = (state_26651[(2)]);var tmp26659 = inst_26623;var inst_26623__$1 = tmp26659;var state_26651__$1 = (function (){var statearr_26662 = state_26651;(statearr_26662[(11)] = inst_26640);
(statearr_26662[(10)] = inst_26623__$1);
return statearr_26662;
})();var statearr_26663_26682 = state_26651__$1;(statearr_26663_26682[(2)] = null);
(statearr_26663_26682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (9)))
{var inst_26631 = (state_26651[(8)]);var state_26651__$1 = state_26651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26651__$1,(11),out,inst_26631);
} else
{if((state_val_26652 === (5)))
{var inst_26645 = cljs.core.async.close_BANG_.call(null,out);var state_26651__$1 = state_26651;var statearr_26664_26683 = state_26651__$1;(statearr_26664_26683[(2)] = inst_26645);
(statearr_26664_26683[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (10)))
{var inst_26643 = (state_26651[(2)]);var state_26651__$1 = state_26651;var statearr_26665_26684 = state_26651__$1;(statearr_26665_26684[(2)] = inst_26643);
(statearr_26665_26684[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26652 === (8)))
{var inst_26630 = (state_26651[(7)]);var inst_26632 = (state_26651[(9)]);var inst_26623 = (state_26651[(10)]);var inst_26631 = (state_26651[(8)]);var inst_26635 = (function (){var c = inst_26632;var v = inst_26631;var vec__26628 = inst_26630;var cs = inst_26623;return ((function (c,v,vec__26628,cs,inst_26630,inst_26632,inst_26623,inst_26631,state_val_26652,c__11517__auto___26675,out){
return (function (p1__26568_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26568_SHARP_);
});
;})(c,v,vec__26628,cs,inst_26630,inst_26632,inst_26623,inst_26631,state_val_26652,c__11517__auto___26675,out))
})();var inst_26636 = cljs.core.filterv.call(null,inst_26635,inst_26623);var inst_26623__$1 = inst_26636;var state_26651__$1 = (function (){var statearr_26666 = state_26651;(statearr_26666[(10)] = inst_26623__$1);
return statearr_26666;
})();var statearr_26667_26685 = state_26651__$1;(statearr_26667_26685[(2)] = null);
(statearr_26667_26685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26675,out))
;return ((function (switch__11461__auto__,c__11517__auto___26675,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26671 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26671[(0)] = state_machine__11462__auto__);
(statearr_26671[(1)] = (1));
return statearr_26671;
});
var state_machine__11462__auto____1 = (function (state_26651){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26651);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26672){if((e26672 instanceof Object))
{var ex__11465__auto__ = e26672;var statearr_26673_26686 = state_26651;(statearr_26673_26686[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26687 = state_26651;
state_26651 = G__26687;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26651){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26675,out))
})();var state__11519__auto__ = (function (){var statearr_26674 = f__11518__auto__.call(null);(statearr_26674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26675);
return statearr_26674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26675,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26780,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26780,out){
return (function (state_26757){var state_val_26758 = (state_26757[(1)]);if((state_val_26758 === (7)))
{var inst_26739 = (state_26757[(7)]);var inst_26739__$1 = (state_26757[(2)]);var inst_26740 = (inst_26739__$1 == null);var inst_26741 = cljs.core.not.call(null,inst_26740);var state_26757__$1 = (function (){var statearr_26759 = state_26757;(statearr_26759[(7)] = inst_26739__$1);
return statearr_26759;
})();if(inst_26741)
{var statearr_26760_26781 = state_26757__$1;(statearr_26760_26781[(1)] = (8));
} else
{var statearr_26761_26782 = state_26757__$1;(statearr_26761_26782[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (1)))
{var inst_26734 = (0);var state_26757__$1 = (function (){var statearr_26762 = state_26757;(statearr_26762[(8)] = inst_26734);
return statearr_26762;
})();var statearr_26763_26783 = state_26757__$1;(statearr_26763_26783[(2)] = null);
(statearr_26763_26783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (4)))
{var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(7),ch);
} else
{if((state_val_26758 === (6)))
{var inst_26752 = (state_26757[(2)]);var state_26757__$1 = state_26757;var statearr_26764_26784 = state_26757__$1;(statearr_26764_26784[(2)] = inst_26752);
(statearr_26764_26784[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (3)))
{var inst_26754 = (state_26757[(2)]);var inst_26755 = cljs.core.async.close_BANG_.call(null,out);var state_26757__$1 = (function (){var statearr_26765 = state_26757;(statearr_26765[(9)] = inst_26754);
return statearr_26765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else
{if((state_val_26758 === (2)))
{var inst_26734 = (state_26757[(8)]);var inst_26736 = (inst_26734 < n);var state_26757__$1 = state_26757;if(cljs.core.truth_(inst_26736))
{var statearr_26766_26785 = state_26757__$1;(statearr_26766_26785[(1)] = (4));
} else
{var statearr_26767_26786 = state_26757__$1;(statearr_26767_26786[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (11)))
{var inst_26734 = (state_26757[(8)]);var inst_26744 = (state_26757[(2)]);var inst_26745 = (inst_26734 + (1));var inst_26734__$1 = inst_26745;var state_26757__$1 = (function (){var statearr_26768 = state_26757;(statearr_26768[(10)] = inst_26744);
(statearr_26768[(8)] = inst_26734__$1);
return statearr_26768;
})();var statearr_26769_26787 = state_26757__$1;(statearr_26769_26787[(2)] = null);
(statearr_26769_26787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (9)))
{var state_26757__$1 = state_26757;var statearr_26770_26788 = state_26757__$1;(statearr_26770_26788[(2)] = null);
(statearr_26770_26788[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (5)))
{var state_26757__$1 = state_26757;var statearr_26771_26789 = state_26757__$1;(statearr_26771_26789[(2)] = null);
(statearr_26771_26789[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (10)))
{var inst_26749 = (state_26757[(2)]);var state_26757__$1 = state_26757;var statearr_26772_26790 = state_26757__$1;(statearr_26772_26790[(2)] = inst_26749);
(statearr_26772_26790[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26758 === (8)))
{var inst_26739 = (state_26757[(7)]);var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26757__$1,(11),out,inst_26739);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26780,out))
;return ((function (switch__11461__auto__,c__11517__auto___26780,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26776 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26776[(0)] = state_machine__11462__auto__);
(statearr_26776[(1)] = (1));
return statearr_26776;
});
var state_machine__11462__auto____1 = (function (state_26757){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26757);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26777){if((e26777 instanceof Object))
{var ex__11465__auto__ = e26777;var statearr_26778_26791 = state_26757;(statearr_26778_26791[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26792 = state_26757;
state_26757 = G__26792;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26780,out))
})();var state__11519__auto__ = (function (){var statearr_26779 = f__11518__auto__.call(null);(statearr_26779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26780);
return statearr_26779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26780,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26800 = (function (ch,f,map_LT_,meta26801){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26800.cljs$lang$type = true;
cljs.core.async.t26800.cljs$lang$ctorStr = "cljs.core.async/t26800";
cljs.core.async.t26800.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26800");
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26803 = (function (fn1,_,meta26801,ch,f,map_LT_,meta26804){
this.fn1 = fn1;
this._ = _;
this.meta26801 = meta26801;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26804 = meta26804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26803.cljs$lang$type = true;
cljs.core.async.t26803.cljs$lang$ctorStr = "cljs.core.async/t26803";
cljs.core.async.t26803.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26803");
});})(___$1))
;
cljs.core.async.t26803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26793_SHARP_){return f1.call(null,(((p1__26793_SHARP_ == null))?null:self__.f.call(null,p1__26793_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26805){var self__ = this;
var _26805__$1 = this;return self__.meta26804;
});})(___$1))
;
cljs.core.async.t26803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26805,meta26804__$1){var self__ = this;
var _26805__$1 = this;return (new cljs.core.async.t26803(self__.fn1,self__._,self__.meta26801,self__.ch,self__.f,self__.map_LT_,meta26804__$1));
});})(___$1))
;
cljs.core.async.__GT_t26803 = ((function (___$1){
return (function __GT_t26803(fn1__$1,___$2,meta26801__$1,ch__$2,f__$2,map_LT___$2,meta26804){return (new cljs.core.async.t26803(fn1__$1,___$2,meta26801__$1,ch__$2,f__$2,map_LT___$2,meta26804));
});})(___$1))
;
}
return (new cljs.core.async.t26803(fn1,___$1,self__.meta26801,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26802){var self__ = this;
var _26802__$1 = this;return self__.meta26801;
});
cljs.core.async.t26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26802,meta26801__$1){var self__ = this;
var _26802__$1 = this;return (new cljs.core.async.t26800(self__.ch,self__.f,self__.map_LT_,meta26801__$1));
});
cljs.core.async.__GT_t26800 = (function __GT_t26800(ch__$1,f__$1,map_LT___$1,meta26801){return (new cljs.core.async.t26800(ch__$1,f__$1,map_LT___$1,meta26801));
});
}
return (new cljs.core.async.t26800(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26809 = (function (ch,f,map_GT_,meta26810){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26810 = meta26810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26809.cljs$lang$type = true;
cljs.core.async.t26809.cljs$lang$ctorStr = "cljs.core.async/t26809";
cljs.core.async.t26809.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26809");
});
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26811){var self__ = this;
var _26811__$1 = this;return self__.meta26810;
});
cljs.core.async.t26809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26811,meta26810__$1){var self__ = this;
var _26811__$1 = this;return (new cljs.core.async.t26809(self__.ch,self__.f,self__.map_GT_,meta26810__$1));
});
cljs.core.async.__GT_t26809 = (function __GT_t26809(ch__$1,f__$1,map_GT___$1,meta26810){return (new cljs.core.async.t26809(ch__$1,f__$1,map_GT___$1,meta26810));
});
}
return (new cljs.core.async.t26809(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26815 = (function (ch,p,filter_GT_,meta26816){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26816 = meta26816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26815.cljs$lang$type = true;
cljs.core.async.t26815.cljs$lang$ctorStr = "cljs.core.async/t26815";
cljs.core.async.t26815.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26815");
});
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26817){var self__ = this;
var _26817__$1 = this;return self__.meta26816;
});
cljs.core.async.t26815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26817,meta26816__$1){var self__ = this;
var _26817__$1 = this;return (new cljs.core.async.t26815(self__.ch,self__.p,self__.filter_GT_,meta26816__$1));
});
cljs.core.async.__GT_t26815 = (function __GT_t26815(ch__$1,p__$1,filter_GT___$1,meta26816){return (new cljs.core.async.t26815(ch__$1,p__$1,filter_GT___$1,meta26816));
});
}
return (new cljs.core.async.t26815(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26900,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26900,out){
return (function (state_26879){var state_val_26880 = (state_26879[(1)]);if((state_val_26880 === (7)))
{var inst_26875 = (state_26879[(2)]);var state_26879__$1 = state_26879;var statearr_26881_26901 = state_26879__$1;(statearr_26881_26901[(2)] = inst_26875);
(statearr_26881_26901[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (1)))
{var state_26879__$1 = state_26879;var statearr_26882_26902 = state_26879__$1;(statearr_26882_26902[(2)] = null);
(statearr_26882_26902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (4)))
{var inst_26861 = (state_26879[(7)]);var inst_26861__$1 = (state_26879[(2)]);var inst_26862 = (inst_26861__$1 == null);var state_26879__$1 = (function (){var statearr_26883 = state_26879;(statearr_26883[(7)] = inst_26861__$1);
return statearr_26883;
})();if(cljs.core.truth_(inst_26862))
{var statearr_26884_26903 = state_26879__$1;(statearr_26884_26903[(1)] = (5));
} else
{var statearr_26885_26904 = state_26879__$1;(statearr_26885_26904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (6)))
{var inst_26861 = (state_26879[(7)]);var inst_26866 = p.call(null,inst_26861);var state_26879__$1 = state_26879;if(cljs.core.truth_(inst_26866))
{var statearr_26886_26905 = state_26879__$1;(statearr_26886_26905[(1)] = (8));
} else
{var statearr_26887_26906 = state_26879__$1;(statearr_26887_26906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (3)))
{var inst_26877 = (state_26879[(2)]);var state_26879__$1 = state_26879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26879__$1,inst_26877);
} else
{if((state_val_26880 === (2)))
{var state_26879__$1 = state_26879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26879__$1,(4),ch);
} else
{if((state_val_26880 === (11)))
{var inst_26869 = (state_26879[(2)]);var state_26879__$1 = state_26879;var statearr_26888_26907 = state_26879__$1;(statearr_26888_26907[(2)] = inst_26869);
(statearr_26888_26907[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (9)))
{var state_26879__$1 = state_26879;var statearr_26889_26908 = state_26879__$1;(statearr_26889_26908[(2)] = null);
(statearr_26889_26908[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (5)))
{var inst_26864 = cljs.core.async.close_BANG_.call(null,out);var state_26879__$1 = state_26879;var statearr_26890_26909 = state_26879__$1;(statearr_26890_26909[(2)] = inst_26864);
(statearr_26890_26909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (10)))
{var inst_26872 = (state_26879[(2)]);var state_26879__$1 = (function (){var statearr_26891 = state_26879;(statearr_26891[(8)] = inst_26872);
return statearr_26891;
})();var statearr_26892_26910 = state_26879__$1;(statearr_26892_26910[(2)] = null);
(statearr_26892_26910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26880 === (8)))
{var inst_26861 = (state_26879[(7)]);var state_26879__$1 = state_26879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26879__$1,(11),out,inst_26861);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___26900,out))
;return ((function (switch__11461__auto__,c__11517__auto___26900,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26896 = [null,null,null,null,null,null,null,null,null];(statearr_26896[(0)] = state_machine__11462__auto__);
(statearr_26896[(1)] = (1));
return statearr_26896;
});
var state_machine__11462__auto____1 = (function (state_26879){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26879);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object))
{var ex__11465__auto__ = e26897;var statearr_26898_26911 = state_26879;(statearr_26898_26911[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26912 = state_26879;
state_26879 = G__26912;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26879){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26900,out))
})();var state__11519__auto__ = (function (){var statearr_26899 = f__11518__auto__.call(null);(statearr_26899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26900);
return statearr_26899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26900,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_27078){var state_val_27079 = (state_27078[(1)]);if((state_val_27079 === (7)))
{var inst_27074 = (state_27078[(2)]);var state_27078__$1 = state_27078;var statearr_27080_27121 = state_27078__$1;(statearr_27080_27121[(2)] = inst_27074);
(statearr_27080_27121[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (20)))
{var inst_27044 = (state_27078[(7)]);var inst_27055 = (state_27078[(2)]);var inst_27056 = cljs.core.next.call(null,inst_27044);var inst_27030 = inst_27056;var inst_27031 = null;var inst_27032 = (0);var inst_27033 = (0);var state_27078__$1 = (function (){var statearr_27081 = state_27078;(statearr_27081[(8)] = inst_27032);
(statearr_27081[(9)] = inst_27030);
(statearr_27081[(10)] = inst_27055);
(statearr_27081[(11)] = inst_27031);
(statearr_27081[(12)] = inst_27033);
return statearr_27081;
})();var statearr_27082_27122 = state_27078__$1;(statearr_27082_27122[(2)] = null);
(statearr_27082_27122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (1)))
{var state_27078__$1 = state_27078;var statearr_27083_27123 = state_27078__$1;(statearr_27083_27123[(2)] = null);
(statearr_27083_27123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (4)))
{var inst_27019 = (state_27078[(13)]);var inst_27019__$1 = (state_27078[(2)]);var inst_27020 = (inst_27019__$1 == null);var state_27078__$1 = (function (){var statearr_27084 = state_27078;(statearr_27084[(13)] = inst_27019__$1);
return statearr_27084;
})();if(cljs.core.truth_(inst_27020))
{var statearr_27085_27124 = state_27078__$1;(statearr_27085_27124[(1)] = (5));
} else
{var statearr_27086_27125 = state_27078__$1;(statearr_27086_27125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (15)))
{var state_27078__$1 = state_27078;var statearr_27090_27126 = state_27078__$1;(statearr_27090_27126[(2)] = null);
(statearr_27090_27126[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (21)))
{var state_27078__$1 = state_27078;var statearr_27091_27127 = state_27078__$1;(statearr_27091_27127[(2)] = null);
(statearr_27091_27127[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (13)))
{var inst_27032 = (state_27078[(8)]);var inst_27030 = (state_27078[(9)]);var inst_27031 = (state_27078[(11)]);var inst_27033 = (state_27078[(12)]);var inst_27040 = (state_27078[(2)]);var inst_27041 = (inst_27033 + (1));var tmp27087 = inst_27032;var tmp27088 = inst_27030;var tmp27089 = inst_27031;var inst_27030__$1 = tmp27088;var inst_27031__$1 = tmp27089;var inst_27032__$1 = tmp27087;var inst_27033__$1 = inst_27041;var state_27078__$1 = (function (){var statearr_27092 = state_27078;(statearr_27092[(8)] = inst_27032__$1);
(statearr_27092[(9)] = inst_27030__$1);
(statearr_27092[(11)] = inst_27031__$1);
(statearr_27092[(14)] = inst_27040);
(statearr_27092[(12)] = inst_27033__$1);
return statearr_27092;
})();var statearr_27093_27128 = state_27078__$1;(statearr_27093_27128[(2)] = null);
(statearr_27093_27128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (22)))
{var state_27078__$1 = state_27078;var statearr_27094_27129 = state_27078__$1;(statearr_27094_27129[(2)] = null);
(statearr_27094_27129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (6)))
{var inst_27019 = (state_27078[(13)]);var inst_27028 = f.call(null,inst_27019);var inst_27029 = cljs.core.seq.call(null,inst_27028);var inst_27030 = inst_27029;var inst_27031 = null;var inst_27032 = (0);var inst_27033 = (0);var state_27078__$1 = (function (){var statearr_27095 = state_27078;(statearr_27095[(8)] = inst_27032);
(statearr_27095[(9)] = inst_27030);
(statearr_27095[(11)] = inst_27031);
(statearr_27095[(12)] = inst_27033);
return statearr_27095;
})();var statearr_27096_27130 = state_27078__$1;(statearr_27096_27130[(2)] = null);
(statearr_27096_27130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (17)))
{var inst_27044 = (state_27078[(7)]);var inst_27048 = cljs.core.chunk_first.call(null,inst_27044);var inst_27049 = cljs.core.chunk_rest.call(null,inst_27044);var inst_27050 = cljs.core.count.call(null,inst_27048);var inst_27030 = inst_27049;var inst_27031 = inst_27048;var inst_27032 = inst_27050;var inst_27033 = (0);var state_27078__$1 = (function (){var statearr_27097 = state_27078;(statearr_27097[(8)] = inst_27032);
(statearr_27097[(9)] = inst_27030);
(statearr_27097[(11)] = inst_27031);
(statearr_27097[(12)] = inst_27033);
return statearr_27097;
})();var statearr_27098_27131 = state_27078__$1;(statearr_27098_27131[(2)] = null);
(statearr_27098_27131[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (3)))
{var inst_27076 = (state_27078[(2)]);var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27078__$1,inst_27076);
} else
{if((state_val_27079 === (12)))
{var inst_27064 = (state_27078[(2)]);var state_27078__$1 = state_27078;var statearr_27099_27132 = state_27078__$1;(statearr_27099_27132[(2)] = inst_27064);
(statearr_27099_27132[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (2)))
{var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27078__$1,(4),in$);
} else
{if((state_val_27079 === (23)))
{var inst_27072 = (state_27078[(2)]);var state_27078__$1 = state_27078;var statearr_27100_27133 = state_27078__$1;(statearr_27100_27133[(2)] = inst_27072);
(statearr_27100_27133[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (19)))
{var inst_27059 = (state_27078[(2)]);var state_27078__$1 = state_27078;var statearr_27101_27134 = state_27078__$1;(statearr_27101_27134[(2)] = inst_27059);
(statearr_27101_27134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (11)))
{var inst_27030 = (state_27078[(9)]);var inst_27044 = (state_27078[(7)]);var inst_27044__$1 = cljs.core.seq.call(null,inst_27030);var state_27078__$1 = (function (){var statearr_27102 = state_27078;(statearr_27102[(7)] = inst_27044__$1);
return statearr_27102;
})();if(inst_27044__$1)
{var statearr_27103_27135 = state_27078__$1;(statearr_27103_27135[(1)] = (14));
} else
{var statearr_27104_27136 = state_27078__$1;(statearr_27104_27136[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (9)))
{var inst_27066 = (state_27078[(2)]);var inst_27067 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27078__$1 = (function (){var statearr_27105 = state_27078;(statearr_27105[(15)] = inst_27066);
return statearr_27105;
})();if(cljs.core.truth_(inst_27067))
{var statearr_27106_27137 = state_27078__$1;(statearr_27106_27137[(1)] = (21));
} else
{var statearr_27107_27138 = state_27078__$1;(statearr_27107_27138[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (5)))
{var inst_27022 = cljs.core.async.close_BANG_.call(null,out);var state_27078__$1 = state_27078;var statearr_27108_27139 = state_27078__$1;(statearr_27108_27139[(2)] = inst_27022);
(statearr_27108_27139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (14)))
{var inst_27044 = (state_27078[(7)]);var inst_27046 = cljs.core.chunked_seq_QMARK_.call(null,inst_27044);var state_27078__$1 = state_27078;if(inst_27046)
{var statearr_27109_27140 = state_27078__$1;(statearr_27109_27140[(1)] = (17));
} else
{var statearr_27110_27141 = state_27078__$1;(statearr_27110_27141[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (16)))
{var inst_27062 = (state_27078[(2)]);var state_27078__$1 = state_27078;var statearr_27111_27142 = state_27078__$1;(statearr_27111_27142[(2)] = inst_27062);
(statearr_27111_27142[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27079 === (10)))
{var inst_27031 = (state_27078[(11)]);var inst_27033 = (state_27078[(12)]);var inst_27038 = cljs.core._nth.call(null,inst_27031,inst_27033);var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27078__$1,(13),out,inst_27038);
} else
{if((state_val_27079 === (18)))
{var inst_27044 = (state_27078[(7)]);var inst_27053 = cljs.core.first.call(null,inst_27044);var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27078__$1,(20),out,inst_27053);
} else
{if((state_val_27079 === (8)))
{var inst_27032 = (state_27078[(8)]);var inst_27033 = (state_27078[(12)]);var inst_27035 = (inst_27033 < inst_27032);var inst_27036 = inst_27035;var state_27078__$1 = state_27078;if(cljs.core.truth_(inst_27036))
{var statearr_27112_27143 = state_27078__$1;(statearr_27112_27143[(1)] = (10));
} else
{var statearr_27113_27144 = state_27078__$1;(statearr_27113_27144[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27117[(0)] = state_machine__11462__auto__);
(statearr_27117[(1)] = (1));
return statearr_27117;
});
var state_machine__11462__auto____1 = (function (state_27078){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27078);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object))
{var ex__11465__auto__ = e27118;var statearr_27119_27145 = state_27078;(statearr_27119_27145[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27146 = state_27078;
state_27078 = G__27146;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27078){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_27120 = f__11518__auto__.call(null);(statearr_27120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_27120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27243,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27243,out){
return (function (state_27218){var state_val_27219 = (state_27218[(1)]);if((state_val_27219 === (7)))
{var inst_27213 = (state_27218[(2)]);var state_27218__$1 = state_27218;var statearr_27220_27244 = state_27218__$1;(statearr_27220_27244[(2)] = inst_27213);
(statearr_27220_27244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (1)))
{var inst_27195 = null;var state_27218__$1 = (function (){var statearr_27221 = state_27218;(statearr_27221[(7)] = inst_27195);
return statearr_27221;
})();var statearr_27222_27245 = state_27218__$1;(statearr_27222_27245[(2)] = null);
(statearr_27222_27245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (4)))
{var inst_27198 = (state_27218[(8)]);var inst_27198__$1 = (state_27218[(2)]);var inst_27199 = (inst_27198__$1 == null);var inst_27200 = cljs.core.not.call(null,inst_27199);var state_27218__$1 = (function (){var statearr_27223 = state_27218;(statearr_27223[(8)] = inst_27198__$1);
return statearr_27223;
})();if(inst_27200)
{var statearr_27224_27246 = state_27218__$1;(statearr_27224_27246[(1)] = (5));
} else
{var statearr_27225_27247 = state_27218__$1;(statearr_27225_27247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (6)))
{var state_27218__$1 = state_27218;var statearr_27226_27248 = state_27218__$1;(statearr_27226_27248[(2)] = null);
(statearr_27226_27248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (3)))
{var inst_27215 = (state_27218[(2)]);var inst_27216 = cljs.core.async.close_BANG_.call(null,out);var state_27218__$1 = (function (){var statearr_27227 = state_27218;(statearr_27227[(9)] = inst_27215);
return statearr_27227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27218__$1,inst_27216);
} else
{if((state_val_27219 === (2)))
{var state_27218__$1 = state_27218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27218__$1,(4),ch);
} else
{if((state_val_27219 === (11)))
{var inst_27198 = (state_27218[(8)]);var inst_27207 = (state_27218[(2)]);var inst_27195 = inst_27198;var state_27218__$1 = (function (){var statearr_27228 = state_27218;(statearr_27228[(7)] = inst_27195);
(statearr_27228[(10)] = inst_27207);
return statearr_27228;
})();var statearr_27229_27249 = state_27218__$1;(statearr_27229_27249[(2)] = null);
(statearr_27229_27249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (9)))
{var inst_27198 = (state_27218[(8)]);var state_27218__$1 = state_27218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27218__$1,(11),out,inst_27198);
} else
{if((state_val_27219 === (5)))
{var inst_27195 = (state_27218[(7)]);var inst_27198 = (state_27218[(8)]);var inst_27202 = cljs.core._EQ_.call(null,inst_27198,inst_27195);var state_27218__$1 = state_27218;if(inst_27202)
{var statearr_27231_27250 = state_27218__$1;(statearr_27231_27250[(1)] = (8));
} else
{var statearr_27232_27251 = state_27218__$1;(statearr_27232_27251[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (10)))
{var inst_27210 = (state_27218[(2)]);var state_27218__$1 = state_27218;var statearr_27233_27252 = state_27218__$1;(statearr_27233_27252[(2)] = inst_27210);
(statearr_27233_27252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27219 === (8)))
{var inst_27195 = (state_27218[(7)]);var tmp27230 = inst_27195;var inst_27195__$1 = tmp27230;var state_27218__$1 = (function (){var statearr_27234 = state_27218;(statearr_27234[(7)] = inst_27195__$1);
return statearr_27234;
})();var statearr_27235_27253 = state_27218__$1;(statearr_27235_27253[(2)] = null);
(statearr_27235_27253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___27243,out))
;return ((function (switch__11461__auto__,c__11517__auto___27243,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27239 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27239[(0)] = state_machine__11462__auto__);
(statearr_27239[(1)] = (1));
return statearr_27239;
});
var state_machine__11462__auto____1 = (function (state_27218){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27218);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27240){if((e27240 instanceof Object))
{var ex__11465__auto__ = e27240;var statearr_27241_27254 = state_27218;(statearr_27241_27254[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27255 = state_27218;
state_27218 = G__27255;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27218){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27243,out))
})();var state__11519__auto__ = (function (){var statearr_27242 = f__11518__auto__.call(null);(statearr_27242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27243);
return statearr_27242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27243,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27390,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27390,out){
return (function (state_27360){var state_val_27361 = (state_27360[(1)]);if((state_val_27361 === (7)))
{var inst_27356 = (state_27360[(2)]);var state_27360__$1 = state_27360;var statearr_27362_27391 = state_27360__$1;(statearr_27362_27391[(2)] = inst_27356);
(statearr_27362_27391[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (1)))
{var inst_27323 = (new Array(n));var inst_27324 = inst_27323;var inst_27325 = (0);var state_27360__$1 = (function (){var statearr_27363 = state_27360;(statearr_27363[(7)] = inst_27325);
(statearr_27363[(8)] = inst_27324);
return statearr_27363;
})();var statearr_27364_27392 = state_27360__$1;(statearr_27364_27392[(2)] = null);
(statearr_27364_27392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (4)))
{var inst_27328 = (state_27360[(9)]);var inst_27328__$1 = (state_27360[(2)]);var inst_27329 = (inst_27328__$1 == null);var inst_27330 = cljs.core.not.call(null,inst_27329);var state_27360__$1 = (function (){var statearr_27365 = state_27360;(statearr_27365[(9)] = inst_27328__$1);
return statearr_27365;
})();if(inst_27330)
{var statearr_27366_27393 = state_27360__$1;(statearr_27366_27393[(1)] = (5));
} else
{var statearr_27367_27394 = state_27360__$1;(statearr_27367_27394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (15)))
{var inst_27350 = (state_27360[(2)]);var state_27360__$1 = state_27360;var statearr_27368_27395 = state_27360__$1;(statearr_27368_27395[(2)] = inst_27350);
(statearr_27368_27395[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (13)))
{var state_27360__$1 = state_27360;var statearr_27369_27396 = state_27360__$1;(statearr_27369_27396[(2)] = null);
(statearr_27369_27396[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (6)))
{var inst_27325 = (state_27360[(7)]);var inst_27346 = (inst_27325 > (0));var state_27360__$1 = state_27360;if(cljs.core.truth_(inst_27346))
{var statearr_27370_27397 = state_27360__$1;(statearr_27370_27397[(1)] = (12));
} else
{var statearr_27371_27398 = state_27360__$1;(statearr_27371_27398[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (3)))
{var inst_27358 = (state_27360[(2)]);var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27360__$1,inst_27358);
} else
{if((state_val_27361 === (12)))
{var inst_27324 = (state_27360[(8)]);var inst_27348 = cljs.core.vec.call(null,inst_27324);var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27360__$1,(15),out,inst_27348);
} else
{if((state_val_27361 === (2)))
{var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27360__$1,(4),ch);
} else
{if((state_val_27361 === (11)))
{var inst_27340 = (state_27360[(2)]);var inst_27341 = (new Array(n));var inst_27324 = inst_27341;var inst_27325 = (0);var state_27360__$1 = (function (){var statearr_27372 = state_27360;(statearr_27372[(7)] = inst_27325);
(statearr_27372[(8)] = inst_27324);
(statearr_27372[(10)] = inst_27340);
return statearr_27372;
})();var statearr_27373_27399 = state_27360__$1;(statearr_27373_27399[(2)] = null);
(statearr_27373_27399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (9)))
{var inst_27324 = (state_27360[(8)]);var inst_27338 = cljs.core.vec.call(null,inst_27324);var state_27360__$1 = state_27360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27360__$1,(11),out,inst_27338);
} else
{if((state_val_27361 === (5)))
{var inst_27325 = (state_27360[(7)]);var inst_27328 = (state_27360[(9)]);var inst_27324 = (state_27360[(8)]);var inst_27333 = (state_27360[(11)]);var inst_27332 = (inst_27324[inst_27325] = inst_27328);var inst_27333__$1 = (inst_27325 + (1));var inst_27334 = (inst_27333__$1 < n);var state_27360__$1 = (function (){var statearr_27374 = state_27360;(statearr_27374[(12)] = inst_27332);
(statearr_27374[(11)] = inst_27333__$1);
return statearr_27374;
})();if(cljs.core.truth_(inst_27334))
{var statearr_27375_27400 = state_27360__$1;(statearr_27375_27400[(1)] = (8));
} else
{var statearr_27376_27401 = state_27360__$1;(statearr_27376_27401[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (14)))
{var inst_27353 = (state_27360[(2)]);var inst_27354 = cljs.core.async.close_BANG_.call(null,out);var state_27360__$1 = (function (){var statearr_27378 = state_27360;(statearr_27378[(13)] = inst_27353);
return statearr_27378;
})();var statearr_27379_27402 = state_27360__$1;(statearr_27379_27402[(2)] = inst_27354);
(statearr_27379_27402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (10)))
{var inst_27344 = (state_27360[(2)]);var state_27360__$1 = state_27360;var statearr_27380_27403 = state_27360__$1;(statearr_27380_27403[(2)] = inst_27344);
(statearr_27380_27403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27361 === (8)))
{var inst_27324 = (state_27360[(8)]);var inst_27333 = (state_27360[(11)]);var tmp27377 = inst_27324;var inst_27324__$1 = tmp27377;var inst_27325 = inst_27333;var state_27360__$1 = (function (){var statearr_27381 = state_27360;(statearr_27381[(7)] = inst_27325);
(statearr_27381[(8)] = inst_27324__$1);
return statearr_27381;
})();var statearr_27382_27404 = state_27360__$1;(statearr_27382_27404[(2)] = null);
(statearr_27382_27404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___27390,out))
;return ((function (switch__11461__auto__,c__11517__auto___27390,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27386[(0)] = state_machine__11462__auto__);
(statearr_27386[(1)] = (1));
return statearr_27386;
});
var state_machine__11462__auto____1 = (function (state_27360){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27360);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27387){if((e27387 instanceof Object))
{var ex__11465__auto__ = e27387;var statearr_27388_27405 = state_27360;(statearr_27388_27405[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27406 = state_27360;
state_27360 = G__27406;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27360){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27390,out))
})();var state__11519__auto__ = (function (){var statearr_27389 = f__11518__auto__.call(null);(statearr_27389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27390);
return statearr_27389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27390,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27549,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27549,out){
return (function (state_27519){var state_val_27520 = (state_27519[(1)]);if((state_val_27520 === (7)))
{var inst_27515 = (state_27519[(2)]);var state_27519__$1 = state_27519;var statearr_27521_27550 = state_27519__$1;(statearr_27521_27550[(2)] = inst_27515);
(statearr_27521_27550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (1)))
{var inst_27478 = [];var inst_27479 = inst_27478;var inst_27480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27519__$1 = (function (){var statearr_27522 = state_27519;(statearr_27522[(7)] = inst_27480);
(statearr_27522[(8)] = inst_27479);
return statearr_27522;
})();var statearr_27523_27551 = state_27519__$1;(statearr_27523_27551[(2)] = null);
(statearr_27523_27551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (4)))
{var inst_27483 = (state_27519[(9)]);var inst_27483__$1 = (state_27519[(2)]);var inst_27484 = (inst_27483__$1 == null);var inst_27485 = cljs.core.not.call(null,inst_27484);var state_27519__$1 = (function (){var statearr_27524 = state_27519;(statearr_27524[(9)] = inst_27483__$1);
return statearr_27524;
})();if(inst_27485)
{var statearr_27525_27552 = state_27519__$1;(statearr_27525_27552[(1)] = (5));
} else
{var statearr_27526_27553 = state_27519__$1;(statearr_27526_27553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (15)))
{var inst_27509 = (state_27519[(2)]);var state_27519__$1 = state_27519;var statearr_27527_27554 = state_27519__$1;(statearr_27527_27554[(2)] = inst_27509);
(statearr_27527_27554[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (13)))
{var state_27519__$1 = state_27519;var statearr_27528_27555 = state_27519__$1;(statearr_27528_27555[(2)] = null);
(statearr_27528_27555[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (6)))
{var inst_27479 = (state_27519[(8)]);var inst_27504 = inst_27479.length;var inst_27505 = (inst_27504 > (0));var state_27519__$1 = state_27519;if(cljs.core.truth_(inst_27505))
{var statearr_27529_27556 = state_27519__$1;(statearr_27529_27556[(1)] = (12));
} else
{var statearr_27530_27557 = state_27519__$1;(statearr_27530_27557[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (3)))
{var inst_27517 = (state_27519[(2)]);var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27519__$1,inst_27517);
} else
{if((state_val_27520 === (12)))
{var inst_27479 = (state_27519[(8)]);var inst_27507 = cljs.core.vec.call(null,inst_27479);var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27519__$1,(15),out,inst_27507);
} else
{if((state_val_27520 === (2)))
{var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27519__$1,(4),ch);
} else
{if((state_val_27520 === (11)))
{var inst_27487 = (state_27519[(10)]);var inst_27483 = (state_27519[(9)]);var inst_27497 = (state_27519[(2)]);var inst_27498 = [];var inst_27499 = inst_27498.push(inst_27483);var inst_27479 = inst_27498;var inst_27480 = inst_27487;var state_27519__$1 = (function (){var statearr_27531 = state_27519;(statearr_27531[(11)] = inst_27497);
(statearr_27531[(12)] = inst_27499);
(statearr_27531[(7)] = inst_27480);
(statearr_27531[(8)] = inst_27479);
return statearr_27531;
})();var statearr_27532_27558 = state_27519__$1;(statearr_27532_27558[(2)] = null);
(statearr_27532_27558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (9)))
{var inst_27479 = (state_27519[(8)]);var inst_27495 = cljs.core.vec.call(null,inst_27479);var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27519__$1,(11),out,inst_27495);
} else
{if((state_val_27520 === (5)))
{var inst_27480 = (state_27519[(7)]);var inst_27487 = (state_27519[(10)]);var inst_27483 = (state_27519[(9)]);var inst_27487__$1 = f.call(null,inst_27483);var inst_27488 = cljs.core._EQ_.call(null,inst_27487__$1,inst_27480);var inst_27489 = cljs.core.keyword_identical_QMARK_.call(null,inst_27480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27490 = (inst_27488) || (inst_27489);var state_27519__$1 = (function (){var statearr_27533 = state_27519;(statearr_27533[(10)] = inst_27487__$1);
return statearr_27533;
})();if(cljs.core.truth_(inst_27490))
{var statearr_27534_27559 = state_27519__$1;(statearr_27534_27559[(1)] = (8));
} else
{var statearr_27535_27560 = state_27519__$1;(statearr_27535_27560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (14)))
{var inst_27512 = (state_27519[(2)]);var inst_27513 = cljs.core.async.close_BANG_.call(null,out);var state_27519__$1 = (function (){var statearr_27537 = state_27519;(statearr_27537[(13)] = inst_27512);
return statearr_27537;
})();var statearr_27538_27561 = state_27519__$1;(statearr_27538_27561[(2)] = inst_27513);
(statearr_27538_27561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (10)))
{var inst_27502 = (state_27519[(2)]);var state_27519__$1 = state_27519;var statearr_27539_27562 = state_27519__$1;(statearr_27539_27562[(2)] = inst_27502);
(statearr_27539_27562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27520 === (8)))
{var inst_27479 = (state_27519[(8)]);var inst_27487 = (state_27519[(10)]);var inst_27483 = (state_27519[(9)]);var inst_27492 = inst_27479.push(inst_27483);var tmp27536 = inst_27479;var inst_27479__$1 = tmp27536;var inst_27480 = inst_27487;var state_27519__$1 = (function (){var statearr_27540 = state_27519;(statearr_27540[(14)] = inst_27492);
(statearr_27540[(7)] = inst_27480);
(statearr_27540[(8)] = inst_27479__$1);
return statearr_27540;
})();var statearr_27541_27563 = state_27519__$1;(statearr_27541_27563[(2)] = null);
(statearr_27541_27563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11517__auto___27549,out))
;return ((function (switch__11461__auto__,c__11517__auto___27549,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27545[(0)] = state_machine__11462__auto__);
(statearr_27545[(1)] = (1));
return statearr_27545;
});
var state_machine__11462__auto____1 = (function (state_27519){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27519);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27546){if((e27546 instanceof Object))
{var ex__11465__auto__ = e27546;var statearr_27547_27564 = state_27519;(statearr_27547_27564[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27565 = state_27519;
state_27519 = G__27565;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27519){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27549,out))
})();var state__11519__auto__ = (function (){var statearr_27548 = f__11518__auto__.call(null);(statearr_27548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27549);
return statearr_27548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27549,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
