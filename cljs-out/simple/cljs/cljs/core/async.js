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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24853 = (function (f,fn_handler,meta24854){
this.f = f;
this.fn_handler = fn_handler;
this.meta24854 = meta24854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24853.cljs$lang$type = true;
cljs.core.async.t24853.cljs$lang$ctorStr = "cljs.core.async/t24853";
cljs.core.async.t24853.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24853");
});
cljs.core.async.t24853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24855){var self__ = this;
var _24855__$1 = this;return self__.meta24854;
});
cljs.core.async.t24853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24855,meta24854__$1){var self__ = this;
var _24855__$1 = this;return (new cljs.core.async.t24853(self__.f,self__.fn_handler,meta24854__$1));
});
cljs.core.async.__GT_t24853 = (function __GT_t24853(f__$1,fn_handler__$1,meta24854){return (new cljs.core.async.t24853(f__$1,fn_handler__$1,meta24854));
});
}
return (new cljs.core.async.t24853(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24857 = buff;if(G__24857)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24857.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24857.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24857);
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
{var val_24858 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24858);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24858,ret){
return (function (){return fn1.call(null,val_24858);
});})(val_24858,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24859 = n;var x_24860 = (0);while(true){
if((x_24860 < n__4508__auto___24859))
{(a[x_24860] = (0));
{
var G__24861 = (x_24860 + (1));
x_24860 = G__24861;
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
var G__24862 = (i + (1));
i = G__24862;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24866 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24866 = (function (flag,alt_flag,meta24867){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24867 = meta24867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24866.cljs$lang$type = true;
cljs.core.async.t24866.cljs$lang$ctorStr = "cljs.core.async/t24866";
cljs.core.async.t24866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24866");
});})(flag))
;
cljs.core.async.t24866.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24868){var self__ = this;
var _24868__$1 = this;return self__.meta24867;
});})(flag))
;
cljs.core.async.t24866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24868,meta24867__$1){var self__ = this;
var _24868__$1 = this;return (new cljs.core.async.t24866(self__.flag,self__.alt_flag,meta24867__$1));
});})(flag))
;
cljs.core.async.__GT_t24866 = ((function (flag){
return (function __GT_t24866(flag__$1,alt_flag__$1,meta24867){return (new cljs.core.async.t24866(flag__$1,alt_flag__$1,meta24867));
});})(flag))
;
}
return (new cljs.core.async.t24866(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24872 = (function (cb,flag,alt_handler,meta24873){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24873 = meta24873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24872.cljs$lang$type = true;
cljs.core.async.t24872.cljs$lang$ctorStr = "cljs.core.async/t24872";
cljs.core.async.t24872.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24872");
});
cljs.core.async.t24872.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24874){var self__ = this;
var _24874__$1 = this;return self__.meta24873;
});
cljs.core.async.t24872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24874,meta24873__$1){var self__ = this;
var _24874__$1 = this;return (new cljs.core.async.t24872(self__.cb,self__.flag,self__.alt_handler,meta24873__$1));
});
cljs.core.async.__GT_t24872 = (function __GT_t24872(cb__$1,flag__$1,alt_handler__$1,meta24873){return (new cljs.core.async.t24872(cb__$1,flag__$1,alt_handler__$1,meta24873));
});
}
return (new cljs.core.async.t24872(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24875_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24875_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24876_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24876_SHARP_,port], null));
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
var G__24877 = (i + (1));
i = G__24877;
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
var alts_BANG___delegate = function (ports,p__24878){var map__24880 = p__24878;var map__24880__$1 = ((cljs.core.seq_QMARK_.call(null,map__24880))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);var opts = map__24880__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24878 = null;if (arguments.length > 1) {
  p__24878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24878);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24881){
var ports = cljs.core.first(arglist__24881);
var p__24878 = cljs.core.rest(arglist__24881);
return alts_BANG___delegate(ports,p__24878);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11154__auto___24976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___24976){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___24976){
return (function (state_24952){var state_val_24953 = (state_24952[(1)]);if((state_val_24953 === (7)))
{var inst_24948 = (state_24952[(2)]);var state_24952__$1 = state_24952;var statearr_24954_24977 = state_24952__$1;(statearr_24954_24977[(2)] = inst_24948);
(statearr_24954_24977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (1)))
{var state_24952__$1 = state_24952;var statearr_24955_24978 = state_24952__$1;(statearr_24955_24978[(2)] = null);
(statearr_24955_24978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (4)))
{var inst_24931 = (state_24952[(7)]);var inst_24931__$1 = (state_24952[(2)]);var inst_24932 = (inst_24931__$1 == null);var state_24952__$1 = (function (){var statearr_24956 = state_24952;(statearr_24956[(7)] = inst_24931__$1);
return statearr_24956;
})();if(cljs.core.truth_(inst_24932))
{var statearr_24957_24979 = state_24952__$1;(statearr_24957_24979[(1)] = (5));
} else
{var statearr_24958_24980 = state_24952__$1;(statearr_24958_24980[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (13)))
{var state_24952__$1 = state_24952;var statearr_24959_24981 = state_24952__$1;(statearr_24959_24981[(2)] = null);
(statearr_24959_24981[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (6)))
{var inst_24931 = (state_24952[(7)]);var state_24952__$1 = state_24952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24952__$1,(11),to,inst_24931);
} else
{if((state_val_24953 === (3)))
{var inst_24950 = (state_24952[(2)]);var state_24952__$1 = state_24952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24952__$1,inst_24950);
} else
{if((state_val_24953 === (12)))
{var state_24952__$1 = state_24952;var statearr_24960_24982 = state_24952__$1;(statearr_24960_24982[(2)] = null);
(statearr_24960_24982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (2)))
{var state_24952__$1 = state_24952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24952__$1,(4),from);
} else
{if((state_val_24953 === (11)))
{var inst_24941 = (state_24952[(2)]);var state_24952__$1 = state_24952;if(cljs.core.truth_(inst_24941))
{var statearr_24961_24983 = state_24952__$1;(statearr_24961_24983[(1)] = (12));
} else
{var statearr_24962_24984 = state_24952__$1;(statearr_24962_24984[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (9)))
{var state_24952__$1 = state_24952;var statearr_24963_24985 = state_24952__$1;(statearr_24963_24985[(2)] = null);
(statearr_24963_24985[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (5)))
{var state_24952__$1 = state_24952;if(cljs.core.truth_(close_QMARK_))
{var statearr_24964_24986 = state_24952__$1;(statearr_24964_24986[(1)] = (8));
} else
{var statearr_24965_24987 = state_24952__$1;(statearr_24965_24987[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (14)))
{var inst_24946 = (state_24952[(2)]);var state_24952__$1 = state_24952;var statearr_24966_24988 = state_24952__$1;(statearr_24966_24988[(2)] = inst_24946);
(statearr_24966_24988[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (10)))
{var inst_24938 = (state_24952[(2)]);var state_24952__$1 = state_24952;var statearr_24967_24989 = state_24952__$1;(statearr_24967_24989[(2)] = inst_24938);
(statearr_24967_24989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24953 === (8)))
{var inst_24935 = cljs.core.async.close_BANG_.call(null,to);var state_24952__$1 = state_24952;var statearr_24968_24990 = state_24952__$1;(statearr_24968_24990[(2)] = inst_24935);
(statearr_24968_24990[(1)] = (10));
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
});})(c__11154__auto___24976))
;return ((function (switch__11098__auto__,c__11154__auto___24976){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24972 = [null,null,null,null,null,null,null,null];(statearr_24972[(0)] = state_machine__11099__auto__);
(statearr_24972[(1)] = (1));
return statearr_24972;
});
var state_machine__11099__auto____1 = (function (state_24952){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24952);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object))
{var ex__11102__auto__ = e24973;var statearr_24974_24991 = state_24952;(statearr_24974_24991[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24992 = state_24952;
state_24952 = G__24992;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24952){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___24976))
})();var state__11156__auto__ = (function (){var statearr_24975 = f__11155__auto__.call(null);(statearr_24975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___24976);
return statearr_24975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___24976))
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
return (function (p__25176){var vec__25177 = p__25176;var v = cljs.core.nth.call(null,vec__25177,(0),null);var p = cljs.core.nth.call(null,vec__25177,(1),null);var job = vec__25177;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11154__auto___25359 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results){
return (function (state_25182){var state_val_25183 = (state_25182[(1)]);if((state_val_25183 === (2)))
{var inst_25179 = (state_25182[(2)]);var inst_25180 = cljs.core.async.close_BANG_.call(null,res);var state_25182__$1 = (function (){var statearr_25184 = state_25182;(statearr_25184[(7)] = inst_25179);
return statearr_25184;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25182__$1,inst_25180);
} else
{if((state_val_25183 === (1)))
{var state_25182__$1 = state_25182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25182__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results))
;return ((function (switch__11098__auto__,c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25188 = [null,null,null,null,null,null,null,null];(statearr_25188[(0)] = state_machine__11099__auto__);
(statearr_25188[(1)] = (1));
return statearr_25188;
});
var state_machine__11099__auto____1 = (function (state_25182){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25182);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25189){if((e25189 instanceof Object))
{var ex__11102__auto__ = e25189;var statearr_25190_25360 = state_25182;(statearr_25190_25360[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25361 = state_25182;
state_25182 = G__25361;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25182){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results))
})();var state__11156__auto__ = (function (){var statearr_25191 = f__11155__auto__.call(null);(statearr_25191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25359);
return statearr_25191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25359,res,vec__25177,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25192){var vec__25193 = p__25192;var v = cljs.core.nth.call(null,vec__25193,(0),null);var p = cljs.core.nth.call(null,vec__25193,(1),null);var job = vec__25193;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___25362 = n;var __25363 = (0);while(true){
if((__25363 < n__4508__auto___25362))
{var G__25194_25364 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__25194_25364) {
case "async":
var c__11154__auto___25366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25363,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (__25363,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function (state_25207){var state_val_25208 = (state_25207[(1)]);if((state_val_25208 === (7)))
{var inst_25203 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25209_25367 = state_25207__$1;(statearr_25209_25367[(2)] = inst_25203);
(statearr_25209_25367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (6)))
{var state_25207__$1 = state_25207;var statearr_25210_25368 = state_25207__$1;(statearr_25210_25368[(2)] = null);
(statearr_25210_25368[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (5)))
{var state_25207__$1 = state_25207;var statearr_25211_25369 = state_25207__$1;(statearr_25211_25369[(2)] = null);
(statearr_25211_25369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (4)))
{var inst_25197 = (state_25207[(2)]);var inst_25198 = async.call(null,inst_25197);var state_25207__$1 = state_25207;if(cljs.core.truth_(inst_25198))
{var statearr_25212_25370 = state_25207__$1;(statearr_25212_25370[(1)] = (5));
} else
{var statearr_25213_25371 = state_25207__$1;(statearr_25213_25371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (3)))
{var inst_25205 = (state_25207[(2)]);var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25207__$1,inst_25205);
} else
{if((state_val_25208 === (2)))
{var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25207__$1,(4),jobs);
} else
{if((state_val_25208 === (1)))
{var state_25207__$1 = state_25207;var statearr_25214_25372 = state_25207__$1;(statearr_25214_25372[(2)] = null);
(statearr_25214_25372[(1)] = (2));
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
});})(__25363,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
;return ((function (__25363,switch__11098__auto__,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25218 = [null,null,null,null,null,null,null];(statearr_25218[(0)] = state_machine__11099__auto__);
(statearr_25218[(1)] = (1));
return statearr_25218;
});
var state_machine__11099__auto____1 = (function (state_25207){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25207);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25219){if((e25219 instanceof Object))
{var ex__11102__auto__ = e25219;var statearr_25220_25373 = state_25207;(statearr_25220_25373[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25219;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25374 = state_25207;
state_25207 = G__25374;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__25363,switch__11098__auto__,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_25221 = f__11155__auto__.call(null);(statearr_25221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25366);
return statearr_25221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__25363,c__11154__auto___25366,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
);

break;
case "compute":
var c__11154__auto___25375 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25363,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (__25363,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function (state_25234){var state_val_25235 = (state_25234[(1)]);if((state_val_25235 === (7)))
{var inst_25230 = (state_25234[(2)]);var state_25234__$1 = state_25234;var statearr_25236_25376 = state_25234__$1;(statearr_25236_25376[(2)] = inst_25230);
(statearr_25236_25376[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25235 === (6)))
{var state_25234__$1 = state_25234;var statearr_25237_25377 = state_25234__$1;(statearr_25237_25377[(2)] = null);
(statearr_25237_25377[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25235 === (5)))
{var state_25234__$1 = state_25234;var statearr_25238_25378 = state_25234__$1;(statearr_25238_25378[(2)] = null);
(statearr_25238_25378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25235 === (4)))
{var inst_25224 = (state_25234[(2)]);var inst_25225 = process.call(null,inst_25224);var state_25234__$1 = state_25234;if(cljs.core.truth_(inst_25225))
{var statearr_25239_25379 = state_25234__$1;(statearr_25239_25379[(1)] = (5));
} else
{var statearr_25240_25380 = state_25234__$1;(statearr_25240_25380[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25235 === (3)))
{var inst_25232 = (state_25234[(2)]);var state_25234__$1 = state_25234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25234__$1,inst_25232);
} else
{if((state_val_25235 === (2)))
{var state_25234__$1 = state_25234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(4),jobs);
} else
{if((state_val_25235 === (1)))
{var state_25234__$1 = state_25234;var statearr_25241_25381 = state_25234__$1;(statearr_25241_25381[(2)] = null);
(statearr_25241_25381[(1)] = (2));
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
});})(__25363,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
;return ((function (__25363,switch__11098__auto__,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25245 = [null,null,null,null,null,null,null];(statearr_25245[(0)] = state_machine__11099__auto__);
(statearr_25245[(1)] = (1));
return statearr_25245;
});
var state_machine__11099__auto____1 = (function (state_25234){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25234);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25246){if((e25246 instanceof Object))
{var ex__11102__auto__ = e25246;var statearr_25247_25382 = state_25234;(statearr_25247_25382[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25246;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25383 = state_25234;
state_25234 = G__25383;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25234){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__25363,switch__11098__auto__,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_25248 = f__11155__auto__.call(null);(statearr_25248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25375);
return statearr_25248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__25363,c__11154__auto___25375,G__25194_25364,n__4508__auto___25362,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25384 = (__25363 + (1));
__25363 = G__25384;
continue;
}
} else
{}
break;
}
var c__11154__auto___25385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25385,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25385,jobs,results,process,async){
return (function (state_25270){var state_val_25271 = (state_25270[(1)]);if((state_val_25271 === (9)))
{var inst_25263 = (state_25270[(2)]);var state_25270__$1 = (function (){var statearr_25272 = state_25270;(statearr_25272[(7)] = inst_25263);
return statearr_25272;
})();var statearr_25273_25386 = state_25270__$1;(statearr_25273_25386[(2)] = null);
(statearr_25273_25386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25271 === (8)))
{var inst_25256 = (state_25270[(8)]);var inst_25261 = (state_25270[(2)]);var state_25270__$1 = (function (){var statearr_25274 = state_25270;(statearr_25274[(9)] = inst_25261);
return statearr_25274;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25270__$1,(9),results,inst_25256);
} else
{if((state_val_25271 === (7)))
{var inst_25266 = (state_25270[(2)]);var state_25270__$1 = state_25270;var statearr_25275_25387 = state_25270__$1;(statearr_25275_25387[(2)] = inst_25266);
(statearr_25275_25387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25271 === (6)))
{var inst_25256 = (state_25270[(8)]);var inst_25251 = (state_25270[(10)]);var inst_25256__$1 = cljs.core.async.chan.call(null,(1));var inst_25257 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25258 = [inst_25251,inst_25256__$1];var inst_25259 = (new cljs.core.PersistentVector(null,2,(5),inst_25257,inst_25258,null));var state_25270__$1 = (function (){var statearr_25276 = state_25270;(statearr_25276[(8)] = inst_25256__$1);
return statearr_25276;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25270__$1,(8),jobs,inst_25259);
} else
{if((state_val_25271 === (5)))
{var inst_25254 = cljs.core.async.close_BANG_.call(null,jobs);var state_25270__$1 = state_25270;var statearr_25277_25388 = state_25270__$1;(statearr_25277_25388[(2)] = inst_25254);
(statearr_25277_25388[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25271 === (4)))
{var inst_25251 = (state_25270[(10)]);var inst_25251__$1 = (state_25270[(2)]);var inst_25252 = (inst_25251__$1 == null);var state_25270__$1 = (function (){var statearr_25278 = state_25270;(statearr_25278[(10)] = inst_25251__$1);
return statearr_25278;
})();if(cljs.core.truth_(inst_25252))
{var statearr_25279_25389 = state_25270__$1;(statearr_25279_25389[(1)] = (5));
} else
{var statearr_25280_25390 = state_25270__$1;(statearr_25280_25390[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25271 === (3)))
{var inst_25268 = (state_25270[(2)]);var state_25270__$1 = state_25270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25270__$1,inst_25268);
} else
{if((state_val_25271 === (2)))
{var state_25270__$1 = state_25270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25270__$1,(4),from);
} else
{if((state_val_25271 === (1)))
{var state_25270__$1 = state_25270;var statearr_25281_25391 = state_25270__$1;(statearr_25281_25391[(2)] = null);
(statearr_25281_25391[(1)] = (2));
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
});})(c__11154__auto___25385,jobs,results,process,async))
;return ((function (switch__11098__auto__,c__11154__auto___25385,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25285 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25285[(0)] = state_machine__11099__auto__);
(statearr_25285[(1)] = (1));
return statearr_25285;
});
var state_machine__11099__auto____1 = (function (state_25270){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25270);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25286){if((e25286 instanceof Object))
{var ex__11102__auto__ = e25286;var statearr_25287_25392 = state_25270;(statearr_25287_25392[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25393 = state_25270;
state_25270 = G__25393;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25270){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25385,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_25288 = f__11155__auto__.call(null);(statearr_25288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25385);
return statearr_25288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25385,jobs,results,process,async))
);
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,jobs,results,process,async){
return (function (state_25326){var state_val_25327 = (state_25326[(1)]);if((state_val_25327 === (7)))
{var inst_25322 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25328_25394 = state_25326__$1;(statearr_25328_25394[(2)] = inst_25322);
(statearr_25328_25394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (20)))
{var state_25326__$1 = state_25326;var statearr_25329_25395 = state_25326__$1;(statearr_25329_25395[(2)] = null);
(statearr_25329_25395[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (1)))
{var state_25326__$1 = state_25326;var statearr_25330_25396 = state_25326__$1;(statearr_25330_25396[(2)] = null);
(statearr_25330_25396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (4)))
{var inst_25291 = (state_25326[(7)]);var inst_25291__$1 = (state_25326[(2)]);var inst_25292 = (inst_25291__$1 == null);var state_25326__$1 = (function (){var statearr_25331 = state_25326;(statearr_25331[(7)] = inst_25291__$1);
return statearr_25331;
})();if(cljs.core.truth_(inst_25292))
{var statearr_25332_25397 = state_25326__$1;(statearr_25332_25397[(1)] = (5));
} else
{var statearr_25333_25398 = state_25326__$1;(statearr_25333_25398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (15)))
{var inst_25304 = (state_25326[(8)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25326__$1,(18),to,inst_25304);
} else
{if((state_val_25327 === (21)))
{var inst_25317 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25334_25399 = state_25326__$1;(statearr_25334_25399[(2)] = inst_25317);
(statearr_25334_25399[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (13)))
{var inst_25319 = (state_25326[(2)]);var state_25326__$1 = (function (){var statearr_25335 = state_25326;(statearr_25335[(9)] = inst_25319);
return statearr_25335;
})();var statearr_25336_25400 = state_25326__$1;(statearr_25336_25400[(2)] = null);
(statearr_25336_25400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (6)))
{var inst_25291 = (state_25326[(7)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25326__$1,(11),inst_25291);
} else
{if((state_val_25327 === (17)))
{var inst_25312 = (state_25326[(2)]);var state_25326__$1 = state_25326;if(cljs.core.truth_(inst_25312))
{var statearr_25337_25401 = state_25326__$1;(statearr_25337_25401[(1)] = (19));
} else
{var statearr_25338_25402 = state_25326__$1;(statearr_25338_25402[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (3)))
{var inst_25324 = (state_25326[(2)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25326__$1,inst_25324);
} else
{if((state_val_25327 === (12)))
{var inst_25301 = (state_25326[(10)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25326__$1,(14),inst_25301);
} else
{if((state_val_25327 === (2)))
{var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25326__$1,(4),results);
} else
{if((state_val_25327 === (19)))
{var state_25326__$1 = state_25326;var statearr_25339_25403 = state_25326__$1;(statearr_25339_25403[(2)] = null);
(statearr_25339_25403[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (11)))
{var inst_25301 = (state_25326[(2)]);var state_25326__$1 = (function (){var statearr_25340 = state_25326;(statearr_25340[(10)] = inst_25301);
return statearr_25340;
})();var statearr_25341_25404 = state_25326__$1;(statearr_25341_25404[(2)] = null);
(statearr_25341_25404[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (9)))
{var state_25326__$1 = state_25326;var statearr_25342_25405 = state_25326__$1;(statearr_25342_25405[(2)] = null);
(statearr_25342_25405[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (5)))
{var state_25326__$1 = state_25326;if(cljs.core.truth_(close_QMARK_))
{var statearr_25343_25406 = state_25326__$1;(statearr_25343_25406[(1)] = (8));
} else
{var statearr_25344_25407 = state_25326__$1;(statearr_25344_25407[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (14)))
{var inst_25304 = (state_25326[(8)]);var inst_25306 = (state_25326[(11)]);var inst_25304__$1 = (state_25326[(2)]);var inst_25305 = (inst_25304__$1 == null);var inst_25306__$1 = cljs.core.not.call(null,inst_25305);var state_25326__$1 = (function (){var statearr_25345 = state_25326;(statearr_25345[(8)] = inst_25304__$1);
(statearr_25345[(11)] = inst_25306__$1);
return statearr_25345;
})();if(inst_25306__$1)
{var statearr_25346_25408 = state_25326__$1;(statearr_25346_25408[(1)] = (15));
} else
{var statearr_25347_25409 = state_25326__$1;(statearr_25347_25409[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (16)))
{var inst_25306 = (state_25326[(11)]);var state_25326__$1 = state_25326;var statearr_25348_25410 = state_25326__$1;(statearr_25348_25410[(2)] = inst_25306);
(statearr_25348_25410[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (10)))
{var inst_25298 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25349_25411 = state_25326__$1;(statearr_25349_25411[(2)] = inst_25298);
(statearr_25349_25411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (18)))
{var inst_25309 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25350_25412 = state_25326__$1;(statearr_25350_25412[(2)] = inst_25309);
(statearr_25350_25412[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (8)))
{var inst_25295 = cljs.core.async.close_BANG_.call(null,to);var state_25326__$1 = state_25326;var statearr_25351_25413 = state_25326__$1;(statearr_25351_25413[(2)] = inst_25295);
(statearr_25351_25413[(1)] = (10));
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
});})(c__11154__auto__,jobs,results,process,async))
;return ((function (switch__11098__auto__,c__11154__auto__,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25355 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25355[(0)] = state_machine__11099__auto__);
(statearr_25355[(1)] = (1));
return statearr_25355;
});
var state_machine__11099__auto____1 = (function (state_25326){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25326);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25356){if((e25356 instanceof Object))
{var ex__11102__auto__ = e25356;var statearr_25357_25414 = state_25326;(statearr_25357_25414[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25415 = state_25326;
state_25326 = G__25415;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25326){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_25358 = f__11155__auto__.call(null);(statearr_25358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,jobs,results,process,async))
);
return c__11154__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11154__auto___25516 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25516,tc,fc){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25516,tc,fc){
return (function (state_25491){var state_val_25492 = (state_25491[(1)]);if((state_val_25492 === (7)))
{var inst_25487 = (state_25491[(2)]);var state_25491__$1 = state_25491;var statearr_25493_25517 = state_25491__$1;(statearr_25493_25517[(2)] = inst_25487);
(statearr_25493_25517[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (1)))
{var state_25491__$1 = state_25491;var statearr_25494_25518 = state_25491__$1;(statearr_25494_25518[(2)] = null);
(statearr_25494_25518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (4)))
{var inst_25468 = (state_25491[(7)]);var inst_25468__$1 = (state_25491[(2)]);var inst_25469 = (inst_25468__$1 == null);var state_25491__$1 = (function (){var statearr_25495 = state_25491;(statearr_25495[(7)] = inst_25468__$1);
return statearr_25495;
})();if(cljs.core.truth_(inst_25469))
{var statearr_25496_25519 = state_25491__$1;(statearr_25496_25519[(1)] = (5));
} else
{var statearr_25497_25520 = state_25491__$1;(statearr_25497_25520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (13)))
{var state_25491__$1 = state_25491;var statearr_25498_25521 = state_25491__$1;(statearr_25498_25521[(2)] = null);
(statearr_25498_25521[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (6)))
{var inst_25468 = (state_25491[(7)]);var inst_25474 = p.call(null,inst_25468);var state_25491__$1 = state_25491;if(cljs.core.truth_(inst_25474))
{var statearr_25499_25522 = state_25491__$1;(statearr_25499_25522[(1)] = (9));
} else
{var statearr_25500_25523 = state_25491__$1;(statearr_25500_25523[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (3)))
{var inst_25489 = (state_25491[(2)]);var state_25491__$1 = state_25491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25491__$1,inst_25489);
} else
{if((state_val_25492 === (12)))
{var state_25491__$1 = state_25491;var statearr_25501_25524 = state_25491__$1;(statearr_25501_25524[(2)] = null);
(statearr_25501_25524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (2)))
{var state_25491__$1 = state_25491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25491__$1,(4),ch);
} else
{if((state_val_25492 === (11)))
{var inst_25468 = (state_25491[(7)]);var inst_25478 = (state_25491[(2)]);var state_25491__$1 = state_25491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25491__$1,(8),inst_25478,inst_25468);
} else
{if((state_val_25492 === (9)))
{var state_25491__$1 = state_25491;var statearr_25502_25525 = state_25491__$1;(statearr_25502_25525[(2)] = tc);
(statearr_25502_25525[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (5)))
{var inst_25471 = cljs.core.async.close_BANG_.call(null,tc);var inst_25472 = cljs.core.async.close_BANG_.call(null,fc);var state_25491__$1 = (function (){var statearr_25503 = state_25491;(statearr_25503[(8)] = inst_25471);
return statearr_25503;
})();var statearr_25504_25526 = state_25491__$1;(statearr_25504_25526[(2)] = inst_25472);
(statearr_25504_25526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (14)))
{var inst_25485 = (state_25491[(2)]);var state_25491__$1 = state_25491;var statearr_25505_25527 = state_25491__$1;(statearr_25505_25527[(2)] = inst_25485);
(statearr_25505_25527[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (10)))
{var state_25491__$1 = state_25491;var statearr_25506_25528 = state_25491__$1;(statearr_25506_25528[(2)] = fc);
(statearr_25506_25528[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25492 === (8)))
{var inst_25480 = (state_25491[(2)]);var state_25491__$1 = state_25491;if(cljs.core.truth_(inst_25480))
{var statearr_25507_25529 = state_25491__$1;(statearr_25507_25529[(1)] = (12));
} else
{var statearr_25508_25530 = state_25491__$1;(statearr_25508_25530[(1)] = (13));
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
});})(c__11154__auto___25516,tc,fc))
;return ((function (switch__11098__auto__,c__11154__auto___25516,tc,fc){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25512 = [null,null,null,null,null,null,null,null,null];(statearr_25512[(0)] = state_machine__11099__auto__);
(statearr_25512[(1)] = (1));
return statearr_25512;
});
var state_machine__11099__auto____1 = (function (state_25491){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25491);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object))
{var ex__11102__auto__ = e25513;var statearr_25514_25531 = state_25491;(statearr_25514_25531[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25513;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25532 = state_25491;
state_25491 = G__25532;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25491){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25516,tc,fc))
})();var state__11156__auto__ = (function (){var statearr_25515 = f__11155__auto__.call(null);(statearr_25515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25516);
return statearr_25515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25516,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_25579){var state_val_25580 = (state_25579[(1)]);if((state_val_25580 === (7)))
{var inst_25575 = (state_25579[(2)]);var state_25579__$1 = state_25579;var statearr_25581_25597 = state_25579__$1;(statearr_25581_25597[(2)] = inst_25575);
(statearr_25581_25597[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25580 === (6)))
{var inst_25568 = (state_25579[(7)]);var inst_25565 = (state_25579[(8)]);var inst_25572 = f.call(null,inst_25565,inst_25568);var inst_25565__$1 = inst_25572;var state_25579__$1 = (function (){var statearr_25582 = state_25579;(statearr_25582[(8)] = inst_25565__$1);
return statearr_25582;
})();var statearr_25583_25598 = state_25579__$1;(statearr_25583_25598[(2)] = null);
(statearr_25583_25598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25580 === (5)))
{var inst_25565 = (state_25579[(8)]);var state_25579__$1 = state_25579;var statearr_25584_25599 = state_25579__$1;(statearr_25584_25599[(2)] = inst_25565);
(statearr_25584_25599[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25580 === (4)))
{var inst_25568 = (state_25579[(7)]);var inst_25568__$1 = (state_25579[(2)]);var inst_25569 = (inst_25568__$1 == null);var state_25579__$1 = (function (){var statearr_25585 = state_25579;(statearr_25585[(7)] = inst_25568__$1);
return statearr_25585;
})();if(cljs.core.truth_(inst_25569))
{var statearr_25586_25600 = state_25579__$1;(statearr_25586_25600[(1)] = (5));
} else
{var statearr_25587_25601 = state_25579__$1;(statearr_25587_25601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25580 === (3)))
{var inst_25577 = (state_25579[(2)]);var state_25579__$1 = state_25579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25579__$1,inst_25577);
} else
{if((state_val_25580 === (2)))
{var state_25579__$1 = state_25579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25579__$1,(4),ch);
} else
{if((state_val_25580 === (1)))
{var inst_25565 = init;var state_25579__$1 = (function (){var statearr_25588 = state_25579;(statearr_25588[(8)] = inst_25565);
return statearr_25588;
})();var statearr_25589_25602 = state_25579__$1;(statearr_25589_25602[(2)] = null);
(statearr_25589_25602[(1)] = (2));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25593 = [null,null,null,null,null,null,null,null,null];(statearr_25593[(0)] = state_machine__11099__auto__);
(statearr_25593[(1)] = (1));
return statearr_25593;
});
var state_machine__11099__auto____1 = (function (state_25579){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25579);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25594){if((e25594 instanceof Object))
{var ex__11102__auto__ = e25594;var statearr_25595_25603 = state_25579;(statearr_25595_25603[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25579);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25604 = state_25579;
state_25579 = G__25604;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25579){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_25596 = f__11155__auto__.call(null);(statearr_25596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_25678){var state_val_25679 = (state_25678[(1)]);if((state_val_25679 === (7)))
{var inst_25660 = (state_25678[(2)]);var state_25678__$1 = state_25678;var statearr_25680_25703 = state_25678__$1;(statearr_25680_25703[(2)] = inst_25660);
(statearr_25680_25703[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (1)))
{var inst_25654 = cljs.core.seq.call(null,coll);var inst_25655 = inst_25654;var state_25678__$1 = (function (){var statearr_25681 = state_25678;(statearr_25681[(7)] = inst_25655);
return statearr_25681;
})();var statearr_25682_25704 = state_25678__$1;(statearr_25682_25704[(2)] = null);
(statearr_25682_25704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (4)))
{var inst_25655 = (state_25678[(7)]);var inst_25658 = cljs.core.first.call(null,inst_25655);var state_25678__$1 = state_25678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25678__$1,(7),ch,inst_25658);
} else
{if((state_val_25679 === (13)))
{var inst_25672 = (state_25678[(2)]);var state_25678__$1 = state_25678;var statearr_25683_25705 = state_25678__$1;(statearr_25683_25705[(2)] = inst_25672);
(statearr_25683_25705[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (6)))
{var inst_25663 = (state_25678[(2)]);var state_25678__$1 = state_25678;if(cljs.core.truth_(inst_25663))
{var statearr_25684_25706 = state_25678__$1;(statearr_25684_25706[(1)] = (8));
} else
{var statearr_25685_25707 = state_25678__$1;(statearr_25685_25707[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (3)))
{var inst_25676 = (state_25678[(2)]);var state_25678__$1 = state_25678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25678__$1,inst_25676);
} else
{if((state_val_25679 === (12)))
{var state_25678__$1 = state_25678;var statearr_25686_25708 = state_25678__$1;(statearr_25686_25708[(2)] = null);
(statearr_25686_25708[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (2)))
{var inst_25655 = (state_25678[(7)]);var state_25678__$1 = state_25678;if(cljs.core.truth_(inst_25655))
{var statearr_25687_25709 = state_25678__$1;(statearr_25687_25709[(1)] = (4));
} else
{var statearr_25688_25710 = state_25678__$1;(statearr_25688_25710[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (11)))
{var inst_25669 = cljs.core.async.close_BANG_.call(null,ch);var state_25678__$1 = state_25678;var statearr_25689_25711 = state_25678__$1;(statearr_25689_25711[(2)] = inst_25669);
(statearr_25689_25711[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (9)))
{var state_25678__$1 = state_25678;if(cljs.core.truth_(close_QMARK_))
{var statearr_25690_25712 = state_25678__$1;(statearr_25690_25712[(1)] = (11));
} else
{var statearr_25691_25713 = state_25678__$1;(statearr_25691_25713[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (5)))
{var inst_25655 = (state_25678[(7)]);var state_25678__$1 = state_25678;var statearr_25692_25714 = state_25678__$1;(statearr_25692_25714[(2)] = inst_25655);
(statearr_25692_25714[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (10)))
{var inst_25674 = (state_25678[(2)]);var state_25678__$1 = state_25678;var statearr_25693_25715 = state_25678__$1;(statearr_25693_25715[(2)] = inst_25674);
(statearr_25693_25715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25679 === (8)))
{var inst_25655 = (state_25678[(7)]);var inst_25665 = cljs.core.next.call(null,inst_25655);var inst_25655__$1 = inst_25665;var state_25678__$1 = (function (){var statearr_25694 = state_25678;(statearr_25694[(7)] = inst_25655__$1);
return statearr_25694;
})();var statearr_25695_25716 = state_25678__$1;(statearr_25695_25716[(2)] = null);
(statearr_25695_25716[(1)] = (2));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25699 = [null,null,null,null,null,null,null,null];(statearr_25699[(0)] = state_machine__11099__auto__);
(statearr_25699[(1)] = (1));
return statearr_25699;
});
var state_machine__11099__auto____1 = (function (state_25678){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25678);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25700){if((e25700 instanceof Object))
{var ex__11102__auto__ = e25700;var statearr_25701_25717 = state_25678;(statearr_25701_25717[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25678);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25718 = state_25678;
state_25678 = G__25718;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_25702 = f__11155__auto__.call(null);(statearr_25702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
cljs.core.async.Mux = (function (){var obj25720 = {};return obj25720;
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
cljs.core.async.Mult = (function (){var obj25722 = {};return obj25722;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25944 = (function (cs,ch,mult,meta25945){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25945 = meta25945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25944.cljs$lang$type = true;
cljs.core.async.t25944.cljs$lang$ctorStr = "cljs.core.async/t25944";
cljs.core.async.t25944.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25944");
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25946){var self__ = this;
var _25946__$1 = this;return self__.meta25945;
});})(cs))
;
cljs.core.async.t25944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25946,meta25945__$1){var self__ = this;
var _25946__$1 = this;return (new cljs.core.async.t25944(self__.cs,self__.ch,self__.mult,meta25945__$1));
});})(cs))
;
cljs.core.async.__GT_t25944 = ((function (cs){
return (function __GT_t25944(cs__$1,ch__$1,mult__$1,meta25945){return (new cljs.core.async.t25944(cs__$1,ch__$1,mult__$1,meta25945));
});})(cs))
;
}
return (new cljs.core.async.t25944(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11154__auto___26165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26165,cs,m,dchan,dctr,done){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26165,cs,m,dchan,dctr,done){
return (function (state_26077){var state_val_26078 = (state_26077[(1)]);if((state_val_26078 === (7)))
{var inst_26073 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26079_26166 = state_26077__$1;(statearr_26079_26166[(2)] = inst_26073);
(statearr_26079_26166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (20)))
{var inst_25978 = (state_26077[(7)]);var inst_25988 = cljs.core.first.call(null,inst_25978);var inst_25989 = cljs.core.nth.call(null,inst_25988,(0),null);var inst_25990 = cljs.core.nth.call(null,inst_25988,(1),null);var state_26077__$1 = (function (){var statearr_26080 = state_26077;(statearr_26080[(8)] = inst_25989);
return statearr_26080;
})();if(cljs.core.truth_(inst_25990))
{var statearr_26081_26167 = state_26077__$1;(statearr_26081_26167[(1)] = (22));
} else
{var statearr_26082_26168 = state_26077__$1;(statearr_26082_26168[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (27)))
{var inst_26025 = (state_26077[(9)]);var inst_26018 = (state_26077[(10)]);var inst_26020 = (state_26077[(11)]);var inst_25949 = (state_26077[(12)]);var inst_26025__$1 = cljs.core._nth.call(null,inst_26018,inst_26020);var inst_26026 = cljs.core.async.put_BANG_.call(null,inst_26025__$1,inst_25949,done);var state_26077__$1 = (function (){var statearr_26083 = state_26077;(statearr_26083[(9)] = inst_26025__$1);
return statearr_26083;
})();if(cljs.core.truth_(inst_26026))
{var statearr_26084_26169 = state_26077__$1;(statearr_26084_26169[(1)] = (30));
} else
{var statearr_26085_26170 = state_26077__$1;(statearr_26085_26170[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (1)))
{var state_26077__$1 = state_26077;var statearr_26086_26171 = state_26077__$1;(statearr_26086_26171[(2)] = null);
(statearr_26086_26171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (24)))
{var inst_25978 = (state_26077[(7)]);var inst_25995 = (state_26077[(2)]);var inst_25996 = cljs.core.next.call(null,inst_25978);var inst_25958 = inst_25996;var inst_25959 = null;var inst_25960 = (0);var inst_25961 = (0);var state_26077__$1 = (function (){var statearr_26087 = state_26077;(statearr_26087[(13)] = inst_25961);
(statearr_26087[(14)] = inst_25959);
(statearr_26087[(15)] = inst_25995);
(statearr_26087[(16)] = inst_25958);
(statearr_26087[(17)] = inst_25960);
return statearr_26087;
})();var statearr_26088_26172 = state_26077__$1;(statearr_26088_26172[(2)] = null);
(statearr_26088_26172[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (39)))
{var state_26077__$1 = state_26077;var statearr_26092_26173 = state_26077__$1;(statearr_26092_26173[(2)] = null);
(statearr_26092_26173[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (4)))
{var inst_25949 = (state_26077[(12)]);var inst_25949__$1 = (state_26077[(2)]);var inst_25950 = (inst_25949__$1 == null);var state_26077__$1 = (function (){var statearr_26093 = state_26077;(statearr_26093[(12)] = inst_25949__$1);
return statearr_26093;
})();if(cljs.core.truth_(inst_25950))
{var statearr_26094_26174 = state_26077__$1;(statearr_26094_26174[(1)] = (5));
} else
{var statearr_26095_26175 = state_26077__$1;(statearr_26095_26175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (15)))
{var inst_25961 = (state_26077[(13)]);var inst_25959 = (state_26077[(14)]);var inst_25958 = (state_26077[(16)]);var inst_25960 = (state_26077[(17)]);var inst_25974 = (state_26077[(2)]);var inst_25975 = (inst_25961 + (1));var tmp26089 = inst_25959;var tmp26090 = inst_25958;var tmp26091 = inst_25960;var inst_25958__$1 = tmp26090;var inst_25959__$1 = tmp26089;var inst_25960__$1 = tmp26091;var inst_25961__$1 = inst_25975;var state_26077__$1 = (function (){var statearr_26096 = state_26077;(statearr_26096[(18)] = inst_25974);
(statearr_26096[(13)] = inst_25961__$1);
(statearr_26096[(14)] = inst_25959__$1);
(statearr_26096[(16)] = inst_25958__$1);
(statearr_26096[(17)] = inst_25960__$1);
return statearr_26096;
})();var statearr_26097_26176 = state_26077__$1;(statearr_26097_26176[(2)] = null);
(statearr_26097_26176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (21)))
{var inst_25999 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26101_26177 = state_26077__$1;(statearr_26101_26177[(2)] = inst_25999);
(statearr_26101_26177[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (31)))
{var inst_26025 = (state_26077[(9)]);var inst_26029 = done.call(null,null);var inst_26030 = cljs.core.async.untap_STAR_.call(null,m,inst_26025);var state_26077__$1 = (function (){var statearr_26102 = state_26077;(statearr_26102[(19)] = inst_26029);
return statearr_26102;
})();var statearr_26103_26178 = state_26077__$1;(statearr_26103_26178[(2)] = inst_26030);
(statearr_26103_26178[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (32)))
{var inst_26017 = (state_26077[(20)]);var inst_26018 = (state_26077[(10)]);var inst_26020 = (state_26077[(11)]);var inst_26019 = (state_26077[(21)]);var inst_26032 = (state_26077[(2)]);var inst_26033 = (inst_26020 + (1));var tmp26098 = inst_26017;var tmp26099 = inst_26018;var tmp26100 = inst_26019;var inst_26017__$1 = tmp26098;var inst_26018__$1 = tmp26099;var inst_26019__$1 = tmp26100;var inst_26020__$1 = inst_26033;var state_26077__$1 = (function (){var statearr_26104 = state_26077;(statearr_26104[(20)] = inst_26017__$1);
(statearr_26104[(10)] = inst_26018__$1);
(statearr_26104[(11)] = inst_26020__$1);
(statearr_26104[(21)] = inst_26019__$1);
(statearr_26104[(22)] = inst_26032);
return statearr_26104;
})();var statearr_26105_26179 = state_26077__$1;(statearr_26105_26179[(2)] = null);
(statearr_26105_26179[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (40)))
{var inst_26045 = (state_26077[(23)]);var inst_26049 = done.call(null,null);var inst_26050 = cljs.core.async.untap_STAR_.call(null,m,inst_26045);var state_26077__$1 = (function (){var statearr_26106 = state_26077;(statearr_26106[(24)] = inst_26049);
return statearr_26106;
})();var statearr_26107_26180 = state_26077__$1;(statearr_26107_26180[(2)] = inst_26050);
(statearr_26107_26180[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (33)))
{var inst_26036 = (state_26077[(25)]);var inst_26038 = cljs.core.chunked_seq_QMARK_.call(null,inst_26036);var state_26077__$1 = state_26077;if(inst_26038)
{var statearr_26108_26181 = state_26077__$1;(statearr_26108_26181[(1)] = (36));
} else
{var statearr_26109_26182 = state_26077__$1;(statearr_26109_26182[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (13)))
{var inst_25968 = (state_26077[(26)]);var inst_25971 = cljs.core.async.close_BANG_.call(null,inst_25968);var state_26077__$1 = state_26077;var statearr_26110_26183 = state_26077__$1;(statearr_26110_26183[(2)] = inst_25971);
(statearr_26110_26183[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (22)))
{var inst_25989 = (state_26077[(8)]);var inst_25992 = cljs.core.async.close_BANG_.call(null,inst_25989);var state_26077__$1 = state_26077;var statearr_26111_26184 = state_26077__$1;(statearr_26111_26184[(2)] = inst_25992);
(statearr_26111_26184[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (36)))
{var inst_26036 = (state_26077[(25)]);var inst_26040 = cljs.core.chunk_first.call(null,inst_26036);var inst_26041 = cljs.core.chunk_rest.call(null,inst_26036);var inst_26042 = cljs.core.count.call(null,inst_26040);var inst_26017 = inst_26041;var inst_26018 = inst_26040;var inst_26019 = inst_26042;var inst_26020 = (0);var state_26077__$1 = (function (){var statearr_26112 = state_26077;(statearr_26112[(20)] = inst_26017);
(statearr_26112[(10)] = inst_26018);
(statearr_26112[(11)] = inst_26020);
(statearr_26112[(21)] = inst_26019);
return statearr_26112;
})();var statearr_26113_26185 = state_26077__$1;(statearr_26113_26185[(2)] = null);
(statearr_26113_26185[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (41)))
{var inst_26036 = (state_26077[(25)]);var inst_26052 = (state_26077[(2)]);var inst_26053 = cljs.core.next.call(null,inst_26036);var inst_26017 = inst_26053;var inst_26018 = null;var inst_26019 = (0);var inst_26020 = (0);var state_26077__$1 = (function (){var statearr_26114 = state_26077;(statearr_26114[(20)] = inst_26017);
(statearr_26114[(10)] = inst_26018);
(statearr_26114[(11)] = inst_26020);
(statearr_26114[(21)] = inst_26019);
(statearr_26114[(27)] = inst_26052);
return statearr_26114;
})();var statearr_26115_26186 = state_26077__$1;(statearr_26115_26186[(2)] = null);
(statearr_26115_26186[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (43)))
{var state_26077__$1 = state_26077;var statearr_26116_26187 = state_26077__$1;(statearr_26116_26187[(2)] = null);
(statearr_26116_26187[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (29)))
{var inst_26061 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26117_26188 = state_26077__$1;(statearr_26117_26188[(2)] = inst_26061);
(statearr_26117_26188[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (44)))
{var inst_26070 = (state_26077[(2)]);var state_26077__$1 = (function (){var statearr_26118 = state_26077;(statearr_26118[(28)] = inst_26070);
return statearr_26118;
})();var statearr_26119_26189 = state_26077__$1;(statearr_26119_26189[(2)] = null);
(statearr_26119_26189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (6)))
{var inst_26009 = (state_26077[(29)]);var inst_26008 = cljs.core.deref.call(null,cs);var inst_26009__$1 = cljs.core.keys.call(null,inst_26008);var inst_26010 = cljs.core.count.call(null,inst_26009__$1);var inst_26011 = cljs.core.reset_BANG_.call(null,dctr,inst_26010);var inst_26016 = cljs.core.seq.call(null,inst_26009__$1);var inst_26017 = inst_26016;var inst_26018 = null;var inst_26019 = (0);var inst_26020 = (0);var state_26077__$1 = (function (){var statearr_26120 = state_26077;(statearr_26120[(20)] = inst_26017);
(statearr_26120[(10)] = inst_26018);
(statearr_26120[(11)] = inst_26020);
(statearr_26120[(21)] = inst_26019);
(statearr_26120[(29)] = inst_26009__$1);
(statearr_26120[(30)] = inst_26011);
return statearr_26120;
})();var statearr_26121_26190 = state_26077__$1;(statearr_26121_26190[(2)] = null);
(statearr_26121_26190[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (28)))
{var inst_26017 = (state_26077[(20)]);var inst_26036 = (state_26077[(25)]);var inst_26036__$1 = cljs.core.seq.call(null,inst_26017);var state_26077__$1 = (function (){var statearr_26122 = state_26077;(statearr_26122[(25)] = inst_26036__$1);
return statearr_26122;
})();if(inst_26036__$1)
{var statearr_26123_26191 = state_26077__$1;(statearr_26123_26191[(1)] = (33));
} else
{var statearr_26124_26192 = state_26077__$1;(statearr_26124_26192[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (25)))
{var inst_26020 = (state_26077[(11)]);var inst_26019 = (state_26077[(21)]);var inst_26022 = (inst_26020 < inst_26019);var inst_26023 = inst_26022;var state_26077__$1 = state_26077;if(cljs.core.truth_(inst_26023))
{var statearr_26125_26193 = state_26077__$1;(statearr_26125_26193[(1)] = (27));
} else
{var statearr_26126_26194 = state_26077__$1;(statearr_26126_26194[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (34)))
{var state_26077__$1 = state_26077;var statearr_26127_26195 = state_26077__$1;(statearr_26127_26195[(2)] = null);
(statearr_26127_26195[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (17)))
{var state_26077__$1 = state_26077;var statearr_26128_26196 = state_26077__$1;(statearr_26128_26196[(2)] = null);
(statearr_26128_26196[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (3)))
{var inst_26075 = (state_26077[(2)]);var state_26077__$1 = state_26077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26077__$1,inst_26075);
} else
{if((state_val_26078 === (12)))
{var inst_26004 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26129_26197 = state_26077__$1;(statearr_26129_26197[(2)] = inst_26004);
(statearr_26129_26197[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (2)))
{var state_26077__$1 = state_26077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26077__$1,(4),ch);
} else
{if((state_val_26078 === (23)))
{var state_26077__$1 = state_26077;var statearr_26130_26198 = state_26077__$1;(statearr_26130_26198[(2)] = null);
(statearr_26130_26198[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (35)))
{var inst_26059 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26131_26199 = state_26077__$1;(statearr_26131_26199[(2)] = inst_26059);
(statearr_26131_26199[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (19)))
{var inst_25978 = (state_26077[(7)]);var inst_25982 = cljs.core.chunk_first.call(null,inst_25978);var inst_25983 = cljs.core.chunk_rest.call(null,inst_25978);var inst_25984 = cljs.core.count.call(null,inst_25982);var inst_25958 = inst_25983;var inst_25959 = inst_25982;var inst_25960 = inst_25984;var inst_25961 = (0);var state_26077__$1 = (function (){var statearr_26132 = state_26077;(statearr_26132[(13)] = inst_25961);
(statearr_26132[(14)] = inst_25959);
(statearr_26132[(16)] = inst_25958);
(statearr_26132[(17)] = inst_25960);
return statearr_26132;
})();var statearr_26133_26200 = state_26077__$1;(statearr_26133_26200[(2)] = null);
(statearr_26133_26200[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (11)))
{var inst_25958 = (state_26077[(16)]);var inst_25978 = (state_26077[(7)]);var inst_25978__$1 = cljs.core.seq.call(null,inst_25958);var state_26077__$1 = (function (){var statearr_26134 = state_26077;(statearr_26134[(7)] = inst_25978__$1);
return statearr_26134;
})();if(inst_25978__$1)
{var statearr_26135_26201 = state_26077__$1;(statearr_26135_26201[(1)] = (16));
} else
{var statearr_26136_26202 = state_26077__$1;(statearr_26136_26202[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (9)))
{var inst_26006 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26137_26203 = state_26077__$1;(statearr_26137_26203[(2)] = inst_26006);
(statearr_26137_26203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (5)))
{var inst_25956 = cljs.core.deref.call(null,cs);var inst_25957 = cljs.core.seq.call(null,inst_25956);var inst_25958 = inst_25957;var inst_25959 = null;var inst_25960 = (0);var inst_25961 = (0);var state_26077__$1 = (function (){var statearr_26138 = state_26077;(statearr_26138[(13)] = inst_25961);
(statearr_26138[(14)] = inst_25959);
(statearr_26138[(16)] = inst_25958);
(statearr_26138[(17)] = inst_25960);
return statearr_26138;
})();var statearr_26139_26204 = state_26077__$1;(statearr_26139_26204[(2)] = null);
(statearr_26139_26204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (14)))
{var state_26077__$1 = state_26077;var statearr_26140_26205 = state_26077__$1;(statearr_26140_26205[(2)] = null);
(statearr_26140_26205[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (45)))
{var inst_26067 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26141_26206 = state_26077__$1;(statearr_26141_26206[(2)] = inst_26067);
(statearr_26141_26206[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (26)))
{var inst_26009 = (state_26077[(29)]);var inst_26063 = (state_26077[(2)]);var inst_26064 = cljs.core.seq.call(null,inst_26009);var state_26077__$1 = (function (){var statearr_26142 = state_26077;(statearr_26142[(31)] = inst_26063);
return statearr_26142;
})();if(inst_26064)
{var statearr_26143_26207 = state_26077__$1;(statearr_26143_26207[(1)] = (42));
} else
{var statearr_26144_26208 = state_26077__$1;(statearr_26144_26208[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (16)))
{var inst_25978 = (state_26077[(7)]);var inst_25980 = cljs.core.chunked_seq_QMARK_.call(null,inst_25978);var state_26077__$1 = state_26077;if(inst_25980)
{var statearr_26145_26209 = state_26077__$1;(statearr_26145_26209[(1)] = (19));
} else
{var statearr_26146_26210 = state_26077__$1;(statearr_26146_26210[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (38)))
{var inst_26056 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26147_26211 = state_26077__$1;(statearr_26147_26211[(2)] = inst_26056);
(statearr_26147_26211[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (30)))
{var state_26077__$1 = state_26077;var statearr_26148_26212 = state_26077__$1;(statearr_26148_26212[(2)] = null);
(statearr_26148_26212[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (10)))
{var inst_25961 = (state_26077[(13)]);var inst_25959 = (state_26077[(14)]);var inst_25967 = cljs.core._nth.call(null,inst_25959,inst_25961);var inst_25968 = cljs.core.nth.call(null,inst_25967,(0),null);var inst_25969 = cljs.core.nth.call(null,inst_25967,(1),null);var state_26077__$1 = (function (){var statearr_26149 = state_26077;(statearr_26149[(26)] = inst_25968);
return statearr_26149;
})();if(cljs.core.truth_(inst_25969))
{var statearr_26150_26213 = state_26077__$1;(statearr_26150_26213[(1)] = (13));
} else
{var statearr_26151_26214 = state_26077__$1;(statearr_26151_26214[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (18)))
{var inst_26002 = (state_26077[(2)]);var state_26077__$1 = state_26077;var statearr_26152_26215 = state_26077__$1;(statearr_26152_26215[(2)] = inst_26002);
(statearr_26152_26215[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (42)))
{var state_26077__$1 = state_26077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26077__$1,(45),dchan);
} else
{if((state_val_26078 === (37)))
{var inst_26045 = (state_26077[(23)]);var inst_26036 = (state_26077[(25)]);var inst_25949 = (state_26077[(12)]);var inst_26045__$1 = cljs.core.first.call(null,inst_26036);var inst_26046 = cljs.core.async.put_BANG_.call(null,inst_26045__$1,inst_25949,done);var state_26077__$1 = (function (){var statearr_26153 = state_26077;(statearr_26153[(23)] = inst_26045__$1);
return statearr_26153;
})();if(cljs.core.truth_(inst_26046))
{var statearr_26154_26216 = state_26077__$1;(statearr_26154_26216[(1)] = (39));
} else
{var statearr_26155_26217 = state_26077__$1;(statearr_26155_26217[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26078 === (8)))
{var inst_25961 = (state_26077[(13)]);var inst_25960 = (state_26077[(17)]);var inst_25963 = (inst_25961 < inst_25960);var inst_25964 = inst_25963;var state_26077__$1 = state_26077;if(cljs.core.truth_(inst_25964))
{var statearr_26156_26218 = state_26077__$1;(statearr_26156_26218[(1)] = (10));
} else
{var statearr_26157_26219 = state_26077__$1;(statearr_26157_26219[(1)] = (11));
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
});})(c__11154__auto___26165,cs,m,dchan,dctr,done))
;return ((function (switch__11098__auto__,c__11154__auto___26165,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26161[(0)] = state_machine__11099__auto__);
(statearr_26161[(1)] = (1));
return statearr_26161;
});
var state_machine__11099__auto____1 = (function (state_26077){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26077);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26162){if((e26162 instanceof Object))
{var ex__11102__auto__ = e26162;var statearr_26163_26220 = state_26077;(statearr_26163_26220[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26221 = state_26077;
state_26077 = G__26221;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26077){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26165,cs,m,dchan,dctr,done))
})();var state__11156__auto__ = (function (){var statearr_26164 = f__11155__auto__.call(null);(statearr_26164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26165);
return statearr_26164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26165,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26223 = {};return obj26223;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26224){var map__26229 = p__26224;var map__26229__$1 = ((cljs.core.seq_QMARK_.call(null,map__26229))?cljs.core.apply.call(null,cljs.core.hash_map,map__26229):map__26229);var opts = map__26229__$1;var statearr_26230_26233 = state;(statearr_26230_26233[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26229,map__26229__$1,opts){
return (function (val){var statearr_26231_26234 = state;(statearr_26231_26234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26229,map__26229__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_26232_26235 = state;(statearr_26232_26235[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26224 = null;if (arguments.length > 3) {
  p__26224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26224);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26236){
var state = cljs.core.first(arglist__26236);
arglist__26236 = cljs.core.next(arglist__26236);
var cont_block = cljs.core.first(arglist__26236);
arglist__26236 = cljs.core.next(arglist__26236);
var ports = cljs.core.first(arglist__26236);
var p__26224 = cljs.core.rest(arglist__26236);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26224);
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
;var m = (function (){if(typeof cljs.core.async.t26356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26356 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26357){
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
this.meta26357 = meta26357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26356.cljs$lang$type = true;
cljs.core.async.t26356.cljs$lang$ctorStr = "cljs.core.async/t26356";
cljs.core.async.t26356.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26356");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26358){var self__ = this;
var _26358__$1 = this;return self__.meta26357;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26358,meta26357__$1){var self__ = this;
var _26358__$1 = this;return (new cljs.core.async.t26356(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26357__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26356 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26357){return (new cljs.core.async.t26356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26357));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26356(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11154__auto___26475 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26428){var state_val_26429 = (state_26428[(1)]);if((state_val_26429 === (7)))
{var inst_26372 = (state_26428[(7)]);var inst_26377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26372);var state_26428__$1 = state_26428;var statearr_26430_26476 = state_26428__$1;(statearr_26430_26476[(2)] = inst_26377);
(statearr_26430_26476[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (20)))
{var inst_26387 = (state_26428[(8)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26428__$1,(23),out,inst_26387);
} else
{if((state_val_26429 === (1)))
{var inst_26362 = (state_26428[(9)]);var inst_26362__$1 = calc_state.call(null);var inst_26363 = cljs.core.seq_QMARK_.call(null,inst_26362__$1);var state_26428__$1 = (function (){var statearr_26431 = state_26428;(statearr_26431[(9)] = inst_26362__$1);
return statearr_26431;
})();if(inst_26363)
{var statearr_26432_26477 = state_26428__$1;(statearr_26432_26477[(1)] = (2));
} else
{var statearr_26433_26478 = state_26428__$1;(statearr_26433_26478[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (24)))
{var inst_26380 = (state_26428[(10)]);var inst_26372 = inst_26380;var state_26428__$1 = (function (){var statearr_26434 = state_26428;(statearr_26434[(7)] = inst_26372);
return statearr_26434;
})();var statearr_26435_26479 = state_26428__$1;(statearr_26435_26479[(2)] = null);
(statearr_26435_26479[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (4)))
{var inst_26362 = (state_26428[(9)]);var inst_26368 = (state_26428[(2)]);var inst_26369 = cljs.core.get.call(null,inst_26368,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26370 = cljs.core.get.call(null,inst_26368,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26371 = cljs.core.get.call(null,inst_26368,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26372 = inst_26362;var state_26428__$1 = (function (){var statearr_26436 = state_26428;(statearr_26436[(11)] = inst_26370);
(statearr_26436[(12)] = inst_26371);
(statearr_26436[(7)] = inst_26372);
(statearr_26436[(13)] = inst_26369);
return statearr_26436;
})();var statearr_26437_26480 = state_26428__$1;(statearr_26437_26480[(2)] = null);
(statearr_26437_26480[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (15)))
{var state_26428__$1 = state_26428;var statearr_26438_26481 = state_26428__$1;(statearr_26438_26481[(2)] = null);
(statearr_26438_26481[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (21)))
{var inst_26380 = (state_26428[(10)]);var inst_26372 = inst_26380;var state_26428__$1 = (function (){var statearr_26439 = state_26428;(statearr_26439[(7)] = inst_26372);
return statearr_26439;
})();var statearr_26440_26482 = state_26428__$1;(statearr_26440_26482[(2)] = null);
(statearr_26440_26482[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (13)))
{var inst_26424 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26441_26483 = state_26428__$1;(statearr_26441_26483[(2)] = inst_26424);
(statearr_26441_26483[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (22)))
{var inst_26422 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26442_26484 = state_26428__$1;(statearr_26442_26484[(2)] = inst_26422);
(statearr_26442_26484[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (6)))
{var inst_26426 = (state_26428[(2)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26428__$1,inst_26426);
} else
{if((state_val_26429 === (25)))
{var state_26428__$1 = state_26428;var statearr_26443_26485 = state_26428__$1;(statearr_26443_26485[(2)] = null);
(statearr_26443_26485[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (17)))
{var inst_26402 = (state_26428[(14)]);var state_26428__$1 = state_26428;var statearr_26444_26486 = state_26428__$1;(statearr_26444_26486[(2)] = inst_26402);
(statearr_26444_26486[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (3)))
{var inst_26362 = (state_26428[(9)]);var state_26428__$1 = state_26428;var statearr_26445_26487 = state_26428__$1;(statearr_26445_26487[(2)] = inst_26362);
(statearr_26445_26487[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (12)))
{var inst_26388 = (state_26428[(15)]);var inst_26383 = (state_26428[(16)]);var inst_26402 = (state_26428[(14)]);var inst_26402__$1 = inst_26383.call(null,inst_26388);var state_26428__$1 = (function (){var statearr_26446 = state_26428;(statearr_26446[(14)] = inst_26402__$1);
return statearr_26446;
})();if(cljs.core.truth_(inst_26402__$1))
{var statearr_26447_26488 = state_26428__$1;(statearr_26447_26488[(1)] = (17));
} else
{var statearr_26448_26489 = state_26428__$1;(statearr_26448_26489[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (2)))
{var inst_26362 = (state_26428[(9)]);var inst_26365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26362);var state_26428__$1 = state_26428;var statearr_26449_26490 = state_26428__$1;(statearr_26449_26490[(2)] = inst_26365);
(statearr_26449_26490[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (23)))
{var inst_26413 = (state_26428[(2)]);var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26413))
{var statearr_26450_26491 = state_26428__$1;(statearr_26450_26491[(1)] = (24));
} else
{var statearr_26451_26492 = state_26428__$1;(statearr_26451_26492[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (19)))
{var inst_26410 = (state_26428[(2)]);var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26410))
{var statearr_26452_26493 = state_26428__$1;(statearr_26452_26493[(1)] = (20));
} else
{var statearr_26453_26494 = state_26428__$1;(statearr_26453_26494[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (11)))
{var inst_26387 = (state_26428[(8)]);var inst_26393 = (inst_26387 == null);var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26393))
{var statearr_26454_26495 = state_26428__$1;(statearr_26454_26495[(1)] = (14));
} else
{var statearr_26455_26496 = state_26428__$1;(statearr_26455_26496[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (9)))
{var inst_26380 = (state_26428[(10)]);var inst_26380__$1 = (state_26428[(2)]);var inst_26381 = cljs.core.get.call(null,inst_26380__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26382 = cljs.core.get.call(null,inst_26380__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26383 = cljs.core.get.call(null,inst_26380__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26428__$1 = (function (){var statearr_26456 = state_26428;(statearr_26456[(17)] = inst_26382);
(statearr_26456[(16)] = inst_26383);
(statearr_26456[(10)] = inst_26380__$1);
return statearr_26456;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_26428__$1,(10),inst_26381);
} else
{if((state_val_26429 === (5)))
{var inst_26372 = (state_26428[(7)]);var inst_26375 = cljs.core.seq_QMARK_.call(null,inst_26372);var state_26428__$1 = state_26428;if(inst_26375)
{var statearr_26457_26497 = state_26428__$1;(statearr_26457_26497[(1)] = (7));
} else
{var statearr_26458_26498 = state_26428__$1;(statearr_26458_26498[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (14)))
{var inst_26388 = (state_26428[(15)]);var inst_26395 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26388);var state_26428__$1 = state_26428;var statearr_26459_26499 = state_26428__$1;(statearr_26459_26499[(2)] = inst_26395);
(statearr_26459_26499[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (26)))
{var inst_26418 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26460_26500 = state_26428__$1;(statearr_26460_26500[(2)] = inst_26418);
(statearr_26460_26500[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (16)))
{var inst_26398 = (state_26428[(2)]);var inst_26399 = calc_state.call(null);var inst_26372 = inst_26399;var state_26428__$1 = (function (){var statearr_26461 = state_26428;(statearr_26461[(18)] = inst_26398);
(statearr_26461[(7)] = inst_26372);
return statearr_26461;
})();var statearr_26462_26501 = state_26428__$1;(statearr_26462_26501[(2)] = null);
(statearr_26462_26501[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (10)))
{var inst_26387 = (state_26428[(8)]);var inst_26388 = (state_26428[(15)]);var inst_26386 = (state_26428[(2)]);var inst_26387__$1 = cljs.core.nth.call(null,inst_26386,(0),null);var inst_26388__$1 = cljs.core.nth.call(null,inst_26386,(1),null);var inst_26389 = (inst_26387__$1 == null);var inst_26390 = cljs.core._EQ_.call(null,inst_26388__$1,change);var inst_26391 = (inst_26389) || (inst_26390);var state_26428__$1 = (function (){var statearr_26463 = state_26428;(statearr_26463[(8)] = inst_26387__$1);
(statearr_26463[(15)] = inst_26388__$1);
return statearr_26463;
})();if(cljs.core.truth_(inst_26391))
{var statearr_26464_26502 = state_26428__$1;(statearr_26464_26502[(1)] = (11));
} else
{var statearr_26465_26503 = state_26428__$1;(statearr_26465_26503[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (18)))
{var inst_26382 = (state_26428[(17)]);var inst_26388 = (state_26428[(15)]);var inst_26383 = (state_26428[(16)]);var inst_26405 = cljs.core.empty_QMARK_.call(null,inst_26383);var inst_26406 = inst_26382.call(null,inst_26388);var inst_26407 = cljs.core.not.call(null,inst_26406);var inst_26408 = (inst_26405) && (inst_26407);var state_26428__$1 = state_26428;var statearr_26466_26504 = state_26428__$1;(statearr_26466_26504[(2)] = inst_26408);
(statearr_26466_26504[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (8)))
{var inst_26372 = (state_26428[(7)]);var state_26428__$1 = state_26428;var statearr_26467_26505 = state_26428__$1;(statearr_26467_26505[(2)] = inst_26372);
(statearr_26467_26505[(1)] = (9));
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
});})(c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11098__auto__,c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26471[(0)] = state_machine__11099__auto__);
(statearr_26471[(1)] = (1));
return statearr_26471;
});
var state_machine__11099__auto____1 = (function (state_26428){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26428);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26472){if((e26472 instanceof Object))
{var ex__11102__auto__ = e26472;var statearr_26473_26506 = state_26428;(statearr_26473_26506[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26472;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26507 = state_26428;
state_26428 = G__26507;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26428){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11156__auto__ = (function (){var statearr_26474 = f__11155__auto__.call(null);(statearr_26474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26475);
return statearr_26474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26509 = {};return obj26509;
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
return (function (p1__26510_SHARP_){if(cljs.core.truth_(p1__26510_SHARP_.call(null,topic)))
{return p1__26510_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26510_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26633 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26633 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26634){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26634 = meta26634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26633.cljs$lang$type = true;
cljs.core.async.t26633.cljs$lang$ctorStr = "cljs.core.async/t26633";
cljs.core.async.t26633.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26633");
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26635){var self__ = this;
var _26635__$1 = this;return self__.meta26634;
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26635,meta26634__$1){var self__ = this;
var _26635__$1 = this;return (new cljs.core.async.t26633(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26634__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26633 = ((function (mults,ensure_mult){
return (function __GT_t26633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26634){return (new cljs.core.async.t26633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26634));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26633(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11154__auto___26755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26755,mults,ensure_mult,p){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26755,mults,ensure_mult,p){
return (function (state_26707){var state_val_26708 = (state_26707[(1)]);if((state_val_26708 === (7)))
{var inst_26703 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26709_26756 = state_26707__$1;(statearr_26709_26756[(2)] = inst_26703);
(statearr_26709_26756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (20)))
{var state_26707__$1 = state_26707;var statearr_26710_26757 = state_26707__$1;(statearr_26710_26757[(2)] = null);
(statearr_26710_26757[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (1)))
{var state_26707__$1 = state_26707;var statearr_26711_26758 = state_26707__$1;(statearr_26711_26758[(2)] = null);
(statearr_26711_26758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (24)))
{var inst_26686 = (state_26707[(7)]);var inst_26695 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26686);var state_26707__$1 = state_26707;var statearr_26712_26759 = state_26707__$1;(statearr_26712_26759[(2)] = inst_26695);
(statearr_26712_26759[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (4)))
{var inst_26638 = (state_26707[(8)]);var inst_26638__$1 = (state_26707[(2)]);var inst_26639 = (inst_26638__$1 == null);var state_26707__$1 = (function (){var statearr_26713 = state_26707;(statearr_26713[(8)] = inst_26638__$1);
return statearr_26713;
})();if(cljs.core.truth_(inst_26639))
{var statearr_26714_26760 = state_26707__$1;(statearr_26714_26760[(1)] = (5));
} else
{var statearr_26715_26761 = state_26707__$1;(statearr_26715_26761[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (15)))
{var inst_26680 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26716_26762 = state_26707__$1;(statearr_26716_26762[(2)] = inst_26680);
(statearr_26716_26762[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (21)))
{var inst_26700 = (state_26707[(2)]);var state_26707__$1 = (function (){var statearr_26717 = state_26707;(statearr_26717[(9)] = inst_26700);
return statearr_26717;
})();var statearr_26718_26763 = state_26707__$1;(statearr_26718_26763[(2)] = null);
(statearr_26718_26763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (13)))
{var inst_26662 = (state_26707[(10)]);var inst_26664 = cljs.core.chunked_seq_QMARK_.call(null,inst_26662);var state_26707__$1 = state_26707;if(inst_26664)
{var statearr_26719_26764 = state_26707__$1;(statearr_26719_26764[(1)] = (16));
} else
{var statearr_26720_26765 = state_26707__$1;(statearr_26720_26765[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (22)))
{var inst_26692 = (state_26707[(2)]);var state_26707__$1 = state_26707;if(cljs.core.truth_(inst_26692))
{var statearr_26721_26766 = state_26707__$1;(statearr_26721_26766[(1)] = (23));
} else
{var statearr_26722_26767 = state_26707__$1;(statearr_26722_26767[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (6)))
{var inst_26686 = (state_26707[(7)]);var inst_26638 = (state_26707[(8)]);var inst_26688 = (state_26707[(11)]);var inst_26686__$1 = topic_fn.call(null,inst_26638);var inst_26687 = cljs.core.deref.call(null,mults);var inst_26688__$1 = cljs.core.get.call(null,inst_26687,inst_26686__$1);var state_26707__$1 = (function (){var statearr_26723 = state_26707;(statearr_26723[(7)] = inst_26686__$1);
(statearr_26723[(11)] = inst_26688__$1);
return statearr_26723;
})();if(cljs.core.truth_(inst_26688__$1))
{var statearr_26724_26768 = state_26707__$1;(statearr_26724_26768[(1)] = (19));
} else
{var statearr_26725_26769 = state_26707__$1;(statearr_26725_26769[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (25)))
{var inst_26697 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26726_26770 = state_26707__$1;(statearr_26726_26770[(2)] = inst_26697);
(statearr_26726_26770[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (17)))
{var inst_26662 = (state_26707[(10)]);var inst_26671 = cljs.core.first.call(null,inst_26662);var inst_26672 = cljs.core.async.muxch_STAR_.call(null,inst_26671);var inst_26673 = cljs.core.async.close_BANG_.call(null,inst_26672);var inst_26674 = cljs.core.next.call(null,inst_26662);var inst_26648 = inst_26674;var inst_26649 = null;var inst_26650 = (0);var inst_26651 = (0);var state_26707__$1 = (function (){var statearr_26727 = state_26707;(statearr_26727[(12)] = inst_26673);
(statearr_26727[(13)] = inst_26651);
(statearr_26727[(14)] = inst_26648);
(statearr_26727[(15)] = inst_26650);
(statearr_26727[(16)] = inst_26649);
return statearr_26727;
})();var statearr_26728_26771 = state_26707__$1;(statearr_26728_26771[(2)] = null);
(statearr_26728_26771[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (3)))
{var inst_26705 = (state_26707[(2)]);var state_26707__$1 = state_26707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26707__$1,inst_26705);
} else
{if((state_val_26708 === (12)))
{var inst_26682 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26729_26772 = state_26707__$1;(statearr_26729_26772[(2)] = inst_26682);
(statearr_26729_26772[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (2)))
{var state_26707__$1 = state_26707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26707__$1,(4),ch);
} else
{if((state_val_26708 === (23)))
{var state_26707__$1 = state_26707;var statearr_26730_26773 = state_26707__$1;(statearr_26730_26773[(2)] = null);
(statearr_26730_26773[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (19)))
{var inst_26638 = (state_26707[(8)]);var inst_26688 = (state_26707[(11)]);var inst_26690 = cljs.core.async.muxch_STAR_.call(null,inst_26688);var state_26707__$1 = state_26707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26707__$1,(22),inst_26690,inst_26638);
} else
{if((state_val_26708 === (11)))
{var inst_26648 = (state_26707[(14)]);var inst_26662 = (state_26707[(10)]);var inst_26662__$1 = cljs.core.seq.call(null,inst_26648);var state_26707__$1 = (function (){var statearr_26731 = state_26707;(statearr_26731[(10)] = inst_26662__$1);
return statearr_26731;
})();if(inst_26662__$1)
{var statearr_26732_26774 = state_26707__$1;(statearr_26732_26774[(1)] = (13));
} else
{var statearr_26733_26775 = state_26707__$1;(statearr_26733_26775[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (9)))
{var inst_26684 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26734_26776 = state_26707__$1;(statearr_26734_26776[(2)] = inst_26684);
(statearr_26734_26776[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (5)))
{var inst_26645 = cljs.core.deref.call(null,mults);var inst_26646 = cljs.core.vals.call(null,inst_26645);var inst_26647 = cljs.core.seq.call(null,inst_26646);var inst_26648 = inst_26647;var inst_26649 = null;var inst_26650 = (0);var inst_26651 = (0);var state_26707__$1 = (function (){var statearr_26735 = state_26707;(statearr_26735[(13)] = inst_26651);
(statearr_26735[(14)] = inst_26648);
(statearr_26735[(15)] = inst_26650);
(statearr_26735[(16)] = inst_26649);
return statearr_26735;
})();var statearr_26736_26777 = state_26707__$1;(statearr_26736_26777[(2)] = null);
(statearr_26736_26777[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (14)))
{var state_26707__$1 = state_26707;var statearr_26740_26778 = state_26707__$1;(statearr_26740_26778[(2)] = null);
(statearr_26740_26778[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (16)))
{var inst_26662 = (state_26707[(10)]);var inst_26666 = cljs.core.chunk_first.call(null,inst_26662);var inst_26667 = cljs.core.chunk_rest.call(null,inst_26662);var inst_26668 = cljs.core.count.call(null,inst_26666);var inst_26648 = inst_26667;var inst_26649 = inst_26666;var inst_26650 = inst_26668;var inst_26651 = (0);var state_26707__$1 = (function (){var statearr_26741 = state_26707;(statearr_26741[(13)] = inst_26651);
(statearr_26741[(14)] = inst_26648);
(statearr_26741[(15)] = inst_26650);
(statearr_26741[(16)] = inst_26649);
return statearr_26741;
})();var statearr_26742_26779 = state_26707__$1;(statearr_26742_26779[(2)] = null);
(statearr_26742_26779[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (10)))
{var inst_26651 = (state_26707[(13)]);var inst_26648 = (state_26707[(14)]);var inst_26650 = (state_26707[(15)]);var inst_26649 = (state_26707[(16)]);var inst_26656 = cljs.core._nth.call(null,inst_26649,inst_26651);var inst_26657 = cljs.core.async.muxch_STAR_.call(null,inst_26656);var inst_26658 = cljs.core.async.close_BANG_.call(null,inst_26657);var inst_26659 = (inst_26651 + (1));var tmp26737 = inst_26648;var tmp26738 = inst_26650;var tmp26739 = inst_26649;var inst_26648__$1 = tmp26737;var inst_26649__$1 = tmp26739;var inst_26650__$1 = tmp26738;var inst_26651__$1 = inst_26659;var state_26707__$1 = (function (){var statearr_26743 = state_26707;(statearr_26743[(13)] = inst_26651__$1);
(statearr_26743[(14)] = inst_26648__$1);
(statearr_26743[(15)] = inst_26650__$1);
(statearr_26743[(16)] = inst_26649__$1);
(statearr_26743[(17)] = inst_26658);
return statearr_26743;
})();var statearr_26744_26780 = state_26707__$1;(statearr_26744_26780[(2)] = null);
(statearr_26744_26780[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (18)))
{var inst_26677 = (state_26707[(2)]);var state_26707__$1 = state_26707;var statearr_26745_26781 = state_26707__$1;(statearr_26745_26781[(2)] = inst_26677);
(statearr_26745_26781[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26708 === (8)))
{var inst_26651 = (state_26707[(13)]);var inst_26650 = (state_26707[(15)]);var inst_26653 = (inst_26651 < inst_26650);var inst_26654 = inst_26653;var state_26707__$1 = state_26707;if(cljs.core.truth_(inst_26654))
{var statearr_26746_26782 = state_26707__$1;(statearr_26746_26782[(1)] = (10));
} else
{var statearr_26747_26783 = state_26707__$1;(statearr_26747_26783[(1)] = (11));
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
});})(c__11154__auto___26755,mults,ensure_mult,p))
;return ((function (switch__11098__auto__,c__11154__auto___26755,mults,ensure_mult,p){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26751[(0)] = state_machine__11099__auto__);
(statearr_26751[(1)] = (1));
return statearr_26751;
});
var state_machine__11099__auto____1 = (function (state_26707){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26707);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26752){if((e26752 instanceof Object))
{var ex__11102__auto__ = e26752;var statearr_26753_26784 = state_26707;(statearr_26753_26784[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26785 = state_26707;
state_26707 = G__26785;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26707){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26755,mults,ensure_mult,p))
})();var state__11156__auto__ = (function (){var statearr_26754 = f__11155__auto__.call(null);(statearr_26754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26755);
return statearr_26754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26755,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11154__auto___26922 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26892){var state_val_26893 = (state_26892[(1)]);if((state_val_26893 === (7)))
{var state_26892__$1 = state_26892;var statearr_26894_26923 = state_26892__$1;(statearr_26894_26923[(2)] = null);
(statearr_26894_26923[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (1)))
{var state_26892__$1 = state_26892;var statearr_26895_26924 = state_26892__$1;(statearr_26895_26924[(2)] = null);
(statearr_26895_26924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (4)))
{var inst_26856 = (state_26892[(7)]);var inst_26858 = (inst_26856 < cnt);var state_26892__$1 = state_26892;if(cljs.core.truth_(inst_26858))
{var statearr_26896_26925 = state_26892__$1;(statearr_26896_26925[(1)] = (6));
} else
{var statearr_26897_26926 = state_26892__$1;(statearr_26897_26926[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (15)))
{var inst_26888 = (state_26892[(2)]);var state_26892__$1 = state_26892;var statearr_26898_26927 = state_26892__$1;(statearr_26898_26927[(2)] = inst_26888);
(statearr_26898_26927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (13)))
{var inst_26881 = cljs.core.async.close_BANG_.call(null,out);var state_26892__$1 = state_26892;var statearr_26899_26928 = state_26892__$1;(statearr_26899_26928[(2)] = inst_26881);
(statearr_26899_26928[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (6)))
{var state_26892__$1 = state_26892;var statearr_26900_26929 = state_26892__$1;(statearr_26900_26929[(2)] = null);
(statearr_26900_26929[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (3)))
{var inst_26890 = (state_26892[(2)]);var state_26892__$1 = state_26892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26892__$1,inst_26890);
} else
{if((state_val_26893 === (12)))
{var inst_26878 = (state_26892[(8)]);var inst_26878__$1 = (state_26892[(2)]);var inst_26879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26878__$1);var state_26892__$1 = (function (){var statearr_26901 = state_26892;(statearr_26901[(8)] = inst_26878__$1);
return statearr_26901;
})();if(cljs.core.truth_(inst_26879))
{var statearr_26902_26930 = state_26892__$1;(statearr_26902_26930[(1)] = (13));
} else
{var statearr_26903_26931 = state_26892__$1;(statearr_26903_26931[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (2)))
{var inst_26855 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26856 = (0);var state_26892__$1 = (function (){var statearr_26904 = state_26892;(statearr_26904[(9)] = inst_26855);
(statearr_26904[(7)] = inst_26856);
return statearr_26904;
})();var statearr_26905_26932 = state_26892__$1;(statearr_26905_26932[(2)] = null);
(statearr_26905_26932[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (11)))
{var inst_26856 = (state_26892[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26892,(10),Object,null,(9));var inst_26865 = chs__$1.call(null,inst_26856);var inst_26866 = done.call(null,inst_26856);var inst_26867 = cljs.core.async.take_BANG_.call(null,inst_26865,inst_26866);var state_26892__$1 = state_26892;var statearr_26906_26933 = state_26892__$1;(statearr_26906_26933[(2)] = inst_26867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26892__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (9)))
{var inst_26856 = (state_26892[(7)]);var inst_26869 = (state_26892[(2)]);var inst_26870 = (inst_26856 + (1));var inst_26856__$1 = inst_26870;var state_26892__$1 = (function (){var statearr_26907 = state_26892;(statearr_26907[(10)] = inst_26869);
(statearr_26907[(7)] = inst_26856__$1);
return statearr_26907;
})();var statearr_26908_26934 = state_26892__$1;(statearr_26908_26934[(2)] = null);
(statearr_26908_26934[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (5)))
{var inst_26876 = (state_26892[(2)]);var state_26892__$1 = (function (){var statearr_26909 = state_26892;(statearr_26909[(11)] = inst_26876);
return statearr_26909;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26892__$1,(12),dchan);
} else
{if((state_val_26893 === (14)))
{var inst_26878 = (state_26892[(8)]);var inst_26883 = cljs.core.apply.call(null,f,inst_26878);var state_26892__$1 = state_26892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26892__$1,(16),out,inst_26883);
} else
{if((state_val_26893 === (16)))
{var inst_26885 = (state_26892[(2)]);var state_26892__$1 = (function (){var statearr_26910 = state_26892;(statearr_26910[(12)] = inst_26885);
return statearr_26910;
})();var statearr_26911_26935 = state_26892__$1;(statearr_26911_26935[(2)] = null);
(statearr_26911_26935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (10)))
{var inst_26860 = (state_26892[(2)]);var inst_26861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26892__$1 = (function (){var statearr_26912 = state_26892;(statearr_26912[(13)] = inst_26860);
return statearr_26912;
})();var statearr_26913_26936 = state_26892__$1;(statearr_26913_26936[(2)] = inst_26861);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26892__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26893 === (8)))
{var inst_26874 = (state_26892[(2)]);var state_26892__$1 = state_26892;var statearr_26914_26937 = state_26892__$1;(statearr_26914_26937[(2)] = inst_26874);
(statearr_26914_26937[(1)] = (5));
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
});})(c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11098__auto__,c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26918[(0)] = state_machine__11099__auto__);
(statearr_26918[(1)] = (1));
return statearr_26918;
});
var state_machine__11099__auto____1 = (function (state_26892){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26892);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26919){if((e26919 instanceof Object))
{var ex__11102__auto__ = e26919;var statearr_26920_26938 = state_26892;(statearr_26920_26938[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26939 = state_26892;
state_26892 = G__26939;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26892){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11156__auto__ = (function (){var statearr_26921 = f__11155__auto__.call(null);(statearr_26921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26922);
return statearr_26921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27047,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27047,out){
return (function (state_27023){var state_val_27024 = (state_27023[(1)]);if((state_val_27024 === (7)))
{var inst_27002 = (state_27023[(7)]);var inst_27003 = (state_27023[(8)]);var inst_27002__$1 = (state_27023[(2)]);var inst_27003__$1 = cljs.core.nth.call(null,inst_27002__$1,(0),null);var inst_27004 = cljs.core.nth.call(null,inst_27002__$1,(1),null);var inst_27005 = (inst_27003__$1 == null);var state_27023__$1 = (function (){var statearr_27025 = state_27023;(statearr_27025[(9)] = inst_27004);
(statearr_27025[(7)] = inst_27002__$1);
(statearr_27025[(8)] = inst_27003__$1);
return statearr_27025;
})();if(cljs.core.truth_(inst_27005))
{var statearr_27026_27048 = state_27023__$1;(statearr_27026_27048[(1)] = (8));
} else
{var statearr_27027_27049 = state_27023__$1;(statearr_27027_27049[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (1)))
{var inst_26994 = cljs.core.vec.call(null,chs);var inst_26995 = inst_26994;var state_27023__$1 = (function (){var statearr_27028 = state_27023;(statearr_27028[(10)] = inst_26995);
return statearr_27028;
})();var statearr_27029_27050 = state_27023__$1;(statearr_27029_27050[(2)] = null);
(statearr_27029_27050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (4)))
{var inst_26995 = (state_27023[(10)]);var state_27023__$1 = state_27023;return cljs.core.async.ioc_alts_BANG_.call(null,state_27023__$1,(7),inst_26995);
} else
{if((state_val_27024 === (6)))
{var inst_27019 = (state_27023[(2)]);var state_27023__$1 = state_27023;var statearr_27030_27051 = state_27023__$1;(statearr_27030_27051[(2)] = inst_27019);
(statearr_27030_27051[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (3)))
{var inst_27021 = (state_27023[(2)]);var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else
{if((state_val_27024 === (2)))
{var inst_26995 = (state_27023[(10)]);var inst_26997 = cljs.core.count.call(null,inst_26995);var inst_26998 = (inst_26997 > (0));var state_27023__$1 = state_27023;if(cljs.core.truth_(inst_26998))
{var statearr_27032_27052 = state_27023__$1;(statearr_27032_27052[(1)] = (4));
} else
{var statearr_27033_27053 = state_27023__$1;(statearr_27033_27053[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (11)))
{var inst_26995 = (state_27023[(10)]);var inst_27012 = (state_27023[(2)]);var tmp27031 = inst_26995;var inst_26995__$1 = tmp27031;var state_27023__$1 = (function (){var statearr_27034 = state_27023;(statearr_27034[(11)] = inst_27012);
(statearr_27034[(10)] = inst_26995__$1);
return statearr_27034;
})();var statearr_27035_27054 = state_27023__$1;(statearr_27035_27054[(2)] = null);
(statearr_27035_27054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (9)))
{var inst_27003 = (state_27023[(8)]);var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(11),out,inst_27003);
} else
{if((state_val_27024 === (5)))
{var inst_27017 = cljs.core.async.close_BANG_.call(null,out);var state_27023__$1 = state_27023;var statearr_27036_27055 = state_27023__$1;(statearr_27036_27055[(2)] = inst_27017);
(statearr_27036_27055[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (10)))
{var inst_27015 = (state_27023[(2)]);var state_27023__$1 = state_27023;var statearr_27037_27056 = state_27023__$1;(statearr_27037_27056[(2)] = inst_27015);
(statearr_27037_27056[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27024 === (8)))
{var inst_27004 = (state_27023[(9)]);var inst_27002 = (state_27023[(7)]);var inst_27003 = (state_27023[(8)]);var inst_26995 = (state_27023[(10)]);var inst_27007 = (function (){var c = inst_27004;var v = inst_27003;var vec__27000 = inst_27002;var cs = inst_26995;return ((function (c,v,vec__27000,cs,inst_27004,inst_27002,inst_27003,inst_26995,state_val_27024,c__11154__auto___27047,out){
return (function (p1__26940_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26940_SHARP_);
});
;})(c,v,vec__27000,cs,inst_27004,inst_27002,inst_27003,inst_26995,state_val_27024,c__11154__auto___27047,out))
})();var inst_27008 = cljs.core.filterv.call(null,inst_27007,inst_26995);var inst_26995__$1 = inst_27008;var state_27023__$1 = (function (){var statearr_27038 = state_27023;(statearr_27038[(10)] = inst_26995__$1);
return statearr_27038;
})();var statearr_27039_27057 = state_27023__$1;(statearr_27039_27057[(2)] = null);
(statearr_27039_27057[(1)] = (2));
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
});})(c__11154__auto___27047,out))
;return ((function (switch__11098__auto__,c__11154__auto___27047,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27043 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27043[(0)] = state_machine__11099__auto__);
(statearr_27043[(1)] = (1));
return statearr_27043;
});
var state_machine__11099__auto____1 = (function (state_27023){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27023);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27044){if((e27044 instanceof Object))
{var ex__11102__auto__ = e27044;var statearr_27045_27058 = state_27023;(statearr_27045_27058[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27059 = state_27023;
state_27023 = G__27059;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27047,out))
})();var state__11156__auto__ = (function (){var statearr_27046 = f__11155__auto__.call(null);(statearr_27046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27047);
return statearr_27046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27047,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27152 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27152,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27152,out){
return (function (state_27129){var state_val_27130 = (state_27129[(1)]);if((state_val_27130 === (7)))
{var inst_27111 = (state_27129[(7)]);var inst_27111__$1 = (state_27129[(2)]);var inst_27112 = (inst_27111__$1 == null);var inst_27113 = cljs.core.not.call(null,inst_27112);var state_27129__$1 = (function (){var statearr_27131 = state_27129;(statearr_27131[(7)] = inst_27111__$1);
return statearr_27131;
})();if(inst_27113)
{var statearr_27132_27153 = state_27129__$1;(statearr_27132_27153[(1)] = (8));
} else
{var statearr_27133_27154 = state_27129__$1;(statearr_27133_27154[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (1)))
{var inst_27106 = (0);var state_27129__$1 = (function (){var statearr_27134 = state_27129;(statearr_27134[(8)] = inst_27106);
return statearr_27134;
})();var statearr_27135_27155 = state_27129__$1;(statearr_27135_27155[(2)] = null);
(statearr_27135_27155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (4)))
{var state_27129__$1 = state_27129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27129__$1,(7),ch);
} else
{if((state_val_27130 === (6)))
{var inst_27124 = (state_27129[(2)]);var state_27129__$1 = state_27129;var statearr_27136_27156 = state_27129__$1;(statearr_27136_27156[(2)] = inst_27124);
(statearr_27136_27156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (3)))
{var inst_27126 = (state_27129[(2)]);var inst_27127 = cljs.core.async.close_BANG_.call(null,out);var state_27129__$1 = (function (){var statearr_27137 = state_27129;(statearr_27137[(9)] = inst_27126);
return statearr_27137;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27129__$1,inst_27127);
} else
{if((state_val_27130 === (2)))
{var inst_27106 = (state_27129[(8)]);var inst_27108 = (inst_27106 < n);var state_27129__$1 = state_27129;if(cljs.core.truth_(inst_27108))
{var statearr_27138_27157 = state_27129__$1;(statearr_27138_27157[(1)] = (4));
} else
{var statearr_27139_27158 = state_27129__$1;(statearr_27139_27158[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (11)))
{var inst_27106 = (state_27129[(8)]);var inst_27116 = (state_27129[(2)]);var inst_27117 = (inst_27106 + (1));var inst_27106__$1 = inst_27117;var state_27129__$1 = (function (){var statearr_27140 = state_27129;(statearr_27140[(10)] = inst_27116);
(statearr_27140[(8)] = inst_27106__$1);
return statearr_27140;
})();var statearr_27141_27159 = state_27129__$1;(statearr_27141_27159[(2)] = null);
(statearr_27141_27159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (9)))
{var state_27129__$1 = state_27129;var statearr_27142_27160 = state_27129__$1;(statearr_27142_27160[(2)] = null);
(statearr_27142_27160[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (5)))
{var state_27129__$1 = state_27129;var statearr_27143_27161 = state_27129__$1;(statearr_27143_27161[(2)] = null);
(statearr_27143_27161[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (10)))
{var inst_27121 = (state_27129[(2)]);var state_27129__$1 = state_27129;var statearr_27144_27162 = state_27129__$1;(statearr_27144_27162[(2)] = inst_27121);
(statearr_27144_27162[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27130 === (8)))
{var inst_27111 = (state_27129[(7)]);var state_27129__$1 = state_27129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27129__$1,(11),out,inst_27111);
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
});})(c__11154__auto___27152,out))
;return ((function (switch__11098__auto__,c__11154__auto___27152,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27148 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27148[(0)] = state_machine__11099__auto__);
(statearr_27148[(1)] = (1));
return statearr_27148;
});
var state_machine__11099__auto____1 = (function (state_27129){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27129);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27149){if((e27149 instanceof Object))
{var ex__11102__auto__ = e27149;var statearr_27150_27163 = state_27129;(statearr_27150_27163[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27149;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27164 = state_27129;
state_27129 = G__27164;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27129){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27152,out))
})();var state__11156__auto__ = (function (){var statearr_27151 = f__11155__auto__.call(null);(statearr_27151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27152);
return statearr_27151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27152,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27172 = (function (ch,f,map_LT_,meta27173){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27173 = meta27173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27172.cljs$lang$type = true;
cljs.core.async.t27172.cljs$lang$ctorStr = "cljs.core.async/t27172";
cljs.core.async.t27172.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t27172");
});
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27175 = (function (fn1,_,meta27173,ch,f,map_LT_,meta27176){
this.fn1 = fn1;
this._ = _;
this.meta27173 = meta27173;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27176 = meta27176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27175.cljs$lang$type = true;
cljs.core.async.t27175.cljs$lang$ctorStr = "cljs.core.async/t27175";
cljs.core.async.t27175.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t27175");
});})(___$1))
;
cljs.core.async.t27175.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27165_SHARP_){return f1.call(null,(((p1__27165_SHARP_ == null))?null:self__.f.call(null,p1__27165_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27177){var self__ = this;
var _27177__$1 = this;return self__.meta27176;
});})(___$1))
;
cljs.core.async.t27175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27177,meta27176__$1){var self__ = this;
var _27177__$1 = this;return (new cljs.core.async.t27175(self__.fn1,self__._,self__.meta27173,self__.ch,self__.f,self__.map_LT_,meta27176__$1));
});})(___$1))
;
cljs.core.async.__GT_t27175 = ((function (___$1){
return (function __GT_t27175(fn1__$1,___$2,meta27173__$1,ch__$2,f__$2,map_LT___$2,meta27176){return (new cljs.core.async.t27175(fn1__$1,___$2,meta27173__$1,ch__$2,f__$2,map_LT___$2,meta27176));
});})(___$1))
;
}
return (new cljs.core.async.t27175(fn1,___$1,self__.meta27173,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27174){var self__ = this;
var _27174__$1 = this;return self__.meta27173;
});
cljs.core.async.t27172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27174,meta27173__$1){var self__ = this;
var _27174__$1 = this;return (new cljs.core.async.t27172(self__.ch,self__.f,self__.map_LT_,meta27173__$1));
});
cljs.core.async.__GT_t27172 = (function __GT_t27172(ch__$1,f__$1,map_LT___$1,meta27173){return (new cljs.core.async.t27172(ch__$1,f__$1,map_LT___$1,meta27173));
});
}
return (new cljs.core.async.t27172(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27181 = (function (ch,f,map_GT_,meta27182){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27182 = meta27182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27181.cljs$lang$type = true;
cljs.core.async.t27181.cljs$lang$ctorStr = "cljs.core.async/t27181";
cljs.core.async.t27181.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t27181");
});
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27183){var self__ = this;
var _27183__$1 = this;return self__.meta27182;
});
cljs.core.async.t27181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27183,meta27182__$1){var self__ = this;
var _27183__$1 = this;return (new cljs.core.async.t27181(self__.ch,self__.f,self__.map_GT_,meta27182__$1));
});
cljs.core.async.__GT_t27181 = (function __GT_t27181(ch__$1,f__$1,map_GT___$1,meta27182){return (new cljs.core.async.t27181(ch__$1,f__$1,map_GT___$1,meta27182));
});
}
return (new cljs.core.async.t27181(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27187 = (function (ch,p,filter_GT_,meta27188){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27188 = meta27188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27187.cljs$lang$type = true;
cljs.core.async.t27187.cljs$lang$ctorStr = "cljs.core.async/t27187";
cljs.core.async.t27187.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t27187");
});
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27189){var self__ = this;
var _27189__$1 = this;return self__.meta27188;
});
cljs.core.async.t27187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27189,meta27188__$1){var self__ = this;
var _27189__$1 = this;return (new cljs.core.async.t27187(self__.ch,self__.p,self__.filter_GT_,meta27188__$1));
});
cljs.core.async.__GT_t27187 = (function __GT_t27187(ch__$1,p__$1,filter_GT___$1,meta27188){return (new cljs.core.async.t27187(ch__$1,p__$1,filter_GT___$1,meta27188));
});
}
return (new cljs.core.async.t27187(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27272 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27272,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27272,out){
return (function (state_27251){var state_val_27252 = (state_27251[(1)]);if((state_val_27252 === (7)))
{var inst_27247 = (state_27251[(2)]);var state_27251__$1 = state_27251;var statearr_27253_27273 = state_27251__$1;(statearr_27253_27273[(2)] = inst_27247);
(statearr_27253_27273[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (1)))
{var state_27251__$1 = state_27251;var statearr_27254_27274 = state_27251__$1;(statearr_27254_27274[(2)] = null);
(statearr_27254_27274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (4)))
{var inst_27233 = (state_27251[(7)]);var inst_27233__$1 = (state_27251[(2)]);var inst_27234 = (inst_27233__$1 == null);var state_27251__$1 = (function (){var statearr_27255 = state_27251;(statearr_27255[(7)] = inst_27233__$1);
return statearr_27255;
})();if(cljs.core.truth_(inst_27234))
{var statearr_27256_27275 = state_27251__$1;(statearr_27256_27275[(1)] = (5));
} else
{var statearr_27257_27276 = state_27251__$1;(statearr_27257_27276[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (6)))
{var inst_27233 = (state_27251[(7)]);var inst_27238 = p.call(null,inst_27233);var state_27251__$1 = state_27251;if(cljs.core.truth_(inst_27238))
{var statearr_27258_27277 = state_27251__$1;(statearr_27258_27277[(1)] = (8));
} else
{var statearr_27259_27278 = state_27251__$1;(statearr_27259_27278[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (3)))
{var inst_27249 = (state_27251[(2)]);var state_27251__$1 = state_27251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else
{if((state_val_27252 === (2)))
{var state_27251__$1 = state_27251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27251__$1,(4),ch);
} else
{if((state_val_27252 === (11)))
{var inst_27241 = (state_27251[(2)]);var state_27251__$1 = state_27251;var statearr_27260_27279 = state_27251__$1;(statearr_27260_27279[(2)] = inst_27241);
(statearr_27260_27279[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (9)))
{var state_27251__$1 = state_27251;var statearr_27261_27280 = state_27251__$1;(statearr_27261_27280[(2)] = null);
(statearr_27261_27280[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (5)))
{var inst_27236 = cljs.core.async.close_BANG_.call(null,out);var state_27251__$1 = state_27251;var statearr_27262_27281 = state_27251__$1;(statearr_27262_27281[(2)] = inst_27236);
(statearr_27262_27281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (10)))
{var inst_27244 = (state_27251[(2)]);var state_27251__$1 = (function (){var statearr_27263 = state_27251;(statearr_27263[(8)] = inst_27244);
return statearr_27263;
})();var statearr_27264_27282 = state_27251__$1;(statearr_27264_27282[(2)] = null);
(statearr_27264_27282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27252 === (8)))
{var inst_27233 = (state_27251[(7)]);var state_27251__$1 = state_27251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27251__$1,(11),out,inst_27233);
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
});})(c__11154__auto___27272,out))
;return ((function (switch__11098__auto__,c__11154__auto___27272,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27268 = [null,null,null,null,null,null,null,null,null];(statearr_27268[(0)] = state_machine__11099__auto__);
(statearr_27268[(1)] = (1));
return statearr_27268;
});
var state_machine__11099__auto____1 = (function (state_27251){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27251);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27269){if((e27269 instanceof Object))
{var ex__11102__auto__ = e27269;var statearr_27270_27283 = state_27251;(statearr_27270_27283[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27269;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27284 = state_27251;
state_27251 = G__27284;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27272,out))
})();var state__11156__auto__ = (function (){var statearr_27271 = f__11155__auto__.call(null);(statearr_27271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27272);
return statearr_27271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27272,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_27450){var state_val_27451 = (state_27450[(1)]);if((state_val_27451 === (7)))
{var inst_27446 = (state_27450[(2)]);var state_27450__$1 = state_27450;var statearr_27452_27493 = state_27450__$1;(statearr_27452_27493[(2)] = inst_27446);
(statearr_27452_27493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (20)))
{var inst_27416 = (state_27450[(7)]);var inst_27427 = (state_27450[(2)]);var inst_27428 = cljs.core.next.call(null,inst_27416);var inst_27402 = inst_27428;var inst_27403 = null;var inst_27404 = (0);var inst_27405 = (0);var state_27450__$1 = (function (){var statearr_27453 = state_27450;(statearr_27453[(8)] = inst_27402);
(statearr_27453[(9)] = inst_27427);
(statearr_27453[(10)] = inst_27403);
(statearr_27453[(11)] = inst_27404);
(statearr_27453[(12)] = inst_27405);
return statearr_27453;
})();var statearr_27454_27494 = state_27450__$1;(statearr_27454_27494[(2)] = null);
(statearr_27454_27494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (1)))
{var state_27450__$1 = state_27450;var statearr_27455_27495 = state_27450__$1;(statearr_27455_27495[(2)] = null);
(statearr_27455_27495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (4)))
{var inst_27391 = (state_27450[(13)]);var inst_27391__$1 = (state_27450[(2)]);var inst_27392 = (inst_27391__$1 == null);var state_27450__$1 = (function (){var statearr_27456 = state_27450;(statearr_27456[(13)] = inst_27391__$1);
return statearr_27456;
})();if(cljs.core.truth_(inst_27392))
{var statearr_27457_27496 = state_27450__$1;(statearr_27457_27496[(1)] = (5));
} else
{var statearr_27458_27497 = state_27450__$1;(statearr_27458_27497[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (15)))
{var state_27450__$1 = state_27450;var statearr_27462_27498 = state_27450__$1;(statearr_27462_27498[(2)] = null);
(statearr_27462_27498[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (21)))
{var state_27450__$1 = state_27450;var statearr_27463_27499 = state_27450__$1;(statearr_27463_27499[(2)] = null);
(statearr_27463_27499[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (13)))
{var inst_27402 = (state_27450[(8)]);var inst_27403 = (state_27450[(10)]);var inst_27404 = (state_27450[(11)]);var inst_27405 = (state_27450[(12)]);var inst_27412 = (state_27450[(2)]);var inst_27413 = (inst_27405 + (1));var tmp27459 = inst_27402;var tmp27460 = inst_27403;var tmp27461 = inst_27404;var inst_27402__$1 = tmp27459;var inst_27403__$1 = tmp27460;var inst_27404__$1 = tmp27461;var inst_27405__$1 = inst_27413;var state_27450__$1 = (function (){var statearr_27464 = state_27450;(statearr_27464[(8)] = inst_27402__$1);
(statearr_27464[(10)] = inst_27403__$1);
(statearr_27464[(11)] = inst_27404__$1);
(statearr_27464[(14)] = inst_27412);
(statearr_27464[(12)] = inst_27405__$1);
return statearr_27464;
})();var statearr_27465_27500 = state_27450__$1;(statearr_27465_27500[(2)] = null);
(statearr_27465_27500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (22)))
{var state_27450__$1 = state_27450;var statearr_27466_27501 = state_27450__$1;(statearr_27466_27501[(2)] = null);
(statearr_27466_27501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (6)))
{var inst_27391 = (state_27450[(13)]);var inst_27400 = f.call(null,inst_27391);var inst_27401 = cljs.core.seq.call(null,inst_27400);var inst_27402 = inst_27401;var inst_27403 = null;var inst_27404 = (0);var inst_27405 = (0);var state_27450__$1 = (function (){var statearr_27467 = state_27450;(statearr_27467[(8)] = inst_27402);
(statearr_27467[(10)] = inst_27403);
(statearr_27467[(11)] = inst_27404);
(statearr_27467[(12)] = inst_27405);
return statearr_27467;
})();var statearr_27468_27502 = state_27450__$1;(statearr_27468_27502[(2)] = null);
(statearr_27468_27502[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (17)))
{var inst_27416 = (state_27450[(7)]);var inst_27420 = cljs.core.chunk_first.call(null,inst_27416);var inst_27421 = cljs.core.chunk_rest.call(null,inst_27416);var inst_27422 = cljs.core.count.call(null,inst_27420);var inst_27402 = inst_27421;var inst_27403 = inst_27420;var inst_27404 = inst_27422;var inst_27405 = (0);var state_27450__$1 = (function (){var statearr_27469 = state_27450;(statearr_27469[(8)] = inst_27402);
(statearr_27469[(10)] = inst_27403);
(statearr_27469[(11)] = inst_27404);
(statearr_27469[(12)] = inst_27405);
return statearr_27469;
})();var statearr_27470_27503 = state_27450__$1;(statearr_27470_27503[(2)] = null);
(statearr_27470_27503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (3)))
{var inst_27448 = (state_27450[(2)]);var state_27450__$1 = state_27450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else
{if((state_val_27451 === (12)))
{var inst_27436 = (state_27450[(2)]);var state_27450__$1 = state_27450;var statearr_27471_27504 = state_27450__$1;(statearr_27471_27504[(2)] = inst_27436);
(statearr_27471_27504[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (2)))
{var state_27450__$1 = state_27450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(4),in$);
} else
{if((state_val_27451 === (23)))
{var inst_27444 = (state_27450[(2)]);var state_27450__$1 = state_27450;var statearr_27472_27505 = state_27450__$1;(statearr_27472_27505[(2)] = inst_27444);
(statearr_27472_27505[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (19)))
{var inst_27431 = (state_27450[(2)]);var state_27450__$1 = state_27450;var statearr_27473_27506 = state_27450__$1;(statearr_27473_27506[(2)] = inst_27431);
(statearr_27473_27506[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (11)))
{var inst_27402 = (state_27450[(8)]);var inst_27416 = (state_27450[(7)]);var inst_27416__$1 = cljs.core.seq.call(null,inst_27402);var state_27450__$1 = (function (){var statearr_27474 = state_27450;(statearr_27474[(7)] = inst_27416__$1);
return statearr_27474;
})();if(inst_27416__$1)
{var statearr_27475_27507 = state_27450__$1;(statearr_27475_27507[(1)] = (14));
} else
{var statearr_27476_27508 = state_27450__$1;(statearr_27476_27508[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (9)))
{var inst_27438 = (state_27450[(2)]);var inst_27439 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27450__$1 = (function (){var statearr_27477 = state_27450;(statearr_27477[(15)] = inst_27438);
return statearr_27477;
})();if(cljs.core.truth_(inst_27439))
{var statearr_27478_27509 = state_27450__$1;(statearr_27478_27509[(1)] = (21));
} else
{var statearr_27479_27510 = state_27450__$1;(statearr_27479_27510[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (5)))
{var inst_27394 = cljs.core.async.close_BANG_.call(null,out);var state_27450__$1 = state_27450;var statearr_27480_27511 = state_27450__$1;(statearr_27480_27511[(2)] = inst_27394);
(statearr_27480_27511[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (14)))
{var inst_27416 = (state_27450[(7)]);var inst_27418 = cljs.core.chunked_seq_QMARK_.call(null,inst_27416);var state_27450__$1 = state_27450;if(inst_27418)
{var statearr_27481_27512 = state_27450__$1;(statearr_27481_27512[(1)] = (17));
} else
{var statearr_27482_27513 = state_27450__$1;(statearr_27482_27513[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (16)))
{var inst_27434 = (state_27450[(2)]);var state_27450__$1 = state_27450;var statearr_27483_27514 = state_27450__$1;(statearr_27483_27514[(2)] = inst_27434);
(statearr_27483_27514[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27451 === (10)))
{var inst_27403 = (state_27450[(10)]);var inst_27405 = (state_27450[(12)]);var inst_27410 = cljs.core._nth.call(null,inst_27403,inst_27405);var state_27450__$1 = state_27450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(13),out,inst_27410);
} else
{if((state_val_27451 === (18)))
{var inst_27416 = (state_27450[(7)]);var inst_27425 = cljs.core.first.call(null,inst_27416);var state_27450__$1 = state_27450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(20),out,inst_27425);
} else
{if((state_val_27451 === (8)))
{var inst_27404 = (state_27450[(11)]);var inst_27405 = (state_27450[(12)]);var inst_27407 = (inst_27405 < inst_27404);var inst_27408 = inst_27407;var state_27450__$1 = state_27450;if(cljs.core.truth_(inst_27408))
{var statearr_27484_27515 = state_27450__$1;(statearr_27484_27515[(1)] = (10));
} else
{var statearr_27485_27516 = state_27450__$1;(statearr_27485_27516[(1)] = (11));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27489[(0)] = state_machine__11099__auto__);
(statearr_27489[(1)] = (1));
return statearr_27489;
});
var state_machine__11099__auto____1 = (function (state_27450){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27450);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object))
{var ex__11102__auto__ = e27490;var statearr_27491_27517 = state_27450;(statearr_27491_27517[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27518 = state_27450;
state_27450 = G__27518;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_27492 = f__11155__auto__.call(null);(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_27492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27615,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27615,out){
return (function (state_27590){var state_val_27591 = (state_27590[(1)]);if((state_val_27591 === (7)))
{var inst_27585 = (state_27590[(2)]);var state_27590__$1 = state_27590;var statearr_27592_27616 = state_27590__$1;(statearr_27592_27616[(2)] = inst_27585);
(statearr_27592_27616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (1)))
{var inst_27567 = null;var state_27590__$1 = (function (){var statearr_27593 = state_27590;(statearr_27593[(7)] = inst_27567);
return statearr_27593;
})();var statearr_27594_27617 = state_27590__$1;(statearr_27594_27617[(2)] = null);
(statearr_27594_27617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (4)))
{var inst_27570 = (state_27590[(8)]);var inst_27570__$1 = (state_27590[(2)]);var inst_27571 = (inst_27570__$1 == null);var inst_27572 = cljs.core.not.call(null,inst_27571);var state_27590__$1 = (function (){var statearr_27595 = state_27590;(statearr_27595[(8)] = inst_27570__$1);
return statearr_27595;
})();if(inst_27572)
{var statearr_27596_27618 = state_27590__$1;(statearr_27596_27618[(1)] = (5));
} else
{var statearr_27597_27619 = state_27590__$1;(statearr_27597_27619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (6)))
{var state_27590__$1 = state_27590;var statearr_27598_27620 = state_27590__$1;(statearr_27598_27620[(2)] = null);
(statearr_27598_27620[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (3)))
{var inst_27587 = (state_27590[(2)]);var inst_27588 = cljs.core.async.close_BANG_.call(null,out);var state_27590__$1 = (function (){var statearr_27599 = state_27590;(statearr_27599[(9)] = inst_27587);
return statearr_27599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27590__$1,inst_27588);
} else
{if((state_val_27591 === (2)))
{var state_27590__$1 = state_27590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27590__$1,(4),ch);
} else
{if((state_val_27591 === (11)))
{var inst_27570 = (state_27590[(8)]);var inst_27579 = (state_27590[(2)]);var inst_27567 = inst_27570;var state_27590__$1 = (function (){var statearr_27600 = state_27590;(statearr_27600[(10)] = inst_27579);
(statearr_27600[(7)] = inst_27567);
return statearr_27600;
})();var statearr_27601_27621 = state_27590__$1;(statearr_27601_27621[(2)] = null);
(statearr_27601_27621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (9)))
{var inst_27570 = (state_27590[(8)]);var state_27590__$1 = state_27590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27590__$1,(11),out,inst_27570);
} else
{if((state_val_27591 === (5)))
{var inst_27570 = (state_27590[(8)]);var inst_27567 = (state_27590[(7)]);var inst_27574 = cljs.core._EQ_.call(null,inst_27570,inst_27567);var state_27590__$1 = state_27590;if(inst_27574)
{var statearr_27603_27622 = state_27590__$1;(statearr_27603_27622[(1)] = (8));
} else
{var statearr_27604_27623 = state_27590__$1;(statearr_27604_27623[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (10)))
{var inst_27582 = (state_27590[(2)]);var state_27590__$1 = state_27590;var statearr_27605_27624 = state_27590__$1;(statearr_27605_27624[(2)] = inst_27582);
(statearr_27605_27624[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27591 === (8)))
{var inst_27567 = (state_27590[(7)]);var tmp27602 = inst_27567;var inst_27567__$1 = tmp27602;var state_27590__$1 = (function (){var statearr_27606 = state_27590;(statearr_27606[(7)] = inst_27567__$1);
return statearr_27606;
})();var statearr_27607_27625 = state_27590__$1;(statearr_27607_27625[(2)] = null);
(statearr_27607_27625[(1)] = (2));
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
});})(c__11154__auto___27615,out))
;return ((function (switch__11098__auto__,c__11154__auto___27615,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27611 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27611[(0)] = state_machine__11099__auto__);
(statearr_27611[(1)] = (1));
return statearr_27611;
});
var state_machine__11099__auto____1 = (function (state_27590){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27590);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27612){if((e27612 instanceof Object))
{var ex__11102__auto__ = e27612;var statearr_27613_27626 = state_27590;(statearr_27613_27626[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27627 = state_27590;
state_27590 = G__27627;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27590){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27615,out))
})();var state__11156__auto__ = (function (){var statearr_27614 = f__11155__auto__.call(null);(statearr_27614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27615);
return statearr_27614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27615,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27762,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27762,out){
return (function (state_27732){var state_val_27733 = (state_27732[(1)]);if((state_val_27733 === (7)))
{var inst_27728 = (state_27732[(2)]);var state_27732__$1 = state_27732;var statearr_27734_27763 = state_27732__$1;(statearr_27734_27763[(2)] = inst_27728);
(statearr_27734_27763[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (1)))
{var inst_27695 = (new Array(n));var inst_27696 = inst_27695;var inst_27697 = (0);var state_27732__$1 = (function (){var statearr_27735 = state_27732;(statearr_27735[(7)] = inst_27696);
(statearr_27735[(8)] = inst_27697);
return statearr_27735;
})();var statearr_27736_27764 = state_27732__$1;(statearr_27736_27764[(2)] = null);
(statearr_27736_27764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (4)))
{var inst_27700 = (state_27732[(9)]);var inst_27700__$1 = (state_27732[(2)]);var inst_27701 = (inst_27700__$1 == null);var inst_27702 = cljs.core.not.call(null,inst_27701);var state_27732__$1 = (function (){var statearr_27737 = state_27732;(statearr_27737[(9)] = inst_27700__$1);
return statearr_27737;
})();if(inst_27702)
{var statearr_27738_27765 = state_27732__$1;(statearr_27738_27765[(1)] = (5));
} else
{var statearr_27739_27766 = state_27732__$1;(statearr_27739_27766[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (15)))
{var inst_27722 = (state_27732[(2)]);var state_27732__$1 = state_27732;var statearr_27740_27767 = state_27732__$1;(statearr_27740_27767[(2)] = inst_27722);
(statearr_27740_27767[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (13)))
{var state_27732__$1 = state_27732;var statearr_27741_27768 = state_27732__$1;(statearr_27741_27768[(2)] = null);
(statearr_27741_27768[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (6)))
{var inst_27697 = (state_27732[(8)]);var inst_27718 = (inst_27697 > (0));var state_27732__$1 = state_27732;if(cljs.core.truth_(inst_27718))
{var statearr_27742_27769 = state_27732__$1;(statearr_27742_27769[(1)] = (12));
} else
{var statearr_27743_27770 = state_27732__$1;(statearr_27743_27770[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (3)))
{var inst_27730 = (state_27732[(2)]);var state_27732__$1 = state_27732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27732__$1,inst_27730);
} else
{if((state_val_27733 === (12)))
{var inst_27696 = (state_27732[(7)]);var inst_27720 = cljs.core.vec.call(null,inst_27696);var state_27732__$1 = state_27732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27732__$1,(15),out,inst_27720);
} else
{if((state_val_27733 === (2)))
{var state_27732__$1 = state_27732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27732__$1,(4),ch);
} else
{if((state_val_27733 === (11)))
{var inst_27712 = (state_27732[(2)]);var inst_27713 = (new Array(n));var inst_27696 = inst_27713;var inst_27697 = (0);var state_27732__$1 = (function (){var statearr_27744 = state_27732;(statearr_27744[(7)] = inst_27696);
(statearr_27744[(8)] = inst_27697);
(statearr_27744[(10)] = inst_27712);
return statearr_27744;
})();var statearr_27745_27771 = state_27732__$1;(statearr_27745_27771[(2)] = null);
(statearr_27745_27771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (9)))
{var inst_27696 = (state_27732[(7)]);var inst_27710 = cljs.core.vec.call(null,inst_27696);var state_27732__$1 = state_27732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27732__$1,(11),out,inst_27710);
} else
{if((state_val_27733 === (5)))
{var inst_27700 = (state_27732[(9)]);var inst_27696 = (state_27732[(7)]);var inst_27697 = (state_27732[(8)]);var inst_27705 = (state_27732[(11)]);var inst_27704 = (inst_27696[inst_27697] = inst_27700);var inst_27705__$1 = (inst_27697 + (1));var inst_27706 = (inst_27705__$1 < n);var state_27732__$1 = (function (){var statearr_27746 = state_27732;(statearr_27746[(12)] = inst_27704);
(statearr_27746[(11)] = inst_27705__$1);
return statearr_27746;
})();if(cljs.core.truth_(inst_27706))
{var statearr_27747_27772 = state_27732__$1;(statearr_27747_27772[(1)] = (8));
} else
{var statearr_27748_27773 = state_27732__$1;(statearr_27748_27773[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (14)))
{var inst_27725 = (state_27732[(2)]);var inst_27726 = cljs.core.async.close_BANG_.call(null,out);var state_27732__$1 = (function (){var statearr_27750 = state_27732;(statearr_27750[(13)] = inst_27725);
return statearr_27750;
})();var statearr_27751_27774 = state_27732__$1;(statearr_27751_27774[(2)] = inst_27726);
(statearr_27751_27774[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (10)))
{var inst_27716 = (state_27732[(2)]);var state_27732__$1 = state_27732;var statearr_27752_27775 = state_27732__$1;(statearr_27752_27775[(2)] = inst_27716);
(statearr_27752_27775[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27733 === (8)))
{var inst_27696 = (state_27732[(7)]);var inst_27705 = (state_27732[(11)]);var tmp27749 = inst_27696;var inst_27696__$1 = tmp27749;var inst_27697 = inst_27705;var state_27732__$1 = (function (){var statearr_27753 = state_27732;(statearr_27753[(7)] = inst_27696__$1);
(statearr_27753[(8)] = inst_27697);
return statearr_27753;
})();var statearr_27754_27776 = state_27732__$1;(statearr_27754_27776[(2)] = null);
(statearr_27754_27776[(1)] = (2));
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
});})(c__11154__auto___27762,out))
;return ((function (switch__11098__auto__,c__11154__auto___27762,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27758[(0)] = state_machine__11099__auto__);
(statearr_27758[(1)] = (1));
return statearr_27758;
});
var state_machine__11099__auto____1 = (function (state_27732){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27732);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27759){if((e27759 instanceof Object))
{var ex__11102__auto__ = e27759;var statearr_27760_27777 = state_27732;(statearr_27760_27777[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27778 = state_27732;
state_27732 = G__27778;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27732){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27762,out))
})();var state__11156__auto__ = (function (){var statearr_27761 = f__11155__auto__.call(null);(statearr_27761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27762);
return statearr_27761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27762,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27921,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27921,out){
return (function (state_27891){var state_val_27892 = (state_27891[(1)]);if((state_val_27892 === (7)))
{var inst_27887 = (state_27891[(2)]);var state_27891__$1 = state_27891;var statearr_27893_27922 = state_27891__$1;(statearr_27893_27922[(2)] = inst_27887);
(statearr_27893_27922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (1)))
{var inst_27850 = [];var inst_27851 = inst_27850;var inst_27852 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27891__$1 = (function (){var statearr_27894 = state_27891;(statearr_27894[(7)] = inst_27851);
(statearr_27894[(8)] = inst_27852);
return statearr_27894;
})();var statearr_27895_27923 = state_27891__$1;(statearr_27895_27923[(2)] = null);
(statearr_27895_27923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (4)))
{var inst_27855 = (state_27891[(9)]);var inst_27855__$1 = (state_27891[(2)]);var inst_27856 = (inst_27855__$1 == null);var inst_27857 = cljs.core.not.call(null,inst_27856);var state_27891__$1 = (function (){var statearr_27896 = state_27891;(statearr_27896[(9)] = inst_27855__$1);
return statearr_27896;
})();if(inst_27857)
{var statearr_27897_27924 = state_27891__$1;(statearr_27897_27924[(1)] = (5));
} else
{var statearr_27898_27925 = state_27891__$1;(statearr_27898_27925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (15)))
{var inst_27881 = (state_27891[(2)]);var state_27891__$1 = state_27891;var statearr_27899_27926 = state_27891__$1;(statearr_27899_27926[(2)] = inst_27881);
(statearr_27899_27926[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (13)))
{var state_27891__$1 = state_27891;var statearr_27900_27927 = state_27891__$1;(statearr_27900_27927[(2)] = null);
(statearr_27900_27927[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (6)))
{var inst_27851 = (state_27891[(7)]);var inst_27876 = inst_27851.length;var inst_27877 = (inst_27876 > (0));var state_27891__$1 = state_27891;if(cljs.core.truth_(inst_27877))
{var statearr_27901_27928 = state_27891__$1;(statearr_27901_27928[(1)] = (12));
} else
{var statearr_27902_27929 = state_27891__$1;(statearr_27902_27929[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (3)))
{var inst_27889 = (state_27891[(2)]);var state_27891__$1 = state_27891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27891__$1,inst_27889);
} else
{if((state_val_27892 === (12)))
{var inst_27851 = (state_27891[(7)]);var inst_27879 = cljs.core.vec.call(null,inst_27851);var state_27891__$1 = state_27891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27891__$1,(15),out,inst_27879);
} else
{if((state_val_27892 === (2)))
{var state_27891__$1 = state_27891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27891__$1,(4),ch);
} else
{if((state_val_27892 === (11)))
{var inst_27855 = (state_27891[(9)]);var inst_27859 = (state_27891[(10)]);var inst_27869 = (state_27891[(2)]);var inst_27870 = [];var inst_27871 = inst_27870.push(inst_27855);var inst_27851 = inst_27870;var inst_27852 = inst_27859;var state_27891__$1 = (function (){var statearr_27903 = state_27891;(statearr_27903[(7)] = inst_27851);
(statearr_27903[(8)] = inst_27852);
(statearr_27903[(11)] = inst_27869);
(statearr_27903[(12)] = inst_27871);
return statearr_27903;
})();var statearr_27904_27930 = state_27891__$1;(statearr_27904_27930[(2)] = null);
(statearr_27904_27930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (9)))
{var inst_27851 = (state_27891[(7)]);var inst_27867 = cljs.core.vec.call(null,inst_27851);var state_27891__$1 = state_27891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27891__$1,(11),out,inst_27867);
} else
{if((state_val_27892 === (5)))
{var inst_27852 = (state_27891[(8)]);var inst_27855 = (state_27891[(9)]);var inst_27859 = (state_27891[(10)]);var inst_27859__$1 = f.call(null,inst_27855);var inst_27860 = cljs.core._EQ_.call(null,inst_27859__$1,inst_27852);var inst_27861 = cljs.core.keyword_identical_QMARK_.call(null,inst_27852,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27862 = (inst_27860) || (inst_27861);var state_27891__$1 = (function (){var statearr_27905 = state_27891;(statearr_27905[(10)] = inst_27859__$1);
return statearr_27905;
})();if(cljs.core.truth_(inst_27862))
{var statearr_27906_27931 = state_27891__$1;(statearr_27906_27931[(1)] = (8));
} else
{var statearr_27907_27932 = state_27891__$1;(statearr_27907_27932[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (14)))
{var inst_27884 = (state_27891[(2)]);var inst_27885 = cljs.core.async.close_BANG_.call(null,out);var state_27891__$1 = (function (){var statearr_27909 = state_27891;(statearr_27909[(13)] = inst_27884);
return statearr_27909;
})();var statearr_27910_27933 = state_27891__$1;(statearr_27910_27933[(2)] = inst_27885);
(statearr_27910_27933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (10)))
{var inst_27874 = (state_27891[(2)]);var state_27891__$1 = state_27891;var statearr_27911_27934 = state_27891__$1;(statearr_27911_27934[(2)] = inst_27874);
(statearr_27911_27934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27892 === (8)))
{var inst_27851 = (state_27891[(7)]);var inst_27855 = (state_27891[(9)]);var inst_27859 = (state_27891[(10)]);var inst_27864 = inst_27851.push(inst_27855);var tmp27908 = inst_27851;var inst_27851__$1 = tmp27908;var inst_27852 = inst_27859;var state_27891__$1 = (function (){var statearr_27912 = state_27891;(statearr_27912[(7)] = inst_27851__$1);
(statearr_27912[(8)] = inst_27852);
(statearr_27912[(14)] = inst_27864);
return statearr_27912;
})();var statearr_27913_27935 = state_27891__$1;(statearr_27913_27935[(2)] = null);
(statearr_27913_27935[(1)] = (2));
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
});})(c__11154__auto___27921,out))
;return ((function (switch__11098__auto__,c__11154__auto___27921,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27917[(0)] = state_machine__11099__auto__);
(statearr_27917[(1)] = (1));
return statearr_27917;
});
var state_machine__11099__auto____1 = (function (state_27891){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27891);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27918){if((e27918 instanceof Object))
{var ex__11102__auto__ = e27918;var statearr_27919_27936 = state_27891;(statearr_27919_27936[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27937 = state_27891;
state_27891 = G__27937;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27891){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27921,out))
})();var state__11156__auto__ = (function (){var statearr_27920 = f__11155__auto__.call(null);(statearr_27920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27921);
return statearr_27920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27921,out))
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
