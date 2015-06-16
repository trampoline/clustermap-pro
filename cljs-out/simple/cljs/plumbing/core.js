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
var G__21884__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21884 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21884__delegate.call(this,m,k,f,x1,x2,xs);};
G__21884.cljs$lang$maxFixedArity = 5;
G__21884.cljs$lang$applyTo = (function (arglist__21885){
var m = cljs.core.first(arglist__21885);
arglist__21885 = cljs.core.next(arglist__21885);
var k = cljs.core.first(arglist__21885);
arglist__21885 = cljs.core.next(arglist__21885);
var f = cljs.core.first(arglist__21885);
arglist__21885 = cljs.core.next(arglist__21885);
var x1 = cljs.core.first(arglist__21885);
arglist__21885 = cljs.core.next(arglist__21885);
var x2 = cljs.core.first(arglist__21885);
var xs = cljs.core.rest(arglist__21885);
return G__21884__delegate(m,k,f,x1,x2,xs);
});
G__21884.cljs$core$IFn$_invoke$arity$variadic = G__21884__delegate;
return G__21884;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21894_21900 = cljs.core.seq.call(null,m);var chunk__21895_21901 = null;var count__21896_21902 = (0);var i__21897_21903 = (0);while(true){
if((i__21897_21903 < count__21896_21902))
{var vec__21898_21904 = cljs.core._nth.call(null,chunk__21895_21901,i__21897_21903);var k_21905 = cljs.core.nth.call(null,vec__21898_21904,(0),null);var v_21906 = cljs.core.nth.call(null,vec__21898_21904,(1),null);var m21893_21907 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21893_21907,k_21905,f.call(null,v_21906)));
{
var G__21908 = seq__21894_21900;
var G__21909 = chunk__21895_21901;
var G__21910 = count__21896_21902;
var G__21911 = (i__21897_21903 + (1));
seq__21894_21900 = G__21908;
chunk__21895_21901 = G__21909;
count__21896_21902 = G__21910;
i__21897_21903 = G__21911;
continue;
}
} else
{var temp__4126__auto___21912 = cljs.core.seq.call(null,seq__21894_21900);if(temp__4126__auto___21912)
{var seq__21894_21913__$1 = temp__4126__auto___21912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21894_21913__$1))
{var c__4408__auto___21914 = cljs.core.chunk_first.call(null,seq__21894_21913__$1);{
var G__21915 = cljs.core.chunk_rest.call(null,seq__21894_21913__$1);
var G__21916 = c__4408__auto___21914;
var G__21917 = cljs.core.count.call(null,c__4408__auto___21914);
var G__21918 = (0);
seq__21894_21900 = G__21915;
chunk__21895_21901 = G__21916;
count__21896_21902 = G__21917;
i__21897_21903 = G__21918;
continue;
}
} else
{var vec__21899_21919 = cljs.core.first.call(null,seq__21894_21913__$1);var k_21920 = cljs.core.nth.call(null,vec__21899_21919,(0),null);var v_21921 = cljs.core.nth.call(null,vec__21899_21919,(1),null);var m21893_21922 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21893_21922,k_21920,f.call(null,v_21921)));
{
var G__21923 = cljs.core.next.call(null,seq__21894_21913__$1);
var G__21924 = null;
var G__21925 = (0);
var G__21926 = (0);
seq__21894_21900 = G__21923;
chunk__21895_21901 = G__21924;
count__21896_21902 = G__21925;
i__21897_21903 = G__21926;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21935_21941 = cljs.core.seq.call(null,m);var chunk__21936_21942 = null;var count__21937_21943 = (0);var i__21938_21944 = (0);while(true){
if((i__21938_21944 < count__21937_21943))
{var vec__21939_21945 = cljs.core._nth.call(null,chunk__21936_21942,i__21938_21944);var k_21946 = cljs.core.nth.call(null,vec__21939_21945,(0),null);var v_21947 = cljs.core.nth.call(null,vec__21939_21945,(1),null);var m21934_21948 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21934_21948,f.call(null,k_21946),v_21947));
{
var G__21949 = seq__21935_21941;
var G__21950 = chunk__21936_21942;
var G__21951 = count__21937_21943;
var G__21952 = (i__21938_21944 + (1));
seq__21935_21941 = G__21949;
chunk__21936_21942 = G__21950;
count__21937_21943 = G__21951;
i__21938_21944 = G__21952;
continue;
}
} else
{var temp__4126__auto___21953 = cljs.core.seq.call(null,seq__21935_21941);if(temp__4126__auto___21953)
{var seq__21935_21954__$1 = temp__4126__auto___21953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21935_21954__$1))
{var c__4408__auto___21955 = cljs.core.chunk_first.call(null,seq__21935_21954__$1);{
var G__21956 = cljs.core.chunk_rest.call(null,seq__21935_21954__$1);
var G__21957 = c__4408__auto___21955;
var G__21958 = cljs.core.count.call(null,c__4408__auto___21955);
var G__21959 = (0);
seq__21935_21941 = G__21956;
chunk__21936_21942 = G__21957;
count__21937_21943 = G__21958;
i__21938_21944 = G__21959;
continue;
}
} else
{var vec__21940_21960 = cljs.core.first.call(null,seq__21935_21954__$1);var k_21961 = cljs.core.nth.call(null,vec__21940_21960,(0),null);var v_21962 = cljs.core.nth.call(null,vec__21940_21960,(1),null);var m21934_21963 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21934_21963,f.call(null,k_21961),v_21962));
{
var G__21964 = cljs.core.next.call(null,seq__21935_21954__$1);
var G__21965 = null;
var G__21966 = (0);
var G__21967 = (0);
seq__21935_21941 = G__21964;
chunk__21936_21942 = G__21965;
count__21937_21943 = G__21966;
i__21938_21944 = G__21967;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21974_21978 = cljs.core.seq.call(null,ks);var chunk__21975_21979 = null;var count__21976_21980 = (0);var i__21977_21981 = (0);while(true){
if((i__21977_21981 < count__21976_21980))
{var k_21982 = cljs.core._nth.call(null,chunk__21975_21979,i__21977_21981);var m21973_21983 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21973_21983,k_21982,f.call(null,k_21982)));
{
var G__21984 = seq__21974_21978;
var G__21985 = chunk__21975_21979;
var G__21986 = count__21976_21980;
var G__21987 = (i__21977_21981 + (1));
seq__21974_21978 = G__21984;
chunk__21975_21979 = G__21985;
count__21976_21980 = G__21986;
i__21977_21981 = G__21987;
continue;
}
} else
{var temp__4126__auto___21988 = cljs.core.seq.call(null,seq__21974_21978);if(temp__4126__auto___21988)
{var seq__21974_21989__$1 = temp__4126__auto___21988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21974_21989__$1))
{var c__4408__auto___21990 = cljs.core.chunk_first.call(null,seq__21974_21989__$1);{
var G__21991 = cljs.core.chunk_rest.call(null,seq__21974_21989__$1);
var G__21992 = c__4408__auto___21990;
var G__21993 = cljs.core.count.call(null,c__4408__auto___21990);
var G__21994 = (0);
seq__21974_21978 = G__21991;
chunk__21975_21979 = G__21992;
count__21976_21980 = G__21993;
i__21977_21981 = G__21994;
continue;
}
} else
{var k_21995 = cljs.core.first.call(null,seq__21974_21989__$1);var m21973_21996 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21973_21996,k_21995,f.call(null,k_21995)));
{
var G__21997 = cljs.core.next.call(null,seq__21974_21989__$1);
var G__21998 = null;
var G__21999 = (0);
var G__22000 = (0);
seq__21974_21978 = G__21997;
chunk__21975_21979 = G__21998;
count__21976_21980 = G__21999;
i__21977_21981 = G__22000;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22007_22011 = cljs.core.seq.call(null,vs);var chunk__22008_22012 = null;var count__22009_22013 = (0);var i__22010_22014 = (0);while(true){
if((i__22010_22014 < count__22009_22013))
{var v_22015 = cljs.core._nth.call(null,chunk__22008_22012,i__22010_22014);var m22006_22016 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22006_22016,f.call(null,v_22015),v_22015));
{
var G__22017 = seq__22007_22011;
var G__22018 = chunk__22008_22012;
var G__22019 = count__22009_22013;
var G__22020 = (i__22010_22014 + (1));
seq__22007_22011 = G__22017;
chunk__22008_22012 = G__22018;
count__22009_22013 = G__22019;
i__22010_22014 = G__22020;
continue;
}
} else
{var temp__4126__auto___22021 = cljs.core.seq.call(null,seq__22007_22011);if(temp__4126__auto___22021)
{var seq__22007_22022__$1 = temp__4126__auto___22021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22007_22022__$1))
{var c__4408__auto___22023 = cljs.core.chunk_first.call(null,seq__22007_22022__$1);{
var G__22024 = cljs.core.chunk_rest.call(null,seq__22007_22022__$1);
var G__22025 = c__4408__auto___22023;
var G__22026 = cljs.core.count.call(null,c__4408__auto___22023);
var G__22027 = (0);
seq__22007_22011 = G__22024;
chunk__22008_22012 = G__22025;
count__22009_22013 = G__22026;
i__22010_22014 = G__22027;
continue;
}
} else
{var v_22028 = cljs.core.first.call(null,seq__22007_22022__$1);var m22006_22029 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22006_22029,f.call(null,v_22028),v_22028));
{
var G__22030 = cljs.core.next.call(null,seq__22007_22022__$1);
var G__22031 = null;
var G__22032 = (0);
var G__22033 = (0);
seq__22007_22011 = G__22030;
chunk__22008_22012 = G__22031;
count__22009_22013 = G__22032;
i__22010_22014 = G__22033;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22034){var vec__22036 = p__22034;var k = cljs.core.nth.call(null,vec__22036,(0),null);var ks = cljs.core.nthnext.call(null,vec__22036,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22045_22051 = cljs.core.seq.call(null,x);var chunk__22046_22052 = null;var count__22047_22053 = (0);var i__22048_22054 = (0);while(true){
if((i__22048_22054 < count__22047_22053))
{var vec__22049_22055 = cljs.core._nth.call(null,chunk__22046_22052,i__22048_22054);var k_22056 = cljs.core.nth.call(null,vec__22049_22055,(0),null);var v_22057 = cljs.core.nth.call(null,vec__22049_22055,(1),null);var m22044_22058 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22044_22058,((typeof k_22056 === 'string')?cljs.core.keyword.call(null,k_22056):k_22056),keywordize_map.call(null,v_22057)));
{
var G__22059 = seq__22045_22051;
var G__22060 = chunk__22046_22052;
var G__22061 = count__22047_22053;
var G__22062 = (i__22048_22054 + (1));
seq__22045_22051 = G__22059;
chunk__22046_22052 = G__22060;
count__22047_22053 = G__22061;
i__22048_22054 = G__22062;
continue;
}
} else
{var temp__4126__auto___22063 = cljs.core.seq.call(null,seq__22045_22051);if(temp__4126__auto___22063)
{var seq__22045_22064__$1 = temp__4126__auto___22063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22045_22064__$1))
{var c__4408__auto___22065 = cljs.core.chunk_first.call(null,seq__22045_22064__$1);{
var G__22066 = cljs.core.chunk_rest.call(null,seq__22045_22064__$1);
var G__22067 = c__4408__auto___22065;
var G__22068 = cljs.core.count.call(null,c__4408__auto___22065);
var G__22069 = (0);
seq__22045_22051 = G__22066;
chunk__22046_22052 = G__22067;
count__22047_22053 = G__22068;
i__22048_22054 = G__22069;
continue;
}
} else
{var vec__22050_22070 = cljs.core.first.call(null,seq__22045_22064__$1);var k_22071 = cljs.core.nth.call(null,vec__22050_22070,(0),null);var v_22072 = cljs.core.nth.call(null,vec__22050_22070,(1),null);var m22044_22073 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22044_22073,((typeof k_22071 === 'string')?cljs.core.keyword.call(null,k_22071):k_22071),keywordize_map.call(null,v_22072)));
{
var G__22074 = cljs.core.next.call(null,seq__22045_22064__$1);
var G__22075 = null;
var G__22076 = (0);
var G__22077 = (0);
seq__22045_22051 = G__22074;
chunk__22046_22052 = G__22075;
count__22047_22053 = G__22076;
i__22048_22054 = G__22077;
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
var G__22078 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22079 = cljs.core.next.call(null,ks);
m = G__22078;
ks = G__22079;
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
})(),(function (){var iter__4377__auto__ = (function iter__22088(s__22089){return (new cljs.core.LazySeq(null,(function (){var s__22089__$1 = s__22089;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22089__$1);if(temp__4126__auto__)
{var s__22089__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22089__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22089__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22091 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22090 = (0);while(true){
if((i__22090 < size__4376__auto__))
{var vec__22094 = cljs.core._nth.call(null,c__4375__auto__,i__22090);var k = cljs.core.nth.call(null,vec__22094,(0),null);var v = cljs.core.nth.call(null,vec__22094,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22096 = (i__22090 + (1));
i__22090 = G__22096;
continue;
}
} else
{{
var G__22097 = (i__22090 + (1));
i__22090 = G__22097;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22091),iter__22088.call(null,cljs.core.chunk_rest.call(null,s__22089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22091),null);
}
} else
{var vec__22095 = cljs.core.first.call(null,s__22089__$2);var k = cljs.core.nth.call(null,vec__22095,(0),null);var v = cljs.core.nth.call(null,vec__22095,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22088.call(null,cljs.core.rest.call(null,s__22089__$2)));
} else
{{
var G__22098 = cljs.core.rest.call(null,s__22089__$2);
s__22089__$1 = G__22098;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22099){
var m = cljs.core.first(arglist__22099);
var kvs = cljs.core.rest(arglist__22099);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22100){
var m = cljs.core.first(arglist__22100);
arglist__22100 = cljs.core.next(arglist__22100);
var key_seq = cljs.core.first(arglist__22100);
arglist__22100 = cljs.core.next(arglist__22100);
var f = cljs.core.first(arglist__22100);
var args = cljs.core.rest(arglist__22100);
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
return (function iter__22105(s__22106){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22106__$1 = s__22106;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22106__$1);if(temp__4126__auto__)
{var s__22106__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22106__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22106__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22108 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22107 = (0);while(true){
if((i__22107 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22107);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22108,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22109 = (i__22107 + (1));
i__22107 = G__22109;
continue;
}
} else
{{
var G__22110 = (i__22107 + (1));
i__22107 = G__22110;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22108),iter__22105.call(null,cljs.core.chunk_rest.call(null,s__22106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22108),null);
}
} else
{var x = cljs.core.first.call(null,s__22106__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22105.call(null,cljs.core.rest.call(null,s__22106__$2)));
} else
{{
var G__22111 = cljs.core.rest.call(null,s__22106__$2);
s__22106__$1 = G__22111;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22112){
var colls = cljs.core.seq(arglist__22112);
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
var G__22113__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22114 = conj_when.call(null,coll,x);
var G__22115 = cljs.core.first.call(null,xs);
var G__22116 = cljs.core.next.call(null,xs);
coll = G__22114;
x = G__22115;
xs = G__22116;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22113 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22113__delegate.call(this,coll,x,xs);};
G__22113.cljs$lang$maxFixedArity = 2;
G__22113.cljs$lang$applyTo = (function (arglist__22117){
var coll = cljs.core.first(arglist__22117);
arglist__22117 = cljs.core.next(arglist__22117);
var x = cljs.core.first(arglist__22117);
var xs = cljs.core.rest(arglist__22117);
return G__22113__delegate(coll,x,xs);
});
G__22113.cljs$core$IFn$_invoke$arity$variadic = G__22113__delegate;
return G__22113;
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
var G__22119__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22118_SHARP_){return cljs.core.apply.call(null,f,p1__22118_SHARP_,args);
}));
};
var G__22119 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22119__delegate.call(this,a,f,args);};
G__22119.cljs$lang$maxFixedArity = 2;
G__22119.cljs$lang$applyTo = (function (arglist__22120){
var a = cljs.core.first(arglist__22120);
arglist__22120 = cljs.core.next(arglist__22120);
var f = cljs.core.first(arglist__22120);
var args = cljs.core.rest(arglist__22120);
return G__22119__delegate(a,f,args);
});
G__22119.cljs$core$IFn$_invoke$arity$variadic = G__22119__delegate;
return G__22119;
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
var G__22121__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22121 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22121__delegate.call(this,f,arg,args);};
G__22121.cljs$lang$maxFixedArity = 2;
G__22121.cljs$lang$applyTo = (function (arglist__22122){
var f = cljs.core.first(arglist__22122);
arglist__22122 = cljs.core.next(arglist__22122);
var arg = cljs.core.first(arglist__22122);
var args = cljs.core.rest(arglist__22122);
return G__22121__delegate(f,arg,args);
});
G__22121.cljs$core$IFn$_invoke$arity$variadic = G__22121__delegate;
return G__22121;
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
