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
var G__39755__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__39755 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__39755__delegate.call(this,m,k,f,x1,x2,xs);};
G__39755.cljs$lang$maxFixedArity = 5;
G__39755.cljs$lang$applyTo = (function (arglist__39756){
var m = cljs.core.first(arglist__39756);
arglist__39756 = cljs.core.next(arglist__39756);
var k = cljs.core.first(arglist__39756);
arglist__39756 = cljs.core.next(arglist__39756);
var f = cljs.core.first(arglist__39756);
arglist__39756 = cljs.core.next(arglist__39756);
var x1 = cljs.core.first(arglist__39756);
arglist__39756 = cljs.core.next(arglist__39756);
var x2 = cljs.core.first(arglist__39756);
var xs = cljs.core.rest(arglist__39756);
return G__39755__delegate(m,k,f,x1,x2,xs);
});
G__39755.cljs$core$IFn$_invoke$arity$variadic = G__39755__delegate;
return G__39755;
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
{var m_atom__15476__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39765_39771 = cljs.core.seq.call(null,m);var chunk__39766_39772 = null;var count__39767_39773 = (0);var i__39768_39774 = (0);while(true){
if((i__39768_39774 < count__39767_39773))
{var vec__39769_39775 = cljs.core._nth.call(null,chunk__39766_39772,i__39768_39774);var k_39776 = cljs.core.nth.call(null,vec__39769_39775,(0),null);var v_39777 = cljs.core.nth.call(null,vec__39769_39775,(1),null);var m39764_39778 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39764_39778,k_39776,f.call(null,v_39777)));
{
var G__39779 = seq__39765_39771;
var G__39780 = chunk__39766_39772;
var G__39781 = count__39767_39773;
var G__39782 = (i__39768_39774 + (1));
seq__39765_39771 = G__39779;
chunk__39766_39772 = G__39780;
count__39767_39773 = G__39781;
i__39768_39774 = G__39782;
continue;
}
} else
{var temp__4126__auto___39783 = cljs.core.seq.call(null,seq__39765_39771);if(temp__4126__auto___39783)
{var seq__39765_39784__$1 = temp__4126__auto___39783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39765_39784__$1))
{var c__12321__auto___39785 = cljs.core.chunk_first.call(null,seq__39765_39784__$1);{
var G__39786 = cljs.core.chunk_rest.call(null,seq__39765_39784__$1);
var G__39787 = c__12321__auto___39785;
var G__39788 = cljs.core.count.call(null,c__12321__auto___39785);
var G__39789 = (0);
seq__39765_39771 = G__39786;
chunk__39766_39772 = G__39787;
count__39767_39773 = G__39788;
i__39768_39774 = G__39789;
continue;
}
} else
{var vec__39770_39790 = cljs.core.first.call(null,seq__39765_39784__$1);var k_39791 = cljs.core.nth.call(null,vec__39770_39790,(0),null);var v_39792 = cljs.core.nth.call(null,vec__39770_39790,(1),null);var m39764_39793 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39764_39793,k_39791,f.call(null,v_39792)));
{
var G__39794 = cljs.core.next.call(null,seq__39765_39784__$1);
var G__39795 = null;
var G__39796 = (0);
var G__39797 = (0);
seq__39765_39771 = G__39794;
chunk__39766_39772 = G__39795;
count__39767_39773 = G__39796;
i__39768_39774 = G__39797;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15476__auto__));

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
{var m_atom__15476__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39806_39812 = cljs.core.seq.call(null,m);var chunk__39807_39813 = null;var count__39808_39814 = (0);var i__39809_39815 = (0);while(true){
if((i__39809_39815 < count__39808_39814))
{var vec__39810_39816 = cljs.core._nth.call(null,chunk__39807_39813,i__39809_39815);var k_39817 = cljs.core.nth.call(null,vec__39810_39816,(0),null);var v_39818 = cljs.core.nth.call(null,vec__39810_39816,(1),null);var m39805_39819 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39805_39819,f.call(null,k_39817),v_39818));
{
var G__39820 = seq__39806_39812;
var G__39821 = chunk__39807_39813;
var G__39822 = count__39808_39814;
var G__39823 = (i__39809_39815 + (1));
seq__39806_39812 = G__39820;
chunk__39807_39813 = G__39821;
count__39808_39814 = G__39822;
i__39809_39815 = G__39823;
continue;
}
} else
{var temp__4126__auto___39824 = cljs.core.seq.call(null,seq__39806_39812);if(temp__4126__auto___39824)
{var seq__39806_39825__$1 = temp__4126__auto___39824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39806_39825__$1))
{var c__12321__auto___39826 = cljs.core.chunk_first.call(null,seq__39806_39825__$1);{
var G__39827 = cljs.core.chunk_rest.call(null,seq__39806_39825__$1);
var G__39828 = c__12321__auto___39826;
var G__39829 = cljs.core.count.call(null,c__12321__auto___39826);
var G__39830 = (0);
seq__39806_39812 = G__39827;
chunk__39807_39813 = G__39828;
count__39808_39814 = G__39829;
i__39809_39815 = G__39830;
continue;
}
} else
{var vec__39811_39831 = cljs.core.first.call(null,seq__39806_39825__$1);var k_39832 = cljs.core.nth.call(null,vec__39811_39831,(0),null);var v_39833 = cljs.core.nth.call(null,vec__39811_39831,(1),null);var m39805_39834 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39805_39834,f.call(null,k_39832),v_39833));
{
var G__39835 = cljs.core.next.call(null,seq__39806_39825__$1);
var G__39836 = null;
var G__39837 = (0);
var G__39838 = (0);
seq__39806_39812 = G__39835;
chunk__39807_39813 = G__39836;
count__39808_39814 = G__39837;
i__39809_39815 = G__39838;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15476__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15476__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39845_39849 = cljs.core.seq.call(null,ks);var chunk__39846_39850 = null;var count__39847_39851 = (0);var i__39848_39852 = (0);while(true){
if((i__39848_39852 < count__39847_39851))
{var k_39853 = cljs.core._nth.call(null,chunk__39846_39850,i__39848_39852);var m39844_39854 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39844_39854,k_39853,f.call(null,k_39853)));
{
var G__39855 = seq__39845_39849;
var G__39856 = chunk__39846_39850;
var G__39857 = count__39847_39851;
var G__39858 = (i__39848_39852 + (1));
seq__39845_39849 = G__39855;
chunk__39846_39850 = G__39856;
count__39847_39851 = G__39857;
i__39848_39852 = G__39858;
continue;
}
} else
{var temp__4126__auto___39859 = cljs.core.seq.call(null,seq__39845_39849);if(temp__4126__auto___39859)
{var seq__39845_39860__$1 = temp__4126__auto___39859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39845_39860__$1))
{var c__12321__auto___39861 = cljs.core.chunk_first.call(null,seq__39845_39860__$1);{
var G__39862 = cljs.core.chunk_rest.call(null,seq__39845_39860__$1);
var G__39863 = c__12321__auto___39861;
var G__39864 = cljs.core.count.call(null,c__12321__auto___39861);
var G__39865 = (0);
seq__39845_39849 = G__39862;
chunk__39846_39850 = G__39863;
count__39847_39851 = G__39864;
i__39848_39852 = G__39865;
continue;
}
} else
{var k_39866 = cljs.core.first.call(null,seq__39845_39860__$1);var m39844_39867 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39844_39867,k_39866,f.call(null,k_39866)));
{
var G__39868 = cljs.core.next.call(null,seq__39845_39860__$1);
var G__39869 = null;
var G__39870 = (0);
var G__39871 = (0);
seq__39845_39849 = G__39868;
chunk__39846_39850 = G__39869;
count__39847_39851 = G__39870;
i__39848_39852 = G__39871;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15476__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15476__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39878_39882 = cljs.core.seq.call(null,vs);var chunk__39879_39883 = null;var count__39880_39884 = (0);var i__39881_39885 = (0);while(true){
if((i__39881_39885 < count__39880_39884))
{var v_39886 = cljs.core._nth.call(null,chunk__39879_39883,i__39881_39885);var m39877_39887 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39877_39887,f.call(null,v_39886),v_39886));
{
var G__39888 = seq__39878_39882;
var G__39889 = chunk__39879_39883;
var G__39890 = count__39880_39884;
var G__39891 = (i__39881_39885 + (1));
seq__39878_39882 = G__39888;
chunk__39879_39883 = G__39889;
count__39880_39884 = G__39890;
i__39881_39885 = G__39891;
continue;
}
} else
{var temp__4126__auto___39892 = cljs.core.seq.call(null,seq__39878_39882);if(temp__4126__auto___39892)
{var seq__39878_39893__$1 = temp__4126__auto___39892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39878_39893__$1))
{var c__12321__auto___39894 = cljs.core.chunk_first.call(null,seq__39878_39893__$1);{
var G__39895 = cljs.core.chunk_rest.call(null,seq__39878_39893__$1);
var G__39896 = c__12321__auto___39894;
var G__39897 = cljs.core.count.call(null,c__12321__auto___39894);
var G__39898 = (0);
seq__39878_39882 = G__39895;
chunk__39879_39883 = G__39896;
count__39880_39884 = G__39897;
i__39881_39885 = G__39898;
continue;
}
} else
{var v_39899 = cljs.core.first.call(null,seq__39878_39893__$1);var m39877_39900 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39877_39900,f.call(null,v_39899),v_39899));
{
var G__39901 = cljs.core.next.call(null,seq__39878_39893__$1);
var G__39902 = null;
var G__39903 = (0);
var G__39904 = (0);
seq__39878_39882 = G__39901;
chunk__39879_39883 = G__39902;
count__39880_39884 = G__39903;
i__39881_39885 = G__39904;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15476__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__39905){var vec__39907 = p__39905;var k = cljs.core.nth.call(null,vec__39907,(0),null);var ks = cljs.core.nthnext.call(null,vec__39907,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__11540__auto__ = ks;if(and__11540__auto__)
{return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else
{return and__11540__auto__;
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
{var m_atom__15476__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39916_39922 = cljs.core.seq.call(null,x);var chunk__39917_39923 = null;var count__39918_39924 = (0);var i__39919_39925 = (0);while(true){
if((i__39919_39925 < count__39918_39924))
{var vec__39920_39926 = cljs.core._nth.call(null,chunk__39917_39923,i__39919_39925);var k_39927 = cljs.core.nth.call(null,vec__39920_39926,(0),null);var v_39928 = cljs.core.nth.call(null,vec__39920_39926,(1),null);var m39915_39929 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39915_39929,((typeof k_39927 === 'string')?cljs.core.keyword.call(null,k_39927):k_39927),keywordize_map.call(null,v_39928)));
{
var G__39930 = seq__39916_39922;
var G__39931 = chunk__39917_39923;
var G__39932 = count__39918_39924;
var G__39933 = (i__39919_39925 + (1));
seq__39916_39922 = G__39930;
chunk__39917_39923 = G__39931;
count__39918_39924 = G__39932;
i__39919_39925 = G__39933;
continue;
}
} else
{var temp__4126__auto___39934 = cljs.core.seq.call(null,seq__39916_39922);if(temp__4126__auto___39934)
{var seq__39916_39935__$1 = temp__4126__auto___39934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39916_39935__$1))
{var c__12321__auto___39936 = cljs.core.chunk_first.call(null,seq__39916_39935__$1);{
var G__39937 = cljs.core.chunk_rest.call(null,seq__39916_39935__$1);
var G__39938 = c__12321__auto___39936;
var G__39939 = cljs.core.count.call(null,c__12321__auto___39936);
var G__39940 = (0);
seq__39916_39922 = G__39937;
chunk__39917_39923 = G__39938;
count__39918_39924 = G__39939;
i__39919_39925 = G__39940;
continue;
}
} else
{var vec__39921_39941 = cljs.core.first.call(null,seq__39916_39935__$1);var k_39942 = cljs.core.nth.call(null,vec__39921_39941,(0),null);var v_39943 = cljs.core.nth.call(null,vec__39921_39941,(1),null);var m39915_39944 = cljs.core.deref.call(null,m_atom__15476__auto__);cljs.core.reset_BANG_.call(null,m_atom__15476__auto__,cljs.core.assoc_BANG_.call(null,m39915_39944,((typeof k_39942 === 'string')?cljs.core.keyword.call(null,k_39942):k_39942),keywordize_map.call(null,v_39943)));
{
var G__39945 = cljs.core.next.call(null,seq__39916_39935__$1);
var G__39946 = null;
var G__39947 = (0);
var G__39948 = (0);
seq__39916_39922 = G__39945;
chunk__39917_39923 = G__39946;
count__39918_39924 = G__39947;
i__39919_39925 = G__39948;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15476__auto__));
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
{var pair__15545__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15545__auto__);
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
var G__39949 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__39950 = cljs.core.next.call(null,ks);
m = G__39949;
ks = G__39950;
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
return cljs.core.into.call(null,(function (){var or__11552__auto__ = m;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__12290__auto__ = (function iter__39959(s__39960){return (new cljs.core.LazySeq(null,(function (){var s__39960__$1 = s__39960;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39960__$1);if(temp__4126__auto__)
{var s__39960__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39960__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__39960__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__39962 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__39961 = (0);while(true){
if((i__39961 < size__12289__auto__))
{var vec__39965 = cljs.core._nth.call(null,c__12288__auto__,i__39961);var k = cljs.core.nth.call(null,vec__39965,(0),null);var v = cljs.core.nth.call(null,vec__39965,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__39962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39967 = (i__39961 + (1));
i__39961 = G__39967;
continue;
}
} else
{{
var G__39968 = (i__39961 + (1));
i__39961 = G__39968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39962),iter__39959.call(null,cljs.core.chunk_rest.call(null,s__39960__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39962),null);
}
} else
{var vec__39966 = cljs.core.first.call(null,s__39960__$2);var k = cljs.core.nth.call(null,vec__39966,(0),null);var v = cljs.core.nth.call(null,vec__39966,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39959.call(null,cljs.core.rest.call(null,s__39960__$2)));
} else
{{
var G__39969 = cljs.core.rest.call(null,s__39960__$2);
s__39960__$1 = G__39969;
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
});return iter__12290__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__39970){
var m = cljs.core.first(arglist__39970);
var kvs = cljs.core.rest(arglist__39970);
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
update_in_when.cljs$lang$applyTo = (function (arglist__39971){
var m = cljs.core.first(arglist__39971);
arglist__39971 = cljs.core.next(arglist__39971);
var key_seq = cljs.core.first(arglist__39971);
arglist__39971 = cljs.core.next(arglist__39971);
var f = cljs.core.first(arglist__39971);
var args = cljs.core.rest(arglist__39971);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__12290__auto__ = ((function (s){
return (function iter__39976(s__39977){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__39977__$1 = s__39977;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39977__$1);if(temp__4126__auto__)
{var s__39977__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39977__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__39977__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__39979 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__39978 = (0);while(true){
if((i__39978 < size__12289__auto__))
{var x = cljs.core._nth.call(null,c__12288__auto__,i__39978);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__39979,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__39980 = (i__39978 + (1));
i__39978 = G__39980;
continue;
}
} else
{{
var G__39981 = (i__39978 + (1));
i__39978 = G__39981;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39979),iter__39976.call(null,cljs.core.chunk_rest.call(null,s__39977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39979),null);
}
} else
{var x = cljs.core.first.call(null,s__39977__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__39976.call(null,cljs.core.rest.call(null,s__39977__$2)));
} else
{{
var G__39982 = cljs.core.rest.call(null,s__39977__$2);
s__39977__$1 = G__39982;
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
;return iter__12290__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__39983){
var colls = cljs.core.seq(arglist__39983);
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
var G__39984__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__39985 = conj_when.call(null,coll,x);
var G__39986 = cljs.core.first.call(null,xs);
var G__39987 = cljs.core.next.call(null,xs);
coll = G__39985;
x = G__39986;
xs = G__39987;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__39984 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39984__delegate.call(this,coll,x,xs);};
G__39984.cljs$lang$maxFixedArity = 2;
G__39984.cljs$lang$applyTo = (function (arglist__39988){
var coll = cljs.core.first(arglist__39988);
arglist__39988 = cljs.core.next(arglist__39988);
var x = cljs.core.first(arglist__39988);
var xs = cljs.core.rest(arglist__39988);
return G__39984__delegate(coll,x,xs);
});
G__39984.cljs$core$IFn$_invoke$arity$variadic = G__39984__delegate;
return G__39984;
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
var G__39990__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__39989_SHARP_){return cljs.core.apply.call(null,f,p1__39989_SHARP_,args);
}));
};
var G__39990 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39990__delegate.call(this,a,f,args);};
G__39990.cljs$lang$maxFixedArity = 2;
G__39990.cljs$lang$applyTo = (function (arglist__39991){
var a = cljs.core.first(arglist__39991);
arglist__39991 = cljs.core.next(arglist__39991);
var f = cljs.core.first(arglist__39991);
var args = cljs.core.rest(arglist__39991);
return G__39990__delegate(a,f,args);
});
G__39990.cljs$core$IFn$_invoke$arity$variadic = G__39990__delegate;
return G__39990;
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
var G__39992__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__39992 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39992__delegate.call(this,f,arg,args);};
G__39992.cljs$lang$maxFixedArity = 2;
G__39992.cljs$lang$applyTo = (function (arglist__39993){
var f = cljs.core.first(arglist__39993);
arglist__39993 = cljs.core.next(arglist__39993);
var arg = cljs.core.first(arglist__39993);
var args = cljs.core.rest(arglist__39993);
return G__39992__delegate(f,arg,args);
});
G__39992.cljs$core$IFn$_invoke$arity$variadic = G__39992__delegate;
return G__39992;
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

//# sourceMappingURL=core.js.map