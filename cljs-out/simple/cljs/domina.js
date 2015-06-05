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
var opt_wrapper_20025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20027,opt_wrapper_20025,table_section_wrapper_20026,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20026,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20026,cell_wrapper_20027,table_section_wrapper_20026,table_section_wrapper_20026]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20032 = cljs.core.seq.call(null,tbody);var chunk__20033 = null;var count__20034 = (0);var i__20035 = (0);while(true){
if((i__20035 < count__20034))
{var child = cljs.core._nth.call(null,chunk__20033,i__20035);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20036 = seq__20032;
var G__20037 = chunk__20033;
var G__20038 = count__20034;
var G__20039 = (i__20035 + (1));
seq__20032 = G__20036;
chunk__20033 = G__20037;
count__20034 = G__20038;
i__20035 = G__20039;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20032);if(temp__4126__auto__)
{var seq__20032__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20032__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20032__$1);{
var G__20040 = cljs.core.chunk_rest.call(null,seq__20032__$1);
var G__20041 = c__4408__auto__;
var G__20042 = cljs.core.count.call(null,c__4408__auto__);
var G__20043 = (0);
seq__20032 = G__20040;
chunk__20033 = G__20041;
count__20034 = G__20042;
i__20035 = G__20043;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20032__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20044 = cljs.core.next.call(null,seq__20032__$1);
var G__20045 = null;
var G__20046 = (0);
var G__20047 = (0);
seq__20032 = G__20044;
chunk__20033 = G__20045;
count__20034 = G__20046;
i__20035 = G__20047;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20049 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20049,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20049,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20049,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20050 = wrapper.lastChild;
var G__20051 = (level - (1));
wrapper = G__20050;
level = G__20051;
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
domina.DomContent = (function (){var obj20053 = {};return obj20053;
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
log_debug.cljs$lang$applyTo = (function (arglist__20054){
var mesg = cljs.core.seq(arglist__20054);
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
log.cljs$lang$applyTo = (function (arglist__20055){
var mesg = cljs.core.seq(arglist__20055);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20056){
var contents = cljs.core.seq(arglist__20056);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20057_SHARP_){return p1__20057_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20058_SHARP_,p2__20059_SHARP_){return goog.dom.insertChildAt(p1__20058_SHARP_,p2__20059_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20061_SHARP_,p2__20060_SHARP_){return goog.dom.insertSiblingBefore(p2__20060_SHARP_,p1__20061_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20063_SHARP_,p2__20062_SHARP_){return goog.dom.insertSiblingAfter(p2__20062_SHARP_,p1__20063_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20065_SHARP_,p2__20064_SHARP_){return goog.dom.replaceNode(p2__20064_SHARP_,p1__20065_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20070_20074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20071_20075 = null;var count__20072_20076 = (0);var i__20073_20077 = (0);while(true){
if((i__20073_20077 < count__20072_20076))
{var n_20078 = cljs.core._nth.call(null,chunk__20071_20075,i__20073_20077);goog.style.setStyle(n_20078,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20079 = seq__20070_20074;
var G__20080 = chunk__20071_20075;
var G__20081 = count__20072_20076;
var G__20082 = (i__20073_20077 + (1));
seq__20070_20074 = G__20079;
chunk__20071_20075 = G__20080;
count__20072_20076 = G__20081;
i__20073_20077 = G__20082;
continue;
}
} else
{var temp__4126__auto___20083 = cljs.core.seq.call(null,seq__20070_20074);if(temp__4126__auto___20083)
{var seq__20070_20084__$1 = temp__4126__auto___20083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20070_20084__$1))
{var c__4408__auto___20085 = cljs.core.chunk_first.call(null,seq__20070_20084__$1);{
var G__20086 = cljs.core.chunk_rest.call(null,seq__20070_20084__$1);
var G__20087 = c__4408__auto___20085;
var G__20088 = cljs.core.count.call(null,c__4408__auto___20085);
var G__20089 = (0);
seq__20070_20074 = G__20086;
chunk__20071_20075 = G__20087;
count__20072_20076 = G__20088;
i__20073_20077 = G__20089;
continue;
}
} else
{var n_20090 = cljs.core.first.call(null,seq__20070_20084__$1);goog.style.setStyle(n_20090,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20091 = cljs.core.next.call(null,seq__20070_20084__$1);
var G__20092 = null;
var G__20093 = (0);
var G__20094 = (0);
seq__20070_20074 = G__20091;
chunk__20071_20075 = G__20092;
count__20072_20076 = G__20093;
i__20073_20077 = G__20094;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20095){
var content = cljs.core.first(arglist__20095);
arglist__20095 = cljs.core.next(arglist__20095);
var name = cljs.core.first(arglist__20095);
var value = cljs.core.rest(arglist__20095);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20100_20104 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20101_20105 = null;var count__20102_20106 = (0);var i__20103_20107 = (0);while(true){
if((i__20103_20107 < count__20102_20106))
{var n_20108 = cljs.core._nth.call(null,chunk__20101_20105,i__20103_20107);n_20108.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20109 = seq__20100_20104;
var G__20110 = chunk__20101_20105;
var G__20111 = count__20102_20106;
var G__20112 = (i__20103_20107 + (1));
seq__20100_20104 = G__20109;
chunk__20101_20105 = G__20110;
count__20102_20106 = G__20111;
i__20103_20107 = G__20112;
continue;
}
} else
{var temp__4126__auto___20113 = cljs.core.seq.call(null,seq__20100_20104);if(temp__4126__auto___20113)
{var seq__20100_20114__$1 = temp__4126__auto___20113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20100_20114__$1))
{var c__4408__auto___20115 = cljs.core.chunk_first.call(null,seq__20100_20114__$1);{
var G__20116 = cljs.core.chunk_rest.call(null,seq__20100_20114__$1);
var G__20117 = c__4408__auto___20115;
var G__20118 = cljs.core.count.call(null,c__4408__auto___20115);
var G__20119 = (0);
seq__20100_20104 = G__20116;
chunk__20101_20105 = G__20117;
count__20102_20106 = G__20118;
i__20103_20107 = G__20119;
continue;
}
} else
{var n_20120 = cljs.core.first.call(null,seq__20100_20114__$1);n_20120.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20121 = cljs.core.next.call(null,seq__20100_20114__$1);
var G__20122 = null;
var G__20123 = (0);
var G__20124 = (0);
seq__20100_20104 = G__20121;
chunk__20101_20105 = G__20122;
count__20102_20106 = G__20123;
i__20103_20107 = G__20124;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20125){
var content = cljs.core.first(arglist__20125);
arglist__20125 = cljs.core.next(arglist__20125);
var name = cljs.core.first(arglist__20125);
var value = cljs.core.rest(arglist__20125);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20130_20134 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20131_20135 = null;var count__20132_20136 = (0);var i__20133_20137 = (0);while(true){
if((i__20133_20137 < count__20132_20136))
{var n_20138 = cljs.core._nth.call(null,chunk__20131_20135,i__20133_20137);n_20138.removeAttribute(cljs.core.name.call(null,name));
{
var G__20139 = seq__20130_20134;
var G__20140 = chunk__20131_20135;
var G__20141 = count__20132_20136;
var G__20142 = (i__20133_20137 + (1));
seq__20130_20134 = G__20139;
chunk__20131_20135 = G__20140;
count__20132_20136 = G__20141;
i__20133_20137 = G__20142;
continue;
}
} else
{var temp__4126__auto___20143 = cljs.core.seq.call(null,seq__20130_20134);if(temp__4126__auto___20143)
{var seq__20130_20144__$1 = temp__4126__auto___20143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20130_20144__$1))
{var c__4408__auto___20145 = cljs.core.chunk_first.call(null,seq__20130_20144__$1);{
var G__20146 = cljs.core.chunk_rest.call(null,seq__20130_20144__$1);
var G__20147 = c__4408__auto___20145;
var G__20148 = cljs.core.count.call(null,c__4408__auto___20145);
var G__20149 = (0);
seq__20130_20134 = G__20146;
chunk__20131_20135 = G__20147;
count__20132_20136 = G__20148;
i__20133_20137 = G__20149;
continue;
}
} else
{var n_20150 = cljs.core.first.call(null,seq__20130_20144__$1);n_20150.removeAttribute(cljs.core.name.call(null,name));
{
var G__20151 = cljs.core.next.call(null,seq__20130_20144__$1);
var G__20152 = null;
var G__20153 = (0);
var G__20154 = (0);
seq__20130_20134 = G__20151;
chunk__20131_20135 = G__20152;
count__20132_20136 = G__20153;
i__20133_20137 = G__20154;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20156 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20156,(0),null);var v = cljs.core.nth.call(null,vec__20156,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20157_SHARP_){var attr = attrs__$1.item(p1__20157_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20164_20170 = cljs.core.seq.call(null,styles);var chunk__20165_20171 = null;var count__20166_20172 = (0);var i__20167_20173 = (0);while(true){
if((i__20167_20173 < count__20166_20172))
{var vec__20168_20174 = cljs.core._nth.call(null,chunk__20165_20171,i__20167_20173);var name_20175 = cljs.core.nth.call(null,vec__20168_20174,(0),null);var value_20176 = cljs.core.nth.call(null,vec__20168_20174,(1),null);domina.set_style_BANG_.call(null,content,name_20175,value_20176);
{
var G__20177 = seq__20164_20170;
var G__20178 = chunk__20165_20171;
var G__20179 = count__20166_20172;
var G__20180 = (i__20167_20173 + (1));
seq__20164_20170 = G__20177;
chunk__20165_20171 = G__20178;
count__20166_20172 = G__20179;
i__20167_20173 = G__20180;
continue;
}
} else
{var temp__4126__auto___20181 = cljs.core.seq.call(null,seq__20164_20170);if(temp__4126__auto___20181)
{var seq__20164_20182__$1 = temp__4126__auto___20181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20164_20182__$1))
{var c__4408__auto___20183 = cljs.core.chunk_first.call(null,seq__20164_20182__$1);{
var G__20184 = cljs.core.chunk_rest.call(null,seq__20164_20182__$1);
var G__20185 = c__4408__auto___20183;
var G__20186 = cljs.core.count.call(null,c__4408__auto___20183);
var G__20187 = (0);
seq__20164_20170 = G__20184;
chunk__20165_20171 = G__20185;
count__20166_20172 = G__20186;
i__20167_20173 = G__20187;
continue;
}
} else
{var vec__20169_20188 = cljs.core.first.call(null,seq__20164_20182__$1);var name_20189 = cljs.core.nth.call(null,vec__20169_20188,(0),null);var value_20190 = cljs.core.nth.call(null,vec__20169_20188,(1),null);domina.set_style_BANG_.call(null,content,name_20189,value_20190);
{
var G__20191 = cljs.core.next.call(null,seq__20164_20182__$1);
var G__20192 = null;
var G__20193 = (0);
var G__20194 = (0);
seq__20164_20170 = G__20191;
chunk__20165_20171 = G__20192;
count__20166_20172 = G__20193;
i__20167_20173 = G__20194;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20201_20207 = cljs.core.seq.call(null,attrs);var chunk__20202_20208 = null;var count__20203_20209 = (0);var i__20204_20210 = (0);while(true){
if((i__20204_20210 < count__20203_20209))
{var vec__20205_20211 = cljs.core._nth.call(null,chunk__20202_20208,i__20204_20210);var name_20212 = cljs.core.nth.call(null,vec__20205_20211,(0),null);var value_20213 = cljs.core.nth.call(null,vec__20205_20211,(1),null);domina.set_attr_BANG_.call(null,content,name_20212,value_20213);
{
var G__20214 = seq__20201_20207;
var G__20215 = chunk__20202_20208;
var G__20216 = count__20203_20209;
var G__20217 = (i__20204_20210 + (1));
seq__20201_20207 = G__20214;
chunk__20202_20208 = G__20215;
count__20203_20209 = G__20216;
i__20204_20210 = G__20217;
continue;
}
} else
{var temp__4126__auto___20218 = cljs.core.seq.call(null,seq__20201_20207);if(temp__4126__auto___20218)
{var seq__20201_20219__$1 = temp__4126__auto___20218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20201_20219__$1))
{var c__4408__auto___20220 = cljs.core.chunk_first.call(null,seq__20201_20219__$1);{
var G__20221 = cljs.core.chunk_rest.call(null,seq__20201_20219__$1);
var G__20222 = c__4408__auto___20220;
var G__20223 = cljs.core.count.call(null,c__4408__auto___20220);
var G__20224 = (0);
seq__20201_20207 = G__20221;
chunk__20202_20208 = G__20222;
count__20203_20209 = G__20223;
i__20204_20210 = G__20224;
continue;
}
} else
{var vec__20206_20225 = cljs.core.first.call(null,seq__20201_20219__$1);var name_20226 = cljs.core.nth.call(null,vec__20206_20225,(0),null);var value_20227 = cljs.core.nth.call(null,vec__20206_20225,(1),null);domina.set_attr_BANG_.call(null,content,name_20226,value_20227);
{
var G__20228 = cljs.core.next.call(null,seq__20201_20219__$1);
var G__20229 = null;
var G__20230 = (0);
var G__20231 = (0);
seq__20201_20207 = G__20228;
chunk__20202_20208 = G__20229;
count__20203_20209 = G__20230;
i__20204_20210 = G__20231;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20236_20240 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20237_20241 = null;var count__20238_20242 = (0);var i__20239_20243 = (0);while(true){
if((i__20239_20243 < count__20238_20242))
{var node_20244 = cljs.core._nth.call(null,chunk__20237_20241,i__20239_20243);goog.dom.classes.add(node_20244,class$);
{
var G__20245 = seq__20236_20240;
var G__20246 = chunk__20237_20241;
var G__20247 = count__20238_20242;
var G__20248 = (i__20239_20243 + (1));
seq__20236_20240 = G__20245;
chunk__20237_20241 = G__20246;
count__20238_20242 = G__20247;
i__20239_20243 = G__20248;
continue;
}
} else
{var temp__4126__auto___20249 = cljs.core.seq.call(null,seq__20236_20240);if(temp__4126__auto___20249)
{var seq__20236_20250__$1 = temp__4126__auto___20249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20236_20250__$1))
{var c__4408__auto___20251 = cljs.core.chunk_first.call(null,seq__20236_20250__$1);{
var G__20252 = cljs.core.chunk_rest.call(null,seq__20236_20250__$1);
var G__20253 = c__4408__auto___20251;
var G__20254 = cljs.core.count.call(null,c__4408__auto___20251);
var G__20255 = (0);
seq__20236_20240 = G__20252;
chunk__20237_20241 = G__20253;
count__20238_20242 = G__20254;
i__20239_20243 = G__20255;
continue;
}
} else
{var node_20256 = cljs.core.first.call(null,seq__20236_20250__$1);goog.dom.classes.add(node_20256,class$);
{
var G__20257 = cljs.core.next.call(null,seq__20236_20250__$1);
var G__20258 = null;
var G__20259 = (0);
var G__20260 = (0);
seq__20236_20240 = G__20257;
chunk__20237_20241 = G__20258;
count__20238_20242 = G__20259;
i__20239_20243 = G__20260;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20265_20269 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20266_20270 = null;var count__20267_20271 = (0);var i__20268_20272 = (0);while(true){
if((i__20268_20272 < count__20267_20271))
{var node_20273 = cljs.core._nth.call(null,chunk__20266_20270,i__20268_20272);goog.dom.classes.remove(node_20273,class$);
{
var G__20274 = seq__20265_20269;
var G__20275 = chunk__20266_20270;
var G__20276 = count__20267_20271;
var G__20277 = (i__20268_20272 + (1));
seq__20265_20269 = G__20274;
chunk__20266_20270 = G__20275;
count__20267_20271 = G__20276;
i__20268_20272 = G__20277;
continue;
}
} else
{var temp__4126__auto___20278 = cljs.core.seq.call(null,seq__20265_20269);if(temp__4126__auto___20278)
{var seq__20265_20279__$1 = temp__4126__auto___20278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20265_20279__$1))
{var c__4408__auto___20280 = cljs.core.chunk_first.call(null,seq__20265_20279__$1);{
var G__20281 = cljs.core.chunk_rest.call(null,seq__20265_20279__$1);
var G__20282 = c__4408__auto___20280;
var G__20283 = cljs.core.count.call(null,c__4408__auto___20280);
var G__20284 = (0);
seq__20265_20269 = G__20281;
chunk__20266_20270 = G__20282;
count__20267_20271 = G__20283;
i__20268_20272 = G__20284;
continue;
}
} else
{var node_20285 = cljs.core.first.call(null,seq__20265_20279__$1);goog.dom.classes.remove(node_20285,class$);
{
var G__20286 = cljs.core.next.call(null,seq__20265_20279__$1);
var G__20287 = null;
var G__20288 = (0);
var G__20289 = (0);
seq__20265_20269 = G__20286;
chunk__20266_20270 = G__20287;
count__20267_20271 = G__20288;
i__20268_20272 = G__20289;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20294_20298 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20295_20299 = null;var count__20296_20300 = (0);var i__20297_20301 = (0);while(true){
if((i__20297_20301 < count__20296_20300))
{var node_20302 = cljs.core._nth.call(null,chunk__20295_20299,i__20297_20301);goog.dom.classes.toggle(node_20302,class$);
{
var G__20303 = seq__20294_20298;
var G__20304 = chunk__20295_20299;
var G__20305 = count__20296_20300;
var G__20306 = (i__20297_20301 + (1));
seq__20294_20298 = G__20303;
chunk__20295_20299 = G__20304;
count__20296_20300 = G__20305;
i__20297_20301 = G__20306;
continue;
}
} else
{var temp__4126__auto___20307 = cljs.core.seq.call(null,seq__20294_20298);if(temp__4126__auto___20307)
{var seq__20294_20308__$1 = temp__4126__auto___20307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20294_20308__$1))
{var c__4408__auto___20309 = cljs.core.chunk_first.call(null,seq__20294_20308__$1);{
var G__20310 = cljs.core.chunk_rest.call(null,seq__20294_20308__$1);
var G__20311 = c__4408__auto___20309;
var G__20312 = cljs.core.count.call(null,c__4408__auto___20309);
var G__20313 = (0);
seq__20294_20298 = G__20310;
chunk__20295_20299 = G__20311;
count__20296_20300 = G__20312;
i__20297_20301 = G__20313;
continue;
}
} else
{var node_20314 = cljs.core.first.call(null,seq__20294_20308__$1);goog.dom.classes.toggle(node_20314,class$);
{
var G__20315 = cljs.core.next.call(null,seq__20294_20308__$1);
var G__20316 = null;
var G__20317 = (0);
var G__20318 = (0);
seq__20294_20298 = G__20315;
chunk__20295_20299 = G__20316;
count__20296_20300 = G__20317;
i__20297_20301 = G__20318;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20327__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20323_20328 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20324_20329 = null;var count__20325_20330 = (0);var i__20326_20331 = (0);while(true){
if((i__20326_20331 < count__20325_20330))
{var node_20332 = cljs.core._nth.call(null,chunk__20324_20329,i__20326_20331);goog.dom.classes.set(node_20332,classes_20327__$1);
{
var G__20333 = seq__20323_20328;
var G__20334 = chunk__20324_20329;
var G__20335 = count__20325_20330;
var G__20336 = (i__20326_20331 + (1));
seq__20323_20328 = G__20333;
chunk__20324_20329 = G__20334;
count__20325_20330 = G__20335;
i__20326_20331 = G__20336;
continue;
}
} else
{var temp__4126__auto___20337 = cljs.core.seq.call(null,seq__20323_20328);if(temp__4126__auto___20337)
{var seq__20323_20338__$1 = temp__4126__auto___20337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20323_20338__$1))
{var c__4408__auto___20339 = cljs.core.chunk_first.call(null,seq__20323_20338__$1);{
var G__20340 = cljs.core.chunk_rest.call(null,seq__20323_20338__$1);
var G__20341 = c__4408__auto___20339;
var G__20342 = cljs.core.count.call(null,c__4408__auto___20339);
var G__20343 = (0);
seq__20323_20328 = G__20340;
chunk__20324_20329 = G__20341;
count__20325_20330 = G__20342;
i__20326_20331 = G__20343;
continue;
}
} else
{var node_20344 = cljs.core.first.call(null,seq__20323_20338__$1);goog.dom.classes.set(node_20344,classes_20327__$1);
{
var G__20345 = cljs.core.next.call(null,seq__20323_20338__$1);
var G__20346 = null;
var G__20347 = (0);
var G__20348 = (0);
seq__20323_20328 = G__20345;
chunk__20324_20329 = G__20346;
count__20325_20330 = G__20347;
i__20326_20331 = G__20348;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20353_20357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20354_20358 = null;var count__20355_20359 = (0);var i__20356_20360 = (0);while(true){
if((i__20356_20360 < count__20355_20359))
{var node_20361 = cljs.core._nth.call(null,chunk__20354_20358,i__20356_20360);goog.dom.setTextContent(node_20361,value);
{
var G__20362 = seq__20353_20357;
var G__20363 = chunk__20354_20358;
var G__20364 = count__20355_20359;
var G__20365 = (i__20356_20360 + (1));
seq__20353_20357 = G__20362;
chunk__20354_20358 = G__20363;
count__20355_20359 = G__20364;
i__20356_20360 = G__20365;
continue;
}
} else
{var temp__4126__auto___20366 = cljs.core.seq.call(null,seq__20353_20357);if(temp__4126__auto___20366)
{var seq__20353_20367__$1 = temp__4126__auto___20366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20353_20367__$1))
{var c__4408__auto___20368 = cljs.core.chunk_first.call(null,seq__20353_20367__$1);{
var G__20369 = cljs.core.chunk_rest.call(null,seq__20353_20367__$1);
var G__20370 = c__4408__auto___20368;
var G__20371 = cljs.core.count.call(null,c__4408__auto___20368);
var G__20372 = (0);
seq__20353_20357 = G__20369;
chunk__20354_20358 = G__20370;
count__20355_20359 = G__20371;
i__20356_20360 = G__20372;
continue;
}
} else
{var node_20373 = cljs.core.first.call(null,seq__20353_20367__$1);goog.dom.setTextContent(node_20373,value);
{
var G__20374 = cljs.core.next.call(null,seq__20353_20367__$1);
var G__20375 = null;
var G__20376 = (0);
var G__20377 = (0);
seq__20353_20357 = G__20374;
chunk__20354_20358 = G__20375;
count__20355_20359 = G__20376;
i__20356_20360 = G__20377;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20382_20386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20383_20387 = null;var count__20384_20388 = (0);var i__20385_20389 = (0);while(true){
if((i__20385_20389 < count__20384_20388))
{var node_20390 = cljs.core._nth.call(null,chunk__20383_20387,i__20385_20389);goog.dom.forms.setValue(node_20390,value);
{
var G__20391 = seq__20382_20386;
var G__20392 = chunk__20383_20387;
var G__20393 = count__20384_20388;
var G__20394 = (i__20385_20389 + (1));
seq__20382_20386 = G__20391;
chunk__20383_20387 = G__20392;
count__20384_20388 = G__20393;
i__20385_20389 = G__20394;
continue;
}
} else
{var temp__4126__auto___20395 = cljs.core.seq.call(null,seq__20382_20386);if(temp__4126__auto___20395)
{var seq__20382_20396__$1 = temp__4126__auto___20395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20382_20396__$1))
{var c__4408__auto___20397 = cljs.core.chunk_first.call(null,seq__20382_20396__$1);{
var G__20398 = cljs.core.chunk_rest.call(null,seq__20382_20396__$1);
var G__20399 = c__4408__auto___20397;
var G__20400 = cljs.core.count.call(null,c__4408__auto___20397);
var G__20401 = (0);
seq__20382_20386 = G__20398;
chunk__20383_20387 = G__20399;
count__20384_20388 = G__20400;
i__20385_20389 = G__20401;
continue;
}
} else
{var node_20402 = cljs.core.first.call(null,seq__20382_20396__$1);goog.dom.forms.setValue(node_20402,value);
{
var G__20403 = cljs.core.next.call(null,seq__20382_20396__$1);
var G__20404 = null;
var G__20405 = (0);
var G__20406 = (0);
seq__20382_20386 = G__20403;
chunk__20383_20387 = G__20404;
count__20384_20388 = G__20405;
i__20385_20389 = G__20406;
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
{var value_20417 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20413_20418 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20414_20419 = null;var count__20415_20420 = (0);var i__20416_20421 = (0);while(true){
if((i__20416_20421 < count__20415_20420))
{var node_20422 = cljs.core._nth.call(null,chunk__20414_20419,i__20416_20421);node_20422.innerHTML = value_20417;
{
var G__20423 = seq__20413_20418;
var G__20424 = chunk__20414_20419;
var G__20425 = count__20415_20420;
var G__20426 = (i__20416_20421 + (1));
seq__20413_20418 = G__20423;
chunk__20414_20419 = G__20424;
count__20415_20420 = G__20425;
i__20416_20421 = G__20426;
continue;
}
} else
{var temp__4126__auto___20427 = cljs.core.seq.call(null,seq__20413_20418);if(temp__4126__auto___20427)
{var seq__20413_20428__$1 = temp__4126__auto___20427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20413_20428__$1))
{var c__4408__auto___20429 = cljs.core.chunk_first.call(null,seq__20413_20428__$1);{
var G__20430 = cljs.core.chunk_rest.call(null,seq__20413_20428__$1);
var G__20431 = c__4408__auto___20429;
var G__20432 = cljs.core.count.call(null,c__4408__auto___20429);
var G__20433 = (0);
seq__20413_20418 = G__20430;
chunk__20414_20419 = G__20431;
count__20415_20420 = G__20432;
i__20416_20421 = G__20433;
continue;
}
} else
{var node_20434 = cljs.core.first.call(null,seq__20413_20428__$1);node_20434.innerHTML = value_20417;
{
var G__20435 = cljs.core.next.call(null,seq__20413_20428__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__20413_20418 = G__20435;
chunk__20414_20419 = G__20436;
count__20415_20420 = G__20437;
i__20416_20421 = G__20438;
continue;
}
}
} else
{}
}
break;
}
}catch (e20412){if((e20412 instanceof Error))
{var e_20439 = e20412;domina.replace_children_BANG_.call(null,content,value_20417);
} else
{throw e20412;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20446_20450 = cljs.core.seq.call(null,children);var chunk__20447_20451 = null;var count__20448_20452 = (0);var i__20449_20453 = (0);while(true){
if((i__20449_20453 < count__20448_20452))
{var child_20454 = cljs.core._nth.call(null,chunk__20447_20451,i__20449_20453);frag.appendChild(child_20454);
{
var G__20455 = seq__20446_20450;
var G__20456 = chunk__20447_20451;
var G__20457 = count__20448_20452;
var G__20458 = (i__20449_20453 + (1));
seq__20446_20450 = G__20455;
chunk__20447_20451 = G__20456;
count__20448_20452 = G__20457;
i__20449_20453 = G__20458;
continue;
}
} else
{var temp__4126__auto___20459 = cljs.core.seq.call(null,seq__20446_20450);if(temp__4126__auto___20459)
{var seq__20446_20460__$1 = temp__4126__auto___20459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20446_20460__$1))
{var c__4408__auto___20461 = cljs.core.chunk_first.call(null,seq__20446_20460__$1);{
var G__20462 = cljs.core.chunk_rest.call(null,seq__20446_20460__$1);
var G__20463 = c__4408__auto___20461;
var G__20464 = cljs.core.count.call(null,c__4408__auto___20461);
var G__20465 = (0);
seq__20446_20450 = G__20462;
chunk__20447_20451 = G__20463;
count__20448_20452 = G__20464;
i__20449_20453 = G__20465;
continue;
}
} else
{var child_20466 = cljs.core.first.call(null,seq__20446_20460__$1);frag.appendChild(child_20466);
{
var G__20467 = cljs.core.next.call(null,seq__20446_20460__$1);
var G__20468 = null;
var G__20469 = (0);
var G__20470 = (0);
seq__20446_20450 = G__20467;
chunk__20447_20451 = G__20468;
count__20448_20452 = G__20469;
i__20449_20453 = G__20470;
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
return (function (p1__20440_SHARP_,p2__20441_SHARP_){return f.call(null,p1__20440_SHARP_,p2__20441_SHARP_);
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
{if((function (){var G__20472 = list_thing;if(G__20472)
{var bit__4302__auto__ = (G__20472.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20472.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20472);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20472);
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
{if((function (){var G__20473 = content;if(G__20473)
{var bit__4302__auto__ = (G__20473.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20473.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20473.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20473);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20473);
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
{if((function (){var G__20474 = content;if(G__20474)
{var bit__4302__auto__ = (G__20474.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20474.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20474.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20474);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20474);
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
