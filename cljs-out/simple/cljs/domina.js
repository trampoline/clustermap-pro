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
var opt_wrapper_21187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21188 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21189,opt_wrapper_21187,table_section_wrapper_21188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21188,cell_wrapper_21189,table_section_wrapper_21188,table_section_wrapper_21188]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21194 = cljs.core.seq.call(null,tbody);var chunk__21195 = null;var count__21196 = (0);var i__21197 = (0);while(true){
if((i__21197 < count__21196))
{var child = cljs.core._nth.call(null,chunk__21195,i__21197);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21198 = seq__21194;
var G__21199 = chunk__21195;
var G__21200 = count__21196;
var G__21201 = (i__21197 + (1));
seq__21194 = G__21198;
chunk__21195 = G__21199;
count__21196 = G__21200;
i__21197 = G__21201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21194);if(temp__4126__auto__)
{var seq__21194__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21194__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21194__$1);{
var G__21202 = cljs.core.chunk_rest.call(null,seq__21194__$1);
var G__21203 = c__4408__auto__;
var G__21204 = cljs.core.count.call(null,c__4408__auto__);
var G__21205 = (0);
seq__21194 = G__21202;
chunk__21195 = G__21203;
count__21196 = G__21204;
i__21197 = G__21205;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21194__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21206 = cljs.core.next.call(null,seq__21194__$1);
var G__21207 = null;
var G__21208 = (0);
var G__21209 = (0);
seq__21194 = G__21206;
chunk__21195 = G__21207;
count__21196 = G__21208;
i__21197 = G__21209;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21211 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21211,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21211,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21211,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21212 = wrapper.lastChild;
var G__21213 = (level - (1));
wrapper = G__21212;
level = G__21213;
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
domina.DomContent = (function (){var obj21215 = {};return obj21215;
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
log_debug.cljs$lang$applyTo = (function (arglist__21216){
var mesg = cljs.core.seq(arglist__21216);
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
log.cljs$lang$applyTo = (function (arglist__21217){
var mesg = cljs.core.seq(arglist__21217);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21218){
var contents = cljs.core.seq(arglist__21218);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21219_SHARP_){return p1__21219_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21220_SHARP_,p2__21221_SHARP_){return goog.dom.insertChildAt(p1__21220_SHARP_,p2__21221_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21223_SHARP_,p2__21222_SHARP_){return goog.dom.insertSiblingBefore(p2__21222_SHARP_,p1__21223_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21225_SHARP_,p2__21224_SHARP_){return goog.dom.insertSiblingAfter(p2__21224_SHARP_,p1__21225_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21227_SHARP_,p2__21226_SHARP_){return goog.dom.replaceNode(p2__21226_SHARP_,p1__21227_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21232_21236 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21233_21237 = null;var count__21234_21238 = (0);var i__21235_21239 = (0);while(true){
if((i__21235_21239 < count__21234_21238))
{var n_21240 = cljs.core._nth.call(null,chunk__21233_21237,i__21235_21239);goog.style.setStyle(n_21240,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21241 = seq__21232_21236;
var G__21242 = chunk__21233_21237;
var G__21243 = count__21234_21238;
var G__21244 = (i__21235_21239 + (1));
seq__21232_21236 = G__21241;
chunk__21233_21237 = G__21242;
count__21234_21238 = G__21243;
i__21235_21239 = G__21244;
continue;
}
} else
{var temp__4126__auto___21245 = cljs.core.seq.call(null,seq__21232_21236);if(temp__4126__auto___21245)
{var seq__21232_21246__$1 = temp__4126__auto___21245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21232_21246__$1))
{var c__4408__auto___21247 = cljs.core.chunk_first.call(null,seq__21232_21246__$1);{
var G__21248 = cljs.core.chunk_rest.call(null,seq__21232_21246__$1);
var G__21249 = c__4408__auto___21247;
var G__21250 = cljs.core.count.call(null,c__4408__auto___21247);
var G__21251 = (0);
seq__21232_21236 = G__21248;
chunk__21233_21237 = G__21249;
count__21234_21238 = G__21250;
i__21235_21239 = G__21251;
continue;
}
} else
{var n_21252 = cljs.core.first.call(null,seq__21232_21246__$1);goog.style.setStyle(n_21252,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21253 = cljs.core.next.call(null,seq__21232_21246__$1);
var G__21254 = null;
var G__21255 = (0);
var G__21256 = (0);
seq__21232_21236 = G__21253;
chunk__21233_21237 = G__21254;
count__21234_21238 = G__21255;
i__21235_21239 = G__21256;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21257){
var content = cljs.core.first(arglist__21257);
arglist__21257 = cljs.core.next(arglist__21257);
var name = cljs.core.first(arglist__21257);
var value = cljs.core.rest(arglist__21257);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21262_21266 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21263_21267 = null;var count__21264_21268 = (0);var i__21265_21269 = (0);while(true){
if((i__21265_21269 < count__21264_21268))
{var n_21270 = cljs.core._nth.call(null,chunk__21263_21267,i__21265_21269);n_21270.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21271 = seq__21262_21266;
var G__21272 = chunk__21263_21267;
var G__21273 = count__21264_21268;
var G__21274 = (i__21265_21269 + (1));
seq__21262_21266 = G__21271;
chunk__21263_21267 = G__21272;
count__21264_21268 = G__21273;
i__21265_21269 = G__21274;
continue;
}
} else
{var temp__4126__auto___21275 = cljs.core.seq.call(null,seq__21262_21266);if(temp__4126__auto___21275)
{var seq__21262_21276__$1 = temp__4126__auto___21275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21262_21276__$1))
{var c__4408__auto___21277 = cljs.core.chunk_first.call(null,seq__21262_21276__$1);{
var G__21278 = cljs.core.chunk_rest.call(null,seq__21262_21276__$1);
var G__21279 = c__4408__auto___21277;
var G__21280 = cljs.core.count.call(null,c__4408__auto___21277);
var G__21281 = (0);
seq__21262_21266 = G__21278;
chunk__21263_21267 = G__21279;
count__21264_21268 = G__21280;
i__21265_21269 = G__21281;
continue;
}
} else
{var n_21282 = cljs.core.first.call(null,seq__21262_21276__$1);n_21282.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21283 = cljs.core.next.call(null,seq__21262_21276__$1);
var G__21284 = null;
var G__21285 = (0);
var G__21286 = (0);
seq__21262_21266 = G__21283;
chunk__21263_21267 = G__21284;
count__21264_21268 = G__21285;
i__21265_21269 = G__21286;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21287){
var content = cljs.core.first(arglist__21287);
arglist__21287 = cljs.core.next(arglist__21287);
var name = cljs.core.first(arglist__21287);
var value = cljs.core.rest(arglist__21287);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21292_21296 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21293_21297 = null;var count__21294_21298 = (0);var i__21295_21299 = (0);while(true){
if((i__21295_21299 < count__21294_21298))
{var n_21300 = cljs.core._nth.call(null,chunk__21293_21297,i__21295_21299);n_21300.removeAttribute(cljs.core.name.call(null,name));
{
var G__21301 = seq__21292_21296;
var G__21302 = chunk__21293_21297;
var G__21303 = count__21294_21298;
var G__21304 = (i__21295_21299 + (1));
seq__21292_21296 = G__21301;
chunk__21293_21297 = G__21302;
count__21294_21298 = G__21303;
i__21295_21299 = G__21304;
continue;
}
} else
{var temp__4126__auto___21305 = cljs.core.seq.call(null,seq__21292_21296);if(temp__4126__auto___21305)
{var seq__21292_21306__$1 = temp__4126__auto___21305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21292_21306__$1))
{var c__4408__auto___21307 = cljs.core.chunk_first.call(null,seq__21292_21306__$1);{
var G__21308 = cljs.core.chunk_rest.call(null,seq__21292_21306__$1);
var G__21309 = c__4408__auto___21307;
var G__21310 = cljs.core.count.call(null,c__4408__auto___21307);
var G__21311 = (0);
seq__21292_21296 = G__21308;
chunk__21293_21297 = G__21309;
count__21294_21298 = G__21310;
i__21295_21299 = G__21311;
continue;
}
} else
{var n_21312 = cljs.core.first.call(null,seq__21292_21306__$1);n_21312.removeAttribute(cljs.core.name.call(null,name));
{
var G__21313 = cljs.core.next.call(null,seq__21292_21306__$1);
var G__21314 = null;
var G__21315 = (0);
var G__21316 = (0);
seq__21292_21296 = G__21313;
chunk__21293_21297 = G__21314;
count__21294_21298 = G__21315;
i__21295_21299 = G__21316;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21318 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21318,(0),null);var v = cljs.core.nth.call(null,vec__21318,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21319_SHARP_){var attr = attrs__$1.item(p1__21319_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21326_21332 = cljs.core.seq.call(null,styles);var chunk__21327_21333 = null;var count__21328_21334 = (0);var i__21329_21335 = (0);while(true){
if((i__21329_21335 < count__21328_21334))
{var vec__21330_21336 = cljs.core._nth.call(null,chunk__21327_21333,i__21329_21335);var name_21337 = cljs.core.nth.call(null,vec__21330_21336,(0),null);var value_21338 = cljs.core.nth.call(null,vec__21330_21336,(1),null);domina.set_style_BANG_.call(null,content,name_21337,value_21338);
{
var G__21339 = seq__21326_21332;
var G__21340 = chunk__21327_21333;
var G__21341 = count__21328_21334;
var G__21342 = (i__21329_21335 + (1));
seq__21326_21332 = G__21339;
chunk__21327_21333 = G__21340;
count__21328_21334 = G__21341;
i__21329_21335 = G__21342;
continue;
}
} else
{var temp__4126__auto___21343 = cljs.core.seq.call(null,seq__21326_21332);if(temp__4126__auto___21343)
{var seq__21326_21344__$1 = temp__4126__auto___21343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21326_21344__$1))
{var c__4408__auto___21345 = cljs.core.chunk_first.call(null,seq__21326_21344__$1);{
var G__21346 = cljs.core.chunk_rest.call(null,seq__21326_21344__$1);
var G__21347 = c__4408__auto___21345;
var G__21348 = cljs.core.count.call(null,c__4408__auto___21345);
var G__21349 = (0);
seq__21326_21332 = G__21346;
chunk__21327_21333 = G__21347;
count__21328_21334 = G__21348;
i__21329_21335 = G__21349;
continue;
}
} else
{var vec__21331_21350 = cljs.core.first.call(null,seq__21326_21344__$1);var name_21351 = cljs.core.nth.call(null,vec__21331_21350,(0),null);var value_21352 = cljs.core.nth.call(null,vec__21331_21350,(1),null);domina.set_style_BANG_.call(null,content,name_21351,value_21352);
{
var G__21353 = cljs.core.next.call(null,seq__21326_21344__$1);
var G__21354 = null;
var G__21355 = (0);
var G__21356 = (0);
seq__21326_21332 = G__21353;
chunk__21327_21333 = G__21354;
count__21328_21334 = G__21355;
i__21329_21335 = G__21356;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21363_21369 = cljs.core.seq.call(null,attrs);var chunk__21364_21370 = null;var count__21365_21371 = (0);var i__21366_21372 = (0);while(true){
if((i__21366_21372 < count__21365_21371))
{var vec__21367_21373 = cljs.core._nth.call(null,chunk__21364_21370,i__21366_21372);var name_21374 = cljs.core.nth.call(null,vec__21367_21373,(0),null);var value_21375 = cljs.core.nth.call(null,vec__21367_21373,(1),null);domina.set_attr_BANG_.call(null,content,name_21374,value_21375);
{
var G__21376 = seq__21363_21369;
var G__21377 = chunk__21364_21370;
var G__21378 = count__21365_21371;
var G__21379 = (i__21366_21372 + (1));
seq__21363_21369 = G__21376;
chunk__21364_21370 = G__21377;
count__21365_21371 = G__21378;
i__21366_21372 = G__21379;
continue;
}
} else
{var temp__4126__auto___21380 = cljs.core.seq.call(null,seq__21363_21369);if(temp__4126__auto___21380)
{var seq__21363_21381__$1 = temp__4126__auto___21380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21363_21381__$1))
{var c__4408__auto___21382 = cljs.core.chunk_first.call(null,seq__21363_21381__$1);{
var G__21383 = cljs.core.chunk_rest.call(null,seq__21363_21381__$1);
var G__21384 = c__4408__auto___21382;
var G__21385 = cljs.core.count.call(null,c__4408__auto___21382);
var G__21386 = (0);
seq__21363_21369 = G__21383;
chunk__21364_21370 = G__21384;
count__21365_21371 = G__21385;
i__21366_21372 = G__21386;
continue;
}
} else
{var vec__21368_21387 = cljs.core.first.call(null,seq__21363_21381__$1);var name_21388 = cljs.core.nth.call(null,vec__21368_21387,(0),null);var value_21389 = cljs.core.nth.call(null,vec__21368_21387,(1),null);domina.set_attr_BANG_.call(null,content,name_21388,value_21389);
{
var G__21390 = cljs.core.next.call(null,seq__21363_21381__$1);
var G__21391 = null;
var G__21392 = (0);
var G__21393 = (0);
seq__21363_21369 = G__21390;
chunk__21364_21370 = G__21391;
count__21365_21371 = G__21392;
i__21366_21372 = G__21393;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21398_21402 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21399_21403 = null;var count__21400_21404 = (0);var i__21401_21405 = (0);while(true){
if((i__21401_21405 < count__21400_21404))
{var node_21406 = cljs.core._nth.call(null,chunk__21399_21403,i__21401_21405);goog.dom.classes.add(node_21406,class$);
{
var G__21407 = seq__21398_21402;
var G__21408 = chunk__21399_21403;
var G__21409 = count__21400_21404;
var G__21410 = (i__21401_21405 + (1));
seq__21398_21402 = G__21407;
chunk__21399_21403 = G__21408;
count__21400_21404 = G__21409;
i__21401_21405 = G__21410;
continue;
}
} else
{var temp__4126__auto___21411 = cljs.core.seq.call(null,seq__21398_21402);if(temp__4126__auto___21411)
{var seq__21398_21412__$1 = temp__4126__auto___21411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21398_21412__$1))
{var c__4408__auto___21413 = cljs.core.chunk_first.call(null,seq__21398_21412__$1);{
var G__21414 = cljs.core.chunk_rest.call(null,seq__21398_21412__$1);
var G__21415 = c__4408__auto___21413;
var G__21416 = cljs.core.count.call(null,c__4408__auto___21413);
var G__21417 = (0);
seq__21398_21402 = G__21414;
chunk__21399_21403 = G__21415;
count__21400_21404 = G__21416;
i__21401_21405 = G__21417;
continue;
}
} else
{var node_21418 = cljs.core.first.call(null,seq__21398_21412__$1);goog.dom.classes.add(node_21418,class$);
{
var G__21419 = cljs.core.next.call(null,seq__21398_21412__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__21398_21402 = G__21419;
chunk__21399_21403 = G__21420;
count__21400_21404 = G__21421;
i__21401_21405 = G__21422;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21427_21431 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21428_21432 = null;var count__21429_21433 = (0);var i__21430_21434 = (0);while(true){
if((i__21430_21434 < count__21429_21433))
{var node_21435 = cljs.core._nth.call(null,chunk__21428_21432,i__21430_21434);goog.dom.classes.remove(node_21435,class$);
{
var G__21436 = seq__21427_21431;
var G__21437 = chunk__21428_21432;
var G__21438 = count__21429_21433;
var G__21439 = (i__21430_21434 + (1));
seq__21427_21431 = G__21436;
chunk__21428_21432 = G__21437;
count__21429_21433 = G__21438;
i__21430_21434 = G__21439;
continue;
}
} else
{var temp__4126__auto___21440 = cljs.core.seq.call(null,seq__21427_21431);if(temp__4126__auto___21440)
{var seq__21427_21441__$1 = temp__4126__auto___21440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21427_21441__$1))
{var c__4408__auto___21442 = cljs.core.chunk_first.call(null,seq__21427_21441__$1);{
var G__21443 = cljs.core.chunk_rest.call(null,seq__21427_21441__$1);
var G__21444 = c__4408__auto___21442;
var G__21445 = cljs.core.count.call(null,c__4408__auto___21442);
var G__21446 = (0);
seq__21427_21431 = G__21443;
chunk__21428_21432 = G__21444;
count__21429_21433 = G__21445;
i__21430_21434 = G__21446;
continue;
}
} else
{var node_21447 = cljs.core.first.call(null,seq__21427_21441__$1);goog.dom.classes.remove(node_21447,class$);
{
var G__21448 = cljs.core.next.call(null,seq__21427_21441__$1);
var G__21449 = null;
var G__21450 = (0);
var G__21451 = (0);
seq__21427_21431 = G__21448;
chunk__21428_21432 = G__21449;
count__21429_21433 = G__21450;
i__21430_21434 = G__21451;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21456_21460 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21457_21461 = null;var count__21458_21462 = (0);var i__21459_21463 = (0);while(true){
if((i__21459_21463 < count__21458_21462))
{var node_21464 = cljs.core._nth.call(null,chunk__21457_21461,i__21459_21463);goog.dom.classes.toggle(node_21464,class$);
{
var G__21465 = seq__21456_21460;
var G__21466 = chunk__21457_21461;
var G__21467 = count__21458_21462;
var G__21468 = (i__21459_21463 + (1));
seq__21456_21460 = G__21465;
chunk__21457_21461 = G__21466;
count__21458_21462 = G__21467;
i__21459_21463 = G__21468;
continue;
}
} else
{var temp__4126__auto___21469 = cljs.core.seq.call(null,seq__21456_21460);if(temp__4126__auto___21469)
{var seq__21456_21470__$1 = temp__4126__auto___21469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21456_21470__$1))
{var c__4408__auto___21471 = cljs.core.chunk_first.call(null,seq__21456_21470__$1);{
var G__21472 = cljs.core.chunk_rest.call(null,seq__21456_21470__$1);
var G__21473 = c__4408__auto___21471;
var G__21474 = cljs.core.count.call(null,c__4408__auto___21471);
var G__21475 = (0);
seq__21456_21460 = G__21472;
chunk__21457_21461 = G__21473;
count__21458_21462 = G__21474;
i__21459_21463 = G__21475;
continue;
}
} else
{var node_21476 = cljs.core.first.call(null,seq__21456_21470__$1);goog.dom.classes.toggle(node_21476,class$);
{
var G__21477 = cljs.core.next.call(null,seq__21456_21470__$1);
var G__21478 = null;
var G__21479 = (0);
var G__21480 = (0);
seq__21456_21460 = G__21477;
chunk__21457_21461 = G__21478;
count__21458_21462 = G__21479;
i__21459_21463 = G__21480;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21489__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21485_21490 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21486_21491 = null;var count__21487_21492 = (0);var i__21488_21493 = (0);while(true){
if((i__21488_21493 < count__21487_21492))
{var node_21494 = cljs.core._nth.call(null,chunk__21486_21491,i__21488_21493);goog.dom.classes.set(node_21494,classes_21489__$1);
{
var G__21495 = seq__21485_21490;
var G__21496 = chunk__21486_21491;
var G__21497 = count__21487_21492;
var G__21498 = (i__21488_21493 + (1));
seq__21485_21490 = G__21495;
chunk__21486_21491 = G__21496;
count__21487_21492 = G__21497;
i__21488_21493 = G__21498;
continue;
}
} else
{var temp__4126__auto___21499 = cljs.core.seq.call(null,seq__21485_21490);if(temp__4126__auto___21499)
{var seq__21485_21500__$1 = temp__4126__auto___21499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21485_21500__$1))
{var c__4408__auto___21501 = cljs.core.chunk_first.call(null,seq__21485_21500__$1);{
var G__21502 = cljs.core.chunk_rest.call(null,seq__21485_21500__$1);
var G__21503 = c__4408__auto___21501;
var G__21504 = cljs.core.count.call(null,c__4408__auto___21501);
var G__21505 = (0);
seq__21485_21490 = G__21502;
chunk__21486_21491 = G__21503;
count__21487_21492 = G__21504;
i__21488_21493 = G__21505;
continue;
}
} else
{var node_21506 = cljs.core.first.call(null,seq__21485_21500__$1);goog.dom.classes.set(node_21506,classes_21489__$1);
{
var G__21507 = cljs.core.next.call(null,seq__21485_21500__$1);
var G__21508 = null;
var G__21509 = (0);
var G__21510 = (0);
seq__21485_21490 = G__21507;
chunk__21486_21491 = G__21508;
count__21487_21492 = G__21509;
i__21488_21493 = G__21510;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21515_21519 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21516_21520 = null;var count__21517_21521 = (0);var i__21518_21522 = (0);while(true){
if((i__21518_21522 < count__21517_21521))
{var node_21523 = cljs.core._nth.call(null,chunk__21516_21520,i__21518_21522);goog.dom.setTextContent(node_21523,value);
{
var G__21524 = seq__21515_21519;
var G__21525 = chunk__21516_21520;
var G__21526 = count__21517_21521;
var G__21527 = (i__21518_21522 + (1));
seq__21515_21519 = G__21524;
chunk__21516_21520 = G__21525;
count__21517_21521 = G__21526;
i__21518_21522 = G__21527;
continue;
}
} else
{var temp__4126__auto___21528 = cljs.core.seq.call(null,seq__21515_21519);if(temp__4126__auto___21528)
{var seq__21515_21529__$1 = temp__4126__auto___21528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21515_21529__$1))
{var c__4408__auto___21530 = cljs.core.chunk_first.call(null,seq__21515_21529__$1);{
var G__21531 = cljs.core.chunk_rest.call(null,seq__21515_21529__$1);
var G__21532 = c__4408__auto___21530;
var G__21533 = cljs.core.count.call(null,c__4408__auto___21530);
var G__21534 = (0);
seq__21515_21519 = G__21531;
chunk__21516_21520 = G__21532;
count__21517_21521 = G__21533;
i__21518_21522 = G__21534;
continue;
}
} else
{var node_21535 = cljs.core.first.call(null,seq__21515_21529__$1);goog.dom.setTextContent(node_21535,value);
{
var G__21536 = cljs.core.next.call(null,seq__21515_21529__$1);
var G__21537 = null;
var G__21538 = (0);
var G__21539 = (0);
seq__21515_21519 = G__21536;
chunk__21516_21520 = G__21537;
count__21517_21521 = G__21538;
i__21518_21522 = G__21539;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21544_21548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21545_21549 = null;var count__21546_21550 = (0);var i__21547_21551 = (0);while(true){
if((i__21547_21551 < count__21546_21550))
{var node_21552 = cljs.core._nth.call(null,chunk__21545_21549,i__21547_21551);goog.dom.forms.setValue(node_21552,value);
{
var G__21553 = seq__21544_21548;
var G__21554 = chunk__21545_21549;
var G__21555 = count__21546_21550;
var G__21556 = (i__21547_21551 + (1));
seq__21544_21548 = G__21553;
chunk__21545_21549 = G__21554;
count__21546_21550 = G__21555;
i__21547_21551 = G__21556;
continue;
}
} else
{var temp__4126__auto___21557 = cljs.core.seq.call(null,seq__21544_21548);if(temp__4126__auto___21557)
{var seq__21544_21558__$1 = temp__4126__auto___21557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21544_21558__$1))
{var c__4408__auto___21559 = cljs.core.chunk_first.call(null,seq__21544_21558__$1);{
var G__21560 = cljs.core.chunk_rest.call(null,seq__21544_21558__$1);
var G__21561 = c__4408__auto___21559;
var G__21562 = cljs.core.count.call(null,c__4408__auto___21559);
var G__21563 = (0);
seq__21544_21548 = G__21560;
chunk__21545_21549 = G__21561;
count__21546_21550 = G__21562;
i__21547_21551 = G__21563;
continue;
}
} else
{var node_21564 = cljs.core.first.call(null,seq__21544_21558__$1);goog.dom.forms.setValue(node_21564,value);
{
var G__21565 = cljs.core.next.call(null,seq__21544_21558__$1);
var G__21566 = null;
var G__21567 = (0);
var G__21568 = (0);
seq__21544_21548 = G__21565;
chunk__21545_21549 = G__21566;
count__21546_21550 = G__21567;
i__21547_21551 = G__21568;
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
{var value_21579 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21575_21580 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21576_21581 = null;var count__21577_21582 = (0);var i__21578_21583 = (0);while(true){
if((i__21578_21583 < count__21577_21582))
{var node_21584 = cljs.core._nth.call(null,chunk__21576_21581,i__21578_21583);node_21584.innerHTML = value_21579;
{
var G__21585 = seq__21575_21580;
var G__21586 = chunk__21576_21581;
var G__21587 = count__21577_21582;
var G__21588 = (i__21578_21583 + (1));
seq__21575_21580 = G__21585;
chunk__21576_21581 = G__21586;
count__21577_21582 = G__21587;
i__21578_21583 = G__21588;
continue;
}
} else
{var temp__4126__auto___21589 = cljs.core.seq.call(null,seq__21575_21580);if(temp__4126__auto___21589)
{var seq__21575_21590__$1 = temp__4126__auto___21589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21575_21590__$1))
{var c__4408__auto___21591 = cljs.core.chunk_first.call(null,seq__21575_21590__$1);{
var G__21592 = cljs.core.chunk_rest.call(null,seq__21575_21590__$1);
var G__21593 = c__4408__auto___21591;
var G__21594 = cljs.core.count.call(null,c__4408__auto___21591);
var G__21595 = (0);
seq__21575_21580 = G__21592;
chunk__21576_21581 = G__21593;
count__21577_21582 = G__21594;
i__21578_21583 = G__21595;
continue;
}
} else
{var node_21596 = cljs.core.first.call(null,seq__21575_21590__$1);node_21596.innerHTML = value_21579;
{
var G__21597 = cljs.core.next.call(null,seq__21575_21590__$1);
var G__21598 = null;
var G__21599 = (0);
var G__21600 = (0);
seq__21575_21580 = G__21597;
chunk__21576_21581 = G__21598;
count__21577_21582 = G__21599;
i__21578_21583 = G__21600;
continue;
}
}
} else
{}
}
break;
}
}catch (e21574){if((e21574 instanceof Error))
{var e_21601 = e21574;domina.replace_children_BANG_.call(null,content,value_21579);
} else
{throw e21574;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21608_21612 = cljs.core.seq.call(null,children);var chunk__21609_21613 = null;var count__21610_21614 = (0);var i__21611_21615 = (0);while(true){
if((i__21611_21615 < count__21610_21614))
{var child_21616 = cljs.core._nth.call(null,chunk__21609_21613,i__21611_21615);frag.appendChild(child_21616);
{
var G__21617 = seq__21608_21612;
var G__21618 = chunk__21609_21613;
var G__21619 = count__21610_21614;
var G__21620 = (i__21611_21615 + (1));
seq__21608_21612 = G__21617;
chunk__21609_21613 = G__21618;
count__21610_21614 = G__21619;
i__21611_21615 = G__21620;
continue;
}
} else
{var temp__4126__auto___21621 = cljs.core.seq.call(null,seq__21608_21612);if(temp__4126__auto___21621)
{var seq__21608_21622__$1 = temp__4126__auto___21621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21608_21622__$1))
{var c__4408__auto___21623 = cljs.core.chunk_first.call(null,seq__21608_21622__$1);{
var G__21624 = cljs.core.chunk_rest.call(null,seq__21608_21622__$1);
var G__21625 = c__4408__auto___21623;
var G__21626 = cljs.core.count.call(null,c__4408__auto___21623);
var G__21627 = (0);
seq__21608_21612 = G__21624;
chunk__21609_21613 = G__21625;
count__21610_21614 = G__21626;
i__21611_21615 = G__21627;
continue;
}
} else
{var child_21628 = cljs.core.first.call(null,seq__21608_21622__$1);frag.appendChild(child_21628);
{
var G__21629 = cljs.core.next.call(null,seq__21608_21622__$1);
var G__21630 = null;
var G__21631 = (0);
var G__21632 = (0);
seq__21608_21612 = G__21629;
chunk__21609_21613 = G__21630;
count__21610_21614 = G__21631;
i__21611_21615 = G__21632;
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
return (function (p1__21602_SHARP_,p2__21603_SHARP_){return f.call(null,p1__21602_SHARP_,p2__21603_SHARP_);
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
{if((function (){var G__21634 = list_thing;if(G__21634)
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
{if((function (){var G__21635 = content;if(G__21635)
{var bit__4302__auto__ = (G__21635.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21635.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21635.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21635);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21635);
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
{if((function (){var G__21636 = content;if(G__21636)
{var bit__4302__auto__ = (G__21636.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21636.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21636.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21636);
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
