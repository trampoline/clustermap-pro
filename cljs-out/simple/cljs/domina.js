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
var opt_wrapper_21064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21066,opt_wrapper_21064,table_section_wrapper_21065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21064,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21065,cell_wrapper_21066,table_section_wrapper_21065,table_section_wrapper_21065]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21071 = cljs.core.seq.call(null,tbody);var chunk__21072 = null;var count__21073 = (0);var i__21074 = (0);while(true){
if((i__21074 < count__21073))
{var child = cljs.core._nth.call(null,chunk__21072,i__21074);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21075 = seq__21071;
var G__21076 = chunk__21072;
var G__21077 = count__21073;
var G__21078 = (i__21074 + (1));
seq__21071 = G__21075;
chunk__21072 = G__21076;
count__21073 = G__21077;
i__21074 = G__21078;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21071);if(temp__4126__auto__)
{var seq__21071__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21071__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21071__$1);{
var G__21079 = cljs.core.chunk_rest.call(null,seq__21071__$1);
var G__21080 = c__4408__auto__;
var G__21081 = cljs.core.count.call(null,c__4408__auto__);
var G__21082 = (0);
seq__21071 = G__21079;
chunk__21072 = G__21080;
count__21073 = G__21081;
i__21074 = G__21082;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21071__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21083 = cljs.core.next.call(null,seq__21071__$1);
var G__21084 = null;
var G__21085 = (0);
var G__21086 = (0);
seq__21071 = G__21083;
chunk__21072 = G__21084;
count__21073 = G__21085;
i__21074 = G__21086;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21088 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21088,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21088,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21088,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21089 = wrapper.lastChild;
var G__21090 = (level - (1));
wrapper = G__21089;
level = G__21090;
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
domina.DomContent = (function (){var obj21092 = {};return obj21092;
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
log_debug.cljs$lang$applyTo = (function (arglist__21093){
var mesg = cljs.core.seq(arglist__21093);
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
log.cljs$lang$applyTo = (function (arglist__21094){
var mesg = cljs.core.seq(arglist__21094);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21095){
var contents = cljs.core.seq(arglist__21095);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21096_SHARP_){return p1__21096_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21097_SHARP_,p2__21098_SHARP_){return goog.dom.insertChildAt(p1__21097_SHARP_,p2__21098_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21100_SHARP_,p2__21099_SHARP_){return goog.dom.insertSiblingBefore(p2__21099_SHARP_,p1__21100_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21102_SHARP_,p2__21101_SHARP_){return goog.dom.insertSiblingAfter(p2__21101_SHARP_,p1__21102_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21104_SHARP_,p2__21103_SHARP_){return goog.dom.replaceNode(p2__21103_SHARP_,p1__21104_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21109_21113 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21110_21114 = null;var count__21111_21115 = (0);var i__21112_21116 = (0);while(true){
if((i__21112_21116 < count__21111_21115))
{var n_21117 = cljs.core._nth.call(null,chunk__21110_21114,i__21112_21116);goog.style.setStyle(n_21117,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21118 = seq__21109_21113;
var G__21119 = chunk__21110_21114;
var G__21120 = count__21111_21115;
var G__21121 = (i__21112_21116 + (1));
seq__21109_21113 = G__21118;
chunk__21110_21114 = G__21119;
count__21111_21115 = G__21120;
i__21112_21116 = G__21121;
continue;
}
} else
{var temp__4126__auto___21122 = cljs.core.seq.call(null,seq__21109_21113);if(temp__4126__auto___21122)
{var seq__21109_21123__$1 = temp__4126__auto___21122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21109_21123__$1))
{var c__4408__auto___21124 = cljs.core.chunk_first.call(null,seq__21109_21123__$1);{
var G__21125 = cljs.core.chunk_rest.call(null,seq__21109_21123__$1);
var G__21126 = c__4408__auto___21124;
var G__21127 = cljs.core.count.call(null,c__4408__auto___21124);
var G__21128 = (0);
seq__21109_21113 = G__21125;
chunk__21110_21114 = G__21126;
count__21111_21115 = G__21127;
i__21112_21116 = G__21128;
continue;
}
} else
{var n_21129 = cljs.core.first.call(null,seq__21109_21123__$1);goog.style.setStyle(n_21129,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21130 = cljs.core.next.call(null,seq__21109_21123__$1);
var G__21131 = null;
var G__21132 = (0);
var G__21133 = (0);
seq__21109_21113 = G__21130;
chunk__21110_21114 = G__21131;
count__21111_21115 = G__21132;
i__21112_21116 = G__21133;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21134){
var content = cljs.core.first(arglist__21134);
arglist__21134 = cljs.core.next(arglist__21134);
var name = cljs.core.first(arglist__21134);
var value = cljs.core.rest(arglist__21134);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21139_21143 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21140_21144 = null;var count__21141_21145 = (0);var i__21142_21146 = (0);while(true){
if((i__21142_21146 < count__21141_21145))
{var n_21147 = cljs.core._nth.call(null,chunk__21140_21144,i__21142_21146);n_21147.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21148 = seq__21139_21143;
var G__21149 = chunk__21140_21144;
var G__21150 = count__21141_21145;
var G__21151 = (i__21142_21146 + (1));
seq__21139_21143 = G__21148;
chunk__21140_21144 = G__21149;
count__21141_21145 = G__21150;
i__21142_21146 = G__21151;
continue;
}
} else
{var temp__4126__auto___21152 = cljs.core.seq.call(null,seq__21139_21143);if(temp__4126__auto___21152)
{var seq__21139_21153__$1 = temp__4126__auto___21152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21139_21153__$1))
{var c__4408__auto___21154 = cljs.core.chunk_first.call(null,seq__21139_21153__$1);{
var G__21155 = cljs.core.chunk_rest.call(null,seq__21139_21153__$1);
var G__21156 = c__4408__auto___21154;
var G__21157 = cljs.core.count.call(null,c__4408__auto___21154);
var G__21158 = (0);
seq__21139_21143 = G__21155;
chunk__21140_21144 = G__21156;
count__21141_21145 = G__21157;
i__21142_21146 = G__21158;
continue;
}
} else
{var n_21159 = cljs.core.first.call(null,seq__21139_21153__$1);n_21159.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21160 = cljs.core.next.call(null,seq__21139_21153__$1);
var G__21161 = null;
var G__21162 = (0);
var G__21163 = (0);
seq__21139_21143 = G__21160;
chunk__21140_21144 = G__21161;
count__21141_21145 = G__21162;
i__21142_21146 = G__21163;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21164){
var content = cljs.core.first(arglist__21164);
arglist__21164 = cljs.core.next(arglist__21164);
var name = cljs.core.first(arglist__21164);
var value = cljs.core.rest(arglist__21164);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21169_21173 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21170_21174 = null;var count__21171_21175 = (0);var i__21172_21176 = (0);while(true){
if((i__21172_21176 < count__21171_21175))
{var n_21177 = cljs.core._nth.call(null,chunk__21170_21174,i__21172_21176);n_21177.removeAttribute(cljs.core.name.call(null,name));
{
var G__21178 = seq__21169_21173;
var G__21179 = chunk__21170_21174;
var G__21180 = count__21171_21175;
var G__21181 = (i__21172_21176 + (1));
seq__21169_21173 = G__21178;
chunk__21170_21174 = G__21179;
count__21171_21175 = G__21180;
i__21172_21176 = G__21181;
continue;
}
} else
{var temp__4126__auto___21182 = cljs.core.seq.call(null,seq__21169_21173);if(temp__4126__auto___21182)
{var seq__21169_21183__$1 = temp__4126__auto___21182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21169_21183__$1))
{var c__4408__auto___21184 = cljs.core.chunk_first.call(null,seq__21169_21183__$1);{
var G__21185 = cljs.core.chunk_rest.call(null,seq__21169_21183__$1);
var G__21186 = c__4408__auto___21184;
var G__21187 = cljs.core.count.call(null,c__4408__auto___21184);
var G__21188 = (0);
seq__21169_21173 = G__21185;
chunk__21170_21174 = G__21186;
count__21171_21175 = G__21187;
i__21172_21176 = G__21188;
continue;
}
} else
{var n_21189 = cljs.core.first.call(null,seq__21169_21183__$1);n_21189.removeAttribute(cljs.core.name.call(null,name));
{
var G__21190 = cljs.core.next.call(null,seq__21169_21183__$1);
var G__21191 = null;
var G__21192 = (0);
var G__21193 = (0);
seq__21169_21173 = G__21190;
chunk__21170_21174 = G__21191;
count__21171_21175 = G__21192;
i__21172_21176 = G__21193;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21195 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21195,(0),null);var v = cljs.core.nth.call(null,vec__21195,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21196_SHARP_){var attr = attrs__$1.item(p1__21196_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21203_21209 = cljs.core.seq.call(null,styles);var chunk__21204_21210 = null;var count__21205_21211 = (0);var i__21206_21212 = (0);while(true){
if((i__21206_21212 < count__21205_21211))
{var vec__21207_21213 = cljs.core._nth.call(null,chunk__21204_21210,i__21206_21212);var name_21214 = cljs.core.nth.call(null,vec__21207_21213,(0),null);var value_21215 = cljs.core.nth.call(null,vec__21207_21213,(1),null);domina.set_style_BANG_.call(null,content,name_21214,value_21215);
{
var G__21216 = seq__21203_21209;
var G__21217 = chunk__21204_21210;
var G__21218 = count__21205_21211;
var G__21219 = (i__21206_21212 + (1));
seq__21203_21209 = G__21216;
chunk__21204_21210 = G__21217;
count__21205_21211 = G__21218;
i__21206_21212 = G__21219;
continue;
}
} else
{var temp__4126__auto___21220 = cljs.core.seq.call(null,seq__21203_21209);if(temp__4126__auto___21220)
{var seq__21203_21221__$1 = temp__4126__auto___21220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21203_21221__$1))
{var c__4408__auto___21222 = cljs.core.chunk_first.call(null,seq__21203_21221__$1);{
var G__21223 = cljs.core.chunk_rest.call(null,seq__21203_21221__$1);
var G__21224 = c__4408__auto___21222;
var G__21225 = cljs.core.count.call(null,c__4408__auto___21222);
var G__21226 = (0);
seq__21203_21209 = G__21223;
chunk__21204_21210 = G__21224;
count__21205_21211 = G__21225;
i__21206_21212 = G__21226;
continue;
}
} else
{var vec__21208_21227 = cljs.core.first.call(null,seq__21203_21221__$1);var name_21228 = cljs.core.nth.call(null,vec__21208_21227,(0),null);var value_21229 = cljs.core.nth.call(null,vec__21208_21227,(1),null);domina.set_style_BANG_.call(null,content,name_21228,value_21229);
{
var G__21230 = cljs.core.next.call(null,seq__21203_21221__$1);
var G__21231 = null;
var G__21232 = (0);
var G__21233 = (0);
seq__21203_21209 = G__21230;
chunk__21204_21210 = G__21231;
count__21205_21211 = G__21232;
i__21206_21212 = G__21233;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21240_21246 = cljs.core.seq.call(null,attrs);var chunk__21241_21247 = null;var count__21242_21248 = (0);var i__21243_21249 = (0);while(true){
if((i__21243_21249 < count__21242_21248))
{var vec__21244_21250 = cljs.core._nth.call(null,chunk__21241_21247,i__21243_21249);var name_21251 = cljs.core.nth.call(null,vec__21244_21250,(0),null);var value_21252 = cljs.core.nth.call(null,vec__21244_21250,(1),null);domina.set_attr_BANG_.call(null,content,name_21251,value_21252);
{
var G__21253 = seq__21240_21246;
var G__21254 = chunk__21241_21247;
var G__21255 = count__21242_21248;
var G__21256 = (i__21243_21249 + (1));
seq__21240_21246 = G__21253;
chunk__21241_21247 = G__21254;
count__21242_21248 = G__21255;
i__21243_21249 = G__21256;
continue;
}
} else
{var temp__4126__auto___21257 = cljs.core.seq.call(null,seq__21240_21246);if(temp__4126__auto___21257)
{var seq__21240_21258__$1 = temp__4126__auto___21257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21240_21258__$1))
{var c__4408__auto___21259 = cljs.core.chunk_first.call(null,seq__21240_21258__$1);{
var G__21260 = cljs.core.chunk_rest.call(null,seq__21240_21258__$1);
var G__21261 = c__4408__auto___21259;
var G__21262 = cljs.core.count.call(null,c__4408__auto___21259);
var G__21263 = (0);
seq__21240_21246 = G__21260;
chunk__21241_21247 = G__21261;
count__21242_21248 = G__21262;
i__21243_21249 = G__21263;
continue;
}
} else
{var vec__21245_21264 = cljs.core.first.call(null,seq__21240_21258__$1);var name_21265 = cljs.core.nth.call(null,vec__21245_21264,(0),null);var value_21266 = cljs.core.nth.call(null,vec__21245_21264,(1),null);domina.set_attr_BANG_.call(null,content,name_21265,value_21266);
{
var G__21267 = cljs.core.next.call(null,seq__21240_21258__$1);
var G__21268 = null;
var G__21269 = (0);
var G__21270 = (0);
seq__21240_21246 = G__21267;
chunk__21241_21247 = G__21268;
count__21242_21248 = G__21269;
i__21243_21249 = G__21270;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21275_21279 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21276_21280 = null;var count__21277_21281 = (0);var i__21278_21282 = (0);while(true){
if((i__21278_21282 < count__21277_21281))
{var node_21283 = cljs.core._nth.call(null,chunk__21276_21280,i__21278_21282);goog.dom.classes.add(node_21283,class$);
{
var G__21284 = seq__21275_21279;
var G__21285 = chunk__21276_21280;
var G__21286 = count__21277_21281;
var G__21287 = (i__21278_21282 + (1));
seq__21275_21279 = G__21284;
chunk__21276_21280 = G__21285;
count__21277_21281 = G__21286;
i__21278_21282 = G__21287;
continue;
}
} else
{var temp__4126__auto___21288 = cljs.core.seq.call(null,seq__21275_21279);if(temp__4126__auto___21288)
{var seq__21275_21289__$1 = temp__4126__auto___21288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21275_21289__$1))
{var c__4408__auto___21290 = cljs.core.chunk_first.call(null,seq__21275_21289__$1);{
var G__21291 = cljs.core.chunk_rest.call(null,seq__21275_21289__$1);
var G__21292 = c__4408__auto___21290;
var G__21293 = cljs.core.count.call(null,c__4408__auto___21290);
var G__21294 = (0);
seq__21275_21279 = G__21291;
chunk__21276_21280 = G__21292;
count__21277_21281 = G__21293;
i__21278_21282 = G__21294;
continue;
}
} else
{var node_21295 = cljs.core.first.call(null,seq__21275_21289__$1);goog.dom.classes.add(node_21295,class$);
{
var G__21296 = cljs.core.next.call(null,seq__21275_21289__$1);
var G__21297 = null;
var G__21298 = (0);
var G__21299 = (0);
seq__21275_21279 = G__21296;
chunk__21276_21280 = G__21297;
count__21277_21281 = G__21298;
i__21278_21282 = G__21299;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21304_21308 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21305_21309 = null;var count__21306_21310 = (0);var i__21307_21311 = (0);while(true){
if((i__21307_21311 < count__21306_21310))
{var node_21312 = cljs.core._nth.call(null,chunk__21305_21309,i__21307_21311);goog.dom.classes.remove(node_21312,class$);
{
var G__21313 = seq__21304_21308;
var G__21314 = chunk__21305_21309;
var G__21315 = count__21306_21310;
var G__21316 = (i__21307_21311 + (1));
seq__21304_21308 = G__21313;
chunk__21305_21309 = G__21314;
count__21306_21310 = G__21315;
i__21307_21311 = G__21316;
continue;
}
} else
{var temp__4126__auto___21317 = cljs.core.seq.call(null,seq__21304_21308);if(temp__4126__auto___21317)
{var seq__21304_21318__$1 = temp__4126__auto___21317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21304_21318__$1))
{var c__4408__auto___21319 = cljs.core.chunk_first.call(null,seq__21304_21318__$1);{
var G__21320 = cljs.core.chunk_rest.call(null,seq__21304_21318__$1);
var G__21321 = c__4408__auto___21319;
var G__21322 = cljs.core.count.call(null,c__4408__auto___21319);
var G__21323 = (0);
seq__21304_21308 = G__21320;
chunk__21305_21309 = G__21321;
count__21306_21310 = G__21322;
i__21307_21311 = G__21323;
continue;
}
} else
{var node_21324 = cljs.core.first.call(null,seq__21304_21318__$1);goog.dom.classes.remove(node_21324,class$);
{
var G__21325 = cljs.core.next.call(null,seq__21304_21318__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__21304_21308 = G__21325;
chunk__21305_21309 = G__21326;
count__21306_21310 = G__21327;
i__21307_21311 = G__21328;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21333_21337 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21334_21338 = null;var count__21335_21339 = (0);var i__21336_21340 = (0);while(true){
if((i__21336_21340 < count__21335_21339))
{var node_21341 = cljs.core._nth.call(null,chunk__21334_21338,i__21336_21340);goog.dom.classes.toggle(node_21341,class$);
{
var G__21342 = seq__21333_21337;
var G__21343 = chunk__21334_21338;
var G__21344 = count__21335_21339;
var G__21345 = (i__21336_21340 + (1));
seq__21333_21337 = G__21342;
chunk__21334_21338 = G__21343;
count__21335_21339 = G__21344;
i__21336_21340 = G__21345;
continue;
}
} else
{var temp__4126__auto___21346 = cljs.core.seq.call(null,seq__21333_21337);if(temp__4126__auto___21346)
{var seq__21333_21347__$1 = temp__4126__auto___21346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21333_21347__$1))
{var c__4408__auto___21348 = cljs.core.chunk_first.call(null,seq__21333_21347__$1);{
var G__21349 = cljs.core.chunk_rest.call(null,seq__21333_21347__$1);
var G__21350 = c__4408__auto___21348;
var G__21351 = cljs.core.count.call(null,c__4408__auto___21348);
var G__21352 = (0);
seq__21333_21337 = G__21349;
chunk__21334_21338 = G__21350;
count__21335_21339 = G__21351;
i__21336_21340 = G__21352;
continue;
}
} else
{var node_21353 = cljs.core.first.call(null,seq__21333_21347__$1);goog.dom.classes.toggle(node_21353,class$);
{
var G__21354 = cljs.core.next.call(null,seq__21333_21347__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__21333_21337 = G__21354;
chunk__21334_21338 = G__21355;
count__21335_21339 = G__21356;
i__21336_21340 = G__21357;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21366__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21362_21367 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21363_21368 = null;var count__21364_21369 = (0);var i__21365_21370 = (0);while(true){
if((i__21365_21370 < count__21364_21369))
{var node_21371 = cljs.core._nth.call(null,chunk__21363_21368,i__21365_21370);goog.dom.classes.set(node_21371,classes_21366__$1);
{
var G__21372 = seq__21362_21367;
var G__21373 = chunk__21363_21368;
var G__21374 = count__21364_21369;
var G__21375 = (i__21365_21370 + (1));
seq__21362_21367 = G__21372;
chunk__21363_21368 = G__21373;
count__21364_21369 = G__21374;
i__21365_21370 = G__21375;
continue;
}
} else
{var temp__4126__auto___21376 = cljs.core.seq.call(null,seq__21362_21367);if(temp__4126__auto___21376)
{var seq__21362_21377__$1 = temp__4126__auto___21376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21362_21377__$1))
{var c__4408__auto___21378 = cljs.core.chunk_first.call(null,seq__21362_21377__$1);{
var G__21379 = cljs.core.chunk_rest.call(null,seq__21362_21377__$1);
var G__21380 = c__4408__auto___21378;
var G__21381 = cljs.core.count.call(null,c__4408__auto___21378);
var G__21382 = (0);
seq__21362_21367 = G__21379;
chunk__21363_21368 = G__21380;
count__21364_21369 = G__21381;
i__21365_21370 = G__21382;
continue;
}
} else
{var node_21383 = cljs.core.first.call(null,seq__21362_21377__$1);goog.dom.classes.set(node_21383,classes_21366__$1);
{
var G__21384 = cljs.core.next.call(null,seq__21362_21377__$1);
var G__21385 = null;
var G__21386 = (0);
var G__21387 = (0);
seq__21362_21367 = G__21384;
chunk__21363_21368 = G__21385;
count__21364_21369 = G__21386;
i__21365_21370 = G__21387;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21392_21396 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21393_21397 = null;var count__21394_21398 = (0);var i__21395_21399 = (0);while(true){
if((i__21395_21399 < count__21394_21398))
{var node_21400 = cljs.core._nth.call(null,chunk__21393_21397,i__21395_21399);goog.dom.setTextContent(node_21400,value);
{
var G__21401 = seq__21392_21396;
var G__21402 = chunk__21393_21397;
var G__21403 = count__21394_21398;
var G__21404 = (i__21395_21399 + (1));
seq__21392_21396 = G__21401;
chunk__21393_21397 = G__21402;
count__21394_21398 = G__21403;
i__21395_21399 = G__21404;
continue;
}
} else
{var temp__4126__auto___21405 = cljs.core.seq.call(null,seq__21392_21396);if(temp__4126__auto___21405)
{var seq__21392_21406__$1 = temp__4126__auto___21405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21392_21406__$1))
{var c__4408__auto___21407 = cljs.core.chunk_first.call(null,seq__21392_21406__$1);{
var G__21408 = cljs.core.chunk_rest.call(null,seq__21392_21406__$1);
var G__21409 = c__4408__auto___21407;
var G__21410 = cljs.core.count.call(null,c__4408__auto___21407);
var G__21411 = (0);
seq__21392_21396 = G__21408;
chunk__21393_21397 = G__21409;
count__21394_21398 = G__21410;
i__21395_21399 = G__21411;
continue;
}
} else
{var node_21412 = cljs.core.first.call(null,seq__21392_21406__$1);goog.dom.setTextContent(node_21412,value);
{
var G__21413 = cljs.core.next.call(null,seq__21392_21406__$1);
var G__21414 = null;
var G__21415 = (0);
var G__21416 = (0);
seq__21392_21396 = G__21413;
chunk__21393_21397 = G__21414;
count__21394_21398 = G__21415;
i__21395_21399 = G__21416;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21421_21425 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21422_21426 = null;var count__21423_21427 = (0);var i__21424_21428 = (0);while(true){
if((i__21424_21428 < count__21423_21427))
{var node_21429 = cljs.core._nth.call(null,chunk__21422_21426,i__21424_21428);goog.dom.forms.setValue(node_21429,value);
{
var G__21430 = seq__21421_21425;
var G__21431 = chunk__21422_21426;
var G__21432 = count__21423_21427;
var G__21433 = (i__21424_21428 + (1));
seq__21421_21425 = G__21430;
chunk__21422_21426 = G__21431;
count__21423_21427 = G__21432;
i__21424_21428 = G__21433;
continue;
}
} else
{var temp__4126__auto___21434 = cljs.core.seq.call(null,seq__21421_21425);if(temp__4126__auto___21434)
{var seq__21421_21435__$1 = temp__4126__auto___21434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21421_21435__$1))
{var c__4408__auto___21436 = cljs.core.chunk_first.call(null,seq__21421_21435__$1);{
var G__21437 = cljs.core.chunk_rest.call(null,seq__21421_21435__$1);
var G__21438 = c__4408__auto___21436;
var G__21439 = cljs.core.count.call(null,c__4408__auto___21436);
var G__21440 = (0);
seq__21421_21425 = G__21437;
chunk__21422_21426 = G__21438;
count__21423_21427 = G__21439;
i__21424_21428 = G__21440;
continue;
}
} else
{var node_21441 = cljs.core.first.call(null,seq__21421_21435__$1);goog.dom.forms.setValue(node_21441,value);
{
var G__21442 = cljs.core.next.call(null,seq__21421_21435__$1);
var G__21443 = null;
var G__21444 = (0);
var G__21445 = (0);
seq__21421_21425 = G__21442;
chunk__21422_21426 = G__21443;
count__21423_21427 = G__21444;
i__21424_21428 = G__21445;
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
{var value_21456 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21452_21457 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21453_21458 = null;var count__21454_21459 = (0);var i__21455_21460 = (0);while(true){
if((i__21455_21460 < count__21454_21459))
{var node_21461 = cljs.core._nth.call(null,chunk__21453_21458,i__21455_21460);node_21461.innerHTML = value_21456;
{
var G__21462 = seq__21452_21457;
var G__21463 = chunk__21453_21458;
var G__21464 = count__21454_21459;
var G__21465 = (i__21455_21460 + (1));
seq__21452_21457 = G__21462;
chunk__21453_21458 = G__21463;
count__21454_21459 = G__21464;
i__21455_21460 = G__21465;
continue;
}
} else
{var temp__4126__auto___21466 = cljs.core.seq.call(null,seq__21452_21457);if(temp__4126__auto___21466)
{var seq__21452_21467__$1 = temp__4126__auto___21466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21452_21467__$1))
{var c__4408__auto___21468 = cljs.core.chunk_first.call(null,seq__21452_21467__$1);{
var G__21469 = cljs.core.chunk_rest.call(null,seq__21452_21467__$1);
var G__21470 = c__4408__auto___21468;
var G__21471 = cljs.core.count.call(null,c__4408__auto___21468);
var G__21472 = (0);
seq__21452_21457 = G__21469;
chunk__21453_21458 = G__21470;
count__21454_21459 = G__21471;
i__21455_21460 = G__21472;
continue;
}
} else
{var node_21473 = cljs.core.first.call(null,seq__21452_21467__$1);node_21473.innerHTML = value_21456;
{
var G__21474 = cljs.core.next.call(null,seq__21452_21467__$1);
var G__21475 = null;
var G__21476 = (0);
var G__21477 = (0);
seq__21452_21457 = G__21474;
chunk__21453_21458 = G__21475;
count__21454_21459 = G__21476;
i__21455_21460 = G__21477;
continue;
}
}
} else
{}
}
break;
}
}catch (e21451){if((e21451 instanceof Error))
{var e_21478 = e21451;domina.replace_children_BANG_.call(null,content,value_21456);
} else
{throw e21451;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21485_21489 = cljs.core.seq.call(null,children);var chunk__21486_21490 = null;var count__21487_21491 = (0);var i__21488_21492 = (0);while(true){
if((i__21488_21492 < count__21487_21491))
{var child_21493 = cljs.core._nth.call(null,chunk__21486_21490,i__21488_21492);frag.appendChild(child_21493);
{
var G__21494 = seq__21485_21489;
var G__21495 = chunk__21486_21490;
var G__21496 = count__21487_21491;
var G__21497 = (i__21488_21492 + (1));
seq__21485_21489 = G__21494;
chunk__21486_21490 = G__21495;
count__21487_21491 = G__21496;
i__21488_21492 = G__21497;
continue;
}
} else
{var temp__4126__auto___21498 = cljs.core.seq.call(null,seq__21485_21489);if(temp__4126__auto___21498)
{var seq__21485_21499__$1 = temp__4126__auto___21498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21485_21499__$1))
{var c__4408__auto___21500 = cljs.core.chunk_first.call(null,seq__21485_21499__$1);{
var G__21501 = cljs.core.chunk_rest.call(null,seq__21485_21499__$1);
var G__21502 = c__4408__auto___21500;
var G__21503 = cljs.core.count.call(null,c__4408__auto___21500);
var G__21504 = (0);
seq__21485_21489 = G__21501;
chunk__21486_21490 = G__21502;
count__21487_21491 = G__21503;
i__21488_21492 = G__21504;
continue;
}
} else
{var child_21505 = cljs.core.first.call(null,seq__21485_21499__$1);frag.appendChild(child_21505);
{
var G__21506 = cljs.core.next.call(null,seq__21485_21499__$1);
var G__21507 = null;
var G__21508 = (0);
var G__21509 = (0);
seq__21485_21489 = G__21506;
chunk__21486_21490 = G__21507;
count__21487_21491 = G__21508;
i__21488_21492 = G__21509;
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
return (function (p1__21479_SHARP_,p2__21480_SHARP_){return f.call(null,p1__21479_SHARP_,p2__21480_SHARP_);
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
{if((function (){var G__21511 = list_thing;if(G__21511)
{var bit__4302__auto__ = (G__21511.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21511.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21511);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21511);
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
{if((function (){var G__21512 = content;if(G__21512)
{var bit__4302__auto__ = (G__21512.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21512.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21512.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21512);
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
{if((function (){var G__21513 = content;if(G__21513)
{var bit__4302__auto__ = (G__21513.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21513.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21513.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21513);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21513);
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
