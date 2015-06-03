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
var log__delegate = function (p__29998,args){var map__30000 = p__29998;var map__30000__$1 = ((cljs.core.seq_QMARK_.call(null,map__30000))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);var debug = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__29998,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__29998,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30001){
var p__29998 = cljs.core.first(arglist__30001);
var args = cljs.core.rest(arglist__30001);
return log__delegate(p__29998,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30002){var map__30004 = p__30002;var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);var websocket_url = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30005,callback){var map__30007 = p__30005;var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);var msg = map__30007__$1;var dependency_file = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30007,map__30007__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30007,map__30007__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30008,p__30009){var map__30012 = p__30008;var map__30012__$1 = ((cljs.core.seq_QMARK_.call(null,map__30012))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);var opts = map__30012__$1;var url_rewriter = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30013 = p__30009;var map__30013__$1 = ((cljs.core.seq_QMARK_.call(null,map__30013))?cljs.core.apply.call(null,cljs.core.hash_map,map__30013):map__30013);var d = map__30013__$1;var file = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30014,p__30015){var map__30057 = p__30014;var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);var opts = map__30057__$1;var on_jsload = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30058 = p__30015;var map__30058__$1 = ((cljs.core.seq_QMARK_.call(null,map__30058))?cljs.core.apply.call(null,cljs.core.hash_map,map__30058):map__30058);var files = cljs.core.get.call(null,map__30058__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files){
return (function (state_30081){var state_val_30082 = (state_30081[(1)]);if((state_val_30082 === (6)))
{var inst_30063 = (state_30081[(7)]);var inst_30072 = (state_30081[(2)]);var inst_30073 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30074 = [inst_30063];var inst_30075 = (new cljs.core.PersistentVector(null,1,(5),inst_30073,inst_30074,null));var inst_30076 = cljs.core.apply.call(null,on_jsload,inst_30075);var state_30081__$1 = (function (){var statearr_30083 = state_30081;(statearr_30083[(8)] = inst_30072);
return statearr_30083;
})();var statearr_30084_30098 = state_30081__$1;(statearr_30084_30098[(2)] = inst_30076);
(statearr_30084_30098[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30082 === (5)))
{var inst_30079 = (state_30081[(2)]);var state_30081__$1 = state_30081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30081__$1,inst_30079);
} else
{if((state_val_30082 === (4)))
{var state_30081__$1 = state_30081;var statearr_30085_30099 = state_30081__$1;(statearr_30085_30099[(2)] = null);
(statearr_30085_30099[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30082 === (3)))
{var inst_30063 = (state_30081[(7)]);var inst_30066 = console.debug("Figwheel: loaded these files");var inst_30067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30063);var inst_30068 = cljs.core.prn_str.call(null,inst_30067);var inst_30069 = console.log(inst_30068);var inst_30070 = cljs.core.async.timeout.call(null,(10));var state_30081__$1 = (function (){var statearr_30086 = state_30081;(statearr_30086[(9)] = inst_30066);
(statearr_30086[(10)] = inst_30069);
return statearr_30086;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30081__$1,(6),inst_30070);
} else
{if((state_val_30082 === (2)))
{var inst_30063 = (state_30081[(7)]);var inst_30063__$1 = (state_30081[(2)]);var inst_30064 = cljs.core.not_empty.call(null,inst_30063__$1);var state_30081__$1 = (function (){var statearr_30087 = state_30081;(statearr_30087[(7)] = inst_30063__$1);
return statearr_30087;
})();if(cljs.core.truth_(inst_30064))
{var statearr_30088_30100 = state_30081__$1;(statearr_30088_30100[(1)] = (3));
} else
{var statearr_30089_30101 = state_30081__$1;(statearr_30089_30101[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30082 === (1)))
{var inst_30059 = before_jsload.call(null,files);var inst_30060 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30061 = figwheel.client.load_all_js_files.call(null,inst_30060);var state_30081__$1 = (function (){var statearr_30090 = state_30081;(statearr_30090[(11)] = inst_30059);
return statearr_30090;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30081__$1,(2),inst_30061);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30094 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30094[(0)] = state_machine__11462__auto__);
(statearr_30094[(1)] = (1));
return statearr_30094;
});
var state_machine__11462__auto____1 = (function (state_30081){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30081);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30095){if((e30095 instanceof Object))
{var ex__11465__auto__ = e30095;var statearr_30096_30102 = state_30081;(statearr_30096_30102[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30103 = state_30081;
state_30081 = G__30103;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30081){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30097 = f__11518__auto__.call(null);(statearr_30097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30057,map__30057__$1,opts,on_jsload,before_jsload,map__30058,map__30058__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30104,link_href){var map__30106 = p__30104;var map__30106__$1 = ((cljs.core.seq_QMARK_.call(null,map__30106))?cljs.core.apply.call(null,cljs.core.hash_map,map__30106):map__30106);var request_url = cljs.core.get.call(null,map__30106__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30127){var state_val_30128 = (state_30127[(1)]);if((state_val_30128 === (2)))
{var inst_30124 = (state_30127[(2)]);var inst_30125 = parent.removeChild(orig_link);var state_30127__$1 = (function (){var statearr_30129 = state_30127;(statearr_30129[(7)] = inst_30124);
return statearr_30129;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30127__$1,inst_30125);
} else
{if((state_val_30128 === (1)))
{var inst_30122 = cljs.core.async.timeout.call(null,(200));var state_30127__$1 = state_30127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30127__$1,(2),inst_30122);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30133 = [null,null,null,null,null,null,null,null];(statearr_30133[(0)] = state_machine__11462__auto__);
(statearr_30133[(1)] = (1));
return statearr_30133;
});
var state_machine__11462__auto____1 = (function (state_30127){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30127);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30134){if((e30134 instanceof Object))
{var ex__11465__auto__ = e30134;var statearr_30135_30137 = state_30127;(statearr_30135_30137[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30138 = state_30127;
state_30127 = G__30138;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30127){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30136 = f__11518__auto__.call(null);(statearr_30136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30136;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30139){var map__30141 = p__30139;var map__30141__$1 = ((cljs.core.seq_QMARK_.call(null,map__30141))?cljs.core.apply.call(null,cljs.core.hash_map,map__30141):map__30141);var f_data = map__30141__$1;var request_url = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30142,files_msg){var map__30164 = p__30142;var map__30164__$1 = ((cljs.core.seq_QMARK_.call(null,map__30164))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);var opts = map__30164__$1;var on_cssload = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30165_30185 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30166_30186 = null;var count__30167_30187 = (0);var i__30168_30188 = (0);while(true){
if((i__30168_30188 < count__30167_30187))
{var f_30189 = cljs.core._nth.call(null,chunk__30166_30186,i__30168_30188);figwheel.client.reload_css_file.call(null,f_30189);
{
var G__30190 = seq__30165_30185;
var G__30191 = chunk__30166_30186;
var G__30192 = count__30167_30187;
var G__30193 = (i__30168_30188 + (1));
seq__30165_30185 = G__30190;
chunk__30166_30186 = G__30191;
count__30167_30187 = G__30192;
i__30168_30188 = G__30193;
continue;
}
} else
{var temp__4126__auto___30194 = cljs.core.seq.call(null,seq__30165_30185);if(temp__4126__auto___30194)
{var seq__30165_30195__$1 = temp__4126__auto___30194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30165_30195__$1))
{var c__4408__auto___30196 = cljs.core.chunk_first.call(null,seq__30165_30195__$1);{
var G__30197 = cljs.core.chunk_rest.call(null,seq__30165_30195__$1);
var G__30198 = c__4408__auto___30196;
var G__30199 = cljs.core.count.call(null,c__4408__auto___30196);
var G__30200 = (0);
seq__30165_30185 = G__30197;
chunk__30166_30186 = G__30198;
count__30167_30187 = G__30199;
i__30168_30188 = G__30200;
continue;
}
} else
{var f_30201 = cljs.core.first.call(null,seq__30165_30195__$1);figwheel.client.reload_css_file.call(null,f_30201);
{
var G__30202 = cljs.core.next.call(null,seq__30165_30195__$1);
var G__30203 = null;
var G__30204 = (0);
var G__30205 = (0);
seq__30165_30185 = G__30202;
chunk__30166_30186 = G__30203;
count__30167_30187 = G__30204;
i__30168_30188 = G__30205;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload){
return (function (state_30175){var state_val_30176 = (state_30175[(1)]);if((state_val_30176 === (2)))
{var inst_30171 = (state_30175[(2)]);var inst_30172 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30173 = on_cssload.call(null,inst_30172);var state_30175__$1 = (function (){var statearr_30177 = state_30175;(statearr_30177[(7)] = inst_30171);
return statearr_30177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30175__$1,inst_30173);
} else
{if((state_val_30176 === (1)))
{var inst_30169 = cljs.core.async.timeout.call(null,(100));var state_30175__$1 = state_30175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30175__$1,(2),inst_30169);
} else
{return null;
}
}
});})(c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30181 = [null,null,null,null,null,null,null,null];(statearr_30181[(0)] = state_machine__11462__auto__);
(statearr_30181[(1)] = (1));
return statearr_30181;
});
var state_machine__11462__auto____1 = (function (state_30175){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30175);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30182){if((e30182 instanceof Object))
{var ex__11465__auto__ = e30182;var statearr_30183_30206 = state_30175;(statearr_30183_30206[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30207 = state_30175;
state_30175 = G__30207;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30175){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30184 = f__11518__auto__.call(null);(statearr_30184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30164,map__30164__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30208){var map__30213 = p__30208;var map__30213__$1 = ((cljs.core.seq_QMARK_.call(null,map__30213))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);var opts = map__30213__$1;var on_compile_fail = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30214 = cljs.core._EQ_;var expr__30215 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30214.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30215)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30214.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30215)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30214.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30215)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30213,map__30213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30220 = {"detail":url};return obj30220;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30221){var map__30223 = p__30221;var map__30223__$1 = ((cljs.core.seq_QMARK_.call(null,map__30223))?cljs.core.apply.call(null,cljs.core.hash_map,map__30223):map__30223);var class$ = cljs.core.get.call(null,map__30223__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30223__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30224){var map__30230 = p__30224;var map__30230__$1 = ((cljs.core.seq_QMARK_.call(null,map__30230))?cljs.core.apply.call(null,cljs.core.hash_map,map__30230):map__30230);var ed = map__30230__$1;var exception_data = cljs.core.get.call(null,map__30230__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30230__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30231_30235 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30232_30236 = null;var count__30233_30237 = (0);var i__30234_30238 = (0);while(true){
if((i__30234_30238 < count__30233_30237))
{var msg_30239 = cljs.core._nth.call(null,chunk__30232_30236,i__30234_30238);console.log(msg_30239);
{
var G__30240 = seq__30231_30235;
var G__30241 = chunk__30232_30236;
var G__30242 = count__30233_30237;
var G__30243 = (i__30234_30238 + (1));
seq__30231_30235 = G__30240;
chunk__30232_30236 = G__30241;
count__30233_30237 = G__30242;
i__30234_30238 = G__30243;
continue;
}
} else
{var temp__4126__auto___30244 = cljs.core.seq.call(null,seq__30231_30235);if(temp__4126__auto___30244)
{var seq__30231_30245__$1 = temp__4126__auto___30244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30231_30245__$1))
{var c__4408__auto___30246 = cljs.core.chunk_first.call(null,seq__30231_30245__$1);{
var G__30247 = cljs.core.chunk_rest.call(null,seq__30231_30245__$1);
var G__30248 = c__4408__auto___30246;
var G__30249 = cljs.core.count.call(null,c__4408__auto___30246);
var G__30250 = (0);
seq__30231_30235 = G__30247;
chunk__30232_30236 = G__30248;
count__30233_30237 = G__30249;
i__30234_30238 = G__30250;
continue;
}
} else
{var msg_30251 = cljs.core.first.call(null,seq__30231_30245__$1);console.log(msg_30251);
{
var G__30252 = cljs.core.next.call(null,seq__30231_30245__$1);
var G__30253 = null;
var G__30254 = (0);
var G__30255 = (0);
seq__30231_30235 = G__30252;
chunk__30232_30236 = G__30253;
count__30233_30237 = G__30254;
i__30234_30238 = G__30255;
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
var watch_and_reload__delegate = function (p__30256){var map__30258 = p__30256;var map__30258__$1 = ((cljs.core.seq_QMARK_.call(null,map__30258))?cljs.core.apply.call(null,cljs.core.hash_map,map__30258):map__30258);var opts = map__30258__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30256 = null;if (arguments.length > 0) {
  p__30256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30256);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30259){
var p__30256 = cljs.core.seq(arglist__30259);
return watch_and_reload__delegate(p__30256);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
