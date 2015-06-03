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
var G__20698__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20698 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20698__delegate.call(this,m,k,f,x1,x2,xs);};
G__20698.cljs$lang$maxFixedArity = 5;
G__20698.cljs$lang$applyTo = (function (arglist__20699){
var m = cljs.core.first(arglist__20699);
arglist__20699 = cljs.core.next(arglist__20699);
var k = cljs.core.first(arglist__20699);
arglist__20699 = cljs.core.next(arglist__20699);
var f = cljs.core.first(arglist__20699);
arglist__20699 = cljs.core.next(arglist__20699);
var x1 = cljs.core.first(arglist__20699);
arglist__20699 = cljs.core.next(arglist__20699);
var x2 = cljs.core.first(arglist__20699);
var xs = cljs.core.rest(arglist__20699);
return G__20698__delegate(m,k,f,x1,x2,xs);
});
G__20698.cljs$core$IFn$_invoke$arity$variadic = G__20698__delegate;
return G__20698;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20708_20714 = cljs.core.seq.call(null,m);var chunk__20709_20715 = null;var count__20710_20716 = (0);var i__20711_20717 = (0);while(true){
if((i__20711_20717 < count__20710_20716))
{var vec__20712_20718 = cljs.core._nth.call(null,chunk__20709_20715,i__20711_20717);var k_20719 = cljs.core.nth.call(null,vec__20712_20718,(0),null);var v_20720 = cljs.core.nth.call(null,vec__20712_20718,(1),null);var m20707_20721 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20707_20721,k_20719,f.call(null,v_20720)));
{
var G__20722 = seq__20708_20714;
var G__20723 = chunk__20709_20715;
var G__20724 = count__20710_20716;
var G__20725 = (i__20711_20717 + (1));
seq__20708_20714 = G__20722;
chunk__20709_20715 = G__20723;
count__20710_20716 = G__20724;
i__20711_20717 = G__20725;
continue;
}
} else
{var temp__4126__auto___20726 = cljs.core.seq.call(null,seq__20708_20714);if(temp__4126__auto___20726)
{var seq__20708_20727__$1 = temp__4126__auto___20726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20708_20727__$1))
{var c__4408__auto___20728 = cljs.core.chunk_first.call(null,seq__20708_20727__$1);{
var G__20729 = cljs.core.chunk_rest.call(null,seq__20708_20727__$1);
var G__20730 = c__4408__auto___20728;
var G__20731 = cljs.core.count.call(null,c__4408__auto___20728);
var G__20732 = (0);
seq__20708_20714 = G__20729;
chunk__20709_20715 = G__20730;
count__20710_20716 = G__20731;
i__20711_20717 = G__20732;
continue;
}
} else
{var vec__20713_20733 = cljs.core.first.call(null,seq__20708_20727__$1);var k_20734 = cljs.core.nth.call(null,vec__20713_20733,(0),null);var v_20735 = cljs.core.nth.call(null,vec__20713_20733,(1),null);var m20707_20736 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20707_20736,k_20734,f.call(null,v_20735)));
{
var G__20737 = cljs.core.next.call(null,seq__20708_20727__$1);
var G__20738 = null;
var G__20739 = (0);
var G__20740 = (0);
seq__20708_20714 = G__20737;
chunk__20709_20715 = G__20738;
count__20710_20716 = G__20739;
i__20711_20717 = G__20740;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20749_20755 = cljs.core.seq.call(null,m);var chunk__20750_20756 = null;var count__20751_20757 = (0);var i__20752_20758 = (0);while(true){
if((i__20752_20758 < count__20751_20757))
{var vec__20753_20759 = cljs.core._nth.call(null,chunk__20750_20756,i__20752_20758);var k_20760 = cljs.core.nth.call(null,vec__20753_20759,(0),null);var v_20761 = cljs.core.nth.call(null,vec__20753_20759,(1),null);var m20748_20762 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20748_20762,f.call(null,k_20760),v_20761));
{
var G__20763 = seq__20749_20755;
var G__20764 = chunk__20750_20756;
var G__20765 = count__20751_20757;
var G__20766 = (i__20752_20758 + (1));
seq__20749_20755 = G__20763;
chunk__20750_20756 = G__20764;
count__20751_20757 = G__20765;
i__20752_20758 = G__20766;
continue;
}
} else
{var temp__4126__auto___20767 = cljs.core.seq.call(null,seq__20749_20755);if(temp__4126__auto___20767)
{var seq__20749_20768__$1 = temp__4126__auto___20767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20749_20768__$1))
{var c__4408__auto___20769 = cljs.core.chunk_first.call(null,seq__20749_20768__$1);{
var G__20770 = cljs.core.chunk_rest.call(null,seq__20749_20768__$1);
var G__20771 = c__4408__auto___20769;
var G__20772 = cljs.core.count.call(null,c__4408__auto___20769);
var G__20773 = (0);
seq__20749_20755 = G__20770;
chunk__20750_20756 = G__20771;
count__20751_20757 = G__20772;
i__20752_20758 = G__20773;
continue;
}
} else
{var vec__20754_20774 = cljs.core.first.call(null,seq__20749_20768__$1);var k_20775 = cljs.core.nth.call(null,vec__20754_20774,(0),null);var v_20776 = cljs.core.nth.call(null,vec__20754_20774,(1),null);var m20748_20777 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20748_20777,f.call(null,k_20775),v_20776));
{
var G__20778 = cljs.core.next.call(null,seq__20749_20768__$1);
var G__20779 = null;
var G__20780 = (0);
var G__20781 = (0);
seq__20749_20755 = G__20778;
chunk__20750_20756 = G__20779;
count__20751_20757 = G__20780;
i__20752_20758 = G__20781;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20788_20792 = cljs.core.seq.call(null,ks);var chunk__20789_20793 = null;var count__20790_20794 = (0);var i__20791_20795 = (0);while(true){
if((i__20791_20795 < count__20790_20794))
{var k_20796 = cljs.core._nth.call(null,chunk__20789_20793,i__20791_20795);var m20787_20797 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20787_20797,k_20796,f.call(null,k_20796)));
{
var G__20798 = seq__20788_20792;
var G__20799 = chunk__20789_20793;
var G__20800 = count__20790_20794;
var G__20801 = (i__20791_20795 + (1));
seq__20788_20792 = G__20798;
chunk__20789_20793 = G__20799;
count__20790_20794 = G__20800;
i__20791_20795 = G__20801;
continue;
}
} else
{var temp__4126__auto___20802 = cljs.core.seq.call(null,seq__20788_20792);if(temp__4126__auto___20802)
{var seq__20788_20803__$1 = temp__4126__auto___20802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20788_20803__$1))
{var c__4408__auto___20804 = cljs.core.chunk_first.call(null,seq__20788_20803__$1);{
var G__20805 = cljs.core.chunk_rest.call(null,seq__20788_20803__$1);
var G__20806 = c__4408__auto___20804;
var G__20807 = cljs.core.count.call(null,c__4408__auto___20804);
var G__20808 = (0);
seq__20788_20792 = G__20805;
chunk__20789_20793 = G__20806;
count__20790_20794 = G__20807;
i__20791_20795 = G__20808;
continue;
}
} else
{var k_20809 = cljs.core.first.call(null,seq__20788_20803__$1);var m20787_20810 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20787_20810,k_20809,f.call(null,k_20809)));
{
var G__20811 = cljs.core.next.call(null,seq__20788_20803__$1);
var G__20812 = null;
var G__20813 = (0);
var G__20814 = (0);
seq__20788_20792 = G__20811;
chunk__20789_20793 = G__20812;
count__20790_20794 = G__20813;
i__20791_20795 = G__20814;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20821_20825 = cljs.core.seq.call(null,vs);var chunk__20822_20826 = null;var count__20823_20827 = (0);var i__20824_20828 = (0);while(true){
if((i__20824_20828 < count__20823_20827))
{var v_20829 = cljs.core._nth.call(null,chunk__20822_20826,i__20824_20828);var m20820_20830 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20820_20830,f.call(null,v_20829),v_20829));
{
var G__20831 = seq__20821_20825;
var G__20832 = chunk__20822_20826;
var G__20833 = count__20823_20827;
var G__20834 = (i__20824_20828 + (1));
seq__20821_20825 = G__20831;
chunk__20822_20826 = G__20832;
count__20823_20827 = G__20833;
i__20824_20828 = G__20834;
continue;
}
} else
{var temp__4126__auto___20835 = cljs.core.seq.call(null,seq__20821_20825);if(temp__4126__auto___20835)
{var seq__20821_20836__$1 = temp__4126__auto___20835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20821_20836__$1))
{var c__4408__auto___20837 = cljs.core.chunk_first.call(null,seq__20821_20836__$1);{
var G__20838 = cljs.core.chunk_rest.call(null,seq__20821_20836__$1);
var G__20839 = c__4408__auto___20837;
var G__20840 = cljs.core.count.call(null,c__4408__auto___20837);
var G__20841 = (0);
seq__20821_20825 = G__20838;
chunk__20822_20826 = G__20839;
count__20823_20827 = G__20840;
i__20824_20828 = G__20841;
continue;
}
} else
{var v_20842 = cljs.core.first.call(null,seq__20821_20836__$1);var m20820_20843 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20820_20843,f.call(null,v_20842),v_20842));
{
var G__20844 = cljs.core.next.call(null,seq__20821_20836__$1);
var G__20845 = null;
var G__20846 = (0);
var G__20847 = (0);
seq__20821_20825 = G__20844;
chunk__20822_20826 = G__20845;
count__20823_20827 = G__20846;
i__20824_20828 = G__20847;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__20848){var vec__20850 = p__20848;var k = cljs.core.nth.call(null,vec__20850,(0),null);var ks = cljs.core.nthnext.call(null,vec__20850,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20859_20865 = cljs.core.seq.call(null,x);var chunk__20860_20866 = null;var count__20861_20867 = (0);var i__20862_20868 = (0);while(true){
if((i__20862_20868 < count__20861_20867))
{var vec__20863_20869 = cljs.core._nth.call(null,chunk__20860_20866,i__20862_20868);var k_20870 = cljs.core.nth.call(null,vec__20863_20869,(0),null);var v_20871 = cljs.core.nth.call(null,vec__20863_20869,(1),null);var m20858_20872 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20858_20872,((typeof k_20870 === 'string')?cljs.core.keyword.call(null,k_20870):k_20870),keywordize_map.call(null,v_20871)));
{
var G__20873 = seq__20859_20865;
var G__20874 = chunk__20860_20866;
var G__20875 = count__20861_20867;
var G__20876 = (i__20862_20868 + (1));
seq__20859_20865 = G__20873;
chunk__20860_20866 = G__20874;
count__20861_20867 = G__20875;
i__20862_20868 = G__20876;
continue;
}
} else
{var temp__4126__auto___20877 = cljs.core.seq.call(null,seq__20859_20865);if(temp__4126__auto___20877)
{var seq__20859_20878__$1 = temp__4126__auto___20877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20859_20878__$1))
{var c__4408__auto___20879 = cljs.core.chunk_first.call(null,seq__20859_20878__$1);{
var G__20880 = cljs.core.chunk_rest.call(null,seq__20859_20878__$1);
var G__20881 = c__4408__auto___20879;
var G__20882 = cljs.core.count.call(null,c__4408__auto___20879);
var G__20883 = (0);
seq__20859_20865 = G__20880;
chunk__20860_20866 = G__20881;
count__20861_20867 = G__20882;
i__20862_20868 = G__20883;
continue;
}
} else
{var vec__20864_20884 = cljs.core.first.call(null,seq__20859_20878__$1);var k_20885 = cljs.core.nth.call(null,vec__20864_20884,(0),null);var v_20886 = cljs.core.nth.call(null,vec__20864_20884,(1),null);var m20858_20887 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m20858_20887,((typeof k_20885 === 'string')?cljs.core.keyword.call(null,k_20885):k_20885),keywordize_map.call(null,v_20886)));
{
var G__20888 = cljs.core.next.call(null,seq__20859_20878__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20859_20865 = G__20888;
chunk__20860_20866 = G__20889;
count__20861_20867 = G__20890;
i__20862_20868 = G__20891;
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
var G__20892 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20893 = cljs.core.next.call(null,ks);
m = G__20892;
ks = G__20893;
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
})(),(function (){var iter__4377__auto__ = (function iter__20902(s__20903){return (new cljs.core.LazySeq(null,(function (){var s__20903__$1 = s__20903;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20903__$1);if(temp__4126__auto__)
{var s__20903__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20903__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20903__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20905 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20904 = (0);while(true){
if((i__20904 < size__4376__auto__))
{var vec__20908 = cljs.core._nth.call(null,c__4375__auto__,i__20904);var k = cljs.core.nth.call(null,vec__20908,(0),null);var v = cljs.core.nth.call(null,vec__20908,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20910 = (i__20904 + (1));
i__20904 = G__20910;
continue;
}
} else
{{
var G__20911 = (i__20904 + (1));
i__20904 = G__20911;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20905),iter__20902.call(null,cljs.core.chunk_rest.call(null,s__20903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20905),null);
}
} else
{var vec__20909 = cljs.core.first.call(null,s__20903__$2);var k = cljs.core.nth.call(null,vec__20909,(0),null);var v = cljs.core.nth.call(null,vec__20909,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20902.call(null,cljs.core.rest.call(null,s__20903__$2)));
} else
{{
var G__20912 = cljs.core.rest.call(null,s__20903__$2);
s__20903__$1 = G__20912;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20913){
var m = cljs.core.first(arglist__20913);
var kvs = cljs.core.rest(arglist__20913);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20914){
var m = cljs.core.first(arglist__20914);
arglist__20914 = cljs.core.next(arglist__20914);
var key_seq = cljs.core.first(arglist__20914);
arglist__20914 = cljs.core.next(arglist__20914);
var f = cljs.core.first(arglist__20914);
var args = cljs.core.rest(arglist__20914);
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
return (function iter__20919(s__20920){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20920__$1 = s__20920;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20920__$1);if(temp__4126__auto__)
{var s__20920__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20920__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20920__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20922 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20921 = (0);while(true){
if((i__20921 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20921);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20922,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20923 = (i__20921 + (1));
i__20921 = G__20923;
continue;
}
} else
{{
var G__20924 = (i__20921 + (1));
i__20921 = G__20924;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20922),iter__20919.call(null,cljs.core.chunk_rest.call(null,s__20920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20922),null);
}
} else
{var x = cljs.core.first.call(null,s__20920__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20919.call(null,cljs.core.rest.call(null,s__20920__$2)));
} else
{{
var G__20925 = cljs.core.rest.call(null,s__20920__$2);
s__20920__$1 = G__20925;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20926){
var colls = cljs.core.seq(arglist__20926);
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
var G__20927__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20928 = conj_when.call(null,coll,x);
var G__20929 = cljs.core.first.call(null,xs);
var G__20930 = cljs.core.next.call(null,xs);
coll = G__20928;
x = G__20929;
xs = G__20930;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20927 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20927__delegate.call(this,coll,x,xs);};
G__20927.cljs$lang$maxFixedArity = 2;
G__20927.cljs$lang$applyTo = (function (arglist__20931){
var coll = cljs.core.first(arglist__20931);
arglist__20931 = cljs.core.next(arglist__20931);
var x = cljs.core.first(arglist__20931);
var xs = cljs.core.rest(arglist__20931);
return G__20927__delegate(coll,x,xs);
});
G__20927.cljs$core$IFn$_invoke$arity$variadic = G__20927__delegate;
return G__20927;
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
var G__20933__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20932_SHARP_){return cljs.core.apply.call(null,f,p1__20932_SHARP_,args);
}));
};
var G__20933 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20933__delegate.call(this,a,f,args);};
G__20933.cljs$lang$maxFixedArity = 2;
G__20933.cljs$lang$applyTo = (function (arglist__20934){
var a = cljs.core.first(arglist__20934);
arglist__20934 = cljs.core.next(arglist__20934);
var f = cljs.core.first(arglist__20934);
var args = cljs.core.rest(arglist__20934);
return G__20933__delegate(a,f,args);
});
G__20933.cljs$core$IFn$_invoke$arity$variadic = G__20933__delegate;
return G__20933;
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
var G__20935__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20935 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20935__delegate.call(this,f,arg,args);};
G__20935.cljs$lang$maxFixedArity = 2;
G__20935.cljs$lang$applyTo = (function (arglist__20936){
var f = cljs.core.first(arglist__20936);
arglist__20936 = cljs.core.next(arglist__20936);
var arg = cljs.core.first(arglist__20936);
var args = cljs.core.rest(arglist__20936);
return G__20935__delegate(f,arg,args);
});
G__20935.cljs$core$IFn$_invoke$arity$variadic = G__20935__delegate;
return G__20935;
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
