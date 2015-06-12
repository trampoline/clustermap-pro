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
var log__delegate = function (p__31260,args){var map__31262 = p__31260;var map__31262__$1 = ((cljs.core.seq_QMARK_.call(null,map__31262))?cljs.core.apply.call(null,cljs.core.hash_map,map__31262):map__31262);var debug = cljs.core.get.call(null,map__31262__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31260,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31260,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31263){
var p__31260 = cljs.core.first(arglist__31263);
var args = cljs.core.rest(arglist__31263);
return log__delegate(p__31260,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31264){var map__31266 = p__31264;var map__31266__$1 = ((cljs.core.seq_QMARK_.call(null,map__31266))?cljs.core.apply.call(null,cljs.core.hash_map,map__31266):map__31266);var websocket_url = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31267,callback){var map__31269 = p__31267;var map__31269__$1 = ((cljs.core.seq_QMARK_.call(null,map__31269))?cljs.core.apply.call(null,cljs.core.hash_map,map__31269):map__31269);var msg = map__31269__$1;var dependency_file = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31269,map__31269__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31269,map__31269__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31270,p__31271){var map__31274 = p__31270;var map__31274__$1 = ((cljs.core.seq_QMARK_.call(null,map__31274))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);var opts = map__31274__$1;var url_rewriter = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31275 = p__31271;var map__31275__$1 = ((cljs.core.seq_QMARK_.call(null,map__31275))?cljs.core.apply.call(null,cljs.core.hash_map,map__31275):map__31275);var d = map__31275__$1;var file = cljs.core.get.call(null,map__31275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31276,p__31277){var map__31319 = p__31276;var map__31319__$1 = ((cljs.core.seq_QMARK_.call(null,map__31319))?cljs.core.apply.call(null,cljs.core.hash_map,map__31319):map__31319);var opts = map__31319__$1;var on_jsload = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31320 = p__31277;var map__31320__$1 = ((cljs.core.seq_QMARK_.call(null,map__31320))?cljs.core.apply.call(null,cljs.core.hash_map,map__31320):map__31320);var files = cljs.core.get.call(null,map__31320__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files){
return (function (state_31343){var state_val_31344 = (state_31343[(1)]);if((state_val_31344 === (6)))
{var inst_31325 = (state_31343[(7)]);var inst_31334 = (state_31343[(2)]);var inst_31335 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31336 = [inst_31325];var inst_31337 = (new cljs.core.PersistentVector(null,1,(5),inst_31335,inst_31336,null));var inst_31338 = cljs.core.apply.call(null,on_jsload,inst_31337);var state_31343__$1 = (function (){var statearr_31345 = state_31343;(statearr_31345[(8)] = inst_31334);
return statearr_31345;
})();var statearr_31346_31360 = state_31343__$1;(statearr_31346_31360[(2)] = inst_31338);
(statearr_31346_31360[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31344 === (5)))
{var inst_31341 = (state_31343[(2)]);var state_31343__$1 = state_31343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31343__$1,inst_31341);
} else
{if((state_val_31344 === (4)))
{var state_31343__$1 = state_31343;var statearr_31347_31361 = state_31343__$1;(statearr_31347_31361[(2)] = null);
(statearr_31347_31361[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31344 === (3)))
{var inst_31325 = (state_31343[(7)]);var inst_31328 = console.debug("Figwheel: loaded these files");var inst_31329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31325);var inst_31330 = cljs.core.prn_str.call(null,inst_31329);var inst_31331 = console.log(inst_31330);var inst_31332 = cljs.core.async.timeout.call(null,(10));var state_31343__$1 = (function (){var statearr_31348 = state_31343;(statearr_31348[(9)] = inst_31328);
(statearr_31348[(10)] = inst_31331);
return statearr_31348;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,(6),inst_31332);
} else
{if((state_val_31344 === (2)))
{var inst_31325 = (state_31343[(7)]);var inst_31325__$1 = (state_31343[(2)]);var inst_31326 = cljs.core.not_empty.call(null,inst_31325__$1);var state_31343__$1 = (function (){var statearr_31349 = state_31343;(statearr_31349[(7)] = inst_31325__$1);
return statearr_31349;
})();if(cljs.core.truth_(inst_31326))
{var statearr_31350_31362 = state_31343__$1;(statearr_31350_31362[(1)] = (3));
} else
{var statearr_31351_31363 = state_31343__$1;(statearr_31351_31363[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31344 === (1)))
{var inst_31321 = before_jsload.call(null,files);var inst_31322 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31323 = figwheel.client.load_all_js_files.call(null,inst_31322);var state_31343__$1 = (function (){var statearr_31352 = state_31343;(statearr_31352[(11)] = inst_31321);
return statearr_31352;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,(2),inst_31323);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31356 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31356[(0)] = state_machine__9111__auto__);
(statearr_31356[(1)] = (1));
return statearr_31356;
});
var state_machine__9111__auto____1 = (function (state_31343){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31343);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31357){if((e31357 instanceof Object))
{var ex__9114__auto__ = e31357;var statearr_31358_31364 = state_31343;(statearr_31358_31364[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31357;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31365 = state_31343;
state_31343 = G__31365;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31343){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31359 = f__9126__auto__.call(null);(statearr_31359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31319,map__31319__$1,opts,on_jsload,before_jsload,map__31320,map__31320__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31366,link_href){var map__31368 = p__31366;var map__31368__$1 = ((cljs.core.seq_QMARK_.call(null,map__31368))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368):map__31368);var request_url = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31389){var state_val_31390 = (state_31389[(1)]);if((state_val_31390 === (2)))
{var inst_31386 = (state_31389[(2)]);var inst_31387 = parent.removeChild(orig_link);var state_31389__$1 = (function (){var statearr_31391 = state_31389;(statearr_31391[(7)] = inst_31386);
return statearr_31391;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31389__$1,inst_31387);
} else
{if((state_val_31390 === (1)))
{var inst_31384 = cljs.core.async.timeout.call(null,(200));var state_31389__$1 = state_31389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31389__$1,(2),inst_31384);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31395 = [null,null,null,null,null,null,null,null];(statearr_31395[(0)] = state_machine__9111__auto__);
(statearr_31395[(1)] = (1));
return statearr_31395;
});
var state_machine__9111__auto____1 = (function (state_31389){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31389);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object))
{var ex__9114__auto__ = e31396;var statearr_31397_31399 = state_31389;(statearr_31397_31399[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31400 = state_31389;
state_31389 = G__31400;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31389){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31398 = f__9126__auto__.call(null);(statearr_31398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31398;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31401){var map__31403 = p__31401;var map__31403__$1 = ((cljs.core.seq_QMARK_.call(null,map__31403))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);var f_data = map__31403__$1;var request_url = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31404,files_msg){var map__31426 = p__31404;var map__31426__$1 = ((cljs.core.seq_QMARK_.call(null,map__31426))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);var opts = map__31426__$1;var on_cssload = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31427_31447 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31428_31448 = null;var count__31429_31449 = (0);var i__31430_31450 = (0);while(true){
if((i__31430_31450 < count__31429_31449))
{var f_31451 = cljs.core._nth.call(null,chunk__31428_31448,i__31430_31450);figwheel.client.reload_css_file.call(null,f_31451);
{
var G__31452 = seq__31427_31447;
var G__31453 = chunk__31428_31448;
var G__31454 = count__31429_31449;
var G__31455 = (i__31430_31450 + (1));
seq__31427_31447 = G__31452;
chunk__31428_31448 = G__31453;
count__31429_31449 = G__31454;
i__31430_31450 = G__31455;
continue;
}
} else
{var temp__4126__auto___31456 = cljs.core.seq.call(null,seq__31427_31447);if(temp__4126__auto___31456)
{var seq__31427_31457__$1 = temp__4126__auto___31456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31427_31457__$1))
{var c__4408__auto___31458 = cljs.core.chunk_first.call(null,seq__31427_31457__$1);{
var G__31459 = cljs.core.chunk_rest.call(null,seq__31427_31457__$1);
var G__31460 = c__4408__auto___31458;
var G__31461 = cljs.core.count.call(null,c__4408__auto___31458);
var G__31462 = (0);
seq__31427_31447 = G__31459;
chunk__31428_31448 = G__31460;
count__31429_31449 = G__31461;
i__31430_31450 = G__31462;
continue;
}
} else
{var f_31463 = cljs.core.first.call(null,seq__31427_31457__$1);figwheel.client.reload_css_file.call(null,f_31463);
{
var G__31464 = cljs.core.next.call(null,seq__31427_31457__$1);
var G__31465 = null;
var G__31466 = (0);
var G__31467 = (0);
seq__31427_31447 = G__31464;
chunk__31428_31448 = G__31465;
count__31429_31449 = G__31466;
i__31430_31450 = G__31467;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload){
return (function (state_31437){var state_val_31438 = (state_31437[(1)]);if((state_val_31438 === (2)))
{var inst_31433 = (state_31437[(2)]);var inst_31434 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31435 = on_cssload.call(null,inst_31434);var state_31437__$1 = (function (){var statearr_31439 = state_31437;(statearr_31439[(7)] = inst_31433);
return statearr_31439;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31437__$1,inst_31435);
} else
{if((state_val_31438 === (1)))
{var inst_31431 = cljs.core.async.timeout.call(null,(100));var state_31437__$1 = state_31437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31437__$1,(2),inst_31431);
} else
{return null;
}
}
});})(c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31443 = [null,null,null,null,null,null,null,null];(statearr_31443[(0)] = state_machine__9111__auto__);
(statearr_31443[(1)] = (1));
return statearr_31443;
});
var state_machine__9111__auto____1 = (function (state_31437){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31437);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31444){if((e31444 instanceof Object))
{var ex__9114__auto__ = e31444;var statearr_31445_31468 = state_31437;(statearr_31445_31468[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31444;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31469 = state_31437;
state_31437 = G__31469;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31437){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31446 = f__9126__auto__.call(null);(statearr_31446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31426,map__31426__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31470){var map__31475 = p__31470;var map__31475__$1 = ((cljs.core.seq_QMARK_.call(null,map__31475))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);var opts = map__31475__$1;var on_compile_fail = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31476 = cljs.core._EQ_;var expr__31477 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31476.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31477)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31476.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31477)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31476.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31477)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31475,map__31475__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31482 = {"detail":url};return obj31482;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31483){var map__31485 = p__31483;var map__31485__$1 = ((cljs.core.seq_QMARK_.call(null,map__31485))?cljs.core.apply.call(null,cljs.core.hash_map,map__31485):map__31485);var class$ = cljs.core.get.call(null,map__31485__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31485__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31486){var map__31492 = p__31486;var map__31492__$1 = ((cljs.core.seq_QMARK_.call(null,map__31492))?cljs.core.apply.call(null,cljs.core.hash_map,map__31492):map__31492);var ed = map__31492__$1;var exception_data = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31493_31497 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31494_31498 = null;var count__31495_31499 = (0);var i__31496_31500 = (0);while(true){
if((i__31496_31500 < count__31495_31499))
{var msg_31501 = cljs.core._nth.call(null,chunk__31494_31498,i__31496_31500);console.log(msg_31501);
{
var G__31502 = seq__31493_31497;
var G__31503 = chunk__31494_31498;
var G__31504 = count__31495_31499;
var G__31505 = (i__31496_31500 + (1));
seq__31493_31497 = G__31502;
chunk__31494_31498 = G__31503;
count__31495_31499 = G__31504;
i__31496_31500 = G__31505;
continue;
}
} else
{var temp__4126__auto___31506 = cljs.core.seq.call(null,seq__31493_31497);if(temp__4126__auto___31506)
{var seq__31493_31507__$1 = temp__4126__auto___31506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31493_31507__$1))
{var c__4408__auto___31508 = cljs.core.chunk_first.call(null,seq__31493_31507__$1);{
var G__31509 = cljs.core.chunk_rest.call(null,seq__31493_31507__$1);
var G__31510 = c__4408__auto___31508;
var G__31511 = cljs.core.count.call(null,c__4408__auto___31508);
var G__31512 = (0);
seq__31493_31497 = G__31509;
chunk__31494_31498 = G__31510;
count__31495_31499 = G__31511;
i__31496_31500 = G__31512;
continue;
}
} else
{var msg_31513 = cljs.core.first.call(null,seq__31493_31507__$1);console.log(msg_31513);
{
var G__31514 = cljs.core.next.call(null,seq__31493_31507__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31493_31497 = G__31514;
chunk__31494_31498 = G__31515;
count__31495_31499 = G__31516;
i__31496_31500 = G__31517;
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
var watch_and_reload__delegate = function (p__31518){var map__31520 = p__31518;var map__31520__$1 = ((cljs.core.seq_QMARK_.call(null,map__31520))?cljs.core.apply.call(null,cljs.core.hash_map,map__31520):map__31520);var opts = map__31520__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31518 = null;if (arguments.length > 0) {
  p__31518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31518);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31521){
var p__31518 = cljs.core.seq(arglist__31521);
return watch_and_reload__delegate(p__31518);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
