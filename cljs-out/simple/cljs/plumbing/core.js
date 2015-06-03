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
var G__19785__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19785 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19785__delegate.call(this,m,k,f,x1,x2,xs);};
G__19785.cljs$lang$maxFixedArity = 5;
G__19785.cljs$lang$applyTo = (function (arglist__19786){
var m = cljs.core.first(arglist__19786);
arglist__19786 = cljs.core.next(arglist__19786);
var k = cljs.core.first(arglist__19786);
arglist__19786 = cljs.core.next(arglist__19786);
var f = cljs.core.first(arglist__19786);
arglist__19786 = cljs.core.next(arglist__19786);
var x1 = cljs.core.first(arglist__19786);
arglist__19786 = cljs.core.next(arglist__19786);
var x2 = cljs.core.first(arglist__19786);
var xs = cljs.core.rest(arglist__19786);
return G__19785__delegate(m,k,f,x1,x2,xs);
});
G__19785.cljs$core$IFn$_invoke$arity$variadic = G__19785__delegate;
return G__19785;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19795_19801 = cljs.core.seq.call(null,m);var chunk__19796_19802 = null;var count__19797_19803 = (0);var i__19798_19804 = (0);while(true){
if((i__19798_19804 < count__19797_19803))
{var vec__19799_19805 = cljs.core._nth.call(null,chunk__19796_19802,i__19798_19804);var k_19806 = cljs.core.nth.call(null,vec__19799_19805,(0),null);var v_19807 = cljs.core.nth.call(null,vec__19799_19805,(1),null);var m19794_19808 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19794_19808,k_19806,f.call(null,v_19807)));
{
var G__19809 = seq__19795_19801;
var G__19810 = chunk__19796_19802;
var G__19811 = count__19797_19803;
var G__19812 = (i__19798_19804 + (1));
seq__19795_19801 = G__19809;
chunk__19796_19802 = G__19810;
count__19797_19803 = G__19811;
i__19798_19804 = G__19812;
continue;
}
} else
{var temp__4126__auto___19813 = cljs.core.seq.call(null,seq__19795_19801);if(temp__4126__auto___19813)
{var seq__19795_19814__$1 = temp__4126__auto___19813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19795_19814__$1))
{var c__4408__auto___19815 = cljs.core.chunk_first.call(null,seq__19795_19814__$1);{
var G__19816 = cljs.core.chunk_rest.call(null,seq__19795_19814__$1);
var G__19817 = c__4408__auto___19815;
var G__19818 = cljs.core.count.call(null,c__4408__auto___19815);
var G__19819 = (0);
seq__19795_19801 = G__19816;
chunk__19796_19802 = G__19817;
count__19797_19803 = G__19818;
i__19798_19804 = G__19819;
continue;
}
} else
{var vec__19800_19820 = cljs.core.first.call(null,seq__19795_19814__$1);var k_19821 = cljs.core.nth.call(null,vec__19800_19820,(0),null);var v_19822 = cljs.core.nth.call(null,vec__19800_19820,(1),null);var m19794_19823 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19794_19823,k_19821,f.call(null,v_19822)));
{
var G__19824 = cljs.core.next.call(null,seq__19795_19814__$1);
var G__19825 = null;
var G__19826 = (0);
var G__19827 = (0);
seq__19795_19801 = G__19824;
chunk__19796_19802 = G__19825;
count__19797_19803 = G__19826;
i__19798_19804 = G__19827;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19836_19842 = cljs.core.seq.call(null,m);var chunk__19837_19843 = null;var count__19838_19844 = (0);var i__19839_19845 = (0);while(true){
if((i__19839_19845 < count__19838_19844))
{var vec__19840_19846 = cljs.core._nth.call(null,chunk__19837_19843,i__19839_19845);var k_19847 = cljs.core.nth.call(null,vec__19840_19846,(0),null);var v_19848 = cljs.core.nth.call(null,vec__19840_19846,(1),null);var m19835_19849 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19835_19849,f.call(null,k_19847),v_19848));
{
var G__19850 = seq__19836_19842;
var G__19851 = chunk__19837_19843;
var G__19852 = count__19838_19844;
var G__19853 = (i__19839_19845 + (1));
seq__19836_19842 = G__19850;
chunk__19837_19843 = G__19851;
count__19838_19844 = G__19852;
i__19839_19845 = G__19853;
continue;
}
} else
{var temp__4126__auto___19854 = cljs.core.seq.call(null,seq__19836_19842);if(temp__4126__auto___19854)
{var seq__19836_19855__$1 = temp__4126__auto___19854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19836_19855__$1))
{var c__4408__auto___19856 = cljs.core.chunk_first.call(null,seq__19836_19855__$1);{
var G__19857 = cljs.core.chunk_rest.call(null,seq__19836_19855__$1);
var G__19858 = c__4408__auto___19856;
var G__19859 = cljs.core.count.call(null,c__4408__auto___19856);
var G__19860 = (0);
seq__19836_19842 = G__19857;
chunk__19837_19843 = G__19858;
count__19838_19844 = G__19859;
i__19839_19845 = G__19860;
continue;
}
} else
{var vec__19841_19861 = cljs.core.first.call(null,seq__19836_19855__$1);var k_19862 = cljs.core.nth.call(null,vec__19841_19861,(0),null);var v_19863 = cljs.core.nth.call(null,vec__19841_19861,(1),null);var m19835_19864 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19835_19864,f.call(null,k_19862),v_19863));
{
var G__19865 = cljs.core.next.call(null,seq__19836_19855__$1);
var G__19866 = null;
var G__19867 = (0);
var G__19868 = (0);
seq__19836_19842 = G__19865;
chunk__19837_19843 = G__19866;
count__19838_19844 = G__19867;
i__19839_19845 = G__19868;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19875_19879 = cljs.core.seq.call(null,ks);var chunk__19876_19880 = null;var count__19877_19881 = (0);var i__19878_19882 = (0);while(true){
if((i__19878_19882 < count__19877_19881))
{var k_19883 = cljs.core._nth.call(null,chunk__19876_19880,i__19878_19882);var m19874_19884 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19874_19884,k_19883,f.call(null,k_19883)));
{
var G__19885 = seq__19875_19879;
var G__19886 = chunk__19876_19880;
var G__19887 = count__19877_19881;
var G__19888 = (i__19878_19882 + (1));
seq__19875_19879 = G__19885;
chunk__19876_19880 = G__19886;
count__19877_19881 = G__19887;
i__19878_19882 = G__19888;
continue;
}
} else
{var temp__4126__auto___19889 = cljs.core.seq.call(null,seq__19875_19879);if(temp__4126__auto___19889)
{var seq__19875_19890__$1 = temp__4126__auto___19889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19875_19890__$1))
{var c__4408__auto___19891 = cljs.core.chunk_first.call(null,seq__19875_19890__$1);{
var G__19892 = cljs.core.chunk_rest.call(null,seq__19875_19890__$1);
var G__19893 = c__4408__auto___19891;
var G__19894 = cljs.core.count.call(null,c__4408__auto___19891);
var G__19895 = (0);
seq__19875_19879 = G__19892;
chunk__19876_19880 = G__19893;
count__19877_19881 = G__19894;
i__19878_19882 = G__19895;
continue;
}
} else
{var k_19896 = cljs.core.first.call(null,seq__19875_19890__$1);var m19874_19897 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19874_19897,k_19896,f.call(null,k_19896)));
{
var G__19898 = cljs.core.next.call(null,seq__19875_19890__$1);
var G__19899 = null;
var G__19900 = (0);
var G__19901 = (0);
seq__19875_19879 = G__19898;
chunk__19876_19880 = G__19899;
count__19877_19881 = G__19900;
i__19878_19882 = G__19901;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19908_19912 = cljs.core.seq.call(null,vs);var chunk__19909_19913 = null;var count__19910_19914 = (0);var i__19911_19915 = (0);while(true){
if((i__19911_19915 < count__19910_19914))
{var v_19916 = cljs.core._nth.call(null,chunk__19909_19913,i__19911_19915);var m19907_19917 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19907_19917,f.call(null,v_19916),v_19916));
{
var G__19918 = seq__19908_19912;
var G__19919 = chunk__19909_19913;
var G__19920 = count__19910_19914;
var G__19921 = (i__19911_19915 + (1));
seq__19908_19912 = G__19918;
chunk__19909_19913 = G__19919;
count__19910_19914 = G__19920;
i__19911_19915 = G__19921;
continue;
}
} else
{var temp__4126__auto___19922 = cljs.core.seq.call(null,seq__19908_19912);if(temp__4126__auto___19922)
{var seq__19908_19923__$1 = temp__4126__auto___19922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19908_19923__$1))
{var c__4408__auto___19924 = cljs.core.chunk_first.call(null,seq__19908_19923__$1);{
var G__19925 = cljs.core.chunk_rest.call(null,seq__19908_19923__$1);
var G__19926 = c__4408__auto___19924;
var G__19927 = cljs.core.count.call(null,c__4408__auto___19924);
var G__19928 = (0);
seq__19908_19912 = G__19925;
chunk__19909_19913 = G__19926;
count__19910_19914 = G__19927;
i__19911_19915 = G__19928;
continue;
}
} else
{var v_19929 = cljs.core.first.call(null,seq__19908_19923__$1);var m19907_19930 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19907_19930,f.call(null,v_19929),v_19929));
{
var G__19931 = cljs.core.next.call(null,seq__19908_19923__$1);
var G__19932 = null;
var G__19933 = (0);
var G__19934 = (0);
seq__19908_19912 = G__19931;
chunk__19909_19913 = G__19932;
count__19910_19914 = G__19933;
i__19911_19915 = G__19934;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__19935){var vec__19937 = p__19935;var k = cljs.core.nth.call(null,vec__19937,(0),null);var ks = cljs.core.nthnext.call(null,vec__19937,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19946_19952 = cljs.core.seq.call(null,x);var chunk__19947_19953 = null;var count__19948_19954 = (0);var i__19949_19955 = (0);while(true){
if((i__19949_19955 < count__19948_19954))
{var vec__19950_19956 = cljs.core._nth.call(null,chunk__19947_19953,i__19949_19955);var k_19957 = cljs.core.nth.call(null,vec__19950_19956,(0),null);var v_19958 = cljs.core.nth.call(null,vec__19950_19956,(1),null);var m19945_19959 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19945_19959,((typeof k_19957 === 'string')?cljs.core.keyword.call(null,k_19957):k_19957),keywordize_map.call(null,v_19958)));
{
var G__19960 = seq__19946_19952;
var G__19961 = chunk__19947_19953;
var G__19962 = count__19948_19954;
var G__19963 = (i__19949_19955 + (1));
seq__19946_19952 = G__19960;
chunk__19947_19953 = G__19961;
count__19948_19954 = G__19962;
i__19949_19955 = G__19963;
continue;
}
} else
{var temp__4126__auto___19964 = cljs.core.seq.call(null,seq__19946_19952);if(temp__4126__auto___19964)
{var seq__19946_19965__$1 = temp__4126__auto___19964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19946_19965__$1))
{var c__4408__auto___19966 = cljs.core.chunk_first.call(null,seq__19946_19965__$1);{
var G__19967 = cljs.core.chunk_rest.call(null,seq__19946_19965__$1);
var G__19968 = c__4408__auto___19966;
var G__19969 = cljs.core.count.call(null,c__4408__auto___19966);
var G__19970 = (0);
seq__19946_19952 = G__19967;
chunk__19947_19953 = G__19968;
count__19948_19954 = G__19969;
i__19949_19955 = G__19970;
continue;
}
} else
{var vec__19951_19971 = cljs.core.first.call(null,seq__19946_19965__$1);var k_19972 = cljs.core.nth.call(null,vec__19951_19971,(0),null);var v_19973 = cljs.core.nth.call(null,vec__19951_19971,(1),null);var m19945_19974 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m19945_19974,((typeof k_19972 === 'string')?cljs.core.keyword.call(null,k_19972):k_19972),keywordize_map.call(null,v_19973)));
{
var G__19975 = cljs.core.next.call(null,seq__19946_19965__$1);
var G__19976 = null;
var G__19977 = (0);
var G__19978 = (0);
seq__19946_19952 = G__19975;
chunk__19947_19953 = G__19976;
count__19948_19954 = G__19977;
i__19949_19955 = G__19978;
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
var G__19979 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__19980 = cljs.core.next.call(null,ks);
m = G__19979;
ks = G__19980;
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
})(),(function (){var iter__4377__auto__ = (function iter__19989(s__19990){return (new cljs.core.LazySeq(null,(function (){var s__19990__$1 = s__19990;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19990__$1);if(temp__4126__auto__)
{var s__19990__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19990__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19990__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19992 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19991 = (0);while(true){
if((i__19991 < size__4376__auto__))
{var vec__19995 = cljs.core._nth.call(null,c__4375__auto__,i__19991);var k = cljs.core.nth.call(null,vec__19995,(0),null);var v = cljs.core.nth.call(null,vec__19995,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__19992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19997 = (i__19991 + (1));
i__19991 = G__19997;
continue;
}
} else
{{
var G__19998 = (i__19991 + (1));
i__19991 = G__19998;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19992),iter__19989.call(null,cljs.core.chunk_rest.call(null,s__19990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19992),null);
}
} else
{var vec__19996 = cljs.core.first.call(null,s__19990__$2);var k = cljs.core.nth.call(null,vec__19996,(0),null);var v = cljs.core.nth.call(null,vec__19996,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19989.call(null,cljs.core.rest.call(null,s__19990__$2)));
} else
{{
var G__19999 = cljs.core.rest.call(null,s__19990__$2);
s__19990__$1 = G__19999;
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
assoc_when.cljs$lang$applyTo = (function (arglist__20000){
var m = cljs.core.first(arglist__20000);
var kvs = cljs.core.rest(arglist__20000);
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
update_in_when.cljs$lang$applyTo = (function (arglist__20001){
var m = cljs.core.first(arglist__20001);
arglist__20001 = cljs.core.next(arglist__20001);
var key_seq = cljs.core.first(arglist__20001);
arglist__20001 = cljs.core.next(arglist__20001);
var f = cljs.core.first(arglist__20001);
var args = cljs.core.rest(arglist__20001);
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
return (function iter__20006(s__20007){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20007__$1 = s__20007;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20007__$1);if(temp__4126__auto__)
{var s__20007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20007__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20007__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20009 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20008 = (0);while(true){
if((i__20008 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__20008);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20009,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20010 = (i__20008 + (1));
i__20008 = G__20010;
continue;
}
} else
{{
var G__20011 = (i__20008 + (1));
i__20008 = G__20011;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20009),iter__20006.call(null,cljs.core.chunk_rest.call(null,s__20007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20009),null);
}
} else
{var x = cljs.core.first.call(null,s__20007__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20006.call(null,cljs.core.rest.call(null,s__20007__$2)));
} else
{{
var G__20012 = cljs.core.rest.call(null,s__20007__$2);
s__20007__$1 = G__20012;
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
interleave_all.cljs$lang$applyTo = (function (arglist__20013){
var colls = cljs.core.seq(arglist__20013);
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
var G__20014__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20015 = conj_when.call(null,coll,x);
var G__20016 = cljs.core.first.call(null,xs);
var G__20017 = cljs.core.next.call(null,xs);
coll = G__20015;
x = G__20016;
xs = G__20017;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20014 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20014__delegate.call(this,coll,x,xs);};
G__20014.cljs$lang$maxFixedArity = 2;
G__20014.cljs$lang$applyTo = (function (arglist__20018){
var coll = cljs.core.first(arglist__20018);
arglist__20018 = cljs.core.next(arglist__20018);
var x = cljs.core.first(arglist__20018);
var xs = cljs.core.rest(arglist__20018);
return G__20014__delegate(coll,x,xs);
});
G__20014.cljs$core$IFn$_invoke$arity$variadic = G__20014__delegate;
return G__20014;
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
var G__20020__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20019_SHARP_){return cljs.core.apply.call(null,f,p1__20019_SHARP_,args);
}));
};
var G__20020 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20020__delegate.call(this,a,f,args);};
G__20020.cljs$lang$maxFixedArity = 2;
G__20020.cljs$lang$applyTo = (function (arglist__20021){
var a = cljs.core.first(arglist__20021);
arglist__20021 = cljs.core.next(arglist__20021);
var f = cljs.core.first(arglist__20021);
var args = cljs.core.rest(arglist__20021);
return G__20020__delegate(a,f,args);
});
G__20020.cljs$core$IFn$_invoke$arity$variadic = G__20020__delegate;
return G__20020;
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
var G__20022__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20022 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20022__delegate.call(this,f,arg,args);};
G__20022.cljs$lang$maxFixedArity = 2;
G__20022.cljs$lang$applyTo = (function (arglist__20023){
var f = cljs.core.first(arglist__20023);
arglist__20023 = cljs.core.next(arglist__20023);
var arg = cljs.core.first(arglist__20023);
var args = cljs.core.rest(arglist__20023);
return G__20022__delegate(f,arg,args);
});
G__20022.cljs$core$IFn$_invoke$arity$variadic = G__20022__delegate;
return G__20022;
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
