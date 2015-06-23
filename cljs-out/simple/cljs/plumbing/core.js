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
var G__21940__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21940 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21940__delegate.call(this,m,k,f,x1,x2,xs);};
G__21940.cljs$lang$maxFixedArity = 5;
G__21940.cljs$lang$applyTo = (function (arglist__21941){
var m = cljs.core.first(arglist__21941);
arglist__21941 = cljs.core.next(arglist__21941);
var k = cljs.core.first(arglist__21941);
arglist__21941 = cljs.core.next(arglist__21941);
var f = cljs.core.first(arglist__21941);
arglist__21941 = cljs.core.next(arglist__21941);
var x1 = cljs.core.first(arglist__21941);
arglist__21941 = cljs.core.next(arglist__21941);
var x2 = cljs.core.first(arglist__21941);
var xs = cljs.core.rest(arglist__21941);
return G__21940__delegate(m,k,f,x1,x2,xs);
});
G__21940.cljs$core$IFn$_invoke$arity$variadic = G__21940__delegate;
return G__21940;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21950_21956 = cljs.core.seq.call(null,m);var chunk__21951_21957 = null;var count__21952_21958 = (0);var i__21953_21959 = (0);while(true){
if((i__21953_21959 < count__21952_21958))
{var vec__21954_21960 = cljs.core._nth.call(null,chunk__21951_21957,i__21953_21959);var k_21961 = cljs.core.nth.call(null,vec__21954_21960,(0),null);var v_21962 = cljs.core.nth.call(null,vec__21954_21960,(1),null);var m21949_21963 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21949_21963,k_21961,f.call(null,v_21962)));
{
var G__21964 = seq__21950_21956;
var G__21965 = chunk__21951_21957;
var G__21966 = count__21952_21958;
var G__21967 = (i__21953_21959 + (1));
seq__21950_21956 = G__21964;
chunk__21951_21957 = G__21965;
count__21952_21958 = G__21966;
i__21953_21959 = G__21967;
continue;
}
} else
{var temp__4126__auto___21968 = cljs.core.seq.call(null,seq__21950_21956);if(temp__4126__auto___21968)
{var seq__21950_21969__$1 = temp__4126__auto___21968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21950_21969__$1))
{var c__4408__auto___21970 = cljs.core.chunk_first.call(null,seq__21950_21969__$1);{
var G__21971 = cljs.core.chunk_rest.call(null,seq__21950_21969__$1);
var G__21972 = c__4408__auto___21970;
var G__21973 = cljs.core.count.call(null,c__4408__auto___21970);
var G__21974 = (0);
seq__21950_21956 = G__21971;
chunk__21951_21957 = G__21972;
count__21952_21958 = G__21973;
i__21953_21959 = G__21974;
continue;
}
} else
{var vec__21955_21975 = cljs.core.first.call(null,seq__21950_21969__$1);var k_21976 = cljs.core.nth.call(null,vec__21955_21975,(0),null);var v_21977 = cljs.core.nth.call(null,vec__21955_21975,(1),null);var m21949_21978 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21949_21978,k_21976,f.call(null,v_21977)));
{
var G__21979 = cljs.core.next.call(null,seq__21950_21969__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__21950_21956 = G__21979;
chunk__21951_21957 = G__21980;
count__21952_21958 = G__21981;
i__21953_21959 = G__21982;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21991_21997 = cljs.core.seq.call(null,m);var chunk__21992_21998 = null;var count__21993_21999 = (0);var i__21994_22000 = (0);while(true){
if((i__21994_22000 < count__21993_21999))
{var vec__21995_22001 = cljs.core._nth.call(null,chunk__21992_21998,i__21994_22000);var k_22002 = cljs.core.nth.call(null,vec__21995_22001,(0),null);var v_22003 = cljs.core.nth.call(null,vec__21995_22001,(1),null);var m21990_22004 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21990_22004,f.call(null,k_22002),v_22003));
{
var G__22005 = seq__21991_21997;
var G__22006 = chunk__21992_21998;
var G__22007 = count__21993_21999;
var G__22008 = (i__21994_22000 + (1));
seq__21991_21997 = G__22005;
chunk__21992_21998 = G__22006;
count__21993_21999 = G__22007;
i__21994_22000 = G__22008;
continue;
}
} else
{var temp__4126__auto___22009 = cljs.core.seq.call(null,seq__21991_21997);if(temp__4126__auto___22009)
{var seq__21991_22010__$1 = temp__4126__auto___22009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21991_22010__$1))
{var c__4408__auto___22011 = cljs.core.chunk_first.call(null,seq__21991_22010__$1);{
var G__22012 = cljs.core.chunk_rest.call(null,seq__21991_22010__$1);
var G__22013 = c__4408__auto___22011;
var G__22014 = cljs.core.count.call(null,c__4408__auto___22011);
var G__22015 = (0);
seq__21991_21997 = G__22012;
chunk__21992_21998 = G__22013;
count__21993_21999 = G__22014;
i__21994_22000 = G__22015;
continue;
}
} else
{var vec__21996_22016 = cljs.core.first.call(null,seq__21991_22010__$1);var k_22017 = cljs.core.nth.call(null,vec__21996_22016,(0),null);var v_22018 = cljs.core.nth.call(null,vec__21996_22016,(1),null);var m21990_22019 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21990_22019,f.call(null,k_22017),v_22018));
{
var G__22020 = cljs.core.next.call(null,seq__21991_22010__$1);
var G__22021 = null;
var G__22022 = (0);
var G__22023 = (0);
seq__21991_21997 = G__22020;
chunk__21992_21998 = G__22021;
count__21993_21999 = G__22022;
i__21994_22000 = G__22023;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22030_22034 = cljs.core.seq.call(null,ks);var chunk__22031_22035 = null;var count__22032_22036 = (0);var i__22033_22037 = (0);while(true){
if((i__22033_22037 < count__22032_22036))
{var k_22038 = cljs.core._nth.call(null,chunk__22031_22035,i__22033_22037);var m22029_22039 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22029_22039,k_22038,f.call(null,k_22038)));
{
var G__22040 = seq__22030_22034;
var G__22041 = chunk__22031_22035;
var G__22042 = count__22032_22036;
var G__22043 = (i__22033_22037 + (1));
seq__22030_22034 = G__22040;
chunk__22031_22035 = G__22041;
count__22032_22036 = G__22042;
i__22033_22037 = G__22043;
continue;
}
} else
{var temp__4126__auto___22044 = cljs.core.seq.call(null,seq__22030_22034);if(temp__4126__auto___22044)
{var seq__22030_22045__$1 = temp__4126__auto___22044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22030_22045__$1))
{var c__4408__auto___22046 = cljs.core.chunk_first.call(null,seq__22030_22045__$1);{
var G__22047 = cljs.core.chunk_rest.call(null,seq__22030_22045__$1);
var G__22048 = c__4408__auto___22046;
var G__22049 = cljs.core.count.call(null,c__4408__auto___22046);
var G__22050 = (0);
seq__22030_22034 = G__22047;
chunk__22031_22035 = G__22048;
count__22032_22036 = G__22049;
i__22033_22037 = G__22050;
continue;
}
} else
{var k_22051 = cljs.core.first.call(null,seq__22030_22045__$1);var m22029_22052 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22029_22052,k_22051,f.call(null,k_22051)));
{
var G__22053 = cljs.core.next.call(null,seq__22030_22045__$1);
var G__22054 = null;
var G__22055 = (0);
var G__22056 = (0);
seq__22030_22034 = G__22053;
chunk__22031_22035 = G__22054;
count__22032_22036 = G__22055;
i__22033_22037 = G__22056;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22063_22067 = cljs.core.seq.call(null,vs);var chunk__22064_22068 = null;var count__22065_22069 = (0);var i__22066_22070 = (0);while(true){
if((i__22066_22070 < count__22065_22069))
{var v_22071 = cljs.core._nth.call(null,chunk__22064_22068,i__22066_22070);var m22062_22072 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22062_22072,f.call(null,v_22071),v_22071));
{
var G__22073 = seq__22063_22067;
var G__22074 = chunk__22064_22068;
var G__22075 = count__22065_22069;
var G__22076 = (i__22066_22070 + (1));
seq__22063_22067 = G__22073;
chunk__22064_22068 = G__22074;
count__22065_22069 = G__22075;
i__22066_22070 = G__22076;
continue;
}
} else
{var temp__4126__auto___22077 = cljs.core.seq.call(null,seq__22063_22067);if(temp__4126__auto___22077)
{var seq__22063_22078__$1 = temp__4126__auto___22077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22063_22078__$1))
{var c__4408__auto___22079 = cljs.core.chunk_first.call(null,seq__22063_22078__$1);{
var G__22080 = cljs.core.chunk_rest.call(null,seq__22063_22078__$1);
var G__22081 = c__4408__auto___22079;
var G__22082 = cljs.core.count.call(null,c__4408__auto___22079);
var G__22083 = (0);
seq__22063_22067 = G__22080;
chunk__22064_22068 = G__22081;
count__22065_22069 = G__22082;
i__22066_22070 = G__22083;
continue;
}
} else
{var v_22084 = cljs.core.first.call(null,seq__22063_22078__$1);var m22062_22085 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22062_22085,f.call(null,v_22084),v_22084));
{
var G__22086 = cljs.core.next.call(null,seq__22063_22078__$1);
var G__22087 = null;
var G__22088 = (0);
var G__22089 = (0);
seq__22063_22067 = G__22086;
chunk__22064_22068 = G__22087;
count__22065_22069 = G__22088;
i__22066_22070 = G__22089;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22090){var vec__22092 = p__22090;var k = cljs.core.nth.call(null,vec__22092,(0),null);var ks = cljs.core.nthnext.call(null,vec__22092,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22101_22107 = cljs.core.seq.call(null,x);var chunk__22102_22108 = null;var count__22103_22109 = (0);var i__22104_22110 = (0);while(true){
if((i__22104_22110 < count__22103_22109))
{var vec__22105_22111 = cljs.core._nth.call(null,chunk__22102_22108,i__22104_22110);var k_22112 = cljs.core.nth.call(null,vec__22105_22111,(0),null);var v_22113 = cljs.core.nth.call(null,vec__22105_22111,(1),null);var m22100_22114 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22100_22114,((typeof k_22112 === 'string')?cljs.core.keyword.call(null,k_22112):k_22112),keywordize_map.call(null,v_22113)));
{
var G__22115 = seq__22101_22107;
var G__22116 = chunk__22102_22108;
var G__22117 = count__22103_22109;
var G__22118 = (i__22104_22110 + (1));
seq__22101_22107 = G__22115;
chunk__22102_22108 = G__22116;
count__22103_22109 = G__22117;
i__22104_22110 = G__22118;
continue;
}
} else
{var temp__4126__auto___22119 = cljs.core.seq.call(null,seq__22101_22107);if(temp__4126__auto___22119)
{var seq__22101_22120__$1 = temp__4126__auto___22119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22101_22120__$1))
{var c__4408__auto___22121 = cljs.core.chunk_first.call(null,seq__22101_22120__$1);{
var G__22122 = cljs.core.chunk_rest.call(null,seq__22101_22120__$1);
var G__22123 = c__4408__auto___22121;
var G__22124 = cljs.core.count.call(null,c__4408__auto___22121);
var G__22125 = (0);
seq__22101_22107 = G__22122;
chunk__22102_22108 = G__22123;
count__22103_22109 = G__22124;
i__22104_22110 = G__22125;
continue;
}
} else
{var vec__22106_22126 = cljs.core.first.call(null,seq__22101_22120__$1);var k_22127 = cljs.core.nth.call(null,vec__22106_22126,(0),null);var v_22128 = cljs.core.nth.call(null,vec__22106_22126,(1),null);var m22100_22129 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22100_22129,((typeof k_22127 === 'string')?cljs.core.keyword.call(null,k_22127):k_22127),keywordize_map.call(null,v_22128)));
{
var G__22130 = cljs.core.next.call(null,seq__22101_22120__$1);
var G__22131 = null;
var G__22132 = (0);
var G__22133 = (0);
seq__22101_22107 = G__22130;
chunk__22102_22108 = G__22131;
count__22103_22109 = G__22132;
i__22104_22110 = G__22133;
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
var G__22134 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22135 = cljs.core.next.call(null,ks);
m = G__22134;
ks = G__22135;
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
})(),(function (){var iter__4377__auto__ = (function iter__22144(s__22145){return (new cljs.core.LazySeq(null,(function (){var s__22145__$1 = s__22145;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22145__$1);if(temp__4126__auto__)
{var s__22145__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22145__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22145__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22147 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22146 = (0);while(true){
if((i__22146 < size__4376__auto__))
{var vec__22150 = cljs.core._nth.call(null,c__4375__auto__,i__22146);var k = cljs.core.nth.call(null,vec__22150,(0),null);var v = cljs.core.nth.call(null,vec__22150,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22152 = (i__22146 + (1));
i__22146 = G__22152;
continue;
}
} else
{{
var G__22153 = (i__22146 + (1));
i__22146 = G__22153;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),iter__22144.call(null,cljs.core.chunk_rest.call(null,s__22145__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),null);
}
} else
{var vec__22151 = cljs.core.first.call(null,s__22145__$2);var k = cljs.core.nth.call(null,vec__22151,(0),null);var v = cljs.core.nth.call(null,vec__22151,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22144.call(null,cljs.core.rest.call(null,s__22145__$2)));
} else
{{
var G__22154 = cljs.core.rest.call(null,s__22145__$2);
s__22145__$1 = G__22154;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22155){
var m = cljs.core.first(arglist__22155);
var kvs = cljs.core.rest(arglist__22155);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22156){
var m = cljs.core.first(arglist__22156);
arglist__22156 = cljs.core.next(arglist__22156);
var key_seq = cljs.core.first(arglist__22156);
arglist__22156 = cljs.core.next(arglist__22156);
var f = cljs.core.first(arglist__22156);
var args = cljs.core.rest(arglist__22156);
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
return (function iter__22161(s__22162){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22162__$1 = s__22162;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22162__$1);if(temp__4126__auto__)
{var s__22162__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22162__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22162__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22164 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22163 = (0);while(true){
if((i__22163 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22163);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22164,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22165 = (i__22163 + (1));
i__22163 = G__22165;
continue;
}
} else
{{
var G__22166 = (i__22163 + (1));
i__22163 = G__22166;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22164),iter__22161.call(null,cljs.core.chunk_rest.call(null,s__22162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22164),null);
}
} else
{var x = cljs.core.first.call(null,s__22162__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22161.call(null,cljs.core.rest.call(null,s__22162__$2)));
} else
{{
var G__22167 = cljs.core.rest.call(null,s__22162__$2);
s__22162__$1 = G__22167;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22168){
var colls = cljs.core.seq(arglist__22168);
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
var G__22169__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22170 = conj_when.call(null,coll,x);
var G__22171 = cljs.core.first.call(null,xs);
var G__22172 = cljs.core.next.call(null,xs);
coll = G__22170;
x = G__22171;
xs = G__22172;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22169 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22169__delegate.call(this,coll,x,xs);};
G__22169.cljs$lang$maxFixedArity = 2;
G__22169.cljs$lang$applyTo = (function (arglist__22173){
var coll = cljs.core.first(arglist__22173);
arglist__22173 = cljs.core.next(arglist__22173);
var x = cljs.core.first(arglist__22173);
var xs = cljs.core.rest(arglist__22173);
return G__22169__delegate(coll,x,xs);
});
G__22169.cljs$core$IFn$_invoke$arity$variadic = G__22169__delegate;
return G__22169;
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
var G__22175__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22174_SHARP_){return cljs.core.apply.call(null,f,p1__22174_SHARP_,args);
}));
};
var G__22175 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22175__delegate.call(this,a,f,args);};
G__22175.cljs$lang$maxFixedArity = 2;
G__22175.cljs$lang$applyTo = (function (arglist__22176){
var a = cljs.core.first(arglist__22176);
arglist__22176 = cljs.core.next(arglist__22176);
var f = cljs.core.first(arglist__22176);
var args = cljs.core.rest(arglist__22176);
return G__22175__delegate(a,f,args);
});
G__22175.cljs$core$IFn$_invoke$arity$variadic = G__22175__delegate;
return G__22175;
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
var G__22177__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22177 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22177__delegate.call(this,f,arg,args);};
G__22177.cljs$lang$maxFixedArity = 2;
G__22177.cljs$lang$applyTo = (function (arglist__22178){
var f = cljs.core.first(arglist__22178);
arglist__22178 = cljs.core.next(arglist__22178);
var arg = cljs.core.first(arglist__22178);
var args = cljs.core.rest(arglist__22178);
return G__22177__delegate(f,arg,args);
});
G__22177.cljs$core$IFn$_invoke$arity$variadic = G__22177__delegate;
return G__22177;
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
