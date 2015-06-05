// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_20251 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20253 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20253,opt_wrapper_20251,table_section_wrapper_20252,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20251,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20252,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20252,cell_wrapper_20253,table_section_wrapper_20252,table_section_wrapper_20252]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20258 = cljs.core.seq.call(null,tbody);var chunk__20259 = null;var count__20260 = (0);var i__20261 = (0);while(true){
if((i__20261 < count__20260))
{var child = cljs.core._nth.call(null,chunk__20259,i__20261);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20262 = seq__20258;
var G__20263 = chunk__20259;
var G__20264 = count__20260;
var G__20265 = (i__20261 + (1));
seq__20258 = G__20262;
chunk__20259 = G__20263;
count__20260 = G__20264;
i__20261 = G__20265;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20258);if(temp__4126__auto__)
{var seq__20258__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20258__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20258__$1);{
var G__20266 = cljs.core.chunk_rest.call(null,seq__20258__$1);
var G__20267 = c__4408__auto__;
var G__20268 = cljs.core.count.call(null,c__4408__auto__);
var G__20269 = (0);
seq__20258 = G__20266;
chunk__20259 = G__20267;
count__20260 = G__20268;
i__20261 = G__20269;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20258__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20270 = cljs.core.next.call(null,seq__20258__$1);
var G__20271 = null;
var G__20272 = (0);
var G__20273 = (0);
seq__20258 = G__20270;
chunk__20259 = G__20271;
count__20260 = G__20272;
i__20261 = G__20273;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20275 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20275,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20275,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20275,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20276 = wrapper.lastChild;
var G__20277 = (level - (1));
wrapper = G__20276;
level = G__20277;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3627__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3627__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj20279 = {};return obj20279;
})();
domina.nodes = (function nodes(content){if((function (){var and__3627__auto__ = content;if(and__3627__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3627__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3639__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.nodes["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3627__auto__ = nodeseq;if(and__3627__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3627__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3639__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.single_node["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3627__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3627__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3627__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__20280){
var mesg = cljs.core.seq(arglist__20280);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__20281){
var mesg = cljs.core.seq(arglist__20281);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__20282){
var contents = cljs.core.seq(arglist__20282);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20283_SHARP_){return p1__20283_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20284_SHARP_,p2__20285_SHARP_){return goog.dom.insertChildAt(p1__20284_SHARP_,p2__20285_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20287_SHARP_,p2__20286_SHARP_){return goog.dom.insertSiblingBefore(p2__20286_SHARP_,p1__20287_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20289_SHARP_,p2__20288_SHARP_){return goog.dom.insertSiblingAfter(p2__20288_SHARP_,p1__20289_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20291_SHARP_,p2__20290_SHARP_){return goog.dom.replaceNode(p2__20290_SHARP_,p1__20291_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__20296_20300 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20297_20301 = null;var count__20298_20302 = (0);var i__20299_20303 = (0);while(true){
if((i__20299_20303 < count__20298_20302))
{var n_20304 = cljs.core._nth.call(null,chunk__20297_20301,i__20299_20303);goog.style.setStyle(n_20304,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20305 = seq__20296_20300;
var G__20306 = chunk__20297_20301;
var G__20307 = count__20298_20302;
var G__20308 = (i__20299_20303 + (1));
seq__20296_20300 = G__20305;
chunk__20297_20301 = G__20306;
count__20298_20302 = G__20307;
i__20299_20303 = G__20308;
continue;
}
} else
{var temp__4126__auto___20309 = cljs.core.seq.call(null,seq__20296_20300);if(temp__4126__auto___20309)
{var seq__20296_20310__$1 = temp__4126__auto___20309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20296_20310__$1))
{var c__4408__auto___20311 = cljs.core.chunk_first.call(null,seq__20296_20310__$1);{
var G__20312 = cljs.core.chunk_rest.call(null,seq__20296_20310__$1);
var G__20313 = c__4408__auto___20311;
var G__20314 = cljs.core.count.call(null,c__4408__auto___20311);
var G__20315 = (0);
seq__20296_20300 = G__20312;
chunk__20297_20301 = G__20313;
count__20298_20302 = G__20314;
i__20299_20303 = G__20315;
continue;
}
} else
{var n_20316 = cljs.core.first.call(null,seq__20296_20310__$1);goog.style.setStyle(n_20316,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20317 = cljs.core.next.call(null,seq__20296_20310__$1);
var G__20318 = null;
var G__20319 = (0);
var G__20320 = (0);
seq__20296_20300 = G__20317;
chunk__20297_20301 = G__20318;
count__20298_20302 = G__20319;
i__20299_20303 = G__20320;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20321){
var content = cljs.core.first(arglist__20321);
arglist__20321 = cljs.core.next(arglist__20321);
var name = cljs.core.first(arglist__20321);
var value = cljs.core.rest(arglist__20321);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__20326_20330 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20327_20331 = null;var count__20328_20332 = (0);var i__20329_20333 = (0);while(true){
if((i__20329_20333 < count__20328_20332))
{var n_20334 = cljs.core._nth.call(null,chunk__20327_20331,i__20329_20333);n_20334.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20335 = seq__20326_20330;
var G__20336 = chunk__20327_20331;
var G__20337 = count__20328_20332;
var G__20338 = (i__20329_20333 + (1));
seq__20326_20330 = G__20335;
chunk__20327_20331 = G__20336;
count__20328_20332 = G__20337;
i__20329_20333 = G__20338;
continue;
}
} else
{var temp__4126__auto___20339 = cljs.core.seq.call(null,seq__20326_20330);if(temp__4126__auto___20339)
{var seq__20326_20340__$1 = temp__4126__auto___20339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20326_20340__$1))
{var c__4408__auto___20341 = cljs.core.chunk_first.call(null,seq__20326_20340__$1);{
var G__20342 = cljs.core.chunk_rest.call(null,seq__20326_20340__$1);
var G__20343 = c__4408__auto___20341;
var G__20344 = cljs.core.count.call(null,c__4408__auto___20341);
var G__20345 = (0);
seq__20326_20330 = G__20342;
chunk__20327_20331 = G__20343;
count__20328_20332 = G__20344;
i__20329_20333 = G__20345;
continue;
}
} else
{var n_20346 = cljs.core.first.call(null,seq__20326_20340__$1);n_20346.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20347 = cljs.core.next.call(null,seq__20326_20340__$1);
var G__20348 = null;
var G__20349 = (0);
var G__20350 = (0);
seq__20326_20330 = G__20347;
chunk__20327_20331 = G__20348;
count__20328_20332 = G__20349;
i__20329_20333 = G__20350;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20351){
var content = cljs.core.first(arglist__20351);
arglist__20351 = cljs.core.next(arglist__20351);
var name = cljs.core.first(arglist__20351);
var value = cljs.core.rest(arglist__20351);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20356_20360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20357_20361 = null;var count__20358_20362 = (0);var i__20359_20363 = (0);while(true){
if((i__20359_20363 < count__20358_20362))
{var n_20364 = cljs.core._nth.call(null,chunk__20357_20361,i__20359_20363);n_20364.removeAttribute(cljs.core.name.call(null,name));
{
var G__20365 = seq__20356_20360;
var G__20366 = chunk__20357_20361;
var G__20367 = count__20358_20362;
var G__20368 = (i__20359_20363 + (1));
seq__20356_20360 = G__20365;
chunk__20357_20361 = G__20366;
count__20358_20362 = G__20367;
i__20359_20363 = G__20368;
continue;
}
} else
{var temp__4126__auto___20369 = cljs.core.seq.call(null,seq__20356_20360);if(temp__4126__auto___20369)
{var seq__20356_20370__$1 = temp__4126__auto___20369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20356_20370__$1))
{var c__4408__auto___20371 = cljs.core.chunk_first.call(null,seq__20356_20370__$1);{
var G__20372 = cljs.core.chunk_rest.call(null,seq__20356_20370__$1);
var G__20373 = c__4408__auto___20371;
var G__20374 = cljs.core.count.call(null,c__4408__auto___20371);
var G__20375 = (0);
seq__20356_20360 = G__20372;
chunk__20357_20361 = G__20373;
count__20358_20362 = G__20374;
i__20359_20363 = G__20375;
continue;
}
} else
{var n_20376 = cljs.core.first.call(null,seq__20356_20370__$1);n_20376.removeAttribute(cljs.core.name.call(null,name));
{
var G__20377 = cljs.core.next.call(null,seq__20356_20370__$1);
var G__20378 = null;
var G__20379 = (0);
var G__20380 = (0);
seq__20356_20360 = G__20377;
chunk__20357_20361 = G__20378;
count__20358_20362 = G__20379;
i__20359_20363 = G__20380;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20382 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20382,(0),null);var v = cljs.core.nth.call(null,vec__20382,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{return v;
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20383_SHARP_){var attr = attrs__$1.item(p1__20383_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20390_20396 = cljs.core.seq.call(null,styles);var chunk__20391_20397 = null;var count__20392_20398 = (0);var i__20393_20399 = (0);while(true){
if((i__20393_20399 < count__20392_20398))
{var vec__20394_20400 = cljs.core._nth.call(null,chunk__20391_20397,i__20393_20399);var name_20401 = cljs.core.nth.call(null,vec__20394_20400,(0),null);var value_20402 = cljs.core.nth.call(null,vec__20394_20400,(1),null);domina.set_style_BANG_.call(null,content,name_20401,value_20402);
{
var G__20403 = seq__20390_20396;
var G__20404 = chunk__20391_20397;
var G__20405 = count__20392_20398;
var G__20406 = (i__20393_20399 + (1));
seq__20390_20396 = G__20403;
chunk__20391_20397 = G__20404;
count__20392_20398 = G__20405;
i__20393_20399 = G__20406;
continue;
}
} else
{var temp__4126__auto___20407 = cljs.core.seq.call(null,seq__20390_20396);if(temp__4126__auto___20407)
{var seq__20390_20408__$1 = temp__4126__auto___20407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20390_20408__$1))
{var c__4408__auto___20409 = cljs.core.chunk_first.call(null,seq__20390_20408__$1);{
var G__20410 = cljs.core.chunk_rest.call(null,seq__20390_20408__$1);
var G__20411 = c__4408__auto___20409;
var G__20412 = cljs.core.count.call(null,c__4408__auto___20409);
var G__20413 = (0);
seq__20390_20396 = G__20410;
chunk__20391_20397 = G__20411;
count__20392_20398 = G__20412;
i__20393_20399 = G__20413;
continue;
}
} else
{var vec__20395_20414 = cljs.core.first.call(null,seq__20390_20408__$1);var name_20415 = cljs.core.nth.call(null,vec__20395_20414,(0),null);var value_20416 = cljs.core.nth.call(null,vec__20395_20414,(1),null);domina.set_style_BANG_.call(null,content,name_20415,value_20416);
{
var G__20417 = cljs.core.next.call(null,seq__20390_20408__$1);
var G__20418 = null;
var G__20419 = (0);
var G__20420 = (0);
seq__20390_20396 = G__20417;
chunk__20391_20397 = G__20418;
count__20392_20398 = G__20419;
i__20393_20399 = G__20420;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20427_20433 = cljs.core.seq.call(null,attrs);var chunk__20428_20434 = null;var count__20429_20435 = (0);var i__20430_20436 = (0);while(true){
if((i__20430_20436 < count__20429_20435))
{var vec__20431_20437 = cljs.core._nth.call(null,chunk__20428_20434,i__20430_20436);var name_20438 = cljs.core.nth.call(null,vec__20431_20437,(0),null);var value_20439 = cljs.core.nth.call(null,vec__20431_20437,(1),null);domina.set_attr_BANG_.call(null,content,name_20438,value_20439);
{
var G__20440 = seq__20427_20433;
var G__20441 = chunk__20428_20434;
var G__20442 = count__20429_20435;
var G__20443 = (i__20430_20436 + (1));
seq__20427_20433 = G__20440;
chunk__20428_20434 = G__20441;
count__20429_20435 = G__20442;
i__20430_20436 = G__20443;
continue;
}
} else
{var temp__4126__auto___20444 = cljs.core.seq.call(null,seq__20427_20433);if(temp__4126__auto___20444)
{var seq__20427_20445__$1 = temp__4126__auto___20444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20427_20445__$1))
{var c__4408__auto___20446 = cljs.core.chunk_first.call(null,seq__20427_20445__$1);{
var G__20447 = cljs.core.chunk_rest.call(null,seq__20427_20445__$1);
var G__20448 = c__4408__auto___20446;
var G__20449 = cljs.core.count.call(null,c__4408__auto___20446);
var G__20450 = (0);
seq__20427_20433 = G__20447;
chunk__20428_20434 = G__20448;
count__20429_20435 = G__20449;
i__20430_20436 = G__20450;
continue;
}
} else
{var vec__20432_20451 = cljs.core.first.call(null,seq__20427_20445__$1);var name_20452 = cljs.core.nth.call(null,vec__20432_20451,(0),null);var value_20453 = cljs.core.nth.call(null,vec__20432_20451,(1),null);domina.set_attr_BANG_.call(null,content,name_20452,value_20453);
{
var G__20454 = cljs.core.next.call(null,seq__20427_20445__$1);
var G__20455 = null;
var G__20456 = (0);
var G__20457 = (0);
seq__20427_20433 = G__20454;
chunk__20428_20434 = G__20455;
count__20429_20435 = G__20456;
i__20430_20436 = G__20457;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20462_20466 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20463_20467 = null;var count__20464_20468 = (0);var i__20465_20469 = (0);while(true){
if((i__20465_20469 < count__20464_20468))
{var node_20470 = cljs.core._nth.call(null,chunk__20463_20467,i__20465_20469);goog.dom.classes.add(node_20470,class$);
{
var G__20471 = seq__20462_20466;
var G__20472 = chunk__20463_20467;
var G__20473 = count__20464_20468;
var G__20474 = (i__20465_20469 + (1));
seq__20462_20466 = G__20471;
chunk__20463_20467 = G__20472;
count__20464_20468 = G__20473;
i__20465_20469 = G__20474;
continue;
}
} else
{var temp__4126__auto___20475 = cljs.core.seq.call(null,seq__20462_20466);if(temp__4126__auto___20475)
{var seq__20462_20476__$1 = temp__4126__auto___20475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20462_20476__$1))
{var c__4408__auto___20477 = cljs.core.chunk_first.call(null,seq__20462_20476__$1);{
var G__20478 = cljs.core.chunk_rest.call(null,seq__20462_20476__$1);
var G__20479 = c__4408__auto___20477;
var G__20480 = cljs.core.count.call(null,c__4408__auto___20477);
var G__20481 = (0);
seq__20462_20466 = G__20478;
chunk__20463_20467 = G__20479;
count__20464_20468 = G__20480;
i__20465_20469 = G__20481;
continue;
}
} else
{var node_20482 = cljs.core.first.call(null,seq__20462_20476__$1);goog.dom.classes.add(node_20482,class$);
{
var G__20483 = cljs.core.next.call(null,seq__20462_20476__$1);
var G__20484 = null;
var G__20485 = (0);
var G__20486 = (0);
seq__20462_20466 = G__20483;
chunk__20463_20467 = G__20484;
count__20464_20468 = G__20485;
i__20465_20469 = G__20486;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20491_20495 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20492_20496 = null;var count__20493_20497 = (0);var i__20494_20498 = (0);while(true){
if((i__20494_20498 < count__20493_20497))
{var node_20499 = cljs.core._nth.call(null,chunk__20492_20496,i__20494_20498);goog.dom.classes.remove(node_20499,class$);
{
var G__20500 = seq__20491_20495;
var G__20501 = chunk__20492_20496;
var G__20502 = count__20493_20497;
var G__20503 = (i__20494_20498 + (1));
seq__20491_20495 = G__20500;
chunk__20492_20496 = G__20501;
count__20493_20497 = G__20502;
i__20494_20498 = G__20503;
continue;
}
} else
{var temp__4126__auto___20504 = cljs.core.seq.call(null,seq__20491_20495);if(temp__4126__auto___20504)
{var seq__20491_20505__$1 = temp__4126__auto___20504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20491_20505__$1))
{var c__4408__auto___20506 = cljs.core.chunk_first.call(null,seq__20491_20505__$1);{
var G__20507 = cljs.core.chunk_rest.call(null,seq__20491_20505__$1);
var G__20508 = c__4408__auto___20506;
var G__20509 = cljs.core.count.call(null,c__4408__auto___20506);
var G__20510 = (0);
seq__20491_20495 = G__20507;
chunk__20492_20496 = G__20508;
count__20493_20497 = G__20509;
i__20494_20498 = G__20510;
continue;
}
} else
{var node_20511 = cljs.core.first.call(null,seq__20491_20505__$1);goog.dom.classes.remove(node_20511,class$);
{
var G__20512 = cljs.core.next.call(null,seq__20491_20505__$1);
var G__20513 = null;
var G__20514 = (0);
var G__20515 = (0);
seq__20491_20495 = G__20512;
chunk__20492_20496 = G__20513;
count__20493_20497 = G__20514;
i__20494_20498 = G__20515;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20520_20524 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20521_20525 = null;var count__20522_20526 = (0);var i__20523_20527 = (0);while(true){
if((i__20523_20527 < count__20522_20526))
{var node_20528 = cljs.core._nth.call(null,chunk__20521_20525,i__20523_20527);goog.dom.classes.toggle(node_20528,class$);
{
var G__20529 = seq__20520_20524;
var G__20530 = chunk__20521_20525;
var G__20531 = count__20522_20526;
var G__20532 = (i__20523_20527 + (1));
seq__20520_20524 = G__20529;
chunk__20521_20525 = G__20530;
count__20522_20526 = G__20531;
i__20523_20527 = G__20532;
continue;
}
} else
{var temp__4126__auto___20533 = cljs.core.seq.call(null,seq__20520_20524);if(temp__4126__auto___20533)
{var seq__20520_20534__$1 = temp__4126__auto___20533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20520_20534__$1))
{var c__4408__auto___20535 = cljs.core.chunk_first.call(null,seq__20520_20534__$1);{
var G__20536 = cljs.core.chunk_rest.call(null,seq__20520_20534__$1);
var G__20537 = c__4408__auto___20535;
var G__20538 = cljs.core.count.call(null,c__4408__auto___20535);
var G__20539 = (0);
seq__20520_20524 = G__20536;
chunk__20521_20525 = G__20537;
count__20522_20526 = G__20538;
i__20523_20527 = G__20539;
continue;
}
} else
{var node_20540 = cljs.core.first.call(null,seq__20520_20534__$1);goog.dom.classes.toggle(node_20540,class$);
{
var G__20541 = cljs.core.next.call(null,seq__20520_20534__$1);
var G__20542 = null;
var G__20543 = (0);
var G__20544 = (0);
seq__20520_20524 = G__20541;
chunk__20521_20525 = G__20542;
count__20522_20526 = G__20543;
i__20523_20527 = G__20544;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20553__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20549_20554 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20550_20555 = null;var count__20551_20556 = (0);var i__20552_20557 = (0);while(true){
if((i__20552_20557 < count__20551_20556))
{var node_20558 = cljs.core._nth.call(null,chunk__20550_20555,i__20552_20557);goog.dom.classes.set(node_20558,classes_20553__$1);
{
var G__20559 = seq__20549_20554;
var G__20560 = chunk__20550_20555;
var G__20561 = count__20551_20556;
var G__20562 = (i__20552_20557 + (1));
seq__20549_20554 = G__20559;
chunk__20550_20555 = G__20560;
count__20551_20556 = G__20561;
i__20552_20557 = G__20562;
continue;
}
} else
{var temp__4126__auto___20563 = cljs.core.seq.call(null,seq__20549_20554);if(temp__4126__auto___20563)
{var seq__20549_20564__$1 = temp__4126__auto___20563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20549_20564__$1))
{var c__4408__auto___20565 = cljs.core.chunk_first.call(null,seq__20549_20564__$1);{
var G__20566 = cljs.core.chunk_rest.call(null,seq__20549_20564__$1);
var G__20567 = c__4408__auto___20565;
var G__20568 = cljs.core.count.call(null,c__4408__auto___20565);
var G__20569 = (0);
seq__20549_20554 = G__20566;
chunk__20550_20555 = G__20567;
count__20551_20556 = G__20568;
i__20552_20557 = G__20569;
continue;
}
} else
{var node_20570 = cljs.core.first.call(null,seq__20549_20564__$1);goog.dom.classes.set(node_20570,classes_20553__$1);
{
var G__20571 = cljs.core.next.call(null,seq__20549_20564__$1);
var G__20572 = null;
var G__20573 = (0);
var G__20574 = (0);
seq__20549_20554 = G__20571;
chunk__20550_20555 = G__20572;
count__20551_20556 = G__20573;
i__20552_20557 = G__20574;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20579_20583 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20580_20584 = null;var count__20581_20585 = (0);var i__20582_20586 = (0);while(true){
if((i__20582_20586 < count__20581_20585))
{var node_20587 = cljs.core._nth.call(null,chunk__20580_20584,i__20582_20586);goog.dom.setTextContent(node_20587,value);
{
var G__20588 = seq__20579_20583;
var G__20589 = chunk__20580_20584;
var G__20590 = count__20581_20585;
var G__20591 = (i__20582_20586 + (1));
seq__20579_20583 = G__20588;
chunk__20580_20584 = G__20589;
count__20581_20585 = G__20590;
i__20582_20586 = G__20591;
continue;
}
} else
{var temp__4126__auto___20592 = cljs.core.seq.call(null,seq__20579_20583);if(temp__4126__auto___20592)
{var seq__20579_20593__$1 = temp__4126__auto___20592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20579_20593__$1))
{var c__4408__auto___20594 = cljs.core.chunk_first.call(null,seq__20579_20593__$1);{
var G__20595 = cljs.core.chunk_rest.call(null,seq__20579_20593__$1);
var G__20596 = c__4408__auto___20594;
var G__20597 = cljs.core.count.call(null,c__4408__auto___20594);
var G__20598 = (0);
seq__20579_20583 = G__20595;
chunk__20580_20584 = G__20596;
count__20581_20585 = G__20597;
i__20582_20586 = G__20598;
continue;
}
} else
{var node_20599 = cljs.core.first.call(null,seq__20579_20593__$1);goog.dom.setTextContent(node_20599,value);
{
var G__20600 = cljs.core.next.call(null,seq__20579_20593__$1);
var G__20601 = null;
var G__20602 = (0);
var G__20603 = (0);
seq__20579_20583 = G__20600;
chunk__20580_20584 = G__20601;
count__20581_20585 = G__20602;
i__20582_20586 = G__20603;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20608_20612 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20609_20613 = null;var count__20610_20614 = (0);var i__20611_20615 = (0);while(true){
if((i__20611_20615 < count__20610_20614))
{var node_20616 = cljs.core._nth.call(null,chunk__20609_20613,i__20611_20615);goog.dom.forms.setValue(node_20616,value);
{
var G__20617 = seq__20608_20612;
var G__20618 = chunk__20609_20613;
var G__20619 = count__20610_20614;
var G__20620 = (i__20611_20615 + (1));
seq__20608_20612 = G__20617;
chunk__20609_20613 = G__20618;
count__20610_20614 = G__20619;
i__20611_20615 = G__20620;
continue;
}
} else
{var temp__4126__auto___20621 = cljs.core.seq.call(null,seq__20608_20612);if(temp__4126__auto___20621)
{var seq__20608_20622__$1 = temp__4126__auto___20621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20608_20622__$1))
{var c__4408__auto___20623 = cljs.core.chunk_first.call(null,seq__20608_20622__$1);{
var G__20624 = cljs.core.chunk_rest.call(null,seq__20608_20622__$1);
var G__20625 = c__4408__auto___20623;
var G__20626 = cljs.core.count.call(null,c__4408__auto___20623);
var G__20627 = (0);
seq__20608_20612 = G__20624;
chunk__20609_20613 = G__20625;
count__20610_20614 = G__20626;
i__20611_20615 = G__20627;
continue;
}
} else
{var node_20628 = cljs.core.first.call(null,seq__20608_20622__$1);goog.dom.forms.setValue(node_20628,value);
{
var G__20629 = cljs.core.next.call(null,seq__20608_20622__$1);
var G__20630 = null;
var G__20631 = (0);
var G__20632 = (0);
seq__20608_20612 = G__20629;
chunk__20609_20613 = G__20630;
count__20610_20614 = G__20631;
i__20611_20615 = G__20632;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3627__auto__ = allows_inner_html_QMARK_;if(and__3627__auto__)
{var and__3627__auto____$1 = (function (){var or__3639__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3627__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var value_20643 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20639_20644 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20640_20645 = null;var count__20641_20646 = (0);var i__20642_20647 = (0);while(true){
if((i__20642_20647 < count__20641_20646))
{var node_20648 = cljs.core._nth.call(null,chunk__20640_20645,i__20642_20647);node_20648.innerHTML = value_20643;
{
var G__20649 = seq__20639_20644;
var G__20650 = chunk__20640_20645;
var G__20651 = count__20641_20646;
var G__20652 = (i__20642_20647 + (1));
seq__20639_20644 = G__20649;
chunk__20640_20645 = G__20650;
count__20641_20646 = G__20651;
i__20642_20647 = G__20652;
continue;
}
} else
{var temp__4126__auto___20653 = cljs.core.seq.call(null,seq__20639_20644);if(temp__4126__auto___20653)
{var seq__20639_20654__$1 = temp__4126__auto___20653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20639_20654__$1))
{var c__4408__auto___20655 = cljs.core.chunk_first.call(null,seq__20639_20654__$1);{
var G__20656 = cljs.core.chunk_rest.call(null,seq__20639_20654__$1);
var G__20657 = c__4408__auto___20655;
var G__20658 = cljs.core.count.call(null,c__4408__auto___20655);
var G__20659 = (0);
seq__20639_20644 = G__20656;
chunk__20640_20645 = G__20657;
count__20641_20646 = G__20658;
i__20642_20647 = G__20659;
continue;
}
} else
{var node_20660 = cljs.core.first.call(null,seq__20639_20654__$1);node_20660.innerHTML = value_20643;
{
var G__20661 = cljs.core.next.call(null,seq__20639_20654__$1);
var G__20662 = null;
var G__20663 = (0);
var G__20664 = (0);
seq__20639_20644 = G__20661;
chunk__20640_20645 = G__20662;
count__20641_20646 = G__20663;
i__20642_20647 = G__20664;
continue;
}
}
} else
{}
}
break;
}
}catch (e20638){if((e20638 instanceof Error))
{var e_20665 = e20638;domina.replace_children_BANG_.call(null,content,value_20643);
} else
{throw e20638;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3627__auto__ = bubble;if(cljs.core.truth_(and__3627__auto__))
{return (value == null);
} else
{return and__3627__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3639__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20672_20676 = cljs.core.seq.call(null,children);var chunk__20673_20677 = null;var count__20674_20678 = (0);var i__20675_20679 = (0);while(true){
if((i__20675_20679 < count__20674_20678))
{var child_20680 = cljs.core._nth.call(null,chunk__20673_20677,i__20675_20679);frag.appendChild(child_20680);
{
var G__20681 = seq__20672_20676;
var G__20682 = chunk__20673_20677;
var G__20683 = count__20674_20678;
var G__20684 = (i__20675_20679 + (1));
seq__20672_20676 = G__20681;
chunk__20673_20677 = G__20682;
count__20674_20678 = G__20683;
i__20675_20679 = G__20684;
continue;
}
} else
{var temp__4126__auto___20685 = cljs.core.seq.call(null,seq__20672_20676);if(temp__4126__auto___20685)
{var seq__20672_20686__$1 = temp__4126__auto___20685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20672_20686__$1))
{var c__4408__auto___20687 = cljs.core.chunk_first.call(null,seq__20672_20686__$1);{
var G__20688 = cljs.core.chunk_rest.call(null,seq__20672_20686__$1);
var G__20689 = c__4408__auto___20687;
var G__20690 = cljs.core.count.call(null,c__4408__auto___20687);
var G__20691 = (0);
seq__20672_20676 = G__20688;
chunk__20673_20677 = G__20689;
count__20674_20678 = G__20690;
i__20675_20679 = G__20691;
continue;
}
} else
{var child_20692 = cljs.core.first.call(null,seq__20672_20686__$1);frag.appendChild(child_20692);
{
var G__20693 = cljs.core.next.call(null,seq__20672_20686__$1);
var G__20694 = null;
var G__20695 = (0);
var G__20696 = (0);
seq__20672_20676 = G__20693;
chunk__20673_20677 = G__20694;
count__20674_20678 = G__20695;
i__20675_20679 = G__20696;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20666_SHARP_,p2__20667_SHARP_){return f.call(null,p1__20666_SHARP_,p2__20667_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3627__auto__ = obj;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3627__auto____$1)
{return obj.length;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20698 = list_thing;if(G__20698)
{var bit__4302__auto__ = (G__20698.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20698.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20698.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20698);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20699 = content;if(G__20699)
{var bit__4302__auto__ = (G__20699.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20699.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20699.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20699);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20699);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__20700 = content;if(G__20700)
{var bit__4302__auto__ = (G__20700.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20700.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20700.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20700);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
