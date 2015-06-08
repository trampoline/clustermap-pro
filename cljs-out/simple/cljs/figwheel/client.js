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
var log__delegate = function (p__31244,args){var map__31246 = p__31244;var map__31246__$1 = ((cljs.core.seq_QMARK_.call(null,map__31246))?cljs.core.apply.call(null,cljs.core.hash_map,map__31246):map__31246);var debug = cljs.core.get.call(null,map__31246__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31244,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31244,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31247){
var p__31244 = cljs.core.first(arglist__31247);
var args = cljs.core.rest(arglist__31247);
return log__delegate(p__31244,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31248){var map__31250 = p__31248;var map__31250__$1 = ((cljs.core.seq_QMARK_.call(null,map__31250))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);var websocket_url = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31251,callback){var map__31253 = p__31251;var map__31253__$1 = ((cljs.core.seq_QMARK_.call(null,map__31253))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);var msg = map__31253__$1;var dependency_file = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31253,map__31253__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31253,map__31253__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31254,p__31255){var map__31258 = p__31254;var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);var opts = map__31258__$1;var url_rewriter = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31259 = p__31255;var map__31259__$1 = ((cljs.core.seq_QMARK_.call(null,map__31259))?cljs.core.apply.call(null,cljs.core.hash_map,map__31259):map__31259);var d = map__31259__$1;var file = cljs.core.get.call(null,map__31259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31260,p__31261){var map__31303 = p__31260;var map__31303__$1 = ((cljs.core.seq_QMARK_.call(null,map__31303))?cljs.core.apply.call(null,cljs.core.hash_map,map__31303):map__31303);var opts = map__31303__$1;var on_jsload = cljs.core.get.call(null,map__31303__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31303__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31304 = p__31261;var map__31304__$1 = ((cljs.core.seq_QMARK_.call(null,map__31304))?cljs.core.apply.call(null,cljs.core.hash_map,map__31304):map__31304);var files = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files){
return (function (state_31327){var state_val_31328 = (state_31327[(1)]);if((state_val_31328 === (6)))
{var inst_31309 = (state_31327[(7)]);var inst_31318 = (state_31327[(2)]);var inst_31319 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31320 = [inst_31309];var inst_31321 = (new cljs.core.PersistentVector(null,1,(5),inst_31319,inst_31320,null));var inst_31322 = cljs.core.apply.call(null,on_jsload,inst_31321);var state_31327__$1 = (function (){var statearr_31329 = state_31327;(statearr_31329[(8)] = inst_31318);
return statearr_31329;
})();var statearr_31330_31344 = state_31327__$1;(statearr_31330_31344[(2)] = inst_31322);
(statearr_31330_31344[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31328 === (5)))
{var inst_31325 = (state_31327[(2)]);var state_31327__$1 = state_31327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31327__$1,inst_31325);
} else
{if((state_val_31328 === (4)))
{var state_31327__$1 = state_31327;var statearr_31331_31345 = state_31327__$1;(statearr_31331_31345[(2)] = null);
(statearr_31331_31345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31328 === (3)))
{var inst_31309 = (state_31327[(7)]);var inst_31312 = console.debug("Figwheel: loaded these files");var inst_31313 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31309);var inst_31314 = cljs.core.prn_str.call(null,inst_31313);var inst_31315 = console.log(inst_31314);var inst_31316 = cljs.core.async.timeout.call(null,(10));var state_31327__$1 = (function (){var statearr_31332 = state_31327;(statearr_31332[(9)] = inst_31312);
(statearr_31332[(10)] = inst_31315);
return statearr_31332;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31327__$1,(6),inst_31316);
} else
{if((state_val_31328 === (2)))
{var inst_31309 = (state_31327[(7)]);var inst_31309__$1 = (state_31327[(2)]);var inst_31310 = cljs.core.not_empty.call(null,inst_31309__$1);var state_31327__$1 = (function (){var statearr_31333 = state_31327;(statearr_31333[(7)] = inst_31309__$1);
return statearr_31333;
})();if(cljs.core.truth_(inst_31310))
{var statearr_31334_31346 = state_31327__$1;(statearr_31334_31346[(1)] = (3));
} else
{var statearr_31335_31347 = state_31327__$1;(statearr_31335_31347[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31328 === (1)))
{var inst_31305 = before_jsload.call(null,files);var inst_31306 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31307 = figwheel.client.load_all_js_files.call(null,inst_31306);var state_31327__$1 = (function (){var statearr_31336 = state_31327;(statearr_31336[(11)] = inst_31305);
return statearr_31336;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31327__$1,(2),inst_31307);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31340 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31340[(0)] = state_machine__9111__auto__);
(statearr_31340[(1)] = (1));
return statearr_31340;
});
var state_machine__9111__auto____1 = (function (state_31327){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31327);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object))
{var ex__9114__auto__ = e31341;var statearr_31342_31348 = state_31327;(statearr_31342_31348[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31349 = state_31327;
state_31327 = G__31349;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31343 = f__9126__auto__.call(null);(statearr_31343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31303,map__31303__$1,opts,on_jsload,before_jsload,map__31304,map__31304__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31350,link_href){var map__31352 = p__31350;var map__31352__$1 = ((cljs.core.seq_QMARK_.call(null,map__31352))?cljs.core.apply.call(null,cljs.core.hash_map,map__31352):map__31352);var request_url = cljs.core.get.call(null,map__31352__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31373){var state_val_31374 = (state_31373[(1)]);if((state_val_31374 === (2)))
{var inst_31370 = (state_31373[(2)]);var inst_31371 = parent.removeChild(orig_link);var state_31373__$1 = (function (){var statearr_31375 = state_31373;(statearr_31375[(7)] = inst_31370);
return statearr_31375;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31373__$1,inst_31371);
} else
{if((state_val_31374 === (1)))
{var inst_31368 = cljs.core.async.timeout.call(null,(200));var state_31373__$1 = state_31373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31373__$1,(2),inst_31368);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31379 = [null,null,null,null,null,null,null,null];(statearr_31379[(0)] = state_machine__9111__auto__);
(statearr_31379[(1)] = (1));
return statearr_31379;
});
var state_machine__9111__auto____1 = (function (state_31373){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31373);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object))
{var ex__9114__auto__ = e31380;var statearr_31381_31383 = state_31373;(statearr_31381_31383[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31384 = state_31373;
state_31373 = G__31384;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31382 = f__9126__auto__.call(null);(statearr_31382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31382;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31385){var map__31387 = p__31385;var map__31387__$1 = ((cljs.core.seq_QMARK_.call(null,map__31387))?cljs.core.apply.call(null,cljs.core.hash_map,map__31387):map__31387);var f_data = map__31387__$1;var request_url = cljs.core.get.call(null,map__31387__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31387__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31388,files_msg){var map__31410 = p__31388;var map__31410__$1 = ((cljs.core.seq_QMARK_.call(null,map__31410))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);var opts = map__31410__$1;var on_cssload = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31411_31431 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31412_31432 = null;var count__31413_31433 = (0);var i__31414_31434 = (0);while(true){
if((i__31414_31434 < count__31413_31433))
{var f_31435 = cljs.core._nth.call(null,chunk__31412_31432,i__31414_31434);figwheel.client.reload_css_file.call(null,f_31435);
{
var G__31436 = seq__31411_31431;
var G__31437 = chunk__31412_31432;
var G__31438 = count__31413_31433;
var G__31439 = (i__31414_31434 + (1));
seq__31411_31431 = G__31436;
chunk__31412_31432 = G__31437;
count__31413_31433 = G__31438;
i__31414_31434 = G__31439;
continue;
}
} else
{var temp__4126__auto___31440 = cljs.core.seq.call(null,seq__31411_31431);if(temp__4126__auto___31440)
{var seq__31411_31441__$1 = temp__4126__auto___31440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31411_31441__$1))
{var c__4408__auto___31442 = cljs.core.chunk_first.call(null,seq__31411_31441__$1);{
var G__31443 = cljs.core.chunk_rest.call(null,seq__31411_31441__$1);
var G__31444 = c__4408__auto___31442;
var G__31445 = cljs.core.count.call(null,c__4408__auto___31442);
var G__31446 = (0);
seq__31411_31431 = G__31443;
chunk__31412_31432 = G__31444;
count__31413_31433 = G__31445;
i__31414_31434 = G__31446;
continue;
}
} else
{var f_31447 = cljs.core.first.call(null,seq__31411_31441__$1);figwheel.client.reload_css_file.call(null,f_31447);
{
var G__31448 = cljs.core.next.call(null,seq__31411_31441__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31411_31431 = G__31448;
chunk__31412_31432 = G__31449;
count__31413_31433 = G__31450;
i__31414_31434 = G__31451;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload){
return (function (state_31421){var state_val_31422 = (state_31421[(1)]);if((state_val_31422 === (2)))
{var inst_31417 = (state_31421[(2)]);var inst_31418 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31419 = on_cssload.call(null,inst_31418);var state_31421__$1 = (function (){var statearr_31423 = state_31421;(statearr_31423[(7)] = inst_31417);
return statearr_31423;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31421__$1,inst_31419);
} else
{if((state_val_31422 === (1)))
{var inst_31415 = cljs.core.async.timeout.call(null,(100));var state_31421__$1 = state_31421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31421__$1,(2),inst_31415);
} else
{return null;
}
}
});})(c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31427 = [null,null,null,null,null,null,null,null];(statearr_31427[(0)] = state_machine__9111__auto__);
(statearr_31427[(1)] = (1));
return statearr_31427;
});
var state_machine__9111__auto____1 = (function (state_31421){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31421);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31428){if((e31428 instanceof Object))
{var ex__9114__auto__ = e31428;var statearr_31429_31452 = state_31421;(statearr_31429_31452[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31453 = state_31421;
state_31421 = G__31453;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31421){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31430 = f__9126__auto__.call(null);(statearr_31430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31410,map__31410__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31454){var map__31459 = p__31454;var map__31459__$1 = ((cljs.core.seq_QMARK_.call(null,map__31459))?cljs.core.apply.call(null,cljs.core.hash_map,map__31459):map__31459);var opts = map__31459__$1;var on_compile_fail = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31460 = cljs.core._EQ_;var expr__31461 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31460.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31461)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31460.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31461)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31460.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31461)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31459,map__31459__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31466 = {"detail":url};return obj31466;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31467){var map__31469 = p__31467;var map__31469__$1 = ((cljs.core.seq_QMARK_.call(null,map__31469))?cljs.core.apply.call(null,cljs.core.hash_map,map__31469):map__31469);var class$ = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31470){var map__31476 = p__31470;var map__31476__$1 = ((cljs.core.seq_QMARK_.call(null,map__31476))?cljs.core.apply.call(null,cljs.core.hash_map,map__31476):map__31476);var ed = map__31476__$1;var exception_data = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31477_31481 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31478_31482 = null;var count__31479_31483 = (0);var i__31480_31484 = (0);while(true){
if((i__31480_31484 < count__31479_31483))
{var msg_31485 = cljs.core._nth.call(null,chunk__31478_31482,i__31480_31484);console.log(msg_31485);
{
var G__31486 = seq__31477_31481;
var G__31487 = chunk__31478_31482;
var G__31488 = count__31479_31483;
var G__31489 = (i__31480_31484 + (1));
seq__31477_31481 = G__31486;
chunk__31478_31482 = G__31487;
count__31479_31483 = G__31488;
i__31480_31484 = G__31489;
continue;
}
} else
{var temp__4126__auto___31490 = cljs.core.seq.call(null,seq__31477_31481);if(temp__4126__auto___31490)
{var seq__31477_31491__$1 = temp__4126__auto___31490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31477_31491__$1))
{var c__4408__auto___31492 = cljs.core.chunk_first.call(null,seq__31477_31491__$1);{
var G__31493 = cljs.core.chunk_rest.call(null,seq__31477_31491__$1);
var G__31494 = c__4408__auto___31492;
var G__31495 = cljs.core.count.call(null,c__4408__auto___31492);
var G__31496 = (0);
seq__31477_31481 = G__31493;
chunk__31478_31482 = G__31494;
count__31479_31483 = G__31495;
i__31480_31484 = G__31496;
continue;
}
} else
{var msg_31497 = cljs.core.first.call(null,seq__31477_31491__$1);console.log(msg_31497);
{
var G__31498 = cljs.core.next.call(null,seq__31477_31491__$1);
var G__31499 = null;
var G__31500 = (0);
var G__31501 = (0);
seq__31477_31481 = G__31498;
chunk__31478_31482 = G__31499;
count__31479_31483 = G__31500;
i__31480_31484 = G__31501;
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
var watch_and_reload__delegate = function (p__31502){var map__31504 = p__31502;var map__31504__$1 = ((cljs.core.seq_QMARK_.call(null,map__31504))?cljs.core.apply.call(null,cljs.core.hash_map,map__31504):map__31504);var opts = map__31504__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31502 = null;if (arguments.length > 0) {
  p__31502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31502);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31505){
var p__31502 = cljs.core.seq(arglist__31505);
return watch_and_reload__delegate(p__31502);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
