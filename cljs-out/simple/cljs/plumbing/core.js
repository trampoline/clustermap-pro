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
var G__19854__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19854 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19854__delegate.call(this,m,k,f,x1,x2,xs);};
G__19854.cljs$lang$maxFixedArity = 5;
G__19854.cljs$lang$applyTo = (function (arglist__19855){
var m = cljs.core.first(arglist__19855);
arglist__19855 = cljs.core.next(arglist__19855);
var k = cljs.core.first(arglist__19855);
arglist__19855 = cljs.core.next(arglist__19855);
var f = cljs.core.first(arglist__19855);
arglist__19855 = cljs.core.next(arglist__19855);
var x1 = cljs.core.first(arglist__19855);
arglist__19855 = cljs.core.next(arglist__19855);
var x2 = cljs.core.first(arglist__19855);
var xs = cljs.core.rest(arglist__19855);
return G__19854__delegate(m,k,f,x1,x2,xs);
});
G__19854.cljs$core$IFn$_invoke$arity$variadic = G__19854__delegate;
return G__19854;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19864_19870 = cljs.core.seq.call(null,m);var chunk__19865_19871 = null;var count__19866_19872 = (0);var i__19867_19873 = (0);while(true){
if((i__19867_19873 < count__19866_19872))
{var vec__19868_19874 = cljs.core._nth.call(null,chunk__19865_19871,i__19867_19873);var k_19875 = cljs.core.nth.call(null,vec__19868_19874,(0),null);var v_19876 = cljs.core.nth.call(null,vec__19868_19874,(1),null);var m19863_19877 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19863_19877,k_19875,f.call(null,v_19876)));
{
var G__19878 = seq__19864_19870;
var G__19879 = chunk__19865_19871;
var G__19880 = count__19866_19872;
var G__19881 = (i__19867_19873 + (1));
seq__19864_19870 = G__19878;
chunk__19865_19871 = G__19879;
count__19866_19872 = G__19880;
i__19867_19873 = G__19881;
continue;
}
} else
{var temp__4126__auto___19882 = cljs.core.seq.call(null,seq__19864_19870);if(temp__4126__auto___19882)
{var seq__19864_19883__$1 = temp__4126__auto___19882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19864_19883__$1))
{var c__4408__auto___19884 = cljs.core.chunk_first.call(null,seq__19864_19883__$1);{
var G__19885 = cljs.core.chunk_rest.call(null,seq__19864_19883__$1);
var G__19886 = c__4408__auto___19884;
var G__19887 = cljs.core.count.call(null,c__4408__auto___19884);
var G__19888 = (0);
seq__19864_19870 = G__19885;
chunk__19865_19871 = G__19886;
count__19866_19872 = G__19887;
i__19867_19873 = G__19888;
continue;
}
} else
{var vec__19869_19889 = cljs.core.first.call(null,seq__19864_19883__$1);var k_19890 = cljs.core.nth.call(null,vec__19869_19889,(0),null);var v_19891 = cljs.core.nth.call(null,vec__19869_19889,(1),null);var m19863_19892 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19863_19892,k_19890,f.call(null,v_19891)));
{
var G__19893 = cljs.core.next.call(null,seq__19864_19883__$1);
var G__19894 = null;
var G__19895 = (0);
var G__19896 = (0);
seq__19864_19870 = G__19893;
chunk__19865_19871 = G__19894;
count__19866_19872 = G__19895;
i__19867_19873 = G__19896;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19905_19911 = cljs.core.seq.call(null,m);var chunk__19906_19912 = null;var count__19907_19913 = (0);var i__19908_19914 = (0);while(true){
if((i__19908_19914 < count__19907_19913))
{var vec__19909_19915 = cljs.core._nth.call(null,chunk__19906_19912,i__19908_19914);var k_19916 = cljs.core.nth.call(null,vec__19909_19915,(0),null);var v_19917 = cljs.core.nth.call(null,vec__19909_19915,(1),null);var m19904_19918 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19904_19918,f.call(null,k_19916),v_19917));
{
var G__19919 = seq__19905_19911;
var G__19920 = chunk__19906_19912;
var G__19921 = count__19907_19913;
var G__19922 = (i__19908_19914 + (1));
seq__19905_19911 = G__19919;
chunk__19906_19912 = G__19920;
count__19907_19913 = G__19921;
i__19908_19914 = G__19922;
continue;
}
} else
{var temp__4126__auto___19923 = cljs.core.seq.call(null,seq__19905_19911);if(temp__4126__auto___19923)
{var seq__19905_19924__$1 = temp__4126__auto___19923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19905_19924__$1))
{var c__4408__auto___19925 = cljs.core.chunk_first.call(null,seq__19905_19924__$1);{
var G__19926 = cljs.core.chunk_rest.call(null,seq__19905_19924__$1);
var G__19927 = c__4408__auto___19925;
var G__19928 = cljs.core.count.call(null,c__4408__auto___19925);
var G__19929 = (0);
seq__19905_19911 = G__19926;
chunk__19906_19912 = G__19927;
count__19907_19913 = G__19928;
i__19908_19914 = G__19929;
continue;
}
} else
{var vec__19910_19930 = cljs.core.first.call(null,seq__19905_19924__$1);var k_19931 = cljs.core.nth.call(null,vec__19910_19930,(0),null);var v_19932 = cljs.core.nth.call(null,vec__19910_19930,(1),null);var m19904_19933 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19904_19933,f.call(null,k_19931),v_19932));
{
var G__19934 = cljs.core.next.call(null,seq__19905_19924__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__19905_19911 = G__19934;
chunk__19906_19912 = G__19935;
count__19907_19913 = G__19936;
i__19908_19914 = G__19937;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19944_19948 = cljs.core.seq.call(null,ks);var chunk__19945_19949 = null;var count__19946_19950 = (0);var i__19947_19951 = (0);while(true){
if((i__19947_19951 < count__19946_19950))
{var k_19952 = cljs.core._nth.call(null,chunk__19945_19949,i__19947_19951);var m19943_19953 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19943_19953,k_19952,f.call(null,k_19952)));
{
var G__19954 = seq__19944_19948;
var G__19955 = chunk__19945_19949;
var G__19956 = count__19946_19950;
var G__19957 = (i__19947_19951 + (1));
seq__19944_19948 = G__19954;
chunk__19945_19949 = G__19955;
count__19946_19950 = G__19956;
i__19947_19951 = G__19957;
continue;
}
} else
{var temp__4126__auto___19958 = cljs.core.seq.call(null,seq__19944_19948);if(temp__4126__auto___19958)
{var seq__19944_19959__$1 = temp__4126__auto___19958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19944_19959__$1))
{var c__4408__auto___19960 = cljs.core.chunk_first.call(null,seq__19944_19959__$1);{
var G__19961 = cljs.core.chunk_rest.call(null,seq__19944_19959__$1);
var G__19962 = c__4408__auto___19960;
var G__19963 = cljs.core.count.call(null,c__4408__auto___19960);
var G__19964 = (0);
seq__19944_19948 = G__19961;
chunk__19945_19949 = G__19962;
count__19946_19950 = G__19963;
i__19947_19951 = G__19964;
continue;
}
} else
{var k_19965 = cljs.core.first.call(null,seq__19944_19959__$1);var m19943_19966 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19943_19966,k_19965,f.call(null,k_19965)));
{
var G__19967 = cljs.core.next.call(null,seq__19944_19959__$1);
var G__19968 = null;
var G__19969 = (0);
var G__19970 = (0);
seq__19944_19948 = G__19967;
chunk__19945_19949 = G__19968;
count__19946_19950 = G__19969;
i__19947_19951 = G__19970;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19977_19981 = cljs.core.seq.call(null,vs);var chunk__19978_19982 = null;var count__19979_19983 = (0);var i__19980_19984 = (0);while(true){
if((i__19980_19984 < count__19979_19983))
{var v_19985 = cljs.core._nth.call(null,chunk__19978_19982,i__19980_19984);var m19976_19986 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19976_19986,f.call(null,v_19985),v_19985));
{
var G__19987 = seq__19977_19981;
var G__19988 = chunk__19978_19982;
var G__19989 = count__19979_19983;
var G__19990 = (i__19980_19984 + (1));
seq__19977_19981 = G__19987;
chunk__19978_19982 = G__19988;
count__19979_19983 = G__19989;
i__19980_19984 = G__19990;
continue;
}
} else
{var temp__4126__auto___19991 = cljs.core.seq.call(null,seq__19977_19981);if(temp__4126__auto___19991)
{var seq__19977_19992__$1 = temp__4126__auto___19991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19977_19992__$1))
{var c__4408__auto___19993 = cljs.core.chunk_first.call(null,seq__19977_19992__$1);{
var G__19994 = cljs.core.chunk_rest.call(null,seq__19977_19992__$1);
var G__19995 = c__4408__auto___19993;
var G__19996 = cljs.core.count.call(null,c__4408__auto___19993);
var G__19997 = (0);
seq__19977_19981 = G__19994;
chunk__19978_19982 = G__19995;
count__19979_19983 = G__19996;
i__19980_19984 = G__19997;
continue;
}
} else
{var v_19998 = cljs.core.first.call(null,seq__19977_19992__$1);var m19976_19999 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19976_19999,f.call(null,v_19998),v_19998));
{
var G__20000 = cljs.core.next.call(null,seq__19977_19992__$1);
var G__20001 = null;
var G__20002 = (0);
var G__20003 = (0);
seq__19977_19981 = G__20000;
chunk__19978_19982 = G__20001;
count__19979_19983 = G__20002;
i__19980_19984 = G__20003;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20004){var vec__20006 = p__20004;var k = cljs.core.nth.call(null,vec__20006,(0),null);var ks = cljs.core.nthnext.call(null,vec__20006,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20015_20021 = cljs.core.seq.call(null,x);var chunk__20016_20022 = null;var count__20017_20023 = (0);var i__20018_20024 = (0);while(true){
if((i__20018_20024 < count__20017_20023))
{var vec__20019_20025 = cljs.core._nth.call(null,chunk__20016_20022,i__20018_20024);var k_20026 = cljs.core.nth.call(null,vec__20019_20025,(0),null);var v_20027 = cljs.core.nth.call(null,vec__20019_20025,(1),null);var m20014_20028 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20014_20028,((typeof k_20026 === 'string')?cljs.core.keyword.call(null,k_20026):k_20026),keywordize_map.call(null,v_20027)));
{
var G__20029 = seq__20015_20021;
var G__20030 = chunk__20016_20022;
var G__20031 = count__20017_20023;
var G__20032 = (i__20018_20024 + (1));
seq__20015_20021 = G__20029;
chunk__20016_20022 = G__20030;
count__20017_20023 = G__20031;
i__20018_20024 = G__20032;
continue;
}
} else
{var temp__4126__auto___20033 = cljs.core.seq.call(null,seq__20015_20021);if(temp__4126__auto___20033)
{var seq__20015_20034__$1 = temp__4126__auto___20033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20015_20034__$1))
{var c__4408__auto___20035 = cljs.core.chunk_first.call(null,seq__20015_20034__$1);{
var G__20036 = cljs.core.chunk_rest.call(null,seq__20015_20034__$1);
var G__20037 = c__4408__auto___20035;
var G__20038 = cljs.core.count.call(null,c__4408__auto___20035);
var G__20039 = (0);
seq__20015_20021 = G__20036;
chunk__20016_20022 = G__20037;
count__20017_20023 = G__20038;
i__20018_20024 = G__20039;
continue;
}
} else
{var vec__20020_20040 = cljs.core.first.call(null,seq__20015_20034__$1);var k_20041 = cljs.core.nth.call(null,vec__20020_20040,(0),null);var v_20042 = cljs.core.nth.call(null,vec__20020_20040,(1),null);var m20014_20043 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20014_20043,((typeof k_20041 === 'string')?cljs.core.keyword.call(null,k_20041):k_20041),keywordize_map.call(null,v_20042)));
{
var G__20044 = cljs.core.next.call(null,seq__20015_20034__$1);
var G__20045 = null;
var G__20046 = (0);
var G__20047 = (0);
seq__20015_20021 = G__20044;
chunk__20016_20022 = G__20045;
count__20017_20023 = G__20046;
i__20018_20024 = G__20047;
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
var G__20048 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20049 = cljs.core.next.call(null,ks);
m = G__20048;
ks = G__20049;
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
})(),(function (){var iter__4377__auto__ = (function iter__20058(s__20059){return (new cljs.core.LazySeq(null,(function (){var s__20059__$1 = s__20059;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20059__$1);if(temp__4126__auto__)
{var s__20059__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20059__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20059__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20061 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20060 = (0);while(true){
if((i__20060 < size__4376__auto__))
{var vec__20064 = cljs.core._nth.call(null,c__4375__auto__,i__20060);var k = cljs.core.nth.call(null,vec__20064,(0),null);var v = cljs.core.nth.call(null,vec__20064,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20066 = (i__20060 + (1));
i__20060 = G__20066;
continue;
}
} else
{{
var G__20067 = (i__20060 + (1));
i__20060 = G__20067;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20061),iter__20058.call(null,cljs.core.chunk_rest.call(null,s__20059__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20061),null);
}
} else
{var vec__20065 = cljs.core.first.call(null,s__20059__$2);var k = cljs.core.nth.call(null,vec__20065,(0),null);var v = cljs.core.nth.call(null,vec__20065,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20058.call(null,cljs.core.rest.call(null,s__20059__$2)));
} else
{{
var G__20068 = cljs.core.rest.call(null,s__20059__$2);
s__20059__$1 = G__20068;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20069){
var m = cljs.core.first(arglist__20069);
var kvs = cljs.core.rest(arglist__20069);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20070){
var m = cljs.core.first(arglist__20070);
arglist__20070 = cljs.core.next(arglist__20070);
var key_seq = cljs.core.first(arglist__20070);
arglist__20070 = cljs.core.next(arglist__20070);
var f = cljs.core.first(arglist__20070);
var args = cljs.core.rest(arglist__20070);
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
return (function iter__20075(s__20076){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20076__$1 = s__20076;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20076__$1);if(temp__4126__auto__)
{var s__20076__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20076__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20076__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20078 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20077 = (0);while(true){
if((i__20077 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20077);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20078,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20079 = (i__20077 + (1));
i__20077 = G__20079;
continue;
}
} else
{{
var G__20080 = (i__20077 + (1));
i__20077 = G__20080;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20078),iter__20075.call(null,cljs.core.chunk_rest.call(null,s__20076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20078),null);
}
} else
{var x = cljs.core.first.call(null,s__20076__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20075.call(null,cljs.core.rest.call(null,s__20076__$2)));
} else
{{
var G__20081 = cljs.core.rest.call(null,s__20076__$2);
s__20076__$1 = G__20081;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20082){
var colls = cljs.core.seq(arglist__20082);
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
var G__20083__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20084 = conj_when.call(null,coll,x);
var G__20085 = cljs.core.first.call(null,xs);
var G__20086 = cljs.core.next.call(null,xs);
coll = G__20084;
x = G__20085;
xs = G__20086;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20083 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20083__delegate.call(this,coll,x,xs);};
G__20083.cljs$lang$maxFixedArity = 2;
G__20083.cljs$lang$applyTo = (function (arglist__20087){
var coll = cljs.core.first(arglist__20087);
arglist__20087 = cljs.core.next(arglist__20087);
var x = cljs.core.first(arglist__20087);
var xs = cljs.core.rest(arglist__20087);
return G__20083__delegate(coll,x,xs);
});
G__20083.cljs$core$IFn$_invoke$arity$variadic = G__20083__delegate;
return G__20083;
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
var G__20089__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20088_SHARP_){return cljs.core.apply.call(null,f,p1__20088_SHARP_,args);
}));
};
var G__20089 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20089__delegate.call(this,a,f,args);};
G__20089.cljs$lang$maxFixedArity = 2;
G__20089.cljs$lang$applyTo = (function (arglist__20090){
var a = cljs.core.first(arglist__20090);
arglist__20090 = cljs.core.next(arglist__20090);
var f = cljs.core.first(arglist__20090);
var args = cljs.core.rest(arglist__20090);
return G__20089__delegate(a,f,args);
});
G__20089.cljs$core$IFn$_invoke$arity$variadic = G__20089__delegate;
return G__20089;
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
var G__20091__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20091 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20091__delegate.call(this,f,arg,args);};
G__20091.cljs$lang$maxFixedArity = 2;
G__20091.cljs$lang$applyTo = (function (arglist__20092){
var f = cljs.core.first(arglist__20092);
arglist__20092 = cljs.core.next(arglist__20092);
var arg = cljs.core.first(arglist__20092);
var args = cljs.core.rest(arglist__20092);
return G__20091__delegate(f,arg,args);
});
G__20091.cljs$core$IFn$_invoke$arity$variadic = G__20091__delegate;
return G__20091;
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
