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
var G__19852__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19852 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19852__delegate.call(this,m,k,f,x1,x2,xs);};
G__19852.cljs$lang$maxFixedArity = 5;
G__19852.cljs$lang$applyTo = (function (arglist__19853){
var m = cljs.core.first(arglist__19853);
arglist__19853 = cljs.core.next(arglist__19853);
var k = cljs.core.first(arglist__19853);
arglist__19853 = cljs.core.next(arglist__19853);
var f = cljs.core.first(arglist__19853);
arglist__19853 = cljs.core.next(arglist__19853);
var x1 = cljs.core.first(arglist__19853);
arglist__19853 = cljs.core.next(arglist__19853);
var x2 = cljs.core.first(arglist__19853);
var xs = cljs.core.rest(arglist__19853);
return G__19852__delegate(m,k,f,x1,x2,xs);
});
G__19852.cljs$core$IFn$_invoke$arity$variadic = G__19852__delegate;
return G__19852;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19862_19868 = cljs.core.seq.call(null,m);var chunk__19863_19869 = null;var count__19864_19870 = (0);var i__19865_19871 = (0);while(true){
if((i__19865_19871 < count__19864_19870))
{var vec__19866_19872 = cljs.core._nth.call(null,chunk__19863_19869,i__19865_19871);var k_19873 = cljs.core.nth.call(null,vec__19866_19872,(0),null);var v_19874 = cljs.core.nth.call(null,vec__19866_19872,(1),null);var m19861_19875 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19861_19875,k_19873,f.call(null,v_19874)));
{
var G__19876 = seq__19862_19868;
var G__19877 = chunk__19863_19869;
var G__19878 = count__19864_19870;
var G__19879 = (i__19865_19871 + (1));
seq__19862_19868 = G__19876;
chunk__19863_19869 = G__19877;
count__19864_19870 = G__19878;
i__19865_19871 = G__19879;
continue;
}
} else
{var temp__4126__auto___19880 = cljs.core.seq.call(null,seq__19862_19868);if(temp__4126__auto___19880)
{var seq__19862_19881__$1 = temp__4126__auto___19880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19862_19881__$1))
{var c__4408__auto___19882 = cljs.core.chunk_first.call(null,seq__19862_19881__$1);{
var G__19883 = cljs.core.chunk_rest.call(null,seq__19862_19881__$1);
var G__19884 = c__4408__auto___19882;
var G__19885 = cljs.core.count.call(null,c__4408__auto___19882);
var G__19886 = (0);
seq__19862_19868 = G__19883;
chunk__19863_19869 = G__19884;
count__19864_19870 = G__19885;
i__19865_19871 = G__19886;
continue;
}
} else
{var vec__19867_19887 = cljs.core.first.call(null,seq__19862_19881__$1);var k_19888 = cljs.core.nth.call(null,vec__19867_19887,(0),null);var v_19889 = cljs.core.nth.call(null,vec__19867_19887,(1),null);var m19861_19890 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19861_19890,k_19888,f.call(null,v_19889)));
{
var G__19891 = cljs.core.next.call(null,seq__19862_19881__$1);
var G__19892 = null;
var G__19893 = (0);
var G__19894 = (0);
seq__19862_19868 = G__19891;
chunk__19863_19869 = G__19892;
count__19864_19870 = G__19893;
i__19865_19871 = G__19894;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19903_19909 = cljs.core.seq.call(null,m);var chunk__19904_19910 = null;var count__19905_19911 = (0);var i__19906_19912 = (0);while(true){
if((i__19906_19912 < count__19905_19911))
{var vec__19907_19913 = cljs.core._nth.call(null,chunk__19904_19910,i__19906_19912);var k_19914 = cljs.core.nth.call(null,vec__19907_19913,(0),null);var v_19915 = cljs.core.nth.call(null,vec__19907_19913,(1),null);var m19902_19916 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19902_19916,f.call(null,k_19914),v_19915));
{
var G__19917 = seq__19903_19909;
var G__19918 = chunk__19904_19910;
var G__19919 = count__19905_19911;
var G__19920 = (i__19906_19912 + (1));
seq__19903_19909 = G__19917;
chunk__19904_19910 = G__19918;
count__19905_19911 = G__19919;
i__19906_19912 = G__19920;
continue;
}
} else
{var temp__4126__auto___19921 = cljs.core.seq.call(null,seq__19903_19909);if(temp__4126__auto___19921)
{var seq__19903_19922__$1 = temp__4126__auto___19921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19903_19922__$1))
{var c__4408__auto___19923 = cljs.core.chunk_first.call(null,seq__19903_19922__$1);{
var G__19924 = cljs.core.chunk_rest.call(null,seq__19903_19922__$1);
var G__19925 = c__4408__auto___19923;
var G__19926 = cljs.core.count.call(null,c__4408__auto___19923);
var G__19927 = (0);
seq__19903_19909 = G__19924;
chunk__19904_19910 = G__19925;
count__19905_19911 = G__19926;
i__19906_19912 = G__19927;
continue;
}
} else
{var vec__19908_19928 = cljs.core.first.call(null,seq__19903_19922__$1);var k_19929 = cljs.core.nth.call(null,vec__19908_19928,(0),null);var v_19930 = cljs.core.nth.call(null,vec__19908_19928,(1),null);var m19902_19931 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19902_19931,f.call(null,k_19929),v_19930));
{
var G__19932 = cljs.core.next.call(null,seq__19903_19922__$1);
var G__19933 = null;
var G__19934 = (0);
var G__19935 = (0);
seq__19903_19909 = G__19932;
chunk__19904_19910 = G__19933;
count__19905_19911 = G__19934;
i__19906_19912 = G__19935;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19942_19946 = cljs.core.seq.call(null,ks);var chunk__19943_19947 = null;var count__19944_19948 = (0);var i__19945_19949 = (0);while(true){
if((i__19945_19949 < count__19944_19948))
{var k_19950 = cljs.core._nth.call(null,chunk__19943_19947,i__19945_19949);var m19941_19951 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19941_19951,k_19950,f.call(null,k_19950)));
{
var G__19952 = seq__19942_19946;
var G__19953 = chunk__19943_19947;
var G__19954 = count__19944_19948;
var G__19955 = (i__19945_19949 + (1));
seq__19942_19946 = G__19952;
chunk__19943_19947 = G__19953;
count__19944_19948 = G__19954;
i__19945_19949 = G__19955;
continue;
}
} else
{var temp__4126__auto___19956 = cljs.core.seq.call(null,seq__19942_19946);if(temp__4126__auto___19956)
{var seq__19942_19957__$1 = temp__4126__auto___19956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19942_19957__$1))
{var c__4408__auto___19958 = cljs.core.chunk_first.call(null,seq__19942_19957__$1);{
var G__19959 = cljs.core.chunk_rest.call(null,seq__19942_19957__$1);
var G__19960 = c__4408__auto___19958;
var G__19961 = cljs.core.count.call(null,c__4408__auto___19958);
var G__19962 = (0);
seq__19942_19946 = G__19959;
chunk__19943_19947 = G__19960;
count__19944_19948 = G__19961;
i__19945_19949 = G__19962;
continue;
}
} else
{var k_19963 = cljs.core.first.call(null,seq__19942_19957__$1);var m19941_19964 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19941_19964,k_19963,f.call(null,k_19963)));
{
var G__19965 = cljs.core.next.call(null,seq__19942_19957__$1);
var G__19966 = null;
var G__19967 = (0);
var G__19968 = (0);
seq__19942_19946 = G__19965;
chunk__19943_19947 = G__19966;
count__19944_19948 = G__19967;
i__19945_19949 = G__19968;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19975_19979 = cljs.core.seq.call(null,vs);var chunk__19976_19980 = null;var count__19977_19981 = (0);var i__19978_19982 = (0);while(true){
if((i__19978_19982 < count__19977_19981))
{var v_19983 = cljs.core._nth.call(null,chunk__19976_19980,i__19978_19982);var m19974_19984 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19974_19984,f.call(null,v_19983),v_19983));
{
var G__19985 = seq__19975_19979;
var G__19986 = chunk__19976_19980;
var G__19987 = count__19977_19981;
var G__19988 = (i__19978_19982 + (1));
seq__19975_19979 = G__19985;
chunk__19976_19980 = G__19986;
count__19977_19981 = G__19987;
i__19978_19982 = G__19988;
continue;
}
} else
{var temp__4126__auto___19989 = cljs.core.seq.call(null,seq__19975_19979);if(temp__4126__auto___19989)
{var seq__19975_19990__$1 = temp__4126__auto___19989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19975_19990__$1))
{var c__4408__auto___19991 = cljs.core.chunk_first.call(null,seq__19975_19990__$1);{
var G__19992 = cljs.core.chunk_rest.call(null,seq__19975_19990__$1);
var G__19993 = c__4408__auto___19991;
var G__19994 = cljs.core.count.call(null,c__4408__auto___19991);
var G__19995 = (0);
seq__19975_19979 = G__19992;
chunk__19976_19980 = G__19993;
count__19977_19981 = G__19994;
i__19978_19982 = G__19995;
continue;
}
} else
{var v_19996 = cljs.core.first.call(null,seq__19975_19990__$1);var m19974_19997 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19974_19997,f.call(null,v_19996),v_19996));
{
var G__19998 = cljs.core.next.call(null,seq__19975_19990__$1);
var G__19999 = null;
var G__20000 = (0);
var G__20001 = (0);
seq__19975_19979 = G__19998;
chunk__19976_19980 = G__19999;
count__19977_19981 = G__20000;
i__19978_19982 = G__20001;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20002){var vec__20004 = p__20002;var k = cljs.core.nth.call(null,vec__20004,(0),null);var ks = cljs.core.nthnext.call(null,vec__20004,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20013_20019 = cljs.core.seq.call(null,x);var chunk__20014_20020 = null;var count__20015_20021 = (0);var i__20016_20022 = (0);while(true){
if((i__20016_20022 < count__20015_20021))
{var vec__20017_20023 = cljs.core._nth.call(null,chunk__20014_20020,i__20016_20022);var k_20024 = cljs.core.nth.call(null,vec__20017_20023,(0),null);var v_20025 = cljs.core.nth.call(null,vec__20017_20023,(1),null);var m20012_20026 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20012_20026,((typeof k_20024 === 'string')?cljs.core.keyword.call(null,k_20024):k_20024),keywordize_map.call(null,v_20025)));
{
var G__20027 = seq__20013_20019;
var G__20028 = chunk__20014_20020;
var G__20029 = count__20015_20021;
var G__20030 = (i__20016_20022 + (1));
seq__20013_20019 = G__20027;
chunk__20014_20020 = G__20028;
count__20015_20021 = G__20029;
i__20016_20022 = G__20030;
continue;
}
} else
{var temp__4126__auto___20031 = cljs.core.seq.call(null,seq__20013_20019);if(temp__4126__auto___20031)
{var seq__20013_20032__$1 = temp__4126__auto___20031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20013_20032__$1))
{var c__4408__auto___20033 = cljs.core.chunk_first.call(null,seq__20013_20032__$1);{
var G__20034 = cljs.core.chunk_rest.call(null,seq__20013_20032__$1);
var G__20035 = c__4408__auto___20033;
var G__20036 = cljs.core.count.call(null,c__4408__auto___20033);
var G__20037 = (0);
seq__20013_20019 = G__20034;
chunk__20014_20020 = G__20035;
count__20015_20021 = G__20036;
i__20016_20022 = G__20037;
continue;
}
} else
{var vec__20018_20038 = cljs.core.first.call(null,seq__20013_20032__$1);var k_20039 = cljs.core.nth.call(null,vec__20018_20038,(0),null);var v_20040 = cljs.core.nth.call(null,vec__20018_20038,(1),null);var m20012_20041 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20012_20041,((typeof k_20039 === 'string')?cljs.core.keyword.call(null,k_20039):k_20039),keywordize_map.call(null,v_20040)));
{
var G__20042 = cljs.core.next.call(null,seq__20013_20032__$1);
var G__20043 = null;
var G__20044 = (0);
var G__20045 = (0);
seq__20013_20019 = G__20042;
chunk__20014_20020 = G__20043;
count__20015_20021 = G__20044;
i__20016_20022 = G__20045;
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
var G__20046 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20047 = cljs.core.next.call(null,ks);
m = G__20046;
ks = G__20047;
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
})(),(function (){var iter__4377__auto__ = (function iter__20056(s__20057){return (new cljs.core.LazySeq(null,(function (){var s__20057__$1 = s__20057;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20057__$1);if(temp__4126__auto__)
{var s__20057__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20057__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20057__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20059 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20058 = (0);while(true){
if((i__20058 < size__4376__auto__))
{var vec__20062 = cljs.core._nth.call(null,c__4375__auto__,i__20058);var k = cljs.core.nth.call(null,vec__20062,(0),null);var v = cljs.core.nth.call(null,vec__20062,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20064 = (i__20058 + (1));
i__20058 = G__20064;
continue;
}
} else
{{
var G__20065 = (i__20058 + (1));
i__20058 = G__20065;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20059),iter__20056.call(null,cljs.core.chunk_rest.call(null,s__20057__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20059),null);
}
} else
{var vec__20063 = cljs.core.first.call(null,s__20057__$2);var k = cljs.core.nth.call(null,vec__20063,(0),null);var v = cljs.core.nth.call(null,vec__20063,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20056.call(null,cljs.core.rest.call(null,s__20057__$2)));
} else
{{
var G__20066 = cljs.core.rest.call(null,s__20057__$2);
s__20057__$1 = G__20066;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20067){
var m = cljs.core.first(arglist__20067);
var kvs = cljs.core.rest(arglist__20067);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20068){
var m = cljs.core.first(arglist__20068);
arglist__20068 = cljs.core.next(arglist__20068);
var key_seq = cljs.core.first(arglist__20068);
arglist__20068 = cljs.core.next(arglist__20068);
var f = cljs.core.first(arglist__20068);
var args = cljs.core.rest(arglist__20068);
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
return (function iter__20073(s__20074){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20074__$1 = s__20074;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20074__$1);if(temp__4126__auto__)
{var s__20074__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20074__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20074__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20076 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20075 = (0);while(true){
if((i__20075 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20075);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20076,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20077 = (i__20075 + (1));
i__20075 = G__20077;
continue;
}
} else
{{
var G__20078 = (i__20075 + (1));
i__20075 = G__20078;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20076),iter__20073.call(null,cljs.core.chunk_rest.call(null,s__20074__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20076),null);
}
} else
{var x = cljs.core.first.call(null,s__20074__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20073.call(null,cljs.core.rest.call(null,s__20074__$2)));
} else
{{
var G__20079 = cljs.core.rest.call(null,s__20074__$2);
s__20074__$1 = G__20079;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20080){
var colls = cljs.core.seq(arglist__20080);
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
var G__20081__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20082 = conj_when.call(null,coll,x);
var G__20083 = cljs.core.first.call(null,xs);
var G__20084 = cljs.core.next.call(null,xs);
coll = G__20082;
x = G__20083;
xs = G__20084;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20081 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20081__delegate.call(this,coll,x,xs);};
G__20081.cljs$lang$maxFixedArity = 2;
G__20081.cljs$lang$applyTo = (function (arglist__20085){
var coll = cljs.core.first(arglist__20085);
arglist__20085 = cljs.core.next(arglist__20085);
var x = cljs.core.first(arglist__20085);
var xs = cljs.core.rest(arglist__20085);
return G__20081__delegate(coll,x,xs);
});
G__20081.cljs$core$IFn$_invoke$arity$variadic = G__20081__delegate;
return G__20081;
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
var G__20087__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20086_SHARP_){return cljs.core.apply.call(null,f,p1__20086_SHARP_,args);
}));
};
var G__20087 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20087__delegate.call(this,a,f,args);};
G__20087.cljs$lang$maxFixedArity = 2;
G__20087.cljs$lang$applyTo = (function (arglist__20088){
var a = cljs.core.first(arglist__20088);
arglist__20088 = cljs.core.next(arglist__20088);
var f = cljs.core.first(arglist__20088);
var args = cljs.core.rest(arglist__20088);
return G__20087__delegate(a,f,args);
});
G__20087.cljs$core$IFn$_invoke$arity$variadic = G__20087__delegate;
return G__20087;
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
var G__20089__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20089 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20089__delegate.call(this,f,arg,args);};
G__20089.cljs$lang$maxFixedArity = 2;
G__20089.cljs$lang$applyTo = (function (arglist__20090){
var f = cljs.core.first(arglist__20090);
arglist__20090 = cljs.core.next(arglist__20090);
var arg = cljs.core.first(arglist__20090);
var args = cljs.core.rest(arglist__20090);
return G__20089__delegate(f,arg,args);
});
G__20089.cljs$core$IFn$_invoke$arity$variadic = G__20089__delegate;
return G__20089;
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
