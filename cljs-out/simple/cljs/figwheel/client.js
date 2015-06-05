// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__30127,args){var map__30129 = p__30127;var map__30129__$1 = ((cljs.core.seq_QMARK_.call(null,map__30129))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);var debug = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30127,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30127,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30130){
var p__30127 = cljs.core.first(arglist__30130);
var args = cljs.core.rest(arglist__30130);
return log__delegate(p__30127,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30131){var map__30133 = p__30131;var map__30133__$1 = ((cljs.core.seq_QMARK_.call(null,map__30133))?cljs.core.apply.call(null,cljs.core.hash_map,map__30133):map__30133);var websocket_url = cljs.core.get.call(null,map__30133__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30134,callback){var map__30136 = p__30134;var map__30136__$1 = ((cljs.core.seq_QMARK_.call(null,map__30136))?cljs.core.apply.call(null,cljs.core.hash_map,map__30136):map__30136);var msg = map__30136__$1;var dependency_file = cljs.core.get.call(null,map__30136__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30136__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30136__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30136,map__30136__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30136,map__30136__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__30137,p__30138){var map__30141 = p__30137;var map__30141__$1 = ((cljs.core.seq_QMARK_.call(null,map__30141))?cljs.core.apply.call(null,cljs.core.hash_map,map__30141):map__30141);var opts = map__30141__$1;var url_rewriter = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30142 = p__30138;var map__30142__$1 = ((cljs.core.seq_QMARK_.call(null,map__30142))?cljs.core.apply.call(null,cljs.core.hash_map,map__30142):map__30142);var d = map__30142__$1;var file = cljs.core.get.call(null,map__30142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30143,p__30144){var map__30186 = p__30143;var map__30186__$1 = ((cljs.core.seq_QMARK_.call(null,map__30186))?cljs.core.apply.call(null,cljs.core.hash_map,map__30186):map__30186);var opts = map__30186__$1;var on_jsload = cljs.core.get.call(null,map__30186__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30186__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30187 = p__30144;var map__30187__$1 = ((cljs.core.seq_QMARK_.call(null,map__30187))?cljs.core.apply.call(null,cljs.core.hash_map,map__30187):map__30187);var files = cljs.core.get.call(null,map__30187__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files){
return (function (state_30210){var state_val_30211 = (state_30210[(1)]);if((state_val_30211 === (6)))
{var inst_30192 = (state_30210[(7)]);var inst_30201 = (state_30210[(2)]);var inst_30202 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30203 = [inst_30192];var inst_30204 = (new cljs.core.PersistentVector(null,1,(5),inst_30202,inst_30203,null));var inst_30205 = cljs.core.apply.call(null,on_jsload,inst_30204);var state_30210__$1 = (function (){var statearr_30212 = state_30210;(statearr_30212[(8)] = inst_30201);
return statearr_30212;
})();var statearr_30213_30227 = state_30210__$1;(statearr_30213_30227[(2)] = inst_30205);
(statearr_30213_30227[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30211 === (5)))
{var inst_30208 = (state_30210[(2)]);var state_30210__$1 = state_30210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30210__$1,inst_30208);
} else
{if((state_val_30211 === (4)))
{var state_30210__$1 = state_30210;var statearr_30214_30228 = state_30210__$1;(statearr_30214_30228[(2)] = null);
(statearr_30214_30228[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30211 === (3)))
{var inst_30192 = (state_30210[(7)]);var inst_30195 = console.debug("Figwheel: loaded these files");var inst_30196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30192);var inst_30197 = cljs.core.prn_str.call(null,inst_30196);var inst_30198 = console.log(inst_30197);var inst_30199 = cljs.core.async.timeout.call(null,(10));var state_30210__$1 = (function (){var statearr_30215 = state_30210;(statearr_30215[(9)] = inst_30198);
(statearr_30215[(10)] = inst_30195);
return statearr_30215;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(6),inst_30199);
} else
{if((state_val_30211 === (2)))
{var inst_30192 = (state_30210[(7)]);var inst_30192__$1 = (state_30210[(2)]);var inst_30193 = cljs.core.not_empty.call(null,inst_30192__$1);var state_30210__$1 = (function (){var statearr_30216 = state_30210;(statearr_30216[(7)] = inst_30192__$1);
return statearr_30216;
})();if(cljs.core.truth_(inst_30193))
{var statearr_30217_30229 = state_30210__$1;(statearr_30217_30229[(1)] = (3));
} else
{var statearr_30218_30230 = state_30210__$1;(statearr_30218_30230[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30211 === (1)))
{var inst_30188 = before_jsload.call(null,files);var inst_30189 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30190 = figwheel.client.load_all_js_files.call(null,inst_30189);var state_30210__$1 = (function (){var statearr_30219 = state_30210;(statearr_30219[(11)] = inst_30188);
return statearr_30219;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(2),inst_30190);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30223 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30223[(0)] = state_machine__11462__auto__);
(statearr_30223[(1)] = (1));
return statearr_30223;
});
var state_machine__11462__auto____1 = (function (state_30210){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30210);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30224){if((e30224 instanceof Object))
{var ex__11465__auto__ = e30224;var statearr_30225_30231 = state_30210;(statearr_30225_30231[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30232 = state_30210;
state_30210 = G__30232;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30210){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30226 = f__11518__auto__.call(null);(statearr_30226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30186,map__30186__$1,opts,on_jsload,before_jsload,map__30187,map__30187__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30233,link_href){var map__30235 = p__30233;var map__30235__$1 = ((cljs.core.seq_QMARK_.call(null,map__30235))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);var request_url = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,parent){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,parent){
return (function (state_30256){var state_val_30257 = (state_30256[(1)]);if((state_val_30257 === (2)))
{var inst_30253 = (state_30256[(2)]);var inst_30254 = parent.removeChild(orig_link);var state_30256__$1 = (function (){var statearr_30258 = state_30256;(statearr_30258[(7)] = inst_30253);
return statearr_30258;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30256__$1,inst_30254);
} else
{if((state_val_30257 === (1)))
{var inst_30251 = cljs.core.async.timeout.call(null,(200));var state_30256__$1 = state_30256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30256__$1,(2),inst_30251);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30262 = [null,null,null,null,null,null,null,null];(statearr_30262[(0)] = state_machine__11462__auto__);
(statearr_30262[(1)] = (1));
return statearr_30262;
});
var state_machine__11462__auto____1 = (function (state_30256){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30256);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30263){if((e30263 instanceof Object))
{var ex__11465__auto__ = e30263;var statearr_30264_30266 = state_30256;(statearr_30264_30266[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30263;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30267 = state_30256;
state_30256 = G__30267;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30256){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30265 = f__11518__auto__.call(null);(statearr_30265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,parent))
);
return c__11517__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__30268){var map__30270 = p__30268;var map__30270__$1 = ((cljs.core.seq_QMARK_.call(null,map__30270))?cljs.core.apply.call(null,cljs.core.hash_map,map__30270):map__30270);var f_data = map__30270__$1;var request_url = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30271,files_msg){var map__30293 = p__30271;var map__30293__$1 = ((cljs.core.seq_QMARK_.call(null,map__30293))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);var opts = map__30293__$1;var on_cssload = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30294_30314 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30295_30315 = null;var count__30296_30316 = (0);var i__30297_30317 = (0);while(true){
if((i__30297_30317 < count__30296_30316))
{var f_30318 = cljs.core._nth.call(null,chunk__30295_30315,i__30297_30317);figwheel.client.reload_css_file.call(null,f_30318);
{
var G__30319 = seq__30294_30314;
var G__30320 = chunk__30295_30315;
var G__30321 = count__30296_30316;
var G__30322 = (i__30297_30317 + (1));
seq__30294_30314 = G__30319;
chunk__30295_30315 = G__30320;
count__30296_30316 = G__30321;
i__30297_30317 = G__30322;
continue;
}
} else
{var temp__4126__auto___30323 = cljs.core.seq.call(null,seq__30294_30314);if(temp__4126__auto___30323)
{var seq__30294_30324__$1 = temp__4126__auto___30323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30294_30324__$1))
{var c__4408__auto___30325 = cljs.core.chunk_first.call(null,seq__30294_30324__$1);{
var G__30326 = cljs.core.chunk_rest.call(null,seq__30294_30324__$1);
var G__30327 = c__4408__auto___30325;
var G__30328 = cljs.core.count.call(null,c__4408__auto___30325);
var G__30329 = (0);
seq__30294_30314 = G__30326;
chunk__30295_30315 = G__30327;
count__30296_30316 = G__30328;
i__30297_30317 = G__30329;
continue;
}
} else
{var f_30330 = cljs.core.first.call(null,seq__30294_30324__$1);figwheel.client.reload_css_file.call(null,f_30330);
{
var G__30331 = cljs.core.next.call(null,seq__30294_30324__$1);
var G__30332 = null;
var G__30333 = (0);
var G__30334 = (0);
seq__30294_30314 = G__30331;
chunk__30295_30315 = G__30332;
count__30296_30316 = G__30333;
i__30297_30317 = G__30334;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload){
return (function (state_30304){var state_val_30305 = (state_30304[(1)]);if((state_val_30305 === (2)))
{var inst_30300 = (state_30304[(2)]);var inst_30301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30302 = on_cssload.call(null,inst_30301);var state_30304__$1 = (function (){var statearr_30306 = state_30304;(statearr_30306[(7)] = inst_30300);
return statearr_30306;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30304__$1,inst_30302);
} else
{if((state_val_30305 === (1)))
{var inst_30298 = cljs.core.async.timeout.call(null,(100));var state_30304__$1 = state_30304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30304__$1,(2),inst_30298);
} else
{return null;
}
}
});})(c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30310 = [null,null,null,null,null,null,null,null];(statearr_30310[(0)] = state_machine__11462__auto__);
(statearr_30310[(1)] = (1));
return statearr_30310;
});
var state_machine__11462__auto____1 = (function (state_30304){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30304);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object))
{var ex__11465__auto__ = e30311;var statearr_30312_30335 = state_30304;(statearr_30312_30335[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30304);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30336 = state_30304;
state_30304 = G__30336;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30304){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30313 = f__11518__auto__.call(null);(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30293,map__30293__$1,opts,on_cssload))
);
return c__11517__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30337){var map__30342 = p__30337;var map__30342__$1 = ((cljs.core.seq_QMARK_.call(null,map__30342))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);var opts = map__30342__$1;var on_compile_fail = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30343 = cljs.core._EQ_;var expr__30344 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30343.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30344)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30343.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30344)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30343.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30344)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30342,map__30342__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30349 = {"detail":url};return obj30349;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30350){var map__30352 = p__30350;var map__30352__$1 = ((cljs.core.seq_QMARK_.call(null,map__30352))?cljs.core.apply.call(null,cljs.core.hash_map,map__30352):map__30352);var class$ = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30353){var map__30359 = p__30353;var map__30359__$1 = ((cljs.core.seq_QMARK_.call(null,map__30359))?cljs.core.apply.call(null,cljs.core.hash_map,map__30359):map__30359);var ed = map__30359__$1;var exception_data = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30360_30364 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30361_30365 = null;var count__30362_30366 = (0);var i__30363_30367 = (0);while(true){
if((i__30363_30367 < count__30362_30366))
{var msg_30368 = cljs.core._nth.call(null,chunk__30361_30365,i__30363_30367);console.log(msg_30368);
{
var G__30369 = seq__30360_30364;
var G__30370 = chunk__30361_30365;
var G__30371 = count__30362_30366;
var G__30372 = (i__30363_30367 + (1));
seq__30360_30364 = G__30369;
chunk__30361_30365 = G__30370;
count__30362_30366 = G__30371;
i__30363_30367 = G__30372;
continue;
}
} else
{var temp__4126__auto___30373 = cljs.core.seq.call(null,seq__30360_30364);if(temp__4126__auto___30373)
{var seq__30360_30374__$1 = temp__4126__auto___30373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30360_30374__$1))
{var c__4408__auto___30375 = cljs.core.chunk_first.call(null,seq__30360_30374__$1);{
var G__30376 = cljs.core.chunk_rest.call(null,seq__30360_30374__$1);
var G__30377 = c__4408__auto___30375;
var G__30378 = cljs.core.count.call(null,c__4408__auto___30375);
var G__30379 = (0);
seq__30360_30364 = G__30376;
chunk__30361_30365 = G__30377;
count__30362_30366 = G__30378;
i__30363_30367 = G__30379;
continue;
}
} else
{var msg_30380 = cljs.core.first.call(null,seq__30360_30374__$1);console.log(msg_30380);
{
var G__30381 = cljs.core.next.call(null,seq__30360_30374__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__30360_30364 = G__30381;
chunk__30361_30365 = G__30382;
count__30362_30366 = G__30383;
i__30363_30367 = G__30384;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30385){var map__30387 = p__30385;var map__30387__$1 = ((cljs.core.seq_QMARK_.call(null,map__30387))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);var opts = map__30387__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30385 = null;if (arguments.length > 0) {
  p__30385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30385);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30388){
var p__30385 = cljs.core.seq(arglist__30388);
return watch_and_reload__delegate(p__30385);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
