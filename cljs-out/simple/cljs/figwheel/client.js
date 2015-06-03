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
var log__delegate = function (p__30000,args){var map__30002 = p__30000;var map__30002__$1 = ((cljs.core.seq_QMARK_.call(null,map__30002))?cljs.core.apply.call(null,cljs.core.hash_map,map__30002):map__30002);var debug = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30000,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30000,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30003){
var p__30000 = cljs.core.first(arglist__30003);
var args = cljs.core.rest(arglist__30003);
return log__delegate(p__30000,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30004){var map__30006 = p__30004;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var websocket_url = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30007,callback){var map__30009 = p__30007;var map__30009__$1 = ((cljs.core.seq_QMARK_.call(null,map__30009))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);var msg = map__30009__$1;var dependency_file = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30009,map__30009__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30009,map__30009__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30010,p__30011){var map__30014 = p__30010;var map__30014__$1 = ((cljs.core.seq_QMARK_.call(null,map__30014))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);var opts = map__30014__$1;var url_rewriter = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30015 = p__30011;var map__30015__$1 = ((cljs.core.seq_QMARK_.call(null,map__30015))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);var d = map__30015__$1;var file = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30016,p__30017){var map__30059 = p__30016;var map__30059__$1 = ((cljs.core.seq_QMARK_.call(null,map__30059))?cljs.core.apply.call(null,cljs.core.hash_map,map__30059):map__30059);var opts = map__30059__$1;var on_jsload = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30060 = p__30017;var map__30060__$1 = ((cljs.core.seq_QMARK_.call(null,map__30060))?cljs.core.apply.call(null,cljs.core.hash_map,map__30060):map__30060);var files = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files){
return (function (state_30083){var state_val_30084 = (state_30083[(1)]);if((state_val_30084 === (6)))
{var inst_30065 = (state_30083[(7)]);var inst_30074 = (state_30083[(2)]);var inst_30075 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30076 = [inst_30065];var inst_30077 = (new cljs.core.PersistentVector(null,1,(5),inst_30075,inst_30076,null));var inst_30078 = cljs.core.apply.call(null,on_jsload,inst_30077);var state_30083__$1 = (function (){var statearr_30085 = state_30083;(statearr_30085[(8)] = inst_30074);
return statearr_30085;
})();var statearr_30086_30100 = state_30083__$1;(statearr_30086_30100[(2)] = inst_30078);
(statearr_30086_30100[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (5)))
{var inst_30081 = (state_30083[(2)]);var state_30083__$1 = state_30083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30083__$1,inst_30081);
} else
{if((state_val_30084 === (4)))
{var state_30083__$1 = state_30083;var statearr_30087_30101 = state_30083__$1;(statearr_30087_30101[(2)] = null);
(statearr_30087_30101[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (3)))
{var inst_30065 = (state_30083[(7)]);var inst_30068 = console.debug("Figwheel: loaded these files");var inst_30069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30065);var inst_30070 = cljs.core.prn_str.call(null,inst_30069);var inst_30071 = console.log(inst_30070);var inst_30072 = cljs.core.async.timeout.call(null,(10));var state_30083__$1 = (function (){var statearr_30088 = state_30083;(statearr_30088[(9)] = inst_30071);
(statearr_30088[(10)] = inst_30068);
return statearr_30088;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30083__$1,(6),inst_30072);
} else
{if((state_val_30084 === (2)))
{var inst_30065 = (state_30083[(7)]);var inst_30065__$1 = (state_30083[(2)]);var inst_30066 = cljs.core.not_empty.call(null,inst_30065__$1);var state_30083__$1 = (function (){var statearr_30089 = state_30083;(statearr_30089[(7)] = inst_30065__$1);
return statearr_30089;
})();if(cljs.core.truth_(inst_30066))
{var statearr_30090_30102 = state_30083__$1;(statearr_30090_30102[(1)] = (3));
} else
{var statearr_30091_30103 = state_30083__$1;(statearr_30091_30103[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (1)))
{var inst_30061 = before_jsload.call(null,files);var inst_30062 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30063 = figwheel.client.load_all_js_files.call(null,inst_30062);var state_30083__$1 = (function (){var statearr_30092 = state_30083;(statearr_30092[(11)] = inst_30061);
return statearr_30092;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30083__$1,(2),inst_30063);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30096 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30096[(0)] = state_machine__11242__auto__);
(statearr_30096[(1)] = (1));
return statearr_30096;
});
var state_machine__11242__auto____1 = (function (state_30083){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30083);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30097){if((e30097 instanceof Object))
{var ex__11245__auto__ = e30097;var statearr_30098_30104 = state_30083;(statearr_30098_30104[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30083);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30097;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30105 = state_30083;
state_30083 = G__30105;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files))
})();var state__11299__auto__ = (function (){var statearr_30099 = f__11298__auto__.call(null);(statearr_30099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30059,map__30059__$1,opts,on_jsload,before_jsload,map__30060,map__30060__$1,files))
);
return c__11297__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30106,link_href){var map__30108 = p__30106;var map__30108__$1 = ((cljs.core.seq_QMARK_.call(null,map__30108))?cljs.core.apply.call(null,cljs.core.hash_map,map__30108):map__30108);var request_url = cljs.core.get.call(null,map__30108__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,parent){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,parent){
return (function (state_30129){var state_val_30130 = (state_30129[(1)]);if((state_val_30130 === (2)))
{var inst_30126 = (state_30129[(2)]);var inst_30127 = parent.removeChild(orig_link);var state_30129__$1 = (function (){var statearr_30131 = state_30129;(statearr_30131[(7)] = inst_30126);
return statearr_30131;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else
{if((state_val_30130 === (1)))
{var inst_30124 = cljs.core.async.timeout.call(null,(200));var state_30129__$1 = state_30129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30129__$1,(2),inst_30124);
} else
{return null;
}
}
});})(c__11297__auto__,parent))
;return ((function (switch__11241__auto__,c__11297__auto__,parent){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30135 = [null,null,null,null,null,null,null,null];(statearr_30135[(0)] = state_machine__11242__auto__);
(statearr_30135[(1)] = (1));
return statearr_30135;
});
var state_machine__11242__auto____1 = (function (state_30129){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30129);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30136){if((e30136 instanceof Object))
{var ex__11245__auto__ = e30136;var statearr_30137_30139 = state_30129;(statearr_30137_30139[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30140 = state_30129;
state_30129 = G__30140;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,parent))
})();var state__11299__auto__ = (function (){var statearr_30138 = f__11298__auto__.call(null);(statearr_30138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,parent))
);
return c__11297__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30141){var map__30143 = p__30141;var map__30143__$1 = ((cljs.core.seq_QMARK_.call(null,map__30143))?cljs.core.apply.call(null,cljs.core.hash_map,map__30143):map__30143);var f_data = map__30143__$1;var request_url = cljs.core.get.call(null,map__30143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30143__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30144,files_msg){var map__30166 = p__30144;var map__30166__$1 = ((cljs.core.seq_QMARK_.call(null,map__30166))?cljs.core.apply.call(null,cljs.core.hash_map,map__30166):map__30166);var opts = map__30166__$1;var on_cssload = cljs.core.get.call(null,map__30166__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30167_30187 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30168_30188 = null;var count__30169_30189 = (0);var i__30170_30190 = (0);while(true){
if((i__30170_30190 < count__30169_30189))
{var f_30191 = cljs.core._nth.call(null,chunk__30168_30188,i__30170_30190);figwheel.client.reload_css_file.call(null,f_30191);
{
var G__30192 = seq__30167_30187;
var G__30193 = chunk__30168_30188;
var G__30194 = count__30169_30189;
var G__30195 = (i__30170_30190 + (1));
seq__30167_30187 = G__30192;
chunk__30168_30188 = G__30193;
count__30169_30189 = G__30194;
i__30170_30190 = G__30195;
continue;
}
} else
{var temp__4126__auto___30196 = cljs.core.seq.call(null,seq__30167_30187);if(temp__4126__auto___30196)
{var seq__30167_30197__$1 = temp__4126__auto___30196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30167_30197__$1))
{var c__4408__auto___30198 = cljs.core.chunk_first.call(null,seq__30167_30197__$1);{
var G__30199 = cljs.core.chunk_rest.call(null,seq__30167_30197__$1);
var G__30200 = c__4408__auto___30198;
var G__30201 = cljs.core.count.call(null,c__4408__auto___30198);
var G__30202 = (0);
seq__30167_30187 = G__30199;
chunk__30168_30188 = G__30200;
count__30169_30189 = G__30201;
i__30170_30190 = G__30202;
continue;
}
} else
{var f_30203 = cljs.core.first.call(null,seq__30167_30197__$1);figwheel.client.reload_css_file.call(null,f_30203);
{
var G__30204 = cljs.core.next.call(null,seq__30167_30197__$1);
var G__30205 = null;
var G__30206 = (0);
var G__30207 = (0);
seq__30167_30187 = G__30204;
chunk__30168_30188 = G__30205;
count__30169_30189 = G__30206;
i__30170_30190 = G__30207;
continue;
}
}
} else
{}
}
break;
}
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload){
return (function (state_30177){var state_val_30178 = (state_30177[(1)]);if((state_val_30178 === (2)))
{var inst_30173 = (state_30177[(2)]);var inst_30174 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30175 = on_cssload.call(null,inst_30174);var state_30177__$1 = (function (){var statearr_30179 = state_30177;(statearr_30179[(7)] = inst_30173);
return statearr_30179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30177__$1,inst_30175);
} else
{if((state_val_30178 === (1)))
{var inst_30171 = cljs.core.async.timeout.call(null,(100));var state_30177__$1 = state_30177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30177__$1,(2),inst_30171);
} else
{return null;
}
}
});})(c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30183 = [null,null,null,null,null,null,null,null];(statearr_30183[(0)] = state_machine__11242__auto__);
(statearr_30183[(1)] = (1));
return statearr_30183;
});
var state_machine__11242__auto____1 = (function (state_30177){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30177);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30184){if((e30184 instanceof Object))
{var ex__11245__auto__ = e30184;var statearr_30185_30208 = state_30177;(statearr_30185_30208[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30209 = state_30177;
state_30177 = G__30209;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload))
})();var state__11299__auto__ = (function (){var statearr_30186 = f__11298__auto__.call(null);(statearr_30186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30166,map__30166__$1,opts,on_cssload))
);
return c__11297__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30210){var map__30215 = p__30210;var map__30215__$1 = ((cljs.core.seq_QMARK_.call(null,map__30215))?cljs.core.apply.call(null,cljs.core.hash_map,map__30215):map__30215);var opts = map__30215__$1;var on_compile_fail = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30216 = cljs.core._EQ_;var expr__30217 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30216.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30217)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30216.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30217)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30216.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30217)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30215,map__30215__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30222 = {"detail":url};return obj30222;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30223){var map__30225 = p__30223;var map__30225__$1 = ((cljs.core.seq_QMARK_.call(null,map__30225))?cljs.core.apply.call(null,cljs.core.hash_map,map__30225):map__30225);var class$ = cljs.core.get.call(null,map__30225__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30225__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30226){var map__30232 = p__30226;var map__30232__$1 = ((cljs.core.seq_QMARK_.call(null,map__30232))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232):map__30232);var ed = map__30232__$1;var exception_data = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30233_30237 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30234_30238 = null;var count__30235_30239 = (0);var i__30236_30240 = (0);while(true){
if((i__30236_30240 < count__30235_30239))
{var msg_30241 = cljs.core._nth.call(null,chunk__30234_30238,i__30236_30240);console.log(msg_30241);
{
var G__30242 = seq__30233_30237;
var G__30243 = chunk__30234_30238;
var G__30244 = count__30235_30239;
var G__30245 = (i__30236_30240 + (1));
seq__30233_30237 = G__30242;
chunk__30234_30238 = G__30243;
count__30235_30239 = G__30244;
i__30236_30240 = G__30245;
continue;
}
} else
{var temp__4126__auto___30246 = cljs.core.seq.call(null,seq__30233_30237);if(temp__4126__auto___30246)
{var seq__30233_30247__$1 = temp__4126__auto___30246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30233_30247__$1))
{var c__4408__auto___30248 = cljs.core.chunk_first.call(null,seq__30233_30247__$1);{
var G__30249 = cljs.core.chunk_rest.call(null,seq__30233_30247__$1);
var G__30250 = c__4408__auto___30248;
var G__30251 = cljs.core.count.call(null,c__4408__auto___30248);
var G__30252 = (0);
seq__30233_30237 = G__30249;
chunk__30234_30238 = G__30250;
count__30235_30239 = G__30251;
i__30236_30240 = G__30252;
continue;
}
} else
{var msg_30253 = cljs.core.first.call(null,seq__30233_30247__$1);console.log(msg_30253);
{
var G__30254 = cljs.core.next.call(null,seq__30233_30247__$1);
var G__30255 = null;
var G__30256 = (0);
var G__30257 = (0);
seq__30233_30237 = G__30254;
chunk__30234_30238 = G__30255;
count__30235_30239 = G__30256;
i__30236_30240 = G__30257;
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
var watch_and_reload__delegate = function (p__30258){var map__30260 = p__30258;var map__30260__$1 = ((cljs.core.seq_QMARK_.call(null,map__30260))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260):map__30260);var opts = map__30260__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30258 = null;if (arguments.length > 0) {
  p__30258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30258);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30261){
var p__30258 = cljs.core.seq(arglist__30261);
return watch_and_reload__delegate(p__30258);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
