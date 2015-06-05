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
var G__20778__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20778 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20778__delegate.call(this,m,k,f,x1,x2,xs);};
G__20778.cljs$lang$maxFixedArity = 5;
G__20778.cljs$lang$applyTo = (function (arglist__20779){
var m = cljs.core.first(arglist__20779);
arglist__20779 = cljs.core.next(arglist__20779);
var k = cljs.core.first(arglist__20779);
arglist__20779 = cljs.core.next(arglist__20779);
var f = cljs.core.first(arglist__20779);
arglist__20779 = cljs.core.next(arglist__20779);
var x1 = cljs.core.first(arglist__20779);
arglist__20779 = cljs.core.next(arglist__20779);
var x2 = cljs.core.first(arglist__20779);
var xs = cljs.core.rest(arglist__20779);
return G__20778__delegate(m,k,f,x1,x2,xs);
});
G__20778.cljs$core$IFn$_invoke$arity$variadic = G__20778__delegate;
return G__20778;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20788_20794 = cljs.core.seq.call(null,m);var chunk__20789_20795 = null;var count__20790_20796 = (0);var i__20791_20797 = (0);while(true){
if((i__20791_20797 < count__20790_20796))
{var vec__20792_20798 = cljs.core._nth.call(null,chunk__20789_20795,i__20791_20797);var k_20799 = cljs.core.nth.call(null,vec__20792_20798,(0),null);var v_20800 = cljs.core.nth.call(null,vec__20792_20798,(1),null);var m20787_20801 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20787_20801,k_20799,f.call(null,v_20800)));
{
var G__20802 = seq__20788_20794;
var G__20803 = chunk__20789_20795;
var G__20804 = count__20790_20796;
var G__20805 = (i__20791_20797 + (1));
seq__20788_20794 = G__20802;
chunk__20789_20795 = G__20803;
count__20790_20796 = G__20804;
i__20791_20797 = G__20805;
continue;
}
} else
{var temp__4126__auto___20806 = cljs.core.seq.call(null,seq__20788_20794);if(temp__4126__auto___20806)
{var seq__20788_20807__$1 = temp__4126__auto___20806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20788_20807__$1))
{var c__4408__auto___20808 = cljs.core.chunk_first.call(null,seq__20788_20807__$1);{
var G__20809 = cljs.core.chunk_rest.call(null,seq__20788_20807__$1);
var G__20810 = c__4408__auto___20808;
var G__20811 = cljs.core.count.call(null,c__4408__auto___20808);
var G__20812 = (0);
seq__20788_20794 = G__20809;
chunk__20789_20795 = G__20810;
count__20790_20796 = G__20811;
i__20791_20797 = G__20812;
continue;
}
} else
{var vec__20793_20813 = cljs.core.first.call(null,seq__20788_20807__$1);var k_20814 = cljs.core.nth.call(null,vec__20793_20813,(0),null);var v_20815 = cljs.core.nth.call(null,vec__20793_20813,(1),null);var m20787_20816 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20787_20816,k_20814,f.call(null,v_20815)));
{
var G__20817 = cljs.core.next.call(null,seq__20788_20807__$1);
var G__20818 = null;
var G__20819 = (0);
var G__20820 = (0);
seq__20788_20794 = G__20817;
chunk__20789_20795 = G__20818;
count__20790_20796 = G__20819;
i__20791_20797 = G__20820;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20829_20835 = cljs.core.seq.call(null,m);var chunk__20830_20836 = null;var count__20831_20837 = (0);var i__20832_20838 = (0);while(true){
if((i__20832_20838 < count__20831_20837))
{var vec__20833_20839 = cljs.core._nth.call(null,chunk__20830_20836,i__20832_20838);var k_20840 = cljs.core.nth.call(null,vec__20833_20839,(0),null);var v_20841 = cljs.core.nth.call(null,vec__20833_20839,(1),null);var m20828_20842 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20828_20842,f.call(null,k_20840),v_20841));
{
var G__20843 = seq__20829_20835;
var G__20844 = chunk__20830_20836;
var G__20845 = count__20831_20837;
var G__20846 = (i__20832_20838 + (1));
seq__20829_20835 = G__20843;
chunk__20830_20836 = G__20844;
count__20831_20837 = G__20845;
i__20832_20838 = G__20846;
continue;
}
} else
{var temp__4126__auto___20847 = cljs.core.seq.call(null,seq__20829_20835);if(temp__4126__auto___20847)
{var seq__20829_20848__$1 = temp__4126__auto___20847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20829_20848__$1))
{var c__4408__auto___20849 = cljs.core.chunk_first.call(null,seq__20829_20848__$1);{
var G__20850 = cljs.core.chunk_rest.call(null,seq__20829_20848__$1);
var G__20851 = c__4408__auto___20849;
var G__20852 = cljs.core.count.call(null,c__4408__auto___20849);
var G__20853 = (0);
seq__20829_20835 = G__20850;
chunk__20830_20836 = G__20851;
count__20831_20837 = G__20852;
i__20832_20838 = G__20853;
continue;
}
} else
{var vec__20834_20854 = cljs.core.first.call(null,seq__20829_20848__$1);var k_20855 = cljs.core.nth.call(null,vec__20834_20854,(0),null);var v_20856 = cljs.core.nth.call(null,vec__20834_20854,(1),null);var m20828_20857 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20828_20857,f.call(null,k_20855),v_20856));
{
var G__20858 = cljs.core.next.call(null,seq__20829_20848__$1);
var G__20859 = null;
var G__20860 = (0);
var G__20861 = (0);
seq__20829_20835 = G__20858;
chunk__20830_20836 = G__20859;
count__20831_20837 = G__20860;
i__20832_20838 = G__20861;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20868_20872 = cljs.core.seq.call(null,ks);var chunk__20869_20873 = null;var count__20870_20874 = (0);var i__20871_20875 = (0);while(true){
if((i__20871_20875 < count__20870_20874))
{var k_20876 = cljs.core._nth.call(null,chunk__20869_20873,i__20871_20875);var m20867_20877 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20867_20877,k_20876,f.call(null,k_20876)));
{
var G__20878 = seq__20868_20872;
var G__20879 = chunk__20869_20873;
var G__20880 = count__20870_20874;
var G__20881 = (i__20871_20875 + (1));
seq__20868_20872 = G__20878;
chunk__20869_20873 = G__20879;
count__20870_20874 = G__20880;
i__20871_20875 = G__20881;
continue;
}
} else
{var temp__4126__auto___20882 = cljs.core.seq.call(null,seq__20868_20872);if(temp__4126__auto___20882)
{var seq__20868_20883__$1 = temp__4126__auto___20882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20868_20883__$1))
{var c__4408__auto___20884 = cljs.core.chunk_first.call(null,seq__20868_20883__$1);{
var G__20885 = cljs.core.chunk_rest.call(null,seq__20868_20883__$1);
var G__20886 = c__4408__auto___20884;
var G__20887 = cljs.core.count.call(null,c__4408__auto___20884);
var G__20888 = (0);
seq__20868_20872 = G__20885;
chunk__20869_20873 = G__20886;
count__20870_20874 = G__20887;
i__20871_20875 = G__20888;
continue;
}
} else
{var k_20889 = cljs.core.first.call(null,seq__20868_20883__$1);var m20867_20890 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20867_20890,k_20889,f.call(null,k_20889)));
{
var G__20891 = cljs.core.next.call(null,seq__20868_20883__$1);
var G__20892 = null;
var G__20893 = (0);
var G__20894 = (0);
seq__20868_20872 = G__20891;
chunk__20869_20873 = G__20892;
count__20870_20874 = G__20893;
i__20871_20875 = G__20894;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20901_20905 = cljs.core.seq.call(null,vs);var chunk__20902_20906 = null;var count__20903_20907 = (0);var i__20904_20908 = (0);while(true){
if((i__20904_20908 < count__20903_20907))
{var v_20909 = cljs.core._nth.call(null,chunk__20902_20906,i__20904_20908);var m20900_20910 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20900_20910,f.call(null,v_20909),v_20909));
{
var G__20911 = seq__20901_20905;
var G__20912 = chunk__20902_20906;
var G__20913 = count__20903_20907;
var G__20914 = (i__20904_20908 + (1));
seq__20901_20905 = G__20911;
chunk__20902_20906 = G__20912;
count__20903_20907 = G__20913;
i__20904_20908 = G__20914;
continue;
}
} else
{var temp__4126__auto___20915 = cljs.core.seq.call(null,seq__20901_20905);if(temp__4126__auto___20915)
{var seq__20901_20916__$1 = temp__4126__auto___20915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20901_20916__$1))
{var c__4408__auto___20917 = cljs.core.chunk_first.call(null,seq__20901_20916__$1);{
var G__20918 = cljs.core.chunk_rest.call(null,seq__20901_20916__$1);
var G__20919 = c__4408__auto___20917;
var G__20920 = cljs.core.count.call(null,c__4408__auto___20917);
var G__20921 = (0);
seq__20901_20905 = G__20918;
chunk__20902_20906 = G__20919;
count__20903_20907 = G__20920;
i__20904_20908 = G__20921;
continue;
}
} else
{var v_20922 = cljs.core.first.call(null,seq__20901_20916__$1);var m20900_20923 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20900_20923,f.call(null,v_20922),v_20922));
{
var G__20924 = cljs.core.next.call(null,seq__20901_20916__$1);
var G__20925 = null;
var G__20926 = (0);
var G__20927 = (0);
seq__20901_20905 = G__20924;
chunk__20902_20906 = G__20925;
count__20903_20907 = G__20926;
i__20904_20908 = G__20927;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20928){var vec__20930 = p__20928;var k = cljs.core.nth.call(null,vec__20930,(0),null);var ks = cljs.core.nthnext.call(null,vec__20930,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20939_20945 = cljs.core.seq.call(null,x);var chunk__20940_20946 = null;var count__20941_20947 = (0);var i__20942_20948 = (0);while(true){
if((i__20942_20948 < count__20941_20947))
{var vec__20943_20949 = cljs.core._nth.call(null,chunk__20940_20946,i__20942_20948);var k_20950 = cljs.core.nth.call(null,vec__20943_20949,(0),null);var v_20951 = cljs.core.nth.call(null,vec__20943_20949,(1),null);var m20938_20952 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20938_20952,((typeof k_20950 === 'string')?cljs.core.keyword.call(null,k_20950):k_20950),keywordize_map.call(null,v_20951)));
{
var G__20953 = seq__20939_20945;
var G__20954 = chunk__20940_20946;
var G__20955 = count__20941_20947;
var G__20956 = (i__20942_20948 + (1));
seq__20939_20945 = G__20953;
chunk__20940_20946 = G__20954;
count__20941_20947 = G__20955;
i__20942_20948 = G__20956;
continue;
}
} else
{var temp__4126__auto___20957 = cljs.core.seq.call(null,seq__20939_20945);if(temp__4126__auto___20957)
{var seq__20939_20958__$1 = temp__4126__auto___20957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20939_20958__$1))
{var c__4408__auto___20959 = cljs.core.chunk_first.call(null,seq__20939_20958__$1);{
var G__20960 = cljs.core.chunk_rest.call(null,seq__20939_20958__$1);
var G__20961 = c__4408__auto___20959;
var G__20962 = cljs.core.count.call(null,c__4408__auto___20959);
var G__20963 = (0);
seq__20939_20945 = G__20960;
chunk__20940_20946 = G__20961;
count__20941_20947 = G__20962;
i__20942_20948 = G__20963;
continue;
}
} else
{var vec__20944_20964 = cljs.core.first.call(null,seq__20939_20958__$1);var k_20965 = cljs.core.nth.call(null,vec__20944_20964,(0),null);var v_20966 = cljs.core.nth.call(null,vec__20944_20964,(1),null);var m20938_20967 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20938_20967,((typeof k_20965 === 'string')?cljs.core.keyword.call(null,k_20965):k_20965),keywordize_map.call(null,v_20966)));
{
var G__20968 = cljs.core.next.call(null,seq__20939_20958__$1);
var G__20969 = null;
var G__20970 = (0);
var G__20971 = (0);
seq__20939_20945 = G__20968;
chunk__20940_20946 = G__20969;
count__20941_20947 = G__20970;
i__20942_20948 = G__20971;
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
var G__20972 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20973 = cljs.core.next.call(null,ks);
m = G__20972;
ks = G__20973;
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
})(),(function (){var iter__4377__auto__ = (function iter__20982(s__20983){return (new cljs.core.LazySeq(null,(function (){var s__20983__$1 = s__20983;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20983__$1);if(temp__4126__auto__)
{var s__20983__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20983__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20983__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20985 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20984 = (0);while(true){
if((i__20984 < size__4376__auto__))
{var vec__20988 = cljs.core._nth.call(null,c__4375__auto__,i__20984);var k = cljs.core.nth.call(null,vec__20988,(0),null);var v = cljs.core.nth.call(null,vec__20988,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20990 = (i__20984 + (1));
i__20984 = G__20990;
continue;
}
} else
{{
var G__20991 = (i__20984 + (1));
i__20984 = G__20991;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20985),iter__20982.call(null,cljs.core.chunk_rest.call(null,s__20983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20985),null);
}
} else
{var vec__20989 = cljs.core.first.call(null,s__20983__$2);var k = cljs.core.nth.call(null,vec__20989,(0),null);var v = cljs.core.nth.call(null,vec__20989,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20982.call(null,cljs.core.rest.call(null,s__20983__$2)));
} else
{{
var G__20992 = cljs.core.rest.call(null,s__20983__$2);
s__20983__$1 = G__20992;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20993){
var m = cljs.core.first(arglist__20993);
var kvs = cljs.core.rest(arglist__20993);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20994){
var m = cljs.core.first(arglist__20994);
arglist__20994 = cljs.core.next(arglist__20994);
var key_seq = cljs.core.first(arglist__20994);
arglist__20994 = cljs.core.next(arglist__20994);
var f = cljs.core.first(arglist__20994);
var args = cljs.core.rest(arglist__20994);
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
return (function iter__20999(s__21000){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21000__$1 = s__21000;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21000__$1);if(temp__4126__auto__)
{var s__21000__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21000__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21000__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21002 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21001 = (0);while(true){
if((i__21001 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21001);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21002,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21003 = (i__21001 + (1));
i__21001 = G__21003;
continue;
}
} else
{{
var G__21004 = (i__21001 + (1));
i__21001 = G__21004;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21002),iter__20999.call(null,cljs.core.chunk_rest.call(null,s__21000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21002),null);
}
} else
{var x = cljs.core.first.call(null,s__21000__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20999.call(null,cljs.core.rest.call(null,s__21000__$2)));
} else
{{
var G__21005 = cljs.core.rest.call(null,s__21000__$2);
s__21000__$1 = G__21005;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21006){
var colls = cljs.core.seq(arglist__21006);
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
var G__21007__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21008 = conj_when.call(null,coll,x);
var G__21009 = cljs.core.first.call(null,xs);
var G__21010 = cljs.core.next.call(null,xs);
coll = G__21008;
x = G__21009;
xs = G__21010;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21007 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21007__delegate.call(this,coll,x,xs);};
G__21007.cljs$lang$maxFixedArity = 2;
G__21007.cljs$lang$applyTo = (function (arglist__21011){
var coll = cljs.core.first(arglist__21011);
arglist__21011 = cljs.core.next(arglist__21011);
var x = cljs.core.first(arglist__21011);
var xs = cljs.core.rest(arglist__21011);
return G__21007__delegate(coll,x,xs);
});
G__21007.cljs$core$IFn$_invoke$arity$variadic = G__21007__delegate;
return G__21007;
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
var G__21013__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21012_SHARP_){return cljs.core.apply.call(null,f,p1__21012_SHARP_,args);
}));
};
var G__21013 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21013__delegate.call(this,a,f,args);};
G__21013.cljs$lang$maxFixedArity = 2;
G__21013.cljs$lang$applyTo = (function (arglist__21014){
var a = cljs.core.first(arglist__21014);
arglist__21014 = cljs.core.next(arglist__21014);
var f = cljs.core.first(arglist__21014);
var args = cljs.core.rest(arglist__21014);
return G__21013__delegate(a,f,args);
});
G__21013.cljs$core$IFn$_invoke$arity$variadic = G__21013__delegate;
return G__21013;
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
var G__21015__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21015 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21015__delegate.call(this,f,arg,args);};
G__21015.cljs$lang$maxFixedArity = 2;
G__21015.cljs$lang$applyTo = (function (arglist__21016){
var f = cljs.core.first(arglist__21016);
arglist__21016 = cljs.core.next(arglist__21016);
var arg = cljs.core.first(arglist__21016);
var args = cljs.core.rest(arglist__21016);
return G__21015__delegate(f,arg,args);
});
G__21015.cljs$core$IFn$_invoke$arity$variadic = G__21015__delegate;
return G__21015;
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
