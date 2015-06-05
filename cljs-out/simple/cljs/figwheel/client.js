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
var log__delegate = function (p__30421,args){var map__30423 = p__30421;var map__30423__$1 = ((cljs.core.seq_QMARK_.call(null,map__30423))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);var debug = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30421,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30421,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30424){
var p__30421 = cljs.core.first(arglist__30424);
var args = cljs.core.rest(arglist__30424);
return log__delegate(p__30421,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30425){var map__30427 = p__30425;var map__30427__$1 = ((cljs.core.seq_QMARK_.call(null,map__30427))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427):map__30427);var websocket_url = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30428,callback){var map__30430 = p__30428;var map__30430__$1 = ((cljs.core.seq_QMARK_.call(null,map__30430))?cljs.core.apply.call(null,cljs.core.hash_map,map__30430):map__30430);var msg = map__30430__$1;var dependency_file = cljs.core.get.call(null,map__30430__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30430__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30430,map__30430__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30430,map__30430__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30431,p__30432){var map__30435 = p__30431;var map__30435__$1 = ((cljs.core.seq_QMARK_.call(null,map__30435))?cljs.core.apply.call(null,cljs.core.hash_map,map__30435):map__30435);var opts = map__30435__$1;var url_rewriter = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30436 = p__30432;var map__30436__$1 = ((cljs.core.seq_QMARK_.call(null,map__30436))?cljs.core.apply.call(null,cljs.core.hash_map,map__30436):map__30436);var d = map__30436__$1;var file = cljs.core.get.call(null,map__30436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30437,p__30438){var map__30480 = p__30437;var map__30480__$1 = ((cljs.core.seq_QMARK_.call(null,map__30480))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);var opts = map__30480__$1;var on_jsload = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30481 = p__30438;var map__30481__$1 = ((cljs.core.seq_QMARK_.call(null,map__30481))?cljs.core.apply.call(null,cljs.core.hash_map,map__30481):map__30481);var files = cljs.core.get.call(null,map__30481__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files){
return (function (state_30504){var state_val_30505 = (state_30504[(1)]);if((state_val_30505 === (6)))
{var inst_30486 = (state_30504[(7)]);var inst_30495 = (state_30504[(2)]);var inst_30496 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30497 = [inst_30486];var inst_30498 = (new cljs.core.PersistentVector(null,1,(5),inst_30496,inst_30497,null));var inst_30499 = cljs.core.apply.call(null,on_jsload,inst_30498);var state_30504__$1 = (function (){var statearr_30506 = state_30504;(statearr_30506[(8)] = inst_30495);
return statearr_30506;
})();var statearr_30507_30521 = state_30504__$1;(statearr_30507_30521[(2)] = inst_30499);
(statearr_30507_30521[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30505 === (5)))
{var inst_30502 = (state_30504[(2)]);var state_30504__$1 = state_30504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30504__$1,inst_30502);
} else
{if((state_val_30505 === (4)))
{var state_30504__$1 = state_30504;var statearr_30508_30522 = state_30504__$1;(statearr_30508_30522[(2)] = null);
(statearr_30508_30522[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30505 === (3)))
{var inst_30486 = (state_30504[(7)]);var inst_30489 = console.debug("Figwheel: loaded these files");var inst_30490 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30486);var inst_30491 = cljs.core.prn_str.call(null,inst_30490);var inst_30492 = console.log(inst_30491);var inst_30493 = cljs.core.async.timeout.call(null,(10));var state_30504__$1 = (function (){var statearr_30509 = state_30504;(statearr_30509[(9)] = inst_30489);
(statearr_30509[(10)] = inst_30492);
return statearr_30509;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30504__$1,(6),inst_30493);
} else
{if((state_val_30505 === (2)))
{var inst_30486 = (state_30504[(7)]);var inst_30486__$1 = (state_30504[(2)]);var inst_30487 = cljs.core.not_empty.call(null,inst_30486__$1);var state_30504__$1 = (function (){var statearr_30510 = state_30504;(statearr_30510[(7)] = inst_30486__$1);
return statearr_30510;
})();if(cljs.core.truth_(inst_30487))
{var statearr_30511_30523 = state_30504__$1;(statearr_30511_30523[(1)] = (3));
} else
{var statearr_30512_30524 = state_30504__$1;(statearr_30512_30524[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30505 === (1)))
{var inst_30482 = before_jsload.call(null,files);var inst_30483 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30484 = figwheel.client.load_all_js_files.call(null,inst_30483);var state_30504__$1 = (function (){var statearr_30513 = state_30504;(statearr_30513[(11)] = inst_30482);
return statearr_30513;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30504__$1,(2),inst_30484);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30517 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30517[(0)] = state_machine__11462__auto__);
(statearr_30517[(1)] = (1));
return statearr_30517;
});
var state_machine__11462__auto____1 = (function (state_30504){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30504);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30518){if((e30518 instanceof Object))
{var ex__11465__auto__ = e30518;var statearr_30519_30525 = state_30504;(statearr_30519_30525[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30504);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30526 = state_30504;
state_30504 = G__30526;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30504){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30520 = f__11518__auto__.call(null);(statearr_30520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30480,map__30480__$1,opts,on_jsload,before_jsload,map__30481,map__30481__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30527,link_href){var map__30529 = p__30527;var map__30529__$1 = ((cljs.core.seq_QMARK_.call(null,map__30529))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);var request_url = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30550){var state_val_30551 = (state_30550[(1)]);if((state_val_30551 === (2)))
{var inst_30547 = (state_30550[(2)]);var inst_30548 = parent.removeChild(orig_link);var state_30550__$1 = (function (){var statearr_30552 = state_30550;(statearr_30552[(7)] = inst_30547);
return statearr_30552;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30550__$1,inst_30548);
} else
{if((state_val_30551 === (1)))
{var inst_30545 = cljs.core.async.timeout.call(null,(200));var state_30550__$1 = state_30550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30550__$1,(2),inst_30545);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30556 = [null,null,null,null,null,null,null,null];(statearr_30556[(0)] = state_machine__11462__auto__);
(statearr_30556[(1)] = (1));
return statearr_30556;
});
var state_machine__11462__auto____1 = (function (state_30550){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30550);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30557){if((e30557 instanceof Object))
{var ex__11465__auto__ = e30557;var statearr_30558_30560 = state_30550;(statearr_30558_30560[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30561 = state_30550;
state_30550 = G__30561;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30550){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30559 = f__11518__auto__.call(null);(statearr_30559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30559;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30562){var map__30564 = p__30562;var map__30564__$1 = ((cljs.core.seq_QMARK_.call(null,map__30564))?cljs.core.apply.call(null,cljs.core.hash_map,map__30564):map__30564);var f_data = map__30564__$1;var request_url = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30565,files_msg){var map__30587 = p__30565;var map__30587__$1 = ((cljs.core.seq_QMARK_.call(null,map__30587))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);var opts = map__30587__$1;var on_cssload = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30588_30608 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30589_30609 = null;var count__30590_30610 = (0);var i__30591_30611 = (0);while(true){
if((i__30591_30611 < count__30590_30610))
{var f_30612 = cljs.core._nth.call(null,chunk__30589_30609,i__30591_30611);figwheel.client.reload_css_file.call(null,f_30612);
{
var G__30613 = seq__30588_30608;
var G__30614 = chunk__30589_30609;
var G__30615 = count__30590_30610;
var G__30616 = (i__30591_30611 + (1));
seq__30588_30608 = G__30613;
chunk__30589_30609 = G__30614;
count__30590_30610 = G__30615;
i__30591_30611 = G__30616;
continue;
}
} else
{var temp__4126__auto___30617 = cljs.core.seq.call(null,seq__30588_30608);if(temp__4126__auto___30617)
{var seq__30588_30618__$1 = temp__4126__auto___30617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30588_30618__$1))
{var c__4408__auto___30619 = cljs.core.chunk_first.call(null,seq__30588_30618__$1);{
var G__30620 = cljs.core.chunk_rest.call(null,seq__30588_30618__$1);
var G__30621 = c__4408__auto___30619;
var G__30622 = cljs.core.count.call(null,c__4408__auto___30619);
var G__30623 = (0);
seq__30588_30608 = G__30620;
chunk__30589_30609 = G__30621;
count__30590_30610 = G__30622;
i__30591_30611 = G__30623;
continue;
}
} else
{var f_30624 = cljs.core.first.call(null,seq__30588_30618__$1);figwheel.client.reload_css_file.call(null,f_30624);
{
var G__30625 = cljs.core.next.call(null,seq__30588_30618__$1);
var G__30626 = null;
var G__30627 = (0);
var G__30628 = (0);
seq__30588_30608 = G__30625;
chunk__30589_30609 = G__30626;
count__30590_30610 = G__30627;
i__30591_30611 = G__30628;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload){
return (function (state_30598){var state_val_30599 = (state_30598[(1)]);if((state_val_30599 === (2)))
{var inst_30594 = (state_30598[(2)]);var inst_30595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30596 = on_cssload.call(null,inst_30595);var state_30598__$1 = (function (){var statearr_30600 = state_30598;(statearr_30600[(7)] = inst_30594);
return statearr_30600;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30598__$1,inst_30596);
} else
{if((state_val_30599 === (1)))
{var inst_30592 = cljs.core.async.timeout.call(null,(100));var state_30598__$1 = state_30598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30598__$1,(2),inst_30592);
} else
{return null;
}
}
});})(c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30604 = [null,null,null,null,null,null,null,null];(statearr_30604[(0)] = state_machine__11462__auto__);
(statearr_30604[(1)] = (1));
return statearr_30604;
});
var state_machine__11462__auto____1 = (function (state_30598){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30598);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30605){if((e30605 instanceof Object))
{var ex__11465__auto__ = e30605;var statearr_30606_30629 = state_30598;(statearr_30606_30629[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30630 = state_30598;
state_30598 = G__30630;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30598){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30607 = f__11518__auto__.call(null);(statearr_30607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30587,map__30587__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30631){var map__30636 = p__30631;var map__30636__$1 = ((cljs.core.seq_QMARK_.call(null,map__30636))?cljs.core.apply.call(null,cljs.core.hash_map,map__30636):map__30636);var opts = map__30636__$1;var on_compile_fail = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30637 = cljs.core._EQ_;var expr__30638 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30637.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30638)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30637.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30638)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30637.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30638)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30636,map__30636__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30643 = {"detail":url};return obj30643;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30644){var map__30646 = p__30644;var map__30646__$1 = ((cljs.core.seq_QMARK_.call(null,map__30646))?cljs.core.apply.call(null,cljs.core.hash_map,map__30646):map__30646);var class$ = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30647){var map__30653 = p__30647;var map__30653__$1 = ((cljs.core.seq_QMARK_.call(null,map__30653))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);var ed = map__30653__$1;var exception_data = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30654_30658 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30655_30659 = null;var count__30656_30660 = (0);var i__30657_30661 = (0);while(true){
if((i__30657_30661 < count__30656_30660))
{var msg_30662 = cljs.core._nth.call(null,chunk__30655_30659,i__30657_30661);console.log(msg_30662);
{
var G__30663 = seq__30654_30658;
var G__30664 = chunk__30655_30659;
var G__30665 = count__30656_30660;
var G__30666 = (i__30657_30661 + (1));
seq__30654_30658 = G__30663;
chunk__30655_30659 = G__30664;
count__30656_30660 = G__30665;
i__30657_30661 = G__30666;
continue;
}
} else
{var temp__4126__auto___30667 = cljs.core.seq.call(null,seq__30654_30658);if(temp__4126__auto___30667)
{var seq__30654_30668__$1 = temp__4126__auto___30667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30654_30668__$1))
{var c__4408__auto___30669 = cljs.core.chunk_first.call(null,seq__30654_30668__$1);{
var G__30670 = cljs.core.chunk_rest.call(null,seq__30654_30668__$1);
var G__30671 = c__4408__auto___30669;
var G__30672 = cljs.core.count.call(null,c__4408__auto___30669);
var G__30673 = (0);
seq__30654_30658 = G__30670;
chunk__30655_30659 = G__30671;
count__30656_30660 = G__30672;
i__30657_30661 = G__30673;
continue;
}
} else
{var msg_30674 = cljs.core.first.call(null,seq__30654_30668__$1);console.log(msg_30674);
{
var G__30675 = cljs.core.next.call(null,seq__30654_30668__$1);
var G__30676 = null;
var G__30677 = (0);
var G__30678 = (0);
seq__30654_30658 = G__30675;
chunk__30655_30659 = G__30676;
count__30656_30660 = G__30677;
i__30657_30661 = G__30678;
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
var watch_and_reload__delegate = function (p__30679){var map__30681 = p__30679;var map__30681__$1 = ((cljs.core.seq_QMARK_.call(null,map__30681))?cljs.core.apply.call(null,cljs.core.hash_map,map__30681):map__30681);var opts = map__30681__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30679 = null;if (arguments.length > 0) {
  p__30679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30679);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30682){
var p__30679 = cljs.core.seq(arglist__30682);
return watch_and_reload__delegate(p__30679);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
