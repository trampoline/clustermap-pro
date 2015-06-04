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
var G__20730__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20730 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20730__delegate.call(this,m,k,f,x1,x2,xs);};
G__20730.cljs$lang$maxFixedArity = 5;
G__20730.cljs$lang$applyTo = (function (arglist__20731){
var m = cljs.core.first(arglist__20731);
arglist__20731 = cljs.core.next(arglist__20731);
var k = cljs.core.first(arglist__20731);
arglist__20731 = cljs.core.next(arglist__20731);
var f = cljs.core.first(arglist__20731);
arglist__20731 = cljs.core.next(arglist__20731);
var x1 = cljs.core.first(arglist__20731);
arglist__20731 = cljs.core.next(arglist__20731);
var x2 = cljs.core.first(arglist__20731);
var xs = cljs.core.rest(arglist__20731);
return G__20730__delegate(m,k,f,x1,x2,xs);
});
G__20730.cljs$core$IFn$_invoke$arity$variadic = G__20730__delegate;
return G__20730;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20740_20746 = cljs.core.seq.call(null,m);var chunk__20741_20747 = null;var count__20742_20748 = (0);var i__20743_20749 = (0);while(true){
if((i__20743_20749 < count__20742_20748))
{var vec__20744_20750 = cljs.core._nth.call(null,chunk__20741_20747,i__20743_20749);var k_20751 = cljs.core.nth.call(null,vec__20744_20750,(0),null);var v_20752 = cljs.core.nth.call(null,vec__20744_20750,(1),null);var m20739_20753 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20739_20753,k_20751,f.call(null,v_20752)));
{
var G__20754 = seq__20740_20746;
var G__20755 = chunk__20741_20747;
var G__20756 = count__20742_20748;
var G__20757 = (i__20743_20749 + (1));
seq__20740_20746 = G__20754;
chunk__20741_20747 = G__20755;
count__20742_20748 = G__20756;
i__20743_20749 = G__20757;
continue;
}
} else
{var temp__4126__auto___20758 = cljs.core.seq.call(null,seq__20740_20746);if(temp__4126__auto___20758)
{var seq__20740_20759__$1 = temp__4126__auto___20758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20740_20759__$1))
{var c__4408__auto___20760 = cljs.core.chunk_first.call(null,seq__20740_20759__$1);{
var G__20761 = cljs.core.chunk_rest.call(null,seq__20740_20759__$1);
var G__20762 = c__4408__auto___20760;
var G__20763 = cljs.core.count.call(null,c__4408__auto___20760);
var G__20764 = (0);
seq__20740_20746 = G__20761;
chunk__20741_20747 = G__20762;
count__20742_20748 = G__20763;
i__20743_20749 = G__20764;
continue;
}
} else
{var vec__20745_20765 = cljs.core.first.call(null,seq__20740_20759__$1);var k_20766 = cljs.core.nth.call(null,vec__20745_20765,(0),null);var v_20767 = cljs.core.nth.call(null,vec__20745_20765,(1),null);var m20739_20768 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20739_20768,k_20766,f.call(null,v_20767)));
{
var G__20769 = cljs.core.next.call(null,seq__20740_20759__$1);
var G__20770 = null;
var G__20771 = (0);
var G__20772 = (0);
seq__20740_20746 = G__20769;
chunk__20741_20747 = G__20770;
count__20742_20748 = G__20771;
i__20743_20749 = G__20772;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20781_20787 = cljs.core.seq.call(null,m);var chunk__20782_20788 = null;var count__20783_20789 = (0);var i__20784_20790 = (0);while(true){
if((i__20784_20790 < count__20783_20789))
{var vec__20785_20791 = cljs.core._nth.call(null,chunk__20782_20788,i__20784_20790);var k_20792 = cljs.core.nth.call(null,vec__20785_20791,(0),null);var v_20793 = cljs.core.nth.call(null,vec__20785_20791,(1),null);var m20780_20794 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20780_20794,f.call(null,k_20792),v_20793));
{
var G__20795 = seq__20781_20787;
var G__20796 = chunk__20782_20788;
var G__20797 = count__20783_20789;
var G__20798 = (i__20784_20790 + (1));
seq__20781_20787 = G__20795;
chunk__20782_20788 = G__20796;
count__20783_20789 = G__20797;
i__20784_20790 = G__20798;
continue;
}
} else
{var temp__4126__auto___20799 = cljs.core.seq.call(null,seq__20781_20787);if(temp__4126__auto___20799)
{var seq__20781_20800__$1 = temp__4126__auto___20799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20781_20800__$1))
{var c__4408__auto___20801 = cljs.core.chunk_first.call(null,seq__20781_20800__$1);{
var G__20802 = cljs.core.chunk_rest.call(null,seq__20781_20800__$1);
var G__20803 = c__4408__auto___20801;
var G__20804 = cljs.core.count.call(null,c__4408__auto___20801);
var G__20805 = (0);
seq__20781_20787 = G__20802;
chunk__20782_20788 = G__20803;
count__20783_20789 = G__20804;
i__20784_20790 = G__20805;
continue;
}
} else
{var vec__20786_20806 = cljs.core.first.call(null,seq__20781_20800__$1);var k_20807 = cljs.core.nth.call(null,vec__20786_20806,(0),null);var v_20808 = cljs.core.nth.call(null,vec__20786_20806,(1),null);var m20780_20809 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20780_20809,f.call(null,k_20807),v_20808));
{
var G__20810 = cljs.core.next.call(null,seq__20781_20800__$1);
var G__20811 = null;
var G__20812 = (0);
var G__20813 = (0);
seq__20781_20787 = G__20810;
chunk__20782_20788 = G__20811;
count__20783_20789 = G__20812;
i__20784_20790 = G__20813;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20820_20824 = cljs.core.seq.call(null,ks);var chunk__20821_20825 = null;var count__20822_20826 = (0);var i__20823_20827 = (0);while(true){
if((i__20823_20827 < count__20822_20826))
{var k_20828 = cljs.core._nth.call(null,chunk__20821_20825,i__20823_20827);var m20819_20829 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20819_20829,k_20828,f.call(null,k_20828)));
{
var G__20830 = seq__20820_20824;
var G__20831 = chunk__20821_20825;
var G__20832 = count__20822_20826;
var G__20833 = (i__20823_20827 + (1));
seq__20820_20824 = G__20830;
chunk__20821_20825 = G__20831;
count__20822_20826 = G__20832;
i__20823_20827 = G__20833;
continue;
}
} else
{var temp__4126__auto___20834 = cljs.core.seq.call(null,seq__20820_20824);if(temp__4126__auto___20834)
{var seq__20820_20835__$1 = temp__4126__auto___20834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20820_20835__$1))
{var c__4408__auto___20836 = cljs.core.chunk_first.call(null,seq__20820_20835__$1);{
var G__20837 = cljs.core.chunk_rest.call(null,seq__20820_20835__$1);
var G__20838 = c__4408__auto___20836;
var G__20839 = cljs.core.count.call(null,c__4408__auto___20836);
var G__20840 = (0);
seq__20820_20824 = G__20837;
chunk__20821_20825 = G__20838;
count__20822_20826 = G__20839;
i__20823_20827 = G__20840;
continue;
}
} else
{var k_20841 = cljs.core.first.call(null,seq__20820_20835__$1);var m20819_20842 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20819_20842,k_20841,f.call(null,k_20841)));
{
var G__20843 = cljs.core.next.call(null,seq__20820_20835__$1);
var G__20844 = null;
var G__20845 = (0);
var G__20846 = (0);
seq__20820_20824 = G__20843;
chunk__20821_20825 = G__20844;
count__20822_20826 = G__20845;
i__20823_20827 = G__20846;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20853_20857 = cljs.core.seq.call(null,vs);var chunk__20854_20858 = null;var count__20855_20859 = (0);var i__20856_20860 = (0);while(true){
if((i__20856_20860 < count__20855_20859))
{var v_20861 = cljs.core._nth.call(null,chunk__20854_20858,i__20856_20860);var m20852_20862 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20852_20862,f.call(null,v_20861),v_20861));
{
var G__20863 = seq__20853_20857;
var G__20864 = chunk__20854_20858;
var G__20865 = count__20855_20859;
var G__20866 = (i__20856_20860 + (1));
seq__20853_20857 = G__20863;
chunk__20854_20858 = G__20864;
count__20855_20859 = G__20865;
i__20856_20860 = G__20866;
continue;
}
} else
{var temp__4126__auto___20867 = cljs.core.seq.call(null,seq__20853_20857);if(temp__4126__auto___20867)
{var seq__20853_20868__$1 = temp__4126__auto___20867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20853_20868__$1))
{var c__4408__auto___20869 = cljs.core.chunk_first.call(null,seq__20853_20868__$1);{
var G__20870 = cljs.core.chunk_rest.call(null,seq__20853_20868__$1);
var G__20871 = c__4408__auto___20869;
var G__20872 = cljs.core.count.call(null,c__4408__auto___20869);
var G__20873 = (0);
seq__20853_20857 = G__20870;
chunk__20854_20858 = G__20871;
count__20855_20859 = G__20872;
i__20856_20860 = G__20873;
continue;
}
} else
{var v_20874 = cljs.core.first.call(null,seq__20853_20868__$1);var m20852_20875 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20852_20875,f.call(null,v_20874),v_20874));
{
var G__20876 = cljs.core.next.call(null,seq__20853_20868__$1);
var G__20877 = null;
var G__20878 = (0);
var G__20879 = (0);
seq__20853_20857 = G__20876;
chunk__20854_20858 = G__20877;
count__20855_20859 = G__20878;
i__20856_20860 = G__20879;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20880){var vec__20882 = p__20880;var k = cljs.core.nth.call(null,vec__20882,(0),null);var ks = cljs.core.nthnext.call(null,vec__20882,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20891_20897 = cljs.core.seq.call(null,x);var chunk__20892_20898 = null;var count__20893_20899 = (0);var i__20894_20900 = (0);while(true){
if((i__20894_20900 < count__20893_20899))
{var vec__20895_20901 = cljs.core._nth.call(null,chunk__20892_20898,i__20894_20900);var k_20902 = cljs.core.nth.call(null,vec__20895_20901,(0),null);var v_20903 = cljs.core.nth.call(null,vec__20895_20901,(1),null);var m20890_20904 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20890_20904,((typeof k_20902 === 'string')?cljs.core.keyword.call(null,k_20902):k_20902),keywordize_map.call(null,v_20903)));
{
var G__20905 = seq__20891_20897;
var G__20906 = chunk__20892_20898;
var G__20907 = count__20893_20899;
var G__20908 = (i__20894_20900 + (1));
seq__20891_20897 = G__20905;
chunk__20892_20898 = G__20906;
count__20893_20899 = G__20907;
i__20894_20900 = G__20908;
continue;
}
} else
{var temp__4126__auto___20909 = cljs.core.seq.call(null,seq__20891_20897);if(temp__4126__auto___20909)
{var seq__20891_20910__$1 = temp__4126__auto___20909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20891_20910__$1))
{var c__4408__auto___20911 = cljs.core.chunk_first.call(null,seq__20891_20910__$1);{
var G__20912 = cljs.core.chunk_rest.call(null,seq__20891_20910__$1);
var G__20913 = c__4408__auto___20911;
var G__20914 = cljs.core.count.call(null,c__4408__auto___20911);
var G__20915 = (0);
seq__20891_20897 = G__20912;
chunk__20892_20898 = G__20913;
count__20893_20899 = G__20914;
i__20894_20900 = G__20915;
continue;
}
} else
{var vec__20896_20916 = cljs.core.first.call(null,seq__20891_20910__$1);var k_20917 = cljs.core.nth.call(null,vec__20896_20916,(0),null);var v_20918 = cljs.core.nth.call(null,vec__20896_20916,(1),null);var m20890_20919 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20890_20919,((typeof k_20917 === 'string')?cljs.core.keyword.call(null,k_20917):k_20917),keywordize_map.call(null,v_20918)));
{
var G__20920 = cljs.core.next.call(null,seq__20891_20910__$1);
var G__20921 = null;
var G__20922 = (0);
var G__20923 = (0);
seq__20891_20897 = G__20920;
chunk__20892_20898 = G__20921;
count__20893_20899 = G__20922;
i__20894_20900 = G__20923;
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
var G__20924 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20925 = cljs.core.next.call(null,ks);
m = G__20924;
ks = G__20925;
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
})(),(function (){var iter__4377__auto__ = (function iter__20934(s__20935){return (new cljs.core.LazySeq(null,(function (){var s__20935__$1 = s__20935;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20935__$1);if(temp__4126__auto__)
{var s__20935__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20935__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20935__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20937 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20936 = (0);while(true){
if((i__20936 < size__4376__auto__))
{var vec__20940 = cljs.core._nth.call(null,c__4375__auto__,i__20936);var k = cljs.core.nth.call(null,vec__20940,(0),null);var v = cljs.core.nth.call(null,vec__20940,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20942 = (i__20936 + (1));
i__20936 = G__20942;
continue;
}
} else
{{
var G__20943 = (i__20936 + (1));
i__20936 = G__20943;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20937),iter__20934.call(null,cljs.core.chunk_rest.call(null,s__20935__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20937),null);
}
} else
{var vec__20941 = cljs.core.first.call(null,s__20935__$2);var k = cljs.core.nth.call(null,vec__20941,(0),null);var v = cljs.core.nth.call(null,vec__20941,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20934.call(null,cljs.core.rest.call(null,s__20935__$2)));
} else
{{
var G__20944 = cljs.core.rest.call(null,s__20935__$2);
s__20935__$1 = G__20944;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20945){
var m = cljs.core.first(arglist__20945);
var kvs = cljs.core.rest(arglist__20945);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20946){
var m = cljs.core.first(arglist__20946);
arglist__20946 = cljs.core.next(arglist__20946);
var key_seq = cljs.core.first(arglist__20946);
arglist__20946 = cljs.core.next(arglist__20946);
var f = cljs.core.first(arglist__20946);
var args = cljs.core.rest(arglist__20946);
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
return (function iter__20951(s__20952){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20952__$1 = s__20952;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20952__$1);if(temp__4126__auto__)
{var s__20952__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20952__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20952__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20954 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20953 = (0);while(true){
if((i__20953 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20953);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20954,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20955 = (i__20953 + (1));
i__20953 = G__20955;
continue;
}
} else
{{
var G__20956 = (i__20953 + (1));
i__20953 = G__20956;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20954),iter__20951.call(null,cljs.core.chunk_rest.call(null,s__20952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20954),null);
}
} else
{var x = cljs.core.first.call(null,s__20952__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20951.call(null,cljs.core.rest.call(null,s__20952__$2)));
} else
{{
var G__20957 = cljs.core.rest.call(null,s__20952__$2);
s__20952__$1 = G__20957;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20958){
var colls = cljs.core.seq(arglist__20958);
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
var G__20959__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20960 = conj_when.call(null,coll,x);
var G__20961 = cljs.core.first.call(null,xs);
var G__20962 = cljs.core.next.call(null,xs);
coll = G__20960;
x = G__20961;
xs = G__20962;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20959 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20959__delegate.call(this,coll,x,xs);};
G__20959.cljs$lang$maxFixedArity = 2;
G__20959.cljs$lang$applyTo = (function (arglist__20963){
var coll = cljs.core.first(arglist__20963);
arglist__20963 = cljs.core.next(arglist__20963);
var x = cljs.core.first(arglist__20963);
var xs = cljs.core.rest(arglist__20963);
return G__20959__delegate(coll,x,xs);
});
G__20959.cljs$core$IFn$_invoke$arity$variadic = G__20959__delegate;
return G__20959;
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
var G__20965__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20964_SHARP_){return cljs.core.apply.call(null,f,p1__20964_SHARP_,args);
}));
};
var G__20965 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20965__delegate.call(this,a,f,args);};
G__20965.cljs$lang$maxFixedArity = 2;
G__20965.cljs$lang$applyTo = (function (arglist__20966){
var a = cljs.core.first(arglist__20966);
arglist__20966 = cljs.core.next(arglist__20966);
var f = cljs.core.first(arglist__20966);
var args = cljs.core.rest(arglist__20966);
return G__20965__delegate(a,f,args);
});
G__20965.cljs$core$IFn$_invoke$arity$variadic = G__20965__delegate;
return G__20965;
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
var G__20967__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20967 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20967__delegate.call(this,f,arg,args);};
G__20967.cljs$lang$maxFixedArity = 2;
G__20967.cljs$lang$applyTo = (function (arglist__20968){
var f = cljs.core.first(arglist__20968);
arglist__20968 = cljs.core.next(arglist__20968);
var arg = cljs.core.first(arglist__20968);
var args = cljs.core.rest(arglist__20968);
return G__20967__delegate(f,arg,args);
});
G__20967.cljs$core$IFn$_invoke$arity$variadic = G__20967__delegate;
return G__20967;
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
