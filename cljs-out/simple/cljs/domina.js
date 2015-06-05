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
var opt_wrapper_20165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20167,opt_wrapper_20165,table_section_wrapper_20166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20166,cell_wrapper_20167,table_section_wrapper_20166,table_section_wrapper_20166]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20172 = cljs.core.seq.call(null,tbody);var chunk__20173 = null;var count__20174 = (0);var i__20175 = (0);while(true){
if((i__20175 < count__20174))
{var child = cljs.core._nth.call(null,chunk__20173,i__20175);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20176 = seq__20172;
var G__20177 = chunk__20173;
var G__20178 = count__20174;
var G__20179 = (i__20175 + (1));
seq__20172 = G__20176;
chunk__20173 = G__20177;
count__20174 = G__20178;
i__20175 = G__20179;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20172);if(temp__4126__auto__)
{var seq__20172__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20172__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20172__$1);{
var G__20180 = cljs.core.chunk_rest.call(null,seq__20172__$1);
var G__20181 = c__4408__auto__;
var G__20182 = cljs.core.count.call(null,c__4408__auto__);
var G__20183 = (0);
seq__20172 = G__20180;
chunk__20173 = G__20181;
count__20174 = G__20182;
i__20175 = G__20183;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20172__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20184 = cljs.core.next.call(null,seq__20172__$1);
var G__20185 = null;
var G__20186 = (0);
var G__20187 = (0);
seq__20172 = G__20184;
chunk__20173 = G__20185;
count__20174 = G__20186;
i__20175 = G__20187;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20189 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20189,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20189,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20189,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20190 = wrapper.lastChild;
var G__20191 = (level - (1));
wrapper = G__20190;
level = G__20191;
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
domina.DomContent = (function (){var obj20193 = {};return obj20193;
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
log_debug.cljs$lang$applyTo = (function (arglist__20194){
var mesg = cljs.core.seq(arglist__20194);
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
log.cljs$lang$applyTo = (function (arglist__20195){
var mesg = cljs.core.seq(arglist__20195);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20196){
var contents = cljs.core.seq(arglist__20196);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20197_SHARP_){return p1__20197_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20198_SHARP_,p2__20199_SHARP_){return goog.dom.insertChildAt(p1__20198_SHARP_,p2__20199_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20201_SHARP_,p2__20200_SHARP_){return goog.dom.insertSiblingBefore(p2__20200_SHARP_,p1__20201_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20203_SHARP_,p2__20202_SHARP_){return goog.dom.insertSiblingAfter(p2__20202_SHARP_,p1__20203_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20205_SHARP_,p2__20204_SHARP_){return goog.dom.replaceNode(p2__20204_SHARP_,p1__20205_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20210_20214 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20211_20215 = null;var count__20212_20216 = (0);var i__20213_20217 = (0);while(true){
if((i__20213_20217 < count__20212_20216))
{var n_20218 = cljs.core._nth.call(null,chunk__20211_20215,i__20213_20217);goog.style.setStyle(n_20218,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20219 = seq__20210_20214;
var G__20220 = chunk__20211_20215;
var G__20221 = count__20212_20216;
var G__20222 = (i__20213_20217 + (1));
seq__20210_20214 = G__20219;
chunk__20211_20215 = G__20220;
count__20212_20216 = G__20221;
i__20213_20217 = G__20222;
continue;
}
} else
{var temp__4126__auto___20223 = cljs.core.seq.call(null,seq__20210_20214);if(temp__4126__auto___20223)
{var seq__20210_20224__$1 = temp__4126__auto___20223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20210_20224__$1))
{var c__4408__auto___20225 = cljs.core.chunk_first.call(null,seq__20210_20224__$1);{
var G__20226 = cljs.core.chunk_rest.call(null,seq__20210_20224__$1);
var G__20227 = c__4408__auto___20225;
var G__20228 = cljs.core.count.call(null,c__4408__auto___20225);
var G__20229 = (0);
seq__20210_20214 = G__20226;
chunk__20211_20215 = G__20227;
count__20212_20216 = G__20228;
i__20213_20217 = G__20229;
continue;
}
} else
{var n_20230 = cljs.core.first.call(null,seq__20210_20224__$1);goog.style.setStyle(n_20230,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20231 = cljs.core.next.call(null,seq__20210_20224__$1);
var G__20232 = null;
var G__20233 = (0);
var G__20234 = (0);
seq__20210_20214 = G__20231;
chunk__20211_20215 = G__20232;
count__20212_20216 = G__20233;
i__20213_20217 = G__20234;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20235){
var content = cljs.core.first(arglist__20235);
arglist__20235 = cljs.core.next(arglist__20235);
var name = cljs.core.first(arglist__20235);
var value = cljs.core.rest(arglist__20235);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20240_20244 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20241_20245 = null;var count__20242_20246 = (0);var i__20243_20247 = (0);while(true){
if((i__20243_20247 < count__20242_20246))
{var n_20248 = cljs.core._nth.call(null,chunk__20241_20245,i__20243_20247);n_20248.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20249 = seq__20240_20244;
var G__20250 = chunk__20241_20245;
var G__20251 = count__20242_20246;
var G__20252 = (i__20243_20247 + (1));
seq__20240_20244 = G__20249;
chunk__20241_20245 = G__20250;
count__20242_20246 = G__20251;
i__20243_20247 = G__20252;
continue;
}
} else
{var temp__4126__auto___20253 = cljs.core.seq.call(null,seq__20240_20244);if(temp__4126__auto___20253)
{var seq__20240_20254__$1 = temp__4126__auto___20253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20240_20254__$1))
{var c__4408__auto___20255 = cljs.core.chunk_first.call(null,seq__20240_20254__$1);{
var G__20256 = cljs.core.chunk_rest.call(null,seq__20240_20254__$1);
var G__20257 = c__4408__auto___20255;
var G__20258 = cljs.core.count.call(null,c__4408__auto___20255);
var G__20259 = (0);
seq__20240_20244 = G__20256;
chunk__20241_20245 = G__20257;
count__20242_20246 = G__20258;
i__20243_20247 = G__20259;
continue;
}
} else
{var n_20260 = cljs.core.first.call(null,seq__20240_20254__$1);n_20260.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20261 = cljs.core.next.call(null,seq__20240_20254__$1);
var G__20262 = null;
var G__20263 = (0);
var G__20264 = (0);
seq__20240_20244 = G__20261;
chunk__20241_20245 = G__20262;
count__20242_20246 = G__20263;
i__20243_20247 = G__20264;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20265){
var content = cljs.core.first(arglist__20265);
arglist__20265 = cljs.core.next(arglist__20265);
var name = cljs.core.first(arglist__20265);
var value = cljs.core.rest(arglist__20265);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20270_20274 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20271_20275 = null;var count__20272_20276 = (0);var i__20273_20277 = (0);while(true){
if((i__20273_20277 < count__20272_20276))
{var n_20278 = cljs.core._nth.call(null,chunk__20271_20275,i__20273_20277);n_20278.removeAttribute(cljs.core.name.call(null,name));
{
var G__20279 = seq__20270_20274;
var G__20280 = chunk__20271_20275;
var G__20281 = count__20272_20276;
var G__20282 = (i__20273_20277 + (1));
seq__20270_20274 = G__20279;
chunk__20271_20275 = G__20280;
count__20272_20276 = G__20281;
i__20273_20277 = G__20282;
continue;
}
} else
{var temp__4126__auto___20283 = cljs.core.seq.call(null,seq__20270_20274);if(temp__4126__auto___20283)
{var seq__20270_20284__$1 = temp__4126__auto___20283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20270_20284__$1))
{var c__4408__auto___20285 = cljs.core.chunk_first.call(null,seq__20270_20284__$1);{
var G__20286 = cljs.core.chunk_rest.call(null,seq__20270_20284__$1);
var G__20287 = c__4408__auto___20285;
var G__20288 = cljs.core.count.call(null,c__4408__auto___20285);
var G__20289 = (0);
seq__20270_20274 = G__20286;
chunk__20271_20275 = G__20287;
count__20272_20276 = G__20288;
i__20273_20277 = G__20289;
continue;
}
} else
{var n_20290 = cljs.core.first.call(null,seq__20270_20284__$1);n_20290.removeAttribute(cljs.core.name.call(null,name));
{
var G__20291 = cljs.core.next.call(null,seq__20270_20284__$1);
var G__20292 = null;
var G__20293 = (0);
var G__20294 = (0);
seq__20270_20274 = G__20291;
chunk__20271_20275 = G__20292;
count__20272_20276 = G__20293;
i__20273_20277 = G__20294;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20296 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20296,(0),null);var v = cljs.core.nth.call(null,vec__20296,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20297_SHARP_){var attr = attrs__$1.item(p1__20297_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20304_20310 = cljs.core.seq.call(null,styles);var chunk__20305_20311 = null;var count__20306_20312 = (0);var i__20307_20313 = (0);while(true){
if((i__20307_20313 < count__20306_20312))
{var vec__20308_20314 = cljs.core._nth.call(null,chunk__20305_20311,i__20307_20313);var name_20315 = cljs.core.nth.call(null,vec__20308_20314,(0),null);var value_20316 = cljs.core.nth.call(null,vec__20308_20314,(1),null);domina.set_style_BANG_.call(null,content,name_20315,value_20316);
{
var G__20317 = seq__20304_20310;
var G__20318 = chunk__20305_20311;
var G__20319 = count__20306_20312;
var G__20320 = (i__20307_20313 + (1));
seq__20304_20310 = G__20317;
chunk__20305_20311 = G__20318;
count__20306_20312 = G__20319;
i__20307_20313 = G__20320;
continue;
}
} else
{var temp__4126__auto___20321 = cljs.core.seq.call(null,seq__20304_20310);if(temp__4126__auto___20321)
{var seq__20304_20322__$1 = temp__4126__auto___20321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20304_20322__$1))
{var c__4408__auto___20323 = cljs.core.chunk_first.call(null,seq__20304_20322__$1);{
var G__20324 = cljs.core.chunk_rest.call(null,seq__20304_20322__$1);
var G__20325 = c__4408__auto___20323;
var G__20326 = cljs.core.count.call(null,c__4408__auto___20323);
var G__20327 = (0);
seq__20304_20310 = G__20324;
chunk__20305_20311 = G__20325;
count__20306_20312 = G__20326;
i__20307_20313 = G__20327;
continue;
}
} else
{var vec__20309_20328 = cljs.core.first.call(null,seq__20304_20322__$1);var name_20329 = cljs.core.nth.call(null,vec__20309_20328,(0),null);var value_20330 = cljs.core.nth.call(null,vec__20309_20328,(1),null);domina.set_style_BANG_.call(null,content,name_20329,value_20330);
{
var G__20331 = cljs.core.next.call(null,seq__20304_20322__$1);
var G__20332 = null;
var G__20333 = (0);
var G__20334 = (0);
seq__20304_20310 = G__20331;
chunk__20305_20311 = G__20332;
count__20306_20312 = G__20333;
i__20307_20313 = G__20334;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20341_20347 = cljs.core.seq.call(null,attrs);var chunk__20342_20348 = null;var count__20343_20349 = (0);var i__20344_20350 = (0);while(true){
if((i__20344_20350 < count__20343_20349))
{var vec__20345_20351 = cljs.core._nth.call(null,chunk__20342_20348,i__20344_20350);var name_20352 = cljs.core.nth.call(null,vec__20345_20351,(0),null);var value_20353 = cljs.core.nth.call(null,vec__20345_20351,(1),null);domina.set_attr_BANG_.call(null,content,name_20352,value_20353);
{
var G__20354 = seq__20341_20347;
var G__20355 = chunk__20342_20348;
var G__20356 = count__20343_20349;
var G__20357 = (i__20344_20350 + (1));
seq__20341_20347 = G__20354;
chunk__20342_20348 = G__20355;
count__20343_20349 = G__20356;
i__20344_20350 = G__20357;
continue;
}
} else
{var temp__4126__auto___20358 = cljs.core.seq.call(null,seq__20341_20347);if(temp__4126__auto___20358)
{var seq__20341_20359__$1 = temp__4126__auto___20358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20341_20359__$1))
{var c__4408__auto___20360 = cljs.core.chunk_first.call(null,seq__20341_20359__$1);{
var G__20361 = cljs.core.chunk_rest.call(null,seq__20341_20359__$1);
var G__20362 = c__4408__auto___20360;
var G__20363 = cljs.core.count.call(null,c__4408__auto___20360);
var G__20364 = (0);
seq__20341_20347 = G__20361;
chunk__20342_20348 = G__20362;
count__20343_20349 = G__20363;
i__20344_20350 = G__20364;
continue;
}
} else
{var vec__20346_20365 = cljs.core.first.call(null,seq__20341_20359__$1);var name_20366 = cljs.core.nth.call(null,vec__20346_20365,(0),null);var value_20367 = cljs.core.nth.call(null,vec__20346_20365,(1),null);domina.set_attr_BANG_.call(null,content,name_20366,value_20367);
{
var G__20368 = cljs.core.next.call(null,seq__20341_20359__$1);
var G__20369 = null;
var G__20370 = (0);
var G__20371 = (0);
seq__20341_20347 = G__20368;
chunk__20342_20348 = G__20369;
count__20343_20349 = G__20370;
i__20344_20350 = G__20371;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20376_20380 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20377_20381 = null;var count__20378_20382 = (0);var i__20379_20383 = (0);while(true){
if((i__20379_20383 < count__20378_20382))
{var node_20384 = cljs.core._nth.call(null,chunk__20377_20381,i__20379_20383);goog.dom.classes.add(node_20384,class$);
{
var G__20385 = seq__20376_20380;
var G__20386 = chunk__20377_20381;
var G__20387 = count__20378_20382;
var G__20388 = (i__20379_20383 + (1));
seq__20376_20380 = G__20385;
chunk__20377_20381 = G__20386;
count__20378_20382 = G__20387;
i__20379_20383 = G__20388;
continue;
}
} else
{var temp__4126__auto___20389 = cljs.core.seq.call(null,seq__20376_20380);if(temp__4126__auto___20389)
{var seq__20376_20390__$1 = temp__4126__auto___20389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20376_20390__$1))
{var c__4408__auto___20391 = cljs.core.chunk_first.call(null,seq__20376_20390__$1);{
var G__20392 = cljs.core.chunk_rest.call(null,seq__20376_20390__$1);
var G__20393 = c__4408__auto___20391;
var G__20394 = cljs.core.count.call(null,c__4408__auto___20391);
var G__20395 = (0);
seq__20376_20380 = G__20392;
chunk__20377_20381 = G__20393;
count__20378_20382 = G__20394;
i__20379_20383 = G__20395;
continue;
}
} else
{var node_20396 = cljs.core.first.call(null,seq__20376_20390__$1);goog.dom.classes.add(node_20396,class$);
{
var G__20397 = cljs.core.next.call(null,seq__20376_20390__$1);
var G__20398 = null;
var G__20399 = (0);
var G__20400 = (0);
seq__20376_20380 = G__20397;
chunk__20377_20381 = G__20398;
count__20378_20382 = G__20399;
i__20379_20383 = G__20400;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20405_20409 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20406_20410 = null;var count__20407_20411 = (0);var i__20408_20412 = (0);while(true){
if((i__20408_20412 < count__20407_20411))
{var node_20413 = cljs.core._nth.call(null,chunk__20406_20410,i__20408_20412);goog.dom.classes.remove(node_20413,class$);
{
var G__20414 = seq__20405_20409;
var G__20415 = chunk__20406_20410;
var G__20416 = count__20407_20411;
var G__20417 = (i__20408_20412 + (1));
seq__20405_20409 = G__20414;
chunk__20406_20410 = G__20415;
count__20407_20411 = G__20416;
i__20408_20412 = G__20417;
continue;
}
} else
{var temp__4126__auto___20418 = cljs.core.seq.call(null,seq__20405_20409);if(temp__4126__auto___20418)
{var seq__20405_20419__$1 = temp__4126__auto___20418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20405_20419__$1))
{var c__4408__auto___20420 = cljs.core.chunk_first.call(null,seq__20405_20419__$1);{
var G__20421 = cljs.core.chunk_rest.call(null,seq__20405_20419__$1);
var G__20422 = c__4408__auto___20420;
var G__20423 = cljs.core.count.call(null,c__4408__auto___20420);
var G__20424 = (0);
seq__20405_20409 = G__20421;
chunk__20406_20410 = G__20422;
count__20407_20411 = G__20423;
i__20408_20412 = G__20424;
continue;
}
} else
{var node_20425 = cljs.core.first.call(null,seq__20405_20419__$1);goog.dom.classes.remove(node_20425,class$);
{
var G__20426 = cljs.core.next.call(null,seq__20405_20419__$1);
var G__20427 = null;
var G__20428 = (0);
var G__20429 = (0);
seq__20405_20409 = G__20426;
chunk__20406_20410 = G__20427;
count__20407_20411 = G__20428;
i__20408_20412 = G__20429;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20434_20438 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20435_20439 = null;var count__20436_20440 = (0);var i__20437_20441 = (0);while(true){
if((i__20437_20441 < count__20436_20440))
{var node_20442 = cljs.core._nth.call(null,chunk__20435_20439,i__20437_20441);goog.dom.classes.toggle(node_20442,class$);
{
var G__20443 = seq__20434_20438;
var G__20444 = chunk__20435_20439;
var G__20445 = count__20436_20440;
var G__20446 = (i__20437_20441 + (1));
seq__20434_20438 = G__20443;
chunk__20435_20439 = G__20444;
count__20436_20440 = G__20445;
i__20437_20441 = G__20446;
continue;
}
} else
{var temp__4126__auto___20447 = cljs.core.seq.call(null,seq__20434_20438);if(temp__4126__auto___20447)
{var seq__20434_20448__$1 = temp__4126__auto___20447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20434_20448__$1))
{var c__4408__auto___20449 = cljs.core.chunk_first.call(null,seq__20434_20448__$1);{
var G__20450 = cljs.core.chunk_rest.call(null,seq__20434_20448__$1);
var G__20451 = c__4408__auto___20449;
var G__20452 = cljs.core.count.call(null,c__4408__auto___20449);
var G__20453 = (0);
seq__20434_20438 = G__20450;
chunk__20435_20439 = G__20451;
count__20436_20440 = G__20452;
i__20437_20441 = G__20453;
continue;
}
} else
{var node_20454 = cljs.core.first.call(null,seq__20434_20448__$1);goog.dom.classes.toggle(node_20454,class$);
{
var G__20455 = cljs.core.next.call(null,seq__20434_20448__$1);
var G__20456 = null;
var G__20457 = (0);
var G__20458 = (0);
seq__20434_20438 = G__20455;
chunk__20435_20439 = G__20456;
count__20436_20440 = G__20457;
i__20437_20441 = G__20458;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20467__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20463_20468 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20464_20469 = null;var count__20465_20470 = (0);var i__20466_20471 = (0);while(true){
if((i__20466_20471 < count__20465_20470))
{var node_20472 = cljs.core._nth.call(null,chunk__20464_20469,i__20466_20471);goog.dom.classes.set(node_20472,classes_20467__$1);
{
var G__20473 = seq__20463_20468;
var G__20474 = chunk__20464_20469;
var G__20475 = count__20465_20470;
var G__20476 = (i__20466_20471 + (1));
seq__20463_20468 = G__20473;
chunk__20464_20469 = G__20474;
count__20465_20470 = G__20475;
i__20466_20471 = G__20476;
continue;
}
} else
{var temp__4126__auto___20477 = cljs.core.seq.call(null,seq__20463_20468);if(temp__4126__auto___20477)
{var seq__20463_20478__$1 = temp__4126__auto___20477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20463_20478__$1))
{var c__4408__auto___20479 = cljs.core.chunk_first.call(null,seq__20463_20478__$1);{
var G__20480 = cljs.core.chunk_rest.call(null,seq__20463_20478__$1);
var G__20481 = c__4408__auto___20479;
var G__20482 = cljs.core.count.call(null,c__4408__auto___20479);
var G__20483 = (0);
seq__20463_20468 = G__20480;
chunk__20464_20469 = G__20481;
count__20465_20470 = G__20482;
i__20466_20471 = G__20483;
continue;
}
} else
{var node_20484 = cljs.core.first.call(null,seq__20463_20478__$1);goog.dom.classes.set(node_20484,classes_20467__$1);
{
var G__20485 = cljs.core.next.call(null,seq__20463_20478__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__20463_20468 = G__20485;
chunk__20464_20469 = G__20486;
count__20465_20470 = G__20487;
i__20466_20471 = G__20488;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20493_20497 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20494_20498 = null;var count__20495_20499 = (0);var i__20496_20500 = (0);while(true){
if((i__20496_20500 < count__20495_20499))
{var node_20501 = cljs.core._nth.call(null,chunk__20494_20498,i__20496_20500);goog.dom.setTextContent(node_20501,value);
{
var G__20502 = seq__20493_20497;
var G__20503 = chunk__20494_20498;
var G__20504 = count__20495_20499;
var G__20505 = (i__20496_20500 + (1));
seq__20493_20497 = G__20502;
chunk__20494_20498 = G__20503;
count__20495_20499 = G__20504;
i__20496_20500 = G__20505;
continue;
}
} else
{var temp__4126__auto___20506 = cljs.core.seq.call(null,seq__20493_20497);if(temp__4126__auto___20506)
{var seq__20493_20507__$1 = temp__4126__auto___20506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20493_20507__$1))
{var c__4408__auto___20508 = cljs.core.chunk_first.call(null,seq__20493_20507__$1);{
var G__20509 = cljs.core.chunk_rest.call(null,seq__20493_20507__$1);
var G__20510 = c__4408__auto___20508;
var G__20511 = cljs.core.count.call(null,c__4408__auto___20508);
var G__20512 = (0);
seq__20493_20497 = G__20509;
chunk__20494_20498 = G__20510;
count__20495_20499 = G__20511;
i__20496_20500 = G__20512;
continue;
}
} else
{var node_20513 = cljs.core.first.call(null,seq__20493_20507__$1);goog.dom.setTextContent(node_20513,value);
{
var G__20514 = cljs.core.next.call(null,seq__20493_20507__$1);
var G__20515 = null;
var G__20516 = (0);
var G__20517 = (0);
seq__20493_20497 = G__20514;
chunk__20494_20498 = G__20515;
count__20495_20499 = G__20516;
i__20496_20500 = G__20517;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20522_20526 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20523_20527 = null;var count__20524_20528 = (0);var i__20525_20529 = (0);while(true){
if((i__20525_20529 < count__20524_20528))
{var node_20530 = cljs.core._nth.call(null,chunk__20523_20527,i__20525_20529);goog.dom.forms.setValue(node_20530,value);
{
var G__20531 = seq__20522_20526;
var G__20532 = chunk__20523_20527;
var G__20533 = count__20524_20528;
var G__20534 = (i__20525_20529 + (1));
seq__20522_20526 = G__20531;
chunk__20523_20527 = G__20532;
count__20524_20528 = G__20533;
i__20525_20529 = G__20534;
continue;
}
} else
{var temp__4126__auto___20535 = cljs.core.seq.call(null,seq__20522_20526);if(temp__4126__auto___20535)
{var seq__20522_20536__$1 = temp__4126__auto___20535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20522_20536__$1))
{var c__4408__auto___20537 = cljs.core.chunk_first.call(null,seq__20522_20536__$1);{
var G__20538 = cljs.core.chunk_rest.call(null,seq__20522_20536__$1);
var G__20539 = c__4408__auto___20537;
var G__20540 = cljs.core.count.call(null,c__4408__auto___20537);
var G__20541 = (0);
seq__20522_20526 = G__20538;
chunk__20523_20527 = G__20539;
count__20524_20528 = G__20540;
i__20525_20529 = G__20541;
continue;
}
} else
{var node_20542 = cljs.core.first.call(null,seq__20522_20536__$1);goog.dom.forms.setValue(node_20542,value);
{
var G__20543 = cljs.core.next.call(null,seq__20522_20536__$1);
var G__20544 = null;
var G__20545 = (0);
var G__20546 = (0);
seq__20522_20526 = G__20543;
chunk__20523_20527 = G__20544;
count__20524_20528 = G__20545;
i__20525_20529 = G__20546;
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
{var value_20557 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20553_20558 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20554_20559 = null;var count__20555_20560 = (0);var i__20556_20561 = (0);while(true){
if((i__20556_20561 < count__20555_20560))
{var node_20562 = cljs.core._nth.call(null,chunk__20554_20559,i__20556_20561);node_20562.innerHTML = value_20557;
{
var G__20563 = seq__20553_20558;
var G__20564 = chunk__20554_20559;
var G__20565 = count__20555_20560;
var G__20566 = (i__20556_20561 + (1));
seq__20553_20558 = G__20563;
chunk__20554_20559 = G__20564;
count__20555_20560 = G__20565;
i__20556_20561 = G__20566;
continue;
}
} else
{var temp__4126__auto___20567 = cljs.core.seq.call(null,seq__20553_20558);if(temp__4126__auto___20567)
{var seq__20553_20568__$1 = temp__4126__auto___20567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20553_20568__$1))
{var c__4408__auto___20569 = cljs.core.chunk_first.call(null,seq__20553_20568__$1);{
var G__20570 = cljs.core.chunk_rest.call(null,seq__20553_20568__$1);
var G__20571 = c__4408__auto___20569;
var G__20572 = cljs.core.count.call(null,c__4408__auto___20569);
var G__20573 = (0);
seq__20553_20558 = G__20570;
chunk__20554_20559 = G__20571;
count__20555_20560 = G__20572;
i__20556_20561 = G__20573;
continue;
}
} else
{var node_20574 = cljs.core.first.call(null,seq__20553_20568__$1);node_20574.innerHTML = value_20557;
{
var G__20575 = cljs.core.next.call(null,seq__20553_20568__$1);
var G__20576 = null;
var G__20577 = (0);
var G__20578 = (0);
seq__20553_20558 = G__20575;
chunk__20554_20559 = G__20576;
count__20555_20560 = G__20577;
i__20556_20561 = G__20578;
continue;
}
}
} else
{}
}
break;
}
}catch (e20552){if((e20552 instanceof Error))
{var e_20579 = e20552;domina.replace_children_BANG_.call(null,content,value_20557);
} else
{throw e20552;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20586_20590 = cljs.core.seq.call(null,children);var chunk__20587_20591 = null;var count__20588_20592 = (0);var i__20589_20593 = (0);while(true){
if((i__20589_20593 < count__20588_20592))
{var child_20594 = cljs.core._nth.call(null,chunk__20587_20591,i__20589_20593);frag.appendChild(child_20594);
{
var G__20595 = seq__20586_20590;
var G__20596 = chunk__20587_20591;
var G__20597 = count__20588_20592;
var G__20598 = (i__20589_20593 + (1));
seq__20586_20590 = G__20595;
chunk__20587_20591 = G__20596;
count__20588_20592 = G__20597;
i__20589_20593 = G__20598;
continue;
}
} else
{var temp__4126__auto___20599 = cljs.core.seq.call(null,seq__20586_20590);if(temp__4126__auto___20599)
{var seq__20586_20600__$1 = temp__4126__auto___20599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20586_20600__$1))
{var c__4408__auto___20601 = cljs.core.chunk_first.call(null,seq__20586_20600__$1);{
var G__20602 = cljs.core.chunk_rest.call(null,seq__20586_20600__$1);
var G__20603 = c__4408__auto___20601;
var G__20604 = cljs.core.count.call(null,c__4408__auto___20601);
var G__20605 = (0);
seq__20586_20590 = G__20602;
chunk__20587_20591 = G__20603;
count__20588_20592 = G__20604;
i__20589_20593 = G__20605;
continue;
}
} else
{var child_20606 = cljs.core.first.call(null,seq__20586_20600__$1);frag.appendChild(child_20606);
{
var G__20607 = cljs.core.next.call(null,seq__20586_20600__$1);
var G__20608 = null;
var G__20609 = (0);
var G__20610 = (0);
seq__20586_20590 = G__20607;
chunk__20587_20591 = G__20608;
count__20588_20592 = G__20609;
i__20589_20593 = G__20610;
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
return (function (p1__20580_SHARP_,p2__20581_SHARP_){return f.call(null,p1__20580_SHARP_,p2__20581_SHARP_);
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
{if((function (){var G__20612 = list_thing;if(G__20612)
{var bit__4302__auto__ = (G__20612.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20612.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20612);
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
{if((function (){var G__20613 = content;if(G__20613)
{var bit__4302__auto__ = (G__20613.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20613.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20613);
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
{if((function (){var G__20614 = content;if(G__20614)
{var bit__4302__auto__ = (G__20614.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20614.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20614);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20614);
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
