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
var log__delegate = function (p__30067,args){var map__30069 = p__30067;var map__30069__$1 = ((cljs.core.seq_QMARK_.call(null,map__30069))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);var debug = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30067,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30067,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30070){
var p__30067 = cljs.core.first(arglist__30070);
var args = cljs.core.rest(arglist__30070);
return log__delegate(p__30067,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30071){var map__30073 = p__30071;var map__30073__$1 = ((cljs.core.seq_QMARK_.call(null,map__30073))?cljs.core.apply.call(null,cljs.core.hash_map,map__30073):map__30073);var websocket_url = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30074,callback){var map__30076 = p__30074;var map__30076__$1 = ((cljs.core.seq_QMARK_.call(null,map__30076))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);var msg = map__30076__$1;var dependency_file = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30076,map__30076__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30076,map__30076__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30077,p__30078){var map__30081 = p__30077;var map__30081__$1 = ((cljs.core.seq_QMARK_.call(null,map__30081))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);var opts = map__30081__$1;var url_rewriter = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30082 = p__30078;var map__30082__$1 = ((cljs.core.seq_QMARK_.call(null,map__30082))?cljs.core.apply.call(null,cljs.core.hash_map,map__30082):map__30082);var d = map__30082__$1;var file = cljs.core.get.call(null,map__30082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30083,p__30084){var map__30126 = p__30083;var map__30126__$1 = ((cljs.core.seq_QMARK_.call(null,map__30126))?cljs.core.apply.call(null,cljs.core.hash_map,map__30126):map__30126);var opts = map__30126__$1;var on_jsload = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30127 = p__30084;var map__30127__$1 = ((cljs.core.seq_QMARK_.call(null,map__30127))?cljs.core.apply.call(null,cljs.core.hash_map,map__30127):map__30127);var files = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files){
return (function (state_30150){var state_val_30151 = (state_30150[(1)]);if((state_val_30151 === (6)))
{var inst_30132 = (state_30150[(7)]);var inst_30141 = (state_30150[(2)]);var inst_30142 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30143 = [inst_30132];var inst_30144 = (new cljs.core.PersistentVector(null,1,(5),inst_30142,inst_30143,null));var inst_30145 = cljs.core.apply.call(null,on_jsload,inst_30144);var state_30150__$1 = (function (){var statearr_30152 = state_30150;(statearr_30152[(8)] = inst_30141);
return statearr_30152;
})();var statearr_30153_30167 = state_30150__$1;(statearr_30153_30167[(2)] = inst_30145);
(statearr_30153_30167[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30151 === (5)))
{var inst_30148 = (state_30150[(2)]);var state_30150__$1 = state_30150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else
{if((state_val_30151 === (4)))
{var state_30150__$1 = state_30150;var statearr_30154_30168 = state_30150__$1;(statearr_30154_30168[(2)] = null);
(statearr_30154_30168[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30151 === (3)))
{var inst_30132 = (state_30150[(7)]);var inst_30135 = console.debug("Figwheel: loaded these files");var inst_30136 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30132);var inst_30137 = cljs.core.prn_str.call(null,inst_30136);var inst_30138 = console.log(inst_30137);var inst_30139 = cljs.core.async.timeout.call(null,(10));var state_30150__$1 = (function (){var statearr_30155 = state_30150;(statearr_30155[(9)] = inst_30138);
(statearr_30155[(10)] = inst_30135);
return statearr_30155;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,(6),inst_30139);
} else
{if((state_val_30151 === (2)))
{var inst_30132 = (state_30150[(7)]);var inst_30132__$1 = (state_30150[(2)]);var inst_30133 = cljs.core.not_empty.call(null,inst_30132__$1);var state_30150__$1 = (function (){var statearr_30156 = state_30150;(statearr_30156[(7)] = inst_30132__$1);
return statearr_30156;
})();if(cljs.core.truth_(inst_30133))
{var statearr_30157_30169 = state_30150__$1;(statearr_30157_30169[(1)] = (3));
} else
{var statearr_30158_30170 = state_30150__$1;(statearr_30158_30170[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30151 === (1)))
{var inst_30128 = before_jsload.call(null,files);var inst_30129 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30130 = figwheel.client.load_all_js_files.call(null,inst_30129);var state_30150__$1 = (function (){var statearr_30159 = state_30150;(statearr_30159[(11)] = inst_30128);
return statearr_30159;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,(2),inst_30130);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30163[(0)] = state_machine__11242__auto__);
(statearr_30163[(1)] = (1));
return statearr_30163;
});
var state_machine__11242__auto____1 = (function (state_30150){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30150);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object))
{var ex__11245__auto__ = e30164;var statearr_30165_30171 = state_30150;(statearr_30165_30171[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30164;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30172 = state_30150;
state_30150 = G__30172;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files))
})();var state__11299__auto__ = (function (){var statearr_30166 = f__11298__auto__.call(null);(statearr_30166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30126,map__30126__$1,opts,on_jsload,before_jsload,map__30127,map__30127__$1,files))
);
return c__11297__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30173,link_href){var map__30175 = p__30173;var map__30175__$1 = ((cljs.core.seq_QMARK_.call(null,map__30175))?cljs.core.apply.call(null,cljs.core.hash_map,map__30175):map__30175);var request_url = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30196){var state_val_30197 = (state_30196[(1)]);if((state_val_30197 === (2)))
{var inst_30193 = (state_30196[(2)]);var inst_30194 = parent.removeChild(orig_link);var state_30196__$1 = (function (){var statearr_30198 = state_30196;(statearr_30198[(7)] = inst_30193);
return statearr_30198;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30196__$1,inst_30194);
} else
{if((state_val_30197 === (1)))
{var inst_30191 = cljs.core.async.timeout.call(null,(200));var state_30196__$1 = state_30196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30196__$1,(2),inst_30191);
} else
{return null;
}
}
});})(c__11297__auto__,parent))
;return ((function (switch__11241__auto__,c__11297__auto__,parent){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30202 = [null,null,null,null,null,null,null,null];(statearr_30202[(0)] = state_machine__11242__auto__);
(statearr_30202[(1)] = (1));
return statearr_30202;
});
var state_machine__11242__auto____1 = (function (state_30196){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30196);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30203){if((e30203 instanceof Object))
{var ex__11245__auto__ = e30203;var statearr_30204_30206 = state_30196;(statearr_30204_30206[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30203;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30207 = state_30196;
state_30196 = G__30207;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30196){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,parent))
})();var state__11299__auto__ = (function (){var statearr_30205 = f__11298__auto__.call(null);(statearr_30205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30205;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30208){var map__30210 = p__30208;var map__30210__$1 = ((cljs.core.seq_QMARK_.call(null,map__30210))?cljs.core.apply.call(null,cljs.core.hash_map,map__30210):map__30210);var f_data = map__30210__$1;var request_url = cljs.core.get.call(null,map__30210__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30211,files_msg){var map__30233 = p__30211;var map__30233__$1 = ((cljs.core.seq_QMARK_.call(null,map__30233))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);var opts = map__30233__$1;var on_cssload = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30234_30254 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30235_30255 = null;var count__30236_30256 = (0);var i__30237_30257 = (0);while(true){
if((i__30237_30257 < count__30236_30256))
{var f_30258 = cljs.core._nth.call(null,chunk__30235_30255,i__30237_30257);figwheel.client.reload_css_file.call(null,f_30258);
{
var G__30259 = seq__30234_30254;
var G__30260 = chunk__30235_30255;
var G__30261 = count__30236_30256;
var G__30262 = (i__30237_30257 + (1));
seq__30234_30254 = G__30259;
chunk__30235_30255 = G__30260;
count__30236_30256 = G__30261;
i__30237_30257 = G__30262;
continue;
}
} else
{var temp__4126__auto___30263 = cljs.core.seq.call(null,seq__30234_30254);if(temp__4126__auto___30263)
{var seq__30234_30264__$1 = temp__4126__auto___30263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30234_30264__$1))
{var c__4408__auto___30265 = cljs.core.chunk_first.call(null,seq__30234_30264__$1);{
var G__30266 = cljs.core.chunk_rest.call(null,seq__30234_30264__$1);
var G__30267 = c__4408__auto___30265;
var G__30268 = cljs.core.count.call(null,c__4408__auto___30265);
var G__30269 = (0);
seq__30234_30254 = G__30266;
chunk__30235_30255 = G__30267;
count__30236_30256 = G__30268;
i__30237_30257 = G__30269;
continue;
}
} else
{var f_30270 = cljs.core.first.call(null,seq__30234_30264__$1);figwheel.client.reload_css_file.call(null,f_30270);
{
var G__30271 = cljs.core.next.call(null,seq__30234_30264__$1);
var G__30272 = null;
var G__30273 = (0);
var G__30274 = (0);
seq__30234_30254 = G__30271;
chunk__30235_30255 = G__30272;
count__30236_30256 = G__30273;
i__30237_30257 = G__30274;
continue;
}
}
} else
{}
}
break;
}
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload){
return (function (state_30244){var state_val_30245 = (state_30244[(1)]);if((state_val_30245 === (2)))
{var inst_30240 = (state_30244[(2)]);var inst_30241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30242 = on_cssload.call(null,inst_30241);var state_30244__$1 = (function (){var statearr_30246 = state_30244;(statearr_30246[(7)] = inst_30240);
return statearr_30246;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30244__$1,inst_30242);
} else
{if((state_val_30245 === (1)))
{var inst_30238 = cljs.core.async.timeout.call(null,(100));var state_30244__$1 = state_30244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30244__$1,(2),inst_30238);
} else
{return null;
}
}
});})(c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload))
;return ((function (switch__11241__auto__,c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30250 = [null,null,null,null,null,null,null,null];(statearr_30250[(0)] = state_machine__11242__auto__);
(statearr_30250[(1)] = (1));
return statearr_30250;
});
var state_machine__11242__auto____1 = (function (state_30244){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_30244);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30251){if((e30251 instanceof Object))
{var ex__11245__auto__ = e30251;var statearr_30252_30275 = state_30244;(statearr_30252_30275[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30276 = state_30244;
state_30244 = G__30276;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_30244){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_30244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload))
})();var state__11299__auto__ = (function (){var statearr_30253 = f__11298__auto__.call(null);(statearr_30253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,map__30233,map__30233__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30277){var map__30282 = p__30277;var map__30282__$1 = ((cljs.core.seq_QMARK_.call(null,map__30282))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);var opts = map__30282__$1;var on_compile_fail = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30283 = cljs.core._EQ_;var expr__30284 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30283.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30284)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30283.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30284)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30283.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30284)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30282,map__30282__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30289 = {"detail":url};return obj30289;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30290){var map__30292 = p__30290;var map__30292__$1 = ((cljs.core.seq_QMARK_.call(null,map__30292))?cljs.core.apply.call(null,cljs.core.hash_map,map__30292):map__30292);var class$ = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30293){var map__30299 = p__30293;var map__30299__$1 = ((cljs.core.seq_QMARK_.call(null,map__30299))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);var ed = map__30299__$1;var exception_data = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30300_30304 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30301_30305 = null;var count__30302_30306 = (0);var i__30303_30307 = (0);while(true){
if((i__30303_30307 < count__30302_30306))
{var msg_30308 = cljs.core._nth.call(null,chunk__30301_30305,i__30303_30307);console.log(msg_30308);
{
var G__30309 = seq__30300_30304;
var G__30310 = chunk__30301_30305;
var G__30311 = count__30302_30306;
var G__30312 = (i__30303_30307 + (1));
seq__30300_30304 = G__30309;
chunk__30301_30305 = G__30310;
count__30302_30306 = G__30311;
i__30303_30307 = G__30312;
continue;
}
} else
{var temp__4126__auto___30313 = cljs.core.seq.call(null,seq__30300_30304);if(temp__4126__auto___30313)
{var seq__30300_30314__$1 = temp__4126__auto___30313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30300_30314__$1))
{var c__4408__auto___30315 = cljs.core.chunk_first.call(null,seq__30300_30314__$1);{
var G__30316 = cljs.core.chunk_rest.call(null,seq__30300_30314__$1);
var G__30317 = c__4408__auto___30315;
var G__30318 = cljs.core.count.call(null,c__4408__auto___30315);
var G__30319 = (0);
seq__30300_30304 = G__30316;
chunk__30301_30305 = G__30317;
count__30302_30306 = G__30318;
i__30303_30307 = G__30319;
continue;
}
} else
{var msg_30320 = cljs.core.first.call(null,seq__30300_30314__$1);console.log(msg_30320);
{
var G__30321 = cljs.core.next.call(null,seq__30300_30314__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__30300_30304 = G__30321;
chunk__30301_30305 = G__30322;
count__30302_30306 = G__30323;
i__30303_30307 = G__30324;
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
var watch_and_reload__delegate = function (p__30325){var map__30327 = p__30325;var map__30327__$1 = ((cljs.core.seq_QMARK_.call(null,map__30327))?cljs.core.apply.call(null,cljs.core.hash_map,map__30327):map__30327);var opts = map__30327__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30325 = null;if (arguments.length > 0) {
  p__30325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30325);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30328){
var p__30325 = cljs.core.seq(arglist__30328);
return watch_and_reload__delegate(p__30325);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
