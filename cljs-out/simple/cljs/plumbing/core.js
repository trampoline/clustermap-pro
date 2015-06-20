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
var G__21938__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21938 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21938__delegate.call(this,m,k,f,x1,x2,xs);};
G__21938.cljs$lang$maxFixedArity = 5;
G__21938.cljs$lang$applyTo = (function (arglist__21939){
var m = cljs.core.first(arglist__21939);
arglist__21939 = cljs.core.next(arglist__21939);
var k = cljs.core.first(arglist__21939);
arglist__21939 = cljs.core.next(arglist__21939);
var f = cljs.core.first(arglist__21939);
arglist__21939 = cljs.core.next(arglist__21939);
var x1 = cljs.core.first(arglist__21939);
arglist__21939 = cljs.core.next(arglist__21939);
var x2 = cljs.core.first(arglist__21939);
var xs = cljs.core.rest(arglist__21939);
return G__21938__delegate(m,k,f,x1,x2,xs);
});
G__21938.cljs$core$IFn$_invoke$arity$variadic = G__21938__delegate;
return G__21938;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21948_21954 = cljs.core.seq.call(null,m);var chunk__21949_21955 = null;var count__21950_21956 = (0);var i__21951_21957 = (0);while(true){
if((i__21951_21957 < count__21950_21956))
{var vec__21952_21958 = cljs.core._nth.call(null,chunk__21949_21955,i__21951_21957);var k_21959 = cljs.core.nth.call(null,vec__21952_21958,(0),null);var v_21960 = cljs.core.nth.call(null,vec__21952_21958,(1),null);var m21947_21961 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21947_21961,k_21959,f.call(null,v_21960)));
{
var G__21962 = seq__21948_21954;
var G__21963 = chunk__21949_21955;
var G__21964 = count__21950_21956;
var G__21965 = (i__21951_21957 + (1));
seq__21948_21954 = G__21962;
chunk__21949_21955 = G__21963;
count__21950_21956 = G__21964;
i__21951_21957 = G__21965;
continue;
}
} else
{var temp__4126__auto___21966 = cljs.core.seq.call(null,seq__21948_21954);if(temp__4126__auto___21966)
{var seq__21948_21967__$1 = temp__4126__auto___21966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21948_21967__$1))
{var c__4408__auto___21968 = cljs.core.chunk_first.call(null,seq__21948_21967__$1);{
var G__21969 = cljs.core.chunk_rest.call(null,seq__21948_21967__$1);
var G__21970 = c__4408__auto___21968;
var G__21971 = cljs.core.count.call(null,c__4408__auto___21968);
var G__21972 = (0);
seq__21948_21954 = G__21969;
chunk__21949_21955 = G__21970;
count__21950_21956 = G__21971;
i__21951_21957 = G__21972;
continue;
}
} else
{var vec__21953_21973 = cljs.core.first.call(null,seq__21948_21967__$1);var k_21974 = cljs.core.nth.call(null,vec__21953_21973,(0),null);var v_21975 = cljs.core.nth.call(null,vec__21953_21973,(1),null);var m21947_21976 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21947_21976,k_21974,f.call(null,v_21975)));
{
var G__21977 = cljs.core.next.call(null,seq__21948_21967__$1);
var G__21978 = null;
var G__21979 = (0);
var G__21980 = (0);
seq__21948_21954 = G__21977;
chunk__21949_21955 = G__21978;
count__21950_21956 = G__21979;
i__21951_21957 = G__21980;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21989_21995 = cljs.core.seq.call(null,m);var chunk__21990_21996 = null;var count__21991_21997 = (0);var i__21992_21998 = (0);while(true){
if((i__21992_21998 < count__21991_21997))
{var vec__21993_21999 = cljs.core._nth.call(null,chunk__21990_21996,i__21992_21998);var k_22000 = cljs.core.nth.call(null,vec__21993_21999,(0),null);var v_22001 = cljs.core.nth.call(null,vec__21993_21999,(1),null);var m21988_22002 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21988_22002,f.call(null,k_22000),v_22001));
{
var G__22003 = seq__21989_21995;
var G__22004 = chunk__21990_21996;
var G__22005 = count__21991_21997;
var G__22006 = (i__21992_21998 + (1));
seq__21989_21995 = G__22003;
chunk__21990_21996 = G__22004;
count__21991_21997 = G__22005;
i__21992_21998 = G__22006;
continue;
}
} else
{var temp__4126__auto___22007 = cljs.core.seq.call(null,seq__21989_21995);if(temp__4126__auto___22007)
{var seq__21989_22008__$1 = temp__4126__auto___22007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21989_22008__$1))
{var c__4408__auto___22009 = cljs.core.chunk_first.call(null,seq__21989_22008__$1);{
var G__22010 = cljs.core.chunk_rest.call(null,seq__21989_22008__$1);
var G__22011 = c__4408__auto___22009;
var G__22012 = cljs.core.count.call(null,c__4408__auto___22009);
var G__22013 = (0);
seq__21989_21995 = G__22010;
chunk__21990_21996 = G__22011;
count__21991_21997 = G__22012;
i__21992_21998 = G__22013;
continue;
}
} else
{var vec__21994_22014 = cljs.core.first.call(null,seq__21989_22008__$1);var k_22015 = cljs.core.nth.call(null,vec__21994_22014,(0),null);var v_22016 = cljs.core.nth.call(null,vec__21994_22014,(1),null);var m21988_22017 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21988_22017,f.call(null,k_22015),v_22016));
{
var G__22018 = cljs.core.next.call(null,seq__21989_22008__$1);
var G__22019 = null;
var G__22020 = (0);
var G__22021 = (0);
seq__21989_21995 = G__22018;
chunk__21990_21996 = G__22019;
count__21991_21997 = G__22020;
i__21992_21998 = G__22021;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22028_22032 = cljs.core.seq.call(null,ks);var chunk__22029_22033 = null;var count__22030_22034 = (0);var i__22031_22035 = (0);while(true){
if((i__22031_22035 < count__22030_22034))
{var k_22036 = cljs.core._nth.call(null,chunk__22029_22033,i__22031_22035);var m22027_22037 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22027_22037,k_22036,f.call(null,k_22036)));
{
var G__22038 = seq__22028_22032;
var G__22039 = chunk__22029_22033;
var G__22040 = count__22030_22034;
var G__22041 = (i__22031_22035 + (1));
seq__22028_22032 = G__22038;
chunk__22029_22033 = G__22039;
count__22030_22034 = G__22040;
i__22031_22035 = G__22041;
continue;
}
} else
{var temp__4126__auto___22042 = cljs.core.seq.call(null,seq__22028_22032);if(temp__4126__auto___22042)
{var seq__22028_22043__$1 = temp__4126__auto___22042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22028_22043__$1))
{var c__4408__auto___22044 = cljs.core.chunk_first.call(null,seq__22028_22043__$1);{
var G__22045 = cljs.core.chunk_rest.call(null,seq__22028_22043__$1);
var G__22046 = c__4408__auto___22044;
var G__22047 = cljs.core.count.call(null,c__4408__auto___22044);
var G__22048 = (0);
seq__22028_22032 = G__22045;
chunk__22029_22033 = G__22046;
count__22030_22034 = G__22047;
i__22031_22035 = G__22048;
continue;
}
} else
{var k_22049 = cljs.core.first.call(null,seq__22028_22043__$1);var m22027_22050 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22027_22050,k_22049,f.call(null,k_22049)));
{
var G__22051 = cljs.core.next.call(null,seq__22028_22043__$1);
var G__22052 = null;
var G__22053 = (0);
var G__22054 = (0);
seq__22028_22032 = G__22051;
chunk__22029_22033 = G__22052;
count__22030_22034 = G__22053;
i__22031_22035 = G__22054;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22061_22065 = cljs.core.seq.call(null,vs);var chunk__22062_22066 = null;var count__22063_22067 = (0);var i__22064_22068 = (0);while(true){
if((i__22064_22068 < count__22063_22067))
{var v_22069 = cljs.core._nth.call(null,chunk__22062_22066,i__22064_22068);var m22060_22070 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22060_22070,f.call(null,v_22069),v_22069));
{
var G__22071 = seq__22061_22065;
var G__22072 = chunk__22062_22066;
var G__22073 = count__22063_22067;
var G__22074 = (i__22064_22068 + (1));
seq__22061_22065 = G__22071;
chunk__22062_22066 = G__22072;
count__22063_22067 = G__22073;
i__22064_22068 = G__22074;
continue;
}
} else
{var temp__4126__auto___22075 = cljs.core.seq.call(null,seq__22061_22065);if(temp__4126__auto___22075)
{var seq__22061_22076__$1 = temp__4126__auto___22075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22061_22076__$1))
{var c__4408__auto___22077 = cljs.core.chunk_first.call(null,seq__22061_22076__$1);{
var G__22078 = cljs.core.chunk_rest.call(null,seq__22061_22076__$1);
var G__22079 = c__4408__auto___22077;
var G__22080 = cljs.core.count.call(null,c__4408__auto___22077);
var G__22081 = (0);
seq__22061_22065 = G__22078;
chunk__22062_22066 = G__22079;
count__22063_22067 = G__22080;
i__22064_22068 = G__22081;
continue;
}
} else
{var v_22082 = cljs.core.first.call(null,seq__22061_22076__$1);var m22060_22083 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22060_22083,f.call(null,v_22082),v_22082));
{
var G__22084 = cljs.core.next.call(null,seq__22061_22076__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__22061_22065 = G__22084;
chunk__22062_22066 = G__22085;
count__22063_22067 = G__22086;
i__22064_22068 = G__22087;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22088){var vec__22090 = p__22088;var k = cljs.core.nth.call(null,vec__22090,(0),null);var ks = cljs.core.nthnext.call(null,vec__22090,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22099_22105 = cljs.core.seq.call(null,x);var chunk__22100_22106 = null;var count__22101_22107 = (0);var i__22102_22108 = (0);while(true){
if((i__22102_22108 < count__22101_22107))
{var vec__22103_22109 = cljs.core._nth.call(null,chunk__22100_22106,i__22102_22108);var k_22110 = cljs.core.nth.call(null,vec__22103_22109,(0),null);var v_22111 = cljs.core.nth.call(null,vec__22103_22109,(1),null);var m22098_22112 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22098_22112,((typeof k_22110 === 'string')?cljs.core.keyword.call(null,k_22110):k_22110),keywordize_map.call(null,v_22111)));
{
var G__22113 = seq__22099_22105;
var G__22114 = chunk__22100_22106;
var G__22115 = count__22101_22107;
var G__22116 = (i__22102_22108 + (1));
seq__22099_22105 = G__22113;
chunk__22100_22106 = G__22114;
count__22101_22107 = G__22115;
i__22102_22108 = G__22116;
continue;
}
} else
{var temp__4126__auto___22117 = cljs.core.seq.call(null,seq__22099_22105);if(temp__4126__auto___22117)
{var seq__22099_22118__$1 = temp__4126__auto___22117;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22099_22118__$1))
{var c__4408__auto___22119 = cljs.core.chunk_first.call(null,seq__22099_22118__$1);{
var G__22120 = cljs.core.chunk_rest.call(null,seq__22099_22118__$1);
var G__22121 = c__4408__auto___22119;
var G__22122 = cljs.core.count.call(null,c__4408__auto___22119);
var G__22123 = (0);
seq__22099_22105 = G__22120;
chunk__22100_22106 = G__22121;
count__22101_22107 = G__22122;
i__22102_22108 = G__22123;
continue;
}
} else
{var vec__22104_22124 = cljs.core.first.call(null,seq__22099_22118__$1);var k_22125 = cljs.core.nth.call(null,vec__22104_22124,(0),null);var v_22126 = cljs.core.nth.call(null,vec__22104_22124,(1),null);var m22098_22127 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22098_22127,((typeof k_22125 === 'string')?cljs.core.keyword.call(null,k_22125):k_22125),keywordize_map.call(null,v_22126)));
{
var G__22128 = cljs.core.next.call(null,seq__22099_22118__$1);
var G__22129 = null;
var G__22130 = (0);
var G__22131 = (0);
seq__22099_22105 = G__22128;
chunk__22100_22106 = G__22129;
count__22101_22107 = G__22130;
i__22102_22108 = G__22131;
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
var G__22132 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22133 = cljs.core.next.call(null,ks);
m = G__22132;
ks = G__22133;
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
})(),(function (){var iter__4377__auto__ = (function iter__22142(s__22143){return (new cljs.core.LazySeq(null,(function (){var s__22143__$1 = s__22143;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22143__$1);if(temp__4126__auto__)
{var s__22143__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22143__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22143__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22145 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22144 = (0);while(true){
if((i__22144 < size__4376__auto__))
{var vec__22148 = cljs.core._nth.call(null,c__4375__auto__,i__22144);var k = cljs.core.nth.call(null,vec__22148,(0),null);var v = cljs.core.nth.call(null,vec__22148,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22150 = (i__22144 + (1));
i__22144 = G__22150;
continue;
}
} else
{{
var G__22151 = (i__22144 + (1));
i__22144 = G__22151;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22145),iter__22142.call(null,cljs.core.chunk_rest.call(null,s__22143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22145),null);
}
} else
{var vec__22149 = cljs.core.first.call(null,s__22143__$2);var k = cljs.core.nth.call(null,vec__22149,(0),null);var v = cljs.core.nth.call(null,vec__22149,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22142.call(null,cljs.core.rest.call(null,s__22143__$2)));
} else
{{
var G__22152 = cljs.core.rest.call(null,s__22143__$2);
s__22143__$1 = G__22152;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22153){
var m = cljs.core.first(arglist__22153);
var kvs = cljs.core.rest(arglist__22153);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22154){
var m = cljs.core.first(arglist__22154);
arglist__22154 = cljs.core.next(arglist__22154);
var key_seq = cljs.core.first(arglist__22154);
arglist__22154 = cljs.core.next(arglist__22154);
var f = cljs.core.first(arglist__22154);
var args = cljs.core.rest(arglist__22154);
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
return (function iter__22159(s__22160){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22160__$1 = s__22160;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22160__$1);if(temp__4126__auto__)
{var s__22160__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22160__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22160__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22162 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22161 = (0);while(true){
if((i__22161 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22161);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22162,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22163 = (i__22161 + (1));
i__22161 = G__22163;
continue;
}
} else
{{
var G__22164 = (i__22161 + (1));
i__22161 = G__22164;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22162),iter__22159.call(null,cljs.core.chunk_rest.call(null,s__22160__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22162),null);
}
} else
{var x = cljs.core.first.call(null,s__22160__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22159.call(null,cljs.core.rest.call(null,s__22160__$2)));
} else
{{
var G__22165 = cljs.core.rest.call(null,s__22160__$2);
s__22160__$1 = G__22165;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22166){
var colls = cljs.core.seq(arglist__22166);
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
var G__22167__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22168 = conj_when.call(null,coll,x);
var G__22169 = cljs.core.first.call(null,xs);
var G__22170 = cljs.core.next.call(null,xs);
coll = G__22168;
x = G__22169;
xs = G__22170;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22167 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22167__delegate.call(this,coll,x,xs);};
G__22167.cljs$lang$maxFixedArity = 2;
G__22167.cljs$lang$applyTo = (function (arglist__22171){
var coll = cljs.core.first(arglist__22171);
arglist__22171 = cljs.core.next(arglist__22171);
var x = cljs.core.first(arglist__22171);
var xs = cljs.core.rest(arglist__22171);
return G__22167__delegate(coll,x,xs);
});
G__22167.cljs$core$IFn$_invoke$arity$variadic = G__22167__delegate;
return G__22167;
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
var G__22173__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22172_SHARP_){return cljs.core.apply.call(null,f,p1__22172_SHARP_,args);
}));
};
var G__22173 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22173__delegate.call(this,a,f,args);};
G__22173.cljs$lang$maxFixedArity = 2;
G__22173.cljs$lang$applyTo = (function (arglist__22174){
var a = cljs.core.first(arglist__22174);
arglist__22174 = cljs.core.next(arglist__22174);
var f = cljs.core.first(arglist__22174);
var args = cljs.core.rest(arglist__22174);
return G__22173__delegate(a,f,args);
});
G__22173.cljs$core$IFn$_invoke$arity$variadic = G__22173__delegate;
return G__22173;
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
var G__22175__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22175 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22175__delegate.call(this,f,arg,args);};
G__22175.cljs$lang$maxFixedArity = 2;
G__22175.cljs$lang$applyTo = (function (arglist__22176){
var f = cljs.core.first(arglist__22176);
arglist__22176 = cljs.core.next(arglist__22176);
var arg = cljs.core.first(arglist__22176);
var args = cljs.core.rest(arglist__22176);
return G__22175__delegate(f,arg,args);
});
G__22175.cljs$core$IFn$_invoke$arity$variadic = G__22175__delegate;
return G__22175;
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
