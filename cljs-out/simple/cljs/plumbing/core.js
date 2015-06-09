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
var G__21668__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21668 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21668__delegate.call(this,m,k,f,x1,x2,xs);};
G__21668.cljs$lang$maxFixedArity = 5;
G__21668.cljs$lang$applyTo = (function (arglist__21669){
var m = cljs.core.first(arglist__21669);
arglist__21669 = cljs.core.next(arglist__21669);
var k = cljs.core.first(arglist__21669);
arglist__21669 = cljs.core.next(arglist__21669);
var f = cljs.core.first(arglist__21669);
arglist__21669 = cljs.core.next(arglist__21669);
var x1 = cljs.core.first(arglist__21669);
arglist__21669 = cljs.core.next(arglist__21669);
var x2 = cljs.core.first(arglist__21669);
var xs = cljs.core.rest(arglist__21669);
return G__21668__delegate(m,k,f,x1,x2,xs);
});
G__21668.cljs$core$IFn$_invoke$arity$variadic = G__21668__delegate;
return G__21668;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21678_21684 = cljs.core.seq.call(null,m);var chunk__21679_21685 = null;var count__21680_21686 = (0);var i__21681_21687 = (0);while(true){
if((i__21681_21687 < count__21680_21686))
{var vec__21682_21688 = cljs.core._nth.call(null,chunk__21679_21685,i__21681_21687);var k_21689 = cljs.core.nth.call(null,vec__21682_21688,(0),null);var v_21690 = cljs.core.nth.call(null,vec__21682_21688,(1),null);var m21677_21691 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21677_21691,k_21689,f.call(null,v_21690)));
{
var G__21692 = seq__21678_21684;
var G__21693 = chunk__21679_21685;
var G__21694 = count__21680_21686;
var G__21695 = (i__21681_21687 + (1));
seq__21678_21684 = G__21692;
chunk__21679_21685 = G__21693;
count__21680_21686 = G__21694;
i__21681_21687 = G__21695;
continue;
}
} else
{var temp__4126__auto___21696 = cljs.core.seq.call(null,seq__21678_21684);if(temp__4126__auto___21696)
{var seq__21678_21697__$1 = temp__4126__auto___21696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21678_21697__$1))
{var c__4408__auto___21698 = cljs.core.chunk_first.call(null,seq__21678_21697__$1);{
var G__21699 = cljs.core.chunk_rest.call(null,seq__21678_21697__$1);
var G__21700 = c__4408__auto___21698;
var G__21701 = cljs.core.count.call(null,c__4408__auto___21698);
var G__21702 = (0);
seq__21678_21684 = G__21699;
chunk__21679_21685 = G__21700;
count__21680_21686 = G__21701;
i__21681_21687 = G__21702;
continue;
}
} else
{var vec__21683_21703 = cljs.core.first.call(null,seq__21678_21697__$1);var k_21704 = cljs.core.nth.call(null,vec__21683_21703,(0),null);var v_21705 = cljs.core.nth.call(null,vec__21683_21703,(1),null);var m21677_21706 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21677_21706,k_21704,f.call(null,v_21705)));
{
var G__21707 = cljs.core.next.call(null,seq__21678_21697__$1);
var G__21708 = null;
var G__21709 = (0);
var G__21710 = (0);
seq__21678_21684 = G__21707;
chunk__21679_21685 = G__21708;
count__21680_21686 = G__21709;
i__21681_21687 = G__21710;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21719_21725 = cljs.core.seq.call(null,m);var chunk__21720_21726 = null;var count__21721_21727 = (0);var i__21722_21728 = (0);while(true){
if((i__21722_21728 < count__21721_21727))
{var vec__21723_21729 = cljs.core._nth.call(null,chunk__21720_21726,i__21722_21728);var k_21730 = cljs.core.nth.call(null,vec__21723_21729,(0),null);var v_21731 = cljs.core.nth.call(null,vec__21723_21729,(1),null);var m21718_21732 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21718_21732,f.call(null,k_21730),v_21731));
{
var G__21733 = seq__21719_21725;
var G__21734 = chunk__21720_21726;
var G__21735 = count__21721_21727;
var G__21736 = (i__21722_21728 + (1));
seq__21719_21725 = G__21733;
chunk__21720_21726 = G__21734;
count__21721_21727 = G__21735;
i__21722_21728 = G__21736;
continue;
}
} else
{var temp__4126__auto___21737 = cljs.core.seq.call(null,seq__21719_21725);if(temp__4126__auto___21737)
{var seq__21719_21738__$1 = temp__4126__auto___21737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21719_21738__$1))
{var c__4408__auto___21739 = cljs.core.chunk_first.call(null,seq__21719_21738__$1);{
var G__21740 = cljs.core.chunk_rest.call(null,seq__21719_21738__$1);
var G__21741 = c__4408__auto___21739;
var G__21742 = cljs.core.count.call(null,c__4408__auto___21739);
var G__21743 = (0);
seq__21719_21725 = G__21740;
chunk__21720_21726 = G__21741;
count__21721_21727 = G__21742;
i__21722_21728 = G__21743;
continue;
}
} else
{var vec__21724_21744 = cljs.core.first.call(null,seq__21719_21738__$1);var k_21745 = cljs.core.nth.call(null,vec__21724_21744,(0),null);var v_21746 = cljs.core.nth.call(null,vec__21724_21744,(1),null);var m21718_21747 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21718_21747,f.call(null,k_21745),v_21746));
{
var G__21748 = cljs.core.next.call(null,seq__21719_21738__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__21719_21725 = G__21748;
chunk__21720_21726 = G__21749;
count__21721_21727 = G__21750;
i__21722_21728 = G__21751;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21758_21762 = cljs.core.seq.call(null,ks);var chunk__21759_21763 = null;var count__21760_21764 = (0);var i__21761_21765 = (0);while(true){
if((i__21761_21765 < count__21760_21764))
{var k_21766 = cljs.core._nth.call(null,chunk__21759_21763,i__21761_21765);var m21757_21767 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21757_21767,k_21766,f.call(null,k_21766)));
{
var G__21768 = seq__21758_21762;
var G__21769 = chunk__21759_21763;
var G__21770 = count__21760_21764;
var G__21771 = (i__21761_21765 + (1));
seq__21758_21762 = G__21768;
chunk__21759_21763 = G__21769;
count__21760_21764 = G__21770;
i__21761_21765 = G__21771;
continue;
}
} else
{var temp__4126__auto___21772 = cljs.core.seq.call(null,seq__21758_21762);if(temp__4126__auto___21772)
{var seq__21758_21773__$1 = temp__4126__auto___21772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21758_21773__$1))
{var c__4408__auto___21774 = cljs.core.chunk_first.call(null,seq__21758_21773__$1);{
var G__21775 = cljs.core.chunk_rest.call(null,seq__21758_21773__$1);
var G__21776 = c__4408__auto___21774;
var G__21777 = cljs.core.count.call(null,c__4408__auto___21774);
var G__21778 = (0);
seq__21758_21762 = G__21775;
chunk__21759_21763 = G__21776;
count__21760_21764 = G__21777;
i__21761_21765 = G__21778;
continue;
}
} else
{var k_21779 = cljs.core.first.call(null,seq__21758_21773__$1);var m21757_21780 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21757_21780,k_21779,f.call(null,k_21779)));
{
var G__21781 = cljs.core.next.call(null,seq__21758_21773__$1);
var G__21782 = null;
var G__21783 = (0);
var G__21784 = (0);
seq__21758_21762 = G__21781;
chunk__21759_21763 = G__21782;
count__21760_21764 = G__21783;
i__21761_21765 = G__21784;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21791_21795 = cljs.core.seq.call(null,vs);var chunk__21792_21796 = null;var count__21793_21797 = (0);var i__21794_21798 = (0);while(true){
if((i__21794_21798 < count__21793_21797))
{var v_21799 = cljs.core._nth.call(null,chunk__21792_21796,i__21794_21798);var m21790_21800 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21790_21800,f.call(null,v_21799),v_21799));
{
var G__21801 = seq__21791_21795;
var G__21802 = chunk__21792_21796;
var G__21803 = count__21793_21797;
var G__21804 = (i__21794_21798 + (1));
seq__21791_21795 = G__21801;
chunk__21792_21796 = G__21802;
count__21793_21797 = G__21803;
i__21794_21798 = G__21804;
continue;
}
} else
{var temp__4126__auto___21805 = cljs.core.seq.call(null,seq__21791_21795);if(temp__4126__auto___21805)
{var seq__21791_21806__$1 = temp__4126__auto___21805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21791_21806__$1))
{var c__4408__auto___21807 = cljs.core.chunk_first.call(null,seq__21791_21806__$1);{
var G__21808 = cljs.core.chunk_rest.call(null,seq__21791_21806__$1);
var G__21809 = c__4408__auto___21807;
var G__21810 = cljs.core.count.call(null,c__4408__auto___21807);
var G__21811 = (0);
seq__21791_21795 = G__21808;
chunk__21792_21796 = G__21809;
count__21793_21797 = G__21810;
i__21794_21798 = G__21811;
continue;
}
} else
{var v_21812 = cljs.core.first.call(null,seq__21791_21806__$1);var m21790_21813 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21790_21813,f.call(null,v_21812),v_21812));
{
var G__21814 = cljs.core.next.call(null,seq__21791_21806__$1);
var G__21815 = null;
var G__21816 = (0);
var G__21817 = (0);
seq__21791_21795 = G__21814;
chunk__21792_21796 = G__21815;
count__21793_21797 = G__21816;
i__21794_21798 = G__21817;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21818){var vec__21820 = p__21818;var k = cljs.core.nth.call(null,vec__21820,(0),null);var ks = cljs.core.nthnext.call(null,vec__21820,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21829_21835 = cljs.core.seq.call(null,x);var chunk__21830_21836 = null;var count__21831_21837 = (0);var i__21832_21838 = (0);while(true){
if((i__21832_21838 < count__21831_21837))
{var vec__21833_21839 = cljs.core._nth.call(null,chunk__21830_21836,i__21832_21838);var k_21840 = cljs.core.nth.call(null,vec__21833_21839,(0),null);var v_21841 = cljs.core.nth.call(null,vec__21833_21839,(1),null);var m21828_21842 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21828_21842,((typeof k_21840 === 'string')?cljs.core.keyword.call(null,k_21840):k_21840),keywordize_map.call(null,v_21841)));
{
var G__21843 = seq__21829_21835;
var G__21844 = chunk__21830_21836;
var G__21845 = count__21831_21837;
var G__21846 = (i__21832_21838 + (1));
seq__21829_21835 = G__21843;
chunk__21830_21836 = G__21844;
count__21831_21837 = G__21845;
i__21832_21838 = G__21846;
continue;
}
} else
{var temp__4126__auto___21847 = cljs.core.seq.call(null,seq__21829_21835);if(temp__4126__auto___21847)
{var seq__21829_21848__$1 = temp__4126__auto___21847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21829_21848__$1))
{var c__4408__auto___21849 = cljs.core.chunk_first.call(null,seq__21829_21848__$1);{
var G__21850 = cljs.core.chunk_rest.call(null,seq__21829_21848__$1);
var G__21851 = c__4408__auto___21849;
var G__21852 = cljs.core.count.call(null,c__4408__auto___21849);
var G__21853 = (0);
seq__21829_21835 = G__21850;
chunk__21830_21836 = G__21851;
count__21831_21837 = G__21852;
i__21832_21838 = G__21853;
continue;
}
} else
{var vec__21834_21854 = cljs.core.first.call(null,seq__21829_21848__$1);var k_21855 = cljs.core.nth.call(null,vec__21834_21854,(0),null);var v_21856 = cljs.core.nth.call(null,vec__21834_21854,(1),null);var m21828_21857 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21828_21857,((typeof k_21855 === 'string')?cljs.core.keyword.call(null,k_21855):k_21855),keywordize_map.call(null,v_21856)));
{
var G__21858 = cljs.core.next.call(null,seq__21829_21848__$1);
var G__21859 = null;
var G__21860 = (0);
var G__21861 = (0);
seq__21829_21835 = G__21858;
chunk__21830_21836 = G__21859;
count__21831_21837 = G__21860;
i__21832_21838 = G__21861;
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
var G__21862 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21863 = cljs.core.next.call(null,ks);
m = G__21862;
ks = G__21863;
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
})(),(function (){var iter__4377__auto__ = (function iter__21872(s__21873){return (new cljs.core.LazySeq(null,(function (){var s__21873__$1 = s__21873;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21873__$1);if(temp__4126__auto__)
{var s__21873__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21873__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21873__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21875 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21874 = (0);while(true){
if((i__21874 < size__4376__auto__))
{var vec__21878 = cljs.core._nth.call(null,c__4375__auto__,i__21874);var k = cljs.core.nth.call(null,vec__21878,(0),null);var v = cljs.core.nth.call(null,vec__21878,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21880 = (i__21874 + (1));
i__21874 = G__21880;
continue;
}
} else
{{
var G__21881 = (i__21874 + (1));
i__21874 = G__21881;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21875),iter__21872.call(null,cljs.core.chunk_rest.call(null,s__21873__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21875),null);
}
} else
{var vec__21879 = cljs.core.first.call(null,s__21873__$2);var k = cljs.core.nth.call(null,vec__21879,(0),null);var v = cljs.core.nth.call(null,vec__21879,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21872.call(null,cljs.core.rest.call(null,s__21873__$2)));
} else
{{
var G__21882 = cljs.core.rest.call(null,s__21873__$2);
s__21873__$1 = G__21882;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21883){
var m = cljs.core.first(arglist__21883);
var kvs = cljs.core.rest(arglist__21883);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21884){
var m = cljs.core.first(arglist__21884);
arglist__21884 = cljs.core.next(arglist__21884);
var key_seq = cljs.core.first(arglist__21884);
arglist__21884 = cljs.core.next(arglist__21884);
var f = cljs.core.first(arglist__21884);
var args = cljs.core.rest(arglist__21884);
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
return (function iter__21889(s__21890){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21890__$1 = s__21890;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21890__$1);if(temp__4126__auto__)
{var s__21890__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21890__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21890__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21892 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21891 = (0);while(true){
if((i__21891 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21891);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21892,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21893 = (i__21891 + (1));
i__21891 = G__21893;
continue;
}
} else
{{
var G__21894 = (i__21891 + (1));
i__21891 = G__21894;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21892),iter__21889.call(null,cljs.core.chunk_rest.call(null,s__21890__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21892),null);
}
} else
{var x = cljs.core.first.call(null,s__21890__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21889.call(null,cljs.core.rest.call(null,s__21890__$2)));
} else
{{
var G__21895 = cljs.core.rest.call(null,s__21890__$2);
s__21890__$1 = G__21895;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21896){
var colls = cljs.core.seq(arglist__21896);
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
var G__21897__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21898 = conj_when.call(null,coll,x);
var G__21899 = cljs.core.first.call(null,xs);
var G__21900 = cljs.core.next.call(null,xs);
coll = G__21898;
x = G__21899;
xs = G__21900;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21897 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21897__delegate.call(this,coll,x,xs);};
G__21897.cljs$lang$maxFixedArity = 2;
G__21897.cljs$lang$applyTo = (function (arglist__21901){
var coll = cljs.core.first(arglist__21901);
arglist__21901 = cljs.core.next(arglist__21901);
var x = cljs.core.first(arglist__21901);
var xs = cljs.core.rest(arglist__21901);
return G__21897__delegate(coll,x,xs);
});
G__21897.cljs$core$IFn$_invoke$arity$variadic = G__21897__delegate;
return G__21897;
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
var G__21903__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21902_SHARP_){return cljs.core.apply.call(null,f,p1__21902_SHARP_,args);
}));
};
var G__21903 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21903__delegate.call(this,a,f,args);};
G__21903.cljs$lang$maxFixedArity = 2;
G__21903.cljs$lang$applyTo = (function (arglist__21904){
var a = cljs.core.first(arglist__21904);
arglist__21904 = cljs.core.next(arglist__21904);
var f = cljs.core.first(arglist__21904);
var args = cljs.core.rest(arglist__21904);
return G__21903__delegate(a,f,args);
});
G__21903.cljs$core$IFn$_invoke$arity$variadic = G__21903__delegate;
return G__21903;
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
var G__21905__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21905 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21905__delegate.call(this,f,arg,args);};
G__21905.cljs$lang$maxFixedArity = 2;
G__21905.cljs$lang$applyTo = (function (arglist__21906){
var f = cljs.core.first(arglist__21906);
arglist__21906 = cljs.core.next(arglist__21906);
var arg = cljs.core.first(arglist__21906);
var args = cljs.core.rest(arglist__21906);
return G__21905__delegate(f,arg,args);
});
G__21905.cljs$core$IFn$_invoke$arity$variadic = G__21905__delegate;
return G__21905;
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
