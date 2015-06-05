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
var log__delegate = function (p__30795,args){var map__30797 = p__30795;var map__30797__$1 = ((cljs.core.seq_QMARK_.call(null,map__30797))?cljs.core.apply.call(null,cljs.core.hash_map,map__30797):map__30797);var debug = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30795,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30795,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30798){
var p__30795 = cljs.core.first(arglist__30798);
var args = cljs.core.rest(arglist__30798);
return log__delegate(p__30795,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30799){var map__30801 = p__30799;var map__30801__$1 = ((cljs.core.seq_QMARK_.call(null,map__30801))?cljs.core.apply.call(null,cljs.core.hash_map,map__30801):map__30801);var websocket_url = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30802,callback){var map__30804 = p__30802;var map__30804__$1 = ((cljs.core.seq_QMARK_.call(null,map__30804))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);var msg = map__30804__$1;var dependency_file = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30804,map__30804__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30804,map__30804__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30805,p__30806){var map__30809 = p__30805;var map__30809__$1 = ((cljs.core.seq_QMARK_.call(null,map__30809))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);var opts = map__30809__$1;var url_rewriter = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30810 = p__30806;var map__30810__$1 = ((cljs.core.seq_QMARK_.call(null,map__30810))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810):map__30810);var d = map__30810__$1;var file = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30811,p__30812){var map__30854 = p__30811;var map__30854__$1 = ((cljs.core.seq_QMARK_.call(null,map__30854))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);var opts = map__30854__$1;var on_jsload = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30855 = p__30812;var map__30855__$1 = ((cljs.core.seq_QMARK_.call(null,map__30855))?cljs.core.apply.call(null,cljs.core.hash_map,map__30855):map__30855);var files = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files){
return (function (state_30878){var state_val_30879 = (state_30878[(1)]);if((state_val_30879 === (6)))
{var inst_30860 = (state_30878[(7)]);var inst_30869 = (state_30878[(2)]);var inst_30870 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30871 = [inst_30860];var inst_30872 = (new cljs.core.PersistentVector(null,1,(5),inst_30870,inst_30871,null));var inst_30873 = cljs.core.apply.call(null,on_jsload,inst_30872);var state_30878__$1 = (function (){var statearr_30880 = state_30878;(statearr_30880[(8)] = inst_30869);
return statearr_30880;
})();var statearr_30881_30895 = state_30878__$1;(statearr_30881_30895[(2)] = inst_30873);
(statearr_30881_30895[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30879 === (5)))
{var inst_30876 = (state_30878[(2)]);var state_30878__$1 = state_30878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30878__$1,inst_30876);
} else
{if((state_val_30879 === (4)))
{var state_30878__$1 = state_30878;var statearr_30882_30896 = state_30878__$1;(statearr_30882_30896[(2)] = null);
(statearr_30882_30896[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30879 === (3)))
{var inst_30860 = (state_30878[(7)]);var inst_30863 = console.debug("Figwheel: loaded these files");var inst_30864 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30860);var inst_30865 = cljs.core.prn_str.call(null,inst_30864);var inst_30866 = console.log(inst_30865);var inst_30867 = cljs.core.async.timeout.call(null,(10));var state_30878__$1 = (function (){var statearr_30883 = state_30878;(statearr_30883[(9)] = inst_30866);
(statearr_30883[(10)] = inst_30863);
return statearr_30883;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30878__$1,(6),inst_30867);
} else
{if((state_val_30879 === (2)))
{var inst_30860 = (state_30878[(7)]);var inst_30860__$1 = (state_30878[(2)]);var inst_30861 = cljs.core.not_empty.call(null,inst_30860__$1);var state_30878__$1 = (function (){var statearr_30884 = state_30878;(statearr_30884[(7)] = inst_30860__$1);
return statearr_30884;
})();if(cljs.core.truth_(inst_30861))
{var statearr_30885_30897 = state_30878__$1;(statearr_30885_30897[(1)] = (3));
} else
{var statearr_30886_30898 = state_30878__$1;(statearr_30886_30898[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30879 === (1)))
{var inst_30856 = before_jsload.call(null,files);var inst_30857 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30858 = figwheel.client.load_all_js_files.call(null,inst_30857);var state_30878__$1 = (function (){var statearr_30887 = state_30878;(statearr_30887[(11)] = inst_30856);
return statearr_30887;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30878__$1,(2),inst_30858);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30891 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30891[(0)] = state_machine__9111__auto__);
(statearr_30891[(1)] = (1));
return statearr_30891;
});
var state_machine__9111__auto____1 = (function (state_30878){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30878);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30892){if((e30892 instanceof Object))
{var ex__9114__auto__ = e30892;var statearr_30893_30899 = state_30878;(statearr_30893_30899[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30878);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30900 = state_30878;
state_30878 = G__30900;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30878){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files))
})();var state__9127__auto__ = (function (){var statearr_30894 = f__9126__auto__.call(null);(statearr_30894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__30854,map__30854__$1,opts,on_jsload,before_jsload,map__30855,map__30855__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30901,link_href){var map__30903 = p__30901;var map__30903__$1 = ((cljs.core.seq_QMARK_.call(null,map__30903))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);var request_url = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_30924){var state_val_30925 = (state_30924[(1)]);if((state_val_30925 === (2)))
{var inst_30921 = (state_30924[(2)]);var inst_30922 = parent.removeChild(orig_link);var state_30924__$1 = (function (){var statearr_30926 = state_30924;(statearr_30926[(7)] = inst_30921);
return statearr_30926;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30924__$1,inst_30922);
} else
{if((state_val_30925 === (1)))
{var inst_30919 = cljs.core.async.timeout.call(null,(200));var state_30924__$1 = state_30924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30924__$1,(2),inst_30919);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30930 = [null,null,null,null,null,null,null,null];(statearr_30930[(0)] = state_machine__9111__auto__);
(statearr_30930[(1)] = (1));
return statearr_30930;
});
var state_machine__9111__auto____1 = (function (state_30924){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30924);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30931){if((e30931 instanceof Object))
{var ex__9114__auto__ = e30931;var statearr_30932_30934 = state_30924;(statearr_30932_30934[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30931;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30935 = state_30924;
state_30924 = G__30935;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30924){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_30933 = f__9126__auto__.call(null);(statearr_30933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30933;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30936){var map__30938 = p__30936;var map__30938__$1 = ((cljs.core.seq_QMARK_.call(null,map__30938))?cljs.core.apply.call(null,cljs.core.hash_map,map__30938):map__30938);var f_data = map__30938__$1;var request_url = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30939,files_msg){var map__30961 = p__30939;var map__30961__$1 = ((cljs.core.seq_QMARK_.call(null,map__30961))?cljs.core.apply.call(null,cljs.core.hash_map,map__30961):map__30961);var opts = map__30961__$1;var on_cssload = cljs.core.get.call(null,map__30961__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30962_30982 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30963_30983 = null;var count__30964_30984 = (0);var i__30965_30985 = (0);while(true){
if((i__30965_30985 < count__30964_30984))
{var f_30986 = cljs.core._nth.call(null,chunk__30963_30983,i__30965_30985);figwheel.client.reload_css_file.call(null,f_30986);
{
var G__30987 = seq__30962_30982;
var G__30988 = chunk__30963_30983;
var G__30989 = count__30964_30984;
var G__30990 = (i__30965_30985 + (1));
seq__30962_30982 = G__30987;
chunk__30963_30983 = G__30988;
count__30964_30984 = G__30989;
i__30965_30985 = G__30990;
continue;
}
} else
{var temp__4126__auto___30991 = cljs.core.seq.call(null,seq__30962_30982);if(temp__4126__auto___30991)
{var seq__30962_30992__$1 = temp__4126__auto___30991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30962_30992__$1))
{var c__4408__auto___30993 = cljs.core.chunk_first.call(null,seq__30962_30992__$1);{
var G__30994 = cljs.core.chunk_rest.call(null,seq__30962_30992__$1);
var G__30995 = c__4408__auto___30993;
var G__30996 = cljs.core.count.call(null,c__4408__auto___30993);
var G__30997 = (0);
seq__30962_30982 = G__30994;
chunk__30963_30983 = G__30995;
count__30964_30984 = G__30996;
i__30965_30985 = G__30997;
continue;
}
} else
{var f_30998 = cljs.core.first.call(null,seq__30962_30992__$1);figwheel.client.reload_css_file.call(null,f_30998);
{
var G__30999 = cljs.core.next.call(null,seq__30962_30992__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30962_30982 = G__30999;
chunk__30963_30983 = G__31000;
count__30964_30984 = G__31001;
i__30965_30985 = G__31002;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload){
return (function (state_30972){var state_val_30973 = (state_30972[(1)]);if((state_val_30973 === (2)))
{var inst_30968 = (state_30972[(2)]);var inst_30969 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30970 = on_cssload.call(null,inst_30969);var state_30972__$1 = (function (){var statearr_30974 = state_30972;(statearr_30974[(7)] = inst_30968);
return statearr_30974;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30972__$1,inst_30970);
} else
{if((state_val_30973 === (1)))
{var inst_30966 = cljs.core.async.timeout.call(null,(100));var state_30972__$1 = state_30972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30972__$1,(2),inst_30966);
} else
{return null;
}
}
});})(c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30978 = [null,null,null,null,null,null,null,null];(statearr_30978[(0)] = state_machine__9111__auto__);
(statearr_30978[(1)] = (1));
return statearr_30978;
});
var state_machine__9111__auto____1 = (function (state_30972){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30972);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30979){if((e30979 instanceof Object))
{var ex__9114__auto__ = e30979;var statearr_30980_31003 = state_30972;(statearr_30980_31003[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31004 = state_30972;
state_30972 = G__31004;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30972){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_30981 = f__9126__auto__.call(null);(statearr_30981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__30961,map__30961__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31005){var map__31010 = p__31005;var map__31010__$1 = ((cljs.core.seq_QMARK_.call(null,map__31010))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);var opts = map__31010__$1;var on_compile_fail = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31011 = cljs.core._EQ_;var expr__31012 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31012)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31012)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31012)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31010,map__31010__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31017 = {"detail":url};return obj31017;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31018){var map__31020 = p__31018;var map__31020__$1 = ((cljs.core.seq_QMARK_.call(null,map__31020))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);var class$ = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31021){var map__31027 = p__31021;var map__31027__$1 = ((cljs.core.seq_QMARK_.call(null,map__31027))?cljs.core.apply.call(null,cljs.core.hash_map,map__31027):map__31027);var ed = map__31027__$1;var exception_data = cljs.core.get.call(null,map__31027__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31027__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31028_31032 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31029_31033 = null;var count__31030_31034 = (0);var i__31031_31035 = (0);while(true){
if((i__31031_31035 < count__31030_31034))
{var msg_31036 = cljs.core._nth.call(null,chunk__31029_31033,i__31031_31035);console.log(msg_31036);
{
var G__31037 = seq__31028_31032;
var G__31038 = chunk__31029_31033;
var G__31039 = count__31030_31034;
var G__31040 = (i__31031_31035 + (1));
seq__31028_31032 = G__31037;
chunk__31029_31033 = G__31038;
count__31030_31034 = G__31039;
i__31031_31035 = G__31040;
continue;
}
} else
{var temp__4126__auto___31041 = cljs.core.seq.call(null,seq__31028_31032);if(temp__4126__auto___31041)
{var seq__31028_31042__$1 = temp__4126__auto___31041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31028_31042__$1))
{var c__4408__auto___31043 = cljs.core.chunk_first.call(null,seq__31028_31042__$1);{
var G__31044 = cljs.core.chunk_rest.call(null,seq__31028_31042__$1);
var G__31045 = c__4408__auto___31043;
var G__31046 = cljs.core.count.call(null,c__4408__auto___31043);
var G__31047 = (0);
seq__31028_31032 = G__31044;
chunk__31029_31033 = G__31045;
count__31030_31034 = G__31046;
i__31031_31035 = G__31047;
continue;
}
} else
{var msg_31048 = cljs.core.first.call(null,seq__31028_31042__$1);console.log(msg_31048);
{
var G__31049 = cljs.core.next.call(null,seq__31028_31042__$1);
var G__31050 = null;
var G__31051 = (0);
var G__31052 = (0);
seq__31028_31032 = G__31049;
chunk__31029_31033 = G__31050;
count__31030_31034 = G__31051;
i__31031_31035 = G__31052;
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
var watch_and_reload__delegate = function (p__31053){var map__31055 = p__31053;var map__31055__$1 = ((cljs.core.seq_QMARK_.call(null,map__31055))?cljs.core.apply.call(null,cljs.core.hash_map,map__31055):map__31055);var opts = map__31055__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31053 = null;if (arguments.length > 0) {
  p__31053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31053);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31056){
var p__31053 = cljs.core.seq(arglist__31056);
return watch_and_reload__delegate(p__31053);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
