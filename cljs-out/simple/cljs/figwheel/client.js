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
var log__delegate = function (p__30069,args){var map__30071 = p__30069;var map__30071__$1 = ((cljs.core.seq_QMARK_.call(null,map__30071))?cljs.core.apply.call(null,cljs.core.hash_map,map__30071):map__30071);var debug = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30069,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30069,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30072){
var p__30069 = cljs.core.first(arglist__30072);
var args = cljs.core.rest(arglist__30072);
return log__delegate(p__30069,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30073){var map__30075 = p__30073;var map__30075__$1 = ((cljs.core.seq_QMARK_.call(null,map__30075))?cljs.core.apply.call(null,cljs.core.hash_map,map__30075):map__30075);var websocket_url = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30076,callback){var map__30078 = p__30076;var map__30078__$1 = ((cljs.core.seq_QMARK_.call(null,map__30078))?cljs.core.apply.call(null,cljs.core.hash_map,map__30078):map__30078);var msg = map__30078__$1;var dependency_file = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30078,map__30078__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30078,map__30078__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30079,p__30080){var map__30083 = p__30079;var map__30083__$1 = ((cljs.core.seq_QMARK_.call(null,map__30083))?cljs.core.apply.call(null,cljs.core.hash_map,map__30083):map__30083);var opts = map__30083__$1;var url_rewriter = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30084 = p__30080;var map__30084__$1 = ((cljs.core.seq_QMARK_.call(null,map__30084))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);var d = map__30084__$1;var file = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30085,p__30086){var map__30128 = p__30085;var map__30128__$1 = ((cljs.core.seq_QMARK_.call(null,map__30128))?cljs.core.apply.call(null,cljs.core.hash_map,map__30128):map__30128);var opts = map__30128__$1;var on_jsload = cljs.core.get.call(null,map__30128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30129 = p__30086;var map__30129__$1 = ((cljs.core.seq_QMARK_.call(null,map__30129))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);var files = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files){
return (function (state_30152){var state_val_30153 = (state_30152[(1)]);if((state_val_30153 === (6)))
{var inst_30134 = (state_30152[(7)]);var inst_30143 = (state_30152[(2)]);var inst_30144 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30145 = [inst_30134];var inst_30146 = (new cljs.core.PersistentVector(null,1,(5),inst_30144,inst_30145,null));var inst_30147 = cljs.core.apply.call(null,on_jsload,inst_30146);var state_30152__$1 = (function (){var statearr_30154 = state_30152;(statearr_30154[(8)] = inst_30143);
return statearr_30154;
})();var statearr_30155_30169 = state_30152__$1;(statearr_30155_30169[(2)] = inst_30147);
(statearr_30155_30169[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30153 === (5)))
{var inst_30150 = (state_30152[(2)]);var state_30152__$1 = state_30152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30152__$1,inst_30150);
} else
{if((state_val_30153 === (4)))
{var state_30152__$1 = state_30152;var statearr_30156_30170 = state_30152__$1;(statearr_30156_30170[(2)] = null);
(statearr_30156_30170[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30153 === (3)))
{var inst_30134 = (state_30152[(7)]);var inst_30137 = console.debug("Figwheel: loaded these files");var inst_30138 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30134);var inst_30139 = cljs.core.prn_str.call(null,inst_30138);var inst_30140 = console.log(inst_30139);var inst_30141 = cljs.core.async.timeout.call(null,(10));var state_30152__$1 = (function (){var statearr_30157 = state_30152;(statearr_30157[(9)] = inst_30137);
(statearr_30157[(10)] = inst_30140);
return statearr_30157;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30152__$1,(6),inst_30141);
} else
{if((state_val_30153 === (2)))
{var inst_30134 = (state_30152[(7)]);var inst_30134__$1 = (state_30152[(2)]);var inst_30135 = cljs.core.not_empty.call(null,inst_30134__$1);var state_30152__$1 = (function (){var statearr_30158 = state_30152;(statearr_30158[(7)] = inst_30134__$1);
return statearr_30158;
})();if(cljs.core.truth_(inst_30135))
{var statearr_30159_30171 = state_30152__$1;(statearr_30159_30171[(1)] = (3));
} else
{var statearr_30160_30172 = state_30152__$1;(statearr_30160_30172[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30153 === (1)))
{var inst_30130 = before_jsload.call(null,files);var inst_30131 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30132 = figwheel.client.load_all_js_files.call(null,inst_30131);var state_30152__$1 = (function (){var statearr_30161 = state_30152;(statearr_30161[(11)] = inst_30130);
return statearr_30161;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30152__$1,(2),inst_30132);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30165 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30165[(0)] = state_machine__11242__auto__);
(statearr_30165[(1)] = (1));
return statearr_30165;
});
var state_machine__11242__auto____1 = (function (state_30152){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30152);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30166){if((e30166 instanceof Object))
{var ex__11245__auto__ = e30166;var statearr_30167_30173 = state_30152;(statearr_30167_30173[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30166;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30174 = state_30152;
state_30152 = G__30174;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files))
})();var state__11299__auto__ = (function (){var statearr_30168 = f__11298__auto__.call(null);(statearr_30168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30128,map__30128__$1,opts,on_jsload,before_jsload,map__30129,map__30129__$1,files))
);
return c__11297__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30175,link_href){var map__30177 = p__30175;var map__30177__$1 = ((cljs.core.seq_QMARK_.call(null,map__30177))?cljs.core.apply.call(null,cljs.core.hash_map,map__30177):map__30177);var request_url = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30198){var state_val_30199 = (state_30198[(1)]);if((state_val_30199 === (2)))
{var inst_30195 = (state_30198[(2)]);var inst_30196 = parent.removeChild(orig_link);var state_30198__$1 = (function (){var statearr_30200 = state_30198;(statearr_30200[(7)] = inst_30195);
return statearr_30200;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30198__$1,inst_30196);
} else
{if((state_val_30199 === (1)))
{var inst_30193 = cljs.core.async.timeout.call(null,(200));var state_30198__$1 = state_30198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30198__$1,(2),inst_30193);
} else
{return null;
}
}
});})(c__11297__auto__,parent))
;return ((function (switch__11241__auto__,c__11297__auto__,parent){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30204 = [null,null,null,null,null,null,null,null];(statearr_30204[(0)] = state_machine__11242__auto__);
(statearr_30204[(1)] = (1));
return statearr_30204;
});
var state_machine__11242__auto____1 = (function (state_30198){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30198);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30205){if((e30205 instanceof Object))
{var ex__11245__auto__ = e30205;var statearr_30206_30208 = state_30198;(statearr_30206_30208[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30198);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30209 = state_30198;
state_30198 = G__30209;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30198){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,parent))
})();var state__11299__auto__ = (function (){var statearr_30207 = f__11298__auto__.call(null);(statearr_30207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30207;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30210){var map__30212 = p__30210;var map__30212__$1 = ((cljs.core.seq_QMARK_.call(null,map__30212))?cljs.core.apply.call(null,cljs.core.hash_map,map__30212):map__30212);var f_data = map__30212__$1;var request_url = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30213,files_msg){var map__30235 = p__30213;var map__30235__$1 = ((cljs.core.seq_QMARK_.call(null,map__30235))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);var opts = map__30235__$1;var on_cssload = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30236_30256 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30237_30257 = null;var count__30238_30258 = (0);var i__30239_30259 = (0);while(true){
if((i__30239_30259 < count__30238_30258))
{var f_30260 = cljs.core._nth.call(null,chunk__30237_30257,i__30239_30259);figwheel.client.reload_css_file.call(null,f_30260);
{
var G__30261 = seq__30236_30256;
var G__30262 = chunk__30237_30257;
var G__30263 = count__30238_30258;
var G__30264 = (i__30239_30259 + (1));
seq__30236_30256 = G__30261;
chunk__30237_30257 = G__30262;
count__30238_30258 = G__30263;
i__30239_30259 = G__30264;
continue;
}
} else
{var temp__4126__auto___30265 = cljs.core.seq.call(null,seq__30236_30256);if(temp__4126__auto___30265)
{var seq__30236_30266__$1 = temp__4126__auto___30265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30236_30266__$1))
{var c__4408__auto___30267 = cljs.core.chunk_first.call(null,seq__30236_30266__$1);{
var G__30268 = cljs.core.chunk_rest.call(null,seq__30236_30266__$1);
var G__30269 = c__4408__auto___30267;
var G__30270 = cljs.core.count.call(null,c__4408__auto___30267);
var G__30271 = (0);
seq__30236_30256 = G__30268;
chunk__30237_30257 = G__30269;
count__30238_30258 = G__30270;
i__30239_30259 = G__30271;
continue;
}
} else
{var f_30272 = cljs.core.first.call(null,seq__30236_30266__$1);figwheel.client.reload_css_file.call(null,f_30272);
{
var G__30273 = cljs.core.next.call(null,seq__30236_30266__$1);
var G__30274 = null;
var G__30275 = (0);
var G__30276 = (0);
seq__30236_30256 = G__30273;
chunk__30237_30257 = G__30274;
count__30238_30258 = G__30275;
i__30239_30259 = G__30276;
continue;
}
}
} else
{}
}
break;
}
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload){
return (function (state_30246){var state_val_30247 = (state_30246[(1)]);if((state_val_30247 === (2)))
{var inst_30242 = (state_30246[(2)]);var inst_30243 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30244 = on_cssload.call(null,inst_30243);var state_30246__$1 = (function (){var statearr_30248 = state_30246;(statearr_30248[(7)] = inst_30242);
return statearr_30248;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else
{if((state_val_30247 === (1)))
{var inst_30240 = cljs.core.async.timeout.call(null,(100));var state_30246__$1 = state_30246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,(2),inst_30240);
} else
{return null;
}
}
});})(c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30252 = [null,null,null,null,null,null,null,null];(statearr_30252[(0)] = state_machine__11242__auto__);
(statearr_30252[(1)] = (1));
return statearr_30252;
});
var state_machine__11242__auto____1 = (function (state_30246){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30246);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object))
{var ex__11245__auto__ = e30253;var statearr_30254_30277 = state_30246;(statearr_30254_30277[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30253;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30278 = state_30246;
state_30246 = G__30278;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload))
})();var state__11299__auto__ = (function (){var statearr_30255 = f__11298__auto__.call(null);(statearr_30255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30235,map__30235__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30279){var map__30284 = p__30279;var map__30284__$1 = ((cljs.core.seq_QMARK_.call(null,map__30284))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284):map__30284);var opts = map__30284__$1;var on_compile_fail = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30285 = cljs.core._EQ_;var expr__30286 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30285.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30286)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30285.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30286)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30285.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30286)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30284,map__30284__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30291 = {"detail":url};return obj30291;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30292){var map__30294 = p__30292;var map__30294__$1 = ((cljs.core.seq_QMARK_.call(null,map__30294))?cljs.core.apply.call(null,cljs.core.hash_map,map__30294):map__30294);var class$ = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30295){var map__30301 = p__30295;var map__30301__$1 = ((cljs.core.seq_QMARK_.call(null,map__30301))?cljs.core.apply.call(null,cljs.core.hash_map,map__30301):map__30301);var ed = map__30301__$1;var exception_data = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30302_30306 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30303_30307 = null;var count__30304_30308 = (0);var i__30305_30309 = (0);while(true){
if((i__30305_30309 < count__30304_30308))
{var msg_30310 = cljs.core._nth.call(null,chunk__30303_30307,i__30305_30309);console.log(msg_30310);
{
var G__30311 = seq__30302_30306;
var G__30312 = chunk__30303_30307;
var G__30313 = count__30304_30308;
var G__30314 = (i__30305_30309 + (1));
seq__30302_30306 = G__30311;
chunk__30303_30307 = G__30312;
count__30304_30308 = G__30313;
i__30305_30309 = G__30314;
continue;
}
} else
{var temp__4126__auto___30315 = cljs.core.seq.call(null,seq__30302_30306);if(temp__4126__auto___30315)
{var seq__30302_30316__$1 = temp__4126__auto___30315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30302_30316__$1))
{var c__4408__auto___30317 = cljs.core.chunk_first.call(null,seq__30302_30316__$1);{
var G__30318 = cljs.core.chunk_rest.call(null,seq__30302_30316__$1);
var G__30319 = c__4408__auto___30317;
var G__30320 = cljs.core.count.call(null,c__4408__auto___30317);
var G__30321 = (0);
seq__30302_30306 = G__30318;
chunk__30303_30307 = G__30319;
count__30304_30308 = G__30320;
i__30305_30309 = G__30321;
continue;
}
} else
{var msg_30322 = cljs.core.first.call(null,seq__30302_30316__$1);console.log(msg_30322);
{
var G__30323 = cljs.core.next.call(null,seq__30302_30316__$1);
var G__30324 = null;
var G__30325 = (0);
var G__30326 = (0);
seq__30302_30306 = G__30323;
chunk__30303_30307 = G__30324;
count__30304_30308 = G__30325;
i__30305_30309 = G__30326;
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
var watch_and_reload__delegate = function (p__30327){var map__30329 = p__30327;var map__30329__$1 = ((cljs.core.seq_QMARK_.call(null,map__30329))?cljs.core.apply.call(null,cljs.core.hash_map,map__30329):map__30329);var opts = map__30329__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30327 = null;if (arguments.length > 0) {
  p__30327 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30327);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30330){
var p__30327 = cljs.core.seq(arglist__30330);
return watch_and_reload__delegate(p__30327);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
