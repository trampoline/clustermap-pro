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
var log__delegate = function (p__31394,args){var map__31396 = p__31394;var map__31396__$1 = ((cljs.core.seq_QMARK_.call(null,map__31396))?cljs.core.apply.call(null,cljs.core.hash_map,map__31396):map__31396);var debug = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31394,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31394,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31397){
var p__31394 = cljs.core.first(arglist__31397);
var args = cljs.core.rest(arglist__31397);
return log__delegate(p__31394,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31398){var map__31400 = p__31398;var map__31400__$1 = ((cljs.core.seq_QMARK_.call(null,map__31400))?cljs.core.apply.call(null,cljs.core.hash_map,map__31400):map__31400);var websocket_url = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31401,callback){var map__31403 = p__31401;var map__31403__$1 = ((cljs.core.seq_QMARK_.call(null,map__31403))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);var msg = map__31403__$1;var dependency_file = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31403,map__31403__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31403,map__31403__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31404,p__31405){var map__31408 = p__31404;var map__31408__$1 = ((cljs.core.seq_QMARK_.call(null,map__31408))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);var opts = map__31408__$1;var url_rewriter = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31409 = p__31405;var map__31409__$1 = ((cljs.core.seq_QMARK_.call(null,map__31409))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);var d = map__31409__$1;var file = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31410,p__31411){var map__31453 = p__31410;var map__31453__$1 = ((cljs.core.seq_QMARK_.call(null,map__31453))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453):map__31453);var opts = map__31453__$1;var on_jsload = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31454 = p__31411;var map__31454__$1 = ((cljs.core.seq_QMARK_.call(null,map__31454))?cljs.core.apply.call(null,cljs.core.hash_map,map__31454):map__31454);var files = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files){
return (function (state_31477){var state_val_31478 = (state_31477[(1)]);if((state_val_31478 === (6)))
{var inst_31459 = (state_31477[(7)]);var inst_31468 = (state_31477[(2)]);var inst_31469 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31470 = [inst_31459];var inst_31471 = (new cljs.core.PersistentVector(null,1,(5),inst_31469,inst_31470,null));var inst_31472 = cljs.core.apply.call(null,on_jsload,inst_31471);var state_31477__$1 = (function (){var statearr_31479 = state_31477;(statearr_31479[(8)] = inst_31468);
return statearr_31479;
})();var statearr_31480_31494 = state_31477__$1;(statearr_31480_31494[(2)] = inst_31472);
(statearr_31480_31494[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31478 === (5)))
{var inst_31475 = (state_31477[(2)]);var state_31477__$1 = state_31477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31477__$1,inst_31475);
} else
{if((state_val_31478 === (4)))
{var state_31477__$1 = state_31477;var statearr_31481_31495 = state_31477__$1;(statearr_31481_31495[(2)] = null);
(statearr_31481_31495[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31478 === (3)))
{var inst_31459 = (state_31477[(7)]);var inst_31462 = console.debug("Figwheel: loaded these files");var inst_31463 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31459);var inst_31464 = cljs.core.prn_str.call(null,inst_31463);var inst_31465 = console.log(inst_31464);var inst_31466 = cljs.core.async.timeout.call(null,(10));var state_31477__$1 = (function (){var statearr_31482 = state_31477;(statearr_31482[(9)] = inst_31462);
(statearr_31482[(10)] = inst_31465);
return statearr_31482;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(6),inst_31466);
} else
{if((state_val_31478 === (2)))
{var inst_31459 = (state_31477[(7)]);var inst_31459__$1 = (state_31477[(2)]);var inst_31460 = cljs.core.not_empty.call(null,inst_31459__$1);var state_31477__$1 = (function (){var statearr_31483 = state_31477;(statearr_31483[(7)] = inst_31459__$1);
return statearr_31483;
})();if(cljs.core.truth_(inst_31460))
{var statearr_31484_31496 = state_31477__$1;(statearr_31484_31496[(1)] = (3));
} else
{var statearr_31485_31497 = state_31477__$1;(statearr_31485_31497[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31478 === (1)))
{var inst_31455 = before_jsload.call(null,files);var inst_31456 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31457 = figwheel.client.load_all_js_files.call(null,inst_31456);var state_31477__$1 = (function (){var statearr_31486 = state_31477;(statearr_31486[(11)] = inst_31455);
return statearr_31486;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(2),inst_31457);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31490 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31490[(0)] = state_machine__9111__auto__);
(statearr_31490[(1)] = (1));
return statearr_31490;
});
var state_machine__9111__auto____1 = (function (state_31477){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31477);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31491){if((e31491 instanceof Object))
{var ex__9114__auto__ = e31491;var statearr_31492_31498 = state_31477;(statearr_31492_31498[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31499 = state_31477;
state_31477 = G__31499;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31477){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31493 = f__9126__auto__.call(null);(statearr_31493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31453,map__31453__$1,opts,on_jsload,before_jsload,map__31454,map__31454__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31500,link_href){var map__31502 = p__31500;var map__31502__$1 = ((cljs.core.seq_QMARK_.call(null,map__31502))?cljs.core.apply.call(null,cljs.core.hash_map,map__31502):map__31502);var request_url = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31523){var state_val_31524 = (state_31523[(1)]);if((state_val_31524 === (2)))
{var inst_31520 = (state_31523[(2)]);var inst_31521 = parent.removeChild(orig_link);var state_31523__$1 = (function (){var statearr_31525 = state_31523;(statearr_31525[(7)] = inst_31520);
return statearr_31525;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31523__$1,inst_31521);
} else
{if((state_val_31524 === (1)))
{var inst_31518 = cljs.core.async.timeout.call(null,(200));var state_31523__$1 = state_31523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31523__$1,(2),inst_31518);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31529 = [null,null,null,null,null,null,null,null];(statearr_31529[(0)] = state_machine__9111__auto__);
(statearr_31529[(1)] = (1));
return statearr_31529;
});
var state_machine__9111__auto____1 = (function (state_31523){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31523);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31530){if((e31530 instanceof Object))
{var ex__9114__auto__ = e31530;var statearr_31531_31533 = state_31523;(statearr_31531_31533[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31530;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31534 = state_31523;
state_31523 = G__31534;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31523){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31532 = f__9126__auto__.call(null);(statearr_31532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31532;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31535){var map__31537 = p__31535;var map__31537__$1 = ((cljs.core.seq_QMARK_.call(null,map__31537))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);var f_data = map__31537__$1;var request_url = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31538,files_msg){var map__31560 = p__31538;var map__31560__$1 = ((cljs.core.seq_QMARK_.call(null,map__31560))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);var opts = map__31560__$1;var on_cssload = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31561_31581 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31562_31582 = null;var count__31563_31583 = (0);var i__31564_31584 = (0);while(true){
if((i__31564_31584 < count__31563_31583))
{var f_31585 = cljs.core._nth.call(null,chunk__31562_31582,i__31564_31584);figwheel.client.reload_css_file.call(null,f_31585);
{
var G__31586 = seq__31561_31581;
var G__31587 = chunk__31562_31582;
var G__31588 = count__31563_31583;
var G__31589 = (i__31564_31584 + (1));
seq__31561_31581 = G__31586;
chunk__31562_31582 = G__31587;
count__31563_31583 = G__31588;
i__31564_31584 = G__31589;
continue;
}
} else
{var temp__4126__auto___31590 = cljs.core.seq.call(null,seq__31561_31581);if(temp__4126__auto___31590)
{var seq__31561_31591__$1 = temp__4126__auto___31590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31561_31591__$1))
{var c__4408__auto___31592 = cljs.core.chunk_first.call(null,seq__31561_31591__$1);{
var G__31593 = cljs.core.chunk_rest.call(null,seq__31561_31591__$1);
var G__31594 = c__4408__auto___31592;
var G__31595 = cljs.core.count.call(null,c__4408__auto___31592);
var G__31596 = (0);
seq__31561_31581 = G__31593;
chunk__31562_31582 = G__31594;
count__31563_31583 = G__31595;
i__31564_31584 = G__31596;
continue;
}
} else
{var f_31597 = cljs.core.first.call(null,seq__31561_31591__$1);figwheel.client.reload_css_file.call(null,f_31597);
{
var G__31598 = cljs.core.next.call(null,seq__31561_31591__$1);
var G__31599 = null;
var G__31600 = (0);
var G__31601 = (0);
seq__31561_31581 = G__31598;
chunk__31562_31582 = G__31599;
count__31563_31583 = G__31600;
i__31564_31584 = G__31601;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload){
return (function (state_31571){var state_val_31572 = (state_31571[(1)]);if((state_val_31572 === (2)))
{var inst_31567 = (state_31571[(2)]);var inst_31568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31569 = on_cssload.call(null,inst_31568);var state_31571__$1 = (function (){var statearr_31573 = state_31571;(statearr_31573[(7)] = inst_31567);
return statearr_31573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31571__$1,inst_31569);
} else
{if((state_val_31572 === (1)))
{var inst_31565 = cljs.core.async.timeout.call(null,(100));var state_31571__$1 = state_31571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31571__$1,(2),inst_31565);
} else
{return null;
}
}
});})(c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31577 = [null,null,null,null,null,null,null,null];(statearr_31577[(0)] = state_machine__9111__auto__);
(statearr_31577[(1)] = (1));
return statearr_31577;
});
var state_machine__9111__auto____1 = (function (state_31571){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31571);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31578){if((e31578 instanceof Object))
{var ex__9114__auto__ = e31578;var statearr_31579_31602 = state_31571;(statearr_31579_31602[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31578;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31603 = state_31571;
state_31571 = G__31603;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31571){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31580 = f__9126__auto__.call(null);(statearr_31580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31560,map__31560__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31604){var map__31609 = p__31604;var map__31609__$1 = ((cljs.core.seq_QMARK_.call(null,map__31609))?cljs.core.apply.call(null,cljs.core.hash_map,map__31609):map__31609);var opts = map__31609__$1;var on_compile_fail = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31610 = cljs.core._EQ_;var expr__31611 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31610.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31611)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31610.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31611)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31610.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31611)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31609,map__31609__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31616 = {"detail":url};return obj31616;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31617){var map__31619 = p__31617;var map__31619__$1 = ((cljs.core.seq_QMARK_.call(null,map__31619))?cljs.core.apply.call(null,cljs.core.hash_map,map__31619):map__31619);var class$ = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31620){var map__31626 = p__31620;var map__31626__$1 = ((cljs.core.seq_QMARK_.call(null,map__31626))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);var ed = map__31626__$1;var exception_data = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31627_31631 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31628_31632 = null;var count__31629_31633 = (0);var i__31630_31634 = (0);while(true){
if((i__31630_31634 < count__31629_31633))
{var msg_31635 = cljs.core._nth.call(null,chunk__31628_31632,i__31630_31634);console.log(msg_31635);
{
var G__31636 = seq__31627_31631;
var G__31637 = chunk__31628_31632;
var G__31638 = count__31629_31633;
var G__31639 = (i__31630_31634 + (1));
seq__31627_31631 = G__31636;
chunk__31628_31632 = G__31637;
count__31629_31633 = G__31638;
i__31630_31634 = G__31639;
continue;
}
} else
{var temp__4126__auto___31640 = cljs.core.seq.call(null,seq__31627_31631);if(temp__4126__auto___31640)
{var seq__31627_31641__$1 = temp__4126__auto___31640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31627_31641__$1))
{var c__4408__auto___31642 = cljs.core.chunk_first.call(null,seq__31627_31641__$1);{
var G__31643 = cljs.core.chunk_rest.call(null,seq__31627_31641__$1);
var G__31644 = c__4408__auto___31642;
var G__31645 = cljs.core.count.call(null,c__4408__auto___31642);
var G__31646 = (0);
seq__31627_31631 = G__31643;
chunk__31628_31632 = G__31644;
count__31629_31633 = G__31645;
i__31630_31634 = G__31646;
continue;
}
} else
{var msg_31647 = cljs.core.first.call(null,seq__31627_31641__$1);console.log(msg_31647);
{
var G__31648 = cljs.core.next.call(null,seq__31627_31641__$1);
var G__31649 = null;
var G__31650 = (0);
var G__31651 = (0);
seq__31627_31631 = G__31648;
chunk__31628_31632 = G__31649;
count__31629_31633 = G__31650;
i__31630_31634 = G__31651;
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
var watch_and_reload__delegate = function (p__31652){var map__31654 = p__31652;var map__31654__$1 = ((cljs.core.seq_QMARK_.call(null,map__31654))?cljs.core.apply.call(null,cljs.core.hash_map,map__31654):map__31654);var opts = map__31654__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31652 = null;if (arguments.length > 0) {
  p__31652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31652);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31655){
var p__31652 = cljs.core.seq(arglist__31655);
return watch_and_reload__delegate(p__31652);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
