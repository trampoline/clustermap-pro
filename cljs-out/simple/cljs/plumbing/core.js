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
var G__20699__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20699 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20699__delegate.call(this,m,k,f,x1,x2,xs);};
G__20699.cljs$lang$maxFixedArity = 5;
G__20699.cljs$lang$applyTo = (function (arglist__20700){
var m = cljs.core.first(arglist__20700);
arglist__20700 = cljs.core.next(arglist__20700);
var k = cljs.core.first(arglist__20700);
arglist__20700 = cljs.core.next(arglist__20700);
var f = cljs.core.first(arglist__20700);
arglist__20700 = cljs.core.next(arglist__20700);
var x1 = cljs.core.first(arglist__20700);
arglist__20700 = cljs.core.next(arglist__20700);
var x2 = cljs.core.first(arglist__20700);
var xs = cljs.core.rest(arglist__20700);
return G__20699__delegate(m,k,f,x1,x2,xs);
});
G__20699.cljs$core$IFn$_invoke$arity$variadic = G__20699__delegate;
return G__20699;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20709_20715 = cljs.core.seq.call(null,m);var chunk__20710_20716 = null;var count__20711_20717 = (0);var i__20712_20718 = (0);while(true){
if((i__20712_20718 < count__20711_20717))
{var vec__20713_20719 = cljs.core._nth.call(null,chunk__20710_20716,i__20712_20718);var k_20720 = cljs.core.nth.call(null,vec__20713_20719,(0),null);var v_20721 = cljs.core.nth.call(null,vec__20713_20719,(1),null);var m20708_20722 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20708_20722,k_20720,f.call(null,v_20721)));
{
var G__20723 = seq__20709_20715;
var G__20724 = chunk__20710_20716;
var G__20725 = count__20711_20717;
var G__20726 = (i__20712_20718 + (1));
seq__20709_20715 = G__20723;
chunk__20710_20716 = G__20724;
count__20711_20717 = G__20725;
i__20712_20718 = G__20726;
continue;
}
} else
{var temp__4126__auto___20727 = cljs.core.seq.call(null,seq__20709_20715);if(temp__4126__auto___20727)
{var seq__20709_20728__$1 = temp__4126__auto___20727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20709_20728__$1))
{var c__4408__auto___20729 = cljs.core.chunk_first.call(null,seq__20709_20728__$1);{
var G__20730 = cljs.core.chunk_rest.call(null,seq__20709_20728__$1);
var G__20731 = c__4408__auto___20729;
var G__20732 = cljs.core.count.call(null,c__4408__auto___20729);
var G__20733 = (0);
seq__20709_20715 = G__20730;
chunk__20710_20716 = G__20731;
count__20711_20717 = G__20732;
i__20712_20718 = G__20733;
continue;
}
} else
{var vec__20714_20734 = cljs.core.first.call(null,seq__20709_20728__$1);var k_20735 = cljs.core.nth.call(null,vec__20714_20734,(0),null);var v_20736 = cljs.core.nth.call(null,vec__20714_20734,(1),null);var m20708_20737 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20708_20737,k_20735,f.call(null,v_20736)));
{
var G__20738 = cljs.core.next.call(null,seq__20709_20728__$1);
var G__20739 = null;
var G__20740 = (0);
var G__20741 = (0);
seq__20709_20715 = G__20738;
chunk__20710_20716 = G__20739;
count__20711_20717 = G__20740;
i__20712_20718 = G__20741;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20750_20756 = cljs.core.seq.call(null,m);var chunk__20751_20757 = null;var count__20752_20758 = (0);var i__20753_20759 = (0);while(true){
if((i__20753_20759 < count__20752_20758))
{var vec__20754_20760 = cljs.core._nth.call(null,chunk__20751_20757,i__20753_20759);var k_20761 = cljs.core.nth.call(null,vec__20754_20760,(0),null);var v_20762 = cljs.core.nth.call(null,vec__20754_20760,(1),null);var m20749_20763 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20749_20763,f.call(null,k_20761),v_20762));
{
var G__20764 = seq__20750_20756;
var G__20765 = chunk__20751_20757;
var G__20766 = count__20752_20758;
var G__20767 = (i__20753_20759 + (1));
seq__20750_20756 = G__20764;
chunk__20751_20757 = G__20765;
count__20752_20758 = G__20766;
i__20753_20759 = G__20767;
continue;
}
} else
{var temp__4126__auto___20768 = cljs.core.seq.call(null,seq__20750_20756);if(temp__4126__auto___20768)
{var seq__20750_20769__$1 = temp__4126__auto___20768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20750_20769__$1))
{var c__4408__auto___20770 = cljs.core.chunk_first.call(null,seq__20750_20769__$1);{
var G__20771 = cljs.core.chunk_rest.call(null,seq__20750_20769__$1);
var G__20772 = c__4408__auto___20770;
var G__20773 = cljs.core.count.call(null,c__4408__auto___20770);
var G__20774 = (0);
seq__20750_20756 = G__20771;
chunk__20751_20757 = G__20772;
count__20752_20758 = G__20773;
i__20753_20759 = G__20774;
continue;
}
} else
{var vec__20755_20775 = cljs.core.first.call(null,seq__20750_20769__$1);var k_20776 = cljs.core.nth.call(null,vec__20755_20775,(0),null);var v_20777 = cljs.core.nth.call(null,vec__20755_20775,(1),null);var m20749_20778 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20749_20778,f.call(null,k_20776),v_20777));
{
var G__20779 = cljs.core.next.call(null,seq__20750_20769__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__20750_20756 = G__20779;
chunk__20751_20757 = G__20780;
count__20752_20758 = G__20781;
i__20753_20759 = G__20782;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20789_20793 = cljs.core.seq.call(null,ks);var chunk__20790_20794 = null;var count__20791_20795 = (0);var i__20792_20796 = (0);while(true){
if((i__20792_20796 < count__20791_20795))
{var k_20797 = cljs.core._nth.call(null,chunk__20790_20794,i__20792_20796);var m20788_20798 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20788_20798,k_20797,f.call(null,k_20797)));
{
var G__20799 = seq__20789_20793;
var G__20800 = chunk__20790_20794;
var G__20801 = count__20791_20795;
var G__20802 = (i__20792_20796 + (1));
seq__20789_20793 = G__20799;
chunk__20790_20794 = G__20800;
count__20791_20795 = G__20801;
i__20792_20796 = G__20802;
continue;
}
} else
{var temp__4126__auto___20803 = cljs.core.seq.call(null,seq__20789_20793);if(temp__4126__auto___20803)
{var seq__20789_20804__$1 = temp__4126__auto___20803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20789_20804__$1))
{var c__4408__auto___20805 = cljs.core.chunk_first.call(null,seq__20789_20804__$1);{
var G__20806 = cljs.core.chunk_rest.call(null,seq__20789_20804__$1);
var G__20807 = c__4408__auto___20805;
var G__20808 = cljs.core.count.call(null,c__4408__auto___20805);
var G__20809 = (0);
seq__20789_20793 = G__20806;
chunk__20790_20794 = G__20807;
count__20791_20795 = G__20808;
i__20792_20796 = G__20809;
continue;
}
} else
{var k_20810 = cljs.core.first.call(null,seq__20789_20804__$1);var m20788_20811 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20788_20811,k_20810,f.call(null,k_20810)));
{
var G__20812 = cljs.core.next.call(null,seq__20789_20804__$1);
var G__20813 = null;
var G__20814 = (0);
var G__20815 = (0);
seq__20789_20793 = G__20812;
chunk__20790_20794 = G__20813;
count__20791_20795 = G__20814;
i__20792_20796 = G__20815;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20822_20826 = cljs.core.seq.call(null,vs);var chunk__20823_20827 = null;var count__20824_20828 = (0);var i__20825_20829 = (0);while(true){
if((i__20825_20829 < count__20824_20828))
{var v_20830 = cljs.core._nth.call(null,chunk__20823_20827,i__20825_20829);var m20821_20831 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20821_20831,f.call(null,v_20830),v_20830));
{
var G__20832 = seq__20822_20826;
var G__20833 = chunk__20823_20827;
var G__20834 = count__20824_20828;
var G__20835 = (i__20825_20829 + (1));
seq__20822_20826 = G__20832;
chunk__20823_20827 = G__20833;
count__20824_20828 = G__20834;
i__20825_20829 = G__20835;
continue;
}
} else
{var temp__4126__auto___20836 = cljs.core.seq.call(null,seq__20822_20826);if(temp__4126__auto___20836)
{var seq__20822_20837__$1 = temp__4126__auto___20836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20822_20837__$1))
{var c__4408__auto___20838 = cljs.core.chunk_first.call(null,seq__20822_20837__$1);{
var G__20839 = cljs.core.chunk_rest.call(null,seq__20822_20837__$1);
var G__20840 = c__4408__auto___20838;
var G__20841 = cljs.core.count.call(null,c__4408__auto___20838);
var G__20842 = (0);
seq__20822_20826 = G__20839;
chunk__20823_20827 = G__20840;
count__20824_20828 = G__20841;
i__20825_20829 = G__20842;
continue;
}
} else
{var v_20843 = cljs.core.first.call(null,seq__20822_20837__$1);var m20821_20844 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20821_20844,f.call(null,v_20843),v_20843));
{
var G__20845 = cljs.core.next.call(null,seq__20822_20837__$1);
var G__20846 = null;
var G__20847 = (0);
var G__20848 = (0);
seq__20822_20826 = G__20845;
chunk__20823_20827 = G__20846;
count__20824_20828 = G__20847;
i__20825_20829 = G__20848;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20849){var vec__20851 = p__20849;var k = cljs.core.nth.call(null,vec__20851,(0),null);var ks = cljs.core.nthnext.call(null,vec__20851,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20860_20866 = cljs.core.seq.call(null,x);var chunk__20861_20867 = null;var count__20862_20868 = (0);var i__20863_20869 = (0);while(true){
if((i__20863_20869 < count__20862_20868))
{var vec__20864_20870 = cljs.core._nth.call(null,chunk__20861_20867,i__20863_20869);var k_20871 = cljs.core.nth.call(null,vec__20864_20870,(0),null);var v_20872 = cljs.core.nth.call(null,vec__20864_20870,(1),null);var m20859_20873 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20859_20873,((typeof k_20871 === 'string')?cljs.core.keyword.call(null,k_20871):k_20871),keywordize_map.call(null,v_20872)));
{
var G__20874 = seq__20860_20866;
var G__20875 = chunk__20861_20867;
var G__20876 = count__20862_20868;
var G__20877 = (i__20863_20869 + (1));
seq__20860_20866 = G__20874;
chunk__20861_20867 = G__20875;
count__20862_20868 = G__20876;
i__20863_20869 = G__20877;
continue;
}
} else
{var temp__4126__auto___20878 = cljs.core.seq.call(null,seq__20860_20866);if(temp__4126__auto___20878)
{var seq__20860_20879__$1 = temp__4126__auto___20878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20860_20879__$1))
{var c__4408__auto___20880 = cljs.core.chunk_first.call(null,seq__20860_20879__$1);{
var G__20881 = cljs.core.chunk_rest.call(null,seq__20860_20879__$1);
var G__20882 = c__4408__auto___20880;
var G__20883 = cljs.core.count.call(null,c__4408__auto___20880);
var G__20884 = (0);
seq__20860_20866 = G__20881;
chunk__20861_20867 = G__20882;
count__20862_20868 = G__20883;
i__20863_20869 = G__20884;
continue;
}
} else
{var vec__20865_20885 = cljs.core.first.call(null,seq__20860_20879__$1);var k_20886 = cljs.core.nth.call(null,vec__20865_20885,(0),null);var v_20887 = cljs.core.nth.call(null,vec__20865_20885,(1),null);var m20859_20888 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20859_20888,((typeof k_20886 === 'string')?cljs.core.keyword.call(null,k_20886):k_20886),keywordize_map.call(null,v_20887)));
{
var G__20889 = cljs.core.next.call(null,seq__20860_20879__$1);
var G__20890 = null;
var G__20891 = (0);
var G__20892 = (0);
seq__20860_20866 = G__20889;
chunk__20861_20867 = G__20890;
count__20862_20868 = G__20891;
i__20863_20869 = G__20892;
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
var G__20893 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20894 = cljs.core.next.call(null,ks);
m = G__20893;
ks = G__20894;
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
})(),(function (){var iter__4377__auto__ = (function iter__20903(s__20904){return (new cljs.core.LazySeq(null,(function (){var s__20904__$1 = s__20904;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20904__$1);if(temp__4126__auto__)
{var s__20904__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20904__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20904__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20906 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20905 = (0);while(true){
if((i__20905 < size__4376__auto__))
{var vec__20909 = cljs.core._nth.call(null,c__4375__auto__,i__20905);var k = cljs.core.nth.call(null,vec__20909,(0),null);var v = cljs.core.nth.call(null,vec__20909,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20906,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20911 = (i__20905 + (1));
i__20905 = G__20911;
continue;
}
} else
{{
var G__20912 = (i__20905 + (1));
i__20905 = G__20912;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20906),iter__20903.call(null,cljs.core.chunk_rest.call(null,s__20904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20906),null);
}
} else
{var vec__20910 = cljs.core.first.call(null,s__20904__$2);var k = cljs.core.nth.call(null,vec__20910,(0),null);var v = cljs.core.nth.call(null,vec__20910,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20903.call(null,cljs.core.rest.call(null,s__20904__$2)));
} else
{{
var G__20913 = cljs.core.rest.call(null,s__20904__$2);
s__20904__$1 = G__20913;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20914){
var m = cljs.core.first(arglist__20914);
var kvs = cljs.core.rest(arglist__20914);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20915){
var m = cljs.core.first(arglist__20915);
arglist__20915 = cljs.core.next(arglist__20915);
var key_seq = cljs.core.first(arglist__20915);
arglist__20915 = cljs.core.next(arglist__20915);
var f = cljs.core.first(arglist__20915);
var args = cljs.core.rest(arglist__20915);
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
return (function iter__20920(s__20921){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20921__$1 = s__20921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20921__$1);if(temp__4126__auto__)
{var s__20921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20921__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20921__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20923 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20922 = (0);while(true){
if((i__20922 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20922);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20923,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20924 = (i__20922 + (1));
i__20922 = G__20924;
continue;
}
} else
{{
var G__20925 = (i__20922 + (1));
i__20922 = G__20925;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20923),iter__20920.call(null,cljs.core.chunk_rest.call(null,s__20921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20923),null);
}
} else
{var x = cljs.core.first.call(null,s__20921__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20920.call(null,cljs.core.rest.call(null,s__20921__$2)));
} else
{{
var G__20926 = cljs.core.rest.call(null,s__20921__$2);
s__20921__$1 = G__20926;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20927){
var colls = cljs.core.seq(arglist__20927);
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
var G__20928__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20929 = conj_when.call(null,coll,x);
var G__20930 = cljs.core.first.call(null,xs);
var G__20931 = cljs.core.next.call(null,xs);
coll = G__20929;
x = G__20930;
xs = G__20931;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20928 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20928__delegate.call(this,coll,x,xs);};
G__20928.cljs$lang$maxFixedArity = 2;
G__20928.cljs$lang$applyTo = (function (arglist__20932){
var coll = cljs.core.first(arglist__20932);
arglist__20932 = cljs.core.next(arglist__20932);
var x = cljs.core.first(arglist__20932);
var xs = cljs.core.rest(arglist__20932);
return G__20928__delegate(coll,x,xs);
});
G__20928.cljs$core$IFn$_invoke$arity$variadic = G__20928__delegate;
return G__20928;
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
var G__20934__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20933_SHARP_){return cljs.core.apply.call(null,f,p1__20933_SHARP_,args);
}));
};
var G__20934 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20934__delegate.call(this,a,f,args);};
G__20934.cljs$lang$maxFixedArity = 2;
G__20934.cljs$lang$applyTo = (function (arglist__20935){
var a = cljs.core.first(arglist__20935);
arglist__20935 = cljs.core.next(arglist__20935);
var f = cljs.core.first(arglist__20935);
var args = cljs.core.rest(arglist__20935);
return G__20934__delegate(a,f,args);
});
G__20934.cljs$core$IFn$_invoke$arity$variadic = G__20934__delegate;
return G__20934;
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
var G__20936__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20936 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20936__delegate.call(this,f,arg,args);};
G__20936.cljs$lang$maxFixedArity = 2;
G__20936.cljs$lang$applyTo = (function (arglist__20937){
var f = cljs.core.first(arglist__20937);
arglist__20937 = cljs.core.next(arglist__20937);
var arg = cljs.core.first(arglist__20937);
var args = cljs.core.rest(arglist__20937);
return G__20936__delegate(f,arg,args);
});
G__20936.cljs$core$IFn$_invoke$arity$variadic = G__20936__delegate;
return G__20936;
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
