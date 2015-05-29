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
var log__delegate = function (p__36938,args){var map__36940 = p__36938;var map__36940__$1 = ((cljs.core.seq_QMARK_.call(null,map__36940))?cljs.core.apply.call(null,cljs.core.hash_map,map__36940):map__36940);var debug = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__36938,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__36938,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__36941){
var p__36938 = cljs.core.first(arglist__36941);
var args = cljs.core.rest(arglist__36941);
return log__delegate(p__36938,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__36942){var map__36944 = p__36942;var map__36944__$1 = ((cljs.core.seq_QMARK_.call(null,map__36944))?cljs.core.apply.call(null,cljs.core.hash_map,map__36944):map__36944);var websocket_url = cljs.core.get.call(null,map__36944__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__36945,callback){var map__36947 = p__36945;var map__36947__$1 = ((cljs.core.seq_QMARK_.call(null,map__36947))?cljs.core.apply.call(null,cljs.core.hash_map,map__36947):map__36947);var msg = map__36947__$1;var dependency_file = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11514__auto__ = dependency_file;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__36947,map__36947__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__36947,map__36947__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__36948,p__36949){var map__36952 = p__36948;var map__36952__$1 = ((cljs.core.seq_QMARK_.call(null,map__36952))?cljs.core.apply.call(null,cljs.core.hash_map,map__36952):map__36952);var opts = map__36952__$1;var url_rewriter = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__36953 = p__36949;var map__36953__$1 = ((cljs.core.seq_QMARK_.call(null,map__36953))?cljs.core.apply.call(null,cljs.core.hash_map,map__36953):map__36953);var d = map__36953__$1;var file = cljs.core.get.call(null,map__36953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__36954,p__36955){var map__36997 = p__36954;var map__36997__$1 = ((cljs.core.seq_QMARK_.call(null,map__36997))?cljs.core.apply.call(null,cljs.core.hash_map,map__36997):map__36997);var opts = map__36997__$1;var on_jsload = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__36998 = p__36955;var map__36998__$1 = ((cljs.core.seq_QMARK_.call(null,map__36998))?cljs.core.apply.call(null,cljs.core.hash_map,map__36998):map__36998);var files = cljs.core.get.call(null,map__36998__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files){
return (function (state_37021){var state_val_37022 = (state_37021[(1)]);if((state_val_37022 === (6)))
{var inst_37003 = (state_37021[(7)]);var inst_37012 = (state_37021[(2)]);var inst_37013 = cljs.core.PersistentVector.EMPTY_NODE;var inst_37014 = [inst_37003];var inst_37015 = (new cljs.core.PersistentVector(null,1,(5),inst_37013,inst_37014,null));var inst_37016 = cljs.core.apply.call(null,on_jsload,inst_37015);var state_37021__$1 = (function (){var statearr_37023 = state_37021;(statearr_37023[(8)] = inst_37012);
return statearr_37023;
})();var statearr_37024_37038 = state_37021__$1;(statearr_37024_37038[(2)] = inst_37016);
(statearr_37024_37038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37022 === (5)))
{var inst_37019 = (state_37021[(2)]);var state_37021__$1 = state_37021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37021__$1,inst_37019);
} else
{if((state_val_37022 === (4)))
{var state_37021__$1 = state_37021;var statearr_37025_37039 = state_37021__$1;(statearr_37025_37039[(2)] = null);
(statearr_37025_37039[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37022 === (3)))
{var inst_37003 = (state_37021[(7)]);var inst_37006 = console.debug("Figwheel: loaded these files");var inst_37007 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37003);var inst_37008 = cljs.core.prn_str.call(null,inst_37007);var inst_37009 = console.log(inst_37008);var inst_37010 = cljs.core.async.timeout.call(null,(10));var state_37021__$1 = (function (){var statearr_37026 = state_37021;(statearr_37026[(9)] = inst_37006);
(statearr_37026[(10)] = inst_37009);
return statearr_37026;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37021__$1,(6),inst_37010);
} else
{if((state_val_37022 === (2)))
{var inst_37003 = (state_37021[(7)]);var inst_37003__$1 = (state_37021[(2)]);var inst_37004 = cljs.core.not_empty.call(null,inst_37003__$1);var state_37021__$1 = (function (){var statearr_37027 = state_37021;(statearr_37027[(7)] = inst_37003__$1);
return statearr_37027;
})();if(cljs.core.truth_(inst_37004))
{var statearr_37028_37040 = state_37021__$1;(statearr_37028_37040[(1)] = (3));
} else
{var statearr_37029_37041 = state_37021__$1;(statearr_37029_37041[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37022 === (1)))
{var inst_36999 = before_jsload.call(null,files);var inst_37000 = figwheel.client.add_request_urls.call(null,opts,files);var inst_37001 = figwheel.client.load_all_js_files.call(null,inst_37000);var state_37021__$1 = (function (){var statearr_37030 = state_37021;(statearr_37030[(11)] = inst_36999);
return statearr_37030;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37021__$1,(2),inst_37001);
} else
{return null;
}
}
}
}
}
}
});})(c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files))
;return ((function (switch__18811__auto__,c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_37034 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37034[(0)] = state_machine__18812__auto__);
(statearr_37034[(1)] = (1));
return statearr_37034;
});
var state_machine__18812__auto____1 = (function (state_37021){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_37021);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e37035){if((e37035 instanceof Object))
{var ex__18815__auto__ = e37035;var statearr_37036_37042 = state_37021;(statearr_37036_37042[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37043 = state_37021;
state_37021 = G__37043;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_37021){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_37021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files))
})();var state__18869__auto__ = (function (){var statearr_37037 = f__18868__auto__.call(null);(statearr_37037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_37037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,map__36997,map__36997__$1,opts,on_jsload,before_jsload,map__36998,map__36998__$1,files))
);
return c__18867__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__37044,link_href){var map__37046 = p__37044;var map__37046__$1 = ((cljs.core.seq_QMARK_.call(null,map__37046))?cljs.core.apply.call(null,cljs.core.hash_map,map__37046):map__37046);var request_url = cljs.core.get.call(null,map__37046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__37046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,parent){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,parent){
return (function (state_37067){var state_val_37068 = (state_37067[(1)]);if((state_val_37068 === (2)))
{var inst_37064 = (state_37067[(2)]);var inst_37065 = parent.removeChild(orig_link);var state_37067__$1 = (function (){var statearr_37069 = state_37067;(statearr_37069[(7)] = inst_37064);
return statearr_37069;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37067__$1,inst_37065);
} else
{if((state_val_37068 === (1)))
{var inst_37062 = cljs.core.async.timeout.call(null,(200));var state_37067__$1 = state_37067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37067__$1,(2),inst_37062);
} else
{return null;
}
}
});})(c__18867__auto__,parent))
;return ((function (switch__18811__auto__,c__18867__auto__,parent){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_37073 = [null,null,null,null,null,null,null,null];(statearr_37073[(0)] = state_machine__18812__auto__);
(statearr_37073[(1)] = (1));
return statearr_37073;
});
var state_machine__18812__auto____1 = (function (state_37067){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_37067);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e37074){if((e37074 instanceof Object))
{var ex__18815__auto__ = e37074;var statearr_37075_37077 = state_37067;(statearr_37075_37077[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37074;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37078 = state_37067;
state_37067 = G__37078;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_37067){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_37067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,parent))
})();var state__18869__auto__ = (function (){var statearr_37076 = f__18868__auto__.call(null);(statearr_37076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_37076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,parent))
);
return c__18867__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__37079){var map__37081 = p__37079;var map__37081__$1 = ((cljs.core.seq_QMARK_.call(null,map__37081))?cljs.core.apply.call(null,cljs.core.hash_map,map__37081):map__37081);var f_data = map__37081__$1;var request_url = cljs.core.get.call(null,map__37081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__37081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__37082,files_msg){var map__37104 = p__37082;var map__37104__$1 = ((cljs.core.seq_QMARK_.call(null,map__37104))?cljs.core.apply.call(null,cljs.core.hash_map,map__37104):map__37104);var opts = map__37104__$1;var on_cssload = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__37105_37125 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__37106_37126 = null;var count__37107_37127 = (0);var i__37108_37128 = (0);while(true){
if((i__37108_37128 < count__37107_37127))
{var f_37129 = cljs.core._nth.call(null,chunk__37106_37126,i__37108_37128);figwheel.client.reload_css_file.call(null,f_37129);
{
var G__37130 = seq__37105_37125;
var G__37131 = chunk__37106_37126;
var G__37132 = count__37107_37127;
var G__37133 = (i__37108_37128 + (1));
seq__37105_37125 = G__37130;
chunk__37106_37126 = G__37131;
count__37107_37127 = G__37132;
i__37108_37128 = G__37133;
continue;
}
} else
{var temp__4126__auto___37134 = cljs.core.seq.call(null,seq__37105_37125);if(temp__4126__auto___37134)
{var seq__37105_37135__$1 = temp__4126__auto___37134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37105_37135__$1))
{var c__12283__auto___37136 = cljs.core.chunk_first.call(null,seq__37105_37135__$1);{
var G__37137 = cljs.core.chunk_rest.call(null,seq__37105_37135__$1);
var G__37138 = c__12283__auto___37136;
var G__37139 = cljs.core.count.call(null,c__12283__auto___37136);
var G__37140 = (0);
seq__37105_37125 = G__37137;
chunk__37106_37126 = G__37138;
count__37107_37127 = G__37139;
i__37108_37128 = G__37140;
continue;
}
} else
{var f_37141 = cljs.core.first.call(null,seq__37105_37135__$1);figwheel.client.reload_css_file.call(null,f_37141);
{
var G__37142 = cljs.core.next.call(null,seq__37105_37135__$1);
var G__37143 = null;
var G__37144 = (0);
var G__37145 = (0);
seq__37105_37125 = G__37142;
chunk__37106_37126 = G__37143;
count__37107_37127 = G__37144;
i__37108_37128 = G__37145;
continue;
}
}
} else
{}
}
break;
}
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload){
return (function (state_37115){var state_val_37116 = (state_37115[(1)]);if((state_val_37116 === (2)))
{var inst_37111 = (state_37115[(2)]);var inst_37112 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_37113 = on_cssload.call(null,inst_37112);var state_37115__$1 = (function (){var statearr_37117 = state_37115;(statearr_37117[(7)] = inst_37111);
return statearr_37117;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37115__$1,inst_37113);
} else
{if((state_val_37116 === (1)))
{var inst_37109 = cljs.core.async.timeout.call(null,(100));var state_37115__$1 = state_37115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37115__$1,(2),inst_37109);
} else
{return null;
}
}
});})(c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload))
;return ((function (switch__18811__auto__,c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_37121 = [null,null,null,null,null,null,null,null];(statearr_37121[(0)] = state_machine__18812__auto__);
(statearr_37121[(1)] = (1));
return statearr_37121;
});
var state_machine__18812__auto____1 = (function (state_37115){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_37115);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e37122){if((e37122 instanceof Object))
{var ex__18815__auto__ = e37122;var statearr_37123_37146 = state_37115;(statearr_37123_37146[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37122;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37147 = state_37115;
state_37115 = G__37147;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_37115){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_37115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload))
})();var state__18869__auto__ = (function (){var statearr_37124 = f__18868__auto__.call(null);(statearr_37124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_37124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,map__37104,map__37104__$1,opts,on_cssload))
);
return c__18867__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__37148){var map__37153 = p__37148;var map__37153__$1 = ((cljs.core.seq_QMARK_.call(null,map__37153))?cljs.core.apply.call(null,cljs.core.hash_map,map__37153):map__37153);var opts = map__37153__$1;var on_compile_fail = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__37154 = cljs.core._EQ_;var expr__37155 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__37154.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__37155)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37154.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__37155)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37154.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37155)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__37153,map__37153__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj37160 = {"detail":url};return obj37160;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__37161){var map__37163 = p__37161;var map__37163__$1 = ((cljs.core.seq_QMARK_.call(null,map__37163))?cljs.core.apply.call(null,cljs.core.hash_map,map__37163):map__37163);var class$ = cljs.core.get.call(null,map__37163__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__37163__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__37164){var map__37170 = p__37164;var map__37170__$1 = ((cljs.core.seq_QMARK_.call(null,map__37170))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);var ed = map__37170__$1;var exception_data = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__37171_37175 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__37172_37176 = null;var count__37173_37177 = (0);var i__37174_37178 = (0);while(true){
if((i__37174_37178 < count__37173_37177))
{var msg_37179 = cljs.core._nth.call(null,chunk__37172_37176,i__37174_37178);console.log(msg_37179);
{
var G__37180 = seq__37171_37175;
var G__37181 = chunk__37172_37176;
var G__37182 = count__37173_37177;
var G__37183 = (i__37174_37178 + (1));
seq__37171_37175 = G__37180;
chunk__37172_37176 = G__37181;
count__37173_37177 = G__37182;
i__37174_37178 = G__37183;
continue;
}
} else
{var temp__4126__auto___37184 = cljs.core.seq.call(null,seq__37171_37175);if(temp__4126__auto___37184)
{var seq__37171_37185__$1 = temp__4126__auto___37184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37171_37185__$1))
{var c__12283__auto___37186 = cljs.core.chunk_first.call(null,seq__37171_37185__$1);{
var G__37187 = cljs.core.chunk_rest.call(null,seq__37171_37185__$1);
var G__37188 = c__12283__auto___37186;
var G__37189 = cljs.core.count.call(null,c__12283__auto___37186);
var G__37190 = (0);
seq__37171_37175 = G__37187;
chunk__37172_37176 = G__37188;
count__37173_37177 = G__37189;
i__37174_37178 = G__37190;
continue;
}
} else
{var msg_37191 = cljs.core.first.call(null,seq__37171_37185__$1);console.log(msg_37191);
{
var G__37192 = cljs.core.next.call(null,seq__37171_37185__$1);
var G__37193 = null;
var G__37194 = (0);
var G__37195 = (0);
seq__37171_37175 = G__37192;
chunk__37172_37176 = G__37193;
count__37173_37177 = G__37194;
i__37174_37178 = G__37195;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11514__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
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
var watch_and_reload__delegate = function (p__37196){var map__37198 = p__37196;var map__37198__$1 = ((cljs.core.seq_QMARK_.call(null,map__37198))?cljs.core.apply.call(null,cljs.core.hash_map,map__37198):map__37198);var opts = map__37198__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__37196 = null;if (arguments.length > 0) {
  p__37196 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__37196);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__37199){
var p__37196 = cljs.core.seq(arglist__37199);
return watch_and_reload__delegate(p__37196);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map