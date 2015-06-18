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
var log__delegate = function (p__31447,args){var map__31449 = p__31447;var map__31449__$1 = ((cljs.core.seq_QMARK_.call(null,map__31449))?cljs.core.apply.call(null,cljs.core.hash_map,map__31449):map__31449);var debug = cljs.core.get.call(null,map__31449__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31447,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31447,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31450){
var p__31447 = cljs.core.first(arglist__31450);
var args = cljs.core.rest(arglist__31450);
return log__delegate(p__31447,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31451){var map__31453 = p__31451;var map__31453__$1 = ((cljs.core.seq_QMARK_.call(null,map__31453))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453):map__31453);var websocket_url = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31454,callback){var map__31456 = p__31454;var map__31456__$1 = ((cljs.core.seq_QMARK_.call(null,map__31456))?cljs.core.apply.call(null,cljs.core.hash_map,map__31456):map__31456);var msg = map__31456__$1;var dependency_file = cljs.core.get.call(null,map__31456__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31456__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31456,map__31456__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31456,map__31456__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31457,p__31458){var map__31461 = p__31457;var map__31461__$1 = ((cljs.core.seq_QMARK_.call(null,map__31461))?cljs.core.apply.call(null,cljs.core.hash_map,map__31461):map__31461);var opts = map__31461__$1;var url_rewriter = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31462 = p__31458;var map__31462__$1 = ((cljs.core.seq_QMARK_.call(null,map__31462))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);var d = map__31462__$1;var file = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31463,p__31464){var map__31506 = p__31463;var map__31506__$1 = ((cljs.core.seq_QMARK_.call(null,map__31506))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);var opts = map__31506__$1;var on_jsload = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31507 = p__31464;var map__31507__$1 = ((cljs.core.seq_QMARK_.call(null,map__31507))?cljs.core.apply.call(null,cljs.core.hash_map,map__31507):map__31507);var files = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files){
return (function (state_31530){var state_val_31531 = (state_31530[(1)]);if((state_val_31531 === (6)))
{var inst_31512 = (state_31530[(7)]);var inst_31521 = (state_31530[(2)]);var inst_31522 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31523 = [inst_31512];var inst_31524 = (new cljs.core.PersistentVector(null,1,(5),inst_31522,inst_31523,null));var inst_31525 = cljs.core.apply.call(null,on_jsload,inst_31524);var state_31530__$1 = (function (){var statearr_31532 = state_31530;(statearr_31532[(8)] = inst_31521);
return statearr_31532;
})();var statearr_31533_31547 = state_31530__$1;(statearr_31533_31547[(2)] = inst_31525);
(statearr_31533_31547[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31531 === (5)))
{var inst_31528 = (state_31530[(2)]);var state_31530__$1 = state_31530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31530__$1,inst_31528);
} else
{if((state_val_31531 === (4)))
{var state_31530__$1 = state_31530;var statearr_31534_31548 = state_31530__$1;(statearr_31534_31548[(2)] = null);
(statearr_31534_31548[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31531 === (3)))
{var inst_31512 = (state_31530[(7)]);var inst_31515 = console.debug("Figwheel: loaded these files");var inst_31516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31512);var inst_31517 = cljs.core.prn_str.call(null,inst_31516);var inst_31518 = console.log(inst_31517);var inst_31519 = cljs.core.async.timeout.call(null,(10));var state_31530__$1 = (function (){var statearr_31535 = state_31530;(statearr_31535[(9)] = inst_31515);
(statearr_31535[(10)] = inst_31518);
return statearr_31535;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31530__$1,(6),inst_31519);
} else
{if((state_val_31531 === (2)))
{var inst_31512 = (state_31530[(7)]);var inst_31512__$1 = (state_31530[(2)]);var inst_31513 = cljs.core.not_empty.call(null,inst_31512__$1);var state_31530__$1 = (function (){var statearr_31536 = state_31530;(statearr_31536[(7)] = inst_31512__$1);
return statearr_31536;
})();if(cljs.core.truth_(inst_31513))
{var statearr_31537_31549 = state_31530__$1;(statearr_31537_31549[(1)] = (3));
} else
{var statearr_31538_31550 = state_31530__$1;(statearr_31538_31550[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31531 === (1)))
{var inst_31508 = before_jsload.call(null,files);var inst_31509 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31510 = figwheel.client.load_all_js_files.call(null,inst_31509);var state_31530__$1 = (function (){var statearr_31539 = state_31530;(statearr_31539[(11)] = inst_31508);
return statearr_31539;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31530__$1,(2),inst_31510);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31543 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31543[(0)] = state_machine__9111__auto__);
(statearr_31543[(1)] = (1));
return statearr_31543;
});
var state_machine__9111__auto____1 = (function (state_31530){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31530);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31544){if((e31544 instanceof Object))
{var ex__9114__auto__ = e31544;var statearr_31545_31551 = state_31530;(statearr_31545_31551[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31544;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31552 = state_31530;
state_31530 = G__31552;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31546 = f__9126__auto__.call(null);(statearr_31546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31506,map__31506__$1,opts,on_jsload,before_jsload,map__31507,map__31507__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31553,link_href){var map__31555 = p__31553;var map__31555__$1 = ((cljs.core.seq_QMARK_.call(null,map__31555))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);var request_url = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31576){var state_val_31577 = (state_31576[(1)]);if((state_val_31577 === (2)))
{var inst_31573 = (state_31576[(2)]);var inst_31574 = parent.removeChild(orig_link);var state_31576__$1 = (function (){var statearr_31578 = state_31576;(statearr_31578[(7)] = inst_31573);
return statearr_31578;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else
{if((state_val_31577 === (1)))
{var inst_31571 = cljs.core.async.timeout.call(null,(200));var state_31576__$1 = state_31576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(2),inst_31571);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31582 = [null,null,null,null,null,null,null,null];(statearr_31582[(0)] = state_machine__9111__auto__);
(statearr_31582[(1)] = (1));
return statearr_31582;
});
var state_machine__9111__auto____1 = (function (state_31576){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31576);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object))
{var ex__9114__auto__ = e31583;var statearr_31584_31586 = state_31576;(statearr_31584_31586[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31587 = state_31576;
state_31576 = G__31587;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31585 = f__9126__auto__.call(null);(statearr_31585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31585;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31588){var map__31590 = p__31588;var map__31590__$1 = ((cljs.core.seq_QMARK_.call(null,map__31590))?cljs.core.apply.call(null,cljs.core.hash_map,map__31590):map__31590);var f_data = map__31590__$1;var request_url = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31591,files_msg){var map__31613 = p__31591;var map__31613__$1 = ((cljs.core.seq_QMARK_.call(null,map__31613))?cljs.core.apply.call(null,cljs.core.hash_map,map__31613):map__31613);var opts = map__31613__$1;var on_cssload = cljs.core.get.call(null,map__31613__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31614_31634 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31615_31635 = null;var count__31616_31636 = (0);var i__31617_31637 = (0);while(true){
if((i__31617_31637 < count__31616_31636))
{var f_31638 = cljs.core._nth.call(null,chunk__31615_31635,i__31617_31637);figwheel.client.reload_css_file.call(null,f_31638);
{
var G__31639 = seq__31614_31634;
var G__31640 = chunk__31615_31635;
var G__31641 = count__31616_31636;
var G__31642 = (i__31617_31637 + (1));
seq__31614_31634 = G__31639;
chunk__31615_31635 = G__31640;
count__31616_31636 = G__31641;
i__31617_31637 = G__31642;
continue;
}
} else
{var temp__4126__auto___31643 = cljs.core.seq.call(null,seq__31614_31634);if(temp__4126__auto___31643)
{var seq__31614_31644__$1 = temp__4126__auto___31643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31614_31644__$1))
{var c__4408__auto___31645 = cljs.core.chunk_first.call(null,seq__31614_31644__$1);{
var G__31646 = cljs.core.chunk_rest.call(null,seq__31614_31644__$1);
var G__31647 = c__4408__auto___31645;
var G__31648 = cljs.core.count.call(null,c__4408__auto___31645);
var G__31649 = (0);
seq__31614_31634 = G__31646;
chunk__31615_31635 = G__31647;
count__31616_31636 = G__31648;
i__31617_31637 = G__31649;
continue;
}
} else
{var f_31650 = cljs.core.first.call(null,seq__31614_31644__$1);figwheel.client.reload_css_file.call(null,f_31650);
{
var G__31651 = cljs.core.next.call(null,seq__31614_31644__$1);
var G__31652 = null;
var G__31653 = (0);
var G__31654 = (0);
seq__31614_31634 = G__31651;
chunk__31615_31635 = G__31652;
count__31616_31636 = G__31653;
i__31617_31637 = G__31654;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload){
return (function (state_31624){var state_val_31625 = (state_31624[(1)]);if((state_val_31625 === (2)))
{var inst_31620 = (state_31624[(2)]);var inst_31621 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31622 = on_cssload.call(null,inst_31621);var state_31624__$1 = (function (){var statearr_31626 = state_31624;(statearr_31626[(7)] = inst_31620);
return statearr_31626;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31624__$1,inst_31622);
} else
{if((state_val_31625 === (1)))
{var inst_31618 = cljs.core.async.timeout.call(null,(100));var state_31624__$1 = state_31624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31624__$1,(2),inst_31618);
} else
{return null;
}
}
});})(c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31630 = [null,null,null,null,null,null,null,null];(statearr_31630[(0)] = state_machine__9111__auto__);
(statearr_31630[(1)] = (1));
return statearr_31630;
});
var state_machine__9111__auto____1 = (function (state_31624){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31624);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31631){if((e31631 instanceof Object))
{var ex__9114__auto__ = e31631;var statearr_31632_31655 = state_31624;(statearr_31632_31655[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31631;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31656 = state_31624;
state_31624 = G__31656;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31624){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31633 = f__9126__auto__.call(null);(statearr_31633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31613,map__31613__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31657){var map__31662 = p__31657;var map__31662__$1 = ((cljs.core.seq_QMARK_.call(null,map__31662))?cljs.core.apply.call(null,cljs.core.hash_map,map__31662):map__31662);var opts = map__31662__$1;var on_compile_fail = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31663 = cljs.core._EQ_;var expr__31664 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31663.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31664)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31663.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31664)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31663.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31664)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31662,map__31662__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31669 = {"detail":url};return obj31669;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31670){var map__31672 = p__31670;var map__31672__$1 = ((cljs.core.seq_QMARK_.call(null,map__31672))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);var class$ = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31673){var map__31679 = p__31673;var map__31679__$1 = ((cljs.core.seq_QMARK_.call(null,map__31679))?cljs.core.apply.call(null,cljs.core.hash_map,map__31679):map__31679);var ed = map__31679__$1;var exception_data = cljs.core.get.call(null,map__31679__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31679__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31680_31684 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31681_31685 = null;var count__31682_31686 = (0);var i__31683_31687 = (0);while(true){
if((i__31683_31687 < count__31682_31686))
{var msg_31688 = cljs.core._nth.call(null,chunk__31681_31685,i__31683_31687);console.log(msg_31688);
{
var G__31689 = seq__31680_31684;
var G__31690 = chunk__31681_31685;
var G__31691 = count__31682_31686;
var G__31692 = (i__31683_31687 + (1));
seq__31680_31684 = G__31689;
chunk__31681_31685 = G__31690;
count__31682_31686 = G__31691;
i__31683_31687 = G__31692;
continue;
}
} else
{var temp__4126__auto___31693 = cljs.core.seq.call(null,seq__31680_31684);if(temp__4126__auto___31693)
{var seq__31680_31694__$1 = temp__4126__auto___31693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31680_31694__$1))
{var c__4408__auto___31695 = cljs.core.chunk_first.call(null,seq__31680_31694__$1);{
var G__31696 = cljs.core.chunk_rest.call(null,seq__31680_31694__$1);
var G__31697 = c__4408__auto___31695;
var G__31698 = cljs.core.count.call(null,c__4408__auto___31695);
var G__31699 = (0);
seq__31680_31684 = G__31696;
chunk__31681_31685 = G__31697;
count__31682_31686 = G__31698;
i__31683_31687 = G__31699;
continue;
}
} else
{var msg_31700 = cljs.core.first.call(null,seq__31680_31694__$1);console.log(msg_31700);
{
var G__31701 = cljs.core.next.call(null,seq__31680_31694__$1);
var G__31702 = null;
var G__31703 = (0);
var G__31704 = (0);
seq__31680_31684 = G__31701;
chunk__31681_31685 = G__31702;
count__31682_31686 = G__31703;
i__31683_31687 = G__31704;
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
var watch_and_reload__delegate = function (p__31705){var map__31707 = p__31705;var map__31707__$1 = ((cljs.core.seq_QMARK_.call(null,map__31707))?cljs.core.apply.call(null,cljs.core.hash_map,map__31707):map__31707);var opts = map__31707__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31705 = null;if (arguments.length > 0) {
  p__31705 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31705);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31708){
var p__31705 = cljs.core.seq(arglist__31708);
return watch_and_reload__delegate(p__31705);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
