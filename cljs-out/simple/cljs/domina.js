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
var opt_wrapper_21147 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21148 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21149,opt_wrapper_21147,table_section_wrapper_21148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21148,cell_wrapper_21149,table_section_wrapper_21148,table_section_wrapper_21148]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21154 = cljs.core.seq.call(null,tbody);var chunk__21155 = null;var count__21156 = (0);var i__21157 = (0);while(true){
if((i__21157 < count__21156))
{var child = cljs.core._nth.call(null,chunk__21155,i__21157);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21158 = seq__21154;
var G__21159 = chunk__21155;
var G__21160 = count__21156;
var G__21161 = (i__21157 + (1));
seq__21154 = G__21158;
chunk__21155 = G__21159;
count__21156 = G__21160;
i__21157 = G__21161;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21154);if(temp__4126__auto__)
{var seq__21154__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21154__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21154__$1);{
var G__21162 = cljs.core.chunk_rest.call(null,seq__21154__$1);
var G__21163 = c__4408__auto__;
var G__21164 = cljs.core.count.call(null,c__4408__auto__);
var G__21165 = (0);
seq__21154 = G__21162;
chunk__21155 = G__21163;
count__21156 = G__21164;
i__21157 = G__21165;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21154__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21166 = cljs.core.next.call(null,seq__21154__$1);
var G__21167 = null;
var G__21168 = (0);
var G__21169 = (0);
seq__21154 = G__21166;
chunk__21155 = G__21167;
count__21156 = G__21168;
i__21157 = G__21169;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21171 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21171,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21171,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21171,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21172 = wrapper.lastChild;
var G__21173 = (level - (1));
wrapper = G__21172;
level = G__21173;
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
domina.DomContent = (function (){var obj21175 = {};return obj21175;
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
log_debug.cljs$lang$applyTo = (function (arglist__21176){
var mesg = cljs.core.seq(arglist__21176);
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
log.cljs$lang$applyTo = (function (arglist__21177){
var mesg = cljs.core.seq(arglist__21177);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21178){
var contents = cljs.core.seq(arglist__21178);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21179_SHARP_){return p1__21179_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21180_SHARP_,p2__21181_SHARP_){return goog.dom.insertChildAt(p1__21180_SHARP_,p2__21181_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21183_SHARP_,p2__21182_SHARP_){return goog.dom.insertSiblingBefore(p2__21182_SHARP_,p1__21183_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21185_SHARP_,p2__21184_SHARP_){return goog.dom.insertSiblingAfter(p2__21184_SHARP_,p1__21185_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21187_SHARP_,p2__21186_SHARP_){return goog.dom.replaceNode(p2__21186_SHARP_,p1__21187_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21192_21196 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21193_21197 = null;var count__21194_21198 = (0);var i__21195_21199 = (0);while(true){
if((i__21195_21199 < count__21194_21198))
{var n_21200 = cljs.core._nth.call(null,chunk__21193_21197,i__21195_21199);goog.style.setStyle(n_21200,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21201 = seq__21192_21196;
var G__21202 = chunk__21193_21197;
var G__21203 = count__21194_21198;
var G__21204 = (i__21195_21199 + (1));
seq__21192_21196 = G__21201;
chunk__21193_21197 = G__21202;
count__21194_21198 = G__21203;
i__21195_21199 = G__21204;
continue;
}
} else
{var temp__4126__auto___21205 = cljs.core.seq.call(null,seq__21192_21196);if(temp__4126__auto___21205)
{var seq__21192_21206__$1 = temp__4126__auto___21205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21192_21206__$1))
{var c__4408__auto___21207 = cljs.core.chunk_first.call(null,seq__21192_21206__$1);{
var G__21208 = cljs.core.chunk_rest.call(null,seq__21192_21206__$1);
var G__21209 = c__4408__auto___21207;
var G__21210 = cljs.core.count.call(null,c__4408__auto___21207);
var G__21211 = (0);
seq__21192_21196 = G__21208;
chunk__21193_21197 = G__21209;
count__21194_21198 = G__21210;
i__21195_21199 = G__21211;
continue;
}
} else
{var n_21212 = cljs.core.first.call(null,seq__21192_21206__$1);goog.style.setStyle(n_21212,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21213 = cljs.core.next.call(null,seq__21192_21206__$1);
var G__21214 = null;
var G__21215 = (0);
var G__21216 = (0);
seq__21192_21196 = G__21213;
chunk__21193_21197 = G__21214;
count__21194_21198 = G__21215;
i__21195_21199 = G__21216;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21217){
var content = cljs.core.first(arglist__21217);
arglist__21217 = cljs.core.next(arglist__21217);
var name = cljs.core.first(arglist__21217);
var value = cljs.core.rest(arglist__21217);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21222_21226 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21223_21227 = null;var count__21224_21228 = (0);var i__21225_21229 = (0);while(true){
if((i__21225_21229 < count__21224_21228))
{var n_21230 = cljs.core._nth.call(null,chunk__21223_21227,i__21225_21229);n_21230.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21231 = seq__21222_21226;
var G__21232 = chunk__21223_21227;
var G__21233 = count__21224_21228;
var G__21234 = (i__21225_21229 + (1));
seq__21222_21226 = G__21231;
chunk__21223_21227 = G__21232;
count__21224_21228 = G__21233;
i__21225_21229 = G__21234;
continue;
}
} else
{var temp__4126__auto___21235 = cljs.core.seq.call(null,seq__21222_21226);if(temp__4126__auto___21235)
{var seq__21222_21236__$1 = temp__4126__auto___21235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21222_21236__$1))
{var c__4408__auto___21237 = cljs.core.chunk_first.call(null,seq__21222_21236__$1);{
var G__21238 = cljs.core.chunk_rest.call(null,seq__21222_21236__$1);
var G__21239 = c__4408__auto___21237;
var G__21240 = cljs.core.count.call(null,c__4408__auto___21237);
var G__21241 = (0);
seq__21222_21226 = G__21238;
chunk__21223_21227 = G__21239;
count__21224_21228 = G__21240;
i__21225_21229 = G__21241;
continue;
}
} else
{var n_21242 = cljs.core.first.call(null,seq__21222_21236__$1);n_21242.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21243 = cljs.core.next.call(null,seq__21222_21236__$1);
var G__21244 = null;
var G__21245 = (0);
var G__21246 = (0);
seq__21222_21226 = G__21243;
chunk__21223_21227 = G__21244;
count__21224_21228 = G__21245;
i__21225_21229 = G__21246;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21247){
var content = cljs.core.first(arglist__21247);
arglist__21247 = cljs.core.next(arglist__21247);
var name = cljs.core.first(arglist__21247);
var value = cljs.core.rest(arglist__21247);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21252_21256 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21253_21257 = null;var count__21254_21258 = (0);var i__21255_21259 = (0);while(true){
if((i__21255_21259 < count__21254_21258))
{var n_21260 = cljs.core._nth.call(null,chunk__21253_21257,i__21255_21259);n_21260.removeAttribute(cljs.core.name.call(null,name));
{
var G__21261 = seq__21252_21256;
var G__21262 = chunk__21253_21257;
var G__21263 = count__21254_21258;
var G__21264 = (i__21255_21259 + (1));
seq__21252_21256 = G__21261;
chunk__21253_21257 = G__21262;
count__21254_21258 = G__21263;
i__21255_21259 = G__21264;
continue;
}
} else
{var temp__4126__auto___21265 = cljs.core.seq.call(null,seq__21252_21256);if(temp__4126__auto___21265)
{var seq__21252_21266__$1 = temp__4126__auto___21265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21252_21266__$1))
{var c__4408__auto___21267 = cljs.core.chunk_first.call(null,seq__21252_21266__$1);{
var G__21268 = cljs.core.chunk_rest.call(null,seq__21252_21266__$1);
var G__21269 = c__4408__auto___21267;
var G__21270 = cljs.core.count.call(null,c__4408__auto___21267);
var G__21271 = (0);
seq__21252_21256 = G__21268;
chunk__21253_21257 = G__21269;
count__21254_21258 = G__21270;
i__21255_21259 = G__21271;
continue;
}
} else
{var n_21272 = cljs.core.first.call(null,seq__21252_21266__$1);n_21272.removeAttribute(cljs.core.name.call(null,name));
{
var G__21273 = cljs.core.next.call(null,seq__21252_21266__$1);
var G__21274 = null;
var G__21275 = (0);
var G__21276 = (0);
seq__21252_21256 = G__21273;
chunk__21253_21257 = G__21274;
count__21254_21258 = G__21275;
i__21255_21259 = G__21276;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21278 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21278,(0),null);var v = cljs.core.nth.call(null,vec__21278,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21279_SHARP_){var attr = attrs__$1.item(p1__21279_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21286_21292 = cljs.core.seq.call(null,styles);var chunk__21287_21293 = null;var count__21288_21294 = (0);var i__21289_21295 = (0);while(true){
if((i__21289_21295 < count__21288_21294))
{var vec__21290_21296 = cljs.core._nth.call(null,chunk__21287_21293,i__21289_21295);var name_21297 = cljs.core.nth.call(null,vec__21290_21296,(0),null);var value_21298 = cljs.core.nth.call(null,vec__21290_21296,(1),null);domina.set_style_BANG_.call(null,content,name_21297,value_21298);
{
var G__21299 = seq__21286_21292;
var G__21300 = chunk__21287_21293;
var G__21301 = count__21288_21294;
var G__21302 = (i__21289_21295 + (1));
seq__21286_21292 = G__21299;
chunk__21287_21293 = G__21300;
count__21288_21294 = G__21301;
i__21289_21295 = G__21302;
continue;
}
} else
{var temp__4126__auto___21303 = cljs.core.seq.call(null,seq__21286_21292);if(temp__4126__auto___21303)
{var seq__21286_21304__$1 = temp__4126__auto___21303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21286_21304__$1))
{var c__4408__auto___21305 = cljs.core.chunk_first.call(null,seq__21286_21304__$1);{
var G__21306 = cljs.core.chunk_rest.call(null,seq__21286_21304__$1);
var G__21307 = c__4408__auto___21305;
var G__21308 = cljs.core.count.call(null,c__4408__auto___21305);
var G__21309 = (0);
seq__21286_21292 = G__21306;
chunk__21287_21293 = G__21307;
count__21288_21294 = G__21308;
i__21289_21295 = G__21309;
continue;
}
} else
{var vec__21291_21310 = cljs.core.first.call(null,seq__21286_21304__$1);var name_21311 = cljs.core.nth.call(null,vec__21291_21310,(0),null);var value_21312 = cljs.core.nth.call(null,vec__21291_21310,(1),null);domina.set_style_BANG_.call(null,content,name_21311,value_21312);
{
var G__21313 = cljs.core.next.call(null,seq__21286_21304__$1);
var G__21314 = null;
var G__21315 = (0);
var G__21316 = (0);
seq__21286_21292 = G__21313;
chunk__21287_21293 = G__21314;
count__21288_21294 = G__21315;
i__21289_21295 = G__21316;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21323_21329 = cljs.core.seq.call(null,attrs);var chunk__21324_21330 = null;var count__21325_21331 = (0);var i__21326_21332 = (0);while(true){
if((i__21326_21332 < count__21325_21331))
{var vec__21327_21333 = cljs.core._nth.call(null,chunk__21324_21330,i__21326_21332);var name_21334 = cljs.core.nth.call(null,vec__21327_21333,(0),null);var value_21335 = cljs.core.nth.call(null,vec__21327_21333,(1),null);domina.set_attr_BANG_.call(null,content,name_21334,value_21335);
{
var G__21336 = seq__21323_21329;
var G__21337 = chunk__21324_21330;
var G__21338 = count__21325_21331;
var G__21339 = (i__21326_21332 + (1));
seq__21323_21329 = G__21336;
chunk__21324_21330 = G__21337;
count__21325_21331 = G__21338;
i__21326_21332 = G__21339;
continue;
}
} else
{var temp__4126__auto___21340 = cljs.core.seq.call(null,seq__21323_21329);if(temp__4126__auto___21340)
{var seq__21323_21341__$1 = temp__4126__auto___21340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21323_21341__$1))
{var c__4408__auto___21342 = cljs.core.chunk_first.call(null,seq__21323_21341__$1);{
var G__21343 = cljs.core.chunk_rest.call(null,seq__21323_21341__$1);
var G__21344 = c__4408__auto___21342;
var G__21345 = cljs.core.count.call(null,c__4408__auto___21342);
var G__21346 = (0);
seq__21323_21329 = G__21343;
chunk__21324_21330 = G__21344;
count__21325_21331 = G__21345;
i__21326_21332 = G__21346;
continue;
}
} else
{var vec__21328_21347 = cljs.core.first.call(null,seq__21323_21341__$1);var name_21348 = cljs.core.nth.call(null,vec__21328_21347,(0),null);var value_21349 = cljs.core.nth.call(null,vec__21328_21347,(1),null);domina.set_attr_BANG_.call(null,content,name_21348,value_21349);
{
var G__21350 = cljs.core.next.call(null,seq__21323_21341__$1);
var G__21351 = null;
var G__21352 = (0);
var G__21353 = (0);
seq__21323_21329 = G__21350;
chunk__21324_21330 = G__21351;
count__21325_21331 = G__21352;
i__21326_21332 = G__21353;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21358_21362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21359_21363 = null;var count__21360_21364 = (0);var i__21361_21365 = (0);while(true){
if((i__21361_21365 < count__21360_21364))
{var node_21366 = cljs.core._nth.call(null,chunk__21359_21363,i__21361_21365);goog.dom.classes.add(node_21366,class$);
{
var G__21367 = seq__21358_21362;
var G__21368 = chunk__21359_21363;
var G__21369 = count__21360_21364;
var G__21370 = (i__21361_21365 + (1));
seq__21358_21362 = G__21367;
chunk__21359_21363 = G__21368;
count__21360_21364 = G__21369;
i__21361_21365 = G__21370;
continue;
}
} else
{var temp__4126__auto___21371 = cljs.core.seq.call(null,seq__21358_21362);if(temp__4126__auto___21371)
{var seq__21358_21372__$1 = temp__4126__auto___21371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358_21372__$1))
{var c__4408__auto___21373 = cljs.core.chunk_first.call(null,seq__21358_21372__$1);{
var G__21374 = cljs.core.chunk_rest.call(null,seq__21358_21372__$1);
var G__21375 = c__4408__auto___21373;
var G__21376 = cljs.core.count.call(null,c__4408__auto___21373);
var G__21377 = (0);
seq__21358_21362 = G__21374;
chunk__21359_21363 = G__21375;
count__21360_21364 = G__21376;
i__21361_21365 = G__21377;
continue;
}
} else
{var node_21378 = cljs.core.first.call(null,seq__21358_21372__$1);goog.dom.classes.add(node_21378,class$);
{
var G__21379 = cljs.core.next.call(null,seq__21358_21372__$1);
var G__21380 = null;
var G__21381 = (0);
var G__21382 = (0);
seq__21358_21362 = G__21379;
chunk__21359_21363 = G__21380;
count__21360_21364 = G__21381;
i__21361_21365 = G__21382;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21387_21391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21388_21392 = null;var count__21389_21393 = (0);var i__21390_21394 = (0);while(true){
if((i__21390_21394 < count__21389_21393))
{var node_21395 = cljs.core._nth.call(null,chunk__21388_21392,i__21390_21394);goog.dom.classes.remove(node_21395,class$);
{
var G__21396 = seq__21387_21391;
var G__21397 = chunk__21388_21392;
var G__21398 = count__21389_21393;
var G__21399 = (i__21390_21394 + (1));
seq__21387_21391 = G__21396;
chunk__21388_21392 = G__21397;
count__21389_21393 = G__21398;
i__21390_21394 = G__21399;
continue;
}
} else
{var temp__4126__auto___21400 = cljs.core.seq.call(null,seq__21387_21391);if(temp__4126__auto___21400)
{var seq__21387_21401__$1 = temp__4126__auto___21400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21387_21401__$1))
{var c__4408__auto___21402 = cljs.core.chunk_first.call(null,seq__21387_21401__$1);{
var G__21403 = cljs.core.chunk_rest.call(null,seq__21387_21401__$1);
var G__21404 = c__4408__auto___21402;
var G__21405 = cljs.core.count.call(null,c__4408__auto___21402);
var G__21406 = (0);
seq__21387_21391 = G__21403;
chunk__21388_21392 = G__21404;
count__21389_21393 = G__21405;
i__21390_21394 = G__21406;
continue;
}
} else
{var node_21407 = cljs.core.first.call(null,seq__21387_21401__$1);goog.dom.classes.remove(node_21407,class$);
{
var G__21408 = cljs.core.next.call(null,seq__21387_21401__$1);
var G__21409 = null;
var G__21410 = (0);
var G__21411 = (0);
seq__21387_21391 = G__21408;
chunk__21388_21392 = G__21409;
count__21389_21393 = G__21410;
i__21390_21394 = G__21411;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21416_21420 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21417_21421 = null;var count__21418_21422 = (0);var i__21419_21423 = (0);while(true){
if((i__21419_21423 < count__21418_21422))
{var node_21424 = cljs.core._nth.call(null,chunk__21417_21421,i__21419_21423);goog.dom.classes.toggle(node_21424,class$);
{
var G__21425 = seq__21416_21420;
var G__21426 = chunk__21417_21421;
var G__21427 = count__21418_21422;
var G__21428 = (i__21419_21423 + (1));
seq__21416_21420 = G__21425;
chunk__21417_21421 = G__21426;
count__21418_21422 = G__21427;
i__21419_21423 = G__21428;
continue;
}
} else
{var temp__4126__auto___21429 = cljs.core.seq.call(null,seq__21416_21420);if(temp__4126__auto___21429)
{var seq__21416_21430__$1 = temp__4126__auto___21429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21416_21430__$1))
{var c__4408__auto___21431 = cljs.core.chunk_first.call(null,seq__21416_21430__$1);{
var G__21432 = cljs.core.chunk_rest.call(null,seq__21416_21430__$1);
var G__21433 = c__4408__auto___21431;
var G__21434 = cljs.core.count.call(null,c__4408__auto___21431);
var G__21435 = (0);
seq__21416_21420 = G__21432;
chunk__21417_21421 = G__21433;
count__21418_21422 = G__21434;
i__21419_21423 = G__21435;
continue;
}
} else
{var node_21436 = cljs.core.first.call(null,seq__21416_21430__$1);goog.dom.classes.toggle(node_21436,class$);
{
var G__21437 = cljs.core.next.call(null,seq__21416_21430__$1);
var G__21438 = null;
var G__21439 = (0);
var G__21440 = (0);
seq__21416_21420 = G__21437;
chunk__21417_21421 = G__21438;
count__21418_21422 = G__21439;
i__21419_21423 = G__21440;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21449__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21445_21450 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21446_21451 = null;var count__21447_21452 = (0);var i__21448_21453 = (0);while(true){
if((i__21448_21453 < count__21447_21452))
{var node_21454 = cljs.core._nth.call(null,chunk__21446_21451,i__21448_21453);goog.dom.classes.set(node_21454,classes_21449__$1);
{
var G__21455 = seq__21445_21450;
var G__21456 = chunk__21446_21451;
var G__21457 = count__21447_21452;
var G__21458 = (i__21448_21453 + (1));
seq__21445_21450 = G__21455;
chunk__21446_21451 = G__21456;
count__21447_21452 = G__21457;
i__21448_21453 = G__21458;
continue;
}
} else
{var temp__4126__auto___21459 = cljs.core.seq.call(null,seq__21445_21450);if(temp__4126__auto___21459)
{var seq__21445_21460__$1 = temp__4126__auto___21459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21445_21460__$1))
{var c__4408__auto___21461 = cljs.core.chunk_first.call(null,seq__21445_21460__$1);{
var G__21462 = cljs.core.chunk_rest.call(null,seq__21445_21460__$1);
var G__21463 = c__4408__auto___21461;
var G__21464 = cljs.core.count.call(null,c__4408__auto___21461);
var G__21465 = (0);
seq__21445_21450 = G__21462;
chunk__21446_21451 = G__21463;
count__21447_21452 = G__21464;
i__21448_21453 = G__21465;
continue;
}
} else
{var node_21466 = cljs.core.first.call(null,seq__21445_21460__$1);goog.dom.classes.set(node_21466,classes_21449__$1);
{
var G__21467 = cljs.core.next.call(null,seq__21445_21460__$1);
var G__21468 = null;
var G__21469 = (0);
var G__21470 = (0);
seq__21445_21450 = G__21467;
chunk__21446_21451 = G__21468;
count__21447_21452 = G__21469;
i__21448_21453 = G__21470;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21475_21479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21476_21480 = null;var count__21477_21481 = (0);var i__21478_21482 = (0);while(true){
if((i__21478_21482 < count__21477_21481))
{var node_21483 = cljs.core._nth.call(null,chunk__21476_21480,i__21478_21482);goog.dom.setTextContent(node_21483,value);
{
var G__21484 = seq__21475_21479;
var G__21485 = chunk__21476_21480;
var G__21486 = count__21477_21481;
var G__21487 = (i__21478_21482 + (1));
seq__21475_21479 = G__21484;
chunk__21476_21480 = G__21485;
count__21477_21481 = G__21486;
i__21478_21482 = G__21487;
continue;
}
} else
{var temp__4126__auto___21488 = cljs.core.seq.call(null,seq__21475_21479);if(temp__4126__auto___21488)
{var seq__21475_21489__$1 = temp__4126__auto___21488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21475_21489__$1))
{var c__4408__auto___21490 = cljs.core.chunk_first.call(null,seq__21475_21489__$1);{
var G__21491 = cljs.core.chunk_rest.call(null,seq__21475_21489__$1);
var G__21492 = c__4408__auto___21490;
var G__21493 = cljs.core.count.call(null,c__4408__auto___21490);
var G__21494 = (0);
seq__21475_21479 = G__21491;
chunk__21476_21480 = G__21492;
count__21477_21481 = G__21493;
i__21478_21482 = G__21494;
continue;
}
} else
{var node_21495 = cljs.core.first.call(null,seq__21475_21489__$1);goog.dom.setTextContent(node_21495,value);
{
var G__21496 = cljs.core.next.call(null,seq__21475_21489__$1);
var G__21497 = null;
var G__21498 = (0);
var G__21499 = (0);
seq__21475_21479 = G__21496;
chunk__21476_21480 = G__21497;
count__21477_21481 = G__21498;
i__21478_21482 = G__21499;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21504_21508 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21505_21509 = null;var count__21506_21510 = (0);var i__21507_21511 = (0);while(true){
if((i__21507_21511 < count__21506_21510))
{var node_21512 = cljs.core._nth.call(null,chunk__21505_21509,i__21507_21511);goog.dom.forms.setValue(node_21512,value);
{
var G__21513 = seq__21504_21508;
var G__21514 = chunk__21505_21509;
var G__21515 = count__21506_21510;
var G__21516 = (i__21507_21511 + (1));
seq__21504_21508 = G__21513;
chunk__21505_21509 = G__21514;
count__21506_21510 = G__21515;
i__21507_21511 = G__21516;
continue;
}
} else
{var temp__4126__auto___21517 = cljs.core.seq.call(null,seq__21504_21508);if(temp__4126__auto___21517)
{var seq__21504_21518__$1 = temp__4126__auto___21517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21504_21518__$1))
{var c__4408__auto___21519 = cljs.core.chunk_first.call(null,seq__21504_21518__$1);{
var G__21520 = cljs.core.chunk_rest.call(null,seq__21504_21518__$1);
var G__21521 = c__4408__auto___21519;
var G__21522 = cljs.core.count.call(null,c__4408__auto___21519);
var G__21523 = (0);
seq__21504_21508 = G__21520;
chunk__21505_21509 = G__21521;
count__21506_21510 = G__21522;
i__21507_21511 = G__21523;
continue;
}
} else
{var node_21524 = cljs.core.first.call(null,seq__21504_21518__$1);goog.dom.forms.setValue(node_21524,value);
{
var G__21525 = cljs.core.next.call(null,seq__21504_21518__$1);
var G__21526 = null;
var G__21527 = (0);
var G__21528 = (0);
seq__21504_21508 = G__21525;
chunk__21505_21509 = G__21526;
count__21506_21510 = G__21527;
i__21507_21511 = G__21528;
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
{var value_21539 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21535_21540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21536_21541 = null;var count__21537_21542 = (0);var i__21538_21543 = (0);while(true){
if((i__21538_21543 < count__21537_21542))
{var node_21544 = cljs.core._nth.call(null,chunk__21536_21541,i__21538_21543);node_21544.innerHTML = value_21539;
{
var G__21545 = seq__21535_21540;
var G__21546 = chunk__21536_21541;
var G__21547 = count__21537_21542;
var G__21548 = (i__21538_21543 + (1));
seq__21535_21540 = G__21545;
chunk__21536_21541 = G__21546;
count__21537_21542 = G__21547;
i__21538_21543 = G__21548;
continue;
}
} else
{var temp__4126__auto___21549 = cljs.core.seq.call(null,seq__21535_21540);if(temp__4126__auto___21549)
{var seq__21535_21550__$1 = temp__4126__auto___21549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21535_21550__$1))
{var c__4408__auto___21551 = cljs.core.chunk_first.call(null,seq__21535_21550__$1);{
var G__21552 = cljs.core.chunk_rest.call(null,seq__21535_21550__$1);
var G__21553 = c__4408__auto___21551;
var G__21554 = cljs.core.count.call(null,c__4408__auto___21551);
var G__21555 = (0);
seq__21535_21540 = G__21552;
chunk__21536_21541 = G__21553;
count__21537_21542 = G__21554;
i__21538_21543 = G__21555;
continue;
}
} else
{var node_21556 = cljs.core.first.call(null,seq__21535_21550__$1);node_21556.innerHTML = value_21539;
{
var G__21557 = cljs.core.next.call(null,seq__21535_21550__$1);
var G__21558 = null;
var G__21559 = (0);
var G__21560 = (0);
seq__21535_21540 = G__21557;
chunk__21536_21541 = G__21558;
count__21537_21542 = G__21559;
i__21538_21543 = G__21560;
continue;
}
}
} else
{}
}
break;
}
}catch (e21534){if((e21534 instanceof Error))
{var e_21561 = e21534;domina.replace_children_BANG_.call(null,content,value_21539);
} else
{throw e21534;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21568_21572 = cljs.core.seq.call(null,children);var chunk__21569_21573 = null;var count__21570_21574 = (0);var i__21571_21575 = (0);while(true){
if((i__21571_21575 < count__21570_21574))
{var child_21576 = cljs.core._nth.call(null,chunk__21569_21573,i__21571_21575);frag.appendChild(child_21576);
{
var G__21577 = seq__21568_21572;
var G__21578 = chunk__21569_21573;
var G__21579 = count__21570_21574;
var G__21580 = (i__21571_21575 + (1));
seq__21568_21572 = G__21577;
chunk__21569_21573 = G__21578;
count__21570_21574 = G__21579;
i__21571_21575 = G__21580;
continue;
}
} else
{var temp__4126__auto___21581 = cljs.core.seq.call(null,seq__21568_21572);if(temp__4126__auto___21581)
{var seq__21568_21582__$1 = temp__4126__auto___21581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21568_21582__$1))
{var c__4408__auto___21583 = cljs.core.chunk_first.call(null,seq__21568_21582__$1);{
var G__21584 = cljs.core.chunk_rest.call(null,seq__21568_21582__$1);
var G__21585 = c__4408__auto___21583;
var G__21586 = cljs.core.count.call(null,c__4408__auto___21583);
var G__21587 = (0);
seq__21568_21572 = G__21584;
chunk__21569_21573 = G__21585;
count__21570_21574 = G__21586;
i__21571_21575 = G__21587;
continue;
}
} else
{var child_21588 = cljs.core.first.call(null,seq__21568_21582__$1);frag.appendChild(child_21588);
{
var G__21589 = cljs.core.next.call(null,seq__21568_21582__$1);
var G__21590 = null;
var G__21591 = (0);
var G__21592 = (0);
seq__21568_21572 = G__21589;
chunk__21569_21573 = G__21590;
count__21570_21574 = G__21591;
i__21571_21575 = G__21592;
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
return (function (p1__21562_SHARP_,p2__21563_SHARP_){return f.call(null,p1__21562_SHARP_,p2__21563_SHARP_);
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
{if((function (){var G__21594 = list_thing;if(G__21594)
{var bit__4302__auto__ = (G__21594.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21594.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21594);
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
{if((function (){var G__21595 = content;if(G__21595)
{var bit__4302__auto__ = (G__21595.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21595.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21595);
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
{if((function (){var G__21596 = content;if(G__21596)
{var bit__4302__auto__ = (G__21596.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21596.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21596);
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
