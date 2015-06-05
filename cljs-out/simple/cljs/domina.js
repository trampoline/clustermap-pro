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
var opt_wrapper_20169 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20170 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20171 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20171,opt_wrapper_20169,table_section_wrapper_20170,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20169,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20170,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20170,cell_wrapper_20171,table_section_wrapper_20170,table_section_wrapper_20170]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20176 = cljs.core.seq.call(null,tbody);var chunk__20177 = null;var count__20178 = (0);var i__20179 = (0);while(true){
if((i__20179 < count__20178))
{var child = cljs.core._nth.call(null,chunk__20177,i__20179);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20180 = seq__20176;
var G__20181 = chunk__20177;
var G__20182 = count__20178;
var G__20183 = (i__20179 + (1));
seq__20176 = G__20180;
chunk__20177 = G__20181;
count__20178 = G__20182;
i__20179 = G__20183;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20176);if(temp__4126__auto__)
{var seq__20176__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20176__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20176__$1);{
var G__20184 = cljs.core.chunk_rest.call(null,seq__20176__$1);
var G__20185 = c__4408__auto__;
var G__20186 = cljs.core.count.call(null,c__4408__auto__);
var G__20187 = (0);
seq__20176 = G__20184;
chunk__20177 = G__20185;
count__20178 = G__20186;
i__20179 = G__20187;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20176__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20188 = cljs.core.next.call(null,seq__20176__$1);
var G__20189 = null;
var G__20190 = (0);
var G__20191 = (0);
seq__20176 = G__20188;
chunk__20177 = G__20189;
count__20178 = G__20190;
i__20179 = G__20191;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20193 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20193,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20193,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20193,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20194 = wrapper.lastChild;
var G__20195 = (level - (1));
wrapper = G__20194;
level = G__20195;
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
domina.DomContent = (function (){var obj20197 = {};return obj20197;
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
log_debug.cljs$lang$applyTo = (function (arglist__20198){
var mesg = cljs.core.seq(arglist__20198);
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
log.cljs$lang$applyTo = (function (arglist__20199){
var mesg = cljs.core.seq(arglist__20199);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20200){
var contents = cljs.core.seq(arglist__20200);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20201_SHARP_){return p1__20201_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20202_SHARP_,p2__20203_SHARP_){return goog.dom.insertChildAt(p1__20202_SHARP_,p2__20203_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20205_SHARP_,p2__20204_SHARP_){return goog.dom.insertSiblingBefore(p2__20204_SHARP_,p1__20205_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20207_SHARP_,p2__20206_SHARP_){return goog.dom.insertSiblingAfter(p2__20206_SHARP_,p1__20207_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20209_SHARP_,p2__20208_SHARP_){return goog.dom.replaceNode(p2__20208_SHARP_,p1__20209_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20214_20218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20215_20219 = null;var count__20216_20220 = (0);var i__20217_20221 = (0);while(true){
if((i__20217_20221 < count__20216_20220))
{var n_20222 = cljs.core._nth.call(null,chunk__20215_20219,i__20217_20221);goog.style.setStyle(n_20222,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20223 = seq__20214_20218;
var G__20224 = chunk__20215_20219;
var G__20225 = count__20216_20220;
var G__20226 = (i__20217_20221 + (1));
seq__20214_20218 = G__20223;
chunk__20215_20219 = G__20224;
count__20216_20220 = G__20225;
i__20217_20221 = G__20226;
continue;
}
} else
{var temp__4126__auto___20227 = cljs.core.seq.call(null,seq__20214_20218);if(temp__4126__auto___20227)
{var seq__20214_20228__$1 = temp__4126__auto___20227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20214_20228__$1))
{var c__4408__auto___20229 = cljs.core.chunk_first.call(null,seq__20214_20228__$1);{
var G__20230 = cljs.core.chunk_rest.call(null,seq__20214_20228__$1);
var G__20231 = c__4408__auto___20229;
var G__20232 = cljs.core.count.call(null,c__4408__auto___20229);
var G__20233 = (0);
seq__20214_20218 = G__20230;
chunk__20215_20219 = G__20231;
count__20216_20220 = G__20232;
i__20217_20221 = G__20233;
continue;
}
} else
{var n_20234 = cljs.core.first.call(null,seq__20214_20228__$1);goog.style.setStyle(n_20234,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20235 = cljs.core.next.call(null,seq__20214_20228__$1);
var G__20236 = null;
var G__20237 = (0);
var G__20238 = (0);
seq__20214_20218 = G__20235;
chunk__20215_20219 = G__20236;
count__20216_20220 = G__20237;
i__20217_20221 = G__20238;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20239){
var content = cljs.core.first(arglist__20239);
arglist__20239 = cljs.core.next(arglist__20239);
var name = cljs.core.first(arglist__20239);
var value = cljs.core.rest(arglist__20239);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20244_20248 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20245_20249 = null;var count__20246_20250 = (0);var i__20247_20251 = (0);while(true){
if((i__20247_20251 < count__20246_20250))
{var n_20252 = cljs.core._nth.call(null,chunk__20245_20249,i__20247_20251);n_20252.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20253 = seq__20244_20248;
var G__20254 = chunk__20245_20249;
var G__20255 = count__20246_20250;
var G__20256 = (i__20247_20251 + (1));
seq__20244_20248 = G__20253;
chunk__20245_20249 = G__20254;
count__20246_20250 = G__20255;
i__20247_20251 = G__20256;
continue;
}
} else
{var temp__4126__auto___20257 = cljs.core.seq.call(null,seq__20244_20248);if(temp__4126__auto___20257)
{var seq__20244_20258__$1 = temp__4126__auto___20257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_20258__$1))
{var c__4408__auto___20259 = cljs.core.chunk_first.call(null,seq__20244_20258__$1);{
var G__20260 = cljs.core.chunk_rest.call(null,seq__20244_20258__$1);
var G__20261 = c__4408__auto___20259;
var G__20262 = cljs.core.count.call(null,c__4408__auto___20259);
var G__20263 = (0);
seq__20244_20248 = G__20260;
chunk__20245_20249 = G__20261;
count__20246_20250 = G__20262;
i__20247_20251 = G__20263;
continue;
}
} else
{var n_20264 = cljs.core.first.call(null,seq__20244_20258__$1);n_20264.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20265 = cljs.core.next.call(null,seq__20244_20258__$1);
var G__20266 = null;
var G__20267 = (0);
var G__20268 = (0);
seq__20244_20248 = G__20265;
chunk__20245_20249 = G__20266;
count__20246_20250 = G__20267;
i__20247_20251 = G__20268;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20269){
var content = cljs.core.first(arglist__20269);
arglist__20269 = cljs.core.next(arglist__20269);
var name = cljs.core.first(arglist__20269);
var value = cljs.core.rest(arglist__20269);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20274_20278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20275_20279 = null;var count__20276_20280 = (0);var i__20277_20281 = (0);while(true){
if((i__20277_20281 < count__20276_20280))
{var n_20282 = cljs.core._nth.call(null,chunk__20275_20279,i__20277_20281);n_20282.removeAttribute(cljs.core.name.call(null,name));
{
var G__20283 = seq__20274_20278;
var G__20284 = chunk__20275_20279;
var G__20285 = count__20276_20280;
var G__20286 = (i__20277_20281 + (1));
seq__20274_20278 = G__20283;
chunk__20275_20279 = G__20284;
count__20276_20280 = G__20285;
i__20277_20281 = G__20286;
continue;
}
} else
{var temp__4126__auto___20287 = cljs.core.seq.call(null,seq__20274_20278);if(temp__4126__auto___20287)
{var seq__20274_20288__$1 = temp__4126__auto___20287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20274_20288__$1))
{var c__4408__auto___20289 = cljs.core.chunk_first.call(null,seq__20274_20288__$1);{
var G__20290 = cljs.core.chunk_rest.call(null,seq__20274_20288__$1);
var G__20291 = c__4408__auto___20289;
var G__20292 = cljs.core.count.call(null,c__4408__auto___20289);
var G__20293 = (0);
seq__20274_20278 = G__20290;
chunk__20275_20279 = G__20291;
count__20276_20280 = G__20292;
i__20277_20281 = G__20293;
continue;
}
} else
{var n_20294 = cljs.core.first.call(null,seq__20274_20288__$1);n_20294.removeAttribute(cljs.core.name.call(null,name));
{
var G__20295 = cljs.core.next.call(null,seq__20274_20288__$1);
var G__20296 = null;
var G__20297 = (0);
var G__20298 = (0);
seq__20274_20278 = G__20295;
chunk__20275_20279 = G__20296;
count__20276_20280 = G__20297;
i__20277_20281 = G__20298;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20300 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20300,(0),null);var v = cljs.core.nth.call(null,vec__20300,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20301_SHARP_){var attr = attrs__$1.item(p1__20301_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20308_20314 = cljs.core.seq.call(null,styles);var chunk__20309_20315 = null;var count__20310_20316 = (0);var i__20311_20317 = (0);while(true){
if((i__20311_20317 < count__20310_20316))
{var vec__20312_20318 = cljs.core._nth.call(null,chunk__20309_20315,i__20311_20317);var name_20319 = cljs.core.nth.call(null,vec__20312_20318,(0),null);var value_20320 = cljs.core.nth.call(null,vec__20312_20318,(1),null);domina.set_style_BANG_.call(null,content,name_20319,value_20320);
{
var G__20321 = seq__20308_20314;
var G__20322 = chunk__20309_20315;
var G__20323 = count__20310_20316;
var G__20324 = (i__20311_20317 + (1));
seq__20308_20314 = G__20321;
chunk__20309_20315 = G__20322;
count__20310_20316 = G__20323;
i__20311_20317 = G__20324;
continue;
}
} else
{var temp__4126__auto___20325 = cljs.core.seq.call(null,seq__20308_20314);if(temp__4126__auto___20325)
{var seq__20308_20326__$1 = temp__4126__auto___20325;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20308_20326__$1))
{var c__4408__auto___20327 = cljs.core.chunk_first.call(null,seq__20308_20326__$1);{
var G__20328 = cljs.core.chunk_rest.call(null,seq__20308_20326__$1);
var G__20329 = c__4408__auto___20327;
var G__20330 = cljs.core.count.call(null,c__4408__auto___20327);
var G__20331 = (0);
seq__20308_20314 = G__20328;
chunk__20309_20315 = G__20329;
count__20310_20316 = G__20330;
i__20311_20317 = G__20331;
continue;
}
} else
{var vec__20313_20332 = cljs.core.first.call(null,seq__20308_20326__$1);var name_20333 = cljs.core.nth.call(null,vec__20313_20332,(0),null);var value_20334 = cljs.core.nth.call(null,vec__20313_20332,(1),null);domina.set_style_BANG_.call(null,content,name_20333,value_20334);
{
var G__20335 = cljs.core.next.call(null,seq__20308_20326__$1);
var G__20336 = null;
var G__20337 = (0);
var G__20338 = (0);
seq__20308_20314 = G__20335;
chunk__20309_20315 = G__20336;
count__20310_20316 = G__20337;
i__20311_20317 = G__20338;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20345_20351 = cljs.core.seq.call(null,attrs);var chunk__20346_20352 = null;var count__20347_20353 = (0);var i__20348_20354 = (0);while(true){
if((i__20348_20354 < count__20347_20353))
{var vec__20349_20355 = cljs.core._nth.call(null,chunk__20346_20352,i__20348_20354);var name_20356 = cljs.core.nth.call(null,vec__20349_20355,(0),null);var value_20357 = cljs.core.nth.call(null,vec__20349_20355,(1),null);domina.set_attr_BANG_.call(null,content,name_20356,value_20357);
{
var G__20358 = seq__20345_20351;
var G__20359 = chunk__20346_20352;
var G__20360 = count__20347_20353;
var G__20361 = (i__20348_20354 + (1));
seq__20345_20351 = G__20358;
chunk__20346_20352 = G__20359;
count__20347_20353 = G__20360;
i__20348_20354 = G__20361;
continue;
}
} else
{var temp__4126__auto___20362 = cljs.core.seq.call(null,seq__20345_20351);if(temp__4126__auto___20362)
{var seq__20345_20363__$1 = temp__4126__auto___20362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20345_20363__$1))
{var c__4408__auto___20364 = cljs.core.chunk_first.call(null,seq__20345_20363__$1);{
var G__20365 = cljs.core.chunk_rest.call(null,seq__20345_20363__$1);
var G__20366 = c__4408__auto___20364;
var G__20367 = cljs.core.count.call(null,c__4408__auto___20364);
var G__20368 = (0);
seq__20345_20351 = G__20365;
chunk__20346_20352 = G__20366;
count__20347_20353 = G__20367;
i__20348_20354 = G__20368;
continue;
}
} else
{var vec__20350_20369 = cljs.core.first.call(null,seq__20345_20363__$1);var name_20370 = cljs.core.nth.call(null,vec__20350_20369,(0),null);var value_20371 = cljs.core.nth.call(null,vec__20350_20369,(1),null);domina.set_attr_BANG_.call(null,content,name_20370,value_20371);
{
var G__20372 = cljs.core.next.call(null,seq__20345_20363__$1);
var G__20373 = null;
var G__20374 = (0);
var G__20375 = (0);
seq__20345_20351 = G__20372;
chunk__20346_20352 = G__20373;
count__20347_20353 = G__20374;
i__20348_20354 = G__20375;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20380_20384 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20381_20385 = null;var count__20382_20386 = (0);var i__20383_20387 = (0);while(true){
if((i__20383_20387 < count__20382_20386))
{var node_20388 = cljs.core._nth.call(null,chunk__20381_20385,i__20383_20387);goog.dom.classes.add(node_20388,class$);
{
var G__20389 = seq__20380_20384;
var G__20390 = chunk__20381_20385;
var G__20391 = count__20382_20386;
var G__20392 = (i__20383_20387 + (1));
seq__20380_20384 = G__20389;
chunk__20381_20385 = G__20390;
count__20382_20386 = G__20391;
i__20383_20387 = G__20392;
continue;
}
} else
{var temp__4126__auto___20393 = cljs.core.seq.call(null,seq__20380_20384);if(temp__4126__auto___20393)
{var seq__20380_20394__$1 = temp__4126__auto___20393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20380_20394__$1))
{var c__4408__auto___20395 = cljs.core.chunk_first.call(null,seq__20380_20394__$1);{
var G__20396 = cljs.core.chunk_rest.call(null,seq__20380_20394__$1);
var G__20397 = c__4408__auto___20395;
var G__20398 = cljs.core.count.call(null,c__4408__auto___20395);
var G__20399 = (0);
seq__20380_20384 = G__20396;
chunk__20381_20385 = G__20397;
count__20382_20386 = G__20398;
i__20383_20387 = G__20399;
continue;
}
} else
{var node_20400 = cljs.core.first.call(null,seq__20380_20394__$1);goog.dom.classes.add(node_20400,class$);
{
var G__20401 = cljs.core.next.call(null,seq__20380_20394__$1);
var G__20402 = null;
var G__20403 = (0);
var G__20404 = (0);
seq__20380_20384 = G__20401;
chunk__20381_20385 = G__20402;
count__20382_20386 = G__20403;
i__20383_20387 = G__20404;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20409_20413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20410_20414 = null;var count__20411_20415 = (0);var i__20412_20416 = (0);while(true){
if((i__20412_20416 < count__20411_20415))
{var node_20417 = cljs.core._nth.call(null,chunk__20410_20414,i__20412_20416);goog.dom.classes.remove(node_20417,class$);
{
var G__20418 = seq__20409_20413;
var G__20419 = chunk__20410_20414;
var G__20420 = count__20411_20415;
var G__20421 = (i__20412_20416 + (1));
seq__20409_20413 = G__20418;
chunk__20410_20414 = G__20419;
count__20411_20415 = G__20420;
i__20412_20416 = G__20421;
continue;
}
} else
{var temp__4126__auto___20422 = cljs.core.seq.call(null,seq__20409_20413);if(temp__4126__auto___20422)
{var seq__20409_20423__$1 = temp__4126__auto___20422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20409_20423__$1))
{var c__4408__auto___20424 = cljs.core.chunk_first.call(null,seq__20409_20423__$1);{
var G__20425 = cljs.core.chunk_rest.call(null,seq__20409_20423__$1);
var G__20426 = c__4408__auto___20424;
var G__20427 = cljs.core.count.call(null,c__4408__auto___20424);
var G__20428 = (0);
seq__20409_20413 = G__20425;
chunk__20410_20414 = G__20426;
count__20411_20415 = G__20427;
i__20412_20416 = G__20428;
continue;
}
} else
{var node_20429 = cljs.core.first.call(null,seq__20409_20423__$1);goog.dom.classes.remove(node_20429,class$);
{
var G__20430 = cljs.core.next.call(null,seq__20409_20423__$1);
var G__20431 = null;
var G__20432 = (0);
var G__20433 = (0);
seq__20409_20413 = G__20430;
chunk__20410_20414 = G__20431;
count__20411_20415 = G__20432;
i__20412_20416 = G__20433;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20438_20442 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20439_20443 = null;var count__20440_20444 = (0);var i__20441_20445 = (0);while(true){
if((i__20441_20445 < count__20440_20444))
{var node_20446 = cljs.core._nth.call(null,chunk__20439_20443,i__20441_20445);goog.dom.classes.toggle(node_20446,class$);
{
var G__20447 = seq__20438_20442;
var G__20448 = chunk__20439_20443;
var G__20449 = count__20440_20444;
var G__20450 = (i__20441_20445 + (1));
seq__20438_20442 = G__20447;
chunk__20439_20443 = G__20448;
count__20440_20444 = G__20449;
i__20441_20445 = G__20450;
continue;
}
} else
{var temp__4126__auto___20451 = cljs.core.seq.call(null,seq__20438_20442);if(temp__4126__auto___20451)
{var seq__20438_20452__$1 = temp__4126__auto___20451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20438_20452__$1))
{var c__4408__auto___20453 = cljs.core.chunk_first.call(null,seq__20438_20452__$1);{
var G__20454 = cljs.core.chunk_rest.call(null,seq__20438_20452__$1);
var G__20455 = c__4408__auto___20453;
var G__20456 = cljs.core.count.call(null,c__4408__auto___20453);
var G__20457 = (0);
seq__20438_20442 = G__20454;
chunk__20439_20443 = G__20455;
count__20440_20444 = G__20456;
i__20441_20445 = G__20457;
continue;
}
} else
{var node_20458 = cljs.core.first.call(null,seq__20438_20452__$1);goog.dom.classes.toggle(node_20458,class$);
{
var G__20459 = cljs.core.next.call(null,seq__20438_20452__$1);
var G__20460 = null;
var G__20461 = (0);
var G__20462 = (0);
seq__20438_20442 = G__20459;
chunk__20439_20443 = G__20460;
count__20440_20444 = G__20461;
i__20441_20445 = G__20462;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20471__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20467_20472 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20468_20473 = null;var count__20469_20474 = (0);var i__20470_20475 = (0);while(true){
if((i__20470_20475 < count__20469_20474))
{var node_20476 = cljs.core._nth.call(null,chunk__20468_20473,i__20470_20475);goog.dom.classes.set(node_20476,classes_20471__$1);
{
var G__20477 = seq__20467_20472;
var G__20478 = chunk__20468_20473;
var G__20479 = count__20469_20474;
var G__20480 = (i__20470_20475 + (1));
seq__20467_20472 = G__20477;
chunk__20468_20473 = G__20478;
count__20469_20474 = G__20479;
i__20470_20475 = G__20480;
continue;
}
} else
{var temp__4126__auto___20481 = cljs.core.seq.call(null,seq__20467_20472);if(temp__4126__auto___20481)
{var seq__20467_20482__$1 = temp__4126__auto___20481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20467_20482__$1))
{var c__4408__auto___20483 = cljs.core.chunk_first.call(null,seq__20467_20482__$1);{
var G__20484 = cljs.core.chunk_rest.call(null,seq__20467_20482__$1);
var G__20485 = c__4408__auto___20483;
var G__20486 = cljs.core.count.call(null,c__4408__auto___20483);
var G__20487 = (0);
seq__20467_20472 = G__20484;
chunk__20468_20473 = G__20485;
count__20469_20474 = G__20486;
i__20470_20475 = G__20487;
continue;
}
} else
{var node_20488 = cljs.core.first.call(null,seq__20467_20482__$1);goog.dom.classes.set(node_20488,classes_20471__$1);
{
var G__20489 = cljs.core.next.call(null,seq__20467_20482__$1);
var G__20490 = null;
var G__20491 = (0);
var G__20492 = (0);
seq__20467_20472 = G__20489;
chunk__20468_20473 = G__20490;
count__20469_20474 = G__20491;
i__20470_20475 = G__20492;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20497_20501 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20498_20502 = null;var count__20499_20503 = (0);var i__20500_20504 = (0);while(true){
if((i__20500_20504 < count__20499_20503))
{var node_20505 = cljs.core._nth.call(null,chunk__20498_20502,i__20500_20504);goog.dom.setTextContent(node_20505,value);
{
var G__20506 = seq__20497_20501;
var G__20507 = chunk__20498_20502;
var G__20508 = count__20499_20503;
var G__20509 = (i__20500_20504 + (1));
seq__20497_20501 = G__20506;
chunk__20498_20502 = G__20507;
count__20499_20503 = G__20508;
i__20500_20504 = G__20509;
continue;
}
} else
{var temp__4126__auto___20510 = cljs.core.seq.call(null,seq__20497_20501);if(temp__4126__auto___20510)
{var seq__20497_20511__$1 = temp__4126__auto___20510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20497_20511__$1))
{var c__4408__auto___20512 = cljs.core.chunk_first.call(null,seq__20497_20511__$1);{
var G__20513 = cljs.core.chunk_rest.call(null,seq__20497_20511__$1);
var G__20514 = c__4408__auto___20512;
var G__20515 = cljs.core.count.call(null,c__4408__auto___20512);
var G__20516 = (0);
seq__20497_20501 = G__20513;
chunk__20498_20502 = G__20514;
count__20499_20503 = G__20515;
i__20500_20504 = G__20516;
continue;
}
} else
{var node_20517 = cljs.core.first.call(null,seq__20497_20511__$1);goog.dom.setTextContent(node_20517,value);
{
var G__20518 = cljs.core.next.call(null,seq__20497_20511__$1);
var G__20519 = null;
var G__20520 = (0);
var G__20521 = (0);
seq__20497_20501 = G__20518;
chunk__20498_20502 = G__20519;
count__20499_20503 = G__20520;
i__20500_20504 = G__20521;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20526_20530 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20527_20531 = null;var count__20528_20532 = (0);var i__20529_20533 = (0);while(true){
if((i__20529_20533 < count__20528_20532))
{var node_20534 = cljs.core._nth.call(null,chunk__20527_20531,i__20529_20533);goog.dom.forms.setValue(node_20534,value);
{
var G__20535 = seq__20526_20530;
var G__20536 = chunk__20527_20531;
var G__20537 = count__20528_20532;
var G__20538 = (i__20529_20533 + (1));
seq__20526_20530 = G__20535;
chunk__20527_20531 = G__20536;
count__20528_20532 = G__20537;
i__20529_20533 = G__20538;
continue;
}
} else
{var temp__4126__auto___20539 = cljs.core.seq.call(null,seq__20526_20530);if(temp__4126__auto___20539)
{var seq__20526_20540__$1 = temp__4126__auto___20539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20526_20540__$1))
{var c__4408__auto___20541 = cljs.core.chunk_first.call(null,seq__20526_20540__$1);{
var G__20542 = cljs.core.chunk_rest.call(null,seq__20526_20540__$1);
var G__20543 = c__4408__auto___20541;
var G__20544 = cljs.core.count.call(null,c__4408__auto___20541);
var G__20545 = (0);
seq__20526_20530 = G__20542;
chunk__20527_20531 = G__20543;
count__20528_20532 = G__20544;
i__20529_20533 = G__20545;
continue;
}
} else
{var node_20546 = cljs.core.first.call(null,seq__20526_20540__$1);goog.dom.forms.setValue(node_20546,value);
{
var G__20547 = cljs.core.next.call(null,seq__20526_20540__$1);
var G__20548 = null;
var G__20549 = (0);
var G__20550 = (0);
seq__20526_20530 = G__20547;
chunk__20527_20531 = G__20548;
count__20528_20532 = G__20549;
i__20529_20533 = G__20550;
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
{var value_20561 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20557_20562 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20558_20563 = null;var count__20559_20564 = (0);var i__20560_20565 = (0);while(true){
if((i__20560_20565 < count__20559_20564))
{var node_20566 = cljs.core._nth.call(null,chunk__20558_20563,i__20560_20565);node_20566.innerHTML = value_20561;
{
var G__20567 = seq__20557_20562;
var G__20568 = chunk__20558_20563;
var G__20569 = count__20559_20564;
var G__20570 = (i__20560_20565 + (1));
seq__20557_20562 = G__20567;
chunk__20558_20563 = G__20568;
count__20559_20564 = G__20569;
i__20560_20565 = G__20570;
continue;
}
} else
{var temp__4126__auto___20571 = cljs.core.seq.call(null,seq__20557_20562);if(temp__4126__auto___20571)
{var seq__20557_20572__$1 = temp__4126__auto___20571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20557_20572__$1))
{var c__4408__auto___20573 = cljs.core.chunk_first.call(null,seq__20557_20572__$1);{
var G__20574 = cljs.core.chunk_rest.call(null,seq__20557_20572__$1);
var G__20575 = c__4408__auto___20573;
var G__20576 = cljs.core.count.call(null,c__4408__auto___20573);
var G__20577 = (0);
seq__20557_20562 = G__20574;
chunk__20558_20563 = G__20575;
count__20559_20564 = G__20576;
i__20560_20565 = G__20577;
continue;
}
} else
{var node_20578 = cljs.core.first.call(null,seq__20557_20572__$1);node_20578.innerHTML = value_20561;
{
var G__20579 = cljs.core.next.call(null,seq__20557_20572__$1);
var G__20580 = null;
var G__20581 = (0);
var G__20582 = (0);
seq__20557_20562 = G__20579;
chunk__20558_20563 = G__20580;
count__20559_20564 = G__20581;
i__20560_20565 = G__20582;
continue;
}
}
} else
{}
}
break;
}
}catch (e20556){if((e20556 instanceof Error))
{var e_20583 = e20556;domina.replace_children_BANG_.call(null,content,value_20561);
} else
{throw e20556;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20590_20594 = cljs.core.seq.call(null,children);var chunk__20591_20595 = null;var count__20592_20596 = (0);var i__20593_20597 = (0);while(true){
if((i__20593_20597 < count__20592_20596))
{var child_20598 = cljs.core._nth.call(null,chunk__20591_20595,i__20593_20597);frag.appendChild(child_20598);
{
var G__20599 = seq__20590_20594;
var G__20600 = chunk__20591_20595;
var G__20601 = count__20592_20596;
var G__20602 = (i__20593_20597 + (1));
seq__20590_20594 = G__20599;
chunk__20591_20595 = G__20600;
count__20592_20596 = G__20601;
i__20593_20597 = G__20602;
continue;
}
} else
{var temp__4126__auto___20603 = cljs.core.seq.call(null,seq__20590_20594);if(temp__4126__auto___20603)
{var seq__20590_20604__$1 = temp__4126__auto___20603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20590_20604__$1))
{var c__4408__auto___20605 = cljs.core.chunk_first.call(null,seq__20590_20604__$1);{
var G__20606 = cljs.core.chunk_rest.call(null,seq__20590_20604__$1);
var G__20607 = c__4408__auto___20605;
var G__20608 = cljs.core.count.call(null,c__4408__auto___20605);
var G__20609 = (0);
seq__20590_20594 = G__20606;
chunk__20591_20595 = G__20607;
count__20592_20596 = G__20608;
i__20593_20597 = G__20609;
continue;
}
} else
{var child_20610 = cljs.core.first.call(null,seq__20590_20604__$1);frag.appendChild(child_20610);
{
var G__20611 = cljs.core.next.call(null,seq__20590_20604__$1);
var G__20612 = null;
var G__20613 = (0);
var G__20614 = (0);
seq__20590_20594 = G__20611;
chunk__20591_20595 = G__20612;
count__20592_20596 = G__20613;
i__20593_20597 = G__20614;
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
return (function (p1__20584_SHARP_,p2__20585_SHARP_){return f.call(null,p1__20584_SHARP_,p2__20585_SHARP_);
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
{if((function (){var G__20616 = list_thing;if(G__20616)
{var bit__4302__auto__ = (G__20616.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20616.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20616.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20616);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20616);
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
{if((function (){var G__20617 = content;if(G__20617)
{var bit__4302__auto__ = (G__20617.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20617.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20617.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20617);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20617);
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
{if((function (){var G__20618 = content;if(G__20618)
{var bit__4302__auto__ = (G__20618.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20618.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20618.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20618);
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
