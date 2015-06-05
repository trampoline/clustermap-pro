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
var G__20918__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20918 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20918__delegate.call(this,m,k,f,x1,x2,xs);};
G__20918.cljs$lang$maxFixedArity = 5;
G__20918.cljs$lang$applyTo = (function (arglist__20919){
var m = cljs.core.first(arglist__20919);
arglist__20919 = cljs.core.next(arglist__20919);
var k = cljs.core.first(arglist__20919);
arglist__20919 = cljs.core.next(arglist__20919);
var f = cljs.core.first(arglist__20919);
arglist__20919 = cljs.core.next(arglist__20919);
var x1 = cljs.core.first(arglist__20919);
arglist__20919 = cljs.core.next(arglist__20919);
var x2 = cljs.core.first(arglist__20919);
var xs = cljs.core.rest(arglist__20919);
return G__20918__delegate(m,k,f,x1,x2,xs);
});
G__20918.cljs$core$IFn$_invoke$arity$variadic = G__20918__delegate;
return G__20918;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20928_20934 = cljs.core.seq.call(null,m);var chunk__20929_20935 = null;var count__20930_20936 = (0);var i__20931_20937 = (0);while(true){
if((i__20931_20937 < count__20930_20936))
{var vec__20932_20938 = cljs.core._nth.call(null,chunk__20929_20935,i__20931_20937);var k_20939 = cljs.core.nth.call(null,vec__20932_20938,(0),null);var v_20940 = cljs.core.nth.call(null,vec__20932_20938,(1),null);var m20927_20941 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20927_20941,k_20939,f.call(null,v_20940)));
{
var G__20942 = seq__20928_20934;
var G__20943 = chunk__20929_20935;
var G__20944 = count__20930_20936;
var G__20945 = (i__20931_20937 + (1));
seq__20928_20934 = G__20942;
chunk__20929_20935 = G__20943;
count__20930_20936 = G__20944;
i__20931_20937 = G__20945;
continue;
}
} else
{var temp__4126__auto___20946 = cljs.core.seq.call(null,seq__20928_20934);if(temp__4126__auto___20946)
{var seq__20928_20947__$1 = temp__4126__auto___20946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20928_20947__$1))
{var c__4408__auto___20948 = cljs.core.chunk_first.call(null,seq__20928_20947__$1);{
var G__20949 = cljs.core.chunk_rest.call(null,seq__20928_20947__$1);
var G__20950 = c__4408__auto___20948;
var G__20951 = cljs.core.count.call(null,c__4408__auto___20948);
var G__20952 = (0);
seq__20928_20934 = G__20949;
chunk__20929_20935 = G__20950;
count__20930_20936 = G__20951;
i__20931_20937 = G__20952;
continue;
}
} else
{var vec__20933_20953 = cljs.core.first.call(null,seq__20928_20947__$1);var k_20954 = cljs.core.nth.call(null,vec__20933_20953,(0),null);var v_20955 = cljs.core.nth.call(null,vec__20933_20953,(1),null);var m20927_20956 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20927_20956,k_20954,f.call(null,v_20955)));
{
var G__20957 = cljs.core.next.call(null,seq__20928_20947__$1);
var G__20958 = null;
var G__20959 = (0);
var G__20960 = (0);
seq__20928_20934 = G__20957;
chunk__20929_20935 = G__20958;
count__20930_20936 = G__20959;
i__20931_20937 = G__20960;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20969_20975 = cljs.core.seq.call(null,m);var chunk__20970_20976 = null;var count__20971_20977 = (0);var i__20972_20978 = (0);while(true){
if((i__20972_20978 < count__20971_20977))
{var vec__20973_20979 = cljs.core._nth.call(null,chunk__20970_20976,i__20972_20978);var k_20980 = cljs.core.nth.call(null,vec__20973_20979,(0),null);var v_20981 = cljs.core.nth.call(null,vec__20973_20979,(1),null);var m20968_20982 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20968_20982,f.call(null,k_20980),v_20981));
{
var G__20983 = seq__20969_20975;
var G__20984 = chunk__20970_20976;
var G__20985 = count__20971_20977;
var G__20986 = (i__20972_20978 + (1));
seq__20969_20975 = G__20983;
chunk__20970_20976 = G__20984;
count__20971_20977 = G__20985;
i__20972_20978 = G__20986;
continue;
}
} else
{var temp__4126__auto___20987 = cljs.core.seq.call(null,seq__20969_20975);if(temp__4126__auto___20987)
{var seq__20969_20988__$1 = temp__4126__auto___20987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20969_20988__$1))
{var c__4408__auto___20989 = cljs.core.chunk_first.call(null,seq__20969_20988__$1);{
var G__20990 = cljs.core.chunk_rest.call(null,seq__20969_20988__$1);
var G__20991 = c__4408__auto___20989;
var G__20992 = cljs.core.count.call(null,c__4408__auto___20989);
var G__20993 = (0);
seq__20969_20975 = G__20990;
chunk__20970_20976 = G__20991;
count__20971_20977 = G__20992;
i__20972_20978 = G__20993;
continue;
}
} else
{var vec__20974_20994 = cljs.core.first.call(null,seq__20969_20988__$1);var k_20995 = cljs.core.nth.call(null,vec__20974_20994,(0),null);var v_20996 = cljs.core.nth.call(null,vec__20974_20994,(1),null);var m20968_20997 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20968_20997,f.call(null,k_20995),v_20996));
{
var G__20998 = cljs.core.next.call(null,seq__20969_20988__$1);
var G__20999 = null;
var G__21000 = (0);
var G__21001 = (0);
seq__20969_20975 = G__20998;
chunk__20970_20976 = G__20999;
count__20971_20977 = G__21000;
i__20972_20978 = G__21001;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21008_21012 = cljs.core.seq.call(null,ks);var chunk__21009_21013 = null;var count__21010_21014 = (0);var i__21011_21015 = (0);while(true){
if((i__21011_21015 < count__21010_21014))
{var k_21016 = cljs.core._nth.call(null,chunk__21009_21013,i__21011_21015);var m21007_21017 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21007_21017,k_21016,f.call(null,k_21016)));
{
var G__21018 = seq__21008_21012;
var G__21019 = chunk__21009_21013;
var G__21020 = count__21010_21014;
var G__21021 = (i__21011_21015 + (1));
seq__21008_21012 = G__21018;
chunk__21009_21013 = G__21019;
count__21010_21014 = G__21020;
i__21011_21015 = G__21021;
continue;
}
} else
{var temp__4126__auto___21022 = cljs.core.seq.call(null,seq__21008_21012);if(temp__4126__auto___21022)
{var seq__21008_21023__$1 = temp__4126__auto___21022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21008_21023__$1))
{var c__4408__auto___21024 = cljs.core.chunk_first.call(null,seq__21008_21023__$1);{
var G__21025 = cljs.core.chunk_rest.call(null,seq__21008_21023__$1);
var G__21026 = c__4408__auto___21024;
var G__21027 = cljs.core.count.call(null,c__4408__auto___21024);
var G__21028 = (0);
seq__21008_21012 = G__21025;
chunk__21009_21013 = G__21026;
count__21010_21014 = G__21027;
i__21011_21015 = G__21028;
continue;
}
} else
{var k_21029 = cljs.core.first.call(null,seq__21008_21023__$1);var m21007_21030 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21007_21030,k_21029,f.call(null,k_21029)));
{
var G__21031 = cljs.core.next.call(null,seq__21008_21023__$1);
var G__21032 = null;
var G__21033 = (0);
var G__21034 = (0);
seq__21008_21012 = G__21031;
chunk__21009_21013 = G__21032;
count__21010_21014 = G__21033;
i__21011_21015 = G__21034;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21041_21045 = cljs.core.seq.call(null,vs);var chunk__21042_21046 = null;var count__21043_21047 = (0);var i__21044_21048 = (0);while(true){
if((i__21044_21048 < count__21043_21047))
{var v_21049 = cljs.core._nth.call(null,chunk__21042_21046,i__21044_21048);var m21040_21050 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21040_21050,f.call(null,v_21049),v_21049));
{
var G__21051 = seq__21041_21045;
var G__21052 = chunk__21042_21046;
var G__21053 = count__21043_21047;
var G__21054 = (i__21044_21048 + (1));
seq__21041_21045 = G__21051;
chunk__21042_21046 = G__21052;
count__21043_21047 = G__21053;
i__21044_21048 = G__21054;
continue;
}
} else
{var temp__4126__auto___21055 = cljs.core.seq.call(null,seq__21041_21045);if(temp__4126__auto___21055)
{var seq__21041_21056__$1 = temp__4126__auto___21055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21041_21056__$1))
{var c__4408__auto___21057 = cljs.core.chunk_first.call(null,seq__21041_21056__$1);{
var G__21058 = cljs.core.chunk_rest.call(null,seq__21041_21056__$1);
var G__21059 = c__4408__auto___21057;
var G__21060 = cljs.core.count.call(null,c__4408__auto___21057);
var G__21061 = (0);
seq__21041_21045 = G__21058;
chunk__21042_21046 = G__21059;
count__21043_21047 = G__21060;
i__21044_21048 = G__21061;
continue;
}
} else
{var v_21062 = cljs.core.first.call(null,seq__21041_21056__$1);var m21040_21063 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21040_21063,f.call(null,v_21062),v_21062));
{
var G__21064 = cljs.core.next.call(null,seq__21041_21056__$1);
var G__21065 = null;
var G__21066 = (0);
var G__21067 = (0);
seq__21041_21045 = G__21064;
chunk__21042_21046 = G__21065;
count__21043_21047 = G__21066;
i__21044_21048 = G__21067;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21068){var vec__21070 = p__21068;var k = cljs.core.nth.call(null,vec__21070,(0),null);var ks = cljs.core.nthnext.call(null,vec__21070,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21079_21085 = cljs.core.seq.call(null,x);var chunk__21080_21086 = null;var count__21081_21087 = (0);var i__21082_21088 = (0);while(true){
if((i__21082_21088 < count__21081_21087))
{var vec__21083_21089 = cljs.core._nth.call(null,chunk__21080_21086,i__21082_21088);var k_21090 = cljs.core.nth.call(null,vec__21083_21089,(0),null);var v_21091 = cljs.core.nth.call(null,vec__21083_21089,(1),null);var m21078_21092 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21078_21092,((typeof k_21090 === 'string')?cljs.core.keyword.call(null,k_21090):k_21090),keywordize_map.call(null,v_21091)));
{
var G__21093 = seq__21079_21085;
var G__21094 = chunk__21080_21086;
var G__21095 = count__21081_21087;
var G__21096 = (i__21082_21088 + (1));
seq__21079_21085 = G__21093;
chunk__21080_21086 = G__21094;
count__21081_21087 = G__21095;
i__21082_21088 = G__21096;
continue;
}
} else
{var temp__4126__auto___21097 = cljs.core.seq.call(null,seq__21079_21085);if(temp__4126__auto___21097)
{var seq__21079_21098__$1 = temp__4126__auto___21097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21079_21098__$1))
{var c__4408__auto___21099 = cljs.core.chunk_first.call(null,seq__21079_21098__$1);{
var G__21100 = cljs.core.chunk_rest.call(null,seq__21079_21098__$1);
var G__21101 = c__4408__auto___21099;
var G__21102 = cljs.core.count.call(null,c__4408__auto___21099);
var G__21103 = (0);
seq__21079_21085 = G__21100;
chunk__21080_21086 = G__21101;
count__21081_21087 = G__21102;
i__21082_21088 = G__21103;
continue;
}
} else
{var vec__21084_21104 = cljs.core.first.call(null,seq__21079_21098__$1);var k_21105 = cljs.core.nth.call(null,vec__21084_21104,(0),null);var v_21106 = cljs.core.nth.call(null,vec__21084_21104,(1),null);var m21078_21107 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21078_21107,((typeof k_21105 === 'string')?cljs.core.keyword.call(null,k_21105):k_21105),keywordize_map.call(null,v_21106)));
{
var G__21108 = cljs.core.next.call(null,seq__21079_21098__$1);
var G__21109 = null;
var G__21110 = (0);
var G__21111 = (0);
seq__21079_21085 = G__21108;
chunk__21080_21086 = G__21109;
count__21081_21087 = G__21110;
i__21082_21088 = G__21111;
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
var G__21112 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21113 = cljs.core.next.call(null,ks);
m = G__21112;
ks = G__21113;
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
})(),(function (){var iter__4377__auto__ = (function iter__21122(s__21123){return (new cljs.core.LazySeq(null,(function (){var s__21123__$1 = s__21123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21123__$1);if(temp__4126__auto__)
{var s__21123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21123__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21123__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21125 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21124 = (0);while(true){
if((i__21124 < size__4376__auto__))
{var vec__21128 = cljs.core._nth.call(null,c__4375__auto__,i__21124);var k = cljs.core.nth.call(null,vec__21128,(0),null);var v = cljs.core.nth.call(null,vec__21128,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21130 = (i__21124 + (1));
i__21124 = G__21130;
continue;
}
} else
{{
var G__21131 = (i__21124 + (1));
i__21124 = G__21131;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21125),iter__21122.call(null,cljs.core.chunk_rest.call(null,s__21123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21125),null);
}
} else
{var vec__21129 = cljs.core.first.call(null,s__21123__$2);var k = cljs.core.nth.call(null,vec__21129,(0),null);var v = cljs.core.nth.call(null,vec__21129,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21122.call(null,cljs.core.rest.call(null,s__21123__$2)));
} else
{{
var G__21132 = cljs.core.rest.call(null,s__21123__$2);
s__21123__$1 = G__21132;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21133){
var m = cljs.core.first(arglist__21133);
var kvs = cljs.core.rest(arglist__21133);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21134){
var m = cljs.core.first(arglist__21134);
arglist__21134 = cljs.core.next(arglist__21134);
var key_seq = cljs.core.first(arglist__21134);
arglist__21134 = cljs.core.next(arglist__21134);
var f = cljs.core.first(arglist__21134);
var args = cljs.core.rest(arglist__21134);
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
return (function iter__21139(s__21140){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21140__$1 = s__21140;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21140__$1);if(temp__4126__auto__)
{var s__21140__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21140__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21140__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21142 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21141 = (0);while(true){
if((i__21141 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21141);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21142,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21143 = (i__21141 + (1));
i__21141 = G__21143;
continue;
}
} else
{{
var G__21144 = (i__21141 + (1));
i__21141 = G__21144;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21142),iter__21139.call(null,cljs.core.chunk_rest.call(null,s__21140__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21142),null);
}
} else
{var x = cljs.core.first.call(null,s__21140__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21139.call(null,cljs.core.rest.call(null,s__21140__$2)));
} else
{{
var G__21145 = cljs.core.rest.call(null,s__21140__$2);
s__21140__$1 = G__21145;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21146){
var colls = cljs.core.seq(arglist__21146);
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
var G__21147__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21148 = conj_when.call(null,coll,x);
var G__21149 = cljs.core.first.call(null,xs);
var G__21150 = cljs.core.next.call(null,xs);
coll = G__21148;
x = G__21149;
xs = G__21150;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21147 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21147__delegate.call(this,coll,x,xs);};
G__21147.cljs$lang$maxFixedArity = 2;
G__21147.cljs$lang$applyTo = (function (arglist__21151){
var coll = cljs.core.first(arglist__21151);
arglist__21151 = cljs.core.next(arglist__21151);
var x = cljs.core.first(arglist__21151);
var xs = cljs.core.rest(arglist__21151);
return G__21147__delegate(coll,x,xs);
});
G__21147.cljs$core$IFn$_invoke$arity$variadic = G__21147__delegate;
return G__21147;
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
var G__21153__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21152_SHARP_){return cljs.core.apply.call(null,f,p1__21152_SHARP_,args);
}));
};
var G__21153 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21153__delegate.call(this,a,f,args);};
G__21153.cljs$lang$maxFixedArity = 2;
G__21153.cljs$lang$applyTo = (function (arglist__21154){
var a = cljs.core.first(arglist__21154);
arglist__21154 = cljs.core.next(arglist__21154);
var f = cljs.core.first(arglist__21154);
var args = cljs.core.rest(arglist__21154);
return G__21153__delegate(a,f,args);
});
G__21153.cljs$core$IFn$_invoke$arity$variadic = G__21153__delegate;
return G__21153;
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
var G__21155__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21155 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21155__delegate.call(this,f,arg,args);};
G__21155.cljs$lang$maxFixedArity = 2;
G__21155.cljs$lang$applyTo = (function (arglist__21156){
var f = cljs.core.first(arglist__21156);
arglist__21156 = cljs.core.next(arglist__21156);
var arg = cljs.core.first(arglist__21156);
var args = cljs.core.rest(arglist__21156);
return G__21155__delegate(f,arg,args);
});
G__21155.cljs$core$IFn$_invoke$arity$variadic = G__21155__delegate;
return G__21155;
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
