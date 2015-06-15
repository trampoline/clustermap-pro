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
var G__21831__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21831 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21831__delegate.call(this,m,k,f,x1,x2,xs);};
G__21831.cljs$lang$maxFixedArity = 5;
G__21831.cljs$lang$applyTo = (function (arglist__21832){
var m = cljs.core.first(arglist__21832);
arglist__21832 = cljs.core.next(arglist__21832);
var k = cljs.core.first(arglist__21832);
arglist__21832 = cljs.core.next(arglist__21832);
var f = cljs.core.first(arglist__21832);
arglist__21832 = cljs.core.next(arglist__21832);
var x1 = cljs.core.first(arglist__21832);
arglist__21832 = cljs.core.next(arglist__21832);
var x2 = cljs.core.first(arglist__21832);
var xs = cljs.core.rest(arglist__21832);
return G__21831__delegate(m,k,f,x1,x2,xs);
});
G__21831.cljs$core$IFn$_invoke$arity$variadic = G__21831__delegate;
return G__21831;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21841_21847 = cljs.core.seq.call(null,m);var chunk__21842_21848 = null;var count__21843_21849 = (0);var i__21844_21850 = (0);while(true){
if((i__21844_21850 < count__21843_21849))
{var vec__21845_21851 = cljs.core._nth.call(null,chunk__21842_21848,i__21844_21850);var k_21852 = cljs.core.nth.call(null,vec__21845_21851,(0),null);var v_21853 = cljs.core.nth.call(null,vec__21845_21851,(1),null);var m21840_21854 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21840_21854,k_21852,f.call(null,v_21853)));
{
var G__21855 = seq__21841_21847;
var G__21856 = chunk__21842_21848;
var G__21857 = count__21843_21849;
var G__21858 = (i__21844_21850 + (1));
seq__21841_21847 = G__21855;
chunk__21842_21848 = G__21856;
count__21843_21849 = G__21857;
i__21844_21850 = G__21858;
continue;
}
} else
{var temp__4126__auto___21859 = cljs.core.seq.call(null,seq__21841_21847);if(temp__4126__auto___21859)
{var seq__21841_21860__$1 = temp__4126__auto___21859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21841_21860__$1))
{var c__4408__auto___21861 = cljs.core.chunk_first.call(null,seq__21841_21860__$1);{
var G__21862 = cljs.core.chunk_rest.call(null,seq__21841_21860__$1);
var G__21863 = c__4408__auto___21861;
var G__21864 = cljs.core.count.call(null,c__4408__auto___21861);
var G__21865 = (0);
seq__21841_21847 = G__21862;
chunk__21842_21848 = G__21863;
count__21843_21849 = G__21864;
i__21844_21850 = G__21865;
continue;
}
} else
{var vec__21846_21866 = cljs.core.first.call(null,seq__21841_21860__$1);var k_21867 = cljs.core.nth.call(null,vec__21846_21866,(0),null);var v_21868 = cljs.core.nth.call(null,vec__21846_21866,(1),null);var m21840_21869 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21840_21869,k_21867,f.call(null,v_21868)));
{
var G__21870 = cljs.core.next.call(null,seq__21841_21860__$1);
var G__21871 = null;
var G__21872 = (0);
var G__21873 = (0);
seq__21841_21847 = G__21870;
chunk__21842_21848 = G__21871;
count__21843_21849 = G__21872;
i__21844_21850 = G__21873;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21882_21888 = cljs.core.seq.call(null,m);var chunk__21883_21889 = null;var count__21884_21890 = (0);var i__21885_21891 = (0);while(true){
if((i__21885_21891 < count__21884_21890))
{var vec__21886_21892 = cljs.core._nth.call(null,chunk__21883_21889,i__21885_21891);var k_21893 = cljs.core.nth.call(null,vec__21886_21892,(0),null);var v_21894 = cljs.core.nth.call(null,vec__21886_21892,(1),null);var m21881_21895 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21881_21895,f.call(null,k_21893),v_21894));
{
var G__21896 = seq__21882_21888;
var G__21897 = chunk__21883_21889;
var G__21898 = count__21884_21890;
var G__21899 = (i__21885_21891 + (1));
seq__21882_21888 = G__21896;
chunk__21883_21889 = G__21897;
count__21884_21890 = G__21898;
i__21885_21891 = G__21899;
continue;
}
} else
{var temp__4126__auto___21900 = cljs.core.seq.call(null,seq__21882_21888);if(temp__4126__auto___21900)
{var seq__21882_21901__$1 = temp__4126__auto___21900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21882_21901__$1))
{var c__4408__auto___21902 = cljs.core.chunk_first.call(null,seq__21882_21901__$1);{
var G__21903 = cljs.core.chunk_rest.call(null,seq__21882_21901__$1);
var G__21904 = c__4408__auto___21902;
var G__21905 = cljs.core.count.call(null,c__4408__auto___21902);
var G__21906 = (0);
seq__21882_21888 = G__21903;
chunk__21883_21889 = G__21904;
count__21884_21890 = G__21905;
i__21885_21891 = G__21906;
continue;
}
} else
{var vec__21887_21907 = cljs.core.first.call(null,seq__21882_21901__$1);var k_21908 = cljs.core.nth.call(null,vec__21887_21907,(0),null);var v_21909 = cljs.core.nth.call(null,vec__21887_21907,(1),null);var m21881_21910 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21881_21910,f.call(null,k_21908),v_21909));
{
var G__21911 = cljs.core.next.call(null,seq__21882_21901__$1);
var G__21912 = null;
var G__21913 = (0);
var G__21914 = (0);
seq__21882_21888 = G__21911;
chunk__21883_21889 = G__21912;
count__21884_21890 = G__21913;
i__21885_21891 = G__21914;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21921_21925 = cljs.core.seq.call(null,ks);var chunk__21922_21926 = null;var count__21923_21927 = (0);var i__21924_21928 = (0);while(true){
if((i__21924_21928 < count__21923_21927))
{var k_21929 = cljs.core._nth.call(null,chunk__21922_21926,i__21924_21928);var m21920_21930 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21920_21930,k_21929,f.call(null,k_21929)));
{
var G__21931 = seq__21921_21925;
var G__21932 = chunk__21922_21926;
var G__21933 = count__21923_21927;
var G__21934 = (i__21924_21928 + (1));
seq__21921_21925 = G__21931;
chunk__21922_21926 = G__21932;
count__21923_21927 = G__21933;
i__21924_21928 = G__21934;
continue;
}
} else
{var temp__4126__auto___21935 = cljs.core.seq.call(null,seq__21921_21925);if(temp__4126__auto___21935)
{var seq__21921_21936__$1 = temp__4126__auto___21935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21921_21936__$1))
{var c__4408__auto___21937 = cljs.core.chunk_first.call(null,seq__21921_21936__$1);{
var G__21938 = cljs.core.chunk_rest.call(null,seq__21921_21936__$1);
var G__21939 = c__4408__auto___21937;
var G__21940 = cljs.core.count.call(null,c__4408__auto___21937);
var G__21941 = (0);
seq__21921_21925 = G__21938;
chunk__21922_21926 = G__21939;
count__21923_21927 = G__21940;
i__21924_21928 = G__21941;
continue;
}
} else
{var k_21942 = cljs.core.first.call(null,seq__21921_21936__$1);var m21920_21943 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21920_21943,k_21942,f.call(null,k_21942)));
{
var G__21944 = cljs.core.next.call(null,seq__21921_21936__$1);
var G__21945 = null;
var G__21946 = (0);
var G__21947 = (0);
seq__21921_21925 = G__21944;
chunk__21922_21926 = G__21945;
count__21923_21927 = G__21946;
i__21924_21928 = G__21947;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21954_21958 = cljs.core.seq.call(null,vs);var chunk__21955_21959 = null;var count__21956_21960 = (0);var i__21957_21961 = (0);while(true){
if((i__21957_21961 < count__21956_21960))
{var v_21962 = cljs.core._nth.call(null,chunk__21955_21959,i__21957_21961);var m21953_21963 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21953_21963,f.call(null,v_21962),v_21962));
{
var G__21964 = seq__21954_21958;
var G__21965 = chunk__21955_21959;
var G__21966 = count__21956_21960;
var G__21967 = (i__21957_21961 + (1));
seq__21954_21958 = G__21964;
chunk__21955_21959 = G__21965;
count__21956_21960 = G__21966;
i__21957_21961 = G__21967;
continue;
}
} else
{var temp__4126__auto___21968 = cljs.core.seq.call(null,seq__21954_21958);if(temp__4126__auto___21968)
{var seq__21954_21969__$1 = temp__4126__auto___21968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21954_21969__$1))
{var c__4408__auto___21970 = cljs.core.chunk_first.call(null,seq__21954_21969__$1);{
var G__21971 = cljs.core.chunk_rest.call(null,seq__21954_21969__$1);
var G__21972 = c__4408__auto___21970;
var G__21973 = cljs.core.count.call(null,c__4408__auto___21970);
var G__21974 = (0);
seq__21954_21958 = G__21971;
chunk__21955_21959 = G__21972;
count__21956_21960 = G__21973;
i__21957_21961 = G__21974;
continue;
}
} else
{var v_21975 = cljs.core.first.call(null,seq__21954_21969__$1);var m21953_21976 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21953_21976,f.call(null,v_21975),v_21975));
{
var G__21977 = cljs.core.next.call(null,seq__21954_21969__$1);
var G__21978 = null;
var G__21979 = (0);
var G__21980 = (0);
seq__21954_21958 = G__21977;
chunk__21955_21959 = G__21978;
count__21956_21960 = G__21979;
i__21957_21961 = G__21980;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21981){var vec__21983 = p__21981;var k = cljs.core.nth.call(null,vec__21983,(0),null);var ks = cljs.core.nthnext.call(null,vec__21983,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21992_21998 = cljs.core.seq.call(null,x);var chunk__21993_21999 = null;var count__21994_22000 = (0);var i__21995_22001 = (0);while(true){
if((i__21995_22001 < count__21994_22000))
{var vec__21996_22002 = cljs.core._nth.call(null,chunk__21993_21999,i__21995_22001);var k_22003 = cljs.core.nth.call(null,vec__21996_22002,(0),null);var v_22004 = cljs.core.nth.call(null,vec__21996_22002,(1),null);var m21991_22005 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21991_22005,((typeof k_22003 === 'string')?cljs.core.keyword.call(null,k_22003):k_22003),keywordize_map.call(null,v_22004)));
{
var G__22006 = seq__21992_21998;
var G__22007 = chunk__21993_21999;
var G__22008 = count__21994_22000;
var G__22009 = (i__21995_22001 + (1));
seq__21992_21998 = G__22006;
chunk__21993_21999 = G__22007;
count__21994_22000 = G__22008;
i__21995_22001 = G__22009;
continue;
}
} else
{var temp__4126__auto___22010 = cljs.core.seq.call(null,seq__21992_21998);if(temp__4126__auto___22010)
{var seq__21992_22011__$1 = temp__4126__auto___22010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21992_22011__$1))
{var c__4408__auto___22012 = cljs.core.chunk_first.call(null,seq__21992_22011__$1);{
var G__22013 = cljs.core.chunk_rest.call(null,seq__21992_22011__$1);
var G__22014 = c__4408__auto___22012;
var G__22015 = cljs.core.count.call(null,c__4408__auto___22012);
var G__22016 = (0);
seq__21992_21998 = G__22013;
chunk__21993_21999 = G__22014;
count__21994_22000 = G__22015;
i__21995_22001 = G__22016;
continue;
}
} else
{var vec__21997_22017 = cljs.core.first.call(null,seq__21992_22011__$1);var k_22018 = cljs.core.nth.call(null,vec__21997_22017,(0),null);var v_22019 = cljs.core.nth.call(null,vec__21997_22017,(1),null);var m21991_22020 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21991_22020,((typeof k_22018 === 'string')?cljs.core.keyword.call(null,k_22018):k_22018),keywordize_map.call(null,v_22019)));
{
var G__22021 = cljs.core.next.call(null,seq__21992_22011__$1);
var G__22022 = null;
var G__22023 = (0);
var G__22024 = (0);
seq__21992_21998 = G__22021;
chunk__21993_21999 = G__22022;
count__21994_22000 = G__22023;
i__21995_22001 = G__22024;
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
var G__22025 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22026 = cljs.core.next.call(null,ks);
m = G__22025;
ks = G__22026;
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
})(),(function (){var iter__4377__auto__ = (function iter__22035(s__22036){return (new cljs.core.LazySeq(null,(function (){var s__22036__$1 = s__22036;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22036__$1);if(temp__4126__auto__)
{var s__22036__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22036__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22036__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22038 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22037 = (0);while(true){
if((i__22037 < size__4376__auto__))
{var vec__22041 = cljs.core._nth.call(null,c__4375__auto__,i__22037);var k = cljs.core.nth.call(null,vec__22041,(0),null);var v = cljs.core.nth.call(null,vec__22041,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22043 = (i__22037 + (1));
i__22037 = G__22043;
continue;
}
} else
{{
var G__22044 = (i__22037 + (1));
i__22037 = G__22044;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22038),iter__22035.call(null,cljs.core.chunk_rest.call(null,s__22036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22038),null);
}
} else
{var vec__22042 = cljs.core.first.call(null,s__22036__$2);var k = cljs.core.nth.call(null,vec__22042,(0),null);var v = cljs.core.nth.call(null,vec__22042,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22035.call(null,cljs.core.rest.call(null,s__22036__$2)));
} else
{{
var G__22045 = cljs.core.rest.call(null,s__22036__$2);
s__22036__$1 = G__22045;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22046){
var m = cljs.core.first(arglist__22046);
var kvs = cljs.core.rest(arglist__22046);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22047){
var m = cljs.core.first(arglist__22047);
arglist__22047 = cljs.core.next(arglist__22047);
var key_seq = cljs.core.first(arglist__22047);
arglist__22047 = cljs.core.next(arglist__22047);
var f = cljs.core.first(arglist__22047);
var args = cljs.core.rest(arglist__22047);
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
return (function iter__22052(s__22053){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22053__$1 = s__22053;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22053__$1);if(temp__4126__auto__)
{var s__22053__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22053__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22053__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22055 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22054 = (0);while(true){
if((i__22054 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22054);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22055,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22056 = (i__22054 + (1));
i__22054 = G__22056;
continue;
}
} else
{{
var G__22057 = (i__22054 + (1));
i__22054 = G__22057;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22055),iter__22052.call(null,cljs.core.chunk_rest.call(null,s__22053__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22055),null);
}
} else
{var x = cljs.core.first.call(null,s__22053__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22052.call(null,cljs.core.rest.call(null,s__22053__$2)));
} else
{{
var G__22058 = cljs.core.rest.call(null,s__22053__$2);
s__22053__$1 = G__22058;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22059){
var colls = cljs.core.seq(arglist__22059);
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
var G__22060__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22061 = conj_when.call(null,coll,x);
var G__22062 = cljs.core.first.call(null,xs);
var G__22063 = cljs.core.next.call(null,xs);
coll = G__22061;
x = G__22062;
xs = G__22063;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22060 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22060__delegate.call(this,coll,x,xs);};
G__22060.cljs$lang$maxFixedArity = 2;
G__22060.cljs$lang$applyTo = (function (arglist__22064){
var coll = cljs.core.first(arglist__22064);
arglist__22064 = cljs.core.next(arglist__22064);
var x = cljs.core.first(arglist__22064);
var xs = cljs.core.rest(arglist__22064);
return G__22060__delegate(coll,x,xs);
});
G__22060.cljs$core$IFn$_invoke$arity$variadic = G__22060__delegate;
return G__22060;
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
var G__22066__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22065_SHARP_){return cljs.core.apply.call(null,f,p1__22065_SHARP_,args);
}));
};
var G__22066 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22066__delegate.call(this,a,f,args);};
G__22066.cljs$lang$maxFixedArity = 2;
G__22066.cljs$lang$applyTo = (function (arglist__22067){
var a = cljs.core.first(arglist__22067);
arglist__22067 = cljs.core.next(arglist__22067);
var f = cljs.core.first(arglist__22067);
var args = cljs.core.rest(arglist__22067);
return G__22066__delegate(a,f,args);
});
G__22066.cljs$core$IFn$_invoke$arity$variadic = G__22066__delegate;
return G__22066;
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
var G__22068__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22068 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22068__delegate.call(this,f,arg,args);};
G__22068.cljs$lang$maxFixedArity = 2;
G__22068.cljs$lang$applyTo = (function (arglist__22069){
var f = cljs.core.first(arglist__22069);
arglist__22069 = cljs.core.next(arglist__22069);
var arg = cljs.core.first(arglist__22069);
var args = cljs.core.rest(arglist__22069);
return G__22068__delegate(f,arg,args);
});
G__22068.cljs$core$IFn$_invoke$arity$variadic = G__22068__delegate;
return G__22068;
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
