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
var opt_wrapper_21182 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21183 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21184 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21184,opt_wrapper_21182,table_section_wrapper_21183,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21182,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21183,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21183,cell_wrapper_21184,table_section_wrapper_21183,table_section_wrapper_21183]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21189 = cljs.core.seq.call(null,tbody);var chunk__21190 = null;var count__21191 = (0);var i__21192 = (0);while(true){
if((i__21192 < count__21191))
{var child = cljs.core._nth.call(null,chunk__21190,i__21192);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21193 = seq__21189;
var G__21194 = chunk__21190;
var G__21195 = count__21191;
var G__21196 = (i__21192 + (1));
seq__21189 = G__21193;
chunk__21190 = G__21194;
count__21191 = G__21195;
i__21192 = G__21196;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21189);if(temp__4126__auto__)
{var seq__21189__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21189__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21189__$1);{
var G__21197 = cljs.core.chunk_rest.call(null,seq__21189__$1);
var G__21198 = c__4408__auto__;
var G__21199 = cljs.core.count.call(null,c__4408__auto__);
var G__21200 = (0);
seq__21189 = G__21197;
chunk__21190 = G__21198;
count__21191 = G__21199;
i__21192 = G__21200;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21189__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21201 = cljs.core.next.call(null,seq__21189__$1);
var G__21202 = null;
var G__21203 = (0);
var G__21204 = (0);
seq__21189 = G__21201;
chunk__21190 = G__21202;
count__21191 = G__21203;
i__21192 = G__21204;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21206 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21206,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21206,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21206,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21207 = wrapper.lastChild;
var G__21208 = (level - (1));
wrapper = G__21207;
level = G__21208;
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
domina.DomContent = (function (){var obj21210 = {};return obj21210;
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
log_debug.cljs$lang$applyTo = (function (arglist__21211){
var mesg = cljs.core.seq(arglist__21211);
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
log.cljs$lang$applyTo = (function (arglist__21212){
var mesg = cljs.core.seq(arglist__21212);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21213){
var contents = cljs.core.seq(arglist__21213);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21214_SHARP_){return p1__21214_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21215_SHARP_,p2__21216_SHARP_){return goog.dom.insertChildAt(p1__21215_SHARP_,p2__21216_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21218_SHARP_,p2__21217_SHARP_){return goog.dom.insertSiblingBefore(p2__21217_SHARP_,p1__21218_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21220_SHARP_,p2__21219_SHARP_){return goog.dom.insertSiblingAfter(p2__21219_SHARP_,p1__21220_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21222_SHARP_,p2__21221_SHARP_){return goog.dom.replaceNode(p2__21221_SHARP_,p1__21222_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21227_21231 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21228_21232 = null;var count__21229_21233 = (0);var i__21230_21234 = (0);while(true){
if((i__21230_21234 < count__21229_21233))
{var n_21235 = cljs.core._nth.call(null,chunk__21228_21232,i__21230_21234);goog.style.setStyle(n_21235,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21236 = seq__21227_21231;
var G__21237 = chunk__21228_21232;
var G__21238 = count__21229_21233;
var G__21239 = (i__21230_21234 + (1));
seq__21227_21231 = G__21236;
chunk__21228_21232 = G__21237;
count__21229_21233 = G__21238;
i__21230_21234 = G__21239;
continue;
}
} else
{var temp__4126__auto___21240 = cljs.core.seq.call(null,seq__21227_21231);if(temp__4126__auto___21240)
{var seq__21227_21241__$1 = temp__4126__auto___21240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21227_21241__$1))
{var c__4408__auto___21242 = cljs.core.chunk_first.call(null,seq__21227_21241__$1);{
var G__21243 = cljs.core.chunk_rest.call(null,seq__21227_21241__$1);
var G__21244 = c__4408__auto___21242;
var G__21245 = cljs.core.count.call(null,c__4408__auto___21242);
var G__21246 = (0);
seq__21227_21231 = G__21243;
chunk__21228_21232 = G__21244;
count__21229_21233 = G__21245;
i__21230_21234 = G__21246;
continue;
}
} else
{var n_21247 = cljs.core.first.call(null,seq__21227_21241__$1);goog.style.setStyle(n_21247,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21248 = cljs.core.next.call(null,seq__21227_21241__$1);
var G__21249 = null;
var G__21250 = (0);
var G__21251 = (0);
seq__21227_21231 = G__21248;
chunk__21228_21232 = G__21249;
count__21229_21233 = G__21250;
i__21230_21234 = G__21251;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21252){
var content = cljs.core.first(arglist__21252);
arglist__21252 = cljs.core.next(arglist__21252);
var name = cljs.core.first(arglist__21252);
var value = cljs.core.rest(arglist__21252);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21257_21261 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21258_21262 = null;var count__21259_21263 = (0);var i__21260_21264 = (0);while(true){
if((i__21260_21264 < count__21259_21263))
{var n_21265 = cljs.core._nth.call(null,chunk__21258_21262,i__21260_21264);n_21265.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21266 = seq__21257_21261;
var G__21267 = chunk__21258_21262;
var G__21268 = count__21259_21263;
var G__21269 = (i__21260_21264 + (1));
seq__21257_21261 = G__21266;
chunk__21258_21262 = G__21267;
count__21259_21263 = G__21268;
i__21260_21264 = G__21269;
continue;
}
} else
{var temp__4126__auto___21270 = cljs.core.seq.call(null,seq__21257_21261);if(temp__4126__auto___21270)
{var seq__21257_21271__$1 = temp__4126__auto___21270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21257_21271__$1))
{var c__4408__auto___21272 = cljs.core.chunk_first.call(null,seq__21257_21271__$1);{
var G__21273 = cljs.core.chunk_rest.call(null,seq__21257_21271__$1);
var G__21274 = c__4408__auto___21272;
var G__21275 = cljs.core.count.call(null,c__4408__auto___21272);
var G__21276 = (0);
seq__21257_21261 = G__21273;
chunk__21258_21262 = G__21274;
count__21259_21263 = G__21275;
i__21260_21264 = G__21276;
continue;
}
} else
{var n_21277 = cljs.core.first.call(null,seq__21257_21271__$1);n_21277.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21278 = cljs.core.next.call(null,seq__21257_21271__$1);
var G__21279 = null;
var G__21280 = (0);
var G__21281 = (0);
seq__21257_21261 = G__21278;
chunk__21258_21262 = G__21279;
count__21259_21263 = G__21280;
i__21260_21264 = G__21281;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21282){
var content = cljs.core.first(arglist__21282);
arglist__21282 = cljs.core.next(arglist__21282);
var name = cljs.core.first(arglist__21282);
var value = cljs.core.rest(arglist__21282);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21287_21291 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21288_21292 = null;var count__21289_21293 = (0);var i__21290_21294 = (0);while(true){
if((i__21290_21294 < count__21289_21293))
{var n_21295 = cljs.core._nth.call(null,chunk__21288_21292,i__21290_21294);n_21295.removeAttribute(cljs.core.name.call(null,name));
{
var G__21296 = seq__21287_21291;
var G__21297 = chunk__21288_21292;
var G__21298 = count__21289_21293;
var G__21299 = (i__21290_21294 + (1));
seq__21287_21291 = G__21296;
chunk__21288_21292 = G__21297;
count__21289_21293 = G__21298;
i__21290_21294 = G__21299;
continue;
}
} else
{var temp__4126__auto___21300 = cljs.core.seq.call(null,seq__21287_21291);if(temp__4126__auto___21300)
{var seq__21287_21301__$1 = temp__4126__auto___21300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21287_21301__$1))
{var c__4408__auto___21302 = cljs.core.chunk_first.call(null,seq__21287_21301__$1);{
var G__21303 = cljs.core.chunk_rest.call(null,seq__21287_21301__$1);
var G__21304 = c__4408__auto___21302;
var G__21305 = cljs.core.count.call(null,c__4408__auto___21302);
var G__21306 = (0);
seq__21287_21291 = G__21303;
chunk__21288_21292 = G__21304;
count__21289_21293 = G__21305;
i__21290_21294 = G__21306;
continue;
}
} else
{var n_21307 = cljs.core.first.call(null,seq__21287_21301__$1);n_21307.removeAttribute(cljs.core.name.call(null,name));
{
var G__21308 = cljs.core.next.call(null,seq__21287_21301__$1);
var G__21309 = null;
var G__21310 = (0);
var G__21311 = (0);
seq__21287_21291 = G__21308;
chunk__21288_21292 = G__21309;
count__21289_21293 = G__21310;
i__21290_21294 = G__21311;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21313 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21313,(0),null);var v = cljs.core.nth.call(null,vec__21313,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21314_SHARP_){var attr = attrs__$1.item(p1__21314_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21321_21327 = cljs.core.seq.call(null,styles);var chunk__21322_21328 = null;var count__21323_21329 = (0);var i__21324_21330 = (0);while(true){
if((i__21324_21330 < count__21323_21329))
{var vec__21325_21331 = cljs.core._nth.call(null,chunk__21322_21328,i__21324_21330);var name_21332 = cljs.core.nth.call(null,vec__21325_21331,(0),null);var value_21333 = cljs.core.nth.call(null,vec__21325_21331,(1),null);domina.set_style_BANG_.call(null,content,name_21332,value_21333);
{
var G__21334 = seq__21321_21327;
var G__21335 = chunk__21322_21328;
var G__21336 = count__21323_21329;
var G__21337 = (i__21324_21330 + (1));
seq__21321_21327 = G__21334;
chunk__21322_21328 = G__21335;
count__21323_21329 = G__21336;
i__21324_21330 = G__21337;
continue;
}
} else
{var temp__4126__auto___21338 = cljs.core.seq.call(null,seq__21321_21327);if(temp__4126__auto___21338)
{var seq__21321_21339__$1 = temp__4126__auto___21338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21321_21339__$1))
{var c__4408__auto___21340 = cljs.core.chunk_first.call(null,seq__21321_21339__$1);{
var G__21341 = cljs.core.chunk_rest.call(null,seq__21321_21339__$1);
var G__21342 = c__4408__auto___21340;
var G__21343 = cljs.core.count.call(null,c__4408__auto___21340);
var G__21344 = (0);
seq__21321_21327 = G__21341;
chunk__21322_21328 = G__21342;
count__21323_21329 = G__21343;
i__21324_21330 = G__21344;
continue;
}
} else
{var vec__21326_21345 = cljs.core.first.call(null,seq__21321_21339__$1);var name_21346 = cljs.core.nth.call(null,vec__21326_21345,(0),null);var value_21347 = cljs.core.nth.call(null,vec__21326_21345,(1),null);domina.set_style_BANG_.call(null,content,name_21346,value_21347);
{
var G__21348 = cljs.core.next.call(null,seq__21321_21339__$1);
var G__21349 = null;
var G__21350 = (0);
var G__21351 = (0);
seq__21321_21327 = G__21348;
chunk__21322_21328 = G__21349;
count__21323_21329 = G__21350;
i__21324_21330 = G__21351;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21358_21364 = cljs.core.seq.call(null,attrs);var chunk__21359_21365 = null;var count__21360_21366 = (0);var i__21361_21367 = (0);while(true){
if((i__21361_21367 < count__21360_21366))
{var vec__21362_21368 = cljs.core._nth.call(null,chunk__21359_21365,i__21361_21367);var name_21369 = cljs.core.nth.call(null,vec__21362_21368,(0),null);var value_21370 = cljs.core.nth.call(null,vec__21362_21368,(1),null);domina.set_attr_BANG_.call(null,content,name_21369,value_21370);
{
var G__21371 = seq__21358_21364;
var G__21372 = chunk__21359_21365;
var G__21373 = count__21360_21366;
var G__21374 = (i__21361_21367 + (1));
seq__21358_21364 = G__21371;
chunk__21359_21365 = G__21372;
count__21360_21366 = G__21373;
i__21361_21367 = G__21374;
continue;
}
} else
{var temp__4126__auto___21375 = cljs.core.seq.call(null,seq__21358_21364);if(temp__4126__auto___21375)
{var seq__21358_21376__$1 = temp__4126__auto___21375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358_21376__$1))
{var c__4408__auto___21377 = cljs.core.chunk_first.call(null,seq__21358_21376__$1);{
var G__21378 = cljs.core.chunk_rest.call(null,seq__21358_21376__$1);
var G__21379 = c__4408__auto___21377;
var G__21380 = cljs.core.count.call(null,c__4408__auto___21377);
var G__21381 = (0);
seq__21358_21364 = G__21378;
chunk__21359_21365 = G__21379;
count__21360_21366 = G__21380;
i__21361_21367 = G__21381;
continue;
}
} else
{var vec__21363_21382 = cljs.core.first.call(null,seq__21358_21376__$1);var name_21383 = cljs.core.nth.call(null,vec__21363_21382,(0),null);var value_21384 = cljs.core.nth.call(null,vec__21363_21382,(1),null);domina.set_attr_BANG_.call(null,content,name_21383,value_21384);
{
var G__21385 = cljs.core.next.call(null,seq__21358_21376__$1);
var G__21386 = null;
var G__21387 = (0);
var G__21388 = (0);
seq__21358_21364 = G__21385;
chunk__21359_21365 = G__21386;
count__21360_21366 = G__21387;
i__21361_21367 = G__21388;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21393_21397 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21394_21398 = null;var count__21395_21399 = (0);var i__21396_21400 = (0);while(true){
if((i__21396_21400 < count__21395_21399))
{var node_21401 = cljs.core._nth.call(null,chunk__21394_21398,i__21396_21400);goog.dom.classes.add(node_21401,class$);
{
var G__21402 = seq__21393_21397;
var G__21403 = chunk__21394_21398;
var G__21404 = count__21395_21399;
var G__21405 = (i__21396_21400 + (1));
seq__21393_21397 = G__21402;
chunk__21394_21398 = G__21403;
count__21395_21399 = G__21404;
i__21396_21400 = G__21405;
continue;
}
} else
{var temp__4126__auto___21406 = cljs.core.seq.call(null,seq__21393_21397);if(temp__4126__auto___21406)
{var seq__21393_21407__$1 = temp__4126__auto___21406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21393_21407__$1))
{var c__4408__auto___21408 = cljs.core.chunk_first.call(null,seq__21393_21407__$1);{
var G__21409 = cljs.core.chunk_rest.call(null,seq__21393_21407__$1);
var G__21410 = c__4408__auto___21408;
var G__21411 = cljs.core.count.call(null,c__4408__auto___21408);
var G__21412 = (0);
seq__21393_21397 = G__21409;
chunk__21394_21398 = G__21410;
count__21395_21399 = G__21411;
i__21396_21400 = G__21412;
continue;
}
} else
{var node_21413 = cljs.core.first.call(null,seq__21393_21407__$1);goog.dom.classes.add(node_21413,class$);
{
var G__21414 = cljs.core.next.call(null,seq__21393_21407__$1);
var G__21415 = null;
var G__21416 = (0);
var G__21417 = (0);
seq__21393_21397 = G__21414;
chunk__21394_21398 = G__21415;
count__21395_21399 = G__21416;
i__21396_21400 = G__21417;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21422_21426 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21423_21427 = null;var count__21424_21428 = (0);var i__21425_21429 = (0);while(true){
if((i__21425_21429 < count__21424_21428))
{var node_21430 = cljs.core._nth.call(null,chunk__21423_21427,i__21425_21429);goog.dom.classes.remove(node_21430,class$);
{
var G__21431 = seq__21422_21426;
var G__21432 = chunk__21423_21427;
var G__21433 = count__21424_21428;
var G__21434 = (i__21425_21429 + (1));
seq__21422_21426 = G__21431;
chunk__21423_21427 = G__21432;
count__21424_21428 = G__21433;
i__21425_21429 = G__21434;
continue;
}
} else
{var temp__4126__auto___21435 = cljs.core.seq.call(null,seq__21422_21426);if(temp__4126__auto___21435)
{var seq__21422_21436__$1 = temp__4126__auto___21435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21422_21436__$1))
{var c__4408__auto___21437 = cljs.core.chunk_first.call(null,seq__21422_21436__$1);{
var G__21438 = cljs.core.chunk_rest.call(null,seq__21422_21436__$1);
var G__21439 = c__4408__auto___21437;
var G__21440 = cljs.core.count.call(null,c__4408__auto___21437);
var G__21441 = (0);
seq__21422_21426 = G__21438;
chunk__21423_21427 = G__21439;
count__21424_21428 = G__21440;
i__21425_21429 = G__21441;
continue;
}
} else
{var node_21442 = cljs.core.first.call(null,seq__21422_21436__$1);goog.dom.classes.remove(node_21442,class$);
{
var G__21443 = cljs.core.next.call(null,seq__21422_21436__$1);
var G__21444 = null;
var G__21445 = (0);
var G__21446 = (0);
seq__21422_21426 = G__21443;
chunk__21423_21427 = G__21444;
count__21424_21428 = G__21445;
i__21425_21429 = G__21446;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21451_21455 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21452_21456 = null;var count__21453_21457 = (0);var i__21454_21458 = (0);while(true){
if((i__21454_21458 < count__21453_21457))
{var node_21459 = cljs.core._nth.call(null,chunk__21452_21456,i__21454_21458);goog.dom.classes.toggle(node_21459,class$);
{
var G__21460 = seq__21451_21455;
var G__21461 = chunk__21452_21456;
var G__21462 = count__21453_21457;
var G__21463 = (i__21454_21458 + (1));
seq__21451_21455 = G__21460;
chunk__21452_21456 = G__21461;
count__21453_21457 = G__21462;
i__21454_21458 = G__21463;
continue;
}
} else
{var temp__4126__auto___21464 = cljs.core.seq.call(null,seq__21451_21455);if(temp__4126__auto___21464)
{var seq__21451_21465__$1 = temp__4126__auto___21464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21451_21465__$1))
{var c__4408__auto___21466 = cljs.core.chunk_first.call(null,seq__21451_21465__$1);{
var G__21467 = cljs.core.chunk_rest.call(null,seq__21451_21465__$1);
var G__21468 = c__4408__auto___21466;
var G__21469 = cljs.core.count.call(null,c__4408__auto___21466);
var G__21470 = (0);
seq__21451_21455 = G__21467;
chunk__21452_21456 = G__21468;
count__21453_21457 = G__21469;
i__21454_21458 = G__21470;
continue;
}
} else
{var node_21471 = cljs.core.first.call(null,seq__21451_21465__$1);goog.dom.classes.toggle(node_21471,class$);
{
var G__21472 = cljs.core.next.call(null,seq__21451_21465__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__21451_21455 = G__21472;
chunk__21452_21456 = G__21473;
count__21453_21457 = G__21474;
i__21454_21458 = G__21475;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21484__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21480_21485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21481_21486 = null;var count__21482_21487 = (0);var i__21483_21488 = (0);while(true){
if((i__21483_21488 < count__21482_21487))
{var node_21489 = cljs.core._nth.call(null,chunk__21481_21486,i__21483_21488);goog.dom.classes.set(node_21489,classes_21484__$1);
{
var G__21490 = seq__21480_21485;
var G__21491 = chunk__21481_21486;
var G__21492 = count__21482_21487;
var G__21493 = (i__21483_21488 + (1));
seq__21480_21485 = G__21490;
chunk__21481_21486 = G__21491;
count__21482_21487 = G__21492;
i__21483_21488 = G__21493;
continue;
}
} else
{var temp__4126__auto___21494 = cljs.core.seq.call(null,seq__21480_21485);if(temp__4126__auto___21494)
{var seq__21480_21495__$1 = temp__4126__auto___21494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21480_21495__$1))
{var c__4408__auto___21496 = cljs.core.chunk_first.call(null,seq__21480_21495__$1);{
var G__21497 = cljs.core.chunk_rest.call(null,seq__21480_21495__$1);
var G__21498 = c__4408__auto___21496;
var G__21499 = cljs.core.count.call(null,c__4408__auto___21496);
var G__21500 = (0);
seq__21480_21485 = G__21497;
chunk__21481_21486 = G__21498;
count__21482_21487 = G__21499;
i__21483_21488 = G__21500;
continue;
}
} else
{var node_21501 = cljs.core.first.call(null,seq__21480_21495__$1);goog.dom.classes.set(node_21501,classes_21484__$1);
{
var G__21502 = cljs.core.next.call(null,seq__21480_21495__$1);
var G__21503 = null;
var G__21504 = (0);
var G__21505 = (0);
seq__21480_21485 = G__21502;
chunk__21481_21486 = G__21503;
count__21482_21487 = G__21504;
i__21483_21488 = G__21505;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21510_21514 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21511_21515 = null;var count__21512_21516 = (0);var i__21513_21517 = (0);while(true){
if((i__21513_21517 < count__21512_21516))
{var node_21518 = cljs.core._nth.call(null,chunk__21511_21515,i__21513_21517);goog.dom.setTextContent(node_21518,value);
{
var G__21519 = seq__21510_21514;
var G__21520 = chunk__21511_21515;
var G__21521 = count__21512_21516;
var G__21522 = (i__21513_21517 + (1));
seq__21510_21514 = G__21519;
chunk__21511_21515 = G__21520;
count__21512_21516 = G__21521;
i__21513_21517 = G__21522;
continue;
}
} else
{var temp__4126__auto___21523 = cljs.core.seq.call(null,seq__21510_21514);if(temp__4126__auto___21523)
{var seq__21510_21524__$1 = temp__4126__auto___21523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21510_21524__$1))
{var c__4408__auto___21525 = cljs.core.chunk_first.call(null,seq__21510_21524__$1);{
var G__21526 = cljs.core.chunk_rest.call(null,seq__21510_21524__$1);
var G__21527 = c__4408__auto___21525;
var G__21528 = cljs.core.count.call(null,c__4408__auto___21525);
var G__21529 = (0);
seq__21510_21514 = G__21526;
chunk__21511_21515 = G__21527;
count__21512_21516 = G__21528;
i__21513_21517 = G__21529;
continue;
}
} else
{var node_21530 = cljs.core.first.call(null,seq__21510_21524__$1);goog.dom.setTextContent(node_21530,value);
{
var G__21531 = cljs.core.next.call(null,seq__21510_21524__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21510_21514 = G__21531;
chunk__21511_21515 = G__21532;
count__21512_21516 = G__21533;
i__21513_21517 = G__21534;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21539_21543 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21540_21544 = null;var count__21541_21545 = (0);var i__21542_21546 = (0);while(true){
if((i__21542_21546 < count__21541_21545))
{var node_21547 = cljs.core._nth.call(null,chunk__21540_21544,i__21542_21546);goog.dom.forms.setValue(node_21547,value);
{
var G__21548 = seq__21539_21543;
var G__21549 = chunk__21540_21544;
var G__21550 = count__21541_21545;
var G__21551 = (i__21542_21546 + (1));
seq__21539_21543 = G__21548;
chunk__21540_21544 = G__21549;
count__21541_21545 = G__21550;
i__21542_21546 = G__21551;
continue;
}
} else
{var temp__4126__auto___21552 = cljs.core.seq.call(null,seq__21539_21543);if(temp__4126__auto___21552)
{var seq__21539_21553__$1 = temp__4126__auto___21552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21539_21553__$1))
{var c__4408__auto___21554 = cljs.core.chunk_first.call(null,seq__21539_21553__$1);{
var G__21555 = cljs.core.chunk_rest.call(null,seq__21539_21553__$1);
var G__21556 = c__4408__auto___21554;
var G__21557 = cljs.core.count.call(null,c__4408__auto___21554);
var G__21558 = (0);
seq__21539_21543 = G__21555;
chunk__21540_21544 = G__21556;
count__21541_21545 = G__21557;
i__21542_21546 = G__21558;
continue;
}
} else
{var node_21559 = cljs.core.first.call(null,seq__21539_21553__$1);goog.dom.forms.setValue(node_21559,value);
{
var G__21560 = cljs.core.next.call(null,seq__21539_21553__$1);
var G__21561 = null;
var G__21562 = (0);
var G__21563 = (0);
seq__21539_21543 = G__21560;
chunk__21540_21544 = G__21561;
count__21541_21545 = G__21562;
i__21542_21546 = G__21563;
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
{var value_21574 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21570_21575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21571_21576 = null;var count__21572_21577 = (0);var i__21573_21578 = (0);while(true){
if((i__21573_21578 < count__21572_21577))
{var node_21579 = cljs.core._nth.call(null,chunk__21571_21576,i__21573_21578);node_21579.innerHTML = value_21574;
{
var G__21580 = seq__21570_21575;
var G__21581 = chunk__21571_21576;
var G__21582 = count__21572_21577;
var G__21583 = (i__21573_21578 + (1));
seq__21570_21575 = G__21580;
chunk__21571_21576 = G__21581;
count__21572_21577 = G__21582;
i__21573_21578 = G__21583;
continue;
}
} else
{var temp__4126__auto___21584 = cljs.core.seq.call(null,seq__21570_21575);if(temp__4126__auto___21584)
{var seq__21570_21585__$1 = temp__4126__auto___21584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21570_21585__$1))
{var c__4408__auto___21586 = cljs.core.chunk_first.call(null,seq__21570_21585__$1);{
var G__21587 = cljs.core.chunk_rest.call(null,seq__21570_21585__$1);
var G__21588 = c__4408__auto___21586;
var G__21589 = cljs.core.count.call(null,c__4408__auto___21586);
var G__21590 = (0);
seq__21570_21575 = G__21587;
chunk__21571_21576 = G__21588;
count__21572_21577 = G__21589;
i__21573_21578 = G__21590;
continue;
}
} else
{var node_21591 = cljs.core.first.call(null,seq__21570_21585__$1);node_21591.innerHTML = value_21574;
{
var G__21592 = cljs.core.next.call(null,seq__21570_21585__$1);
var G__21593 = null;
var G__21594 = (0);
var G__21595 = (0);
seq__21570_21575 = G__21592;
chunk__21571_21576 = G__21593;
count__21572_21577 = G__21594;
i__21573_21578 = G__21595;
continue;
}
}
} else
{}
}
break;
}
}catch (e21569){if((e21569 instanceof Error))
{var e_21596 = e21569;domina.replace_children_BANG_.call(null,content,value_21574);
} else
{throw e21569;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21603_21607 = cljs.core.seq.call(null,children);var chunk__21604_21608 = null;var count__21605_21609 = (0);var i__21606_21610 = (0);while(true){
if((i__21606_21610 < count__21605_21609))
{var child_21611 = cljs.core._nth.call(null,chunk__21604_21608,i__21606_21610);frag.appendChild(child_21611);
{
var G__21612 = seq__21603_21607;
var G__21613 = chunk__21604_21608;
var G__21614 = count__21605_21609;
var G__21615 = (i__21606_21610 + (1));
seq__21603_21607 = G__21612;
chunk__21604_21608 = G__21613;
count__21605_21609 = G__21614;
i__21606_21610 = G__21615;
continue;
}
} else
{var temp__4126__auto___21616 = cljs.core.seq.call(null,seq__21603_21607);if(temp__4126__auto___21616)
{var seq__21603_21617__$1 = temp__4126__auto___21616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21603_21617__$1))
{var c__4408__auto___21618 = cljs.core.chunk_first.call(null,seq__21603_21617__$1);{
var G__21619 = cljs.core.chunk_rest.call(null,seq__21603_21617__$1);
var G__21620 = c__4408__auto___21618;
var G__21621 = cljs.core.count.call(null,c__4408__auto___21618);
var G__21622 = (0);
seq__21603_21607 = G__21619;
chunk__21604_21608 = G__21620;
count__21605_21609 = G__21621;
i__21606_21610 = G__21622;
continue;
}
} else
{var child_21623 = cljs.core.first.call(null,seq__21603_21617__$1);frag.appendChild(child_21623);
{
var G__21624 = cljs.core.next.call(null,seq__21603_21617__$1);
var G__21625 = null;
var G__21626 = (0);
var G__21627 = (0);
seq__21603_21607 = G__21624;
chunk__21604_21608 = G__21625;
count__21605_21609 = G__21626;
i__21606_21610 = G__21627;
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
return (function (p1__21597_SHARP_,p2__21598_SHARP_){return f.call(null,p1__21597_SHARP_,p2__21598_SHARP_);
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
{if((function (){var G__21629 = list_thing;if(G__21629)
{var bit__4302__auto__ = (G__21629.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21629.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21629.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21629);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21629);
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
{if((function (){var G__21630 = content;if(G__21630)
{var bit__4302__auto__ = (G__21630.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21630.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21630.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21630);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21630);
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
{if((function (){var G__21631 = content;if(G__21631)
{var bit__4302__auto__ = (G__21631.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21631.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21631.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21631);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21631);
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
