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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24335 = (function (f,fn_handler,meta24336){
this.f = f;
this.fn_handler = fn_handler;
this.meta24336 = meta24336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24335.cljs$lang$type = true;
cljs.core.async.t24335.cljs$lang$ctorStr = "cljs.core.async/t24335";
cljs.core.async.t24335.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24335");
});
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24337){var self__ = this;
var _24337__$1 = this;return self__.meta24336;
});
cljs.core.async.t24335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24337,meta24336__$1){var self__ = this;
var _24337__$1 = this;return (new cljs.core.async.t24335(self__.f,self__.fn_handler,meta24336__$1));
});
cljs.core.async.__GT_t24335 = (function __GT_t24335(f__$1,fn_handler__$1,meta24336){return (new cljs.core.async.t24335(f__$1,fn_handler__$1,meta24336));
});
}
return (new cljs.core.async.t24335(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24339 = buff;if(G__24339)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24339.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24339.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24339);
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
{var val_24340 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24340);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24340,ret){
return (function (){return fn1.call(null,val_24340);
});})(val_24340,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24341 = n;var x_24342 = (0);while(true){
if((x_24342 < n__4508__auto___24341))
{(a[x_24342] = (0));
{
var G__24343 = (x_24342 + (1));
x_24342 = G__24343;
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
var G__24344 = (i + (1));
i = G__24344;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24348 = (function (flag,alt_flag,meta24349){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24349 = meta24349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24348.cljs$lang$type = true;
cljs.core.async.t24348.cljs$lang$ctorStr = "cljs.core.async/t24348";
cljs.core.async.t24348.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24348");
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24350){var self__ = this;
var _24350__$1 = this;return self__.meta24349;
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24350,meta24349__$1){var self__ = this;
var _24350__$1 = this;return (new cljs.core.async.t24348(self__.flag,self__.alt_flag,meta24349__$1));
});})(flag))
;
cljs.core.async.__GT_t24348 = ((function (flag){
return (function __GT_t24348(flag__$1,alt_flag__$1,meta24349){return (new cljs.core.async.t24348(flag__$1,alt_flag__$1,meta24349));
});})(flag))
;
}
return (new cljs.core.async.t24348(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24354 = (function (cb,flag,alt_handler,meta24355){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24355 = meta24355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24354.cljs$lang$type = true;
cljs.core.async.t24354.cljs$lang$ctorStr = "cljs.core.async/t24354";
cljs.core.async.t24354.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24354");
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24356){var self__ = this;
var _24356__$1 = this;return self__.meta24355;
});
cljs.core.async.t24354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24356,meta24355__$1){var self__ = this;
var _24356__$1 = this;return (new cljs.core.async.t24354(self__.cb,self__.flag,self__.alt_handler,meta24355__$1));
});
cljs.core.async.__GT_t24354 = (function __GT_t24354(cb__$1,flag__$1,alt_handler__$1,meta24355){return (new cljs.core.async.t24354(cb__$1,flag__$1,alt_handler__$1,meta24355));
});
}
return (new cljs.core.async.t24354(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24357_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24357_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24358_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24358_SHARP_,port], null));
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
var G__24359 = (i + (1));
i = G__24359;
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
var alts_BANG___delegate = function (ports,p__24360){var map__24362 = p__24360;var map__24362__$1 = ((cljs.core.seq_QMARK_.call(null,map__24362))?cljs.core.apply.call(null,cljs.core.hash_map,map__24362):map__24362);var opts = map__24362__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24360 = null;if (arguments.length > 1) {
  p__24360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24363){
var ports = cljs.core.first(arglist__24363);
var p__24360 = cljs.core.rest(arglist__24363);
return alts_BANG___delegate(ports,p__24360);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24458){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24458){
return (function (state_24434){var state_val_24435 = (state_24434[(1)]);if((state_val_24435 === (7)))
{var inst_24430 = (state_24434[(2)]);var state_24434__$1 = state_24434;var statearr_24436_24459 = state_24434__$1;(statearr_24436_24459[(2)] = inst_24430);
(statearr_24436_24459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (1)))
{var state_24434__$1 = state_24434;var statearr_24437_24460 = state_24434__$1;(statearr_24437_24460[(2)] = null);
(statearr_24437_24460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (4)))
{var inst_24413 = (state_24434[(7)]);var inst_24413__$1 = (state_24434[(2)]);var inst_24414 = (inst_24413__$1 == null);var state_24434__$1 = (function (){var statearr_24438 = state_24434;(statearr_24438[(7)] = inst_24413__$1);
return statearr_24438;
})();if(cljs.core.truth_(inst_24414))
{var statearr_24439_24461 = state_24434__$1;(statearr_24439_24461[(1)] = (5));
} else
{var statearr_24440_24462 = state_24434__$1;(statearr_24440_24462[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (13)))
{var state_24434__$1 = state_24434;var statearr_24441_24463 = state_24434__$1;(statearr_24441_24463[(2)] = null);
(statearr_24441_24463[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (6)))
{var inst_24413 = (state_24434[(7)]);var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24434__$1,(11),to,inst_24413);
} else
{if((state_val_24435 === (3)))
{var inst_24432 = (state_24434[(2)]);var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24434__$1,inst_24432);
} else
{if((state_val_24435 === (12)))
{var state_24434__$1 = state_24434;var statearr_24442_24464 = state_24434__$1;(statearr_24442_24464[(2)] = null);
(statearr_24442_24464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (2)))
{var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24434__$1,(4),from);
} else
{if((state_val_24435 === (11)))
{var inst_24423 = (state_24434[(2)]);var state_24434__$1 = state_24434;if(cljs.core.truth_(inst_24423))
{var statearr_24443_24465 = state_24434__$1;(statearr_24443_24465[(1)] = (12));
} else
{var statearr_24444_24466 = state_24434__$1;(statearr_24444_24466[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (9)))
{var state_24434__$1 = state_24434;var statearr_24445_24467 = state_24434__$1;(statearr_24445_24467[(2)] = null);
(statearr_24445_24467[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (5)))
{var state_24434__$1 = state_24434;if(cljs.core.truth_(close_QMARK_))
{var statearr_24446_24468 = state_24434__$1;(statearr_24446_24468[(1)] = (8));
} else
{var statearr_24447_24469 = state_24434__$1;(statearr_24447_24469[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (14)))
{var inst_24428 = (state_24434[(2)]);var state_24434__$1 = state_24434;var statearr_24448_24470 = state_24434__$1;(statearr_24448_24470[(2)] = inst_24428);
(statearr_24448_24470[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (10)))
{var inst_24420 = (state_24434[(2)]);var state_24434__$1 = state_24434;var statearr_24449_24471 = state_24434__$1;(statearr_24449_24471[(2)] = inst_24420);
(statearr_24449_24471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (8)))
{var inst_24417 = cljs.core.async.close_BANG_.call(null,to);var state_24434__$1 = state_24434;var statearr_24450_24472 = state_24434__$1;(statearr_24450_24472[(2)] = inst_24417);
(statearr_24450_24472[(1)] = (10));
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
});})(c__11517__auto___24458))
;return ((function (switch__11461__auto__,c__11517__auto___24458){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24454 = [null,null,null,null,null,null,null,null];(statearr_24454[(0)] = state_machine__11462__auto__);
(statearr_24454[(1)] = (1));
return statearr_24454;
});
var state_machine__11462__auto____1 = (function (state_24434){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24434);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24455){if((e24455 instanceof Object))
{var ex__11465__auto__ = e24455;var statearr_24456_24473 = state_24434;(statearr_24456_24473[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24474 = state_24434;
state_24434 = G__24474;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24458))
})();var state__11519__auto__ = (function (){var statearr_24457 = f__11518__auto__.call(null);(statearr_24457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24458);
return statearr_24457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24458))
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
return (function (p__24658){var vec__24659 = p__24658;var v = cljs.core.nth.call(null,vec__24659,(0),null);var p = cljs.core.nth.call(null,vec__24659,(1),null);var job = vec__24659;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24841 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results){
return (function (state_24664){var state_val_24665 = (state_24664[(1)]);if((state_val_24665 === (2)))
{var inst_24661 = (state_24664[(2)]);var inst_24662 = cljs.core.async.close_BANG_.call(null,res);var state_24664__$1 = (function (){var statearr_24666 = state_24664;(statearr_24666[(7)] = inst_24661);
return statearr_24666;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24664__$1,inst_24662);
} else
{if((state_val_24665 === (1)))
{var state_24664__$1 = state_24664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24664__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24670 = [null,null,null,null,null,null,null,null];(statearr_24670[(0)] = state_machine__11462__auto__);
(statearr_24670[(1)] = (1));
return statearr_24670;
});
var state_machine__11462__auto____1 = (function (state_24664){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24664);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24671){if((e24671 instanceof Object))
{var ex__11465__auto__ = e24671;var statearr_24672_24842 = state_24664;(statearr_24672_24842[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24843 = state_24664;
state_24664 = G__24843;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24664){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24673 = f__11518__auto__.call(null);(statearr_24673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24841);
return statearr_24673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24841,res,vec__24659,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24674){var vec__24675 = p__24674;var v = cljs.core.nth.call(null,vec__24675,(0),null);var p = cljs.core.nth.call(null,vec__24675,(1),null);var job = vec__24675;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24844 = n;var __24845 = (0);while(true){
if((__24845 < n__4508__auto___24844))
{var G__24676_24846 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24676_24846) {
case "async":
var c__11517__auto___24848 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24845,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24845,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function (state_24689){var state_val_24690 = (state_24689[(1)]);if((state_val_24690 === (7)))
{var inst_24685 = (state_24689[(2)]);var state_24689__$1 = state_24689;var statearr_24691_24849 = state_24689__$1;(statearr_24691_24849[(2)] = inst_24685);
(statearr_24691_24849[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24690 === (6)))
{var state_24689__$1 = state_24689;var statearr_24692_24850 = state_24689__$1;(statearr_24692_24850[(2)] = null);
(statearr_24692_24850[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24690 === (5)))
{var state_24689__$1 = state_24689;var statearr_24693_24851 = state_24689__$1;(statearr_24693_24851[(2)] = null);
(statearr_24693_24851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24690 === (4)))
{var inst_24679 = (state_24689[(2)]);var inst_24680 = async.call(null,inst_24679);var state_24689__$1 = state_24689;if(cljs.core.truth_(inst_24680))
{var statearr_24694_24852 = state_24689__$1;(statearr_24694_24852[(1)] = (5));
} else
{var statearr_24695_24853 = state_24689__$1;(statearr_24695_24853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24690 === (3)))
{var inst_24687 = (state_24689[(2)]);var state_24689__$1 = state_24689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24689__$1,inst_24687);
} else
{if((state_val_24690 === (2)))
{var state_24689__$1 = state_24689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24689__$1,(4),jobs);
} else
{if((state_val_24690 === (1)))
{var state_24689__$1 = state_24689;var statearr_24696_24854 = state_24689__$1;(statearr_24696_24854[(2)] = null);
(statearr_24696_24854[(1)] = (2));
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
});})(__24845,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
;return ((function (__24845,switch__11461__auto__,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24700 = [null,null,null,null,null,null,null];(statearr_24700[(0)] = state_machine__11462__auto__);
(statearr_24700[(1)] = (1));
return statearr_24700;
});
var state_machine__11462__auto____1 = (function (state_24689){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24689);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24701){if((e24701 instanceof Object))
{var ex__11465__auto__ = e24701;var statearr_24702_24855 = state_24689;(statearr_24702_24855[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24689);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24856 = state_24689;
state_24689 = G__24856;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24689){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24845,switch__11461__auto__,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24703 = f__11518__auto__.call(null);(statearr_24703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24848);
return statearr_24703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24845,c__11517__auto___24848,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___24857 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24845,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24845,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function (state_24716){var state_val_24717 = (state_24716[(1)]);if((state_val_24717 === (7)))
{var inst_24712 = (state_24716[(2)]);var state_24716__$1 = state_24716;var statearr_24718_24858 = state_24716__$1;(statearr_24718_24858[(2)] = inst_24712);
(statearr_24718_24858[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24717 === (6)))
{var state_24716__$1 = state_24716;var statearr_24719_24859 = state_24716__$1;(statearr_24719_24859[(2)] = null);
(statearr_24719_24859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24717 === (5)))
{var state_24716__$1 = state_24716;var statearr_24720_24860 = state_24716__$1;(statearr_24720_24860[(2)] = null);
(statearr_24720_24860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24717 === (4)))
{var inst_24706 = (state_24716[(2)]);var inst_24707 = process.call(null,inst_24706);var state_24716__$1 = state_24716;if(cljs.core.truth_(inst_24707))
{var statearr_24721_24861 = state_24716__$1;(statearr_24721_24861[(1)] = (5));
} else
{var statearr_24722_24862 = state_24716__$1;(statearr_24722_24862[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24717 === (3)))
{var inst_24714 = (state_24716[(2)]);var state_24716__$1 = state_24716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24716__$1,inst_24714);
} else
{if((state_val_24717 === (2)))
{var state_24716__$1 = state_24716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(4),jobs);
} else
{if((state_val_24717 === (1)))
{var state_24716__$1 = state_24716;var statearr_24723_24863 = state_24716__$1;(statearr_24723_24863[(2)] = null);
(statearr_24723_24863[(1)] = (2));
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
});})(__24845,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
;return ((function (__24845,switch__11461__auto__,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24727 = [null,null,null,null,null,null,null];(statearr_24727[(0)] = state_machine__11462__auto__);
(statearr_24727[(1)] = (1));
return statearr_24727;
});
var state_machine__11462__auto____1 = (function (state_24716){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24716);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24728){if((e24728 instanceof Object))
{var ex__11465__auto__ = e24728;var statearr_24729_24864 = state_24716;(statearr_24729_24864[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24728;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24865 = state_24716;
state_24716 = G__24865;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24716){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24845,switch__11461__auto__,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24730 = f__11518__auto__.call(null);(statearr_24730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24857);
return statearr_24730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24845,c__11517__auto___24857,G__24676_24846,n__4508__auto___24844,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24866 = (__24845 + (1));
__24845 = G__24866;
continue;
}
} else
{}
break;
}
var c__11517__auto___24867 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24867,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24867,jobs,results,process,async){
return (function (state_24752){var state_val_24753 = (state_24752[(1)]);if((state_val_24753 === (9)))
{var inst_24745 = (state_24752[(2)]);var state_24752__$1 = (function (){var statearr_24754 = state_24752;(statearr_24754[(7)] = inst_24745);
return statearr_24754;
})();var statearr_24755_24868 = state_24752__$1;(statearr_24755_24868[(2)] = null);
(statearr_24755_24868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24753 === (8)))
{var inst_24738 = (state_24752[(8)]);var inst_24743 = (state_24752[(2)]);var state_24752__$1 = (function (){var statearr_24756 = state_24752;(statearr_24756[(9)] = inst_24743);
return statearr_24756;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24752__$1,(9),results,inst_24738);
} else
{if((state_val_24753 === (7)))
{var inst_24748 = (state_24752[(2)]);var state_24752__$1 = state_24752;var statearr_24757_24869 = state_24752__$1;(statearr_24757_24869[(2)] = inst_24748);
(statearr_24757_24869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24753 === (6)))
{var inst_24738 = (state_24752[(8)]);var inst_24733 = (state_24752[(10)]);var inst_24738__$1 = cljs.core.async.chan.call(null,(1));var inst_24739 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24740 = [inst_24733,inst_24738__$1];var inst_24741 = (new cljs.core.PersistentVector(null,2,(5),inst_24739,inst_24740,null));var state_24752__$1 = (function (){var statearr_24758 = state_24752;(statearr_24758[(8)] = inst_24738__$1);
return statearr_24758;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24752__$1,(8),jobs,inst_24741);
} else
{if((state_val_24753 === (5)))
{var inst_24736 = cljs.core.async.close_BANG_.call(null,jobs);var state_24752__$1 = state_24752;var statearr_24759_24870 = state_24752__$1;(statearr_24759_24870[(2)] = inst_24736);
(statearr_24759_24870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24753 === (4)))
{var inst_24733 = (state_24752[(10)]);var inst_24733__$1 = (state_24752[(2)]);var inst_24734 = (inst_24733__$1 == null);var state_24752__$1 = (function (){var statearr_24760 = state_24752;(statearr_24760[(10)] = inst_24733__$1);
return statearr_24760;
})();if(cljs.core.truth_(inst_24734))
{var statearr_24761_24871 = state_24752__$1;(statearr_24761_24871[(1)] = (5));
} else
{var statearr_24762_24872 = state_24752__$1;(statearr_24762_24872[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24753 === (3)))
{var inst_24750 = (state_24752[(2)]);var state_24752__$1 = state_24752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24752__$1,inst_24750);
} else
{if((state_val_24753 === (2)))
{var state_24752__$1 = state_24752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24752__$1,(4),from);
} else
{if((state_val_24753 === (1)))
{var state_24752__$1 = state_24752;var statearr_24763_24873 = state_24752__$1;(statearr_24763_24873[(2)] = null);
(statearr_24763_24873[(1)] = (2));
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
});})(c__11517__auto___24867,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___24867,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24767 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24767[(0)] = state_machine__11462__auto__);
(statearr_24767[(1)] = (1));
return statearr_24767;
});
var state_machine__11462__auto____1 = (function (state_24752){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24752);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24768){if((e24768 instanceof Object))
{var ex__11465__auto__ = e24768;var statearr_24769_24874 = state_24752;(statearr_24769_24874[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24768;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24875 = state_24752;
state_24752 = G__24875;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24752){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24867,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24770 = f__11518__auto__.call(null);(statearr_24770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24867);
return statearr_24770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24867,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24808){var state_val_24809 = (state_24808[(1)]);if((state_val_24809 === (7)))
{var inst_24804 = (state_24808[(2)]);var state_24808__$1 = state_24808;var statearr_24810_24876 = state_24808__$1;(statearr_24810_24876[(2)] = inst_24804);
(statearr_24810_24876[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (20)))
{var state_24808__$1 = state_24808;var statearr_24811_24877 = state_24808__$1;(statearr_24811_24877[(2)] = null);
(statearr_24811_24877[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (1)))
{var state_24808__$1 = state_24808;var statearr_24812_24878 = state_24808__$1;(statearr_24812_24878[(2)] = null);
(statearr_24812_24878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (4)))
{var inst_24773 = (state_24808[(7)]);var inst_24773__$1 = (state_24808[(2)]);var inst_24774 = (inst_24773__$1 == null);var state_24808__$1 = (function (){var statearr_24813 = state_24808;(statearr_24813[(7)] = inst_24773__$1);
return statearr_24813;
})();if(cljs.core.truth_(inst_24774))
{var statearr_24814_24879 = state_24808__$1;(statearr_24814_24879[(1)] = (5));
} else
{var statearr_24815_24880 = state_24808__$1;(statearr_24815_24880[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (15)))
{var inst_24786 = (state_24808[(8)]);var state_24808__$1 = state_24808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24808__$1,(18),to,inst_24786);
} else
{if((state_val_24809 === (21)))
{var inst_24799 = (state_24808[(2)]);var state_24808__$1 = state_24808;var statearr_24816_24881 = state_24808__$1;(statearr_24816_24881[(2)] = inst_24799);
(statearr_24816_24881[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (13)))
{var inst_24801 = (state_24808[(2)]);var state_24808__$1 = (function (){var statearr_24817 = state_24808;(statearr_24817[(9)] = inst_24801);
return statearr_24817;
})();var statearr_24818_24882 = state_24808__$1;(statearr_24818_24882[(2)] = null);
(statearr_24818_24882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (6)))
{var inst_24773 = (state_24808[(7)]);var state_24808__$1 = state_24808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(11),inst_24773);
} else
{if((state_val_24809 === (17)))
{var inst_24794 = (state_24808[(2)]);var state_24808__$1 = state_24808;if(cljs.core.truth_(inst_24794))
{var statearr_24819_24883 = state_24808__$1;(statearr_24819_24883[(1)] = (19));
} else
{var statearr_24820_24884 = state_24808__$1;(statearr_24820_24884[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (3)))
{var inst_24806 = (state_24808[(2)]);var state_24808__$1 = state_24808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else
{if((state_val_24809 === (12)))
{var inst_24783 = (state_24808[(10)]);var state_24808__$1 = state_24808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(14),inst_24783);
} else
{if((state_val_24809 === (2)))
{var state_24808__$1 = state_24808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(4),results);
} else
{if((state_val_24809 === (19)))
{var state_24808__$1 = state_24808;var statearr_24821_24885 = state_24808__$1;(statearr_24821_24885[(2)] = null);
(statearr_24821_24885[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (11)))
{var inst_24783 = (state_24808[(2)]);var state_24808__$1 = (function (){var statearr_24822 = state_24808;(statearr_24822[(10)] = inst_24783);
return statearr_24822;
})();var statearr_24823_24886 = state_24808__$1;(statearr_24823_24886[(2)] = null);
(statearr_24823_24886[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (9)))
{var state_24808__$1 = state_24808;var statearr_24824_24887 = state_24808__$1;(statearr_24824_24887[(2)] = null);
(statearr_24824_24887[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (5)))
{var state_24808__$1 = state_24808;if(cljs.core.truth_(close_QMARK_))
{var statearr_24825_24888 = state_24808__$1;(statearr_24825_24888[(1)] = (8));
} else
{var statearr_24826_24889 = state_24808__$1;(statearr_24826_24889[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (14)))
{var inst_24788 = (state_24808[(11)]);var inst_24786 = (state_24808[(8)]);var inst_24786__$1 = (state_24808[(2)]);var inst_24787 = (inst_24786__$1 == null);var inst_24788__$1 = cljs.core.not.call(null,inst_24787);var state_24808__$1 = (function (){var statearr_24827 = state_24808;(statearr_24827[(11)] = inst_24788__$1);
(statearr_24827[(8)] = inst_24786__$1);
return statearr_24827;
})();if(inst_24788__$1)
{var statearr_24828_24890 = state_24808__$1;(statearr_24828_24890[(1)] = (15));
} else
{var statearr_24829_24891 = state_24808__$1;(statearr_24829_24891[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (16)))
{var inst_24788 = (state_24808[(11)]);var state_24808__$1 = state_24808;var statearr_24830_24892 = state_24808__$1;(statearr_24830_24892[(2)] = inst_24788);
(statearr_24830_24892[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (10)))
{var inst_24780 = (state_24808[(2)]);var state_24808__$1 = state_24808;var statearr_24831_24893 = state_24808__$1;(statearr_24831_24893[(2)] = inst_24780);
(statearr_24831_24893[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (18)))
{var inst_24791 = (state_24808[(2)]);var state_24808__$1 = state_24808;var statearr_24832_24894 = state_24808__$1;(statearr_24832_24894[(2)] = inst_24791);
(statearr_24832_24894[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24809 === (8)))
{var inst_24777 = cljs.core.async.close_BANG_.call(null,to);var state_24808__$1 = state_24808;var statearr_24833_24895 = state_24808__$1;(statearr_24833_24895[(2)] = inst_24777);
(statearr_24833_24895[(1)] = (10));
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
var state_machine__11462__auto____0 = (function (){var statearr_24837 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24837[(0)] = state_machine__11462__auto__);
(statearr_24837[(1)] = (1));
return statearr_24837;
});
var state_machine__11462__auto____1 = (function (state_24808){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24808);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24838){if((e24838 instanceof Object))
{var ex__11465__auto__ = e24838;var statearr_24839_24896 = state_24808;(statearr_24839_24896[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24897 = state_24808;
state_24808 = G__24897;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24840 = f__11518__auto__.call(null);(statearr_24840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24840;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___24998 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24998,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24998,tc,fc){
return (function (state_24973){var state_val_24974 = (state_24973[(1)]);if((state_val_24974 === (7)))
{var inst_24969 = (state_24973[(2)]);var state_24973__$1 = state_24973;var statearr_24975_24999 = state_24973__$1;(statearr_24975_24999[(2)] = inst_24969);
(statearr_24975_24999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (1)))
{var state_24973__$1 = state_24973;var statearr_24976_25000 = state_24973__$1;(statearr_24976_25000[(2)] = null);
(statearr_24976_25000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (4)))
{var inst_24950 = (state_24973[(7)]);var inst_24950__$1 = (state_24973[(2)]);var inst_24951 = (inst_24950__$1 == null);var state_24973__$1 = (function (){var statearr_24977 = state_24973;(statearr_24977[(7)] = inst_24950__$1);
return statearr_24977;
})();if(cljs.core.truth_(inst_24951))
{var statearr_24978_25001 = state_24973__$1;(statearr_24978_25001[(1)] = (5));
} else
{var statearr_24979_25002 = state_24973__$1;(statearr_24979_25002[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (13)))
{var state_24973__$1 = state_24973;var statearr_24980_25003 = state_24973__$1;(statearr_24980_25003[(2)] = null);
(statearr_24980_25003[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (6)))
{var inst_24950 = (state_24973[(7)]);var inst_24956 = p.call(null,inst_24950);var state_24973__$1 = state_24973;if(cljs.core.truth_(inst_24956))
{var statearr_24981_25004 = state_24973__$1;(statearr_24981_25004[(1)] = (9));
} else
{var statearr_24982_25005 = state_24973__$1;(statearr_24982_25005[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (3)))
{var inst_24971 = (state_24973[(2)]);var state_24973__$1 = state_24973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24973__$1,inst_24971);
} else
{if((state_val_24974 === (12)))
{var state_24973__$1 = state_24973;var statearr_24983_25006 = state_24973__$1;(statearr_24983_25006[(2)] = null);
(statearr_24983_25006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (2)))
{var state_24973__$1 = state_24973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24973__$1,(4),ch);
} else
{if((state_val_24974 === (11)))
{var inst_24950 = (state_24973[(7)]);var inst_24960 = (state_24973[(2)]);var state_24973__$1 = state_24973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24973__$1,(8),inst_24960,inst_24950);
} else
{if((state_val_24974 === (9)))
{var state_24973__$1 = state_24973;var statearr_24984_25007 = state_24973__$1;(statearr_24984_25007[(2)] = tc);
(statearr_24984_25007[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (5)))
{var inst_24953 = cljs.core.async.close_BANG_.call(null,tc);var inst_24954 = cljs.core.async.close_BANG_.call(null,fc);var state_24973__$1 = (function (){var statearr_24985 = state_24973;(statearr_24985[(8)] = inst_24953);
return statearr_24985;
})();var statearr_24986_25008 = state_24973__$1;(statearr_24986_25008[(2)] = inst_24954);
(statearr_24986_25008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (14)))
{var inst_24967 = (state_24973[(2)]);var state_24973__$1 = state_24973;var statearr_24987_25009 = state_24973__$1;(statearr_24987_25009[(2)] = inst_24967);
(statearr_24987_25009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (10)))
{var state_24973__$1 = state_24973;var statearr_24988_25010 = state_24973__$1;(statearr_24988_25010[(2)] = fc);
(statearr_24988_25010[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24974 === (8)))
{var inst_24962 = (state_24973[(2)]);var state_24973__$1 = state_24973;if(cljs.core.truth_(inst_24962))
{var statearr_24989_25011 = state_24973__$1;(statearr_24989_25011[(1)] = (12));
} else
{var statearr_24990_25012 = state_24973__$1;(statearr_24990_25012[(1)] = (13));
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
});})(c__11517__auto___24998,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___24998,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24994 = [null,null,null,null,null,null,null,null,null];(statearr_24994[(0)] = state_machine__11462__auto__);
(statearr_24994[(1)] = (1));
return statearr_24994;
});
var state_machine__11462__auto____1 = (function (state_24973){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24973);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24995){if((e24995 instanceof Object))
{var ex__11465__auto__ = e24995;var statearr_24996_25013 = state_24973;(statearr_24996_25013[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24995;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25014 = state_24973;
state_24973 = G__25014;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24973){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24998,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_24997 = f__11518__auto__.call(null);(statearr_24997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24998);
return statearr_24997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24998,tc,fc))
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
return (function (state_25061){var state_val_25062 = (state_25061[(1)]);if((state_val_25062 === (7)))
{var inst_25057 = (state_25061[(2)]);var state_25061__$1 = state_25061;var statearr_25063_25079 = state_25061__$1;(statearr_25063_25079[(2)] = inst_25057);
(statearr_25063_25079[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25062 === (6)))
{var inst_25047 = (state_25061[(7)]);var inst_25050 = (state_25061[(8)]);var inst_25054 = f.call(null,inst_25047,inst_25050);var inst_25047__$1 = inst_25054;var state_25061__$1 = (function (){var statearr_25064 = state_25061;(statearr_25064[(7)] = inst_25047__$1);
return statearr_25064;
})();var statearr_25065_25080 = state_25061__$1;(statearr_25065_25080[(2)] = null);
(statearr_25065_25080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25062 === (5)))
{var inst_25047 = (state_25061[(7)]);var state_25061__$1 = state_25061;var statearr_25066_25081 = state_25061__$1;(statearr_25066_25081[(2)] = inst_25047);
(statearr_25066_25081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25062 === (4)))
{var inst_25050 = (state_25061[(8)]);var inst_25050__$1 = (state_25061[(2)]);var inst_25051 = (inst_25050__$1 == null);var state_25061__$1 = (function (){var statearr_25067 = state_25061;(statearr_25067[(8)] = inst_25050__$1);
return statearr_25067;
})();if(cljs.core.truth_(inst_25051))
{var statearr_25068_25082 = state_25061__$1;(statearr_25068_25082[(1)] = (5));
} else
{var statearr_25069_25083 = state_25061__$1;(statearr_25069_25083[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25062 === (3)))
{var inst_25059 = (state_25061[(2)]);var state_25061__$1 = state_25061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25061__$1,inst_25059);
} else
{if((state_val_25062 === (2)))
{var state_25061__$1 = state_25061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25061__$1,(4),ch);
} else
{if((state_val_25062 === (1)))
{var inst_25047 = init;var state_25061__$1 = (function (){var statearr_25070 = state_25061;(statearr_25070[(7)] = inst_25047);
return statearr_25070;
})();var statearr_25071_25084 = state_25061__$1;(statearr_25071_25084[(2)] = null);
(statearr_25071_25084[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25075 = [null,null,null,null,null,null,null,null,null];(statearr_25075[(0)] = state_machine__11462__auto__);
(statearr_25075[(1)] = (1));
return statearr_25075;
});
var state_machine__11462__auto____1 = (function (state_25061){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25061);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25076){if((e25076 instanceof Object))
{var ex__11465__auto__ = e25076;var statearr_25077_25085 = state_25061;(statearr_25077_25085[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25076;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25086 = state_25061;
state_25061 = G__25086;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25061){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25078 = f__11518__auto__.call(null);(statearr_25078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25078;
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
return (function (state_25160){var state_val_25161 = (state_25160[(1)]);if((state_val_25161 === (7)))
{var inst_25142 = (state_25160[(2)]);var state_25160__$1 = state_25160;var statearr_25162_25185 = state_25160__$1;(statearr_25162_25185[(2)] = inst_25142);
(statearr_25162_25185[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (1)))
{var inst_25136 = cljs.core.seq.call(null,coll);var inst_25137 = inst_25136;var state_25160__$1 = (function (){var statearr_25163 = state_25160;(statearr_25163[(7)] = inst_25137);
return statearr_25163;
})();var statearr_25164_25186 = state_25160__$1;(statearr_25164_25186[(2)] = null);
(statearr_25164_25186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (4)))
{var inst_25137 = (state_25160[(7)]);var inst_25140 = cljs.core.first.call(null,inst_25137);var state_25160__$1 = state_25160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(7),ch,inst_25140);
} else
{if((state_val_25161 === (13)))
{var inst_25154 = (state_25160[(2)]);var state_25160__$1 = state_25160;var statearr_25165_25187 = state_25160__$1;(statearr_25165_25187[(2)] = inst_25154);
(statearr_25165_25187[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (6)))
{var inst_25145 = (state_25160[(2)]);var state_25160__$1 = state_25160;if(cljs.core.truth_(inst_25145))
{var statearr_25166_25188 = state_25160__$1;(statearr_25166_25188[(1)] = (8));
} else
{var statearr_25167_25189 = state_25160__$1;(statearr_25167_25189[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (3)))
{var inst_25158 = (state_25160[(2)]);var state_25160__$1 = state_25160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else
{if((state_val_25161 === (12)))
{var state_25160__$1 = state_25160;var statearr_25168_25190 = state_25160__$1;(statearr_25168_25190[(2)] = null);
(statearr_25168_25190[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (2)))
{var inst_25137 = (state_25160[(7)]);var state_25160__$1 = state_25160;if(cljs.core.truth_(inst_25137))
{var statearr_25169_25191 = state_25160__$1;(statearr_25169_25191[(1)] = (4));
} else
{var statearr_25170_25192 = state_25160__$1;(statearr_25170_25192[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (11)))
{var inst_25151 = cljs.core.async.close_BANG_.call(null,ch);var state_25160__$1 = state_25160;var statearr_25171_25193 = state_25160__$1;(statearr_25171_25193[(2)] = inst_25151);
(statearr_25171_25193[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (9)))
{var state_25160__$1 = state_25160;if(cljs.core.truth_(close_QMARK_))
{var statearr_25172_25194 = state_25160__$1;(statearr_25172_25194[(1)] = (11));
} else
{var statearr_25173_25195 = state_25160__$1;(statearr_25173_25195[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (5)))
{var inst_25137 = (state_25160[(7)]);var state_25160__$1 = state_25160;var statearr_25174_25196 = state_25160__$1;(statearr_25174_25196[(2)] = inst_25137);
(statearr_25174_25196[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (10)))
{var inst_25156 = (state_25160[(2)]);var state_25160__$1 = state_25160;var statearr_25175_25197 = state_25160__$1;(statearr_25175_25197[(2)] = inst_25156);
(statearr_25175_25197[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (8)))
{var inst_25137 = (state_25160[(7)]);var inst_25147 = cljs.core.next.call(null,inst_25137);var inst_25137__$1 = inst_25147;var state_25160__$1 = (function (){var statearr_25176 = state_25160;(statearr_25176[(7)] = inst_25137__$1);
return statearr_25176;
})();var statearr_25177_25198 = state_25160__$1;(statearr_25177_25198[(2)] = null);
(statearr_25177_25198[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25181 = [null,null,null,null,null,null,null,null];(statearr_25181[(0)] = state_machine__11462__auto__);
(statearr_25181[(1)] = (1));
return statearr_25181;
});
var state_machine__11462__auto____1 = (function (state_25160){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25160);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25182){if((e25182 instanceof Object))
{var ex__11465__auto__ = e25182;var statearr_25183_25199 = state_25160;(statearr_25183_25199[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25200 = state_25160;
state_25160 = G__25200;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25184 = f__11518__auto__.call(null);(statearr_25184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25184;
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
cljs.core.async.Mux = (function (){var obj25202 = {};return obj25202;
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
cljs.core.async.Mult = (function (){var obj25204 = {};return obj25204;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25426 = (function (cs,ch,mult,meta25427){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25427 = meta25427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25426.cljs$lang$type = true;
cljs.core.async.t25426.cljs$lang$ctorStr = "cljs.core.async/t25426";
cljs.core.async.t25426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25426");
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25428){var self__ = this;
var _25428__$1 = this;return self__.meta25427;
});})(cs))
;
cljs.core.async.t25426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25428,meta25427__$1){var self__ = this;
var _25428__$1 = this;return (new cljs.core.async.t25426(self__.cs,self__.ch,self__.mult,meta25427__$1));
});})(cs))
;
cljs.core.async.__GT_t25426 = ((function (cs){
return (function __GT_t25426(cs__$1,ch__$1,mult__$1,meta25427){return (new cljs.core.async.t25426(cs__$1,ch__$1,mult__$1,meta25427));
});})(cs))
;
}
return (new cljs.core.async.t25426(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25647 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25647,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25647,cs,m,dchan,dctr,done){
return (function (state_25559){var state_val_25560 = (state_25559[(1)]);if((state_val_25560 === (7)))
{var inst_25555 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25561_25648 = state_25559__$1;(statearr_25561_25648[(2)] = inst_25555);
(statearr_25561_25648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (20)))
{var inst_25460 = (state_25559[(7)]);var inst_25470 = cljs.core.first.call(null,inst_25460);var inst_25471 = cljs.core.nth.call(null,inst_25470,(0),null);var inst_25472 = cljs.core.nth.call(null,inst_25470,(1),null);var state_25559__$1 = (function (){var statearr_25562 = state_25559;(statearr_25562[(8)] = inst_25471);
return statearr_25562;
})();if(cljs.core.truth_(inst_25472))
{var statearr_25563_25649 = state_25559__$1;(statearr_25563_25649[(1)] = (22));
} else
{var statearr_25564_25650 = state_25559__$1;(statearr_25564_25650[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (27)))
{var inst_25502 = (state_25559[(9)]);var inst_25507 = (state_25559[(10)]);var inst_25431 = (state_25559[(11)]);var inst_25500 = (state_25559[(12)]);var inst_25507__$1 = cljs.core._nth.call(null,inst_25500,inst_25502);var inst_25508 = cljs.core.async.put_BANG_.call(null,inst_25507__$1,inst_25431,done);var state_25559__$1 = (function (){var statearr_25565 = state_25559;(statearr_25565[(10)] = inst_25507__$1);
return statearr_25565;
})();if(cljs.core.truth_(inst_25508))
{var statearr_25566_25651 = state_25559__$1;(statearr_25566_25651[(1)] = (30));
} else
{var statearr_25567_25652 = state_25559__$1;(statearr_25567_25652[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (1)))
{var state_25559__$1 = state_25559;var statearr_25568_25653 = state_25559__$1;(statearr_25568_25653[(2)] = null);
(statearr_25568_25653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (24)))
{var inst_25460 = (state_25559[(7)]);var inst_25477 = (state_25559[(2)]);var inst_25478 = cljs.core.next.call(null,inst_25460);var inst_25440 = inst_25478;var inst_25441 = null;var inst_25442 = (0);var inst_25443 = (0);var state_25559__$1 = (function (){var statearr_25569 = state_25559;(statearr_25569[(13)] = inst_25441);
(statearr_25569[(14)] = inst_25477);
(statearr_25569[(15)] = inst_25440);
(statearr_25569[(16)] = inst_25442);
(statearr_25569[(17)] = inst_25443);
return statearr_25569;
})();var statearr_25570_25654 = state_25559__$1;(statearr_25570_25654[(2)] = null);
(statearr_25570_25654[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (39)))
{var state_25559__$1 = state_25559;var statearr_25574_25655 = state_25559__$1;(statearr_25574_25655[(2)] = null);
(statearr_25574_25655[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (4)))
{var inst_25431 = (state_25559[(11)]);var inst_25431__$1 = (state_25559[(2)]);var inst_25432 = (inst_25431__$1 == null);var state_25559__$1 = (function (){var statearr_25575 = state_25559;(statearr_25575[(11)] = inst_25431__$1);
return statearr_25575;
})();if(cljs.core.truth_(inst_25432))
{var statearr_25576_25656 = state_25559__$1;(statearr_25576_25656[(1)] = (5));
} else
{var statearr_25577_25657 = state_25559__$1;(statearr_25577_25657[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (15)))
{var inst_25441 = (state_25559[(13)]);var inst_25440 = (state_25559[(15)]);var inst_25442 = (state_25559[(16)]);var inst_25443 = (state_25559[(17)]);var inst_25456 = (state_25559[(2)]);var inst_25457 = (inst_25443 + (1));var tmp25571 = inst_25441;var tmp25572 = inst_25440;var tmp25573 = inst_25442;var inst_25440__$1 = tmp25572;var inst_25441__$1 = tmp25571;var inst_25442__$1 = tmp25573;var inst_25443__$1 = inst_25457;var state_25559__$1 = (function (){var statearr_25578 = state_25559;(statearr_25578[(13)] = inst_25441__$1);
(statearr_25578[(18)] = inst_25456);
(statearr_25578[(15)] = inst_25440__$1);
(statearr_25578[(16)] = inst_25442__$1);
(statearr_25578[(17)] = inst_25443__$1);
return statearr_25578;
})();var statearr_25579_25658 = state_25559__$1;(statearr_25579_25658[(2)] = null);
(statearr_25579_25658[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (21)))
{var inst_25481 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25583_25659 = state_25559__$1;(statearr_25583_25659[(2)] = inst_25481);
(statearr_25583_25659[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (31)))
{var inst_25507 = (state_25559[(10)]);var inst_25511 = done.call(null,null);var inst_25512 = cljs.core.async.untap_STAR_.call(null,m,inst_25507);var state_25559__$1 = (function (){var statearr_25584 = state_25559;(statearr_25584[(19)] = inst_25511);
return statearr_25584;
})();var statearr_25585_25660 = state_25559__$1;(statearr_25585_25660[(2)] = inst_25512);
(statearr_25585_25660[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (32)))
{var inst_25502 = (state_25559[(9)]);var inst_25499 = (state_25559[(20)]);var inst_25500 = (state_25559[(12)]);var inst_25501 = (state_25559[(21)]);var inst_25514 = (state_25559[(2)]);var inst_25515 = (inst_25502 + (1));var tmp25580 = inst_25499;var tmp25581 = inst_25500;var tmp25582 = inst_25501;var inst_25499__$1 = tmp25580;var inst_25500__$1 = tmp25581;var inst_25501__$1 = tmp25582;var inst_25502__$1 = inst_25515;var state_25559__$1 = (function (){var statearr_25586 = state_25559;(statearr_25586[(9)] = inst_25502__$1);
(statearr_25586[(20)] = inst_25499__$1);
(statearr_25586[(12)] = inst_25500__$1);
(statearr_25586[(22)] = inst_25514);
(statearr_25586[(21)] = inst_25501__$1);
return statearr_25586;
})();var statearr_25587_25661 = state_25559__$1;(statearr_25587_25661[(2)] = null);
(statearr_25587_25661[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (40)))
{var inst_25527 = (state_25559[(23)]);var inst_25531 = done.call(null,null);var inst_25532 = cljs.core.async.untap_STAR_.call(null,m,inst_25527);var state_25559__$1 = (function (){var statearr_25588 = state_25559;(statearr_25588[(24)] = inst_25531);
return statearr_25588;
})();var statearr_25589_25662 = state_25559__$1;(statearr_25589_25662[(2)] = inst_25532);
(statearr_25589_25662[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (33)))
{var inst_25518 = (state_25559[(25)]);var inst_25520 = cljs.core.chunked_seq_QMARK_.call(null,inst_25518);var state_25559__$1 = state_25559;if(inst_25520)
{var statearr_25590_25663 = state_25559__$1;(statearr_25590_25663[(1)] = (36));
} else
{var statearr_25591_25664 = state_25559__$1;(statearr_25591_25664[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (13)))
{var inst_25450 = (state_25559[(26)]);var inst_25453 = cljs.core.async.close_BANG_.call(null,inst_25450);var state_25559__$1 = state_25559;var statearr_25592_25665 = state_25559__$1;(statearr_25592_25665[(2)] = inst_25453);
(statearr_25592_25665[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (22)))
{var inst_25471 = (state_25559[(8)]);var inst_25474 = cljs.core.async.close_BANG_.call(null,inst_25471);var state_25559__$1 = state_25559;var statearr_25593_25666 = state_25559__$1;(statearr_25593_25666[(2)] = inst_25474);
(statearr_25593_25666[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (36)))
{var inst_25518 = (state_25559[(25)]);var inst_25522 = cljs.core.chunk_first.call(null,inst_25518);var inst_25523 = cljs.core.chunk_rest.call(null,inst_25518);var inst_25524 = cljs.core.count.call(null,inst_25522);var inst_25499 = inst_25523;var inst_25500 = inst_25522;var inst_25501 = inst_25524;var inst_25502 = (0);var state_25559__$1 = (function (){var statearr_25594 = state_25559;(statearr_25594[(9)] = inst_25502);
(statearr_25594[(20)] = inst_25499);
(statearr_25594[(12)] = inst_25500);
(statearr_25594[(21)] = inst_25501);
return statearr_25594;
})();var statearr_25595_25667 = state_25559__$1;(statearr_25595_25667[(2)] = null);
(statearr_25595_25667[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (41)))
{var inst_25518 = (state_25559[(25)]);var inst_25534 = (state_25559[(2)]);var inst_25535 = cljs.core.next.call(null,inst_25518);var inst_25499 = inst_25535;var inst_25500 = null;var inst_25501 = (0);var inst_25502 = (0);var state_25559__$1 = (function (){var statearr_25596 = state_25559;(statearr_25596[(9)] = inst_25502);
(statearr_25596[(20)] = inst_25499);
(statearr_25596[(27)] = inst_25534);
(statearr_25596[(12)] = inst_25500);
(statearr_25596[(21)] = inst_25501);
return statearr_25596;
})();var statearr_25597_25668 = state_25559__$1;(statearr_25597_25668[(2)] = null);
(statearr_25597_25668[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (43)))
{var state_25559__$1 = state_25559;var statearr_25598_25669 = state_25559__$1;(statearr_25598_25669[(2)] = null);
(statearr_25598_25669[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (29)))
{var inst_25543 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25599_25670 = state_25559__$1;(statearr_25599_25670[(2)] = inst_25543);
(statearr_25599_25670[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (44)))
{var inst_25552 = (state_25559[(2)]);var state_25559__$1 = (function (){var statearr_25600 = state_25559;(statearr_25600[(28)] = inst_25552);
return statearr_25600;
})();var statearr_25601_25671 = state_25559__$1;(statearr_25601_25671[(2)] = null);
(statearr_25601_25671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (6)))
{var inst_25491 = (state_25559[(29)]);var inst_25490 = cljs.core.deref.call(null,cs);var inst_25491__$1 = cljs.core.keys.call(null,inst_25490);var inst_25492 = cljs.core.count.call(null,inst_25491__$1);var inst_25493 = cljs.core.reset_BANG_.call(null,dctr,inst_25492);var inst_25498 = cljs.core.seq.call(null,inst_25491__$1);var inst_25499 = inst_25498;var inst_25500 = null;var inst_25501 = (0);var inst_25502 = (0);var state_25559__$1 = (function (){var statearr_25602 = state_25559;(statearr_25602[(9)] = inst_25502);
(statearr_25602[(20)] = inst_25499);
(statearr_25602[(30)] = inst_25493);
(statearr_25602[(29)] = inst_25491__$1);
(statearr_25602[(12)] = inst_25500);
(statearr_25602[(21)] = inst_25501);
return statearr_25602;
})();var statearr_25603_25672 = state_25559__$1;(statearr_25603_25672[(2)] = null);
(statearr_25603_25672[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (28)))
{var inst_25499 = (state_25559[(20)]);var inst_25518 = (state_25559[(25)]);var inst_25518__$1 = cljs.core.seq.call(null,inst_25499);var state_25559__$1 = (function (){var statearr_25604 = state_25559;(statearr_25604[(25)] = inst_25518__$1);
return statearr_25604;
})();if(inst_25518__$1)
{var statearr_25605_25673 = state_25559__$1;(statearr_25605_25673[(1)] = (33));
} else
{var statearr_25606_25674 = state_25559__$1;(statearr_25606_25674[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (25)))
{var inst_25502 = (state_25559[(9)]);var inst_25501 = (state_25559[(21)]);var inst_25504 = (inst_25502 < inst_25501);var inst_25505 = inst_25504;var state_25559__$1 = state_25559;if(cljs.core.truth_(inst_25505))
{var statearr_25607_25675 = state_25559__$1;(statearr_25607_25675[(1)] = (27));
} else
{var statearr_25608_25676 = state_25559__$1;(statearr_25608_25676[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (34)))
{var state_25559__$1 = state_25559;var statearr_25609_25677 = state_25559__$1;(statearr_25609_25677[(2)] = null);
(statearr_25609_25677[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (17)))
{var state_25559__$1 = state_25559;var statearr_25610_25678 = state_25559__$1;(statearr_25610_25678[(2)] = null);
(statearr_25610_25678[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (3)))
{var inst_25557 = (state_25559[(2)]);var state_25559__$1 = state_25559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25559__$1,inst_25557);
} else
{if((state_val_25560 === (12)))
{var inst_25486 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25611_25679 = state_25559__$1;(statearr_25611_25679[(2)] = inst_25486);
(statearr_25611_25679[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (2)))
{var state_25559__$1 = state_25559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25559__$1,(4),ch);
} else
{if((state_val_25560 === (23)))
{var state_25559__$1 = state_25559;var statearr_25612_25680 = state_25559__$1;(statearr_25612_25680[(2)] = null);
(statearr_25612_25680[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (35)))
{var inst_25541 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25613_25681 = state_25559__$1;(statearr_25613_25681[(2)] = inst_25541);
(statearr_25613_25681[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (19)))
{var inst_25460 = (state_25559[(7)]);var inst_25464 = cljs.core.chunk_first.call(null,inst_25460);var inst_25465 = cljs.core.chunk_rest.call(null,inst_25460);var inst_25466 = cljs.core.count.call(null,inst_25464);var inst_25440 = inst_25465;var inst_25441 = inst_25464;var inst_25442 = inst_25466;var inst_25443 = (0);var state_25559__$1 = (function (){var statearr_25614 = state_25559;(statearr_25614[(13)] = inst_25441);
(statearr_25614[(15)] = inst_25440);
(statearr_25614[(16)] = inst_25442);
(statearr_25614[(17)] = inst_25443);
return statearr_25614;
})();var statearr_25615_25682 = state_25559__$1;(statearr_25615_25682[(2)] = null);
(statearr_25615_25682[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (11)))
{var inst_25460 = (state_25559[(7)]);var inst_25440 = (state_25559[(15)]);var inst_25460__$1 = cljs.core.seq.call(null,inst_25440);var state_25559__$1 = (function (){var statearr_25616 = state_25559;(statearr_25616[(7)] = inst_25460__$1);
return statearr_25616;
})();if(inst_25460__$1)
{var statearr_25617_25683 = state_25559__$1;(statearr_25617_25683[(1)] = (16));
} else
{var statearr_25618_25684 = state_25559__$1;(statearr_25618_25684[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (9)))
{var inst_25488 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25619_25685 = state_25559__$1;(statearr_25619_25685[(2)] = inst_25488);
(statearr_25619_25685[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (5)))
{var inst_25438 = cljs.core.deref.call(null,cs);var inst_25439 = cljs.core.seq.call(null,inst_25438);var inst_25440 = inst_25439;var inst_25441 = null;var inst_25442 = (0);var inst_25443 = (0);var state_25559__$1 = (function (){var statearr_25620 = state_25559;(statearr_25620[(13)] = inst_25441);
(statearr_25620[(15)] = inst_25440);
(statearr_25620[(16)] = inst_25442);
(statearr_25620[(17)] = inst_25443);
return statearr_25620;
})();var statearr_25621_25686 = state_25559__$1;(statearr_25621_25686[(2)] = null);
(statearr_25621_25686[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (14)))
{var state_25559__$1 = state_25559;var statearr_25622_25687 = state_25559__$1;(statearr_25622_25687[(2)] = null);
(statearr_25622_25687[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (45)))
{var inst_25549 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25623_25688 = state_25559__$1;(statearr_25623_25688[(2)] = inst_25549);
(statearr_25623_25688[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (26)))
{var inst_25491 = (state_25559[(29)]);var inst_25545 = (state_25559[(2)]);var inst_25546 = cljs.core.seq.call(null,inst_25491);var state_25559__$1 = (function (){var statearr_25624 = state_25559;(statearr_25624[(31)] = inst_25545);
return statearr_25624;
})();if(inst_25546)
{var statearr_25625_25689 = state_25559__$1;(statearr_25625_25689[(1)] = (42));
} else
{var statearr_25626_25690 = state_25559__$1;(statearr_25626_25690[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (16)))
{var inst_25460 = (state_25559[(7)]);var inst_25462 = cljs.core.chunked_seq_QMARK_.call(null,inst_25460);var state_25559__$1 = state_25559;if(inst_25462)
{var statearr_25627_25691 = state_25559__$1;(statearr_25627_25691[(1)] = (19));
} else
{var statearr_25628_25692 = state_25559__$1;(statearr_25628_25692[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (38)))
{var inst_25538 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25629_25693 = state_25559__$1;(statearr_25629_25693[(2)] = inst_25538);
(statearr_25629_25693[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (30)))
{var state_25559__$1 = state_25559;var statearr_25630_25694 = state_25559__$1;(statearr_25630_25694[(2)] = null);
(statearr_25630_25694[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (10)))
{var inst_25441 = (state_25559[(13)]);var inst_25443 = (state_25559[(17)]);var inst_25449 = cljs.core._nth.call(null,inst_25441,inst_25443);var inst_25450 = cljs.core.nth.call(null,inst_25449,(0),null);var inst_25451 = cljs.core.nth.call(null,inst_25449,(1),null);var state_25559__$1 = (function (){var statearr_25631 = state_25559;(statearr_25631[(26)] = inst_25450);
return statearr_25631;
})();if(cljs.core.truth_(inst_25451))
{var statearr_25632_25695 = state_25559__$1;(statearr_25632_25695[(1)] = (13));
} else
{var statearr_25633_25696 = state_25559__$1;(statearr_25633_25696[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (18)))
{var inst_25484 = (state_25559[(2)]);var state_25559__$1 = state_25559;var statearr_25634_25697 = state_25559__$1;(statearr_25634_25697[(2)] = inst_25484);
(statearr_25634_25697[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (42)))
{var state_25559__$1 = state_25559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25559__$1,(45),dchan);
} else
{if((state_val_25560 === (37)))
{var inst_25431 = (state_25559[(11)]);var inst_25518 = (state_25559[(25)]);var inst_25527 = (state_25559[(23)]);var inst_25527__$1 = cljs.core.first.call(null,inst_25518);var inst_25528 = cljs.core.async.put_BANG_.call(null,inst_25527__$1,inst_25431,done);var state_25559__$1 = (function (){var statearr_25635 = state_25559;(statearr_25635[(23)] = inst_25527__$1);
return statearr_25635;
})();if(cljs.core.truth_(inst_25528))
{var statearr_25636_25698 = state_25559__$1;(statearr_25636_25698[(1)] = (39));
} else
{var statearr_25637_25699 = state_25559__$1;(statearr_25637_25699[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25560 === (8)))
{var inst_25442 = (state_25559[(16)]);var inst_25443 = (state_25559[(17)]);var inst_25445 = (inst_25443 < inst_25442);var inst_25446 = inst_25445;var state_25559__$1 = state_25559;if(cljs.core.truth_(inst_25446))
{var statearr_25638_25700 = state_25559__$1;(statearr_25638_25700[(1)] = (10));
} else
{var statearr_25639_25701 = state_25559__$1;(statearr_25639_25701[(1)] = (11));
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
});})(c__11517__auto___25647,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25647,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25643[(0)] = state_machine__11462__auto__);
(statearr_25643[(1)] = (1));
return statearr_25643;
});
var state_machine__11462__auto____1 = (function (state_25559){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25559);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25644){if((e25644 instanceof Object))
{var ex__11465__auto__ = e25644;var statearr_25645_25702 = state_25559;(statearr_25645_25702[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25703 = state_25559;
state_25559 = G__25703;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25559){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25647,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25646 = f__11518__auto__.call(null);(statearr_25646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25647);
return statearr_25646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25647,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25705 = {};return obj25705;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25706){var map__25711 = p__25706;var map__25711__$1 = ((cljs.core.seq_QMARK_.call(null,map__25711))?cljs.core.apply.call(null,cljs.core.hash_map,map__25711):map__25711);var opts = map__25711__$1;var statearr_25712_25715 = state;(statearr_25712_25715[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25711,map__25711__$1,opts){
return (function (val){var statearr_25713_25716 = state;(statearr_25713_25716[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25711,map__25711__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25714_25717 = state;(statearr_25714_25717[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25706 = null;if (arguments.length > 3) {
  p__25706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25706);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25718){
var state = cljs.core.first(arglist__25718);
arglist__25718 = cljs.core.next(arglist__25718);
var cont_block = cljs.core.first(arglist__25718);
arglist__25718 = cljs.core.next(arglist__25718);
var ports = cljs.core.first(arglist__25718);
var p__25706 = cljs.core.rest(arglist__25718);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25706);
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
;var m = (function (){if(typeof cljs.core.async.t25838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25838 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25839){
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
this.meta25839 = meta25839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25838.cljs$lang$type = true;
cljs.core.async.t25838.cljs$lang$ctorStr = "cljs.core.async/t25838";
cljs.core.async.t25838.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25838");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25840){var self__ = this;
var _25840__$1 = this;return self__.meta25839;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25840,meta25839__$1){var self__ = this;
var _25840__$1 = this;return (new cljs.core.async.t25838(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25839__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25838 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25839){return (new cljs.core.async.t25838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25839));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25838(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___25957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25910){var state_val_25911 = (state_25910[(1)]);if((state_val_25911 === (7)))
{var inst_25854 = (state_25910[(7)]);var inst_25859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25854);var state_25910__$1 = state_25910;var statearr_25912_25958 = state_25910__$1;(statearr_25912_25958[(2)] = inst_25859);
(statearr_25912_25958[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (20)))
{var inst_25869 = (state_25910[(8)]);var state_25910__$1 = state_25910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25910__$1,(23),out,inst_25869);
} else
{if((state_val_25911 === (1)))
{var inst_25844 = (state_25910[(9)]);var inst_25844__$1 = calc_state.call(null);var inst_25845 = cljs.core.seq_QMARK_.call(null,inst_25844__$1);var state_25910__$1 = (function (){var statearr_25913 = state_25910;(statearr_25913[(9)] = inst_25844__$1);
return statearr_25913;
})();if(inst_25845)
{var statearr_25914_25959 = state_25910__$1;(statearr_25914_25959[(1)] = (2));
} else
{var statearr_25915_25960 = state_25910__$1;(statearr_25915_25960[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (24)))
{var inst_25862 = (state_25910[(10)]);var inst_25854 = inst_25862;var state_25910__$1 = (function (){var statearr_25916 = state_25910;(statearr_25916[(7)] = inst_25854);
return statearr_25916;
})();var statearr_25917_25961 = state_25910__$1;(statearr_25917_25961[(2)] = null);
(statearr_25917_25961[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (4)))
{var inst_25844 = (state_25910[(9)]);var inst_25850 = (state_25910[(2)]);var inst_25851 = cljs.core.get.call(null,inst_25850,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25852 = cljs.core.get.call(null,inst_25850,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25853 = cljs.core.get.call(null,inst_25850,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25854 = inst_25844;var state_25910__$1 = (function (){var statearr_25918 = state_25910;(statearr_25918[(11)] = inst_25853);
(statearr_25918[(12)] = inst_25851);
(statearr_25918[(13)] = inst_25852);
(statearr_25918[(7)] = inst_25854);
return statearr_25918;
})();var statearr_25919_25962 = state_25910__$1;(statearr_25919_25962[(2)] = null);
(statearr_25919_25962[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (15)))
{var state_25910__$1 = state_25910;var statearr_25920_25963 = state_25910__$1;(statearr_25920_25963[(2)] = null);
(statearr_25920_25963[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (21)))
{var inst_25862 = (state_25910[(10)]);var inst_25854 = inst_25862;var state_25910__$1 = (function (){var statearr_25921 = state_25910;(statearr_25921[(7)] = inst_25854);
return statearr_25921;
})();var statearr_25922_25964 = state_25910__$1;(statearr_25922_25964[(2)] = null);
(statearr_25922_25964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (13)))
{var inst_25906 = (state_25910[(2)]);var state_25910__$1 = state_25910;var statearr_25923_25965 = state_25910__$1;(statearr_25923_25965[(2)] = inst_25906);
(statearr_25923_25965[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (22)))
{var inst_25904 = (state_25910[(2)]);var state_25910__$1 = state_25910;var statearr_25924_25966 = state_25910__$1;(statearr_25924_25966[(2)] = inst_25904);
(statearr_25924_25966[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (6)))
{var inst_25908 = (state_25910[(2)]);var state_25910__$1 = state_25910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25910__$1,inst_25908);
} else
{if((state_val_25911 === (25)))
{var state_25910__$1 = state_25910;var statearr_25925_25967 = state_25910__$1;(statearr_25925_25967[(2)] = null);
(statearr_25925_25967[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (17)))
{var inst_25884 = (state_25910[(14)]);var state_25910__$1 = state_25910;var statearr_25926_25968 = state_25910__$1;(statearr_25926_25968[(2)] = inst_25884);
(statearr_25926_25968[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (3)))
{var inst_25844 = (state_25910[(9)]);var state_25910__$1 = state_25910;var statearr_25927_25969 = state_25910__$1;(statearr_25927_25969[(2)] = inst_25844);
(statearr_25927_25969[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (12)))
{var inst_25865 = (state_25910[(15)]);var inst_25884 = (state_25910[(14)]);var inst_25870 = (state_25910[(16)]);var inst_25884__$1 = inst_25865.call(null,inst_25870);var state_25910__$1 = (function (){var statearr_25928 = state_25910;(statearr_25928[(14)] = inst_25884__$1);
return statearr_25928;
})();if(cljs.core.truth_(inst_25884__$1))
{var statearr_25929_25970 = state_25910__$1;(statearr_25929_25970[(1)] = (17));
} else
{var statearr_25930_25971 = state_25910__$1;(statearr_25930_25971[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (2)))
{var inst_25844 = (state_25910[(9)]);var inst_25847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25844);var state_25910__$1 = state_25910;var statearr_25931_25972 = state_25910__$1;(statearr_25931_25972[(2)] = inst_25847);
(statearr_25931_25972[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (23)))
{var inst_25895 = (state_25910[(2)]);var state_25910__$1 = state_25910;if(cljs.core.truth_(inst_25895))
{var statearr_25932_25973 = state_25910__$1;(statearr_25932_25973[(1)] = (24));
} else
{var statearr_25933_25974 = state_25910__$1;(statearr_25933_25974[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (19)))
{var inst_25892 = (state_25910[(2)]);var state_25910__$1 = state_25910;if(cljs.core.truth_(inst_25892))
{var statearr_25934_25975 = state_25910__$1;(statearr_25934_25975[(1)] = (20));
} else
{var statearr_25935_25976 = state_25910__$1;(statearr_25935_25976[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (11)))
{var inst_25869 = (state_25910[(8)]);var inst_25875 = (inst_25869 == null);var state_25910__$1 = state_25910;if(cljs.core.truth_(inst_25875))
{var statearr_25936_25977 = state_25910__$1;(statearr_25936_25977[(1)] = (14));
} else
{var statearr_25937_25978 = state_25910__$1;(statearr_25937_25978[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (9)))
{var inst_25862 = (state_25910[(10)]);var inst_25862__$1 = (state_25910[(2)]);var inst_25863 = cljs.core.get.call(null,inst_25862__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25864 = cljs.core.get.call(null,inst_25862__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25865 = cljs.core.get.call(null,inst_25862__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25910__$1 = (function (){var statearr_25938 = state_25910;(statearr_25938[(15)] = inst_25865);
(statearr_25938[(17)] = inst_25864);
(statearr_25938[(10)] = inst_25862__$1);
return statearr_25938;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25910__$1,(10),inst_25863);
} else
{if((state_val_25911 === (5)))
{var inst_25854 = (state_25910[(7)]);var inst_25857 = cljs.core.seq_QMARK_.call(null,inst_25854);var state_25910__$1 = state_25910;if(inst_25857)
{var statearr_25939_25979 = state_25910__$1;(statearr_25939_25979[(1)] = (7));
} else
{var statearr_25940_25980 = state_25910__$1;(statearr_25940_25980[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (14)))
{var inst_25870 = (state_25910[(16)]);var inst_25877 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25870);var state_25910__$1 = state_25910;var statearr_25941_25981 = state_25910__$1;(statearr_25941_25981[(2)] = inst_25877);
(statearr_25941_25981[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (26)))
{var inst_25900 = (state_25910[(2)]);var state_25910__$1 = state_25910;var statearr_25942_25982 = state_25910__$1;(statearr_25942_25982[(2)] = inst_25900);
(statearr_25942_25982[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (16)))
{var inst_25880 = (state_25910[(2)]);var inst_25881 = calc_state.call(null);var inst_25854 = inst_25881;var state_25910__$1 = (function (){var statearr_25943 = state_25910;(statearr_25943[(18)] = inst_25880);
(statearr_25943[(7)] = inst_25854);
return statearr_25943;
})();var statearr_25944_25983 = state_25910__$1;(statearr_25944_25983[(2)] = null);
(statearr_25944_25983[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (10)))
{var inst_25869 = (state_25910[(8)]);var inst_25870 = (state_25910[(16)]);var inst_25868 = (state_25910[(2)]);var inst_25869__$1 = cljs.core.nth.call(null,inst_25868,(0),null);var inst_25870__$1 = cljs.core.nth.call(null,inst_25868,(1),null);var inst_25871 = (inst_25869__$1 == null);var inst_25872 = cljs.core._EQ_.call(null,inst_25870__$1,change);var inst_25873 = (inst_25871) || (inst_25872);var state_25910__$1 = (function (){var statearr_25945 = state_25910;(statearr_25945[(8)] = inst_25869__$1);
(statearr_25945[(16)] = inst_25870__$1);
return statearr_25945;
})();if(cljs.core.truth_(inst_25873))
{var statearr_25946_25984 = state_25910__$1;(statearr_25946_25984[(1)] = (11));
} else
{var statearr_25947_25985 = state_25910__$1;(statearr_25947_25985[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (18)))
{var inst_25865 = (state_25910[(15)]);var inst_25864 = (state_25910[(17)]);var inst_25870 = (state_25910[(16)]);var inst_25887 = cljs.core.empty_QMARK_.call(null,inst_25865);var inst_25888 = inst_25864.call(null,inst_25870);var inst_25889 = cljs.core.not.call(null,inst_25888);var inst_25890 = (inst_25887) && (inst_25889);var state_25910__$1 = state_25910;var statearr_25948_25986 = state_25910__$1;(statearr_25948_25986[(2)] = inst_25890);
(statearr_25948_25986[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25911 === (8)))
{var inst_25854 = (state_25910[(7)]);var state_25910__$1 = state_25910;var statearr_25949_25987 = state_25910__$1;(statearr_25949_25987[(2)] = inst_25854);
(statearr_25949_25987[(1)] = (9));
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
});})(c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25953[(0)] = state_machine__11462__auto__);
(statearr_25953[(1)] = (1));
return statearr_25953;
});
var state_machine__11462__auto____1 = (function (state_25910){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25910);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25954){if((e25954 instanceof Object))
{var ex__11465__auto__ = e25954;var statearr_25955_25988 = state_25910;(statearr_25955_25988[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25910);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25989 = state_25910;
state_25910 = G__25989;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25910){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_25956 = f__11518__auto__.call(null);(statearr_25956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25957);
return statearr_25956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25991 = {};return obj25991;
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
return (function (p1__25992_SHARP_){if(cljs.core.truth_(p1__25992_SHARP_.call(null,topic)))
{return p1__25992_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25992_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26115 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26116){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26116 = meta26116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26115.cljs$lang$type = true;
cljs.core.async.t26115.cljs$lang$ctorStr = "cljs.core.async/t26115";
cljs.core.async.t26115.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26115");
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26117){var self__ = this;
var _26117__$1 = this;return self__.meta26116;
});})(mults,ensure_mult))
;
cljs.core.async.t26115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26117,meta26116__$1){var self__ = this;
var _26117__$1 = this;return (new cljs.core.async.t26115(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26116__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26115 = ((function (mults,ensure_mult){
return (function __GT_t26115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26116){return (new cljs.core.async.t26115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26116));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26115(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26237 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26237,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26237,mults,ensure_mult,p){
return (function (state_26189){var state_val_26190 = (state_26189[(1)]);if((state_val_26190 === (7)))
{var inst_26185 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26191_26238 = state_26189__$1;(statearr_26191_26238[(2)] = inst_26185);
(statearr_26191_26238[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (20)))
{var state_26189__$1 = state_26189;var statearr_26192_26239 = state_26189__$1;(statearr_26192_26239[(2)] = null);
(statearr_26192_26239[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (1)))
{var state_26189__$1 = state_26189;var statearr_26193_26240 = state_26189__$1;(statearr_26193_26240[(2)] = null);
(statearr_26193_26240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (24)))
{var inst_26168 = (state_26189[(7)]);var inst_26177 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26168);var state_26189__$1 = state_26189;var statearr_26194_26241 = state_26189__$1;(statearr_26194_26241[(2)] = inst_26177);
(statearr_26194_26241[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (4)))
{var inst_26120 = (state_26189[(8)]);var inst_26120__$1 = (state_26189[(2)]);var inst_26121 = (inst_26120__$1 == null);var state_26189__$1 = (function (){var statearr_26195 = state_26189;(statearr_26195[(8)] = inst_26120__$1);
return statearr_26195;
})();if(cljs.core.truth_(inst_26121))
{var statearr_26196_26242 = state_26189__$1;(statearr_26196_26242[(1)] = (5));
} else
{var statearr_26197_26243 = state_26189__$1;(statearr_26197_26243[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (15)))
{var inst_26162 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26198_26244 = state_26189__$1;(statearr_26198_26244[(2)] = inst_26162);
(statearr_26198_26244[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (21)))
{var inst_26182 = (state_26189[(2)]);var state_26189__$1 = (function (){var statearr_26199 = state_26189;(statearr_26199[(9)] = inst_26182);
return statearr_26199;
})();var statearr_26200_26245 = state_26189__$1;(statearr_26200_26245[(2)] = null);
(statearr_26200_26245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (13)))
{var inst_26144 = (state_26189[(10)]);var inst_26146 = cljs.core.chunked_seq_QMARK_.call(null,inst_26144);var state_26189__$1 = state_26189;if(inst_26146)
{var statearr_26201_26246 = state_26189__$1;(statearr_26201_26246[(1)] = (16));
} else
{var statearr_26202_26247 = state_26189__$1;(statearr_26202_26247[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (22)))
{var inst_26174 = (state_26189[(2)]);var state_26189__$1 = state_26189;if(cljs.core.truth_(inst_26174))
{var statearr_26203_26248 = state_26189__$1;(statearr_26203_26248[(1)] = (23));
} else
{var statearr_26204_26249 = state_26189__$1;(statearr_26204_26249[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (6)))
{var inst_26168 = (state_26189[(7)]);var inst_26120 = (state_26189[(8)]);var inst_26170 = (state_26189[(11)]);var inst_26168__$1 = topic_fn.call(null,inst_26120);var inst_26169 = cljs.core.deref.call(null,mults);var inst_26170__$1 = cljs.core.get.call(null,inst_26169,inst_26168__$1);var state_26189__$1 = (function (){var statearr_26205 = state_26189;(statearr_26205[(7)] = inst_26168__$1);
(statearr_26205[(11)] = inst_26170__$1);
return statearr_26205;
})();if(cljs.core.truth_(inst_26170__$1))
{var statearr_26206_26250 = state_26189__$1;(statearr_26206_26250[(1)] = (19));
} else
{var statearr_26207_26251 = state_26189__$1;(statearr_26207_26251[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (25)))
{var inst_26179 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26208_26252 = state_26189__$1;(statearr_26208_26252[(2)] = inst_26179);
(statearr_26208_26252[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (17)))
{var inst_26144 = (state_26189[(10)]);var inst_26153 = cljs.core.first.call(null,inst_26144);var inst_26154 = cljs.core.async.muxch_STAR_.call(null,inst_26153);var inst_26155 = cljs.core.async.close_BANG_.call(null,inst_26154);var inst_26156 = cljs.core.next.call(null,inst_26144);var inst_26130 = inst_26156;var inst_26131 = null;var inst_26132 = (0);var inst_26133 = (0);var state_26189__$1 = (function (){var statearr_26209 = state_26189;(statearr_26209[(12)] = inst_26131);
(statearr_26209[(13)] = inst_26132);
(statearr_26209[(14)] = inst_26133);
(statearr_26209[(15)] = inst_26155);
(statearr_26209[(16)] = inst_26130);
return statearr_26209;
})();var statearr_26210_26253 = state_26189__$1;(statearr_26210_26253[(2)] = null);
(statearr_26210_26253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (3)))
{var inst_26187 = (state_26189[(2)]);var state_26189__$1 = state_26189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26189__$1,inst_26187);
} else
{if((state_val_26190 === (12)))
{var inst_26164 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26211_26254 = state_26189__$1;(statearr_26211_26254[(2)] = inst_26164);
(statearr_26211_26254[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (2)))
{var state_26189__$1 = state_26189;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26189__$1,(4),ch);
} else
{if((state_val_26190 === (23)))
{var state_26189__$1 = state_26189;var statearr_26212_26255 = state_26189__$1;(statearr_26212_26255[(2)] = null);
(statearr_26212_26255[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (19)))
{var inst_26120 = (state_26189[(8)]);var inst_26170 = (state_26189[(11)]);var inst_26172 = cljs.core.async.muxch_STAR_.call(null,inst_26170);var state_26189__$1 = state_26189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26189__$1,(22),inst_26172,inst_26120);
} else
{if((state_val_26190 === (11)))
{var inst_26130 = (state_26189[(16)]);var inst_26144 = (state_26189[(10)]);var inst_26144__$1 = cljs.core.seq.call(null,inst_26130);var state_26189__$1 = (function (){var statearr_26213 = state_26189;(statearr_26213[(10)] = inst_26144__$1);
return statearr_26213;
})();if(inst_26144__$1)
{var statearr_26214_26256 = state_26189__$1;(statearr_26214_26256[(1)] = (13));
} else
{var statearr_26215_26257 = state_26189__$1;(statearr_26215_26257[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (9)))
{var inst_26166 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26216_26258 = state_26189__$1;(statearr_26216_26258[(2)] = inst_26166);
(statearr_26216_26258[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (5)))
{var inst_26127 = cljs.core.deref.call(null,mults);var inst_26128 = cljs.core.vals.call(null,inst_26127);var inst_26129 = cljs.core.seq.call(null,inst_26128);var inst_26130 = inst_26129;var inst_26131 = null;var inst_26132 = (0);var inst_26133 = (0);var state_26189__$1 = (function (){var statearr_26217 = state_26189;(statearr_26217[(12)] = inst_26131);
(statearr_26217[(13)] = inst_26132);
(statearr_26217[(14)] = inst_26133);
(statearr_26217[(16)] = inst_26130);
return statearr_26217;
})();var statearr_26218_26259 = state_26189__$1;(statearr_26218_26259[(2)] = null);
(statearr_26218_26259[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (14)))
{var state_26189__$1 = state_26189;var statearr_26222_26260 = state_26189__$1;(statearr_26222_26260[(2)] = null);
(statearr_26222_26260[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (16)))
{var inst_26144 = (state_26189[(10)]);var inst_26148 = cljs.core.chunk_first.call(null,inst_26144);var inst_26149 = cljs.core.chunk_rest.call(null,inst_26144);var inst_26150 = cljs.core.count.call(null,inst_26148);var inst_26130 = inst_26149;var inst_26131 = inst_26148;var inst_26132 = inst_26150;var inst_26133 = (0);var state_26189__$1 = (function (){var statearr_26223 = state_26189;(statearr_26223[(12)] = inst_26131);
(statearr_26223[(13)] = inst_26132);
(statearr_26223[(14)] = inst_26133);
(statearr_26223[(16)] = inst_26130);
return statearr_26223;
})();var statearr_26224_26261 = state_26189__$1;(statearr_26224_26261[(2)] = null);
(statearr_26224_26261[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (10)))
{var inst_26131 = (state_26189[(12)]);var inst_26132 = (state_26189[(13)]);var inst_26133 = (state_26189[(14)]);var inst_26130 = (state_26189[(16)]);var inst_26138 = cljs.core._nth.call(null,inst_26131,inst_26133);var inst_26139 = cljs.core.async.muxch_STAR_.call(null,inst_26138);var inst_26140 = cljs.core.async.close_BANG_.call(null,inst_26139);var inst_26141 = (inst_26133 + (1));var tmp26219 = inst_26131;var tmp26220 = inst_26132;var tmp26221 = inst_26130;var inst_26130__$1 = tmp26221;var inst_26131__$1 = tmp26219;var inst_26132__$1 = tmp26220;var inst_26133__$1 = inst_26141;var state_26189__$1 = (function (){var statearr_26225 = state_26189;(statearr_26225[(12)] = inst_26131__$1);
(statearr_26225[(17)] = inst_26140);
(statearr_26225[(13)] = inst_26132__$1);
(statearr_26225[(14)] = inst_26133__$1);
(statearr_26225[(16)] = inst_26130__$1);
return statearr_26225;
})();var statearr_26226_26262 = state_26189__$1;(statearr_26226_26262[(2)] = null);
(statearr_26226_26262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (18)))
{var inst_26159 = (state_26189[(2)]);var state_26189__$1 = state_26189;var statearr_26227_26263 = state_26189__$1;(statearr_26227_26263[(2)] = inst_26159);
(statearr_26227_26263[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26190 === (8)))
{var inst_26132 = (state_26189[(13)]);var inst_26133 = (state_26189[(14)]);var inst_26135 = (inst_26133 < inst_26132);var inst_26136 = inst_26135;var state_26189__$1 = state_26189;if(cljs.core.truth_(inst_26136))
{var statearr_26228_26264 = state_26189__$1;(statearr_26228_26264[(1)] = (10));
} else
{var statearr_26229_26265 = state_26189__$1;(statearr_26229_26265[(1)] = (11));
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
});})(c__11517__auto___26237,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26237,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26233[(0)] = state_machine__11462__auto__);
(statearr_26233[(1)] = (1));
return statearr_26233;
});
var state_machine__11462__auto____1 = (function (state_26189){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26189);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26234){if((e26234 instanceof Object))
{var ex__11465__auto__ = e26234;var statearr_26235_26266 = state_26189;(statearr_26235_26266[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26189);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26267 = state_26189;
state_26189 = G__26267;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26189){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26237,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26236 = f__11518__auto__.call(null);(statearr_26236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26237);
return statearr_26236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26237,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11517__auto___26404 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26374){var state_val_26375 = (state_26374[(1)]);if((state_val_26375 === (7)))
{var state_26374__$1 = state_26374;var statearr_26376_26405 = state_26374__$1;(statearr_26376_26405[(2)] = null);
(statearr_26376_26405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (1)))
{var state_26374__$1 = state_26374;var statearr_26377_26406 = state_26374__$1;(statearr_26377_26406[(2)] = null);
(statearr_26377_26406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (4)))
{var inst_26338 = (state_26374[(7)]);var inst_26340 = (inst_26338 < cnt);var state_26374__$1 = state_26374;if(cljs.core.truth_(inst_26340))
{var statearr_26378_26407 = state_26374__$1;(statearr_26378_26407[(1)] = (6));
} else
{var statearr_26379_26408 = state_26374__$1;(statearr_26379_26408[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (15)))
{var inst_26370 = (state_26374[(2)]);var state_26374__$1 = state_26374;var statearr_26380_26409 = state_26374__$1;(statearr_26380_26409[(2)] = inst_26370);
(statearr_26380_26409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (13)))
{var inst_26363 = cljs.core.async.close_BANG_.call(null,out);var state_26374__$1 = state_26374;var statearr_26381_26410 = state_26374__$1;(statearr_26381_26410[(2)] = inst_26363);
(statearr_26381_26410[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (6)))
{var state_26374__$1 = state_26374;var statearr_26382_26411 = state_26374__$1;(statearr_26382_26411[(2)] = null);
(statearr_26382_26411[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (3)))
{var inst_26372 = (state_26374[(2)]);var state_26374__$1 = state_26374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26374__$1,inst_26372);
} else
{if((state_val_26375 === (12)))
{var inst_26360 = (state_26374[(8)]);var inst_26360__$1 = (state_26374[(2)]);var inst_26361 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26360__$1);var state_26374__$1 = (function (){var statearr_26383 = state_26374;(statearr_26383[(8)] = inst_26360__$1);
return statearr_26383;
})();if(cljs.core.truth_(inst_26361))
{var statearr_26384_26412 = state_26374__$1;(statearr_26384_26412[(1)] = (13));
} else
{var statearr_26385_26413 = state_26374__$1;(statearr_26385_26413[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (2)))
{var inst_26337 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26338 = (0);var state_26374__$1 = (function (){var statearr_26386 = state_26374;(statearr_26386[(9)] = inst_26337);
(statearr_26386[(7)] = inst_26338);
return statearr_26386;
})();var statearr_26387_26414 = state_26374__$1;(statearr_26387_26414[(2)] = null);
(statearr_26387_26414[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (11)))
{var inst_26338 = (state_26374[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26374,(10),Object,null,(9));var inst_26347 = chs__$1.call(null,inst_26338);var inst_26348 = done.call(null,inst_26338);var inst_26349 = cljs.core.async.take_BANG_.call(null,inst_26347,inst_26348);var state_26374__$1 = state_26374;var statearr_26388_26415 = state_26374__$1;(statearr_26388_26415[(2)] = inst_26349);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (9)))
{var inst_26338 = (state_26374[(7)]);var inst_26351 = (state_26374[(2)]);var inst_26352 = (inst_26338 + (1));var inst_26338__$1 = inst_26352;var state_26374__$1 = (function (){var statearr_26389 = state_26374;(statearr_26389[(10)] = inst_26351);
(statearr_26389[(7)] = inst_26338__$1);
return statearr_26389;
})();var statearr_26390_26416 = state_26374__$1;(statearr_26390_26416[(2)] = null);
(statearr_26390_26416[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (5)))
{var inst_26358 = (state_26374[(2)]);var state_26374__$1 = (function (){var statearr_26391 = state_26374;(statearr_26391[(11)] = inst_26358);
return statearr_26391;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26374__$1,(12),dchan);
} else
{if((state_val_26375 === (14)))
{var inst_26360 = (state_26374[(8)]);var inst_26365 = cljs.core.apply.call(null,f,inst_26360);var state_26374__$1 = state_26374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26374__$1,(16),out,inst_26365);
} else
{if((state_val_26375 === (16)))
{var inst_26367 = (state_26374[(2)]);var state_26374__$1 = (function (){var statearr_26392 = state_26374;(statearr_26392[(12)] = inst_26367);
return statearr_26392;
})();var statearr_26393_26417 = state_26374__$1;(statearr_26393_26417[(2)] = null);
(statearr_26393_26417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (10)))
{var inst_26342 = (state_26374[(2)]);var inst_26343 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26374__$1 = (function (){var statearr_26394 = state_26374;(statearr_26394[(13)] = inst_26342);
return statearr_26394;
})();var statearr_26395_26418 = state_26374__$1;(statearr_26395_26418[(2)] = inst_26343);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26375 === (8)))
{var inst_26356 = (state_26374[(2)]);var state_26374__$1 = state_26374;var statearr_26396_26419 = state_26374__$1;(statearr_26396_26419[(2)] = inst_26356);
(statearr_26396_26419[(1)] = (5));
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
});})(c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26400[(0)] = state_machine__11462__auto__);
(statearr_26400[(1)] = (1));
return statearr_26400;
});
var state_machine__11462__auto____1 = (function (state_26374){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26374);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26401){if((e26401 instanceof Object))
{var ex__11465__auto__ = e26401;var statearr_26402_26420 = state_26374;(statearr_26402_26420[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26401;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26421 = state_26374;
state_26374 = G__26421;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26374){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26403 = f__11518__auto__.call(null);(statearr_26403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26404);
return statearr_26403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26404,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26529 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26529,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26529,out){
return (function (state_26505){var state_val_26506 = (state_26505[(1)]);if((state_val_26506 === (7)))
{var inst_26485 = (state_26505[(7)]);var inst_26484 = (state_26505[(8)]);var inst_26484__$1 = (state_26505[(2)]);var inst_26485__$1 = cljs.core.nth.call(null,inst_26484__$1,(0),null);var inst_26486 = cljs.core.nth.call(null,inst_26484__$1,(1),null);var inst_26487 = (inst_26485__$1 == null);var state_26505__$1 = (function (){var statearr_26507 = state_26505;(statearr_26507[(7)] = inst_26485__$1);
(statearr_26507[(8)] = inst_26484__$1);
(statearr_26507[(9)] = inst_26486);
return statearr_26507;
})();if(cljs.core.truth_(inst_26487))
{var statearr_26508_26530 = state_26505__$1;(statearr_26508_26530[(1)] = (8));
} else
{var statearr_26509_26531 = state_26505__$1;(statearr_26509_26531[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (1)))
{var inst_26476 = cljs.core.vec.call(null,chs);var inst_26477 = inst_26476;var state_26505__$1 = (function (){var statearr_26510 = state_26505;(statearr_26510[(10)] = inst_26477);
return statearr_26510;
})();var statearr_26511_26532 = state_26505__$1;(statearr_26511_26532[(2)] = null);
(statearr_26511_26532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (4)))
{var inst_26477 = (state_26505[(10)]);var state_26505__$1 = state_26505;return cljs.core.async.ioc_alts_BANG_.call(null,state_26505__$1,(7),inst_26477);
} else
{if((state_val_26506 === (6)))
{var inst_26501 = (state_26505[(2)]);var state_26505__$1 = state_26505;var statearr_26512_26533 = state_26505__$1;(statearr_26512_26533[(2)] = inst_26501);
(statearr_26512_26533[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (3)))
{var inst_26503 = (state_26505[(2)]);var state_26505__$1 = state_26505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26505__$1,inst_26503);
} else
{if((state_val_26506 === (2)))
{var inst_26477 = (state_26505[(10)]);var inst_26479 = cljs.core.count.call(null,inst_26477);var inst_26480 = (inst_26479 > (0));var state_26505__$1 = state_26505;if(cljs.core.truth_(inst_26480))
{var statearr_26514_26534 = state_26505__$1;(statearr_26514_26534[(1)] = (4));
} else
{var statearr_26515_26535 = state_26505__$1;(statearr_26515_26535[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (11)))
{var inst_26477 = (state_26505[(10)]);var inst_26494 = (state_26505[(2)]);var tmp26513 = inst_26477;var inst_26477__$1 = tmp26513;var state_26505__$1 = (function (){var statearr_26516 = state_26505;(statearr_26516[(10)] = inst_26477__$1);
(statearr_26516[(11)] = inst_26494);
return statearr_26516;
})();var statearr_26517_26536 = state_26505__$1;(statearr_26517_26536[(2)] = null);
(statearr_26517_26536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (9)))
{var inst_26485 = (state_26505[(7)]);var state_26505__$1 = state_26505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26505__$1,(11),out,inst_26485);
} else
{if((state_val_26506 === (5)))
{var inst_26499 = cljs.core.async.close_BANG_.call(null,out);var state_26505__$1 = state_26505;var statearr_26518_26537 = state_26505__$1;(statearr_26518_26537[(2)] = inst_26499);
(statearr_26518_26537[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (10)))
{var inst_26497 = (state_26505[(2)]);var state_26505__$1 = state_26505;var statearr_26519_26538 = state_26505__$1;(statearr_26519_26538[(2)] = inst_26497);
(statearr_26519_26538[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (8)))
{var inst_26477 = (state_26505[(10)]);var inst_26485 = (state_26505[(7)]);var inst_26484 = (state_26505[(8)]);var inst_26486 = (state_26505[(9)]);var inst_26489 = (function (){var c = inst_26486;var v = inst_26485;var vec__26482 = inst_26484;var cs = inst_26477;return ((function (c,v,vec__26482,cs,inst_26477,inst_26485,inst_26484,inst_26486,state_val_26506,c__11517__auto___26529,out){
return (function (p1__26422_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26422_SHARP_);
});
;})(c,v,vec__26482,cs,inst_26477,inst_26485,inst_26484,inst_26486,state_val_26506,c__11517__auto___26529,out))
})();var inst_26490 = cljs.core.filterv.call(null,inst_26489,inst_26477);var inst_26477__$1 = inst_26490;var state_26505__$1 = (function (){var statearr_26520 = state_26505;(statearr_26520[(10)] = inst_26477__$1);
return statearr_26520;
})();var statearr_26521_26539 = state_26505__$1;(statearr_26521_26539[(2)] = null);
(statearr_26521_26539[(1)] = (2));
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
});})(c__11517__auto___26529,out))
;return ((function (switch__11461__auto__,c__11517__auto___26529,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26525 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26525[(0)] = state_machine__11462__auto__);
(statearr_26525[(1)] = (1));
return statearr_26525;
});
var state_machine__11462__auto____1 = (function (state_26505){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26505);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26526){if((e26526 instanceof Object))
{var ex__11465__auto__ = e26526;var statearr_26527_26540 = state_26505;(statearr_26527_26540[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26526;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26541 = state_26505;
state_26505 = G__26541;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26505){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26529,out))
})();var state__11519__auto__ = (function (){var statearr_26528 = f__11518__auto__.call(null);(statearr_26528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26529);
return statearr_26528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26529,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26634 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26634,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26634,out){
return (function (state_26611){var state_val_26612 = (state_26611[(1)]);if((state_val_26612 === (7)))
{var inst_26593 = (state_26611[(7)]);var inst_26593__$1 = (state_26611[(2)]);var inst_26594 = (inst_26593__$1 == null);var inst_26595 = cljs.core.not.call(null,inst_26594);var state_26611__$1 = (function (){var statearr_26613 = state_26611;(statearr_26613[(7)] = inst_26593__$1);
return statearr_26613;
})();if(inst_26595)
{var statearr_26614_26635 = state_26611__$1;(statearr_26614_26635[(1)] = (8));
} else
{var statearr_26615_26636 = state_26611__$1;(statearr_26615_26636[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (1)))
{var inst_26588 = (0);var state_26611__$1 = (function (){var statearr_26616 = state_26611;(statearr_26616[(8)] = inst_26588);
return statearr_26616;
})();var statearr_26617_26637 = state_26611__$1;(statearr_26617_26637[(2)] = null);
(statearr_26617_26637[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (4)))
{var state_26611__$1 = state_26611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26611__$1,(7),ch);
} else
{if((state_val_26612 === (6)))
{var inst_26606 = (state_26611[(2)]);var state_26611__$1 = state_26611;var statearr_26618_26638 = state_26611__$1;(statearr_26618_26638[(2)] = inst_26606);
(statearr_26618_26638[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (3)))
{var inst_26608 = (state_26611[(2)]);var inst_26609 = cljs.core.async.close_BANG_.call(null,out);var state_26611__$1 = (function (){var statearr_26619 = state_26611;(statearr_26619[(9)] = inst_26608);
return statearr_26619;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26611__$1,inst_26609);
} else
{if((state_val_26612 === (2)))
{var inst_26588 = (state_26611[(8)]);var inst_26590 = (inst_26588 < n);var state_26611__$1 = state_26611;if(cljs.core.truth_(inst_26590))
{var statearr_26620_26639 = state_26611__$1;(statearr_26620_26639[(1)] = (4));
} else
{var statearr_26621_26640 = state_26611__$1;(statearr_26621_26640[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (11)))
{var inst_26588 = (state_26611[(8)]);var inst_26598 = (state_26611[(2)]);var inst_26599 = (inst_26588 + (1));var inst_26588__$1 = inst_26599;var state_26611__$1 = (function (){var statearr_26622 = state_26611;(statearr_26622[(8)] = inst_26588__$1);
(statearr_26622[(10)] = inst_26598);
return statearr_26622;
})();var statearr_26623_26641 = state_26611__$1;(statearr_26623_26641[(2)] = null);
(statearr_26623_26641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (9)))
{var state_26611__$1 = state_26611;var statearr_26624_26642 = state_26611__$1;(statearr_26624_26642[(2)] = null);
(statearr_26624_26642[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (5)))
{var state_26611__$1 = state_26611;var statearr_26625_26643 = state_26611__$1;(statearr_26625_26643[(2)] = null);
(statearr_26625_26643[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (10)))
{var inst_26603 = (state_26611[(2)]);var state_26611__$1 = state_26611;var statearr_26626_26644 = state_26611__$1;(statearr_26626_26644[(2)] = inst_26603);
(statearr_26626_26644[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26612 === (8)))
{var inst_26593 = (state_26611[(7)]);var state_26611__$1 = state_26611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26611__$1,(11),out,inst_26593);
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
});})(c__11517__auto___26634,out))
;return ((function (switch__11461__auto__,c__11517__auto___26634,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26630 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26630[(0)] = state_machine__11462__auto__);
(statearr_26630[(1)] = (1));
return statearr_26630;
});
var state_machine__11462__auto____1 = (function (state_26611){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26611);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26631){if((e26631 instanceof Object))
{var ex__11465__auto__ = e26631;var statearr_26632_26645 = state_26611;(statearr_26632_26645[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26631;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26646 = state_26611;
state_26611 = G__26646;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26611){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26634,out))
})();var state__11519__auto__ = (function (){var statearr_26633 = f__11518__auto__.call(null);(statearr_26633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26634);
return statearr_26633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26634,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26654 = (function (ch,f,map_LT_,meta26655){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26655 = meta26655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26654.cljs$lang$type = true;
cljs.core.async.t26654.cljs$lang$ctorStr = "cljs.core.async/t26654";
cljs.core.async.t26654.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26654");
});
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26657 = (function (fn1,_,meta26655,ch,f,map_LT_,meta26658){
this.fn1 = fn1;
this._ = _;
this.meta26655 = meta26655;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26658 = meta26658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26657.cljs$lang$type = true;
cljs.core.async.t26657.cljs$lang$ctorStr = "cljs.core.async/t26657";
cljs.core.async.t26657.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26657");
});})(___$1))
;
cljs.core.async.t26657.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26647_SHARP_){return f1.call(null,(((p1__26647_SHARP_ == null))?null:self__.f.call(null,p1__26647_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26659){var self__ = this;
var _26659__$1 = this;return self__.meta26658;
});})(___$1))
;
cljs.core.async.t26657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26659,meta26658__$1){var self__ = this;
var _26659__$1 = this;return (new cljs.core.async.t26657(self__.fn1,self__._,self__.meta26655,self__.ch,self__.f,self__.map_LT_,meta26658__$1));
});})(___$1))
;
cljs.core.async.__GT_t26657 = ((function (___$1){
return (function __GT_t26657(fn1__$1,___$2,meta26655__$1,ch__$2,f__$2,map_LT___$2,meta26658){return (new cljs.core.async.t26657(fn1__$1,___$2,meta26655__$1,ch__$2,f__$2,map_LT___$2,meta26658));
});})(___$1))
;
}
return (new cljs.core.async.t26657(fn1,___$1,self__.meta26655,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26656){var self__ = this;
var _26656__$1 = this;return self__.meta26655;
});
cljs.core.async.t26654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26656,meta26655__$1){var self__ = this;
var _26656__$1 = this;return (new cljs.core.async.t26654(self__.ch,self__.f,self__.map_LT_,meta26655__$1));
});
cljs.core.async.__GT_t26654 = (function __GT_t26654(ch__$1,f__$1,map_LT___$1,meta26655){return (new cljs.core.async.t26654(ch__$1,f__$1,map_LT___$1,meta26655));
});
}
return (new cljs.core.async.t26654(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26663 = (function (ch,f,map_GT_,meta26664){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26664 = meta26664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26663.cljs$lang$type = true;
cljs.core.async.t26663.cljs$lang$ctorStr = "cljs.core.async/t26663";
cljs.core.async.t26663.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26663");
});
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26665){var self__ = this;
var _26665__$1 = this;return self__.meta26664;
});
cljs.core.async.t26663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26665,meta26664__$1){var self__ = this;
var _26665__$1 = this;return (new cljs.core.async.t26663(self__.ch,self__.f,self__.map_GT_,meta26664__$1));
});
cljs.core.async.__GT_t26663 = (function __GT_t26663(ch__$1,f__$1,map_GT___$1,meta26664){return (new cljs.core.async.t26663(ch__$1,f__$1,map_GT___$1,meta26664));
});
}
return (new cljs.core.async.t26663(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26669 = (function (ch,p,filter_GT_,meta26670){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26670 = meta26670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26669.cljs$lang$type = true;
cljs.core.async.t26669.cljs$lang$ctorStr = "cljs.core.async/t26669";
cljs.core.async.t26669.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26669");
});
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26671){var self__ = this;
var _26671__$1 = this;return self__.meta26670;
});
cljs.core.async.t26669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26671,meta26670__$1){var self__ = this;
var _26671__$1 = this;return (new cljs.core.async.t26669(self__.ch,self__.p,self__.filter_GT_,meta26670__$1));
});
cljs.core.async.__GT_t26669 = (function __GT_t26669(ch__$1,p__$1,filter_GT___$1,meta26670){return (new cljs.core.async.t26669(ch__$1,p__$1,filter_GT___$1,meta26670));
});
}
return (new cljs.core.async.t26669(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26754 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26754,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26754,out){
return (function (state_26733){var state_val_26734 = (state_26733[(1)]);if((state_val_26734 === (7)))
{var inst_26729 = (state_26733[(2)]);var state_26733__$1 = state_26733;var statearr_26735_26755 = state_26733__$1;(statearr_26735_26755[(2)] = inst_26729);
(statearr_26735_26755[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (1)))
{var state_26733__$1 = state_26733;var statearr_26736_26756 = state_26733__$1;(statearr_26736_26756[(2)] = null);
(statearr_26736_26756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (4)))
{var inst_26715 = (state_26733[(7)]);var inst_26715__$1 = (state_26733[(2)]);var inst_26716 = (inst_26715__$1 == null);var state_26733__$1 = (function (){var statearr_26737 = state_26733;(statearr_26737[(7)] = inst_26715__$1);
return statearr_26737;
})();if(cljs.core.truth_(inst_26716))
{var statearr_26738_26757 = state_26733__$1;(statearr_26738_26757[(1)] = (5));
} else
{var statearr_26739_26758 = state_26733__$1;(statearr_26739_26758[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (6)))
{var inst_26715 = (state_26733[(7)]);var inst_26720 = p.call(null,inst_26715);var state_26733__$1 = state_26733;if(cljs.core.truth_(inst_26720))
{var statearr_26740_26759 = state_26733__$1;(statearr_26740_26759[(1)] = (8));
} else
{var statearr_26741_26760 = state_26733__$1;(statearr_26741_26760[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (3)))
{var inst_26731 = (state_26733[(2)]);var state_26733__$1 = state_26733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26733__$1,inst_26731);
} else
{if((state_val_26734 === (2)))
{var state_26733__$1 = state_26733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26733__$1,(4),ch);
} else
{if((state_val_26734 === (11)))
{var inst_26723 = (state_26733[(2)]);var state_26733__$1 = state_26733;var statearr_26742_26761 = state_26733__$1;(statearr_26742_26761[(2)] = inst_26723);
(statearr_26742_26761[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (9)))
{var state_26733__$1 = state_26733;var statearr_26743_26762 = state_26733__$1;(statearr_26743_26762[(2)] = null);
(statearr_26743_26762[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (5)))
{var inst_26718 = cljs.core.async.close_BANG_.call(null,out);var state_26733__$1 = state_26733;var statearr_26744_26763 = state_26733__$1;(statearr_26744_26763[(2)] = inst_26718);
(statearr_26744_26763[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (10)))
{var inst_26726 = (state_26733[(2)]);var state_26733__$1 = (function (){var statearr_26745 = state_26733;(statearr_26745[(8)] = inst_26726);
return statearr_26745;
})();var statearr_26746_26764 = state_26733__$1;(statearr_26746_26764[(2)] = null);
(statearr_26746_26764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26734 === (8)))
{var inst_26715 = (state_26733[(7)]);var state_26733__$1 = state_26733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26733__$1,(11),out,inst_26715);
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
});})(c__11517__auto___26754,out))
;return ((function (switch__11461__auto__,c__11517__auto___26754,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26750 = [null,null,null,null,null,null,null,null,null];(statearr_26750[(0)] = state_machine__11462__auto__);
(statearr_26750[(1)] = (1));
return statearr_26750;
});
var state_machine__11462__auto____1 = (function (state_26733){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26733);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26751){if((e26751 instanceof Object))
{var ex__11465__auto__ = e26751;var statearr_26752_26765 = state_26733;(statearr_26752_26765[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26766 = state_26733;
state_26733 = G__26766;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26733){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26754,out))
})();var state__11519__auto__ = (function (){var statearr_26753 = f__11518__auto__.call(null);(statearr_26753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26754);
return statearr_26753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26754,out))
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
return (function (state_26932){var state_val_26933 = (state_26932[(1)]);if((state_val_26933 === (7)))
{var inst_26928 = (state_26932[(2)]);var state_26932__$1 = state_26932;var statearr_26934_26975 = state_26932__$1;(statearr_26934_26975[(2)] = inst_26928);
(statearr_26934_26975[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (20)))
{var inst_26898 = (state_26932[(7)]);var inst_26909 = (state_26932[(2)]);var inst_26910 = cljs.core.next.call(null,inst_26898);var inst_26884 = inst_26910;var inst_26885 = null;var inst_26886 = (0);var inst_26887 = (0);var state_26932__$1 = (function (){var statearr_26935 = state_26932;(statearr_26935[(8)] = inst_26887);
(statearr_26935[(9)] = inst_26885);
(statearr_26935[(10)] = inst_26886);
(statearr_26935[(11)] = inst_26884);
(statearr_26935[(12)] = inst_26909);
return statearr_26935;
})();var statearr_26936_26976 = state_26932__$1;(statearr_26936_26976[(2)] = null);
(statearr_26936_26976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (1)))
{var state_26932__$1 = state_26932;var statearr_26937_26977 = state_26932__$1;(statearr_26937_26977[(2)] = null);
(statearr_26937_26977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (4)))
{var inst_26873 = (state_26932[(13)]);var inst_26873__$1 = (state_26932[(2)]);var inst_26874 = (inst_26873__$1 == null);var state_26932__$1 = (function (){var statearr_26938 = state_26932;(statearr_26938[(13)] = inst_26873__$1);
return statearr_26938;
})();if(cljs.core.truth_(inst_26874))
{var statearr_26939_26978 = state_26932__$1;(statearr_26939_26978[(1)] = (5));
} else
{var statearr_26940_26979 = state_26932__$1;(statearr_26940_26979[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (15)))
{var state_26932__$1 = state_26932;var statearr_26944_26980 = state_26932__$1;(statearr_26944_26980[(2)] = null);
(statearr_26944_26980[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (21)))
{var state_26932__$1 = state_26932;var statearr_26945_26981 = state_26932__$1;(statearr_26945_26981[(2)] = null);
(statearr_26945_26981[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (13)))
{var inst_26887 = (state_26932[(8)]);var inst_26885 = (state_26932[(9)]);var inst_26886 = (state_26932[(10)]);var inst_26884 = (state_26932[(11)]);var inst_26894 = (state_26932[(2)]);var inst_26895 = (inst_26887 + (1));var tmp26941 = inst_26885;var tmp26942 = inst_26886;var tmp26943 = inst_26884;var inst_26884__$1 = tmp26943;var inst_26885__$1 = tmp26941;var inst_26886__$1 = tmp26942;var inst_26887__$1 = inst_26895;var state_26932__$1 = (function (){var statearr_26946 = state_26932;(statearr_26946[(8)] = inst_26887__$1);
(statearr_26946[(9)] = inst_26885__$1);
(statearr_26946[(10)] = inst_26886__$1);
(statearr_26946[(11)] = inst_26884__$1);
(statearr_26946[(14)] = inst_26894);
return statearr_26946;
})();var statearr_26947_26982 = state_26932__$1;(statearr_26947_26982[(2)] = null);
(statearr_26947_26982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (22)))
{var state_26932__$1 = state_26932;var statearr_26948_26983 = state_26932__$1;(statearr_26948_26983[(2)] = null);
(statearr_26948_26983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (6)))
{var inst_26873 = (state_26932[(13)]);var inst_26882 = f.call(null,inst_26873);var inst_26883 = cljs.core.seq.call(null,inst_26882);var inst_26884 = inst_26883;var inst_26885 = null;var inst_26886 = (0);var inst_26887 = (0);var state_26932__$1 = (function (){var statearr_26949 = state_26932;(statearr_26949[(8)] = inst_26887);
(statearr_26949[(9)] = inst_26885);
(statearr_26949[(10)] = inst_26886);
(statearr_26949[(11)] = inst_26884);
return statearr_26949;
})();var statearr_26950_26984 = state_26932__$1;(statearr_26950_26984[(2)] = null);
(statearr_26950_26984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (17)))
{var inst_26898 = (state_26932[(7)]);var inst_26902 = cljs.core.chunk_first.call(null,inst_26898);var inst_26903 = cljs.core.chunk_rest.call(null,inst_26898);var inst_26904 = cljs.core.count.call(null,inst_26902);var inst_26884 = inst_26903;var inst_26885 = inst_26902;var inst_26886 = inst_26904;var inst_26887 = (0);var state_26932__$1 = (function (){var statearr_26951 = state_26932;(statearr_26951[(8)] = inst_26887);
(statearr_26951[(9)] = inst_26885);
(statearr_26951[(10)] = inst_26886);
(statearr_26951[(11)] = inst_26884);
return statearr_26951;
})();var statearr_26952_26985 = state_26932__$1;(statearr_26952_26985[(2)] = null);
(statearr_26952_26985[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (3)))
{var inst_26930 = (state_26932[(2)]);var state_26932__$1 = state_26932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26932__$1,inst_26930);
} else
{if((state_val_26933 === (12)))
{var inst_26918 = (state_26932[(2)]);var state_26932__$1 = state_26932;var statearr_26953_26986 = state_26932__$1;(statearr_26953_26986[(2)] = inst_26918);
(statearr_26953_26986[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (2)))
{var state_26932__$1 = state_26932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26932__$1,(4),in$);
} else
{if((state_val_26933 === (23)))
{var inst_26926 = (state_26932[(2)]);var state_26932__$1 = state_26932;var statearr_26954_26987 = state_26932__$1;(statearr_26954_26987[(2)] = inst_26926);
(statearr_26954_26987[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (19)))
{var inst_26913 = (state_26932[(2)]);var state_26932__$1 = state_26932;var statearr_26955_26988 = state_26932__$1;(statearr_26955_26988[(2)] = inst_26913);
(statearr_26955_26988[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (11)))
{var inst_26898 = (state_26932[(7)]);var inst_26884 = (state_26932[(11)]);var inst_26898__$1 = cljs.core.seq.call(null,inst_26884);var state_26932__$1 = (function (){var statearr_26956 = state_26932;(statearr_26956[(7)] = inst_26898__$1);
return statearr_26956;
})();if(inst_26898__$1)
{var statearr_26957_26989 = state_26932__$1;(statearr_26957_26989[(1)] = (14));
} else
{var statearr_26958_26990 = state_26932__$1;(statearr_26958_26990[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (9)))
{var inst_26920 = (state_26932[(2)]);var inst_26921 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26932__$1 = (function (){var statearr_26959 = state_26932;(statearr_26959[(15)] = inst_26920);
return statearr_26959;
})();if(cljs.core.truth_(inst_26921))
{var statearr_26960_26991 = state_26932__$1;(statearr_26960_26991[(1)] = (21));
} else
{var statearr_26961_26992 = state_26932__$1;(statearr_26961_26992[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (5)))
{var inst_26876 = cljs.core.async.close_BANG_.call(null,out);var state_26932__$1 = state_26932;var statearr_26962_26993 = state_26932__$1;(statearr_26962_26993[(2)] = inst_26876);
(statearr_26962_26993[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (14)))
{var inst_26898 = (state_26932[(7)]);var inst_26900 = cljs.core.chunked_seq_QMARK_.call(null,inst_26898);var state_26932__$1 = state_26932;if(inst_26900)
{var statearr_26963_26994 = state_26932__$1;(statearr_26963_26994[(1)] = (17));
} else
{var statearr_26964_26995 = state_26932__$1;(statearr_26964_26995[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (16)))
{var inst_26916 = (state_26932[(2)]);var state_26932__$1 = state_26932;var statearr_26965_26996 = state_26932__$1;(statearr_26965_26996[(2)] = inst_26916);
(statearr_26965_26996[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26933 === (10)))
{var inst_26887 = (state_26932[(8)]);var inst_26885 = (state_26932[(9)]);var inst_26892 = cljs.core._nth.call(null,inst_26885,inst_26887);var state_26932__$1 = state_26932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26932__$1,(13),out,inst_26892);
} else
{if((state_val_26933 === (18)))
{var inst_26898 = (state_26932[(7)]);var inst_26907 = cljs.core.first.call(null,inst_26898);var state_26932__$1 = state_26932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26932__$1,(20),out,inst_26907);
} else
{if((state_val_26933 === (8)))
{var inst_26887 = (state_26932[(8)]);var inst_26886 = (state_26932[(10)]);var inst_26889 = (inst_26887 < inst_26886);var inst_26890 = inst_26889;var state_26932__$1 = state_26932;if(cljs.core.truth_(inst_26890))
{var statearr_26966_26997 = state_26932__$1;(statearr_26966_26997[(1)] = (10));
} else
{var statearr_26967_26998 = state_26932__$1;(statearr_26967_26998[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_26971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26971[(0)] = state_machine__11462__auto__);
(statearr_26971[(1)] = (1));
return statearr_26971;
});
var state_machine__11462__auto____1 = (function (state_26932){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26932);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26972){if((e26972 instanceof Object))
{var ex__11465__auto__ = e26972;var statearr_26973_26999 = state_26932;(statearr_26973_26999[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26932);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26972;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27000 = state_26932;
state_26932 = G__27000;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26932){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_26974 = f__11518__auto__.call(null);(statearr_26974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_26974;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27097 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27097,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27097,out){
return (function (state_27072){var state_val_27073 = (state_27072[(1)]);if((state_val_27073 === (7)))
{var inst_27067 = (state_27072[(2)]);var state_27072__$1 = state_27072;var statearr_27074_27098 = state_27072__$1;(statearr_27074_27098[(2)] = inst_27067);
(statearr_27074_27098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (1)))
{var inst_27049 = null;var state_27072__$1 = (function (){var statearr_27075 = state_27072;(statearr_27075[(7)] = inst_27049);
return statearr_27075;
})();var statearr_27076_27099 = state_27072__$1;(statearr_27076_27099[(2)] = null);
(statearr_27076_27099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (4)))
{var inst_27052 = (state_27072[(8)]);var inst_27052__$1 = (state_27072[(2)]);var inst_27053 = (inst_27052__$1 == null);var inst_27054 = cljs.core.not.call(null,inst_27053);var state_27072__$1 = (function (){var statearr_27077 = state_27072;(statearr_27077[(8)] = inst_27052__$1);
return statearr_27077;
})();if(inst_27054)
{var statearr_27078_27100 = state_27072__$1;(statearr_27078_27100[(1)] = (5));
} else
{var statearr_27079_27101 = state_27072__$1;(statearr_27079_27101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (6)))
{var state_27072__$1 = state_27072;var statearr_27080_27102 = state_27072__$1;(statearr_27080_27102[(2)] = null);
(statearr_27080_27102[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (3)))
{var inst_27069 = (state_27072[(2)]);var inst_27070 = cljs.core.async.close_BANG_.call(null,out);var state_27072__$1 = (function (){var statearr_27081 = state_27072;(statearr_27081[(9)] = inst_27069);
return statearr_27081;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else
{if((state_val_27073 === (2)))
{var state_27072__$1 = state_27072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27072__$1,(4),ch);
} else
{if((state_val_27073 === (11)))
{var inst_27052 = (state_27072[(8)]);var inst_27061 = (state_27072[(2)]);var inst_27049 = inst_27052;var state_27072__$1 = (function (){var statearr_27082 = state_27072;(statearr_27082[(10)] = inst_27061);
(statearr_27082[(7)] = inst_27049);
return statearr_27082;
})();var statearr_27083_27103 = state_27072__$1;(statearr_27083_27103[(2)] = null);
(statearr_27083_27103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (9)))
{var inst_27052 = (state_27072[(8)]);var state_27072__$1 = state_27072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27072__$1,(11),out,inst_27052);
} else
{if((state_val_27073 === (5)))
{var inst_27052 = (state_27072[(8)]);var inst_27049 = (state_27072[(7)]);var inst_27056 = cljs.core._EQ_.call(null,inst_27052,inst_27049);var state_27072__$1 = state_27072;if(inst_27056)
{var statearr_27085_27104 = state_27072__$1;(statearr_27085_27104[(1)] = (8));
} else
{var statearr_27086_27105 = state_27072__$1;(statearr_27086_27105[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (10)))
{var inst_27064 = (state_27072[(2)]);var state_27072__$1 = state_27072;var statearr_27087_27106 = state_27072__$1;(statearr_27087_27106[(2)] = inst_27064);
(statearr_27087_27106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27073 === (8)))
{var inst_27049 = (state_27072[(7)]);var tmp27084 = inst_27049;var inst_27049__$1 = tmp27084;var state_27072__$1 = (function (){var statearr_27088 = state_27072;(statearr_27088[(7)] = inst_27049__$1);
return statearr_27088;
})();var statearr_27089_27107 = state_27072__$1;(statearr_27089_27107[(2)] = null);
(statearr_27089_27107[(1)] = (2));
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
});})(c__11517__auto___27097,out))
;return ((function (switch__11461__auto__,c__11517__auto___27097,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27093 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27093[(0)] = state_machine__11462__auto__);
(statearr_27093[(1)] = (1));
return statearr_27093;
});
var state_machine__11462__auto____1 = (function (state_27072){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27072);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27094){if((e27094 instanceof Object))
{var ex__11465__auto__ = e27094;var statearr_27095_27108 = state_27072;(statearr_27095_27108[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27109 = state_27072;
state_27072 = G__27109;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27097,out))
})();var state__11519__auto__ = (function (){var statearr_27096 = f__11518__auto__.call(null);(statearr_27096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27097);
return statearr_27096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27097,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27244,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27244,out){
return (function (state_27214){var state_val_27215 = (state_27214[(1)]);if((state_val_27215 === (7)))
{var inst_27210 = (state_27214[(2)]);var state_27214__$1 = state_27214;var statearr_27216_27245 = state_27214__$1;(statearr_27216_27245[(2)] = inst_27210);
(statearr_27216_27245[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (1)))
{var inst_27177 = (new Array(n));var inst_27178 = inst_27177;var inst_27179 = (0);var state_27214__$1 = (function (){var statearr_27217 = state_27214;(statearr_27217[(7)] = inst_27179);
(statearr_27217[(8)] = inst_27178);
return statearr_27217;
})();var statearr_27218_27246 = state_27214__$1;(statearr_27218_27246[(2)] = null);
(statearr_27218_27246[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (4)))
{var inst_27182 = (state_27214[(9)]);var inst_27182__$1 = (state_27214[(2)]);var inst_27183 = (inst_27182__$1 == null);var inst_27184 = cljs.core.not.call(null,inst_27183);var state_27214__$1 = (function (){var statearr_27219 = state_27214;(statearr_27219[(9)] = inst_27182__$1);
return statearr_27219;
})();if(inst_27184)
{var statearr_27220_27247 = state_27214__$1;(statearr_27220_27247[(1)] = (5));
} else
{var statearr_27221_27248 = state_27214__$1;(statearr_27221_27248[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (15)))
{var inst_27204 = (state_27214[(2)]);var state_27214__$1 = state_27214;var statearr_27222_27249 = state_27214__$1;(statearr_27222_27249[(2)] = inst_27204);
(statearr_27222_27249[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (13)))
{var state_27214__$1 = state_27214;var statearr_27223_27250 = state_27214__$1;(statearr_27223_27250[(2)] = null);
(statearr_27223_27250[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (6)))
{var inst_27179 = (state_27214[(7)]);var inst_27200 = (inst_27179 > (0));var state_27214__$1 = state_27214;if(cljs.core.truth_(inst_27200))
{var statearr_27224_27251 = state_27214__$1;(statearr_27224_27251[(1)] = (12));
} else
{var statearr_27225_27252 = state_27214__$1;(statearr_27225_27252[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (3)))
{var inst_27212 = (state_27214[(2)]);var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else
{if((state_val_27215 === (12)))
{var inst_27178 = (state_27214[(8)]);var inst_27202 = cljs.core.vec.call(null,inst_27178);var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(15),out,inst_27202);
} else
{if((state_val_27215 === (2)))
{var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27214__$1,(4),ch);
} else
{if((state_val_27215 === (11)))
{var inst_27194 = (state_27214[(2)]);var inst_27195 = (new Array(n));var inst_27178 = inst_27195;var inst_27179 = (0);var state_27214__$1 = (function (){var statearr_27226 = state_27214;(statearr_27226[(7)] = inst_27179);
(statearr_27226[(8)] = inst_27178);
(statearr_27226[(10)] = inst_27194);
return statearr_27226;
})();var statearr_27227_27253 = state_27214__$1;(statearr_27227_27253[(2)] = null);
(statearr_27227_27253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (9)))
{var inst_27178 = (state_27214[(8)]);var inst_27192 = cljs.core.vec.call(null,inst_27178);var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(11),out,inst_27192);
} else
{if((state_val_27215 === (5)))
{var inst_27179 = (state_27214[(7)]);var inst_27182 = (state_27214[(9)]);var inst_27178 = (state_27214[(8)]);var inst_27187 = (state_27214[(11)]);var inst_27186 = (inst_27178[inst_27179] = inst_27182);var inst_27187__$1 = (inst_27179 + (1));var inst_27188 = (inst_27187__$1 < n);var state_27214__$1 = (function (){var statearr_27228 = state_27214;(statearr_27228[(11)] = inst_27187__$1);
(statearr_27228[(12)] = inst_27186);
return statearr_27228;
})();if(cljs.core.truth_(inst_27188))
{var statearr_27229_27254 = state_27214__$1;(statearr_27229_27254[(1)] = (8));
} else
{var statearr_27230_27255 = state_27214__$1;(statearr_27230_27255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (14)))
{var inst_27207 = (state_27214[(2)]);var inst_27208 = cljs.core.async.close_BANG_.call(null,out);var state_27214__$1 = (function (){var statearr_27232 = state_27214;(statearr_27232[(13)] = inst_27207);
return statearr_27232;
})();var statearr_27233_27256 = state_27214__$1;(statearr_27233_27256[(2)] = inst_27208);
(statearr_27233_27256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (10)))
{var inst_27198 = (state_27214[(2)]);var state_27214__$1 = state_27214;var statearr_27234_27257 = state_27214__$1;(statearr_27234_27257[(2)] = inst_27198);
(statearr_27234_27257[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (8)))
{var inst_27178 = (state_27214[(8)]);var inst_27187 = (state_27214[(11)]);var tmp27231 = inst_27178;var inst_27178__$1 = tmp27231;var inst_27179 = inst_27187;var state_27214__$1 = (function (){var statearr_27235 = state_27214;(statearr_27235[(7)] = inst_27179);
(statearr_27235[(8)] = inst_27178__$1);
return statearr_27235;
})();var statearr_27236_27258 = state_27214__$1;(statearr_27236_27258[(2)] = null);
(statearr_27236_27258[(1)] = (2));
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
});})(c__11517__auto___27244,out))
;return ((function (switch__11461__auto__,c__11517__auto___27244,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27240[(0)] = state_machine__11462__auto__);
(statearr_27240[(1)] = (1));
return statearr_27240;
});
var state_machine__11462__auto____1 = (function (state_27214){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27214);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27241){if((e27241 instanceof Object))
{var ex__11465__auto__ = e27241;var statearr_27242_27259 = state_27214;(statearr_27242_27259[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27260 = state_27214;
state_27214 = G__27260;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27244,out))
})();var state__11519__auto__ = (function (){var statearr_27243 = f__11518__auto__.call(null);(statearr_27243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27244);
return statearr_27243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27244,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27403,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27403,out){
return (function (state_27373){var state_val_27374 = (state_27373[(1)]);if((state_val_27374 === (7)))
{var inst_27369 = (state_27373[(2)]);var state_27373__$1 = state_27373;var statearr_27375_27404 = state_27373__$1;(statearr_27375_27404[(2)] = inst_27369);
(statearr_27375_27404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (1)))
{var inst_27332 = [];var inst_27333 = inst_27332;var inst_27334 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27373__$1 = (function (){var statearr_27376 = state_27373;(statearr_27376[(7)] = inst_27334);
(statearr_27376[(8)] = inst_27333);
return statearr_27376;
})();var statearr_27377_27405 = state_27373__$1;(statearr_27377_27405[(2)] = null);
(statearr_27377_27405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (4)))
{var inst_27337 = (state_27373[(9)]);var inst_27337__$1 = (state_27373[(2)]);var inst_27338 = (inst_27337__$1 == null);var inst_27339 = cljs.core.not.call(null,inst_27338);var state_27373__$1 = (function (){var statearr_27378 = state_27373;(statearr_27378[(9)] = inst_27337__$1);
return statearr_27378;
})();if(inst_27339)
{var statearr_27379_27406 = state_27373__$1;(statearr_27379_27406[(1)] = (5));
} else
{var statearr_27380_27407 = state_27373__$1;(statearr_27380_27407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (15)))
{var inst_27363 = (state_27373[(2)]);var state_27373__$1 = state_27373;var statearr_27381_27408 = state_27373__$1;(statearr_27381_27408[(2)] = inst_27363);
(statearr_27381_27408[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (13)))
{var state_27373__$1 = state_27373;var statearr_27382_27409 = state_27373__$1;(statearr_27382_27409[(2)] = null);
(statearr_27382_27409[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (6)))
{var inst_27333 = (state_27373[(8)]);var inst_27358 = inst_27333.length;var inst_27359 = (inst_27358 > (0));var state_27373__$1 = state_27373;if(cljs.core.truth_(inst_27359))
{var statearr_27383_27410 = state_27373__$1;(statearr_27383_27410[(1)] = (12));
} else
{var statearr_27384_27411 = state_27373__$1;(statearr_27384_27411[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (3)))
{var inst_27371 = (state_27373[(2)]);var state_27373__$1 = state_27373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else
{if((state_val_27374 === (12)))
{var inst_27333 = (state_27373[(8)]);var inst_27361 = cljs.core.vec.call(null,inst_27333);var state_27373__$1 = state_27373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(15),out,inst_27361);
} else
{if((state_val_27374 === (2)))
{var state_27373__$1 = state_27373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),ch);
} else
{if((state_val_27374 === (11)))
{var inst_27341 = (state_27373[(10)]);var inst_27337 = (state_27373[(9)]);var inst_27351 = (state_27373[(2)]);var inst_27352 = [];var inst_27353 = inst_27352.push(inst_27337);var inst_27333 = inst_27352;var inst_27334 = inst_27341;var state_27373__$1 = (function (){var statearr_27385 = state_27373;(statearr_27385[(11)] = inst_27351);
(statearr_27385[(12)] = inst_27353);
(statearr_27385[(7)] = inst_27334);
(statearr_27385[(8)] = inst_27333);
return statearr_27385;
})();var statearr_27386_27412 = state_27373__$1;(statearr_27386_27412[(2)] = null);
(statearr_27386_27412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (9)))
{var inst_27333 = (state_27373[(8)]);var inst_27349 = cljs.core.vec.call(null,inst_27333);var state_27373__$1 = state_27373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(11),out,inst_27349);
} else
{if((state_val_27374 === (5)))
{var inst_27341 = (state_27373[(10)]);var inst_27337 = (state_27373[(9)]);var inst_27334 = (state_27373[(7)]);var inst_27341__$1 = f.call(null,inst_27337);var inst_27342 = cljs.core._EQ_.call(null,inst_27341__$1,inst_27334);var inst_27343 = cljs.core.keyword_identical_QMARK_.call(null,inst_27334,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27344 = (inst_27342) || (inst_27343);var state_27373__$1 = (function (){var statearr_27387 = state_27373;(statearr_27387[(10)] = inst_27341__$1);
return statearr_27387;
})();if(cljs.core.truth_(inst_27344))
{var statearr_27388_27413 = state_27373__$1;(statearr_27388_27413[(1)] = (8));
} else
{var statearr_27389_27414 = state_27373__$1;(statearr_27389_27414[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (14)))
{var inst_27366 = (state_27373[(2)]);var inst_27367 = cljs.core.async.close_BANG_.call(null,out);var state_27373__$1 = (function (){var statearr_27391 = state_27373;(statearr_27391[(13)] = inst_27366);
return statearr_27391;
})();var statearr_27392_27415 = state_27373__$1;(statearr_27392_27415[(2)] = inst_27367);
(statearr_27392_27415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (10)))
{var inst_27356 = (state_27373[(2)]);var state_27373__$1 = state_27373;var statearr_27393_27416 = state_27373__$1;(statearr_27393_27416[(2)] = inst_27356);
(statearr_27393_27416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27374 === (8)))
{var inst_27341 = (state_27373[(10)]);var inst_27337 = (state_27373[(9)]);var inst_27333 = (state_27373[(8)]);var inst_27346 = inst_27333.push(inst_27337);var tmp27390 = inst_27333;var inst_27333__$1 = tmp27390;var inst_27334 = inst_27341;var state_27373__$1 = (function (){var statearr_27394 = state_27373;(statearr_27394[(14)] = inst_27346);
(statearr_27394[(7)] = inst_27334);
(statearr_27394[(8)] = inst_27333__$1);
return statearr_27394;
})();var statearr_27395_27417 = state_27373__$1;(statearr_27395_27417[(2)] = null);
(statearr_27395_27417[(1)] = (2));
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
});})(c__11517__auto___27403,out))
;return ((function (switch__11461__auto__,c__11517__auto___27403,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27399[(0)] = state_machine__11462__auto__);
(statearr_27399[(1)] = (1));
return statearr_27399;
});
var state_machine__11462__auto____1 = (function (state_27373){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27373);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27400){if((e27400 instanceof Object))
{var ex__11465__auto__ = e27400;var statearr_27401_27418 = state_27373;(statearr_27401_27418[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27400;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27419 = state_27373;
state_27373 = G__27419;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27403,out))
})();var state__11519__auto__ = (function (){var statearr_27402 = f__11518__auto__.call(null);(statearr_27402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27403);
return statearr_27402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27403,out))
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
