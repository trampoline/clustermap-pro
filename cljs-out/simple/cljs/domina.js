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
var opt_wrapper_21292 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21293 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21294 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21294,opt_wrapper_21292,table_section_wrapper_21293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21293,cell_wrapper_21294,table_section_wrapper_21293,table_section_wrapper_21293]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21299 = cljs.core.seq.call(null,tbody);var chunk__21300 = null;var count__21301 = (0);var i__21302 = (0);while(true){
if((i__21302 < count__21301))
{var child = cljs.core._nth.call(null,chunk__21300,i__21302);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21303 = seq__21299;
var G__21304 = chunk__21300;
var G__21305 = count__21301;
var G__21306 = (i__21302 + (1));
seq__21299 = G__21303;
chunk__21300 = G__21304;
count__21301 = G__21305;
i__21302 = G__21306;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21299);if(temp__4126__auto__)
{var seq__21299__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21299__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21299__$1);{
var G__21307 = cljs.core.chunk_rest.call(null,seq__21299__$1);
var G__21308 = c__4408__auto__;
var G__21309 = cljs.core.count.call(null,c__4408__auto__);
var G__21310 = (0);
seq__21299 = G__21307;
chunk__21300 = G__21308;
count__21301 = G__21309;
i__21302 = G__21310;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21299__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21311 = cljs.core.next.call(null,seq__21299__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__21299 = G__21311;
chunk__21300 = G__21312;
count__21301 = G__21313;
i__21302 = G__21314;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21316 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21316,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21316,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21316,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21317 = wrapper.lastChild;
var G__21318 = (level - (1));
wrapper = G__21317;
level = G__21318;
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
domina.DomContent = (function (){var obj21320 = {};return obj21320;
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
log_debug.cljs$lang$applyTo = (function (arglist__21321){
var mesg = cljs.core.seq(arglist__21321);
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
log.cljs$lang$applyTo = (function (arglist__21322){
var mesg = cljs.core.seq(arglist__21322);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21323){
var contents = cljs.core.seq(arglist__21323);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21324_SHARP_){return p1__21324_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21325_SHARP_,p2__21326_SHARP_){return goog.dom.insertChildAt(p1__21325_SHARP_,p2__21326_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21328_SHARP_,p2__21327_SHARP_){return goog.dom.insertSiblingBefore(p2__21327_SHARP_,p1__21328_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21330_SHARP_,p2__21329_SHARP_){return goog.dom.insertSiblingAfter(p2__21329_SHARP_,p1__21330_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21332_SHARP_,p2__21331_SHARP_){return goog.dom.replaceNode(p2__21331_SHARP_,p1__21332_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21337_21341 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21338_21342 = null;var count__21339_21343 = (0);var i__21340_21344 = (0);while(true){
if((i__21340_21344 < count__21339_21343))
{var n_21345 = cljs.core._nth.call(null,chunk__21338_21342,i__21340_21344);goog.style.setStyle(n_21345,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21346 = seq__21337_21341;
var G__21347 = chunk__21338_21342;
var G__21348 = count__21339_21343;
var G__21349 = (i__21340_21344 + (1));
seq__21337_21341 = G__21346;
chunk__21338_21342 = G__21347;
count__21339_21343 = G__21348;
i__21340_21344 = G__21349;
continue;
}
} else
{var temp__4126__auto___21350 = cljs.core.seq.call(null,seq__21337_21341);if(temp__4126__auto___21350)
{var seq__21337_21351__$1 = temp__4126__auto___21350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21337_21351__$1))
{var c__4408__auto___21352 = cljs.core.chunk_first.call(null,seq__21337_21351__$1);{
var G__21353 = cljs.core.chunk_rest.call(null,seq__21337_21351__$1);
var G__21354 = c__4408__auto___21352;
var G__21355 = cljs.core.count.call(null,c__4408__auto___21352);
var G__21356 = (0);
seq__21337_21341 = G__21353;
chunk__21338_21342 = G__21354;
count__21339_21343 = G__21355;
i__21340_21344 = G__21356;
continue;
}
} else
{var n_21357 = cljs.core.first.call(null,seq__21337_21351__$1);goog.style.setStyle(n_21357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21358 = cljs.core.next.call(null,seq__21337_21351__$1);
var G__21359 = null;
var G__21360 = (0);
var G__21361 = (0);
seq__21337_21341 = G__21358;
chunk__21338_21342 = G__21359;
count__21339_21343 = G__21360;
i__21340_21344 = G__21361;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21362){
var content = cljs.core.first(arglist__21362);
arglist__21362 = cljs.core.next(arglist__21362);
var name = cljs.core.first(arglist__21362);
var value = cljs.core.rest(arglist__21362);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21367_21371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21368_21372 = null;var count__21369_21373 = (0);var i__21370_21374 = (0);while(true){
if((i__21370_21374 < count__21369_21373))
{var n_21375 = cljs.core._nth.call(null,chunk__21368_21372,i__21370_21374);n_21375.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21376 = seq__21367_21371;
var G__21377 = chunk__21368_21372;
var G__21378 = count__21369_21373;
var G__21379 = (i__21370_21374 + (1));
seq__21367_21371 = G__21376;
chunk__21368_21372 = G__21377;
count__21369_21373 = G__21378;
i__21370_21374 = G__21379;
continue;
}
} else
{var temp__4126__auto___21380 = cljs.core.seq.call(null,seq__21367_21371);if(temp__4126__auto___21380)
{var seq__21367_21381__$1 = temp__4126__auto___21380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21367_21381__$1))
{var c__4408__auto___21382 = cljs.core.chunk_first.call(null,seq__21367_21381__$1);{
var G__21383 = cljs.core.chunk_rest.call(null,seq__21367_21381__$1);
var G__21384 = c__4408__auto___21382;
var G__21385 = cljs.core.count.call(null,c__4408__auto___21382);
var G__21386 = (0);
seq__21367_21371 = G__21383;
chunk__21368_21372 = G__21384;
count__21369_21373 = G__21385;
i__21370_21374 = G__21386;
continue;
}
} else
{var n_21387 = cljs.core.first.call(null,seq__21367_21381__$1);n_21387.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21388 = cljs.core.next.call(null,seq__21367_21381__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__21367_21371 = G__21388;
chunk__21368_21372 = G__21389;
count__21369_21373 = G__21390;
i__21370_21374 = G__21391;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21392){
var content = cljs.core.first(arglist__21392);
arglist__21392 = cljs.core.next(arglist__21392);
var name = cljs.core.first(arglist__21392);
var value = cljs.core.rest(arglist__21392);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21397_21401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21398_21402 = null;var count__21399_21403 = (0);var i__21400_21404 = (0);while(true){
if((i__21400_21404 < count__21399_21403))
{var n_21405 = cljs.core._nth.call(null,chunk__21398_21402,i__21400_21404);n_21405.removeAttribute(cljs.core.name.call(null,name));
{
var G__21406 = seq__21397_21401;
var G__21407 = chunk__21398_21402;
var G__21408 = count__21399_21403;
var G__21409 = (i__21400_21404 + (1));
seq__21397_21401 = G__21406;
chunk__21398_21402 = G__21407;
count__21399_21403 = G__21408;
i__21400_21404 = G__21409;
continue;
}
} else
{var temp__4126__auto___21410 = cljs.core.seq.call(null,seq__21397_21401);if(temp__4126__auto___21410)
{var seq__21397_21411__$1 = temp__4126__auto___21410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21397_21411__$1))
{var c__4408__auto___21412 = cljs.core.chunk_first.call(null,seq__21397_21411__$1);{
var G__21413 = cljs.core.chunk_rest.call(null,seq__21397_21411__$1);
var G__21414 = c__4408__auto___21412;
var G__21415 = cljs.core.count.call(null,c__4408__auto___21412);
var G__21416 = (0);
seq__21397_21401 = G__21413;
chunk__21398_21402 = G__21414;
count__21399_21403 = G__21415;
i__21400_21404 = G__21416;
continue;
}
} else
{var n_21417 = cljs.core.first.call(null,seq__21397_21411__$1);n_21417.removeAttribute(cljs.core.name.call(null,name));
{
var G__21418 = cljs.core.next.call(null,seq__21397_21411__$1);
var G__21419 = null;
var G__21420 = (0);
var G__21421 = (0);
seq__21397_21401 = G__21418;
chunk__21398_21402 = G__21419;
count__21399_21403 = G__21420;
i__21400_21404 = G__21421;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21423 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21423,(0),null);var v = cljs.core.nth.call(null,vec__21423,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21424_SHARP_){var attr = attrs__$1.item(p1__21424_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21431_21437 = cljs.core.seq.call(null,styles);var chunk__21432_21438 = null;var count__21433_21439 = (0);var i__21434_21440 = (0);while(true){
if((i__21434_21440 < count__21433_21439))
{var vec__21435_21441 = cljs.core._nth.call(null,chunk__21432_21438,i__21434_21440);var name_21442 = cljs.core.nth.call(null,vec__21435_21441,(0),null);var value_21443 = cljs.core.nth.call(null,vec__21435_21441,(1),null);domina.set_style_BANG_.call(null,content,name_21442,value_21443);
{
var G__21444 = seq__21431_21437;
var G__21445 = chunk__21432_21438;
var G__21446 = count__21433_21439;
var G__21447 = (i__21434_21440 + (1));
seq__21431_21437 = G__21444;
chunk__21432_21438 = G__21445;
count__21433_21439 = G__21446;
i__21434_21440 = G__21447;
continue;
}
} else
{var temp__4126__auto___21448 = cljs.core.seq.call(null,seq__21431_21437);if(temp__4126__auto___21448)
{var seq__21431_21449__$1 = temp__4126__auto___21448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21431_21449__$1))
{var c__4408__auto___21450 = cljs.core.chunk_first.call(null,seq__21431_21449__$1);{
var G__21451 = cljs.core.chunk_rest.call(null,seq__21431_21449__$1);
var G__21452 = c__4408__auto___21450;
var G__21453 = cljs.core.count.call(null,c__4408__auto___21450);
var G__21454 = (0);
seq__21431_21437 = G__21451;
chunk__21432_21438 = G__21452;
count__21433_21439 = G__21453;
i__21434_21440 = G__21454;
continue;
}
} else
{var vec__21436_21455 = cljs.core.first.call(null,seq__21431_21449__$1);var name_21456 = cljs.core.nth.call(null,vec__21436_21455,(0),null);var value_21457 = cljs.core.nth.call(null,vec__21436_21455,(1),null);domina.set_style_BANG_.call(null,content,name_21456,value_21457);
{
var G__21458 = cljs.core.next.call(null,seq__21431_21449__$1);
var G__21459 = null;
var G__21460 = (0);
var G__21461 = (0);
seq__21431_21437 = G__21458;
chunk__21432_21438 = G__21459;
count__21433_21439 = G__21460;
i__21434_21440 = G__21461;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21468_21474 = cljs.core.seq.call(null,attrs);var chunk__21469_21475 = null;var count__21470_21476 = (0);var i__21471_21477 = (0);while(true){
if((i__21471_21477 < count__21470_21476))
{var vec__21472_21478 = cljs.core._nth.call(null,chunk__21469_21475,i__21471_21477);var name_21479 = cljs.core.nth.call(null,vec__21472_21478,(0),null);var value_21480 = cljs.core.nth.call(null,vec__21472_21478,(1),null);domina.set_attr_BANG_.call(null,content,name_21479,value_21480);
{
var G__21481 = seq__21468_21474;
var G__21482 = chunk__21469_21475;
var G__21483 = count__21470_21476;
var G__21484 = (i__21471_21477 + (1));
seq__21468_21474 = G__21481;
chunk__21469_21475 = G__21482;
count__21470_21476 = G__21483;
i__21471_21477 = G__21484;
continue;
}
} else
{var temp__4126__auto___21485 = cljs.core.seq.call(null,seq__21468_21474);if(temp__4126__auto___21485)
{var seq__21468_21486__$1 = temp__4126__auto___21485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21468_21486__$1))
{var c__4408__auto___21487 = cljs.core.chunk_first.call(null,seq__21468_21486__$1);{
var G__21488 = cljs.core.chunk_rest.call(null,seq__21468_21486__$1);
var G__21489 = c__4408__auto___21487;
var G__21490 = cljs.core.count.call(null,c__4408__auto___21487);
var G__21491 = (0);
seq__21468_21474 = G__21488;
chunk__21469_21475 = G__21489;
count__21470_21476 = G__21490;
i__21471_21477 = G__21491;
continue;
}
} else
{var vec__21473_21492 = cljs.core.first.call(null,seq__21468_21486__$1);var name_21493 = cljs.core.nth.call(null,vec__21473_21492,(0),null);var value_21494 = cljs.core.nth.call(null,vec__21473_21492,(1),null);domina.set_attr_BANG_.call(null,content,name_21493,value_21494);
{
var G__21495 = cljs.core.next.call(null,seq__21468_21486__$1);
var G__21496 = null;
var G__21497 = (0);
var G__21498 = (0);
seq__21468_21474 = G__21495;
chunk__21469_21475 = G__21496;
count__21470_21476 = G__21497;
i__21471_21477 = G__21498;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21503_21507 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21504_21508 = null;var count__21505_21509 = (0);var i__21506_21510 = (0);while(true){
if((i__21506_21510 < count__21505_21509))
{var node_21511 = cljs.core._nth.call(null,chunk__21504_21508,i__21506_21510);goog.dom.classes.add(node_21511,class$);
{
var G__21512 = seq__21503_21507;
var G__21513 = chunk__21504_21508;
var G__21514 = count__21505_21509;
var G__21515 = (i__21506_21510 + (1));
seq__21503_21507 = G__21512;
chunk__21504_21508 = G__21513;
count__21505_21509 = G__21514;
i__21506_21510 = G__21515;
continue;
}
} else
{var temp__4126__auto___21516 = cljs.core.seq.call(null,seq__21503_21507);if(temp__4126__auto___21516)
{var seq__21503_21517__$1 = temp__4126__auto___21516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21503_21517__$1))
{var c__4408__auto___21518 = cljs.core.chunk_first.call(null,seq__21503_21517__$1);{
var G__21519 = cljs.core.chunk_rest.call(null,seq__21503_21517__$1);
var G__21520 = c__4408__auto___21518;
var G__21521 = cljs.core.count.call(null,c__4408__auto___21518);
var G__21522 = (0);
seq__21503_21507 = G__21519;
chunk__21504_21508 = G__21520;
count__21505_21509 = G__21521;
i__21506_21510 = G__21522;
continue;
}
} else
{var node_21523 = cljs.core.first.call(null,seq__21503_21517__$1);goog.dom.classes.add(node_21523,class$);
{
var G__21524 = cljs.core.next.call(null,seq__21503_21517__$1);
var G__21525 = null;
var G__21526 = (0);
var G__21527 = (0);
seq__21503_21507 = G__21524;
chunk__21504_21508 = G__21525;
count__21505_21509 = G__21526;
i__21506_21510 = G__21527;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21532_21536 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21533_21537 = null;var count__21534_21538 = (0);var i__21535_21539 = (0);while(true){
if((i__21535_21539 < count__21534_21538))
{var node_21540 = cljs.core._nth.call(null,chunk__21533_21537,i__21535_21539);goog.dom.classes.remove(node_21540,class$);
{
var G__21541 = seq__21532_21536;
var G__21542 = chunk__21533_21537;
var G__21543 = count__21534_21538;
var G__21544 = (i__21535_21539 + (1));
seq__21532_21536 = G__21541;
chunk__21533_21537 = G__21542;
count__21534_21538 = G__21543;
i__21535_21539 = G__21544;
continue;
}
} else
{var temp__4126__auto___21545 = cljs.core.seq.call(null,seq__21532_21536);if(temp__4126__auto___21545)
{var seq__21532_21546__$1 = temp__4126__auto___21545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21532_21546__$1))
{var c__4408__auto___21547 = cljs.core.chunk_first.call(null,seq__21532_21546__$1);{
var G__21548 = cljs.core.chunk_rest.call(null,seq__21532_21546__$1);
var G__21549 = c__4408__auto___21547;
var G__21550 = cljs.core.count.call(null,c__4408__auto___21547);
var G__21551 = (0);
seq__21532_21536 = G__21548;
chunk__21533_21537 = G__21549;
count__21534_21538 = G__21550;
i__21535_21539 = G__21551;
continue;
}
} else
{var node_21552 = cljs.core.first.call(null,seq__21532_21546__$1);goog.dom.classes.remove(node_21552,class$);
{
var G__21553 = cljs.core.next.call(null,seq__21532_21546__$1);
var G__21554 = null;
var G__21555 = (0);
var G__21556 = (0);
seq__21532_21536 = G__21553;
chunk__21533_21537 = G__21554;
count__21534_21538 = G__21555;
i__21535_21539 = G__21556;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21561_21565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21562_21566 = null;var count__21563_21567 = (0);var i__21564_21568 = (0);while(true){
if((i__21564_21568 < count__21563_21567))
{var node_21569 = cljs.core._nth.call(null,chunk__21562_21566,i__21564_21568);goog.dom.classes.toggle(node_21569,class$);
{
var G__21570 = seq__21561_21565;
var G__21571 = chunk__21562_21566;
var G__21572 = count__21563_21567;
var G__21573 = (i__21564_21568 + (1));
seq__21561_21565 = G__21570;
chunk__21562_21566 = G__21571;
count__21563_21567 = G__21572;
i__21564_21568 = G__21573;
continue;
}
} else
{var temp__4126__auto___21574 = cljs.core.seq.call(null,seq__21561_21565);if(temp__4126__auto___21574)
{var seq__21561_21575__$1 = temp__4126__auto___21574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21561_21575__$1))
{var c__4408__auto___21576 = cljs.core.chunk_first.call(null,seq__21561_21575__$1);{
var G__21577 = cljs.core.chunk_rest.call(null,seq__21561_21575__$1);
var G__21578 = c__4408__auto___21576;
var G__21579 = cljs.core.count.call(null,c__4408__auto___21576);
var G__21580 = (0);
seq__21561_21565 = G__21577;
chunk__21562_21566 = G__21578;
count__21563_21567 = G__21579;
i__21564_21568 = G__21580;
continue;
}
} else
{var node_21581 = cljs.core.first.call(null,seq__21561_21575__$1);goog.dom.classes.toggle(node_21581,class$);
{
var G__21582 = cljs.core.next.call(null,seq__21561_21575__$1);
var G__21583 = null;
var G__21584 = (0);
var G__21585 = (0);
seq__21561_21565 = G__21582;
chunk__21562_21566 = G__21583;
count__21563_21567 = G__21584;
i__21564_21568 = G__21585;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21594__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21590_21595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21591_21596 = null;var count__21592_21597 = (0);var i__21593_21598 = (0);while(true){
if((i__21593_21598 < count__21592_21597))
{var node_21599 = cljs.core._nth.call(null,chunk__21591_21596,i__21593_21598);goog.dom.classes.set(node_21599,classes_21594__$1);
{
var G__21600 = seq__21590_21595;
var G__21601 = chunk__21591_21596;
var G__21602 = count__21592_21597;
var G__21603 = (i__21593_21598 + (1));
seq__21590_21595 = G__21600;
chunk__21591_21596 = G__21601;
count__21592_21597 = G__21602;
i__21593_21598 = G__21603;
continue;
}
} else
{var temp__4126__auto___21604 = cljs.core.seq.call(null,seq__21590_21595);if(temp__4126__auto___21604)
{var seq__21590_21605__$1 = temp__4126__auto___21604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21590_21605__$1))
{var c__4408__auto___21606 = cljs.core.chunk_first.call(null,seq__21590_21605__$1);{
var G__21607 = cljs.core.chunk_rest.call(null,seq__21590_21605__$1);
var G__21608 = c__4408__auto___21606;
var G__21609 = cljs.core.count.call(null,c__4408__auto___21606);
var G__21610 = (0);
seq__21590_21595 = G__21607;
chunk__21591_21596 = G__21608;
count__21592_21597 = G__21609;
i__21593_21598 = G__21610;
continue;
}
} else
{var node_21611 = cljs.core.first.call(null,seq__21590_21605__$1);goog.dom.classes.set(node_21611,classes_21594__$1);
{
var G__21612 = cljs.core.next.call(null,seq__21590_21605__$1);
var G__21613 = null;
var G__21614 = (0);
var G__21615 = (0);
seq__21590_21595 = G__21612;
chunk__21591_21596 = G__21613;
count__21592_21597 = G__21614;
i__21593_21598 = G__21615;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21620_21624 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21621_21625 = null;var count__21622_21626 = (0);var i__21623_21627 = (0);while(true){
if((i__21623_21627 < count__21622_21626))
{var node_21628 = cljs.core._nth.call(null,chunk__21621_21625,i__21623_21627);goog.dom.setTextContent(node_21628,value);
{
var G__21629 = seq__21620_21624;
var G__21630 = chunk__21621_21625;
var G__21631 = count__21622_21626;
var G__21632 = (i__21623_21627 + (1));
seq__21620_21624 = G__21629;
chunk__21621_21625 = G__21630;
count__21622_21626 = G__21631;
i__21623_21627 = G__21632;
continue;
}
} else
{var temp__4126__auto___21633 = cljs.core.seq.call(null,seq__21620_21624);if(temp__4126__auto___21633)
{var seq__21620_21634__$1 = temp__4126__auto___21633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21620_21634__$1))
{var c__4408__auto___21635 = cljs.core.chunk_first.call(null,seq__21620_21634__$1);{
var G__21636 = cljs.core.chunk_rest.call(null,seq__21620_21634__$1);
var G__21637 = c__4408__auto___21635;
var G__21638 = cljs.core.count.call(null,c__4408__auto___21635);
var G__21639 = (0);
seq__21620_21624 = G__21636;
chunk__21621_21625 = G__21637;
count__21622_21626 = G__21638;
i__21623_21627 = G__21639;
continue;
}
} else
{var node_21640 = cljs.core.first.call(null,seq__21620_21634__$1);goog.dom.setTextContent(node_21640,value);
{
var G__21641 = cljs.core.next.call(null,seq__21620_21634__$1);
var G__21642 = null;
var G__21643 = (0);
var G__21644 = (0);
seq__21620_21624 = G__21641;
chunk__21621_21625 = G__21642;
count__21622_21626 = G__21643;
i__21623_21627 = G__21644;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21649_21653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21650_21654 = null;var count__21651_21655 = (0);var i__21652_21656 = (0);while(true){
if((i__21652_21656 < count__21651_21655))
{var node_21657 = cljs.core._nth.call(null,chunk__21650_21654,i__21652_21656);goog.dom.forms.setValue(node_21657,value);
{
var G__21658 = seq__21649_21653;
var G__21659 = chunk__21650_21654;
var G__21660 = count__21651_21655;
var G__21661 = (i__21652_21656 + (1));
seq__21649_21653 = G__21658;
chunk__21650_21654 = G__21659;
count__21651_21655 = G__21660;
i__21652_21656 = G__21661;
continue;
}
} else
{var temp__4126__auto___21662 = cljs.core.seq.call(null,seq__21649_21653);if(temp__4126__auto___21662)
{var seq__21649_21663__$1 = temp__4126__auto___21662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21649_21663__$1))
{var c__4408__auto___21664 = cljs.core.chunk_first.call(null,seq__21649_21663__$1);{
var G__21665 = cljs.core.chunk_rest.call(null,seq__21649_21663__$1);
var G__21666 = c__4408__auto___21664;
var G__21667 = cljs.core.count.call(null,c__4408__auto___21664);
var G__21668 = (0);
seq__21649_21653 = G__21665;
chunk__21650_21654 = G__21666;
count__21651_21655 = G__21667;
i__21652_21656 = G__21668;
continue;
}
} else
{var node_21669 = cljs.core.first.call(null,seq__21649_21663__$1);goog.dom.forms.setValue(node_21669,value);
{
var G__21670 = cljs.core.next.call(null,seq__21649_21663__$1);
var G__21671 = null;
var G__21672 = (0);
var G__21673 = (0);
seq__21649_21653 = G__21670;
chunk__21650_21654 = G__21671;
count__21651_21655 = G__21672;
i__21652_21656 = G__21673;
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
{var value_21684 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21680_21685 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21681_21686 = null;var count__21682_21687 = (0);var i__21683_21688 = (0);while(true){
if((i__21683_21688 < count__21682_21687))
{var node_21689 = cljs.core._nth.call(null,chunk__21681_21686,i__21683_21688);node_21689.innerHTML = value_21684;
{
var G__21690 = seq__21680_21685;
var G__21691 = chunk__21681_21686;
var G__21692 = count__21682_21687;
var G__21693 = (i__21683_21688 + (1));
seq__21680_21685 = G__21690;
chunk__21681_21686 = G__21691;
count__21682_21687 = G__21692;
i__21683_21688 = G__21693;
continue;
}
} else
{var temp__4126__auto___21694 = cljs.core.seq.call(null,seq__21680_21685);if(temp__4126__auto___21694)
{var seq__21680_21695__$1 = temp__4126__auto___21694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21680_21695__$1))
{var c__4408__auto___21696 = cljs.core.chunk_first.call(null,seq__21680_21695__$1);{
var G__21697 = cljs.core.chunk_rest.call(null,seq__21680_21695__$1);
var G__21698 = c__4408__auto___21696;
var G__21699 = cljs.core.count.call(null,c__4408__auto___21696);
var G__21700 = (0);
seq__21680_21685 = G__21697;
chunk__21681_21686 = G__21698;
count__21682_21687 = G__21699;
i__21683_21688 = G__21700;
continue;
}
} else
{var node_21701 = cljs.core.first.call(null,seq__21680_21695__$1);node_21701.innerHTML = value_21684;
{
var G__21702 = cljs.core.next.call(null,seq__21680_21695__$1);
var G__21703 = null;
var G__21704 = (0);
var G__21705 = (0);
seq__21680_21685 = G__21702;
chunk__21681_21686 = G__21703;
count__21682_21687 = G__21704;
i__21683_21688 = G__21705;
continue;
}
}
} else
{}
}
break;
}
}catch (e21679){if((e21679 instanceof Error))
{var e_21706 = e21679;domina.replace_children_BANG_.call(null,content,value_21684);
} else
{throw e21679;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21713_21717 = cljs.core.seq.call(null,children);var chunk__21714_21718 = null;var count__21715_21719 = (0);var i__21716_21720 = (0);while(true){
if((i__21716_21720 < count__21715_21719))
{var child_21721 = cljs.core._nth.call(null,chunk__21714_21718,i__21716_21720);frag.appendChild(child_21721);
{
var G__21722 = seq__21713_21717;
var G__21723 = chunk__21714_21718;
var G__21724 = count__21715_21719;
var G__21725 = (i__21716_21720 + (1));
seq__21713_21717 = G__21722;
chunk__21714_21718 = G__21723;
count__21715_21719 = G__21724;
i__21716_21720 = G__21725;
continue;
}
} else
{var temp__4126__auto___21726 = cljs.core.seq.call(null,seq__21713_21717);if(temp__4126__auto___21726)
{var seq__21713_21727__$1 = temp__4126__auto___21726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21713_21727__$1))
{var c__4408__auto___21728 = cljs.core.chunk_first.call(null,seq__21713_21727__$1);{
var G__21729 = cljs.core.chunk_rest.call(null,seq__21713_21727__$1);
var G__21730 = c__4408__auto___21728;
var G__21731 = cljs.core.count.call(null,c__4408__auto___21728);
var G__21732 = (0);
seq__21713_21717 = G__21729;
chunk__21714_21718 = G__21730;
count__21715_21719 = G__21731;
i__21716_21720 = G__21732;
continue;
}
} else
{var child_21733 = cljs.core.first.call(null,seq__21713_21727__$1);frag.appendChild(child_21733);
{
var G__21734 = cljs.core.next.call(null,seq__21713_21727__$1);
var G__21735 = null;
var G__21736 = (0);
var G__21737 = (0);
seq__21713_21717 = G__21734;
chunk__21714_21718 = G__21735;
count__21715_21719 = G__21736;
i__21716_21720 = G__21737;
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
return (function (p1__21707_SHARP_,p2__21708_SHARP_){return f.call(null,p1__21707_SHARP_,p2__21708_SHARP_);
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
{if((function (){var G__21739 = list_thing;if(G__21739)
{var bit__4302__auto__ = (G__21739.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21739.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21739.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21739);
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
{if((function (){var G__21740 = content;if(G__21740)
{var bit__4302__auto__ = (G__21740.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21740.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21740.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21740);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21740);
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
{if((function (){var G__21741 = content;if(G__21741)
{var bit__4302__auto__ = (G__21741.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21741.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21741.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21741);
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
