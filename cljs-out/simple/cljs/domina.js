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
var opt_wrapper_19945 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19947,opt_wrapper_19945,table_section_wrapper_19946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19945,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19946,cell_wrapper_19947,table_section_wrapper_19946,table_section_wrapper_19946]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19952 = cljs.core.seq.call(null,tbody);var chunk__19953 = null;var count__19954 = (0);var i__19955 = (0);while(true){
if((i__19955 < count__19954))
{var child = cljs.core._nth.call(null,chunk__19953,i__19955);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19956 = seq__19952;
var G__19957 = chunk__19953;
var G__19958 = count__19954;
var G__19959 = (i__19955 + (1));
seq__19952 = G__19956;
chunk__19953 = G__19957;
count__19954 = G__19958;
i__19955 = G__19959;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19952);if(temp__4126__auto__)
{var seq__19952__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19952__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19952__$1);{
var G__19960 = cljs.core.chunk_rest.call(null,seq__19952__$1);
var G__19961 = c__4408__auto__;
var G__19962 = cljs.core.count.call(null,c__4408__auto__);
var G__19963 = (0);
seq__19952 = G__19960;
chunk__19953 = G__19961;
count__19954 = G__19962;
i__19955 = G__19963;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19952__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19964 = cljs.core.next.call(null,seq__19952__$1);
var G__19965 = null;
var G__19966 = (0);
var G__19967 = (0);
seq__19952 = G__19964;
chunk__19953 = G__19965;
count__19954 = G__19966;
i__19955 = G__19967;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19969 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19969,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19969,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19969,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19970 = wrapper.lastChild;
var G__19971 = (level - (1));
wrapper = G__19970;
level = G__19971;
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
domina.DomContent = (function (){var obj19973 = {};return obj19973;
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
log_debug.cljs$lang$applyTo = (function (arglist__19974){
var mesg = cljs.core.seq(arglist__19974);
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
log.cljs$lang$applyTo = (function (arglist__19975){
var mesg = cljs.core.seq(arglist__19975);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19976){
var contents = cljs.core.seq(arglist__19976);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19977_SHARP_){return p1__19977_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19978_SHARP_,p2__19979_SHARP_){return goog.dom.insertChildAt(p1__19978_SHARP_,p2__19979_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19981_SHARP_,p2__19980_SHARP_){return goog.dom.insertSiblingBefore(p2__19980_SHARP_,p1__19981_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19983_SHARP_,p2__19982_SHARP_){return goog.dom.insertSiblingAfter(p2__19982_SHARP_,p1__19983_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19985_SHARP_,p2__19984_SHARP_){return goog.dom.replaceNode(p2__19984_SHARP_,p1__19985_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19990_19994 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19991_19995 = null;var count__19992_19996 = (0);var i__19993_19997 = (0);while(true){
if((i__19993_19997 < count__19992_19996))
{var n_19998 = cljs.core._nth.call(null,chunk__19991_19995,i__19993_19997);goog.style.setStyle(n_19998,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19999 = seq__19990_19994;
var G__20000 = chunk__19991_19995;
var G__20001 = count__19992_19996;
var G__20002 = (i__19993_19997 + (1));
seq__19990_19994 = G__19999;
chunk__19991_19995 = G__20000;
count__19992_19996 = G__20001;
i__19993_19997 = G__20002;
continue;
}
} else
{var temp__4126__auto___20003 = cljs.core.seq.call(null,seq__19990_19994);if(temp__4126__auto___20003)
{var seq__19990_20004__$1 = temp__4126__auto___20003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19990_20004__$1))
{var c__4408__auto___20005 = cljs.core.chunk_first.call(null,seq__19990_20004__$1);{
var G__20006 = cljs.core.chunk_rest.call(null,seq__19990_20004__$1);
var G__20007 = c__4408__auto___20005;
var G__20008 = cljs.core.count.call(null,c__4408__auto___20005);
var G__20009 = (0);
seq__19990_19994 = G__20006;
chunk__19991_19995 = G__20007;
count__19992_19996 = G__20008;
i__19993_19997 = G__20009;
continue;
}
} else
{var n_20010 = cljs.core.first.call(null,seq__19990_20004__$1);goog.style.setStyle(n_20010,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20011 = cljs.core.next.call(null,seq__19990_20004__$1);
var G__20012 = null;
var G__20013 = (0);
var G__20014 = (0);
seq__19990_19994 = G__20011;
chunk__19991_19995 = G__20012;
count__19992_19996 = G__20013;
i__19993_19997 = G__20014;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20015){
var content = cljs.core.first(arglist__20015);
arglist__20015 = cljs.core.next(arglist__20015);
var name = cljs.core.first(arglist__20015);
var value = cljs.core.rest(arglist__20015);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20020_20024 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20021_20025 = null;var count__20022_20026 = (0);var i__20023_20027 = (0);while(true){
if((i__20023_20027 < count__20022_20026))
{var n_20028 = cljs.core._nth.call(null,chunk__20021_20025,i__20023_20027);n_20028.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20029 = seq__20020_20024;
var G__20030 = chunk__20021_20025;
var G__20031 = count__20022_20026;
var G__20032 = (i__20023_20027 + (1));
seq__20020_20024 = G__20029;
chunk__20021_20025 = G__20030;
count__20022_20026 = G__20031;
i__20023_20027 = G__20032;
continue;
}
} else
{var temp__4126__auto___20033 = cljs.core.seq.call(null,seq__20020_20024);if(temp__4126__auto___20033)
{var seq__20020_20034__$1 = temp__4126__auto___20033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20020_20034__$1))
{var c__4408__auto___20035 = cljs.core.chunk_first.call(null,seq__20020_20034__$1);{
var G__20036 = cljs.core.chunk_rest.call(null,seq__20020_20034__$1);
var G__20037 = c__4408__auto___20035;
var G__20038 = cljs.core.count.call(null,c__4408__auto___20035);
var G__20039 = (0);
seq__20020_20024 = G__20036;
chunk__20021_20025 = G__20037;
count__20022_20026 = G__20038;
i__20023_20027 = G__20039;
continue;
}
} else
{var n_20040 = cljs.core.first.call(null,seq__20020_20034__$1);n_20040.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20041 = cljs.core.next.call(null,seq__20020_20034__$1);
var G__20042 = null;
var G__20043 = (0);
var G__20044 = (0);
seq__20020_20024 = G__20041;
chunk__20021_20025 = G__20042;
count__20022_20026 = G__20043;
i__20023_20027 = G__20044;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20045){
var content = cljs.core.first(arglist__20045);
arglist__20045 = cljs.core.next(arglist__20045);
var name = cljs.core.first(arglist__20045);
var value = cljs.core.rest(arglist__20045);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20050_20054 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20051_20055 = null;var count__20052_20056 = (0);var i__20053_20057 = (0);while(true){
if((i__20053_20057 < count__20052_20056))
{var n_20058 = cljs.core._nth.call(null,chunk__20051_20055,i__20053_20057);n_20058.removeAttribute(cljs.core.name.call(null,name));
{
var G__20059 = seq__20050_20054;
var G__20060 = chunk__20051_20055;
var G__20061 = count__20052_20056;
var G__20062 = (i__20053_20057 + (1));
seq__20050_20054 = G__20059;
chunk__20051_20055 = G__20060;
count__20052_20056 = G__20061;
i__20053_20057 = G__20062;
continue;
}
} else
{var temp__4126__auto___20063 = cljs.core.seq.call(null,seq__20050_20054);if(temp__4126__auto___20063)
{var seq__20050_20064__$1 = temp__4126__auto___20063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20050_20064__$1))
{var c__4408__auto___20065 = cljs.core.chunk_first.call(null,seq__20050_20064__$1);{
var G__20066 = cljs.core.chunk_rest.call(null,seq__20050_20064__$1);
var G__20067 = c__4408__auto___20065;
var G__20068 = cljs.core.count.call(null,c__4408__auto___20065);
var G__20069 = (0);
seq__20050_20054 = G__20066;
chunk__20051_20055 = G__20067;
count__20052_20056 = G__20068;
i__20053_20057 = G__20069;
continue;
}
} else
{var n_20070 = cljs.core.first.call(null,seq__20050_20064__$1);n_20070.removeAttribute(cljs.core.name.call(null,name));
{
var G__20071 = cljs.core.next.call(null,seq__20050_20064__$1);
var G__20072 = null;
var G__20073 = (0);
var G__20074 = (0);
seq__20050_20054 = G__20071;
chunk__20051_20055 = G__20072;
count__20052_20056 = G__20073;
i__20053_20057 = G__20074;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20076 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20076,(0),null);var v = cljs.core.nth.call(null,vec__20076,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20077_SHARP_){var attr = attrs__$1.item(p1__20077_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20084_20090 = cljs.core.seq.call(null,styles);var chunk__20085_20091 = null;var count__20086_20092 = (0);var i__20087_20093 = (0);while(true){
if((i__20087_20093 < count__20086_20092))
{var vec__20088_20094 = cljs.core._nth.call(null,chunk__20085_20091,i__20087_20093);var name_20095 = cljs.core.nth.call(null,vec__20088_20094,(0),null);var value_20096 = cljs.core.nth.call(null,vec__20088_20094,(1),null);domina.set_style_BANG_.call(null,content,name_20095,value_20096);
{
var G__20097 = seq__20084_20090;
var G__20098 = chunk__20085_20091;
var G__20099 = count__20086_20092;
var G__20100 = (i__20087_20093 + (1));
seq__20084_20090 = G__20097;
chunk__20085_20091 = G__20098;
count__20086_20092 = G__20099;
i__20087_20093 = G__20100;
continue;
}
} else
{var temp__4126__auto___20101 = cljs.core.seq.call(null,seq__20084_20090);if(temp__4126__auto___20101)
{var seq__20084_20102__$1 = temp__4126__auto___20101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20084_20102__$1))
{var c__4408__auto___20103 = cljs.core.chunk_first.call(null,seq__20084_20102__$1);{
var G__20104 = cljs.core.chunk_rest.call(null,seq__20084_20102__$1);
var G__20105 = c__4408__auto___20103;
var G__20106 = cljs.core.count.call(null,c__4408__auto___20103);
var G__20107 = (0);
seq__20084_20090 = G__20104;
chunk__20085_20091 = G__20105;
count__20086_20092 = G__20106;
i__20087_20093 = G__20107;
continue;
}
} else
{var vec__20089_20108 = cljs.core.first.call(null,seq__20084_20102__$1);var name_20109 = cljs.core.nth.call(null,vec__20089_20108,(0),null);var value_20110 = cljs.core.nth.call(null,vec__20089_20108,(1),null);domina.set_style_BANG_.call(null,content,name_20109,value_20110);
{
var G__20111 = cljs.core.next.call(null,seq__20084_20102__$1);
var G__20112 = null;
var G__20113 = (0);
var G__20114 = (0);
seq__20084_20090 = G__20111;
chunk__20085_20091 = G__20112;
count__20086_20092 = G__20113;
i__20087_20093 = G__20114;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20121_20127 = cljs.core.seq.call(null,attrs);var chunk__20122_20128 = null;var count__20123_20129 = (0);var i__20124_20130 = (0);while(true){
if((i__20124_20130 < count__20123_20129))
{var vec__20125_20131 = cljs.core._nth.call(null,chunk__20122_20128,i__20124_20130);var name_20132 = cljs.core.nth.call(null,vec__20125_20131,(0),null);var value_20133 = cljs.core.nth.call(null,vec__20125_20131,(1),null);domina.set_attr_BANG_.call(null,content,name_20132,value_20133);
{
var G__20134 = seq__20121_20127;
var G__20135 = chunk__20122_20128;
var G__20136 = count__20123_20129;
var G__20137 = (i__20124_20130 + (1));
seq__20121_20127 = G__20134;
chunk__20122_20128 = G__20135;
count__20123_20129 = G__20136;
i__20124_20130 = G__20137;
continue;
}
} else
{var temp__4126__auto___20138 = cljs.core.seq.call(null,seq__20121_20127);if(temp__4126__auto___20138)
{var seq__20121_20139__$1 = temp__4126__auto___20138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20121_20139__$1))
{var c__4408__auto___20140 = cljs.core.chunk_first.call(null,seq__20121_20139__$1);{
var G__20141 = cljs.core.chunk_rest.call(null,seq__20121_20139__$1);
var G__20142 = c__4408__auto___20140;
var G__20143 = cljs.core.count.call(null,c__4408__auto___20140);
var G__20144 = (0);
seq__20121_20127 = G__20141;
chunk__20122_20128 = G__20142;
count__20123_20129 = G__20143;
i__20124_20130 = G__20144;
continue;
}
} else
{var vec__20126_20145 = cljs.core.first.call(null,seq__20121_20139__$1);var name_20146 = cljs.core.nth.call(null,vec__20126_20145,(0),null);var value_20147 = cljs.core.nth.call(null,vec__20126_20145,(1),null);domina.set_attr_BANG_.call(null,content,name_20146,value_20147);
{
var G__20148 = cljs.core.next.call(null,seq__20121_20139__$1);
var G__20149 = null;
var G__20150 = (0);
var G__20151 = (0);
seq__20121_20127 = G__20148;
chunk__20122_20128 = G__20149;
count__20123_20129 = G__20150;
i__20124_20130 = G__20151;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20156_20160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20157_20161 = null;var count__20158_20162 = (0);var i__20159_20163 = (0);while(true){
if((i__20159_20163 < count__20158_20162))
{var node_20164 = cljs.core._nth.call(null,chunk__20157_20161,i__20159_20163);goog.dom.classes.add(node_20164,class$);
{
var G__20165 = seq__20156_20160;
var G__20166 = chunk__20157_20161;
var G__20167 = count__20158_20162;
var G__20168 = (i__20159_20163 + (1));
seq__20156_20160 = G__20165;
chunk__20157_20161 = G__20166;
count__20158_20162 = G__20167;
i__20159_20163 = G__20168;
continue;
}
} else
{var temp__4126__auto___20169 = cljs.core.seq.call(null,seq__20156_20160);if(temp__4126__auto___20169)
{var seq__20156_20170__$1 = temp__4126__auto___20169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20156_20170__$1))
{var c__4408__auto___20171 = cljs.core.chunk_first.call(null,seq__20156_20170__$1);{
var G__20172 = cljs.core.chunk_rest.call(null,seq__20156_20170__$1);
var G__20173 = c__4408__auto___20171;
var G__20174 = cljs.core.count.call(null,c__4408__auto___20171);
var G__20175 = (0);
seq__20156_20160 = G__20172;
chunk__20157_20161 = G__20173;
count__20158_20162 = G__20174;
i__20159_20163 = G__20175;
continue;
}
} else
{var node_20176 = cljs.core.first.call(null,seq__20156_20170__$1);goog.dom.classes.add(node_20176,class$);
{
var G__20177 = cljs.core.next.call(null,seq__20156_20170__$1);
var G__20178 = null;
var G__20179 = (0);
var G__20180 = (0);
seq__20156_20160 = G__20177;
chunk__20157_20161 = G__20178;
count__20158_20162 = G__20179;
i__20159_20163 = G__20180;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20185_20189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20186_20190 = null;var count__20187_20191 = (0);var i__20188_20192 = (0);while(true){
if((i__20188_20192 < count__20187_20191))
{var node_20193 = cljs.core._nth.call(null,chunk__20186_20190,i__20188_20192);goog.dom.classes.remove(node_20193,class$);
{
var G__20194 = seq__20185_20189;
var G__20195 = chunk__20186_20190;
var G__20196 = count__20187_20191;
var G__20197 = (i__20188_20192 + (1));
seq__20185_20189 = G__20194;
chunk__20186_20190 = G__20195;
count__20187_20191 = G__20196;
i__20188_20192 = G__20197;
continue;
}
} else
{var temp__4126__auto___20198 = cljs.core.seq.call(null,seq__20185_20189);if(temp__4126__auto___20198)
{var seq__20185_20199__$1 = temp__4126__auto___20198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20185_20199__$1))
{var c__4408__auto___20200 = cljs.core.chunk_first.call(null,seq__20185_20199__$1);{
var G__20201 = cljs.core.chunk_rest.call(null,seq__20185_20199__$1);
var G__20202 = c__4408__auto___20200;
var G__20203 = cljs.core.count.call(null,c__4408__auto___20200);
var G__20204 = (0);
seq__20185_20189 = G__20201;
chunk__20186_20190 = G__20202;
count__20187_20191 = G__20203;
i__20188_20192 = G__20204;
continue;
}
} else
{var node_20205 = cljs.core.first.call(null,seq__20185_20199__$1);goog.dom.classes.remove(node_20205,class$);
{
var G__20206 = cljs.core.next.call(null,seq__20185_20199__$1);
var G__20207 = null;
var G__20208 = (0);
var G__20209 = (0);
seq__20185_20189 = G__20206;
chunk__20186_20190 = G__20207;
count__20187_20191 = G__20208;
i__20188_20192 = G__20209;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20214_20218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20215_20219 = null;var count__20216_20220 = (0);var i__20217_20221 = (0);while(true){
if((i__20217_20221 < count__20216_20220))
{var node_20222 = cljs.core._nth.call(null,chunk__20215_20219,i__20217_20221);goog.dom.classes.toggle(node_20222,class$);
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
{var node_20234 = cljs.core.first.call(null,seq__20214_20228__$1);goog.dom.classes.toggle(node_20234,class$);
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20247__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20243_20248 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20244_20249 = null;var count__20245_20250 = (0);var i__20246_20251 = (0);while(true){
if((i__20246_20251 < count__20245_20250))
{var node_20252 = cljs.core._nth.call(null,chunk__20244_20249,i__20246_20251);goog.dom.classes.set(node_20252,classes_20247__$1);
{
var G__20253 = seq__20243_20248;
var G__20254 = chunk__20244_20249;
var G__20255 = count__20245_20250;
var G__20256 = (i__20246_20251 + (1));
seq__20243_20248 = G__20253;
chunk__20244_20249 = G__20254;
count__20245_20250 = G__20255;
i__20246_20251 = G__20256;
continue;
}
} else
{var temp__4126__auto___20257 = cljs.core.seq.call(null,seq__20243_20248);if(temp__4126__auto___20257)
{var seq__20243_20258__$1 = temp__4126__auto___20257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20243_20258__$1))
{var c__4408__auto___20259 = cljs.core.chunk_first.call(null,seq__20243_20258__$1);{
var G__20260 = cljs.core.chunk_rest.call(null,seq__20243_20258__$1);
var G__20261 = c__4408__auto___20259;
var G__20262 = cljs.core.count.call(null,c__4408__auto___20259);
var G__20263 = (0);
seq__20243_20248 = G__20260;
chunk__20244_20249 = G__20261;
count__20245_20250 = G__20262;
i__20246_20251 = G__20263;
continue;
}
} else
{var node_20264 = cljs.core.first.call(null,seq__20243_20258__$1);goog.dom.classes.set(node_20264,classes_20247__$1);
{
var G__20265 = cljs.core.next.call(null,seq__20243_20258__$1);
var G__20266 = null;
var G__20267 = (0);
var G__20268 = (0);
seq__20243_20248 = G__20265;
chunk__20244_20249 = G__20266;
count__20245_20250 = G__20267;
i__20246_20251 = G__20268;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20273_20277 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20274_20278 = null;var count__20275_20279 = (0);var i__20276_20280 = (0);while(true){
if((i__20276_20280 < count__20275_20279))
{var node_20281 = cljs.core._nth.call(null,chunk__20274_20278,i__20276_20280);goog.dom.setTextContent(node_20281,value);
{
var G__20282 = seq__20273_20277;
var G__20283 = chunk__20274_20278;
var G__20284 = count__20275_20279;
var G__20285 = (i__20276_20280 + (1));
seq__20273_20277 = G__20282;
chunk__20274_20278 = G__20283;
count__20275_20279 = G__20284;
i__20276_20280 = G__20285;
continue;
}
} else
{var temp__4126__auto___20286 = cljs.core.seq.call(null,seq__20273_20277);if(temp__4126__auto___20286)
{var seq__20273_20287__$1 = temp__4126__auto___20286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20273_20287__$1))
{var c__4408__auto___20288 = cljs.core.chunk_first.call(null,seq__20273_20287__$1);{
var G__20289 = cljs.core.chunk_rest.call(null,seq__20273_20287__$1);
var G__20290 = c__4408__auto___20288;
var G__20291 = cljs.core.count.call(null,c__4408__auto___20288);
var G__20292 = (0);
seq__20273_20277 = G__20289;
chunk__20274_20278 = G__20290;
count__20275_20279 = G__20291;
i__20276_20280 = G__20292;
continue;
}
} else
{var node_20293 = cljs.core.first.call(null,seq__20273_20287__$1);goog.dom.setTextContent(node_20293,value);
{
var G__20294 = cljs.core.next.call(null,seq__20273_20287__$1);
var G__20295 = null;
var G__20296 = (0);
var G__20297 = (0);
seq__20273_20277 = G__20294;
chunk__20274_20278 = G__20295;
count__20275_20279 = G__20296;
i__20276_20280 = G__20297;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20302_20306 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20303_20307 = null;var count__20304_20308 = (0);var i__20305_20309 = (0);while(true){
if((i__20305_20309 < count__20304_20308))
{var node_20310 = cljs.core._nth.call(null,chunk__20303_20307,i__20305_20309);goog.dom.forms.setValue(node_20310,value);
{
var G__20311 = seq__20302_20306;
var G__20312 = chunk__20303_20307;
var G__20313 = count__20304_20308;
var G__20314 = (i__20305_20309 + (1));
seq__20302_20306 = G__20311;
chunk__20303_20307 = G__20312;
count__20304_20308 = G__20313;
i__20305_20309 = G__20314;
continue;
}
} else
{var temp__4126__auto___20315 = cljs.core.seq.call(null,seq__20302_20306);if(temp__4126__auto___20315)
{var seq__20302_20316__$1 = temp__4126__auto___20315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20302_20316__$1))
{var c__4408__auto___20317 = cljs.core.chunk_first.call(null,seq__20302_20316__$1);{
var G__20318 = cljs.core.chunk_rest.call(null,seq__20302_20316__$1);
var G__20319 = c__4408__auto___20317;
var G__20320 = cljs.core.count.call(null,c__4408__auto___20317);
var G__20321 = (0);
seq__20302_20306 = G__20318;
chunk__20303_20307 = G__20319;
count__20304_20308 = G__20320;
i__20305_20309 = G__20321;
continue;
}
} else
{var node_20322 = cljs.core.first.call(null,seq__20302_20316__$1);goog.dom.forms.setValue(node_20322,value);
{
var G__20323 = cljs.core.next.call(null,seq__20302_20316__$1);
var G__20324 = null;
var G__20325 = (0);
var G__20326 = (0);
seq__20302_20306 = G__20323;
chunk__20303_20307 = G__20324;
count__20304_20308 = G__20325;
i__20305_20309 = G__20326;
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
{var value_20337 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20333_20338 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20334_20339 = null;var count__20335_20340 = (0);var i__20336_20341 = (0);while(true){
if((i__20336_20341 < count__20335_20340))
{var node_20342 = cljs.core._nth.call(null,chunk__20334_20339,i__20336_20341);node_20342.innerHTML = value_20337;
{
var G__20343 = seq__20333_20338;
var G__20344 = chunk__20334_20339;
var G__20345 = count__20335_20340;
var G__20346 = (i__20336_20341 + (1));
seq__20333_20338 = G__20343;
chunk__20334_20339 = G__20344;
count__20335_20340 = G__20345;
i__20336_20341 = G__20346;
continue;
}
} else
{var temp__4126__auto___20347 = cljs.core.seq.call(null,seq__20333_20338);if(temp__4126__auto___20347)
{var seq__20333_20348__$1 = temp__4126__auto___20347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20333_20348__$1))
{var c__4408__auto___20349 = cljs.core.chunk_first.call(null,seq__20333_20348__$1);{
var G__20350 = cljs.core.chunk_rest.call(null,seq__20333_20348__$1);
var G__20351 = c__4408__auto___20349;
var G__20352 = cljs.core.count.call(null,c__4408__auto___20349);
var G__20353 = (0);
seq__20333_20338 = G__20350;
chunk__20334_20339 = G__20351;
count__20335_20340 = G__20352;
i__20336_20341 = G__20353;
continue;
}
} else
{var node_20354 = cljs.core.first.call(null,seq__20333_20348__$1);node_20354.innerHTML = value_20337;
{
var G__20355 = cljs.core.next.call(null,seq__20333_20348__$1);
var G__20356 = null;
var G__20357 = (0);
var G__20358 = (0);
seq__20333_20338 = G__20355;
chunk__20334_20339 = G__20356;
count__20335_20340 = G__20357;
i__20336_20341 = G__20358;
continue;
}
}
} else
{}
}
break;
}
}catch (e20332){if((e20332 instanceof Error))
{var e_20359 = e20332;domina.replace_children_BANG_.call(null,content,value_20337);
} else
{throw e20332;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20366_20370 = cljs.core.seq.call(null,children);var chunk__20367_20371 = null;var count__20368_20372 = (0);var i__20369_20373 = (0);while(true){
if((i__20369_20373 < count__20368_20372))
{var child_20374 = cljs.core._nth.call(null,chunk__20367_20371,i__20369_20373);frag.appendChild(child_20374);
{
var G__20375 = seq__20366_20370;
var G__20376 = chunk__20367_20371;
var G__20377 = count__20368_20372;
var G__20378 = (i__20369_20373 + (1));
seq__20366_20370 = G__20375;
chunk__20367_20371 = G__20376;
count__20368_20372 = G__20377;
i__20369_20373 = G__20378;
continue;
}
} else
{var temp__4126__auto___20379 = cljs.core.seq.call(null,seq__20366_20370);if(temp__4126__auto___20379)
{var seq__20366_20380__$1 = temp__4126__auto___20379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20366_20380__$1))
{var c__4408__auto___20381 = cljs.core.chunk_first.call(null,seq__20366_20380__$1);{
var G__20382 = cljs.core.chunk_rest.call(null,seq__20366_20380__$1);
var G__20383 = c__4408__auto___20381;
var G__20384 = cljs.core.count.call(null,c__4408__auto___20381);
var G__20385 = (0);
seq__20366_20370 = G__20382;
chunk__20367_20371 = G__20383;
count__20368_20372 = G__20384;
i__20369_20373 = G__20385;
continue;
}
} else
{var child_20386 = cljs.core.first.call(null,seq__20366_20380__$1);frag.appendChild(child_20386);
{
var G__20387 = cljs.core.next.call(null,seq__20366_20380__$1);
var G__20388 = null;
var G__20389 = (0);
var G__20390 = (0);
seq__20366_20370 = G__20387;
chunk__20367_20371 = G__20388;
count__20368_20372 = G__20389;
i__20369_20373 = G__20390;
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
return (function (p1__20360_SHARP_,p2__20361_SHARP_){return f.call(null,p1__20360_SHARP_,p2__20361_SHARP_);
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
{if((function (){var G__20392 = list_thing;if(G__20392)
{var bit__4302__auto__ = (G__20392.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20392.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20392.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20392);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20392);
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
{if((function (){var G__20393 = content;if(G__20393)
{var bit__4302__auto__ = (G__20393.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20393.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20393.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20393);
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
{if((function (){var G__20394 = content;if(G__20394)
{var bit__4302__auto__ = (G__20394.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20394.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20394);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20394);
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
