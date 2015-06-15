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
var opt_wrapper_21078 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21079 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21080,opt_wrapper_21078,table_section_wrapper_21079,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21078,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21079,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21079,cell_wrapper_21080,table_section_wrapper_21079,table_section_wrapper_21079]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21085 = cljs.core.seq.call(null,tbody);var chunk__21086 = null;var count__21087 = (0);var i__21088 = (0);while(true){
if((i__21088 < count__21087))
{var child = cljs.core._nth.call(null,chunk__21086,i__21088);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21089 = seq__21085;
var G__21090 = chunk__21086;
var G__21091 = count__21087;
var G__21092 = (i__21088 + (1));
seq__21085 = G__21089;
chunk__21086 = G__21090;
count__21087 = G__21091;
i__21088 = G__21092;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21085);if(temp__4126__auto__)
{var seq__21085__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21085__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21085__$1);{
var G__21093 = cljs.core.chunk_rest.call(null,seq__21085__$1);
var G__21094 = c__4408__auto__;
var G__21095 = cljs.core.count.call(null,c__4408__auto__);
var G__21096 = (0);
seq__21085 = G__21093;
chunk__21086 = G__21094;
count__21087 = G__21095;
i__21088 = G__21096;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21085__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21097 = cljs.core.next.call(null,seq__21085__$1);
var G__21098 = null;
var G__21099 = (0);
var G__21100 = (0);
seq__21085 = G__21097;
chunk__21086 = G__21098;
count__21087 = G__21099;
i__21088 = G__21100;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21102 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21102,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21102,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21102,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21103 = wrapper.lastChild;
var G__21104 = (level - (1));
wrapper = G__21103;
level = G__21104;
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
domina.DomContent = (function (){var obj21106 = {};return obj21106;
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
log_debug.cljs$lang$applyTo = (function (arglist__21107){
var mesg = cljs.core.seq(arglist__21107);
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
log.cljs$lang$applyTo = (function (arglist__21108){
var mesg = cljs.core.seq(arglist__21108);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21109){
var contents = cljs.core.seq(arglist__21109);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21110_SHARP_){return p1__21110_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21111_SHARP_,p2__21112_SHARP_){return goog.dom.insertChildAt(p1__21111_SHARP_,p2__21112_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21114_SHARP_,p2__21113_SHARP_){return goog.dom.insertSiblingBefore(p2__21113_SHARP_,p1__21114_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21116_SHARP_,p2__21115_SHARP_){return goog.dom.insertSiblingAfter(p2__21115_SHARP_,p1__21116_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21118_SHARP_,p2__21117_SHARP_){return goog.dom.replaceNode(p2__21117_SHARP_,p1__21118_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21123_21127 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21124_21128 = null;var count__21125_21129 = (0);var i__21126_21130 = (0);while(true){
if((i__21126_21130 < count__21125_21129))
{var n_21131 = cljs.core._nth.call(null,chunk__21124_21128,i__21126_21130);goog.style.setStyle(n_21131,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21132 = seq__21123_21127;
var G__21133 = chunk__21124_21128;
var G__21134 = count__21125_21129;
var G__21135 = (i__21126_21130 + (1));
seq__21123_21127 = G__21132;
chunk__21124_21128 = G__21133;
count__21125_21129 = G__21134;
i__21126_21130 = G__21135;
continue;
}
} else
{var temp__4126__auto___21136 = cljs.core.seq.call(null,seq__21123_21127);if(temp__4126__auto___21136)
{var seq__21123_21137__$1 = temp__4126__auto___21136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21123_21137__$1))
{var c__4408__auto___21138 = cljs.core.chunk_first.call(null,seq__21123_21137__$1);{
var G__21139 = cljs.core.chunk_rest.call(null,seq__21123_21137__$1);
var G__21140 = c__4408__auto___21138;
var G__21141 = cljs.core.count.call(null,c__4408__auto___21138);
var G__21142 = (0);
seq__21123_21127 = G__21139;
chunk__21124_21128 = G__21140;
count__21125_21129 = G__21141;
i__21126_21130 = G__21142;
continue;
}
} else
{var n_21143 = cljs.core.first.call(null,seq__21123_21137__$1);goog.style.setStyle(n_21143,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21144 = cljs.core.next.call(null,seq__21123_21137__$1);
var G__21145 = null;
var G__21146 = (0);
var G__21147 = (0);
seq__21123_21127 = G__21144;
chunk__21124_21128 = G__21145;
count__21125_21129 = G__21146;
i__21126_21130 = G__21147;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21148){
var content = cljs.core.first(arglist__21148);
arglist__21148 = cljs.core.next(arglist__21148);
var name = cljs.core.first(arglist__21148);
var value = cljs.core.rest(arglist__21148);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21153_21157 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21154_21158 = null;var count__21155_21159 = (0);var i__21156_21160 = (0);while(true){
if((i__21156_21160 < count__21155_21159))
{var n_21161 = cljs.core._nth.call(null,chunk__21154_21158,i__21156_21160);n_21161.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21162 = seq__21153_21157;
var G__21163 = chunk__21154_21158;
var G__21164 = count__21155_21159;
var G__21165 = (i__21156_21160 + (1));
seq__21153_21157 = G__21162;
chunk__21154_21158 = G__21163;
count__21155_21159 = G__21164;
i__21156_21160 = G__21165;
continue;
}
} else
{var temp__4126__auto___21166 = cljs.core.seq.call(null,seq__21153_21157);if(temp__4126__auto___21166)
{var seq__21153_21167__$1 = temp__4126__auto___21166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21153_21167__$1))
{var c__4408__auto___21168 = cljs.core.chunk_first.call(null,seq__21153_21167__$1);{
var G__21169 = cljs.core.chunk_rest.call(null,seq__21153_21167__$1);
var G__21170 = c__4408__auto___21168;
var G__21171 = cljs.core.count.call(null,c__4408__auto___21168);
var G__21172 = (0);
seq__21153_21157 = G__21169;
chunk__21154_21158 = G__21170;
count__21155_21159 = G__21171;
i__21156_21160 = G__21172;
continue;
}
} else
{var n_21173 = cljs.core.first.call(null,seq__21153_21167__$1);n_21173.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21174 = cljs.core.next.call(null,seq__21153_21167__$1);
var G__21175 = null;
var G__21176 = (0);
var G__21177 = (0);
seq__21153_21157 = G__21174;
chunk__21154_21158 = G__21175;
count__21155_21159 = G__21176;
i__21156_21160 = G__21177;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21178){
var content = cljs.core.first(arglist__21178);
arglist__21178 = cljs.core.next(arglist__21178);
var name = cljs.core.first(arglist__21178);
var value = cljs.core.rest(arglist__21178);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21183_21187 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21184_21188 = null;var count__21185_21189 = (0);var i__21186_21190 = (0);while(true){
if((i__21186_21190 < count__21185_21189))
{var n_21191 = cljs.core._nth.call(null,chunk__21184_21188,i__21186_21190);n_21191.removeAttribute(cljs.core.name.call(null,name));
{
var G__21192 = seq__21183_21187;
var G__21193 = chunk__21184_21188;
var G__21194 = count__21185_21189;
var G__21195 = (i__21186_21190 + (1));
seq__21183_21187 = G__21192;
chunk__21184_21188 = G__21193;
count__21185_21189 = G__21194;
i__21186_21190 = G__21195;
continue;
}
} else
{var temp__4126__auto___21196 = cljs.core.seq.call(null,seq__21183_21187);if(temp__4126__auto___21196)
{var seq__21183_21197__$1 = temp__4126__auto___21196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21183_21197__$1))
{var c__4408__auto___21198 = cljs.core.chunk_first.call(null,seq__21183_21197__$1);{
var G__21199 = cljs.core.chunk_rest.call(null,seq__21183_21197__$1);
var G__21200 = c__4408__auto___21198;
var G__21201 = cljs.core.count.call(null,c__4408__auto___21198);
var G__21202 = (0);
seq__21183_21187 = G__21199;
chunk__21184_21188 = G__21200;
count__21185_21189 = G__21201;
i__21186_21190 = G__21202;
continue;
}
} else
{var n_21203 = cljs.core.first.call(null,seq__21183_21197__$1);n_21203.removeAttribute(cljs.core.name.call(null,name));
{
var G__21204 = cljs.core.next.call(null,seq__21183_21197__$1);
var G__21205 = null;
var G__21206 = (0);
var G__21207 = (0);
seq__21183_21187 = G__21204;
chunk__21184_21188 = G__21205;
count__21185_21189 = G__21206;
i__21186_21190 = G__21207;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21209 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21209,(0),null);var v = cljs.core.nth.call(null,vec__21209,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21210_SHARP_){var attr = attrs__$1.item(p1__21210_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21217_21223 = cljs.core.seq.call(null,styles);var chunk__21218_21224 = null;var count__21219_21225 = (0);var i__21220_21226 = (0);while(true){
if((i__21220_21226 < count__21219_21225))
{var vec__21221_21227 = cljs.core._nth.call(null,chunk__21218_21224,i__21220_21226);var name_21228 = cljs.core.nth.call(null,vec__21221_21227,(0),null);var value_21229 = cljs.core.nth.call(null,vec__21221_21227,(1),null);domina.set_style_BANG_.call(null,content,name_21228,value_21229);
{
var G__21230 = seq__21217_21223;
var G__21231 = chunk__21218_21224;
var G__21232 = count__21219_21225;
var G__21233 = (i__21220_21226 + (1));
seq__21217_21223 = G__21230;
chunk__21218_21224 = G__21231;
count__21219_21225 = G__21232;
i__21220_21226 = G__21233;
continue;
}
} else
{var temp__4126__auto___21234 = cljs.core.seq.call(null,seq__21217_21223);if(temp__4126__auto___21234)
{var seq__21217_21235__$1 = temp__4126__auto___21234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21217_21235__$1))
{var c__4408__auto___21236 = cljs.core.chunk_first.call(null,seq__21217_21235__$1);{
var G__21237 = cljs.core.chunk_rest.call(null,seq__21217_21235__$1);
var G__21238 = c__4408__auto___21236;
var G__21239 = cljs.core.count.call(null,c__4408__auto___21236);
var G__21240 = (0);
seq__21217_21223 = G__21237;
chunk__21218_21224 = G__21238;
count__21219_21225 = G__21239;
i__21220_21226 = G__21240;
continue;
}
} else
{var vec__21222_21241 = cljs.core.first.call(null,seq__21217_21235__$1);var name_21242 = cljs.core.nth.call(null,vec__21222_21241,(0),null);var value_21243 = cljs.core.nth.call(null,vec__21222_21241,(1),null);domina.set_style_BANG_.call(null,content,name_21242,value_21243);
{
var G__21244 = cljs.core.next.call(null,seq__21217_21235__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__21217_21223 = G__21244;
chunk__21218_21224 = G__21245;
count__21219_21225 = G__21246;
i__21220_21226 = G__21247;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21254_21260 = cljs.core.seq.call(null,attrs);var chunk__21255_21261 = null;var count__21256_21262 = (0);var i__21257_21263 = (0);while(true){
if((i__21257_21263 < count__21256_21262))
{var vec__21258_21264 = cljs.core._nth.call(null,chunk__21255_21261,i__21257_21263);var name_21265 = cljs.core.nth.call(null,vec__21258_21264,(0),null);var value_21266 = cljs.core.nth.call(null,vec__21258_21264,(1),null);domina.set_attr_BANG_.call(null,content,name_21265,value_21266);
{
var G__21267 = seq__21254_21260;
var G__21268 = chunk__21255_21261;
var G__21269 = count__21256_21262;
var G__21270 = (i__21257_21263 + (1));
seq__21254_21260 = G__21267;
chunk__21255_21261 = G__21268;
count__21256_21262 = G__21269;
i__21257_21263 = G__21270;
continue;
}
} else
{var temp__4126__auto___21271 = cljs.core.seq.call(null,seq__21254_21260);if(temp__4126__auto___21271)
{var seq__21254_21272__$1 = temp__4126__auto___21271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21254_21272__$1))
{var c__4408__auto___21273 = cljs.core.chunk_first.call(null,seq__21254_21272__$1);{
var G__21274 = cljs.core.chunk_rest.call(null,seq__21254_21272__$1);
var G__21275 = c__4408__auto___21273;
var G__21276 = cljs.core.count.call(null,c__4408__auto___21273);
var G__21277 = (0);
seq__21254_21260 = G__21274;
chunk__21255_21261 = G__21275;
count__21256_21262 = G__21276;
i__21257_21263 = G__21277;
continue;
}
} else
{var vec__21259_21278 = cljs.core.first.call(null,seq__21254_21272__$1);var name_21279 = cljs.core.nth.call(null,vec__21259_21278,(0),null);var value_21280 = cljs.core.nth.call(null,vec__21259_21278,(1),null);domina.set_attr_BANG_.call(null,content,name_21279,value_21280);
{
var G__21281 = cljs.core.next.call(null,seq__21254_21272__$1);
var G__21282 = null;
var G__21283 = (0);
var G__21284 = (0);
seq__21254_21260 = G__21281;
chunk__21255_21261 = G__21282;
count__21256_21262 = G__21283;
i__21257_21263 = G__21284;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21289_21293 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21290_21294 = null;var count__21291_21295 = (0);var i__21292_21296 = (0);while(true){
if((i__21292_21296 < count__21291_21295))
{var node_21297 = cljs.core._nth.call(null,chunk__21290_21294,i__21292_21296);goog.dom.classes.add(node_21297,class$);
{
var G__21298 = seq__21289_21293;
var G__21299 = chunk__21290_21294;
var G__21300 = count__21291_21295;
var G__21301 = (i__21292_21296 + (1));
seq__21289_21293 = G__21298;
chunk__21290_21294 = G__21299;
count__21291_21295 = G__21300;
i__21292_21296 = G__21301;
continue;
}
} else
{var temp__4126__auto___21302 = cljs.core.seq.call(null,seq__21289_21293);if(temp__4126__auto___21302)
{var seq__21289_21303__$1 = temp__4126__auto___21302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21289_21303__$1))
{var c__4408__auto___21304 = cljs.core.chunk_first.call(null,seq__21289_21303__$1);{
var G__21305 = cljs.core.chunk_rest.call(null,seq__21289_21303__$1);
var G__21306 = c__4408__auto___21304;
var G__21307 = cljs.core.count.call(null,c__4408__auto___21304);
var G__21308 = (0);
seq__21289_21293 = G__21305;
chunk__21290_21294 = G__21306;
count__21291_21295 = G__21307;
i__21292_21296 = G__21308;
continue;
}
} else
{var node_21309 = cljs.core.first.call(null,seq__21289_21303__$1);goog.dom.classes.add(node_21309,class$);
{
var G__21310 = cljs.core.next.call(null,seq__21289_21303__$1);
var G__21311 = null;
var G__21312 = (0);
var G__21313 = (0);
seq__21289_21293 = G__21310;
chunk__21290_21294 = G__21311;
count__21291_21295 = G__21312;
i__21292_21296 = G__21313;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21318_21322 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21319_21323 = null;var count__21320_21324 = (0);var i__21321_21325 = (0);while(true){
if((i__21321_21325 < count__21320_21324))
{var node_21326 = cljs.core._nth.call(null,chunk__21319_21323,i__21321_21325);goog.dom.classes.remove(node_21326,class$);
{
var G__21327 = seq__21318_21322;
var G__21328 = chunk__21319_21323;
var G__21329 = count__21320_21324;
var G__21330 = (i__21321_21325 + (1));
seq__21318_21322 = G__21327;
chunk__21319_21323 = G__21328;
count__21320_21324 = G__21329;
i__21321_21325 = G__21330;
continue;
}
} else
{var temp__4126__auto___21331 = cljs.core.seq.call(null,seq__21318_21322);if(temp__4126__auto___21331)
{var seq__21318_21332__$1 = temp__4126__auto___21331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21318_21332__$1))
{var c__4408__auto___21333 = cljs.core.chunk_first.call(null,seq__21318_21332__$1);{
var G__21334 = cljs.core.chunk_rest.call(null,seq__21318_21332__$1);
var G__21335 = c__4408__auto___21333;
var G__21336 = cljs.core.count.call(null,c__4408__auto___21333);
var G__21337 = (0);
seq__21318_21322 = G__21334;
chunk__21319_21323 = G__21335;
count__21320_21324 = G__21336;
i__21321_21325 = G__21337;
continue;
}
} else
{var node_21338 = cljs.core.first.call(null,seq__21318_21332__$1);goog.dom.classes.remove(node_21338,class$);
{
var G__21339 = cljs.core.next.call(null,seq__21318_21332__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__21318_21322 = G__21339;
chunk__21319_21323 = G__21340;
count__21320_21324 = G__21341;
i__21321_21325 = G__21342;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21347_21351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21348_21352 = null;var count__21349_21353 = (0);var i__21350_21354 = (0);while(true){
if((i__21350_21354 < count__21349_21353))
{var node_21355 = cljs.core._nth.call(null,chunk__21348_21352,i__21350_21354);goog.dom.classes.toggle(node_21355,class$);
{
var G__21356 = seq__21347_21351;
var G__21357 = chunk__21348_21352;
var G__21358 = count__21349_21353;
var G__21359 = (i__21350_21354 + (1));
seq__21347_21351 = G__21356;
chunk__21348_21352 = G__21357;
count__21349_21353 = G__21358;
i__21350_21354 = G__21359;
continue;
}
} else
{var temp__4126__auto___21360 = cljs.core.seq.call(null,seq__21347_21351);if(temp__4126__auto___21360)
{var seq__21347_21361__$1 = temp__4126__auto___21360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21347_21361__$1))
{var c__4408__auto___21362 = cljs.core.chunk_first.call(null,seq__21347_21361__$1);{
var G__21363 = cljs.core.chunk_rest.call(null,seq__21347_21361__$1);
var G__21364 = c__4408__auto___21362;
var G__21365 = cljs.core.count.call(null,c__4408__auto___21362);
var G__21366 = (0);
seq__21347_21351 = G__21363;
chunk__21348_21352 = G__21364;
count__21349_21353 = G__21365;
i__21350_21354 = G__21366;
continue;
}
} else
{var node_21367 = cljs.core.first.call(null,seq__21347_21361__$1);goog.dom.classes.toggle(node_21367,class$);
{
var G__21368 = cljs.core.next.call(null,seq__21347_21361__$1);
var G__21369 = null;
var G__21370 = (0);
var G__21371 = (0);
seq__21347_21351 = G__21368;
chunk__21348_21352 = G__21369;
count__21349_21353 = G__21370;
i__21350_21354 = G__21371;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21380__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21376_21381 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21377_21382 = null;var count__21378_21383 = (0);var i__21379_21384 = (0);while(true){
if((i__21379_21384 < count__21378_21383))
{var node_21385 = cljs.core._nth.call(null,chunk__21377_21382,i__21379_21384);goog.dom.classes.set(node_21385,classes_21380__$1);
{
var G__21386 = seq__21376_21381;
var G__21387 = chunk__21377_21382;
var G__21388 = count__21378_21383;
var G__21389 = (i__21379_21384 + (1));
seq__21376_21381 = G__21386;
chunk__21377_21382 = G__21387;
count__21378_21383 = G__21388;
i__21379_21384 = G__21389;
continue;
}
} else
{var temp__4126__auto___21390 = cljs.core.seq.call(null,seq__21376_21381);if(temp__4126__auto___21390)
{var seq__21376_21391__$1 = temp__4126__auto___21390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21376_21391__$1))
{var c__4408__auto___21392 = cljs.core.chunk_first.call(null,seq__21376_21391__$1);{
var G__21393 = cljs.core.chunk_rest.call(null,seq__21376_21391__$1);
var G__21394 = c__4408__auto___21392;
var G__21395 = cljs.core.count.call(null,c__4408__auto___21392);
var G__21396 = (0);
seq__21376_21381 = G__21393;
chunk__21377_21382 = G__21394;
count__21378_21383 = G__21395;
i__21379_21384 = G__21396;
continue;
}
} else
{var node_21397 = cljs.core.first.call(null,seq__21376_21391__$1);goog.dom.classes.set(node_21397,classes_21380__$1);
{
var G__21398 = cljs.core.next.call(null,seq__21376_21391__$1);
var G__21399 = null;
var G__21400 = (0);
var G__21401 = (0);
seq__21376_21381 = G__21398;
chunk__21377_21382 = G__21399;
count__21378_21383 = G__21400;
i__21379_21384 = G__21401;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21406_21410 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21407_21411 = null;var count__21408_21412 = (0);var i__21409_21413 = (0);while(true){
if((i__21409_21413 < count__21408_21412))
{var node_21414 = cljs.core._nth.call(null,chunk__21407_21411,i__21409_21413);goog.dom.setTextContent(node_21414,value);
{
var G__21415 = seq__21406_21410;
var G__21416 = chunk__21407_21411;
var G__21417 = count__21408_21412;
var G__21418 = (i__21409_21413 + (1));
seq__21406_21410 = G__21415;
chunk__21407_21411 = G__21416;
count__21408_21412 = G__21417;
i__21409_21413 = G__21418;
continue;
}
} else
{var temp__4126__auto___21419 = cljs.core.seq.call(null,seq__21406_21410);if(temp__4126__auto___21419)
{var seq__21406_21420__$1 = temp__4126__auto___21419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21406_21420__$1))
{var c__4408__auto___21421 = cljs.core.chunk_first.call(null,seq__21406_21420__$1);{
var G__21422 = cljs.core.chunk_rest.call(null,seq__21406_21420__$1);
var G__21423 = c__4408__auto___21421;
var G__21424 = cljs.core.count.call(null,c__4408__auto___21421);
var G__21425 = (0);
seq__21406_21410 = G__21422;
chunk__21407_21411 = G__21423;
count__21408_21412 = G__21424;
i__21409_21413 = G__21425;
continue;
}
} else
{var node_21426 = cljs.core.first.call(null,seq__21406_21420__$1);goog.dom.setTextContent(node_21426,value);
{
var G__21427 = cljs.core.next.call(null,seq__21406_21420__$1);
var G__21428 = null;
var G__21429 = (0);
var G__21430 = (0);
seq__21406_21410 = G__21427;
chunk__21407_21411 = G__21428;
count__21408_21412 = G__21429;
i__21409_21413 = G__21430;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21435_21439 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21436_21440 = null;var count__21437_21441 = (0);var i__21438_21442 = (0);while(true){
if((i__21438_21442 < count__21437_21441))
{var node_21443 = cljs.core._nth.call(null,chunk__21436_21440,i__21438_21442);goog.dom.forms.setValue(node_21443,value);
{
var G__21444 = seq__21435_21439;
var G__21445 = chunk__21436_21440;
var G__21446 = count__21437_21441;
var G__21447 = (i__21438_21442 + (1));
seq__21435_21439 = G__21444;
chunk__21436_21440 = G__21445;
count__21437_21441 = G__21446;
i__21438_21442 = G__21447;
continue;
}
} else
{var temp__4126__auto___21448 = cljs.core.seq.call(null,seq__21435_21439);if(temp__4126__auto___21448)
{var seq__21435_21449__$1 = temp__4126__auto___21448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21435_21449__$1))
{var c__4408__auto___21450 = cljs.core.chunk_first.call(null,seq__21435_21449__$1);{
var G__21451 = cljs.core.chunk_rest.call(null,seq__21435_21449__$1);
var G__21452 = c__4408__auto___21450;
var G__21453 = cljs.core.count.call(null,c__4408__auto___21450);
var G__21454 = (0);
seq__21435_21439 = G__21451;
chunk__21436_21440 = G__21452;
count__21437_21441 = G__21453;
i__21438_21442 = G__21454;
continue;
}
} else
{var node_21455 = cljs.core.first.call(null,seq__21435_21449__$1);goog.dom.forms.setValue(node_21455,value);
{
var G__21456 = cljs.core.next.call(null,seq__21435_21449__$1);
var G__21457 = null;
var G__21458 = (0);
var G__21459 = (0);
seq__21435_21439 = G__21456;
chunk__21436_21440 = G__21457;
count__21437_21441 = G__21458;
i__21438_21442 = G__21459;
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
{var value_21470 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21466_21471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21467_21472 = null;var count__21468_21473 = (0);var i__21469_21474 = (0);while(true){
if((i__21469_21474 < count__21468_21473))
{var node_21475 = cljs.core._nth.call(null,chunk__21467_21472,i__21469_21474);node_21475.innerHTML = value_21470;
{
var G__21476 = seq__21466_21471;
var G__21477 = chunk__21467_21472;
var G__21478 = count__21468_21473;
var G__21479 = (i__21469_21474 + (1));
seq__21466_21471 = G__21476;
chunk__21467_21472 = G__21477;
count__21468_21473 = G__21478;
i__21469_21474 = G__21479;
continue;
}
} else
{var temp__4126__auto___21480 = cljs.core.seq.call(null,seq__21466_21471);if(temp__4126__auto___21480)
{var seq__21466_21481__$1 = temp__4126__auto___21480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21466_21481__$1))
{var c__4408__auto___21482 = cljs.core.chunk_first.call(null,seq__21466_21481__$1);{
var G__21483 = cljs.core.chunk_rest.call(null,seq__21466_21481__$1);
var G__21484 = c__4408__auto___21482;
var G__21485 = cljs.core.count.call(null,c__4408__auto___21482);
var G__21486 = (0);
seq__21466_21471 = G__21483;
chunk__21467_21472 = G__21484;
count__21468_21473 = G__21485;
i__21469_21474 = G__21486;
continue;
}
} else
{var node_21487 = cljs.core.first.call(null,seq__21466_21481__$1);node_21487.innerHTML = value_21470;
{
var G__21488 = cljs.core.next.call(null,seq__21466_21481__$1);
var G__21489 = null;
var G__21490 = (0);
var G__21491 = (0);
seq__21466_21471 = G__21488;
chunk__21467_21472 = G__21489;
count__21468_21473 = G__21490;
i__21469_21474 = G__21491;
continue;
}
}
} else
{}
}
break;
}
}catch (e21465){if((e21465 instanceof Error))
{var e_21492 = e21465;domina.replace_children_BANG_.call(null,content,value_21470);
} else
{throw e21465;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21499_21503 = cljs.core.seq.call(null,children);var chunk__21500_21504 = null;var count__21501_21505 = (0);var i__21502_21506 = (0);while(true){
if((i__21502_21506 < count__21501_21505))
{var child_21507 = cljs.core._nth.call(null,chunk__21500_21504,i__21502_21506);frag.appendChild(child_21507);
{
var G__21508 = seq__21499_21503;
var G__21509 = chunk__21500_21504;
var G__21510 = count__21501_21505;
var G__21511 = (i__21502_21506 + (1));
seq__21499_21503 = G__21508;
chunk__21500_21504 = G__21509;
count__21501_21505 = G__21510;
i__21502_21506 = G__21511;
continue;
}
} else
{var temp__4126__auto___21512 = cljs.core.seq.call(null,seq__21499_21503);if(temp__4126__auto___21512)
{var seq__21499_21513__$1 = temp__4126__auto___21512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21499_21513__$1))
{var c__4408__auto___21514 = cljs.core.chunk_first.call(null,seq__21499_21513__$1);{
var G__21515 = cljs.core.chunk_rest.call(null,seq__21499_21513__$1);
var G__21516 = c__4408__auto___21514;
var G__21517 = cljs.core.count.call(null,c__4408__auto___21514);
var G__21518 = (0);
seq__21499_21503 = G__21515;
chunk__21500_21504 = G__21516;
count__21501_21505 = G__21517;
i__21502_21506 = G__21518;
continue;
}
} else
{var child_21519 = cljs.core.first.call(null,seq__21499_21513__$1);frag.appendChild(child_21519);
{
var G__21520 = cljs.core.next.call(null,seq__21499_21513__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__21499_21503 = G__21520;
chunk__21500_21504 = G__21521;
count__21501_21505 = G__21522;
i__21502_21506 = G__21523;
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
return (function (p1__21493_SHARP_,p2__21494_SHARP_){return f.call(null,p1__21493_SHARP_,p2__21494_SHARP_);
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
{if((function (){var G__21525 = list_thing;if(G__21525)
{var bit__4302__auto__ = (G__21525.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21525.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21525.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21525);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21525);
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
{if((function (){var G__21526 = content;if(G__21526)
{var bit__4302__auto__ = (G__21526.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21526.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21526.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21526);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21526);
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
{if((function (){var G__21527 = content;if(G__21527)
{var bit__4302__auto__ = (G__21527.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21527.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21527.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21527);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21527);
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
