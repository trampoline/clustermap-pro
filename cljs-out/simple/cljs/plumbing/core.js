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
var G__21912__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21912 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21912__delegate.call(this,m,k,f,x1,x2,xs);};
G__21912.cljs$lang$maxFixedArity = 5;
G__21912.cljs$lang$applyTo = (function (arglist__21913){
var m = cljs.core.first(arglist__21913);
arglist__21913 = cljs.core.next(arglist__21913);
var k = cljs.core.first(arglist__21913);
arglist__21913 = cljs.core.next(arglist__21913);
var f = cljs.core.first(arglist__21913);
arglist__21913 = cljs.core.next(arglist__21913);
var x1 = cljs.core.first(arglist__21913);
arglist__21913 = cljs.core.next(arglist__21913);
var x2 = cljs.core.first(arglist__21913);
var xs = cljs.core.rest(arglist__21913);
return G__21912__delegate(m,k,f,x1,x2,xs);
});
G__21912.cljs$core$IFn$_invoke$arity$variadic = G__21912__delegate;
return G__21912;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21922_21928 = cljs.core.seq.call(null,m);var chunk__21923_21929 = null;var count__21924_21930 = (0);var i__21925_21931 = (0);while(true){
if((i__21925_21931 < count__21924_21930))
{var vec__21926_21932 = cljs.core._nth.call(null,chunk__21923_21929,i__21925_21931);var k_21933 = cljs.core.nth.call(null,vec__21926_21932,(0),null);var v_21934 = cljs.core.nth.call(null,vec__21926_21932,(1),null);var m21921_21935 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21921_21935,k_21933,f.call(null,v_21934)));
{
var G__21936 = seq__21922_21928;
var G__21937 = chunk__21923_21929;
var G__21938 = count__21924_21930;
var G__21939 = (i__21925_21931 + (1));
seq__21922_21928 = G__21936;
chunk__21923_21929 = G__21937;
count__21924_21930 = G__21938;
i__21925_21931 = G__21939;
continue;
}
} else
{var temp__4126__auto___21940 = cljs.core.seq.call(null,seq__21922_21928);if(temp__4126__auto___21940)
{var seq__21922_21941__$1 = temp__4126__auto___21940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21922_21941__$1))
{var c__4408__auto___21942 = cljs.core.chunk_first.call(null,seq__21922_21941__$1);{
var G__21943 = cljs.core.chunk_rest.call(null,seq__21922_21941__$1);
var G__21944 = c__4408__auto___21942;
var G__21945 = cljs.core.count.call(null,c__4408__auto___21942);
var G__21946 = (0);
seq__21922_21928 = G__21943;
chunk__21923_21929 = G__21944;
count__21924_21930 = G__21945;
i__21925_21931 = G__21946;
continue;
}
} else
{var vec__21927_21947 = cljs.core.first.call(null,seq__21922_21941__$1);var k_21948 = cljs.core.nth.call(null,vec__21927_21947,(0),null);var v_21949 = cljs.core.nth.call(null,vec__21927_21947,(1),null);var m21921_21950 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21921_21950,k_21948,f.call(null,v_21949)));
{
var G__21951 = cljs.core.next.call(null,seq__21922_21941__$1);
var G__21952 = null;
var G__21953 = (0);
var G__21954 = (0);
seq__21922_21928 = G__21951;
chunk__21923_21929 = G__21952;
count__21924_21930 = G__21953;
i__21925_21931 = G__21954;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21963_21969 = cljs.core.seq.call(null,m);var chunk__21964_21970 = null;var count__21965_21971 = (0);var i__21966_21972 = (0);while(true){
if((i__21966_21972 < count__21965_21971))
{var vec__21967_21973 = cljs.core._nth.call(null,chunk__21964_21970,i__21966_21972);var k_21974 = cljs.core.nth.call(null,vec__21967_21973,(0),null);var v_21975 = cljs.core.nth.call(null,vec__21967_21973,(1),null);var m21962_21976 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21962_21976,f.call(null,k_21974),v_21975));
{
var G__21977 = seq__21963_21969;
var G__21978 = chunk__21964_21970;
var G__21979 = count__21965_21971;
var G__21980 = (i__21966_21972 + (1));
seq__21963_21969 = G__21977;
chunk__21964_21970 = G__21978;
count__21965_21971 = G__21979;
i__21966_21972 = G__21980;
continue;
}
} else
{var temp__4126__auto___21981 = cljs.core.seq.call(null,seq__21963_21969);if(temp__4126__auto___21981)
{var seq__21963_21982__$1 = temp__4126__auto___21981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21963_21982__$1))
{var c__4408__auto___21983 = cljs.core.chunk_first.call(null,seq__21963_21982__$1);{
var G__21984 = cljs.core.chunk_rest.call(null,seq__21963_21982__$1);
var G__21985 = c__4408__auto___21983;
var G__21986 = cljs.core.count.call(null,c__4408__auto___21983);
var G__21987 = (0);
seq__21963_21969 = G__21984;
chunk__21964_21970 = G__21985;
count__21965_21971 = G__21986;
i__21966_21972 = G__21987;
continue;
}
} else
{var vec__21968_21988 = cljs.core.first.call(null,seq__21963_21982__$1);var k_21989 = cljs.core.nth.call(null,vec__21968_21988,(0),null);var v_21990 = cljs.core.nth.call(null,vec__21968_21988,(1),null);var m21962_21991 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21962_21991,f.call(null,k_21989),v_21990));
{
var G__21992 = cljs.core.next.call(null,seq__21963_21982__$1);
var G__21993 = null;
var G__21994 = (0);
var G__21995 = (0);
seq__21963_21969 = G__21992;
chunk__21964_21970 = G__21993;
count__21965_21971 = G__21994;
i__21966_21972 = G__21995;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22002_22006 = cljs.core.seq.call(null,ks);var chunk__22003_22007 = null;var count__22004_22008 = (0);var i__22005_22009 = (0);while(true){
if((i__22005_22009 < count__22004_22008))
{var k_22010 = cljs.core._nth.call(null,chunk__22003_22007,i__22005_22009);var m22001_22011 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22001_22011,k_22010,f.call(null,k_22010)));
{
var G__22012 = seq__22002_22006;
var G__22013 = chunk__22003_22007;
var G__22014 = count__22004_22008;
var G__22015 = (i__22005_22009 + (1));
seq__22002_22006 = G__22012;
chunk__22003_22007 = G__22013;
count__22004_22008 = G__22014;
i__22005_22009 = G__22015;
continue;
}
} else
{var temp__4126__auto___22016 = cljs.core.seq.call(null,seq__22002_22006);if(temp__4126__auto___22016)
{var seq__22002_22017__$1 = temp__4126__auto___22016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22002_22017__$1))
{var c__4408__auto___22018 = cljs.core.chunk_first.call(null,seq__22002_22017__$1);{
var G__22019 = cljs.core.chunk_rest.call(null,seq__22002_22017__$1);
var G__22020 = c__4408__auto___22018;
var G__22021 = cljs.core.count.call(null,c__4408__auto___22018);
var G__22022 = (0);
seq__22002_22006 = G__22019;
chunk__22003_22007 = G__22020;
count__22004_22008 = G__22021;
i__22005_22009 = G__22022;
continue;
}
} else
{var k_22023 = cljs.core.first.call(null,seq__22002_22017__$1);var m22001_22024 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22001_22024,k_22023,f.call(null,k_22023)));
{
var G__22025 = cljs.core.next.call(null,seq__22002_22017__$1);
var G__22026 = null;
var G__22027 = (0);
var G__22028 = (0);
seq__22002_22006 = G__22025;
chunk__22003_22007 = G__22026;
count__22004_22008 = G__22027;
i__22005_22009 = G__22028;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22035_22039 = cljs.core.seq.call(null,vs);var chunk__22036_22040 = null;var count__22037_22041 = (0);var i__22038_22042 = (0);while(true){
if((i__22038_22042 < count__22037_22041))
{var v_22043 = cljs.core._nth.call(null,chunk__22036_22040,i__22038_22042);var m22034_22044 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22034_22044,f.call(null,v_22043),v_22043));
{
var G__22045 = seq__22035_22039;
var G__22046 = chunk__22036_22040;
var G__22047 = count__22037_22041;
var G__22048 = (i__22038_22042 + (1));
seq__22035_22039 = G__22045;
chunk__22036_22040 = G__22046;
count__22037_22041 = G__22047;
i__22038_22042 = G__22048;
continue;
}
} else
{var temp__4126__auto___22049 = cljs.core.seq.call(null,seq__22035_22039);if(temp__4126__auto___22049)
{var seq__22035_22050__$1 = temp__4126__auto___22049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22035_22050__$1))
{var c__4408__auto___22051 = cljs.core.chunk_first.call(null,seq__22035_22050__$1);{
var G__22052 = cljs.core.chunk_rest.call(null,seq__22035_22050__$1);
var G__22053 = c__4408__auto___22051;
var G__22054 = cljs.core.count.call(null,c__4408__auto___22051);
var G__22055 = (0);
seq__22035_22039 = G__22052;
chunk__22036_22040 = G__22053;
count__22037_22041 = G__22054;
i__22038_22042 = G__22055;
continue;
}
} else
{var v_22056 = cljs.core.first.call(null,seq__22035_22050__$1);var m22034_22057 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22034_22057,f.call(null,v_22056),v_22056));
{
var G__22058 = cljs.core.next.call(null,seq__22035_22050__$1);
var G__22059 = null;
var G__22060 = (0);
var G__22061 = (0);
seq__22035_22039 = G__22058;
chunk__22036_22040 = G__22059;
count__22037_22041 = G__22060;
i__22038_22042 = G__22061;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22062){var vec__22064 = p__22062;var k = cljs.core.nth.call(null,vec__22064,(0),null);var ks = cljs.core.nthnext.call(null,vec__22064,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22073_22079 = cljs.core.seq.call(null,x);var chunk__22074_22080 = null;var count__22075_22081 = (0);var i__22076_22082 = (0);while(true){
if((i__22076_22082 < count__22075_22081))
{var vec__22077_22083 = cljs.core._nth.call(null,chunk__22074_22080,i__22076_22082);var k_22084 = cljs.core.nth.call(null,vec__22077_22083,(0),null);var v_22085 = cljs.core.nth.call(null,vec__22077_22083,(1),null);var m22072_22086 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22072_22086,((typeof k_22084 === 'string')?cljs.core.keyword.call(null,k_22084):k_22084),keywordize_map.call(null,v_22085)));
{
var G__22087 = seq__22073_22079;
var G__22088 = chunk__22074_22080;
var G__22089 = count__22075_22081;
var G__22090 = (i__22076_22082 + (1));
seq__22073_22079 = G__22087;
chunk__22074_22080 = G__22088;
count__22075_22081 = G__22089;
i__22076_22082 = G__22090;
continue;
}
} else
{var temp__4126__auto___22091 = cljs.core.seq.call(null,seq__22073_22079);if(temp__4126__auto___22091)
{var seq__22073_22092__$1 = temp__4126__auto___22091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22073_22092__$1))
{var c__4408__auto___22093 = cljs.core.chunk_first.call(null,seq__22073_22092__$1);{
var G__22094 = cljs.core.chunk_rest.call(null,seq__22073_22092__$1);
var G__22095 = c__4408__auto___22093;
var G__22096 = cljs.core.count.call(null,c__4408__auto___22093);
var G__22097 = (0);
seq__22073_22079 = G__22094;
chunk__22074_22080 = G__22095;
count__22075_22081 = G__22096;
i__22076_22082 = G__22097;
continue;
}
} else
{var vec__22078_22098 = cljs.core.first.call(null,seq__22073_22092__$1);var k_22099 = cljs.core.nth.call(null,vec__22078_22098,(0),null);var v_22100 = cljs.core.nth.call(null,vec__22078_22098,(1),null);var m22072_22101 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22072_22101,((typeof k_22099 === 'string')?cljs.core.keyword.call(null,k_22099):k_22099),keywordize_map.call(null,v_22100)));
{
var G__22102 = cljs.core.next.call(null,seq__22073_22092__$1);
var G__22103 = null;
var G__22104 = (0);
var G__22105 = (0);
seq__22073_22079 = G__22102;
chunk__22074_22080 = G__22103;
count__22075_22081 = G__22104;
i__22076_22082 = G__22105;
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
var G__22106 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22107 = cljs.core.next.call(null,ks);
m = G__22106;
ks = G__22107;
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
})(),(function (){var iter__4377__auto__ = (function iter__22116(s__22117){return (new cljs.core.LazySeq(null,(function (){var s__22117__$1 = s__22117;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22117__$1);if(temp__4126__auto__)
{var s__22117__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22117__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22117__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22119 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22118 = (0);while(true){
if((i__22118 < size__4376__auto__))
{var vec__22122 = cljs.core._nth.call(null,c__4375__auto__,i__22118);var k = cljs.core.nth.call(null,vec__22122,(0),null);var v = cljs.core.nth.call(null,vec__22122,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22124 = (i__22118 + (1));
i__22118 = G__22124;
continue;
}
} else
{{
var G__22125 = (i__22118 + (1));
i__22118 = G__22125;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22119),iter__22116.call(null,cljs.core.chunk_rest.call(null,s__22117__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22119),null);
}
} else
{var vec__22123 = cljs.core.first.call(null,s__22117__$2);var k = cljs.core.nth.call(null,vec__22123,(0),null);var v = cljs.core.nth.call(null,vec__22123,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22116.call(null,cljs.core.rest.call(null,s__22117__$2)));
} else
{{
var G__22126 = cljs.core.rest.call(null,s__22117__$2);
s__22117__$1 = G__22126;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22127){
var m = cljs.core.first(arglist__22127);
var kvs = cljs.core.rest(arglist__22127);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22128){
var m = cljs.core.first(arglist__22128);
arglist__22128 = cljs.core.next(arglist__22128);
var key_seq = cljs.core.first(arglist__22128);
arglist__22128 = cljs.core.next(arglist__22128);
var f = cljs.core.first(arglist__22128);
var args = cljs.core.rest(arglist__22128);
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
return (function iter__22133(s__22134){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22134__$1 = s__22134;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22134__$1);if(temp__4126__auto__)
{var s__22134__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22134__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22134__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22136 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22135 = (0);while(true){
if((i__22135 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22135);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22136,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22137 = (i__22135 + (1));
i__22135 = G__22137;
continue;
}
} else
{{
var G__22138 = (i__22135 + (1));
i__22135 = G__22138;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22136),iter__22133.call(null,cljs.core.chunk_rest.call(null,s__22134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22136),null);
}
} else
{var x = cljs.core.first.call(null,s__22134__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22133.call(null,cljs.core.rest.call(null,s__22134__$2)));
} else
{{
var G__22139 = cljs.core.rest.call(null,s__22134__$2);
s__22134__$1 = G__22139;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22140){
var colls = cljs.core.seq(arglist__22140);
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
var G__22141__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22142 = conj_when.call(null,coll,x);
var G__22143 = cljs.core.first.call(null,xs);
var G__22144 = cljs.core.next.call(null,xs);
coll = G__22142;
x = G__22143;
xs = G__22144;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22141 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22141__delegate.call(this,coll,x,xs);};
G__22141.cljs$lang$maxFixedArity = 2;
G__22141.cljs$lang$applyTo = (function (arglist__22145){
var coll = cljs.core.first(arglist__22145);
arglist__22145 = cljs.core.next(arglist__22145);
var x = cljs.core.first(arglist__22145);
var xs = cljs.core.rest(arglist__22145);
return G__22141__delegate(coll,x,xs);
});
G__22141.cljs$core$IFn$_invoke$arity$variadic = G__22141__delegate;
return G__22141;
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
var G__22147__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22146_SHARP_){return cljs.core.apply.call(null,f,p1__22146_SHARP_,args);
}));
};
var G__22147 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22147__delegate.call(this,a,f,args);};
G__22147.cljs$lang$maxFixedArity = 2;
G__22147.cljs$lang$applyTo = (function (arglist__22148){
var a = cljs.core.first(arglist__22148);
arglist__22148 = cljs.core.next(arglist__22148);
var f = cljs.core.first(arglist__22148);
var args = cljs.core.rest(arglist__22148);
return G__22147__delegate(a,f,args);
});
G__22147.cljs$core$IFn$_invoke$arity$variadic = G__22147__delegate;
return G__22147;
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
var G__22149__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22149 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22149__delegate.call(this,f,arg,args);};
G__22149.cljs$lang$maxFixedArity = 2;
G__22149.cljs$lang$applyTo = (function (arglist__22150){
var f = cljs.core.first(arglist__22150);
arglist__22150 = cljs.core.next(arglist__22150);
var arg = cljs.core.first(arglist__22150);
var args = cljs.core.rest(arglist__22150);
return G__22149__delegate(f,arg,args);
});
G__22149.cljs$core$IFn$_invoke$arity$variadic = G__22149__delegate;
return G__22149;
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
