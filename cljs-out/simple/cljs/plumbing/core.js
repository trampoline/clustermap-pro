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
var G__21935__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21935 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21935__delegate.call(this,m,k,f,x1,x2,xs);};
G__21935.cljs$lang$maxFixedArity = 5;
G__21935.cljs$lang$applyTo = (function (arglist__21936){
var m = cljs.core.first(arglist__21936);
arglist__21936 = cljs.core.next(arglist__21936);
var k = cljs.core.first(arglist__21936);
arglist__21936 = cljs.core.next(arglist__21936);
var f = cljs.core.first(arglist__21936);
arglist__21936 = cljs.core.next(arglist__21936);
var x1 = cljs.core.first(arglist__21936);
arglist__21936 = cljs.core.next(arglist__21936);
var x2 = cljs.core.first(arglist__21936);
var xs = cljs.core.rest(arglist__21936);
return G__21935__delegate(m,k,f,x1,x2,xs);
});
G__21935.cljs$core$IFn$_invoke$arity$variadic = G__21935__delegate;
return G__21935;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21945_21951 = cljs.core.seq.call(null,m);var chunk__21946_21952 = null;var count__21947_21953 = (0);var i__21948_21954 = (0);while(true){
if((i__21948_21954 < count__21947_21953))
{var vec__21949_21955 = cljs.core._nth.call(null,chunk__21946_21952,i__21948_21954);var k_21956 = cljs.core.nth.call(null,vec__21949_21955,(0),null);var v_21957 = cljs.core.nth.call(null,vec__21949_21955,(1),null);var m21944_21958 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21944_21958,k_21956,f.call(null,v_21957)));
{
var G__21959 = seq__21945_21951;
var G__21960 = chunk__21946_21952;
var G__21961 = count__21947_21953;
var G__21962 = (i__21948_21954 + (1));
seq__21945_21951 = G__21959;
chunk__21946_21952 = G__21960;
count__21947_21953 = G__21961;
i__21948_21954 = G__21962;
continue;
}
} else
{var temp__4126__auto___21963 = cljs.core.seq.call(null,seq__21945_21951);if(temp__4126__auto___21963)
{var seq__21945_21964__$1 = temp__4126__auto___21963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21945_21964__$1))
{var c__4408__auto___21965 = cljs.core.chunk_first.call(null,seq__21945_21964__$1);{
var G__21966 = cljs.core.chunk_rest.call(null,seq__21945_21964__$1);
var G__21967 = c__4408__auto___21965;
var G__21968 = cljs.core.count.call(null,c__4408__auto___21965);
var G__21969 = (0);
seq__21945_21951 = G__21966;
chunk__21946_21952 = G__21967;
count__21947_21953 = G__21968;
i__21948_21954 = G__21969;
continue;
}
} else
{var vec__21950_21970 = cljs.core.first.call(null,seq__21945_21964__$1);var k_21971 = cljs.core.nth.call(null,vec__21950_21970,(0),null);var v_21972 = cljs.core.nth.call(null,vec__21950_21970,(1),null);var m21944_21973 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21944_21973,k_21971,f.call(null,v_21972)));
{
var G__21974 = cljs.core.next.call(null,seq__21945_21964__$1);
var G__21975 = null;
var G__21976 = (0);
var G__21977 = (0);
seq__21945_21951 = G__21974;
chunk__21946_21952 = G__21975;
count__21947_21953 = G__21976;
i__21948_21954 = G__21977;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21986_21992 = cljs.core.seq.call(null,m);var chunk__21987_21993 = null;var count__21988_21994 = (0);var i__21989_21995 = (0);while(true){
if((i__21989_21995 < count__21988_21994))
{var vec__21990_21996 = cljs.core._nth.call(null,chunk__21987_21993,i__21989_21995);var k_21997 = cljs.core.nth.call(null,vec__21990_21996,(0),null);var v_21998 = cljs.core.nth.call(null,vec__21990_21996,(1),null);var m21985_21999 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21985_21999,f.call(null,k_21997),v_21998));
{
var G__22000 = seq__21986_21992;
var G__22001 = chunk__21987_21993;
var G__22002 = count__21988_21994;
var G__22003 = (i__21989_21995 + (1));
seq__21986_21992 = G__22000;
chunk__21987_21993 = G__22001;
count__21988_21994 = G__22002;
i__21989_21995 = G__22003;
continue;
}
} else
{var temp__4126__auto___22004 = cljs.core.seq.call(null,seq__21986_21992);if(temp__4126__auto___22004)
{var seq__21986_22005__$1 = temp__4126__auto___22004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21986_22005__$1))
{var c__4408__auto___22006 = cljs.core.chunk_first.call(null,seq__21986_22005__$1);{
var G__22007 = cljs.core.chunk_rest.call(null,seq__21986_22005__$1);
var G__22008 = c__4408__auto___22006;
var G__22009 = cljs.core.count.call(null,c__4408__auto___22006);
var G__22010 = (0);
seq__21986_21992 = G__22007;
chunk__21987_21993 = G__22008;
count__21988_21994 = G__22009;
i__21989_21995 = G__22010;
continue;
}
} else
{var vec__21991_22011 = cljs.core.first.call(null,seq__21986_22005__$1);var k_22012 = cljs.core.nth.call(null,vec__21991_22011,(0),null);var v_22013 = cljs.core.nth.call(null,vec__21991_22011,(1),null);var m21985_22014 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21985_22014,f.call(null,k_22012),v_22013));
{
var G__22015 = cljs.core.next.call(null,seq__21986_22005__$1);
var G__22016 = null;
var G__22017 = (0);
var G__22018 = (0);
seq__21986_21992 = G__22015;
chunk__21987_21993 = G__22016;
count__21988_21994 = G__22017;
i__21989_21995 = G__22018;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22025_22029 = cljs.core.seq.call(null,ks);var chunk__22026_22030 = null;var count__22027_22031 = (0);var i__22028_22032 = (0);while(true){
if((i__22028_22032 < count__22027_22031))
{var k_22033 = cljs.core._nth.call(null,chunk__22026_22030,i__22028_22032);var m22024_22034 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22024_22034,k_22033,f.call(null,k_22033)));
{
var G__22035 = seq__22025_22029;
var G__22036 = chunk__22026_22030;
var G__22037 = count__22027_22031;
var G__22038 = (i__22028_22032 + (1));
seq__22025_22029 = G__22035;
chunk__22026_22030 = G__22036;
count__22027_22031 = G__22037;
i__22028_22032 = G__22038;
continue;
}
} else
{var temp__4126__auto___22039 = cljs.core.seq.call(null,seq__22025_22029);if(temp__4126__auto___22039)
{var seq__22025_22040__$1 = temp__4126__auto___22039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22025_22040__$1))
{var c__4408__auto___22041 = cljs.core.chunk_first.call(null,seq__22025_22040__$1);{
var G__22042 = cljs.core.chunk_rest.call(null,seq__22025_22040__$1);
var G__22043 = c__4408__auto___22041;
var G__22044 = cljs.core.count.call(null,c__4408__auto___22041);
var G__22045 = (0);
seq__22025_22029 = G__22042;
chunk__22026_22030 = G__22043;
count__22027_22031 = G__22044;
i__22028_22032 = G__22045;
continue;
}
} else
{var k_22046 = cljs.core.first.call(null,seq__22025_22040__$1);var m22024_22047 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22024_22047,k_22046,f.call(null,k_22046)));
{
var G__22048 = cljs.core.next.call(null,seq__22025_22040__$1);
var G__22049 = null;
var G__22050 = (0);
var G__22051 = (0);
seq__22025_22029 = G__22048;
chunk__22026_22030 = G__22049;
count__22027_22031 = G__22050;
i__22028_22032 = G__22051;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22058_22062 = cljs.core.seq.call(null,vs);var chunk__22059_22063 = null;var count__22060_22064 = (0);var i__22061_22065 = (0);while(true){
if((i__22061_22065 < count__22060_22064))
{var v_22066 = cljs.core._nth.call(null,chunk__22059_22063,i__22061_22065);var m22057_22067 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22057_22067,f.call(null,v_22066),v_22066));
{
var G__22068 = seq__22058_22062;
var G__22069 = chunk__22059_22063;
var G__22070 = count__22060_22064;
var G__22071 = (i__22061_22065 + (1));
seq__22058_22062 = G__22068;
chunk__22059_22063 = G__22069;
count__22060_22064 = G__22070;
i__22061_22065 = G__22071;
continue;
}
} else
{var temp__4126__auto___22072 = cljs.core.seq.call(null,seq__22058_22062);if(temp__4126__auto___22072)
{var seq__22058_22073__$1 = temp__4126__auto___22072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22058_22073__$1))
{var c__4408__auto___22074 = cljs.core.chunk_first.call(null,seq__22058_22073__$1);{
var G__22075 = cljs.core.chunk_rest.call(null,seq__22058_22073__$1);
var G__22076 = c__4408__auto___22074;
var G__22077 = cljs.core.count.call(null,c__4408__auto___22074);
var G__22078 = (0);
seq__22058_22062 = G__22075;
chunk__22059_22063 = G__22076;
count__22060_22064 = G__22077;
i__22061_22065 = G__22078;
continue;
}
} else
{var v_22079 = cljs.core.first.call(null,seq__22058_22073__$1);var m22057_22080 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22057_22080,f.call(null,v_22079),v_22079));
{
var G__22081 = cljs.core.next.call(null,seq__22058_22073__$1);
var G__22082 = null;
var G__22083 = (0);
var G__22084 = (0);
seq__22058_22062 = G__22081;
chunk__22059_22063 = G__22082;
count__22060_22064 = G__22083;
i__22061_22065 = G__22084;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22085){var vec__22087 = p__22085;var k = cljs.core.nth.call(null,vec__22087,(0),null);var ks = cljs.core.nthnext.call(null,vec__22087,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22096_22102 = cljs.core.seq.call(null,x);var chunk__22097_22103 = null;var count__22098_22104 = (0);var i__22099_22105 = (0);while(true){
if((i__22099_22105 < count__22098_22104))
{var vec__22100_22106 = cljs.core._nth.call(null,chunk__22097_22103,i__22099_22105);var k_22107 = cljs.core.nth.call(null,vec__22100_22106,(0),null);var v_22108 = cljs.core.nth.call(null,vec__22100_22106,(1),null);var m22095_22109 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22095_22109,((typeof k_22107 === 'string')?cljs.core.keyword.call(null,k_22107):k_22107),keywordize_map.call(null,v_22108)));
{
var G__22110 = seq__22096_22102;
var G__22111 = chunk__22097_22103;
var G__22112 = count__22098_22104;
var G__22113 = (i__22099_22105 + (1));
seq__22096_22102 = G__22110;
chunk__22097_22103 = G__22111;
count__22098_22104 = G__22112;
i__22099_22105 = G__22113;
continue;
}
} else
{var temp__4126__auto___22114 = cljs.core.seq.call(null,seq__22096_22102);if(temp__4126__auto___22114)
{var seq__22096_22115__$1 = temp__4126__auto___22114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22096_22115__$1))
{var c__4408__auto___22116 = cljs.core.chunk_first.call(null,seq__22096_22115__$1);{
var G__22117 = cljs.core.chunk_rest.call(null,seq__22096_22115__$1);
var G__22118 = c__4408__auto___22116;
var G__22119 = cljs.core.count.call(null,c__4408__auto___22116);
var G__22120 = (0);
seq__22096_22102 = G__22117;
chunk__22097_22103 = G__22118;
count__22098_22104 = G__22119;
i__22099_22105 = G__22120;
continue;
}
} else
{var vec__22101_22121 = cljs.core.first.call(null,seq__22096_22115__$1);var k_22122 = cljs.core.nth.call(null,vec__22101_22121,(0),null);var v_22123 = cljs.core.nth.call(null,vec__22101_22121,(1),null);var m22095_22124 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22095_22124,((typeof k_22122 === 'string')?cljs.core.keyword.call(null,k_22122):k_22122),keywordize_map.call(null,v_22123)));
{
var G__22125 = cljs.core.next.call(null,seq__22096_22115__$1);
var G__22126 = null;
var G__22127 = (0);
var G__22128 = (0);
seq__22096_22102 = G__22125;
chunk__22097_22103 = G__22126;
count__22098_22104 = G__22127;
i__22099_22105 = G__22128;
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
var G__22129 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22130 = cljs.core.next.call(null,ks);
m = G__22129;
ks = G__22130;
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
})(),(function (){var iter__4377__auto__ = (function iter__22139(s__22140){return (new cljs.core.LazySeq(null,(function (){var s__22140__$1 = s__22140;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22140__$1);if(temp__4126__auto__)
{var s__22140__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22140__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22140__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22142 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22141 = (0);while(true){
if((i__22141 < size__4376__auto__))
{var vec__22145 = cljs.core._nth.call(null,c__4375__auto__,i__22141);var k = cljs.core.nth.call(null,vec__22145,(0),null);var v = cljs.core.nth.call(null,vec__22145,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22147 = (i__22141 + (1));
i__22141 = G__22147;
continue;
}
} else
{{
var G__22148 = (i__22141 + (1));
i__22141 = G__22148;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22142),iter__22139.call(null,cljs.core.chunk_rest.call(null,s__22140__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22142),null);
}
} else
{var vec__22146 = cljs.core.first.call(null,s__22140__$2);var k = cljs.core.nth.call(null,vec__22146,(0),null);var v = cljs.core.nth.call(null,vec__22146,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22139.call(null,cljs.core.rest.call(null,s__22140__$2)));
} else
{{
var G__22149 = cljs.core.rest.call(null,s__22140__$2);
s__22140__$1 = G__22149;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22150){
var m = cljs.core.first(arglist__22150);
var kvs = cljs.core.rest(arglist__22150);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22151){
var m = cljs.core.first(arglist__22151);
arglist__22151 = cljs.core.next(arglist__22151);
var key_seq = cljs.core.first(arglist__22151);
arglist__22151 = cljs.core.next(arglist__22151);
var f = cljs.core.first(arglist__22151);
var args = cljs.core.rest(arglist__22151);
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
return (function iter__22156(s__22157){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22157__$1 = s__22157;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22157__$1);if(temp__4126__auto__)
{var s__22157__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22157__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22157__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22159 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22158 = (0);while(true){
if((i__22158 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22158);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22159,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22160 = (i__22158 + (1));
i__22158 = G__22160;
continue;
}
} else
{{
var G__22161 = (i__22158 + (1));
i__22158 = G__22161;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22159),iter__22156.call(null,cljs.core.chunk_rest.call(null,s__22157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22159),null);
}
} else
{var x = cljs.core.first.call(null,s__22157__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22156.call(null,cljs.core.rest.call(null,s__22157__$2)));
} else
{{
var G__22162 = cljs.core.rest.call(null,s__22157__$2);
s__22157__$1 = G__22162;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22163){
var colls = cljs.core.seq(arglist__22163);
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
var G__22164__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22165 = conj_when.call(null,coll,x);
var G__22166 = cljs.core.first.call(null,xs);
var G__22167 = cljs.core.next.call(null,xs);
coll = G__22165;
x = G__22166;
xs = G__22167;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22164 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22164__delegate.call(this,coll,x,xs);};
G__22164.cljs$lang$maxFixedArity = 2;
G__22164.cljs$lang$applyTo = (function (arglist__22168){
var coll = cljs.core.first(arglist__22168);
arglist__22168 = cljs.core.next(arglist__22168);
var x = cljs.core.first(arglist__22168);
var xs = cljs.core.rest(arglist__22168);
return G__22164__delegate(coll,x,xs);
});
G__22164.cljs$core$IFn$_invoke$arity$variadic = G__22164__delegate;
return G__22164;
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
var G__22170__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22169_SHARP_){return cljs.core.apply.call(null,f,p1__22169_SHARP_,args);
}));
};
var G__22170 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22170__delegate.call(this,a,f,args);};
G__22170.cljs$lang$maxFixedArity = 2;
G__22170.cljs$lang$applyTo = (function (arglist__22171){
var a = cljs.core.first(arglist__22171);
arglist__22171 = cljs.core.next(arglist__22171);
var f = cljs.core.first(arglist__22171);
var args = cljs.core.rest(arglist__22171);
return G__22170__delegate(a,f,args);
});
G__22170.cljs$core$IFn$_invoke$arity$variadic = G__22170__delegate;
return G__22170;
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
var G__22172__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22172 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22172__delegate.call(this,f,arg,args);};
G__22172.cljs$lang$maxFixedArity = 2;
G__22172.cljs$lang$applyTo = (function (arglist__22173){
var f = cljs.core.first(arglist__22173);
arglist__22173 = cljs.core.next(arglist__22173);
var arg = cljs.core.first(arglist__22173);
var args = cljs.core.rest(arglist__22173);
return G__22172__delegate(f,arg,args);
});
G__22172.cljs$core$IFn$_invoke$arity$variadic = G__22172__delegate;
return G__22172;
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
