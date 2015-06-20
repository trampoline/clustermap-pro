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
var opt_wrapper_21185 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21187,opt_wrapper_21185,table_section_wrapper_21186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21185,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21186,cell_wrapper_21187,table_section_wrapper_21186,table_section_wrapper_21186]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21192 = cljs.core.seq.call(null,tbody);var chunk__21193 = null;var count__21194 = (0);var i__21195 = (0);while(true){
if((i__21195 < count__21194))
{var child = cljs.core._nth.call(null,chunk__21193,i__21195);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21196 = seq__21192;
var G__21197 = chunk__21193;
var G__21198 = count__21194;
var G__21199 = (i__21195 + (1));
seq__21192 = G__21196;
chunk__21193 = G__21197;
count__21194 = G__21198;
i__21195 = G__21199;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21192);if(temp__4126__auto__)
{var seq__21192__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21192__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21192__$1);{
var G__21200 = cljs.core.chunk_rest.call(null,seq__21192__$1);
var G__21201 = c__4408__auto__;
var G__21202 = cljs.core.count.call(null,c__4408__auto__);
var G__21203 = (0);
seq__21192 = G__21200;
chunk__21193 = G__21201;
count__21194 = G__21202;
i__21195 = G__21203;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21192__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21204 = cljs.core.next.call(null,seq__21192__$1);
var G__21205 = null;
var G__21206 = (0);
var G__21207 = (0);
seq__21192 = G__21204;
chunk__21193 = G__21205;
count__21194 = G__21206;
i__21195 = G__21207;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21209 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21209,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21209,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21209,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21210 = wrapper.lastChild;
var G__21211 = (level - (1));
wrapper = G__21210;
level = G__21211;
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
domina.DomContent = (function (){var obj21213 = {};return obj21213;
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
log_debug.cljs$lang$applyTo = (function (arglist__21214){
var mesg = cljs.core.seq(arglist__21214);
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
log.cljs$lang$applyTo = (function (arglist__21215){
var mesg = cljs.core.seq(arglist__21215);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21216){
var contents = cljs.core.seq(arglist__21216);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21217_SHARP_){return p1__21217_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21218_SHARP_,p2__21219_SHARP_){return goog.dom.insertChildAt(p1__21218_SHARP_,p2__21219_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21221_SHARP_,p2__21220_SHARP_){return goog.dom.insertSiblingBefore(p2__21220_SHARP_,p1__21221_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21223_SHARP_,p2__21222_SHARP_){return goog.dom.insertSiblingAfter(p2__21222_SHARP_,p1__21223_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21225_SHARP_,p2__21224_SHARP_){return goog.dom.replaceNode(p2__21224_SHARP_,p1__21225_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21230_21234 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21231_21235 = null;var count__21232_21236 = (0);var i__21233_21237 = (0);while(true){
if((i__21233_21237 < count__21232_21236))
{var n_21238 = cljs.core._nth.call(null,chunk__21231_21235,i__21233_21237);goog.style.setStyle(n_21238,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21239 = seq__21230_21234;
var G__21240 = chunk__21231_21235;
var G__21241 = count__21232_21236;
var G__21242 = (i__21233_21237 + (1));
seq__21230_21234 = G__21239;
chunk__21231_21235 = G__21240;
count__21232_21236 = G__21241;
i__21233_21237 = G__21242;
continue;
}
} else
{var temp__4126__auto___21243 = cljs.core.seq.call(null,seq__21230_21234);if(temp__4126__auto___21243)
{var seq__21230_21244__$1 = temp__4126__auto___21243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21230_21244__$1))
{var c__4408__auto___21245 = cljs.core.chunk_first.call(null,seq__21230_21244__$1);{
var G__21246 = cljs.core.chunk_rest.call(null,seq__21230_21244__$1);
var G__21247 = c__4408__auto___21245;
var G__21248 = cljs.core.count.call(null,c__4408__auto___21245);
var G__21249 = (0);
seq__21230_21234 = G__21246;
chunk__21231_21235 = G__21247;
count__21232_21236 = G__21248;
i__21233_21237 = G__21249;
continue;
}
} else
{var n_21250 = cljs.core.first.call(null,seq__21230_21244__$1);goog.style.setStyle(n_21250,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21251 = cljs.core.next.call(null,seq__21230_21244__$1);
var G__21252 = null;
var G__21253 = (0);
var G__21254 = (0);
seq__21230_21234 = G__21251;
chunk__21231_21235 = G__21252;
count__21232_21236 = G__21253;
i__21233_21237 = G__21254;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21255){
var content = cljs.core.first(arglist__21255);
arglist__21255 = cljs.core.next(arglist__21255);
var name = cljs.core.first(arglist__21255);
var value = cljs.core.rest(arglist__21255);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21260_21264 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21261_21265 = null;var count__21262_21266 = (0);var i__21263_21267 = (0);while(true){
if((i__21263_21267 < count__21262_21266))
{var n_21268 = cljs.core._nth.call(null,chunk__21261_21265,i__21263_21267);n_21268.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21269 = seq__21260_21264;
var G__21270 = chunk__21261_21265;
var G__21271 = count__21262_21266;
var G__21272 = (i__21263_21267 + (1));
seq__21260_21264 = G__21269;
chunk__21261_21265 = G__21270;
count__21262_21266 = G__21271;
i__21263_21267 = G__21272;
continue;
}
} else
{var temp__4126__auto___21273 = cljs.core.seq.call(null,seq__21260_21264);if(temp__4126__auto___21273)
{var seq__21260_21274__$1 = temp__4126__auto___21273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21260_21274__$1))
{var c__4408__auto___21275 = cljs.core.chunk_first.call(null,seq__21260_21274__$1);{
var G__21276 = cljs.core.chunk_rest.call(null,seq__21260_21274__$1);
var G__21277 = c__4408__auto___21275;
var G__21278 = cljs.core.count.call(null,c__4408__auto___21275);
var G__21279 = (0);
seq__21260_21264 = G__21276;
chunk__21261_21265 = G__21277;
count__21262_21266 = G__21278;
i__21263_21267 = G__21279;
continue;
}
} else
{var n_21280 = cljs.core.first.call(null,seq__21260_21274__$1);n_21280.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21281 = cljs.core.next.call(null,seq__21260_21274__$1);
var G__21282 = null;
var G__21283 = (0);
var G__21284 = (0);
seq__21260_21264 = G__21281;
chunk__21261_21265 = G__21282;
count__21262_21266 = G__21283;
i__21263_21267 = G__21284;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21285){
var content = cljs.core.first(arglist__21285);
arglist__21285 = cljs.core.next(arglist__21285);
var name = cljs.core.first(arglist__21285);
var value = cljs.core.rest(arglist__21285);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21290_21294 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21291_21295 = null;var count__21292_21296 = (0);var i__21293_21297 = (0);while(true){
if((i__21293_21297 < count__21292_21296))
{var n_21298 = cljs.core._nth.call(null,chunk__21291_21295,i__21293_21297);n_21298.removeAttribute(cljs.core.name.call(null,name));
{
var G__21299 = seq__21290_21294;
var G__21300 = chunk__21291_21295;
var G__21301 = count__21292_21296;
var G__21302 = (i__21293_21297 + (1));
seq__21290_21294 = G__21299;
chunk__21291_21295 = G__21300;
count__21292_21296 = G__21301;
i__21293_21297 = G__21302;
continue;
}
} else
{var temp__4126__auto___21303 = cljs.core.seq.call(null,seq__21290_21294);if(temp__4126__auto___21303)
{var seq__21290_21304__$1 = temp__4126__auto___21303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21290_21304__$1))
{var c__4408__auto___21305 = cljs.core.chunk_first.call(null,seq__21290_21304__$1);{
var G__21306 = cljs.core.chunk_rest.call(null,seq__21290_21304__$1);
var G__21307 = c__4408__auto___21305;
var G__21308 = cljs.core.count.call(null,c__4408__auto___21305);
var G__21309 = (0);
seq__21290_21294 = G__21306;
chunk__21291_21295 = G__21307;
count__21292_21296 = G__21308;
i__21293_21297 = G__21309;
continue;
}
} else
{var n_21310 = cljs.core.first.call(null,seq__21290_21304__$1);n_21310.removeAttribute(cljs.core.name.call(null,name));
{
var G__21311 = cljs.core.next.call(null,seq__21290_21304__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__21290_21294 = G__21311;
chunk__21291_21295 = G__21312;
count__21292_21296 = G__21313;
i__21293_21297 = G__21314;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21316 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21316,(0),null);var v = cljs.core.nth.call(null,vec__21316,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21317_SHARP_){var attr = attrs__$1.item(p1__21317_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21324_21330 = cljs.core.seq.call(null,styles);var chunk__21325_21331 = null;var count__21326_21332 = (0);var i__21327_21333 = (0);while(true){
if((i__21327_21333 < count__21326_21332))
{var vec__21328_21334 = cljs.core._nth.call(null,chunk__21325_21331,i__21327_21333);var name_21335 = cljs.core.nth.call(null,vec__21328_21334,(0),null);var value_21336 = cljs.core.nth.call(null,vec__21328_21334,(1),null);domina.set_style_BANG_.call(null,content,name_21335,value_21336);
{
var G__21337 = seq__21324_21330;
var G__21338 = chunk__21325_21331;
var G__21339 = count__21326_21332;
var G__21340 = (i__21327_21333 + (1));
seq__21324_21330 = G__21337;
chunk__21325_21331 = G__21338;
count__21326_21332 = G__21339;
i__21327_21333 = G__21340;
continue;
}
} else
{var temp__4126__auto___21341 = cljs.core.seq.call(null,seq__21324_21330);if(temp__4126__auto___21341)
{var seq__21324_21342__$1 = temp__4126__auto___21341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21324_21342__$1))
{var c__4408__auto___21343 = cljs.core.chunk_first.call(null,seq__21324_21342__$1);{
var G__21344 = cljs.core.chunk_rest.call(null,seq__21324_21342__$1);
var G__21345 = c__4408__auto___21343;
var G__21346 = cljs.core.count.call(null,c__4408__auto___21343);
var G__21347 = (0);
seq__21324_21330 = G__21344;
chunk__21325_21331 = G__21345;
count__21326_21332 = G__21346;
i__21327_21333 = G__21347;
continue;
}
} else
{var vec__21329_21348 = cljs.core.first.call(null,seq__21324_21342__$1);var name_21349 = cljs.core.nth.call(null,vec__21329_21348,(0),null);var value_21350 = cljs.core.nth.call(null,vec__21329_21348,(1),null);domina.set_style_BANG_.call(null,content,name_21349,value_21350);
{
var G__21351 = cljs.core.next.call(null,seq__21324_21342__$1);
var G__21352 = null;
var G__21353 = (0);
var G__21354 = (0);
seq__21324_21330 = G__21351;
chunk__21325_21331 = G__21352;
count__21326_21332 = G__21353;
i__21327_21333 = G__21354;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21361_21367 = cljs.core.seq.call(null,attrs);var chunk__21362_21368 = null;var count__21363_21369 = (0);var i__21364_21370 = (0);while(true){
if((i__21364_21370 < count__21363_21369))
{var vec__21365_21371 = cljs.core._nth.call(null,chunk__21362_21368,i__21364_21370);var name_21372 = cljs.core.nth.call(null,vec__21365_21371,(0),null);var value_21373 = cljs.core.nth.call(null,vec__21365_21371,(1),null);domina.set_attr_BANG_.call(null,content,name_21372,value_21373);
{
var G__21374 = seq__21361_21367;
var G__21375 = chunk__21362_21368;
var G__21376 = count__21363_21369;
var G__21377 = (i__21364_21370 + (1));
seq__21361_21367 = G__21374;
chunk__21362_21368 = G__21375;
count__21363_21369 = G__21376;
i__21364_21370 = G__21377;
continue;
}
} else
{var temp__4126__auto___21378 = cljs.core.seq.call(null,seq__21361_21367);if(temp__4126__auto___21378)
{var seq__21361_21379__$1 = temp__4126__auto___21378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21361_21379__$1))
{var c__4408__auto___21380 = cljs.core.chunk_first.call(null,seq__21361_21379__$1);{
var G__21381 = cljs.core.chunk_rest.call(null,seq__21361_21379__$1);
var G__21382 = c__4408__auto___21380;
var G__21383 = cljs.core.count.call(null,c__4408__auto___21380);
var G__21384 = (0);
seq__21361_21367 = G__21381;
chunk__21362_21368 = G__21382;
count__21363_21369 = G__21383;
i__21364_21370 = G__21384;
continue;
}
} else
{var vec__21366_21385 = cljs.core.first.call(null,seq__21361_21379__$1);var name_21386 = cljs.core.nth.call(null,vec__21366_21385,(0),null);var value_21387 = cljs.core.nth.call(null,vec__21366_21385,(1),null);domina.set_attr_BANG_.call(null,content,name_21386,value_21387);
{
var G__21388 = cljs.core.next.call(null,seq__21361_21379__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__21361_21367 = G__21388;
chunk__21362_21368 = G__21389;
count__21363_21369 = G__21390;
i__21364_21370 = G__21391;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21396_21400 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21397_21401 = null;var count__21398_21402 = (0);var i__21399_21403 = (0);while(true){
if((i__21399_21403 < count__21398_21402))
{var node_21404 = cljs.core._nth.call(null,chunk__21397_21401,i__21399_21403);goog.dom.classes.add(node_21404,class$);
{
var G__21405 = seq__21396_21400;
var G__21406 = chunk__21397_21401;
var G__21407 = count__21398_21402;
var G__21408 = (i__21399_21403 + (1));
seq__21396_21400 = G__21405;
chunk__21397_21401 = G__21406;
count__21398_21402 = G__21407;
i__21399_21403 = G__21408;
continue;
}
} else
{var temp__4126__auto___21409 = cljs.core.seq.call(null,seq__21396_21400);if(temp__4126__auto___21409)
{var seq__21396_21410__$1 = temp__4126__auto___21409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21396_21410__$1))
{var c__4408__auto___21411 = cljs.core.chunk_first.call(null,seq__21396_21410__$1);{
var G__21412 = cljs.core.chunk_rest.call(null,seq__21396_21410__$1);
var G__21413 = c__4408__auto___21411;
var G__21414 = cljs.core.count.call(null,c__4408__auto___21411);
var G__21415 = (0);
seq__21396_21400 = G__21412;
chunk__21397_21401 = G__21413;
count__21398_21402 = G__21414;
i__21399_21403 = G__21415;
continue;
}
} else
{var node_21416 = cljs.core.first.call(null,seq__21396_21410__$1);goog.dom.classes.add(node_21416,class$);
{
var G__21417 = cljs.core.next.call(null,seq__21396_21410__$1);
var G__21418 = null;
var G__21419 = (0);
var G__21420 = (0);
seq__21396_21400 = G__21417;
chunk__21397_21401 = G__21418;
count__21398_21402 = G__21419;
i__21399_21403 = G__21420;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21425_21429 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21426_21430 = null;var count__21427_21431 = (0);var i__21428_21432 = (0);while(true){
if((i__21428_21432 < count__21427_21431))
{var node_21433 = cljs.core._nth.call(null,chunk__21426_21430,i__21428_21432);goog.dom.classes.remove(node_21433,class$);
{
var G__21434 = seq__21425_21429;
var G__21435 = chunk__21426_21430;
var G__21436 = count__21427_21431;
var G__21437 = (i__21428_21432 + (1));
seq__21425_21429 = G__21434;
chunk__21426_21430 = G__21435;
count__21427_21431 = G__21436;
i__21428_21432 = G__21437;
continue;
}
} else
{var temp__4126__auto___21438 = cljs.core.seq.call(null,seq__21425_21429);if(temp__4126__auto___21438)
{var seq__21425_21439__$1 = temp__4126__auto___21438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21425_21439__$1))
{var c__4408__auto___21440 = cljs.core.chunk_first.call(null,seq__21425_21439__$1);{
var G__21441 = cljs.core.chunk_rest.call(null,seq__21425_21439__$1);
var G__21442 = c__4408__auto___21440;
var G__21443 = cljs.core.count.call(null,c__4408__auto___21440);
var G__21444 = (0);
seq__21425_21429 = G__21441;
chunk__21426_21430 = G__21442;
count__21427_21431 = G__21443;
i__21428_21432 = G__21444;
continue;
}
} else
{var node_21445 = cljs.core.first.call(null,seq__21425_21439__$1);goog.dom.classes.remove(node_21445,class$);
{
var G__21446 = cljs.core.next.call(null,seq__21425_21439__$1);
var G__21447 = null;
var G__21448 = (0);
var G__21449 = (0);
seq__21425_21429 = G__21446;
chunk__21426_21430 = G__21447;
count__21427_21431 = G__21448;
i__21428_21432 = G__21449;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21454_21458 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21455_21459 = null;var count__21456_21460 = (0);var i__21457_21461 = (0);while(true){
if((i__21457_21461 < count__21456_21460))
{var node_21462 = cljs.core._nth.call(null,chunk__21455_21459,i__21457_21461);goog.dom.classes.toggle(node_21462,class$);
{
var G__21463 = seq__21454_21458;
var G__21464 = chunk__21455_21459;
var G__21465 = count__21456_21460;
var G__21466 = (i__21457_21461 + (1));
seq__21454_21458 = G__21463;
chunk__21455_21459 = G__21464;
count__21456_21460 = G__21465;
i__21457_21461 = G__21466;
continue;
}
} else
{var temp__4126__auto___21467 = cljs.core.seq.call(null,seq__21454_21458);if(temp__4126__auto___21467)
{var seq__21454_21468__$1 = temp__4126__auto___21467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21454_21468__$1))
{var c__4408__auto___21469 = cljs.core.chunk_first.call(null,seq__21454_21468__$1);{
var G__21470 = cljs.core.chunk_rest.call(null,seq__21454_21468__$1);
var G__21471 = c__4408__auto___21469;
var G__21472 = cljs.core.count.call(null,c__4408__auto___21469);
var G__21473 = (0);
seq__21454_21458 = G__21470;
chunk__21455_21459 = G__21471;
count__21456_21460 = G__21472;
i__21457_21461 = G__21473;
continue;
}
} else
{var node_21474 = cljs.core.first.call(null,seq__21454_21468__$1);goog.dom.classes.toggle(node_21474,class$);
{
var G__21475 = cljs.core.next.call(null,seq__21454_21468__$1);
var G__21476 = null;
var G__21477 = (0);
var G__21478 = (0);
seq__21454_21458 = G__21475;
chunk__21455_21459 = G__21476;
count__21456_21460 = G__21477;
i__21457_21461 = G__21478;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21487__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21483_21488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21484_21489 = null;var count__21485_21490 = (0);var i__21486_21491 = (0);while(true){
if((i__21486_21491 < count__21485_21490))
{var node_21492 = cljs.core._nth.call(null,chunk__21484_21489,i__21486_21491);goog.dom.classes.set(node_21492,classes_21487__$1);
{
var G__21493 = seq__21483_21488;
var G__21494 = chunk__21484_21489;
var G__21495 = count__21485_21490;
var G__21496 = (i__21486_21491 + (1));
seq__21483_21488 = G__21493;
chunk__21484_21489 = G__21494;
count__21485_21490 = G__21495;
i__21486_21491 = G__21496;
continue;
}
} else
{var temp__4126__auto___21497 = cljs.core.seq.call(null,seq__21483_21488);if(temp__4126__auto___21497)
{var seq__21483_21498__$1 = temp__4126__auto___21497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21483_21498__$1))
{var c__4408__auto___21499 = cljs.core.chunk_first.call(null,seq__21483_21498__$1);{
var G__21500 = cljs.core.chunk_rest.call(null,seq__21483_21498__$1);
var G__21501 = c__4408__auto___21499;
var G__21502 = cljs.core.count.call(null,c__4408__auto___21499);
var G__21503 = (0);
seq__21483_21488 = G__21500;
chunk__21484_21489 = G__21501;
count__21485_21490 = G__21502;
i__21486_21491 = G__21503;
continue;
}
} else
{var node_21504 = cljs.core.first.call(null,seq__21483_21498__$1);goog.dom.classes.set(node_21504,classes_21487__$1);
{
var G__21505 = cljs.core.next.call(null,seq__21483_21498__$1);
var G__21506 = null;
var G__21507 = (0);
var G__21508 = (0);
seq__21483_21488 = G__21505;
chunk__21484_21489 = G__21506;
count__21485_21490 = G__21507;
i__21486_21491 = G__21508;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21513_21517 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21514_21518 = null;var count__21515_21519 = (0);var i__21516_21520 = (0);while(true){
if((i__21516_21520 < count__21515_21519))
{var node_21521 = cljs.core._nth.call(null,chunk__21514_21518,i__21516_21520);goog.dom.setTextContent(node_21521,value);
{
var G__21522 = seq__21513_21517;
var G__21523 = chunk__21514_21518;
var G__21524 = count__21515_21519;
var G__21525 = (i__21516_21520 + (1));
seq__21513_21517 = G__21522;
chunk__21514_21518 = G__21523;
count__21515_21519 = G__21524;
i__21516_21520 = G__21525;
continue;
}
} else
{var temp__4126__auto___21526 = cljs.core.seq.call(null,seq__21513_21517);if(temp__4126__auto___21526)
{var seq__21513_21527__$1 = temp__4126__auto___21526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21513_21527__$1))
{var c__4408__auto___21528 = cljs.core.chunk_first.call(null,seq__21513_21527__$1);{
var G__21529 = cljs.core.chunk_rest.call(null,seq__21513_21527__$1);
var G__21530 = c__4408__auto___21528;
var G__21531 = cljs.core.count.call(null,c__4408__auto___21528);
var G__21532 = (0);
seq__21513_21517 = G__21529;
chunk__21514_21518 = G__21530;
count__21515_21519 = G__21531;
i__21516_21520 = G__21532;
continue;
}
} else
{var node_21533 = cljs.core.first.call(null,seq__21513_21527__$1);goog.dom.setTextContent(node_21533,value);
{
var G__21534 = cljs.core.next.call(null,seq__21513_21527__$1);
var G__21535 = null;
var G__21536 = (0);
var G__21537 = (0);
seq__21513_21517 = G__21534;
chunk__21514_21518 = G__21535;
count__21515_21519 = G__21536;
i__21516_21520 = G__21537;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21542_21546 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21543_21547 = null;var count__21544_21548 = (0);var i__21545_21549 = (0);while(true){
if((i__21545_21549 < count__21544_21548))
{var node_21550 = cljs.core._nth.call(null,chunk__21543_21547,i__21545_21549);goog.dom.forms.setValue(node_21550,value);
{
var G__21551 = seq__21542_21546;
var G__21552 = chunk__21543_21547;
var G__21553 = count__21544_21548;
var G__21554 = (i__21545_21549 + (1));
seq__21542_21546 = G__21551;
chunk__21543_21547 = G__21552;
count__21544_21548 = G__21553;
i__21545_21549 = G__21554;
continue;
}
} else
{var temp__4126__auto___21555 = cljs.core.seq.call(null,seq__21542_21546);if(temp__4126__auto___21555)
{var seq__21542_21556__$1 = temp__4126__auto___21555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21542_21556__$1))
{var c__4408__auto___21557 = cljs.core.chunk_first.call(null,seq__21542_21556__$1);{
var G__21558 = cljs.core.chunk_rest.call(null,seq__21542_21556__$1);
var G__21559 = c__4408__auto___21557;
var G__21560 = cljs.core.count.call(null,c__4408__auto___21557);
var G__21561 = (0);
seq__21542_21546 = G__21558;
chunk__21543_21547 = G__21559;
count__21544_21548 = G__21560;
i__21545_21549 = G__21561;
continue;
}
} else
{var node_21562 = cljs.core.first.call(null,seq__21542_21556__$1);goog.dom.forms.setValue(node_21562,value);
{
var G__21563 = cljs.core.next.call(null,seq__21542_21556__$1);
var G__21564 = null;
var G__21565 = (0);
var G__21566 = (0);
seq__21542_21546 = G__21563;
chunk__21543_21547 = G__21564;
count__21544_21548 = G__21565;
i__21545_21549 = G__21566;
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
{var value_21577 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21573_21578 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21574_21579 = null;var count__21575_21580 = (0);var i__21576_21581 = (0);while(true){
if((i__21576_21581 < count__21575_21580))
{var node_21582 = cljs.core._nth.call(null,chunk__21574_21579,i__21576_21581);node_21582.innerHTML = value_21577;
{
var G__21583 = seq__21573_21578;
var G__21584 = chunk__21574_21579;
var G__21585 = count__21575_21580;
var G__21586 = (i__21576_21581 + (1));
seq__21573_21578 = G__21583;
chunk__21574_21579 = G__21584;
count__21575_21580 = G__21585;
i__21576_21581 = G__21586;
continue;
}
} else
{var temp__4126__auto___21587 = cljs.core.seq.call(null,seq__21573_21578);if(temp__4126__auto___21587)
{var seq__21573_21588__$1 = temp__4126__auto___21587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21573_21588__$1))
{var c__4408__auto___21589 = cljs.core.chunk_first.call(null,seq__21573_21588__$1);{
var G__21590 = cljs.core.chunk_rest.call(null,seq__21573_21588__$1);
var G__21591 = c__4408__auto___21589;
var G__21592 = cljs.core.count.call(null,c__4408__auto___21589);
var G__21593 = (0);
seq__21573_21578 = G__21590;
chunk__21574_21579 = G__21591;
count__21575_21580 = G__21592;
i__21576_21581 = G__21593;
continue;
}
} else
{var node_21594 = cljs.core.first.call(null,seq__21573_21588__$1);node_21594.innerHTML = value_21577;
{
var G__21595 = cljs.core.next.call(null,seq__21573_21588__$1);
var G__21596 = null;
var G__21597 = (0);
var G__21598 = (0);
seq__21573_21578 = G__21595;
chunk__21574_21579 = G__21596;
count__21575_21580 = G__21597;
i__21576_21581 = G__21598;
continue;
}
}
} else
{}
}
break;
}
}catch (e21572){if((e21572 instanceof Error))
{var e_21599 = e21572;domina.replace_children_BANG_.call(null,content,value_21577);
} else
{throw e21572;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21606_21610 = cljs.core.seq.call(null,children);var chunk__21607_21611 = null;var count__21608_21612 = (0);var i__21609_21613 = (0);while(true){
if((i__21609_21613 < count__21608_21612))
{var child_21614 = cljs.core._nth.call(null,chunk__21607_21611,i__21609_21613);frag.appendChild(child_21614);
{
var G__21615 = seq__21606_21610;
var G__21616 = chunk__21607_21611;
var G__21617 = count__21608_21612;
var G__21618 = (i__21609_21613 + (1));
seq__21606_21610 = G__21615;
chunk__21607_21611 = G__21616;
count__21608_21612 = G__21617;
i__21609_21613 = G__21618;
continue;
}
} else
{var temp__4126__auto___21619 = cljs.core.seq.call(null,seq__21606_21610);if(temp__4126__auto___21619)
{var seq__21606_21620__$1 = temp__4126__auto___21619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21606_21620__$1))
{var c__4408__auto___21621 = cljs.core.chunk_first.call(null,seq__21606_21620__$1);{
var G__21622 = cljs.core.chunk_rest.call(null,seq__21606_21620__$1);
var G__21623 = c__4408__auto___21621;
var G__21624 = cljs.core.count.call(null,c__4408__auto___21621);
var G__21625 = (0);
seq__21606_21610 = G__21622;
chunk__21607_21611 = G__21623;
count__21608_21612 = G__21624;
i__21609_21613 = G__21625;
continue;
}
} else
{var child_21626 = cljs.core.first.call(null,seq__21606_21620__$1);frag.appendChild(child_21626);
{
var G__21627 = cljs.core.next.call(null,seq__21606_21620__$1);
var G__21628 = null;
var G__21629 = (0);
var G__21630 = (0);
seq__21606_21610 = G__21627;
chunk__21607_21611 = G__21628;
count__21608_21612 = G__21629;
i__21609_21613 = G__21630;
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
return (function (p1__21600_SHARP_,p2__21601_SHARP_){return f.call(null,p1__21600_SHARP_,p2__21601_SHARP_);
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
{if((function (){var G__21632 = list_thing;if(G__21632)
{var bit__4302__auto__ = (G__21632.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21632.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21632);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21632);
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
{if((function (){var G__21633 = content;if(G__21633)
{var bit__4302__auto__ = (G__21633.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21633.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21633.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21633);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21633);
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
{if((function (){var G__21634 = content;if(G__21634)
{var bit__4302__auto__ = (G__21634.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21634.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21634.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21634);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21634);
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
