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
var log__delegate = function (p__31092,args){var map__31094 = p__31092;var map__31094__$1 = ((cljs.core.seq_QMARK_.call(null,map__31094))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094):map__31094);var debug = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31092,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31092,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31095){
var p__31092 = cljs.core.first(arglist__31095);
var args = cljs.core.rest(arglist__31095);
return log__delegate(p__31092,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31096){var map__31098 = p__31096;var map__31098__$1 = ((cljs.core.seq_QMARK_.call(null,map__31098))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);var websocket_url = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31099,callback){var map__31101 = p__31099;var map__31101__$1 = ((cljs.core.seq_QMARK_.call(null,map__31101))?cljs.core.apply.call(null,cljs.core.hash_map,map__31101):map__31101);var msg = map__31101__$1;var dependency_file = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31101,map__31101__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31101,map__31101__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31102,p__31103){var map__31106 = p__31102;var map__31106__$1 = ((cljs.core.seq_QMARK_.call(null,map__31106))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);var opts = map__31106__$1;var url_rewriter = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31107 = p__31103;var map__31107__$1 = ((cljs.core.seq_QMARK_.call(null,map__31107))?cljs.core.apply.call(null,cljs.core.hash_map,map__31107):map__31107);var d = map__31107__$1;var file = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31108,p__31109){var map__31151 = p__31108;var map__31151__$1 = ((cljs.core.seq_QMARK_.call(null,map__31151))?cljs.core.apply.call(null,cljs.core.hash_map,map__31151):map__31151);var opts = map__31151__$1;var on_jsload = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31152 = p__31109;var map__31152__$1 = ((cljs.core.seq_QMARK_.call(null,map__31152))?cljs.core.apply.call(null,cljs.core.hash_map,map__31152):map__31152);var files = cljs.core.get.call(null,map__31152__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files){
return (function (state_31175){var state_val_31176 = (state_31175[(1)]);if((state_val_31176 === (6)))
{var inst_31157 = (state_31175[(7)]);var inst_31166 = (state_31175[(2)]);var inst_31167 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31168 = [inst_31157];var inst_31169 = (new cljs.core.PersistentVector(null,1,(5),inst_31167,inst_31168,null));var inst_31170 = cljs.core.apply.call(null,on_jsload,inst_31169);var state_31175__$1 = (function (){var statearr_31177 = state_31175;(statearr_31177[(8)] = inst_31166);
return statearr_31177;
})();var statearr_31178_31192 = state_31175__$1;(statearr_31178_31192[(2)] = inst_31170);
(statearr_31178_31192[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31176 === (5)))
{var inst_31173 = (state_31175[(2)]);var state_31175__$1 = state_31175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31175__$1,inst_31173);
} else
{if((state_val_31176 === (4)))
{var state_31175__$1 = state_31175;var statearr_31179_31193 = state_31175__$1;(statearr_31179_31193[(2)] = null);
(statearr_31179_31193[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31176 === (3)))
{var inst_31157 = (state_31175[(7)]);var inst_31160 = console.debug("Figwheel: loaded these files");var inst_31161 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31157);var inst_31162 = cljs.core.prn_str.call(null,inst_31161);var inst_31163 = console.log(inst_31162);var inst_31164 = cljs.core.async.timeout.call(null,(10));var state_31175__$1 = (function (){var statearr_31180 = state_31175;(statearr_31180[(9)] = inst_31160);
(statearr_31180[(10)] = inst_31163);
return statearr_31180;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31175__$1,(6),inst_31164);
} else
{if((state_val_31176 === (2)))
{var inst_31157 = (state_31175[(7)]);var inst_31157__$1 = (state_31175[(2)]);var inst_31158 = cljs.core.not_empty.call(null,inst_31157__$1);var state_31175__$1 = (function (){var statearr_31181 = state_31175;(statearr_31181[(7)] = inst_31157__$1);
return statearr_31181;
})();if(cljs.core.truth_(inst_31158))
{var statearr_31182_31194 = state_31175__$1;(statearr_31182_31194[(1)] = (3));
} else
{var statearr_31183_31195 = state_31175__$1;(statearr_31183_31195[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31176 === (1)))
{var inst_31153 = before_jsload.call(null,files);var inst_31154 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31155 = figwheel.client.load_all_js_files.call(null,inst_31154);var state_31175__$1 = (function (){var statearr_31184 = state_31175;(statearr_31184[(11)] = inst_31153);
return statearr_31184;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31175__$1,(2),inst_31155);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31188 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31188[(0)] = state_machine__9111__auto__);
(statearr_31188[(1)] = (1));
return statearr_31188;
});
var state_machine__9111__auto____1 = (function (state_31175){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31175);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31189){if((e31189 instanceof Object))
{var ex__9114__auto__ = e31189;var statearr_31190_31196 = state_31175;(statearr_31190_31196[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31197 = state_31175;
state_31175 = G__31197;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31175){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31191 = f__9126__auto__.call(null);(statearr_31191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31151,map__31151__$1,opts,on_jsload,before_jsload,map__31152,map__31152__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31198,link_href){var map__31200 = p__31198;var map__31200__$1 = ((cljs.core.seq_QMARK_.call(null,map__31200))?cljs.core.apply.call(null,cljs.core.hash_map,map__31200):map__31200);var request_url = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31221){var state_val_31222 = (state_31221[(1)]);if((state_val_31222 === (2)))
{var inst_31218 = (state_31221[(2)]);var inst_31219 = parent.removeChild(orig_link);var state_31221__$1 = (function (){var statearr_31223 = state_31221;(statearr_31223[(7)] = inst_31218);
return statearr_31223;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31221__$1,inst_31219);
} else
{if((state_val_31222 === (1)))
{var inst_31216 = cljs.core.async.timeout.call(null,(200));var state_31221__$1 = state_31221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31221__$1,(2),inst_31216);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31227 = [null,null,null,null,null,null,null,null];(statearr_31227[(0)] = state_machine__9111__auto__);
(statearr_31227[(1)] = (1));
return statearr_31227;
});
var state_machine__9111__auto____1 = (function (state_31221){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31221);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31228){if((e31228 instanceof Object))
{var ex__9114__auto__ = e31228;var statearr_31229_31231 = state_31221;(statearr_31229_31231[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31232 = state_31221;
state_31221 = G__31232;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31221){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31230 = f__9126__auto__.call(null);(statearr_31230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31230;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31233){var map__31235 = p__31233;var map__31235__$1 = ((cljs.core.seq_QMARK_.call(null,map__31235))?cljs.core.apply.call(null,cljs.core.hash_map,map__31235):map__31235);var f_data = map__31235__$1;var request_url = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31236,files_msg){var map__31258 = p__31236;var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);var opts = map__31258__$1;var on_cssload = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31259_31279 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31260_31280 = null;var count__31261_31281 = (0);var i__31262_31282 = (0);while(true){
if((i__31262_31282 < count__31261_31281))
{var f_31283 = cljs.core._nth.call(null,chunk__31260_31280,i__31262_31282);figwheel.client.reload_css_file.call(null,f_31283);
{
var G__31284 = seq__31259_31279;
var G__31285 = chunk__31260_31280;
var G__31286 = count__31261_31281;
var G__31287 = (i__31262_31282 + (1));
seq__31259_31279 = G__31284;
chunk__31260_31280 = G__31285;
count__31261_31281 = G__31286;
i__31262_31282 = G__31287;
continue;
}
} else
{var temp__4126__auto___31288 = cljs.core.seq.call(null,seq__31259_31279);if(temp__4126__auto___31288)
{var seq__31259_31289__$1 = temp__4126__auto___31288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31259_31289__$1))
{var c__4408__auto___31290 = cljs.core.chunk_first.call(null,seq__31259_31289__$1);{
var G__31291 = cljs.core.chunk_rest.call(null,seq__31259_31289__$1);
var G__31292 = c__4408__auto___31290;
var G__31293 = cljs.core.count.call(null,c__4408__auto___31290);
var G__31294 = (0);
seq__31259_31279 = G__31291;
chunk__31260_31280 = G__31292;
count__31261_31281 = G__31293;
i__31262_31282 = G__31294;
continue;
}
} else
{var f_31295 = cljs.core.first.call(null,seq__31259_31289__$1);figwheel.client.reload_css_file.call(null,f_31295);
{
var G__31296 = cljs.core.next.call(null,seq__31259_31289__$1);
var G__31297 = null;
var G__31298 = (0);
var G__31299 = (0);
seq__31259_31279 = G__31296;
chunk__31260_31280 = G__31297;
count__31261_31281 = G__31298;
i__31262_31282 = G__31299;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload){
return (function (state_31269){var state_val_31270 = (state_31269[(1)]);if((state_val_31270 === (2)))
{var inst_31265 = (state_31269[(2)]);var inst_31266 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31267 = on_cssload.call(null,inst_31266);var state_31269__$1 = (function (){var statearr_31271 = state_31269;(statearr_31271[(7)] = inst_31265);
return statearr_31271;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31269__$1,inst_31267);
} else
{if((state_val_31270 === (1)))
{var inst_31263 = cljs.core.async.timeout.call(null,(100));var state_31269__$1 = state_31269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31269__$1,(2),inst_31263);
} else
{return null;
}
}
});})(c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31275 = [null,null,null,null,null,null,null,null];(statearr_31275[(0)] = state_machine__9111__auto__);
(statearr_31275[(1)] = (1));
return statearr_31275;
});
var state_machine__9111__auto____1 = (function (state_31269){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31269);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31276){if((e31276 instanceof Object))
{var ex__9114__auto__ = e31276;var statearr_31277_31300 = state_31269;(statearr_31277_31300[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31276;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31301 = state_31269;
state_31269 = G__31301;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31269){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31278 = f__9126__auto__.call(null);(statearr_31278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31258,map__31258__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31302){var map__31307 = p__31302;var map__31307__$1 = ((cljs.core.seq_QMARK_.call(null,map__31307))?cljs.core.apply.call(null,cljs.core.hash_map,map__31307):map__31307);var opts = map__31307__$1;var on_compile_fail = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31308 = cljs.core._EQ_;var expr__31309 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31308.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31309)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31308.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31309)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31308.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31309)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31307,map__31307__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31314 = {"detail":url};return obj31314;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31315){var map__31317 = p__31315;var map__31317__$1 = ((cljs.core.seq_QMARK_.call(null,map__31317))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);var class$ = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31318){var map__31324 = p__31318;var map__31324__$1 = ((cljs.core.seq_QMARK_.call(null,map__31324))?cljs.core.apply.call(null,cljs.core.hash_map,map__31324):map__31324);var ed = map__31324__$1;var exception_data = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31325_31329 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31326_31330 = null;var count__31327_31331 = (0);var i__31328_31332 = (0);while(true){
if((i__31328_31332 < count__31327_31331))
{var msg_31333 = cljs.core._nth.call(null,chunk__31326_31330,i__31328_31332);console.log(msg_31333);
{
var G__31334 = seq__31325_31329;
var G__31335 = chunk__31326_31330;
var G__31336 = count__31327_31331;
var G__31337 = (i__31328_31332 + (1));
seq__31325_31329 = G__31334;
chunk__31326_31330 = G__31335;
count__31327_31331 = G__31336;
i__31328_31332 = G__31337;
continue;
}
} else
{var temp__4126__auto___31338 = cljs.core.seq.call(null,seq__31325_31329);if(temp__4126__auto___31338)
{var seq__31325_31339__$1 = temp__4126__auto___31338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31325_31339__$1))
{var c__4408__auto___31340 = cljs.core.chunk_first.call(null,seq__31325_31339__$1);{
var G__31341 = cljs.core.chunk_rest.call(null,seq__31325_31339__$1);
var G__31342 = c__4408__auto___31340;
var G__31343 = cljs.core.count.call(null,c__4408__auto___31340);
var G__31344 = (0);
seq__31325_31329 = G__31341;
chunk__31326_31330 = G__31342;
count__31327_31331 = G__31343;
i__31328_31332 = G__31344;
continue;
}
} else
{var msg_31345 = cljs.core.first.call(null,seq__31325_31339__$1);console.log(msg_31345);
{
var G__31346 = cljs.core.next.call(null,seq__31325_31339__$1);
var G__31347 = null;
var G__31348 = (0);
var G__31349 = (0);
seq__31325_31329 = G__31346;
chunk__31326_31330 = G__31347;
count__31327_31331 = G__31348;
i__31328_31332 = G__31349;
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
var watch_and_reload__delegate = function (p__31350){var map__31352 = p__31350;var map__31352__$1 = ((cljs.core.seq_QMARK_.call(null,map__31352))?cljs.core.apply.call(null,cljs.core.hash_map,map__31352):map__31352);var opts = map__31352__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31350 = null;if (arguments.length > 0) {
  p__31350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31350);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31353){
var p__31350 = cljs.core.seq(arglist__31353);
return watch_and_reload__delegate(p__31350);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
