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
var log__delegate = function (p__31107,args){var map__31109 = p__31107;var map__31109__$1 = ((cljs.core.seq_QMARK_.call(null,map__31109))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);var debug = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31107,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31107,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31110){
var p__31107 = cljs.core.first(arglist__31110);
var args = cljs.core.rest(arglist__31110);
return log__delegate(p__31107,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31111){var map__31113 = p__31111;var map__31113__$1 = ((cljs.core.seq_QMARK_.call(null,map__31113))?cljs.core.apply.call(null,cljs.core.hash_map,map__31113):map__31113);var websocket_url = cljs.core.get.call(null,map__31113__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31114,callback){var map__31116 = p__31114;var map__31116__$1 = ((cljs.core.seq_QMARK_.call(null,map__31116))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);var msg = map__31116__$1;var dependency_file = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31116,map__31116__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31116,map__31116__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31117,p__31118){var map__31121 = p__31117;var map__31121__$1 = ((cljs.core.seq_QMARK_.call(null,map__31121))?cljs.core.apply.call(null,cljs.core.hash_map,map__31121):map__31121);var opts = map__31121__$1;var url_rewriter = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31122 = p__31118;var map__31122__$1 = ((cljs.core.seq_QMARK_.call(null,map__31122))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);var d = map__31122__$1;var file = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31123,p__31124){var map__31166 = p__31123;var map__31166__$1 = ((cljs.core.seq_QMARK_.call(null,map__31166))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);var opts = map__31166__$1;var on_jsload = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31167 = p__31124;var map__31167__$1 = ((cljs.core.seq_QMARK_.call(null,map__31167))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);var files = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files){
return (function (state_31190){var state_val_31191 = (state_31190[(1)]);if((state_val_31191 === (6)))
{var inst_31172 = (state_31190[(7)]);var inst_31181 = (state_31190[(2)]);var inst_31182 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31183 = [inst_31172];var inst_31184 = (new cljs.core.PersistentVector(null,1,(5),inst_31182,inst_31183,null));var inst_31185 = cljs.core.apply.call(null,on_jsload,inst_31184);var state_31190__$1 = (function (){var statearr_31192 = state_31190;(statearr_31192[(8)] = inst_31181);
return statearr_31192;
})();var statearr_31193_31207 = state_31190__$1;(statearr_31193_31207[(2)] = inst_31185);
(statearr_31193_31207[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31191 === (5)))
{var inst_31188 = (state_31190[(2)]);var state_31190__$1 = state_31190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31190__$1,inst_31188);
} else
{if((state_val_31191 === (4)))
{var state_31190__$1 = state_31190;var statearr_31194_31208 = state_31190__$1;(statearr_31194_31208[(2)] = null);
(statearr_31194_31208[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31191 === (3)))
{var inst_31172 = (state_31190[(7)]);var inst_31175 = console.debug("Figwheel: loaded these files");var inst_31176 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31172);var inst_31177 = cljs.core.prn_str.call(null,inst_31176);var inst_31178 = console.log(inst_31177);var inst_31179 = cljs.core.async.timeout.call(null,(10));var state_31190__$1 = (function (){var statearr_31195 = state_31190;(statearr_31195[(9)] = inst_31178);
(statearr_31195[(10)] = inst_31175);
return statearr_31195;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31190__$1,(6),inst_31179);
} else
{if((state_val_31191 === (2)))
{var inst_31172 = (state_31190[(7)]);var inst_31172__$1 = (state_31190[(2)]);var inst_31173 = cljs.core.not_empty.call(null,inst_31172__$1);var state_31190__$1 = (function (){var statearr_31196 = state_31190;(statearr_31196[(7)] = inst_31172__$1);
return statearr_31196;
})();if(cljs.core.truth_(inst_31173))
{var statearr_31197_31209 = state_31190__$1;(statearr_31197_31209[(1)] = (3));
} else
{var statearr_31198_31210 = state_31190__$1;(statearr_31198_31210[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31191 === (1)))
{var inst_31168 = before_jsload.call(null,files);var inst_31169 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31170 = figwheel.client.load_all_js_files.call(null,inst_31169);var state_31190__$1 = (function (){var statearr_31199 = state_31190;(statearr_31199[(11)] = inst_31168);
return statearr_31199;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31190__$1,(2),inst_31170);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31203 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31203[(0)] = state_machine__9111__auto__);
(statearr_31203[(1)] = (1));
return statearr_31203;
});
var state_machine__9111__auto____1 = (function (state_31190){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31190);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31204){if((e31204 instanceof Object))
{var ex__9114__auto__ = e31204;var statearr_31205_31211 = state_31190;(statearr_31205_31211[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31204;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31212 = state_31190;
state_31190 = G__31212;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31190){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31206 = f__9126__auto__.call(null);(statearr_31206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31166,map__31166__$1,opts,on_jsload,before_jsload,map__31167,map__31167__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31213,link_href){var map__31215 = p__31213;var map__31215__$1 = ((cljs.core.seq_QMARK_.call(null,map__31215))?cljs.core.apply.call(null,cljs.core.hash_map,map__31215):map__31215);var request_url = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31236){var state_val_31237 = (state_31236[(1)]);if((state_val_31237 === (2)))
{var inst_31233 = (state_31236[(2)]);var inst_31234 = parent.removeChild(orig_link);var state_31236__$1 = (function (){var statearr_31238 = state_31236;(statearr_31238[(7)] = inst_31233);
return statearr_31238;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31236__$1,inst_31234);
} else
{if((state_val_31237 === (1)))
{var inst_31231 = cljs.core.async.timeout.call(null,(200));var state_31236__$1 = state_31236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(2),inst_31231);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31242 = [null,null,null,null,null,null,null,null];(statearr_31242[(0)] = state_machine__9111__auto__);
(statearr_31242[(1)] = (1));
return statearr_31242;
});
var state_machine__9111__auto____1 = (function (state_31236){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31236);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31243){if((e31243 instanceof Object))
{var ex__9114__auto__ = e31243;var statearr_31244_31246 = state_31236;(statearr_31244_31246[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31236);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31247 = state_31236;
state_31236 = G__31247;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31236){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31245 = f__9126__auto__.call(null);(statearr_31245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31245;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31248){var map__31250 = p__31248;var map__31250__$1 = ((cljs.core.seq_QMARK_.call(null,map__31250))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);var f_data = map__31250__$1;var request_url = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31251,files_msg){var map__31273 = p__31251;var map__31273__$1 = ((cljs.core.seq_QMARK_.call(null,map__31273))?cljs.core.apply.call(null,cljs.core.hash_map,map__31273):map__31273);var opts = map__31273__$1;var on_cssload = cljs.core.get.call(null,map__31273__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31274_31294 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31275_31295 = null;var count__31276_31296 = (0);var i__31277_31297 = (0);while(true){
if((i__31277_31297 < count__31276_31296))
{var f_31298 = cljs.core._nth.call(null,chunk__31275_31295,i__31277_31297);figwheel.client.reload_css_file.call(null,f_31298);
{
var G__31299 = seq__31274_31294;
var G__31300 = chunk__31275_31295;
var G__31301 = count__31276_31296;
var G__31302 = (i__31277_31297 + (1));
seq__31274_31294 = G__31299;
chunk__31275_31295 = G__31300;
count__31276_31296 = G__31301;
i__31277_31297 = G__31302;
continue;
}
} else
{var temp__4126__auto___31303 = cljs.core.seq.call(null,seq__31274_31294);if(temp__4126__auto___31303)
{var seq__31274_31304__$1 = temp__4126__auto___31303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31274_31304__$1))
{var c__4408__auto___31305 = cljs.core.chunk_first.call(null,seq__31274_31304__$1);{
var G__31306 = cljs.core.chunk_rest.call(null,seq__31274_31304__$1);
var G__31307 = c__4408__auto___31305;
var G__31308 = cljs.core.count.call(null,c__4408__auto___31305);
var G__31309 = (0);
seq__31274_31294 = G__31306;
chunk__31275_31295 = G__31307;
count__31276_31296 = G__31308;
i__31277_31297 = G__31309;
continue;
}
} else
{var f_31310 = cljs.core.first.call(null,seq__31274_31304__$1);figwheel.client.reload_css_file.call(null,f_31310);
{
var G__31311 = cljs.core.next.call(null,seq__31274_31304__$1);
var G__31312 = null;
var G__31313 = (0);
var G__31314 = (0);
seq__31274_31294 = G__31311;
chunk__31275_31295 = G__31312;
count__31276_31296 = G__31313;
i__31277_31297 = G__31314;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function (state_31284){var state_val_31285 = (state_31284[(1)]);if((state_val_31285 === (2)))
{var inst_31280 = (state_31284[(2)]);var inst_31281 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31282 = on_cssload.call(null,inst_31281);var state_31284__$1 = (function (){var statearr_31286 = state_31284;(statearr_31286[(7)] = inst_31280);
return statearr_31286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31284__$1,inst_31282);
} else
{if((state_val_31285 === (1)))
{var inst_31278 = cljs.core.async.timeout.call(null,(100));var state_31284__$1 = state_31284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31284__$1,(2),inst_31278);
} else
{return null;
}
}
});})(c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31290 = [null,null,null,null,null,null,null,null];(statearr_31290[(0)] = state_machine__9111__auto__);
(statearr_31290[(1)] = (1));
return statearr_31290;
});
var state_machine__9111__auto____1 = (function (state_31284){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31284);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object))
{var ex__9114__auto__ = e31291;var statearr_31292_31315 = state_31284;(statearr_31292_31315[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31291;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31316 = state_31284;
state_31284 = G__31316;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31284){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31293 = f__9126__auto__.call(null);(statearr_31293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31273,map__31273__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31317){var map__31322 = p__31317;var map__31322__$1 = ((cljs.core.seq_QMARK_.call(null,map__31322))?cljs.core.apply.call(null,cljs.core.hash_map,map__31322):map__31322);var opts = map__31322__$1;var on_compile_fail = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31323 = cljs.core._EQ_;var expr__31324 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31323.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31324)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31323.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31324)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31323.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31324)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31322,map__31322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31329 = {"detail":url};return obj31329;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31330){var map__31332 = p__31330;var map__31332__$1 = ((cljs.core.seq_QMARK_.call(null,map__31332))?cljs.core.apply.call(null,cljs.core.hash_map,map__31332):map__31332);var class$ = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31333){var map__31339 = p__31333;var map__31339__$1 = ((cljs.core.seq_QMARK_.call(null,map__31339))?cljs.core.apply.call(null,cljs.core.hash_map,map__31339):map__31339);var ed = map__31339__$1;var exception_data = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31340_31344 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31341_31345 = null;var count__31342_31346 = (0);var i__31343_31347 = (0);while(true){
if((i__31343_31347 < count__31342_31346))
{var msg_31348 = cljs.core._nth.call(null,chunk__31341_31345,i__31343_31347);console.log(msg_31348);
{
var G__31349 = seq__31340_31344;
var G__31350 = chunk__31341_31345;
var G__31351 = count__31342_31346;
var G__31352 = (i__31343_31347 + (1));
seq__31340_31344 = G__31349;
chunk__31341_31345 = G__31350;
count__31342_31346 = G__31351;
i__31343_31347 = G__31352;
continue;
}
} else
{var temp__4126__auto___31353 = cljs.core.seq.call(null,seq__31340_31344);if(temp__4126__auto___31353)
{var seq__31340_31354__$1 = temp__4126__auto___31353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31340_31354__$1))
{var c__4408__auto___31355 = cljs.core.chunk_first.call(null,seq__31340_31354__$1);{
var G__31356 = cljs.core.chunk_rest.call(null,seq__31340_31354__$1);
var G__31357 = c__4408__auto___31355;
var G__31358 = cljs.core.count.call(null,c__4408__auto___31355);
var G__31359 = (0);
seq__31340_31344 = G__31356;
chunk__31341_31345 = G__31357;
count__31342_31346 = G__31358;
i__31343_31347 = G__31359;
continue;
}
} else
{var msg_31360 = cljs.core.first.call(null,seq__31340_31354__$1);console.log(msg_31360);
{
var G__31361 = cljs.core.next.call(null,seq__31340_31354__$1);
var G__31362 = null;
var G__31363 = (0);
var G__31364 = (0);
seq__31340_31344 = G__31361;
chunk__31341_31345 = G__31362;
count__31342_31346 = G__31363;
i__31343_31347 = G__31364;
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
var watch_and_reload__delegate = function (p__31365){var map__31367 = p__31365;var map__31367__$1 = ((cljs.core.seq_QMARK_.call(null,map__31367))?cljs.core.apply.call(null,cljs.core.hash_map,map__31367):map__31367);var opts = map__31367__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31365 = null;if (arguments.length > 0) {
  p__31365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31365);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31368){
var p__31365 = cljs.core.seq(arglist__31368);
return watch_and_reload__delegate(p__31365);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
