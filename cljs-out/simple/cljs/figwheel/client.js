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
var log__delegate = function (p__30445,args){var map__30447 = p__30445;var map__30447__$1 = ((cljs.core.seq_QMARK_.call(null,map__30447))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);var debug = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30445,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30445,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30448){
var p__30445 = cljs.core.first(arglist__30448);
var args = cljs.core.rest(arglist__30448);
return log__delegate(p__30445,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30449){var map__30451 = p__30449;var map__30451__$1 = ((cljs.core.seq_QMARK_.call(null,map__30451))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);var websocket_url = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30452,callback){var map__30454 = p__30452;var map__30454__$1 = ((cljs.core.seq_QMARK_.call(null,map__30454))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);var msg = map__30454__$1;var dependency_file = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30454,map__30454__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30454,map__30454__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30455,p__30456){var map__30459 = p__30455;var map__30459__$1 = ((cljs.core.seq_QMARK_.call(null,map__30459))?cljs.core.apply.call(null,cljs.core.hash_map,map__30459):map__30459);var opts = map__30459__$1;var url_rewriter = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30460 = p__30456;var map__30460__$1 = ((cljs.core.seq_QMARK_.call(null,map__30460))?cljs.core.apply.call(null,cljs.core.hash_map,map__30460):map__30460);var d = map__30460__$1;var file = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30461,p__30462){var map__30504 = p__30461;var map__30504__$1 = ((cljs.core.seq_QMARK_.call(null,map__30504))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);var opts = map__30504__$1;var on_jsload = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30505 = p__30462;var map__30505__$1 = ((cljs.core.seq_QMARK_.call(null,map__30505))?cljs.core.apply.call(null,cljs.core.hash_map,map__30505):map__30505);var files = cljs.core.get.call(null,map__30505__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files){
return (function (state_30528){var state_val_30529 = (state_30528[(1)]);if((state_val_30529 === (6)))
{var inst_30510 = (state_30528[(7)]);var inst_30519 = (state_30528[(2)]);var inst_30520 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30521 = [inst_30510];var inst_30522 = (new cljs.core.PersistentVector(null,1,(5),inst_30520,inst_30521,null));var inst_30523 = cljs.core.apply.call(null,on_jsload,inst_30522);var state_30528__$1 = (function (){var statearr_30530 = state_30528;(statearr_30530[(8)] = inst_30519);
return statearr_30530;
})();var statearr_30531_30545 = state_30528__$1;(statearr_30531_30545[(2)] = inst_30523);
(statearr_30531_30545[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30529 === (5)))
{var inst_30526 = (state_30528[(2)]);var state_30528__$1 = state_30528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30528__$1,inst_30526);
} else
{if((state_val_30529 === (4)))
{var state_30528__$1 = state_30528;var statearr_30532_30546 = state_30528__$1;(statearr_30532_30546[(2)] = null);
(statearr_30532_30546[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30529 === (3)))
{var inst_30510 = (state_30528[(7)]);var inst_30513 = console.debug("Figwheel: loaded these files");var inst_30514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30510);var inst_30515 = cljs.core.prn_str.call(null,inst_30514);var inst_30516 = console.log(inst_30515);var inst_30517 = cljs.core.async.timeout.call(null,(10));var state_30528__$1 = (function (){var statearr_30533 = state_30528;(statearr_30533[(9)] = inst_30516);
(statearr_30533[(10)] = inst_30513);
return statearr_30533;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(6),inst_30517);
} else
{if((state_val_30529 === (2)))
{var inst_30510 = (state_30528[(7)]);var inst_30510__$1 = (state_30528[(2)]);var inst_30511 = cljs.core.not_empty.call(null,inst_30510__$1);var state_30528__$1 = (function (){var statearr_30534 = state_30528;(statearr_30534[(7)] = inst_30510__$1);
return statearr_30534;
})();if(cljs.core.truth_(inst_30511))
{var statearr_30535_30547 = state_30528__$1;(statearr_30535_30547[(1)] = (3));
} else
{var statearr_30536_30548 = state_30528__$1;(statearr_30536_30548[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30529 === (1)))
{var inst_30506 = before_jsload.call(null,files);var inst_30507 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30508 = figwheel.client.load_all_js_files.call(null,inst_30507);var state_30528__$1 = (function (){var statearr_30537 = state_30528;(statearr_30537[(11)] = inst_30506);
return statearr_30537;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(2),inst_30508);
} else
{return null;
}
}
}
}
}
}
});})(c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files))
;return ((function (switch__11098__auto__,c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30541 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30541[(0)] = state_machine__11099__auto__);
(statearr_30541[(1)] = (1));
return statearr_30541;
});
var state_machine__11099__auto____1 = (function (state_30528){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30528);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30542){if((e30542 instanceof Object))
{var ex__11102__auto__ = e30542;var statearr_30543_30549 = state_30528;(statearr_30543_30549[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30542;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30550 = state_30528;
state_30528 = G__30550;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files))
})();var state__11156__auto__ = (function (){var statearr_30544 = f__11155__auto__.call(null);(statearr_30544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,map__30504,map__30504__$1,opts,on_jsload,before_jsload,map__30505,map__30505__$1,files))
);
return c__11154__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30551,link_href){var map__30553 = p__30551;var map__30553__$1 = ((cljs.core.seq_QMARK_.call(null,map__30553))?cljs.core.apply.call(null,cljs.core.hash_map,map__30553):map__30553);var request_url = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,parent){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,parent){
return (function (state_30574){var state_val_30575 = (state_30574[(1)]);if((state_val_30575 === (2)))
{var inst_30571 = (state_30574[(2)]);var inst_30572 = parent.removeChild(orig_link);var state_30574__$1 = (function (){var statearr_30576 = state_30574;(statearr_30576[(7)] = inst_30571);
return statearr_30576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30574__$1,inst_30572);
} else
{if((state_val_30575 === (1)))
{var inst_30569 = cljs.core.async.timeout.call(null,(200));var state_30574__$1 = state_30574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(2),inst_30569);
} else
{return null;
}
}
});})(c__11154__auto__,parent))
;return ((function (switch__11098__auto__,c__11154__auto__,parent){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30580 = [null,null,null,null,null,null,null,null];(statearr_30580[(0)] = state_machine__11099__auto__);
(statearr_30580[(1)] = (1));
return statearr_30580;
});
var state_machine__11099__auto____1 = (function (state_30574){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30574);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30581){if((e30581 instanceof Object))
{var ex__11102__auto__ = e30581;var statearr_30582_30584 = state_30574;(statearr_30582_30584[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30581;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30585 = state_30574;
state_30574 = G__30585;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,parent))
})();var state__11156__auto__ = (function (){var statearr_30583 = f__11155__auto__.call(null);(statearr_30583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,parent))
);
return c__11154__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30586){var map__30588 = p__30586;var map__30588__$1 = ((cljs.core.seq_QMARK_.call(null,map__30588))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);var f_data = map__30588__$1;var request_url = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30589,files_msg){var map__30611 = p__30589;var map__30611__$1 = ((cljs.core.seq_QMARK_.call(null,map__30611))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);var opts = map__30611__$1;var on_cssload = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30612_30632 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30613_30633 = null;var count__30614_30634 = (0);var i__30615_30635 = (0);while(true){
if((i__30615_30635 < count__30614_30634))
{var f_30636 = cljs.core._nth.call(null,chunk__30613_30633,i__30615_30635);figwheel.client.reload_css_file.call(null,f_30636);
{
var G__30637 = seq__30612_30632;
var G__30638 = chunk__30613_30633;
var G__30639 = count__30614_30634;
var G__30640 = (i__30615_30635 + (1));
seq__30612_30632 = G__30637;
chunk__30613_30633 = G__30638;
count__30614_30634 = G__30639;
i__30615_30635 = G__30640;
continue;
}
} else
{var temp__4126__auto___30641 = cljs.core.seq.call(null,seq__30612_30632);if(temp__4126__auto___30641)
{var seq__30612_30642__$1 = temp__4126__auto___30641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30612_30642__$1))
{var c__4408__auto___30643 = cljs.core.chunk_first.call(null,seq__30612_30642__$1);{
var G__30644 = cljs.core.chunk_rest.call(null,seq__30612_30642__$1);
var G__30645 = c__4408__auto___30643;
var G__30646 = cljs.core.count.call(null,c__4408__auto___30643);
var G__30647 = (0);
seq__30612_30632 = G__30644;
chunk__30613_30633 = G__30645;
count__30614_30634 = G__30646;
i__30615_30635 = G__30647;
continue;
}
} else
{var f_30648 = cljs.core.first.call(null,seq__30612_30642__$1);figwheel.client.reload_css_file.call(null,f_30648);
{
var G__30649 = cljs.core.next.call(null,seq__30612_30642__$1);
var G__30650 = null;
var G__30651 = (0);
var G__30652 = (0);
seq__30612_30632 = G__30649;
chunk__30613_30633 = G__30650;
count__30614_30634 = G__30651;
i__30615_30635 = G__30652;
continue;
}
}
} else
{}
}
break;
}
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload){
return (function (state_30622){var state_val_30623 = (state_30622[(1)]);if((state_val_30623 === (2)))
{var inst_30618 = (state_30622[(2)]);var inst_30619 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30620 = on_cssload.call(null,inst_30619);var state_30622__$1 = (function (){var statearr_30624 = state_30622;(statearr_30624[(7)] = inst_30618);
return statearr_30624;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30622__$1,inst_30620);
} else
{if((state_val_30623 === (1)))
{var inst_30616 = cljs.core.async.timeout.call(null,(100));var state_30622__$1 = state_30622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30622__$1,(2),inst_30616);
} else
{return null;
}
}
});})(c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload))
;return ((function (switch__11098__auto__,c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30628 = [null,null,null,null,null,null,null,null];(statearr_30628[(0)] = state_machine__11099__auto__);
(statearr_30628[(1)] = (1));
return statearr_30628;
});
var state_machine__11099__auto____1 = (function (state_30622){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30622);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30629){if((e30629 instanceof Object))
{var ex__11102__auto__ = e30629;var statearr_30630_30653 = state_30622;(statearr_30630_30653[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30654 = state_30622;
state_30622 = G__30654;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30622){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload))
})();var state__11156__auto__ = (function (){var statearr_30631 = f__11155__auto__.call(null);(statearr_30631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,map__30611,map__30611__$1,opts,on_cssload))
);
return c__11154__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30655){var map__30660 = p__30655;var map__30660__$1 = ((cljs.core.seq_QMARK_.call(null,map__30660))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);var opts = map__30660__$1;var on_compile_fail = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30661 = cljs.core._EQ_;var expr__30662 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30661.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30662)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30661.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30662)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30661.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30662)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30660,map__30660__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30667 = {"detail":url};return obj30667;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30668){var map__30670 = p__30668;var map__30670__$1 = ((cljs.core.seq_QMARK_.call(null,map__30670))?cljs.core.apply.call(null,cljs.core.hash_map,map__30670):map__30670);var class$ = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30671){var map__30677 = p__30671;var map__30677__$1 = ((cljs.core.seq_QMARK_.call(null,map__30677))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677):map__30677);var ed = map__30677__$1;var exception_data = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30678_30682 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30679_30683 = null;var count__30680_30684 = (0);var i__30681_30685 = (0);while(true){
if((i__30681_30685 < count__30680_30684))
{var msg_30686 = cljs.core._nth.call(null,chunk__30679_30683,i__30681_30685);console.log(msg_30686);
{
var G__30687 = seq__30678_30682;
var G__30688 = chunk__30679_30683;
var G__30689 = count__30680_30684;
var G__30690 = (i__30681_30685 + (1));
seq__30678_30682 = G__30687;
chunk__30679_30683 = G__30688;
count__30680_30684 = G__30689;
i__30681_30685 = G__30690;
continue;
}
} else
{var temp__4126__auto___30691 = cljs.core.seq.call(null,seq__30678_30682);if(temp__4126__auto___30691)
{var seq__30678_30692__$1 = temp__4126__auto___30691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30678_30692__$1))
{var c__4408__auto___30693 = cljs.core.chunk_first.call(null,seq__30678_30692__$1);{
var G__30694 = cljs.core.chunk_rest.call(null,seq__30678_30692__$1);
var G__30695 = c__4408__auto___30693;
var G__30696 = cljs.core.count.call(null,c__4408__auto___30693);
var G__30697 = (0);
seq__30678_30682 = G__30694;
chunk__30679_30683 = G__30695;
count__30680_30684 = G__30696;
i__30681_30685 = G__30697;
continue;
}
} else
{var msg_30698 = cljs.core.first.call(null,seq__30678_30692__$1);console.log(msg_30698);
{
var G__30699 = cljs.core.next.call(null,seq__30678_30692__$1);
var G__30700 = null;
var G__30701 = (0);
var G__30702 = (0);
seq__30678_30682 = G__30699;
chunk__30679_30683 = G__30700;
count__30680_30684 = G__30701;
i__30681_30685 = G__30702;
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
var watch_and_reload__delegate = function (p__30703){var map__30705 = p__30703;var map__30705__$1 = ((cljs.core.seq_QMARK_.call(null,map__30705))?cljs.core.apply.call(null,cljs.core.hash_map,map__30705):map__30705);var opts = map__30705__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30703 = null;if (arguments.length > 0) {
  p__30703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30703);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30706){
var p__30703 = cljs.core.seq(arglist__30706);
return watch_and_reload__delegate(p__30703);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
