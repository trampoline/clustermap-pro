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
var log__delegate = function (p__29997,args){var map__29999 = p__29997;var map__29999__$1 = ((cljs.core.seq_QMARK_.call(null,map__29999))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);var debug = cljs.core.get.call(null,map__29999__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__29997,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__29997,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30000){
var p__29997 = cljs.core.first(arglist__30000);
var args = cljs.core.rest(arglist__30000);
return log__delegate(p__29997,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30001){var map__30003 = p__30001;var map__30003__$1 = ((cljs.core.seq_QMARK_.call(null,map__30003))?cljs.core.apply.call(null,cljs.core.hash_map,map__30003):map__30003);var websocket_url = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30004,callback){var map__30006 = p__30004;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var msg = map__30006__$1;var dependency_file = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30006,map__30006__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30006,map__30006__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30007,p__30008){var map__30011 = p__30007;var map__30011__$1 = ((cljs.core.seq_QMARK_.call(null,map__30011))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);var opts = map__30011__$1;var url_rewriter = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30012 = p__30008;var map__30012__$1 = ((cljs.core.seq_QMARK_.call(null,map__30012))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);var d = map__30012__$1;var file = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30013,p__30014){var map__30056 = p__30013;var map__30056__$1 = ((cljs.core.seq_QMARK_.call(null,map__30056))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);var opts = map__30056__$1;var on_jsload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30057 = p__30014;var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);var files = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files){
return (function (state_30080){var state_val_30081 = (state_30080[(1)]);if((state_val_30081 === (6)))
{var inst_30062 = (state_30080[(7)]);var inst_30071 = (state_30080[(2)]);var inst_30072 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30073 = [inst_30062];var inst_30074 = (new cljs.core.PersistentVector(null,1,(5),inst_30072,inst_30073,null));var inst_30075 = cljs.core.apply.call(null,on_jsload,inst_30074);var state_30080__$1 = (function (){var statearr_30082 = state_30080;(statearr_30082[(8)] = inst_30071);
return statearr_30082;
})();var statearr_30083_30097 = state_30080__$1;(statearr_30083_30097[(2)] = inst_30075);
(statearr_30083_30097[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30081 === (5)))
{var inst_30078 = (state_30080[(2)]);var state_30080__$1 = state_30080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30080__$1,inst_30078);
} else
{if((state_val_30081 === (4)))
{var state_30080__$1 = state_30080;var statearr_30084_30098 = state_30080__$1;(statearr_30084_30098[(2)] = null);
(statearr_30084_30098[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30081 === (3)))
{var inst_30062 = (state_30080[(7)]);var inst_30065 = console.debug("Figwheel: loaded these files");var inst_30066 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30062);var inst_30067 = cljs.core.prn_str.call(null,inst_30066);var inst_30068 = console.log(inst_30067);var inst_30069 = cljs.core.async.timeout.call(null,(10));var state_30080__$1 = (function (){var statearr_30085 = state_30080;(statearr_30085[(9)] = inst_30065);
(statearr_30085[(10)] = inst_30068);
return statearr_30085;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30080__$1,(6),inst_30069);
} else
{if((state_val_30081 === (2)))
{var inst_30062 = (state_30080[(7)]);var inst_30062__$1 = (state_30080[(2)]);var inst_30063 = cljs.core.not_empty.call(null,inst_30062__$1);var state_30080__$1 = (function (){var statearr_30086 = state_30080;(statearr_30086[(7)] = inst_30062__$1);
return statearr_30086;
})();if(cljs.core.truth_(inst_30063))
{var statearr_30087_30099 = state_30080__$1;(statearr_30087_30099[(1)] = (3));
} else
{var statearr_30088_30100 = state_30080__$1;(statearr_30088_30100[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30081 === (1)))
{var inst_30058 = before_jsload.call(null,files);var inst_30059 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30060 = figwheel.client.load_all_js_files.call(null,inst_30059);var state_30080__$1 = (function (){var statearr_30089 = state_30080;(statearr_30089[(11)] = inst_30058);
return statearr_30089;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30080__$1,(2),inst_30060);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30093 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30093[(0)] = state_machine__11462__auto__);
(statearr_30093[(1)] = (1));
return statearr_30093;
});
var state_machine__11462__auto____1 = (function (state_30080){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30080);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30094){if((e30094 instanceof Object))
{var ex__11465__auto__ = e30094;var statearr_30095_30101 = state_30080;(statearr_30095_30101[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30102 = state_30080;
state_30080 = G__30102;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30080){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30096 = f__11518__auto__.call(null);(statearr_30096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30056,map__30056__$1,opts,on_jsload,before_jsload,map__30057,map__30057__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30103,link_href){var map__30105 = p__30103;var map__30105__$1 = ((cljs.core.seq_QMARK_.call(null,map__30105))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);var request_url = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30126){var state_val_30127 = (state_30126[(1)]);if((state_val_30127 === (2)))
{var inst_30123 = (state_30126[(2)]);var inst_30124 = parent.removeChild(orig_link);var state_30126__$1 = (function (){var statearr_30128 = state_30126;(statearr_30128[(7)] = inst_30123);
return statearr_30128;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30126__$1,inst_30124);
} else
{if((state_val_30127 === (1)))
{var inst_30121 = cljs.core.async.timeout.call(null,(200));var state_30126__$1 = state_30126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30126__$1,(2),inst_30121);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30132 = [null,null,null,null,null,null,null,null];(statearr_30132[(0)] = state_machine__11462__auto__);
(statearr_30132[(1)] = (1));
return statearr_30132;
});
var state_machine__11462__auto____1 = (function (state_30126){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30126);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30133){if((e30133 instanceof Object))
{var ex__11465__auto__ = e30133;var statearr_30134_30136 = state_30126;(statearr_30134_30136[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30137 = state_30126;
state_30126 = G__30137;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30126){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30135 = f__11518__auto__.call(null);(statearr_30135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30135;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30138){var map__30140 = p__30138;var map__30140__$1 = ((cljs.core.seq_QMARK_.call(null,map__30140))?cljs.core.apply.call(null,cljs.core.hash_map,map__30140):map__30140);var f_data = map__30140__$1;var request_url = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30141,files_msg){var map__30163 = p__30141;var map__30163__$1 = ((cljs.core.seq_QMARK_.call(null,map__30163))?cljs.core.apply.call(null,cljs.core.hash_map,map__30163):map__30163);var opts = map__30163__$1;var on_cssload = cljs.core.get.call(null,map__30163__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30164_30184 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30165_30185 = null;var count__30166_30186 = (0);var i__30167_30187 = (0);while(true){
if((i__30167_30187 < count__30166_30186))
{var f_30188 = cljs.core._nth.call(null,chunk__30165_30185,i__30167_30187);figwheel.client.reload_css_file.call(null,f_30188);
{
var G__30189 = seq__30164_30184;
var G__30190 = chunk__30165_30185;
var G__30191 = count__30166_30186;
var G__30192 = (i__30167_30187 + (1));
seq__30164_30184 = G__30189;
chunk__30165_30185 = G__30190;
count__30166_30186 = G__30191;
i__30167_30187 = G__30192;
continue;
}
} else
{var temp__4126__auto___30193 = cljs.core.seq.call(null,seq__30164_30184);if(temp__4126__auto___30193)
{var seq__30164_30194__$1 = temp__4126__auto___30193;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30164_30194__$1))
{var c__4408__auto___30195 = cljs.core.chunk_first.call(null,seq__30164_30194__$1);{
var G__30196 = cljs.core.chunk_rest.call(null,seq__30164_30194__$1);
var G__30197 = c__4408__auto___30195;
var G__30198 = cljs.core.count.call(null,c__4408__auto___30195);
var G__30199 = (0);
seq__30164_30184 = G__30196;
chunk__30165_30185 = G__30197;
count__30166_30186 = G__30198;
i__30167_30187 = G__30199;
continue;
}
} else
{var f_30200 = cljs.core.first.call(null,seq__30164_30194__$1);figwheel.client.reload_css_file.call(null,f_30200);
{
var G__30201 = cljs.core.next.call(null,seq__30164_30194__$1);
var G__30202 = null;
var G__30203 = (0);
var G__30204 = (0);
seq__30164_30184 = G__30201;
chunk__30165_30185 = G__30202;
count__30166_30186 = G__30203;
i__30167_30187 = G__30204;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload){
return (function (state_30174){var state_val_30175 = (state_30174[(1)]);if((state_val_30175 === (2)))
{var inst_30170 = (state_30174[(2)]);var inst_30171 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30172 = on_cssload.call(null,inst_30171);var state_30174__$1 = (function (){var statearr_30176 = state_30174;(statearr_30176[(7)] = inst_30170);
return statearr_30176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30174__$1,inst_30172);
} else
{if((state_val_30175 === (1)))
{var inst_30168 = cljs.core.async.timeout.call(null,(100));var state_30174__$1 = state_30174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30174__$1,(2),inst_30168);
} else
{return null;
}
}
});})(c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30180 = [null,null,null,null,null,null,null,null];(statearr_30180[(0)] = state_machine__11462__auto__);
(statearr_30180[(1)] = (1));
return statearr_30180;
});
var state_machine__11462__auto____1 = (function (state_30174){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30174);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object))
{var ex__11465__auto__ = e30181;var statearr_30182_30205 = state_30174;(statearr_30182_30205[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30181;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30206 = state_30174;
state_30174 = G__30206;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30183 = f__11518__auto__.call(null);(statearr_30183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30163,map__30163__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30207){var map__30212 = p__30207;var map__30212__$1 = ((cljs.core.seq_QMARK_.call(null,map__30212))?cljs.core.apply.call(null,cljs.core.hash_map,map__30212):map__30212);var opts = map__30212__$1;var on_compile_fail = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30213 = cljs.core._EQ_;var expr__30214 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30213.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30214)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30213.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30214)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30213.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30214)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30212,map__30212__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30219 = {"detail":url};return obj30219;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30220){var map__30222 = p__30220;var map__30222__$1 = ((cljs.core.seq_QMARK_.call(null,map__30222))?cljs.core.apply.call(null,cljs.core.hash_map,map__30222):map__30222);var class$ = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30223){var map__30229 = p__30223;var map__30229__$1 = ((cljs.core.seq_QMARK_.call(null,map__30229))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);var ed = map__30229__$1;var exception_data = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30230_30234 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30231_30235 = null;var count__30232_30236 = (0);var i__30233_30237 = (0);while(true){
if((i__30233_30237 < count__30232_30236))
{var msg_30238 = cljs.core._nth.call(null,chunk__30231_30235,i__30233_30237);console.log(msg_30238);
{
var G__30239 = seq__30230_30234;
var G__30240 = chunk__30231_30235;
var G__30241 = count__30232_30236;
var G__30242 = (i__30233_30237 + (1));
seq__30230_30234 = G__30239;
chunk__30231_30235 = G__30240;
count__30232_30236 = G__30241;
i__30233_30237 = G__30242;
continue;
}
} else
{var temp__4126__auto___30243 = cljs.core.seq.call(null,seq__30230_30234);if(temp__4126__auto___30243)
{var seq__30230_30244__$1 = temp__4126__auto___30243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30230_30244__$1))
{var c__4408__auto___30245 = cljs.core.chunk_first.call(null,seq__30230_30244__$1);{
var G__30246 = cljs.core.chunk_rest.call(null,seq__30230_30244__$1);
var G__30247 = c__4408__auto___30245;
var G__30248 = cljs.core.count.call(null,c__4408__auto___30245);
var G__30249 = (0);
seq__30230_30234 = G__30246;
chunk__30231_30235 = G__30247;
count__30232_30236 = G__30248;
i__30233_30237 = G__30249;
continue;
}
} else
{var msg_30250 = cljs.core.first.call(null,seq__30230_30244__$1);console.log(msg_30250);
{
var G__30251 = cljs.core.next.call(null,seq__30230_30244__$1);
var G__30252 = null;
var G__30253 = (0);
var G__30254 = (0);
seq__30230_30234 = G__30251;
chunk__30231_30235 = G__30252;
count__30232_30236 = G__30253;
i__30233_30237 = G__30254;
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
var watch_and_reload__delegate = function (p__30255){var map__30257 = p__30255;var map__30257__$1 = ((cljs.core.seq_QMARK_.call(null,map__30257))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);var opts = map__30257__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30255 = null;if (arguments.length > 0) {
  p__30255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30255);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30258){
var p__30255 = cljs.core.seq(arglist__30258);
return watch_and_reload__delegate(p__30255);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
