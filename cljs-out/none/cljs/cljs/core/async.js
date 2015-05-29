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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33769 = (function (f,fn_handler,meta33770){
this.f = f;
this.fn_handler = fn_handler;
this.meta33770 = meta33770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33769.cljs$lang$type = true;
cljs.core.async.t33769.cljs$lang$ctorStr = "cljs.core.async/t33769";
cljs.core.async.t33769.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t33769");
});
cljs.core.async.t33769.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33771){var self__ = this;
var _33771__$1 = this;return self__.meta33770;
});
cljs.core.async.t33769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33771,meta33770__$1){var self__ = this;
var _33771__$1 = this;return (new cljs.core.async.t33769(self__.f,self__.fn_handler,meta33770__$1));
});
cljs.core.async.__GT_t33769 = (function __GT_t33769(f__$1,fn_handler__$1,meta33770){return (new cljs.core.async.t33769(f__$1,fn_handler__$1,meta33770));
});
}
return (new cljs.core.async.t33769(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33773 = buff;if(G__33773)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33773.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33773.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33773);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33773);
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
{var val_33774 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33774);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_33774,ret){
return (function (){return fn1.call(null,val_33774);
});})(val_33774,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12383__auto___33775 = n;var x_33776 = (0);while(true){
if((x_33776 < n__12383__auto___33775))
{(a[x_33776] = (0));
{
var G__33777 = (x_33776 + (1));
x_33776 = G__33777;
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
var G__33778 = (i + (1));
i = G__33778;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33782 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33782 = (function (flag,alt_flag,meta33783){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33783 = meta33783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33782.cljs$lang$type = true;
cljs.core.async.t33782.cljs$lang$ctorStr = "cljs.core.async/t33782";
cljs.core.async.t33782.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t33782");
});})(flag))
;
cljs.core.async.t33782.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t33782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t33782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33784){var self__ = this;
var _33784__$1 = this;return self__.meta33783;
});})(flag))
;
cljs.core.async.t33782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33784,meta33783__$1){var self__ = this;
var _33784__$1 = this;return (new cljs.core.async.t33782(self__.flag,self__.alt_flag,meta33783__$1));
});})(flag))
;
cljs.core.async.__GT_t33782 = ((function (flag){
return (function __GT_t33782(flag__$1,alt_flag__$1,meta33783){return (new cljs.core.async.t33782(flag__$1,alt_flag__$1,meta33783));
});})(flag))
;
}
return (new cljs.core.async.t33782(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33788 = (function (cb,flag,alt_handler,meta33789){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33789 = meta33789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33788.cljs$lang$type = true;
cljs.core.async.t33788.cljs$lang$ctorStr = "cljs.core.async/t33788";
cljs.core.async.t33788.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t33788");
});
cljs.core.async.t33788.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33790){var self__ = this;
var _33790__$1 = this;return self__.meta33789;
});
cljs.core.async.t33788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33790,meta33789__$1){var self__ = this;
var _33790__$1 = this;return (new cljs.core.async.t33788(self__.cb,self__.flag,self__.alt_handler,meta33789__$1));
});
cljs.core.async.__GT_t33788 = (function __GT_t33788(cb__$1,flag__$1,alt_handler__$1,meta33789){return (new cljs.core.async.t33788(cb__$1,flag__$1,alt_handler__$1,meta33789));
});
}
return (new cljs.core.async.t33788(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33791_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33791_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33792_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33792_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11514__auto__ = wport;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33793 = (i + (1));
i = G__33793;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11514__auto__ = ret;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11502__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11502__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11502__auto__;
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
var alts_BANG___delegate = function (ports,p__33794){var map__33796 = p__33794;var map__33796__$1 = ((cljs.core.seq_QMARK_.call(null,map__33796))?cljs.core.apply.call(null,cljs.core.hash_map,map__33796):map__33796);var opts = map__33796__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__33794 = null;if (arguments.length > 1) {
  p__33794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33794);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33797){
var ports = cljs.core.first(arglist__33797);
var p__33794 = cljs.core.rest(arglist__33797);
return alts_BANG___delegate(ports,p__33794);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18867__auto___33892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___33892){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___33892){
return (function (state_33868){var state_val_33869 = (state_33868[(1)]);if((state_val_33869 === (7)))
{var inst_33864 = (state_33868[(2)]);var state_33868__$1 = state_33868;var statearr_33870_33893 = state_33868__$1;(statearr_33870_33893[(2)] = inst_33864);
(statearr_33870_33893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (1)))
{var state_33868__$1 = state_33868;var statearr_33871_33894 = state_33868__$1;(statearr_33871_33894[(2)] = null);
(statearr_33871_33894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (4)))
{var inst_33847 = (state_33868[(7)]);var inst_33847__$1 = (state_33868[(2)]);var inst_33848 = (inst_33847__$1 == null);var state_33868__$1 = (function (){var statearr_33872 = state_33868;(statearr_33872[(7)] = inst_33847__$1);
return statearr_33872;
})();if(cljs.core.truth_(inst_33848))
{var statearr_33873_33895 = state_33868__$1;(statearr_33873_33895[(1)] = (5));
} else
{var statearr_33874_33896 = state_33868__$1;(statearr_33874_33896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (13)))
{var state_33868__$1 = state_33868;var statearr_33875_33897 = state_33868__$1;(statearr_33875_33897[(2)] = null);
(statearr_33875_33897[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (6)))
{var inst_33847 = (state_33868[(7)]);var state_33868__$1 = state_33868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33868__$1,(11),to,inst_33847);
} else
{if((state_val_33869 === (3)))
{var inst_33866 = (state_33868[(2)]);var state_33868__$1 = state_33868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33868__$1,inst_33866);
} else
{if((state_val_33869 === (12)))
{var state_33868__$1 = state_33868;var statearr_33876_33898 = state_33868__$1;(statearr_33876_33898[(2)] = null);
(statearr_33876_33898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (2)))
{var state_33868__$1 = state_33868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33868__$1,(4),from);
} else
{if((state_val_33869 === (11)))
{var inst_33857 = (state_33868[(2)]);var state_33868__$1 = state_33868;if(cljs.core.truth_(inst_33857))
{var statearr_33877_33899 = state_33868__$1;(statearr_33877_33899[(1)] = (12));
} else
{var statearr_33878_33900 = state_33868__$1;(statearr_33878_33900[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (9)))
{var state_33868__$1 = state_33868;var statearr_33879_33901 = state_33868__$1;(statearr_33879_33901[(2)] = null);
(statearr_33879_33901[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (5)))
{var state_33868__$1 = state_33868;if(cljs.core.truth_(close_QMARK_))
{var statearr_33880_33902 = state_33868__$1;(statearr_33880_33902[(1)] = (8));
} else
{var statearr_33881_33903 = state_33868__$1;(statearr_33881_33903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (14)))
{var inst_33862 = (state_33868[(2)]);var state_33868__$1 = state_33868;var statearr_33882_33904 = state_33868__$1;(statearr_33882_33904[(2)] = inst_33862);
(statearr_33882_33904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (10)))
{var inst_33854 = (state_33868[(2)]);var state_33868__$1 = state_33868;var statearr_33883_33905 = state_33868__$1;(statearr_33883_33905[(2)] = inst_33854);
(statearr_33883_33905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33869 === (8)))
{var inst_33851 = cljs.core.async.close_BANG_.call(null,to);var state_33868__$1 = state_33868;var statearr_33884_33906 = state_33868__$1;(statearr_33884_33906[(2)] = inst_33851);
(statearr_33884_33906[(1)] = (10));
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
});})(c__18867__auto___33892))
;return ((function (switch__18811__auto__,c__18867__auto___33892){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_33888 = [null,null,null,null,null,null,null,null];(statearr_33888[(0)] = state_machine__18812__auto__);
(statearr_33888[(1)] = (1));
return statearr_33888;
});
var state_machine__18812__auto____1 = (function (state_33868){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_33868);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e33889){if((e33889 instanceof Object))
{var ex__18815__auto__ = e33889;var statearr_33890_33907 = state_33868;(statearr_33890_33907[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33889;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33908 = state_33868;
state_33868 = G__33908;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_33868){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_33868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___33892))
})();var state__18869__auto__ = (function (){var statearr_33891 = f__18868__auto__.call(null);(statearr_33891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___33892);
return statearr_33891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___33892))
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
return (function (p__34092){var vec__34093 = p__34092;var v = cljs.core.nth.call(null,vec__34093,(0),null);var p = cljs.core.nth.call(null,vec__34093,(1),null);var job = vec__34093;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__18867__auto___34275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results){
return (function (state_34098){var state_val_34099 = (state_34098[(1)]);if((state_val_34099 === (2)))
{var inst_34095 = (state_34098[(2)]);var inst_34096 = cljs.core.async.close_BANG_.call(null,res);var state_34098__$1 = (function (){var statearr_34100 = state_34098;(statearr_34100[(7)] = inst_34095);
return statearr_34100;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34098__$1,inst_34096);
} else
{if((state_val_34099 === (1)))
{var state_34098__$1 = state_34098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34098__$1,(2),res,v);
} else
{return null;
}
}
});})(c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results))
;return ((function (switch__18811__auto__,c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34104 = [null,null,null,null,null,null,null,null];(statearr_34104[(0)] = state_machine__18812__auto__);
(statearr_34104[(1)] = (1));
return statearr_34104;
});
var state_machine__18812__auto____1 = (function (state_34098){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34098);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34105){if((e34105 instanceof Object))
{var ex__18815__auto__ = e34105;var statearr_34106_34276 = state_34098;(statearr_34106_34276[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34098);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34105;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34277 = state_34098;
state_34098 = G__34277;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34098){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results))
})();var state__18869__auto__ = (function (){var statearr_34107 = f__18868__auto__.call(null);(statearr_34107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___34275);
return statearr_34107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___34275,res,vec__34093,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__34108){var vec__34109 = p__34108;var v = cljs.core.nth.call(null,vec__34109,(0),null);var p = cljs.core.nth.call(null,vec__34109,(1),null);var job = vec__34109;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12383__auto___34278 = n;var __34279 = (0);while(true){
if((__34279 < n__12383__auto___34278))
{var G__34110_34280 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__34110_34280) {
case "async":
var c__18867__auto___34282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__34279,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (__34279,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function (state_34123){var state_val_34124 = (state_34123[(1)]);if((state_val_34124 === (7)))
{var inst_34119 = (state_34123[(2)]);var state_34123__$1 = state_34123;var statearr_34125_34283 = state_34123__$1;(statearr_34125_34283[(2)] = inst_34119);
(statearr_34125_34283[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34124 === (6)))
{var state_34123__$1 = state_34123;var statearr_34126_34284 = state_34123__$1;(statearr_34126_34284[(2)] = null);
(statearr_34126_34284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34124 === (5)))
{var state_34123__$1 = state_34123;var statearr_34127_34285 = state_34123__$1;(statearr_34127_34285[(2)] = null);
(statearr_34127_34285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34124 === (4)))
{var inst_34113 = (state_34123[(2)]);var inst_34114 = async.call(null,inst_34113);var state_34123__$1 = state_34123;if(cljs.core.truth_(inst_34114))
{var statearr_34128_34286 = state_34123__$1;(statearr_34128_34286[(1)] = (5));
} else
{var statearr_34129_34287 = state_34123__$1;(statearr_34129_34287[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34124 === (3)))
{var inst_34121 = (state_34123[(2)]);var state_34123__$1 = state_34123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34123__$1,inst_34121);
} else
{if((state_val_34124 === (2)))
{var state_34123__$1 = state_34123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34123__$1,(4),jobs);
} else
{if((state_val_34124 === (1)))
{var state_34123__$1 = state_34123;var statearr_34130_34288 = state_34123__$1;(statearr_34130_34288[(2)] = null);
(statearr_34130_34288[(1)] = (2));
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
});})(__34279,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
;return ((function (__34279,switch__18811__auto__,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34134 = [null,null,null,null,null,null,null];(statearr_34134[(0)] = state_machine__18812__auto__);
(statearr_34134[(1)] = (1));
return statearr_34134;
});
var state_machine__18812__auto____1 = (function (state_34123){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34123);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34135){if((e34135 instanceof Object))
{var ex__18815__auto__ = e34135;var statearr_34136_34289 = state_34123;(statearr_34136_34289[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34135;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34290 = state_34123;
state_34123 = G__34290;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34123){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(__34279,switch__18811__auto__,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
})();var state__18869__auto__ = (function (){var statearr_34137 = f__18868__auto__.call(null);(statearr_34137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___34282);
return statearr_34137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(__34279,c__18867__auto___34282,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
);

break;
case "compute":
var c__18867__auto___34291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__34279,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (__34279,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function (state_34150){var state_val_34151 = (state_34150[(1)]);if((state_val_34151 === (7)))
{var inst_34146 = (state_34150[(2)]);var state_34150__$1 = state_34150;var statearr_34152_34292 = state_34150__$1;(statearr_34152_34292[(2)] = inst_34146);
(statearr_34152_34292[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34151 === (6)))
{var state_34150__$1 = state_34150;var statearr_34153_34293 = state_34150__$1;(statearr_34153_34293[(2)] = null);
(statearr_34153_34293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34151 === (5)))
{var state_34150__$1 = state_34150;var statearr_34154_34294 = state_34150__$1;(statearr_34154_34294[(2)] = null);
(statearr_34154_34294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34151 === (4)))
{var inst_34140 = (state_34150[(2)]);var inst_34141 = process.call(null,inst_34140);var state_34150__$1 = state_34150;if(cljs.core.truth_(inst_34141))
{var statearr_34155_34295 = state_34150__$1;(statearr_34155_34295[(1)] = (5));
} else
{var statearr_34156_34296 = state_34150__$1;(statearr_34156_34296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34151 === (3)))
{var inst_34148 = (state_34150[(2)]);var state_34150__$1 = state_34150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34150__$1,inst_34148);
} else
{if((state_val_34151 === (2)))
{var state_34150__$1 = state_34150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34150__$1,(4),jobs);
} else
{if((state_val_34151 === (1)))
{var state_34150__$1 = state_34150;var statearr_34157_34297 = state_34150__$1;(statearr_34157_34297[(2)] = null);
(statearr_34157_34297[(1)] = (2));
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
});})(__34279,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
;return ((function (__34279,switch__18811__auto__,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34161 = [null,null,null,null,null,null,null];(statearr_34161[(0)] = state_machine__18812__auto__);
(statearr_34161[(1)] = (1));
return statearr_34161;
});
var state_machine__18812__auto____1 = (function (state_34150){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34150);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34162){if((e34162 instanceof Object))
{var ex__18815__auto__ = e34162;var statearr_34163_34298 = state_34150;(statearr_34163_34298[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34299 = state_34150;
state_34150 = G__34299;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34150){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(__34279,switch__18811__auto__,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
})();var state__18869__auto__ = (function (){var statearr_34164 = f__18868__auto__.call(null);(statearr_34164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___34291);
return statearr_34164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(__34279,c__18867__auto___34291,G__34110_34280,n__12383__auto___34278,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__34300 = (__34279 + (1));
__34279 = G__34300;
continue;
}
} else
{}
break;
}
var c__18867__auto___34301 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___34301,jobs,results,process,async){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___34301,jobs,results,process,async){
return (function (state_34186){var state_val_34187 = (state_34186[(1)]);if((state_val_34187 === (9)))
{var inst_34179 = (state_34186[(2)]);var state_34186__$1 = (function (){var statearr_34188 = state_34186;(statearr_34188[(7)] = inst_34179);
return statearr_34188;
})();var statearr_34189_34302 = state_34186__$1;(statearr_34189_34302[(2)] = null);
(statearr_34189_34302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34187 === (8)))
{var inst_34172 = (state_34186[(8)]);var inst_34177 = (state_34186[(2)]);var state_34186__$1 = (function (){var statearr_34190 = state_34186;(statearr_34190[(9)] = inst_34177);
return statearr_34190;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34186__$1,(9),results,inst_34172);
} else
{if((state_val_34187 === (7)))
{var inst_34182 = (state_34186[(2)]);var state_34186__$1 = state_34186;var statearr_34191_34303 = state_34186__$1;(statearr_34191_34303[(2)] = inst_34182);
(statearr_34191_34303[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34187 === (6)))
{var inst_34167 = (state_34186[(10)]);var inst_34172 = (state_34186[(8)]);var inst_34172__$1 = cljs.core.async.chan.call(null,(1));var inst_34173 = cljs.core.PersistentVector.EMPTY_NODE;var inst_34174 = [inst_34167,inst_34172__$1];var inst_34175 = (new cljs.core.PersistentVector(null,2,(5),inst_34173,inst_34174,null));var state_34186__$1 = (function (){var statearr_34192 = state_34186;(statearr_34192[(8)] = inst_34172__$1);
return statearr_34192;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34186__$1,(8),jobs,inst_34175);
} else
{if((state_val_34187 === (5)))
{var inst_34170 = cljs.core.async.close_BANG_.call(null,jobs);var state_34186__$1 = state_34186;var statearr_34193_34304 = state_34186__$1;(statearr_34193_34304[(2)] = inst_34170);
(statearr_34193_34304[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34187 === (4)))
{var inst_34167 = (state_34186[(10)]);var inst_34167__$1 = (state_34186[(2)]);var inst_34168 = (inst_34167__$1 == null);var state_34186__$1 = (function (){var statearr_34194 = state_34186;(statearr_34194[(10)] = inst_34167__$1);
return statearr_34194;
})();if(cljs.core.truth_(inst_34168))
{var statearr_34195_34305 = state_34186__$1;(statearr_34195_34305[(1)] = (5));
} else
{var statearr_34196_34306 = state_34186__$1;(statearr_34196_34306[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34187 === (3)))
{var inst_34184 = (state_34186[(2)]);var state_34186__$1 = state_34186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34186__$1,inst_34184);
} else
{if((state_val_34187 === (2)))
{var state_34186__$1 = state_34186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34186__$1,(4),from);
} else
{if((state_val_34187 === (1)))
{var state_34186__$1 = state_34186;var statearr_34197_34307 = state_34186__$1;(statearr_34197_34307[(2)] = null);
(statearr_34197_34307[(1)] = (2));
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
});})(c__18867__auto___34301,jobs,results,process,async))
;return ((function (switch__18811__auto__,c__18867__auto___34301,jobs,results,process,async){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34201 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34201[(0)] = state_machine__18812__auto__);
(statearr_34201[(1)] = (1));
return statearr_34201;
});
var state_machine__18812__auto____1 = (function (state_34186){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34186);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34202){if((e34202 instanceof Object))
{var ex__18815__auto__ = e34202;var statearr_34203_34308 = state_34186;(statearr_34203_34308[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34186);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34202;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34309 = state_34186;
state_34186 = G__34309;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34186){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___34301,jobs,results,process,async))
})();var state__18869__auto__ = (function (){var statearr_34204 = f__18868__auto__.call(null);(statearr_34204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___34301);
return statearr_34204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___34301,jobs,results,process,async))
);
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,jobs,results,process,async){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,jobs,results,process,async){
return (function (state_34242){var state_val_34243 = (state_34242[(1)]);if((state_val_34243 === (7)))
{var inst_34238 = (state_34242[(2)]);var state_34242__$1 = state_34242;var statearr_34244_34310 = state_34242__$1;(statearr_34244_34310[(2)] = inst_34238);
(statearr_34244_34310[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (20)))
{var state_34242__$1 = state_34242;var statearr_34245_34311 = state_34242__$1;(statearr_34245_34311[(2)] = null);
(statearr_34245_34311[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (1)))
{var state_34242__$1 = state_34242;var statearr_34246_34312 = state_34242__$1;(statearr_34246_34312[(2)] = null);
(statearr_34246_34312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (4)))
{var inst_34207 = (state_34242[(7)]);var inst_34207__$1 = (state_34242[(2)]);var inst_34208 = (inst_34207__$1 == null);var state_34242__$1 = (function (){var statearr_34247 = state_34242;(statearr_34247[(7)] = inst_34207__$1);
return statearr_34247;
})();if(cljs.core.truth_(inst_34208))
{var statearr_34248_34313 = state_34242__$1;(statearr_34248_34313[(1)] = (5));
} else
{var statearr_34249_34314 = state_34242__$1;(statearr_34249_34314[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (15)))
{var inst_34220 = (state_34242[(8)]);var state_34242__$1 = state_34242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34242__$1,(18),to,inst_34220);
} else
{if((state_val_34243 === (21)))
{var inst_34233 = (state_34242[(2)]);var state_34242__$1 = state_34242;var statearr_34250_34315 = state_34242__$1;(statearr_34250_34315[(2)] = inst_34233);
(statearr_34250_34315[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (13)))
{var inst_34235 = (state_34242[(2)]);var state_34242__$1 = (function (){var statearr_34251 = state_34242;(statearr_34251[(9)] = inst_34235);
return statearr_34251;
})();var statearr_34252_34316 = state_34242__$1;(statearr_34252_34316[(2)] = null);
(statearr_34252_34316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (6)))
{var inst_34207 = (state_34242[(7)]);var state_34242__$1 = state_34242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34242__$1,(11),inst_34207);
} else
{if((state_val_34243 === (17)))
{var inst_34228 = (state_34242[(2)]);var state_34242__$1 = state_34242;if(cljs.core.truth_(inst_34228))
{var statearr_34253_34317 = state_34242__$1;(statearr_34253_34317[(1)] = (19));
} else
{var statearr_34254_34318 = state_34242__$1;(statearr_34254_34318[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (3)))
{var inst_34240 = (state_34242[(2)]);var state_34242__$1 = state_34242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34242__$1,inst_34240);
} else
{if((state_val_34243 === (12)))
{var inst_34217 = (state_34242[(10)]);var state_34242__$1 = state_34242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34242__$1,(14),inst_34217);
} else
{if((state_val_34243 === (2)))
{var state_34242__$1 = state_34242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34242__$1,(4),results);
} else
{if((state_val_34243 === (19)))
{var state_34242__$1 = state_34242;var statearr_34255_34319 = state_34242__$1;(statearr_34255_34319[(2)] = null);
(statearr_34255_34319[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (11)))
{var inst_34217 = (state_34242[(2)]);var state_34242__$1 = (function (){var statearr_34256 = state_34242;(statearr_34256[(10)] = inst_34217);
return statearr_34256;
})();var statearr_34257_34320 = state_34242__$1;(statearr_34257_34320[(2)] = null);
(statearr_34257_34320[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (9)))
{var state_34242__$1 = state_34242;var statearr_34258_34321 = state_34242__$1;(statearr_34258_34321[(2)] = null);
(statearr_34258_34321[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (5)))
{var state_34242__$1 = state_34242;if(cljs.core.truth_(close_QMARK_))
{var statearr_34259_34322 = state_34242__$1;(statearr_34259_34322[(1)] = (8));
} else
{var statearr_34260_34323 = state_34242__$1;(statearr_34260_34323[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (14)))
{var inst_34220 = (state_34242[(8)]);var inst_34222 = (state_34242[(11)]);var inst_34220__$1 = (state_34242[(2)]);var inst_34221 = (inst_34220__$1 == null);var inst_34222__$1 = cljs.core.not.call(null,inst_34221);var state_34242__$1 = (function (){var statearr_34261 = state_34242;(statearr_34261[(8)] = inst_34220__$1);
(statearr_34261[(11)] = inst_34222__$1);
return statearr_34261;
})();if(inst_34222__$1)
{var statearr_34262_34324 = state_34242__$1;(statearr_34262_34324[(1)] = (15));
} else
{var statearr_34263_34325 = state_34242__$1;(statearr_34263_34325[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (16)))
{var inst_34222 = (state_34242[(11)]);var state_34242__$1 = state_34242;var statearr_34264_34326 = state_34242__$1;(statearr_34264_34326[(2)] = inst_34222);
(statearr_34264_34326[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (10)))
{var inst_34214 = (state_34242[(2)]);var state_34242__$1 = state_34242;var statearr_34265_34327 = state_34242__$1;(statearr_34265_34327[(2)] = inst_34214);
(statearr_34265_34327[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (18)))
{var inst_34225 = (state_34242[(2)]);var state_34242__$1 = state_34242;var statearr_34266_34328 = state_34242__$1;(statearr_34266_34328[(2)] = inst_34225);
(statearr_34266_34328[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34243 === (8)))
{var inst_34211 = cljs.core.async.close_BANG_.call(null,to);var state_34242__$1 = state_34242;var statearr_34267_34329 = state_34242__$1;(statearr_34267_34329[(2)] = inst_34211);
(statearr_34267_34329[(1)] = (10));
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
});})(c__18867__auto__,jobs,results,process,async))
;return ((function (switch__18811__auto__,c__18867__auto__,jobs,results,process,async){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34271 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34271[(0)] = state_machine__18812__auto__);
(statearr_34271[(1)] = (1));
return statearr_34271;
});
var state_machine__18812__auto____1 = (function (state_34242){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34242);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34272){if((e34272 instanceof Object))
{var ex__18815__auto__ = e34272;var statearr_34273_34330 = state_34242;(statearr_34273_34330[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34331 = state_34242;
state_34242 = G__34331;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34242){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,jobs,results,process,async))
})();var state__18869__auto__ = (function (){var statearr_34274 = f__18868__auto__.call(null);(statearr_34274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_34274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,jobs,results,process,async))
);
return c__18867__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18867__auto___34432 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___34432,tc,fc){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___34432,tc,fc){
return (function (state_34407){var state_val_34408 = (state_34407[(1)]);if((state_val_34408 === (7)))
{var inst_34403 = (state_34407[(2)]);var state_34407__$1 = state_34407;var statearr_34409_34433 = state_34407__$1;(statearr_34409_34433[(2)] = inst_34403);
(statearr_34409_34433[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (1)))
{var state_34407__$1 = state_34407;var statearr_34410_34434 = state_34407__$1;(statearr_34410_34434[(2)] = null);
(statearr_34410_34434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (4)))
{var inst_34384 = (state_34407[(7)]);var inst_34384__$1 = (state_34407[(2)]);var inst_34385 = (inst_34384__$1 == null);var state_34407__$1 = (function (){var statearr_34411 = state_34407;(statearr_34411[(7)] = inst_34384__$1);
return statearr_34411;
})();if(cljs.core.truth_(inst_34385))
{var statearr_34412_34435 = state_34407__$1;(statearr_34412_34435[(1)] = (5));
} else
{var statearr_34413_34436 = state_34407__$1;(statearr_34413_34436[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (13)))
{var state_34407__$1 = state_34407;var statearr_34414_34437 = state_34407__$1;(statearr_34414_34437[(2)] = null);
(statearr_34414_34437[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (6)))
{var inst_34384 = (state_34407[(7)]);var inst_34390 = p.call(null,inst_34384);var state_34407__$1 = state_34407;if(cljs.core.truth_(inst_34390))
{var statearr_34415_34438 = state_34407__$1;(statearr_34415_34438[(1)] = (9));
} else
{var statearr_34416_34439 = state_34407__$1;(statearr_34416_34439[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (3)))
{var inst_34405 = (state_34407[(2)]);var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34407__$1,inst_34405);
} else
{if((state_val_34408 === (12)))
{var state_34407__$1 = state_34407;var statearr_34417_34440 = state_34407__$1;(statearr_34417_34440[(2)] = null);
(statearr_34417_34440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (2)))
{var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34407__$1,(4),ch);
} else
{if((state_val_34408 === (11)))
{var inst_34384 = (state_34407[(7)]);var inst_34394 = (state_34407[(2)]);var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34407__$1,(8),inst_34394,inst_34384);
} else
{if((state_val_34408 === (9)))
{var state_34407__$1 = state_34407;var statearr_34418_34441 = state_34407__$1;(statearr_34418_34441[(2)] = tc);
(statearr_34418_34441[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (5)))
{var inst_34387 = cljs.core.async.close_BANG_.call(null,tc);var inst_34388 = cljs.core.async.close_BANG_.call(null,fc);var state_34407__$1 = (function (){var statearr_34419 = state_34407;(statearr_34419[(8)] = inst_34387);
return statearr_34419;
})();var statearr_34420_34442 = state_34407__$1;(statearr_34420_34442[(2)] = inst_34388);
(statearr_34420_34442[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (14)))
{var inst_34401 = (state_34407[(2)]);var state_34407__$1 = state_34407;var statearr_34421_34443 = state_34407__$1;(statearr_34421_34443[(2)] = inst_34401);
(statearr_34421_34443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (10)))
{var state_34407__$1 = state_34407;var statearr_34422_34444 = state_34407__$1;(statearr_34422_34444[(2)] = fc);
(statearr_34422_34444[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34408 === (8)))
{var inst_34396 = (state_34407[(2)]);var state_34407__$1 = state_34407;if(cljs.core.truth_(inst_34396))
{var statearr_34423_34445 = state_34407__$1;(statearr_34423_34445[(1)] = (12));
} else
{var statearr_34424_34446 = state_34407__$1;(statearr_34424_34446[(1)] = (13));
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
});})(c__18867__auto___34432,tc,fc))
;return ((function (switch__18811__auto__,c__18867__auto___34432,tc,fc){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34428 = [null,null,null,null,null,null,null,null,null];(statearr_34428[(0)] = state_machine__18812__auto__);
(statearr_34428[(1)] = (1));
return statearr_34428;
});
var state_machine__18812__auto____1 = (function (state_34407){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34407);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34429){if((e34429 instanceof Object))
{var ex__18815__auto__ = e34429;var statearr_34430_34447 = state_34407;(statearr_34430_34447[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34429;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34448 = state_34407;
state_34407 = G__34448;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___34432,tc,fc))
})();var state__18869__auto__ = (function (){var statearr_34431 = f__18868__auto__.call(null);(statearr_34431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___34432);
return statearr_34431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___34432,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_34495){var state_val_34496 = (state_34495[(1)]);if((state_val_34496 === (7)))
{var inst_34491 = (state_34495[(2)]);var state_34495__$1 = state_34495;var statearr_34497_34513 = state_34495__$1;(statearr_34497_34513[(2)] = inst_34491);
(statearr_34497_34513[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34496 === (6)))
{var inst_34484 = (state_34495[(7)]);var inst_34481 = (state_34495[(8)]);var inst_34488 = f.call(null,inst_34481,inst_34484);var inst_34481__$1 = inst_34488;var state_34495__$1 = (function (){var statearr_34498 = state_34495;(statearr_34498[(8)] = inst_34481__$1);
return statearr_34498;
})();var statearr_34499_34514 = state_34495__$1;(statearr_34499_34514[(2)] = null);
(statearr_34499_34514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34496 === (5)))
{var inst_34481 = (state_34495[(8)]);var state_34495__$1 = state_34495;var statearr_34500_34515 = state_34495__$1;(statearr_34500_34515[(2)] = inst_34481);
(statearr_34500_34515[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34496 === (4)))
{var inst_34484 = (state_34495[(7)]);var inst_34484__$1 = (state_34495[(2)]);var inst_34485 = (inst_34484__$1 == null);var state_34495__$1 = (function (){var statearr_34501 = state_34495;(statearr_34501[(7)] = inst_34484__$1);
return statearr_34501;
})();if(cljs.core.truth_(inst_34485))
{var statearr_34502_34516 = state_34495__$1;(statearr_34502_34516[(1)] = (5));
} else
{var statearr_34503_34517 = state_34495__$1;(statearr_34503_34517[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34496 === (3)))
{var inst_34493 = (state_34495[(2)]);var state_34495__$1 = state_34495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34495__$1,inst_34493);
} else
{if((state_val_34496 === (2)))
{var state_34495__$1 = state_34495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34495__$1,(4),ch);
} else
{if((state_val_34496 === (1)))
{var inst_34481 = init;var state_34495__$1 = (function (){var statearr_34504 = state_34495;(statearr_34504[(8)] = inst_34481);
return statearr_34504;
})();var statearr_34505_34518 = state_34495__$1;(statearr_34505_34518[(2)] = null);
(statearr_34505_34518[(1)] = (2));
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
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34509 = [null,null,null,null,null,null,null,null,null];(statearr_34509[(0)] = state_machine__18812__auto__);
(statearr_34509[(1)] = (1));
return statearr_34509;
});
var state_machine__18812__auto____1 = (function (state_34495){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34495);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34510){if((e34510 instanceof Object))
{var ex__18815__auto__ = e34510;var statearr_34511_34519 = state_34495;(statearr_34511_34519[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34510;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34520 = state_34495;
state_34495 = G__34520;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_34512 = f__18868__auto__.call(null);(statearr_34512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_34512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_34594){var state_val_34595 = (state_34594[(1)]);if((state_val_34595 === (7)))
{var inst_34576 = (state_34594[(2)]);var state_34594__$1 = state_34594;var statearr_34596_34619 = state_34594__$1;(statearr_34596_34619[(2)] = inst_34576);
(statearr_34596_34619[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (1)))
{var inst_34570 = cljs.core.seq.call(null,coll);var inst_34571 = inst_34570;var state_34594__$1 = (function (){var statearr_34597 = state_34594;(statearr_34597[(7)] = inst_34571);
return statearr_34597;
})();var statearr_34598_34620 = state_34594__$1;(statearr_34598_34620[(2)] = null);
(statearr_34598_34620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (4)))
{var inst_34571 = (state_34594[(7)]);var inst_34574 = cljs.core.first.call(null,inst_34571);var state_34594__$1 = state_34594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34594__$1,(7),ch,inst_34574);
} else
{if((state_val_34595 === (13)))
{var inst_34588 = (state_34594[(2)]);var state_34594__$1 = state_34594;var statearr_34599_34621 = state_34594__$1;(statearr_34599_34621[(2)] = inst_34588);
(statearr_34599_34621[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (6)))
{var inst_34579 = (state_34594[(2)]);var state_34594__$1 = state_34594;if(cljs.core.truth_(inst_34579))
{var statearr_34600_34622 = state_34594__$1;(statearr_34600_34622[(1)] = (8));
} else
{var statearr_34601_34623 = state_34594__$1;(statearr_34601_34623[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (3)))
{var inst_34592 = (state_34594[(2)]);var state_34594__$1 = state_34594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34594__$1,inst_34592);
} else
{if((state_val_34595 === (12)))
{var state_34594__$1 = state_34594;var statearr_34602_34624 = state_34594__$1;(statearr_34602_34624[(2)] = null);
(statearr_34602_34624[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (2)))
{var inst_34571 = (state_34594[(7)]);var state_34594__$1 = state_34594;if(cljs.core.truth_(inst_34571))
{var statearr_34603_34625 = state_34594__$1;(statearr_34603_34625[(1)] = (4));
} else
{var statearr_34604_34626 = state_34594__$1;(statearr_34604_34626[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (11)))
{var inst_34585 = cljs.core.async.close_BANG_.call(null,ch);var state_34594__$1 = state_34594;var statearr_34605_34627 = state_34594__$1;(statearr_34605_34627[(2)] = inst_34585);
(statearr_34605_34627[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (9)))
{var state_34594__$1 = state_34594;if(cljs.core.truth_(close_QMARK_))
{var statearr_34606_34628 = state_34594__$1;(statearr_34606_34628[(1)] = (11));
} else
{var statearr_34607_34629 = state_34594__$1;(statearr_34607_34629[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (5)))
{var inst_34571 = (state_34594[(7)]);var state_34594__$1 = state_34594;var statearr_34608_34630 = state_34594__$1;(statearr_34608_34630[(2)] = inst_34571);
(statearr_34608_34630[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (10)))
{var inst_34590 = (state_34594[(2)]);var state_34594__$1 = state_34594;var statearr_34609_34631 = state_34594__$1;(statearr_34609_34631[(2)] = inst_34590);
(statearr_34609_34631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34595 === (8)))
{var inst_34571 = (state_34594[(7)]);var inst_34581 = cljs.core.next.call(null,inst_34571);var inst_34571__$1 = inst_34581;var state_34594__$1 = (function (){var statearr_34610 = state_34594;(statearr_34610[(7)] = inst_34571__$1);
return statearr_34610;
})();var statearr_34611_34632 = state_34594__$1;(statearr_34611_34632[(2)] = null);
(statearr_34611_34632[(1)] = (2));
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
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_34615 = [null,null,null,null,null,null,null,null];(statearr_34615[(0)] = state_machine__18812__auto__);
(statearr_34615[(1)] = (1));
return statearr_34615;
});
var state_machine__18812__auto____1 = (function (state_34594){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34594);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e34616){if((e34616 instanceof Object))
{var ex__18815__auto__ = e34616;var statearr_34617_34633 = state_34594;(statearr_34617_34633[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34616;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34634 = state_34594;
state_34594 = G__34634;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34594){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_34618 = f__18868__auto__.call(null);(statearr_34618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_34618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
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
cljs.core.async.Mux = (function (){var obj34636 = {};return obj34636;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11502__auto__ = _;if(and__11502__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12150__auto__ = (((_ == null))?null:_);return (function (){var or__11514__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34638 = {};return obj34638;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34860 = (function (cs,ch,mult,meta34861){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34861 = meta34861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34860.cljs$lang$type = true;
cljs.core.async.t34860.cljs$lang$ctorStr = "cljs.core.async/t34860";
cljs.core.async.t34860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t34860");
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34862){var self__ = this;
var _34862__$1 = this;return self__.meta34861;
});})(cs))
;
cljs.core.async.t34860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34862,meta34861__$1){var self__ = this;
var _34862__$1 = this;return (new cljs.core.async.t34860(self__.cs,self__.ch,self__.mult,meta34861__$1));
});})(cs))
;
cljs.core.async.__GT_t34860 = ((function (cs){
return (function __GT_t34860(cs__$1,ch__$1,mult__$1,meta34861){return (new cljs.core.async.t34860(cs__$1,ch__$1,mult__$1,meta34861));
});})(cs))
;
}
return (new cljs.core.async.t34860(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18867__auto___35081 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___35081,cs,m,dchan,dctr,done){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___35081,cs,m,dchan,dctr,done){
return (function (state_34993){var state_val_34994 = (state_34993[(1)]);if((state_val_34994 === (7)))
{var inst_34989 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_34995_35082 = state_34993__$1;(statearr_34995_35082[(2)] = inst_34989);
(statearr_34995_35082[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (20)))
{var inst_34894 = (state_34993[(7)]);var inst_34904 = cljs.core.first.call(null,inst_34894);var inst_34905 = cljs.core.nth.call(null,inst_34904,(0),null);var inst_34906 = cljs.core.nth.call(null,inst_34904,(1),null);var state_34993__$1 = (function (){var statearr_34996 = state_34993;(statearr_34996[(8)] = inst_34905);
return statearr_34996;
})();if(cljs.core.truth_(inst_34906))
{var statearr_34997_35083 = state_34993__$1;(statearr_34997_35083[(1)] = (22));
} else
{var statearr_34998_35084 = state_34993__$1;(statearr_34998_35084[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (27)))
{var inst_34934 = (state_34993[(9)]);var inst_34941 = (state_34993[(10)]);var inst_34865 = (state_34993[(11)]);var inst_34936 = (state_34993[(12)]);var inst_34941__$1 = cljs.core._nth.call(null,inst_34934,inst_34936);var inst_34942 = cljs.core.async.put_BANG_.call(null,inst_34941__$1,inst_34865,done);var state_34993__$1 = (function (){var statearr_34999 = state_34993;(statearr_34999[(10)] = inst_34941__$1);
return statearr_34999;
})();if(cljs.core.truth_(inst_34942))
{var statearr_35000_35085 = state_34993__$1;(statearr_35000_35085[(1)] = (30));
} else
{var statearr_35001_35086 = state_34993__$1;(statearr_35001_35086[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (1)))
{var state_34993__$1 = state_34993;var statearr_35002_35087 = state_34993__$1;(statearr_35002_35087[(2)] = null);
(statearr_35002_35087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (24)))
{var inst_34894 = (state_34993[(7)]);var inst_34911 = (state_34993[(2)]);var inst_34912 = cljs.core.next.call(null,inst_34894);var inst_34874 = inst_34912;var inst_34875 = null;var inst_34876 = (0);var inst_34877 = (0);var state_34993__$1 = (function (){var statearr_35003 = state_34993;(statearr_35003[(13)] = inst_34876);
(statearr_35003[(14)] = inst_34875);
(statearr_35003[(15)] = inst_34874);
(statearr_35003[(16)] = inst_34877);
(statearr_35003[(17)] = inst_34911);
return statearr_35003;
})();var statearr_35004_35088 = state_34993__$1;(statearr_35004_35088[(2)] = null);
(statearr_35004_35088[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (39)))
{var state_34993__$1 = state_34993;var statearr_35008_35089 = state_34993__$1;(statearr_35008_35089[(2)] = null);
(statearr_35008_35089[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (4)))
{var inst_34865 = (state_34993[(11)]);var inst_34865__$1 = (state_34993[(2)]);var inst_34866 = (inst_34865__$1 == null);var state_34993__$1 = (function (){var statearr_35009 = state_34993;(statearr_35009[(11)] = inst_34865__$1);
return statearr_35009;
})();if(cljs.core.truth_(inst_34866))
{var statearr_35010_35090 = state_34993__$1;(statearr_35010_35090[(1)] = (5));
} else
{var statearr_35011_35091 = state_34993__$1;(statearr_35011_35091[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (15)))
{var inst_34876 = (state_34993[(13)]);var inst_34875 = (state_34993[(14)]);var inst_34874 = (state_34993[(15)]);var inst_34877 = (state_34993[(16)]);var inst_34890 = (state_34993[(2)]);var inst_34891 = (inst_34877 + (1));var tmp35005 = inst_34876;var tmp35006 = inst_34875;var tmp35007 = inst_34874;var inst_34874__$1 = tmp35007;var inst_34875__$1 = tmp35006;var inst_34876__$1 = tmp35005;var inst_34877__$1 = inst_34891;var state_34993__$1 = (function (){var statearr_35012 = state_34993;(statearr_35012[(13)] = inst_34876__$1);
(statearr_35012[(14)] = inst_34875__$1);
(statearr_35012[(15)] = inst_34874__$1);
(statearr_35012[(16)] = inst_34877__$1);
(statearr_35012[(18)] = inst_34890);
return statearr_35012;
})();var statearr_35013_35092 = state_34993__$1;(statearr_35013_35092[(2)] = null);
(statearr_35013_35092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (21)))
{var inst_34915 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35017_35093 = state_34993__$1;(statearr_35017_35093[(2)] = inst_34915);
(statearr_35017_35093[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (31)))
{var inst_34941 = (state_34993[(10)]);var inst_34945 = done.call(null,null);var inst_34946 = cljs.core.async.untap_STAR_.call(null,m,inst_34941);var state_34993__$1 = (function (){var statearr_35018 = state_34993;(statearr_35018[(19)] = inst_34945);
return statearr_35018;
})();var statearr_35019_35094 = state_34993__$1;(statearr_35019_35094[(2)] = inst_34946);
(statearr_35019_35094[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (32)))
{var inst_34934 = (state_34993[(9)]);var inst_34933 = (state_34993[(20)]);var inst_34935 = (state_34993[(21)]);var inst_34936 = (state_34993[(12)]);var inst_34948 = (state_34993[(2)]);var inst_34949 = (inst_34936 + (1));var tmp35014 = inst_34934;var tmp35015 = inst_34933;var tmp35016 = inst_34935;var inst_34933__$1 = tmp35015;var inst_34934__$1 = tmp35014;var inst_34935__$1 = tmp35016;var inst_34936__$1 = inst_34949;var state_34993__$1 = (function (){var statearr_35020 = state_34993;(statearr_35020[(9)] = inst_34934__$1);
(statearr_35020[(20)] = inst_34933__$1);
(statearr_35020[(21)] = inst_34935__$1);
(statearr_35020[(12)] = inst_34936__$1);
(statearr_35020[(22)] = inst_34948);
return statearr_35020;
})();var statearr_35021_35095 = state_34993__$1;(statearr_35021_35095[(2)] = null);
(statearr_35021_35095[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (40)))
{var inst_34961 = (state_34993[(23)]);var inst_34965 = done.call(null,null);var inst_34966 = cljs.core.async.untap_STAR_.call(null,m,inst_34961);var state_34993__$1 = (function (){var statearr_35022 = state_34993;(statearr_35022[(24)] = inst_34965);
return statearr_35022;
})();var statearr_35023_35096 = state_34993__$1;(statearr_35023_35096[(2)] = inst_34966);
(statearr_35023_35096[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (33)))
{var inst_34952 = (state_34993[(25)]);var inst_34954 = cljs.core.chunked_seq_QMARK_.call(null,inst_34952);var state_34993__$1 = state_34993;if(inst_34954)
{var statearr_35024_35097 = state_34993__$1;(statearr_35024_35097[(1)] = (36));
} else
{var statearr_35025_35098 = state_34993__$1;(statearr_35025_35098[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (13)))
{var inst_34884 = (state_34993[(26)]);var inst_34887 = cljs.core.async.close_BANG_.call(null,inst_34884);var state_34993__$1 = state_34993;var statearr_35026_35099 = state_34993__$1;(statearr_35026_35099[(2)] = inst_34887);
(statearr_35026_35099[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (22)))
{var inst_34905 = (state_34993[(8)]);var inst_34908 = cljs.core.async.close_BANG_.call(null,inst_34905);var state_34993__$1 = state_34993;var statearr_35027_35100 = state_34993__$1;(statearr_35027_35100[(2)] = inst_34908);
(statearr_35027_35100[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (36)))
{var inst_34952 = (state_34993[(25)]);var inst_34956 = cljs.core.chunk_first.call(null,inst_34952);var inst_34957 = cljs.core.chunk_rest.call(null,inst_34952);var inst_34958 = cljs.core.count.call(null,inst_34956);var inst_34933 = inst_34957;var inst_34934 = inst_34956;var inst_34935 = inst_34958;var inst_34936 = (0);var state_34993__$1 = (function (){var statearr_35028 = state_34993;(statearr_35028[(9)] = inst_34934);
(statearr_35028[(20)] = inst_34933);
(statearr_35028[(21)] = inst_34935);
(statearr_35028[(12)] = inst_34936);
return statearr_35028;
})();var statearr_35029_35101 = state_34993__$1;(statearr_35029_35101[(2)] = null);
(statearr_35029_35101[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (41)))
{var inst_34952 = (state_34993[(25)]);var inst_34968 = (state_34993[(2)]);var inst_34969 = cljs.core.next.call(null,inst_34952);var inst_34933 = inst_34969;var inst_34934 = null;var inst_34935 = (0);var inst_34936 = (0);var state_34993__$1 = (function (){var statearr_35030 = state_34993;(statearr_35030[(9)] = inst_34934);
(statearr_35030[(20)] = inst_34933);
(statearr_35030[(21)] = inst_34935);
(statearr_35030[(27)] = inst_34968);
(statearr_35030[(12)] = inst_34936);
return statearr_35030;
})();var statearr_35031_35102 = state_34993__$1;(statearr_35031_35102[(2)] = null);
(statearr_35031_35102[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (43)))
{var state_34993__$1 = state_34993;var statearr_35032_35103 = state_34993__$1;(statearr_35032_35103[(2)] = null);
(statearr_35032_35103[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (29)))
{var inst_34977 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35033_35104 = state_34993__$1;(statearr_35033_35104[(2)] = inst_34977);
(statearr_35033_35104[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (44)))
{var inst_34986 = (state_34993[(2)]);var state_34993__$1 = (function (){var statearr_35034 = state_34993;(statearr_35034[(28)] = inst_34986);
return statearr_35034;
})();var statearr_35035_35105 = state_34993__$1;(statearr_35035_35105[(2)] = null);
(statearr_35035_35105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (6)))
{var inst_34925 = (state_34993[(29)]);var inst_34924 = cljs.core.deref.call(null,cs);var inst_34925__$1 = cljs.core.keys.call(null,inst_34924);var inst_34926 = cljs.core.count.call(null,inst_34925__$1);var inst_34927 = cljs.core.reset_BANG_.call(null,dctr,inst_34926);var inst_34932 = cljs.core.seq.call(null,inst_34925__$1);var inst_34933 = inst_34932;var inst_34934 = null;var inst_34935 = (0);var inst_34936 = (0);var state_34993__$1 = (function (){var statearr_35036 = state_34993;(statearr_35036[(30)] = inst_34927);
(statearr_35036[(9)] = inst_34934);
(statearr_35036[(29)] = inst_34925__$1);
(statearr_35036[(20)] = inst_34933);
(statearr_35036[(21)] = inst_34935);
(statearr_35036[(12)] = inst_34936);
return statearr_35036;
})();var statearr_35037_35106 = state_34993__$1;(statearr_35037_35106[(2)] = null);
(statearr_35037_35106[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (28)))
{var inst_34952 = (state_34993[(25)]);var inst_34933 = (state_34993[(20)]);var inst_34952__$1 = cljs.core.seq.call(null,inst_34933);var state_34993__$1 = (function (){var statearr_35038 = state_34993;(statearr_35038[(25)] = inst_34952__$1);
return statearr_35038;
})();if(inst_34952__$1)
{var statearr_35039_35107 = state_34993__$1;(statearr_35039_35107[(1)] = (33));
} else
{var statearr_35040_35108 = state_34993__$1;(statearr_35040_35108[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (25)))
{var inst_34935 = (state_34993[(21)]);var inst_34936 = (state_34993[(12)]);var inst_34938 = (inst_34936 < inst_34935);var inst_34939 = inst_34938;var state_34993__$1 = state_34993;if(cljs.core.truth_(inst_34939))
{var statearr_35041_35109 = state_34993__$1;(statearr_35041_35109[(1)] = (27));
} else
{var statearr_35042_35110 = state_34993__$1;(statearr_35042_35110[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (34)))
{var state_34993__$1 = state_34993;var statearr_35043_35111 = state_34993__$1;(statearr_35043_35111[(2)] = null);
(statearr_35043_35111[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (17)))
{var state_34993__$1 = state_34993;var statearr_35044_35112 = state_34993__$1;(statearr_35044_35112[(2)] = null);
(statearr_35044_35112[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (3)))
{var inst_34991 = (state_34993[(2)]);var state_34993__$1 = state_34993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34993__$1,inst_34991);
} else
{if((state_val_34994 === (12)))
{var inst_34920 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35045_35113 = state_34993__$1;(statearr_35045_35113[(2)] = inst_34920);
(statearr_35045_35113[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (2)))
{var state_34993__$1 = state_34993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34993__$1,(4),ch);
} else
{if((state_val_34994 === (23)))
{var state_34993__$1 = state_34993;var statearr_35046_35114 = state_34993__$1;(statearr_35046_35114[(2)] = null);
(statearr_35046_35114[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (35)))
{var inst_34975 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35047_35115 = state_34993__$1;(statearr_35047_35115[(2)] = inst_34975);
(statearr_35047_35115[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (19)))
{var inst_34894 = (state_34993[(7)]);var inst_34898 = cljs.core.chunk_first.call(null,inst_34894);var inst_34899 = cljs.core.chunk_rest.call(null,inst_34894);var inst_34900 = cljs.core.count.call(null,inst_34898);var inst_34874 = inst_34899;var inst_34875 = inst_34898;var inst_34876 = inst_34900;var inst_34877 = (0);var state_34993__$1 = (function (){var statearr_35048 = state_34993;(statearr_35048[(13)] = inst_34876);
(statearr_35048[(14)] = inst_34875);
(statearr_35048[(15)] = inst_34874);
(statearr_35048[(16)] = inst_34877);
return statearr_35048;
})();var statearr_35049_35116 = state_34993__$1;(statearr_35049_35116[(2)] = null);
(statearr_35049_35116[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (11)))
{var inst_34874 = (state_34993[(15)]);var inst_34894 = (state_34993[(7)]);var inst_34894__$1 = cljs.core.seq.call(null,inst_34874);var state_34993__$1 = (function (){var statearr_35050 = state_34993;(statearr_35050[(7)] = inst_34894__$1);
return statearr_35050;
})();if(inst_34894__$1)
{var statearr_35051_35117 = state_34993__$1;(statearr_35051_35117[(1)] = (16));
} else
{var statearr_35052_35118 = state_34993__$1;(statearr_35052_35118[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (9)))
{var inst_34922 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35053_35119 = state_34993__$1;(statearr_35053_35119[(2)] = inst_34922);
(statearr_35053_35119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (5)))
{var inst_34872 = cljs.core.deref.call(null,cs);var inst_34873 = cljs.core.seq.call(null,inst_34872);var inst_34874 = inst_34873;var inst_34875 = null;var inst_34876 = (0);var inst_34877 = (0);var state_34993__$1 = (function (){var statearr_35054 = state_34993;(statearr_35054[(13)] = inst_34876);
(statearr_35054[(14)] = inst_34875);
(statearr_35054[(15)] = inst_34874);
(statearr_35054[(16)] = inst_34877);
return statearr_35054;
})();var statearr_35055_35120 = state_34993__$1;(statearr_35055_35120[(2)] = null);
(statearr_35055_35120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (14)))
{var state_34993__$1 = state_34993;var statearr_35056_35121 = state_34993__$1;(statearr_35056_35121[(2)] = null);
(statearr_35056_35121[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (45)))
{var inst_34983 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35057_35122 = state_34993__$1;(statearr_35057_35122[(2)] = inst_34983);
(statearr_35057_35122[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (26)))
{var inst_34925 = (state_34993[(29)]);var inst_34979 = (state_34993[(2)]);var inst_34980 = cljs.core.seq.call(null,inst_34925);var state_34993__$1 = (function (){var statearr_35058 = state_34993;(statearr_35058[(31)] = inst_34979);
return statearr_35058;
})();if(inst_34980)
{var statearr_35059_35123 = state_34993__$1;(statearr_35059_35123[(1)] = (42));
} else
{var statearr_35060_35124 = state_34993__$1;(statearr_35060_35124[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (16)))
{var inst_34894 = (state_34993[(7)]);var inst_34896 = cljs.core.chunked_seq_QMARK_.call(null,inst_34894);var state_34993__$1 = state_34993;if(inst_34896)
{var statearr_35061_35125 = state_34993__$1;(statearr_35061_35125[(1)] = (19));
} else
{var statearr_35062_35126 = state_34993__$1;(statearr_35062_35126[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (38)))
{var inst_34972 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35063_35127 = state_34993__$1;(statearr_35063_35127[(2)] = inst_34972);
(statearr_35063_35127[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (30)))
{var state_34993__$1 = state_34993;var statearr_35064_35128 = state_34993__$1;(statearr_35064_35128[(2)] = null);
(statearr_35064_35128[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (10)))
{var inst_34875 = (state_34993[(14)]);var inst_34877 = (state_34993[(16)]);var inst_34883 = cljs.core._nth.call(null,inst_34875,inst_34877);var inst_34884 = cljs.core.nth.call(null,inst_34883,(0),null);var inst_34885 = cljs.core.nth.call(null,inst_34883,(1),null);var state_34993__$1 = (function (){var statearr_35065 = state_34993;(statearr_35065[(26)] = inst_34884);
return statearr_35065;
})();if(cljs.core.truth_(inst_34885))
{var statearr_35066_35129 = state_34993__$1;(statearr_35066_35129[(1)] = (13));
} else
{var statearr_35067_35130 = state_34993__$1;(statearr_35067_35130[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (18)))
{var inst_34918 = (state_34993[(2)]);var state_34993__$1 = state_34993;var statearr_35068_35131 = state_34993__$1;(statearr_35068_35131[(2)] = inst_34918);
(statearr_35068_35131[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (42)))
{var state_34993__$1 = state_34993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34993__$1,(45),dchan);
} else
{if((state_val_34994 === (37)))
{var inst_34952 = (state_34993[(25)]);var inst_34865 = (state_34993[(11)]);var inst_34961 = (state_34993[(23)]);var inst_34961__$1 = cljs.core.first.call(null,inst_34952);var inst_34962 = cljs.core.async.put_BANG_.call(null,inst_34961__$1,inst_34865,done);var state_34993__$1 = (function (){var statearr_35069 = state_34993;(statearr_35069[(23)] = inst_34961__$1);
return statearr_35069;
})();if(cljs.core.truth_(inst_34962))
{var statearr_35070_35132 = state_34993__$1;(statearr_35070_35132[(1)] = (39));
} else
{var statearr_35071_35133 = state_34993__$1;(statearr_35071_35133[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34994 === (8)))
{var inst_34876 = (state_34993[(13)]);var inst_34877 = (state_34993[(16)]);var inst_34879 = (inst_34877 < inst_34876);var inst_34880 = inst_34879;var state_34993__$1 = state_34993;if(cljs.core.truth_(inst_34880))
{var statearr_35072_35134 = state_34993__$1;(statearr_35072_35134[(1)] = (10));
} else
{var statearr_35073_35135 = state_34993__$1;(statearr_35073_35135[(1)] = (11));
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
});})(c__18867__auto___35081,cs,m,dchan,dctr,done))
;return ((function (switch__18811__auto__,c__18867__auto___35081,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_35077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35077[(0)] = state_machine__18812__auto__);
(statearr_35077[(1)] = (1));
return statearr_35077;
});
var state_machine__18812__auto____1 = (function (state_34993){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_34993);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e35078){if((e35078 instanceof Object))
{var ex__18815__auto__ = e35078;var statearr_35079_35136 = state_34993;(statearr_35079_35136[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35137 = state_34993;
state_34993 = G__35137;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_34993){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_34993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___35081,cs,m,dchan,dctr,done))
})();var state__18869__auto__ = (function (){var statearr_35080 = f__18868__auto__.call(null);(statearr_35080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___35081);
return statearr_35080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___35081,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj35139 = {};return obj35139;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11502__auto__ = m;if(and__11502__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12150__auto__ = (((m == null))?null:m);return (function (){var or__11514__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__35140){var map__35145 = p__35140;var map__35145__$1 = ((cljs.core.seq_QMARK_.call(null,map__35145))?cljs.core.apply.call(null,cljs.core.hash_map,map__35145):map__35145);var opts = map__35145__$1;var statearr_35146_35149 = state;(statearr_35146_35149[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__35145,map__35145__$1,opts){
return (function (val){var statearr_35147_35150 = state;(statearr_35147_35150[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35145,map__35145__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_35148_35151 = state;(statearr_35148_35151[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__35140 = null;if (arguments.length > 3) {
  p__35140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__35140);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__35152){
var state = cljs.core.first(arglist__35152);
arglist__35152 = cljs.core.next(arglist__35152);
var cont_block = cljs.core.first(arglist__35152);
arglist__35152 = cljs.core.next(arglist__35152);
var ports = cljs.core.first(arglist__35152);
var p__35140 = cljs.core.rest(arglist__35152);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__35140);
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
;var m = (function (){if(typeof cljs.core.async.t35272 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35272 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35273){
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
this.meta35273 = meta35273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35272.cljs$lang$type = true;
cljs.core.async.t35272.cljs$lang$ctorStr = "cljs.core.async/t35272";
cljs.core.async.t35272.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t35272");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35274){var self__ = this;
var _35274__$1 = this;return self__.meta35273;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35274,meta35273__$1){var self__ = this;
var _35274__$1 = this;return (new cljs.core.async.t35272(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35273__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35272 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35272(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35273){return (new cljs.core.async.t35272(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35273));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35272(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__18867__auto___35391 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35344){var state_val_35345 = (state_35344[(1)]);if((state_val_35345 === (7)))
{var inst_35288 = (state_35344[(7)]);var inst_35293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35288);var state_35344__$1 = state_35344;var statearr_35346_35392 = state_35344__$1;(statearr_35346_35392[(2)] = inst_35293);
(statearr_35346_35392[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (20)))
{var inst_35303 = (state_35344[(8)]);var state_35344__$1 = state_35344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35344__$1,(23),out,inst_35303);
} else
{if((state_val_35345 === (1)))
{var inst_35278 = (state_35344[(9)]);var inst_35278__$1 = calc_state.call(null);var inst_35279 = cljs.core.seq_QMARK_.call(null,inst_35278__$1);var state_35344__$1 = (function (){var statearr_35347 = state_35344;(statearr_35347[(9)] = inst_35278__$1);
return statearr_35347;
})();if(inst_35279)
{var statearr_35348_35393 = state_35344__$1;(statearr_35348_35393[(1)] = (2));
} else
{var statearr_35349_35394 = state_35344__$1;(statearr_35349_35394[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (24)))
{var inst_35296 = (state_35344[(10)]);var inst_35288 = inst_35296;var state_35344__$1 = (function (){var statearr_35350 = state_35344;(statearr_35350[(7)] = inst_35288);
return statearr_35350;
})();var statearr_35351_35395 = state_35344__$1;(statearr_35351_35395[(2)] = null);
(statearr_35351_35395[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (4)))
{var inst_35278 = (state_35344[(9)]);var inst_35284 = (state_35344[(2)]);var inst_35285 = cljs.core.get.call(null,inst_35284,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35286 = cljs.core.get.call(null,inst_35284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35287 = cljs.core.get.call(null,inst_35284,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_35288 = inst_35278;var state_35344__$1 = (function (){var statearr_35352 = state_35344;(statearr_35352[(11)] = inst_35286);
(statearr_35352[(7)] = inst_35288);
(statearr_35352[(12)] = inst_35285);
(statearr_35352[(13)] = inst_35287);
return statearr_35352;
})();var statearr_35353_35396 = state_35344__$1;(statearr_35353_35396[(2)] = null);
(statearr_35353_35396[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (15)))
{var state_35344__$1 = state_35344;var statearr_35354_35397 = state_35344__$1;(statearr_35354_35397[(2)] = null);
(statearr_35354_35397[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (21)))
{var inst_35296 = (state_35344[(10)]);var inst_35288 = inst_35296;var state_35344__$1 = (function (){var statearr_35355 = state_35344;(statearr_35355[(7)] = inst_35288);
return statearr_35355;
})();var statearr_35356_35398 = state_35344__$1;(statearr_35356_35398[(2)] = null);
(statearr_35356_35398[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (13)))
{var inst_35340 = (state_35344[(2)]);var state_35344__$1 = state_35344;var statearr_35357_35399 = state_35344__$1;(statearr_35357_35399[(2)] = inst_35340);
(statearr_35357_35399[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (22)))
{var inst_35338 = (state_35344[(2)]);var state_35344__$1 = state_35344;var statearr_35358_35400 = state_35344__$1;(statearr_35358_35400[(2)] = inst_35338);
(statearr_35358_35400[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (6)))
{var inst_35342 = (state_35344[(2)]);var state_35344__$1 = state_35344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35344__$1,inst_35342);
} else
{if((state_val_35345 === (25)))
{var state_35344__$1 = state_35344;var statearr_35359_35401 = state_35344__$1;(statearr_35359_35401[(2)] = null);
(statearr_35359_35401[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (17)))
{var inst_35318 = (state_35344[(14)]);var state_35344__$1 = state_35344;var statearr_35360_35402 = state_35344__$1;(statearr_35360_35402[(2)] = inst_35318);
(statearr_35360_35402[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (3)))
{var inst_35278 = (state_35344[(9)]);var state_35344__$1 = state_35344;var statearr_35361_35403 = state_35344__$1;(statearr_35361_35403[(2)] = inst_35278);
(statearr_35361_35403[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (12)))
{var inst_35318 = (state_35344[(14)]);var inst_35299 = (state_35344[(15)]);var inst_35304 = (state_35344[(16)]);var inst_35318__$1 = inst_35299.call(null,inst_35304);var state_35344__$1 = (function (){var statearr_35362 = state_35344;(statearr_35362[(14)] = inst_35318__$1);
return statearr_35362;
})();if(cljs.core.truth_(inst_35318__$1))
{var statearr_35363_35404 = state_35344__$1;(statearr_35363_35404[(1)] = (17));
} else
{var statearr_35364_35405 = state_35344__$1;(statearr_35364_35405[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (2)))
{var inst_35278 = (state_35344[(9)]);var inst_35281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35278);var state_35344__$1 = state_35344;var statearr_35365_35406 = state_35344__$1;(statearr_35365_35406[(2)] = inst_35281);
(statearr_35365_35406[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (23)))
{var inst_35329 = (state_35344[(2)]);var state_35344__$1 = state_35344;if(cljs.core.truth_(inst_35329))
{var statearr_35366_35407 = state_35344__$1;(statearr_35366_35407[(1)] = (24));
} else
{var statearr_35367_35408 = state_35344__$1;(statearr_35367_35408[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (19)))
{var inst_35326 = (state_35344[(2)]);var state_35344__$1 = state_35344;if(cljs.core.truth_(inst_35326))
{var statearr_35368_35409 = state_35344__$1;(statearr_35368_35409[(1)] = (20));
} else
{var statearr_35369_35410 = state_35344__$1;(statearr_35369_35410[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (11)))
{var inst_35303 = (state_35344[(8)]);var inst_35309 = (inst_35303 == null);var state_35344__$1 = state_35344;if(cljs.core.truth_(inst_35309))
{var statearr_35370_35411 = state_35344__$1;(statearr_35370_35411[(1)] = (14));
} else
{var statearr_35371_35412 = state_35344__$1;(statearr_35371_35412[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (9)))
{var inst_35296 = (state_35344[(10)]);var inst_35296__$1 = (state_35344[(2)]);var inst_35297 = cljs.core.get.call(null,inst_35296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35298 = cljs.core.get.call(null,inst_35296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35299 = cljs.core.get.call(null,inst_35296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_35344__$1 = (function (){var statearr_35372 = state_35344;(statearr_35372[(10)] = inst_35296__$1);
(statearr_35372[(17)] = inst_35298);
(statearr_35372[(15)] = inst_35299);
return statearr_35372;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_35344__$1,(10),inst_35297);
} else
{if((state_val_35345 === (5)))
{var inst_35288 = (state_35344[(7)]);var inst_35291 = cljs.core.seq_QMARK_.call(null,inst_35288);var state_35344__$1 = state_35344;if(inst_35291)
{var statearr_35373_35413 = state_35344__$1;(statearr_35373_35413[(1)] = (7));
} else
{var statearr_35374_35414 = state_35344__$1;(statearr_35374_35414[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (14)))
{var inst_35304 = (state_35344[(16)]);var inst_35311 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35304);var state_35344__$1 = state_35344;var statearr_35375_35415 = state_35344__$1;(statearr_35375_35415[(2)] = inst_35311);
(statearr_35375_35415[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (26)))
{var inst_35334 = (state_35344[(2)]);var state_35344__$1 = state_35344;var statearr_35376_35416 = state_35344__$1;(statearr_35376_35416[(2)] = inst_35334);
(statearr_35376_35416[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (16)))
{var inst_35314 = (state_35344[(2)]);var inst_35315 = calc_state.call(null);var inst_35288 = inst_35315;var state_35344__$1 = (function (){var statearr_35377 = state_35344;(statearr_35377[(7)] = inst_35288);
(statearr_35377[(18)] = inst_35314);
return statearr_35377;
})();var statearr_35378_35417 = state_35344__$1;(statearr_35378_35417[(2)] = null);
(statearr_35378_35417[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (10)))
{var inst_35303 = (state_35344[(8)]);var inst_35304 = (state_35344[(16)]);var inst_35302 = (state_35344[(2)]);var inst_35303__$1 = cljs.core.nth.call(null,inst_35302,(0),null);var inst_35304__$1 = cljs.core.nth.call(null,inst_35302,(1),null);var inst_35305 = (inst_35303__$1 == null);var inst_35306 = cljs.core._EQ_.call(null,inst_35304__$1,change);var inst_35307 = (inst_35305) || (inst_35306);var state_35344__$1 = (function (){var statearr_35379 = state_35344;(statearr_35379[(8)] = inst_35303__$1);
(statearr_35379[(16)] = inst_35304__$1);
return statearr_35379;
})();if(cljs.core.truth_(inst_35307))
{var statearr_35380_35418 = state_35344__$1;(statearr_35380_35418[(1)] = (11));
} else
{var statearr_35381_35419 = state_35344__$1;(statearr_35381_35419[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (18)))
{var inst_35298 = (state_35344[(17)]);var inst_35299 = (state_35344[(15)]);var inst_35304 = (state_35344[(16)]);var inst_35321 = cljs.core.empty_QMARK_.call(null,inst_35299);var inst_35322 = inst_35298.call(null,inst_35304);var inst_35323 = cljs.core.not.call(null,inst_35322);var inst_35324 = (inst_35321) && (inst_35323);var state_35344__$1 = state_35344;var statearr_35382_35420 = state_35344__$1;(statearr_35382_35420[(2)] = inst_35324);
(statearr_35382_35420[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35345 === (8)))
{var inst_35288 = (state_35344[(7)]);var state_35344__$1 = state_35344;var statearr_35383_35421 = state_35344__$1;(statearr_35383_35421[(2)] = inst_35288);
(statearr_35383_35421[(1)] = (9));
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
});})(c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__18811__auto__,c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_35387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35387[(0)] = state_machine__18812__auto__);
(statearr_35387[(1)] = (1));
return statearr_35387;
});
var state_machine__18812__auto____1 = (function (state_35344){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_35344);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e35388){if((e35388 instanceof Object))
{var ex__18815__auto__ = e35388;var statearr_35389_35422 = state_35344;(statearr_35389_35422[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35423 = state_35344;
state_35344 = G__35423;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_35344){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_35344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__18869__auto__ = (function (){var statearr_35390 = f__18868__auto__.call(null);(statearr_35390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___35391);
return statearr_35390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___35391,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj35425 = {};return obj35425;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11502__auto__ = p;if(and__11502__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11502__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12150__auto__ = (((p == null))?null:p);return (function (){var or__11514__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11502__auto__ = p;if(and__11502__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12150__auto__ = (((p == null))?null:p);return (function (){var or__11514__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11502__auto__ = p;if(and__11502__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12150__auto__ = (((p == null))?null:p);return (function (){var or__11514__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11502__auto__ = p;if(and__11502__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12150__auto__ = (((p == null))?null:p);return (function (){var or__11514__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
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
return (function (topic){var or__11514__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11514__auto__,mults){
return (function (p1__35426_SHARP_){if(cljs.core.truth_(p1__35426_SHARP_.call(null,topic)))
{return p1__35426_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11514__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35549 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35550){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35550 = meta35550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35549.cljs$lang$type = true;
cljs.core.async.t35549.cljs$lang$ctorStr = "cljs.core.async/t35549";
cljs.core.async.t35549.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t35549");
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35549.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35551){var self__ = this;
var _35551__$1 = this;return self__.meta35550;
});})(mults,ensure_mult))
;
cljs.core.async.t35549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35551,meta35550__$1){var self__ = this;
var _35551__$1 = this;return (new cljs.core.async.t35549(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35550__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35549 = ((function (mults,ensure_mult){
return (function __GT_t35549(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35550){return (new cljs.core.async.t35549(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35550));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35549(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18867__auto___35671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___35671,mults,ensure_mult,p){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___35671,mults,ensure_mult,p){
return (function (state_35623){var state_val_35624 = (state_35623[(1)]);if((state_val_35624 === (7)))
{var inst_35619 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35625_35672 = state_35623__$1;(statearr_35625_35672[(2)] = inst_35619);
(statearr_35625_35672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (20)))
{var state_35623__$1 = state_35623;var statearr_35626_35673 = state_35623__$1;(statearr_35626_35673[(2)] = null);
(statearr_35626_35673[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (1)))
{var state_35623__$1 = state_35623;var statearr_35627_35674 = state_35623__$1;(statearr_35627_35674[(2)] = null);
(statearr_35627_35674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (24)))
{var inst_35602 = (state_35623[(7)]);var inst_35611 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35602);var state_35623__$1 = state_35623;var statearr_35628_35675 = state_35623__$1;(statearr_35628_35675[(2)] = inst_35611);
(statearr_35628_35675[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (4)))
{var inst_35554 = (state_35623[(8)]);var inst_35554__$1 = (state_35623[(2)]);var inst_35555 = (inst_35554__$1 == null);var state_35623__$1 = (function (){var statearr_35629 = state_35623;(statearr_35629[(8)] = inst_35554__$1);
return statearr_35629;
})();if(cljs.core.truth_(inst_35555))
{var statearr_35630_35676 = state_35623__$1;(statearr_35630_35676[(1)] = (5));
} else
{var statearr_35631_35677 = state_35623__$1;(statearr_35631_35677[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (15)))
{var inst_35596 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35632_35678 = state_35623__$1;(statearr_35632_35678[(2)] = inst_35596);
(statearr_35632_35678[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (21)))
{var inst_35616 = (state_35623[(2)]);var state_35623__$1 = (function (){var statearr_35633 = state_35623;(statearr_35633[(9)] = inst_35616);
return statearr_35633;
})();var statearr_35634_35679 = state_35623__$1;(statearr_35634_35679[(2)] = null);
(statearr_35634_35679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (13)))
{var inst_35578 = (state_35623[(10)]);var inst_35580 = cljs.core.chunked_seq_QMARK_.call(null,inst_35578);var state_35623__$1 = state_35623;if(inst_35580)
{var statearr_35635_35680 = state_35623__$1;(statearr_35635_35680[(1)] = (16));
} else
{var statearr_35636_35681 = state_35623__$1;(statearr_35636_35681[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (22)))
{var inst_35608 = (state_35623[(2)]);var state_35623__$1 = state_35623;if(cljs.core.truth_(inst_35608))
{var statearr_35637_35682 = state_35623__$1;(statearr_35637_35682[(1)] = (23));
} else
{var statearr_35638_35683 = state_35623__$1;(statearr_35638_35683[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (6)))
{var inst_35602 = (state_35623[(7)]);var inst_35554 = (state_35623[(8)]);var inst_35604 = (state_35623[(11)]);var inst_35602__$1 = topic_fn.call(null,inst_35554);var inst_35603 = cljs.core.deref.call(null,mults);var inst_35604__$1 = cljs.core.get.call(null,inst_35603,inst_35602__$1);var state_35623__$1 = (function (){var statearr_35639 = state_35623;(statearr_35639[(7)] = inst_35602__$1);
(statearr_35639[(11)] = inst_35604__$1);
return statearr_35639;
})();if(cljs.core.truth_(inst_35604__$1))
{var statearr_35640_35684 = state_35623__$1;(statearr_35640_35684[(1)] = (19));
} else
{var statearr_35641_35685 = state_35623__$1;(statearr_35641_35685[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (25)))
{var inst_35613 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35642_35686 = state_35623__$1;(statearr_35642_35686[(2)] = inst_35613);
(statearr_35642_35686[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (17)))
{var inst_35578 = (state_35623[(10)]);var inst_35587 = cljs.core.first.call(null,inst_35578);var inst_35588 = cljs.core.async.muxch_STAR_.call(null,inst_35587);var inst_35589 = cljs.core.async.close_BANG_.call(null,inst_35588);var inst_35590 = cljs.core.next.call(null,inst_35578);var inst_35564 = inst_35590;var inst_35565 = null;var inst_35566 = (0);var inst_35567 = (0);var state_35623__$1 = (function (){var statearr_35643 = state_35623;(statearr_35643[(12)] = inst_35564);
(statearr_35643[(13)] = inst_35566);
(statearr_35643[(14)] = inst_35589);
(statearr_35643[(15)] = inst_35565);
(statearr_35643[(16)] = inst_35567);
return statearr_35643;
})();var statearr_35644_35687 = state_35623__$1;(statearr_35644_35687[(2)] = null);
(statearr_35644_35687[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (3)))
{var inst_35621 = (state_35623[(2)]);var state_35623__$1 = state_35623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35623__$1,inst_35621);
} else
{if((state_val_35624 === (12)))
{var inst_35598 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35645_35688 = state_35623__$1;(statearr_35645_35688[(2)] = inst_35598);
(statearr_35645_35688[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (2)))
{var state_35623__$1 = state_35623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35623__$1,(4),ch);
} else
{if((state_val_35624 === (23)))
{var state_35623__$1 = state_35623;var statearr_35646_35689 = state_35623__$1;(statearr_35646_35689[(2)] = null);
(statearr_35646_35689[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (19)))
{var inst_35554 = (state_35623[(8)]);var inst_35604 = (state_35623[(11)]);var inst_35606 = cljs.core.async.muxch_STAR_.call(null,inst_35604);var state_35623__$1 = state_35623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35623__$1,(22),inst_35606,inst_35554);
} else
{if((state_val_35624 === (11)))
{var inst_35564 = (state_35623[(12)]);var inst_35578 = (state_35623[(10)]);var inst_35578__$1 = cljs.core.seq.call(null,inst_35564);var state_35623__$1 = (function (){var statearr_35647 = state_35623;(statearr_35647[(10)] = inst_35578__$1);
return statearr_35647;
})();if(inst_35578__$1)
{var statearr_35648_35690 = state_35623__$1;(statearr_35648_35690[(1)] = (13));
} else
{var statearr_35649_35691 = state_35623__$1;(statearr_35649_35691[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (9)))
{var inst_35600 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35650_35692 = state_35623__$1;(statearr_35650_35692[(2)] = inst_35600);
(statearr_35650_35692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (5)))
{var inst_35561 = cljs.core.deref.call(null,mults);var inst_35562 = cljs.core.vals.call(null,inst_35561);var inst_35563 = cljs.core.seq.call(null,inst_35562);var inst_35564 = inst_35563;var inst_35565 = null;var inst_35566 = (0);var inst_35567 = (0);var state_35623__$1 = (function (){var statearr_35651 = state_35623;(statearr_35651[(12)] = inst_35564);
(statearr_35651[(13)] = inst_35566);
(statearr_35651[(15)] = inst_35565);
(statearr_35651[(16)] = inst_35567);
return statearr_35651;
})();var statearr_35652_35693 = state_35623__$1;(statearr_35652_35693[(2)] = null);
(statearr_35652_35693[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (14)))
{var state_35623__$1 = state_35623;var statearr_35656_35694 = state_35623__$1;(statearr_35656_35694[(2)] = null);
(statearr_35656_35694[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (16)))
{var inst_35578 = (state_35623[(10)]);var inst_35582 = cljs.core.chunk_first.call(null,inst_35578);var inst_35583 = cljs.core.chunk_rest.call(null,inst_35578);var inst_35584 = cljs.core.count.call(null,inst_35582);var inst_35564 = inst_35583;var inst_35565 = inst_35582;var inst_35566 = inst_35584;var inst_35567 = (0);var state_35623__$1 = (function (){var statearr_35657 = state_35623;(statearr_35657[(12)] = inst_35564);
(statearr_35657[(13)] = inst_35566);
(statearr_35657[(15)] = inst_35565);
(statearr_35657[(16)] = inst_35567);
return statearr_35657;
})();var statearr_35658_35695 = state_35623__$1;(statearr_35658_35695[(2)] = null);
(statearr_35658_35695[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (10)))
{var inst_35564 = (state_35623[(12)]);var inst_35566 = (state_35623[(13)]);var inst_35565 = (state_35623[(15)]);var inst_35567 = (state_35623[(16)]);var inst_35572 = cljs.core._nth.call(null,inst_35565,inst_35567);var inst_35573 = cljs.core.async.muxch_STAR_.call(null,inst_35572);var inst_35574 = cljs.core.async.close_BANG_.call(null,inst_35573);var inst_35575 = (inst_35567 + (1));var tmp35653 = inst_35564;var tmp35654 = inst_35566;var tmp35655 = inst_35565;var inst_35564__$1 = tmp35653;var inst_35565__$1 = tmp35655;var inst_35566__$1 = tmp35654;var inst_35567__$1 = inst_35575;var state_35623__$1 = (function (){var statearr_35659 = state_35623;(statearr_35659[(17)] = inst_35574);
(statearr_35659[(12)] = inst_35564__$1);
(statearr_35659[(13)] = inst_35566__$1);
(statearr_35659[(15)] = inst_35565__$1);
(statearr_35659[(16)] = inst_35567__$1);
return statearr_35659;
})();var statearr_35660_35696 = state_35623__$1;(statearr_35660_35696[(2)] = null);
(statearr_35660_35696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (18)))
{var inst_35593 = (state_35623[(2)]);var state_35623__$1 = state_35623;var statearr_35661_35697 = state_35623__$1;(statearr_35661_35697[(2)] = inst_35593);
(statearr_35661_35697[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35624 === (8)))
{var inst_35566 = (state_35623[(13)]);var inst_35567 = (state_35623[(16)]);var inst_35569 = (inst_35567 < inst_35566);var inst_35570 = inst_35569;var state_35623__$1 = state_35623;if(cljs.core.truth_(inst_35570))
{var statearr_35662_35698 = state_35623__$1;(statearr_35662_35698[(1)] = (10));
} else
{var statearr_35663_35699 = state_35623__$1;(statearr_35663_35699[(1)] = (11));
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
});})(c__18867__auto___35671,mults,ensure_mult,p))
;return ((function (switch__18811__auto__,c__18867__auto___35671,mults,ensure_mult,p){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_35667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35667[(0)] = state_machine__18812__auto__);
(statearr_35667[(1)] = (1));
return statearr_35667;
});
var state_machine__18812__auto____1 = (function (state_35623){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_35623);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e35668){if((e35668 instanceof Object))
{var ex__18815__auto__ = e35668;var statearr_35669_35700 = state_35623;(statearr_35669_35700[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35701 = state_35623;
state_35623 = G__35701;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_35623){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_35623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___35671,mults,ensure_mult,p))
})();var state__18869__auto__ = (function (){var statearr_35670 = f__18868__auto__.call(null);(statearr_35670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___35671);
return statearr_35670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___35671,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__18867__auto___35838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35808){var state_val_35809 = (state_35808[(1)]);if((state_val_35809 === (7)))
{var state_35808__$1 = state_35808;var statearr_35810_35839 = state_35808__$1;(statearr_35810_35839[(2)] = null);
(statearr_35810_35839[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (1)))
{var state_35808__$1 = state_35808;var statearr_35811_35840 = state_35808__$1;(statearr_35811_35840[(2)] = null);
(statearr_35811_35840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (4)))
{var inst_35772 = (state_35808[(7)]);var inst_35774 = (inst_35772 < cnt);var state_35808__$1 = state_35808;if(cljs.core.truth_(inst_35774))
{var statearr_35812_35841 = state_35808__$1;(statearr_35812_35841[(1)] = (6));
} else
{var statearr_35813_35842 = state_35808__$1;(statearr_35813_35842[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (15)))
{var inst_35804 = (state_35808[(2)]);var state_35808__$1 = state_35808;var statearr_35814_35843 = state_35808__$1;(statearr_35814_35843[(2)] = inst_35804);
(statearr_35814_35843[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (13)))
{var inst_35797 = cljs.core.async.close_BANG_.call(null,out);var state_35808__$1 = state_35808;var statearr_35815_35844 = state_35808__$1;(statearr_35815_35844[(2)] = inst_35797);
(statearr_35815_35844[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (6)))
{var state_35808__$1 = state_35808;var statearr_35816_35845 = state_35808__$1;(statearr_35816_35845[(2)] = null);
(statearr_35816_35845[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (3)))
{var inst_35806 = (state_35808[(2)]);var state_35808__$1 = state_35808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35808__$1,inst_35806);
} else
{if((state_val_35809 === (12)))
{var inst_35794 = (state_35808[(8)]);var inst_35794__$1 = (state_35808[(2)]);var inst_35795 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35794__$1);var state_35808__$1 = (function (){var statearr_35817 = state_35808;(statearr_35817[(8)] = inst_35794__$1);
return statearr_35817;
})();if(cljs.core.truth_(inst_35795))
{var statearr_35818_35846 = state_35808__$1;(statearr_35818_35846[(1)] = (13));
} else
{var statearr_35819_35847 = state_35808__$1;(statearr_35819_35847[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (2)))
{var inst_35771 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35772 = (0);var state_35808__$1 = (function (){var statearr_35820 = state_35808;(statearr_35820[(9)] = inst_35771);
(statearr_35820[(7)] = inst_35772);
return statearr_35820;
})();var statearr_35821_35848 = state_35808__$1;(statearr_35821_35848[(2)] = null);
(statearr_35821_35848[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (11)))
{var inst_35772 = (state_35808[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35808,(10),Object,null,(9));var inst_35781 = chs__$1.call(null,inst_35772);var inst_35782 = done.call(null,inst_35772);var inst_35783 = cljs.core.async.take_BANG_.call(null,inst_35781,inst_35782);var state_35808__$1 = state_35808;var statearr_35822_35849 = state_35808__$1;(statearr_35822_35849[(2)] = inst_35783);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35808__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (9)))
{var inst_35772 = (state_35808[(7)]);var inst_35785 = (state_35808[(2)]);var inst_35786 = (inst_35772 + (1));var inst_35772__$1 = inst_35786;var state_35808__$1 = (function (){var statearr_35823 = state_35808;(statearr_35823[(7)] = inst_35772__$1);
(statearr_35823[(10)] = inst_35785);
return statearr_35823;
})();var statearr_35824_35850 = state_35808__$1;(statearr_35824_35850[(2)] = null);
(statearr_35824_35850[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (5)))
{var inst_35792 = (state_35808[(2)]);var state_35808__$1 = (function (){var statearr_35825 = state_35808;(statearr_35825[(11)] = inst_35792);
return statearr_35825;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35808__$1,(12),dchan);
} else
{if((state_val_35809 === (14)))
{var inst_35794 = (state_35808[(8)]);var inst_35799 = cljs.core.apply.call(null,f,inst_35794);var state_35808__$1 = state_35808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35808__$1,(16),out,inst_35799);
} else
{if((state_val_35809 === (16)))
{var inst_35801 = (state_35808[(2)]);var state_35808__$1 = (function (){var statearr_35826 = state_35808;(statearr_35826[(12)] = inst_35801);
return statearr_35826;
})();var statearr_35827_35851 = state_35808__$1;(statearr_35827_35851[(2)] = null);
(statearr_35827_35851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (10)))
{var inst_35776 = (state_35808[(2)]);var inst_35777 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35808__$1 = (function (){var statearr_35828 = state_35808;(statearr_35828[(13)] = inst_35776);
return statearr_35828;
})();var statearr_35829_35852 = state_35808__$1;(statearr_35829_35852[(2)] = inst_35777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35808__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35809 === (8)))
{var inst_35790 = (state_35808[(2)]);var state_35808__$1 = state_35808;var statearr_35830_35853 = state_35808__$1;(statearr_35830_35853[(2)] = inst_35790);
(statearr_35830_35853[(1)] = (5));
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
});})(c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__18811__auto__,c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_35834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35834[(0)] = state_machine__18812__auto__);
(statearr_35834[(1)] = (1));
return statearr_35834;
});
var state_machine__18812__auto____1 = (function (state_35808){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_35808);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e35835){if((e35835 instanceof Object))
{var ex__18815__auto__ = e35835;var statearr_35836_35854 = state_35808;(statearr_35836_35854[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35855 = state_35808;
state_35808 = G__35855;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_35808){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_35808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__18869__auto__ = (function (){var statearr_35837 = f__18868__auto__.call(null);(statearr_35837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___35838);
return statearr_35837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___35963 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___35963,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___35963,out){
return (function (state_35939){var state_val_35940 = (state_35939[(1)]);if((state_val_35940 === (7)))
{var inst_35918 = (state_35939[(7)]);var inst_35919 = (state_35939[(8)]);var inst_35918__$1 = (state_35939[(2)]);var inst_35919__$1 = cljs.core.nth.call(null,inst_35918__$1,(0),null);var inst_35920 = cljs.core.nth.call(null,inst_35918__$1,(1),null);var inst_35921 = (inst_35919__$1 == null);var state_35939__$1 = (function (){var statearr_35941 = state_35939;(statearr_35941[(9)] = inst_35920);
(statearr_35941[(7)] = inst_35918__$1);
(statearr_35941[(8)] = inst_35919__$1);
return statearr_35941;
})();if(cljs.core.truth_(inst_35921))
{var statearr_35942_35964 = state_35939__$1;(statearr_35942_35964[(1)] = (8));
} else
{var statearr_35943_35965 = state_35939__$1;(statearr_35943_35965[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (1)))
{var inst_35910 = cljs.core.vec.call(null,chs);var inst_35911 = inst_35910;var state_35939__$1 = (function (){var statearr_35944 = state_35939;(statearr_35944[(10)] = inst_35911);
return statearr_35944;
})();var statearr_35945_35966 = state_35939__$1;(statearr_35945_35966[(2)] = null);
(statearr_35945_35966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (4)))
{var inst_35911 = (state_35939[(10)]);var state_35939__$1 = state_35939;return cljs.core.async.ioc_alts_BANG_.call(null,state_35939__$1,(7),inst_35911);
} else
{if((state_val_35940 === (6)))
{var inst_35935 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35946_35967 = state_35939__$1;(statearr_35946_35967[(2)] = inst_35935);
(statearr_35946_35967[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (3)))
{var inst_35937 = (state_35939[(2)]);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else
{if((state_val_35940 === (2)))
{var inst_35911 = (state_35939[(10)]);var inst_35913 = cljs.core.count.call(null,inst_35911);var inst_35914 = (inst_35913 > (0));var state_35939__$1 = state_35939;if(cljs.core.truth_(inst_35914))
{var statearr_35948_35968 = state_35939__$1;(statearr_35948_35968[(1)] = (4));
} else
{var statearr_35949_35969 = state_35939__$1;(statearr_35949_35969[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (11)))
{var inst_35911 = (state_35939[(10)]);var inst_35928 = (state_35939[(2)]);var tmp35947 = inst_35911;var inst_35911__$1 = tmp35947;var state_35939__$1 = (function (){var statearr_35950 = state_35939;(statearr_35950[(11)] = inst_35928);
(statearr_35950[(10)] = inst_35911__$1);
return statearr_35950;
})();var statearr_35951_35970 = state_35939__$1;(statearr_35951_35970[(2)] = null);
(statearr_35951_35970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (9)))
{var inst_35919 = (state_35939[(8)]);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35939__$1,(11),out,inst_35919);
} else
{if((state_val_35940 === (5)))
{var inst_35933 = cljs.core.async.close_BANG_.call(null,out);var state_35939__$1 = state_35939;var statearr_35952_35971 = state_35939__$1;(statearr_35952_35971[(2)] = inst_35933);
(statearr_35952_35971[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (10)))
{var inst_35931 = (state_35939[(2)]);var state_35939__$1 = state_35939;var statearr_35953_35972 = state_35939__$1;(statearr_35953_35972[(2)] = inst_35931);
(statearr_35953_35972[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35940 === (8)))
{var inst_35920 = (state_35939[(9)]);var inst_35918 = (state_35939[(7)]);var inst_35919 = (state_35939[(8)]);var inst_35911 = (state_35939[(10)]);var inst_35923 = (function (){var c = inst_35920;var v = inst_35919;var vec__35916 = inst_35918;var cs = inst_35911;return ((function (c,v,vec__35916,cs,inst_35920,inst_35918,inst_35919,inst_35911,state_val_35940,c__18867__auto___35963,out){
return (function (p1__35856_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35856_SHARP_);
});
;})(c,v,vec__35916,cs,inst_35920,inst_35918,inst_35919,inst_35911,state_val_35940,c__18867__auto___35963,out))
})();var inst_35924 = cljs.core.filterv.call(null,inst_35923,inst_35911);var inst_35911__$1 = inst_35924;var state_35939__$1 = (function (){var statearr_35954 = state_35939;(statearr_35954[(10)] = inst_35911__$1);
return statearr_35954;
})();var statearr_35955_35973 = state_35939__$1;(statearr_35955_35973[(2)] = null);
(statearr_35955_35973[(1)] = (2));
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
});})(c__18867__auto___35963,out))
;return ((function (switch__18811__auto__,c__18867__auto___35963,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_35959 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35959[(0)] = state_machine__18812__auto__);
(statearr_35959[(1)] = (1));
return statearr_35959;
});
var state_machine__18812__auto____1 = (function (state_35939){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_35939);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e35960){if((e35960 instanceof Object))
{var ex__18815__auto__ = e35960;var statearr_35961_35974 = state_35939;(statearr_35961_35974[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35975 = state_35939;
state_35939 = G__35975;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___35963,out))
})();var state__18869__auto__ = (function (){var statearr_35962 = f__18868__auto__.call(null);(statearr_35962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___35963);
return statearr_35962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___35963,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___36068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___36068,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___36068,out){
return (function (state_36045){var state_val_36046 = (state_36045[(1)]);if((state_val_36046 === (7)))
{var inst_36027 = (state_36045[(7)]);var inst_36027__$1 = (state_36045[(2)]);var inst_36028 = (inst_36027__$1 == null);var inst_36029 = cljs.core.not.call(null,inst_36028);var state_36045__$1 = (function (){var statearr_36047 = state_36045;(statearr_36047[(7)] = inst_36027__$1);
return statearr_36047;
})();if(inst_36029)
{var statearr_36048_36069 = state_36045__$1;(statearr_36048_36069[(1)] = (8));
} else
{var statearr_36049_36070 = state_36045__$1;(statearr_36049_36070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (1)))
{var inst_36022 = (0);var state_36045__$1 = (function (){var statearr_36050 = state_36045;(statearr_36050[(8)] = inst_36022);
return statearr_36050;
})();var statearr_36051_36071 = state_36045__$1;(statearr_36051_36071[(2)] = null);
(statearr_36051_36071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (4)))
{var state_36045__$1 = state_36045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36045__$1,(7),ch);
} else
{if((state_val_36046 === (6)))
{var inst_36040 = (state_36045[(2)]);var state_36045__$1 = state_36045;var statearr_36052_36072 = state_36045__$1;(statearr_36052_36072[(2)] = inst_36040);
(statearr_36052_36072[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (3)))
{var inst_36042 = (state_36045[(2)]);var inst_36043 = cljs.core.async.close_BANG_.call(null,out);var state_36045__$1 = (function (){var statearr_36053 = state_36045;(statearr_36053[(9)] = inst_36042);
return statearr_36053;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36045__$1,inst_36043);
} else
{if((state_val_36046 === (2)))
{var inst_36022 = (state_36045[(8)]);var inst_36024 = (inst_36022 < n);var state_36045__$1 = state_36045;if(cljs.core.truth_(inst_36024))
{var statearr_36054_36073 = state_36045__$1;(statearr_36054_36073[(1)] = (4));
} else
{var statearr_36055_36074 = state_36045__$1;(statearr_36055_36074[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (11)))
{var inst_36022 = (state_36045[(8)]);var inst_36032 = (state_36045[(2)]);var inst_36033 = (inst_36022 + (1));var inst_36022__$1 = inst_36033;var state_36045__$1 = (function (){var statearr_36056 = state_36045;(statearr_36056[(8)] = inst_36022__$1);
(statearr_36056[(10)] = inst_36032);
return statearr_36056;
})();var statearr_36057_36075 = state_36045__$1;(statearr_36057_36075[(2)] = null);
(statearr_36057_36075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (9)))
{var state_36045__$1 = state_36045;var statearr_36058_36076 = state_36045__$1;(statearr_36058_36076[(2)] = null);
(statearr_36058_36076[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (5)))
{var state_36045__$1 = state_36045;var statearr_36059_36077 = state_36045__$1;(statearr_36059_36077[(2)] = null);
(statearr_36059_36077[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (10)))
{var inst_36037 = (state_36045[(2)]);var state_36045__$1 = state_36045;var statearr_36060_36078 = state_36045__$1;(statearr_36060_36078[(2)] = inst_36037);
(statearr_36060_36078[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36046 === (8)))
{var inst_36027 = (state_36045[(7)]);var state_36045__$1 = state_36045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36045__$1,(11),out,inst_36027);
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
});})(c__18867__auto___36068,out))
;return ((function (switch__18811__auto__,c__18867__auto___36068,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36064 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36064[(0)] = state_machine__18812__auto__);
(statearr_36064[(1)] = (1));
return statearr_36064;
});
var state_machine__18812__auto____1 = (function (state_36045){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36045);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36065){if((e36065 instanceof Object))
{var ex__18815__auto__ = e36065;var statearr_36066_36079 = state_36045;(statearr_36066_36079[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36065;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36080 = state_36045;
state_36045 = G__36080;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36045){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___36068,out))
})();var state__18869__auto__ = (function (){var statearr_36067 = f__18868__auto__.call(null);(statearr_36067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___36068);
return statearr_36067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___36068,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36088 = (function (ch,f,map_LT_,meta36089){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36089 = meta36089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36088.cljs$lang$type = true;
cljs.core.async.t36088.cljs$lang$ctorStr = "cljs.core.async/t36088";
cljs.core.async.t36088.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t36088");
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t36091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36091 = (function (fn1,_,meta36089,ch,f,map_LT_,meta36092){
this.fn1 = fn1;
this._ = _;
this.meta36089 = meta36089;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36092 = meta36092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36091.cljs$lang$type = true;
cljs.core.async.t36091.cljs$lang$ctorStr = "cljs.core.async/t36091";
cljs.core.async.t36091.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t36091");
});})(___$1))
;
cljs.core.async.t36091.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t36091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36081_SHARP_){return f1.call(null,(((p1__36081_SHARP_ == null))?null:self__.f.call(null,p1__36081_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36093){var self__ = this;
var _36093__$1 = this;return self__.meta36092;
});})(___$1))
;
cljs.core.async.t36091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36093,meta36092__$1){var self__ = this;
var _36093__$1 = this;return (new cljs.core.async.t36091(self__.fn1,self__._,self__.meta36089,self__.ch,self__.f,self__.map_LT_,meta36092__$1));
});})(___$1))
;
cljs.core.async.__GT_t36091 = ((function (___$1){
return (function __GT_t36091(fn1__$1,___$2,meta36089__$1,ch__$2,f__$2,map_LT___$2,meta36092){return (new cljs.core.async.t36091(fn1__$1,___$2,meta36089__$1,ch__$2,f__$2,map_LT___$2,meta36092));
});})(___$1))
;
}
return (new cljs.core.async.t36091(fn1,___$1,self__.meta36089,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11502__auto__ = ret;if(cljs.core.truth_(and__11502__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11502__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t36088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36090){var self__ = this;
var _36090__$1 = this;return self__.meta36089;
});
cljs.core.async.t36088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36090,meta36089__$1){var self__ = this;
var _36090__$1 = this;return (new cljs.core.async.t36088(self__.ch,self__.f,self__.map_LT_,meta36089__$1));
});
cljs.core.async.__GT_t36088 = (function __GT_t36088(ch__$1,f__$1,map_LT___$1,meta36089){return (new cljs.core.async.t36088(ch__$1,f__$1,map_LT___$1,meta36089));
});
}
return (new cljs.core.async.t36088(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36097 = (function (ch,f,map_GT_,meta36098){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36098 = meta36098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36097.cljs$lang$type = true;
cljs.core.async.t36097.cljs$lang$ctorStr = "cljs.core.async/t36097";
cljs.core.async.t36097.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t36097");
});
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36099){var self__ = this;
var _36099__$1 = this;return self__.meta36098;
});
cljs.core.async.t36097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36099,meta36098__$1){var self__ = this;
var _36099__$1 = this;return (new cljs.core.async.t36097(self__.ch,self__.f,self__.map_GT_,meta36098__$1));
});
cljs.core.async.__GT_t36097 = (function __GT_t36097(ch__$1,f__$1,map_GT___$1,meta36098){return (new cljs.core.async.t36097(ch__$1,f__$1,map_GT___$1,meta36098));
});
}
return (new cljs.core.async.t36097(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36103 = (function (ch,p,filter_GT_,meta36104){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36104 = meta36104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36103.cljs$lang$type = true;
cljs.core.async.t36103.cljs$lang$ctorStr = "cljs.core.async/t36103";
cljs.core.async.t36103.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"cljs.core.async/t36103");
});
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t36103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36105){var self__ = this;
var _36105__$1 = this;return self__.meta36104;
});
cljs.core.async.t36103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36105,meta36104__$1){var self__ = this;
var _36105__$1 = this;return (new cljs.core.async.t36103(self__.ch,self__.p,self__.filter_GT_,meta36104__$1));
});
cljs.core.async.__GT_t36103 = (function __GT_t36103(ch__$1,p__$1,filter_GT___$1,meta36104){return (new cljs.core.async.t36103(ch__$1,p__$1,filter_GT___$1,meta36104));
});
}
return (new cljs.core.async.t36103(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___36188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___36188,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___36188,out){
return (function (state_36167){var state_val_36168 = (state_36167[(1)]);if((state_val_36168 === (7)))
{var inst_36163 = (state_36167[(2)]);var state_36167__$1 = state_36167;var statearr_36169_36189 = state_36167__$1;(statearr_36169_36189[(2)] = inst_36163);
(statearr_36169_36189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (1)))
{var state_36167__$1 = state_36167;var statearr_36170_36190 = state_36167__$1;(statearr_36170_36190[(2)] = null);
(statearr_36170_36190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (4)))
{var inst_36149 = (state_36167[(7)]);var inst_36149__$1 = (state_36167[(2)]);var inst_36150 = (inst_36149__$1 == null);var state_36167__$1 = (function (){var statearr_36171 = state_36167;(statearr_36171[(7)] = inst_36149__$1);
return statearr_36171;
})();if(cljs.core.truth_(inst_36150))
{var statearr_36172_36191 = state_36167__$1;(statearr_36172_36191[(1)] = (5));
} else
{var statearr_36173_36192 = state_36167__$1;(statearr_36173_36192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (6)))
{var inst_36149 = (state_36167[(7)]);var inst_36154 = p.call(null,inst_36149);var state_36167__$1 = state_36167;if(cljs.core.truth_(inst_36154))
{var statearr_36174_36193 = state_36167__$1;(statearr_36174_36193[(1)] = (8));
} else
{var statearr_36175_36194 = state_36167__$1;(statearr_36175_36194[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (3)))
{var inst_36165 = (state_36167[(2)]);var state_36167__$1 = state_36167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36167__$1,inst_36165);
} else
{if((state_val_36168 === (2)))
{var state_36167__$1 = state_36167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36167__$1,(4),ch);
} else
{if((state_val_36168 === (11)))
{var inst_36157 = (state_36167[(2)]);var state_36167__$1 = state_36167;var statearr_36176_36195 = state_36167__$1;(statearr_36176_36195[(2)] = inst_36157);
(statearr_36176_36195[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (9)))
{var state_36167__$1 = state_36167;var statearr_36177_36196 = state_36167__$1;(statearr_36177_36196[(2)] = null);
(statearr_36177_36196[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (5)))
{var inst_36152 = cljs.core.async.close_BANG_.call(null,out);var state_36167__$1 = state_36167;var statearr_36178_36197 = state_36167__$1;(statearr_36178_36197[(2)] = inst_36152);
(statearr_36178_36197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (10)))
{var inst_36160 = (state_36167[(2)]);var state_36167__$1 = (function (){var statearr_36179 = state_36167;(statearr_36179[(8)] = inst_36160);
return statearr_36179;
})();var statearr_36180_36198 = state_36167__$1;(statearr_36180_36198[(2)] = null);
(statearr_36180_36198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36168 === (8)))
{var inst_36149 = (state_36167[(7)]);var state_36167__$1 = state_36167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36167__$1,(11),out,inst_36149);
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
});})(c__18867__auto___36188,out))
;return ((function (switch__18811__auto__,c__18867__auto___36188,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36184 = [null,null,null,null,null,null,null,null,null];(statearr_36184[(0)] = state_machine__18812__auto__);
(statearr_36184[(1)] = (1));
return statearr_36184;
});
var state_machine__18812__auto____1 = (function (state_36167){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36167);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36185){if((e36185 instanceof Object))
{var ex__18815__auto__ = e36185;var statearr_36186_36199 = state_36167;(statearr_36186_36199[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36185;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36200 = state_36167;
state_36167 = G__36200;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36167){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___36188,out))
})();var state__18869__auto__ = (function (){var statearr_36187 = f__18868__auto__.call(null);(statearr_36187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___36188);
return statearr_36187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___36188,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_36366){var state_val_36367 = (state_36366[(1)]);if((state_val_36367 === (7)))
{var inst_36362 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36368_36409 = state_36366__$1;(statearr_36368_36409[(2)] = inst_36362);
(statearr_36368_36409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (20)))
{var inst_36332 = (state_36366[(7)]);var inst_36343 = (state_36366[(2)]);var inst_36344 = cljs.core.next.call(null,inst_36332);var inst_36318 = inst_36344;var inst_36319 = null;var inst_36320 = (0);var inst_36321 = (0);var state_36366__$1 = (function (){var statearr_36369 = state_36366;(statearr_36369[(8)] = inst_36320);
(statearr_36369[(9)] = inst_36318);
(statearr_36369[(10)] = inst_36319);
(statearr_36369[(11)] = inst_36343);
(statearr_36369[(12)] = inst_36321);
return statearr_36369;
})();var statearr_36370_36410 = state_36366__$1;(statearr_36370_36410[(2)] = null);
(statearr_36370_36410[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (1)))
{var state_36366__$1 = state_36366;var statearr_36371_36411 = state_36366__$1;(statearr_36371_36411[(2)] = null);
(statearr_36371_36411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (4)))
{var inst_36307 = (state_36366[(13)]);var inst_36307__$1 = (state_36366[(2)]);var inst_36308 = (inst_36307__$1 == null);var state_36366__$1 = (function (){var statearr_36372 = state_36366;(statearr_36372[(13)] = inst_36307__$1);
return statearr_36372;
})();if(cljs.core.truth_(inst_36308))
{var statearr_36373_36412 = state_36366__$1;(statearr_36373_36412[(1)] = (5));
} else
{var statearr_36374_36413 = state_36366__$1;(statearr_36374_36413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (15)))
{var state_36366__$1 = state_36366;var statearr_36378_36414 = state_36366__$1;(statearr_36378_36414[(2)] = null);
(statearr_36378_36414[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (21)))
{var state_36366__$1 = state_36366;var statearr_36379_36415 = state_36366__$1;(statearr_36379_36415[(2)] = null);
(statearr_36379_36415[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (13)))
{var inst_36320 = (state_36366[(8)]);var inst_36318 = (state_36366[(9)]);var inst_36319 = (state_36366[(10)]);var inst_36321 = (state_36366[(12)]);var inst_36328 = (state_36366[(2)]);var inst_36329 = (inst_36321 + (1));var tmp36375 = inst_36320;var tmp36376 = inst_36318;var tmp36377 = inst_36319;var inst_36318__$1 = tmp36376;var inst_36319__$1 = tmp36377;var inst_36320__$1 = tmp36375;var inst_36321__$1 = inst_36329;var state_36366__$1 = (function (){var statearr_36380 = state_36366;(statearr_36380[(8)] = inst_36320__$1);
(statearr_36380[(9)] = inst_36318__$1);
(statearr_36380[(14)] = inst_36328);
(statearr_36380[(10)] = inst_36319__$1);
(statearr_36380[(12)] = inst_36321__$1);
return statearr_36380;
})();var statearr_36381_36416 = state_36366__$1;(statearr_36381_36416[(2)] = null);
(statearr_36381_36416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (22)))
{var state_36366__$1 = state_36366;var statearr_36382_36417 = state_36366__$1;(statearr_36382_36417[(2)] = null);
(statearr_36382_36417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (6)))
{var inst_36307 = (state_36366[(13)]);var inst_36316 = f.call(null,inst_36307);var inst_36317 = cljs.core.seq.call(null,inst_36316);var inst_36318 = inst_36317;var inst_36319 = null;var inst_36320 = (0);var inst_36321 = (0);var state_36366__$1 = (function (){var statearr_36383 = state_36366;(statearr_36383[(8)] = inst_36320);
(statearr_36383[(9)] = inst_36318);
(statearr_36383[(10)] = inst_36319);
(statearr_36383[(12)] = inst_36321);
return statearr_36383;
})();var statearr_36384_36418 = state_36366__$1;(statearr_36384_36418[(2)] = null);
(statearr_36384_36418[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (17)))
{var inst_36332 = (state_36366[(7)]);var inst_36336 = cljs.core.chunk_first.call(null,inst_36332);var inst_36337 = cljs.core.chunk_rest.call(null,inst_36332);var inst_36338 = cljs.core.count.call(null,inst_36336);var inst_36318 = inst_36337;var inst_36319 = inst_36336;var inst_36320 = inst_36338;var inst_36321 = (0);var state_36366__$1 = (function (){var statearr_36385 = state_36366;(statearr_36385[(8)] = inst_36320);
(statearr_36385[(9)] = inst_36318);
(statearr_36385[(10)] = inst_36319);
(statearr_36385[(12)] = inst_36321);
return statearr_36385;
})();var statearr_36386_36419 = state_36366__$1;(statearr_36386_36419[(2)] = null);
(statearr_36386_36419[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (3)))
{var inst_36364 = (state_36366[(2)]);var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else
{if((state_val_36367 === (12)))
{var inst_36352 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36387_36420 = state_36366__$1;(statearr_36387_36420[(2)] = inst_36352);
(statearr_36387_36420[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (2)))
{var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(4),in$);
} else
{if((state_val_36367 === (23)))
{var inst_36360 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36388_36421 = state_36366__$1;(statearr_36388_36421[(2)] = inst_36360);
(statearr_36388_36421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (19)))
{var inst_36347 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36389_36422 = state_36366__$1;(statearr_36389_36422[(2)] = inst_36347);
(statearr_36389_36422[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (11)))
{var inst_36318 = (state_36366[(9)]);var inst_36332 = (state_36366[(7)]);var inst_36332__$1 = cljs.core.seq.call(null,inst_36318);var state_36366__$1 = (function (){var statearr_36390 = state_36366;(statearr_36390[(7)] = inst_36332__$1);
return statearr_36390;
})();if(inst_36332__$1)
{var statearr_36391_36423 = state_36366__$1;(statearr_36391_36423[(1)] = (14));
} else
{var statearr_36392_36424 = state_36366__$1;(statearr_36392_36424[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (9)))
{var inst_36354 = (state_36366[(2)]);var inst_36355 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_36366__$1 = (function (){var statearr_36393 = state_36366;(statearr_36393[(15)] = inst_36354);
return statearr_36393;
})();if(cljs.core.truth_(inst_36355))
{var statearr_36394_36425 = state_36366__$1;(statearr_36394_36425[(1)] = (21));
} else
{var statearr_36395_36426 = state_36366__$1;(statearr_36395_36426[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (5)))
{var inst_36310 = cljs.core.async.close_BANG_.call(null,out);var state_36366__$1 = state_36366;var statearr_36396_36427 = state_36366__$1;(statearr_36396_36427[(2)] = inst_36310);
(statearr_36396_36427[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (14)))
{var inst_36332 = (state_36366[(7)]);var inst_36334 = cljs.core.chunked_seq_QMARK_.call(null,inst_36332);var state_36366__$1 = state_36366;if(inst_36334)
{var statearr_36397_36428 = state_36366__$1;(statearr_36397_36428[(1)] = (17));
} else
{var statearr_36398_36429 = state_36366__$1;(statearr_36398_36429[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (16)))
{var inst_36350 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36399_36430 = state_36366__$1;(statearr_36399_36430[(2)] = inst_36350);
(statearr_36399_36430[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (10)))
{var inst_36319 = (state_36366[(10)]);var inst_36321 = (state_36366[(12)]);var inst_36326 = cljs.core._nth.call(null,inst_36319,inst_36321);var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(13),out,inst_36326);
} else
{if((state_val_36367 === (18)))
{var inst_36332 = (state_36366[(7)]);var inst_36341 = cljs.core.first.call(null,inst_36332);var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(20),out,inst_36341);
} else
{if((state_val_36367 === (8)))
{var inst_36320 = (state_36366[(8)]);var inst_36321 = (state_36366[(12)]);var inst_36323 = (inst_36321 < inst_36320);var inst_36324 = inst_36323;var state_36366__$1 = state_36366;if(cljs.core.truth_(inst_36324))
{var statearr_36400_36431 = state_36366__$1;(statearr_36400_36431[(1)] = (10));
} else
{var statearr_36401_36432 = state_36366__$1;(statearr_36401_36432[(1)] = (11));
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
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36405[(0)] = state_machine__18812__auto__);
(statearr_36405[(1)] = (1));
return statearr_36405;
});
var state_machine__18812__auto____1 = (function (state_36366){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36366);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36406){if((e36406 instanceof Object))
{var ex__18815__auto__ = e36406;var statearr_36407_36433 = state_36366;(statearr_36407_36433[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36434 = state_36366;
state_36366 = G__36434;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_36408 = f__18868__auto__.call(null);(statearr_36408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_36408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___36531 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___36531,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___36531,out){
return (function (state_36506){var state_val_36507 = (state_36506[(1)]);if((state_val_36507 === (7)))
{var inst_36501 = (state_36506[(2)]);var state_36506__$1 = state_36506;var statearr_36508_36532 = state_36506__$1;(statearr_36508_36532[(2)] = inst_36501);
(statearr_36508_36532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (1)))
{var inst_36483 = null;var state_36506__$1 = (function (){var statearr_36509 = state_36506;(statearr_36509[(7)] = inst_36483);
return statearr_36509;
})();var statearr_36510_36533 = state_36506__$1;(statearr_36510_36533[(2)] = null);
(statearr_36510_36533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (4)))
{var inst_36486 = (state_36506[(8)]);var inst_36486__$1 = (state_36506[(2)]);var inst_36487 = (inst_36486__$1 == null);var inst_36488 = cljs.core.not.call(null,inst_36487);var state_36506__$1 = (function (){var statearr_36511 = state_36506;(statearr_36511[(8)] = inst_36486__$1);
return statearr_36511;
})();if(inst_36488)
{var statearr_36512_36534 = state_36506__$1;(statearr_36512_36534[(1)] = (5));
} else
{var statearr_36513_36535 = state_36506__$1;(statearr_36513_36535[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (6)))
{var state_36506__$1 = state_36506;var statearr_36514_36536 = state_36506__$1;(statearr_36514_36536[(2)] = null);
(statearr_36514_36536[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (3)))
{var inst_36503 = (state_36506[(2)]);var inst_36504 = cljs.core.async.close_BANG_.call(null,out);var state_36506__$1 = (function (){var statearr_36515 = state_36506;(statearr_36515[(9)] = inst_36503);
return statearr_36515;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36506__$1,inst_36504);
} else
{if((state_val_36507 === (2)))
{var state_36506__$1 = state_36506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36506__$1,(4),ch);
} else
{if((state_val_36507 === (11)))
{var inst_36486 = (state_36506[(8)]);var inst_36495 = (state_36506[(2)]);var inst_36483 = inst_36486;var state_36506__$1 = (function (){var statearr_36516 = state_36506;(statearr_36516[(7)] = inst_36483);
(statearr_36516[(10)] = inst_36495);
return statearr_36516;
})();var statearr_36517_36537 = state_36506__$1;(statearr_36517_36537[(2)] = null);
(statearr_36517_36537[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (9)))
{var inst_36486 = (state_36506[(8)]);var state_36506__$1 = state_36506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36506__$1,(11),out,inst_36486);
} else
{if((state_val_36507 === (5)))
{var inst_36486 = (state_36506[(8)]);var inst_36483 = (state_36506[(7)]);var inst_36490 = cljs.core._EQ_.call(null,inst_36486,inst_36483);var state_36506__$1 = state_36506;if(inst_36490)
{var statearr_36519_36538 = state_36506__$1;(statearr_36519_36538[(1)] = (8));
} else
{var statearr_36520_36539 = state_36506__$1;(statearr_36520_36539[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (10)))
{var inst_36498 = (state_36506[(2)]);var state_36506__$1 = state_36506;var statearr_36521_36540 = state_36506__$1;(statearr_36521_36540[(2)] = inst_36498);
(statearr_36521_36540[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36507 === (8)))
{var inst_36483 = (state_36506[(7)]);var tmp36518 = inst_36483;var inst_36483__$1 = tmp36518;var state_36506__$1 = (function (){var statearr_36522 = state_36506;(statearr_36522[(7)] = inst_36483__$1);
return statearr_36522;
})();var statearr_36523_36541 = state_36506__$1;(statearr_36523_36541[(2)] = null);
(statearr_36523_36541[(1)] = (2));
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
});})(c__18867__auto___36531,out))
;return ((function (switch__18811__auto__,c__18867__auto___36531,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36527 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36527[(0)] = state_machine__18812__auto__);
(statearr_36527[(1)] = (1));
return statearr_36527;
});
var state_machine__18812__auto____1 = (function (state_36506){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36506);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36528){if((e36528 instanceof Object))
{var ex__18815__auto__ = e36528;var statearr_36529_36542 = state_36506;(statearr_36529_36542[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36506);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36528;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36543 = state_36506;
state_36506 = G__36543;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36506){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___36531,out))
})();var state__18869__auto__ = (function (){var statearr_36530 = f__18868__auto__.call(null);(statearr_36530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___36531);
return statearr_36530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___36531,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___36678 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___36678,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___36678,out){
return (function (state_36648){var state_val_36649 = (state_36648[(1)]);if((state_val_36649 === (7)))
{var inst_36644 = (state_36648[(2)]);var state_36648__$1 = state_36648;var statearr_36650_36679 = state_36648__$1;(statearr_36650_36679[(2)] = inst_36644);
(statearr_36650_36679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (1)))
{var inst_36611 = (new Array(n));var inst_36612 = inst_36611;var inst_36613 = (0);var state_36648__$1 = (function (){var statearr_36651 = state_36648;(statearr_36651[(7)] = inst_36612);
(statearr_36651[(8)] = inst_36613);
return statearr_36651;
})();var statearr_36652_36680 = state_36648__$1;(statearr_36652_36680[(2)] = null);
(statearr_36652_36680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (4)))
{var inst_36616 = (state_36648[(9)]);var inst_36616__$1 = (state_36648[(2)]);var inst_36617 = (inst_36616__$1 == null);var inst_36618 = cljs.core.not.call(null,inst_36617);var state_36648__$1 = (function (){var statearr_36653 = state_36648;(statearr_36653[(9)] = inst_36616__$1);
return statearr_36653;
})();if(inst_36618)
{var statearr_36654_36681 = state_36648__$1;(statearr_36654_36681[(1)] = (5));
} else
{var statearr_36655_36682 = state_36648__$1;(statearr_36655_36682[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (15)))
{var inst_36638 = (state_36648[(2)]);var state_36648__$1 = state_36648;var statearr_36656_36683 = state_36648__$1;(statearr_36656_36683[(2)] = inst_36638);
(statearr_36656_36683[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (13)))
{var state_36648__$1 = state_36648;var statearr_36657_36684 = state_36648__$1;(statearr_36657_36684[(2)] = null);
(statearr_36657_36684[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (6)))
{var inst_36613 = (state_36648[(8)]);var inst_36634 = (inst_36613 > (0));var state_36648__$1 = state_36648;if(cljs.core.truth_(inst_36634))
{var statearr_36658_36685 = state_36648__$1;(statearr_36658_36685[(1)] = (12));
} else
{var statearr_36659_36686 = state_36648__$1;(statearr_36659_36686[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (3)))
{var inst_36646 = (state_36648[(2)]);var state_36648__$1 = state_36648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36648__$1,inst_36646);
} else
{if((state_val_36649 === (12)))
{var inst_36612 = (state_36648[(7)]);var inst_36636 = cljs.core.vec.call(null,inst_36612);var state_36648__$1 = state_36648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36648__$1,(15),out,inst_36636);
} else
{if((state_val_36649 === (2)))
{var state_36648__$1 = state_36648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36648__$1,(4),ch);
} else
{if((state_val_36649 === (11)))
{var inst_36628 = (state_36648[(2)]);var inst_36629 = (new Array(n));var inst_36612 = inst_36629;var inst_36613 = (0);var state_36648__$1 = (function (){var statearr_36660 = state_36648;(statearr_36660[(10)] = inst_36628);
(statearr_36660[(7)] = inst_36612);
(statearr_36660[(8)] = inst_36613);
return statearr_36660;
})();var statearr_36661_36687 = state_36648__$1;(statearr_36661_36687[(2)] = null);
(statearr_36661_36687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (9)))
{var inst_36612 = (state_36648[(7)]);var inst_36626 = cljs.core.vec.call(null,inst_36612);var state_36648__$1 = state_36648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36648__$1,(11),out,inst_36626);
} else
{if((state_val_36649 === (5)))
{var inst_36616 = (state_36648[(9)]);var inst_36621 = (state_36648[(11)]);var inst_36612 = (state_36648[(7)]);var inst_36613 = (state_36648[(8)]);var inst_36620 = (inst_36612[inst_36613] = inst_36616);var inst_36621__$1 = (inst_36613 + (1));var inst_36622 = (inst_36621__$1 < n);var state_36648__$1 = (function (){var statearr_36662 = state_36648;(statearr_36662[(11)] = inst_36621__$1);
(statearr_36662[(12)] = inst_36620);
return statearr_36662;
})();if(cljs.core.truth_(inst_36622))
{var statearr_36663_36688 = state_36648__$1;(statearr_36663_36688[(1)] = (8));
} else
{var statearr_36664_36689 = state_36648__$1;(statearr_36664_36689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (14)))
{var inst_36641 = (state_36648[(2)]);var inst_36642 = cljs.core.async.close_BANG_.call(null,out);var state_36648__$1 = (function (){var statearr_36666 = state_36648;(statearr_36666[(13)] = inst_36641);
return statearr_36666;
})();var statearr_36667_36690 = state_36648__$1;(statearr_36667_36690[(2)] = inst_36642);
(statearr_36667_36690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (10)))
{var inst_36632 = (state_36648[(2)]);var state_36648__$1 = state_36648;var statearr_36668_36691 = state_36648__$1;(statearr_36668_36691[(2)] = inst_36632);
(statearr_36668_36691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36649 === (8)))
{var inst_36621 = (state_36648[(11)]);var inst_36612 = (state_36648[(7)]);var tmp36665 = inst_36612;var inst_36612__$1 = tmp36665;var inst_36613 = inst_36621;var state_36648__$1 = (function (){var statearr_36669 = state_36648;(statearr_36669[(7)] = inst_36612__$1);
(statearr_36669[(8)] = inst_36613);
return statearr_36669;
})();var statearr_36670_36692 = state_36648__$1;(statearr_36670_36692[(2)] = null);
(statearr_36670_36692[(1)] = (2));
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
});})(c__18867__auto___36678,out))
;return ((function (switch__18811__auto__,c__18867__auto___36678,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36674[(0)] = state_machine__18812__auto__);
(statearr_36674[(1)] = (1));
return statearr_36674;
});
var state_machine__18812__auto____1 = (function (state_36648){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36648);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36675){if((e36675 instanceof Object))
{var ex__18815__auto__ = e36675;var statearr_36676_36693 = state_36648;(statearr_36676_36693[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36694 = state_36648;
state_36648 = G__36694;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36648){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___36678,out))
})();var state__18869__auto__ = (function (){var statearr_36677 = f__18868__auto__.call(null);(statearr_36677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___36678);
return statearr_36677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___36678,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18867__auto___36837 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___36837,out){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___36837,out){
return (function (state_36807){var state_val_36808 = (state_36807[(1)]);if((state_val_36808 === (7)))
{var inst_36803 = (state_36807[(2)]);var state_36807__$1 = state_36807;var statearr_36809_36838 = state_36807__$1;(statearr_36809_36838[(2)] = inst_36803);
(statearr_36809_36838[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (1)))
{var inst_36766 = [];var inst_36767 = inst_36766;var inst_36768 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_36807__$1 = (function (){var statearr_36810 = state_36807;(statearr_36810[(7)] = inst_36768);
(statearr_36810[(8)] = inst_36767);
return statearr_36810;
})();var statearr_36811_36839 = state_36807__$1;(statearr_36811_36839[(2)] = null);
(statearr_36811_36839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (4)))
{var inst_36771 = (state_36807[(9)]);var inst_36771__$1 = (state_36807[(2)]);var inst_36772 = (inst_36771__$1 == null);var inst_36773 = cljs.core.not.call(null,inst_36772);var state_36807__$1 = (function (){var statearr_36812 = state_36807;(statearr_36812[(9)] = inst_36771__$1);
return statearr_36812;
})();if(inst_36773)
{var statearr_36813_36840 = state_36807__$1;(statearr_36813_36840[(1)] = (5));
} else
{var statearr_36814_36841 = state_36807__$1;(statearr_36814_36841[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (15)))
{var inst_36797 = (state_36807[(2)]);var state_36807__$1 = state_36807;var statearr_36815_36842 = state_36807__$1;(statearr_36815_36842[(2)] = inst_36797);
(statearr_36815_36842[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (13)))
{var state_36807__$1 = state_36807;var statearr_36816_36843 = state_36807__$1;(statearr_36816_36843[(2)] = null);
(statearr_36816_36843[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (6)))
{var inst_36767 = (state_36807[(8)]);var inst_36792 = inst_36767.length;var inst_36793 = (inst_36792 > (0));var state_36807__$1 = state_36807;if(cljs.core.truth_(inst_36793))
{var statearr_36817_36844 = state_36807__$1;(statearr_36817_36844[(1)] = (12));
} else
{var statearr_36818_36845 = state_36807__$1;(statearr_36818_36845[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (3)))
{var inst_36805 = (state_36807[(2)]);var state_36807__$1 = state_36807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36807__$1,inst_36805);
} else
{if((state_val_36808 === (12)))
{var inst_36767 = (state_36807[(8)]);var inst_36795 = cljs.core.vec.call(null,inst_36767);var state_36807__$1 = state_36807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36807__$1,(15),out,inst_36795);
} else
{if((state_val_36808 === (2)))
{var state_36807__$1 = state_36807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36807__$1,(4),ch);
} else
{if((state_val_36808 === (11)))
{var inst_36771 = (state_36807[(9)]);var inst_36775 = (state_36807[(10)]);var inst_36785 = (state_36807[(2)]);var inst_36786 = [];var inst_36787 = inst_36786.push(inst_36771);var inst_36767 = inst_36786;var inst_36768 = inst_36775;var state_36807__$1 = (function (){var statearr_36819 = state_36807;(statearr_36819[(7)] = inst_36768);
(statearr_36819[(11)] = inst_36785);
(statearr_36819[(12)] = inst_36787);
(statearr_36819[(8)] = inst_36767);
return statearr_36819;
})();var statearr_36820_36846 = state_36807__$1;(statearr_36820_36846[(2)] = null);
(statearr_36820_36846[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (9)))
{var inst_36767 = (state_36807[(8)]);var inst_36783 = cljs.core.vec.call(null,inst_36767);var state_36807__$1 = state_36807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36807__$1,(11),out,inst_36783);
} else
{if((state_val_36808 === (5)))
{var inst_36771 = (state_36807[(9)]);var inst_36768 = (state_36807[(7)]);var inst_36775 = (state_36807[(10)]);var inst_36775__$1 = f.call(null,inst_36771);var inst_36776 = cljs.core._EQ_.call(null,inst_36775__$1,inst_36768);var inst_36777 = cljs.core.keyword_identical_QMARK_.call(null,inst_36768,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_36778 = (inst_36776) || (inst_36777);var state_36807__$1 = (function (){var statearr_36821 = state_36807;(statearr_36821[(10)] = inst_36775__$1);
return statearr_36821;
})();if(cljs.core.truth_(inst_36778))
{var statearr_36822_36847 = state_36807__$1;(statearr_36822_36847[(1)] = (8));
} else
{var statearr_36823_36848 = state_36807__$1;(statearr_36823_36848[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (14)))
{var inst_36800 = (state_36807[(2)]);var inst_36801 = cljs.core.async.close_BANG_.call(null,out);var state_36807__$1 = (function (){var statearr_36825 = state_36807;(statearr_36825[(13)] = inst_36800);
return statearr_36825;
})();var statearr_36826_36849 = state_36807__$1;(statearr_36826_36849[(2)] = inst_36801);
(statearr_36826_36849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (10)))
{var inst_36790 = (state_36807[(2)]);var state_36807__$1 = state_36807;var statearr_36827_36850 = state_36807__$1;(statearr_36827_36850[(2)] = inst_36790);
(statearr_36827_36850[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36808 === (8)))
{var inst_36771 = (state_36807[(9)]);var inst_36775 = (state_36807[(10)]);var inst_36767 = (state_36807[(8)]);var inst_36780 = inst_36767.push(inst_36771);var tmp36824 = inst_36767;var inst_36767__$1 = tmp36824;var inst_36768 = inst_36775;var state_36807__$1 = (function (){var statearr_36828 = state_36807;(statearr_36828[(14)] = inst_36780);
(statearr_36828[(7)] = inst_36768);
(statearr_36828[(8)] = inst_36767__$1);
return statearr_36828;
})();var statearr_36829_36851 = state_36807__$1;(statearr_36829_36851[(2)] = null);
(statearr_36829_36851[(1)] = (2));
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
});})(c__18867__auto___36837,out))
;return ((function (switch__18811__auto__,c__18867__auto___36837,out){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_36833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36833[(0)] = state_machine__18812__auto__);
(statearr_36833[(1)] = (1));
return statearr_36833;
});
var state_machine__18812__auto____1 = (function (state_36807){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_36807);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e36834){if((e36834 instanceof Object))
{var ex__18815__auto__ = e36834;var statearr_36835_36852 = state_36807;(statearr_36835_36852[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36853 = state_36807;
state_36807 = G__36853;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_36807){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_36807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___36837,out))
})();var state__18869__auto__ = (function (){var statearr_36836 = f__18868__auto__.call(null);(statearr_36836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___36837);
return statearr_36836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___36837,out))
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

//# sourceMappingURL=async.js.map