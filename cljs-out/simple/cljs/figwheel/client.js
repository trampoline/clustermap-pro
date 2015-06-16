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
var log__delegate = function (p__31366,args){var map__31368 = p__31366;var map__31368__$1 = ((cljs.core.seq_QMARK_.call(null,map__31368))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368):map__31368);var debug = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31366,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31366,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31369){
var p__31366 = cljs.core.first(arglist__31369);
var args = cljs.core.rest(arglist__31369);
return log__delegate(p__31366,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31370){var map__31372 = p__31370;var map__31372__$1 = ((cljs.core.seq_QMARK_.call(null,map__31372))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);var websocket_url = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31373,callback){var map__31375 = p__31373;var map__31375__$1 = ((cljs.core.seq_QMARK_.call(null,map__31375))?cljs.core.apply.call(null,cljs.core.hash_map,map__31375):map__31375);var msg = map__31375__$1;var dependency_file = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31375,map__31375__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31375,map__31375__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31376,p__31377){var map__31380 = p__31376;var map__31380__$1 = ((cljs.core.seq_QMARK_.call(null,map__31380))?cljs.core.apply.call(null,cljs.core.hash_map,map__31380):map__31380);var opts = map__31380__$1;var url_rewriter = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31381 = p__31377;var map__31381__$1 = ((cljs.core.seq_QMARK_.call(null,map__31381))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);var d = map__31381__$1;var file = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31382,p__31383){var map__31425 = p__31382;var map__31425__$1 = ((cljs.core.seq_QMARK_.call(null,map__31425))?cljs.core.apply.call(null,cljs.core.hash_map,map__31425):map__31425);var opts = map__31425__$1;var on_jsload = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31426 = p__31383;var map__31426__$1 = ((cljs.core.seq_QMARK_.call(null,map__31426))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);var files = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files){
return (function (state_31449){var state_val_31450 = (state_31449[(1)]);if((state_val_31450 === (6)))
{var inst_31431 = (state_31449[(7)]);var inst_31440 = (state_31449[(2)]);var inst_31441 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31442 = [inst_31431];var inst_31443 = (new cljs.core.PersistentVector(null,1,(5),inst_31441,inst_31442,null));var inst_31444 = cljs.core.apply.call(null,on_jsload,inst_31443);var state_31449__$1 = (function (){var statearr_31451 = state_31449;(statearr_31451[(8)] = inst_31440);
return statearr_31451;
})();var statearr_31452_31466 = state_31449__$1;(statearr_31452_31466[(2)] = inst_31444);
(statearr_31452_31466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31450 === (5)))
{var inst_31447 = (state_31449[(2)]);var state_31449__$1 = state_31449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31449__$1,inst_31447);
} else
{if((state_val_31450 === (4)))
{var state_31449__$1 = state_31449;var statearr_31453_31467 = state_31449__$1;(statearr_31453_31467[(2)] = null);
(statearr_31453_31467[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31450 === (3)))
{var inst_31431 = (state_31449[(7)]);var inst_31434 = console.debug("Figwheel: loaded these files");var inst_31435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31431);var inst_31436 = cljs.core.prn_str.call(null,inst_31435);var inst_31437 = console.log(inst_31436);var inst_31438 = cljs.core.async.timeout.call(null,(10));var state_31449__$1 = (function (){var statearr_31454 = state_31449;(statearr_31454[(9)] = inst_31437);
(statearr_31454[(10)] = inst_31434);
return statearr_31454;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31449__$1,(6),inst_31438);
} else
{if((state_val_31450 === (2)))
{var inst_31431 = (state_31449[(7)]);var inst_31431__$1 = (state_31449[(2)]);var inst_31432 = cljs.core.not_empty.call(null,inst_31431__$1);var state_31449__$1 = (function (){var statearr_31455 = state_31449;(statearr_31455[(7)] = inst_31431__$1);
return statearr_31455;
})();if(cljs.core.truth_(inst_31432))
{var statearr_31456_31468 = state_31449__$1;(statearr_31456_31468[(1)] = (3));
} else
{var statearr_31457_31469 = state_31449__$1;(statearr_31457_31469[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31450 === (1)))
{var inst_31427 = before_jsload.call(null,files);var inst_31428 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31429 = figwheel.client.load_all_js_files.call(null,inst_31428);var state_31449__$1 = (function (){var statearr_31458 = state_31449;(statearr_31458[(11)] = inst_31427);
return statearr_31458;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31449__$1,(2),inst_31429);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31462 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31462[(0)] = state_machine__9111__auto__);
(statearr_31462[(1)] = (1));
return statearr_31462;
});
var state_machine__9111__auto____1 = (function (state_31449){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31449);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31463){if((e31463 instanceof Object))
{var ex__9114__auto__ = e31463;var statearr_31464_31470 = state_31449;(statearr_31464_31470[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31449);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31463;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31471 = state_31449;
state_31449 = G__31471;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31449){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31465 = f__9126__auto__.call(null);(statearr_31465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31425,map__31425__$1,opts,on_jsload,before_jsload,map__31426,map__31426__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31472,link_href){var map__31474 = p__31472;var map__31474__$1 = ((cljs.core.seq_QMARK_.call(null,map__31474))?cljs.core.apply.call(null,cljs.core.hash_map,map__31474):map__31474);var request_url = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31495){var state_val_31496 = (state_31495[(1)]);if((state_val_31496 === (2)))
{var inst_31492 = (state_31495[(2)]);var inst_31493 = parent.removeChild(orig_link);var state_31495__$1 = (function (){var statearr_31497 = state_31495;(statearr_31497[(7)] = inst_31492);
return statearr_31497;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31495__$1,inst_31493);
} else
{if((state_val_31496 === (1)))
{var inst_31490 = cljs.core.async.timeout.call(null,(200));var state_31495__$1 = state_31495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31495__$1,(2),inst_31490);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31501 = [null,null,null,null,null,null,null,null];(statearr_31501[(0)] = state_machine__9111__auto__);
(statearr_31501[(1)] = (1));
return statearr_31501;
});
var state_machine__9111__auto____1 = (function (state_31495){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31495);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31502){if((e31502 instanceof Object))
{var ex__9114__auto__ = e31502;var statearr_31503_31505 = state_31495;(statearr_31503_31505[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31506 = state_31495;
state_31495 = G__31506;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31495){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31504 = f__9126__auto__.call(null);(statearr_31504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31504;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31507){var map__31509 = p__31507;var map__31509__$1 = ((cljs.core.seq_QMARK_.call(null,map__31509))?cljs.core.apply.call(null,cljs.core.hash_map,map__31509):map__31509);var f_data = map__31509__$1;var request_url = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31510,files_msg){var map__31532 = p__31510;var map__31532__$1 = ((cljs.core.seq_QMARK_.call(null,map__31532))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);var opts = map__31532__$1;var on_cssload = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31533_31553 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31534_31554 = null;var count__31535_31555 = (0);var i__31536_31556 = (0);while(true){
if((i__31536_31556 < count__31535_31555))
{var f_31557 = cljs.core._nth.call(null,chunk__31534_31554,i__31536_31556);figwheel.client.reload_css_file.call(null,f_31557);
{
var G__31558 = seq__31533_31553;
var G__31559 = chunk__31534_31554;
var G__31560 = count__31535_31555;
var G__31561 = (i__31536_31556 + (1));
seq__31533_31553 = G__31558;
chunk__31534_31554 = G__31559;
count__31535_31555 = G__31560;
i__31536_31556 = G__31561;
continue;
}
} else
{var temp__4126__auto___31562 = cljs.core.seq.call(null,seq__31533_31553);if(temp__4126__auto___31562)
{var seq__31533_31563__$1 = temp__4126__auto___31562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31533_31563__$1))
{var c__4408__auto___31564 = cljs.core.chunk_first.call(null,seq__31533_31563__$1);{
var G__31565 = cljs.core.chunk_rest.call(null,seq__31533_31563__$1);
var G__31566 = c__4408__auto___31564;
var G__31567 = cljs.core.count.call(null,c__4408__auto___31564);
var G__31568 = (0);
seq__31533_31553 = G__31565;
chunk__31534_31554 = G__31566;
count__31535_31555 = G__31567;
i__31536_31556 = G__31568;
continue;
}
} else
{var f_31569 = cljs.core.first.call(null,seq__31533_31563__$1);figwheel.client.reload_css_file.call(null,f_31569);
{
var G__31570 = cljs.core.next.call(null,seq__31533_31563__$1);
var G__31571 = null;
var G__31572 = (0);
var G__31573 = (0);
seq__31533_31553 = G__31570;
chunk__31534_31554 = G__31571;
count__31535_31555 = G__31572;
i__31536_31556 = G__31573;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload){
return (function (state_31543){var state_val_31544 = (state_31543[(1)]);if((state_val_31544 === (2)))
{var inst_31539 = (state_31543[(2)]);var inst_31540 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31541 = on_cssload.call(null,inst_31540);var state_31543__$1 = (function (){var statearr_31545 = state_31543;(statearr_31545[(7)] = inst_31539);
return statearr_31545;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else
{if((state_val_31544 === (1)))
{var inst_31537 = cljs.core.async.timeout.call(null,(100));var state_31543__$1 = state_31543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(2),inst_31537);
} else
{return null;
}
}
});})(c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31549 = [null,null,null,null,null,null,null,null];(statearr_31549[(0)] = state_machine__9111__auto__);
(statearr_31549[(1)] = (1));
return statearr_31549;
});
var state_machine__9111__auto____1 = (function (state_31543){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31543);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31550){if((e31550 instanceof Object))
{var ex__9114__auto__ = e31550;var statearr_31551_31574 = state_31543;(statearr_31551_31574[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31575 = state_31543;
state_31543 = G__31575;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31552 = f__9126__auto__.call(null);(statearr_31552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31532,map__31532__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31576){var map__31581 = p__31576;var map__31581__$1 = ((cljs.core.seq_QMARK_.call(null,map__31581))?cljs.core.apply.call(null,cljs.core.hash_map,map__31581):map__31581);var opts = map__31581__$1;var on_compile_fail = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31582 = cljs.core._EQ_;var expr__31583 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31582.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31583)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31582.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31583)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31582.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31583)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31581,map__31581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31588 = {"detail":url};return obj31588;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31589){var map__31591 = p__31589;var map__31591__$1 = ((cljs.core.seq_QMARK_.call(null,map__31591))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591):map__31591);var class$ = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31592){var map__31598 = p__31592;var map__31598__$1 = ((cljs.core.seq_QMARK_.call(null,map__31598))?cljs.core.apply.call(null,cljs.core.hash_map,map__31598):map__31598);var ed = map__31598__$1;var exception_data = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31599_31603 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31600_31604 = null;var count__31601_31605 = (0);var i__31602_31606 = (0);while(true){
if((i__31602_31606 < count__31601_31605))
{var msg_31607 = cljs.core._nth.call(null,chunk__31600_31604,i__31602_31606);console.log(msg_31607);
{
var G__31608 = seq__31599_31603;
var G__31609 = chunk__31600_31604;
var G__31610 = count__31601_31605;
var G__31611 = (i__31602_31606 + (1));
seq__31599_31603 = G__31608;
chunk__31600_31604 = G__31609;
count__31601_31605 = G__31610;
i__31602_31606 = G__31611;
continue;
}
} else
{var temp__4126__auto___31612 = cljs.core.seq.call(null,seq__31599_31603);if(temp__4126__auto___31612)
{var seq__31599_31613__$1 = temp__4126__auto___31612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31599_31613__$1))
{var c__4408__auto___31614 = cljs.core.chunk_first.call(null,seq__31599_31613__$1);{
var G__31615 = cljs.core.chunk_rest.call(null,seq__31599_31613__$1);
var G__31616 = c__4408__auto___31614;
var G__31617 = cljs.core.count.call(null,c__4408__auto___31614);
var G__31618 = (0);
seq__31599_31603 = G__31615;
chunk__31600_31604 = G__31616;
count__31601_31605 = G__31617;
i__31602_31606 = G__31618;
continue;
}
} else
{var msg_31619 = cljs.core.first.call(null,seq__31599_31613__$1);console.log(msg_31619);
{
var G__31620 = cljs.core.next.call(null,seq__31599_31613__$1);
var G__31621 = null;
var G__31622 = (0);
var G__31623 = (0);
seq__31599_31603 = G__31620;
chunk__31600_31604 = G__31621;
count__31601_31605 = G__31622;
i__31602_31606 = G__31623;
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
var watch_and_reload__delegate = function (p__31624){var map__31626 = p__31624;var map__31626__$1 = ((cljs.core.seq_QMARK_.call(null,map__31626))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);var opts = map__31626__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31624 = null;if (arguments.length > 0) {
  p__31624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31624);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31627){
var p__31624 = cljs.core.seq(arglist__31627);
return watch_and_reload__delegate(p__31624);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
