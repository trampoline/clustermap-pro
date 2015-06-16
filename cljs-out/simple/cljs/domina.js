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
var opt_wrapper_21131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21133 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21133,opt_wrapper_21131,table_section_wrapper_21132,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21131,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21132,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21132,cell_wrapper_21133,table_section_wrapper_21132,table_section_wrapper_21132]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21138 = cljs.core.seq.call(null,tbody);var chunk__21139 = null;var count__21140 = (0);var i__21141 = (0);while(true){
if((i__21141 < count__21140))
{var child = cljs.core._nth.call(null,chunk__21139,i__21141);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21142 = seq__21138;
var G__21143 = chunk__21139;
var G__21144 = count__21140;
var G__21145 = (i__21141 + (1));
seq__21138 = G__21142;
chunk__21139 = G__21143;
count__21140 = G__21144;
i__21141 = G__21145;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21138);if(temp__4126__auto__)
{var seq__21138__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21138__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21138__$1);{
var G__21146 = cljs.core.chunk_rest.call(null,seq__21138__$1);
var G__21147 = c__4408__auto__;
var G__21148 = cljs.core.count.call(null,c__4408__auto__);
var G__21149 = (0);
seq__21138 = G__21146;
chunk__21139 = G__21147;
count__21140 = G__21148;
i__21141 = G__21149;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21138__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21150 = cljs.core.next.call(null,seq__21138__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__21138 = G__21150;
chunk__21139 = G__21151;
count__21140 = G__21152;
i__21141 = G__21153;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21155 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21155,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21155,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21155,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21156 = wrapper.lastChild;
var G__21157 = (level - (1));
wrapper = G__21156;
level = G__21157;
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
domina.DomContent = (function (){var obj21159 = {};return obj21159;
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
log_debug.cljs$lang$applyTo = (function (arglist__21160){
var mesg = cljs.core.seq(arglist__21160);
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
log.cljs$lang$applyTo = (function (arglist__21161){
var mesg = cljs.core.seq(arglist__21161);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21162){
var contents = cljs.core.seq(arglist__21162);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21163_SHARP_){return p1__21163_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21164_SHARP_,p2__21165_SHARP_){return goog.dom.insertChildAt(p1__21164_SHARP_,p2__21165_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21167_SHARP_,p2__21166_SHARP_){return goog.dom.insertSiblingBefore(p2__21166_SHARP_,p1__21167_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21169_SHARP_,p2__21168_SHARP_){return goog.dom.insertSiblingAfter(p2__21168_SHARP_,p1__21169_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21171_SHARP_,p2__21170_SHARP_){return goog.dom.replaceNode(p2__21170_SHARP_,p1__21171_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21176_21180 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21177_21181 = null;var count__21178_21182 = (0);var i__21179_21183 = (0);while(true){
if((i__21179_21183 < count__21178_21182))
{var n_21184 = cljs.core._nth.call(null,chunk__21177_21181,i__21179_21183);goog.style.setStyle(n_21184,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21185 = seq__21176_21180;
var G__21186 = chunk__21177_21181;
var G__21187 = count__21178_21182;
var G__21188 = (i__21179_21183 + (1));
seq__21176_21180 = G__21185;
chunk__21177_21181 = G__21186;
count__21178_21182 = G__21187;
i__21179_21183 = G__21188;
continue;
}
} else
{var temp__4126__auto___21189 = cljs.core.seq.call(null,seq__21176_21180);if(temp__4126__auto___21189)
{var seq__21176_21190__$1 = temp__4126__auto___21189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21176_21190__$1))
{var c__4408__auto___21191 = cljs.core.chunk_first.call(null,seq__21176_21190__$1);{
var G__21192 = cljs.core.chunk_rest.call(null,seq__21176_21190__$1);
var G__21193 = c__4408__auto___21191;
var G__21194 = cljs.core.count.call(null,c__4408__auto___21191);
var G__21195 = (0);
seq__21176_21180 = G__21192;
chunk__21177_21181 = G__21193;
count__21178_21182 = G__21194;
i__21179_21183 = G__21195;
continue;
}
} else
{var n_21196 = cljs.core.first.call(null,seq__21176_21190__$1);goog.style.setStyle(n_21196,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21197 = cljs.core.next.call(null,seq__21176_21190__$1);
var G__21198 = null;
var G__21199 = (0);
var G__21200 = (0);
seq__21176_21180 = G__21197;
chunk__21177_21181 = G__21198;
count__21178_21182 = G__21199;
i__21179_21183 = G__21200;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21201){
var content = cljs.core.first(arglist__21201);
arglist__21201 = cljs.core.next(arglist__21201);
var name = cljs.core.first(arglist__21201);
var value = cljs.core.rest(arglist__21201);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21206_21210 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21207_21211 = null;var count__21208_21212 = (0);var i__21209_21213 = (0);while(true){
if((i__21209_21213 < count__21208_21212))
{var n_21214 = cljs.core._nth.call(null,chunk__21207_21211,i__21209_21213);n_21214.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21215 = seq__21206_21210;
var G__21216 = chunk__21207_21211;
var G__21217 = count__21208_21212;
var G__21218 = (i__21209_21213 + (1));
seq__21206_21210 = G__21215;
chunk__21207_21211 = G__21216;
count__21208_21212 = G__21217;
i__21209_21213 = G__21218;
continue;
}
} else
{var temp__4126__auto___21219 = cljs.core.seq.call(null,seq__21206_21210);if(temp__4126__auto___21219)
{var seq__21206_21220__$1 = temp__4126__auto___21219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21206_21220__$1))
{var c__4408__auto___21221 = cljs.core.chunk_first.call(null,seq__21206_21220__$1);{
var G__21222 = cljs.core.chunk_rest.call(null,seq__21206_21220__$1);
var G__21223 = c__4408__auto___21221;
var G__21224 = cljs.core.count.call(null,c__4408__auto___21221);
var G__21225 = (0);
seq__21206_21210 = G__21222;
chunk__21207_21211 = G__21223;
count__21208_21212 = G__21224;
i__21209_21213 = G__21225;
continue;
}
} else
{var n_21226 = cljs.core.first.call(null,seq__21206_21220__$1);n_21226.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21227 = cljs.core.next.call(null,seq__21206_21220__$1);
var G__21228 = null;
var G__21229 = (0);
var G__21230 = (0);
seq__21206_21210 = G__21227;
chunk__21207_21211 = G__21228;
count__21208_21212 = G__21229;
i__21209_21213 = G__21230;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21231){
var content = cljs.core.first(arglist__21231);
arglist__21231 = cljs.core.next(arglist__21231);
var name = cljs.core.first(arglist__21231);
var value = cljs.core.rest(arglist__21231);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21236_21240 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21237_21241 = null;var count__21238_21242 = (0);var i__21239_21243 = (0);while(true){
if((i__21239_21243 < count__21238_21242))
{var n_21244 = cljs.core._nth.call(null,chunk__21237_21241,i__21239_21243);n_21244.removeAttribute(cljs.core.name.call(null,name));
{
var G__21245 = seq__21236_21240;
var G__21246 = chunk__21237_21241;
var G__21247 = count__21238_21242;
var G__21248 = (i__21239_21243 + (1));
seq__21236_21240 = G__21245;
chunk__21237_21241 = G__21246;
count__21238_21242 = G__21247;
i__21239_21243 = G__21248;
continue;
}
} else
{var temp__4126__auto___21249 = cljs.core.seq.call(null,seq__21236_21240);if(temp__4126__auto___21249)
{var seq__21236_21250__$1 = temp__4126__auto___21249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21236_21250__$1))
{var c__4408__auto___21251 = cljs.core.chunk_first.call(null,seq__21236_21250__$1);{
var G__21252 = cljs.core.chunk_rest.call(null,seq__21236_21250__$1);
var G__21253 = c__4408__auto___21251;
var G__21254 = cljs.core.count.call(null,c__4408__auto___21251);
var G__21255 = (0);
seq__21236_21240 = G__21252;
chunk__21237_21241 = G__21253;
count__21238_21242 = G__21254;
i__21239_21243 = G__21255;
continue;
}
} else
{var n_21256 = cljs.core.first.call(null,seq__21236_21250__$1);n_21256.removeAttribute(cljs.core.name.call(null,name));
{
var G__21257 = cljs.core.next.call(null,seq__21236_21250__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__21236_21240 = G__21257;
chunk__21237_21241 = G__21258;
count__21238_21242 = G__21259;
i__21239_21243 = G__21260;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21262 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21262,(0),null);var v = cljs.core.nth.call(null,vec__21262,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21263_SHARP_){var attr = attrs__$1.item(p1__21263_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21270_21276 = cljs.core.seq.call(null,styles);var chunk__21271_21277 = null;var count__21272_21278 = (0);var i__21273_21279 = (0);while(true){
if((i__21273_21279 < count__21272_21278))
{var vec__21274_21280 = cljs.core._nth.call(null,chunk__21271_21277,i__21273_21279);var name_21281 = cljs.core.nth.call(null,vec__21274_21280,(0),null);var value_21282 = cljs.core.nth.call(null,vec__21274_21280,(1),null);domina.set_style_BANG_.call(null,content,name_21281,value_21282);
{
var G__21283 = seq__21270_21276;
var G__21284 = chunk__21271_21277;
var G__21285 = count__21272_21278;
var G__21286 = (i__21273_21279 + (1));
seq__21270_21276 = G__21283;
chunk__21271_21277 = G__21284;
count__21272_21278 = G__21285;
i__21273_21279 = G__21286;
continue;
}
} else
{var temp__4126__auto___21287 = cljs.core.seq.call(null,seq__21270_21276);if(temp__4126__auto___21287)
{var seq__21270_21288__$1 = temp__4126__auto___21287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21270_21288__$1))
{var c__4408__auto___21289 = cljs.core.chunk_first.call(null,seq__21270_21288__$1);{
var G__21290 = cljs.core.chunk_rest.call(null,seq__21270_21288__$1);
var G__21291 = c__4408__auto___21289;
var G__21292 = cljs.core.count.call(null,c__4408__auto___21289);
var G__21293 = (0);
seq__21270_21276 = G__21290;
chunk__21271_21277 = G__21291;
count__21272_21278 = G__21292;
i__21273_21279 = G__21293;
continue;
}
} else
{var vec__21275_21294 = cljs.core.first.call(null,seq__21270_21288__$1);var name_21295 = cljs.core.nth.call(null,vec__21275_21294,(0),null);var value_21296 = cljs.core.nth.call(null,vec__21275_21294,(1),null);domina.set_style_BANG_.call(null,content,name_21295,value_21296);
{
var G__21297 = cljs.core.next.call(null,seq__21270_21288__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__21270_21276 = G__21297;
chunk__21271_21277 = G__21298;
count__21272_21278 = G__21299;
i__21273_21279 = G__21300;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21307_21313 = cljs.core.seq.call(null,attrs);var chunk__21308_21314 = null;var count__21309_21315 = (0);var i__21310_21316 = (0);while(true){
if((i__21310_21316 < count__21309_21315))
{var vec__21311_21317 = cljs.core._nth.call(null,chunk__21308_21314,i__21310_21316);var name_21318 = cljs.core.nth.call(null,vec__21311_21317,(0),null);var value_21319 = cljs.core.nth.call(null,vec__21311_21317,(1),null);domina.set_attr_BANG_.call(null,content,name_21318,value_21319);
{
var G__21320 = seq__21307_21313;
var G__21321 = chunk__21308_21314;
var G__21322 = count__21309_21315;
var G__21323 = (i__21310_21316 + (1));
seq__21307_21313 = G__21320;
chunk__21308_21314 = G__21321;
count__21309_21315 = G__21322;
i__21310_21316 = G__21323;
continue;
}
} else
{var temp__4126__auto___21324 = cljs.core.seq.call(null,seq__21307_21313);if(temp__4126__auto___21324)
{var seq__21307_21325__$1 = temp__4126__auto___21324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21307_21325__$1))
{var c__4408__auto___21326 = cljs.core.chunk_first.call(null,seq__21307_21325__$1);{
var G__21327 = cljs.core.chunk_rest.call(null,seq__21307_21325__$1);
var G__21328 = c__4408__auto___21326;
var G__21329 = cljs.core.count.call(null,c__4408__auto___21326);
var G__21330 = (0);
seq__21307_21313 = G__21327;
chunk__21308_21314 = G__21328;
count__21309_21315 = G__21329;
i__21310_21316 = G__21330;
continue;
}
} else
{var vec__21312_21331 = cljs.core.first.call(null,seq__21307_21325__$1);var name_21332 = cljs.core.nth.call(null,vec__21312_21331,(0),null);var value_21333 = cljs.core.nth.call(null,vec__21312_21331,(1),null);domina.set_attr_BANG_.call(null,content,name_21332,value_21333);
{
var G__21334 = cljs.core.next.call(null,seq__21307_21325__$1);
var G__21335 = null;
var G__21336 = (0);
var G__21337 = (0);
seq__21307_21313 = G__21334;
chunk__21308_21314 = G__21335;
count__21309_21315 = G__21336;
i__21310_21316 = G__21337;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21342_21346 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21343_21347 = null;var count__21344_21348 = (0);var i__21345_21349 = (0);while(true){
if((i__21345_21349 < count__21344_21348))
{var node_21350 = cljs.core._nth.call(null,chunk__21343_21347,i__21345_21349);goog.dom.classes.add(node_21350,class$);
{
var G__21351 = seq__21342_21346;
var G__21352 = chunk__21343_21347;
var G__21353 = count__21344_21348;
var G__21354 = (i__21345_21349 + (1));
seq__21342_21346 = G__21351;
chunk__21343_21347 = G__21352;
count__21344_21348 = G__21353;
i__21345_21349 = G__21354;
continue;
}
} else
{var temp__4126__auto___21355 = cljs.core.seq.call(null,seq__21342_21346);if(temp__4126__auto___21355)
{var seq__21342_21356__$1 = temp__4126__auto___21355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21342_21356__$1))
{var c__4408__auto___21357 = cljs.core.chunk_first.call(null,seq__21342_21356__$1);{
var G__21358 = cljs.core.chunk_rest.call(null,seq__21342_21356__$1);
var G__21359 = c__4408__auto___21357;
var G__21360 = cljs.core.count.call(null,c__4408__auto___21357);
var G__21361 = (0);
seq__21342_21346 = G__21358;
chunk__21343_21347 = G__21359;
count__21344_21348 = G__21360;
i__21345_21349 = G__21361;
continue;
}
} else
{var node_21362 = cljs.core.first.call(null,seq__21342_21356__$1);goog.dom.classes.add(node_21362,class$);
{
var G__21363 = cljs.core.next.call(null,seq__21342_21356__$1);
var G__21364 = null;
var G__21365 = (0);
var G__21366 = (0);
seq__21342_21346 = G__21363;
chunk__21343_21347 = G__21364;
count__21344_21348 = G__21365;
i__21345_21349 = G__21366;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21371_21375 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21372_21376 = null;var count__21373_21377 = (0);var i__21374_21378 = (0);while(true){
if((i__21374_21378 < count__21373_21377))
{var node_21379 = cljs.core._nth.call(null,chunk__21372_21376,i__21374_21378);goog.dom.classes.remove(node_21379,class$);
{
var G__21380 = seq__21371_21375;
var G__21381 = chunk__21372_21376;
var G__21382 = count__21373_21377;
var G__21383 = (i__21374_21378 + (1));
seq__21371_21375 = G__21380;
chunk__21372_21376 = G__21381;
count__21373_21377 = G__21382;
i__21374_21378 = G__21383;
continue;
}
} else
{var temp__4126__auto___21384 = cljs.core.seq.call(null,seq__21371_21375);if(temp__4126__auto___21384)
{var seq__21371_21385__$1 = temp__4126__auto___21384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21371_21385__$1))
{var c__4408__auto___21386 = cljs.core.chunk_first.call(null,seq__21371_21385__$1);{
var G__21387 = cljs.core.chunk_rest.call(null,seq__21371_21385__$1);
var G__21388 = c__4408__auto___21386;
var G__21389 = cljs.core.count.call(null,c__4408__auto___21386);
var G__21390 = (0);
seq__21371_21375 = G__21387;
chunk__21372_21376 = G__21388;
count__21373_21377 = G__21389;
i__21374_21378 = G__21390;
continue;
}
} else
{var node_21391 = cljs.core.first.call(null,seq__21371_21385__$1);goog.dom.classes.remove(node_21391,class$);
{
var G__21392 = cljs.core.next.call(null,seq__21371_21385__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__21371_21375 = G__21392;
chunk__21372_21376 = G__21393;
count__21373_21377 = G__21394;
i__21374_21378 = G__21395;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21400_21404 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21401_21405 = null;var count__21402_21406 = (0);var i__21403_21407 = (0);while(true){
if((i__21403_21407 < count__21402_21406))
{var node_21408 = cljs.core._nth.call(null,chunk__21401_21405,i__21403_21407);goog.dom.classes.toggle(node_21408,class$);
{
var G__21409 = seq__21400_21404;
var G__21410 = chunk__21401_21405;
var G__21411 = count__21402_21406;
var G__21412 = (i__21403_21407 + (1));
seq__21400_21404 = G__21409;
chunk__21401_21405 = G__21410;
count__21402_21406 = G__21411;
i__21403_21407 = G__21412;
continue;
}
} else
{var temp__4126__auto___21413 = cljs.core.seq.call(null,seq__21400_21404);if(temp__4126__auto___21413)
{var seq__21400_21414__$1 = temp__4126__auto___21413;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21400_21414__$1))
{var c__4408__auto___21415 = cljs.core.chunk_first.call(null,seq__21400_21414__$1);{
var G__21416 = cljs.core.chunk_rest.call(null,seq__21400_21414__$1);
var G__21417 = c__4408__auto___21415;
var G__21418 = cljs.core.count.call(null,c__4408__auto___21415);
var G__21419 = (0);
seq__21400_21404 = G__21416;
chunk__21401_21405 = G__21417;
count__21402_21406 = G__21418;
i__21403_21407 = G__21419;
continue;
}
} else
{var node_21420 = cljs.core.first.call(null,seq__21400_21414__$1);goog.dom.classes.toggle(node_21420,class$);
{
var G__21421 = cljs.core.next.call(null,seq__21400_21414__$1);
var G__21422 = null;
var G__21423 = (0);
var G__21424 = (0);
seq__21400_21404 = G__21421;
chunk__21401_21405 = G__21422;
count__21402_21406 = G__21423;
i__21403_21407 = G__21424;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21433__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21429_21434 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21430_21435 = null;var count__21431_21436 = (0);var i__21432_21437 = (0);while(true){
if((i__21432_21437 < count__21431_21436))
{var node_21438 = cljs.core._nth.call(null,chunk__21430_21435,i__21432_21437);goog.dom.classes.set(node_21438,classes_21433__$1);
{
var G__21439 = seq__21429_21434;
var G__21440 = chunk__21430_21435;
var G__21441 = count__21431_21436;
var G__21442 = (i__21432_21437 + (1));
seq__21429_21434 = G__21439;
chunk__21430_21435 = G__21440;
count__21431_21436 = G__21441;
i__21432_21437 = G__21442;
continue;
}
} else
{var temp__4126__auto___21443 = cljs.core.seq.call(null,seq__21429_21434);if(temp__4126__auto___21443)
{var seq__21429_21444__$1 = temp__4126__auto___21443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21429_21444__$1))
{var c__4408__auto___21445 = cljs.core.chunk_first.call(null,seq__21429_21444__$1);{
var G__21446 = cljs.core.chunk_rest.call(null,seq__21429_21444__$1);
var G__21447 = c__4408__auto___21445;
var G__21448 = cljs.core.count.call(null,c__4408__auto___21445);
var G__21449 = (0);
seq__21429_21434 = G__21446;
chunk__21430_21435 = G__21447;
count__21431_21436 = G__21448;
i__21432_21437 = G__21449;
continue;
}
} else
{var node_21450 = cljs.core.first.call(null,seq__21429_21444__$1);goog.dom.classes.set(node_21450,classes_21433__$1);
{
var G__21451 = cljs.core.next.call(null,seq__21429_21444__$1);
var G__21452 = null;
var G__21453 = (0);
var G__21454 = (0);
seq__21429_21434 = G__21451;
chunk__21430_21435 = G__21452;
count__21431_21436 = G__21453;
i__21432_21437 = G__21454;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21459_21463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21460_21464 = null;var count__21461_21465 = (0);var i__21462_21466 = (0);while(true){
if((i__21462_21466 < count__21461_21465))
{var node_21467 = cljs.core._nth.call(null,chunk__21460_21464,i__21462_21466);goog.dom.setTextContent(node_21467,value);
{
var G__21468 = seq__21459_21463;
var G__21469 = chunk__21460_21464;
var G__21470 = count__21461_21465;
var G__21471 = (i__21462_21466 + (1));
seq__21459_21463 = G__21468;
chunk__21460_21464 = G__21469;
count__21461_21465 = G__21470;
i__21462_21466 = G__21471;
continue;
}
} else
{var temp__4126__auto___21472 = cljs.core.seq.call(null,seq__21459_21463);if(temp__4126__auto___21472)
{var seq__21459_21473__$1 = temp__4126__auto___21472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21459_21473__$1))
{var c__4408__auto___21474 = cljs.core.chunk_first.call(null,seq__21459_21473__$1);{
var G__21475 = cljs.core.chunk_rest.call(null,seq__21459_21473__$1);
var G__21476 = c__4408__auto___21474;
var G__21477 = cljs.core.count.call(null,c__4408__auto___21474);
var G__21478 = (0);
seq__21459_21463 = G__21475;
chunk__21460_21464 = G__21476;
count__21461_21465 = G__21477;
i__21462_21466 = G__21478;
continue;
}
} else
{var node_21479 = cljs.core.first.call(null,seq__21459_21473__$1);goog.dom.setTextContent(node_21479,value);
{
var G__21480 = cljs.core.next.call(null,seq__21459_21473__$1);
var G__21481 = null;
var G__21482 = (0);
var G__21483 = (0);
seq__21459_21463 = G__21480;
chunk__21460_21464 = G__21481;
count__21461_21465 = G__21482;
i__21462_21466 = G__21483;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21488_21492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21489_21493 = null;var count__21490_21494 = (0);var i__21491_21495 = (0);while(true){
if((i__21491_21495 < count__21490_21494))
{var node_21496 = cljs.core._nth.call(null,chunk__21489_21493,i__21491_21495);goog.dom.forms.setValue(node_21496,value);
{
var G__21497 = seq__21488_21492;
var G__21498 = chunk__21489_21493;
var G__21499 = count__21490_21494;
var G__21500 = (i__21491_21495 + (1));
seq__21488_21492 = G__21497;
chunk__21489_21493 = G__21498;
count__21490_21494 = G__21499;
i__21491_21495 = G__21500;
continue;
}
} else
{var temp__4126__auto___21501 = cljs.core.seq.call(null,seq__21488_21492);if(temp__4126__auto___21501)
{var seq__21488_21502__$1 = temp__4126__auto___21501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21488_21502__$1))
{var c__4408__auto___21503 = cljs.core.chunk_first.call(null,seq__21488_21502__$1);{
var G__21504 = cljs.core.chunk_rest.call(null,seq__21488_21502__$1);
var G__21505 = c__4408__auto___21503;
var G__21506 = cljs.core.count.call(null,c__4408__auto___21503);
var G__21507 = (0);
seq__21488_21492 = G__21504;
chunk__21489_21493 = G__21505;
count__21490_21494 = G__21506;
i__21491_21495 = G__21507;
continue;
}
} else
{var node_21508 = cljs.core.first.call(null,seq__21488_21502__$1);goog.dom.forms.setValue(node_21508,value);
{
var G__21509 = cljs.core.next.call(null,seq__21488_21502__$1);
var G__21510 = null;
var G__21511 = (0);
var G__21512 = (0);
seq__21488_21492 = G__21509;
chunk__21489_21493 = G__21510;
count__21490_21494 = G__21511;
i__21491_21495 = G__21512;
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
{var value_21523 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21519_21524 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21520_21525 = null;var count__21521_21526 = (0);var i__21522_21527 = (0);while(true){
if((i__21522_21527 < count__21521_21526))
{var node_21528 = cljs.core._nth.call(null,chunk__21520_21525,i__21522_21527);node_21528.innerHTML = value_21523;
{
var G__21529 = seq__21519_21524;
var G__21530 = chunk__21520_21525;
var G__21531 = count__21521_21526;
var G__21532 = (i__21522_21527 + (1));
seq__21519_21524 = G__21529;
chunk__21520_21525 = G__21530;
count__21521_21526 = G__21531;
i__21522_21527 = G__21532;
continue;
}
} else
{var temp__4126__auto___21533 = cljs.core.seq.call(null,seq__21519_21524);if(temp__4126__auto___21533)
{var seq__21519_21534__$1 = temp__4126__auto___21533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21519_21534__$1))
{var c__4408__auto___21535 = cljs.core.chunk_first.call(null,seq__21519_21534__$1);{
var G__21536 = cljs.core.chunk_rest.call(null,seq__21519_21534__$1);
var G__21537 = c__4408__auto___21535;
var G__21538 = cljs.core.count.call(null,c__4408__auto___21535);
var G__21539 = (0);
seq__21519_21524 = G__21536;
chunk__21520_21525 = G__21537;
count__21521_21526 = G__21538;
i__21522_21527 = G__21539;
continue;
}
} else
{var node_21540 = cljs.core.first.call(null,seq__21519_21534__$1);node_21540.innerHTML = value_21523;
{
var G__21541 = cljs.core.next.call(null,seq__21519_21534__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21519_21524 = G__21541;
chunk__21520_21525 = G__21542;
count__21521_21526 = G__21543;
i__21522_21527 = G__21544;
continue;
}
}
} else
{}
}
break;
}
}catch (e21518){if((e21518 instanceof Error))
{var e_21545 = e21518;domina.replace_children_BANG_.call(null,content,value_21523);
} else
{throw e21518;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21552_21556 = cljs.core.seq.call(null,children);var chunk__21553_21557 = null;var count__21554_21558 = (0);var i__21555_21559 = (0);while(true){
if((i__21555_21559 < count__21554_21558))
{var child_21560 = cljs.core._nth.call(null,chunk__21553_21557,i__21555_21559);frag.appendChild(child_21560);
{
var G__21561 = seq__21552_21556;
var G__21562 = chunk__21553_21557;
var G__21563 = count__21554_21558;
var G__21564 = (i__21555_21559 + (1));
seq__21552_21556 = G__21561;
chunk__21553_21557 = G__21562;
count__21554_21558 = G__21563;
i__21555_21559 = G__21564;
continue;
}
} else
{var temp__4126__auto___21565 = cljs.core.seq.call(null,seq__21552_21556);if(temp__4126__auto___21565)
{var seq__21552_21566__$1 = temp__4126__auto___21565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21552_21566__$1))
{var c__4408__auto___21567 = cljs.core.chunk_first.call(null,seq__21552_21566__$1);{
var G__21568 = cljs.core.chunk_rest.call(null,seq__21552_21566__$1);
var G__21569 = c__4408__auto___21567;
var G__21570 = cljs.core.count.call(null,c__4408__auto___21567);
var G__21571 = (0);
seq__21552_21556 = G__21568;
chunk__21553_21557 = G__21569;
count__21554_21558 = G__21570;
i__21555_21559 = G__21571;
continue;
}
} else
{var child_21572 = cljs.core.first.call(null,seq__21552_21566__$1);frag.appendChild(child_21572);
{
var G__21573 = cljs.core.next.call(null,seq__21552_21566__$1);
var G__21574 = null;
var G__21575 = (0);
var G__21576 = (0);
seq__21552_21556 = G__21573;
chunk__21553_21557 = G__21574;
count__21554_21558 = G__21575;
i__21555_21559 = G__21576;
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
return (function (p1__21546_SHARP_,p2__21547_SHARP_){return f.call(null,p1__21546_SHARP_,p2__21547_SHARP_);
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
{if((function (){var G__21578 = list_thing;if(G__21578)
{var bit__4302__auto__ = (G__21578.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21578.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21578.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21578);
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
{if((function (){var G__21579 = content;if(G__21579)
{var bit__4302__auto__ = (G__21579.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21579.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21579.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21579);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21579);
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
{if((function (){var G__21580 = content;if(G__21580)
{var bit__4302__auto__ = (G__21580.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21580.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21580.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21580);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21580);
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
