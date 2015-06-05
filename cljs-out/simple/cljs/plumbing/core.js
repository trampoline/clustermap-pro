// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__21451__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21451 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21451__delegate.call(this,m,k,f,x1,x2,xs);};
G__21451.cljs$lang$maxFixedArity = 5;
G__21451.cljs$lang$applyTo = (function (arglist__21452){
var m = cljs.core.first(arglist__21452);
arglist__21452 = cljs.core.next(arglist__21452);
var k = cljs.core.first(arglist__21452);
arglist__21452 = cljs.core.next(arglist__21452);
var f = cljs.core.first(arglist__21452);
arglist__21452 = cljs.core.next(arglist__21452);
var x1 = cljs.core.first(arglist__21452);
arglist__21452 = cljs.core.next(arglist__21452);
var x2 = cljs.core.first(arglist__21452);
var xs = cljs.core.rest(arglist__21452);
return G__21451__delegate(m,k,f,x1,x2,xs);
});
G__21451.cljs$core$IFn$_invoke$arity$variadic = G__21451__delegate;
return G__21451;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21461_21467 = cljs.core.seq.call(null,m);var chunk__21462_21468 = null;var count__21463_21469 = (0);var i__21464_21470 = (0);while(true){
if((i__21464_21470 < count__21463_21469))
{var vec__21465_21471 = cljs.core._nth.call(null,chunk__21462_21468,i__21464_21470);var k_21472 = cljs.core.nth.call(null,vec__21465_21471,(0),null);var v_21473 = cljs.core.nth.call(null,vec__21465_21471,(1),null);var m21460_21474 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21460_21474,k_21472,f.call(null,v_21473)));
{
var G__21475 = seq__21461_21467;
var G__21476 = chunk__21462_21468;
var G__21477 = count__21463_21469;
var G__21478 = (i__21464_21470 + (1));
seq__21461_21467 = G__21475;
chunk__21462_21468 = G__21476;
count__21463_21469 = G__21477;
i__21464_21470 = G__21478;
continue;
}
} else
{var temp__4126__auto___21479 = cljs.core.seq.call(null,seq__21461_21467);if(temp__4126__auto___21479)
{var seq__21461_21480__$1 = temp__4126__auto___21479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21461_21480__$1))
{var c__4408__auto___21481 = cljs.core.chunk_first.call(null,seq__21461_21480__$1);{
var G__21482 = cljs.core.chunk_rest.call(null,seq__21461_21480__$1);
var G__21483 = c__4408__auto___21481;
var G__21484 = cljs.core.count.call(null,c__4408__auto___21481);
var G__21485 = (0);
seq__21461_21467 = G__21482;
chunk__21462_21468 = G__21483;
count__21463_21469 = G__21484;
i__21464_21470 = G__21485;
continue;
}
} else
{var vec__21466_21486 = cljs.core.first.call(null,seq__21461_21480__$1);var k_21487 = cljs.core.nth.call(null,vec__21466_21486,(0),null);var v_21488 = cljs.core.nth.call(null,vec__21466_21486,(1),null);var m21460_21489 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21460_21489,k_21487,f.call(null,v_21488)));
{
var G__21490 = cljs.core.next.call(null,seq__21461_21480__$1);
var G__21491 = null;
var G__21492 = (0);
var G__21493 = (0);
seq__21461_21467 = G__21490;
chunk__21462_21468 = G__21491;
count__21463_21469 = G__21492;
i__21464_21470 = G__21493;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21502_21508 = cljs.core.seq.call(null,m);var chunk__21503_21509 = null;var count__21504_21510 = (0);var i__21505_21511 = (0);while(true){
if((i__21505_21511 < count__21504_21510))
{var vec__21506_21512 = cljs.core._nth.call(null,chunk__21503_21509,i__21505_21511);var k_21513 = cljs.core.nth.call(null,vec__21506_21512,(0),null);var v_21514 = cljs.core.nth.call(null,vec__21506_21512,(1),null);var m21501_21515 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21501_21515,f.call(null,k_21513),v_21514));
{
var G__21516 = seq__21502_21508;
var G__21517 = chunk__21503_21509;
var G__21518 = count__21504_21510;
var G__21519 = (i__21505_21511 + (1));
seq__21502_21508 = G__21516;
chunk__21503_21509 = G__21517;
count__21504_21510 = G__21518;
i__21505_21511 = G__21519;
continue;
}
} else
{var temp__4126__auto___21520 = cljs.core.seq.call(null,seq__21502_21508);if(temp__4126__auto___21520)
{var seq__21502_21521__$1 = temp__4126__auto___21520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21502_21521__$1))
{var c__4408__auto___21522 = cljs.core.chunk_first.call(null,seq__21502_21521__$1);{
var G__21523 = cljs.core.chunk_rest.call(null,seq__21502_21521__$1);
var G__21524 = c__4408__auto___21522;
var G__21525 = cljs.core.count.call(null,c__4408__auto___21522);
var G__21526 = (0);
seq__21502_21508 = G__21523;
chunk__21503_21509 = G__21524;
count__21504_21510 = G__21525;
i__21505_21511 = G__21526;
continue;
}
} else
{var vec__21507_21527 = cljs.core.first.call(null,seq__21502_21521__$1);var k_21528 = cljs.core.nth.call(null,vec__21507_21527,(0),null);var v_21529 = cljs.core.nth.call(null,vec__21507_21527,(1),null);var m21501_21530 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21501_21530,f.call(null,k_21528),v_21529));
{
var G__21531 = cljs.core.next.call(null,seq__21502_21521__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21502_21508 = G__21531;
chunk__21503_21509 = G__21532;
count__21504_21510 = G__21533;
i__21505_21511 = G__21534;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21541_21545 = cljs.core.seq.call(null,ks);var chunk__21542_21546 = null;var count__21543_21547 = (0);var i__21544_21548 = (0);while(true){
if((i__21544_21548 < count__21543_21547))
{var k_21549 = cljs.core._nth.call(null,chunk__21542_21546,i__21544_21548);var m21540_21550 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21540_21550,k_21549,f.call(null,k_21549)));
{
var G__21551 = seq__21541_21545;
var G__21552 = chunk__21542_21546;
var G__21553 = count__21543_21547;
var G__21554 = (i__21544_21548 + (1));
seq__21541_21545 = G__21551;
chunk__21542_21546 = G__21552;
count__21543_21547 = G__21553;
i__21544_21548 = G__21554;
continue;
}
} else
{var temp__4126__auto___21555 = cljs.core.seq.call(null,seq__21541_21545);if(temp__4126__auto___21555)
{var seq__21541_21556__$1 = temp__4126__auto___21555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21541_21556__$1))
{var c__4408__auto___21557 = cljs.core.chunk_first.call(null,seq__21541_21556__$1);{
var G__21558 = cljs.core.chunk_rest.call(null,seq__21541_21556__$1);
var G__21559 = c__4408__auto___21557;
var G__21560 = cljs.core.count.call(null,c__4408__auto___21557);
var G__21561 = (0);
seq__21541_21545 = G__21558;
chunk__21542_21546 = G__21559;
count__21543_21547 = G__21560;
i__21544_21548 = G__21561;
continue;
}
} else
{var k_21562 = cljs.core.first.call(null,seq__21541_21556__$1);var m21540_21563 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21540_21563,k_21562,f.call(null,k_21562)));
{
var G__21564 = cljs.core.next.call(null,seq__21541_21556__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__21541_21545 = G__21564;
chunk__21542_21546 = G__21565;
count__21543_21547 = G__21566;
i__21544_21548 = G__21567;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21574_21578 = cljs.core.seq.call(null,vs);var chunk__21575_21579 = null;var count__21576_21580 = (0);var i__21577_21581 = (0);while(true){
if((i__21577_21581 < count__21576_21580))
{var v_21582 = cljs.core._nth.call(null,chunk__21575_21579,i__21577_21581);var m21573_21583 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21573_21583,f.call(null,v_21582),v_21582));
{
var G__21584 = seq__21574_21578;
var G__21585 = chunk__21575_21579;
var G__21586 = count__21576_21580;
var G__21587 = (i__21577_21581 + (1));
seq__21574_21578 = G__21584;
chunk__21575_21579 = G__21585;
count__21576_21580 = G__21586;
i__21577_21581 = G__21587;
continue;
}
} else
{var temp__4126__auto___21588 = cljs.core.seq.call(null,seq__21574_21578);if(temp__4126__auto___21588)
{var seq__21574_21589__$1 = temp__4126__auto___21588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21574_21589__$1))
{var c__4408__auto___21590 = cljs.core.chunk_first.call(null,seq__21574_21589__$1);{
var G__21591 = cljs.core.chunk_rest.call(null,seq__21574_21589__$1);
var G__21592 = c__4408__auto___21590;
var G__21593 = cljs.core.count.call(null,c__4408__auto___21590);
var G__21594 = (0);
seq__21574_21578 = G__21591;
chunk__21575_21579 = G__21592;
count__21576_21580 = G__21593;
i__21577_21581 = G__21594;
continue;
}
} else
{var v_21595 = cljs.core.first.call(null,seq__21574_21589__$1);var m21573_21596 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21573_21596,f.call(null,v_21595),v_21595));
{
var G__21597 = cljs.core.next.call(null,seq__21574_21589__$1);
var G__21598 = null;
var G__21599 = (0);
var G__21600 = (0);
seq__21574_21578 = G__21597;
chunk__21575_21579 = G__21598;
count__21576_21580 = G__21599;
i__21577_21581 = G__21600;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__21601){var vec__21603 = p__21601;var k = cljs.core.nth.call(null,vec__21603,(0),null);var ks = cljs.core.nthnext.call(null,vec__21603,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3627__auto__ = ks;if(and__3627__auto__)
{return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21612_21618 = cljs.core.seq.call(null,x);var chunk__21613_21619 = null;var count__21614_21620 = (0);var i__21615_21621 = (0);while(true){
if((i__21615_21621 < count__21614_21620))
{var vec__21616_21622 = cljs.core._nth.call(null,chunk__21613_21619,i__21615_21621);var k_21623 = cljs.core.nth.call(null,vec__21616_21622,(0),null);var v_21624 = cljs.core.nth.call(null,vec__21616_21622,(1),null);var m21611_21625 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21611_21625,((typeof k_21623 === 'string')?cljs.core.keyword.call(null,k_21623):k_21623),keywordize_map.call(null,v_21624)));
{
var G__21626 = seq__21612_21618;
var G__21627 = chunk__21613_21619;
var G__21628 = count__21614_21620;
var G__21629 = (i__21615_21621 + (1));
seq__21612_21618 = G__21626;
chunk__21613_21619 = G__21627;
count__21614_21620 = G__21628;
i__21615_21621 = G__21629;
continue;
}
} else
{var temp__4126__auto___21630 = cljs.core.seq.call(null,seq__21612_21618);if(temp__4126__auto___21630)
{var seq__21612_21631__$1 = temp__4126__auto___21630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21612_21631__$1))
{var c__4408__auto___21632 = cljs.core.chunk_first.call(null,seq__21612_21631__$1);{
var G__21633 = cljs.core.chunk_rest.call(null,seq__21612_21631__$1);
var G__21634 = c__4408__auto___21632;
var G__21635 = cljs.core.count.call(null,c__4408__auto___21632);
var G__21636 = (0);
seq__21612_21618 = G__21633;
chunk__21613_21619 = G__21634;
count__21614_21620 = G__21635;
i__21615_21621 = G__21636;
continue;
}
} else
{var vec__21617_21637 = cljs.core.first.call(null,seq__21612_21631__$1);var k_21638 = cljs.core.nth.call(null,vec__21617_21637,(0),null);var v_21639 = cljs.core.nth.call(null,vec__21617_21637,(1),null);var m21611_21640 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21611_21640,((typeof k_21638 === 'string')?cljs.core.keyword.call(null,k_21638):k_21638),keywordize_map.call(null,v_21639)));
{
var G__21641 = cljs.core.next.call(null,seq__21612_21631__$1);
var G__21642 = null;
var G__21643 = (0);
var G__21644 = (0);
seq__21612_21618 = G__21641;
chunk__21613_21619 = G__21642;
count__21614_21620 = G__21643;
i__21615_21621 = G__21644;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__7632__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__7632__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__21645 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21646 = cljs.core.next.call(null,ks);
m = G__21645;
ks = G__21646;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3639__auto__ = m;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4377__auto__ = (function iter__21655(s__21656){return (new cljs.core.LazySeq(null,(function (){var s__21656__$1 = s__21656;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21656__$1);if(temp__4126__auto__)
{var s__21656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21656__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21656__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21658 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21657 = (0);while(true){
if((i__21657 < size__4376__auto__))
{var vec__21661 = cljs.core._nth.call(null,c__4375__auto__,i__21657);var k = cljs.core.nth.call(null,vec__21661,(0),null);var v = cljs.core.nth.call(null,vec__21661,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21663 = (i__21657 + (1));
i__21657 = G__21663;
continue;
}
} else
{{
var G__21664 = (i__21657 + (1));
i__21657 = G__21664;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21658),iter__21655.call(null,cljs.core.chunk_rest.call(null,s__21656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21658),null);
}
} else
{var vec__21662 = cljs.core.first.call(null,s__21656__$2);var k = cljs.core.nth.call(null,vec__21662,(0),null);var v = cljs.core.nth.call(null,vec__21662,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21655.call(null,cljs.core.rest.call(null,s__21656__$2)));
} else
{{
var G__21665 = cljs.core.rest.call(null,s__21656__$2);
s__21656__$1 = G__21665;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__21666){
var m = cljs.core.first(arglist__21666);
var kvs = cljs.core.rest(arglist__21666);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__21667){
var m = cljs.core.first(arglist__21667);
arglist__21667 = cljs.core.next(arglist__21667);
var key_seq = cljs.core.first(arglist__21667);
arglist__21667 = cljs.core.next(arglist__21667);
var f = cljs.core.first(arglist__21667);
var args = cljs.core.rest(arglist__21667);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4377__auto__ = ((function (s){
return (function iter__21672(s__21673){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21673__$1 = s__21673;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21673__$1);if(temp__4126__auto__)
{var s__21673__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21673__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21673__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21675 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21674 = (0);while(true){
if((i__21674 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21674);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21675,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21676 = (i__21674 + (1));
i__21674 = G__21676;
continue;
}
} else
{{
var G__21677 = (i__21674 + (1));
i__21674 = G__21677;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21675),iter__21672.call(null,cljs.core.chunk_rest.call(null,s__21673__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21675),null);
}
} else
{var x = cljs.core.first.call(null,s__21673__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21672.call(null,cljs.core.rest.call(null,s__21673__$2)));
} else
{{
var G__21678 = cljs.core.rest.call(null,s__21673__$2);
s__21673__$1 = G__21678;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4377__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__21679){
var colls = cljs.core.seq(arglist__21679);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__21680__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21681 = conj_when.call(null,coll,x);
var G__21682 = cljs.core.first.call(null,xs);
var G__21683 = cljs.core.next.call(null,xs);
coll = G__21681;
x = G__21682;
xs = G__21683;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21680 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21680__delegate.call(this,coll,x,xs);};
G__21680.cljs$lang$maxFixedArity = 2;
G__21680.cljs$lang$applyTo = (function (arglist__21684){
var coll = cljs.core.first(arglist__21684);
arglist__21684 = cljs.core.next(arglist__21684);
var x = cljs.core.first(arglist__21684);
var xs = cljs.core.rest(arglist__21684);
return G__21680__delegate(coll,x,xs);
});
G__21680.cljs$core$IFn$_invoke$arity$variadic = G__21680__delegate;
return G__21680;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__21686__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21685_SHARP_){return cljs.core.apply.call(null,f,p1__21685_SHARP_,args);
}));
};
var G__21686 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21686__delegate.call(this,a,f,args);};
G__21686.cljs$lang$maxFixedArity = 2;
G__21686.cljs$lang$applyTo = (function (arglist__21687){
var a = cljs.core.first(arglist__21687);
arglist__21687 = cljs.core.next(arglist__21687);
var f = cljs.core.first(arglist__21687);
var args = cljs.core.rest(arglist__21687);
return G__21686__delegate(a,f,args);
});
G__21686.cljs$core$IFn$_invoke$arity$variadic = G__21686__delegate;
return G__21686;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__21688__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21688 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21688__delegate.call(this,f,arg,args);};
G__21688.cljs$lang$maxFixedArity = 2;
G__21688.cljs$lang$applyTo = (function (arglist__21689){
var f = cljs.core.first(arglist__21689);
arglist__21689 = cljs.core.next(arglist__21689);
var arg = cljs.core.first(arglist__21689);
var args = cljs.core.rest(arglist__21689);
return G__21688__delegate(f,arg,args);
});
G__21688.cljs$core$IFn$_invoke$arity$variadic = G__21688__delegate;
return G__21688;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
