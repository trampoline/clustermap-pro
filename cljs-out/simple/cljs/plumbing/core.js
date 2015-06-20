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
var G__21900__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21900 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21900__delegate.call(this,m,k,f,x1,x2,xs);};
G__21900.cljs$lang$maxFixedArity = 5;
G__21900.cljs$lang$applyTo = (function (arglist__21901){
var m = cljs.core.first(arglist__21901);
arglist__21901 = cljs.core.next(arglist__21901);
var k = cljs.core.first(arglist__21901);
arglist__21901 = cljs.core.next(arglist__21901);
var f = cljs.core.first(arglist__21901);
arglist__21901 = cljs.core.next(arglist__21901);
var x1 = cljs.core.first(arglist__21901);
arglist__21901 = cljs.core.next(arglist__21901);
var x2 = cljs.core.first(arglist__21901);
var xs = cljs.core.rest(arglist__21901);
return G__21900__delegate(m,k,f,x1,x2,xs);
});
G__21900.cljs$core$IFn$_invoke$arity$variadic = G__21900__delegate;
return G__21900;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21910_21916 = cljs.core.seq.call(null,m);var chunk__21911_21917 = null;var count__21912_21918 = (0);var i__21913_21919 = (0);while(true){
if((i__21913_21919 < count__21912_21918))
{var vec__21914_21920 = cljs.core._nth.call(null,chunk__21911_21917,i__21913_21919);var k_21921 = cljs.core.nth.call(null,vec__21914_21920,(0),null);var v_21922 = cljs.core.nth.call(null,vec__21914_21920,(1),null);var m21909_21923 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21909_21923,k_21921,f.call(null,v_21922)));
{
var G__21924 = seq__21910_21916;
var G__21925 = chunk__21911_21917;
var G__21926 = count__21912_21918;
var G__21927 = (i__21913_21919 + (1));
seq__21910_21916 = G__21924;
chunk__21911_21917 = G__21925;
count__21912_21918 = G__21926;
i__21913_21919 = G__21927;
continue;
}
} else
{var temp__4126__auto___21928 = cljs.core.seq.call(null,seq__21910_21916);if(temp__4126__auto___21928)
{var seq__21910_21929__$1 = temp__4126__auto___21928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21910_21929__$1))
{var c__4408__auto___21930 = cljs.core.chunk_first.call(null,seq__21910_21929__$1);{
var G__21931 = cljs.core.chunk_rest.call(null,seq__21910_21929__$1);
var G__21932 = c__4408__auto___21930;
var G__21933 = cljs.core.count.call(null,c__4408__auto___21930);
var G__21934 = (0);
seq__21910_21916 = G__21931;
chunk__21911_21917 = G__21932;
count__21912_21918 = G__21933;
i__21913_21919 = G__21934;
continue;
}
} else
{var vec__21915_21935 = cljs.core.first.call(null,seq__21910_21929__$1);var k_21936 = cljs.core.nth.call(null,vec__21915_21935,(0),null);var v_21937 = cljs.core.nth.call(null,vec__21915_21935,(1),null);var m21909_21938 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21909_21938,k_21936,f.call(null,v_21937)));
{
var G__21939 = cljs.core.next.call(null,seq__21910_21929__$1);
var G__21940 = null;
var G__21941 = (0);
var G__21942 = (0);
seq__21910_21916 = G__21939;
chunk__21911_21917 = G__21940;
count__21912_21918 = G__21941;
i__21913_21919 = G__21942;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21951_21957 = cljs.core.seq.call(null,m);var chunk__21952_21958 = null;var count__21953_21959 = (0);var i__21954_21960 = (0);while(true){
if((i__21954_21960 < count__21953_21959))
{var vec__21955_21961 = cljs.core._nth.call(null,chunk__21952_21958,i__21954_21960);var k_21962 = cljs.core.nth.call(null,vec__21955_21961,(0),null);var v_21963 = cljs.core.nth.call(null,vec__21955_21961,(1),null);var m21950_21964 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21950_21964,f.call(null,k_21962),v_21963));
{
var G__21965 = seq__21951_21957;
var G__21966 = chunk__21952_21958;
var G__21967 = count__21953_21959;
var G__21968 = (i__21954_21960 + (1));
seq__21951_21957 = G__21965;
chunk__21952_21958 = G__21966;
count__21953_21959 = G__21967;
i__21954_21960 = G__21968;
continue;
}
} else
{var temp__4126__auto___21969 = cljs.core.seq.call(null,seq__21951_21957);if(temp__4126__auto___21969)
{var seq__21951_21970__$1 = temp__4126__auto___21969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21951_21970__$1))
{var c__4408__auto___21971 = cljs.core.chunk_first.call(null,seq__21951_21970__$1);{
var G__21972 = cljs.core.chunk_rest.call(null,seq__21951_21970__$1);
var G__21973 = c__4408__auto___21971;
var G__21974 = cljs.core.count.call(null,c__4408__auto___21971);
var G__21975 = (0);
seq__21951_21957 = G__21972;
chunk__21952_21958 = G__21973;
count__21953_21959 = G__21974;
i__21954_21960 = G__21975;
continue;
}
} else
{var vec__21956_21976 = cljs.core.first.call(null,seq__21951_21970__$1);var k_21977 = cljs.core.nth.call(null,vec__21956_21976,(0),null);var v_21978 = cljs.core.nth.call(null,vec__21956_21976,(1),null);var m21950_21979 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21950_21979,f.call(null,k_21977),v_21978));
{
var G__21980 = cljs.core.next.call(null,seq__21951_21970__$1);
var G__21981 = null;
var G__21982 = (0);
var G__21983 = (0);
seq__21951_21957 = G__21980;
chunk__21952_21958 = G__21981;
count__21953_21959 = G__21982;
i__21954_21960 = G__21983;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21990_21994 = cljs.core.seq.call(null,ks);var chunk__21991_21995 = null;var count__21992_21996 = (0);var i__21993_21997 = (0);while(true){
if((i__21993_21997 < count__21992_21996))
{var k_21998 = cljs.core._nth.call(null,chunk__21991_21995,i__21993_21997);var m21989_21999 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21989_21999,k_21998,f.call(null,k_21998)));
{
var G__22000 = seq__21990_21994;
var G__22001 = chunk__21991_21995;
var G__22002 = count__21992_21996;
var G__22003 = (i__21993_21997 + (1));
seq__21990_21994 = G__22000;
chunk__21991_21995 = G__22001;
count__21992_21996 = G__22002;
i__21993_21997 = G__22003;
continue;
}
} else
{var temp__4126__auto___22004 = cljs.core.seq.call(null,seq__21990_21994);if(temp__4126__auto___22004)
{var seq__21990_22005__$1 = temp__4126__auto___22004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21990_22005__$1))
{var c__4408__auto___22006 = cljs.core.chunk_first.call(null,seq__21990_22005__$1);{
var G__22007 = cljs.core.chunk_rest.call(null,seq__21990_22005__$1);
var G__22008 = c__4408__auto___22006;
var G__22009 = cljs.core.count.call(null,c__4408__auto___22006);
var G__22010 = (0);
seq__21990_21994 = G__22007;
chunk__21991_21995 = G__22008;
count__21992_21996 = G__22009;
i__21993_21997 = G__22010;
continue;
}
} else
{var k_22011 = cljs.core.first.call(null,seq__21990_22005__$1);var m21989_22012 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21989_22012,k_22011,f.call(null,k_22011)));
{
var G__22013 = cljs.core.next.call(null,seq__21990_22005__$1);
var G__22014 = null;
var G__22015 = (0);
var G__22016 = (0);
seq__21990_21994 = G__22013;
chunk__21991_21995 = G__22014;
count__21992_21996 = G__22015;
i__21993_21997 = G__22016;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22023_22027 = cljs.core.seq.call(null,vs);var chunk__22024_22028 = null;var count__22025_22029 = (0);var i__22026_22030 = (0);while(true){
if((i__22026_22030 < count__22025_22029))
{var v_22031 = cljs.core._nth.call(null,chunk__22024_22028,i__22026_22030);var m22022_22032 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22022_22032,f.call(null,v_22031),v_22031));
{
var G__22033 = seq__22023_22027;
var G__22034 = chunk__22024_22028;
var G__22035 = count__22025_22029;
var G__22036 = (i__22026_22030 + (1));
seq__22023_22027 = G__22033;
chunk__22024_22028 = G__22034;
count__22025_22029 = G__22035;
i__22026_22030 = G__22036;
continue;
}
} else
{var temp__4126__auto___22037 = cljs.core.seq.call(null,seq__22023_22027);if(temp__4126__auto___22037)
{var seq__22023_22038__$1 = temp__4126__auto___22037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22023_22038__$1))
{var c__4408__auto___22039 = cljs.core.chunk_first.call(null,seq__22023_22038__$1);{
var G__22040 = cljs.core.chunk_rest.call(null,seq__22023_22038__$1);
var G__22041 = c__4408__auto___22039;
var G__22042 = cljs.core.count.call(null,c__4408__auto___22039);
var G__22043 = (0);
seq__22023_22027 = G__22040;
chunk__22024_22028 = G__22041;
count__22025_22029 = G__22042;
i__22026_22030 = G__22043;
continue;
}
} else
{var v_22044 = cljs.core.first.call(null,seq__22023_22038__$1);var m22022_22045 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22022_22045,f.call(null,v_22044),v_22044));
{
var G__22046 = cljs.core.next.call(null,seq__22023_22038__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__22023_22027 = G__22046;
chunk__22024_22028 = G__22047;
count__22025_22029 = G__22048;
i__22026_22030 = G__22049;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22050){var vec__22052 = p__22050;var k = cljs.core.nth.call(null,vec__22052,(0),null);var ks = cljs.core.nthnext.call(null,vec__22052,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22061_22067 = cljs.core.seq.call(null,x);var chunk__22062_22068 = null;var count__22063_22069 = (0);var i__22064_22070 = (0);while(true){
if((i__22064_22070 < count__22063_22069))
{var vec__22065_22071 = cljs.core._nth.call(null,chunk__22062_22068,i__22064_22070);var k_22072 = cljs.core.nth.call(null,vec__22065_22071,(0),null);var v_22073 = cljs.core.nth.call(null,vec__22065_22071,(1),null);var m22060_22074 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22060_22074,((typeof k_22072 === 'string')?cljs.core.keyword.call(null,k_22072):k_22072),keywordize_map.call(null,v_22073)));
{
var G__22075 = seq__22061_22067;
var G__22076 = chunk__22062_22068;
var G__22077 = count__22063_22069;
var G__22078 = (i__22064_22070 + (1));
seq__22061_22067 = G__22075;
chunk__22062_22068 = G__22076;
count__22063_22069 = G__22077;
i__22064_22070 = G__22078;
continue;
}
} else
{var temp__4126__auto___22079 = cljs.core.seq.call(null,seq__22061_22067);if(temp__4126__auto___22079)
{var seq__22061_22080__$1 = temp__4126__auto___22079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22061_22080__$1))
{var c__4408__auto___22081 = cljs.core.chunk_first.call(null,seq__22061_22080__$1);{
var G__22082 = cljs.core.chunk_rest.call(null,seq__22061_22080__$1);
var G__22083 = c__4408__auto___22081;
var G__22084 = cljs.core.count.call(null,c__4408__auto___22081);
var G__22085 = (0);
seq__22061_22067 = G__22082;
chunk__22062_22068 = G__22083;
count__22063_22069 = G__22084;
i__22064_22070 = G__22085;
continue;
}
} else
{var vec__22066_22086 = cljs.core.first.call(null,seq__22061_22080__$1);var k_22087 = cljs.core.nth.call(null,vec__22066_22086,(0),null);var v_22088 = cljs.core.nth.call(null,vec__22066_22086,(1),null);var m22060_22089 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22060_22089,((typeof k_22087 === 'string')?cljs.core.keyword.call(null,k_22087):k_22087),keywordize_map.call(null,v_22088)));
{
var G__22090 = cljs.core.next.call(null,seq__22061_22080__$1);
var G__22091 = null;
var G__22092 = (0);
var G__22093 = (0);
seq__22061_22067 = G__22090;
chunk__22062_22068 = G__22091;
count__22063_22069 = G__22092;
i__22064_22070 = G__22093;
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
var G__22094 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22095 = cljs.core.next.call(null,ks);
m = G__22094;
ks = G__22095;
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
})(),(function (){var iter__4377__auto__ = (function iter__22104(s__22105){return (new cljs.core.LazySeq(null,(function (){var s__22105__$1 = s__22105;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22105__$1);if(temp__4126__auto__)
{var s__22105__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22105__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22105__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22107 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22106 = (0);while(true){
if((i__22106 < size__4376__auto__))
{var vec__22110 = cljs.core._nth.call(null,c__4375__auto__,i__22106);var k = cljs.core.nth.call(null,vec__22110,(0),null);var v = cljs.core.nth.call(null,vec__22110,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22112 = (i__22106 + (1));
i__22106 = G__22112;
continue;
}
} else
{{
var G__22113 = (i__22106 + (1));
i__22106 = G__22113;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22107),iter__22104.call(null,cljs.core.chunk_rest.call(null,s__22105__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22107),null);
}
} else
{var vec__22111 = cljs.core.first.call(null,s__22105__$2);var k = cljs.core.nth.call(null,vec__22111,(0),null);var v = cljs.core.nth.call(null,vec__22111,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22104.call(null,cljs.core.rest.call(null,s__22105__$2)));
} else
{{
var G__22114 = cljs.core.rest.call(null,s__22105__$2);
s__22105__$1 = G__22114;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22115){
var m = cljs.core.first(arglist__22115);
var kvs = cljs.core.rest(arglist__22115);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22116){
var m = cljs.core.first(arglist__22116);
arglist__22116 = cljs.core.next(arglist__22116);
var key_seq = cljs.core.first(arglist__22116);
arglist__22116 = cljs.core.next(arglist__22116);
var f = cljs.core.first(arglist__22116);
var args = cljs.core.rest(arglist__22116);
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
return (function iter__22121(s__22122){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22122__$1 = s__22122;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22122__$1);if(temp__4126__auto__)
{var s__22122__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22122__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22122__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22124 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22123 = (0);while(true){
if((i__22123 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22123);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22124,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22125 = (i__22123 + (1));
i__22123 = G__22125;
continue;
}
} else
{{
var G__22126 = (i__22123 + (1));
i__22123 = G__22126;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22124),iter__22121.call(null,cljs.core.chunk_rest.call(null,s__22122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22124),null);
}
} else
{var x = cljs.core.first.call(null,s__22122__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22121.call(null,cljs.core.rest.call(null,s__22122__$2)));
} else
{{
var G__22127 = cljs.core.rest.call(null,s__22122__$2);
s__22122__$1 = G__22127;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22128){
var colls = cljs.core.seq(arglist__22128);
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
var G__22129__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22130 = conj_when.call(null,coll,x);
var G__22131 = cljs.core.first.call(null,xs);
var G__22132 = cljs.core.next.call(null,xs);
coll = G__22130;
x = G__22131;
xs = G__22132;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22129 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22129__delegate.call(this,coll,x,xs);};
G__22129.cljs$lang$maxFixedArity = 2;
G__22129.cljs$lang$applyTo = (function (arglist__22133){
var coll = cljs.core.first(arglist__22133);
arglist__22133 = cljs.core.next(arglist__22133);
var x = cljs.core.first(arglist__22133);
var xs = cljs.core.rest(arglist__22133);
return G__22129__delegate(coll,x,xs);
});
G__22129.cljs$core$IFn$_invoke$arity$variadic = G__22129__delegate;
return G__22129;
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
var G__22135__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22134_SHARP_){return cljs.core.apply.call(null,f,p1__22134_SHARP_,args);
}));
};
var G__22135 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22135__delegate.call(this,a,f,args);};
G__22135.cljs$lang$maxFixedArity = 2;
G__22135.cljs$lang$applyTo = (function (arglist__22136){
var a = cljs.core.first(arglist__22136);
arglist__22136 = cljs.core.next(arglist__22136);
var f = cljs.core.first(arglist__22136);
var args = cljs.core.rest(arglist__22136);
return G__22135__delegate(a,f,args);
});
G__22135.cljs$core$IFn$_invoke$arity$variadic = G__22135__delegate;
return G__22135;
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
var G__22137__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22137 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22137__delegate.call(this,f,arg,args);};
G__22137.cljs$lang$maxFixedArity = 2;
G__22137.cljs$lang$applyTo = (function (arglist__22138){
var f = cljs.core.first(arglist__22138);
arglist__22138 = cljs.core.next(arglist__22138);
var arg = cljs.core.first(arglist__22138);
var args = cljs.core.rest(arglist__22138);
return G__22137__delegate(f,arg,args);
});
G__22137.cljs$core$IFn$_invoke$arity$variadic = G__22137__delegate;
return G__22137;
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
