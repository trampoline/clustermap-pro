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
var G__21683__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21683 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21683__delegate.call(this,m,k,f,x1,x2,xs);};
G__21683.cljs$lang$maxFixedArity = 5;
G__21683.cljs$lang$applyTo = (function (arglist__21684){
var m = cljs.core.first(arglist__21684);
arglist__21684 = cljs.core.next(arglist__21684);
var k = cljs.core.first(arglist__21684);
arglist__21684 = cljs.core.next(arglist__21684);
var f = cljs.core.first(arglist__21684);
arglist__21684 = cljs.core.next(arglist__21684);
var x1 = cljs.core.first(arglist__21684);
arglist__21684 = cljs.core.next(arglist__21684);
var x2 = cljs.core.first(arglist__21684);
var xs = cljs.core.rest(arglist__21684);
return G__21683__delegate(m,k,f,x1,x2,xs);
});
G__21683.cljs$core$IFn$_invoke$arity$variadic = G__21683__delegate;
return G__21683;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21693_21699 = cljs.core.seq.call(null,m);var chunk__21694_21700 = null;var count__21695_21701 = (0);var i__21696_21702 = (0);while(true){
if((i__21696_21702 < count__21695_21701))
{var vec__21697_21703 = cljs.core._nth.call(null,chunk__21694_21700,i__21696_21702);var k_21704 = cljs.core.nth.call(null,vec__21697_21703,(0),null);var v_21705 = cljs.core.nth.call(null,vec__21697_21703,(1),null);var m21692_21706 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21692_21706,k_21704,f.call(null,v_21705)));
{
var G__21707 = seq__21693_21699;
var G__21708 = chunk__21694_21700;
var G__21709 = count__21695_21701;
var G__21710 = (i__21696_21702 + (1));
seq__21693_21699 = G__21707;
chunk__21694_21700 = G__21708;
count__21695_21701 = G__21709;
i__21696_21702 = G__21710;
continue;
}
} else
{var temp__4126__auto___21711 = cljs.core.seq.call(null,seq__21693_21699);if(temp__4126__auto___21711)
{var seq__21693_21712__$1 = temp__4126__auto___21711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21693_21712__$1))
{var c__4408__auto___21713 = cljs.core.chunk_first.call(null,seq__21693_21712__$1);{
var G__21714 = cljs.core.chunk_rest.call(null,seq__21693_21712__$1);
var G__21715 = c__4408__auto___21713;
var G__21716 = cljs.core.count.call(null,c__4408__auto___21713);
var G__21717 = (0);
seq__21693_21699 = G__21714;
chunk__21694_21700 = G__21715;
count__21695_21701 = G__21716;
i__21696_21702 = G__21717;
continue;
}
} else
{var vec__21698_21718 = cljs.core.first.call(null,seq__21693_21712__$1);var k_21719 = cljs.core.nth.call(null,vec__21698_21718,(0),null);var v_21720 = cljs.core.nth.call(null,vec__21698_21718,(1),null);var m21692_21721 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21692_21721,k_21719,f.call(null,v_21720)));
{
var G__21722 = cljs.core.next.call(null,seq__21693_21712__$1);
var G__21723 = null;
var G__21724 = (0);
var G__21725 = (0);
seq__21693_21699 = G__21722;
chunk__21694_21700 = G__21723;
count__21695_21701 = G__21724;
i__21696_21702 = G__21725;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21734_21740 = cljs.core.seq.call(null,m);var chunk__21735_21741 = null;var count__21736_21742 = (0);var i__21737_21743 = (0);while(true){
if((i__21737_21743 < count__21736_21742))
{var vec__21738_21744 = cljs.core._nth.call(null,chunk__21735_21741,i__21737_21743);var k_21745 = cljs.core.nth.call(null,vec__21738_21744,(0),null);var v_21746 = cljs.core.nth.call(null,vec__21738_21744,(1),null);var m21733_21747 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21733_21747,f.call(null,k_21745),v_21746));
{
var G__21748 = seq__21734_21740;
var G__21749 = chunk__21735_21741;
var G__21750 = count__21736_21742;
var G__21751 = (i__21737_21743 + (1));
seq__21734_21740 = G__21748;
chunk__21735_21741 = G__21749;
count__21736_21742 = G__21750;
i__21737_21743 = G__21751;
continue;
}
} else
{var temp__4126__auto___21752 = cljs.core.seq.call(null,seq__21734_21740);if(temp__4126__auto___21752)
{var seq__21734_21753__$1 = temp__4126__auto___21752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21734_21753__$1))
{var c__4408__auto___21754 = cljs.core.chunk_first.call(null,seq__21734_21753__$1);{
var G__21755 = cljs.core.chunk_rest.call(null,seq__21734_21753__$1);
var G__21756 = c__4408__auto___21754;
var G__21757 = cljs.core.count.call(null,c__4408__auto___21754);
var G__21758 = (0);
seq__21734_21740 = G__21755;
chunk__21735_21741 = G__21756;
count__21736_21742 = G__21757;
i__21737_21743 = G__21758;
continue;
}
} else
{var vec__21739_21759 = cljs.core.first.call(null,seq__21734_21753__$1);var k_21760 = cljs.core.nth.call(null,vec__21739_21759,(0),null);var v_21761 = cljs.core.nth.call(null,vec__21739_21759,(1),null);var m21733_21762 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21733_21762,f.call(null,k_21760),v_21761));
{
var G__21763 = cljs.core.next.call(null,seq__21734_21753__$1);
var G__21764 = null;
var G__21765 = (0);
var G__21766 = (0);
seq__21734_21740 = G__21763;
chunk__21735_21741 = G__21764;
count__21736_21742 = G__21765;
i__21737_21743 = G__21766;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21773_21777 = cljs.core.seq.call(null,ks);var chunk__21774_21778 = null;var count__21775_21779 = (0);var i__21776_21780 = (0);while(true){
if((i__21776_21780 < count__21775_21779))
{var k_21781 = cljs.core._nth.call(null,chunk__21774_21778,i__21776_21780);var m21772_21782 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21772_21782,k_21781,f.call(null,k_21781)));
{
var G__21783 = seq__21773_21777;
var G__21784 = chunk__21774_21778;
var G__21785 = count__21775_21779;
var G__21786 = (i__21776_21780 + (1));
seq__21773_21777 = G__21783;
chunk__21774_21778 = G__21784;
count__21775_21779 = G__21785;
i__21776_21780 = G__21786;
continue;
}
} else
{var temp__4126__auto___21787 = cljs.core.seq.call(null,seq__21773_21777);if(temp__4126__auto___21787)
{var seq__21773_21788__$1 = temp__4126__auto___21787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21773_21788__$1))
{var c__4408__auto___21789 = cljs.core.chunk_first.call(null,seq__21773_21788__$1);{
var G__21790 = cljs.core.chunk_rest.call(null,seq__21773_21788__$1);
var G__21791 = c__4408__auto___21789;
var G__21792 = cljs.core.count.call(null,c__4408__auto___21789);
var G__21793 = (0);
seq__21773_21777 = G__21790;
chunk__21774_21778 = G__21791;
count__21775_21779 = G__21792;
i__21776_21780 = G__21793;
continue;
}
} else
{var k_21794 = cljs.core.first.call(null,seq__21773_21788__$1);var m21772_21795 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21772_21795,k_21794,f.call(null,k_21794)));
{
var G__21796 = cljs.core.next.call(null,seq__21773_21788__$1);
var G__21797 = null;
var G__21798 = (0);
var G__21799 = (0);
seq__21773_21777 = G__21796;
chunk__21774_21778 = G__21797;
count__21775_21779 = G__21798;
i__21776_21780 = G__21799;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21806_21810 = cljs.core.seq.call(null,vs);var chunk__21807_21811 = null;var count__21808_21812 = (0);var i__21809_21813 = (0);while(true){
if((i__21809_21813 < count__21808_21812))
{var v_21814 = cljs.core._nth.call(null,chunk__21807_21811,i__21809_21813);var m21805_21815 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21805_21815,f.call(null,v_21814),v_21814));
{
var G__21816 = seq__21806_21810;
var G__21817 = chunk__21807_21811;
var G__21818 = count__21808_21812;
var G__21819 = (i__21809_21813 + (1));
seq__21806_21810 = G__21816;
chunk__21807_21811 = G__21817;
count__21808_21812 = G__21818;
i__21809_21813 = G__21819;
continue;
}
} else
{var temp__4126__auto___21820 = cljs.core.seq.call(null,seq__21806_21810);if(temp__4126__auto___21820)
{var seq__21806_21821__$1 = temp__4126__auto___21820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21806_21821__$1))
{var c__4408__auto___21822 = cljs.core.chunk_first.call(null,seq__21806_21821__$1);{
var G__21823 = cljs.core.chunk_rest.call(null,seq__21806_21821__$1);
var G__21824 = c__4408__auto___21822;
var G__21825 = cljs.core.count.call(null,c__4408__auto___21822);
var G__21826 = (0);
seq__21806_21810 = G__21823;
chunk__21807_21811 = G__21824;
count__21808_21812 = G__21825;
i__21809_21813 = G__21826;
continue;
}
} else
{var v_21827 = cljs.core.first.call(null,seq__21806_21821__$1);var m21805_21828 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21805_21828,f.call(null,v_21827),v_21827));
{
var G__21829 = cljs.core.next.call(null,seq__21806_21821__$1);
var G__21830 = null;
var G__21831 = (0);
var G__21832 = (0);
seq__21806_21810 = G__21829;
chunk__21807_21811 = G__21830;
count__21808_21812 = G__21831;
i__21809_21813 = G__21832;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21833){var vec__21835 = p__21833;var k = cljs.core.nth.call(null,vec__21835,(0),null);var ks = cljs.core.nthnext.call(null,vec__21835,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21844_21850 = cljs.core.seq.call(null,x);var chunk__21845_21851 = null;var count__21846_21852 = (0);var i__21847_21853 = (0);while(true){
if((i__21847_21853 < count__21846_21852))
{var vec__21848_21854 = cljs.core._nth.call(null,chunk__21845_21851,i__21847_21853);var k_21855 = cljs.core.nth.call(null,vec__21848_21854,(0),null);var v_21856 = cljs.core.nth.call(null,vec__21848_21854,(1),null);var m21843_21857 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21843_21857,((typeof k_21855 === 'string')?cljs.core.keyword.call(null,k_21855):k_21855),keywordize_map.call(null,v_21856)));
{
var G__21858 = seq__21844_21850;
var G__21859 = chunk__21845_21851;
var G__21860 = count__21846_21852;
var G__21861 = (i__21847_21853 + (1));
seq__21844_21850 = G__21858;
chunk__21845_21851 = G__21859;
count__21846_21852 = G__21860;
i__21847_21853 = G__21861;
continue;
}
} else
{var temp__4126__auto___21862 = cljs.core.seq.call(null,seq__21844_21850);if(temp__4126__auto___21862)
{var seq__21844_21863__$1 = temp__4126__auto___21862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21844_21863__$1))
{var c__4408__auto___21864 = cljs.core.chunk_first.call(null,seq__21844_21863__$1);{
var G__21865 = cljs.core.chunk_rest.call(null,seq__21844_21863__$1);
var G__21866 = c__4408__auto___21864;
var G__21867 = cljs.core.count.call(null,c__4408__auto___21864);
var G__21868 = (0);
seq__21844_21850 = G__21865;
chunk__21845_21851 = G__21866;
count__21846_21852 = G__21867;
i__21847_21853 = G__21868;
continue;
}
} else
{var vec__21849_21869 = cljs.core.first.call(null,seq__21844_21863__$1);var k_21870 = cljs.core.nth.call(null,vec__21849_21869,(0),null);var v_21871 = cljs.core.nth.call(null,vec__21849_21869,(1),null);var m21843_21872 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21843_21872,((typeof k_21870 === 'string')?cljs.core.keyword.call(null,k_21870):k_21870),keywordize_map.call(null,v_21871)));
{
var G__21873 = cljs.core.next.call(null,seq__21844_21863__$1);
var G__21874 = null;
var G__21875 = (0);
var G__21876 = (0);
seq__21844_21850 = G__21873;
chunk__21845_21851 = G__21874;
count__21846_21852 = G__21875;
i__21847_21853 = G__21876;
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
var G__21877 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21878 = cljs.core.next.call(null,ks);
m = G__21877;
ks = G__21878;
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
})(),(function (){var iter__4377__auto__ = (function iter__21887(s__21888){return (new cljs.core.LazySeq(null,(function (){var s__21888__$1 = s__21888;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21888__$1);if(temp__4126__auto__)
{var s__21888__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21888__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21888__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21890 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21889 = (0);while(true){
if((i__21889 < size__4376__auto__))
{var vec__21893 = cljs.core._nth.call(null,c__4375__auto__,i__21889);var k = cljs.core.nth.call(null,vec__21893,(0),null);var v = cljs.core.nth.call(null,vec__21893,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21890,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21895 = (i__21889 + (1));
i__21889 = G__21895;
continue;
}
} else
{{
var G__21896 = (i__21889 + (1));
i__21889 = G__21896;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21890),iter__21887.call(null,cljs.core.chunk_rest.call(null,s__21888__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21890),null);
}
} else
{var vec__21894 = cljs.core.first.call(null,s__21888__$2);var k = cljs.core.nth.call(null,vec__21894,(0),null);var v = cljs.core.nth.call(null,vec__21894,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21887.call(null,cljs.core.rest.call(null,s__21888__$2)));
} else
{{
var G__21897 = cljs.core.rest.call(null,s__21888__$2);
s__21888__$1 = G__21897;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21898){
var m = cljs.core.first(arglist__21898);
var kvs = cljs.core.rest(arglist__21898);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21899){
var m = cljs.core.first(arglist__21899);
arglist__21899 = cljs.core.next(arglist__21899);
var key_seq = cljs.core.first(arglist__21899);
arglist__21899 = cljs.core.next(arglist__21899);
var f = cljs.core.first(arglist__21899);
var args = cljs.core.rest(arglist__21899);
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
return (function iter__21904(s__21905){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21905__$1 = s__21905;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21905__$1);if(temp__4126__auto__)
{var s__21905__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21905__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21905__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21907 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21906 = (0);while(true){
if((i__21906 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21906);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21907,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21908 = (i__21906 + (1));
i__21906 = G__21908;
continue;
}
} else
{{
var G__21909 = (i__21906 + (1));
i__21906 = G__21909;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21907),iter__21904.call(null,cljs.core.chunk_rest.call(null,s__21905__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21907),null);
}
} else
{var x = cljs.core.first.call(null,s__21905__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21904.call(null,cljs.core.rest.call(null,s__21905__$2)));
} else
{{
var G__21910 = cljs.core.rest.call(null,s__21905__$2);
s__21905__$1 = G__21910;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21911){
var colls = cljs.core.seq(arglist__21911);
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
var G__21912__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21913 = conj_when.call(null,coll,x);
var G__21914 = cljs.core.first.call(null,xs);
var G__21915 = cljs.core.next.call(null,xs);
coll = G__21913;
x = G__21914;
xs = G__21915;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21912 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21912__delegate.call(this,coll,x,xs);};
G__21912.cljs$lang$maxFixedArity = 2;
G__21912.cljs$lang$applyTo = (function (arglist__21916){
var coll = cljs.core.first(arglist__21916);
arglist__21916 = cljs.core.next(arglist__21916);
var x = cljs.core.first(arglist__21916);
var xs = cljs.core.rest(arglist__21916);
return G__21912__delegate(coll,x,xs);
});
G__21912.cljs$core$IFn$_invoke$arity$variadic = G__21912__delegate;
return G__21912;
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
var G__21918__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21917_SHARP_){return cljs.core.apply.call(null,f,p1__21917_SHARP_,args);
}));
};
var G__21918 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21918__delegate.call(this,a,f,args);};
G__21918.cljs$lang$maxFixedArity = 2;
G__21918.cljs$lang$applyTo = (function (arglist__21919){
var a = cljs.core.first(arglist__21919);
arglist__21919 = cljs.core.next(arglist__21919);
var f = cljs.core.first(arglist__21919);
var args = cljs.core.rest(arglist__21919);
return G__21918__delegate(a,f,args);
});
G__21918.cljs$core$IFn$_invoke$arity$variadic = G__21918__delegate;
return G__21918;
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
var G__21920__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21920 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21920__delegate.call(this,f,arg,args);};
G__21920.cljs$lang$maxFixedArity = 2;
G__21920.cljs$lang$applyTo = (function (arglist__21921){
var f = cljs.core.first(arglist__21921);
arglist__21921 = cljs.core.next(arglist__21921);
var arg = cljs.core.first(arglist__21921);
var args = cljs.core.rest(arglist__21921);
return G__21920__delegate(f,arg,args);
});
G__21920.cljs$core$IFn$_invoke$arity$variadic = G__21920__delegate;
return G__21920;
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
