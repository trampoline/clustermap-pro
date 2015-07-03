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
var G__22045__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22045 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22045__delegate.call(this,m,k,f,x1,x2,xs);};
G__22045.cljs$lang$maxFixedArity = 5;
G__22045.cljs$lang$applyTo = (function (arglist__22046){
var m = cljs.core.first(arglist__22046);
arglist__22046 = cljs.core.next(arglist__22046);
var k = cljs.core.first(arglist__22046);
arglist__22046 = cljs.core.next(arglist__22046);
var f = cljs.core.first(arglist__22046);
arglist__22046 = cljs.core.next(arglist__22046);
var x1 = cljs.core.first(arglist__22046);
arglist__22046 = cljs.core.next(arglist__22046);
var x2 = cljs.core.first(arglist__22046);
var xs = cljs.core.rest(arglist__22046);
return G__22045__delegate(m,k,f,x1,x2,xs);
});
G__22045.cljs$core$IFn$_invoke$arity$variadic = G__22045__delegate;
return G__22045;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22055_22061 = cljs.core.seq.call(null,m);var chunk__22056_22062 = null;var count__22057_22063 = (0);var i__22058_22064 = (0);while(true){
if((i__22058_22064 < count__22057_22063))
{var vec__22059_22065 = cljs.core._nth.call(null,chunk__22056_22062,i__22058_22064);var k_22066 = cljs.core.nth.call(null,vec__22059_22065,(0),null);var v_22067 = cljs.core.nth.call(null,vec__22059_22065,(1),null);var m22054_22068 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22054_22068,k_22066,f.call(null,v_22067)));
{
var G__22069 = seq__22055_22061;
var G__22070 = chunk__22056_22062;
var G__22071 = count__22057_22063;
var G__22072 = (i__22058_22064 + (1));
seq__22055_22061 = G__22069;
chunk__22056_22062 = G__22070;
count__22057_22063 = G__22071;
i__22058_22064 = G__22072;
continue;
}
} else
{var temp__4126__auto___22073 = cljs.core.seq.call(null,seq__22055_22061);if(temp__4126__auto___22073)
{var seq__22055_22074__$1 = temp__4126__auto___22073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22055_22074__$1))
{var c__4408__auto___22075 = cljs.core.chunk_first.call(null,seq__22055_22074__$1);{
var G__22076 = cljs.core.chunk_rest.call(null,seq__22055_22074__$1);
var G__22077 = c__4408__auto___22075;
var G__22078 = cljs.core.count.call(null,c__4408__auto___22075);
var G__22079 = (0);
seq__22055_22061 = G__22076;
chunk__22056_22062 = G__22077;
count__22057_22063 = G__22078;
i__22058_22064 = G__22079;
continue;
}
} else
{var vec__22060_22080 = cljs.core.first.call(null,seq__22055_22074__$1);var k_22081 = cljs.core.nth.call(null,vec__22060_22080,(0),null);var v_22082 = cljs.core.nth.call(null,vec__22060_22080,(1),null);var m22054_22083 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22054_22083,k_22081,f.call(null,v_22082)));
{
var G__22084 = cljs.core.next.call(null,seq__22055_22074__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__22055_22061 = G__22084;
chunk__22056_22062 = G__22085;
count__22057_22063 = G__22086;
i__22058_22064 = G__22087;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22096_22102 = cljs.core.seq.call(null,m);var chunk__22097_22103 = null;var count__22098_22104 = (0);var i__22099_22105 = (0);while(true){
if((i__22099_22105 < count__22098_22104))
{var vec__22100_22106 = cljs.core._nth.call(null,chunk__22097_22103,i__22099_22105);var k_22107 = cljs.core.nth.call(null,vec__22100_22106,(0),null);var v_22108 = cljs.core.nth.call(null,vec__22100_22106,(1),null);var m22095_22109 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22095_22109,f.call(null,k_22107),v_22108));
{
var G__22110 = seq__22096_22102;
var G__22111 = chunk__22097_22103;
var G__22112 = count__22098_22104;
var G__22113 = (i__22099_22105 + (1));
seq__22096_22102 = G__22110;
chunk__22097_22103 = G__22111;
count__22098_22104 = G__22112;
i__22099_22105 = G__22113;
continue;
}
} else
{var temp__4126__auto___22114 = cljs.core.seq.call(null,seq__22096_22102);if(temp__4126__auto___22114)
{var seq__22096_22115__$1 = temp__4126__auto___22114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22096_22115__$1))
{var c__4408__auto___22116 = cljs.core.chunk_first.call(null,seq__22096_22115__$1);{
var G__22117 = cljs.core.chunk_rest.call(null,seq__22096_22115__$1);
var G__22118 = c__4408__auto___22116;
var G__22119 = cljs.core.count.call(null,c__4408__auto___22116);
var G__22120 = (0);
seq__22096_22102 = G__22117;
chunk__22097_22103 = G__22118;
count__22098_22104 = G__22119;
i__22099_22105 = G__22120;
continue;
}
} else
{var vec__22101_22121 = cljs.core.first.call(null,seq__22096_22115__$1);var k_22122 = cljs.core.nth.call(null,vec__22101_22121,(0),null);var v_22123 = cljs.core.nth.call(null,vec__22101_22121,(1),null);var m22095_22124 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22095_22124,f.call(null,k_22122),v_22123));
{
var G__22125 = cljs.core.next.call(null,seq__22096_22115__$1);
var G__22126 = null;
var G__22127 = (0);
var G__22128 = (0);
seq__22096_22102 = G__22125;
chunk__22097_22103 = G__22126;
count__22098_22104 = G__22127;
i__22099_22105 = G__22128;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22135_22139 = cljs.core.seq.call(null,ks);var chunk__22136_22140 = null;var count__22137_22141 = (0);var i__22138_22142 = (0);while(true){
if((i__22138_22142 < count__22137_22141))
{var k_22143 = cljs.core._nth.call(null,chunk__22136_22140,i__22138_22142);var m22134_22144 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22134_22144,k_22143,f.call(null,k_22143)));
{
var G__22145 = seq__22135_22139;
var G__22146 = chunk__22136_22140;
var G__22147 = count__22137_22141;
var G__22148 = (i__22138_22142 + (1));
seq__22135_22139 = G__22145;
chunk__22136_22140 = G__22146;
count__22137_22141 = G__22147;
i__22138_22142 = G__22148;
continue;
}
} else
{var temp__4126__auto___22149 = cljs.core.seq.call(null,seq__22135_22139);if(temp__4126__auto___22149)
{var seq__22135_22150__$1 = temp__4126__auto___22149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22135_22150__$1))
{var c__4408__auto___22151 = cljs.core.chunk_first.call(null,seq__22135_22150__$1);{
var G__22152 = cljs.core.chunk_rest.call(null,seq__22135_22150__$1);
var G__22153 = c__4408__auto___22151;
var G__22154 = cljs.core.count.call(null,c__4408__auto___22151);
var G__22155 = (0);
seq__22135_22139 = G__22152;
chunk__22136_22140 = G__22153;
count__22137_22141 = G__22154;
i__22138_22142 = G__22155;
continue;
}
} else
{var k_22156 = cljs.core.first.call(null,seq__22135_22150__$1);var m22134_22157 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22134_22157,k_22156,f.call(null,k_22156)));
{
var G__22158 = cljs.core.next.call(null,seq__22135_22150__$1);
var G__22159 = null;
var G__22160 = (0);
var G__22161 = (0);
seq__22135_22139 = G__22158;
chunk__22136_22140 = G__22159;
count__22137_22141 = G__22160;
i__22138_22142 = G__22161;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22168_22172 = cljs.core.seq.call(null,vs);var chunk__22169_22173 = null;var count__22170_22174 = (0);var i__22171_22175 = (0);while(true){
if((i__22171_22175 < count__22170_22174))
{var v_22176 = cljs.core._nth.call(null,chunk__22169_22173,i__22171_22175);var m22167_22177 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22167_22177,f.call(null,v_22176),v_22176));
{
var G__22178 = seq__22168_22172;
var G__22179 = chunk__22169_22173;
var G__22180 = count__22170_22174;
var G__22181 = (i__22171_22175 + (1));
seq__22168_22172 = G__22178;
chunk__22169_22173 = G__22179;
count__22170_22174 = G__22180;
i__22171_22175 = G__22181;
continue;
}
} else
{var temp__4126__auto___22182 = cljs.core.seq.call(null,seq__22168_22172);if(temp__4126__auto___22182)
{var seq__22168_22183__$1 = temp__4126__auto___22182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22168_22183__$1))
{var c__4408__auto___22184 = cljs.core.chunk_first.call(null,seq__22168_22183__$1);{
var G__22185 = cljs.core.chunk_rest.call(null,seq__22168_22183__$1);
var G__22186 = c__4408__auto___22184;
var G__22187 = cljs.core.count.call(null,c__4408__auto___22184);
var G__22188 = (0);
seq__22168_22172 = G__22185;
chunk__22169_22173 = G__22186;
count__22170_22174 = G__22187;
i__22171_22175 = G__22188;
continue;
}
} else
{var v_22189 = cljs.core.first.call(null,seq__22168_22183__$1);var m22167_22190 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22167_22190,f.call(null,v_22189),v_22189));
{
var G__22191 = cljs.core.next.call(null,seq__22168_22183__$1);
var G__22192 = null;
var G__22193 = (0);
var G__22194 = (0);
seq__22168_22172 = G__22191;
chunk__22169_22173 = G__22192;
count__22170_22174 = G__22193;
i__22171_22175 = G__22194;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22195){var vec__22197 = p__22195;var k = cljs.core.nth.call(null,vec__22197,(0),null);var ks = cljs.core.nthnext.call(null,vec__22197,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22206_22212 = cljs.core.seq.call(null,x);var chunk__22207_22213 = null;var count__22208_22214 = (0);var i__22209_22215 = (0);while(true){
if((i__22209_22215 < count__22208_22214))
{var vec__22210_22216 = cljs.core._nth.call(null,chunk__22207_22213,i__22209_22215);var k_22217 = cljs.core.nth.call(null,vec__22210_22216,(0),null);var v_22218 = cljs.core.nth.call(null,vec__22210_22216,(1),null);var m22205_22219 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22205_22219,((typeof k_22217 === 'string')?cljs.core.keyword.call(null,k_22217):k_22217),keywordize_map.call(null,v_22218)));
{
var G__22220 = seq__22206_22212;
var G__22221 = chunk__22207_22213;
var G__22222 = count__22208_22214;
var G__22223 = (i__22209_22215 + (1));
seq__22206_22212 = G__22220;
chunk__22207_22213 = G__22221;
count__22208_22214 = G__22222;
i__22209_22215 = G__22223;
continue;
}
} else
{var temp__4126__auto___22224 = cljs.core.seq.call(null,seq__22206_22212);if(temp__4126__auto___22224)
{var seq__22206_22225__$1 = temp__4126__auto___22224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22206_22225__$1))
{var c__4408__auto___22226 = cljs.core.chunk_first.call(null,seq__22206_22225__$1);{
var G__22227 = cljs.core.chunk_rest.call(null,seq__22206_22225__$1);
var G__22228 = c__4408__auto___22226;
var G__22229 = cljs.core.count.call(null,c__4408__auto___22226);
var G__22230 = (0);
seq__22206_22212 = G__22227;
chunk__22207_22213 = G__22228;
count__22208_22214 = G__22229;
i__22209_22215 = G__22230;
continue;
}
} else
{var vec__22211_22231 = cljs.core.first.call(null,seq__22206_22225__$1);var k_22232 = cljs.core.nth.call(null,vec__22211_22231,(0),null);var v_22233 = cljs.core.nth.call(null,vec__22211_22231,(1),null);var m22205_22234 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22205_22234,((typeof k_22232 === 'string')?cljs.core.keyword.call(null,k_22232):k_22232),keywordize_map.call(null,v_22233)));
{
var G__22235 = cljs.core.next.call(null,seq__22206_22225__$1);
var G__22236 = null;
var G__22237 = (0);
var G__22238 = (0);
seq__22206_22212 = G__22235;
chunk__22207_22213 = G__22236;
count__22208_22214 = G__22237;
i__22209_22215 = G__22238;
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
var G__22239 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22240 = cljs.core.next.call(null,ks);
m = G__22239;
ks = G__22240;
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
})(),(function (){var iter__4377__auto__ = (function iter__22249(s__22250){return (new cljs.core.LazySeq(null,(function (){var s__22250__$1 = s__22250;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22250__$1);if(temp__4126__auto__)
{var s__22250__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22250__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22250__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22252 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22251 = (0);while(true){
if((i__22251 < size__4376__auto__))
{var vec__22255 = cljs.core._nth.call(null,c__4375__auto__,i__22251);var k = cljs.core.nth.call(null,vec__22255,(0),null);var v = cljs.core.nth.call(null,vec__22255,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22257 = (i__22251 + (1));
i__22251 = G__22257;
continue;
}
} else
{{
var G__22258 = (i__22251 + (1));
i__22251 = G__22258;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22252),iter__22249.call(null,cljs.core.chunk_rest.call(null,s__22250__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22252),null);
}
} else
{var vec__22256 = cljs.core.first.call(null,s__22250__$2);var k = cljs.core.nth.call(null,vec__22256,(0),null);var v = cljs.core.nth.call(null,vec__22256,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22249.call(null,cljs.core.rest.call(null,s__22250__$2)));
} else
{{
var G__22259 = cljs.core.rest.call(null,s__22250__$2);
s__22250__$1 = G__22259;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22260){
var m = cljs.core.first(arglist__22260);
var kvs = cljs.core.rest(arglist__22260);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22261){
var m = cljs.core.first(arglist__22261);
arglist__22261 = cljs.core.next(arglist__22261);
var key_seq = cljs.core.first(arglist__22261);
arglist__22261 = cljs.core.next(arglist__22261);
var f = cljs.core.first(arglist__22261);
var args = cljs.core.rest(arglist__22261);
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
return (function iter__22266(s__22267){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22267__$1 = s__22267;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22267__$1);if(temp__4126__auto__)
{var s__22267__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22267__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22267__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22269 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22268 = (0);while(true){
if((i__22268 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22268);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22269,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22270 = (i__22268 + (1));
i__22268 = G__22270;
continue;
}
} else
{{
var G__22271 = (i__22268 + (1));
i__22268 = G__22271;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22269),iter__22266.call(null,cljs.core.chunk_rest.call(null,s__22267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22269),null);
}
} else
{var x = cljs.core.first.call(null,s__22267__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22266.call(null,cljs.core.rest.call(null,s__22267__$2)));
} else
{{
var G__22272 = cljs.core.rest.call(null,s__22267__$2);
s__22267__$1 = G__22272;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22273){
var colls = cljs.core.seq(arglist__22273);
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
var G__22274__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22275 = conj_when.call(null,coll,x);
var G__22276 = cljs.core.first.call(null,xs);
var G__22277 = cljs.core.next.call(null,xs);
coll = G__22275;
x = G__22276;
xs = G__22277;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22274 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22274__delegate.call(this,coll,x,xs);};
G__22274.cljs$lang$maxFixedArity = 2;
G__22274.cljs$lang$applyTo = (function (arglist__22278){
var coll = cljs.core.first(arglist__22278);
arglist__22278 = cljs.core.next(arglist__22278);
var x = cljs.core.first(arglist__22278);
var xs = cljs.core.rest(arglist__22278);
return G__22274__delegate(coll,x,xs);
});
G__22274.cljs$core$IFn$_invoke$arity$variadic = G__22274__delegate;
return G__22274;
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
var G__22280__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22279_SHARP_){return cljs.core.apply.call(null,f,p1__22279_SHARP_,args);
}));
};
var G__22280 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22280__delegate.call(this,a,f,args);};
G__22280.cljs$lang$maxFixedArity = 2;
G__22280.cljs$lang$applyTo = (function (arglist__22281){
var a = cljs.core.first(arglist__22281);
arglist__22281 = cljs.core.next(arglist__22281);
var f = cljs.core.first(arglist__22281);
var args = cljs.core.rest(arglist__22281);
return G__22280__delegate(a,f,args);
});
G__22280.cljs$core$IFn$_invoke$arity$variadic = G__22280__delegate;
return G__22280;
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
var G__22282__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22282 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22282__delegate.call(this,f,arg,args);};
G__22282.cljs$lang$maxFixedArity = 2;
G__22282.cljs$lang$applyTo = (function (arglist__22283){
var f = cljs.core.first(arglist__22283);
arglist__22283 = cljs.core.next(arglist__22283);
var arg = cljs.core.first(arglist__22283);
var args = cljs.core.rest(arglist__22283);
return G__22282__delegate(f,arg,args);
});
G__22282.cljs$core$IFn$_invoke$arity$variadic = G__22282__delegate;
return G__22282;
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
