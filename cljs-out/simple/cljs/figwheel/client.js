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
var log__delegate = function (p__31580,args){var map__31582 = p__31580;var map__31582__$1 = ((cljs.core.seq_QMARK_.call(null,map__31582))?cljs.core.apply.call(null,cljs.core.hash_map,map__31582):map__31582);var debug = cljs.core.get.call(null,map__31582__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31580,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31580,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31583){
var p__31580 = cljs.core.first(arglist__31583);
var args = cljs.core.rest(arglist__31583);
return log__delegate(p__31580,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31584){var map__31586 = p__31584;var map__31586__$1 = ((cljs.core.seq_QMARK_.call(null,map__31586))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);var websocket_url = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31587,callback){var map__31589 = p__31587;var map__31589__$1 = ((cljs.core.seq_QMARK_.call(null,map__31589))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);var msg = map__31589__$1;var dependency_file = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31589,map__31589__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31589,map__31589__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31590,p__31591){var map__31594 = p__31590;var map__31594__$1 = ((cljs.core.seq_QMARK_.call(null,map__31594))?cljs.core.apply.call(null,cljs.core.hash_map,map__31594):map__31594);var opts = map__31594__$1;var url_rewriter = cljs.core.get.call(null,map__31594__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31595 = p__31591;var map__31595__$1 = ((cljs.core.seq_QMARK_.call(null,map__31595))?cljs.core.apply.call(null,cljs.core.hash_map,map__31595):map__31595);var d = map__31595__$1;var file = cljs.core.get.call(null,map__31595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31596,p__31597){var map__31639 = p__31596;var map__31639__$1 = ((cljs.core.seq_QMARK_.call(null,map__31639))?cljs.core.apply.call(null,cljs.core.hash_map,map__31639):map__31639);var opts = map__31639__$1;var on_jsload = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31640 = p__31597;var map__31640__$1 = ((cljs.core.seq_QMARK_.call(null,map__31640))?cljs.core.apply.call(null,cljs.core.hash_map,map__31640):map__31640);var files = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files){
return (function (state_31663){var state_val_31664 = (state_31663[(1)]);if((state_val_31664 === (6)))
{var inst_31645 = (state_31663[(7)]);var inst_31654 = (state_31663[(2)]);var inst_31655 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31656 = [inst_31645];var inst_31657 = (new cljs.core.PersistentVector(null,1,(5),inst_31655,inst_31656,null));var inst_31658 = cljs.core.apply.call(null,on_jsload,inst_31657);var state_31663__$1 = (function (){var statearr_31665 = state_31663;(statearr_31665[(8)] = inst_31654);
return statearr_31665;
})();var statearr_31666_31680 = state_31663__$1;(statearr_31666_31680[(2)] = inst_31658);
(statearr_31666_31680[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (5)))
{var inst_31661 = (state_31663[(2)]);var state_31663__$1 = state_31663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31663__$1,inst_31661);
} else
{if((state_val_31664 === (4)))
{var state_31663__$1 = state_31663;var statearr_31667_31681 = state_31663__$1;(statearr_31667_31681[(2)] = null);
(statearr_31667_31681[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (3)))
{var inst_31645 = (state_31663[(7)]);var inst_31648 = console.debug("Figwheel: loaded these files");var inst_31649 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31645);var inst_31650 = cljs.core.prn_str.call(null,inst_31649);var inst_31651 = console.log(inst_31650);var inst_31652 = cljs.core.async.timeout.call(null,(10));var state_31663__$1 = (function (){var statearr_31668 = state_31663;(statearr_31668[(9)] = inst_31648);
(statearr_31668[(10)] = inst_31651);
return statearr_31668;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31663__$1,(6),inst_31652);
} else
{if((state_val_31664 === (2)))
{var inst_31645 = (state_31663[(7)]);var inst_31645__$1 = (state_31663[(2)]);var inst_31646 = cljs.core.not_empty.call(null,inst_31645__$1);var state_31663__$1 = (function (){var statearr_31669 = state_31663;(statearr_31669[(7)] = inst_31645__$1);
return statearr_31669;
})();if(cljs.core.truth_(inst_31646))
{var statearr_31670_31682 = state_31663__$1;(statearr_31670_31682[(1)] = (3));
} else
{var statearr_31671_31683 = state_31663__$1;(statearr_31671_31683[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (1)))
{var inst_31641 = before_jsload.call(null,files);var inst_31642 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31643 = figwheel.client.load_all_js_files.call(null,inst_31642);var state_31663__$1 = (function (){var statearr_31672 = state_31663;(statearr_31672[(11)] = inst_31641);
return statearr_31672;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31663__$1,(2),inst_31643);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31676 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31676[(0)] = state_machine__9111__auto__);
(statearr_31676[(1)] = (1));
return statearr_31676;
});
var state_machine__9111__auto____1 = (function (state_31663){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31663);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object))
{var ex__9114__auto__ = e31677;var statearr_31678_31684 = state_31663;(statearr_31678_31684[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31685 = state_31663;
state_31663 = G__31685;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31663){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31679 = f__9126__auto__.call(null);(statearr_31679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31639,map__31639__$1,opts,on_jsload,before_jsload,map__31640,map__31640__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31686,link_href){var map__31688 = p__31686;var map__31688__$1 = ((cljs.core.seq_QMARK_.call(null,map__31688))?cljs.core.apply.call(null,cljs.core.hash_map,map__31688):map__31688);var request_url = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31709){var state_val_31710 = (state_31709[(1)]);if((state_val_31710 === (2)))
{var inst_31706 = (state_31709[(2)]);var inst_31707 = parent.removeChild(orig_link);var state_31709__$1 = (function (){var statearr_31711 = state_31709;(statearr_31711[(7)] = inst_31706);
return statearr_31711;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31709__$1,inst_31707);
} else
{if((state_val_31710 === (1)))
{var inst_31704 = cljs.core.async.timeout.call(null,(200));var state_31709__$1 = state_31709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(2),inst_31704);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31715 = [null,null,null,null,null,null,null,null];(statearr_31715[(0)] = state_machine__9111__auto__);
(statearr_31715[(1)] = (1));
return statearr_31715;
});
var state_machine__9111__auto____1 = (function (state_31709){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31709);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31716){if((e31716 instanceof Object))
{var ex__9114__auto__ = e31716;var statearr_31717_31719 = state_31709;(statearr_31717_31719[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31709);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31716;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31720 = state_31709;
state_31709 = G__31720;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31718 = f__9126__auto__.call(null);(statearr_31718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31718;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31721){var map__31723 = p__31721;var map__31723__$1 = ((cljs.core.seq_QMARK_.call(null,map__31723))?cljs.core.apply.call(null,cljs.core.hash_map,map__31723):map__31723);var f_data = map__31723__$1;var request_url = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31724,files_msg){var map__31746 = p__31724;var map__31746__$1 = ((cljs.core.seq_QMARK_.call(null,map__31746))?cljs.core.apply.call(null,cljs.core.hash_map,map__31746):map__31746);var opts = map__31746__$1;var on_cssload = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31747_31767 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31748_31768 = null;var count__31749_31769 = (0);var i__31750_31770 = (0);while(true){
if((i__31750_31770 < count__31749_31769))
{var f_31771 = cljs.core._nth.call(null,chunk__31748_31768,i__31750_31770);figwheel.client.reload_css_file.call(null,f_31771);
{
var G__31772 = seq__31747_31767;
var G__31773 = chunk__31748_31768;
var G__31774 = count__31749_31769;
var G__31775 = (i__31750_31770 + (1));
seq__31747_31767 = G__31772;
chunk__31748_31768 = G__31773;
count__31749_31769 = G__31774;
i__31750_31770 = G__31775;
continue;
}
} else
{var temp__4126__auto___31776 = cljs.core.seq.call(null,seq__31747_31767);if(temp__4126__auto___31776)
{var seq__31747_31777__$1 = temp__4126__auto___31776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31747_31777__$1))
{var c__4408__auto___31778 = cljs.core.chunk_first.call(null,seq__31747_31777__$1);{
var G__31779 = cljs.core.chunk_rest.call(null,seq__31747_31777__$1);
var G__31780 = c__4408__auto___31778;
var G__31781 = cljs.core.count.call(null,c__4408__auto___31778);
var G__31782 = (0);
seq__31747_31767 = G__31779;
chunk__31748_31768 = G__31780;
count__31749_31769 = G__31781;
i__31750_31770 = G__31782;
continue;
}
} else
{var f_31783 = cljs.core.first.call(null,seq__31747_31777__$1);figwheel.client.reload_css_file.call(null,f_31783);
{
var G__31784 = cljs.core.next.call(null,seq__31747_31777__$1);
var G__31785 = null;
var G__31786 = (0);
var G__31787 = (0);
seq__31747_31767 = G__31784;
chunk__31748_31768 = G__31785;
count__31749_31769 = G__31786;
i__31750_31770 = G__31787;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload){
return (function (state_31757){var state_val_31758 = (state_31757[(1)]);if((state_val_31758 === (2)))
{var inst_31753 = (state_31757[(2)]);var inst_31754 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31755 = on_cssload.call(null,inst_31754);var state_31757__$1 = (function (){var statearr_31759 = state_31757;(statearr_31759[(7)] = inst_31753);
return statearr_31759;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31757__$1,inst_31755);
} else
{if((state_val_31758 === (1)))
{var inst_31751 = cljs.core.async.timeout.call(null,(100));var state_31757__$1 = state_31757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(2),inst_31751);
} else
{return null;
}
}
});})(c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31763 = [null,null,null,null,null,null,null,null];(statearr_31763[(0)] = state_machine__9111__auto__);
(statearr_31763[(1)] = (1));
return statearr_31763;
});
var state_machine__9111__auto____1 = (function (state_31757){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31757);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31764){if((e31764 instanceof Object))
{var ex__9114__auto__ = e31764;var statearr_31765_31788 = state_31757;(statearr_31765_31788[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31764;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31789 = state_31757;
state_31757 = G__31789;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31766 = f__9126__auto__.call(null);(statearr_31766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31746,map__31746__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31790){var map__31795 = p__31790;var map__31795__$1 = ((cljs.core.seq_QMARK_.call(null,map__31795))?cljs.core.apply.call(null,cljs.core.hash_map,map__31795):map__31795);var opts = map__31795__$1;var on_compile_fail = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31796 = cljs.core._EQ_;var expr__31797 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31796.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31797)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31796.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31797)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31796.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31797)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31795,map__31795__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31802 = {"detail":url};return obj31802;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31803){var map__31805 = p__31803;var map__31805__$1 = ((cljs.core.seq_QMARK_.call(null,map__31805))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);var class$ = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31806){var map__31812 = p__31806;var map__31812__$1 = ((cljs.core.seq_QMARK_.call(null,map__31812))?cljs.core.apply.call(null,cljs.core.hash_map,map__31812):map__31812);var ed = map__31812__$1;var exception_data = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31813_31817 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31814_31818 = null;var count__31815_31819 = (0);var i__31816_31820 = (0);while(true){
if((i__31816_31820 < count__31815_31819))
{var msg_31821 = cljs.core._nth.call(null,chunk__31814_31818,i__31816_31820);console.log(msg_31821);
{
var G__31822 = seq__31813_31817;
var G__31823 = chunk__31814_31818;
var G__31824 = count__31815_31819;
var G__31825 = (i__31816_31820 + (1));
seq__31813_31817 = G__31822;
chunk__31814_31818 = G__31823;
count__31815_31819 = G__31824;
i__31816_31820 = G__31825;
continue;
}
} else
{var temp__4126__auto___31826 = cljs.core.seq.call(null,seq__31813_31817);if(temp__4126__auto___31826)
{var seq__31813_31827__$1 = temp__4126__auto___31826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31813_31827__$1))
{var c__4408__auto___31828 = cljs.core.chunk_first.call(null,seq__31813_31827__$1);{
var G__31829 = cljs.core.chunk_rest.call(null,seq__31813_31827__$1);
var G__31830 = c__4408__auto___31828;
var G__31831 = cljs.core.count.call(null,c__4408__auto___31828);
var G__31832 = (0);
seq__31813_31817 = G__31829;
chunk__31814_31818 = G__31830;
count__31815_31819 = G__31831;
i__31816_31820 = G__31832;
continue;
}
} else
{var msg_31833 = cljs.core.first.call(null,seq__31813_31827__$1);console.log(msg_31833);
{
var G__31834 = cljs.core.next.call(null,seq__31813_31827__$1);
var G__31835 = null;
var G__31836 = (0);
var G__31837 = (0);
seq__31813_31817 = G__31834;
chunk__31814_31818 = G__31835;
count__31815_31819 = G__31836;
i__31816_31820 = G__31837;
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
var watch_and_reload__delegate = function (p__31838){var map__31840 = p__31838;var map__31840__$1 = ((cljs.core.seq_QMARK_.call(null,map__31840))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);var opts = map__31840__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31838 = null;if (arguments.length > 0) {
  p__31838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31838);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31841){
var p__31838 = cljs.core.seq(arglist__31841);
return watch_and_reload__delegate(p__31838);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
