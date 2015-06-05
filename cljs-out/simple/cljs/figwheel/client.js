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
var log__delegate = function (p__30807,args){var map__30809 = p__30807;var map__30809__$1 = ((cljs.core.seq_QMARK_.call(null,map__30809))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);var debug = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30807,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30807,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30810){
var p__30807 = cljs.core.first(arglist__30810);
var args = cljs.core.rest(arglist__30810);
return log__delegate(p__30807,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30811){var map__30813 = p__30811;var map__30813__$1 = ((cljs.core.seq_QMARK_.call(null,map__30813))?cljs.core.apply.call(null,cljs.core.hash_map,map__30813):map__30813);var websocket_url = cljs.core.get.call(null,map__30813__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30814,callback){var map__30816 = p__30814;var map__30816__$1 = ((cljs.core.seq_QMARK_.call(null,map__30816))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);var msg = map__30816__$1;var dependency_file = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30816,map__30816__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30816,map__30816__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30817,p__30818){var map__30821 = p__30817;var map__30821__$1 = ((cljs.core.seq_QMARK_.call(null,map__30821))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);var opts = map__30821__$1;var url_rewriter = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30822 = p__30818;var map__30822__$1 = ((cljs.core.seq_QMARK_.call(null,map__30822))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);var d = map__30822__$1;var file = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30823,p__30824){var map__30866 = p__30823;var map__30866__$1 = ((cljs.core.seq_QMARK_.call(null,map__30866))?cljs.core.apply.call(null,cljs.core.hash_map,map__30866):map__30866);var opts = map__30866__$1;var on_jsload = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30867 = p__30824;var map__30867__$1 = ((cljs.core.seq_QMARK_.call(null,map__30867))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867):map__30867);var files = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files){
return (function (state_30890){var state_val_30891 = (state_30890[(1)]);if((state_val_30891 === (6)))
{var inst_30872 = (state_30890[(7)]);var inst_30881 = (state_30890[(2)]);var inst_30882 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30883 = [inst_30872];var inst_30884 = (new cljs.core.PersistentVector(null,1,(5),inst_30882,inst_30883,null));var inst_30885 = cljs.core.apply.call(null,on_jsload,inst_30884);var state_30890__$1 = (function (){var statearr_30892 = state_30890;(statearr_30892[(8)] = inst_30881);
return statearr_30892;
})();var statearr_30893_30907 = state_30890__$1;(statearr_30893_30907[(2)] = inst_30885);
(statearr_30893_30907[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30891 === (5)))
{var inst_30888 = (state_30890[(2)]);var state_30890__$1 = state_30890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30890__$1,inst_30888);
} else
{if((state_val_30891 === (4)))
{var state_30890__$1 = state_30890;var statearr_30894_30908 = state_30890__$1;(statearr_30894_30908[(2)] = null);
(statearr_30894_30908[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30891 === (3)))
{var inst_30872 = (state_30890[(7)]);var inst_30875 = console.debug("Figwheel: loaded these files");var inst_30876 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30872);var inst_30877 = cljs.core.prn_str.call(null,inst_30876);var inst_30878 = console.log(inst_30877);var inst_30879 = cljs.core.async.timeout.call(null,(10));var state_30890__$1 = (function (){var statearr_30895 = state_30890;(statearr_30895[(9)] = inst_30878);
(statearr_30895[(10)] = inst_30875);
return statearr_30895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(6),inst_30879);
} else
{if((state_val_30891 === (2)))
{var inst_30872 = (state_30890[(7)]);var inst_30872__$1 = (state_30890[(2)]);var inst_30873 = cljs.core.not_empty.call(null,inst_30872__$1);var state_30890__$1 = (function (){var statearr_30896 = state_30890;(statearr_30896[(7)] = inst_30872__$1);
return statearr_30896;
})();if(cljs.core.truth_(inst_30873))
{var statearr_30897_30909 = state_30890__$1;(statearr_30897_30909[(1)] = (3));
} else
{var statearr_30898_30910 = state_30890__$1;(statearr_30898_30910[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30891 === (1)))
{var inst_30868 = before_jsload.call(null,files);var inst_30869 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30870 = figwheel.client.load_all_js_files.call(null,inst_30869);var state_30890__$1 = (function (){var statearr_30899 = state_30890;(statearr_30899[(11)] = inst_30868);
return statearr_30899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(2),inst_30870);
} else
{return null;
}
}
}
}
}
}
});})(c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files))
;return ((function (switch__11098__auto__,c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30903 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30903[(0)] = state_machine__11099__auto__);
(statearr_30903[(1)] = (1));
return statearr_30903;
});
var state_machine__11099__auto____1 = (function (state_30890){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30890);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30904){if((e30904 instanceof Object))
{var ex__11102__auto__ = e30904;var statearr_30905_30911 = state_30890;(statearr_30905_30911[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30912 = state_30890;
state_30890 = G__30912;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30890){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files))
})();var state__11156__auto__ = (function (){var statearr_30906 = f__11155__auto__.call(null);(statearr_30906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,map__30866,map__30866__$1,opts,on_jsload,before_jsload,map__30867,map__30867__$1,files))
);
return c__11154__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30913,link_href){var map__30915 = p__30913;var map__30915__$1 = ((cljs.core.seq_QMARK_.call(null,map__30915))?cljs.core.apply.call(null,cljs.core.hash_map,map__30915):map__30915);var request_url = cljs.core.get.call(null,map__30915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30936){var state_val_30937 = (state_30936[(1)]);if((state_val_30937 === (2)))
{var inst_30933 = (state_30936[(2)]);var inst_30934 = parent.removeChild(orig_link);var state_30936__$1 = (function (){var statearr_30938 = state_30936;(statearr_30938[(7)] = inst_30933);
return statearr_30938;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30936__$1,inst_30934);
} else
{if((state_val_30937 === (1)))
{var inst_30931 = cljs.core.async.timeout.call(null,(200));var state_30936__$1 = state_30936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30936__$1,(2),inst_30931);
} else
{return null;
}
}
});})(c__11154__auto__,parent))
;return ((function (switch__11098__auto__,c__11154__auto__,parent){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30942 = [null,null,null,null,null,null,null,null];(statearr_30942[(0)] = state_machine__11099__auto__);
(statearr_30942[(1)] = (1));
return statearr_30942;
});
var state_machine__11099__auto____1 = (function (state_30936){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30936);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object))
{var ex__11102__auto__ = e30943;var statearr_30944_30946 = state_30936;(statearr_30944_30946[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30943;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30947 = state_30936;
state_30936 = G__30947;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,parent))
})();var state__11156__auto__ = (function (){var statearr_30945 = f__11155__auto__.call(null);(statearr_30945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30945;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30948){var map__30950 = p__30948;var map__30950__$1 = ((cljs.core.seq_QMARK_.call(null,map__30950))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);var f_data = map__30950__$1;var request_url = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30951,files_msg){var map__30973 = p__30951;var map__30973__$1 = ((cljs.core.seq_QMARK_.call(null,map__30973))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);var opts = map__30973__$1;var on_cssload = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30974_30994 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30975_30995 = null;var count__30976_30996 = (0);var i__30977_30997 = (0);while(true){
if((i__30977_30997 < count__30976_30996))
{var f_30998 = cljs.core._nth.call(null,chunk__30975_30995,i__30977_30997);figwheel.client.reload_css_file.call(null,f_30998);
{
var G__30999 = seq__30974_30994;
var G__31000 = chunk__30975_30995;
var G__31001 = count__30976_30996;
var G__31002 = (i__30977_30997 + (1));
seq__30974_30994 = G__30999;
chunk__30975_30995 = G__31000;
count__30976_30996 = G__31001;
i__30977_30997 = G__31002;
continue;
}
} else
{var temp__4126__auto___31003 = cljs.core.seq.call(null,seq__30974_30994);if(temp__4126__auto___31003)
{var seq__30974_31004__$1 = temp__4126__auto___31003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30974_31004__$1))
{var c__4408__auto___31005 = cljs.core.chunk_first.call(null,seq__30974_31004__$1);{
var G__31006 = cljs.core.chunk_rest.call(null,seq__30974_31004__$1);
var G__31007 = c__4408__auto___31005;
var G__31008 = cljs.core.count.call(null,c__4408__auto___31005);
var G__31009 = (0);
seq__30974_30994 = G__31006;
chunk__30975_30995 = G__31007;
count__30976_30996 = G__31008;
i__30977_30997 = G__31009;
continue;
}
} else
{var f_31010 = cljs.core.first.call(null,seq__30974_31004__$1);figwheel.client.reload_css_file.call(null,f_31010);
{
var G__31011 = cljs.core.next.call(null,seq__30974_31004__$1);
var G__31012 = null;
var G__31013 = (0);
var G__31014 = (0);
seq__30974_30994 = G__31011;
chunk__30975_30995 = G__31012;
count__30976_30996 = G__31013;
i__30977_30997 = G__31014;
continue;
}
}
} else
{}
}
break;
}
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload){
return (function (state_30984){var state_val_30985 = (state_30984[(1)]);if((state_val_30985 === (2)))
{var inst_30980 = (state_30984[(2)]);var inst_30981 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30982 = on_cssload.call(null,inst_30981);var state_30984__$1 = (function (){var statearr_30986 = state_30984;(statearr_30986[(7)] = inst_30980);
return statearr_30986;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else
{if((state_val_30985 === (1)))
{var inst_30978 = cljs.core.async.timeout.call(null,(100));var state_30984__$1 = state_30984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(2),inst_30978);
} else
{return null;
}
}
});})(c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload))
;return ((function (switch__11098__auto__,c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30990 = [null,null,null,null,null,null,null,null];(statearr_30990[(0)] = state_machine__11099__auto__);
(statearr_30990[(1)] = (1));
return statearr_30990;
});
var state_machine__11099__auto____1 = (function (state_30984){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30984);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30991){if((e30991 instanceof Object))
{var ex__11102__auto__ = e30991;var statearr_30992_31015 = state_30984;(statearr_30992_31015[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30991;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31016 = state_30984;
state_30984 = G__31016;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload))
})();var state__11156__auto__ = (function (){var statearr_30993 = f__11155__auto__.call(null);(statearr_30993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,map__30973,map__30973__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31017){var map__31022 = p__31017;var map__31022__$1 = ((cljs.core.seq_QMARK_.call(null,map__31022))?cljs.core.apply.call(null,cljs.core.hash_map,map__31022):map__31022);var opts = map__31022__$1;var on_compile_fail = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31023 = cljs.core._EQ_;var expr__31024 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31023.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31024)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31023.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31024)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31023.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31024)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31022,map__31022__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31029 = {"detail":url};return obj31029;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31030){var map__31032 = p__31030;var map__31032__$1 = ((cljs.core.seq_QMARK_.call(null,map__31032))?cljs.core.apply.call(null,cljs.core.hash_map,map__31032):map__31032);var class$ = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31033){var map__31039 = p__31033;var map__31039__$1 = ((cljs.core.seq_QMARK_.call(null,map__31039))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);var ed = map__31039__$1;var exception_data = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31040_31044 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31041_31045 = null;var count__31042_31046 = (0);var i__31043_31047 = (0);while(true){
if((i__31043_31047 < count__31042_31046))
{var msg_31048 = cljs.core._nth.call(null,chunk__31041_31045,i__31043_31047);console.log(msg_31048);
{
var G__31049 = seq__31040_31044;
var G__31050 = chunk__31041_31045;
var G__31051 = count__31042_31046;
var G__31052 = (i__31043_31047 + (1));
seq__31040_31044 = G__31049;
chunk__31041_31045 = G__31050;
count__31042_31046 = G__31051;
i__31043_31047 = G__31052;
continue;
}
} else
{var temp__4126__auto___31053 = cljs.core.seq.call(null,seq__31040_31044);if(temp__4126__auto___31053)
{var seq__31040_31054__$1 = temp__4126__auto___31053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31040_31054__$1))
{var c__4408__auto___31055 = cljs.core.chunk_first.call(null,seq__31040_31054__$1);{
var G__31056 = cljs.core.chunk_rest.call(null,seq__31040_31054__$1);
var G__31057 = c__4408__auto___31055;
var G__31058 = cljs.core.count.call(null,c__4408__auto___31055);
var G__31059 = (0);
seq__31040_31044 = G__31056;
chunk__31041_31045 = G__31057;
count__31042_31046 = G__31058;
i__31043_31047 = G__31059;
continue;
}
} else
{var msg_31060 = cljs.core.first.call(null,seq__31040_31054__$1);console.log(msg_31060);
{
var G__31061 = cljs.core.next.call(null,seq__31040_31054__$1);
var G__31062 = null;
var G__31063 = (0);
var G__31064 = (0);
seq__31040_31044 = G__31061;
chunk__31041_31045 = G__31062;
count__31042_31046 = G__31063;
i__31043_31047 = G__31064;
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
var watch_and_reload__delegate = function (p__31065){var map__31067 = p__31065;var map__31067__$1 = ((cljs.core.seq_QMARK_.call(null,map__31067))?cljs.core.apply.call(null,cljs.core.hash_map,map__31067):map__31067);var opts = map__31067__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31065 = null;if (arguments.length > 0) {
  p__31065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31065);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31068){
var p__31065 = cljs.core.seq(arglist__31068);
return watch_and_reload__delegate(p__31065);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
