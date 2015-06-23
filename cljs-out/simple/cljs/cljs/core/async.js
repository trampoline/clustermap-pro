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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23393 = (function (f,fn_handler,meta23394){
this.f = f;
this.fn_handler = fn_handler;
this.meta23394 = meta23394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23393.cljs$lang$type = true;
cljs.core.async.t23393.cljs$lang$ctorStr = "cljs.core.async/t23393";
cljs.core.async.t23393.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23393");
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
cljs.core.async.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new cljs.core.async.t23393(self__.f,self__.fn_handler,meta23394__$1));
});
cljs.core.async.__GT_t23393 = (function __GT_t23393(f__$1,fn_handler__$1,meta23394){return (new cljs.core.async.t23393(f__$1,fn_handler__$1,meta23394));
});
}
return (new cljs.core.async.t23393(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23397 = buff;if(G__23397)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
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
{var val_23398 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23398);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23398,ret){
return (function (){return fn1.call(null,val_23398);
});})(val_23398,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23399 = n;var x_23400 = (0);while(true){
if((x_23400 < n__4508__auto___23399))
{(a[x_23400] = (0));
{
var G__23401 = (x_23400 + (1));
x_23400 = G__23401;
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
var G__23402 = (i + (1));
i = G__23402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23406 = (function (flag,alt_flag,meta23407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23407 = meta23407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23406.cljs$lang$type = true;
cljs.core.async.t23406.cljs$lang$ctorStr = "cljs.core.async/t23406";
cljs.core.async.t23406.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23406");
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23408){var self__ = this;
var _23408__$1 = this;return self__.meta23407;
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23408,meta23407__$1){var self__ = this;
var _23408__$1 = this;return (new cljs.core.async.t23406(self__.flag,self__.alt_flag,meta23407__$1));
});})(flag))
;
cljs.core.async.__GT_t23406 = ((function (flag){
return (function __GT_t23406(flag__$1,alt_flag__$1,meta23407){return (new cljs.core.async.t23406(flag__$1,alt_flag__$1,meta23407));
});})(flag))
;
}
return (new cljs.core.async.t23406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23412 = (function (cb,flag,alt_handler,meta23413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23412.cljs$lang$type = true;
cljs.core.async.t23412.cljs$lang$ctorStr = "cljs.core.async/t23412";
cljs.core.async.t23412.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23412");
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23414){var self__ = this;
var _23414__$1 = this;return self__.meta23413;
});
cljs.core.async.t23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23414,meta23413__$1){var self__ = this;
var _23414__$1 = this;return (new cljs.core.async.t23412(self__.cb,self__.flag,self__.alt_handler,meta23413__$1));
});
cljs.core.async.__GT_t23412 = (function __GT_t23412(cb__$1,flag__$1,alt_handler__$1,meta23413){return (new cljs.core.async.t23412(cb__$1,flag__$1,alt_handler__$1,meta23413));
});
}
return (new cljs.core.async.t23412(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23415_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23416_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23416_SHARP_,port], null));
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
var G__23417 = (i + (1));
i = G__23417;
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
var alts_BANG___delegate = function (ports,p__23418){var map__23420 = p__23418;var map__23420__$1 = ((cljs.core.seq_QMARK_.call(null,map__23420))?cljs.core.apply.call(null,cljs.core.hash_map,map__23420):map__23420);var opts = map__23420__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23418 = null;if (arguments.length > 1) {
  p__23418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23418);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23421){
var ports = cljs.core.first(arglist__23421);
var p__23418 = cljs.core.rest(arglist__23421);
return alts_BANG___delegate(ports,p__23418);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23516 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23516){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23516){
return (function (state_23492){var state_val_23493 = (state_23492[(1)]);if((state_val_23493 === (7)))
{var inst_23488 = (state_23492[(2)]);var state_23492__$1 = state_23492;var statearr_23494_23517 = state_23492__$1;(statearr_23494_23517[(2)] = inst_23488);
(statearr_23494_23517[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (1)))
{var state_23492__$1 = state_23492;var statearr_23495_23518 = state_23492__$1;(statearr_23495_23518[(2)] = null);
(statearr_23495_23518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (4)))
{var inst_23471 = (state_23492[(7)]);var inst_23471__$1 = (state_23492[(2)]);var inst_23472 = (inst_23471__$1 == null);var state_23492__$1 = (function (){var statearr_23496 = state_23492;(statearr_23496[(7)] = inst_23471__$1);
return statearr_23496;
})();if(cljs.core.truth_(inst_23472))
{var statearr_23497_23519 = state_23492__$1;(statearr_23497_23519[(1)] = (5));
} else
{var statearr_23498_23520 = state_23492__$1;(statearr_23498_23520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (13)))
{var state_23492__$1 = state_23492;var statearr_23499_23521 = state_23492__$1;(statearr_23499_23521[(2)] = null);
(statearr_23499_23521[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (6)))
{var inst_23471 = (state_23492[(7)]);var state_23492__$1 = state_23492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23492__$1,(11),to,inst_23471);
} else
{if((state_val_23493 === (3)))
{var inst_23490 = (state_23492[(2)]);var state_23492__$1 = state_23492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23492__$1,inst_23490);
} else
{if((state_val_23493 === (12)))
{var state_23492__$1 = state_23492;var statearr_23500_23522 = state_23492__$1;(statearr_23500_23522[(2)] = null);
(statearr_23500_23522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (2)))
{var state_23492__$1 = state_23492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23492__$1,(4),from);
} else
{if((state_val_23493 === (11)))
{var inst_23481 = (state_23492[(2)]);var state_23492__$1 = state_23492;if(cljs.core.truth_(inst_23481))
{var statearr_23501_23523 = state_23492__$1;(statearr_23501_23523[(1)] = (12));
} else
{var statearr_23502_23524 = state_23492__$1;(statearr_23502_23524[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (9)))
{var state_23492__$1 = state_23492;var statearr_23503_23525 = state_23492__$1;(statearr_23503_23525[(2)] = null);
(statearr_23503_23525[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (5)))
{var state_23492__$1 = state_23492;if(cljs.core.truth_(close_QMARK_))
{var statearr_23504_23526 = state_23492__$1;(statearr_23504_23526[(1)] = (8));
} else
{var statearr_23505_23527 = state_23492__$1;(statearr_23505_23527[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (14)))
{var inst_23486 = (state_23492[(2)]);var state_23492__$1 = state_23492;var statearr_23506_23528 = state_23492__$1;(statearr_23506_23528[(2)] = inst_23486);
(statearr_23506_23528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (10)))
{var inst_23478 = (state_23492[(2)]);var state_23492__$1 = state_23492;var statearr_23507_23529 = state_23492__$1;(statearr_23507_23529[(2)] = inst_23478);
(statearr_23507_23529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23493 === (8)))
{var inst_23475 = cljs.core.async.close_BANG_.call(null,to);var state_23492__$1 = state_23492;var statearr_23508_23530 = state_23492__$1;(statearr_23508_23530[(2)] = inst_23475);
(statearr_23508_23530[(1)] = (10));
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
});})(c__9125__auto___23516))
;return ((function (switch__9110__auto__,c__9125__auto___23516){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23512 = [null,null,null,null,null,null,null,null];(statearr_23512[(0)] = state_machine__9111__auto__);
(statearr_23512[(1)] = (1));
return statearr_23512;
});
var state_machine__9111__auto____1 = (function (state_23492){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23492);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23513){if((e23513 instanceof Object))
{var ex__9114__auto__ = e23513;var statearr_23514_23531 = state_23492;(statearr_23514_23531[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23513;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23532 = state_23492;
state_23492 = G__23532;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23492){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23516))
})();var state__9127__auto__ = (function (){var statearr_23515 = f__9126__auto__.call(null);(statearr_23515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23516);
return statearr_23515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23516))
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
return (function (p__23716){var vec__23717 = p__23716;var v = cljs.core.nth.call(null,vec__23717,(0),null);var p = cljs.core.nth.call(null,vec__23717,(1),null);var job = vec__23717;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results){
return (function (state_23722){var state_val_23723 = (state_23722[(1)]);if((state_val_23723 === (2)))
{var inst_23719 = (state_23722[(2)]);var inst_23720 = cljs.core.async.close_BANG_.call(null,res);var state_23722__$1 = (function (){var statearr_23724 = state_23722;(statearr_23724[(7)] = inst_23719);
return statearr_23724;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23722__$1,inst_23720);
} else
{if((state_val_23723 === (1)))
{var state_23722__$1 = state_23722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23722__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23728 = [null,null,null,null,null,null,null,null];(statearr_23728[(0)] = state_machine__9111__auto__);
(statearr_23728[(1)] = (1));
return statearr_23728;
});
var state_machine__9111__auto____1 = (function (state_23722){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23722);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23729){if((e23729 instanceof Object))
{var ex__9114__auto__ = e23729;var statearr_23730_23900 = state_23722;(statearr_23730_23900[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23901 = state_23722;
state_23722 = G__23901;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23722){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23731 = f__9126__auto__.call(null);(statearr_23731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23899);
return statearr_23731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23899,res,vec__23717,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23732){var vec__23733 = p__23732;var v = cljs.core.nth.call(null,vec__23733,(0),null);var p = cljs.core.nth.call(null,vec__23733,(1),null);var job = vec__23733;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23902 = n;var __23903 = (0);while(true){
if((__23903 < n__4508__auto___23902))
{var G__23734_23904 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23734_23904) {
case "async":
var c__9125__auto___23906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23903,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23903,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function (state_23747){var state_val_23748 = (state_23747[(1)]);if((state_val_23748 === (7)))
{var inst_23743 = (state_23747[(2)]);var state_23747__$1 = state_23747;var statearr_23749_23907 = state_23747__$1;(statearr_23749_23907[(2)] = inst_23743);
(statearr_23749_23907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23748 === (6)))
{var state_23747__$1 = state_23747;var statearr_23750_23908 = state_23747__$1;(statearr_23750_23908[(2)] = null);
(statearr_23750_23908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23748 === (5)))
{var state_23747__$1 = state_23747;var statearr_23751_23909 = state_23747__$1;(statearr_23751_23909[(2)] = null);
(statearr_23751_23909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23748 === (4)))
{var inst_23737 = (state_23747[(2)]);var inst_23738 = async.call(null,inst_23737);var state_23747__$1 = state_23747;if(cljs.core.truth_(inst_23738))
{var statearr_23752_23910 = state_23747__$1;(statearr_23752_23910[(1)] = (5));
} else
{var statearr_23753_23911 = state_23747__$1;(statearr_23753_23911[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23748 === (3)))
{var inst_23745 = (state_23747[(2)]);var state_23747__$1 = state_23747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23747__$1,inst_23745);
} else
{if((state_val_23748 === (2)))
{var state_23747__$1 = state_23747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23747__$1,(4),jobs);
} else
{if((state_val_23748 === (1)))
{var state_23747__$1 = state_23747;var statearr_23754_23912 = state_23747__$1;(statearr_23754_23912[(2)] = null);
(statearr_23754_23912[(1)] = (2));
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
});})(__23903,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
;return ((function (__23903,switch__9110__auto__,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23758 = [null,null,null,null,null,null,null];(statearr_23758[(0)] = state_machine__9111__auto__);
(statearr_23758[(1)] = (1));
return statearr_23758;
});
var state_machine__9111__auto____1 = (function (state_23747){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23747);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23759){if((e23759 instanceof Object))
{var ex__9114__auto__ = e23759;var statearr_23760_23913 = state_23747;(statearr_23760_23913[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23914 = state_23747;
state_23747 = G__23914;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23747){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23903,switch__9110__auto__,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23761 = f__9126__auto__.call(null);(statearr_23761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23906);
return statearr_23761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23903,c__9125__auto___23906,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23903,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23903,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function (state_23774){var state_val_23775 = (state_23774[(1)]);if((state_val_23775 === (7)))
{var inst_23770 = (state_23774[(2)]);var state_23774__$1 = state_23774;var statearr_23776_23916 = state_23774__$1;(statearr_23776_23916[(2)] = inst_23770);
(statearr_23776_23916[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (6)))
{var state_23774__$1 = state_23774;var statearr_23777_23917 = state_23774__$1;(statearr_23777_23917[(2)] = null);
(statearr_23777_23917[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (5)))
{var state_23774__$1 = state_23774;var statearr_23778_23918 = state_23774__$1;(statearr_23778_23918[(2)] = null);
(statearr_23778_23918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (4)))
{var inst_23764 = (state_23774[(2)]);var inst_23765 = process.call(null,inst_23764);var state_23774__$1 = state_23774;if(cljs.core.truth_(inst_23765))
{var statearr_23779_23919 = state_23774__$1;(statearr_23779_23919[(1)] = (5));
} else
{var statearr_23780_23920 = state_23774__$1;(statearr_23780_23920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (3)))
{var inst_23772 = (state_23774[(2)]);var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23774__$1,inst_23772);
} else
{if((state_val_23775 === (2)))
{var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(4),jobs);
} else
{if((state_val_23775 === (1)))
{var state_23774__$1 = state_23774;var statearr_23781_23921 = state_23774__$1;(statearr_23781_23921[(2)] = null);
(statearr_23781_23921[(1)] = (2));
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
});})(__23903,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
;return ((function (__23903,switch__9110__auto__,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23785 = [null,null,null,null,null,null,null];(statearr_23785[(0)] = state_machine__9111__auto__);
(statearr_23785[(1)] = (1));
return statearr_23785;
});
var state_machine__9111__auto____1 = (function (state_23774){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23774);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object))
{var ex__9114__auto__ = e23786;var statearr_23787_23922 = state_23774;(statearr_23787_23922[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23923 = state_23774;
state_23774 = G__23923;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23774){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23903,switch__9110__auto__,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23788 = f__9126__auto__.call(null);(statearr_23788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23915);
return statearr_23788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23903,c__9125__auto___23915,G__23734_23904,n__4508__auto___23902,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23924 = (__23903 + (1));
__23903 = G__23924;
continue;
}
} else
{}
break;
}
var c__9125__auto___23925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23925,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23925,jobs,results,process,async){
return (function (state_23810){var state_val_23811 = (state_23810[(1)]);if((state_val_23811 === (9)))
{var inst_23803 = (state_23810[(2)]);var state_23810__$1 = (function (){var statearr_23812 = state_23810;(statearr_23812[(7)] = inst_23803);
return statearr_23812;
})();var statearr_23813_23926 = state_23810__$1;(statearr_23813_23926[(2)] = null);
(statearr_23813_23926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (8)))
{var inst_23796 = (state_23810[(8)]);var inst_23801 = (state_23810[(2)]);var state_23810__$1 = (function (){var statearr_23814 = state_23810;(statearr_23814[(9)] = inst_23801);
return statearr_23814;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23810__$1,(9),results,inst_23796);
} else
{if((state_val_23811 === (7)))
{var inst_23806 = (state_23810[(2)]);var state_23810__$1 = state_23810;var statearr_23815_23927 = state_23810__$1;(statearr_23815_23927[(2)] = inst_23806);
(statearr_23815_23927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (6)))
{var inst_23791 = (state_23810[(10)]);var inst_23796 = (state_23810[(8)]);var inst_23796__$1 = cljs.core.async.chan.call(null,(1));var inst_23797 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23798 = [inst_23791,inst_23796__$1];var inst_23799 = (new cljs.core.PersistentVector(null,2,(5),inst_23797,inst_23798,null));var state_23810__$1 = (function (){var statearr_23816 = state_23810;(statearr_23816[(8)] = inst_23796__$1);
return statearr_23816;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23810__$1,(8),jobs,inst_23799);
} else
{if((state_val_23811 === (5)))
{var inst_23794 = cljs.core.async.close_BANG_.call(null,jobs);var state_23810__$1 = state_23810;var statearr_23817_23928 = state_23810__$1;(statearr_23817_23928[(2)] = inst_23794);
(statearr_23817_23928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (4)))
{var inst_23791 = (state_23810[(10)]);var inst_23791__$1 = (state_23810[(2)]);var inst_23792 = (inst_23791__$1 == null);var state_23810__$1 = (function (){var statearr_23818 = state_23810;(statearr_23818[(10)] = inst_23791__$1);
return statearr_23818;
})();if(cljs.core.truth_(inst_23792))
{var statearr_23819_23929 = state_23810__$1;(statearr_23819_23929[(1)] = (5));
} else
{var statearr_23820_23930 = state_23810__$1;(statearr_23820_23930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (3)))
{var inst_23808 = (state_23810[(2)]);var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23810__$1,inst_23808);
} else
{if((state_val_23811 === (2)))
{var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23810__$1,(4),from);
} else
{if((state_val_23811 === (1)))
{var state_23810__$1 = state_23810;var statearr_23821_23931 = state_23810__$1;(statearr_23821_23931[(2)] = null);
(statearr_23821_23931[(1)] = (2));
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
});})(c__9125__auto___23925,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23925,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23825[(0)] = state_machine__9111__auto__);
(statearr_23825[(1)] = (1));
return statearr_23825;
});
var state_machine__9111__auto____1 = (function (state_23810){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23810);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23826){if((e23826 instanceof Object))
{var ex__9114__auto__ = e23826;var statearr_23827_23932 = state_23810;(statearr_23827_23932[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23933 = state_23810;
state_23810 = G__23933;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23810){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23925,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23828 = f__9126__auto__.call(null);(statearr_23828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23925);
return statearr_23828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23925,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23866){var state_val_23867 = (state_23866[(1)]);if((state_val_23867 === (7)))
{var inst_23862 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23868_23934 = state_23866__$1;(statearr_23868_23934[(2)] = inst_23862);
(statearr_23868_23934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (20)))
{var state_23866__$1 = state_23866;var statearr_23869_23935 = state_23866__$1;(statearr_23869_23935[(2)] = null);
(statearr_23869_23935[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (1)))
{var state_23866__$1 = state_23866;var statearr_23870_23936 = state_23866__$1;(statearr_23870_23936[(2)] = null);
(statearr_23870_23936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (4)))
{var inst_23831 = (state_23866[(7)]);var inst_23831__$1 = (state_23866[(2)]);var inst_23832 = (inst_23831__$1 == null);var state_23866__$1 = (function (){var statearr_23871 = state_23866;(statearr_23871[(7)] = inst_23831__$1);
return statearr_23871;
})();if(cljs.core.truth_(inst_23832))
{var statearr_23872_23937 = state_23866__$1;(statearr_23872_23937[(1)] = (5));
} else
{var statearr_23873_23938 = state_23866__$1;(statearr_23873_23938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (15)))
{var inst_23844 = (state_23866[(8)]);var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23866__$1,(18),to,inst_23844);
} else
{if((state_val_23867 === (21)))
{var inst_23857 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23874_23939 = state_23866__$1;(statearr_23874_23939[(2)] = inst_23857);
(statearr_23874_23939[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (13)))
{var inst_23859 = (state_23866[(2)]);var state_23866__$1 = (function (){var statearr_23875 = state_23866;(statearr_23875[(9)] = inst_23859);
return statearr_23875;
})();var statearr_23876_23940 = state_23866__$1;(statearr_23876_23940[(2)] = null);
(statearr_23876_23940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (6)))
{var inst_23831 = (state_23866[(7)]);var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(11),inst_23831);
} else
{if((state_val_23867 === (17)))
{var inst_23852 = (state_23866[(2)]);var state_23866__$1 = state_23866;if(cljs.core.truth_(inst_23852))
{var statearr_23877_23941 = state_23866__$1;(statearr_23877_23941[(1)] = (19));
} else
{var statearr_23878_23942 = state_23866__$1;(statearr_23878_23942[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (3)))
{var inst_23864 = (state_23866[(2)]);var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23866__$1,inst_23864);
} else
{if((state_val_23867 === (12)))
{var inst_23841 = (state_23866[(10)]);var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(14),inst_23841);
} else
{if((state_val_23867 === (2)))
{var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(4),results);
} else
{if((state_val_23867 === (19)))
{var state_23866__$1 = state_23866;var statearr_23879_23943 = state_23866__$1;(statearr_23879_23943[(2)] = null);
(statearr_23879_23943[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (11)))
{var inst_23841 = (state_23866[(2)]);var state_23866__$1 = (function (){var statearr_23880 = state_23866;(statearr_23880[(10)] = inst_23841);
return statearr_23880;
})();var statearr_23881_23944 = state_23866__$1;(statearr_23881_23944[(2)] = null);
(statearr_23881_23944[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (9)))
{var state_23866__$1 = state_23866;var statearr_23882_23945 = state_23866__$1;(statearr_23882_23945[(2)] = null);
(statearr_23882_23945[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (5)))
{var state_23866__$1 = state_23866;if(cljs.core.truth_(close_QMARK_))
{var statearr_23883_23946 = state_23866__$1;(statearr_23883_23946[(1)] = (8));
} else
{var statearr_23884_23947 = state_23866__$1;(statearr_23884_23947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (14)))
{var inst_23846 = (state_23866[(11)]);var inst_23844 = (state_23866[(8)]);var inst_23844__$1 = (state_23866[(2)]);var inst_23845 = (inst_23844__$1 == null);var inst_23846__$1 = cljs.core.not.call(null,inst_23845);var state_23866__$1 = (function (){var statearr_23885 = state_23866;(statearr_23885[(11)] = inst_23846__$1);
(statearr_23885[(8)] = inst_23844__$1);
return statearr_23885;
})();if(inst_23846__$1)
{var statearr_23886_23948 = state_23866__$1;(statearr_23886_23948[(1)] = (15));
} else
{var statearr_23887_23949 = state_23866__$1;(statearr_23887_23949[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (16)))
{var inst_23846 = (state_23866[(11)]);var state_23866__$1 = state_23866;var statearr_23888_23950 = state_23866__$1;(statearr_23888_23950[(2)] = inst_23846);
(statearr_23888_23950[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (10)))
{var inst_23838 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23889_23951 = state_23866__$1;(statearr_23889_23951[(2)] = inst_23838);
(statearr_23889_23951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (18)))
{var inst_23849 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23890_23952 = state_23866__$1;(statearr_23890_23952[(2)] = inst_23849);
(statearr_23890_23952[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23867 === (8)))
{var inst_23835 = cljs.core.async.close_BANG_.call(null,to);var state_23866__$1 = state_23866;var statearr_23891_23953 = state_23866__$1;(statearr_23891_23953[(2)] = inst_23835);
(statearr_23891_23953[(1)] = (10));
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
});})(c__9125__auto__,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto__,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23895 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23895[(0)] = state_machine__9111__auto__);
(statearr_23895[(1)] = (1));
return statearr_23895;
});
var state_machine__9111__auto____1 = (function (state_23866){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23866);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23896){if((e23896 instanceof Object))
{var ex__9114__auto__ = e23896;var statearr_23897_23954 = state_23866;(statearr_23897_23954[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23955 = state_23866;
state_23866 = G__23955;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23866){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23898 = f__9126__auto__.call(null);(statearr_23898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,jobs,results,process,async))
);
return c__9125__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24056 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24056,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24056,tc,fc){
return (function (state_24031){var state_val_24032 = (state_24031[(1)]);if((state_val_24032 === (7)))
{var inst_24027 = (state_24031[(2)]);var state_24031__$1 = state_24031;var statearr_24033_24057 = state_24031__$1;(statearr_24033_24057[(2)] = inst_24027);
(statearr_24033_24057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (1)))
{var state_24031__$1 = state_24031;var statearr_24034_24058 = state_24031__$1;(statearr_24034_24058[(2)] = null);
(statearr_24034_24058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (4)))
{var inst_24008 = (state_24031[(7)]);var inst_24008__$1 = (state_24031[(2)]);var inst_24009 = (inst_24008__$1 == null);var state_24031__$1 = (function (){var statearr_24035 = state_24031;(statearr_24035[(7)] = inst_24008__$1);
return statearr_24035;
})();if(cljs.core.truth_(inst_24009))
{var statearr_24036_24059 = state_24031__$1;(statearr_24036_24059[(1)] = (5));
} else
{var statearr_24037_24060 = state_24031__$1;(statearr_24037_24060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (13)))
{var state_24031__$1 = state_24031;var statearr_24038_24061 = state_24031__$1;(statearr_24038_24061[(2)] = null);
(statearr_24038_24061[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (6)))
{var inst_24008 = (state_24031[(7)]);var inst_24014 = p.call(null,inst_24008);var state_24031__$1 = state_24031;if(cljs.core.truth_(inst_24014))
{var statearr_24039_24062 = state_24031__$1;(statearr_24039_24062[(1)] = (9));
} else
{var statearr_24040_24063 = state_24031__$1;(statearr_24040_24063[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (3)))
{var inst_24029 = (state_24031[(2)]);var state_24031__$1 = state_24031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24031__$1,inst_24029);
} else
{if((state_val_24032 === (12)))
{var state_24031__$1 = state_24031;var statearr_24041_24064 = state_24031__$1;(statearr_24041_24064[(2)] = null);
(statearr_24041_24064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (2)))
{var state_24031__$1 = state_24031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(4),ch);
} else
{if((state_val_24032 === (11)))
{var inst_24008 = (state_24031[(7)]);var inst_24018 = (state_24031[(2)]);var state_24031__$1 = state_24031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24031__$1,(8),inst_24018,inst_24008);
} else
{if((state_val_24032 === (9)))
{var state_24031__$1 = state_24031;var statearr_24042_24065 = state_24031__$1;(statearr_24042_24065[(2)] = tc);
(statearr_24042_24065[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (5)))
{var inst_24011 = cljs.core.async.close_BANG_.call(null,tc);var inst_24012 = cljs.core.async.close_BANG_.call(null,fc);var state_24031__$1 = (function (){var statearr_24043 = state_24031;(statearr_24043[(8)] = inst_24011);
return statearr_24043;
})();var statearr_24044_24066 = state_24031__$1;(statearr_24044_24066[(2)] = inst_24012);
(statearr_24044_24066[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (14)))
{var inst_24025 = (state_24031[(2)]);var state_24031__$1 = state_24031;var statearr_24045_24067 = state_24031__$1;(statearr_24045_24067[(2)] = inst_24025);
(statearr_24045_24067[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (10)))
{var state_24031__$1 = state_24031;var statearr_24046_24068 = state_24031__$1;(statearr_24046_24068[(2)] = fc);
(statearr_24046_24068[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24032 === (8)))
{var inst_24020 = (state_24031[(2)]);var state_24031__$1 = state_24031;if(cljs.core.truth_(inst_24020))
{var statearr_24047_24069 = state_24031__$1;(statearr_24047_24069[(1)] = (12));
} else
{var statearr_24048_24070 = state_24031__$1;(statearr_24048_24070[(1)] = (13));
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
});})(c__9125__auto___24056,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24056,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24052 = [null,null,null,null,null,null,null,null,null];(statearr_24052[(0)] = state_machine__9111__auto__);
(statearr_24052[(1)] = (1));
return statearr_24052;
});
var state_machine__9111__auto____1 = (function (state_24031){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24031);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24053){if((e24053 instanceof Object))
{var ex__9114__auto__ = e24053;var statearr_24054_24071 = state_24031;(statearr_24054_24071[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24072 = state_24031;
state_24031 = G__24072;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24031){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24056,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24055 = f__9126__auto__.call(null);(statearr_24055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24056);
return statearr_24055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24056,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24119){var state_val_24120 = (state_24119[(1)]);if((state_val_24120 === (7)))
{var inst_24115 = (state_24119[(2)]);var state_24119__$1 = state_24119;var statearr_24121_24137 = state_24119__$1;(statearr_24121_24137[(2)] = inst_24115);
(statearr_24121_24137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24120 === (6)))
{var inst_24108 = (state_24119[(7)]);var inst_24105 = (state_24119[(8)]);var inst_24112 = f.call(null,inst_24105,inst_24108);var inst_24105__$1 = inst_24112;var state_24119__$1 = (function (){var statearr_24122 = state_24119;(statearr_24122[(8)] = inst_24105__$1);
return statearr_24122;
})();var statearr_24123_24138 = state_24119__$1;(statearr_24123_24138[(2)] = null);
(statearr_24123_24138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24120 === (5)))
{var inst_24105 = (state_24119[(8)]);var state_24119__$1 = state_24119;var statearr_24124_24139 = state_24119__$1;(statearr_24124_24139[(2)] = inst_24105);
(statearr_24124_24139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24120 === (4)))
{var inst_24108 = (state_24119[(7)]);var inst_24108__$1 = (state_24119[(2)]);var inst_24109 = (inst_24108__$1 == null);var state_24119__$1 = (function (){var statearr_24125 = state_24119;(statearr_24125[(7)] = inst_24108__$1);
return statearr_24125;
})();if(cljs.core.truth_(inst_24109))
{var statearr_24126_24140 = state_24119__$1;(statearr_24126_24140[(1)] = (5));
} else
{var statearr_24127_24141 = state_24119__$1;(statearr_24127_24141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24120 === (3)))
{var inst_24117 = (state_24119[(2)]);var state_24119__$1 = state_24119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24119__$1,inst_24117);
} else
{if((state_val_24120 === (2)))
{var state_24119__$1 = state_24119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(4),ch);
} else
{if((state_val_24120 === (1)))
{var inst_24105 = init;var state_24119__$1 = (function (){var statearr_24128 = state_24119;(statearr_24128[(8)] = inst_24105);
return statearr_24128;
})();var statearr_24129_24142 = state_24119__$1;(statearr_24129_24142[(2)] = null);
(statearr_24129_24142[(1)] = (2));
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24133 = [null,null,null,null,null,null,null,null,null];(statearr_24133[(0)] = state_machine__9111__auto__);
(statearr_24133[(1)] = (1));
return statearr_24133;
});
var state_machine__9111__auto____1 = (function (state_24119){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24119);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24134){if((e24134 instanceof Object))
{var ex__9114__auto__ = e24134;var statearr_24135_24143 = state_24119;(statearr_24135_24143[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24144 = state_24119;
state_24119 = G__24144;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24119){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24136 = f__9126__auto__.call(null);(statearr_24136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24218){var state_val_24219 = (state_24218[(1)]);if((state_val_24219 === (7)))
{var inst_24200 = (state_24218[(2)]);var state_24218__$1 = state_24218;var statearr_24220_24243 = state_24218__$1;(statearr_24220_24243[(2)] = inst_24200);
(statearr_24220_24243[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (1)))
{var inst_24194 = cljs.core.seq.call(null,coll);var inst_24195 = inst_24194;var state_24218__$1 = (function (){var statearr_24221 = state_24218;(statearr_24221[(7)] = inst_24195);
return statearr_24221;
})();var statearr_24222_24244 = state_24218__$1;(statearr_24222_24244[(2)] = null);
(statearr_24222_24244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (4)))
{var inst_24195 = (state_24218[(7)]);var inst_24198 = cljs.core.first.call(null,inst_24195);var state_24218__$1 = state_24218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24218__$1,(7),ch,inst_24198);
} else
{if((state_val_24219 === (13)))
{var inst_24212 = (state_24218[(2)]);var state_24218__$1 = state_24218;var statearr_24223_24245 = state_24218__$1;(statearr_24223_24245[(2)] = inst_24212);
(statearr_24223_24245[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (6)))
{var inst_24203 = (state_24218[(2)]);var state_24218__$1 = state_24218;if(cljs.core.truth_(inst_24203))
{var statearr_24224_24246 = state_24218__$1;(statearr_24224_24246[(1)] = (8));
} else
{var statearr_24225_24247 = state_24218__$1;(statearr_24225_24247[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (3)))
{var inst_24216 = (state_24218[(2)]);var state_24218__$1 = state_24218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24218__$1,inst_24216);
} else
{if((state_val_24219 === (12)))
{var state_24218__$1 = state_24218;var statearr_24226_24248 = state_24218__$1;(statearr_24226_24248[(2)] = null);
(statearr_24226_24248[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (2)))
{var inst_24195 = (state_24218[(7)]);var state_24218__$1 = state_24218;if(cljs.core.truth_(inst_24195))
{var statearr_24227_24249 = state_24218__$1;(statearr_24227_24249[(1)] = (4));
} else
{var statearr_24228_24250 = state_24218__$1;(statearr_24228_24250[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (11)))
{var inst_24209 = cljs.core.async.close_BANG_.call(null,ch);var state_24218__$1 = state_24218;var statearr_24229_24251 = state_24218__$1;(statearr_24229_24251[(2)] = inst_24209);
(statearr_24229_24251[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (9)))
{var state_24218__$1 = state_24218;if(cljs.core.truth_(close_QMARK_))
{var statearr_24230_24252 = state_24218__$1;(statearr_24230_24252[(1)] = (11));
} else
{var statearr_24231_24253 = state_24218__$1;(statearr_24231_24253[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (5)))
{var inst_24195 = (state_24218[(7)]);var state_24218__$1 = state_24218;var statearr_24232_24254 = state_24218__$1;(statearr_24232_24254[(2)] = inst_24195);
(statearr_24232_24254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (10)))
{var inst_24214 = (state_24218[(2)]);var state_24218__$1 = state_24218;var statearr_24233_24255 = state_24218__$1;(statearr_24233_24255[(2)] = inst_24214);
(statearr_24233_24255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24219 === (8)))
{var inst_24195 = (state_24218[(7)]);var inst_24205 = cljs.core.next.call(null,inst_24195);var inst_24195__$1 = inst_24205;var state_24218__$1 = (function (){var statearr_24234 = state_24218;(statearr_24234[(7)] = inst_24195__$1);
return statearr_24234;
})();var statearr_24235_24256 = state_24218__$1;(statearr_24235_24256[(2)] = null);
(statearr_24235_24256[(1)] = (2));
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24239 = [null,null,null,null,null,null,null,null];(statearr_24239[(0)] = state_machine__9111__auto__);
(statearr_24239[(1)] = (1));
return statearr_24239;
});
var state_machine__9111__auto____1 = (function (state_24218){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24218);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object))
{var ex__9114__auto__ = e24240;var statearr_24241_24257 = state_24218;(statearr_24241_24257[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24258 = state_24218;
state_24218 = G__24258;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24218){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24242 = f__9126__auto__.call(null);(statearr_24242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
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
cljs.core.async.Mux = (function (){var obj24260 = {};return obj24260;
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
cljs.core.async.Mult = (function (){var obj24262 = {};return obj24262;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24484 = (function (cs,ch,mult,meta24485){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24485 = meta24485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24484.cljs$lang$type = true;
cljs.core.async.t24484.cljs$lang$ctorStr = "cljs.core.async/t24484";
cljs.core.async.t24484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24484");
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24486){var self__ = this;
var _24486__$1 = this;return self__.meta24485;
});})(cs))
;
cljs.core.async.t24484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24486,meta24485__$1){var self__ = this;
var _24486__$1 = this;return (new cljs.core.async.t24484(self__.cs,self__.ch,self__.mult,meta24485__$1));
});})(cs))
;
cljs.core.async.__GT_t24484 = ((function (cs){
return (function __GT_t24484(cs__$1,ch__$1,mult__$1,meta24485){return (new cljs.core.async.t24484(cs__$1,ch__$1,mult__$1,meta24485));
});})(cs))
;
}
return (new cljs.core.async.t24484(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24705,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24705,cs,m,dchan,dctr,done){
return (function (state_24617){var state_val_24618 = (state_24617[(1)]);if((state_val_24618 === (7)))
{var inst_24613 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24619_24706 = state_24617__$1;(statearr_24619_24706[(2)] = inst_24613);
(statearr_24619_24706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (20)))
{var inst_24518 = (state_24617[(7)]);var inst_24528 = cljs.core.first.call(null,inst_24518);var inst_24529 = cljs.core.nth.call(null,inst_24528,(0),null);var inst_24530 = cljs.core.nth.call(null,inst_24528,(1),null);var state_24617__$1 = (function (){var statearr_24620 = state_24617;(statearr_24620[(8)] = inst_24529);
return statearr_24620;
})();if(cljs.core.truth_(inst_24530))
{var statearr_24621_24707 = state_24617__$1;(statearr_24621_24707[(1)] = (22));
} else
{var statearr_24622_24708 = state_24617__$1;(statearr_24622_24708[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (27)))
{var inst_24558 = (state_24617[(9)]);var inst_24565 = (state_24617[(10)]);var inst_24560 = (state_24617[(11)]);var inst_24489 = (state_24617[(12)]);var inst_24565__$1 = cljs.core._nth.call(null,inst_24558,inst_24560);var inst_24566 = cljs.core.async.put_BANG_.call(null,inst_24565__$1,inst_24489,done);var state_24617__$1 = (function (){var statearr_24623 = state_24617;(statearr_24623[(10)] = inst_24565__$1);
return statearr_24623;
})();if(cljs.core.truth_(inst_24566))
{var statearr_24624_24709 = state_24617__$1;(statearr_24624_24709[(1)] = (30));
} else
{var statearr_24625_24710 = state_24617__$1;(statearr_24625_24710[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (1)))
{var state_24617__$1 = state_24617;var statearr_24626_24711 = state_24617__$1;(statearr_24626_24711[(2)] = null);
(statearr_24626_24711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (24)))
{var inst_24518 = (state_24617[(7)]);var inst_24535 = (state_24617[(2)]);var inst_24536 = cljs.core.next.call(null,inst_24518);var inst_24498 = inst_24536;var inst_24499 = null;var inst_24500 = (0);var inst_24501 = (0);var state_24617__$1 = (function (){var statearr_24627 = state_24617;(statearr_24627[(13)] = inst_24498);
(statearr_24627[(14)] = inst_24535);
(statearr_24627[(15)] = inst_24501);
(statearr_24627[(16)] = inst_24500);
(statearr_24627[(17)] = inst_24499);
return statearr_24627;
})();var statearr_24628_24712 = state_24617__$1;(statearr_24628_24712[(2)] = null);
(statearr_24628_24712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (39)))
{var state_24617__$1 = state_24617;var statearr_24632_24713 = state_24617__$1;(statearr_24632_24713[(2)] = null);
(statearr_24632_24713[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (4)))
{var inst_24489 = (state_24617[(12)]);var inst_24489__$1 = (state_24617[(2)]);var inst_24490 = (inst_24489__$1 == null);var state_24617__$1 = (function (){var statearr_24633 = state_24617;(statearr_24633[(12)] = inst_24489__$1);
return statearr_24633;
})();if(cljs.core.truth_(inst_24490))
{var statearr_24634_24714 = state_24617__$1;(statearr_24634_24714[(1)] = (5));
} else
{var statearr_24635_24715 = state_24617__$1;(statearr_24635_24715[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (15)))
{var inst_24498 = (state_24617[(13)]);var inst_24501 = (state_24617[(15)]);var inst_24500 = (state_24617[(16)]);var inst_24499 = (state_24617[(17)]);var inst_24514 = (state_24617[(2)]);var inst_24515 = (inst_24501 + (1));var tmp24629 = inst_24498;var tmp24630 = inst_24500;var tmp24631 = inst_24499;var inst_24498__$1 = tmp24629;var inst_24499__$1 = tmp24631;var inst_24500__$1 = tmp24630;var inst_24501__$1 = inst_24515;var state_24617__$1 = (function (){var statearr_24636 = state_24617;(statearr_24636[(13)] = inst_24498__$1);
(statearr_24636[(18)] = inst_24514);
(statearr_24636[(15)] = inst_24501__$1);
(statearr_24636[(16)] = inst_24500__$1);
(statearr_24636[(17)] = inst_24499__$1);
return statearr_24636;
})();var statearr_24637_24716 = state_24617__$1;(statearr_24637_24716[(2)] = null);
(statearr_24637_24716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (21)))
{var inst_24539 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24641_24717 = state_24617__$1;(statearr_24641_24717[(2)] = inst_24539);
(statearr_24641_24717[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (31)))
{var inst_24565 = (state_24617[(10)]);var inst_24569 = done.call(null,null);var inst_24570 = cljs.core.async.untap_STAR_.call(null,m,inst_24565);var state_24617__$1 = (function (){var statearr_24642 = state_24617;(statearr_24642[(19)] = inst_24569);
return statearr_24642;
})();var statearr_24643_24718 = state_24617__$1;(statearr_24643_24718[(2)] = inst_24570);
(statearr_24643_24718[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (32)))
{var inst_24558 = (state_24617[(9)]);var inst_24557 = (state_24617[(20)]);var inst_24560 = (state_24617[(11)]);var inst_24559 = (state_24617[(21)]);var inst_24572 = (state_24617[(2)]);var inst_24573 = (inst_24560 + (1));var tmp24638 = inst_24558;var tmp24639 = inst_24557;var tmp24640 = inst_24559;var inst_24557__$1 = tmp24639;var inst_24558__$1 = tmp24638;var inst_24559__$1 = tmp24640;var inst_24560__$1 = inst_24573;var state_24617__$1 = (function (){var statearr_24644 = state_24617;(statearr_24644[(9)] = inst_24558__$1);
(statearr_24644[(22)] = inst_24572);
(statearr_24644[(20)] = inst_24557__$1);
(statearr_24644[(11)] = inst_24560__$1);
(statearr_24644[(21)] = inst_24559__$1);
return statearr_24644;
})();var statearr_24645_24719 = state_24617__$1;(statearr_24645_24719[(2)] = null);
(statearr_24645_24719[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (40)))
{var inst_24585 = (state_24617[(23)]);var inst_24589 = done.call(null,null);var inst_24590 = cljs.core.async.untap_STAR_.call(null,m,inst_24585);var state_24617__$1 = (function (){var statearr_24646 = state_24617;(statearr_24646[(24)] = inst_24589);
return statearr_24646;
})();var statearr_24647_24720 = state_24617__$1;(statearr_24647_24720[(2)] = inst_24590);
(statearr_24647_24720[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (33)))
{var inst_24576 = (state_24617[(25)]);var inst_24578 = cljs.core.chunked_seq_QMARK_.call(null,inst_24576);var state_24617__$1 = state_24617;if(inst_24578)
{var statearr_24648_24721 = state_24617__$1;(statearr_24648_24721[(1)] = (36));
} else
{var statearr_24649_24722 = state_24617__$1;(statearr_24649_24722[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (13)))
{var inst_24508 = (state_24617[(26)]);var inst_24511 = cljs.core.async.close_BANG_.call(null,inst_24508);var state_24617__$1 = state_24617;var statearr_24650_24723 = state_24617__$1;(statearr_24650_24723[(2)] = inst_24511);
(statearr_24650_24723[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (22)))
{var inst_24529 = (state_24617[(8)]);var inst_24532 = cljs.core.async.close_BANG_.call(null,inst_24529);var state_24617__$1 = state_24617;var statearr_24651_24724 = state_24617__$1;(statearr_24651_24724[(2)] = inst_24532);
(statearr_24651_24724[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (36)))
{var inst_24576 = (state_24617[(25)]);var inst_24580 = cljs.core.chunk_first.call(null,inst_24576);var inst_24581 = cljs.core.chunk_rest.call(null,inst_24576);var inst_24582 = cljs.core.count.call(null,inst_24580);var inst_24557 = inst_24581;var inst_24558 = inst_24580;var inst_24559 = inst_24582;var inst_24560 = (0);var state_24617__$1 = (function (){var statearr_24652 = state_24617;(statearr_24652[(9)] = inst_24558);
(statearr_24652[(20)] = inst_24557);
(statearr_24652[(11)] = inst_24560);
(statearr_24652[(21)] = inst_24559);
return statearr_24652;
})();var statearr_24653_24725 = state_24617__$1;(statearr_24653_24725[(2)] = null);
(statearr_24653_24725[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (41)))
{var inst_24576 = (state_24617[(25)]);var inst_24592 = (state_24617[(2)]);var inst_24593 = cljs.core.next.call(null,inst_24576);var inst_24557 = inst_24593;var inst_24558 = null;var inst_24559 = (0);var inst_24560 = (0);var state_24617__$1 = (function (){var statearr_24654 = state_24617;(statearr_24654[(9)] = inst_24558);
(statearr_24654[(20)] = inst_24557);
(statearr_24654[(27)] = inst_24592);
(statearr_24654[(11)] = inst_24560);
(statearr_24654[(21)] = inst_24559);
return statearr_24654;
})();var statearr_24655_24726 = state_24617__$1;(statearr_24655_24726[(2)] = null);
(statearr_24655_24726[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (43)))
{var state_24617__$1 = state_24617;var statearr_24656_24727 = state_24617__$1;(statearr_24656_24727[(2)] = null);
(statearr_24656_24727[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (29)))
{var inst_24601 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24657_24728 = state_24617__$1;(statearr_24657_24728[(2)] = inst_24601);
(statearr_24657_24728[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (44)))
{var inst_24610 = (state_24617[(2)]);var state_24617__$1 = (function (){var statearr_24658 = state_24617;(statearr_24658[(28)] = inst_24610);
return statearr_24658;
})();var statearr_24659_24729 = state_24617__$1;(statearr_24659_24729[(2)] = null);
(statearr_24659_24729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (6)))
{var inst_24549 = (state_24617[(29)]);var inst_24548 = cljs.core.deref.call(null,cs);var inst_24549__$1 = cljs.core.keys.call(null,inst_24548);var inst_24550 = cljs.core.count.call(null,inst_24549__$1);var inst_24551 = cljs.core.reset_BANG_.call(null,dctr,inst_24550);var inst_24556 = cljs.core.seq.call(null,inst_24549__$1);var inst_24557 = inst_24556;var inst_24558 = null;var inst_24559 = (0);var inst_24560 = (0);var state_24617__$1 = (function (){var statearr_24660 = state_24617;(statearr_24660[(30)] = inst_24551);
(statearr_24660[(29)] = inst_24549__$1);
(statearr_24660[(9)] = inst_24558);
(statearr_24660[(20)] = inst_24557);
(statearr_24660[(11)] = inst_24560);
(statearr_24660[(21)] = inst_24559);
return statearr_24660;
})();var statearr_24661_24730 = state_24617__$1;(statearr_24661_24730[(2)] = null);
(statearr_24661_24730[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (28)))
{var inst_24557 = (state_24617[(20)]);var inst_24576 = (state_24617[(25)]);var inst_24576__$1 = cljs.core.seq.call(null,inst_24557);var state_24617__$1 = (function (){var statearr_24662 = state_24617;(statearr_24662[(25)] = inst_24576__$1);
return statearr_24662;
})();if(inst_24576__$1)
{var statearr_24663_24731 = state_24617__$1;(statearr_24663_24731[(1)] = (33));
} else
{var statearr_24664_24732 = state_24617__$1;(statearr_24664_24732[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (25)))
{var inst_24560 = (state_24617[(11)]);var inst_24559 = (state_24617[(21)]);var inst_24562 = (inst_24560 < inst_24559);var inst_24563 = inst_24562;var state_24617__$1 = state_24617;if(cljs.core.truth_(inst_24563))
{var statearr_24665_24733 = state_24617__$1;(statearr_24665_24733[(1)] = (27));
} else
{var statearr_24666_24734 = state_24617__$1;(statearr_24666_24734[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (34)))
{var state_24617__$1 = state_24617;var statearr_24667_24735 = state_24617__$1;(statearr_24667_24735[(2)] = null);
(statearr_24667_24735[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (17)))
{var state_24617__$1 = state_24617;var statearr_24668_24736 = state_24617__$1;(statearr_24668_24736[(2)] = null);
(statearr_24668_24736[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (3)))
{var inst_24615 = (state_24617[(2)]);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24617__$1,inst_24615);
} else
{if((state_val_24618 === (12)))
{var inst_24544 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24669_24737 = state_24617__$1;(statearr_24669_24737[(2)] = inst_24544);
(statearr_24669_24737[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (2)))
{var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24617__$1,(4),ch);
} else
{if((state_val_24618 === (23)))
{var state_24617__$1 = state_24617;var statearr_24670_24738 = state_24617__$1;(statearr_24670_24738[(2)] = null);
(statearr_24670_24738[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (35)))
{var inst_24599 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24671_24739 = state_24617__$1;(statearr_24671_24739[(2)] = inst_24599);
(statearr_24671_24739[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (19)))
{var inst_24518 = (state_24617[(7)]);var inst_24522 = cljs.core.chunk_first.call(null,inst_24518);var inst_24523 = cljs.core.chunk_rest.call(null,inst_24518);var inst_24524 = cljs.core.count.call(null,inst_24522);var inst_24498 = inst_24523;var inst_24499 = inst_24522;var inst_24500 = inst_24524;var inst_24501 = (0);var state_24617__$1 = (function (){var statearr_24672 = state_24617;(statearr_24672[(13)] = inst_24498);
(statearr_24672[(15)] = inst_24501);
(statearr_24672[(16)] = inst_24500);
(statearr_24672[(17)] = inst_24499);
return statearr_24672;
})();var statearr_24673_24740 = state_24617__$1;(statearr_24673_24740[(2)] = null);
(statearr_24673_24740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (11)))
{var inst_24498 = (state_24617[(13)]);var inst_24518 = (state_24617[(7)]);var inst_24518__$1 = cljs.core.seq.call(null,inst_24498);var state_24617__$1 = (function (){var statearr_24674 = state_24617;(statearr_24674[(7)] = inst_24518__$1);
return statearr_24674;
})();if(inst_24518__$1)
{var statearr_24675_24741 = state_24617__$1;(statearr_24675_24741[(1)] = (16));
} else
{var statearr_24676_24742 = state_24617__$1;(statearr_24676_24742[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (9)))
{var inst_24546 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24677_24743 = state_24617__$1;(statearr_24677_24743[(2)] = inst_24546);
(statearr_24677_24743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (5)))
{var inst_24496 = cljs.core.deref.call(null,cs);var inst_24497 = cljs.core.seq.call(null,inst_24496);var inst_24498 = inst_24497;var inst_24499 = null;var inst_24500 = (0);var inst_24501 = (0);var state_24617__$1 = (function (){var statearr_24678 = state_24617;(statearr_24678[(13)] = inst_24498);
(statearr_24678[(15)] = inst_24501);
(statearr_24678[(16)] = inst_24500);
(statearr_24678[(17)] = inst_24499);
return statearr_24678;
})();var statearr_24679_24744 = state_24617__$1;(statearr_24679_24744[(2)] = null);
(statearr_24679_24744[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (14)))
{var state_24617__$1 = state_24617;var statearr_24680_24745 = state_24617__$1;(statearr_24680_24745[(2)] = null);
(statearr_24680_24745[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (45)))
{var inst_24607 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24681_24746 = state_24617__$1;(statearr_24681_24746[(2)] = inst_24607);
(statearr_24681_24746[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (26)))
{var inst_24549 = (state_24617[(29)]);var inst_24603 = (state_24617[(2)]);var inst_24604 = cljs.core.seq.call(null,inst_24549);var state_24617__$1 = (function (){var statearr_24682 = state_24617;(statearr_24682[(31)] = inst_24603);
return statearr_24682;
})();if(inst_24604)
{var statearr_24683_24747 = state_24617__$1;(statearr_24683_24747[(1)] = (42));
} else
{var statearr_24684_24748 = state_24617__$1;(statearr_24684_24748[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (16)))
{var inst_24518 = (state_24617[(7)]);var inst_24520 = cljs.core.chunked_seq_QMARK_.call(null,inst_24518);var state_24617__$1 = state_24617;if(inst_24520)
{var statearr_24685_24749 = state_24617__$1;(statearr_24685_24749[(1)] = (19));
} else
{var statearr_24686_24750 = state_24617__$1;(statearr_24686_24750[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (38)))
{var inst_24596 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24687_24751 = state_24617__$1;(statearr_24687_24751[(2)] = inst_24596);
(statearr_24687_24751[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (30)))
{var state_24617__$1 = state_24617;var statearr_24688_24752 = state_24617__$1;(statearr_24688_24752[(2)] = null);
(statearr_24688_24752[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (10)))
{var inst_24501 = (state_24617[(15)]);var inst_24499 = (state_24617[(17)]);var inst_24507 = cljs.core._nth.call(null,inst_24499,inst_24501);var inst_24508 = cljs.core.nth.call(null,inst_24507,(0),null);var inst_24509 = cljs.core.nth.call(null,inst_24507,(1),null);var state_24617__$1 = (function (){var statearr_24689 = state_24617;(statearr_24689[(26)] = inst_24508);
return statearr_24689;
})();if(cljs.core.truth_(inst_24509))
{var statearr_24690_24753 = state_24617__$1;(statearr_24690_24753[(1)] = (13));
} else
{var statearr_24691_24754 = state_24617__$1;(statearr_24691_24754[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (18)))
{var inst_24542 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24692_24755 = state_24617__$1;(statearr_24692_24755[(2)] = inst_24542);
(statearr_24692_24755[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (42)))
{var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24617__$1,(45),dchan);
} else
{if((state_val_24618 === (37)))
{var inst_24585 = (state_24617[(23)]);var inst_24576 = (state_24617[(25)]);var inst_24489 = (state_24617[(12)]);var inst_24585__$1 = cljs.core.first.call(null,inst_24576);var inst_24586 = cljs.core.async.put_BANG_.call(null,inst_24585__$1,inst_24489,done);var state_24617__$1 = (function (){var statearr_24693 = state_24617;(statearr_24693[(23)] = inst_24585__$1);
return statearr_24693;
})();if(cljs.core.truth_(inst_24586))
{var statearr_24694_24756 = state_24617__$1;(statearr_24694_24756[(1)] = (39));
} else
{var statearr_24695_24757 = state_24617__$1;(statearr_24695_24757[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24618 === (8)))
{var inst_24501 = (state_24617[(15)]);var inst_24500 = (state_24617[(16)]);var inst_24503 = (inst_24501 < inst_24500);var inst_24504 = inst_24503;var state_24617__$1 = state_24617;if(cljs.core.truth_(inst_24504))
{var statearr_24696_24758 = state_24617__$1;(statearr_24696_24758[(1)] = (10));
} else
{var statearr_24697_24759 = state_24617__$1;(statearr_24697_24759[(1)] = (11));
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
});})(c__9125__auto___24705,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24705,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24701[(0)] = state_machine__9111__auto__);
(statearr_24701[(1)] = (1));
return statearr_24701;
});
var state_machine__9111__auto____1 = (function (state_24617){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24617);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object))
{var ex__9114__auto__ = e24702;var statearr_24703_24760 = state_24617;(statearr_24703_24760[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24761 = state_24617;
state_24617 = G__24761;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24617){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24705,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24704 = f__9126__auto__.call(null);(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24705);
return statearr_24704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24705,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24763 = {};return obj24763;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24764){var map__24769 = p__24764;var map__24769__$1 = ((cljs.core.seq_QMARK_.call(null,map__24769))?cljs.core.apply.call(null,cljs.core.hash_map,map__24769):map__24769);var opts = map__24769__$1;var statearr_24770_24773 = state;(statearr_24770_24773[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24769,map__24769__$1,opts){
return (function (val){var statearr_24771_24774 = state;(statearr_24771_24774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24769,map__24769__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24772_24775 = state;(statearr_24772_24775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24764 = null;if (arguments.length > 3) {
  p__24764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24764);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24776){
var state = cljs.core.first(arglist__24776);
arglist__24776 = cljs.core.next(arglist__24776);
var cont_block = cljs.core.first(arglist__24776);
arglist__24776 = cljs.core.next(arglist__24776);
var ports = cljs.core.first(arglist__24776);
var p__24764 = cljs.core.rest(arglist__24776);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24764);
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
;var m = (function (){if(typeof cljs.core.async.t24896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24896 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24897){
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
this.meta24897 = meta24897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24896.cljs$lang$type = true;
cljs.core.async.t24896.cljs$lang$ctorStr = "cljs.core.async/t24896";
cljs.core.async.t24896.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24896");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24898){var self__ = this;
var _24898__$1 = this;return self__.meta24897;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24898,meta24897__$1){var self__ = this;
var _24898__$1 = this;return (new cljs.core.async.t24896(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24897__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24896 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24897){return (new cljs.core.async.t24896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24897));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24896(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24968){var state_val_24969 = (state_24968[(1)]);if((state_val_24969 === (7)))
{var inst_24912 = (state_24968[(7)]);var inst_24917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24912);var state_24968__$1 = state_24968;var statearr_24970_25016 = state_24968__$1;(statearr_24970_25016[(2)] = inst_24917);
(statearr_24970_25016[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (20)))
{var inst_24927 = (state_24968[(8)]);var state_24968__$1 = state_24968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24968__$1,(23),out,inst_24927);
} else
{if((state_val_24969 === (1)))
{var inst_24902 = (state_24968[(9)]);var inst_24902__$1 = calc_state.call(null);var inst_24903 = cljs.core.seq_QMARK_.call(null,inst_24902__$1);var state_24968__$1 = (function (){var statearr_24971 = state_24968;(statearr_24971[(9)] = inst_24902__$1);
return statearr_24971;
})();if(inst_24903)
{var statearr_24972_25017 = state_24968__$1;(statearr_24972_25017[(1)] = (2));
} else
{var statearr_24973_25018 = state_24968__$1;(statearr_24973_25018[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (24)))
{var inst_24920 = (state_24968[(10)]);var inst_24912 = inst_24920;var state_24968__$1 = (function (){var statearr_24974 = state_24968;(statearr_24974[(7)] = inst_24912);
return statearr_24974;
})();var statearr_24975_25019 = state_24968__$1;(statearr_24975_25019[(2)] = null);
(statearr_24975_25019[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (4)))
{var inst_24902 = (state_24968[(9)]);var inst_24908 = (state_24968[(2)]);var inst_24909 = cljs.core.get.call(null,inst_24908,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24910 = cljs.core.get.call(null,inst_24908,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24911 = cljs.core.get.call(null,inst_24908,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24912 = inst_24902;var state_24968__$1 = (function (){var statearr_24976 = state_24968;(statearr_24976[(7)] = inst_24912);
(statearr_24976[(11)] = inst_24909);
(statearr_24976[(12)] = inst_24910);
(statearr_24976[(13)] = inst_24911);
return statearr_24976;
})();var statearr_24977_25020 = state_24968__$1;(statearr_24977_25020[(2)] = null);
(statearr_24977_25020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (15)))
{var state_24968__$1 = state_24968;var statearr_24978_25021 = state_24968__$1;(statearr_24978_25021[(2)] = null);
(statearr_24978_25021[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (21)))
{var inst_24920 = (state_24968[(10)]);var inst_24912 = inst_24920;var state_24968__$1 = (function (){var statearr_24979 = state_24968;(statearr_24979[(7)] = inst_24912);
return statearr_24979;
})();var statearr_24980_25022 = state_24968__$1;(statearr_24980_25022[(2)] = null);
(statearr_24980_25022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (13)))
{var inst_24964 = (state_24968[(2)]);var state_24968__$1 = state_24968;var statearr_24981_25023 = state_24968__$1;(statearr_24981_25023[(2)] = inst_24964);
(statearr_24981_25023[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (22)))
{var inst_24962 = (state_24968[(2)]);var state_24968__$1 = state_24968;var statearr_24982_25024 = state_24968__$1;(statearr_24982_25024[(2)] = inst_24962);
(statearr_24982_25024[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (6)))
{var inst_24966 = (state_24968[(2)]);var state_24968__$1 = state_24968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24968__$1,inst_24966);
} else
{if((state_val_24969 === (25)))
{var state_24968__$1 = state_24968;var statearr_24983_25025 = state_24968__$1;(statearr_24983_25025[(2)] = null);
(statearr_24983_25025[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (17)))
{var inst_24942 = (state_24968[(14)]);var state_24968__$1 = state_24968;var statearr_24984_25026 = state_24968__$1;(statearr_24984_25026[(2)] = inst_24942);
(statearr_24984_25026[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (3)))
{var inst_24902 = (state_24968[(9)]);var state_24968__$1 = state_24968;var statearr_24985_25027 = state_24968__$1;(statearr_24985_25027[(2)] = inst_24902);
(statearr_24985_25027[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (12)))
{var inst_24923 = (state_24968[(15)]);var inst_24928 = (state_24968[(16)]);var inst_24942 = (state_24968[(14)]);var inst_24942__$1 = inst_24923.call(null,inst_24928);var state_24968__$1 = (function (){var statearr_24986 = state_24968;(statearr_24986[(14)] = inst_24942__$1);
return statearr_24986;
})();if(cljs.core.truth_(inst_24942__$1))
{var statearr_24987_25028 = state_24968__$1;(statearr_24987_25028[(1)] = (17));
} else
{var statearr_24988_25029 = state_24968__$1;(statearr_24988_25029[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (2)))
{var inst_24902 = (state_24968[(9)]);var inst_24905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24902);var state_24968__$1 = state_24968;var statearr_24989_25030 = state_24968__$1;(statearr_24989_25030[(2)] = inst_24905);
(statearr_24989_25030[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (23)))
{var inst_24953 = (state_24968[(2)]);var state_24968__$1 = state_24968;if(cljs.core.truth_(inst_24953))
{var statearr_24990_25031 = state_24968__$1;(statearr_24990_25031[(1)] = (24));
} else
{var statearr_24991_25032 = state_24968__$1;(statearr_24991_25032[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (19)))
{var inst_24950 = (state_24968[(2)]);var state_24968__$1 = state_24968;if(cljs.core.truth_(inst_24950))
{var statearr_24992_25033 = state_24968__$1;(statearr_24992_25033[(1)] = (20));
} else
{var statearr_24993_25034 = state_24968__$1;(statearr_24993_25034[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (11)))
{var inst_24927 = (state_24968[(8)]);var inst_24933 = (inst_24927 == null);var state_24968__$1 = state_24968;if(cljs.core.truth_(inst_24933))
{var statearr_24994_25035 = state_24968__$1;(statearr_24994_25035[(1)] = (14));
} else
{var statearr_24995_25036 = state_24968__$1;(statearr_24995_25036[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (9)))
{var inst_24920 = (state_24968[(10)]);var inst_24920__$1 = (state_24968[(2)]);var inst_24921 = cljs.core.get.call(null,inst_24920__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24922 = cljs.core.get.call(null,inst_24920__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24923 = cljs.core.get.call(null,inst_24920__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24968__$1 = (function (){var statearr_24996 = state_24968;(statearr_24996[(15)] = inst_24923);
(statearr_24996[(17)] = inst_24922);
(statearr_24996[(10)] = inst_24920__$1);
return statearr_24996;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24968__$1,(10),inst_24921);
} else
{if((state_val_24969 === (5)))
{var inst_24912 = (state_24968[(7)]);var inst_24915 = cljs.core.seq_QMARK_.call(null,inst_24912);var state_24968__$1 = state_24968;if(inst_24915)
{var statearr_24997_25037 = state_24968__$1;(statearr_24997_25037[(1)] = (7));
} else
{var statearr_24998_25038 = state_24968__$1;(statearr_24998_25038[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (14)))
{var inst_24928 = (state_24968[(16)]);var inst_24935 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24928);var state_24968__$1 = state_24968;var statearr_24999_25039 = state_24968__$1;(statearr_24999_25039[(2)] = inst_24935);
(statearr_24999_25039[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (26)))
{var inst_24958 = (state_24968[(2)]);var state_24968__$1 = state_24968;var statearr_25000_25040 = state_24968__$1;(statearr_25000_25040[(2)] = inst_24958);
(statearr_25000_25040[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (16)))
{var inst_24938 = (state_24968[(2)]);var inst_24939 = calc_state.call(null);var inst_24912 = inst_24939;var state_24968__$1 = (function (){var statearr_25001 = state_24968;(statearr_25001[(7)] = inst_24912);
(statearr_25001[(18)] = inst_24938);
return statearr_25001;
})();var statearr_25002_25041 = state_24968__$1;(statearr_25002_25041[(2)] = null);
(statearr_25002_25041[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (10)))
{var inst_24928 = (state_24968[(16)]);var inst_24927 = (state_24968[(8)]);var inst_24926 = (state_24968[(2)]);var inst_24927__$1 = cljs.core.nth.call(null,inst_24926,(0),null);var inst_24928__$1 = cljs.core.nth.call(null,inst_24926,(1),null);var inst_24929 = (inst_24927__$1 == null);var inst_24930 = cljs.core._EQ_.call(null,inst_24928__$1,change);var inst_24931 = (inst_24929) || (inst_24930);var state_24968__$1 = (function (){var statearr_25003 = state_24968;(statearr_25003[(16)] = inst_24928__$1);
(statearr_25003[(8)] = inst_24927__$1);
return statearr_25003;
})();if(cljs.core.truth_(inst_24931))
{var statearr_25004_25042 = state_24968__$1;(statearr_25004_25042[(1)] = (11));
} else
{var statearr_25005_25043 = state_24968__$1;(statearr_25005_25043[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (18)))
{var inst_24923 = (state_24968[(15)]);var inst_24922 = (state_24968[(17)]);var inst_24928 = (state_24968[(16)]);var inst_24945 = cljs.core.empty_QMARK_.call(null,inst_24923);var inst_24946 = inst_24922.call(null,inst_24928);var inst_24947 = cljs.core.not.call(null,inst_24946);var inst_24948 = (inst_24945) && (inst_24947);var state_24968__$1 = state_24968;var statearr_25006_25044 = state_24968__$1;(statearr_25006_25044[(2)] = inst_24948);
(statearr_25006_25044[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24969 === (8)))
{var inst_24912 = (state_24968[(7)]);var state_24968__$1 = state_24968;var statearr_25007_25045 = state_24968__$1;(statearr_25007_25045[(2)] = inst_24912);
(statearr_25007_25045[(1)] = (9));
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
});})(c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25011[(0)] = state_machine__9111__auto__);
(statearr_25011[(1)] = (1));
return statearr_25011;
});
var state_machine__9111__auto____1 = (function (state_24968){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24968);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object))
{var ex__9114__auto__ = e25012;var statearr_25013_25046 = state_24968;(statearr_25013_25046[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25047 = state_24968;
state_24968 = G__25047;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24968){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25014 = f__9126__auto__.call(null);(statearr_25014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25015);
return statearr_25014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25049 = {};return obj25049;
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
return (function (p1__25050_SHARP_){if(cljs.core.truth_(p1__25050_SHARP_.call(null,topic)))
{return p1__25050_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25173 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25174){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25174 = meta25174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25173.cljs$lang$type = true;
cljs.core.async.t25173.cljs$lang$ctorStr = "cljs.core.async/t25173";
cljs.core.async.t25173.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25173");
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25175){var self__ = this;
var _25175__$1 = this;return self__.meta25174;
});})(mults,ensure_mult))
;
cljs.core.async.t25173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25175,meta25174__$1){var self__ = this;
var _25175__$1 = this;return (new cljs.core.async.t25173(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25174__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25173 = ((function (mults,ensure_mult){
return (function __GT_t25173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25174){return (new cljs.core.async.t25173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25174));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25173(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25295 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25295,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25295,mults,ensure_mult,p){
return (function (state_25247){var state_val_25248 = (state_25247[(1)]);if((state_val_25248 === (7)))
{var inst_25243 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25249_25296 = state_25247__$1;(statearr_25249_25296[(2)] = inst_25243);
(statearr_25249_25296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (20)))
{var state_25247__$1 = state_25247;var statearr_25250_25297 = state_25247__$1;(statearr_25250_25297[(2)] = null);
(statearr_25250_25297[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (1)))
{var state_25247__$1 = state_25247;var statearr_25251_25298 = state_25247__$1;(statearr_25251_25298[(2)] = null);
(statearr_25251_25298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (24)))
{var inst_25226 = (state_25247[(7)]);var inst_25235 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25226);var state_25247__$1 = state_25247;var statearr_25252_25299 = state_25247__$1;(statearr_25252_25299[(2)] = inst_25235);
(statearr_25252_25299[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (4)))
{var inst_25178 = (state_25247[(8)]);var inst_25178__$1 = (state_25247[(2)]);var inst_25179 = (inst_25178__$1 == null);var state_25247__$1 = (function (){var statearr_25253 = state_25247;(statearr_25253[(8)] = inst_25178__$1);
return statearr_25253;
})();if(cljs.core.truth_(inst_25179))
{var statearr_25254_25300 = state_25247__$1;(statearr_25254_25300[(1)] = (5));
} else
{var statearr_25255_25301 = state_25247__$1;(statearr_25255_25301[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (15)))
{var inst_25220 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25256_25302 = state_25247__$1;(statearr_25256_25302[(2)] = inst_25220);
(statearr_25256_25302[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (21)))
{var inst_25240 = (state_25247[(2)]);var state_25247__$1 = (function (){var statearr_25257 = state_25247;(statearr_25257[(9)] = inst_25240);
return statearr_25257;
})();var statearr_25258_25303 = state_25247__$1;(statearr_25258_25303[(2)] = null);
(statearr_25258_25303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (13)))
{var inst_25202 = (state_25247[(10)]);var inst_25204 = cljs.core.chunked_seq_QMARK_.call(null,inst_25202);var state_25247__$1 = state_25247;if(inst_25204)
{var statearr_25259_25304 = state_25247__$1;(statearr_25259_25304[(1)] = (16));
} else
{var statearr_25260_25305 = state_25247__$1;(statearr_25260_25305[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (22)))
{var inst_25232 = (state_25247[(2)]);var state_25247__$1 = state_25247;if(cljs.core.truth_(inst_25232))
{var statearr_25261_25306 = state_25247__$1;(statearr_25261_25306[(1)] = (23));
} else
{var statearr_25262_25307 = state_25247__$1;(statearr_25262_25307[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (6)))
{var inst_25228 = (state_25247[(11)]);var inst_25178 = (state_25247[(8)]);var inst_25226 = (state_25247[(7)]);var inst_25226__$1 = topic_fn.call(null,inst_25178);var inst_25227 = cljs.core.deref.call(null,mults);var inst_25228__$1 = cljs.core.get.call(null,inst_25227,inst_25226__$1);var state_25247__$1 = (function (){var statearr_25263 = state_25247;(statearr_25263[(11)] = inst_25228__$1);
(statearr_25263[(7)] = inst_25226__$1);
return statearr_25263;
})();if(cljs.core.truth_(inst_25228__$1))
{var statearr_25264_25308 = state_25247__$1;(statearr_25264_25308[(1)] = (19));
} else
{var statearr_25265_25309 = state_25247__$1;(statearr_25265_25309[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (25)))
{var inst_25237 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25266_25310 = state_25247__$1;(statearr_25266_25310[(2)] = inst_25237);
(statearr_25266_25310[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (17)))
{var inst_25202 = (state_25247[(10)]);var inst_25211 = cljs.core.first.call(null,inst_25202);var inst_25212 = cljs.core.async.muxch_STAR_.call(null,inst_25211);var inst_25213 = cljs.core.async.close_BANG_.call(null,inst_25212);var inst_25214 = cljs.core.next.call(null,inst_25202);var inst_25188 = inst_25214;var inst_25189 = null;var inst_25190 = (0);var inst_25191 = (0);var state_25247__$1 = (function (){var statearr_25267 = state_25247;(statearr_25267[(12)] = inst_25190);
(statearr_25267[(13)] = inst_25189);
(statearr_25267[(14)] = inst_25188);
(statearr_25267[(15)] = inst_25191);
(statearr_25267[(16)] = inst_25213);
return statearr_25267;
})();var statearr_25268_25311 = state_25247__$1;(statearr_25268_25311[(2)] = null);
(statearr_25268_25311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (3)))
{var inst_25245 = (state_25247[(2)]);var state_25247__$1 = state_25247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25247__$1,inst_25245);
} else
{if((state_val_25248 === (12)))
{var inst_25222 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25269_25312 = state_25247__$1;(statearr_25269_25312[(2)] = inst_25222);
(statearr_25269_25312[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (2)))
{var state_25247__$1 = state_25247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25247__$1,(4),ch);
} else
{if((state_val_25248 === (23)))
{var state_25247__$1 = state_25247;var statearr_25270_25313 = state_25247__$1;(statearr_25270_25313[(2)] = null);
(statearr_25270_25313[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (19)))
{var inst_25228 = (state_25247[(11)]);var inst_25178 = (state_25247[(8)]);var inst_25230 = cljs.core.async.muxch_STAR_.call(null,inst_25228);var state_25247__$1 = state_25247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25247__$1,(22),inst_25230,inst_25178);
} else
{if((state_val_25248 === (11)))
{var inst_25188 = (state_25247[(14)]);var inst_25202 = (state_25247[(10)]);var inst_25202__$1 = cljs.core.seq.call(null,inst_25188);var state_25247__$1 = (function (){var statearr_25271 = state_25247;(statearr_25271[(10)] = inst_25202__$1);
return statearr_25271;
})();if(inst_25202__$1)
{var statearr_25272_25314 = state_25247__$1;(statearr_25272_25314[(1)] = (13));
} else
{var statearr_25273_25315 = state_25247__$1;(statearr_25273_25315[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (9)))
{var inst_25224 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25274_25316 = state_25247__$1;(statearr_25274_25316[(2)] = inst_25224);
(statearr_25274_25316[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (5)))
{var inst_25185 = cljs.core.deref.call(null,mults);var inst_25186 = cljs.core.vals.call(null,inst_25185);var inst_25187 = cljs.core.seq.call(null,inst_25186);var inst_25188 = inst_25187;var inst_25189 = null;var inst_25190 = (0);var inst_25191 = (0);var state_25247__$1 = (function (){var statearr_25275 = state_25247;(statearr_25275[(12)] = inst_25190);
(statearr_25275[(13)] = inst_25189);
(statearr_25275[(14)] = inst_25188);
(statearr_25275[(15)] = inst_25191);
return statearr_25275;
})();var statearr_25276_25317 = state_25247__$1;(statearr_25276_25317[(2)] = null);
(statearr_25276_25317[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (14)))
{var state_25247__$1 = state_25247;var statearr_25280_25318 = state_25247__$1;(statearr_25280_25318[(2)] = null);
(statearr_25280_25318[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (16)))
{var inst_25202 = (state_25247[(10)]);var inst_25206 = cljs.core.chunk_first.call(null,inst_25202);var inst_25207 = cljs.core.chunk_rest.call(null,inst_25202);var inst_25208 = cljs.core.count.call(null,inst_25206);var inst_25188 = inst_25207;var inst_25189 = inst_25206;var inst_25190 = inst_25208;var inst_25191 = (0);var state_25247__$1 = (function (){var statearr_25281 = state_25247;(statearr_25281[(12)] = inst_25190);
(statearr_25281[(13)] = inst_25189);
(statearr_25281[(14)] = inst_25188);
(statearr_25281[(15)] = inst_25191);
return statearr_25281;
})();var statearr_25282_25319 = state_25247__$1;(statearr_25282_25319[(2)] = null);
(statearr_25282_25319[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (10)))
{var inst_25190 = (state_25247[(12)]);var inst_25189 = (state_25247[(13)]);var inst_25188 = (state_25247[(14)]);var inst_25191 = (state_25247[(15)]);var inst_25196 = cljs.core._nth.call(null,inst_25189,inst_25191);var inst_25197 = cljs.core.async.muxch_STAR_.call(null,inst_25196);var inst_25198 = cljs.core.async.close_BANG_.call(null,inst_25197);var inst_25199 = (inst_25191 + (1));var tmp25277 = inst_25190;var tmp25278 = inst_25189;var tmp25279 = inst_25188;var inst_25188__$1 = tmp25279;var inst_25189__$1 = tmp25278;var inst_25190__$1 = tmp25277;var inst_25191__$1 = inst_25199;var state_25247__$1 = (function (){var statearr_25283 = state_25247;(statearr_25283[(12)] = inst_25190__$1);
(statearr_25283[(13)] = inst_25189__$1);
(statearr_25283[(14)] = inst_25188__$1);
(statearr_25283[(15)] = inst_25191__$1);
(statearr_25283[(17)] = inst_25198);
return statearr_25283;
})();var statearr_25284_25320 = state_25247__$1;(statearr_25284_25320[(2)] = null);
(statearr_25284_25320[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (18)))
{var inst_25217 = (state_25247[(2)]);var state_25247__$1 = state_25247;var statearr_25285_25321 = state_25247__$1;(statearr_25285_25321[(2)] = inst_25217);
(statearr_25285_25321[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25248 === (8)))
{var inst_25190 = (state_25247[(12)]);var inst_25191 = (state_25247[(15)]);var inst_25193 = (inst_25191 < inst_25190);var inst_25194 = inst_25193;var state_25247__$1 = state_25247;if(cljs.core.truth_(inst_25194))
{var statearr_25286_25322 = state_25247__$1;(statearr_25286_25322[(1)] = (10));
} else
{var statearr_25287_25323 = state_25247__$1;(statearr_25287_25323[(1)] = (11));
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
});})(c__9125__auto___25295,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25295,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25291[(0)] = state_machine__9111__auto__);
(statearr_25291[(1)] = (1));
return statearr_25291;
});
var state_machine__9111__auto____1 = (function (state_25247){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25247);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object))
{var ex__9114__auto__ = e25292;var statearr_25293_25324 = state_25247;(statearr_25293_25324[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25292;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25325 = state_25247;
state_25247 = G__25325;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25247){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25295,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25294 = f__9126__auto__.call(null);(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25295);
return statearr_25294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25295,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25432){var state_val_25433 = (state_25432[(1)]);if((state_val_25433 === (7)))
{var state_25432__$1 = state_25432;var statearr_25434_25463 = state_25432__$1;(statearr_25434_25463[(2)] = null);
(statearr_25434_25463[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (1)))
{var state_25432__$1 = state_25432;var statearr_25435_25464 = state_25432__$1;(statearr_25435_25464[(2)] = null);
(statearr_25435_25464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (4)))
{var inst_25396 = (state_25432[(7)]);var inst_25398 = (inst_25396 < cnt);var state_25432__$1 = state_25432;if(cljs.core.truth_(inst_25398))
{var statearr_25436_25465 = state_25432__$1;(statearr_25436_25465[(1)] = (6));
} else
{var statearr_25437_25466 = state_25432__$1;(statearr_25437_25466[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (15)))
{var inst_25428 = (state_25432[(2)]);var state_25432__$1 = state_25432;var statearr_25438_25467 = state_25432__$1;(statearr_25438_25467[(2)] = inst_25428);
(statearr_25438_25467[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (13)))
{var inst_25421 = cljs.core.async.close_BANG_.call(null,out);var state_25432__$1 = state_25432;var statearr_25439_25468 = state_25432__$1;(statearr_25439_25468[(2)] = inst_25421);
(statearr_25439_25468[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (6)))
{var state_25432__$1 = state_25432;var statearr_25440_25469 = state_25432__$1;(statearr_25440_25469[(2)] = null);
(statearr_25440_25469[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (3)))
{var inst_25430 = (state_25432[(2)]);var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25432__$1,inst_25430);
} else
{if((state_val_25433 === (12)))
{var inst_25418 = (state_25432[(8)]);var inst_25418__$1 = (state_25432[(2)]);var inst_25419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25418__$1);var state_25432__$1 = (function (){var statearr_25441 = state_25432;(statearr_25441[(8)] = inst_25418__$1);
return statearr_25441;
})();if(cljs.core.truth_(inst_25419))
{var statearr_25442_25470 = state_25432__$1;(statearr_25442_25470[(1)] = (13));
} else
{var statearr_25443_25471 = state_25432__$1;(statearr_25443_25471[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (2)))
{var inst_25395 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25396 = (0);var state_25432__$1 = (function (){var statearr_25444 = state_25432;(statearr_25444[(7)] = inst_25396);
(statearr_25444[(9)] = inst_25395);
return statearr_25444;
})();var statearr_25445_25472 = state_25432__$1;(statearr_25445_25472[(2)] = null);
(statearr_25445_25472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (11)))
{var inst_25396 = (state_25432[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25432,(10),Object,null,(9));var inst_25405 = chs__$1.call(null,inst_25396);var inst_25406 = done.call(null,inst_25396);var inst_25407 = cljs.core.async.take_BANG_.call(null,inst_25405,inst_25406);var state_25432__$1 = state_25432;var statearr_25446_25473 = state_25432__$1;(statearr_25446_25473[(2)] = inst_25407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (9)))
{var inst_25396 = (state_25432[(7)]);var inst_25409 = (state_25432[(2)]);var inst_25410 = (inst_25396 + (1));var inst_25396__$1 = inst_25410;var state_25432__$1 = (function (){var statearr_25447 = state_25432;(statearr_25447[(7)] = inst_25396__$1);
(statearr_25447[(10)] = inst_25409);
return statearr_25447;
})();var statearr_25448_25474 = state_25432__$1;(statearr_25448_25474[(2)] = null);
(statearr_25448_25474[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (5)))
{var inst_25416 = (state_25432[(2)]);var state_25432__$1 = (function (){var statearr_25449 = state_25432;(statearr_25449[(11)] = inst_25416);
return statearr_25449;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25432__$1,(12),dchan);
} else
{if((state_val_25433 === (14)))
{var inst_25418 = (state_25432[(8)]);var inst_25423 = cljs.core.apply.call(null,f,inst_25418);var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25432__$1,(16),out,inst_25423);
} else
{if((state_val_25433 === (16)))
{var inst_25425 = (state_25432[(2)]);var state_25432__$1 = (function (){var statearr_25450 = state_25432;(statearr_25450[(12)] = inst_25425);
return statearr_25450;
})();var statearr_25451_25475 = state_25432__$1;(statearr_25451_25475[(2)] = null);
(statearr_25451_25475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (10)))
{var inst_25400 = (state_25432[(2)]);var inst_25401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25432__$1 = (function (){var statearr_25452 = state_25432;(statearr_25452[(13)] = inst_25400);
return statearr_25452;
})();var statearr_25453_25476 = state_25432__$1;(statearr_25453_25476[(2)] = inst_25401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (8)))
{var inst_25414 = (state_25432[(2)]);var state_25432__$1 = state_25432;var statearr_25454_25477 = state_25432__$1;(statearr_25454_25477[(2)] = inst_25414);
(statearr_25454_25477[(1)] = (5));
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
});})(c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25458[(0)] = state_machine__9111__auto__);
(statearr_25458[(1)] = (1));
return statearr_25458;
});
var state_machine__9111__auto____1 = (function (state_25432){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25432);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25459){if((e25459 instanceof Object))
{var ex__9114__auto__ = e25459;var statearr_25460_25478 = state_25432;(statearr_25460_25478[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25479 = state_25432;
state_25432 = G__25479;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25432){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25461 = f__9126__auto__.call(null);(statearr_25461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25462);
return statearr_25461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25462,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25587,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25587,out){
return (function (state_25563){var state_val_25564 = (state_25563[(1)]);if((state_val_25564 === (7)))
{var inst_25543 = (state_25563[(7)]);var inst_25542 = (state_25563[(8)]);var inst_25542__$1 = (state_25563[(2)]);var inst_25543__$1 = cljs.core.nth.call(null,inst_25542__$1,(0),null);var inst_25544 = cljs.core.nth.call(null,inst_25542__$1,(1),null);var inst_25545 = (inst_25543__$1 == null);var state_25563__$1 = (function (){var statearr_25565 = state_25563;(statearr_25565[(9)] = inst_25544);
(statearr_25565[(7)] = inst_25543__$1);
(statearr_25565[(8)] = inst_25542__$1);
return statearr_25565;
})();if(cljs.core.truth_(inst_25545))
{var statearr_25566_25588 = state_25563__$1;(statearr_25566_25588[(1)] = (8));
} else
{var statearr_25567_25589 = state_25563__$1;(statearr_25567_25589[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (1)))
{var inst_25534 = cljs.core.vec.call(null,chs);var inst_25535 = inst_25534;var state_25563__$1 = (function (){var statearr_25568 = state_25563;(statearr_25568[(10)] = inst_25535);
return statearr_25568;
})();var statearr_25569_25590 = state_25563__$1;(statearr_25569_25590[(2)] = null);
(statearr_25569_25590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (4)))
{var inst_25535 = (state_25563[(10)]);var state_25563__$1 = state_25563;return cljs.core.async.ioc_alts_BANG_.call(null,state_25563__$1,(7),inst_25535);
} else
{if((state_val_25564 === (6)))
{var inst_25559 = (state_25563[(2)]);var state_25563__$1 = state_25563;var statearr_25570_25591 = state_25563__$1;(statearr_25570_25591[(2)] = inst_25559);
(statearr_25570_25591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (3)))
{var inst_25561 = (state_25563[(2)]);var state_25563__$1 = state_25563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25563__$1,inst_25561);
} else
{if((state_val_25564 === (2)))
{var inst_25535 = (state_25563[(10)]);var inst_25537 = cljs.core.count.call(null,inst_25535);var inst_25538 = (inst_25537 > (0));var state_25563__$1 = state_25563;if(cljs.core.truth_(inst_25538))
{var statearr_25572_25592 = state_25563__$1;(statearr_25572_25592[(1)] = (4));
} else
{var statearr_25573_25593 = state_25563__$1;(statearr_25573_25593[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (11)))
{var inst_25535 = (state_25563[(10)]);var inst_25552 = (state_25563[(2)]);var tmp25571 = inst_25535;var inst_25535__$1 = tmp25571;var state_25563__$1 = (function (){var statearr_25574 = state_25563;(statearr_25574[(10)] = inst_25535__$1);
(statearr_25574[(11)] = inst_25552);
return statearr_25574;
})();var statearr_25575_25594 = state_25563__$1;(statearr_25575_25594[(2)] = null);
(statearr_25575_25594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (9)))
{var inst_25543 = (state_25563[(7)]);var state_25563__$1 = state_25563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25563__$1,(11),out,inst_25543);
} else
{if((state_val_25564 === (5)))
{var inst_25557 = cljs.core.async.close_BANG_.call(null,out);var state_25563__$1 = state_25563;var statearr_25576_25595 = state_25563__$1;(statearr_25576_25595[(2)] = inst_25557);
(statearr_25576_25595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (10)))
{var inst_25555 = (state_25563[(2)]);var state_25563__$1 = state_25563;var statearr_25577_25596 = state_25563__$1;(statearr_25577_25596[(2)] = inst_25555);
(statearr_25577_25596[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25564 === (8)))
{var inst_25544 = (state_25563[(9)]);var inst_25543 = (state_25563[(7)]);var inst_25542 = (state_25563[(8)]);var inst_25535 = (state_25563[(10)]);var inst_25547 = (function (){var c = inst_25544;var v = inst_25543;var vec__25540 = inst_25542;var cs = inst_25535;return ((function (c,v,vec__25540,cs,inst_25544,inst_25543,inst_25542,inst_25535,state_val_25564,c__9125__auto___25587,out){
return (function (p1__25480_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25480_SHARP_);
});
;})(c,v,vec__25540,cs,inst_25544,inst_25543,inst_25542,inst_25535,state_val_25564,c__9125__auto___25587,out))
})();var inst_25548 = cljs.core.filterv.call(null,inst_25547,inst_25535);var inst_25535__$1 = inst_25548;var state_25563__$1 = (function (){var statearr_25578 = state_25563;(statearr_25578[(10)] = inst_25535__$1);
return statearr_25578;
})();var statearr_25579_25597 = state_25563__$1;(statearr_25579_25597[(2)] = null);
(statearr_25579_25597[(1)] = (2));
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
});})(c__9125__auto___25587,out))
;return ((function (switch__9110__auto__,c__9125__auto___25587,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25583 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25583[(0)] = state_machine__9111__auto__);
(statearr_25583[(1)] = (1));
return statearr_25583;
});
var state_machine__9111__auto____1 = (function (state_25563){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25563);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object))
{var ex__9114__auto__ = e25584;var statearr_25585_25598 = state_25563;(statearr_25585_25598[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25599 = state_25563;
state_25563 = G__25599;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25587,out))
})();var state__9127__auto__ = (function (){var statearr_25586 = f__9126__auto__.call(null);(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25587);
return statearr_25586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25587,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25692 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25692,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25692,out){
return (function (state_25669){var state_val_25670 = (state_25669[(1)]);if((state_val_25670 === (7)))
{var inst_25651 = (state_25669[(7)]);var inst_25651__$1 = (state_25669[(2)]);var inst_25652 = (inst_25651__$1 == null);var inst_25653 = cljs.core.not.call(null,inst_25652);var state_25669__$1 = (function (){var statearr_25671 = state_25669;(statearr_25671[(7)] = inst_25651__$1);
return statearr_25671;
})();if(inst_25653)
{var statearr_25672_25693 = state_25669__$1;(statearr_25672_25693[(1)] = (8));
} else
{var statearr_25673_25694 = state_25669__$1;(statearr_25673_25694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (1)))
{var inst_25646 = (0);var state_25669__$1 = (function (){var statearr_25674 = state_25669;(statearr_25674[(8)] = inst_25646);
return statearr_25674;
})();var statearr_25675_25695 = state_25669__$1;(statearr_25675_25695[(2)] = null);
(statearr_25675_25695[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (4)))
{var state_25669__$1 = state_25669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25669__$1,(7),ch);
} else
{if((state_val_25670 === (6)))
{var inst_25664 = (state_25669[(2)]);var state_25669__$1 = state_25669;var statearr_25676_25696 = state_25669__$1;(statearr_25676_25696[(2)] = inst_25664);
(statearr_25676_25696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (3)))
{var inst_25666 = (state_25669[(2)]);var inst_25667 = cljs.core.async.close_BANG_.call(null,out);var state_25669__$1 = (function (){var statearr_25677 = state_25669;(statearr_25677[(9)] = inst_25666);
return statearr_25677;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25669__$1,inst_25667);
} else
{if((state_val_25670 === (2)))
{var inst_25646 = (state_25669[(8)]);var inst_25648 = (inst_25646 < n);var state_25669__$1 = state_25669;if(cljs.core.truth_(inst_25648))
{var statearr_25678_25697 = state_25669__$1;(statearr_25678_25697[(1)] = (4));
} else
{var statearr_25679_25698 = state_25669__$1;(statearr_25679_25698[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (11)))
{var inst_25646 = (state_25669[(8)]);var inst_25656 = (state_25669[(2)]);var inst_25657 = (inst_25646 + (1));var inst_25646__$1 = inst_25657;var state_25669__$1 = (function (){var statearr_25680 = state_25669;(statearr_25680[(8)] = inst_25646__$1);
(statearr_25680[(10)] = inst_25656);
return statearr_25680;
})();var statearr_25681_25699 = state_25669__$1;(statearr_25681_25699[(2)] = null);
(statearr_25681_25699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (9)))
{var state_25669__$1 = state_25669;var statearr_25682_25700 = state_25669__$1;(statearr_25682_25700[(2)] = null);
(statearr_25682_25700[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (5)))
{var state_25669__$1 = state_25669;var statearr_25683_25701 = state_25669__$1;(statearr_25683_25701[(2)] = null);
(statearr_25683_25701[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (10)))
{var inst_25661 = (state_25669[(2)]);var state_25669__$1 = state_25669;var statearr_25684_25702 = state_25669__$1;(statearr_25684_25702[(2)] = inst_25661);
(statearr_25684_25702[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25670 === (8)))
{var inst_25651 = (state_25669[(7)]);var state_25669__$1 = state_25669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25669__$1,(11),out,inst_25651);
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
});})(c__9125__auto___25692,out))
;return ((function (switch__9110__auto__,c__9125__auto___25692,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25688[(0)] = state_machine__9111__auto__);
(statearr_25688[(1)] = (1));
return statearr_25688;
});
var state_machine__9111__auto____1 = (function (state_25669){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25669);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25689){if((e25689 instanceof Object))
{var ex__9114__auto__ = e25689;var statearr_25690_25703 = state_25669;(statearr_25690_25703[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25669);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25704 = state_25669;
state_25669 = G__25704;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25669){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25692,out))
})();var state__9127__auto__ = (function (){var statearr_25691 = f__9126__auto__.call(null);(statearr_25691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25692);
return statearr_25691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25692,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25712 = (function (ch,f,map_LT_,meta25713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25713 = meta25713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25712.cljs$lang$type = true;
cljs.core.async.t25712.cljs$lang$ctorStr = "cljs.core.async/t25712";
cljs.core.async.t25712.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25712");
});
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25715 = (function (fn1,_,meta25713,ch,f,map_LT_,meta25716){
this.fn1 = fn1;
this._ = _;
this.meta25713 = meta25713;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25716 = meta25716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25715.cljs$lang$type = true;
cljs.core.async.t25715.cljs$lang$ctorStr = "cljs.core.async/t25715";
cljs.core.async.t25715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25715");
});})(___$1))
;
cljs.core.async.t25715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25705_SHARP_){return f1.call(null,(((p1__25705_SHARP_ == null))?null:self__.f.call(null,p1__25705_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25717){var self__ = this;
var _25717__$1 = this;return self__.meta25716;
});})(___$1))
;
cljs.core.async.t25715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25717,meta25716__$1){var self__ = this;
var _25717__$1 = this;return (new cljs.core.async.t25715(self__.fn1,self__._,self__.meta25713,self__.ch,self__.f,self__.map_LT_,meta25716__$1));
});})(___$1))
;
cljs.core.async.__GT_t25715 = ((function (___$1){
return (function __GT_t25715(fn1__$1,___$2,meta25713__$1,ch__$2,f__$2,map_LT___$2,meta25716){return (new cljs.core.async.t25715(fn1__$1,___$2,meta25713__$1,ch__$2,f__$2,map_LT___$2,meta25716));
});})(___$1))
;
}
return (new cljs.core.async.t25715(fn1,___$1,self__.meta25713,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25714){var self__ = this;
var _25714__$1 = this;return self__.meta25713;
});
cljs.core.async.t25712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25714,meta25713__$1){var self__ = this;
var _25714__$1 = this;return (new cljs.core.async.t25712(self__.ch,self__.f,self__.map_LT_,meta25713__$1));
});
cljs.core.async.__GT_t25712 = (function __GT_t25712(ch__$1,f__$1,map_LT___$1,meta25713){return (new cljs.core.async.t25712(ch__$1,f__$1,map_LT___$1,meta25713));
});
}
return (new cljs.core.async.t25712(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25721 = (function (ch,f,map_GT_,meta25722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25722 = meta25722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25721.cljs$lang$type = true;
cljs.core.async.t25721.cljs$lang$ctorStr = "cljs.core.async/t25721";
cljs.core.async.t25721.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25721");
});
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25723){var self__ = this;
var _25723__$1 = this;return self__.meta25722;
});
cljs.core.async.t25721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25723,meta25722__$1){var self__ = this;
var _25723__$1 = this;return (new cljs.core.async.t25721(self__.ch,self__.f,self__.map_GT_,meta25722__$1));
});
cljs.core.async.__GT_t25721 = (function __GT_t25721(ch__$1,f__$1,map_GT___$1,meta25722){return (new cljs.core.async.t25721(ch__$1,f__$1,map_GT___$1,meta25722));
});
}
return (new cljs.core.async.t25721(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25727 = (function (ch,p,filter_GT_,meta25728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25728 = meta25728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25727.cljs$lang$type = true;
cljs.core.async.t25727.cljs$lang$ctorStr = "cljs.core.async/t25727";
cljs.core.async.t25727.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25727");
});
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25729){var self__ = this;
var _25729__$1 = this;return self__.meta25728;
});
cljs.core.async.t25727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25729,meta25728__$1){var self__ = this;
var _25729__$1 = this;return (new cljs.core.async.t25727(self__.ch,self__.p,self__.filter_GT_,meta25728__$1));
});
cljs.core.async.__GT_t25727 = (function __GT_t25727(ch__$1,p__$1,filter_GT___$1,meta25728){return (new cljs.core.async.t25727(ch__$1,p__$1,filter_GT___$1,meta25728));
});
}
return (new cljs.core.async.t25727(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25812,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25812,out){
return (function (state_25791){var state_val_25792 = (state_25791[(1)]);if((state_val_25792 === (7)))
{var inst_25787 = (state_25791[(2)]);var state_25791__$1 = state_25791;var statearr_25793_25813 = state_25791__$1;(statearr_25793_25813[(2)] = inst_25787);
(statearr_25793_25813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (1)))
{var state_25791__$1 = state_25791;var statearr_25794_25814 = state_25791__$1;(statearr_25794_25814[(2)] = null);
(statearr_25794_25814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (4)))
{var inst_25773 = (state_25791[(7)]);var inst_25773__$1 = (state_25791[(2)]);var inst_25774 = (inst_25773__$1 == null);var state_25791__$1 = (function (){var statearr_25795 = state_25791;(statearr_25795[(7)] = inst_25773__$1);
return statearr_25795;
})();if(cljs.core.truth_(inst_25774))
{var statearr_25796_25815 = state_25791__$1;(statearr_25796_25815[(1)] = (5));
} else
{var statearr_25797_25816 = state_25791__$1;(statearr_25797_25816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (6)))
{var inst_25773 = (state_25791[(7)]);var inst_25778 = p.call(null,inst_25773);var state_25791__$1 = state_25791;if(cljs.core.truth_(inst_25778))
{var statearr_25798_25817 = state_25791__$1;(statearr_25798_25817[(1)] = (8));
} else
{var statearr_25799_25818 = state_25791__$1;(statearr_25799_25818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (3)))
{var inst_25789 = (state_25791[(2)]);var state_25791__$1 = state_25791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25791__$1,inst_25789);
} else
{if((state_val_25792 === (2)))
{var state_25791__$1 = state_25791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25791__$1,(4),ch);
} else
{if((state_val_25792 === (11)))
{var inst_25781 = (state_25791[(2)]);var state_25791__$1 = state_25791;var statearr_25800_25819 = state_25791__$1;(statearr_25800_25819[(2)] = inst_25781);
(statearr_25800_25819[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (9)))
{var state_25791__$1 = state_25791;var statearr_25801_25820 = state_25791__$1;(statearr_25801_25820[(2)] = null);
(statearr_25801_25820[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (5)))
{var inst_25776 = cljs.core.async.close_BANG_.call(null,out);var state_25791__$1 = state_25791;var statearr_25802_25821 = state_25791__$1;(statearr_25802_25821[(2)] = inst_25776);
(statearr_25802_25821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (10)))
{var inst_25784 = (state_25791[(2)]);var state_25791__$1 = (function (){var statearr_25803 = state_25791;(statearr_25803[(8)] = inst_25784);
return statearr_25803;
})();var statearr_25804_25822 = state_25791__$1;(statearr_25804_25822[(2)] = null);
(statearr_25804_25822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25792 === (8)))
{var inst_25773 = (state_25791[(7)]);var state_25791__$1 = state_25791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25791__$1,(11),out,inst_25773);
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
});})(c__9125__auto___25812,out))
;return ((function (switch__9110__auto__,c__9125__auto___25812,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25808 = [null,null,null,null,null,null,null,null,null];(statearr_25808[(0)] = state_machine__9111__auto__);
(statearr_25808[(1)] = (1));
return statearr_25808;
});
var state_machine__9111__auto____1 = (function (state_25791){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25791);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25809){if((e25809 instanceof Object))
{var ex__9114__auto__ = e25809;var statearr_25810_25823 = state_25791;(statearr_25810_25823[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25824 = state_25791;
state_25791 = G__25824;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25791){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25812,out))
})();var state__9127__auto__ = (function (){var statearr_25811 = f__9126__auto__.call(null);(statearr_25811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25812);
return statearr_25811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25812,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_25990){var state_val_25991 = (state_25990[(1)]);if((state_val_25991 === (7)))
{var inst_25986 = (state_25990[(2)]);var state_25990__$1 = state_25990;var statearr_25992_26033 = state_25990__$1;(statearr_25992_26033[(2)] = inst_25986);
(statearr_25992_26033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (20)))
{var inst_25956 = (state_25990[(7)]);var inst_25967 = (state_25990[(2)]);var inst_25968 = cljs.core.next.call(null,inst_25956);var inst_25942 = inst_25968;var inst_25943 = null;var inst_25944 = (0);var inst_25945 = (0);var state_25990__$1 = (function (){var statearr_25993 = state_25990;(statearr_25993[(8)] = inst_25943);
(statearr_25993[(9)] = inst_25942);
(statearr_25993[(10)] = inst_25967);
(statearr_25993[(11)] = inst_25944);
(statearr_25993[(12)] = inst_25945);
return statearr_25993;
})();var statearr_25994_26034 = state_25990__$1;(statearr_25994_26034[(2)] = null);
(statearr_25994_26034[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (1)))
{var state_25990__$1 = state_25990;var statearr_25995_26035 = state_25990__$1;(statearr_25995_26035[(2)] = null);
(statearr_25995_26035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (4)))
{var inst_25931 = (state_25990[(13)]);var inst_25931__$1 = (state_25990[(2)]);var inst_25932 = (inst_25931__$1 == null);var state_25990__$1 = (function (){var statearr_25996 = state_25990;(statearr_25996[(13)] = inst_25931__$1);
return statearr_25996;
})();if(cljs.core.truth_(inst_25932))
{var statearr_25997_26036 = state_25990__$1;(statearr_25997_26036[(1)] = (5));
} else
{var statearr_25998_26037 = state_25990__$1;(statearr_25998_26037[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (15)))
{var state_25990__$1 = state_25990;var statearr_26002_26038 = state_25990__$1;(statearr_26002_26038[(2)] = null);
(statearr_26002_26038[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (21)))
{var state_25990__$1 = state_25990;var statearr_26003_26039 = state_25990__$1;(statearr_26003_26039[(2)] = null);
(statearr_26003_26039[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (13)))
{var inst_25943 = (state_25990[(8)]);var inst_25942 = (state_25990[(9)]);var inst_25944 = (state_25990[(11)]);var inst_25945 = (state_25990[(12)]);var inst_25952 = (state_25990[(2)]);var inst_25953 = (inst_25945 + (1));var tmp25999 = inst_25943;var tmp26000 = inst_25942;var tmp26001 = inst_25944;var inst_25942__$1 = tmp26000;var inst_25943__$1 = tmp25999;var inst_25944__$1 = tmp26001;var inst_25945__$1 = inst_25953;var state_25990__$1 = (function (){var statearr_26004 = state_25990;(statearr_26004[(8)] = inst_25943__$1);
(statearr_26004[(9)] = inst_25942__$1);
(statearr_26004[(11)] = inst_25944__$1);
(statearr_26004[(14)] = inst_25952);
(statearr_26004[(12)] = inst_25945__$1);
return statearr_26004;
})();var statearr_26005_26040 = state_25990__$1;(statearr_26005_26040[(2)] = null);
(statearr_26005_26040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (22)))
{var state_25990__$1 = state_25990;var statearr_26006_26041 = state_25990__$1;(statearr_26006_26041[(2)] = null);
(statearr_26006_26041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (6)))
{var inst_25931 = (state_25990[(13)]);var inst_25940 = f.call(null,inst_25931);var inst_25941 = cljs.core.seq.call(null,inst_25940);var inst_25942 = inst_25941;var inst_25943 = null;var inst_25944 = (0);var inst_25945 = (0);var state_25990__$1 = (function (){var statearr_26007 = state_25990;(statearr_26007[(8)] = inst_25943);
(statearr_26007[(9)] = inst_25942);
(statearr_26007[(11)] = inst_25944);
(statearr_26007[(12)] = inst_25945);
return statearr_26007;
})();var statearr_26008_26042 = state_25990__$1;(statearr_26008_26042[(2)] = null);
(statearr_26008_26042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (17)))
{var inst_25956 = (state_25990[(7)]);var inst_25960 = cljs.core.chunk_first.call(null,inst_25956);var inst_25961 = cljs.core.chunk_rest.call(null,inst_25956);var inst_25962 = cljs.core.count.call(null,inst_25960);var inst_25942 = inst_25961;var inst_25943 = inst_25960;var inst_25944 = inst_25962;var inst_25945 = (0);var state_25990__$1 = (function (){var statearr_26009 = state_25990;(statearr_26009[(8)] = inst_25943);
(statearr_26009[(9)] = inst_25942);
(statearr_26009[(11)] = inst_25944);
(statearr_26009[(12)] = inst_25945);
return statearr_26009;
})();var statearr_26010_26043 = state_25990__$1;(statearr_26010_26043[(2)] = null);
(statearr_26010_26043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (3)))
{var inst_25988 = (state_25990[(2)]);var state_25990__$1 = state_25990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25990__$1,inst_25988);
} else
{if((state_val_25991 === (12)))
{var inst_25976 = (state_25990[(2)]);var state_25990__$1 = state_25990;var statearr_26011_26044 = state_25990__$1;(statearr_26011_26044[(2)] = inst_25976);
(statearr_26011_26044[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (2)))
{var state_25990__$1 = state_25990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25990__$1,(4),in$);
} else
{if((state_val_25991 === (23)))
{var inst_25984 = (state_25990[(2)]);var state_25990__$1 = state_25990;var statearr_26012_26045 = state_25990__$1;(statearr_26012_26045[(2)] = inst_25984);
(statearr_26012_26045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (19)))
{var inst_25971 = (state_25990[(2)]);var state_25990__$1 = state_25990;var statearr_26013_26046 = state_25990__$1;(statearr_26013_26046[(2)] = inst_25971);
(statearr_26013_26046[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (11)))
{var inst_25942 = (state_25990[(9)]);var inst_25956 = (state_25990[(7)]);var inst_25956__$1 = cljs.core.seq.call(null,inst_25942);var state_25990__$1 = (function (){var statearr_26014 = state_25990;(statearr_26014[(7)] = inst_25956__$1);
return statearr_26014;
})();if(inst_25956__$1)
{var statearr_26015_26047 = state_25990__$1;(statearr_26015_26047[(1)] = (14));
} else
{var statearr_26016_26048 = state_25990__$1;(statearr_26016_26048[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (9)))
{var inst_25978 = (state_25990[(2)]);var inst_25979 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25990__$1 = (function (){var statearr_26017 = state_25990;(statearr_26017[(15)] = inst_25978);
return statearr_26017;
})();if(cljs.core.truth_(inst_25979))
{var statearr_26018_26049 = state_25990__$1;(statearr_26018_26049[(1)] = (21));
} else
{var statearr_26019_26050 = state_25990__$1;(statearr_26019_26050[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (5)))
{var inst_25934 = cljs.core.async.close_BANG_.call(null,out);var state_25990__$1 = state_25990;var statearr_26020_26051 = state_25990__$1;(statearr_26020_26051[(2)] = inst_25934);
(statearr_26020_26051[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (14)))
{var inst_25956 = (state_25990[(7)]);var inst_25958 = cljs.core.chunked_seq_QMARK_.call(null,inst_25956);var state_25990__$1 = state_25990;if(inst_25958)
{var statearr_26021_26052 = state_25990__$1;(statearr_26021_26052[(1)] = (17));
} else
{var statearr_26022_26053 = state_25990__$1;(statearr_26022_26053[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (16)))
{var inst_25974 = (state_25990[(2)]);var state_25990__$1 = state_25990;var statearr_26023_26054 = state_25990__$1;(statearr_26023_26054[(2)] = inst_25974);
(statearr_26023_26054[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25991 === (10)))
{var inst_25943 = (state_25990[(8)]);var inst_25945 = (state_25990[(12)]);var inst_25950 = cljs.core._nth.call(null,inst_25943,inst_25945);var state_25990__$1 = state_25990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25990__$1,(13),out,inst_25950);
} else
{if((state_val_25991 === (18)))
{var inst_25956 = (state_25990[(7)]);var inst_25965 = cljs.core.first.call(null,inst_25956);var state_25990__$1 = state_25990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25990__$1,(20),out,inst_25965);
} else
{if((state_val_25991 === (8)))
{var inst_25944 = (state_25990[(11)]);var inst_25945 = (state_25990[(12)]);var inst_25947 = (inst_25945 < inst_25944);var inst_25948 = inst_25947;var state_25990__$1 = state_25990;if(cljs.core.truth_(inst_25948))
{var statearr_26024_26055 = state_25990__$1;(statearr_26024_26055[(1)] = (10));
} else
{var statearr_26025_26056 = state_25990__$1;(statearr_26025_26056[(1)] = (11));
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26029[(0)] = state_machine__9111__auto__);
(statearr_26029[(1)] = (1));
return statearr_26029;
});
var state_machine__9111__auto____1 = (function (state_25990){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25990);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26030){if((e26030 instanceof Object))
{var ex__9114__auto__ = e26030;var statearr_26031_26057 = state_25990;(statearr_26031_26057[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26030;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26058 = state_25990;
state_25990 = G__26058;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25990){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26032 = f__9126__auto__.call(null);(statearr_26032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26155 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26155,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26155,out){
return (function (state_26130){var state_val_26131 = (state_26130[(1)]);if((state_val_26131 === (7)))
{var inst_26125 = (state_26130[(2)]);var state_26130__$1 = state_26130;var statearr_26132_26156 = state_26130__$1;(statearr_26132_26156[(2)] = inst_26125);
(statearr_26132_26156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (1)))
{var inst_26107 = null;var state_26130__$1 = (function (){var statearr_26133 = state_26130;(statearr_26133[(7)] = inst_26107);
return statearr_26133;
})();var statearr_26134_26157 = state_26130__$1;(statearr_26134_26157[(2)] = null);
(statearr_26134_26157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (4)))
{var inst_26110 = (state_26130[(8)]);var inst_26110__$1 = (state_26130[(2)]);var inst_26111 = (inst_26110__$1 == null);var inst_26112 = cljs.core.not.call(null,inst_26111);var state_26130__$1 = (function (){var statearr_26135 = state_26130;(statearr_26135[(8)] = inst_26110__$1);
return statearr_26135;
})();if(inst_26112)
{var statearr_26136_26158 = state_26130__$1;(statearr_26136_26158[(1)] = (5));
} else
{var statearr_26137_26159 = state_26130__$1;(statearr_26137_26159[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (6)))
{var state_26130__$1 = state_26130;var statearr_26138_26160 = state_26130__$1;(statearr_26138_26160[(2)] = null);
(statearr_26138_26160[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (3)))
{var inst_26127 = (state_26130[(2)]);var inst_26128 = cljs.core.async.close_BANG_.call(null,out);var state_26130__$1 = (function (){var statearr_26139 = state_26130;(statearr_26139[(9)] = inst_26127);
return statearr_26139;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26130__$1,inst_26128);
} else
{if((state_val_26131 === (2)))
{var state_26130__$1 = state_26130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26130__$1,(4),ch);
} else
{if((state_val_26131 === (11)))
{var inst_26110 = (state_26130[(8)]);var inst_26119 = (state_26130[(2)]);var inst_26107 = inst_26110;var state_26130__$1 = (function (){var statearr_26140 = state_26130;(statearr_26140[(10)] = inst_26119);
(statearr_26140[(7)] = inst_26107);
return statearr_26140;
})();var statearr_26141_26161 = state_26130__$1;(statearr_26141_26161[(2)] = null);
(statearr_26141_26161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (9)))
{var inst_26110 = (state_26130[(8)]);var state_26130__$1 = state_26130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26130__$1,(11),out,inst_26110);
} else
{if((state_val_26131 === (5)))
{var inst_26110 = (state_26130[(8)]);var inst_26107 = (state_26130[(7)]);var inst_26114 = cljs.core._EQ_.call(null,inst_26110,inst_26107);var state_26130__$1 = state_26130;if(inst_26114)
{var statearr_26143_26162 = state_26130__$1;(statearr_26143_26162[(1)] = (8));
} else
{var statearr_26144_26163 = state_26130__$1;(statearr_26144_26163[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (10)))
{var inst_26122 = (state_26130[(2)]);var state_26130__$1 = state_26130;var statearr_26145_26164 = state_26130__$1;(statearr_26145_26164[(2)] = inst_26122);
(statearr_26145_26164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26131 === (8)))
{var inst_26107 = (state_26130[(7)]);var tmp26142 = inst_26107;var inst_26107__$1 = tmp26142;var state_26130__$1 = (function (){var statearr_26146 = state_26130;(statearr_26146[(7)] = inst_26107__$1);
return statearr_26146;
})();var statearr_26147_26165 = state_26130__$1;(statearr_26147_26165[(2)] = null);
(statearr_26147_26165[(1)] = (2));
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
});})(c__9125__auto___26155,out))
;return ((function (switch__9110__auto__,c__9125__auto___26155,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26151 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26151[(0)] = state_machine__9111__auto__);
(statearr_26151[(1)] = (1));
return statearr_26151;
});
var state_machine__9111__auto____1 = (function (state_26130){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26130);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26152){if((e26152 instanceof Object))
{var ex__9114__auto__ = e26152;var statearr_26153_26166 = state_26130;(statearr_26153_26166[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26130);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26167 = state_26130;
state_26130 = G__26167;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26130){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26155,out))
})();var state__9127__auto__ = (function (){var statearr_26154 = f__9126__auto__.call(null);(statearr_26154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26155);
return statearr_26154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26155,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26302 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26302,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26302,out){
return (function (state_26272){var state_val_26273 = (state_26272[(1)]);if((state_val_26273 === (7)))
{var inst_26268 = (state_26272[(2)]);var state_26272__$1 = state_26272;var statearr_26274_26303 = state_26272__$1;(statearr_26274_26303[(2)] = inst_26268);
(statearr_26274_26303[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (1)))
{var inst_26235 = (new Array(n));var inst_26236 = inst_26235;var inst_26237 = (0);var state_26272__$1 = (function (){var statearr_26275 = state_26272;(statearr_26275[(7)] = inst_26236);
(statearr_26275[(8)] = inst_26237);
return statearr_26275;
})();var statearr_26276_26304 = state_26272__$1;(statearr_26276_26304[(2)] = null);
(statearr_26276_26304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (4)))
{var inst_26240 = (state_26272[(9)]);var inst_26240__$1 = (state_26272[(2)]);var inst_26241 = (inst_26240__$1 == null);var inst_26242 = cljs.core.not.call(null,inst_26241);var state_26272__$1 = (function (){var statearr_26277 = state_26272;(statearr_26277[(9)] = inst_26240__$1);
return statearr_26277;
})();if(inst_26242)
{var statearr_26278_26305 = state_26272__$1;(statearr_26278_26305[(1)] = (5));
} else
{var statearr_26279_26306 = state_26272__$1;(statearr_26279_26306[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (15)))
{var inst_26262 = (state_26272[(2)]);var state_26272__$1 = state_26272;var statearr_26280_26307 = state_26272__$1;(statearr_26280_26307[(2)] = inst_26262);
(statearr_26280_26307[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (13)))
{var state_26272__$1 = state_26272;var statearr_26281_26308 = state_26272__$1;(statearr_26281_26308[(2)] = null);
(statearr_26281_26308[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (6)))
{var inst_26237 = (state_26272[(8)]);var inst_26258 = (inst_26237 > (0));var state_26272__$1 = state_26272;if(cljs.core.truth_(inst_26258))
{var statearr_26282_26309 = state_26272__$1;(statearr_26282_26309[(1)] = (12));
} else
{var statearr_26283_26310 = state_26272__$1;(statearr_26283_26310[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (3)))
{var inst_26270 = (state_26272[(2)]);var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26272__$1,inst_26270);
} else
{if((state_val_26273 === (12)))
{var inst_26236 = (state_26272[(7)]);var inst_26260 = cljs.core.vec.call(null,inst_26236);var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26272__$1,(15),out,inst_26260);
} else
{if((state_val_26273 === (2)))
{var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26272__$1,(4),ch);
} else
{if((state_val_26273 === (11)))
{var inst_26252 = (state_26272[(2)]);var inst_26253 = (new Array(n));var inst_26236 = inst_26253;var inst_26237 = (0);var state_26272__$1 = (function (){var statearr_26284 = state_26272;(statearr_26284[(10)] = inst_26252);
(statearr_26284[(7)] = inst_26236);
(statearr_26284[(8)] = inst_26237);
return statearr_26284;
})();var statearr_26285_26311 = state_26272__$1;(statearr_26285_26311[(2)] = null);
(statearr_26285_26311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (9)))
{var inst_26236 = (state_26272[(7)]);var inst_26250 = cljs.core.vec.call(null,inst_26236);var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26272__$1,(11),out,inst_26250);
} else
{if((state_val_26273 === (5)))
{var inst_26240 = (state_26272[(9)]);var inst_26245 = (state_26272[(11)]);var inst_26236 = (state_26272[(7)]);var inst_26237 = (state_26272[(8)]);var inst_26244 = (inst_26236[inst_26237] = inst_26240);var inst_26245__$1 = (inst_26237 + (1));var inst_26246 = (inst_26245__$1 < n);var state_26272__$1 = (function (){var statearr_26286 = state_26272;(statearr_26286[(11)] = inst_26245__$1);
(statearr_26286[(12)] = inst_26244);
return statearr_26286;
})();if(cljs.core.truth_(inst_26246))
{var statearr_26287_26312 = state_26272__$1;(statearr_26287_26312[(1)] = (8));
} else
{var statearr_26288_26313 = state_26272__$1;(statearr_26288_26313[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (14)))
{var inst_26265 = (state_26272[(2)]);var inst_26266 = cljs.core.async.close_BANG_.call(null,out);var state_26272__$1 = (function (){var statearr_26290 = state_26272;(statearr_26290[(13)] = inst_26265);
return statearr_26290;
})();var statearr_26291_26314 = state_26272__$1;(statearr_26291_26314[(2)] = inst_26266);
(statearr_26291_26314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (10)))
{var inst_26256 = (state_26272[(2)]);var state_26272__$1 = state_26272;var statearr_26292_26315 = state_26272__$1;(statearr_26292_26315[(2)] = inst_26256);
(statearr_26292_26315[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26273 === (8)))
{var inst_26245 = (state_26272[(11)]);var inst_26236 = (state_26272[(7)]);var tmp26289 = inst_26236;var inst_26236__$1 = tmp26289;var inst_26237 = inst_26245;var state_26272__$1 = (function (){var statearr_26293 = state_26272;(statearr_26293[(7)] = inst_26236__$1);
(statearr_26293[(8)] = inst_26237);
return statearr_26293;
})();var statearr_26294_26316 = state_26272__$1;(statearr_26294_26316[(2)] = null);
(statearr_26294_26316[(1)] = (2));
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
});})(c__9125__auto___26302,out))
;return ((function (switch__9110__auto__,c__9125__auto___26302,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26298[(0)] = state_machine__9111__auto__);
(statearr_26298[(1)] = (1));
return statearr_26298;
});
var state_machine__9111__auto____1 = (function (state_26272){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26272);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26299){if((e26299 instanceof Object))
{var ex__9114__auto__ = e26299;var statearr_26300_26317 = state_26272;(statearr_26300_26317[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26318 = state_26272;
state_26272 = G__26318;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26272){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26302,out))
})();var state__9127__auto__ = (function (){var statearr_26301 = f__9126__auto__.call(null);(statearr_26301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26302);
return statearr_26301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26302,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26461,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26461,out){
return (function (state_26431){var state_val_26432 = (state_26431[(1)]);if((state_val_26432 === (7)))
{var inst_26427 = (state_26431[(2)]);var state_26431__$1 = state_26431;var statearr_26433_26462 = state_26431__$1;(statearr_26433_26462[(2)] = inst_26427);
(statearr_26433_26462[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (1)))
{var inst_26390 = [];var inst_26391 = inst_26390;var inst_26392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26431__$1 = (function (){var statearr_26434 = state_26431;(statearr_26434[(7)] = inst_26391);
(statearr_26434[(8)] = inst_26392);
return statearr_26434;
})();var statearr_26435_26463 = state_26431__$1;(statearr_26435_26463[(2)] = null);
(statearr_26435_26463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (4)))
{var inst_26395 = (state_26431[(9)]);var inst_26395__$1 = (state_26431[(2)]);var inst_26396 = (inst_26395__$1 == null);var inst_26397 = cljs.core.not.call(null,inst_26396);var state_26431__$1 = (function (){var statearr_26436 = state_26431;(statearr_26436[(9)] = inst_26395__$1);
return statearr_26436;
})();if(inst_26397)
{var statearr_26437_26464 = state_26431__$1;(statearr_26437_26464[(1)] = (5));
} else
{var statearr_26438_26465 = state_26431__$1;(statearr_26438_26465[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (15)))
{var inst_26421 = (state_26431[(2)]);var state_26431__$1 = state_26431;var statearr_26439_26466 = state_26431__$1;(statearr_26439_26466[(2)] = inst_26421);
(statearr_26439_26466[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (13)))
{var state_26431__$1 = state_26431;var statearr_26440_26467 = state_26431__$1;(statearr_26440_26467[(2)] = null);
(statearr_26440_26467[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (6)))
{var inst_26391 = (state_26431[(7)]);var inst_26416 = inst_26391.length;var inst_26417 = (inst_26416 > (0));var state_26431__$1 = state_26431;if(cljs.core.truth_(inst_26417))
{var statearr_26441_26468 = state_26431__$1;(statearr_26441_26468[(1)] = (12));
} else
{var statearr_26442_26469 = state_26431__$1;(statearr_26442_26469[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (3)))
{var inst_26429 = (state_26431[(2)]);var state_26431__$1 = state_26431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26431__$1,inst_26429);
} else
{if((state_val_26432 === (12)))
{var inst_26391 = (state_26431[(7)]);var inst_26419 = cljs.core.vec.call(null,inst_26391);var state_26431__$1 = state_26431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26431__$1,(15),out,inst_26419);
} else
{if((state_val_26432 === (2)))
{var state_26431__$1 = state_26431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26431__$1,(4),ch);
} else
{if((state_val_26432 === (11)))
{var inst_26399 = (state_26431[(10)]);var inst_26395 = (state_26431[(9)]);var inst_26409 = (state_26431[(2)]);var inst_26410 = [];var inst_26411 = inst_26410.push(inst_26395);var inst_26391 = inst_26410;var inst_26392 = inst_26399;var state_26431__$1 = (function (){var statearr_26443 = state_26431;(statearr_26443[(7)] = inst_26391);
(statearr_26443[(11)] = inst_26411);
(statearr_26443[(12)] = inst_26409);
(statearr_26443[(8)] = inst_26392);
return statearr_26443;
})();var statearr_26444_26470 = state_26431__$1;(statearr_26444_26470[(2)] = null);
(statearr_26444_26470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (9)))
{var inst_26391 = (state_26431[(7)]);var inst_26407 = cljs.core.vec.call(null,inst_26391);var state_26431__$1 = state_26431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26431__$1,(11),out,inst_26407);
} else
{if((state_val_26432 === (5)))
{var inst_26399 = (state_26431[(10)]);var inst_26392 = (state_26431[(8)]);var inst_26395 = (state_26431[(9)]);var inst_26399__$1 = f.call(null,inst_26395);var inst_26400 = cljs.core._EQ_.call(null,inst_26399__$1,inst_26392);var inst_26401 = cljs.core.keyword_identical_QMARK_.call(null,inst_26392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26402 = (inst_26400) || (inst_26401);var state_26431__$1 = (function (){var statearr_26445 = state_26431;(statearr_26445[(10)] = inst_26399__$1);
return statearr_26445;
})();if(cljs.core.truth_(inst_26402))
{var statearr_26446_26471 = state_26431__$1;(statearr_26446_26471[(1)] = (8));
} else
{var statearr_26447_26472 = state_26431__$1;(statearr_26447_26472[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (14)))
{var inst_26424 = (state_26431[(2)]);var inst_26425 = cljs.core.async.close_BANG_.call(null,out);var state_26431__$1 = (function (){var statearr_26449 = state_26431;(statearr_26449[(13)] = inst_26424);
return statearr_26449;
})();var statearr_26450_26473 = state_26431__$1;(statearr_26450_26473[(2)] = inst_26425);
(statearr_26450_26473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (10)))
{var inst_26414 = (state_26431[(2)]);var state_26431__$1 = state_26431;var statearr_26451_26474 = state_26431__$1;(statearr_26451_26474[(2)] = inst_26414);
(statearr_26451_26474[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26432 === (8)))
{var inst_26391 = (state_26431[(7)]);var inst_26399 = (state_26431[(10)]);var inst_26395 = (state_26431[(9)]);var inst_26404 = inst_26391.push(inst_26395);var tmp26448 = inst_26391;var inst_26391__$1 = tmp26448;var inst_26392 = inst_26399;var state_26431__$1 = (function (){var statearr_26452 = state_26431;(statearr_26452[(7)] = inst_26391__$1);
(statearr_26452[(14)] = inst_26404);
(statearr_26452[(8)] = inst_26392);
return statearr_26452;
})();var statearr_26453_26475 = state_26431__$1;(statearr_26453_26475[(2)] = null);
(statearr_26453_26475[(1)] = (2));
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
});})(c__9125__auto___26461,out))
;return ((function (switch__9110__auto__,c__9125__auto___26461,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26457[(0)] = state_machine__9111__auto__);
(statearr_26457[(1)] = (1));
return statearr_26457;
});
var state_machine__9111__auto____1 = (function (state_26431){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26431);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object))
{var ex__9114__auto__ = e26458;var statearr_26459_26476 = state_26431;(statearr_26459_26476[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26477 = state_26431;
state_26431 = G__26477;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26431){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26461,out))
})();var state__9127__auto__ = (function (){var statearr_26460 = f__9126__auto__.call(null);(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26461);
return statearr_26460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26461,out))
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
