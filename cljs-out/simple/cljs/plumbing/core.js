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
var G__21004__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21004 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__21004__delegate.call(this,m,k,f,x1,x2,xs);};
G__21004.cljs$lang$maxFixedArity = 5;
G__21004.cljs$lang$applyTo = (function (arglist__21005){
var m = cljs.core.first(arglist__21005);
arglist__21005 = cljs.core.next(arglist__21005);
var k = cljs.core.first(arglist__21005);
arglist__21005 = cljs.core.next(arglist__21005);
var f = cljs.core.first(arglist__21005);
arglist__21005 = cljs.core.next(arglist__21005);
var x1 = cljs.core.first(arglist__21005);
arglist__21005 = cljs.core.next(arglist__21005);
var x2 = cljs.core.first(arglist__21005);
var xs = cljs.core.rest(arglist__21005);
return G__21004__delegate(m,k,f,x1,x2,xs);
});
G__21004.cljs$core$IFn$_invoke$arity$variadic = G__21004__delegate;
return G__21004;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21014_21020 = cljs.core.seq.call(null,m);var chunk__21015_21021 = null;var count__21016_21022 = (0);var i__21017_21023 = (0);while(true){
if((i__21017_21023 < count__21016_21022))
{var vec__21018_21024 = cljs.core._nth.call(null,chunk__21015_21021,i__21017_21023);var k_21025 = cljs.core.nth.call(null,vec__21018_21024,(0),null);var v_21026 = cljs.core.nth.call(null,vec__21018_21024,(1),null);var m21013_21027 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21013_21027,k_21025,f.call(null,v_21026)));
{
var G__21028 = seq__21014_21020;
var G__21029 = chunk__21015_21021;
var G__21030 = count__21016_21022;
var G__21031 = (i__21017_21023 + (1));
seq__21014_21020 = G__21028;
chunk__21015_21021 = G__21029;
count__21016_21022 = G__21030;
i__21017_21023 = G__21031;
continue;
}
} else
{var temp__4126__auto___21032 = cljs.core.seq.call(null,seq__21014_21020);if(temp__4126__auto___21032)
{var seq__21014_21033__$1 = temp__4126__auto___21032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21014_21033__$1))
{var c__4408__auto___21034 = cljs.core.chunk_first.call(null,seq__21014_21033__$1);{
var G__21035 = cljs.core.chunk_rest.call(null,seq__21014_21033__$1);
var G__21036 = c__4408__auto___21034;
var G__21037 = cljs.core.count.call(null,c__4408__auto___21034);
var G__21038 = (0);
seq__21014_21020 = G__21035;
chunk__21015_21021 = G__21036;
count__21016_21022 = G__21037;
i__21017_21023 = G__21038;
continue;
}
} else
{var vec__21019_21039 = cljs.core.first.call(null,seq__21014_21033__$1);var k_21040 = cljs.core.nth.call(null,vec__21019_21039,(0),null);var v_21041 = cljs.core.nth.call(null,vec__21019_21039,(1),null);var m21013_21042 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21013_21042,k_21040,f.call(null,v_21041)));
{
var G__21043 = cljs.core.next.call(null,seq__21014_21033__$1);
var G__21044 = null;
var G__21045 = (0);
var G__21046 = (0);
seq__21014_21020 = G__21043;
chunk__21015_21021 = G__21044;
count__21016_21022 = G__21045;
i__21017_21023 = G__21046;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21055_21061 = cljs.core.seq.call(null,m);var chunk__21056_21062 = null;var count__21057_21063 = (0);var i__21058_21064 = (0);while(true){
if((i__21058_21064 < count__21057_21063))
{var vec__21059_21065 = cljs.core._nth.call(null,chunk__21056_21062,i__21058_21064);var k_21066 = cljs.core.nth.call(null,vec__21059_21065,(0),null);var v_21067 = cljs.core.nth.call(null,vec__21059_21065,(1),null);var m21054_21068 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21054_21068,f.call(null,k_21066),v_21067));
{
var G__21069 = seq__21055_21061;
var G__21070 = chunk__21056_21062;
var G__21071 = count__21057_21063;
var G__21072 = (i__21058_21064 + (1));
seq__21055_21061 = G__21069;
chunk__21056_21062 = G__21070;
count__21057_21063 = G__21071;
i__21058_21064 = G__21072;
continue;
}
} else
{var temp__4126__auto___21073 = cljs.core.seq.call(null,seq__21055_21061);if(temp__4126__auto___21073)
{var seq__21055_21074__$1 = temp__4126__auto___21073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055_21074__$1))
{var c__4408__auto___21075 = cljs.core.chunk_first.call(null,seq__21055_21074__$1);{
var G__21076 = cljs.core.chunk_rest.call(null,seq__21055_21074__$1);
var G__21077 = c__4408__auto___21075;
var G__21078 = cljs.core.count.call(null,c__4408__auto___21075);
var G__21079 = (0);
seq__21055_21061 = G__21076;
chunk__21056_21062 = G__21077;
count__21057_21063 = G__21078;
i__21058_21064 = G__21079;
continue;
}
} else
{var vec__21060_21080 = cljs.core.first.call(null,seq__21055_21074__$1);var k_21081 = cljs.core.nth.call(null,vec__21060_21080,(0),null);var v_21082 = cljs.core.nth.call(null,vec__21060_21080,(1),null);var m21054_21083 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21054_21083,f.call(null,k_21081),v_21082));
{
var G__21084 = cljs.core.next.call(null,seq__21055_21074__$1);
var G__21085 = null;
var G__21086 = (0);
var G__21087 = (0);
seq__21055_21061 = G__21084;
chunk__21056_21062 = G__21085;
count__21057_21063 = G__21086;
i__21058_21064 = G__21087;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21094_21098 = cljs.core.seq.call(null,ks);var chunk__21095_21099 = null;var count__21096_21100 = (0);var i__21097_21101 = (0);while(true){
if((i__21097_21101 < count__21096_21100))
{var k_21102 = cljs.core._nth.call(null,chunk__21095_21099,i__21097_21101);var m21093_21103 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21093_21103,k_21102,f.call(null,k_21102)));
{
var G__21104 = seq__21094_21098;
var G__21105 = chunk__21095_21099;
var G__21106 = count__21096_21100;
var G__21107 = (i__21097_21101 + (1));
seq__21094_21098 = G__21104;
chunk__21095_21099 = G__21105;
count__21096_21100 = G__21106;
i__21097_21101 = G__21107;
continue;
}
} else
{var temp__4126__auto___21108 = cljs.core.seq.call(null,seq__21094_21098);if(temp__4126__auto___21108)
{var seq__21094_21109__$1 = temp__4126__auto___21108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21094_21109__$1))
{var c__4408__auto___21110 = cljs.core.chunk_first.call(null,seq__21094_21109__$1);{
var G__21111 = cljs.core.chunk_rest.call(null,seq__21094_21109__$1);
var G__21112 = c__4408__auto___21110;
var G__21113 = cljs.core.count.call(null,c__4408__auto___21110);
var G__21114 = (0);
seq__21094_21098 = G__21111;
chunk__21095_21099 = G__21112;
count__21096_21100 = G__21113;
i__21097_21101 = G__21114;
continue;
}
} else
{var k_21115 = cljs.core.first.call(null,seq__21094_21109__$1);var m21093_21116 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21093_21116,k_21115,f.call(null,k_21115)));
{
var G__21117 = cljs.core.next.call(null,seq__21094_21109__$1);
var G__21118 = null;
var G__21119 = (0);
var G__21120 = (0);
seq__21094_21098 = G__21117;
chunk__21095_21099 = G__21118;
count__21096_21100 = G__21119;
i__21097_21101 = G__21120;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21127_21131 = cljs.core.seq.call(null,vs);var chunk__21128_21132 = null;var count__21129_21133 = (0);var i__21130_21134 = (0);while(true){
if((i__21130_21134 < count__21129_21133))
{var v_21135 = cljs.core._nth.call(null,chunk__21128_21132,i__21130_21134);var m21126_21136 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21126_21136,f.call(null,v_21135),v_21135));
{
var G__21137 = seq__21127_21131;
var G__21138 = chunk__21128_21132;
var G__21139 = count__21129_21133;
var G__21140 = (i__21130_21134 + (1));
seq__21127_21131 = G__21137;
chunk__21128_21132 = G__21138;
count__21129_21133 = G__21139;
i__21130_21134 = G__21140;
continue;
}
} else
{var temp__4126__auto___21141 = cljs.core.seq.call(null,seq__21127_21131);if(temp__4126__auto___21141)
{var seq__21127_21142__$1 = temp__4126__auto___21141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21127_21142__$1))
{var c__4408__auto___21143 = cljs.core.chunk_first.call(null,seq__21127_21142__$1);{
var G__21144 = cljs.core.chunk_rest.call(null,seq__21127_21142__$1);
var G__21145 = c__4408__auto___21143;
var G__21146 = cljs.core.count.call(null,c__4408__auto___21143);
var G__21147 = (0);
seq__21127_21131 = G__21144;
chunk__21128_21132 = G__21145;
count__21129_21133 = G__21146;
i__21130_21134 = G__21147;
continue;
}
} else
{var v_21148 = cljs.core.first.call(null,seq__21127_21142__$1);var m21126_21149 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21126_21149,f.call(null,v_21148),v_21148));
{
var G__21150 = cljs.core.next.call(null,seq__21127_21142__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__21127_21131 = G__21150;
chunk__21128_21132 = G__21151;
count__21129_21133 = G__21152;
i__21130_21134 = G__21153;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__21154){var vec__21156 = p__21154;var k = cljs.core.nth.call(null,vec__21156,(0),null);var ks = cljs.core.nthnext.call(null,vec__21156,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__21165_21171 = cljs.core.seq.call(null,x);var chunk__21166_21172 = null;var count__21167_21173 = (0);var i__21168_21174 = (0);while(true){
if((i__21168_21174 < count__21167_21173))
{var vec__21169_21175 = cljs.core._nth.call(null,chunk__21166_21172,i__21168_21174);var k_21176 = cljs.core.nth.call(null,vec__21169_21175,(0),null);var v_21177 = cljs.core.nth.call(null,vec__21169_21175,(1),null);var m21164_21178 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21164_21178,((typeof k_21176 === 'string')?cljs.core.keyword.call(null,k_21176):k_21176),keywordize_map.call(null,v_21177)));
{
var G__21179 = seq__21165_21171;
var G__21180 = chunk__21166_21172;
var G__21181 = count__21167_21173;
var G__21182 = (i__21168_21174 + (1));
seq__21165_21171 = G__21179;
chunk__21166_21172 = G__21180;
count__21167_21173 = G__21181;
i__21168_21174 = G__21182;
continue;
}
} else
{var temp__4126__auto___21183 = cljs.core.seq.call(null,seq__21165_21171);if(temp__4126__auto___21183)
{var seq__21165_21184__$1 = temp__4126__auto___21183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21165_21184__$1))
{var c__4408__auto___21185 = cljs.core.chunk_first.call(null,seq__21165_21184__$1);{
var G__21186 = cljs.core.chunk_rest.call(null,seq__21165_21184__$1);
var G__21187 = c__4408__auto___21185;
var G__21188 = cljs.core.count.call(null,c__4408__auto___21185);
var G__21189 = (0);
seq__21165_21171 = G__21186;
chunk__21166_21172 = G__21187;
count__21167_21173 = G__21188;
i__21168_21174 = G__21189;
continue;
}
} else
{var vec__21170_21190 = cljs.core.first.call(null,seq__21165_21184__$1);var k_21191 = cljs.core.nth.call(null,vec__21170_21190,(0),null);var v_21192 = cljs.core.nth.call(null,vec__21170_21190,(1),null);var m21164_21193 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m21164_21193,((typeof k_21191 === 'string')?cljs.core.keyword.call(null,k_21191):k_21191),keywordize_map.call(null,v_21192)));
{
var G__21194 = cljs.core.next.call(null,seq__21165_21184__$1);
var G__21195 = null;
var G__21196 = (0);
var G__21197 = (0);
seq__21165_21171 = G__21194;
chunk__21166_21172 = G__21195;
count__21167_21173 = G__21196;
i__21168_21174 = G__21197;
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
var G__21198 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21199 = cljs.core.next.call(null,ks);
m = G__21198;
ks = G__21199;
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
})(),(function (){var iter__4377__auto__ = (function iter__21208(s__21209){return (new cljs.core.LazySeq(null,(function (){var s__21209__$1 = s__21209;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21209__$1);if(temp__4126__auto__)
{var s__21209__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21209__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21209__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21211 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21210 = (0);while(true){
if((i__21210 < size__4376__auto__))
{var vec__21214 = cljs.core._nth.call(null,c__4375__auto__,i__21210);var k = cljs.core.nth.call(null,vec__21214,(0),null);var v = cljs.core.nth.call(null,vec__21214,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21216 = (i__21210 + (1));
i__21210 = G__21216;
continue;
}
} else
{{
var G__21217 = (i__21210 + (1));
i__21210 = G__21217;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21211),iter__21208.call(null,cljs.core.chunk_rest.call(null,s__21209__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21211),null);
}
} else
{var vec__21215 = cljs.core.first.call(null,s__21209__$2);var k = cljs.core.nth.call(null,vec__21215,(0),null);var v = cljs.core.nth.call(null,vec__21215,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21208.call(null,cljs.core.rest.call(null,s__21209__$2)));
} else
{{
var G__21218 = cljs.core.rest.call(null,s__21209__$2);
s__21209__$1 = G__21218;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21219){
var m = cljs.core.first(arglist__21219);
var kvs = cljs.core.rest(arglist__21219);
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
update_in_when.cljs$lang$applyTo = (function (arglist__21220){
var m = cljs.core.first(arglist__21220);
arglist__21220 = cljs.core.next(arglist__21220);
var key_seq = cljs.core.first(arglist__21220);
arglist__21220 = cljs.core.next(arglist__21220);
var f = cljs.core.first(arglist__21220);
var args = cljs.core.rest(arglist__21220);
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
return (function iter__21225(s__21226){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__21226__$1 = s__21226;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21226__$1);if(temp__4126__auto__)
{var s__21226__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21226__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21226__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21228 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21227 = (0);while(true){
if((i__21227 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21227);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__21228,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__21229 = (i__21227 + (1));
i__21227 = G__21229;
continue;
}
} else
{{
var G__21230 = (i__21227 + (1));
i__21227 = G__21230;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21228),iter__21225.call(null,cljs.core.chunk_rest.call(null,s__21226__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21228),null);
}
} else
{var x = cljs.core.first.call(null,s__21226__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__21225.call(null,cljs.core.rest.call(null,s__21226__$2)));
} else
{{
var G__21231 = cljs.core.rest.call(null,s__21226__$2);
s__21226__$1 = G__21231;
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
interleave_all.cljs$lang$applyTo = (function (arglist__21232){
var colls = cljs.core.seq(arglist__21232);
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
var G__21233__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__21234 = conj_when.call(null,coll,x);
var G__21235 = cljs.core.first.call(null,xs);
var G__21236 = cljs.core.next.call(null,xs);
coll = G__21234;
x = G__21235;
xs = G__21236;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__21233 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21233__delegate.call(this,coll,x,xs);};
G__21233.cljs$lang$maxFixedArity = 2;
G__21233.cljs$lang$applyTo = (function (arglist__21237){
var coll = cljs.core.first(arglist__21237);
arglist__21237 = cljs.core.next(arglist__21237);
var x = cljs.core.first(arglist__21237);
var xs = cljs.core.rest(arglist__21237);
return G__21233__delegate(coll,x,xs);
});
G__21233.cljs$core$IFn$_invoke$arity$variadic = G__21233__delegate;
return G__21233;
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
var G__21239__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__21238_SHARP_){return cljs.core.apply.call(null,f,p1__21238_SHARP_,args);
}));
};
var G__21239 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21239__delegate.call(this,a,f,args);};
G__21239.cljs$lang$maxFixedArity = 2;
G__21239.cljs$lang$applyTo = (function (arglist__21240){
var a = cljs.core.first(arglist__21240);
arglist__21240 = cljs.core.next(arglist__21240);
var f = cljs.core.first(arglist__21240);
var args = cljs.core.rest(arglist__21240);
return G__21239__delegate(a,f,args);
});
G__21239.cljs$core$IFn$_invoke$arity$variadic = G__21239__delegate;
return G__21239;
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
var G__21241__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21241 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21241__delegate.call(this,f,arg,args);};
G__21241.cljs$lang$maxFixedArity = 2;
G__21241.cljs$lang$applyTo = (function (arglist__21242){
var f = cljs.core.first(arglist__21242);
arglist__21242 = cljs.core.next(arglist__21242);
var arg = cljs.core.first(arglist__21242);
var args = cljs.core.rest(arglist__21242);
return G__21241__delegate(f,arg,args);
});
G__21241.cljs$core$IFn$_invoke$arity$variadic = G__21241__delegate;
return G__21241;
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
