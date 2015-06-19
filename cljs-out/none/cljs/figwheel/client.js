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
var log__delegate = function (p__39292,args){var map__39294 = p__39292;var map__39294__$1 = ((cljs.core.seq_QMARK_.call(null,map__39294))?cljs.core.apply.call(null,cljs.core.hash_map,map__39294):map__39294);var debug = cljs.core.get.call(null,map__39294__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__39292,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__39292,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__39295){
var p__39292 = cljs.core.first(arglist__39295);
var args = cljs.core.rest(arglist__39295);
return log__delegate(p__39292,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__39296){var map__39298 = p__39296;var map__39298__$1 = ((cljs.core.seq_QMARK_.call(null,map__39298))?cljs.core.apply.call(null,cljs.core.hash_map,map__39298):map__39298);var websocket_url = cljs.core.get.call(null,map__39298__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__39299,callback){var map__39301 = p__39299;var map__39301__$1 = ((cljs.core.seq_QMARK_.call(null,map__39301))?cljs.core.apply.call(null,cljs.core.hash_map,map__39301):map__39301);var msg = map__39301__$1;var dependency_file = cljs.core.get.call(null,map__39301__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__39301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__39301__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11552__auto__ = dependency_file;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__39301,map__39301__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__39301,map__39301__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__39302,p__39303){var map__39306 = p__39302;var map__39306__$1 = ((cljs.core.seq_QMARK_.call(null,map__39306))?cljs.core.apply.call(null,cljs.core.hash_map,map__39306):map__39306);var opts = map__39306__$1;var url_rewriter = cljs.core.get.call(null,map__39306__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__39307 = p__39303;var map__39307__$1 = ((cljs.core.seq_QMARK_.call(null,map__39307))?cljs.core.apply.call(null,cljs.core.hash_map,map__39307):map__39307);var d = map__39307__$1;var file = cljs.core.get.call(null,map__39307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__39308,p__39309){var map__39351 = p__39308;var map__39351__$1 = ((cljs.core.seq_QMARK_.call(null,map__39351))?cljs.core.apply.call(null,cljs.core.hash_map,map__39351):map__39351);var opts = map__39351__$1;var on_jsload = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__39352 = p__39309;var map__39352__$1 = ((cljs.core.seq_QMARK_.call(null,map__39352))?cljs.core.apply.call(null,cljs.core.hash_map,map__39352):map__39352);var files = cljs.core.get.call(null,map__39352__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files){
return (function (state_39375){var state_val_39376 = (state_39375[(1)]);if((state_val_39376 === (6)))
{var inst_39357 = (state_39375[(7)]);var inst_39366 = (state_39375[(2)]);var inst_39367 = cljs.core.PersistentVector.EMPTY_NODE;var inst_39368 = [inst_39357];var inst_39369 = (new cljs.core.PersistentVector(null,1,(5),inst_39367,inst_39368,null));var inst_39370 = cljs.core.apply.call(null,on_jsload,inst_39369);var state_39375__$1 = (function (){var statearr_39377 = state_39375;(statearr_39377[(8)] = inst_39366);
return statearr_39377;
})();var statearr_39378_39392 = state_39375__$1;(statearr_39378_39392[(2)] = inst_39370);
(statearr_39378_39392[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39376 === (5)))
{var inst_39373 = (state_39375[(2)]);var state_39375__$1 = state_39375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39375__$1,inst_39373);
} else
{if((state_val_39376 === (4)))
{var state_39375__$1 = state_39375;var statearr_39379_39393 = state_39375__$1;(statearr_39379_39393[(2)] = null);
(statearr_39379_39393[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39376 === (3)))
{var inst_39357 = (state_39375[(7)]);var inst_39360 = console.debug("Figwheel: loaded these files");var inst_39361 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39357);var inst_39362 = cljs.core.prn_str.call(null,inst_39361);var inst_39363 = console.log(inst_39362);var inst_39364 = cljs.core.async.timeout.call(null,(10));var state_39375__$1 = (function (){var statearr_39380 = state_39375;(statearr_39380[(9)] = inst_39360);
(statearr_39380[(10)] = inst_39363);
return statearr_39380;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39375__$1,(6),inst_39364);
} else
{if((state_val_39376 === (2)))
{var inst_39357 = (state_39375[(7)]);var inst_39357__$1 = (state_39375[(2)]);var inst_39358 = cljs.core.not_empty.call(null,inst_39357__$1);var state_39375__$1 = (function (){var statearr_39381 = state_39375;(statearr_39381[(7)] = inst_39357__$1);
return statearr_39381;
})();if(cljs.core.truth_(inst_39358))
{var statearr_39382_39394 = state_39375__$1;(statearr_39382_39394[(1)] = (3));
} else
{var statearr_39383_39395 = state_39375__$1;(statearr_39383_39395[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39376 === (1)))
{var inst_39353 = before_jsload.call(null,files);var inst_39354 = figwheel.client.add_request_urls.call(null,opts,files);var inst_39355 = figwheel.client.load_all_js_files.call(null,inst_39354);var state_39375__$1 = (function (){var statearr_39384 = state_39375;(statearr_39384[(11)] = inst_39353);
return statearr_39384;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39375__$1,(2),inst_39355);
} else
{return null;
}
}
}
}
}
}
});})(c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files))
;return ((function (switch__16718__auto__,c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_39388 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39388[(0)] = state_machine__16719__auto__);
(statearr_39388[(1)] = (1));
return statearr_39388;
});
var state_machine__16719__auto____1 = (function (state_39375){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_39375);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e39389){if((e39389 instanceof Object))
{var ex__16722__auto__ = e39389;var statearr_39390_39396 = state_39375;(statearr_39390_39396[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39389;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39397 = state_39375;
state_39375 = G__39397;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_39375){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_39375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files))
})();var state__16735__auto__ = (function (){var statearr_39391 = f__16734__auto__.call(null);(statearr_39391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_39391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,map__39351,map__39351__$1,opts,on_jsload,before_jsload,map__39352,map__39352__$1,files))
);
return c__16733__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__39398,link_href){var map__39400 = p__39398;var map__39400__$1 = ((cljs.core.seq_QMARK_.call(null,map__39400))?cljs.core.apply.call(null,cljs.core.hash_map,map__39400):map__39400);var request_url = cljs.core.get.call(null,map__39400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__39400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,parent){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,parent){
return (function (state_39421){var state_val_39422 = (state_39421[(1)]);if((state_val_39422 === (2)))
{var inst_39418 = (state_39421[(2)]);var inst_39419 = parent.removeChild(orig_link);var state_39421__$1 = (function (){var statearr_39423 = state_39421;(statearr_39423[(7)] = inst_39418);
return statearr_39423;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39421__$1,inst_39419);
} else
{if((state_val_39422 === (1)))
{var inst_39416 = cljs.core.async.timeout.call(null,(200));var state_39421__$1 = state_39421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39421__$1,(2),inst_39416);
} else
{return null;
}
}
});})(c__16733__auto__,parent))
;return ((function (switch__16718__auto__,c__16733__auto__,parent){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_39427 = [null,null,null,null,null,null,null,null];(statearr_39427[(0)] = state_machine__16719__auto__);
(statearr_39427[(1)] = (1));
return statearr_39427;
});
var state_machine__16719__auto____1 = (function (state_39421){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_39421);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e39428){if((e39428 instanceof Object))
{var ex__16722__auto__ = e39428;var statearr_39429_39431 = state_39421;(statearr_39429_39431[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39432 = state_39421;
state_39421 = G__39432;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_39421){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_39421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,parent))
})();var state__16735__auto__ = (function (){var statearr_39430 = f__16734__auto__.call(null);(statearr_39430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_39430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,parent))
);
return c__16733__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__39433){var map__39435 = p__39433;var map__39435__$1 = ((cljs.core.seq_QMARK_.call(null,map__39435))?cljs.core.apply.call(null,cljs.core.hash_map,map__39435):map__39435);var f_data = map__39435__$1;var request_url = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__39436,files_msg){var map__39458 = p__39436;var map__39458__$1 = ((cljs.core.seq_QMARK_.call(null,map__39458))?cljs.core.apply.call(null,cljs.core.hash_map,map__39458):map__39458);var opts = map__39458__$1;var on_cssload = cljs.core.get.call(null,map__39458__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__39459_39479 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__39460_39480 = null;var count__39461_39481 = (0);var i__39462_39482 = (0);while(true){
if((i__39462_39482 < count__39461_39481))
{var f_39483 = cljs.core._nth.call(null,chunk__39460_39480,i__39462_39482);figwheel.client.reload_css_file.call(null,f_39483);
{
var G__39484 = seq__39459_39479;
var G__39485 = chunk__39460_39480;
var G__39486 = count__39461_39481;
var G__39487 = (i__39462_39482 + (1));
seq__39459_39479 = G__39484;
chunk__39460_39480 = G__39485;
count__39461_39481 = G__39486;
i__39462_39482 = G__39487;
continue;
}
} else
{var temp__4126__auto___39488 = cljs.core.seq.call(null,seq__39459_39479);if(temp__4126__auto___39488)
{var seq__39459_39489__$1 = temp__4126__auto___39488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39459_39489__$1))
{var c__12321__auto___39490 = cljs.core.chunk_first.call(null,seq__39459_39489__$1);{
var G__39491 = cljs.core.chunk_rest.call(null,seq__39459_39489__$1);
var G__39492 = c__12321__auto___39490;
var G__39493 = cljs.core.count.call(null,c__12321__auto___39490);
var G__39494 = (0);
seq__39459_39479 = G__39491;
chunk__39460_39480 = G__39492;
count__39461_39481 = G__39493;
i__39462_39482 = G__39494;
continue;
}
} else
{var f_39495 = cljs.core.first.call(null,seq__39459_39489__$1);figwheel.client.reload_css_file.call(null,f_39495);
{
var G__39496 = cljs.core.next.call(null,seq__39459_39489__$1);
var G__39497 = null;
var G__39498 = (0);
var G__39499 = (0);
seq__39459_39479 = G__39496;
chunk__39460_39480 = G__39497;
count__39461_39481 = G__39498;
i__39462_39482 = G__39499;
continue;
}
}
} else
{}
}
break;
}
var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload){
return (function (state_39469){var state_val_39470 = (state_39469[(1)]);if((state_val_39470 === (2)))
{var inst_39465 = (state_39469[(2)]);var inst_39466 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_39467 = on_cssload.call(null,inst_39466);var state_39469__$1 = (function (){var statearr_39471 = state_39469;(statearr_39471[(7)] = inst_39465);
return statearr_39471;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39469__$1,inst_39467);
} else
{if((state_val_39470 === (1)))
{var inst_39463 = cljs.core.async.timeout.call(null,(100));var state_39469__$1 = state_39469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39469__$1,(2),inst_39463);
} else
{return null;
}
}
});})(c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload))
;return ((function (switch__16718__auto__,c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_39475 = [null,null,null,null,null,null,null,null];(statearr_39475[(0)] = state_machine__16719__auto__);
(statearr_39475[(1)] = (1));
return statearr_39475;
});
var state_machine__16719__auto____1 = (function (state_39469){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_39469);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e39476){if((e39476 instanceof Object))
{var ex__16722__auto__ = e39476;var statearr_39477_39500 = state_39469;(statearr_39477_39500[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39476;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39501 = state_39469;
state_39469 = G__39501;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_39469){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_39469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload))
})();var state__16735__auto__ = (function (){var statearr_39478 = f__16734__auto__.call(null);(statearr_39478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_39478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,map__39458,map__39458__$1,opts,on_cssload))
);
return c__16733__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__39502){var map__39507 = p__39502;var map__39507__$1 = ((cljs.core.seq_QMARK_.call(null,map__39507))?cljs.core.apply.call(null,cljs.core.hash_map,map__39507):map__39507);var opts = map__39507__$1;var on_compile_fail = cljs.core.get.call(null,map__39507__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__39507__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__39507__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__39507__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__39508 = cljs.core._EQ_;var expr__39509 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__39508.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__39509)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__39508.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__39509)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__39508.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39509)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__39507,map__39507__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj39514 = {"detail":url};return obj39514;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__39515){var map__39517 = p__39515;var map__39517__$1 = ((cljs.core.seq_QMARK_.call(null,map__39517))?cljs.core.apply.call(null,cljs.core.hash_map,map__39517):map__39517);var class$ = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__39518){var map__39524 = p__39518;var map__39524__$1 = ((cljs.core.seq_QMARK_.call(null,map__39524))?cljs.core.apply.call(null,cljs.core.hash_map,map__39524):map__39524);var ed = map__39524__$1;var exception_data = cljs.core.get.call(null,map__39524__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__39524__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__39525_39529 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__39526_39530 = null;var count__39527_39531 = (0);var i__39528_39532 = (0);while(true){
if((i__39528_39532 < count__39527_39531))
{var msg_39533 = cljs.core._nth.call(null,chunk__39526_39530,i__39528_39532);console.log(msg_39533);
{
var G__39534 = seq__39525_39529;
var G__39535 = chunk__39526_39530;
var G__39536 = count__39527_39531;
var G__39537 = (i__39528_39532 + (1));
seq__39525_39529 = G__39534;
chunk__39526_39530 = G__39535;
count__39527_39531 = G__39536;
i__39528_39532 = G__39537;
continue;
}
} else
{var temp__4126__auto___39538 = cljs.core.seq.call(null,seq__39525_39529);if(temp__4126__auto___39538)
{var seq__39525_39539__$1 = temp__4126__auto___39538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39525_39539__$1))
{var c__12321__auto___39540 = cljs.core.chunk_first.call(null,seq__39525_39539__$1);{
var G__39541 = cljs.core.chunk_rest.call(null,seq__39525_39539__$1);
var G__39542 = c__12321__auto___39540;
var G__39543 = cljs.core.count.call(null,c__12321__auto___39540);
var G__39544 = (0);
seq__39525_39529 = G__39541;
chunk__39526_39530 = G__39542;
count__39527_39531 = G__39543;
i__39528_39532 = G__39544;
continue;
}
} else
{var msg_39545 = cljs.core.first.call(null,seq__39525_39539__$1);console.log(msg_39545);
{
var G__39546 = cljs.core.next.call(null,seq__39525_39539__$1);
var G__39547 = null;
var G__39548 = (0);
var G__39549 = (0);
seq__39525_39529 = G__39546;
chunk__39526_39530 = G__39547;
count__39527_39531 = G__39548;
i__39528_39532 = G__39549;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11552__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
var watch_and_reload__delegate = function (p__39550){var map__39552 = p__39550;var map__39552__$1 = ((cljs.core.seq_QMARK_.call(null,map__39552))?cljs.core.apply.call(null,cljs.core.hash_map,map__39552):map__39552);var opts = map__39552__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__39550 = null;if (arguments.length > 0) {
  p__39550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__39550);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__39553){
var p__39550 = cljs.core.seq(arglist__39553);
return watch_and_reload__delegate(p__39550);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map