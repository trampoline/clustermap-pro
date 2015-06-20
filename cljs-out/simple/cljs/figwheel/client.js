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
var log__delegate = function (p__31412,args){var map__31414 = p__31412;var map__31414__$1 = ((cljs.core.seq_QMARK_.call(null,map__31414))?cljs.core.apply.call(null,cljs.core.hash_map,map__31414):map__31414);var debug = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31412,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31412,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31415){
var p__31412 = cljs.core.first(arglist__31415);
var args = cljs.core.rest(arglist__31415);
return log__delegate(p__31412,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31416){var map__31418 = p__31416;var map__31418__$1 = ((cljs.core.seq_QMARK_.call(null,map__31418))?cljs.core.apply.call(null,cljs.core.hash_map,map__31418):map__31418);var websocket_url = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31419,callback){var map__31421 = p__31419;var map__31421__$1 = ((cljs.core.seq_QMARK_.call(null,map__31421))?cljs.core.apply.call(null,cljs.core.hash_map,map__31421):map__31421);var msg = map__31421__$1;var dependency_file = cljs.core.get.call(null,map__31421__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31421__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31421__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31421,map__31421__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31421,map__31421__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31422,p__31423){var map__31426 = p__31422;var map__31426__$1 = ((cljs.core.seq_QMARK_.call(null,map__31426))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);var opts = map__31426__$1;var url_rewriter = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31427 = p__31423;var map__31427__$1 = ((cljs.core.seq_QMARK_.call(null,map__31427))?cljs.core.apply.call(null,cljs.core.hash_map,map__31427):map__31427);var d = map__31427__$1;var file = cljs.core.get.call(null,map__31427__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31428,p__31429){var map__31471 = p__31428;var map__31471__$1 = ((cljs.core.seq_QMARK_.call(null,map__31471))?cljs.core.apply.call(null,cljs.core.hash_map,map__31471):map__31471);var opts = map__31471__$1;var on_jsload = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31472 = p__31429;var map__31472__$1 = ((cljs.core.seq_QMARK_.call(null,map__31472))?cljs.core.apply.call(null,cljs.core.hash_map,map__31472):map__31472);var files = cljs.core.get.call(null,map__31472__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files){
return (function (state_31495){var state_val_31496 = (state_31495[(1)]);if((state_val_31496 === (6)))
{var inst_31477 = (state_31495[(7)]);var inst_31486 = (state_31495[(2)]);var inst_31487 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31488 = [inst_31477];var inst_31489 = (new cljs.core.PersistentVector(null,1,(5),inst_31487,inst_31488,null));var inst_31490 = cljs.core.apply.call(null,on_jsload,inst_31489);var state_31495__$1 = (function (){var statearr_31497 = state_31495;(statearr_31497[(8)] = inst_31486);
return statearr_31497;
})();var statearr_31498_31512 = state_31495__$1;(statearr_31498_31512[(2)] = inst_31490);
(statearr_31498_31512[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31496 === (5)))
{var inst_31493 = (state_31495[(2)]);var state_31495__$1 = state_31495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31495__$1,inst_31493);
} else
{if((state_val_31496 === (4)))
{var state_31495__$1 = state_31495;var statearr_31499_31513 = state_31495__$1;(statearr_31499_31513[(2)] = null);
(statearr_31499_31513[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31496 === (3)))
{var inst_31477 = (state_31495[(7)]);var inst_31480 = console.debug("Figwheel: loaded these files");var inst_31481 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31477);var inst_31482 = cljs.core.prn_str.call(null,inst_31481);var inst_31483 = console.log(inst_31482);var inst_31484 = cljs.core.async.timeout.call(null,(10));var state_31495__$1 = (function (){var statearr_31500 = state_31495;(statearr_31500[(9)] = inst_31483);
(statearr_31500[(10)] = inst_31480);
return statearr_31500;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31495__$1,(6),inst_31484);
} else
{if((state_val_31496 === (2)))
{var inst_31477 = (state_31495[(7)]);var inst_31477__$1 = (state_31495[(2)]);var inst_31478 = cljs.core.not_empty.call(null,inst_31477__$1);var state_31495__$1 = (function (){var statearr_31501 = state_31495;(statearr_31501[(7)] = inst_31477__$1);
return statearr_31501;
})();if(cljs.core.truth_(inst_31478))
{var statearr_31502_31514 = state_31495__$1;(statearr_31502_31514[(1)] = (3));
} else
{var statearr_31503_31515 = state_31495__$1;(statearr_31503_31515[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31496 === (1)))
{var inst_31473 = before_jsload.call(null,files);var inst_31474 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31475 = figwheel.client.load_all_js_files.call(null,inst_31474);var state_31495__$1 = (function (){var statearr_31504 = state_31495;(statearr_31504[(11)] = inst_31473);
return statearr_31504;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31495__$1,(2),inst_31475);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31508 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31508[(0)] = state_machine__9111__auto__);
(statearr_31508[(1)] = (1));
return statearr_31508;
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
}catch (e31509){if((e31509 instanceof Object))
{var ex__9114__auto__ = e31509;var statearr_31510_31516 = state_31495;(statearr_31510_31516[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31517 = state_31495;
state_31495 = G__31517;
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
;})(switch__9110__auto__,c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31511 = f__9126__auto__.call(null);(statearr_31511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31471,map__31471__$1,opts,on_jsload,before_jsload,map__31472,map__31472__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31518,link_href){var map__31520 = p__31518;var map__31520__$1 = ((cljs.core.seq_QMARK_.call(null,map__31520))?cljs.core.apply.call(null,cljs.core.hash_map,map__31520):map__31520);var request_url = cljs.core.get.call(null,map__31520__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31541){var state_val_31542 = (state_31541[(1)]);if((state_val_31542 === (2)))
{var inst_31538 = (state_31541[(2)]);var inst_31539 = parent.removeChild(orig_link);var state_31541__$1 = (function (){var statearr_31543 = state_31541;(statearr_31543[(7)] = inst_31538);
return statearr_31543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31541__$1,inst_31539);
} else
{if((state_val_31542 === (1)))
{var inst_31536 = cljs.core.async.timeout.call(null,(200));var state_31541__$1 = state_31541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31541__$1,(2),inst_31536);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31547 = [null,null,null,null,null,null,null,null];(statearr_31547[(0)] = state_machine__9111__auto__);
(statearr_31547[(1)] = (1));
return statearr_31547;
});
var state_machine__9111__auto____1 = (function (state_31541){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31541);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31548){if((e31548 instanceof Object))
{var ex__9114__auto__ = e31548;var statearr_31549_31551 = state_31541;(statearr_31549_31551[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31548;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31552 = state_31541;
state_31541 = G__31552;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31550 = f__9126__auto__.call(null);(statearr_31550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31550;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31553){var map__31555 = p__31553;var map__31555__$1 = ((cljs.core.seq_QMARK_.call(null,map__31555))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);var f_data = map__31555__$1;var request_url = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31556,files_msg){var map__31578 = p__31556;var map__31578__$1 = ((cljs.core.seq_QMARK_.call(null,map__31578))?cljs.core.apply.call(null,cljs.core.hash_map,map__31578):map__31578);var opts = map__31578__$1;var on_cssload = cljs.core.get.call(null,map__31578__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31579_31599 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31580_31600 = null;var count__31581_31601 = (0);var i__31582_31602 = (0);while(true){
if((i__31582_31602 < count__31581_31601))
{var f_31603 = cljs.core._nth.call(null,chunk__31580_31600,i__31582_31602);figwheel.client.reload_css_file.call(null,f_31603);
{
var G__31604 = seq__31579_31599;
var G__31605 = chunk__31580_31600;
var G__31606 = count__31581_31601;
var G__31607 = (i__31582_31602 + (1));
seq__31579_31599 = G__31604;
chunk__31580_31600 = G__31605;
count__31581_31601 = G__31606;
i__31582_31602 = G__31607;
continue;
}
} else
{var temp__4126__auto___31608 = cljs.core.seq.call(null,seq__31579_31599);if(temp__4126__auto___31608)
{var seq__31579_31609__$1 = temp__4126__auto___31608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31579_31609__$1))
{var c__4408__auto___31610 = cljs.core.chunk_first.call(null,seq__31579_31609__$1);{
var G__31611 = cljs.core.chunk_rest.call(null,seq__31579_31609__$1);
var G__31612 = c__4408__auto___31610;
var G__31613 = cljs.core.count.call(null,c__4408__auto___31610);
var G__31614 = (0);
seq__31579_31599 = G__31611;
chunk__31580_31600 = G__31612;
count__31581_31601 = G__31613;
i__31582_31602 = G__31614;
continue;
}
} else
{var f_31615 = cljs.core.first.call(null,seq__31579_31609__$1);figwheel.client.reload_css_file.call(null,f_31615);
{
var G__31616 = cljs.core.next.call(null,seq__31579_31609__$1);
var G__31617 = null;
var G__31618 = (0);
var G__31619 = (0);
seq__31579_31599 = G__31616;
chunk__31580_31600 = G__31617;
count__31581_31601 = G__31618;
i__31582_31602 = G__31619;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload){
return (function (state_31589){var state_val_31590 = (state_31589[(1)]);if((state_val_31590 === (2)))
{var inst_31585 = (state_31589[(2)]);var inst_31586 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31587 = on_cssload.call(null,inst_31586);var state_31589__$1 = (function (){var statearr_31591 = state_31589;(statearr_31591[(7)] = inst_31585);
return statearr_31591;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31589__$1,inst_31587);
} else
{if((state_val_31590 === (1)))
{var inst_31583 = cljs.core.async.timeout.call(null,(100));var state_31589__$1 = state_31589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31589__$1,(2),inst_31583);
} else
{return null;
}
}
});})(c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31595 = [null,null,null,null,null,null,null,null];(statearr_31595[(0)] = state_machine__9111__auto__);
(statearr_31595[(1)] = (1));
return statearr_31595;
});
var state_machine__9111__auto____1 = (function (state_31589){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31589);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31596){if((e31596 instanceof Object))
{var ex__9114__auto__ = e31596;var statearr_31597_31620 = state_31589;(statearr_31597_31620[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31596;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31621 = state_31589;
state_31589 = G__31621;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31598 = f__9126__auto__.call(null);(statearr_31598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31578,map__31578__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31622){var map__31627 = p__31622;var map__31627__$1 = ((cljs.core.seq_QMARK_.call(null,map__31627))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);var opts = map__31627__$1;var on_compile_fail = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31628 = cljs.core._EQ_;var expr__31629 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31628.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31629)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31628.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31629)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31628.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31629)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31627,map__31627__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31634 = {"detail":url};return obj31634;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31635){var map__31637 = p__31635;var map__31637__$1 = ((cljs.core.seq_QMARK_.call(null,map__31637))?cljs.core.apply.call(null,cljs.core.hash_map,map__31637):map__31637);var class$ = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31638){var map__31644 = p__31638;var map__31644__$1 = ((cljs.core.seq_QMARK_.call(null,map__31644))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);var ed = map__31644__$1;var exception_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31645_31649 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31646_31650 = null;var count__31647_31651 = (0);var i__31648_31652 = (0);while(true){
if((i__31648_31652 < count__31647_31651))
{var msg_31653 = cljs.core._nth.call(null,chunk__31646_31650,i__31648_31652);console.log(msg_31653);
{
var G__31654 = seq__31645_31649;
var G__31655 = chunk__31646_31650;
var G__31656 = count__31647_31651;
var G__31657 = (i__31648_31652 + (1));
seq__31645_31649 = G__31654;
chunk__31646_31650 = G__31655;
count__31647_31651 = G__31656;
i__31648_31652 = G__31657;
continue;
}
} else
{var temp__4126__auto___31658 = cljs.core.seq.call(null,seq__31645_31649);if(temp__4126__auto___31658)
{var seq__31645_31659__$1 = temp__4126__auto___31658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31645_31659__$1))
{var c__4408__auto___31660 = cljs.core.chunk_first.call(null,seq__31645_31659__$1);{
var G__31661 = cljs.core.chunk_rest.call(null,seq__31645_31659__$1);
var G__31662 = c__4408__auto___31660;
var G__31663 = cljs.core.count.call(null,c__4408__auto___31660);
var G__31664 = (0);
seq__31645_31649 = G__31661;
chunk__31646_31650 = G__31662;
count__31647_31651 = G__31663;
i__31648_31652 = G__31664;
continue;
}
} else
{var msg_31665 = cljs.core.first.call(null,seq__31645_31659__$1);console.log(msg_31665);
{
var G__31666 = cljs.core.next.call(null,seq__31645_31659__$1);
var G__31667 = null;
var G__31668 = (0);
var G__31669 = (0);
seq__31645_31649 = G__31666;
chunk__31646_31650 = G__31667;
count__31647_31651 = G__31668;
i__31648_31652 = G__31669;
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
var watch_and_reload__delegate = function (p__31670){var map__31672 = p__31670;var map__31672__$1 = ((cljs.core.seq_QMARK_.call(null,map__31672))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);var opts = map__31672__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31670 = null;if (arguments.length > 0) {
  p__31670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31670);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31673){
var p__31670 = cljs.core.seq(arglist__31673);
return watch_and_reload__delegate(p__31670);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
