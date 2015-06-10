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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23136 = (function (f,fn_handler,meta23137){
this.f = f;
this.fn_handler = fn_handler;
this.meta23137 = meta23137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23136.cljs$lang$type = true;
cljs.core.async.t23136.cljs$lang$ctorStr = "cljs.core.async/t23136";
cljs.core.async.t23136.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23136");
});
cljs.core.async.t23136.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23138){var self__ = this;
var _23138__$1 = this;return self__.meta23137;
});
cljs.core.async.t23136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23138,meta23137__$1){var self__ = this;
var _23138__$1 = this;return (new cljs.core.async.t23136(self__.f,self__.fn_handler,meta23137__$1));
});
cljs.core.async.__GT_t23136 = (function __GT_t23136(f__$1,fn_handler__$1,meta23137){return (new cljs.core.async.t23136(f__$1,fn_handler__$1,meta23137));
});
}
return (new cljs.core.async.t23136(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23140 = buff;if(G__23140)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23140.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23140);
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
{var val_23141 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23141);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23141,ret){
return (function (){return fn1.call(null,val_23141);
});})(val_23141,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23142 = n;var x_23143 = (0);while(true){
if((x_23143 < n__4508__auto___23142))
{(a[x_23143] = (0));
{
var G__23144 = (x_23143 + (1));
x_23143 = G__23144;
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
var G__23145 = (i + (1));
i = G__23145;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23149 = (function (flag,alt_flag,meta23150){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23150 = meta23150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23149.cljs$lang$type = true;
cljs.core.async.t23149.cljs$lang$ctorStr = "cljs.core.async/t23149";
cljs.core.async.t23149.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23149");
});})(flag))
;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23151){var self__ = this;
var _23151__$1 = this;return self__.meta23150;
});})(flag))
;
cljs.core.async.t23149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23151,meta23150__$1){var self__ = this;
var _23151__$1 = this;return (new cljs.core.async.t23149(self__.flag,self__.alt_flag,meta23150__$1));
});})(flag))
;
cljs.core.async.__GT_t23149 = ((function (flag){
return (function __GT_t23149(flag__$1,alt_flag__$1,meta23150){return (new cljs.core.async.t23149(flag__$1,alt_flag__$1,meta23150));
});})(flag))
;
}
return (new cljs.core.async.t23149(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23155 = (function (cb,flag,alt_handler,meta23156){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23156 = meta23156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23155.cljs$lang$type = true;
cljs.core.async.t23155.cljs$lang$ctorStr = "cljs.core.async/t23155";
cljs.core.async.t23155.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23155");
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23157){var self__ = this;
var _23157__$1 = this;return self__.meta23156;
});
cljs.core.async.t23155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23157,meta23156__$1){var self__ = this;
var _23157__$1 = this;return (new cljs.core.async.t23155(self__.cb,self__.flag,self__.alt_handler,meta23156__$1));
});
cljs.core.async.__GT_t23155 = (function __GT_t23155(cb__$1,flag__$1,alt_handler__$1,meta23156){return (new cljs.core.async.t23155(cb__$1,flag__$1,alt_handler__$1,meta23156));
});
}
return (new cljs.core.async.t23155(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23158_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23158_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23159_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23159_SHARP_,port], null));
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
var G__23160 = (i + (1));
i = G__23160;
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
var alts_BANG___delegate = function (ports,p__23161){var map__23163 = p__23161;var map__23163__$1 = ((cljs.core.seq_QMARK_.call(null,map__23163))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);var opts = map__23163__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23161 = null;if (arguments.length > 1) {
  p__23161 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23161);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23164){
var ports = cljs.core.first(arglist__23164);
var p__23161 = cljs.core.rest(arglist__23164);
return alts_BANG___delegate(ports,p__23161);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23259 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23259){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23259){
return (function (state_23235){var state_val_23236 = (state_23235[(1)]);if((state_val_23236 === (7)))
{var inst_23231 = (state_23235[(2)]);var state_23235__$1 = state_23235;var statearr_23237_23260 = state_23235__$1;(statearr_23237_23260[(2)] = inst_23231);
(statearr_23237_23260[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (1)))
{var state_23235__$1 = state_23235;var statearr_23238_23261 = state_23235__$1;(statearr_23238_23261[(2)] = null);
(statearr_23238_23261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (4)))
{var inst_23214 = (state_23235[(7)]);var inst_23214__$1 = (state_23235[(2)]);var inst_23215 = (inst_23214__$1 == null);var state_23235__$1 = (function (){var statearr_23239 = state_23235;(statearr_23239[(7)] = inst_23214__$1);
return statearr_23239;
})();if(cljs.core.truth_(inst_23215))
{var statearr_23240_23262 = state_23235__$1;(statearr_23240_23262[(1)] = (5));
} else
{var statearr_23241_23263 = state_23235__$1;(statearr_23241_23263[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (13)))
{var state_23235__$1 = state_23235;var statearr_23242_23264 = state_23235__$1;(statearr_23242_23264[(2)] = null);
(statearr_23242_23264[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (6)))
{var inst_23214 = (state_23235[(7)]);var state_23235__$1 = state_23235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23235__$1,(11),to,inst_23214);
} else
{if((state_val_23236 === (3)))
{var inst_23233 = (state_23235[(2)]);var state_23235__$1 = state_23235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23235__$1,inst_23233);
} else
{if((state_val_23236 === (12)))
{var state_23235__$1 = state_23235;var statearr_23243_23265 = state_23235__$1;(statearr_23243_23265[(2)] = null);
(statearr_23243_23265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (2)))
{var state_23235__$1 = state_23235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23235__$1,(4),from);
} else
{if((state_val_23236 === (11)))
{var inst_23224 = (state_23235[(2)]);var state_23235__$1 = state_23235;if(cljs.core.truth_(inst_23224))
{var statearr_23244_23266 = state_23235__$1;(statearr_23244_23266[(1)] = (12));
} else
{var statearr_23245_23267 = state_23235__$1;(statearr_23245_23267[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (9)))
{var state_23235__$1 = state_23235;var statearr_23246_23268 = state_23235__$1;(statearr_23246_23268[(2)] = null);
(statearr_23246_23268[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (5)))
{var state_23235__$1 = state_23235;if(cljs.core.truth_(close_QMARK_))
{var statearr_23247_23269 = state_23235__$1;(statearr_23247_23269[(1)] = (8));
} else
{var statearr_23248_23270 = state_23235__$1;(statearr_23248_23270[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (14)))
{var inst_23229 = (state_23235[(2)]);var state_23235__$1 = state_23235;var statearr_23249_23271 = state_23235__$1;(statearr_23249_23271[(2)] = inst_23229);
(statearr_23249_23271[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (10)))
{var inst_23221 = (state_23235[(2)]);var state_23235__$1 = state_23235;var statearr_23250_23272 = state_23235__$1;(statearr_23250_23272[(2)] = inst_23221);
(statearr_23250_23272[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23236 === (8)))
{var inst_23218 = cljs.core.async.close_BANG_.call(null,to);var state_23235__$1 = state_23235;var statearr_23251_23273 = state_23235__$1;(statearr_23251_23273[(2)] = inst_23218);
(statearr_23251_23273[(1)] = (10));
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
});})(c__9125__auto___23259))
;return ((function (switch__9110__auto__,c__9125__auto___23259){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23255 = [null,null,null,null,null,null,null,null];(statearr_23255[(0)] = state_machine__9111__auto__);
(statearr_23255[(1)] = (1));
return statearr_23255;
});
var state_machine__9111__auto____1 = (function (state_23235){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23235);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23256){if((e23256 instanceof Object))
{var ex__9114__auto__ = e23256;var statearr_23257_23274 = state_23235;(statearr_23257_23274[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23256;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23275 = state_23235;
state_23235 = G__23275;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23235){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23259))
})();var state__9127__auto__ = (function (){var statearr_23258 = f__9126__auto__.call(null);(statearr_23258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23259);
return statearr_23258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23259))
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
return (function (p__23459){var vec__23460 = p__23459;var v = cljs.core.nth.call(null,vec__23460,(0),null);var p = cljs.core.nth.call(null,vec__23460,(1),null);var job = vec__23460;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23642 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results){
return (function (state_23465){var state_val_23466 = (state_23465[(1)]);if((state_val_23466 === (2)))
{var inst_23462 = (state_23465[(2)]);var inst_23463 = cljs.core.async.close_BANG_.call(null,res);var state_23465__$1 = (function (){var statearr_23467 = state_23465;(statearr_23467[(7)] = inst_23462);
return statearr_23467;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23465__$1,inst_23463);
} else
{if((state_val_23466 === (1)))
{var state_23465__$1 = state_23465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23465__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23471 = [null,null,null,null,null,null,null,null];(statearr_23471[(0)] = state_machine__9111__auto__);
(statearr_23471[(1)] = (1));
return statearr_23471;
});
var state_machine__9111__auto____1 = (function (state_23465){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23465);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23472){if((e23472 instanceof Object))
{var ex__9114__auto__ = e23472;var statearr_23473_23643 = state_23465;(statearr_23473_23643[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23472;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23644 = state_23465;
state_23465 = G__23644;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23465){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23474 = f__9126__auto__.call(null);(statearr_23474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23642);
return statearr_23474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23642,res,vec__23460,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23475){var vec__23476 = p__23475;var v = cljs.core.nth.call(null,vec__23476,(0),null);var p = cljs.core.nth.call(null,vec__23476,(1),null);var job = vec__23476;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23645 = n;var __23646 = (0);while(true){
if((__23646 < n__4508__auto___23645))
{var G__23477_23647 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23477_23647) {
case "async":
var c__9125__auto___23649 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23646,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23646,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function (state_23490){var state_val_23491 = (state_23490[(1)]);if((state_val_23491 === (7)))
{var inst_23486 = (state_23490[(2)]);var state_23490__$1 = state_23490;var statearr_23492_23650 = state_23490__$1;(statearr_23492_23650[(2)] = inst_23486);
(statearr_23492_23650[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (6)))
{var state_23490__$1 = state_23490;var statearr_23493_23651 = state_23490__$1;(statearr_23493_23651[(2)] = null);
(statearr_23493_23651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (5)))
{var state_23490__$1 = state_23490;var statearr_23494_23652 = state_23490__$1;(statearr_23494_23652[(2)] = null);
(statearr_23494_23652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (4)))
{var inst_23480 = (state_23490[(2)]);var inst_23481 = async.call(null,inst_23480);var state_23490__$1 = state_23490;if(cljs.core.truth_(inst_23481))
{var statearr_23495_23653 = state_23490__$1;(statearr_23495_23653[(1)] = (5));
} else
{var statearr_23496_23654 = state_23490__$1;(statearr_23496_23654[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (3)))
{var inst_23488 = (state_23490[(2)]);var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23490__$1,inst_23488);
} else
{if((state_val_23491 === (2)))
{var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23490__$1,(4),jobs);
} else
{if((state_val_23491 === (1)))
{var state_23490__$1 = state_23490;var statearr_23497_23655 = state_23490__$1;(statearr_23497_23655[(2)] = null);
(statearr_23497_23655[(1)] = (2));
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
});})(__23646,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
;return ((function (__23646,switch__9110__auto__,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23501 = [null,null,null,null,null,null,null];(statearr_23501[(0)] = state_machine__9111__auto__);
(statearr_23501[(1)] = (1));
return statearr_23501;
});
var state_machine__9111__auto____1 = (function (state_23490){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23490);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23502){if((e23502 instanceof Object))
{var ex__9114__auto__ = e23502;var statearr_23503_23656 = state_23490;(statearr_23503_23656[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23657 = state_23490;
state_23490 = G__23657;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23490){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23646,switch__9110__auto__,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23504 = f__9126__auto__.call(null);(statearr_23504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23649);
return statearr_23504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23646,c__9125__auto___23649,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23658 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23646,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23646,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function (state_23517){var state_val_23518 = (state_23517[(1)]);if((state_val_23518 === (7)))
{var inst_23513 = (state_23517[(2)]);var state_23517__$1 = state_23517;var statearr_23519_23659 = state_23517__$1;(statearr_23519_23659[(2)] = inst_23513);
(statearr_23519_23659[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23518 === (6)))
{var state_23517__$1 = state_23517;var statearr_23520_23660 = state_23517__$1;(statearr_23520_23660[(2)] = null);
(statearr_23520_23660[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23518 === (5)))
{var state_23517__$1 = state_23517;var statearr_23521_23661 = state_23517__$1;(statearr_23521_23661[(2)] = null);
(statearr_23521_23661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23518 === (4)))
{var inst_23507 = (state_23517[(2)]);var inst_23508 = process.call(null,inst_23507);var state_23517__$1 = state_23517;if(cljs.core.truth_(inst_23508))
{var statearr_23522_23662 = state_23517__$1;(statearr_23522_23662[(1)] = (5));
} else
{var statearr_23523_23663 = state_23517__$1;(statearr_23523_23663[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23518 === (3)))
{var inst_23515 = (state_23517[(2)]);var state_23517__$1 = state_23517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23517__$1,inst_23515);
} else
{if((state_val_23518 === (2)))
{var state_23517__$1 = state_23517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23517__$1,(4),jobs);
} else
{if((state_val_23518 === (1)))
{var state_23517__$1 = state_23517;var statearr_23524_23664 = state_23517__$1;(statearr_23524_23664[(2)] = null);
(statearr_23524_23664[(1)] = (2));
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
});})(__23646,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
;return ((function (__23646,switch__9110__auto__,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23528 = [null,null,null,null,null,null,null];(statearr_23528[(0)] = state_machine__9111__auto__);
(statearr_23528[(1)] = (1));
return statearr_23528;
});
var state_machine__9111__auto____1 = (function (state_23517){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23517);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23529){if((e23529 instanceof Object))
{var ex__9114__auto__ = e23529;var statearr_23530_23665 = state_23517;(statearr_23530_23665[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23666 = state_23517;
state_23517 = G__23666;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23517){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23646,switch__9110__auto__,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23531 = f__9126__auto__.call(null);(statearr_23531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23658);
return statearr_23531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23646,c__9125__auto___23658,G__23477_23647,n__4508__auto___23645,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23667 = (__23646 + (1));
__23646 = G__23667;
continue;
}
} else
{}
break;
}
var c__9125__auto___23668 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23668,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23668,jobs,results,process,async){
return (function (state_23553){var state_val_23554 = (state_23553[(1)]);if((state_val_23554 === (9)))
{var inst_23546 = (state_23553[(2)]);var state_23553__$1 = (function (){var statearr_23555 = state_23553;(statearr_23555[(7)] = inst_23546);
return statearr_23555;
})();var statearr_23556_23669 = state_23553__$1;(statearr_23556_23669[(2)] = null);
(statearr_23556_23669[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23554 === (8)))
{var inst_23539 = (state_23553[(8)]);var inst_23544 = (state_23553[(2)]);var state_23553__$1 = (function (){var statearr_23557 = state_23553;(statearr_23557[(9)] = inst_23544);
return statearr_23557;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23553__$1,(9),results,inst_23539);
} else
{if((state_val_23554 === (7)))
{var inst_23549 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23558_23670 = state_23553__$1;(statearr_23558_23670[(2)] = inst_23549);
(statearr_23558_23670[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23554 === (6)))
{var inst_23539 = (state_23553[(8)]);var inst_23534 = (state_23553[(10)]);var inst_23539__$1 = cljs.core.async.chan.call(null,(1));var inst_23540 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23541 = [inst_23534,inst_23539__$1];var inst_23542 = (new cljs.core.PersistentVector(null,2,(5),inst_23540,inst_23541,null));var state_23553__$1 = (function (){var statearr_23559 = state_23553;(statearr_23559[(8)] = inst_23539__$1);
return statearr_23559;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23553__$1,(8),jobs,inst_23542);
} else
{if((state_val_23554 === (5)))
{var inst_23537 = cljs.core.async.close_BANG_.call(null,jobs);var state_23553__$1 = state_23553;var statearr_23560_23671 = state_23553__$1;(statearr_23560_23671[(2)] = inst_23537);
(statearr_23560_23671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23554 === (4)))
{var inst_23534 = (state_23553[(10)]);var inst_23534__$1 = (state_23553[(2)]);var inst_23535 = (inst_23534__$1 == null);var state_23553__$1 = (function (){var statearr_23561 = state_23553;(statearr_23561[(10)] = inst_23534__$1);
return statearr_23561;
})();if(cljs.core.truth_(inst_23535))
{var statearr_23562_23672 = state_23553__$1;(statearr_23562_23672[(1)] = (5));
} else
{var statearr_23563_23673 = state_23553__$1;(statearr_23563_23673[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23554 === (3)))
{var inst_23551 = (state_23553[(2)]);var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23553__$1,inst_23551);
} else
{if((state_val_23554 === (2)))
{var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23553__$1,(4),from);
} else
{if((state_val_23554 === (1)))
{var state_23553__$1 = state_23553;var statearr_23564_23674 = state_23553__$1;(statearr_23564_23674[(2)] = null);
(statearr_23564_23674[(1)] = (2));
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
});})(c__9125__auto___23668,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23668,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23568 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23568[(0)] = state_machine__9111__auto__);
(statearr_23568[(1)] = (1));
return statearr_23568;
});
var state_machine__9111__auto____1 = (function (state_23553){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23553);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23569){if((e23569 instanceof Object))
{var ex__9114__auto__ = e23569;var statearr_23570_23675 = state_23553;(statearr_23570_23675[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23569;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23676 = state_23553;
state_23553 = G__23676;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23553){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23668,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23571 = f__9126__auto__.call(null);(statearr_23571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23668);
return statearr_23571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23668,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23609){var state_val_23610 = (state_23609[(1)]);if((state_val_23610 === (7)))
{var inst_23605 = (state_23609[(2)]);var state_23609__$1 = state_23609;var statearr_23611_23677 = state_23609__$1;(statearr_23611_23677[(2)] = inst_23605);
(statearr_23611_23677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (20)))
{var state_23609__$1 = state_23609;var statearr_23612_23678 = state_23609__$1;(statearr_23612_23678[(2)] = null);
(statearr_23612_23678[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (1)))
{var state_23609__$1 = state_23609;var statearr_23613_23679 = state_23609__$1;(statearr_23613_23679[(2)] = null);
(statearr_23613_23679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (4)))
{var inst_23574 = (state_23609[(7)]);var inst_23574__$1 = (state_23609[(2)]);var inst_23575 = (inst_23574__$1 == null);var state_23609__$1 = (function (){var statearr_23614 = state_23609;(statearr_23614[(7)] = inst_23574__$1);
return statearr_23614;
})();if(cljs.core.truth_(inst_23575))
{var statearr_23615_23680 = state_23609__$1;(statearr_23615_23680[(1)] = (5));
} else
{var statearr_23616_23681 = state_23609__$1;(statearr_23616_23681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (15)))
{var inst_23587 = (state_23609[(8)]);var state_23609__$1 = state_23609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23609__$1,(18),to,inst_23587);
} else
{if((state_val_23610 === (21)))
{var inst_23600 = (state_23609[(2)]);var state_23609__$1 = state_23609;var statearr_23617_23682 = state_23609__$1;(statearr_23617_23682[(2)] = inst_23600);
(statearr_23617_23682[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (13)))
{var inst_23602 = (state_23609[(2)]);var state_23609__$1 = (function (){var statearr_23618 = state_23609;(statearr_23618[(9)] = inst_23602);
return statearr_23618;
})();var statearr_23619_23683 = state_23609__$1;(statearr_23619_23683[(2)] = null);
(statearr_23619_23683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (6)))
{var inst_23574 = (state_23609[(7)]);var state_23609__$1 = state_23609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23609__$1,(11),inst_23574);
} else
{if((state_val_23610 === (17)))
{var inst_23595 = (state_23609[(2)]);var state_23609__$1 = state_23609;if(cljs.core.truth_(inst_23595))
{var statearr_23620_23684 = state_23609__$1;(statearr_23620_23684[(1)] = (19));
} else
{var statearr_23621_23685 = state_23609__$1;(statearr_23621_23685[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (3)))
{var inst_23607 = (state_23609[(2)]);var state_23609__$1 = state_23609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23609__$1,inst_23607);
} else
{if((state_val_23610 === (12)))
{var inst_23584 = (state_23609[(10)]);var state_23609__$1 = state_23609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23609__$1,(14),inst_23584);
} else
{if((state_val_23610 === (2)))
{var state_23609__$1 = state_23609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23609__$1,(4),results);
} else
{if((state_val_23610 === (19)))
{var state_23609__$1 = state_23609;var statearr_23622_23686 = state_23609__$1;(statearr_23622_23686[(2)] = null);
(statearr_23622_23686[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (11)))
{var inst_23584 = (state_23609[(2)]);var state_23609__$1 = (function (){var statearr_23623 = state_23609;(statearr_23623[(10)] = inst_23584);
return statearr_23623;
})();var statearr_23624_23687 = state_23609__$1;(statearr_23624_23687[(2)] = null);
(statearr_23624_23687[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (9)))
{var state_23609__$1 = state_23609;var statearr_23625_23688 = state_23609__$1;(statearr_23625_23688[(2)] = null);
(statearr_23625_23688[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (5)))
{var state_23609__$1 = state_23609;if(cljs.core.truth_(close_QMARK_))
{var statearr_23626_23689 = state_23609__$1;(statearr_23626_23689[(1)] = (8));
} else
{var statearr_23627_23690 = state_23609__$1;(statearr_23627_23690[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (14)))
{var inst_23589 = (state_23609[(11)]);var inst_23587 = (state_23609[(8)]);var inst_23587__$1 = (state_23609[(2)]);var inst_23588 = (inst_23587__$1 == null);var inst_23589__$1 = cljs.core.not.call(null,inst_23588);var state_23609__$1 = (function (){var statearr_23628 = state_23609;(statearr_23628[(11)] = inst_23589__$1);
(statearr_23628[(8)] = inst_23587__$1);
return statearr_23628;
})();if(inst_23589__$1)
{var statearr_23629_23691 = state_23609__$1;(statearr_23629_23691[(1)] = (15));
} else
{var statearr_23630_23692 = state_23609__$1;(statearr_23630_23692[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (16)))
{var inst_23589 = (state_23609[(11)]);var state_23609__$1 = state_23609;var statearr_23631_23693 = state_23609__$1;(statearr_23631_23693[(2)] = inst_23589);
(statearr_23631_23693[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (10)))
{var inst_23581 = (state_23609[(2)]);var state_23609__$1 = state_23609;var statearr_23632_23694 = state_23609__$1;(statearr_23632_23694[(2)] = inst_23581);
(statearr_23632_23694[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (18)))
{var inst_23592 = (state_23609[(2)]);var state_23609__$1 = state_23609;var statearr_23633_23695 = state_23609__$1;(statearr_23633_23695[(2)] = inst_23592);
(statearr_23633_23695[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23610 === (8)))
{var inst_23578 = cljs.core.async.close_BANG_.call(null,to);var state_23609__$1 = state_23609;var statearr_23634_23696 = state_23609__$1;(statearr_23634_23696[(2)] = inst_23578);
(statearr_23634_23696[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23638 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23638[(0)] = state_machine__9111__auto__);
(statearr_23638[(1)] = (1));
return statearr_23638;
});
var state_machine__9111__auto____1 = (function (state_23609){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23609);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23639){if((e23639 instanceof Object))
{var ex__9114__auto__ = e23639;var statearr_23640_23697 = state_23609;(statearr_23640_23697[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23639;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23698 = state_23609;
state_23609 = G__23698;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23609){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23641 = f__9126__auto__.call(null);(statearr_23641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23641;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___23799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23799,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23799,tc,fc){
return (function (state_23774){var state_val_23775 = (state_23774[(1)]);if((state_val_23775 === (7)))
{var inst_23770 = (state_23774[(2)]);var state_23774__$1 = state_23774;var statearr_23776_23800 = state_23774__$1;(statearr_23776_23800[(2)] = inst_23770);
(statearr_23776_23800[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (1)))
{var state_23774__$1 = state_23774;var statearr_23777_23801 = state_23774__$1;(statearr_23777_23801[(2)] = null);
(statearr_23777_23801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (4)))
{var inst_23751 = (state_23774[(7)]);var inst_23751__$1 = (state_23774[(2)]);var inst_23752 = (inst_23751__$1 == null);var state_23774__$1 = (function (){var statearr_23778 = state_23774;(statearr_23778[(7)] = inst_23751__$1);
return statearr_23778;
})();if(cljs.core.truth_(inst_23752))
{var statearr_23779_23802 = state_23774__$1;(statearr_23779_23802[(1)] = (5));
} else
{var statearr_23780_23803 = state_23774__$1;(statearr_23780_23803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (13)))
{var state_23774__$1 = state_23774;var statearr_23781_23804 = state_23774__$1;(statearr_23781_23804[(2)] = null);
(statearr_23781_23804[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (6)))
{var inst_23751 = (state_23774[(7)]);var inst_23757 = p.call(null,inst_23751);var state_23774__$1 = state_23774;if(cljs.core.truth_(inst_23757))
{var statearr_23782_23805 = state_23774__$1;(statearr_23782_23805[(1)] = (9));
} else
{var statearr_23783_23806 = state_23774__$1;(statearr_23783_23806[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (3)))
{var inst_23772 = (state_23774[(2)]);var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23774__$1,inst_23772);
} else
{if((state_val_23775 === (12)))
{var state_23774__$1 = state_23774;var statearr_23784_23807 = state_23774__$1;(statearr_23784_23807[(2)] = null);
(statearr_23784_23807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (2)))
{var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(4),ch);
} else
{if((state_val_23775 === (11)))
{var inst_23751 = (state_23774[(7)]);var inst_23761 = (state_23774[(2)]);var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23774__$1,(8),inst_23761,inst_23751);
} else
{if((state_val_23775 === (9)))
{var state_23774__$1 = state_23774;var statearr_23785_23808 = state_23774__$1;(statearr_23785_23808[(2)] = tc);
(statearr_23785_23808[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (5)))
{var inst_23754 = cljs.core.async.close_BANG_.call(null,tc);var inst_23755 = cljs.core.async.close_BANG_.call(null,fc);var state_23774__$1 = (function (){var statearr_23786 = state_23774;(statearr_23786[(8)] = inst_23754);
return statearr_23786;
})();var statearr_23787_23809 = state_23774__$1;(statearr_23787_23809[(2)] = inst_23755);
(statearr_23787_23809[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (14)))
{var inst_23768 = (state_23774[(2)]);var state_23774__$1 = state_23774;var statearr_23788_23810 = state_23774__$1;(statearr_23788_23810[(2)] = inst_23768);
(statearr_23788_23810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (10)))
{var state_23774__$1 = state_23774;var statearr_23789_23811 = state_23774__$1;(statearr_23789_23811[(2)] = fc);
(statearr_23789_23811[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (8)))
{var inst_23763 = (state_23774[(2)]);var state_23774__$1 = state_23774;if(cljs.core.truth_(inst_23763))
{var statearr_23790_23812 = state_23774__$1;(statearr_23790_23812[(1)] = (12));
} else
{var statearr_23791_23813 = state_23774__$1;(statearr_23791_23813[(1)] = (13));
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
});})(c__9125__auto___23799,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___23799,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23795 = [null,null,null,null,null,null,null,null,null];(statearr_23795[(0)] = state_machine__9111__auto__);
(statearr_23795[(1)] = (1));
return statearr_23795;
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
}catch (e23796){if((e23796 instanceof Object))
{var ex__9114__auto__ = e23796;var statearr_23797_23814 = state_23774;(statearr_23797_23814[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23796;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23815 = state_23774;
state_23774 = G__23815;
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
;})(switch__9110__auto__,c__9125__auto___23799,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23798 = f__9126__auto__.call(null);(statearr_23798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23799);
return statearr_23798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23799,tc,fc))
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
return (function (state_23862){var state_val_23863 = (state_23862[(1)]);if((state_val_23863 === (7)))
{var inst_23858 = (state_23862[(2)]);var state_23862__$1 = state_23862;var statearr_23864_23880 = state_23862__$1;(statearr_23864_23880[(2)] = inst_23858);
(statearr_23864_23880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23863 === (6)))
{var inst_23851 = (state_23862[(7)]);var inst_23848 = (state_23862[(8)]);var inst_23855 = f.call(null,inst_23848,inst_23851);var inst_23848__$1 = inst_23855;var state_23862__$1 = (function (){var statearr_23865 = state_23862;(statearr_23865[(8)] = inst_23848__$1);
return statearr_23865;
})();var statearr_23866_23881 = state_23862__$1;(statearr_23866_23881[(2)] = null);
(statearr_23866_23881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23863 === (5)))
{var inst_23848 = (state_23862[(8)]);var state_23862__$1 = state_23862;var statearr_23867_23882 = state_23862__$1;(statearr_23867_23882[(2)] = inst_23848);
(statearr_23867_23882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23863 === (4)))
{var inst_23851 = (state_23862[(7)]);var inst_23851__$1 = (state_23862[(2)]);var inst_23852 = (inst_23851__$1 == null);var state_23862__$1 = (function (){var statearr_23868 = state_23862;(statearr_23868[(7)] = inst_23851__$1);
return statearr_23868;
})();if(cljs.core.truth_(inst_23852))
{var statearr_23869_23883 = state_23862__$1;(statearr_23869_23883[(1)] = (5));
} else
{var statearr_23870_23884 = state_23862__$1;(statearr_23870_23884[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23863 === (3)))
{var inst_23860 = (state_23862[(2)]);var state_23862__$1 = state_23862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23862__$1,inst_23860);
} else
{if((state_val_23863 === (2)))
{var state_23862__$1 = state_23862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23862__$1,(4),ch);
} else
{if((state_val_23863 === (1)))
{var inst_23848 = init;var state_23862__$1 = (function (){var statearr_23871 = state_23862;(statearr_23871[(8)] = inst_23848);
return statearr_23871;
})();var statearr_23872_23885 = state_23862__$1;(statearr_23872_23885[(2)] = null);
(statearr_23872_23885[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23876 = [null,null,null,null,null,null,null,null,null];(statearr_23876[(0)] = state_machine__9111__auto__);
(statearr_23876[(1)] = (1));
return statearr_23876;
});
var state_machine__9111__auto____1 = (function (state_23862){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23862);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23877){if((e23877 instanceof Object))
{var ex__9114__auto__ = e23877;var statearr_23878_23886 = state_23862;(statearr_23878_23886[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23887 = state_23862;
state_23862 = G__23887;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23862){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23879 = f__9126__auto__.call(null);(statearr_23879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23879;
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
return (function (state_23961){var state_val_23962 = (state_23961[(1)]);if((state_val_23962 === (7)))
{var inst_23943 = (state_23961[(2)]);var state_23961__$1 = state_23961;var statearr_23963_23986 = state_23961__$1;(statearr_23963_23986[(2)] = inst_23943);
(statearr_23963_23986[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (1)))
{var inst_23937 = cljs.core.seq.call(null,coll);var inst_23938 = inst_23937;var state_23961__$1 = (function (){var statearr_23964 = state_23961;(statearr_23964[(7)] = inst_23938);
return statearr_23964;
})();var statearr_23965_23987 = state_23961__$1;(statearr_23965_23987[(2)] = null);
(statearr_23965_23987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (4)))
{var inst_23938 = (state_23961[(7)]);var inst_23941 = cljs.core.first.call(null,inst_23938);var state_23961__$1 = state_23961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23961__$1,(7),ch,inst_23941);
} else
{if((state_val_23962 === (13)))
{var inst_23955 = (state_23961[(2)]);var state_23961__$1 = state_23961;var statearr_23966_23988 = state_23961__$1;(statearr_23966_23988[(2)] = inst_23955);
(statearr_23966_23988[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (6)))
{var inst_23946 = (state_23961[(2)]);var state_23961__$1 = state_23961;if(cljs.core.truth_(inst_23946))
{var statearr_23967_23989 = state_23961__$1;(statearr_23967_23989[(1)] = (8));
} else
{var statearr_23968_23990 = state_23961__$1;(statearr_23968_23990[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (3)))
{var inst_23959 = (state_23961[(2)]);var state_23961__$1 = state_23961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23961__$1,inst_23959);
} else
{if((state_val_23962 === (12)))
{var state_23961__$1 = state_23961;var statearr_23969_23991 = state_23961__$1;(statearr_23969_23991[(2)] = null);
(statearr_23969_23991[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (2)))
{var inst_23938 = (state_23961[(7)]);var state_23961__$1 = state_23961;if(cljs.core.truth_(inst_23938))
{var statearr_23970_23992 = state_23961__$1;(statearr_23970_23992[(1)] = (4));
} else
{var statearr_23971_23993 = state_23961__$1;(statearr_23971_23993[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (11)))
{var inst_23952 = cljs.core.async.close_BANG_.call(null,ch);var state_23961__$1 = state_23961;var statearr_23972_23994 = state_23961__$1;(statearr_23972_23994[(2)] = inst_23952);
(statearr_23972_23994[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (9)))
{var state_23961__$1 = state_23961;if(cljs.core.truth_(close_QMARK_))
{var statearr_23973_23995 = state_23961__$1;(statearr_23973_23995[(1)] = (11));
} else
{var statearr_23974_23996 = state_23961__$1;(statearr_23974_23996[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (5)))
{var inst_23938 = (state_23961[(7)]);var state_23961__$1 = state_23961;var statearr_23975_23997 = state_23961__$1;(statearr_23975_23997[(2)] = inst_23938);
(statearr_23975_23997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (10)))
{var inst_23957 = (state_23961[(2)]);var state_23961__$1 = state_23961;var statearr_23976_23998 = state_23961__$1;(statearr_23976_23998[(2)] = inst_23957);
(statearr_23976_23998[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23962 === (8)))
{var inst_23938 = (state_23961[(7)]);var inst_23948 = cljs.core.next.call(null,inst_23938);var inst_23938__$1 = inst_23948;var state_23961__$1 = (function (){var statearr_23977 = state_23961;(statearr_23977[(7)] = inst_23938__$1);
return statearr_23977;
})();var statearr_23978_23999 = state_23961__$1;(statearr_23978_23999[(2)] = null);
(statearr_23978_23999[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23982 = [null,null,null,null,null,null,null,null];(statearr_23982[(0)] = state_machine__9111__auto__);
(statearr_23982[(1)] = (1));
return statearr_23982;
});
var state_machine__9111__auto____1 = (function (state_23961){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23961);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object))
{var ex__9114__auto__ = e23983;var statearr_23984_24000 = state_23961;(statearr_23984_24000[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24001 = state_23961;
state_23961 = G__24001;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23961){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23985 = f__9126__auto__.call(null);(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23985;
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
cljs.core.async.Mux = (function (){var obj24003 = {};return obj24003;
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
cljs.core.async.Mult = (function (){var obj24005 = {};return obj24005;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24227 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24227 = (function (cs,ch,mult,meta24228){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24228 = meta24228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24227.cljs$lang$type = true;
cljs.core.async.t24227.cljs$lang$ctorStr = "cljs.core.async/t24227";
cljs.core.async.t24227.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24227");
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24229){var self__ = this;
var _24229__$1 = this;return self__.meta24228;
});})(cs))
;
cljs.core.async.t24227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24229,meta24228__$1){var self__ = this;
var _24229__$1 = this;return (new cljs.core.async.t24227(self__.cs,self__.ch,self__.mult,meta24228__$1));
});})(cs))
;
cljs.core.async.__GT_t24227 = ((function (cs){
return (function __GT_t24227(cs__$1,ch__$1,mult__$1,meta24228){return (new cljs.core.async.t24227(cs__$1,ch__$1,mult__$1,meta24228));
});})(cs))
;
}
return (new cljs.core.async.t24227(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24448 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24448,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24448,cs,m,dchan,dctr,done){
return (function (state_24360){var state_val_24361 = (state_24360[(1)]);if((state_val_24361 === (7)))
{var inst_24356 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24362_24449 = state_24360__$1;(statearr_24362_24449[(2)] = inst_24356);
(statearr_24362_24449[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (20)))
{var inst_24261 = (state_24360[(7)]);var inst_24271 = cljs.core.first.call(null,inst_24261);var inst_24272 = cljs.core.nth.call(null,inst_24271,(0),null);var inst_24273 = cljs.core.nth.call(null,inst_24271,(1),null);var state_24360__$1 = (function (){var statearr_24363 = state_24360;(statearr_24363[(8)] = inst_24272);
return statearr_24363;
})();if(cljs.core.truth_(inst_24273))
{var statearr_24364_24450 = state_24360__$1;(statearr_24364_24450[(1)] = (22));
} else
{var statearr_24365_24451 = state_24360__$1;(statearr_24365_24451[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (27)))
{var inst_24303 = (state_24360[(9)]);var inst_24301 = (state_24360[(10)]);var inst_24232 = (state_24360[(11)]);var inst_24308 = (state_24360[(12)]);var inst_24308__$1 = cljs.core._nth.call(null,inst_24301,inst_24303);var inst_24309 = cljs.core.async.put_BANG_.call(null,inst_24308__$1,inst_24232,done);var state_24360__$1 = (function (){var statearr_24366 = state_24360;(statearr_24366[(12)] = inst_24308__$1);
return statearr_24366;
})();if(cljs.core.truth_(inst_24309))
{var statearr_24367_24452 = state_24360__$1;(statearr_24367_24452[(1)] = (30));
} else
{var statearr_24368_24453 = state_24360__$1;(statearr_24368_24453[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (1)))
{var state_24360__$1 = state_24360;var statearr_24369_24454 = state_24360__$1;(statearr_24369_24454[(2)] = null);
(statearr_24369_24454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (24)))
{var inst_24261 = (state_24360[(7)]);var inst_24278 = (state_24360[(2)]);var inst_24279 = cljs.core.next.call(null,inst_24261);var inst_24241 = inst_24279;var inst_24242 = null;var inst_24243 = (0);var inst_24244 = (0);var state_24360__$1 = (function (){var statearr_24370 = state_24360;(statearr_24370[(13)] = inst_24243);
(statearr_24370[(14)] = inst_24278);
(statearr_24370[(15)] = inst_24244);
(statearr_24370[(16)] = inst_24241);
(statearr_24370[(17)] = inst_24242);
return statearr_24370;
})();var statearr_24371_24455 = state_24360__$1;(statearr_24371_24455[(2)] = null);
(statearr_24371_24455[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (39)))
{var state_24360__$1 = state_24360;var statearr_24375_24456 = state_24360__$1;(statearr_24375_24456[(2)] = null);
(statearr_24375_24456[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (4)))
{var inst_24232 = (state_24360[(11)]);var inst_24232__$1 = (state_24360[(2)]);var inst_24233 = (inst_24232__$1 == null);var state_24360__$1 = (function (){var statearr_24376 = state_24360;(statearr_24376[(11)] = inst_24232__$1);
return statearr_24376;
})();if(cljs.core.truth_(inst_24233))
{var statearr_24377_24457 = state_24360__$1;(statearr_24377_24457[(1)] = (5));
} else
{var statearr_24378_24458 = state_24360__$1;(statearr_24378_24458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (15)))
{var inst_24243 = (state_24360[(13)]);var inst_24244 = (state_24360[(15)]);var inst_24241 = (state_24360[(16)]);var inst_24242 = (state_24360[(17)]);var inst_24257 = (state_24360[(2)]);var inst_24258 = (inst_24244 + (1));var tmp24372 = inst_24243;var tmp24373 = inst_24241;var tmp24374 = inst_24242;var inst_24241__$1 = tmp24373;var inst_24242__$1 = tmp24374;var inst_24243__$1 = tmp24372;var inst_24244__$1 = inst_24258;var state_24360__$1 = (function (){var statearr_24379 = state_24360;(statearr_24379[(13)] = inst_24243__$1);
(statearr_24379[(15)] = inst_24244__$1);
(statearr_24379[(18)] = inst_24257);
(statearr_24379[(16)] = inst_24241__$1);
(statearr_24379[(17)] = inst_24242__$1);
return statearr_24379;
})();var statearr_24380_24459 = state_24360__$1;(statearr_24380_24459[(2)] = null);
(statearr_24380_24459[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (21)))
{var inst_24282 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24384_24460 = state_24360__$1;(statearr_24384_24460[(2)] = inst_24282);
(statearr_24384_24460[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (31)))
{var inst_24308 = (state_24360[(12)]);var inst_24312 = done.call(null,null);var inst_24313 = cljs.core.async.untap_STAR_.call(null,m,inst_24308);var state_24360__$1 = (function (){var statearr_24385 = state_24360;(statearr_24385[(19)] = inst_24312);
return statearr_24385;
})();var statearr_24386_24461 = state_24360__$1;(statearr_24386_24461[(2)] = inst_24313);
(statearr_24386_24461[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (32)))
{var inst_24303 = (state_24360[(9)]);var inst_24301 = (state_24360[(10)]);var inst_24300 = (state_24360[(20)]);var inst_24302 = (state_24360[(21)]);var inst_24315 = (state_24360[(2)]);var inst_24316 = (inst_24303 + (1));var tmp24381 = inst_24301;var tmp24382 = inst_24300;var tmp24383 = inst_24302;var inst_24300__$1 = tmp24382;var inst_24301__$1 = tmp24381;var inst_24302__$1 = tmp24383;var inst_24303__$1 = inst_24316;var state_24360__$1 = (function (){var statearr_24387 = state_24360;(statearr_24387[(9)] = inst_24303__$1);
(statearr_24387[(10)] = inst_24301__$1);
(statearr_24387[(20)] = inst_24300__$1);
(statearr_24387[(21)] = inst_24302__$1);
(statearr_24387[(22)] = inst_24315);
return statearr_24387;
})();var statearr_24388_24462 = state_24360__$1;(statearr_24388_24462[(2)] = null);
(statearr_24388_24462[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (40)))
{var inst_24328 = (state_24360[(23)]);var inst_24332 = done.call(null,null);var inst_24333 = cljs.core.async.untap_STAR_.call(null,m,inst_24328);var state_24360__$1 = (function (){var statearr_24389 = state_24360;(statearr_24389[(24)] = inst_24332);
return statearr_24389;
})();var statearr_24390_24463 = state_24360__$1;(statearr_24390_24463[(2)] = inst_24333);
(statearr_24390_24463[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (33)))
{var inst_24319 = (state_24360[(25)]);var inst_24321 = cljs.core.chunked_seq_QMARK_.call(null,inst_24319);var state_24360__$1 = state_24360;if(inst_24321)
{var statearr_24391_24464 = state_24360__$1;(statearr_24391_24464[(1)] = (36));
} else
{var statearr_24392_24465 = state_24360__$1;(statearr_24392_24465[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (13)))
{var inst_24251 = (state_24360[(26)]);var inst_24254 = cljs.core.async.close_BANG_.call(null,inst_24251);var state_24360__$1 = state_24360;var statearr_24393_24466 = state_24360__$1;(statearr_24393_24466[(2)] = inst_24254);
(statearr_24393_24466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (22)))
{var inst_24272 = (state_24360[(8)]);var inst_24275 = cljs.core.async.close_BANG_.call(null,inst_24272);var state_24360__$1 = state_24360;var statearr_24394_24467 = state_24360__$1;(statearr_24394_24467[(2)] = inst_24275);
(statearr_24394_24467[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (36)))
{var inst_24319 = (state_24360[(25)]);var inst_24323 = cljs.core.chunk_first.call(null,inst_24319);var inst_24324 = cljs.core.chunk_rest.call(null,inst_24319);var inst_24325 = cljs.core.count.call(null,inst_24323);var inst_24300 = inst_24324;var inst_24301 = inst_24323;var inst_24302 = inst_24325;var inst_24303 = (0);var state_24360__$1 = (function (){var statearr_24395 = state_24360;(statearr_24395[(9)] = inst_24303);
(statearr_24395[(10)] = inst_24301);
(statearr_24395[(20)] = inst_24300);
(statearr_24395[(21)] = inst_24302);
return statearr_24395;
})();var statearr_24396_24468 = state_24360__$1;(statearr_24396_24468[(2)] = null);
(statearr_24396_24468[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (41)))
{var inst_24319 = (state_24360[(25)]);var inst_24335 = (state_24360[(2)]);var inst_24336 = cljs.core.next.call(null,inst_24319);var inst_24300 = inst_24336;var inst_24301 = null;var inst_24302 = (0);var inst_24303 = (0);var state_24360__$1 = (function (){var statearr_24397 = state_24360;(statearr_24397[(9)] = inst_24303);
(statearr_24397[(10)] = inst_24301);
(statearr_24397[(20)] = inst_24300);
(statearr_24397[(21)] = inst_24302);
(statearr_24397[(27)] = inst_24335);
return statearr_24397;
})();var statearr_24398_24469 = state_24360__$1;(statearr_24398_24469[(2)] = null);
(statearr_24398_24469[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (43)))
{var state_24360__$1 = state_24360;var statearr_24399_24470 = state_24360__$1;(statearr_24399_24470[(2)] = null);
(statearr_24399_24470[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (29)))
{var inst_24344 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24400_24471 = state_24360__$1;(statearr_24400_24471[(2)] = inst_24344);
(statearr_24400_24471[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (44)))
{var inst_24353 = (state_24360[(2)]);var state_24360__$1 = (function (){var statearr_24401 = state_24360;(statearr_24401[(28)] = inst_24353);
return statearr_24401;
})();var statearr_24402_24472 = state_24360__$1;(statearr_24402_24472[(2)] = null);
(statearr_24402_24472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (6)))
{var inst_24292 = (state_24360[(29)]);var inst_24291 = cljs.core.deref.call(null,cs);var inst_24292__$1 = cljs.core.keys.call(null,inst_24291);var inst_24293 = cljs.core.count.call(null,inst_24292__$1);var inst_24294 = cljs.core.reset_BANG_.call(null,dctr,inst_24293);var inst_24299 = cljs.core.seq.call(null,inst_24292__$1);var inst_24300 = inst_24299;var inst_24301 = null;var inst_24302 = (0);var inst_24303 = (0);var state_24360__$1 = (function (){var statearr_24403 = state_24360;(statearr_24403[(9)] = inst_24303);
(statearr_24403[(10)] = inst_24301);
(statearr_24403[(20)] = inst_24300);
(statearr_24403[(21)] = inst_24302);
(statearr_24403[(30)] = inst_24294);
(statearr_24403[(29)] = inst_24292__$1);
return statearr_24403;
})();var statearr_24404_24473 = state_24360__$1;(statearr_24404_24473[(2)] = null);
(statearr_24404_24473[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (28)))
{var inst_24319 = (state_24360[(25)]);var inst_24300 = (state_24360[(20)]);var inst_24319__$1 = cljs.core.seq.call(null,inst_24300);var state_24360__$1 = (function (){var statearr_24405 = state_24360;(statearr_24405[(25)] = inst_24319__$1);
return statearr_24405;
})();if(inst_24319__$1)
{var statearr_24406_24474 = state_24360__$1;(statearr_24406_24474[(1)] = (33));
} else
{var statearr_24407_24475 = state_24360__$1;(statearr_24407_24475[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (25)))
{var inst_24303 = (state_24360[(9)]);var inst_24302 = (state_24360[(21)]);var inst_24305 = (inst_24303 < inst_24302);var inst_24306 = inst_24305;var state_24360__$1 = state_24360;if(cljs.core.truth_(inst_24306))
{var statearr_24408_24476 = state_24360__$1;(statearr_24408_24476[(1)] = (27));
} else
{var statearr_24409_24477 = state_24360__$1;(statearr_24409_24477[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (34)))
{var state_24360__$1 = state_24360;var statearr_24410_24478 = state_24360__$1;(statearr_24410_24478[(2)] = null);
(statearr_24410_24478[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (17)))
{var state_24360__$1 = state_24360;var statearr_24411_24479 = state_24360__$1;(statearr_24411_24479[(2)] = null);
(statearr_24411_24479[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (3)))
{var inst_24358 = (state_24360[(2)]);var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24360__$1,inst_24358);
} else
{if((state_val_24361 === (12)))
{var inst_24287 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24412_24480 = state_24360__$1;(statearr_24412_24480[(2)] = inst_24287);
(statearr_24412_24480[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (2)))
{var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(4),ch);
} else
{if((state_val_24361 === (23)))
{var state_24360__$1 = state_24360;var statearr_24413_24481 = state_24360__$1;(statearr_24413_24481[(2)] = null);
(statearr_24413_24481[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (35)))
{var inst_24342 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24414_24482 = state_24360__$1;(statearr_24414_24482[(2)] = inst_24342);
(statearr_24414_24482[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (19)))
{var inst_24261 = (state_24360[(7)]);var inst_24265 = cljs.core.chunk_first.call(null,inst_24261);var inst_24266 = cljs.core.chunk_rest.call(null,inst_24261);var inst_24267 = cljs.core.count.call(null,inst_24265);var inst_24241 = inst_24266;var inst_24242 = inst_24265;var inst_24243 = inst_24267;var inst_24244 = (0);var state_24360__$1 = (function (){var statearr_24415 = state_24360;(statearr_24415[(13)] = inst_24243);
(statearr_24415[(15)] = inst_24244);
(statearr_24415[(16)] = inst_24241);
(statearr_24415[(17)] = inst_24242);
return statearr_24415;
})();var statearr_24416_24483 = state_24360__$1;(statearr_24416_24483[(2)] = null);
(statearr_24416_24483[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (11)))
{var inst_24261 = (state_24360[(7)]);var inst_24241 = (state_24360[(16)]);var inst_24261__$1 = cljs.core.seq.call(null,inst_24241);var state_24360__$1 = (function (){var statearr_24417 = state_24360;(statearr_24417[(7)] = inst_24261__$1);
return statearr_24417;
})();if(inst_24261__$1)
{var statearr_24418_24484 = state_24360__$1;(statearr_24418_24484[(1)] = (16));
} else
{var statearr_24419_24485 = state_24360__$1;(statearr_24419_24485[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (9)))
{var inst_24289 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24420_24486 = state_24360__$1;(statearr_24420_24486[(2)] = inst_24289);
(statearr_24420_24486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (5)))
{var inst_24239 = cljs.core.deref.call(null,cs);var inst_24240 = cljs.core.seq.call(null,inst_24239);var inst_24241 = inst_24240;var inst_24242 = null;var inst_24243 = (0);var inst_24244 = (0);var state_24360__$1 = (function (){var statearr_24421 = state_24360;(statearr_24421[(13)] = inst_24243);
(statearr_24421[(15)] = inst_24244);
(statearr_24421[(16)] = inst_24241);
(statearr_24421[(17)] = inst_24242);
return statearr_24421;
})();var statearr_24422_24487 = state_24360__$1;(statearr_24422_24487[(2)] = null);
(statearr_24422_24487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (14)))
{var state_24360__$1 = state_24360;var statearr_24423_24488 = state_24360__$1;(statearr_24423_24488[(2)] = null);
(statearr_24423_24488[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (45)))
{var inst_24350 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24424_24489 = state_24360__$1;(statearr_24424_24489[(2)] = inst_24350);
(statearr_24424_24489[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (26)))
{var inst_24292 = (state_24360[(29)]);var inst_24346 = (state_24360[(2)]);var inst_24347 = cljs.core.seq.call(null,inst_24292);var state_24360__$1 = (function (){var statearr_24425 = state_24360;(statearr_24425[(31)] = inst_24346);
return statearr_24425;
})();if(inst_24347)
{var statearr_24426_24490 = state_24360__$1;(statearr_24426_24490[(1)] = (42));
} else
{var statearr_24427_24491 = state_24360__$1;(statearr_24427_24491[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (16)))
{var inst_24261 = (state_24360[(7)]);var inst_24263 = cljs.core.chunked_seq_QMARK_.call(null,inst_24261);var state_24360__$1 = state_24360;if(inst_24263)
{var statearr_24428_24492 = state_24360__$1;(statearr_24428_24492[(1)] = (19));
} else
{var statearr_24429_24493 = state_24360__$1;(statearr_24429_24493[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (38)))
{var inst_24339 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24430_24494 = state_24360__$1;(statearr_24430_24494[(2)] = inst_24339);
(statearr_24430_24494[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (30)))
{var state_24360__$1 = state_24360;var statearr_24431_24495 = state_24360__$1;(statearr_24431_24495[(2)] = null);
(statearr_24431_24495[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (10)))
{var inst_24244 = (state_24360[(15)]);var inst_24242 = (state_24360[(17)]);var inst_24250 = cljs.core._nth.call(null,inst_24242,inst_24244);var inst_24251 = cljs.core.nth.call(null,inst_24250,(0),null);var inst_24252 = cljs.core.nth.call(null,inst_24250,(1),null);var state_24360__$1 = (function (){var statearr_24432 = state_24360;(statearr_24432[(26)] = inst_24251);
return statearr_24432;
})();if(cljs.core.truth_(inst_24252))
{var statearr_24433_24496 = state_24360__$1;(statearr_24433_24496[(1)] = (13));
} else
{var statearr_24434_24497 = state_24360__$1;(statearr_24434_24497[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (18)))
{var inst_24285 = (state_24360[(2)]);var state_24360__$1 = state_24360;var statearr_24435_24498 = state_24360__$1;(statearr_24435_24498[(2)] = inst_24285);
(statearr_24435_24498[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (42)))
{var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(45),dchan);
} else
{if((state_val_24361 === (37)))
{var inst_24232 = (state_24360[(11)]);var inst_24319 = (state_24360[(25)]);var inst_24328 = (state_24360[(23)]);var inst_24328__$1 = cljs.core.first.call(null,inst_24319);var inst_24329 = cljs.core.async.put_BANG_.call(null,inst_24328__$1,inst_24232,done);var state_24360__$1 = (function (){var statearr_24436 = state_24360;(statearr_24436[(23)] = inst_24328__$1);
return statearr_24436;
})();if(cljs.core.truth_(inst_24329))
{var statearr_24437_24499 = state_24360__$1;(statearr_24437_24499[(1)] = (39));
} else
{var statearr_24438_24500 = state_24360__$1;(statearr_24438_24500[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24361 === (8)))
{var inst_24243 = (state_24360[(13)]);var inst_24244 = (state_24360[(15)]);var inst_24246 = (inst_24244 < inst_24243);var inst_24247 = inst_24246;var state_24360__$1 = state_24360;if(cljs.core.truth_(inst_24247))
{var statearr_24439_24501 = state_24360__$1;(statearr_24439_24501[(1)] = (10));
} else
{var statearr_24440_24502 = state_24360__$1;(statearr_24440_24502[(1)] = (11));
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
});})(c__9125__auto___24448,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24448,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24444[(0)] = state_machine__9111__auto__);
(statearr_24444[(1)] = (1));
return statearr_24444;
});
var state_machine__9111__auto____1 = (function (state_24360){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24360);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24445){if((e24445 instanceof Object))
{var ex__9114__auto__ = e24445;var statearr_24446_24503 = state_24360;(statearr_24446_24503[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24445;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24504 = state_24360;
state_24360 = G__24504;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24448,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24447 = f__9126__auto__.call(null);(statearr_24447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24448);
return statearr_24447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24448,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24506 = {};return obj24506;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24507){var map__24512 = p__24507;var map__24512__$1 = ((cljs.core.seq_QMARK_.call(null,map__24512))?cljs.core.apply.call(null,cljs.core.hash_map,map__24512):map__24512);var opts = map__24512__$1;var statearr_24513_24516 = state;(statearr_24513_24516[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24512,map__24512__$1,opts){
return (function (val){var statearr_24514_24517 = state;(statearr_24514_24517[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24512,map__24512__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24515_24518 = state;(statearr_24515_24518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24507 = null;if (arguments.length > 3) {
  p__24507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24507);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24519){
var state = cljs.core.first(arglist__24519);
arglist__24519 = cljs.core.next(arglist__24519);
var cont_block = cljs.core.first(arglist__24519);
arglist__24519 = cljs.core.next(arglist__24519);
var ports = cljs.core.first(arglist__24519);
var p__24507 = cljs.core.rest(arglist__24519);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24507);
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
;var m = (function (){if(typeof cljs.core.async.t24639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24639 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24640){
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
this.meta24640 = meta24640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24639.cljs$lang$type = true;
cljs.core.async.t24639.cljs$lang$ctorStr = "cljs.core.async/t24639";
cljs.core.async.t24639.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24639");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24641){var self__ = this;
var _24641__$1 = this;return self__.meta24640;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24641,meta24640__$1){var self__ = this;
var _24641__$1 = this;return (new cljs.core.async.t24639(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24640__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24639 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24640){return (new cljs.core.async.t24639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24640));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24639(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24711){var state_val_24712 = (state_24711[(1)]);if((state_val_24712 === (7)))
{var inst_24655 = (state_24711[(7)]);var inst_24660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24655);var state_24711__$1 = state_24711;var statearr_24713_24759 = state_24711__$1;(statearr_24713_24759[(2)] = inst_24660);
(statearr_24713_24759[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (20)))
{var inst_24670 = (state_24711[(8)]);var state_24711__$1 = state_24711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24711__$1,(23),out,inst_24670);
} else
{if((state_val_24712 === (1)))
{var inst_24645 = (state_24711[(9)]);var inst_24645__$1 = calc_state.call(null);var inst_24646 = cljs.core.seq_QMARK_.call(null,inst_24645__$1);var state_24711__$1 = (function (){var statearr_24714 = state_24711;(statearr_24714[(9)] = inst_24645__$1);
return statearr_24714;
})();if(inst_24646)
{var statearr_24715_24760 = state_24711__$1;(statearr_24715_24760[(1)] = (2));
} else
{var statearr_24716_24761 = state_24711__$1;(statearr_24716_24761[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (24)))
{var inst_24663 = (state_24711[(10)]);var inst_24655 = inst_24663;var state_24711__$1 = (function (){var statearr_24717 = state_24711;(statearr_24717[(7)] = inst_24655);
return statearr_24717;
})();var statearr_24718_24762 = state_24711__$1;(statearr_24718_24762[(2)] = null);
(statearr_24718_24762[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (4)))
{var inst_24645 = (state_24711[(9)]);var inst_24651 = (state_24711[(2)]);var inst_24652 = cljs.core.get.call(null,inst_24651,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24653 = cljs.core.get.call(null,inst_24651,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24654 = cljs.core.get.call(null,inst_24651,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24655 = inst_24645;var state_24711__$1 = (function (){var statearr_24719 = state_24711;(statearr_24719[(11)] = inst_24654);
(statearr_24719[(12)] = inst_24653);
(statearr_24719[(7)] = inst_24655);
(statearr_24719[(13)] = inst_24652);
return statearr_24719;
})();var statearr_24720_24763 = state_24711__$1;(statearr_24720_24763[(2)] = null);
(statearr_24720_24763[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (15)))
{var state_24711__$1 = state_24711;var statearr_24721_24764 = state_24711__$1;(statearr_24721_24764[(2)] = null);
(statearr_24721_24764[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (21)))
{var inst_24663 = (state_24711[(10)]);var inst_24655 = inst_24663;var state_24711__$1 = (function (){var statearr_24722 = state_24711;(statearr_24722[(7)] = inst_24655);
return statearr_24722;
})();var statearr_24723_24765 = state_24711__$1;(statearr_24723_24765[(2)] = null);
(statearr_24723_24765[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (13)))
{var inst_24707 = (state_24711[(2)]);var state_24711__$1 = state_24711;var statearr_24724_24766 = state_24711__$1;(statearr_24724_24766[(2)] = inst_24707);
(statearr_24724_24766[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (22)))
{var inst_24705 = (state_24711[(2)]);var state_24711__$1 = state_24711;var statearr_24725_24767 = state_24711__$1;(statearr_24725_24767[(2)] = inst_24705);
(statearr_24725_24767[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (6)))
{var inst_24709 = (state_24711[(2)]);var state_24711__$1 = state_24711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else
{if((state_val_24712 === (25)))
{var state_24711__$1 = state_24711;var statearr_24726_24768 = state_24711__$1;(statearr_24726_24768[(2)] = null);
(statearr_24726_24768[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (17)))
{var inst_24685 = (state_24711[(14)]);var state_24711__$1 = state_24711;var statearr_24727_24769 = state_24711__$1;(statearr_24727_24769[(2)] = inst_24685);
(statearr_24727_24769[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (3)))
{var inst_24645 = (state_24711[(9)]);var state_24711__$1 = state_24711;var statearr_24728_24770 = state_24711__$1;(statearr_24728_24770[(2)] = inst_24645);
(statearr_24728_24770[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (12)))
{var inst_24671 = (state_24711[(15)]);var inst_24685 = (state_24711[(14)]);var inst_24666 = (state_24711[(16)]);var inst_24685__$1 = inst_24666.call(null,inst_24671);var state_24711__$1 = (function (){var statearr_24729 = state_24711;(statearr_24729[(14)] = inst_24685__$1);
return statearr_24729;
})();if(cljs.core.truth_(inst_24685__$1))
{var statearr_24730_24771 = state_24711__$1;(statearr_24730_24771[(1)] = (17));
} else
{var statearr_24731_24772 = state_24711__$1;(statearr_24731_24772[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (2)))
{var inst_24645 = (state_24711[(9)]);var inst_24648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24645);var state_24711__$1 = state_24711;var statearr_24732_24773 = state_24711__$1;(statearr_24732_24773[(2)] = inst_24648);
(statearr_24732_24773[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (23)))
{var inst_24696 = (state_24711[(2)]);var state_24711__$1 = state_24711;if(cljs.core.truth_(inst_24696))
{var statearr_24733_24774 = state_24711__$1;(statearr_24733_24774[(1)] = (24));
} else
{var statearr_24734_24775 = state_24711__$1;(statearr_24734_24775[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (19)))
{var inst_24693 = (state_24711[(2)]);var state_24711__$1 = state_24711;if(cljs.core.truth_(inst_24693))
{var statearr_24735_24776 = state_24711__$1;(statearr_24735_24776[(1)] = (20));
} else
{var statearr_24736_24777 = state_24711__$1;(statearr_24736_24777[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (11)))
{var inst_24670 = (state_24711[(8)]);var inst_24676 = (inst_24670 == null);var state_24711__$1 = state_24711;if(cljs.core.truth_(inst_24676))
{var statearr_24737_24778 = state_24711__$1;(statearr_24737_24778[(1)] = (14));
} else
{var statearr_24738_24779 = state_24711__$1;(statearr_24738_24779[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (9)))
{var inst_24663 = (state_24711[(10)]);var inst_24663__$1 = (state_24711[(2)]);var inst_24664 = cljs.core.get.call(null,inst_24663__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24665 = cljs.core.get.call(null,inst_24663__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24666 = cljs.core.get.call(null,inst_24663__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24711__$1 = (function (){var statearr_24739 = state_24711;(statearr_24739[(10)] = inst_24663__$1);
(statearr_24739[(17)] = inst_24665);
(statearr_24739[(16)] = inst_24666);
return statearr_24739;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24711__$1,(10),inst_24664);
} else
{if((state_val_24712 === (5)))
{var inst_24655 = (state_24711[(7)]);var inst_24658 = cljs.core.seq_QMARK_.call(null,inst_24655);var state_24711__$1 = state_24711;if(inst_24658)
{var statearr_24740_24780 = state_24711__$1;(statearr_24740_24780[(1)] = (7));
} else
{var statearr_24741_24781 = state_24711__$1;(statearr_24741_24781[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (14)))
{var inst_24671 = (state_24711[(15)]);var inst_24678 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24671);var state_24711__$1 = state_24711;var statearr_24742_24782 = state_24711__$1;(statearr_24742_24782[(2)] = inst_24678);
(statearr_24742_24782[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (26)))
{var inst_24701 = (state_24711[(2)]);var state_24711__$1 = state_24711;var statearr_24743_24783 = state_24711__$1;(statearr_24743_24783[(2)] = inst_24701);
(statearr_24743_24783[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (16)))
{var inst_24681 = (state_24711[(2)]);var inst_24682 = calc_state.call(null);var inst_24655 = inst_24682;var state_24711__$1 = (function (){var statearr_24744 = state_24711;(statearr_24744[(18)] = inst_24681);
(statearr_24744[(7)] = inst_24655);
return statearr_24744;
})();var statearr_24745_24784 = state_24711__$1;(statearr_24745_24784[(2)] = null);
(statearr_24745_24784[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (10)))
{var inst_24671 = (state_24711[(15)]);var inst_24670 = (state_24711[(8)]);var inst_24669 = (state_24711[(2)]);var inst_24670__$1 = cljs.core.nth.call(null,inst_24669,(0),null);var inst_24671__$1 = cljs.core.nth.call(null,inst_24669,(1),null);var inst_24672 = (inst_24670__$1 == null);var inst_24673 = cljs.core._EQ_.call(null,inst_24671__$1,change);var inst_24674 = (inst_24672) || (inst_24673);var state_24711__$1 = (function (){var statearr_24746 = state_24711;(statearr_24746[(15)] = inst_24671__$1);
(statearr_24746[(8)] = inst_24670__$1);
return statearr_24746;
})();if(cljs.core.truth_(inst_24674))
{var statearr_24747_24785 = state_24711__$1;(statearr_24747_24785[(1)] = (11));
} else
{var statearr_24748_24786 = state_24711__$1;(statearr_24748_24786[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (18)))
{var inst_24671 = (state_24711[(15)]);var inst_24665 = (state_24711[(17)]);var inst_24666 = (state_24711[(16)]);var inst_24688 = cljs.core.empty_QMARK_.call(null,inst_24666);var inst_24689 = inst_24665.call(null,inst_24671);var inst_24690 = cljs.core.not.call(null,inst_24689);var inst_24691 = (inst_24688) && (inst_24690);var state_24711__$1 = state_24711;var statearr_24749_24787 = state_24711__$1;(statearr_24749_24787[(2)] = inst_24691);
(statearr_24749_24787[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24712 === (8)))
{var inst_24655 = (state_24711[(7)]);var state_24711__$1 = state_24711;var statearr_24750_24788 = state_24711__$1;(statearr_24750_24788[(2)] = inst_24655);
(statearr_24750_24788[(1)] = (9));
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
});})(c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24754[(0)] = state_machine__9111__auto__);
(statearr_24754[(1)] = (1));
return statearr_24754;
});
var state_machine__9111__auto____1 = (function (state_24711){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24711);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object))
{var ex__9114__auto__ = e24755;var statearr_24756_24789 = state_24711;(statearr_24756_24789[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24755;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24790 = state_24711;
state_24711 = G__24790;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24757 = f__9126__auto__.call(null);(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24758);
return statearr_24757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24792 = {};return obj24792;
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
return (function (p1__24793_SHARP_){if(cljs.core.truth_(p1__24793_SHARP_.call(null,topic)))
{return p1__24793_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24793_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24916 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24917){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24917 = meta24917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24916.cljs$lang$type = true;
cljs.core.async.t24916.cljs$lang$ctorStr = "cljs.core.async/t24916";
cljs.core.async.t24916.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24916");
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24918){var self__ = this;
var _24918__$1 = this;return self__.meta24917;
});})(mults,ensure_mult))
;
cljs.core.async.t24916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24918,meta24917__$1){var self__ = this;
var _24918__$1 = this;return (new cljs.core.async.t24916(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24917__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24916 = ((function (mults,ensure_mult){
return (function __GT_t24916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24917){return (new cljs.core.async.t24916(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24917));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24916(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25038,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25038,mults,ensure_mult,p){
return (function (state_24990){var state_val_24991 = (state_24990[(1)]);if((state_val_24991 === (7)))
{var inst_24986 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_24992_25039 = state_24990__$1;(statearr_24992_25039[(2)] = inst_24986);
(statearr_24992_25039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (20)))
{var state_24990__$1 = state_24990;var statearr_24993_25040 = state_24990__$1;(statearr_24993_25040[(2)] = null);
(statearr_24993_25040[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (1)))
{var state_24990__$1 = state_24990;var statearr_24994_25041 = state_24990__$1;(statearr_24994_25041[(2)] = null);
(statearr_24994_25041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (24)))
{var inst_24969 = (state_24990[(7)]);var inst_24978 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24969);var state_24990__$1 = state_24990;var statearr_24995_25042 = state_24990__$1;(statearr_24995_25042[(2)] = inst_24978);
(statearr_24995_25042[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (4)))
{var inst_24921 = (state_24990[(8)]);var inst_24921__$1 = (state_24990[(2)]);var inst_24922 = (inst_24921__$1 == null);var state_24990__$1 = (function (){var statearr_24996 = state_24990;(statearr_24996[(8)] = inst_24921__$1);
return statearr_24996;
})();if(cljs.core.truth_(inst_24922))
{var statearr_24997_25043 = state_24990__$1;(statearr_24997_25043[(1)] = (5));
} else
{var statearr_24998_25044 = state_24990__$1;(statearr_24998_25044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (15)))
{var inst_24963 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_24999_25045 = state_24990__$1;(statearr_24999_25045[(2)] = inst_24963);
(statearr_24999_25045[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (21)))
{var inst_24983 = (state_24990[(2)]);var state_24990__$1 = (function (){var statearr_25000 = state_24990;(statearr_25000[(9)] = inst_24983);
return statearr_25000;
})();var statearr_25001_25046 = state_24990__$1;(statearr_25001_25046[(2)] = null);
(statearr_25001_25046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (13)))
{var inst_24945 = (state_24990[(10)]);var inst_24947 = cljs.core.chunked_seq_QMARK_.call(null,inst_24945);var state_24990__$1 = state_24990;if(inst_24947)
{var statearr_25002_25047 = state_24990__$1;(statearr_25002_25047[(1)] = (16));
} else
{var statearr_25003_25048 = state_24990__$1;(statearr_25003_25048[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (22)))
{var inst_24975 = (state_24990[(2)]);var state_24990__$1 = state_24990;if(cljs.core.truth_(inst_24975))
{var statearr_25004_25049 = state_24990__$1;(statearr_25004_25049[(1)] = (23));
} else
{var statearr_25005_25050 = state_24990__$1;(statearr_25005_25050[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (6)))
{var inst_24969 = (state_24990[(7)]);var inst_24921 = (state_24990[(8)]);var inst_24971 = (state_24990[(11)]);var inst_24969__$1 = topic_fn.call(null,inst_24921);var inst_24970 = cljs.core.deref.call(null,mults);var inst_24971__$1 = cljs.core.get.call(null,inst_24970,inst_24969__$1);var state_24990__$1 = (function (){var statearr_25006 = state_24990;(statearr_25006[(7)] = inst_24969__$1);
(statearr_25006[(11)] = inst_24971__$1);
return statearr_25006;
})();if(cljs.core.truth_(inst_24971__$1))
{var statearr_25007_25051 = state_24990__$1;(statearr_25007_25051[(1)] = (19));
} else
{var statearr_25008_25052 = state_24990__$1;(statearr_25008_25052[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (25)))
{var inst_24980 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_25009_25053 = state_24990__$1;(statearr_25009_25053[(2)] = inst_24980);
(statearr_25009_25053[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (17)))
{var inst_24945 = (state_24990[(10)]);var inst_24954 = cljs.core.first.call(null,inst_24945);var inst_24955 = cljs.core.async.muxch_STAR_.call(null,inst_24954);var inst_24956 = cljs.core.async.close_BANG_.call(null,inst_24955);var inst_24957 = cljs.core.next.call(null,inst_24945);var inst_24931 = inst_24957;var inst_24932 = null;var inst_24933 = (0);var inst_24934 = (0);var state_24990__$1 = (function (){var statearr_25010 = state_24990;(statearr_25010[(12)] = inst_24931);
(statearr_25010[(13)] = inst_24934);
(statearr_25010[(14)] = inst_24933);
(statearr_25010[(15)] = inst_24956);
(statearr_25010[(16)] = inst_24932);
return statearr_25010;
})();var statearr_25011_25054 = state_24990__$1;(statearr_25011_25054[(2)] = null);
(statearr_25011_25054[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (3)))
{var inst_24988 = (state_24990[(2)]);var state_24990__$1 = state_24990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else
{if((state_val_24991 === (12)))
{var inst_24965 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_25012_25055 = state_24990__$1;(statearr_25012_25055[(2)] = inst_24965);
(statearr_25012_25055[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (2)))
{var state_24990__$1 = state_24990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(4),ch);
} else
{if((state_val_24991 === (23)))
{var state_24990__$1 = state_24990;var statearr_25013_25056 = state_24990__$1;(statearr_25013_25056[(2)] = null);
(statearr_25013_25056[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (19)))
{var inst_24921 = (state_24990[(8)]);var inst_24971 = (state_24990[(11)]);var inst_24973 = cljs.core.async.muxch_STAR_.call(null,inst_24971);var state_24990__$1 = state_24990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24990__$1,(22),inst_24973,inst_24921);
} else
{if((state_val_24991 === (11)))
{var inst_24931 = (state_24990[(12)]);var inst_24945 = (state_24990[(10)]);var inst_24945__$1 = cljs.core.seq.call(null,inst_24931);var state_24990__$1 = (function (){var statearr_25014 = state_24990;(statearr_25014[(10)] = inst_24945__$1);
return statearr_25014;
})();if(inst_24945__$1)
{var statearr_25015_25057 = state_24990__$1;(statearr_25015_25057[(1)] = (13));
} else
{var statearr_25016_25058 = state_24990__$1;(statearr_25016_25058[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (9)))
{var inst_24967 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_25017_25059 = state_24990__$1;(statearr_25017_25059[(2)] = inst_24967);
(statearr_25017_25059[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (5)))
{var inst_24928 = cljs.core.deref.call(null,mults);var inst_24929 = cljs.core.vals.call(null,inst_24928);var inst_24930 = cljs.core.seq.call(null,inst_24929);var inst_24931 = inst_24930;var inst_24932 = null;var inst_24933 = (0);var inst_24934 = (0);var state_24990__$1 = (function (){var statearr_25018 = state_24990;(statearr_25018[(12)] = inst_24931);
(statearr_25018[(13)] = inst_24934);
(statearr_25018[(14)] = inst_24933);
(statearr_25018[(16)] = inst_24932);
return statearr_25018;
})();var statearr_25019_25060 = state_24990__$1;(statearr_25019_25060[(2)] = null);
(statearr_25019_25060[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (14)))
{var state_24990__$1 = state_24990;var statearr_25023_25061 = state_24990__$1;(statearr_25023_25061[(2)] = null);
(statearr_25023_25061[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (16)))
{var inst_24945 = (state_24990[(10)]);var inst_24949 = cljs.core.chunk_first.call(null,inst_24945);var inst_24950 = cljs.core.chunk_rest.call(null,inst_24945);var inst_24951 = cljs.core.count.call(null,inst_24949);var inst_24931 = inst_24950;var inst_24932 = inst_24949;var inst_24933 = inst_24951;var inst_24934 = (0);var state_24990__$1 = (function (){var statearr_25024 = state_24990;(statearr_25024[(12)] = inst_24931);
(statearr_25024[(13)] = inst_24934);
(statearr_25024[(14)] = inst_24933);
(statearr_25024[(16)] = inst_24932);
return statearr_25024;
})();var statearr_25025_25062 = state_24990__$1;(statearr_25025_25062[(2)] = null);
(statearr_25025_25062[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (10)))
{var inst_24931 = (state_24990[(12)]);var inst_24934 = (state_24990[(13)]);var inst_24933 = (state_24990[(14)]);var inst_24932 = (state_24990[(16)]);var inst_24939 = cljs.core._nth.call(null,inst_24932,inst_24934);var inst_24940 = cljs.core.async.muxch_STAR_.call(null,inst_24939);var inst_24941 = cljs.core.async.close_BANG_.call(null,inst_24940);var inst_24942 = (inst_24934 + (1));var tmp25020 = inst_24931;var tmp25021 = inst_24933;var tmp25022 = inst_24932;var inst_24931__$1 = tmp25020;var inst_24932__$1 = tmp25022;var inst_24933__$1 = tmp25021;var inst_24934__$1 = inst_24942;var state_24990__$1 = (function (){var statearr_25026 = state_24990;(statearr_25026[(17)] = inst_24941);
(statearr_25026[(12)] = inst_24931__$1);
(statearr_25026[(13)] = inst_24934__$1);
(statearr_25026[(14)] = inst_24933__$1);
(statearr_25026[(16)] = inst_24932__$1);
return statearr_25026;
})();var statearr_25027_25063 = state_24990__$1;(statearr_25027_25063[(2)] = null);
(statearr_25027_25063[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (18)))
{var inst_24960 = (state_24990[(2)]);var state_24990__$1 = state_24990;var statearr_25028_25064 = state_24990__$1;(statearr_25028_25064[(2)] = inst_24960);
(statearr_25028_25064[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24991 === (8)))
{var inst_24934 = (state_24990[(13)]);var inst_24933 = (state_24990[(14)]);var inst_24936 = (inst_24934 < inst_24933);var inst_24937 = inst_24936;var state_24990__$1 = state_24990;if(cljs.core.truth_(inst_24937))
{var statearr_25029_25065 = state_24990__$1;(statearr_25029_25065[(1)] = (10));
} else
{var statearr_25030_25066 = state_24990__$1;(statearr_25030_25066[(1)] = (11));
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
});})(c__9125__auto___25038,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25038,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25034[(0)] = state_machine__9111__auto__);
(statearr_25034[(1)] = (1));
return statearr_25034;
});
var state_machine__9111__auto____1 = (function (state_24990){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24990);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25035){if((e25035 instanceof Object))
{var ex__9114__auto__ = e25035;var statearr_25036_25067 = state_24990;(statearr_25036_25067[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25068 = state_24990;
state_24990 = G__25068;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25038,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25037 = f__9126__auto__.call(null);(statearr_25037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25038);
return statearr_25037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25038,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25205 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25175){var state_val_25176 = (state_25175[(1)]);if((state_val_25176 === (7)))
{var state_25175__$1 = state_25175;var statearr_25177_25206 = state_25175__$1;(statearr_25177_25206[(2)] = null);
(statearr_25177_25206[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (1)))
{var state_25175__$1 = state_25175;var statearr_25178_25207 = state_25175__$1;(statearr_25178_25207[(2)] = null);
(statearr_25178_25207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (4)))
{var inst_25139 = (state_25175[(7)]);var inst_25141 = (inst_25139 < cnt);var state_25175__$1 = state_25175;if(cljs.core.truth_(inst_25141))
{var statearr_25179_25208 = state_25175__$1;(statearr_25179_25208[(1)] = (6));
} else
{var statearr_25180_25209 = state_25175__$1;(statearr_25180_25209[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (15)))
{var inst_25171 = (state_25175[(2)]);var state_25175__$1 = state_25175;var statearr_25181_25210 = state_25175__$1;(statearr_25181_25210[(2)] = inst_25171);
(statearr_25181_25210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (13)))
{var inst_25164 = cljs.core.async.close_BANG_.call(null,out);var state_25175__$1 = state_25175;var statearr_25182_25211 = state_25175__$1;(statearr_25182_25211[(2)] = inst_25164);
(statearr_25182_25211[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (6)))
{var state_25175__$1 = state_25175;var statearr_25183_25212 = state_25175__$1;(statearr_25183_25212[(2)] = null);
(statearr_25183_25212[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (3)))
{var inst_25173 = (state_25175[(2)]);var state_25175__$1 = state_25175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25175__$1,inst_25173);
} else
{if((state_val_25176 === (12)))
{var inst_25161 = (state_25175[(8)]);var inst_25161__$1 = (state_25175[(2)]);var inst_25162 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25161__$1);var state_25175__$1 = (function (){var statearr_25184 = state_25175;(statearr_25184[(8)] = inst_25161__$1);
return statearr_25184;
})();if(cljs.core.truth_(inst_25162))
{var statearr_25185_25213 = state_25175__$1;(statearr_25185_25213[(1)] = (13));
} else
{var statearr_25186_25214 = state_25175__$1;(statearr_25186_25214[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (2)))
{var inst_25138 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25139 = (0);var state_25175__$1 = (function (){var statearr_25187 = state_25175;(statearr_25187[(9)] = inst_25138);
(statearr_25187[(7)] = inst_25139);
return statearr_25187;
})();var statearr_25188_25215 = state_25175__$1;(statearr_25188_25215[(2)] = null);
(statearr_25188_25215[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (11)))
{var inst_25139 = (state_25175[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25175,(10),Object,null,(9));var inst_25148 = chs__$1.call(null,inst_25139);var inst_25149 = done.call(null,inst_25139);var inst_25150 = cljs.core.async.take_BANG_.call(null,inst_25148,inst_25149);var state_25175__$1 = state_25175;var statearr_25189_25216 = state_25175__$1;(statearr_25189_25216[(2)] = inst_25150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25175__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (9)))
{var inst_25139 = (state_25175[(7)]);var inst_25152 = (state_25175[(2)]);var inst_25153 = (inst_25139 + (1));var inst_25139__$1 = inst_25153;var state_25175__$1 = (function (){var statearr_25190 = state_25175;(statearr_25190[(10)] = inst_25152);
(statearr_25190[(7)] = inst_25139__$1);
return statearr_25190;
})();var statearr_25191_25217 = state_25175__$1;(statearr_25191_25217[(2)] = null);
(statearr_25191_25217[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (5)))
{var inst_25159 = (state_25175[(2)]);var state_25175__$1 = (function (){var statearr_25192 = state_25175;(statearr_25192[(11)] = inst_25159);
return statearr_25192;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25175__$1,(12),dchan);
} else
{if((state_val_25176 === (14)))
{var inst_25161 = (state_25175[(8)]);var inst_25166 = cljs.core.apply.call(null,f,inst_25161);var state_25175__$1 = state_25175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25175__$1,(16),out,inst_25166);
} else
{if((state_val_25176 === (16)))
{var inst_25168 = (state_25175[(2)]);var state_25175__$1 = (function (){var statearr_25193 = state_25175;(statearr_25193[(12)] = inst_25168);
return statearr_25193;
})();var statearr_25194_25218 = state_25175__$1;(statearr_25194_25218[(2)] = null);
(statearr_25194_25218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (10)))
{var inst_25143 = (state_25175[(2)]);var inst_25144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25175__$1 = (function (){var statearr_25195 = state_25175;(statearr_25195[(13)] = inst_25143);
return statearr_25195;
})();var statearr_25196_25219 = state_25175__$1;(statearr_25196_25219[(2)] = inst_25144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25175__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25176 === (8)))
{var inst_25157 = (state_25175[(2)]);var state_25175__$1 = state_25175;var statearr_25197_25220 = state_25175__$1;(statearr_25197_25220[(2)] = inst_25157);
(statearr_25197_25220[(1)] = (5));
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
});})(c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25201[(0)] = state_machine__9111__auto__);
(statearr_25201[(1)] = (1));
return statearr_25201;
});
var state_machine__9111__auto____1 = (function (state_25175){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25175);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25202){if((e25202 instanceof Object))
{var ex__9114__auto__ = e25202;var statearr_25203_25221 = state_25175;(statearr_25203_25221[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25202;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25222 = state_25175;
state_25175 = G__25222;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25175){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25204 = f__9126__auto__.call(null);(statearr_25204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25205);
return statearr_25204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25205,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25330,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25330,out){
return (function (state_25306){var state_val_25307 = (state_25306[(1)]);if((state_val_25307 === (7)))
{var inst_25286 = (state_25306[(7)]);var inst_25285 = (state_25306[(8)]);var inst_25285__$1 = (state_25306[(2)]);var inst_25286__$1 = cljs.core.nth.call(null,inst_25285__$1,(0),null);var inst_25287 = cljs.core.nth.call(null,inst_25285__$1,(1),null);var inst_25288 = (inst_25286__$1 == null);var state_25306__$1 = (function (){var statearr_25308 = state_25306;(statearr_25308[(7)] = inst_25286__$1);
(statearr_25308[(8)] = inst_25285__$1);
(statearr_25308[(9)] = inst_25287);
return statearr_25308;
})();if(cljs.core.truth_(inst_25288))
{var statearr_25309_25331 = state_25306__$1;(statearr_25309_25331[(1)] = (8));
} else
{var statearr_25310_25332 = state_25306__$1;(statearr_25310_25332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (1)))
{var inst_25277 = cljs.core.vec.call(null,chs);var inst_25278 = inst_25277;var state_25306__$1 = (function (){var statearr_25311 = state_25306;(statearr_25311[(10)] = inst_25278);
return statearr_25311;
})();var statearr_25312_25333 = state_25306__$1;(statearr_25312_25333[(2)] = null);
(statearr_25312_25333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (4)))
{var inst_25278 = (state_25306[(10)]);var state_25306__$1 = state_25306;return cljs.core.async.ioc_alts_BANG_.call(null,state_25306__$1,(7),inst_25278);
} else
{if((state_val_25307 === (6)))
{var inst_25302 = (state_25306[(2)]);var state_25306__$1 = state_25306;var statearr_25313_25334 = state_25306__$1;(statearr_25313_25334[(2)] = inst_25302);
(statearr_25313_25334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (3)))
{var inst_25304 = (state_25306[(2)]);var state_25306__$1 = state_25306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,inst_25304);
} else
{if((state_val_25307 === (2)))
{var inst_25278 = (state_25306[(10)]);var inst_25280 = cljs.core.count.call(null,inst_25278);var inst_25281 = (inst_25280 > (0));var state_25306__$1 = state_25306;if(cljs.core.truth_(inst_25281))
{var statearr_25315_25335 = state_25306__$1;(statearr_25315_25335[(1)] = (4));
} else
{var statearr_25316_25336 = state_25306__$1;(statearr_25316_25336[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (11)))
{var inst_25278 = (state_25306[(10)]);var inst_25295 = (state_25306[(2)]);var tmp25314 = inst_25278;var inst_25278__$1 = tmp25314;var state_25306__$1 = (function (){var statearr_25317 = state_25306;(statearr_25317[(10)] = inst_25278__$1);
(statearr_25317[(11)] = inst_25295);
return statearr_25317;
})();var statearr_25318_25337 = state_25306__$1;(statearr_25318_25337[(2)] = null);
(statearr_25318_25337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (9)))
{var inst_25286 = (state_25306[(7)]);var state_25306__$1 = state_25306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25306__$1,(11),out,inst_25286);
} else
{if((state_val_25307 === (5)))
{var inst_25300 = cljs.core.async.close_BANG_.call(null,out);var state_25306__$1 = state_25306;var statearr_25319_25338 = state_25306__$1;(statearr_25319_25338[(2)] = inst_25300);
(statearr_25319_25338[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (10)))
{var inst_25298 = (state_25306[(2)]);var state_25306__$1 = state_25306;var statearr_25320_25339 = state_25306__$1;(statearr_25320_25339[(2)] = inst_25298);
(statearr_25320_25339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25307 === (8)))
{var inst_25286 = (state_25306[(7)]);var inst_25278 = (state_25306[(10)]);var inst_25285 = (state_25306[(8)]);var inst_25287 = (state_25306[(9)]);var inst_25290 = (function (){var c = inst_25287;var v = inst_25286;var vec__25283 = inst_25285;var cs = inst_25278;return ((function (c,v,vec__25283,cs,inst_25286,inst_25278,inst_25285,inst_25287,state_val_25307,c__9125__auto___25330,out){
return (function (p1__25223_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25223_SHARP_);
});
;})(c,v,vec__25283,cs,inst_25286,inst_25278,inst_25285,inst_25287,state_val_25307,c__9125__auto___25330,out))
})();var inst_25291 = cljs.core.filterv.call(null,inst_25290,inst_25278);var inst_25278__$1 = inst_25291;var state_25306__$1 = (function (){var statearr_25321 = state_25306;(statearr_25321[(10)] = inst_25278__$1);
return statearr_25321;
})();var statearr_25322_25340 = state_25306__$1;(statearr_25322_25340[(2)] = null);
(statearr_25322_25340[(1)] = (2));
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
});})(c__9125__auto___25330,out))
;return ((function (switch__9110__auto__,c__9125__auto___25330,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25326 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25326[(0)] = state_machine__9111__auto__);
(statearr_25326[(1)] = (1));
return statearr_25326;
});
var state_machine__9111__auto____1 = (function (state_25306){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25306);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25327){if((e25327 instanceof Object))
{var ex__9114__auto__ = e25327;var statearr_25328_25341 = state_25306;(statearr_25328_25341[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25342 = state_25306;
state_25306 = G__25342;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25330,out))
})();var state__9127__auto__ = (function (){var statearr_25329 = f__9126__auto__.call(null);(statearr_25329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25330);
return statearr_25329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25330,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25435,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25435,out){
return (function (state_25412){var state_val_25413 = (state_25412[(1)]);if((state_val_25413 === (7)))
{var inst_25394 = (state_25412[(7)]);var inst_25394__$1 = (state_25412[(2)]);var inst_25395 = (inst_25394__$1 == null);var inst_25396 = cljs.core.not.call(null,inst_25395);var state_25412__$1 = (function (){var statearr_25414 = state_25412;(statearr_25414[(7)] = inst_25394__$1);
return statearr_25414;
})();if(inst_25396)
{var statearr_25415_25436 = state_25412__$1;(statearr_25415_25436[(1)] = (8));
} else
{var statearr_25416_25437 = state_25412__$1;(statearr_25416_25437[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (1)))
{var inst_25389 = (0);var state_25412__$1 = (function (){var statearr_25417 = state_25412;(statearr_25417[(8)] = inst_25389);
return statearr_25417;
})();var statearr_25418_25438 = state_25412__$1;(statearr_25418_25438[(2)] = null);
(statearr_25418_25438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (4)))
{var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25412__$1,(7),ch);
} else
{if((state_val_25413 === (6)))
{var inst_25407 = (state_25412[(2)]);var state_25412__$1 = state_25412;var statearr_25419_25439 = state_25412__$1;(statearr_25419_25439[(2)] = inst_25407);
(statearr_25419_25439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (3)))
{var inst_25409 = (state_25412[(2)]);var inst_25410 = cljs.core.async.close_BANG_.call(null,out);var state_25412__$1 = (function (){var statearr_25420 = state_25412;(statearr_25420[(9)] = inst_25409);
return statearr_25420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25412__$1,inst_25410);
} else
{if((state_val_25413 === (2)))
{var inst_25389 = (state_25412[(8)]);var inst_25391 = (inst_25389 < n);var state_25412__$1 = state_25412;if(cljs.core.truth_(inst_25391))
{var statearr_25421_25440 = state_25412__$1;(statearr_25421_25440[(1)] = (4));
} else
{var statearr_25422_25441 = state_25412__$1;(statearr_25422_25441[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (11)))
{var inst_25389 = (state_25412[(8)]);var inst_25399 = (state_25412[(2)]);var inst_25400 = (inst_25389 + (1));var inst_25389__$1 = inst_25400;var state_25412__$1 = (function (){var statearr_25423 = state_25412;(statearr_25423[(10)] = inst_25399);
(statearr_25423[(8)] = inst_25389__$1);
return statearr_25423;
})();var statearr_25424_25442 = state_25412__$1;(statearr_25424_25442[(2)] = null);
(statearr_25424_25442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (9)))
{var state_25412__$1 = state_25412;var statearr_25425_25443 = state_25412__$1;(statearr_25425_25443[(2)] = null);
(statearr_25425_25443[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (5)))
{var state_25412__$1 = state_25412;var statearr_25426_25444 = state_25412__$1;(statearr_25426_25444[(2)] = null);
(statearr_25426_25444[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (10)))
{var inst_25404 = (state_25412[(2)]);var state_25412__$1 = state_25412;var statearr_25427_25445 = state_25412__$1;(statearr_25427_25445[(2)] = inst_25404);
(statearr_25427_25445[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25413 === (8)))
{var inst_25394 = (state_25412[(7)]);var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25412__$1,(11),out,inst_25394);
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
});})(c__9125__auto___25435,out))
;return ((function (switch__9110__auto__,c__9125__auto___25435,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25431 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25431[(0)] = state_machine__9111__auto__);
(statearr_25431[(1)] = (1));
return statearr_25431;
});
var state_machine__9111__auto____1 = (function (state_25412){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25412);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25432){if((e25432 instanceof Object))
{var ex__9114__auto__ = e25432;var statearr_25433_25446 = state_25412;(statearr_25433_25446[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25432;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25447 = state_25412;
state_25412 = G__25447;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25435,out))
})();var state__9127__auto__ = (function (){var statearr_25434 = f__9126__auto__.call(null);(statearr_25434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25435);
return statearr_25434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25435,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25455 = (function (ch,f,map_LT_,meta25456){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25456 = meta25456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25455.cljs$lang$type = true;
cljs.core.async.t25455.cljs$lang$ctorStr = "cljs.core.async/t25455";
cljs.core.async.t25455.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25455");
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25458 = (function (fn1,_,meta25456,ch,f,map_LT_,meta25459){
this.fn1 = fn1;
this._ = _;
this.meta25456 = meta25456;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25459 = meta25459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25458.cljs$lang$type = true;
cljs.core.async.t25458.cljs$lang$ctorStr = "cljs.core.async/t25458";
cljs.core.async.t25458.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25458");
});})(___$1))
;
cljs.core.async.t25458.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25448_SHARP_){return f1.call(null,(((p1__25448_SHARP_ == null))?null:self__.f.call(null,p1__25448_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25460){var self__ = this;
var _25460__$1 = this;return self__.meta25459;
});})(___$1))
;
cljs.core.async.t25458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25460,meta25459__$1){var self__ = this;
var _25460__$1 = this;return (new cljs.core.async.t25458(self__.fn1,self__._,self__.meta25456,self__.ch,self__.f,self__.map_LT_,meta25459__$1));
});})(___$1))
;
cljs.core.async.__GT_t25458 = ((function (___$1){
return (function __GT_t25458(fn1__$1,___$2,meta25456__$1,ch__$2,f__$2,map_LT___$2,meta25459){return (new cljs.core.async.t25458(fn1__$1,___$2,meta25456__$1,ch__$2,f__$2,map_LT___$2,meta25459));
});})(___$1))
;
}
return (new cljs.core.async.t25458(fn1,___$1,self__.meta25456,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25457){var self__ = this;
var _25457__$1 = this;return self__.meta25456;
});
cljs.core.async.t25455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25457,meta25456__$1){var self__ = this;
var _25457__$1 = this;return (new cljs.core.async.t25455(self__.ch,self__.f,self__.map_LT_,meta25456__$1));
});
cljs.core.async.__GT_t25455 = (function __GT_t25455(ch__$1,f__$1,map_LT___$1,meta25456){return (new cljs.core.async.t25455(ch__$1,f__$1,map_LT___$1,meta25456));
});
}
return (new cljs.core.async.t25455(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25464 = (function (ch,f,map_GT_,meta25465){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25465 = meta25465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25464.cljs$lang$type = true;
cljs.core.async.t25464.cljs$lang$ctorStr = "cljs.core.async/t25464";
cljs.core.async.t25464.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25464");
});
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25466){var self__ = this;
var _25466__$1 = this;return self__.meta25465;
});
cljs.core.async.t25464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25466,meta25465__$1){var self__ = this;
var _25466__$1 = this;return (new cljs.core.async.t25464(self__.ch,self__.f,self__.map_GT_,meta25465__$1));
});
cljs.core.async.__GT_t25464 = (function __GT_t25464(ch__$1,f__$1,map_GT___$1,meta25465){return (new cljs.core.async.t25464(ch__$1,f__$1,map_GT___$1,meta25465));
});
}
return (new cljs.core.async.t25464(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25470 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25470 = (function (ch,p,filter_GT_,meta25471){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25470.cljs$lang$type = true;
cljs.core.async.t25470.cljs$lang$ctorStr = "cljs.core.async/t25470";
cljs.core.async.t25470.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25470");
});
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25472){var self__ = this;
var _25472__$1 = this;return self__.meta25471;
});
cljs.core.async.t25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25472,meta25471__$1){var self__ = this;
var _25472__$1 = this;return (new cljs.core.async.t25470(self__.ch,self__.p,self__.filter_GT_,meta25471__$1));
});
cljs.core.async.__GT_t25470 = (function __GT_t25470(ch__$1,p__$1,filter_GT___$1,meta25471){return (new cljs.core.async.t25470(ch__$1,p__$1,filter_GT___$1,meta25471));
});
}
return (new cljs.core.async.t25470(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25555 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25555,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25555,out){
return (function (state_25534){var state_val_25535 = (state_25534[(1)]);if((state_val_25535 === (7)))
{var inst_25530 = (state_25534[(2)]);var state_25534__$1 = state_25534;var statearr_25536_25556 = state_25534__$1;(statearr_25536_25556[(2)] = inst_25530);
(statearr_25536_25556[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (1)))
{var state_25534__$1 = state_25534;var statearr_25537_25557 = state_25534__$1;(statearr_25537_25557[(2)] = null);
(statearr_25537_25557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (4)))
{var inst_25516 = (state_25534[(7)]);var inst_25516__$1 = (state_25534[(2)]);var inst_25517 = (inst_25516__$1 == null);var state_25534__$1 = (function (){var statearr_25538 = state_25534;(statearr_25538[(7)] = inst_25516__$1);
return statearr_25538;
})();if(cljs.core.truth_(inst_25517))
{var statearr_25539_25558 = state_25534__$1;(statearr_25539_25558[(1)] = (5));
} else
{var statearr_25540_25559 = state_25534__$1;(statearr_25540_25559[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (6)))
{var inst_25516 = (state_25534[(7)]);var inst_25521 = p.call(null,inst_25516);var state_25534__$1 = state_25534;if(cljs.core.truth_(inst_25521))
{var statearr_25541_25560 = state_25534__$1;(statearr_25541_25560[(1)] = (8));
} else
{var statearr_25542_25561 = state_25534__$1;(statearr_25542_25561[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (3)))
{var inst_25532 = (state_25534[(2)]);var state_25534__$1 = state_25534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25534__$1,inst_25532);
} else
{if((state_val_25535 === (2)))
{var state_25534__$1 = state_25534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25534__$1,(4),ch);
} else
{if((state_val_25535 === (11)))
{var inst_25524 = (state_25534[(2)]);var state_25534__$1 = state_25534;var statearr_25543_25562 = state_25534__$1;(statearr_25543_25562[(2)] = inst_25524);
(statearr_25543_25562[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (9)))
{var state_25534__$1 = state_25534;var statearr_25544_25563 = state_25534__$1;(statearr_25544_25563[(2)] = null);
(statearr_25544_25563[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (5)))
{var inst_25519 = cljs.core.async.close_BANG_.call(null,out);var state_25534__$1 = state_25534;var statearr_25545_25564 = state_25534__$1;(statearr_25545_25564[(2)] = inst_25519);
(statearr_25545_25564[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (10)))
{var inst_25527 = (state_25534[(2)]);var state_25534__$1 = (function (){var statearr_25546 = state_25534;(statearr_25546[(8)] = inst_25527);
return statearr_25546;
})();var statearr_25547_25565 = state_25534__$1;(statearr_25547_25565[(2)] = null);
(statearr_25547_25565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25535 === (8)))
{var inst_25516 = (state_25534[(7)]);var state_25534__$1 = state_25534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25534__$1,(11),out,inst_25516);
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
});})(c__9125__auto___25555,out))
;return ((function (switch__9110__auto__,c__9125__auto___25555,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25551 = [null,null,null,null,null,null,null,null,null];(statearr_25551[(0)] = state_machine__9111__auto__);
(statearr_25551[(1)] = (1));
return statearr_25551;
});
var state_machine__9111__auto____1 = (function (state_25534){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25534);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25552){if((e25552 instanceof Object))
{var ex__9114__auto__ = e25552;var statearr_25553_25566 = state_25534;(statearr_25553_25566[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25567 = state_25534;
state_25534 = G__25567;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25534){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25555,out))
})();var state__9127__auto__ = (function (){var statearr_25554 = f__9126__auto__.call(null);(statearr_25554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25555);
return statearr_25554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25555,out))
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
return (function (state_25733){var state_val_25734 = (state_25733[(1)]);if((state_val_25734 === (7)))
{var inst_25729 = (state_25733[(2)]);var state_25733__$1 = state_25733;var statearr_25735_25776 = state_25733__$1;(statearr_25735_25776[(2)] = inst_25729);
(statearr_25735_25776[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (20)))
{var inst_25699 = (state_25733[(7)]);var inst_25710 = (state_25733[(2)]);var inst_25711 = cljs.core.next.call(null,inst_25699);var inst_25685 = inst_25711;var inst_25686 = null;var inst_25687 = (0);var inst_25688 = (0);var state_25733__$1 = (function (){var statearr_25736 = state_25733;(statearr_25736[(8)] = inst_25685);
(statearr_25736[(9)] = inst_25686);
(statearr_25736[(10)] = inst_25710);
(statearr_25736[(11)] = inst_25687);
(statearr_25736[(12)] = inst_25688);
return statearr_25736;
})();var statearr_25737_25777 = state_25733__$1;(statearr_25737_25777[(2)] = null);
(statearr_25737_25777[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (1)))
{var state_25733__$1 = state_25733;var statearr_25738_25778 = state_25733__$1;(statearr_25738_25778[(2)] = null);
(statearr_25738_25778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (4)))
{var inst_25674 = (state_25733[(13)]);var inst_25674__$1 = (state_25733[(2)]);var inst_25675 = (inst_25674__$1 == null);var state_25733__$1 = (function (){var statearr_25739 = state_25733;(statearr_25739[(13)] = inst_25674__$1);
return statearr_25739;
})();if(cljs.core.truth_(inst_25675))
{var statearr_25740_25779 = state_25733__$1;(statearr_25740_25779[(1)] = (5));
} else
{var statearr_25741_25780 = state_25733__$1;(statearr_25741_25780[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (15)))
{var state_25733__$1 = state_25733;var statearr_25745_25781 = state_25733__$1;(statearr_25745_25781[(2)] = null);
(statearr_25745_25781[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (21)))
{var state_25733__$1 = state_25733;var statearr_25746_25782 = state_25733__$1;(statearr_25746_25782[(2)] = null);
(statearr_25746_25782[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (13)))
{var inst_25685 = (state_25733[(8)]);var inst_25686 = (state_25733[(9)]);var inst_25687 = (state_25733[(11)]);var inst_25688 = (state_25733[(12)]);var inst_25695 = (state_25733[(2)]);var inst_25696 = (inst_25688 + (1));var tmp25742 = inst_25685;var tmp25743 = inst_25686;var tmp25744 = inst_25687;var inst_25685__$1 = tmp25742;var inst_25686__$1 = tmp25743;var inst_25687__$1 = tmp25744;var inst_25688__$1 = inst_25696;var state_25733__$1 = (function (){var statearr_25747 = state_25733;(statearr_25747[(8)] = inst_25685__$1);
(statearr_25747[(9)] = inst_25686__$1);
(statearr_25747[(11)] = inst_25687__$1);
(statearr_25747[(12)] = inst_25688__$1);
(statearr_25747[(14)] = inst_25695);
return statearr_25747;
})();var statearr_25748_25783 = state_25733__$1;(statearr_25748_25783[(2)] = null);
(statearr_25748_25783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (22)))
{var state_25733__$1 = state_25733;var statearr_25749_25784 = state_25733__$1;(statearr_25749_25784[(2)] = null);
(statearr_25749_25784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (6)))
{var inst_25674 = (state_25733[(13)]);var inst_25683 = f.call(null,inst_25674);var inst_25684 = cljs.core.seq.call(null,inst_25683);var inst_25685 = inst_25684;var inst_25686 = null;var inst_25687 = (0);var inst_25688 = (0);var state_25733__$1 = (function (){var statearr_25750 = state_25733;(statearr_25750[(8)] = inst_25685);
(statearr_25750[(9)] = inst_25686);
(statearr_25750[(11)] = inst_25687);
(statearr_25750[(12)] = inst_25688);
return statearr_25750;
})();var statearr_25751_25785 = state_25733__$1;(statearr_25751_25785[(2)] = null);
(statearr_25751_25785[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (17)))
{var inst_25699 = (state_25733[(7)]);var inst_25703 = cljs.core.chunk_first.call(null,inst_25699);var inst_25704 = cljs.core.chunk_rest.call(null,inst_25699);var inst_25705 = cljs.core.count.call(null,inst_25703);var inst_25685 = inst_25704;var inst_25686 = inst_25703;var inst_25687 = inst_25705;var inst_25688 = (0);var state_25733__$1 = (function (){var statearr_25752 = state_25733;(statearr_25752[(8)] = inst_25685);
(statearr_25752[(9)] = inst_25686);
(statearr_25752[(11)] = inst_25687);
(statearr_25752[(12)] = inst_25688);
return statearr_25752;
})();var statearr_25753_25786 = state_25733__$1;(statearr_25753_25786[(2)] = null);
(statearr_25753_25786[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (3)))
{var inst_25731 = (state_25733[(2)]);var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25733__$1,inst_25731);
} else
{if((state_val_25734 === (12)))
{var inst_25719 = (state_25733[(2)]);var state_25733__$1 = state_25733;var statearr_25754_25787 = state_25733__$1;(statearr_25754_25787[(2)] = inst_25719);
(statearr_25754_25787[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (2)))
{var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25733__$1,(4),in$);
} else
{if((state_val_25734 === (23)))
{var inst_25727 = (state_25733[(2)]);var state_25733__$1 = state_25733;var statearr_25755_25788 = state_25733__$1;(statearr_25755_25788[(2)] = inst_25727);
(statearr_25755_25788[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (19)))
{var inst_25714 = (state_25733[(2)]);var state_25733__$1 = state_25733;var statearr_25756_25789 = state_25733__$1;(statearr_25756_25789[(2)] = inst_25714);
(statearr_25756_25789[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (11)))
{var inst_25685 = (state_25733[(8)]);var inst_25699 = (state_25733[(7)]);var inst_25699__$1 = cljs.core.seq.call(null,inst_25685);var state_25733__$1 = (function (){var statearr_25757 = state_25733;(statearr_25757[(7)] = inst_25699__$1);
return statearr_25757;
})();if(inst_25699__$1)
{var statearr_25758_25790 = state_25733__$1;(statearr_25758_25790[(1)] = (14));
} else
{var statearr_25759_25791 = state_25733__$1;(statearr_25759_25791[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (9)))
{var inst_25721 = (state_25733[(2)]);var inst_25722 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25733__$1 = (function (){var statearr_25760 = state_25733;(statearr_25760[(15)] = inst_25721);
return statearr_25760;
})();if(cljs.core.truth_(inst_25722))
{var statearr_25761_25792 = state_25733__$1;(statearr_25761_25792[(1)] = (21));
} else
{var statearr_25762_25793 = state_25733__$1;(statearr_25762_25793[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (5)))
{var inst_25677 = cljs.core.async.close_BANG_.call(null,out);var state_25733__$1 = state_25733;var statearr_25763_25794 = state_25733__$1;(statearr_25763_25794[(2)] = inst_25677);
(statearr_25763_25794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (14)))
{var inst_25699 = (state_25733[(7)]);var inst_25701 = cljs.core.chunked_seq_QMARK_.call(null,inst_25699);var state_25733__$1 = state_25733;if(inst_25701)
{var statearr_25764_25795 = state_25733__$1;(statearr_25764_25795[(1)] = (17));
} else
{var statearr_25765_25796 = state_25733__$1;(statearr_25765_25796[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (16)))
{var inst_25717 = (state_25733[(2)]);var state_25733__$1 = state_25733;var statearr_25766_25797 = state_25733__$1;(statearr_25766_25797[(2)] = inst_25717);
(statearr_25766_25797[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25734 === (10)))
{var inst_25686 = (state_25733[(9)]);var inst_25688 = (state_25733[(12)]);var inst_25693 = cljs.core._nth.call(null,inst_25686,inst_25688);var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25733__$1,(13),out,inst_25693);
} else
{if((state_val_25734 === (18)))
{var inst_25699 = (state_25733[(7)]);var inst_25708 = cljs.core.first.call(null,inst_25699);var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25733__$1,(20),out,inst_25708);
} else
{if((state_val_25734 === (8)))
{var inst_25687 = (state_25733[(11)]);var inst_25688 = (state_25733[(12)]);var inst_25690 = (inst_25688 < inst_25687);var inst_25691 = inst_25690;var state_25733__$1 = state_25733;if(cljs.core.truth_(inst_25691))
{var statearr_25767_25798 = state_25733__$1;(statearr_25767_25798[(1)] = (10));
} else
{var statearr_25768_25799 = state_25733__$1;(statearr_25768_25799[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25772[(0)] = state_machine__9111__auto__);
(statearr_25772[(1)] = (1));
return statearr_25772;
});
var state_machine__9111__auto____1 = (function (state_25733){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25733);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object))
{var ex__9114__auto__ = e25773;var statearr_25774_25800 = state_25733;(statearr_25774_25800[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25773;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25801 = state_25733;
state_25733 = G__25801;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25733){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25775 = f__9126__auto__.call(null);(statearr_25775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25775;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25898,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25898,out){
return (function (state_25873){var state_val_25874 = (state_25873[(1)]);if((state_val_25874 === (7)))
{var inst_25868 = (state_25873[(2)]);var state_25873__$1 = state_25873;var statearr_25875_25899 = state_25873__$1;(statearr_25875_25899[(2)] = inst_25868);
(statearr_25875_25899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (1)))
{var inst_25850 = null;var state_25873__$1 = (function (){var statearr_25876 = state_25873;(statearr_25876[(7)] = inst_25850);
return statearr_25876;
})();var statearr_25877_25900 = state_25873__$1;(statearr_25877_25900[(2)] = null);
(statearr_25877_25900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (4)))
{var inst_25853 = (state_25873[(8)]);var inst_25853__$1 = (state_25873[(2)]);var inst_25854 = (inst_25853__$1 == null);var inst_25855 = cljs.core.not.call(null,inst_25854);var state_25873__$1 = (function (){var statearr_25878 = state_25873;(statearr_25878[(8)] = inst_25853__$1);
return statearr_25878;
})();if(inst_25855)
{var statearr_25879_25901 = state_25873__$1;(statearr_25879_25901[(1)] = (5));
} else
{var statearr_25880_25902 = state_25873__$1;(statearr_25880_25902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (6)))
{var state_25873__$1 = state_25873;var statearr_25881_25903 = state_25873__$1;(statearr_25881_25903[(2)] = null);
(statearr_25881_25903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (3)))
{var inst_25870 = (state_25873[(2)]);var inst_25871 = cljs.core.async.close_BANG_.call(null,out);var state_25873__$1 = (function (){var statearr_25882 = state_25873;(statearr_25882[(9)] = inst_25870);
return statearr_25882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25873__$1,inst_25871);
} else
{if((state_val_25874 === (2)))
{var state_25873__$1 = state_25873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25873__$1,(4),ch);
} else
{if((state_val_25874 === (11)))
{var inst_25853 = (state_25873[(8)]);var inst_25862 = (state_25873[(2)]);var inst_25850 = inst_25853;var state_25873__$1 = (function (){var statearr_25883 = state_25873;(statearr_25883[(7)] = inst_25850);
(statearr_25883[(10)] = inst_25862);
return statearr_25883;
})();var statearr_25884_25904 = state_25873__$1;(statearr_25884_25904[(2)] = null);
(statearr_25884_25904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (9)))
{var inst_25853 = (state_25873[(8)]);var state_25873__$1 = state_25873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25873__$1,(11),out,inst_25853);
} else
{if((state_val_25874 === (5)))
{var inst_25853 = (state_25873[(8)]);var inst_25850 = (state_25873[(7)]);var inst_25857 = cljs.core._EQ_.call(null,inst_25853,inst_25850);var state_25873__$1 = state_25873;if(inst_25857)
{var statearr_25886_25905 = state_25873__$1;(statearr_25886_25905[(1)] = (8));
} else
{var statearr_25887_25906 = state_25873__$1;(statearr_25887_25906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (10)))
{var inst_25865 = (state_25873[(2)]);var state_25873__$1 = state_25873;var statearr_25888_25907 = state_25873__$1;(statearr_25888_25907[(2)] = inst_25865);
(statearr_25888_25907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25874 === (8)))
{var inst_25850 = (state_25873[(7)]);var tmp25885 = inst_25850;var inst_25850__$1 = tmp25885;var state_25873__$1 = (function (){var statearr_25889 = state_25873;(statearr_25889[(7)] = inst_25850__$1);
return statearr_25889;
})();var statearr_25890_25908 = state_25873__$1;(statearr_25890_25908[(2)] = null);
(statearr_25890_25908[(1)] = (2));
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
});})(c__9125__auto___25898,out))
;return ((function (switch__9110__auto__,c__9125__auto___25898,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25894 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25894[(0)] = state_machine__9111__auto__);
(statearr_25894[(1)] = (1));
return statearr_25894;
});
var state_machine__9111__auto____1 = (function (state_25873){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25873);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25895){if((e25895 instanceof Object))
{var ex__9114__auto__ = e25895;var statearr_25896_25909 = state_25873;(statearr_25896_25909[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25910 = state_25873;
state_25873 = G__25910;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25873){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25898,out))
})();var state__9127__auto__ = (function (){var statearr_25897 = f__9126__auto__.call(null);(statearr_25897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25898);
return statearr_25897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25898,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26045,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26045,out){
return (function (state_26015){var state_val_26016 = (state_26015[(1)]);if((state_val_26016 === (7)))
{var inst_26011 = (state_26015[(2)]);var state_26015__$1 = state_26015;var statearr_26017_26046 = state_26015__$1;(statearr_26017_26046[(2)] = inst_26011);
(statearr_26017_26046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (1)))
{var inst_25978 = (new Array(n));var inst_25979 = inst_25978;var inst_25980 = (0);var state_26015__$1 = (function (){var statearr_26018 = state_26015;(statearr_26018[(7)] = inst_25980);
(statearr_26018[(8)] = inst_25979);
return statearr_26018;
})();var statearr_26019_26047 = state_26015__$1;(statearr_26019_26047[(2)] = null);
(statearr_26019_26047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (4)))
{var inst_25983 = (state_26015[(9)]);var inst_25983__$1 = (state_26015[(2)]);var inst_25984 = (inst_25983__$1 == null);var inst_25985 = cljs.core.not.call(null,inst_25984);var state_26015__$1 = (function (){var statearr_26020 = state_26015;(statearr_26020[(9)] = inst_25983__$1);
return statearr_26020;
})();if(inst_25985)
{var statearr_26021_26048 = state_26015__$1;(statearr_26021_26048[(1)] = (5));
} else
{var statearr_26022_26049 = state_26015__$1;(statearr_26022_26049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (15)))
{var inst_26005 = (state_26015[(2)]);var state_26015__$1 = state_26015;var statearr_26023_26050 = state_26015__$1;(statearr_26023_26050[(2)] = inst_26005);
(statearr_26023_26050[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (13)))
{var state_26015__$1 = state_26015;var statearr_26024_26051 = state_26015__$1;(statearr_26024_26051[(2)] = null);
(statearr_26024_26051[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (6)))
{var inst_25980 = (state_26015[(7)]);var inst_26001 = (inst_25980 > (0));var state_26015__$1 = state_26015;if(cljs.core.truth_(inst_26001))
{var statearr_26025_26052 = state_26015__$1;(statearr_26025_26052[(1)] = (12));
} else
{var statearr_26026_26053 = state_26015__$1;(statearr_26026_26053[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (3)))
{var inst_26013 = (state_26015[(2)]);var state_26015__$1 = state_26015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26015__$1,inst_26013);
} else
{if((state_val_26016 === (12)))
{var inst_25979 = (state_26015[(8)]);var inst_26003 = cljs.core.vec.call(null,inst_25979);var state_26015__$1 = state_26015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26015__$1,(15),out,inst_26003);
} else
{if((state_val_26016 === (2)))
{var state_26015__$1 = state_26015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26015__$1,(4),ch);
} else
{if((state_val_26016 === (11)))
{var inst_25995 = (state_26015[(2)]);var inst_25996 = (new Array(n));var inst_25979 = inst_25996;var inst_25980 = (0);var state_26015__$1 = (function (){var statearr_26027 = state_26015;(statearr_26027[(10)] = inst_25995);
(statearr_26027[(7)] = inst_25980);
(statearr_26027[(8)] = inst_25979);
return statearr_26027;
})();var statearr_26028_26054 = state_26015__$1;(statearr_26028_26054[(2)] = null);
(statearr_26028_26054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (9)))
{var inst_25979 = (state_26015[(8)]);var inst_25993 = cljs.core.vec.call(null,inst_25979);var state_26015__$1 = state_26015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26015__$1,(11),out,inst_25993);
} else
{if((state_val_26016 === (5)))
{var inst_25988 = (state_26015[(11)]);var inst_25983 = (state_26015[(9)]);var inst_25980 = (state_26015[(7)]);var inst_25979 = (state_26015[(8)]);var inst_25987 = (inst_25979[inst_25980] = inst_25983);var inst_25988__$1 = (inst_25980 + (1));var inst_25989 = (inst_25988__$1 < n);var state_26015__$1 = (function (){var statearr_26029 = state_26015;(statearr_26029[(11)] = inst_25988__$1);
(statearr_26029[(12)] = inst_25987);
return statearr_26029;
})();if(cljs.core.truth_(inst_25989))
{var statearr_26030_26055 = state_26015__$1;(statearr_26030_26055[(1)] = (8));
} else
{var statearr_26031_26056 = state_26015__$1;(statearr_26031_26056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (14)))
{var inst_26008 = (state_26015[(2)]);var inst_26009 = cljs.core.async.close_BANG_.call(null,out);var state_26015__$1 = (function (){var statearr_26033 = state_26015;(statearr_26033[(13)] = inst_26008);
return statearr_26033;
})();var statearr_26034_26057 = state_26015__$1;(statearr_26034_26057[(2)] = inst_26009);
(statearr_26034_26057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (10)))
{var inst_25999 = (state_26015[(2)]);var state_26015__$1 = state_26015;var statearr_26035_26058 = state_26015__$1;(statearr_26035_26058[(2)] = inst_25999);
(statearr_26035_26058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26016 === (8)))
{var inst_25988 = (state_26015[(11)]);var inst_25979 = (state_26015[(8)]);var tmp26032 = inst_25979;var inst_25979__$1 = tmp26032;var inst_25980 = inst_25988;var state_26015__$1 = (function (){var statearr_26036 = state_26015;(statearr_26036[(7)] = inst_25980);
(statearr_26036[(8)] = inst_25979__$1);
return statearr_26036;
})();var statearr_26037_26059 = state_26015__$1;(statearr_26037_26059[(2)] = null);
(statearr_26037_26059[(1)] = (2));
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
});})(c__9125__auto___26045,out))
;return ((function (switch__9110__auto__,c__9125__auto___26045,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26041[(0)] = state_machine__9111__auto__);
(statearr_26041[(1)] = (1));
return statearr_26041;
});
var state_machine__9111__auto____1 = (function (state_26015){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26015);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26042){if((e26042 instanceof Object))
{var ex__9114__auto__ = e26042;var statearr_26043_26060 = state_26015;(statearr_26043_26060[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26061 = state_26015;
state_26015 = G__26061;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26015){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26045,out))
})();var state__9127__auto__ = (function (){var statearr_26044 = f__9126__auto__.call(null);(statearr_26044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26045);
return statearr_26044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26045,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26204,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26204,out){
return (function (state_26174){var state_val_26175 = (state_26174[(1)]);if((state_val_26175 === (7)))
{var inst_26170 = (state_26174[(2)]);var state_26174__$1 = state_26174;var statearr_26176_26205 = state_26174__$1;(statearr_26176_26205[(2)] = inst_26170);
(statearr_26176_26205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (1)))
{var inst_26133 = [];var inst_26134 = inst_26133;var inst_26135 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26174__$1 = (function (){var statearr_26177 = state_26174;(statearr_26177[(7)] = inst_26135);
(statearr_26177[(8)] = inst_26134);
return statearr_26177;
})();var statearr_26178_26206 = state_26174__$1;(statearr_26178_26206[(2)] = null);
(statearr_26178_26206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (4)))
{var inst_26138 = (state_26174[(9)]);var inst_26138__$1 = (state_26174[(2)]);var inst_26139 = (inst_26138__$1 == null);var inst_26140 = cljs.core.not.call(null,inst_26139);var state_26174__$1 = (function (){var statearr_26179 = state_26174;(statearr_26179[(9)] = inst_26138__$1);
return statearr_26179;
})();if(inst_26140)
{var statearr_26180_26207 = state_26174__$1;(statearr_26180_26207[(1)] = (5));
} else
{var statearr_26181_26208 = state_26174__$1;(statearr_26181_26208[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (15)))
{var inst_26164 = (state_26174[(2)]);var state_26174__$1 = state_26174;var statearr_26182_26209 = state_26174__$1;(statearr_26182_26209[(2)] = inst_26164);
(statearr_26182_26209[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (13)))
{var state_26174__$1 = state_26174;var statearr_26183_26210 = state_26174__$1;(statearr_26183_26210[(2)] = null);
(statearr_26183_26210[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (6)))
{var inst_26134 = (state_26174[(8)]);var inst_26159 = inst_26134.length;var inst_26160 = (inst_26159 > (0));var state_26174__$1 = state_26174;if(cljs.core.truth_(inst_26160))
{var statearr_26184_26211 = state_26174__$1;(statearr_26184_26211[(1)] = (12));
} else
{var statearr_26185_26212 = state_26174__$1;(statearr_26185_26212[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (3)))
{var inst_26172 = (state_26174[(2)]);var state_26174__$1 = state_26174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26174__$1,inst_26172);
} else
{if((state_val_26175 === (12)))
{var inst_26134 = (state_26174[(8)]);var inst_26162 = cljs.core.vec.call(null,inst_26134);var state_26174__$1 = state_26174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26174__$1,(15),out,inst_26162);
} else
{if((state_val_26175 === (2)))
{var state_26174__$1 = state_26174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(4),ch);
} else
{if((state_val_26175 === (11)))
{var inst_26138 = (state_26174[(9)]);var inst_26142 = (state_26174[(10)]);var inst_26152 = (state_26174[(2)]);var inst_26153 = [];var inst_26154 = inst_26153.push(inst_26138);var inst_26134 = inst_26153;var inst_26135 = inst_26142;var state_26174__$1 = (function (){var statearr_26186 = state_26174;(statearr_26186[(11)] = inst_26152);
(statearr_26186[(7)] = inst_26135);
(statearr_26186[(8)] = inst_26134);
(statearr_26186[(12)] = inst_26154);
return statearr_26186;
})();var statearr_26187_26213 = state_26174__$1;(statearr_26187_26213[(2)] = null);
(statearr_26187_26213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (9)))
{var inst_26134 = (state_26174[(8)]);var inst_26150 = cljs.core.vec.call(null,inst_26134);var state_26174__$1 = state_26174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26174__$1,(11),out,inst_26150);
} else
{if((state_val_26175 === (5)))
{var inst_26138 = (state_26174[(9)]);var inst_26142 = (state_26174[(10)]);var inst_26135 = (state_26174[(7)]);var inst_26142__$1 = f.call(null,inst_26138);var inst_26143 = cljs.core._EQ_.call(null,inst_26142__$1,inst_26135);var inst_26144 = cljs.core.keyword_identical_QMARK_.call(null,inst_26135,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26145 = (inst_26143) || (inst_26144);var state_26174__$1 = (function (){var statearr_26188 = state_26174;(statearr_26188[(10)] = inst_26142__$1);
return statearr_26188;
})();if(cljs.core.truth_(inst_26145))
{var statearr_26189_26214 = state_26174__$1;(statearr_26189_26214[(1)] = (8));
} else
{var statearr_26190_26215 = state_26174__$1;(statearr_26190_26215[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (14)))
{var inst_26167 = (state_26174[(2)]);var inst_26168 = cljs.core.async.close_BANG_.call(null,out);var state_26174__$1 = (function (){var statearr_26192 = state_26174;(statearr_26192[(13)] = inst_26167);
return statearr_26192;
})();var statearr_26193_26216 = state_26174__$1;(statearr_26193_26216[(2)] = inst_26168);
(statearr_26193_26216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (10)))
{var inst_26157 = (state_26174[(2)]);var state_26174__$1 = state_26174;var statearr_26194_26217 = state_26174__$1;(statearr_26194_26217[(2)] = inst_26157);
(statearr_26194_26217[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26175 === (8)))
{var inst_26138 = (state_26174[(9)]);var inst_26142 = (state_26174[(10)]);var inst_26134 = (state_26174[(8)]);var inst_26147 = inst_26134.push(inst_26138);var tmp26191 = inst_26134;var inst_26134__$1 = tmp26191;var inst_26135 = inst_26142;var state_26174__$1 = (function (){var statearr_26195 = state_26174;(statearr_26195[(14)] = inst_26147);
(statearr_26195[(7)] = inst_26135);
(statearr_26195[(8)] = inst_26134__$1);
return statearr_26195;
})();var statearr_26196_26218 = state_26174__$1;(statearr_26196_26218[(2)] = null);
(statearr_26196_26218[(1)] = (2));
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
});})(c__9125__auto___26204,out))
;return ((function (switch__9110__auto__,c__9125__auto___26204,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26200[(0)] = state_machine__9111__auto__);
(statearr_26200[(1)] = (1));
return statearr_26200;
});
var state_machine__9111__auto____1 = (function (state_26174){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26174);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26201){if((e26201 instanceof Object))
{var ex__9114__auto__ = e26201;var statearr_26202_26219 = state_26174;(statearr_26202_26219[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26220 = state_26174;
state_26174 = G__26220;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26174){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26204,out))
})();var state__9127__auto__ = (function (){var statearr_26203 = f__9126__auto__.call(null);(statearr_26203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26204);
return statearr_26203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26204,out))
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
