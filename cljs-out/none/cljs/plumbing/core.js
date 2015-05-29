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
var G__37401__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__37401 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__37401__delegate.call(this,m,k,f,x1,x2,xs);};
G__37401.cljs$lang$maxFixedArity = 5;
G__37401.cljs$lang$applyTo = (function (arglist__37402){
var m = cljs.core.first(arglist__37402);
arglist__37402 = cljs.core.next(arglist__37402);
var k = cljs.core.first(arglist__37402);
arglist__37402 = cljs.core.next(arglist__37402);
var f = cljs.core.first(arglist__37402);
arglist__37402 = cljs.core.next(arglist__37402);
var x1 = cljs.core.first(arglist__37402);
arglist__37402 = cljs.core.next(arglist__37402);
var x2 = cljs.core.first(arglist__37402);
var xs = cljs.core.rest(arglist__37402);
return G__37401__delegate(m,k,f,x1,x2,xs);
});
G__37401.cljs$core$IFn$_invoke$arity$variadic = G__37401__delegate;
return G__37401;
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
{var m_atom__15438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__37411_37417 = cljs.core.seq.call(null,m);var chunk__37412_37418 = null;var count__37413_37419 = (0);var i__37414_37420 = (0);while(true){
if((i__37414_37420 < count__37413_37419))
{var vec__37415_37421 = cljs.core._nth.call(null,chunk__37412_37418,i__37414_37420);var k_37422 = cljs.core.nth.call(null,vec__37415_37421,(0),null);var v_37423 = cljs.core.nth.call(null,vec__37415_37421,(1),null);var m37410_37424 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37410_37424,k_37422,f.call(null,v_37423)));
{
var G__37425 = seq__37411_37417;
var G__37426 = chunk__37412_37418;
var G__37427 = count__37413_37419;
var G__37428 = (i__37414_37420 + (1));
seq__37411_37417 = G__37425;
chunk__37412_37418 = G__37426;
count__37413_37419 = G__37427;
i__37414_37420 = G__37428;
continue;
}
} else
{var temp__4126__auto___37429 = cljs.core.seq.call(null,seq__37411_37417);if(temp__4126__auto___37429)
{var seq__37411_37430__$1 = temp__4126__auto___37429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37411_37430__$1))
{var c__12283__auto___37431 = cljs.core.chunk_first.call(null,seq__37411_37430__$1);{
var G__37432 = cljs.core.chunk_rest.call(null,seq__37411_37430__$1);
var G__37433 = c__12283__auto___37431;
var G__37434 = cljs.core.count.call(null,c__12283__auto___37431);
var G__37435 = (0);
seq__37411_37417 = G__37432;
chunk__37412_37418 = G__37433;
count__37413_37419 = G__37434;
i__37414_37420 = G__37435;
continue;
}
} else
{var vec__37416_37436 = cljs.core.first.call(null,seq__37411_37430__$1);var k_37437 = cljs.core.nth.call(null,vec__37416_37436,(0),null);var v_37438 = cljs.core.nth.call(null,vec__37416_37436,(1),null);var m37410_37439 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37410_37439,k_37437,f.call(null,v_37438)));
{
var G__37440 = cljs.core.next.call(null,seq__37411_37430__$1);
var G__37441 = null;
var G__37442 = (0);
var G__37443 = (0);
seq__37411_37417 = G__37440;
chunk__37412_37418 = G__37441;
count__37413_37419 = G__37442;
i__37414_37420 = G__37443;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15438__auto__));

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
{var m_atom__15438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__37452_37458 = cljs.core.seq.call(null,m);var chunk__37453_37459 = null;var count__37454_37460 = (0);var i__37455_37461 = (0);while(true){
if((i__37455_37461 < count__37454_37460))
{var vec__37456_37462 = cljs.core._nth.call(null,chunk__37453_37459,i__37455_37461);var k_37463 = cljs.core.nth.call(null,vec__37456_37462,(0),null);var v_37464 = cljs.core.nth.call(null,vec__37456_37462,(1),null);var m37451_37465 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37451_37465,f.call(null,k_37463),v_37464));
{
var G__37466 = seq__37452_37458;
var G__37467 = chunk__37453_37459;
var G__37468 = count__37454_37460;
var G__37469 = (i__37455_37461 + (1));
seq__37452_37458 = G__37466;
chunk__37453_37459 = G__37467;
count__37454_37460 = G__37468;
i__37455_37461 = G__37469;
continue;
}
} else
{var temp__4126__auto___37470 = cljs.core.seq.call(null,seq__37452_37458);if(temp__4126__auto___37470)
{var seq__37452_37471__$1 = temp__4126__auto___37470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37452_37471__$1))
{var c__12283__auto___37472 = cljs.core.chunk_first.call(null,seq__37452_37471__$1);{
var G__37473 = cljs.core.chunk_rest.call(null,seq__37452_37471__$1);
var G__37474 = c__12283__auto___37472;
var G__37475 = cljs.core.count.call(null,c__12283__auto___37472);
var G__37476 = (0);
seq__37452_37458 = G__37473;
chunk__37453_37459 = G__37474;
count__37454_37460 = G__37475;
i__37455_37461 = G__37476;
continue;
}
} else
{var vec__37457_37477 = cljs.core.first.call(null,seq__37452_37471__$1);var k_37478 = cljs.core.nth.call(null,vec__37457_37477,(0),null);var v_37479 = cljs.core.nth.call(null,vec__37457_37477,(1),null);var m37451_37480 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37451_37480,f.call(null,k_37478),v_37479));
{
var G__37481 = cljs.core.next.call(null,seq__37452_37471__$1);
var G__37482 = null;
var G__37483 = (0);
var G__37484 = (0);
seq__37452_37458 = G__37481;
chunk__37453_37459 = G__37482;
count__37454_37460 = G__37483;
i__37455_37461 = G__37484;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15438__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__37491_37495 = cljs.core.seq.call(null,ks);var chunk__37492_37496 = null;var count__37493_37497 = (0);var i__37494_37498 = (0);while(true){
if((i__37494_37498 < count__37493_37497))
{var k_37499 = cljs.core._nth.call(null,chunk__37492_37496,i__37494_37498);var m37490_37500 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37490_37500,k_37499,f.call(null,k_37499)));
{
var G__37501 = seq__37491_37495;
var G__37502 = chunk__37492_37496;
var G__37503 = count__37493_37497;
var G__37504 = (i__37494_37498 + (1));
seq__37491_37495 = G__37501;
chunk__37492_37496 = G__37502;
count__37493_37497 = G__37503;
i__37494_37498 = G__37504;
continue;
}
} else
{var temp__4126__auto___37505 = cljs.core.seq.call(null,seq__37491_37495);if(temp__4126__auto___37505)
{var seq__37491_37506__$1 = temp__4126__auto___37505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37491_37506__$1))
{var c__12283__auto___37507 = cljs.core.chunk_first.call(null,seq__37491_37506__$1);{
var G__37508 = cljs.core.chunk_rest.call(null,seq__37491_37506__$1);
var G__37509 = c__12283__auto___37507;
var G__37510 = cljs.core.count.call(null,c__12283__auto___37507);
var G__37511 = (0);
seq__37491_37495 = G__37508;
chunk__37492_37496 = G__37509;
count__37493_37497 = G__37510;
i__37494_37498 = G__37511;
continue;
}
} else
{var k_37512 = cljs.core.first.call(null,seq__37491_37506__$1);var m37490_37513 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37490_37513,k_37512,f.call(null,k_37512)));
{
var G__37514 = cljs.core.next.call(null,seq__37491_37506__$1);
var G__37515 = null;
var G__37516 = (0);
var G__37517 = (0);
seq__37491_37495 = G__37514;
chunk__37492_37496 = G__37515;
count__37493_37497 = G__37516;
i__37494_37498 = G__37517;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15438__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__37524_37528 = cljs.core.seq.call(null,vs);var chunk__37525_37529 = null;var count__37526_37530 = (0);var i__37527_37531 = (0);while(true){
if((i__37527_37531 < count__37526_37530))
{var v_37532 = cljs.core._nth.call(null,chunk__37525_37529,i__37527_37531);var m37523_37533 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37523_37533,f.call(null,v_37532),v_37532));
{
var G__37534 = seq__37524_37528;
var G__37535 = chunk__37525_37529;
var G__37536 = count__37526_37530;
var G__37537 = (i__37527_37531 + (1));
seq__37524_37528 = G__37534;
chunk__37525_37529 = G__37535;
count__37526_37530 = G__37536;
i__37527_37531 = G__37537;
continue;
}
} else
{var temp__4126__auto___37538 = cljs.core.seq.call(null,seq__37524_37528);if(temp__4126__auto___37538)
{var seq__37524_37539__$1 = temp__4126__auto___37538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37524_37539__$1))
{var c__12283__auto___37540 = cljs.core.chunk_first.call(null,seq__37524_37539__$1);{
var G__37541 = cljs.core.chunk_rest.call(null,seq__37524_37539__$1);
var G__37542 = c__12283__auto___37540;
var G__37543 = cljs.core.count.call(null,c__12283__auto___37540);
var G__37544 = (0);
seq__37524_37528 = G__37541;
chunk__37525_37529 = G__37542;
count__37526_37530 = G__37543;
i__37527_37531 = G__37544;
continue;
}
} else
{var v_37545 = cljs.core.first.call(null,seq__37524_37539__$1);var m37523_37546 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37523_37546,f.call(null,v_37545),v_37545));
{
var G__37547 = cljs.core.next.call(null,seq__37524_37539__$1);
var G__37548 = null;
var G__37549 = (0);
var G__37550 = (0);
seq__37524_37528 = G__37547;
chunk__37525_37529 = G__37548;
count__37526_37530 = G__37549;
i__37527_37531 = G__37550;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15438__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__37551){var vec__37553 = p__37551;var k = cljs.core.nth.call(null,vec__37553,(0),null);var ks = cljs.core.nthnext.call(null,vec__37553,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__11502__auto__ = ks;if(and__11502__auto__)
{return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else
{return and__11502__auto__;
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
{var m_atom__15438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__37562_37568 = cljs.core.seq.call(null,x);var chunk__37563_37569 = null;var count__37564_37570 = (0);var i__37565_37571 = (0);while(true){
if((i__37565_37571 < count__37564_37570))
{var vec__37566_37572 = cljs.core._nth.call(null,chunk__37563_37569,i__37565_37571);var k_37573 = cljs.core.nth.call(null,vec__37566_37572,(0),null);var v_37574 = cljs.core.nth.call(null,vec__37566_37572,(1),null);var m37561_37575 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37561_37575,((typeof k_37573 === 'string')?cljs.core.keyword.call(null,k_37573):k_37573),keywordize_map.call(null,v_37574)));
{
var G__37576 = seq__37562_37568;
var G__37577 = chunk__37563_37569;
var G__37578 = count__37564_37570;
var G__37579 = (i__37565_37571 + (1));
seq__37562_37568 = G__37576;
chunk__37563_37569 = G__37577;
count__37564_37570 = G__37578;
i__37565_37571 = G__37579;
continue;
}
} else
{var temp__4126__auto___37580 = cljs.core.seq.call(null,seq__37562_37568);if(temp__4126__auto___37580)
{var seq__37562_37581__$1 = temp__4126__auto___37580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37562_37581__$1))
{var c__12283__auto___37582 = cljs.core.chunk_first.call(null,seq__37562_37581__$1);{
var G__37583 = cljs.core.chunk_rest.call(null,seq__37562_37581__$1);
var G__37584 = c__12283__auto___37582;
var G__37585 = cljs.core.count.call(null,c__12283__auto___37582);
var G__37586 = (0);
seq__37562_37568 = G__37583;
chunk__37563_37569 = G__37584;
count__37564_37570 = G__37585;
i__37565_37571 = G__37586;
continue;
}
} else
{var vec__37567_37587 = cljs.core.first.call(null,seq__37562_37581__$1);var k_37588 = cljs.core.nth.call(null,vec__37567_37587,(0),null);var v_37589 = cljs.core.nth.call(null,vec__37567_37587,(1),null);var m37561_37590 = cljs.core.deref.call(null,m_atom__15438__auto__);cljs.core.reset_BANG_.call(null,m_atom__15438__auto__,cljs.core.assoc_BANG_.call(null,m37561_37590,((typeof k_37588 === 'string')?cljs.core.keyword.call(null,k_37588):k_37588),keywordize_map.call(null,v_37589)));
{
var G__37591 = cljs.core.next.call(null,seq__37562_37581__$1);
var G__37592 = null;
var G__37593 = (0);
var G__37594 = (0);
seq__37562_37568 = G__37591;
chunk__37563_37569 = G__37592;
count__37564_37570 = G__37593;
i__37565_37571 = G__37594;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15438__auto__));
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
{var pair__15507__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15507__auto__);
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
var G__37595 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__37596 = cljs.core.next.call(null,ks);
m = G__37595;
ks = G__37596;
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
return cljs.core.into.call(null,(function (){var or__11514__auto__ = m;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__12252__auto__ = (function iter__37605(s__37606){return (new cljs.core.LazySeq(null,(function (){var s__37606__$1 = s__37606;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37606__$1);if(temp__4126__auto__)
{var s__37606__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37606__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__37606__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__37608 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__37607 = (0);while(true){
if((i__37607 < size__12251__auto__))
{var vec__37611 = cljs.core._nth.call(null,c__12250__auto__,i__37607);var k = cljs.core.nth.call(null,vec__37611,(0),null);var v = cljs.core.nth.call(null,vec__37611,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__37608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__37613 = (i__37607 + (1));
i__37607 = G__37613;
continue;
}
} else
{{
var G__37614 = (i__37607 + (1));
i__37607 = G__37614;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37608),iter__37605.call(null,cljs.core.chunk_rest.call(null,s__37606__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37608),null);
}
} else
{var vec__37612 = cljs.core.first.call(null,s__37606__$2);var k = cljs.core.nth.call(null,vec__37612,(0),null);var v = cljs.core.nth.call(null,vec__37612,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__37605.call(null,cljs.core.rest.call(null,s__37606__$2)));
} else
{{
var G__37615 = cljs.core.rest.call(null,s__37606__$2);
s__37606__$1 = G__37615;
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
});return iter__12252__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__37616){
var m = cljs.core.first(arglist__37616);
var kvs = cljs.core.rest(arglist__37616);
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
update_in_when.cljs$lang$applyTo = (function (arglist__37617){
var m = cljs.core.first(arglist__37617);
arglist__37617 = cljs.core.next(arglist__37617);
var key_seq = cljs.core.first(arglist__37617);
arglist__37617 = cljs.core.next(arglist__37617);
var f = cljs.core.first(arglist__37617);
var args = cljs.core.rest(arglist__37617);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__12252__auto__ = ((function (s){
return (function iter__37622(s__37623){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__37623__$1 = s__37623;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37623__$1);if(temp__4126__auto__)
{var s__37623__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37623__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__37623__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__37625 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__37624 = (0);while(true){
if((i__37624 < size__12251__auto__))
{var x = cljs.core._nth.call(null,c__12250__auto__,i__37624);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__37625,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__37626 = (i__37624 + (1));
i__37624 = G__37626;
continue;
}
} else
{{
var G__37627 = (i__37624 + (1));
i__37624 = G__37627;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37625),iter__37622.call(null,cljs.core.chunk_rest.call(null,s__37623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37625),null);
}
} else
{var x = cljs.core.first.call(null,s__37623__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__37622.call(null,cljs.core.rest.call(null,s__37623__$2)));
} else
{{
var G__37628 = cljs.core.rest.call(null,s__37623__$2);
s__37623__$1 = G__37628;
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
;return iter__12252__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__37629){
var colls = cljs.core.seq(arglist__37629);
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
var G__37630__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__37631 = conj_when.call(null,coll,x);
var G__37632 = cljs.core.first.call(null,xs);
var G__37633 = cljs.core.next.call(null,xs);
coll = G__37631;
x = G__37632;
xs = G__37633;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__37630 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37630__delegate.call(this,coll,x,xs);};
G__37630.cljs$lang$maxFixedArity = 2;
G__37630.cljs$lang$applyTo = (function (arglist__37634){
var coll = cljs.core.first(arglist__37634);
arglist__37634 = cljs.core.next(arglist__37634);
var x = cljs.core.first(arglist__37634);
var xs = cljs.core.rest(arglist__37634);
return G__37630__delegate(coll,x,xs);
});
G__37630.cljs$core$IFn$_invoke$arity$variadic = G__37630__delegate;
return G__37630;
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
var G__37636__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__37635_SHARP_){return cljs.core.apply.call(null,f,p1__37635_SHARP_,args);
}));
};
var G__37636 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37636__delegate.call(this,a,f,args);};
G__37636.cljs$lang$maxFixedArity = 2;
G__37636.cljs$lang$applyTo = (function (arglist__37637){
var a = cljs.core.first(arglist__37637);
arglist__37637 = cljs.core.next(arglist__37637);
var f = cljs.core.first(arglist__37637);
var args = cljs.core.rest(arglist__37637);
return G__37636__delegate(a,f,args);
});
G__37636.cljs$core$IFn$_invoke$arity$variadic = G__37636__delegate;
return G__37636;
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
var G__37638__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__37638 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37638__delegate.call(this,f,arg,args);};
G__37638.cljs$lang$maxFixedArity = 2;
G__37638.cljs$lang$applyTo = (function (arglist__37639){
var f = cljs.core.first(arglist__37639);
arglist__37639 = cljs.core.next(arglist__37639);
var arg = cljs.core.first(arglist__37639);
var args = cljs.core.rest(arglist__37639);
return G__37638__delegate(f,arg,args);
});
G__37638.cljs$core$IFn$_invoke$arity$variadic = G__37638__delegate;
return G__37638;
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

//# sourceMappingURL=core.js.map