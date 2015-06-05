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
var G__21284__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21284 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21284__delegate.call(this,m,k,f,x1,x2,xs);};
G__21284.cljs$lang$maxFixedArity = 5;
G__21284.cljs$lang$applyTo = (function (arglist__21285){
var m = cljs.core.first(arglist__21285);
arglist__21285 = cljs.core.next(arglist__21285);
var k = cljs.core.first(arglist__21285);
arglist__21285 = cljs.core.next(arglist__21285);
var f = cljs.core.first(arglist__21285);
arglist__21285 = cljs.core.next(arglist__21285);
var x1 = cljs.core.first(arglist__21285);
arglist__21285 = cljs.core.next(arglist__21285);
var x2 = cljs.core.first(arglist__21285);
var xs = cljs.core.rest(arglist__21285);
return G__21284__delegate(m,k,f,x1,x2,xs);
});
G__21284.cljs$core$IFn$_invoke$arity$variadic = G__21284__delegate;
return G__21284;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21294_21300 = cljs.core.seq.call(null,m);var chunk__21295_21301 = null;var count__21296_21302 = (0);var i__21297_21303 = (0);while(true){
if((i__21297_21303 < count__21296_21302))
{var vec__21298_21304 = cljs.core._nth.call(null,chunk__21295_21301,i__21297_21303);var k_21305 = cljs.core.nth.call(null,vec__21298_21304,(0),null);var v_21306 = cljs.core.nth.call(null,vec__21298_21304,(1),null);var m21293_21307 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21293_21307,k_21305,f.call(null,v_21306)));
{
var G__21308 = seq__21294_21300;
var G__21309 = chunk__21295_21301;
var G__21310 = count__21296_21302;
var G__21311 = (i__21297_21303 + (1));
seq__21294_21300 = G__21308;
chunk__21295_21301 = G__21309;
count__21296_21302 = G__21310;
i__21297_21303 = G__21311;
continue;
}
} else
{var temp__4126__auto___21312 = cljs.core.seq.call(null,seq__21294_21300);if(temp__4126__auto___21312)
{var seq__21294_21313__$1 = temp__4126__auto___21312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21294_21313__$1))
{var c__4408__auto___21314 = cljs.core.chunk_first.call(null,seq__21294_21313__$1);{
var G__21315 = cljs.core.chunk_rest.call(null,seq__21294_21313__$1);
var G__21316 = c__4408__auto___21314;
var G__21317 = cljs.core.count.call(null,c__4408__auto___21314);
var G__21318 = (0);
seq__21294_21300 = G__21315;
chunk__21295_21301 = G__21316;
count__21296_21302 = G__21317;
i__21297_21303 = G__21318;
continue;
}
} else
{var vec__21299_21319 = cljs.core.first.call(null,seq__21294_21313__$1);var k_21320 = cljs.core.nth.call(null,vec__21299_21319,(0),null);var v_21321 = cljs.core.nth.call(null,vec__21299_21319,(1),null);var m21293_21322 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21293_21322,k_21320,f.call(null,v_21321)));
{
var G__21323 = cljs.core.next.call(null,seq__21294_21313__$1);
var G__21324 = null;
var G__21325 = (0);
var G__21326 = (0);
seq__21294_21300 = G__21323;
chunk__21295_21301 = G__21324;
count__21296_21302 = G__21325;
i__21297_21303 = G__21326;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21335_21341 = cljs.core.seq.call(null,m);var chunk__21336_21342 = null;var count__21337_21343 = (0);var i__21338_21344 = (0);while(true){
if((i__21338_21344 < count__21337_21343))
{var vec__21339_21345 = cljs.core._nth.call(null,chunk__21336_21342,i__21338_21344);var k_21346 = cljs.core.nth.call(null,vec__21339_21345,(0),null);var v_21347 = cljs.core.nth.call(null,vec__21339_21345,(1),null);var m21334_21348 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21334_21348,f.call(null,k_21346),v_21347));
{
var G__21349 = seq__21335_21341;
var G__21350 = chunk__21336_21342;
var G__21351 = count__21337_21343;
var G__21352 = (i__21338_21344 + (1));
seq__21335_21341 = G__21349;
chunk__21336_21342 = G__21350;
count__21337_21343 = G__21351;
i__21338_21344 = G__21352;
continue;
}
} else
{var temp__4126__auto___21353 = cljs.core.seq.call(null,seq__21335_21341);if(temp__4126__auto___21353)
{var seq__21335_21354__$1 = temp__4126__auto___21353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21335_21354__$1))
{var c__4408__auto___21355 = cljs.core.chunk_first.call(null,seq__21335_21354__$1);{
var G__21356 = cljs.core.chunk_rest.call(null,seq__21335_21354__$1);
var G__21357 = c__4408__auto___21355;
var G__21358 = cljs.core.count.call(null,c__4408__auto___21355);
var G__21359 = (0);
seq__21335_21341 = G__21356;
chunk__21336_21342 = G__21357;
count__21337_21343 = G__21358;
i__21338_21344 = G__21359;
continue;
}
} else
{var vec__21340_21360 = cljs.core.first.call(null,seq__21335_21354__$1);var k_21361 = cljs.core.nth.call(null,vec__21340_21360,(0),null);var v_21362 = cljs.core.nth.call(null,vec__21340_21360,(1),null);var m21334_21363 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21334_21363,f.call(null,k_21361),v_21362));
{
var G__21364 = cljs.core.next.call(null,seq__21335_21354__$1);
var G__21365 = null;
var G__21366 = (0);
var G__21367 = (0);
seq__21335_21341 = G__21364;
chunk__21336_21342 = G__21365;
count__21337_21343 = G__21366;
i__21338_21344 = G__21367;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21374_21378 = cljs.core.seq.call(null,ks);var chunk__21375_21379 = null;var count__21376_21380 = (0);var i__21377_21381 = (0);while(true){
if((i__21377_21381 < count__21376_21380))
{var k_21382 = cljs.core._nth.call(null,chunk__21375_21379,i__21377_21381);var m21373_21383 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21373_21383,k_21382,f.call(null,k_21382)));
{
var G__21384 = seq__21374_21378;
var G__21385 = chunk__21375_21379;
var G__21386 = count__21376_21380;
var G__21387 = (i__21377_21381 + (1));
seq__21374_21378 = G__21384;
chunk__21375_21379 = G__21385;
count__21376_21380 = G__21386;
i__21377_21381 = G__21387;
continue;
}
} else
{var temp__4126__auto___21388 = cljs.core.seq.call(null,seq__21374_21378);if(temp__4126__auto___21388)
{var seq__21374_21389__$1 = temp__4126__auto___21388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21374_21389__$1))
{var c__4408__auto___21390 = cljs.core.chunk_first.call(null,seq__21374_21389__$1);{
var G__21391 = cljs.core.chunk_rest.call(null,seq__21374_21389__$1);
var G__21392 = c__4408__auto___21390;
var G__21393 = cljs.core.count.call(null,c__4408__auto___21390);
var G__21394 = (0);
seq__21374_21378 = G__21391;
chunk__21375_21379 = G__21392;
count__21376_21380 = G__21393;
i__21377_21381 = G__21394;
continue;
}
} else
{var k_21395 = cljs.core.first.call(null,seq__21374_21389__$1);var m21373_21396 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21373_21396,k_21395,f.call(null,k_21395)));
{
var G__21397 = cljs.core.next.call(null,seq__21374_21389__$1);
var G__21398 = null;
var G__21399 = (0);
var G__21400 = (0);
seq__21374_21378 = G__21397;
chunk__21375_21379 = G__21398;
count__21376_21380 = G__21399;
i__21377_21381 = G__21400;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21407_21411 = cljs.core.seq.call(null,vs);var chunk__21408_21412 = null;var count__21409_21413 = (0);var i__21410_21414 = (0);while(true){
if((i__21410_21414 < count__21409_21413))
{var v_21415 = cljs.core._nth.call(null,chunk__21408_21412,i__21410_21414);var m21406_21416 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21406_21416,f.call(null,v_21415),v_21415));
{
var G__21417 = seq__21407_21411;
var G__21418 = chunk__21408_21412;
var G__21419 = count__21409_21413;
var G__21420 = (i__21410_21414 + (1));
seq__21407_21411 = G__21417;
chunk__21408_21412 = G__21418;
count__21409_21413 = G__21419;
i__21410_21414 = G__21420;
continue;
}
} else
{var temp__4126__auto___21421 = cljs.core.seq.call(null,seq__21407_21411);if(temp__4126__auto___21421)
{var seq__21407_21422__$1 = temp__4126__auto___21421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21407_21422__$1))
{var c__4408__auto___21423 = cljs.core.chunk_first.call(null,seq__21407_21422__$1);{
var G__21424 = cljs.core.chunk_rest.call(null,seq__21407_21422__$1);
var G__21425 = c__4408__auto___21423;
var G__21426 = cljs.core.count.call(null,c__4408__auto___21423);
var G__21427 = (0);
seq__21407_21411 = G__21424;
chunk__21408_21412 = G__21425;
count__21409_21413 = G__21426;
i__21410_21414 = G__21427;
continue;
}
} else
{var v_21428 = cljs.core.first.call(null,seq__21407_21422__$1);var m21406_21429 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21406_21429,f.call(null,v_21428),v_21428));
{
var G__21430 = cljs.core.next.call(null,seq__21407_21422__$1);
var G__21431 = null;
var G__21432 = (0);
var G__21433 = (0);
seq__21407_21411 = G__21430;
chunk__21408_21412 = G__21431;
count__21409_21413 = G__21432;
i__21410_21414 = G__21433;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21434){var vec__21436 = p__21434;var k = cljs.core.nth.call(null,vec__21436,(0),null);var ks = cljs.core.nthnext.call(null,vec__21436,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21445_21451 = cljs.core.seq.call(null,x);var chunk__21446_21452 = null;var count__21447_21453 = (0);var i__21448_21454 = (0);while(true){
if((i__21448_21454 < count__21447_21453))
{var vec__21449_21455 = cljs.core._nth.call(null,chunk__21446_21452,i__21448_21454);var k_21456 = cljs.core.nth.call(null,vec__21449_21455,(0),null);var v_21457 = cljs.core.nth.call(null,vec__21449_21455,(1),null);var m21444_21458 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21444_21458,((typeof k_21456 === 'string')?cljs.core.keyword.call(null,k_21456):k_21456),keywordize_map.call(null,v_21457)));
{
var G__21459 = seq__21445_21451;
var G__21460 = chunk__21446_21452;
var G__21461 = count__21447_21453;
var G__21462 = (i__21448_21454 + (1));
seq__21445_21451 = G__21459;
chunk__21446_21452 = G__21460;
count__21447_21453 = G__21461;
i__21448_21454 = G__21462;
continue;
}
} else
{var temp__4126__auto___21463 = cljs.core.seq.call(null,seq__21445_21451);if(temp__4126__auto___21463)
{var seq__21445_21464__$1 = temp__4126__auto___21463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21445_21464__$1))
{var c__4408__auto___21465 = cljs.core.chunk_first.call(null,seq__21445_21464__$1);{
var G__21466 = cljs.core.chunk_rest.call(null,seq__21445_21464__$1);
var G__21467 = c__4408__auto___21465;
var G__21468 = cljs.core.count.call(null,c__4408__auto___21465);
var G__21469 = (0);
seq__21445_21451 = G__21466;
chunk__21446_21452 = G__21467;
count__21447_21453 = G__21468;
i__21448_21454 = G__21469;
continue;
}
} else
{var vec__21450_21470 = cljs.core.first.call(null,seq__21445_21464__$1);var k_21471 = cljs.core.nth.call(null,vec__21450_21470,(0),null);var v_21472 = cljs.core.nth.call(null,vec__21450_21470,(1),null);var m21444_21473 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21444_21473,((typeof k_21471 === 'string')?cljs.core.keyword.call(null,k_21471):k_21471),keywordize_map.call(null,v_21472)));
{
var G__21474 = cljs.core.next.call(null,seq__21445_21464__$1);
var G__21475 = null;
var G__21476 = (0);
var G__21477 = (0);
seq__21445_21451 = G__21474;
chunk__21446_21452 = G__21475;
count__21447_21453 = G__21476;
i__21448_21454 = G__21477;
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
var G__21478 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21479 = cljs.core.next.call(null,ks);
m = G__21478;
ks = G__21479;
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
})(),(function (){var iter__4377__auto__ = (function iter__21488(s__21489){return (new cljs.core.LazySeq(null,(function (){var s__21489__$1 = s__21489;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21489__$1);if(temp__4126__auto__)
{var s__21489__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21489__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21489__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21491 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21490 = (0);while(true){
if((i__21490 < size__4376__auto__))
{var vec__21494 = cljs.core._nth.call(null,c__4375__auto__,i__21490);var k = cljs.core.nth.call(null,vec__21494,(0),null);var v = cljs.core.nth.call(null,vec__21494,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21496 = (i__21490 + (1));
i__21490 = G__21496;
continue;
}
} else
{{
var G__21497 = (i__21490 + (1));
i__21490 = G__21497;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21491),iter__21488.call(null,cljs.core.chunk_rest.call(null,s__21489__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21491),null);
}
} else
{var vec__21495 = cljs.core.first.call(null,s__21489__$2);var k = cljs.core.nth.call(null,vec__21495,(0),null);var v = cljs.core.nth.call(null,vec__21495,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21488.call(null,cljs.core.rest.call(null,s__21489__$2)));
} else
{{
var G__21498 = cljs.core.rest.call(null,s__21489__$2);
s__21489__$1 = G__21498;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21499){
var m = cljs.core.first(arglist__21499);
var kvs = cljs.core.rest(arglist__21499);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21500){
var m = cljs.core.first(arglist__21500);
arglist__21500 = cljs.core.next(arglist__21500);
var key_seq = cljs.core.first(arglist__21500);
arglist__21500 = cljs.core.next(arglist__21500);
var f = cljs.core.first(arglist__21500);
var args = cljs.core.rest(arglist__21500);
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
return (function iter__21505(s__21506){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21506__$1 = s__21506;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21506__$1);if(temp__4126__auto__)
{var s__21506__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21506__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21506__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21508 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21507 = (0);while(true){
if((i__21507 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21507);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21508,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21509 = (i__21507 + (1));
i__21507 = G__21509;
continue;
}
} else
{{
var G__21510 = (i__21507 + (1));
i__21507 = G__21510;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),iter__21505.call(null,cljs.core.chunk_rest.call(null,s__21506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),null);
}
} else
{var x = cljs.core.first.call(null,s__21506__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21505.call(null,cljs.core.rest.call(null,s__21506__$2)));
} else
{{
var G__21511 = cljs.core.rest.call(null,s__21506__$2);
s__21506__$1 = G__21511;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21512){
var colls = cljs.core.seq(arglist__21512);
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
var G__21513__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21514 = conj_when.call(null,coll,x);
var G__21515 = cljs.core.first.call(null,xs);
var G__21516 = cljs.core.next.call(null,xs);
coll = G__21514;
x = G__21515;
xs = G__21516;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21513 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21513__delegate.call(this,coll,x,xs);};
G__21513.cljs$lang$maxFixedArity = 2;
G__21513.cljs$lang$applyTo = (function (arglist__21517){
var coll = cljs.core.first(arglist__21517);
arglist__21517 = cljs.core.next(arglist__21517);
var x = cljs.core.first(arglist__21517);
var xs = cljs.core.rest(arglist__21517);
return G__21513__delegate(coll,x,xs);
});
G__21513.cljs$core$IFn$_invoke$arity$variadic = G__21513__delegate;
return G__21513;
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
var G__21519__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21518_SHARP_){return cljs.core.apply.call(null,f,p1__21518_SHARP_,args);
}));
};
var G__21519 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21519__delegate.call(this,a,f,args);};
G__21519.cljs$lang$maxFixedArity = 2;
G__21519.cljs$lang$applyTo = (function (arglist__21520){
var a = cljs.core.first(arglist__21520);
arglist__21520 = cljs.core.next(arglist__21520);
var f = cljs.core.first(arglist__21520);
var args = cljs.core.rest(arglist__21520);
return G__21519__delegate(a,f,args);
});
G__21519.cljs$core$IFn$_invoke$arity$variadic = G__21519__delegate;
return G__21519;
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
var G__21521__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21521 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21521__delegate.call(this,f,arg,args);};
G__21521.cljs$lang$maxFixedArity = 2;
G__21521.cljs$lang$applyTo = (function (arglist__21522){
var f = cljs.core.first(arglist__21522);
arglist__21522 = cljs.core.next(arglist__21522);
var arg = cljs.core.first(arglist__21522);
var args = cljs.core.rest(arglist__21522);
return G__21521__delegate(f,arg,args);
});
G__21521.cljs$core$IFn$_invoke$arity$variadic = G__21521__delegate;
return G__21521;
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
