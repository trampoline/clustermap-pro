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
var G__21817__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21817 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21817__delegate.call(this,m,k,f,x1,x2,xs);};
G__21817.cljs$lang$maxFixedArity = 5;
G__21817.cljs$lang$applyTo = (function (arglist__21818){
var m = cljs.core.first(arglist__21818);
arglist__21818 = cljs.core.next(arglist__21818);
var k = cljs.core.first(arglist__21818);
arglist__21818 = cljs.core.next(arglist__21818);
var f = cljs.core.first(arglist__21818);
arglist__21818 = cljs.core.next(arglist__21818);
var x1 = cljs.core.first(arglist__21818);
arglist__21818 = cljs.core.next(arglist__21818);
var x2 = cljs.core.first(arglist__21818);
var xs = cljs.core.rest(arglist__21818);
return G__21817__delegate(m,k,f,x1,x2,xs);
});
G__21817.cljs$core$IFn$_invoke$arity$variadic = G__21817__delegate;
return G__21817;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21827_21833 = cljs.core.seq.call(null,m);var chunk__21828_21834 = null;var count__21829_21835 = (0);var i__21830_21836 = (0);while(true){
if((i__21830_21836 < count__21829_21835))
{var vec__21831_21837 = cljs.core._nth.call(null,chunk__21828_21834,i__21830_21836);var k_21838 = cljs.core.nth.call(null,vec__21831_21837,(0),null);var v_21839 = cljs.core.nth.call(null,vec__21831_21837,(1),null);var m21826_21840 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21826_21840,k_21838,f.call(null,v_21839)));
{
var G__21841 = seq__21827_21833;
var G__21842 = chunk__21828_21834;
var G__21843 = count__21829_21835;
var G__21844 = (i__21830_21836 + (1));
seq__21827_21833 = G__21841;
chunk__21828_21834 = G__21842;
count__21829_21835 = G__21843;
i__21830_21836 = G__21844;
continue;
}
} else
{var temp__4126__auto___21845 = cljs.core.seq.call(null,seq__21827_21833);if(temp__4126__auto___21845)
{var seq__21827_21846__$1 = temp__4126__auto___21845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21827_21846__$1))
{var c__4408__auto___21847 = cljs.core.chunk_first.call(null,seq__21827_21846__$1);{
var G__21848 = cljs.core.chunk_rest.call(null,seq__21827_21846__$1);
var G__21849 = c__4408__auto___21847;
var G__21850 = cljs.core.count.call(null,c__4408__auto___21847);
var G__21851 = (0);
seq__21827_21833 = G__21848;
chunk__21828_21834 = G__21849;
count__21829_21835 = G__21850;
i__21830_21836 = G__21851;
continue;
}
} else
{var vec__21832_21852 = cljs.core.first.call(null,seq__21827_21846__$1);var k_21853 = cljs.core.nth.call(null,vec__21832_21852,(0),null);var v_21854 = cljs.core.nth.call(null,vec__21832_21852,(1),null);var m21826_21855 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21826_21855,k_21853,f.call(null,v_21854)));
{
var G__21856 = cljs.core.next.call(null,seq__21827_21846__$1);
var G__21857 = null;
var G__21858 = (0);
var G__21859 = (0);
seq__21827_21833 = G__21856;
chunk__21828_21834 = G__21857;
count__21829_21835 = G__21858;
i__21830_21836 = G__21859;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21868_21874 = cljs.core.seq.call(null,m);var chunk__21869_21875 = null;var count__21870_21876 = (0);var i__21871_21877 = (0);while(true){
if((i__21871_21877 < count__21870_21876))
{var vec__21872_21878 = cljs.core._nth.call(null,chunk__21869_21875,i__21871_21877);var k_21879 = cljs.core.nth.call(null,vec__21872_21878,(0),null);var v_21880 = cljs.core.nth.call(null,vec__21872_21878,(1),null);var m21867_21881 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21867_21881,f.call(null,k_21879),v_21880));
{
var G__21882 = seq__21868_21874;
var G__21883 = chunk__21869_21875;
var G__21884 = count__21870_21876;
var G__21885 = (i__21871_21877 + (1));
seq__21868_21874 = G__21882;
chunk__21869_21875 = G__21883;
count__21870_21876 = G__21884;
i__21871_21877 = G__21885;
continue;
}
} else
{var temp__4126__auto___21886 = cljs.core.seq.call(null,seq__21868_21874);if(temp__4126__auto___21886)
{var seq__21868_21887__$1 = temp__4126__auto___21886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21868_21887__$1))
{var c__4408__auto___21888 = cljs.core.chunk_first.call(null,seq__21868_21887__$1);{
var G__21889 = cljs.core.chunk_rest.call(null,seq__21868_21887__$1);
var G__21890 = c__4408__auto___21888;
var G__21891 = cljs.core.count.call(null,c__4408__auto___21888);
var G__21892 = (0);
seq__21868_21874 = G__21889;
chunk__21869_21875 = G__21890;
count__21870_21876 = G__21891;
i__21871_21877 = G__21892;
continue;
}
} else
{var vec__21873_21893 = cljs.core.first.call(null,seq__21868_21887__$1);var k_21894 = cljs.core.nth.call(null,vec__21873_21893,(0),null);var v_21895 = cljs.core.nth.call(null,vec__21873_21893,(1),null);var m21867_21896 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21867_21896,f.call(null,k_21894),v_21895));
{
var G__21897 = cljs.core.next.call(null,seq__21868_21887__$1);
var G__21898 = null;
var G__21899 = (0);
var G__21900 = (0);
seq__21868_21874 = G__21897;
chunk__21869_21875 = G__21898;
count__21870_21876 = G__21899;
i__21871_21877 = G__21900;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21907_21911 = cljs.core.seq.call(null,ks);var chunk__21908_21912 = null;var count__21909_21913 = (0);var i__21910_21914 = (0);while(true){
if((i__21910_21914 < count__21909_21913))
{var k_21915 = cljs.core._nth.call(null,chunk__21908_21912,i__21910_21914);var m21906_21916 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21906_21916,k_21915,f.call(null,k_21915)));
{
var G__21917 = seq__21907_21911;
var G__21918 = chunk__21908_21912;
var G__21919 = count__21909_21913;
var G__21920 = (i__21910_21914 + (1));
seq__21907_21911 = G__21917;
chunk__21908_21912 = G__21918;
count__21909_21913 = G__21919;
i__21910_21914 = G__21920;
continue;
}
} else
{var temp__4126__auto___21921 = cljs.core.seq.call(null,seq__21907_21911);if(temp__4126__auto___21921)
{var seq__21907_21922__$1 = temp__4126__auto___21921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21907_21922__$1))
{var c__4408__auto___21923 = cljs.core.chunk_first.call(null,seq__21907_21922__$1);{
var G__21924 = cljs.core.chunk_rest.call(null,seq__21907_21922__$1);
var G__21925 = c__4408__auto___21923;
var G__21926 = cljs.core.count.call(null,c__4408__auto___21923);
var G__21927 = (0);
seq__21907_21911 = G__21924;
chunk__21908_21912 = G__21925;
count__21909_21913 = G__21926;
i__21910_21914 = G__21927;
continue;
}
} else
{var k_21928 = cljs.core.first.call(null,seq__21907_21922__$1);var m21906_21929 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21906_21929,k_21928,f.call(null,k_21928)));
{
var G__21930 = cljs.core.next.call(null,seq__21907_21922__$1);
var G__21931 = null;
var G__21932 = (0);
var G__21933 = (0);
seq__21907_21911 = G__21930;
chunk__21908_21912 = G__21931;
count__21909_21913 = G__21932;
i__21910_21914 = G__21933;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21940_21944 = cljs.core.seq.call(null,vs);var chunk__21941_21945 = null;var count__21942_21946 = (0);var i__21943_21947 = (0);while(true){
if((i__21943_21947 < count__21942_21946))
{var v_21948 = cljs.core._nth.call(null,chunk__21941_21945,i__21943_21947);var m21939_21949 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21939_21949,f.call(null,v_21948),v_21948));
{
var G__21950 = seq__21940_21944;
var G__21951 = chunk__21941_21945;
var G__21952 = count__21942_21946;
var G__21953 = (i__21943_21947 + (1));
seq__21940_21944 = G__21950;
chunk__21941_21945 = G__21951;
count__21942_21946 = G__21952;
i__21943_21947 = G__21953;
continue;
}
} else
{var temp__4126__auto___21954 = cljs.core.seq.call(null,seq__21940_21944);if(temp__4126__auto___21954)
{var seq__21940_21955__$1 = temp__4126__auto___21954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21940_21955__$1))
{var c__4408__auto___21956 = cljs.core.chunk_first.call(null,seq__21940_21955__$1);{
var G__21957 = cljs.core.chunk_rest.call(null,seq__21940_21955__$1);
var G__21958 = c__4408__auto___21956;
var G__21959 = cljs.core.count.call(null,c__4408__auto___21956);
var G__21960 = (0);
seq__21940_21944 = G__21957;
chunk__21941_21945 = G__21958;
count__21942_21946 = G__21959;
i__21943_21947 = G__21960;
continue;
}
} else
{var v_21961 = cljs.core.first.call(null,seq__21940_21955__$1);var m21939_21962 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21939_21962,f.call(null,v_21961),v_21961));
{
var G__21963 = cljs.core.next.call(null,seq__21940_21955__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21940_21944 = G__21963;
chunk__21941_21945 = G__21964;
count__21942_21946 = G__21965;
i__21943_21947 = G__21966;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21967){var vec__21969 = p__21967;var k = cljs.core.nth.call(null,vec__21969,(0),null);var ks = cljs.core.nthnext.call(null,vec__21969,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21978_21984 = cljs.core.seq.call(null,x);var chunk__21979_21985 = null;var count__21980_21986 = (0);var i__21981_21987 = (0);while(true){
if((i__21981_21987 < count__21980_21986))
{var vec__21982_21988 = cljs.core._nth.call(null,chunk__21979_21985,i__21981_21987);var k_21989 = cljs.core.nth.call(null,vec__21982_21988,(0),null);var v_21990 = cljs.core.nth.call(null,vec__21982_21988,(1),null);var m21977_21991 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21977_21991,((typeof k_21989 === 'string')?cljs.core.keyword.call(null,k_21989):k_21989),keywordize_map.call(null,v_21990)));
{
var G__21992 = seq__21978_21984;
var G__21993 = chunk__21979_21985;
var G__21994 = count__21980_21986;
var G__21995 = (i__21981_21987 + (1));
seq__21978_21984 = G__21992;
chunk__21979_21985 = G__21993;
count__21980_21986 = G__21994;
i__21981_21987 = G__21995;
continue;
}
} else
{var temp__4126__auto___21996 = cljs.core.seq.call(null,seq__21978_21984);if(temp__4126__auto___21996)
{var seq__21978_21997__$1 = temp__4126__auto___21996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21978_21997__$1))
{var c__4408__auto___21998 = cljs.core.chunk_first.call(null,seq__21978_21997__$1);{
var G__21999 = cljs.core.chunk_rest.call(null,seq__21978_21997__$1);
var G__22000 = c__4408__auto___21998;
var G__22001 = cljs.core.count.call(null,c__4408__auto___21998);
var G__22002 = (0);
seq__21978_21984 = G__21999;
chunk__21979_21985 = G__22000;
count__21980_21986 = G__22001;
i__21981_21987 = G__22002;
continue;
}
} else
{var vec__21983_22003 = cljs.core.first.call(null,seq__21978_21997__$1);var k_22004 = cljs.core.nth.call(null,vec__21983_22003,(0),null);var v_22005 = cljs.core.nth.call(null,vec__21983_22003,(1),null);var m21977_22006 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21977_22006,((typeof k_22004 === 'string')?cljs.core.keyword.call(null,k_22004):k_22004),keywordize_map.call(null,v_22005)));
{
var G__22007 = cljs.core.next.call(null,seq__21978_21997__$1);
var G__22008 = null;
var G__22009 = (0);
var G__22010 = (0);
seq__21978_21984 = G__22007;
chunk__21979_21985 = G__22008;
count__21980_21986 = G__22009;
i__21981_21987 = G__22010;
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
var G__22011 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22012 = cljs.core.next.call(null,ks);
m = G__22011;
ks = G__22012;
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
})(),(function (){var iter__4377__auto__ = (function iter__22021(s__22022){return (new cljs.core.LazySeq(null,(function (){var s__22022__$1 = s__22022;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22022__$1);if(temp__4126__auto__)
{var s__22022__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22022__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22022__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22024 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22023 = (0);while(true){
if((i__22023 < size__4376__auto__))
{var vec__22027 = cljs.core._nth.call(null,c__4375__auto__,i__22023);var k = cljs.core.nth.call(null,vec__22027,(0),null);var v = cljs.core.nth.call(null,vec__22027,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22029 = (i__22023 + (1));
i__22023 = G__22029;
continue;
}
} else
{{
var G__22030 = (i__22023 + (1));
i__22023 = G__22030;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22024),iter__22021.call(null,cljs.core.chunk_rest.call(null,s__22022__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22024),null);
}
} else
{var vec__22028 = cljs.core.first.call(null,s__22022__$2);var k = cljs.core.nth.call(null,vec__22028,(0),null);var v = cljs.core.nth.call(null,vec__22028,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22021.call(null,cljs.core.rest.call(null,s__22022__$2)));
} else
{{
var G__22031 = cljs.core.rest.call(null,s__22022__$2);
s__22022__$1 = G__22031;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22032){
var m = cljs.core.first(arglist__22032);
var kvs = cljs.core.rest(arglist__22032);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22033){
var m = cljs.core.first(arglist__22033);
arglist__22033 = cljs.core.next(arglist__22033);
var key_seq = cljs.core.first(arglist__22033);
arglist__22033 = cljs.core.next(arglist__22033);
var f = cljs.core.first(arglist__22033);
var args = cljs.core.rest(arglist__22033);
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
return (function iter__22038(s__22039){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22039__$1 = s__22039;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22039__$1);if(temp__4126__auto__)
{var s__22039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22039__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22039__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22041 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22040 = (0);while(true){
if((i__22040 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22040);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22041,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22042 = (i__22040 + (1));
i__22040 = G__22042;
continue;
}
} else
{{
var G__22043 = (i__22040 + (1));
i__22040 = G__22043;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22041),iter__22038.call(null,cljs.core.chunk_rest.call(null,s__22039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22041),null);
}
} else
{var x = cljs.core.first.call(null,s__22039__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22038.call(null,cljs.core.rest.call(null,s__22039__$2)));
} else
{{
var G__22044 = cljs.core.rest.call(null,s__22039__$2);
s__22039__$1 = G__22044;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22045){
var colls = cljs.core.seq(arglist__22045);
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
var G__22046__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22047 = conj_when.call(null,coll,x);
var G__22048 = cljs.core.first.call(null,xs);
var G__22049 = cljs.core.next.call(null,xs);
coll = G__22047;
x = G__22048;
xs = G__22049;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22046 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22046__delegate.call(this,coll,x,xs);};
G__22046.cljs$lang$maxFixedArity = 2;
G__22046.cljs$lang$applyTo = (function (arglist__22050){
var coll = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var x = cljs.core.first(arglist__22050);
var xs = cljs.core.rest(arglist__22050);
return G__22046__delegate(coll,x,xs);
});
G__22046.cljs$core$IFn$_invoke$arity$variadic = G__22046__delegate;
return G__22046;
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
var G__22052__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22051_SHARP_){return cljs.core.apply.call(null,f,p1__22051_SHARP_,args);
}));
};
var G__22052 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22052__delegate.call(this,a,f,args);};
G__22052.cljs$lang$maxFixedArity = 2;
G__22052.cljs$lang$applyTo = (function (arglist__22053){
var a = cljs.core.first(arglist__22053);
arglist__22053 = cljs.core.next(arglist__22053);
var f = cljs.core.first(arglist__22053);
var args = cljs.core.rest(arglist__22053);
return G__22052__delegate(a,f,args);
});
G__22052.cljs$core$IFn$_invoke$arity$variadic = G__22052__delegate;
return G__22052;
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
var G__22054__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22054 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22054__delegate.call(this,f,arg,args);};
G__22054.cljs$lang$maxFixedArity = 2;
G__22054.cljs$lang$applyTo = (function (arglist__22055){
var f = cljs.core.first(arglist__22055);
arglist__22055 = cljs.core.next(arglist__22055);
var arg = cljs.core.first(arglist__22055);
var args = cljs.core.rest(arglist__22055);
return G__22054__delegate(f,arg,args);
});
G__22054.cljs$core$IFn$_invoke$arity$variadic = G__22054__delegate;
return G__22054;
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
