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
var G__20922__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20922 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20922__delegate.call(this,m,k,f,x1,x2,xs);};
G__20922.cljs$lang$maxFixedArity = 5;
G__20922.cljs$lang$applyTo = (function (arglist__20923){
var m = cljs.core.first(arglist__20923);
arglist__20923 = cljs.core.next(arglist__20923);
var k = cljs.core.first(arglist__20923);
arglist__20923 = cljs.core.next(arglist__20923);
var f = cljs.core.first(arglist__20923);
arglist__20923 = cljs.core.next(arglist__20923);
var x1 = cljs.core.first(arglist__20923);
arglist__20923 = cljs.core.next(arglist__20923);
var x2 = cljs.core.first(arglist__20923);
var xs = cljs.core.rest(arglist__20923);
return G__20922__delegate(m,k,f,x1,x2,xs);
});
G__20922.cljs$core$IFn$_invoke$arity$variadic = G__20922__delegate;
return G__20922;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20932_20938 = cljs.core.seq.call(null,m);var chunk__20933_20939 = null;var count__20934_20940 = (0);var i__20935_20941 = (0);while(true){
if((i__20935_20941 < count__20934_20940))
{var vec__20936_20942 = cljs.core._nth.call(null,chunk__20933_20939,i__20935_20941);var k_20943 = cljs.core.nth.call(null,vec__20936_20942,(0),null);var v_20944 = cljs.core.nth.call(null,vec__20936_20942,(1),null);var m20931_20945 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20931_20945,k_20943,f.call(null,v_20944)));
{
var G__20946 = seq__20932_20938;
var G__20947 = chunk__20933_20939;
var G__20948 = count__20934_20940;
var G__20949 = (i__20935_20941 + (1));
seq__20932_20938 = G__20946;
chunk__20933_20939 = G__20947;
count__20934_20940 = G__20948;
i__20935_20941 = G__20949;
continue;
}
} else
{var temp__4126__auto___20950 = cljs.core.seq.call(null,seq__20932_20938);if(temp__4126__auto___20950)
{var seq__20932_20951__$1 = temp__4126__auto___20950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20932_20951__$1))
{var c__4408__auto___20952 = cljs.core.chunk_first.call(null,seq__20932_20951__$1);{
var G__20953 = cljs.core.chunk_rest.call(null,seq__20932_20951__$1);
var G__20954 = c__4408__auto___20952;
var G__20955 = cljs.core.count.call(null,c__4408__auto___20952);
var G__20956 = (0);
seq__20932_20938 = G__20953;
chunk__20933_20939 = G__20954;
count__20934_20940 = G__20955;
i__20935_20941 = G__20956;
continue;
}
} else
{var vec__20937_20957 = cljs.core.first.call(null,seq__20932_20951__$1);var k_20958 = cljs.core.nth.call(null,vec__20937_20957,(0),null);var v_20959 = cljs.core.nth.call(null,vec__20937_20957,(1),null);var m20931_20960 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20931_20960,k_20958,f.call(null,v_20959)));
{
var G__20961 = cljs.core.next.call(null,seq__20932_20951__$1);
var G__20962 = null;
var G__20963 = (0);
var G__20964 = (0);
seq__20932_20938 = G__20961;
chunk__20933_20939 = G__20962;
count__20934_20940 = G__20963;
i__20935_20941 = G__20964;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20973_20979 = cljs.core.seq.call(null,m);var chunk__20974_20980 = null;var count__20975_20981 = (0);var i__20976_20982 = (0);while(true){
if((i__20976_20982 < count__20975_20981))
{var vec__20977_20983 = cljs.core._nth.call(null,chunk__20974_20980,i__20976_20982);var k_20984 = cljs.core.nth.call(null,vec__20977_20983,(0),null);var v_20985 = cljs.core.nth.call(null,vec__20977_20983,(1),null);var m20972_20986 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20972_20986,f.call(null,k_20984),v_20985));
{
var G__20987 = seq__20973_20979;
var G__20988 = chunk__20974_20980;
var G__20989 = count__20975_20981;
var G__20990 = (i__20976_20982 + (1));
seq__20973_20979 = G__20987;
chunk__20974_20980 = G__20988;
count__20975_20981 = G__20989;
i__20976_20982 = G__20990;
continue;
}
} else
{var temp__4126__auto___20991 = cljs.core.seq.call(null,seq__20973_20979);if(temp__4126__auto___20991)
{var seq__20973_20992__$1 = temp__4126__auto___20991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20973_20992__$1))
{var c__4408__auto___20993 = cljs.core.chunk_first.call(null,seq__20973_20992__$1);{
var G__20994 = cljs.core.chunk_rest.call(null,seq__20973_20992__$1);
var G__20995 = c__4408__auto___20993;
var G__20996 = cljs.core.count.call(null,c__4408__auto___20993);
var G__20997 = (0);
seq__20973_20979 = G__20994;
chunk__20974_20980 = G__20995;
count__20975_20981 = G__20996;
i__20976_20982 = G__20997;
continue;
}
} else
{var vec__20978_20998 = cljs.core.first.call(null,seq__20973_20992__$1);var k_20999 = cljs.core.nth.call(null,vec__20978_20998,(0),null);var v_21000 = cljs.core.nth.call(null,vec__20978_20998,(1),null);var m20972_21001 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20972_21001,f.call(null,k_20999),v_21000));
{
var G__21002 = cljs.core.next.call(null,seq__20973_20992__$1);
var G__21003 = null;
var G__21004 = (0);
var G__21005 = (0);
seq__20973_20979 = G__21002;
chunk__20974_20980 = G__21003;
count__20975_20981 = G__21004;
i__20976_20982 = G__21005;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21012_21016 = cljs.core.seq.call(null,ks);var chunk__21013_21017 = null;var count__21014_21018 = (0);var i__21015_21019 = (0);while(true){
if((i__21015_21019 < count__21014_21018))
{var k_21020 = cljs.core._nth.call(null,chunk__21013_21017,i__21015_21019);var m21011_21021 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21011_21021,k_21020,f.call(null,k_21020)));
{
var G__21022 = seq__21012_21016;
var G__21023 = chunk__21013_21017;
var G__21024 = count__21014_21018;
var G__21025 = (i__21015_21019 + (1));
seq__21012_21016 = G__21022;
chunk__21013_21017 = G__21023;
count__21014_21018 = G__21024;
i__21015_21019 = G__21025;
continue;
}
} else
{var temp__4126__auto___21026 = cljs.core.seq.call(null,seq__21012_21016);if(temp__4126__auto___21026)
{var seq__21012_21027__$1 = temp__4126__auto___21026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21012_21027__$1))
{var c__4408__auto___21028 = cljs.core.chunk_first.call(null,seq__21012_21027__$1);{
var G__21029 = cljs.core.chunk_rest.call(null,seq__21012_21027__$1);
var G__21030 = c__4408__auto___21028;
var G__21031 = cljs.core.count.call(null,c__4408__auto___21028);
var G__21032 = (0);
seq__21012_21016 = G__21029;
chunk__21013_21017 = G__21030;
count__21014_21018 = G__21031;
i__21015_21019 = G__21032;
continue;
}
} else
{var k_21033 = cljs.core.first.call(null,seq__21012_21027__$1);var m21011_21034 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21011_21034,k_21033,f.call(null,k_21033)));
{
var G__21035 = cljs.core.next.call(null,seq__21012_21027__$1);
var G__21036 = null;
var G__21037 = (0);
var G__21038 = (0);
seq__21012_21016 = G__21035;
chunk__21013_21017 = G__21036;
count__21014_21018 = G__21037;
i__21015_21019 = G__21038;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21045_21049 = cljs.core.seq.call(null,vs);var chunk__21046_21050 = null;var count__21047_21051 = (0);var i__21048_21052 = (0);while(true){
if((i__21048_21052 < count__21047_21051))
{var v_21053 = cljs.core._nth.call(null,chunk__21046_21050,i__21048_21052);var m21044_21054 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21044_21054,f.call(null,v_21053),v_21053));
{
var G__21055 = seq__21045_21049;
var G__21056 = chunk__21046_21050;
var G__21057 = count__21047_21051;
var G__21058 = (i__21048_21052 + (1));
seq__21045_21049 = G__21055;
chunk__21046_21050 = G__21056;
count__21047_21051 = G__21057;
i__21048_21052 = G__21058;
continue;
}
} else
{var temp__4126__auto___21059 = cljs.core.seq.call(null,seq__21045_21049);if(temp__4126__auto___21059)
{var seq__21045_21060__$1 = temp__4126__auto___21059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21045_21060__$1))
{var c__4408__auto___21061 = cljs.core.chunk_first.call(null,seq__21045_21060__$1);{
var G__21062 = cljs.core.chunk_rest.call(null,seq__21045_21060__$1);
var G__21063 = c__4408__auto___21061;
var G__21064 = cljs.core.count.call(null,c__4408__auto___21061);
var G__21065 = (0);
seq__21045_21049 = G__21062;
chunk__21046_21050 = G__21063;
count__21047_21051 = G__21064;
i__21048_21052 = G__21065;
continue;
}
} else
{var v_21066 = cljs.core.first.call(null,seq__21045_21060__$1);var m21044_21067 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21044_21067,f.call(null,v_21066),v_21066));
{
var G__21068 = cljs.core.next.call(null,seq__21045_21060__$1);
var G__21069 = null;
var G__21070 = (0);
var G__21071 = (0);
seq__21045_21049 = G__21068;
chunk__21046_21050 = G__21069;
count__21047_21051 = G__21070;
i__21048_21052 = G__21071;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21072){var vec__21074 = p__21072;var k = cljs.core.nth.call(null,vec__21074,(0),null);var ks = cljs.core.nthnext.call(null,vec__21074,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21083_21089 = cljs.core.seq.call(null,x);var chunk__21084_21090 = null;var count__21085_21091 = (0);var i__21086_21092 = (0);while(true){
if((i__21086_21092 < count__21085_21091))
{var vec__21087_21093 = cljs.core._nth.call(null,chunk__21084_21090,i__21086_21092);var k_21094 = cljs.core.nth.call(null,vec__21087_21093,(0),null);var v_21095 = cljs.core.nth.call(null,vec__21087_21093,(1),null);var m21082_21096 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21082_21096,((typeof k_21094 === 'string')?cljs.core.keyword.call(null,k_21094):k_21094),keywordize_map.call(null,v_21095)));
{
var G__21097 = seq__21083_21089;
var G__21098 = chunk__21084_21090;
var G__21099 = count__21085_21091;
var G__21100 = (i__21086_21092 + (1));
seq__21083_21089 = G__21097;
chunk__21084_21090 = G__21098;
count__21085_21091 = G__21099;
i__21086_21092 = G__21100;
continue;
}
} else
{var temp__4126__auto___21101 = cljs.core.seq.call(null,seq__21083_21089);if(temp__4126__auto___21101)
{var seq__21083_21102__$1 = temp__4126__auto___21101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21083_21102__$1))
{var c__4408__auto___21103 = cljs.core.chunk_first.call(null,seq__21083_21102__$1);{
var G__21104 = cljs.core.chunk_rest.call(null,seq__21083_21102__$1);
var G__21105 = c__4408__auto___21103;
var G__21106 = cljs.core.count.call(null,c__4408__auto___21103);
var G__21107 = (0);
seq__21083_21089 = G__21104;
chunk__21084_21090 = G__21105;
count__21085_21091 = G__21106;
i__21086_21092 = G__21107;
continue;
}
} else
{var vec__21088_21108 = cljs.core.first.call(null,seq__21083_21102__$1);var k_21109 = cljs.core.nth.call(null,vec__21088_21108,(0),null);var v_21110 = cljs.core.nth.call(null,vec__21088_21108,(1),null);var m21082_21111 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21082_21111,((typeof k_21109 === 'string')?cljs.core.keyword.call(null,k_21109):k_21109),keywordize_map.call(null,v_21110)));
{
var G__21112 = cljs.core.next.call(null,seq__21083_21102__$1);
var G__21113 = null;
var G__21114 = (0);
var G__21115 = (0);
seq__21083_21089 = G__21112;
chunk__21084_21090 = G__21113;
count__21085_21091 = G__21114;
i__21086_21092 = G__21115;
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
var G__21116 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21117 = cljs.core.next.call(null,ks);
m = G__21116;
ks = G__21117;
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
})(),(function (){var iter__4377__auto__ = (function iter__21126(s__21127){return (new cljs.core.LazySeq(null,(function (){var s__21127__$1 = s__21127;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21127__$1);if(temp__4126__auto__)
{var s__21127__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21127__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21127__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21129 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21128 = (0);while(true){
if((i__21128 < size__4376__auto__))
{var vec__21132 = cljs.core._nth.call(null,c__4375__auto__,i__21128);var k = cljs.core.nth.call(null,vec__21132,(0),null);var v = cljs.core.nth.call(null,vec__21132,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21134 = (i__21128 + (1));
i__21128 = G__21134;
continue;
}
} else
{{
var G__21135 = (i__21128 + (1));
i__21128 = G__21135;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21129),iter__21126.call(null,cljs.core.chunk_rest.call(null,s__21127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21129),null);
}
} else
{var vec__21133 = cljs.core.first.call(null,s__21127__$2);var k = cljs.core.nth.call(null,vec__21133,(0),null);var v = cljs.core.nth.call(null,vec__21133,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21126.call(null,cljs.core.rest.call(null,s__21127__$2)));
} else
{{
var G__21136 = cljs.core.rest.call(null,s__21127__$2);
s__21127__$1 = G__21136;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21137){
var m = cljs.core.first(arglist__21137);
var kvs = cljs.core.rest(arglist__21137);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21138){
var m = cljs.core.first(arglist__21138);
arglist__21138 = cljs.core.next(arglist__21138);
var key_seq = cljs.core.first(arglist__21138);
arglist__21138 = cljs.core.next(arglist__21138);
var f = cljs.core.first(arglist__21138);
var args = cljs.core.rest(arglist__21138);
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
return (function iter__21143(s__21144){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21144__$1 = s__21144;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21144__$1);if(temp__4126__auto__)
{var s__21144__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21144__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21144__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21146 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21145 = (0);while(true){
if((i__21145 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21145);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21146,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21147 = (i__21145 + (1));
i__21145 = G__21147;
continue;
}
} else
{{
var G__21148 = (i__21145 + (1));
i__21145 = G__21148;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21146),iter__21143.call(null,cljs.core.chunk_rest.call(null,s__21144__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21146),null);
}
} else
{var x = cljs.core.first.call(null,s__21144__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21143.call(null,cljs.core.rest.call(null,s__21144__$2)));
} else
{{
var G__21149 = cljs.core.rest.call(null,s__21144__$2);
s__21144__$1 = G__21149;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21150){
var colls = cljs.core.seq(arglist__21150);
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
var G__21151__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21152 = conj_when.call(null,coll,x);
var G__21153 = cljs.core.first.call(null,xs);
var G__21154 = cljs.core.next.call(null,xs);
coll = G__21152;
x = G__21153;
xs = G__21154;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21151 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21151__delegate.call(this,coll,x,xs);};
G__21151.cljs$lang$maxFixedArity = 2;
G__21151.cljs$lang$applyTo = (function (arglist__21155){
var coll = cljs.core.first(arglist__21155);
arglist__21155 = cljs.core.next(arglist__21155);
var x = cljs.core.first(arglist__21155);
var xs = cljs.core.rest(arglist__21155);
return G__21151__delegate(coll,x,xs);
});
G__21151.cljs$core$IFn$_invoke$arity$variadic = G__21151__delegate;
return G__21151;
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
var G__21157__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21156_SHARP_){return cljs.core.apply.call(null,f,p1__21156_SHARP_,args);
}));
};
var G__21157 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21157__delegate.call(this,a,f,args);};
G__21157.cljs$lang$maxFixedArity = 2;
G__21157.cljs$lang$applyTo = (function (arglist__21158){
var a = cljs.core.first(arglist__21158);
arglist__21158 = cljs.core.next(arglist__21158);
var f = cljs.core.first(arglist__21158);
var args = cljs.core.rest(arglist__21158);
return G__21157__delegate(a,f,args);
});
G__21157.cljs$core$IFn$_invoke$arity$variadic = G__21157__delegate;
return G__21157;
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
var G__21159__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21159 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21159__delegate.call(this,f,arg,args);};
G__21159.cljs$lang$maxFixedArity = 2;
G__21159.cljs$lang$applyTo = (function (arglist__21160){
var f = cljs.core.first(arglist__21160);
arglist__21160 = cljs.core.next(arglist__21160);
var arg = cljs.core.first(arglist__21160);
var args = cljs.core.rest(arglist__21160);
return G__21159__delegate(f,arg,args);
});
G__21159.cljs$core$IFn$_invoke$arity$variadic = G__21159__delegate;
return G__21159;
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
