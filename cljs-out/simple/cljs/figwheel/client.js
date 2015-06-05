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
var log__delegate = function (p__30425,args){var map__30427 = p__30425;var map__30427__$1 = ((cljs.core.seq_QMARK_.call(null,map__30427))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427):map__30427);var debug = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30425,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30425,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30428){
var p__30425 = cljs.core.first(arglist__30428);
var args = cljs.core.rest(arglist__30428);
return log__delegate(p__30425,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30429){var map__30431 = p__30429;var map__30431__$1 = ((cljs.core.seq_QMARK_.call(null,map__30431))?cljs.core.apply.call(null,cljs.core.hash_map,map__30431):map__30431);var websocket_url = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30432,callback){var map__30434 = p__30432;var map__30434__$1 = ((cljs.core.seq_QMARK_.call(null,map__30434))?cljs.core.apply.call(null,cljs.core.hash_map,map__30434):map__30434);var msg = map__30434__$1;var dependency_file = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30434,map__30434__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30434,map__30434__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30435,p__30436){var map__30439 = p__30435;var map__30439__$1 = ((cljs.core.seq_QMARK_.call(null,map__30439))?cljs.core.apply.call(null,cljs.core.hash_map,map__30439):map__30439);var opts = map__30439__$1;var url_rewriter = cljs.core.get.call(null,map__30439__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30440 = p__30436;var map__30440__$1 = ((cljs.core.seq_QMARK_.call(null,map__30440))?cljs.core.apply.call(null,cljs.core.hash_map,map__30440):map__30440);var d = map__30440__$1;var file = cljs.core.get.call(null,map__30440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30441,p__30442){var map__30484 = p__30441;var map__30484__$1 = ((cljs.core.seq_QMARK_.call(null,map__30484))?cljs.core.apply.call(null,cljs.core.hash_map,map__30484):map__30484);var opts = map__30484__$1;var on_jsload = cljs.core.get.call(null,map__30484__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30484__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30485 = p__30442;var map__30485__$1 = ((cljs.core.seq_QMARK_.call(null,map__30485))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);var files = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files){
return (function (state_30508){var state_val_30509 = (state_30508[(1)]);if((state_val_30509 === (6)))
{var inst_30490 = (state_30508[(7)]);var inst_30499 = (state_30508[(2)]);var inst_30500 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30501 = [inst_30490];var inst_30502 = (new cljs.core.PersistentVector(null,1,(5),inst_30500,inst_30501,null));var inst_30503 = cljs.core.apply.call(null,on_jsload,inst_30502);var state_30508__$1 = (function (){var statearr_30510 = state_30508;(statearr_30510[(8)] = inst_30499);
return statearr_30510;
})();var statearr_30511_30525 = state_30508__$1;(statearr_30511_30525[(2)] = inst_30503);
(statearr_30511_30525[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30509 === (5)))
{var inst_30506 = (state_30508[(2)]);var state_30508__$1 = state_30508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30508__$1,inst_30506);
} else
{if((state_val_30509 === (4)))
{var state_30508__$1 = state_30508;var statearr_30512_30526 = state_30508__$1;(statearr_30512_30526[(2)] = null);
(statearr_30512_30526[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30509 === (3)))
{var inst_30490 = (state_30508[(7)]);var inst_30493 = console.debug("Figwheel: loaded these files");var inst_30494 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30490);var inst_30495 = cljs.core.prn_str.call(null,inst_30494);var inst_30496 = console.log(inst_30495);var inst_30497 = cljs.core.async.timeout.call(null,(10));var state_30508__$1 = (function (){var statearr_30513 = state_30508;(statearr_30513[(9)] = inst_30496);
(statearr_30513[(10)] = inst_30493);
return statearr_30513;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30508__$1,(6),inst_30497);
} else
{if((state_val_30509 === (2)))
{var inst_30490 = (state_30508[(7)]);var inst_30490__$1 = (state_30508[(2)]);var inst_30491 = cljs.core.not_empty.call(null,inst_30490__$1);var state_30508__$1 = (function (){var statearr_30514 = state_30508;(statearr_30514[(7)] = inst_30490__$1);
return statearr_30514;
})();if(cljs.core.truth_(inst_30491))
{var statearr_30515_30527 = state_30508__$1;(statearr_30515_30527[(1)] = (3));
} else
{var statearr_30516_30528 = state_30508__$1;(statearr_30516_30528[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30509 === (1)))
{var inst_30486 = before_jsload.call(null,files);var inst_30487 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30488 = figwheel.client.load_all_js_files.call(null,inst_30487);var state_30508__$1 = (function (){var statearr_30517 = state_30508;(statearr_30517[(11)] = inst_30486);
return statearr_30517;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30508__$1,(2),inst_30488);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30521 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30521[(0)] = state_machine__11462__auto__);
(statearr_30521[(1)] = (1));
return statearr_30521;
});
var state_machine__11462__auto____1 = (function (state_30508){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30508);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30522){if((e30522 instanceof Object))
{var ex__11465__auto__ = e30522;var statearr_30523_30529 = state_30508;(statearr_30523_30529[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30530 = state_30508;
state_30508 = G__30530;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30508){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30524 = f__11518__auto__.call(null);(statearr_30524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30484,map__30484__$1,opts,on_jsload,before_jsload,map__30485,map__30485__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30531,link_href){var map__30533 = p__30531;var map__30533__$1 = ((cljs.core.seq_QMARK_.call(null,map__30533))?cljs.core.apply.call(null,cljs.core.hash_map,map__30533):map__30533);var request_url = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30554){var state_val_30555 = (state_30554[(1)]);if((state_val_30555 === (2)))
{var inst_30551 = (state_30554[(2)]);var inst_30552 = parent.removeChild(orig_link);var state_30554__$1 = (function (){var statearr_30556 = state_30554;(statearr_30556[(7)] = inst_30551);
return statearr_30556;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else
{if((state_val_30555 === (1)))
{var inst_30549 = cljs.core.async.timeout.call(null,(200));var state_30554__$1 = state_30554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(2),inst_30549);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30560 = [null,null,null,null,null,null,null,null];(statearr_30560[(0)] = state_machine__11462__auto__);
(statearr_30560[(1)] = (1));
return statearr_30560;
});
var state_machine__11462__auto____1 = (function (state_30554){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30554);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30561){if((e30561 instanceof Object))
{var ex__11465__auto__ = e30561;var statearr_30562_30564 = state_30554;(statearr_30562_30564[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30561;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30565 = state_30554;
state_30554 = G__30565;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30563 = f__11518__auto__.call(null);(statearr_30563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30563;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30566){var map__30568 = p__30566;var map__30568__$1 = ((cljs.core.seq_QMARK_.call(null,map__30568))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);var f_data = map__30568__$1;var request_url = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30569,files_msg){var map__30591 = p__30569;var map__30591__$1 = ((cljs.core.seq_QMARK_.call(null,map__30591))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);var opts = map__30591__$1;var on_cssload = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30592_30612 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30593_30613 = null;var count__30594_30614 = (0);var i__30595_30615 = (0);while(true){
if((i__30595_30615 < count__30594_30614))
{var f_30616 = cljs.core._nth.call(null,chunk__30593_30613,i__30595_30615);figwheel.client.reload_css_file.call(null,f_30616);
{
var G__30617 = seq__30592_30612;
var G__30618 = chunk__30593_30613;
var G__30619 = count__30594_30614;
var G__30620 = (i__30595_30615 + (1));
seq__30592_30612 = G__30617;
chunk__30593_30613 = G__30618;
count__30594_30614 = G__30619;
i__30595_30615 = G__30620;
continue;
}
} else
{var temp__4126__auto___30621 = cljs.core.seq.call(null,seq__30592_30612);if(temp__4126__auto___30621)
{var seq__30592_30622__$1 = temp__4126__auto___30621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30592_30622__$1))
{var c__4408__auto___30623 = cljs.core.chunk_first.call(null,seq__30592_30622__$1);{
var G__30624 = cljs.core.chunk_rest.call(null,seq__30592_30622__$1);
var G__30625 = c__4408__auto___30623;
var G__30626 = cljs.core.count.call(null,c__4408__auto___30623);
var G__30627 = (0);
seq__30592_30612 = G__30624;
chunk__30593_30613 = G__30625;
count__30594_30614 = G__30626;
i__30595_30615 = G__30627;
continue;
}
} else
{var f_30628 = cljs.core.first.call(null,seq__30592_30622__$1);figwheel.client.reload_css_file.call(null,f_30628);
{
var G__30629 = cljs.core.next.call(null,seq__30592_30622__$1);
var G__30630 = null;
var G__30631 = (0);
var G__30632 = (0);
seq__30592_30612 = G__30629;
chunk__30593_30613 = G__30630;
count__30594_30614 = G__30631;
i__30595_30615 = G__30632;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload){
return (function (state_30602){var state_val_30603 = (state_30602[(1)]);if((state_val_30603 === (2)))
{var inst_30598 = (state_30602[(2)]);var inst_30599 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30600 = on_cssload.call(null,inst_30599);var state_30602__$1 = (function (){var statearr_30604 = state_30602;(statearr_30604[(7)] = inst_30598);
return statearr_30604;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30602__$1,inst_30600);
} else
{if((state_val_30603 === (1)))
{var inst_30596 = cljs.core.async.timeout.call(null,(100));var state_30602__$1 = state_30602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30602__$1,(2),inst_30596);
} else
{return null;
}
}
});})(c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30608 = [null,null,null,null,null,null,null,null];(statearr_30608[(0)] = state_machine__11462__auto__);
(statearr_30608[(1)] = (1));
return statearr_30608;
});
var state_machine__11462__auto____1 = (function (state_30602){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30602);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object))
{var ex__11465__auto__ = e30609;var statearr_30610_30633 = state_30602;(statearr_30610_30633[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30634 = state_30602;
state_30602 = G__30634;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30602){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30611 = f__11518__auto__.call(null);(statearr_30611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30591,map__30591__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30635){var map__30640 = p__30635;var map__30640__$1 = ((cljs.core.seq_QMARK_.call(null,map__30640))?cljs.core.apply.call(null,cljs.core.hash_map,map__30640):map__30640);var opts = map__30640__$1;var on_compile_fail = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30641 = cljs.core._EQ_;var expr__30642 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30641.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30642)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30641.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30642)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30641.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30642)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30640,map__30640__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30647 = {"detail":url};return obj30647;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30648){var map__30650 = p__30648;var map__30650__$1 = ((cljs.core.seq_QMARK_.call(null,map__30650))?cljs.core.apply.call(null,cljs.core.hash_map,map__30650):map__30650);var class$ = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30651){var map__30657 = p__30651;var map__30657__$1 = ((cljs.core.seq_QMARK_.call(null,map__30657))?cljs.core.apply.call(null,cljs.core.hash_map,map__30657):map__30657);var ed = map__30657__$1;var exception_data = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30658_30662 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30659_30663 = null;var count__30660_30664 = (0);var i__30661_30665 = (0);while(true){
if((i__30661_30665 < count__30660_30664))
{var msg_30666 = cljs.core._nth.call(null,chunk__30659_30663,i__30661_30665);console.log(msg_30666);
{
var G__30667 = seq__30658_30662;
var G__30668 = chunk__30659_30663;
var G__30669 = count__30660_30664;
var G__30670 = (i__30661_30665 + (1));
seq__30658_30662 = G__30667;
chunk__30659_30663 = G__30668;
count__30660_30664 = G__30669;
i__30661_30665 = G__30670;
continue;
}
} else
{var temp__4126__auto___30671 = cljs.core.seq.call(null,seq__30658_30662);if(temp__4126__auto___30671)
{var seq__30658_30672__$1 = temp__4126__auto___30671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30658_30672__$1))
{var c__4408__auto___30673 = cljs.core.chunk_first.call(null,seq__30658_30672__$1);{
var G__30674 = cljs.core.chunk_rest.call(null,seq__30658_30672__$1);
var G__30675 = c__4408__auto___30673;
var G__30676 = cljs.core.count.call(null,c__4408__auto___30673);
var G__30677 = (0);
seq__30658_30662 = G__30674;
chunk__30659_30663 = G__30675;
count__30660_30664 = G__30676;
i__30661_30665 = G__30677;
continue;
}
} else
{var msg_30678 = cljs.core.first.call(null,seq__30658_30672__$1);console.log(msg_30678);
{
var G__30679 = cljs.core.next.call(null,seq__30658_30672__$1);
var G__30680 = null;
var G__30681 = (0);
var G__30682 = (0);
seq__30658_30662 = G__30679;
chunk__30659_30663 = G__30680;
count__30660_30664 = G__30681;
i__30661_30665 = G__30682;
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
var watch_and_reload__delegate = function (p__30683){var map__30685 = p__30683;var map__30685__$1 = ((cljs.core.seq_QMARK_.call(null,map__30685))?cljs.core.apply.call(null,cljs.core.hash_map,map__30685):map__30685);var opts = map__30685__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30683 = null;if (arguments.length > 0) {
  p__30683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30683);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30686){
var p__30683 = cljs.core.seq(arglist__30686);
return watch_and_reload__delegate(p__30683);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
