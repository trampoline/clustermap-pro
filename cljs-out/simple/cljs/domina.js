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
var opt_wrapper_21159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21161 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21161,opt_wrapper_21159,table_section_wrapper_21160,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21160,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21160,cell_wrapper_21161,table_section_wrapper_21160,table_section_wrapper_21160]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21166 = cljs.core.seq.call(null,tbody);var chunk__21167 = null;var count__21168 = (0);var i__21169 = (0);while(true){
if((i__21169 < count__21168))
{var child = cljs.core._nth.call(null,chunk__21167,i__21169);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21170 = seq__21166;
var G__21171 = chunk__21167;
var G__21172 = count__21168;
var G__21173 = (i__21169 + (1));
seq__21166 = G__21170;
chunk__21167 = G__21171;
count__21168 = G__21172;
i__21169 = G__21173;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21166);if(temp__4126__auto__)
{var seq__21166__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21166__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21166__$1);{
var G__21174 = cljs.core.chunk_rest.call(null,seq__21166__$1);
var G__21175 = c__4408__auto__;
var G__21176 = cljs.core.count.call(null,c__4408__auto__);
var G__21177 = (0);
seq__21166 = G__21174;
chunk__21167 = G__21175;
count__21168 = G__21176;
i__21169 = G__21177;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21166__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21178 = cljs.core.next.call(null,seq__21166__$1);
var G__21179 = null;
var G__21180 = (0);
var G__21181 = (0);
seq__21166 = G__21178;
chunk__21167 = G__21179;
count__21168 = G__21180;
i__21169 = G__21181;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21183 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21183,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21183,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21183,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21184 = wrapper.lastChild;
var G__21185 = (level - (1));
wrapper = G__21184;
level = G__21185;
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
domina.DomContent = (function (){var obj21187 = {};return obj21187;
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
log_debug.cljs$lang$applyTo = (function (arglist__21188){
var mesg = cljs.core.seq(arglist__21188);
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
log.cljs$lang$applyTo = (function (arglist__21189){
var mesg = cljs.core.seq(arglist__21189);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21190){
var contents = cljs.core.seq(arglist__21190);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21191_SHARP_){return p1__21191_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21192_SHARP_,p2__21193_SHARP_){return goog.dom.insertChildAt(p1__21192_SHARP_,p2__21193_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21195_SHARP_,p2__21194_SHARP_){return goog.dom.insertSiblingBefore(p2__21194_SHARP_,p1__21195_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21197_SHARP_,p2__21196_SHARP_){return goog.dom.insertSiblingAfter(p2__21196_SHARP_,p1__21197_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21199_SHARP_,p2__21198_SHARP_){return goog.dom.replaceNode(p2__21198_SHARP_,p1__21199_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21204_21208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21205_21209 = null;var count__21206_21210 = (0);var i__21207_21211 = (0);while(true){
if((i__21207_21211 < count__21206_21210))
{var n_21212 = cljs.core._nth.call(null,chunk__21205_21209,i__21207_21211);goog.style.setStyle(n_21212,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21213 = seq__21204_21208;
var G__21214 = chunk__21205_21209;
var G__21215 = count__21206_21210;
var G__21216 = (i__21207_21211 + (1));
seq__21204_21208 = G__21213;
chunk__21205_21209 = G__21214;
count__21206_21210 = G__21215;
i__21207_21211 = G__21216;
continue;
}
} else
{var temp__4126__auto___21217 = cljs.core.seq.call(null,seq__21204_21208);if(temp__4126__auto___21217)
{var seq__21204_21218__$1 = temp__4126__auto___21217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21204_21218__$1))
{var c__4408__auto___21219 = cljs.core.chunk_first.call(null,seq__21204_21218__$1);{
var G__21220 = cljs.core.chunk_rest.call(null,seq__21204_21218__$1);
var G__21221 = c__4408__auto___21219;
var G__21222 = cljs.core.count.call(null,c__4408__auto___21219);
var G__21223 = (0);
seq__21204_21208 = G__21220;
chunk__21205_21209 = G__21221;
count__21206_21210 = G__21222;
i__21207_21211 = G__21223;
continue;
}
} else
{var n_21224 = cljs.core.first.call(null,seq__21204_21218__$1);goog.style.setStyle(n_21224,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21225 = cljs.core.next.call(null,seq__21204_21218__$1);
var G__21226 = null;
var G__21227 = (0);
var G__21228 = (0);
seq__21204_21208 = G__21225;
chunk__21205_21209 = G__21226;
count__21206_21210 = G__21227;
i__21207_21211 = G__21228;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21229){
var content = cljs.core.first(arglist__21229);
arglist__21229 = cljs.core.next(arglist__21229);
var name = cljs.core.first(arglist__21229);
var value = cljs.core.rest(arglist__21229);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21234_21238 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21235_21239 = null;var count__21236_21240 = (0);var i__21237_21241 = (0);while(true){
if((i__21237_21241 < count__21236_21240))
{var n_21242 = cljs.core._nth.call(null,chunk__21235_21239,i__21237_21241);n_21242.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21243 = seq__21234_21238;
var G__21244 = chunk__21235_21239;
var G__21245 = count__21236_21240;
var G__21246 = (i__21237_21241 + (1));
seq__21234_21238 = G__21243;
chunk__21235_21239 = G__21244;
count__21236_21240 = G__21245;
i__21237_21241 = G__21246;
continue;
}
} else
{var temp__4126__auto___21247 = cljs.core.seq.call(null,seq__21234_21238);if(temp__4126__auto___21247)
{var seq__21234_21248__$1 = temp__4126__auto___21247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21234_21248__$1))
{var c__4408__auto___21249 = cljs.core.chunk_first.call(null,seq__21234_21248__$1);{
var G__21250 = cljs.core.chunk_rest.call(null,seq__21234_21248__$1);
var G__21251 = c__4408__auto___21249;
var G__21252 = cljs.core.count.call(null,c__4408__auto___21249);
var G__21253 = (0);
seq__21234_21238 = G__21250;
chunk__21235_21239 = G__21251;
count__21236_21240 = G__21252;
i__21237_21241 = G__21253;
continue;
}
} else
{var n_21254 = cljs.core.first.call(null,seq__21234_21248__$1);n_21254.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21255 = cljs.core.next.call(null,seq__21234_21248__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__21234_21238 = G__21255;
chunk__21235_21239 = G__21256;
count__21236_21240 = G__21257;
i__21237_21241 = G__21258;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21259){
var content = cljs.core.first(arglist__21259);
arglist__21259 = cljs.core.next(arglist__21259);
var name = cljs.core.first(arglist__21259);
var value = cljs.core.rest(arglist__21259);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21264_21268 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21265_21269 = null;var count__21266_21270 = (0);var i__21267_21271 = (0);while(true){
if((i__21267_21271 < count__21266_21270))
{var n_21272 = cljs.core._nth.call(null,chunk__21265_21269,i__21267_21271);n_21272.removeAttribute(cljs.core.name.call(null,name));
{
var G__21273 = seq__21264_21268;
var G__21274 = chunk__21265_21269;
var G__21275 = count__21266_21270;
var G__21276 = (i__21267_21271 + (1));
seq__21264_21268 = G__21273;
chunk__21265_21269 = G__21274;
count__21266_21270 = G__21275;
i__21267_21271 = G__21276;
continue;
}
} else
{var temp__4126__auto___21277 = cljs.core.seq.call(null,seq__21264_21268);if(temp__4126__auto___21277)
{var seq__21264_21278__$1 = temp__4126__auto___21277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21264_21278__$1))
{var c__4408__auto___21279 = cljs.core.chunk_first.call(null,seq__21264_21278__$1);{
var G__21280 = cljs.core.chunk_rest.call(null,seq__21264_21278__$1);
var G__21281 = c__4408__auto___21279;
var G__21282 = cljs.core.count.call(null,c__4408__auto___21279);
var G__21283 = (0);
seq__21264_21268 = G__21280;
chunk__21265_21269 = G__21281;
count__21266_21270 = G__21282;
i__21267_21271 = G__21283;
continue;
}
} else
{var n_21284 = cljs.core.first.call(null,seq__21264_21278__$1);n_21284.removeAttribute(cljs.core.name.call(null,name));
{
var G__21285 = cljs.core.next.call(null,seq__21264_21278__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__21264_21268 = G__21285;
chunk__21265_21269 = G__21286;
count__21266_21270 = G__21287;
i__21267_21271 = G__21288;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21290 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21290,(0),null);var v = cljs.core.nth.call(null,vec__21290,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21291_SHARP_){var attr = attrs__$1.item(p1__21291_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21298_21304 = cljs.core.seq.call(null,styles);var chunk__21299_21305 = null;var count__21300_21306 = (0);var i__21301_21307 = (0);while(true){
if((i__21301_21307 < count__21300_21306))
{var vec__21302_21308 = cljs.core._nth.call(null,chunk__21299_21305,i__21301_21307);var name_21309 = cljs.core.nth.call(null,vec__21302_21308,(0),null);var value_21310 = cljs.core.nth.call(null,vec__21302_21308,(1),null);domina.set_style_BANG_.call(null,content,name_21309,value_21310);
{
var G__21311 = seq__21298_21304;
var G__21312 = chunk__21299_21305;
var G__21313 = count__21300_21306;
var G__21314 = (i__21301_21307 + (1));
seq__21298_21304 = G__21311;
chunk__21299_21305 = G__21312;
count__21300_21306 = G__21313;
i__21301_21307 = G__21314;
continue;
}
} else
{var temp__4126__auto___21315 = cljs.core.seq.call(null,seq__21298_21304);if(temp__4126__auto___21315)
{var seq__21298_21316__$1 = temp__4126__auto___21315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21298_21316__$1))
{var c__4408__auto___21317 = cljs.core.chunk_first.call(null,seq__21298_21316__$1);{
var G__21318 = cljs.core.chunk_rest.call(null,seq__21298_21316__$1);
var G__21319 = c__4408__auto___21317;
var G__21320 = cljs.core.count.call(null,c__4408__auto___21317);
var G__21321 = (0);
seq__21298_21304 = G__21318;
chunk__21299_21305 = G__21319;
count__21300_21306 = G__21320;
i__21301_21307 = G__21321;
continue;
}
} else
{var vec__21303_21322 = cljs.core.first.call(null,seq__21298_21316__$1);var name_21323 = cljs.core.nth.call(null,vec__21303_21322,(0),null);var value_21324 = cljs.core.nth.call(null,vec__21303_21322,(1),null);domina.set_style_BANG_.call(null,content,name_21323,value_21324);
{
var G__21325 = cljs.core.next.call(null,seq__21298_21316__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__21298_21304 = G__21325;
chunk__21299_21305 = G__21326;
count__21300_21306 = G__21327;
i__21301_21307 = G__21328;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21335_21341 = cljs.core.seq.call(null,attrs);var chunk__21336_21342 = null;var count__21337_21343 = (0);var i__21338_21344 = (0);while(true){
if((i__21338_21344 < count__21337_21343))
{var vec__21339_21345 = cljs.core._nth.call(null,chunk__21336_21342,i__21338_21344);var name_21346 = cljs.core.nth.call(null,vec__21339_21345,(0),null);var value_21347 = cljs.core.nth.call(null,vec__21339_21345,(1),null);domina.set_attr_BANG_.call(null,content,name_21346,value_21347);
{
var G__21348 = seq__21335_21341;
var G__21349 = chunk__21336_21342;
var G__21350 = count__21337_21343;
var G__21351 = (i__21338_21344 + (1));
seq__21335_21341 = G__21348;
chunk__21336_21342 = G__21349;
count__21337_21343 = G__21350;
i__21338_21344 = G__21351;
continue;
}
} else
{var temp__4126__auto___21352 = cljs.core.seq.call(null,seq__21335_21341);if(temp__4126__auto___21352)
{var seq__21335_21353__$1 = temp__4126__auto___21352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21335_21353__$1))
{var c__4408__auto___21354 = cljs.core.chunk_first.call(null,seq__21335_21353__$1);{
var G__21355 = cljs.core.chunk_rest.call(null,seq__21335_21353__$1);
var G__21356 = c__4408__auto___21354;
var G__21357 = cljs.core.count.call(null,c__4408__auto___21354);
var G__21358 = (0);
seq__21335_21341 = G__21355;
chunk__21336_21342 = G__21356;
count__21337_21343 = G__21357;
i__21338_21344 = G__21358;
continue;
}
} else
{var vec__21340_21359 = cljs.core.first.call(null,seq__21335_21353__$1);var name_21360 = cljs.core.nth.call(null,vec__21340_21359,(0),null);var value_21361 = cljs.core.nth.call(null,vec__21340_21359,(1),null);domina.set_attr_BANG_.call(null,content,name_21360,value_21361);
{
var G__21362 = cljs.core.next.call(null,seq__21335_21353__$1);
var G__21363 = null;
var G__21364 = (0);
var G__21365 = (0);
seq__21335_21341 = G__21362;
chunk__21336_21342 = G__21363;
count__21337_21343 = G__21364;
i__21338_21344 = G__21365;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21370_21374 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21371_21375 = null;var count__21372_21376 = (0);var i__21373_21377 = (0);while(true){
if((i__21373_21377 < count__21372_21376))
{var node_21378 = cljs.core._nth.call(null,chunk__21371_21375,i__21373_21377);goog.dom.classes.add(node_21378,class$);
{
var G__21379 = seq__21370_21374;
var G__21380 = chunk__21371_21375;
var G__21381 = count__21372_21376;
var G__21382 = (i__21373_21377 + (1));
seq__21370_21374 = G__21379;
chunk__21371_21375 = G__21380;
count__21372_21376 = G__21381;
i__21373_21377 = G__21382;
continue;
}
} else
{var temp__4126__auto___21383 = cljs.core.seq.call(null,seq__21370_21374);if(temp__4126__auto___21383)
{var seq__21370_21384__$1 = temp__4126__auto___21383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21370_21384__$1))
{var c__4408__auto___21385 = cljs.core.chunk_first.call(null,seq__21370_21384__$1);{
var G__21386 = cljs.core.chunk_rest.call(null,seq__21370_21384__$1);
var G__21387 = c__4408__auto___21385;
var G__21388 = cljs.core.count.call(null,c__4408__auto___21385);
var G__21389 = (0);
seq__21370_21374 = G__21386;
chunk__21371_21375 = G__21387;
count__21372_21376 = G__21388;
i__21373_21377 = G__21389;
continue;
}
} else
{var node_21390 = cljs.core.first.call(null,seq__21370_21384__$1);goog.dom.classes.add(node_21390,class$);
{
var G__21391 = cljs.core.next.call(null,seq__21370_21384__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__21370_21374 = G__21391;
chunk__21371_21375 = G__21392;
count__21372_21376 = G__21393;
i__21373_21377 = G__21394;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21399_21403 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21400_21404 = null;var count__21401_21405 = (0);var i__21402_21406 = (0);while(true){
if((i__21402_21406 < count__21401_21405))
{var node_21407 = cljs.core._nth.call(null,chunk__21400_21404,i__21402_21406);goog.dom.classes.remove(node_21407,class$);
{
var G__21408 = seq__21399_21403;
var G__21409 = chunk__21400_21404;
var G__21410 = count__21401_21405;
var G__21411 = (i__21402_21406 + (1));
seq__21399_21403 = G__21408;
chunk__21400_21404 = G__21409;
count__21401_21405 = G__21410;
i__21402_21406 = G__21411;
continue;
}
} else
{var temp__4126__auto___21412 = cljs.core.seq.call(null,seq__21399_21403);if(temp__4126__auto___21412)
{var seq__21399_21413__$1 = temp__4126__auto___21412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21399_21413__$1))
{var c__4408__auto___21414 = cljs.core.chunk_first.call(null,seq__21399_21413__$1);{
var G__21415 = cljs.core.chunk_rest.call(null,seq__21399_21413__$1);
var G__21416 = c__4408__auto___21414;
var G__21417 = cljs.core.count.call(null,c__4408__auto___21414);
var G__21418 = (0);
seq__21399_21403 = G__21415;
chunk__21400_21404 = G__21416;
count__21401_21405 = G__21417;
i__21402_21406 = G__21418;
continue;
}
} else
{var node_21419 = cljs.core.first.call(null,seq__21399_21413__$1);goog.dom.classes.remove(node_21419,class$);
{
var G__21420 = cljs.core.next.call(null,seq__21399_21413__$1);
var G__21421 = null;
var G__21422 = (0);
var G__21423 = (0);
seq__21399_21403 = G__21420;
chunk__21400_21404 = G__21421;
count__21401_21405 = G__21422;
i__21402_21406 = G__21423;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21428_21432 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21429_21433 = null;var count__21430_21434 = (0);var i__21431_21435 = (0);while(true){
if((i__21431_21435 < count__21430_21434))
{var node_21436 = cljs.core._nth.call(null,chunk__21429_21433,i__21431_21435);goog.dom.classes.toggle(node_21436,class$);
{
var G__21437 = seq__21428_21432;
var G__21438 = chunk__21429_21433;
var G__21439 = count__21430_21434;
var G__21440 = (i__21431_21435 + (1));
seq__21428_21432 = G__21437;
chunk__21429_21433 = G__21438;
count__21430_21434 = G__21439;
i__21431_21435 = G__21440;
continue;
}
} else
{var temp__4126__auto___21441 = cljs.core.seq.call(null,seq__21428_21432);if(temp__4126__auto___21441)
{var seq__21428_21442__$1 = temp__4126__auto___21441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21428_21442__$1))
{var c__4408__auto___21443 = cljs.core.chunk_first.call(null,seq__21428_21442__$1);{
var G__21444 = cljs.core.chunk_rest.call(null,seq__21428_21442__$1);
var G__21445 = c__4408__auto___21443;
var G__21446 = cljs.core.count.call(null,c__4408__auto___21443);
var G__21447 = (0);
seq__21428_21432 = G__21444;
chunk__21429_21433 = G__21445;
count__21430_21434 = G__21446;
i__21431_21435 = G__21447;
continue;
}
} else
{var node_21448 = cljs.core.first.call(null,seq__21428_21442__$1);goog.dom.classes.toggle(node_21448,class$);
{
var G__21449 = cljs.core.next.call(null,seq__21428_21442__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__21428_21432 = G__21449;
chunk__21429_21433 = G__21450;
count__21430_21434 = G__21451;
i__21431_21435 = G__21452;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21461__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21457_21462 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21458_21463 = null;var count__21459_21464 = (0);var i__21460_21465 = (0);while(true){
if((i__21460_21465 < count__21459_21464))
{var node_21466 = cljs.core._nth.call(null,chunk__21458_21463,i__21460_21465);goog.dom.classes.set(node_21466,classes_21461__$1);
{
var G__21467 = seq__21457_21462;
var G__21468 = chunk__21458_21463;
var G__21469 = count__21459_21464;
var G__21470 = (i__21460_21465 + (1));
seq__21457_21462 = G__21467;
chunk__21458_21463 = G__21468;
count__21459_21464 = G__21469;
i__21460_21465 = G__21470;
continue;
}
} else
{var temp__4126__auto___21471 = cljs.core.seq.call(null,seq__21457_21462);if(temp__4126__auto___21471)
{var seq__21457_21472__$1 = temp__4126__auto___21471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21457_21472__$1))
{var c__4408__auto___21473 = cljs.core.chunk_first.call(null,seq__21457_21472__$1);{
var G__21474 = cljs.core.chunk_rest.call(null,seq__21457_21472__$1);
var G__21475 = c__4408__auto___21473;
var G__21476 = cljs.core.count.call(null,c__4408__auto___21473);
var G__21477 = (0);
seq__21457_21462 = G__21474;
chunk__21458_21463 = G__21475;
count__21459_21464 = G__21476;
i__21460_21465 = G__21477;
continue;
}
} else
{var node_21478 = cljs.core.first.call(null,seq__21457_21472__$1);goog.dom.classes.set(node_21478,classes_21461__$1);
{
var G__21479 = cljs.core.next.call(null,seq__21457_21472__$1);
var G__21480 = null;
var G__21481 = (0);
var G__21482 = (0);
seq__21457_21462 = G__21479;
chunk__21458_21463 = G__21480;
count__21459_21464 = G__21481;
i__21460_21465 = G__21482;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21487_21491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21488_21492 = null;var count__21489_21493 = (0);var i__21490_21494 = (0);while(true){
if((i__21490_21494 < count__21489_21493))
{var node_21495 = cljs.core._nth.call(null,chunk__21488_21492,i__21490_21494);goog.dom.setTextContent(node_21495,value);
{
var G__21496 = seq__21487_21491;
var G__21497 = chunk__21488_21492;
var G__21498 = count__21489_21493;
var G__21499 = (i__21490_21494 + (1));
seq__21487_21491 = G__21496;
chunk__21488_21492 = G__21497;
count__21489_21493 = G__21498;
i__21490_21494 = G__21499;
continue;
}
} else
{var temp__4126__auto___21500 = cljs.core.seq.call(null,seq__21487_21491);if(temp__4126__auto___21500)
{var seq__21487_21501__$1 = temp__4126__auto___21500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21487_21501__$1))
{var c__4408__auto___21502 = cljs.core.chunk_first.call(null,seq__21487_21501__$1);{
var G__21503 = cljs.core.chunk_rest.call(null,seq__21487_21501__$1);
var G__21504 = c__4408__auto___21502;
var G__21505 = cljs.core.count.call(null,c__4408__auto___21502);
var G__21506 = (0);
seq__21487_21491 = G__21503;
chunk__21488_21492 = G__21504;
count__21489_21493 = G__21505;
i__21490_21494 = G__21506;
continue;
}
} else
{var node_21507 = cljs.core.first.call(null,seq__21487_21501__$1);goog.dom.setTextContent(node_21507,value);
{
var G__21508 = cljs.core.next.call(null,seq__21487_21501__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__21487_21491 = G__21508;
chunk__21488_21492 = G__21509;
count__21489_21493 = G__21510;
i__21490_21494 = G__21511;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21516_21520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21517_21521 = null;var count__21518_21522 = (0);var i__21519_21523 = (0);while(true){
if((i__21519_21523 < count__21518_21522))
{var node_21524 = cljs.core._nth.call(null,chunk__21517_21521,i__21519_21523);goog.dom.forms.setValue(node_21524,value);
{
var G__21525 = seq__21516_21520;
var G__21526 = chunk__21517_21521;
var G__21527 = count__21518_21522;
var G__21528 = (i__21519_21523 + (1));
seq__21516_21520 = G__21525;
chunk__21517_21521 = G__21526;
count__21518_21522 = G__21527;
i__21519_21523 = G__21528;
continue;
}
} else
{var temp__4126__auto___21529 = cljs.core.seq.call(null,seq__21516_21520);if(temp__4126__auto___21529)
{var seq__21516_21530__$1 = temp__4126__auto___21529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21516_21530__$1))
{var c__4408__auto___21531 = cljs.core.chunk_first.call(null,seq__21516_21530__$1);{
var G__21532 = cljs.core.chunk_rest.call(null,seq__21516_21530__$1);
var G__21533 = c__4408__auto___21531;
var G__21534 = cljs.core.count.call(null,c__4408__auto___21531);
var G__21535 = (0);
seq__21516_21520 = G__21532;
chunk__21517_21521 = G__21533;
count__21518_21522 = G__21534;
i__21519_21523 = G__21535;
continue;
}
} else
{var node_21536 = cljs.core.first.call(null,seq__21516_21530__$1);goog.dom.forms.setValue(node_21536,value);
{
var G__21537 = cljs.core.next.call(null,seq__21516_21530__$1);
var G__21538 = null;
var G__21539 = (0);
var G__21540 = (0);
seq__21516_21520 = G__21537;
chunk__21517_21521 = G__21538;
count__21518_21522 = G__21539;
i__21519_21523 = G__21540;
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
{var value_21551 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21547_21552 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21548_21553 = null;var count__21549_21554 = (0);var i__21550_21555 = (0);while(true){
if((i__21550_21555 < count__21549_21554))
{var node_21556 = cljs.core._nth.call(null,chunk__21548_21553,i__21550_21555);node_21556.innerHTML = value_21551;
{
var G__21557 = seq__21547_21552;
var G__21558 = chunk__21548_21553;
var G__21559 = count__21549_21554;
var G__21560 = (i__21550_21555 + (1));
seq__21547_21552 = G__21557;
chunk__21548_21553 = G__21558;
count__21549_21554 = G__21559;
i__21550_21555 = G__21560;
continue;
}
} else
{var temp__4126__auto___21561 = cljs.core.seq.call(null,seq__21547_21552);if(temp__4126__auto___21561)
{var seq__21547_21562__$1 = temp__4126__auto___21561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21547_21562__$1))
{var c__4408__auto___21563 = cljs.core.chunk_first.call(null,seq__21547_21562__$1);{
var G__21564 = cljs.core.chunk_rest.call(null,seq__21547_21562__$1);
var G__21565 = c__4408__auto___21563;
var G__21566 = cljs.core.count.call(null,c__4408__auto___21563);
var G__21567 = (0);
seq__21547_21552 = G__21564;
chunk__21548_21553 = G__21565;
count__21549_21554 = G__21566;
i__21550_21555 = G__21567;
continue;
}
} else
{var node_21568 = cljs.core.first.call(null,seq__21547_21562__$1);node_21568.innerHTML = value_21551;
{
var G__21569 = cljs.core.next.call(null,seq__21547_21562__$1);
var G__21570 = null;
var G__21571 = (0);
var G__21572 = (0);
seq__21547_21552 = G__21569;
chunk__21548_21553 = G__21570;
count__21549_21554 = G__21571;
i__21550_21555 = G__21572;
continue;
}
}
} else
{}
}
break;
}
}catch (e21546){if((e21546 instanceof Error))
{var e_21573 = e21546;domina.replace_children_BANG_.call(null,content,value_21551);
} else
{throw e21546;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21580_21584 = cljs.core.seq.call(null,children);var chunk__21581_21585 = null;var count__21582_21586 = (0);var i__21583_21587 = (0);while(true){
if((i__21583_21587 < count__21582_21586))
{var child_21588 = cljs.core._nth.call(null,chunk__21581_21585,i__21583_21587);frag.appendChild(child_21588);
{
var G__21589 = seq__21580_21584;
var G__21590 = chunk__21581_21585;
var G__21591 = count__21582_21586;
var G__21592 = (i__21583_21587 + (1));
seq__21580_21584 = G__21589;
chunk__21581_21585 = G__21590;
count__21582_21586 = G__21591;
i__21583_21587 = G__21592;
continue;
}
} else
{var temp__4126__auto___21593 = cljs.core.seq.call(null,seq__21580_21584);if(temp__4126__auto___21593)
{var seq__21580_21594__$1 = temp__4126__auto___21593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21580_21594__$1))
{var c__4408__auto___21595 = cljs.core.chunk_first.call(null,seq__21580_21594__$1);{
var G__21596 = cljs.core.chunk_rest.call(null,seq__21580_21594__$1);
var G__21597 = c__4408__auto___21595;
var G__21598 = cljs.core.count.call(null,c__4408__auto___21595);
var G__21599 = (0);
seq__21580_21584 = G__21596;
chunk__21581_21585 = G__21597;
count__21582_21586 = G__21598;
i__21583_21587 = G__21599;
continue;
}
} else
{var child_21600 = cljs.core.first.call(null,seq__21580_21594__$1);frag.appendChild(child_21600);
{
var G__21601 = cljs.core.next.call(null,seq__21580_21594__$1);
var G__21602 = null;
var G__21603 = (0);
var G__21604 = (0);
seq__21580_21584 = G__21601;
chunk__21581_21585 = G__21602;
count__21582_21586 = G__21603;
i__21583_21587 = G__21604;
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
return (function (p1__21574_SHARP_,p2__21575_SHARP_){return f.call(null,p1__21574_SHARP_,p2__21575_SHARP_);
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
{if((function (){var G__21606 = list_thing;if(G__21606)
{var bit__4302__auto__ = (G__21606.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21606.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21606);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21606);
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
{if((function (){var G__21607 = content;if(G__21607)
{var bit__4302__auto__ = (G__21607.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21607.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21607);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21607);
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
{if((function (){var G__21608 = content;if(G__21608)
{var bit__4302__auto__ = (G__21608.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21608.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21608);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21608);
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
