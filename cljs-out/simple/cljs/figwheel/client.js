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
var log__delegate = function (p__31274,args){var map__31276 = p__31274;var map__31276__$1 = ((cljs.core.seq_QMARK_.call(null,map__31276))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);var debug = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31274,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31274,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31277){
var p__31274 = cljs.core.first(arglist__31277);
var args = cljs.core.rest(arglist__31277);
return log__delegate(p__31274,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31278){var map__31280 = p__31278;var map__31280__$1 = ((cljs.core.seq_QMARK_.call(null,map__31280))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280):map__31280);var websocket_url = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31281,callback){var map__31283 = p__31281;var map__31283__$1 = ((cljs.core.seq_QMARK_.call(null,map__31283))?cljs.core.apply.call(null,cljs.core.hash_map,map__31283):map__31283);var msg = map__31283__$1;var dependency_file = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31283,map__31283__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31283,map__31283__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31284,p__31285){var map__31288 = p__31284;var map__31288__$1 = ((cljs.core.seq_QMARK_.call(null,map__31288))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);var opts = map__31288__$1;var url_rewriter = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31289 = p__31285;var map__31289__$1 = ((cljs.core.seq_QMARK_.call(null,map__31289))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);var d = map__31289__$1;var file = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31290,p__31291){var map__31333 = p__31290;var map__31333__$1 = ((cljs.core.seq_QMARK_.call(null,map__31333))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);var opts = map__31333__$1;var on_jsload = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31334 = p__31291;var map__31334__$1 = ((cljs.core.seq_QMARK_.call(null,map__31334))?cljs.core.apply.call(null,cljs.core.hash_map,map__31334):map__31334);var files = cljs.core.get.call(null,map__31334__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files){
return (function (state_31357){var state_val_31358 = (state_31357[(1)]);if((state_val_31358 === (6)))
{var inst_31339 = (state_31357[(7)]);var inst_31348 = (state_31357[(2)]);var inst_31349 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31350 = [inst_31339];var inst_31351 = (new cljs.core.PersistentVector(null,1,(5),inst_31349,inst_31350,null));var inst_31352 = cljs.core.apply.call(null,on_jsload,inst_31351);var state_31357__$1 = (function (){var statearr_31359 = state_31357;(statearr_31359[(8)] = inst_31348);
return statearr_31359;
})();var statearr_31360_31374 = state_31357__$1;(statearr_31360_31374[(2)] = inst_31352);
(statearr_31360_31374[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31358 === (5)))
{var inst_31355 = (state_31357[(2)]);var state_31357__$1 = state_31357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31357__$1,inst_31355);
} else
{if((state_val_31358 === (4)))
{var state_31357__$1 = state_31357;var statearr_31361_31375 = state_31357__$1;(statearr_31361_31375[(2)] = null);
(statearr_31361_31375[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31358 === (3)))
{var inst_31339 = (state_31357[(7)]);var inst_31342 = console.debug("Figwheel: loaded these files");var inst_31343 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31339);var inst_31344 = cljs.core.prn_str.call(null,inst_31343);var inst_31345 = console.log(inst_31344);var inst_31346 = cljs.core.async.timeout.call(null,(10));var state_31357__$1 = (function (){var statearr_31362 = state_31357;(statearr_31362[(9)] = inst_31345);
(statearr_31362[(10)] = inst_31342);
return statearr_31362;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(6),inst_31346);
} else
{if((state_val_31358 === (2)))
{var inst_31339 = (state_31357[(7)]);var inst_31339__$1 = (state_31357[(2)]);var inst_31340 = cljs.core.not_empty.call(null,inst_31339__$1);var state_31357__$1 = (function (){var statearr_31363 = state_31357;(statearr_31363[(7)] = inst_31339__$1);
return statearr_31363;
})();if(cljs.core.truth_(inst_31340))
{var statearr_31364_31376 = state_31357__$1;(statearr_31364_31376[(1)] = (3));
} else
{var statearr_31365_31377 = state_31357__$1;(statearr_31365_31377[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31358 === (1)))
{var inst_31335 = before_jsload.call(null,files);var inst_31336 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31337 = figwheel.client.load_all_js_files.call(null,inst_31336);var state_31357__$1 = (function (){var statearr_31366 = state_31357;(statearr_31366[(11)] = inst_31335);
return statearr_31366;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(2),inst_31337);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31370[(0)] = state_machine__9111__auto__);
(statearr_31370[(1)] = (1));
return statearr_31370;
});
var state_machine__9111__auto____1 = (function (state_31357){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31357);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object))
{var ex__9114__auto__ = e31371;var statearr_31372_31378 = state_31357;(statearr_31372_31378[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31371;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31379 = state_31357;
state_31357 = G__31379;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31373 = f__9126__auto__.call(null);(statearr_31373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31333,map__31333__$1,opts,on_jsload,before_jsload,map__31334,map__31334__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31380,link_href){var map__31382 = p__31380;var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);var request_url = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,parent){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,parent){
return (function (state_31403){var state_val_31404 = (state_31403[(1)]);if((state_val_31404 === (2)))
{var inst_31400 = (state_31403[(2)]);var inst_31401 = parent.removeChild(orig_link);var state_31403__$1 = (function (){var statearr_31405 = state_31403;(statearr_31405[(7)] = inst_31400);
return statearr_31405;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31403__$1,inst_31401);
} else
{if((state_val_31404 === (1)))
{var inst_31398 = cljs.core.async.timeout.call(null,(200));var state_31403__$1 = state_31403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31403__$1,(2),inst_31398);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31409 = [null,null,null,null,null,null,null,null];(statearr_31409[(0)] = state_machine__9111__auto__);
(statearr_31409[(1)] = (1));
return statearr_31409;
});
var state_machine__9111__auto____1 = (function (state_31403){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31403);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31410){if((e31410 instanceof Object))
{var ex__9114__auto__ = e31410;var statearr_31411_31413 = state_31403;(statearr_31411_31413[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31410;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31414 = state_31403;
state_31403 = G__31414;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31403){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31412 = f__9126__auto__.call(null);(statearr_31412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,parent))
);
return c__9125__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31415){var map__31417 = p__31415;var map__31417__$1 = ((cljs.core.seq_QMARK_.call(null,map__31417))?cljs.core.apply.call(null,cljs.core.hash_map,map__31417):map__31417);var f_data = map__31417__$1;var request_url = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31418,files_msg){var map__31440 = p__31418;var map__31440__$1 = ((cljs.core.seq_QMARK_.call(null,map__31440))?cljs.core.apply.call(null,cljs.core.hash_map,map__31440):map__31440);var opts = map__31440__$1;var on_cssload = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31441_31461 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31442_31462 = null;var count__31443_31463 = (0);var i__31444_31464 = (0);while(true){
if((i__31444_31464 < count__31443_31463))
{var f_31465 = cljs.core._nth.call(null,chunk__31442_31462,i__31444_31464);figwheel.client.reload_css_file.call(null,f_31465);
{
var G__31466 = seq__31441_31461;
var G__31467 = chunk__31442_31462;
var G__31468 = count__31443_31463;
var G__31469 = (i__31444_31464 + (1));
seq__31441_31461 = G__31466;
chunk__31442_31462 = G__31467;
count__31443_31463 = G__31468;
i__31444_31464 = G__31469;
continue;
}
} else
{var temp__4126__auto___31470 = cljs.core.seq.call(null,seq__31441_31461);if(temp__4126__auto___31470)
{var seq__31441_31471__$1 = temp__4126__auto___31470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31441_31471__$1))
{var c__4408__auto___31472 = cljs.core.chunk_first.call(null,seq__31441_31471__$1);{
var G__31473 = cljs.core.chunk_rest.call(null,seq__31441_31471__$1);
var G__31474 = c__4408__auto___31472;
var G__31475 = cljs.core.count.call(null,c__4408__auto___31472);
var G__31476 = (0);
seq__31441_31461 = G__31473;
chunk__31442_31462 = G__31474;
count__31443_31463 = G__31475;
i__31444_31464 = G__31476;
continue;
}
} else
{var f_31477 = cljs.core.first.call(null,seq__31441_31471__$1);figwheel.client.reload_css_file.call(null,f_31477);
{
var G__31478 = cljs.core.next.call(null,seq__31441_31471__$1);
var G__31479 = null;
var G__31480 = (0);
var G__31481 = (0);
seq__31441_31461 = G__31478;
chunk__31442_31462 = G__31479;
count__31443_31463 = G__31480;
i__31444_31464 = G__31481;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload){
return (function (state_31451){var state_val_31452 = (state_31451[(1)]);if((state_val_31452 === (2)))
{var inst_31447 = (state_31451[(2)]);var inst_31448 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31449 = on_cssload.call(null,inst_31448);var state_31451__$1 = (function (){var statearr_31453 = state_31451;(statearr_31453[(7)] = inst_31447);
return statearr_31453;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31451__$1,inst_31449);
} else
{if((state_val_31452 === (1)))
{var inst_31445 = cljs.core.async.timeout.call(null,(100));var state_31451__$1 = state_31451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31451__$1,(2),inst_31445);
} else
{return null;
}
}
});})(c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31457 = [null,null,null,null,null,null,null,null];(statearr_31457[(0)] = state_machine__9111__auto__);
(statearr_31457[(1)] = (1));
return statearr_31457;
});
var state_machine__9111__auto____1 = (function (state_31451){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31451);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31458){if((e31458 instanceof Object))
{var ex__9114__auto__ = e31458;var statearr_31459_31482 = state_31451;(statearr_31459_31482[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31483 = state_31451;
state_31451 = G__31483;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31451){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31460 = f__9126__auto__.call(null);(statearr_31460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31440,map__31440__$1,opts,on_cssload))
);
return c__9125__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31484){var map__31489 = p__31484;var map__31489__$1 = ((cljs.core.seq_QMARK_.call(null,map__31489))?cljs.core.apply.call(null,cljs.core.hash_map,map__31489):map__31489);var opts = map__31489__$1;var on_compile_fail = cljs.core.get.call(null,map__31489__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31489__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31489__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31489__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31490 = cljs.core._EQ_;var expr__31491 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31490.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31491)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31490.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31491)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31490.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31491)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31489,map__31489__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31496 = {"detail":url};return obj31496;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31497){var map__31499 = p__31497;var map__31499__$1 = ((cljs.core.seq_QMARK_.call(null,map__31499))?cljs.core.apply.call(null,cljs.core.hash_map,map__31499):map__31499);var class$ = cljs.core.get.call(null,map__31499__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31499__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31500){var map__31506 = p__31500;var map__31506__$1 = ((cljs.core.seq_QMARK_.call(null,map__31506))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);var ed = map__31506__$1;var exception_data = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31507_31511 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31508_31512 = null;var count__31509_31513 = (0);var i__31510_31514 = (0);while(true){
if((i__31510_31514 < count__31509_31513))
{var msg_31515 = cljs.core._nth.call(null,chunk__31508_31512,i__31510_31514);console.log(msg_31515);
{
var G__31516 = seq__31507_31511;
var G__31517 = chunk__31508_31512;
var G__31518 = count__31509_31513;
var G__31519 = (i__31510_31514 + (1));
seq__31507_31511 = G__31516;
chunk__31508_31512 = G__31517;
count__31509_31513 = G__31518;
i__31510_31514 = G__31519;
continue;
}
} else
{var temp__4126__auto___31520 = cljs.core.seq.call(null,seq__31507_31511);if(temp__4126__auto___31520)
{var seq__31507_31521__$1 = temp__4126__auto___31520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31507_31521__$1))
{var c__4408__auto___31522 = cljs.core.chunk_first.call(null,seq__31507_31521__$1);{
var G__31523 = cljs.core.chunk_rest.call(null,seq__31507_31521__$1);
var G__31524 = c__4408__auto___31522;
var G__31525 = cljs.core.count.call(null,c__4408__auto___31522);
var G__31526 = (0);
seq__31507_31511 = G__31523;
chunk__31508_31512 = G__31524;
count__31509_31513 = G__31525;
i__31510_31514 = G__31526;
continue;
}
} else
{var msg_31527 = cljs.core.first.call(null,seq__31507_31521__$1);console.log(msg_31527);
{
var G__31528 = cljs.core.next.call(null,seq__31507_31521__$1);
var G__31529 = null;
var G__31530 = (0);
var G__31531 = (0);
seq__31507_31511 = G__31528;
chunk__31508_31512 = G__31529;
count__31509_31513 = G__31530;
i__31510_31514 = G__31531;
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
var watch_and_reload__delegate = function (p__31532){var map__31534 = p__31532;var map__31534__$1 = ((cljs.core.seq_QMARK_.call(null,map__31534))?cljs.core.apply.call(null,cljs.core.hash_map,map__31534):map__31534);var opts = map__31534__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31532 = null;if (arguments.length > 0) {
  p__31532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31532);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31535){
var p__31532 = cljs.core.seq(arglist__31535);
return watch_and_reload__delegate(p__31532);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
