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
var opt_wrapper_19977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19978 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19979 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19979,opt_wrapper_19977,table_section_wrapper_19978,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19977,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19978,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19978,cell_wrapper_19979,table_section_wrapper_19978,table_section_wrapper_19978]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19984 = cljs.core.seq.call(null,tbody);var chunk__19985 = null;var count__19986 = (0);var i__19987 = (0);while(true){
if((i__19987 < count__19986))
{var child = cljs.core._nth.call(null,chunk__19985,i__19987);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19988 = seq__19984;
var G__19989 = chunk__19985;
var G__19990 = count__19986;
var G__19991 = (i__19987 + (1));
seq__19984 = G__19988;
chunk__19985 = G__19989;
count__19986 = G__19990;
i__19987 = G__19991;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19984);if(temp__4126__auto__)
{var seq__19984__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19984__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19984__$1);{
var G__19992 = cljs.core.chunk_rest.call(null,seq__19984__$1);
var G__19993 = c__4408__auto__;
var G__19994 = cljs.core.count.call(null,c__4408__auto__);
var G__19995 = (0);
seq__19984 = G__19992;
chunk__19985 = G__19993;
count__19986 = G__19994;
i__19987 = G__19995;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19984__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19996 = cljs.core.next.call(null,seq__19984__$1);
var G__19997 = null;
var G__19998 = (0);
var G__19999 = (0);
seq__19984 = G__19996;
chunk__19985 = G__19997;
count__19986 = G__19998;
i__19987 = G__19999;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20001 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20001,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20001,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20001,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20002 = wrapper.lastChild;
var G__20003 = (level - (1));
wrapper = G__20002;
level = G__20003;
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
domina.DomContent = (function (){var obj20005 = {};return obj20005;
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
log_debug.cljs$lang$applyTo = (function (arglist__20006){
var mesg = cljs.core.seq(arglist__20006);
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
log.cljs$lang$applyTo = (function (arglist__20007){
var mesg = cljs.core.seq(arglist__20007);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20008){
var contents = cljs.core.seq(arglist__20008);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20009_SHARP_){return p1__20009_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20010_SHARP_,p2__20011_SHARP_){return goog.dom.insertChildAt(p1__20010_SHARP_,p2__20011_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20013_SHARP_,p2__20012_SHARP_){return goog.dom.insertSiblingBefore(p2__20012_SHARP_,p1__20013_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20015_SHARP_,p2__20014_SHARP_){return goog.dom.insertSiblingAfter(p2__20014_SHARP_,p1__20015_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20017_SHARP_,p2__20016_SHARP_){return goog.dom.replaceNode(p2__20016_SHARP_,p1__20017_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20022_20026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20023_20027 = null;var count__20024_20028 = (0);var i__20025_20029 = (0);while(true){
if((i__20025_20029 < count__20024_20028))
{var n_20030 = cljs.core._nth.call(null,chunk__20023_20027,i__20025_20029);goog.style.setStyle(n_20030,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20031 = seq__20022_20026;
var G__20032 = chunk__20023_20027;
var G__20033 = count__20024_20028;
var G__20034 = (i__20025_20029 + (1));
seq__20022_20026 = G__20031;
chunk__20023_20027 = G__20032;
count__20024_20028 = G__20033;
i__20025_20029 = G__20034;
continue;
}
} else
{var temp__4126__auto___20035 = cljs.core.seq.call(null,seq__20022_20026);if(temp__4126__auto___20035)
{var seq__20022_20036__$1 = temp__4126__auto___20035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20022_20036__$1))
{var c__4408__auto___20037 = cljs.core.chunk_first.call(null,seq__20022_20036__$1);{
var G__20038 = cljs.core.chunk_rest.call(null,seq__20022_20036__$1);
var G__20039 = c__4408__auto___20037;
var G__20040 = cljs.core.count.call(null,c__4408__auto___20037);
var G__20041 = (0);
seq__20022_20026 = G__20038;
chunk__20023_20027 = G__20039;
count__20024_20028 = G__20040;
i__20025_20029 = G__20041;
continue;
}
} else
{var n_20042 = cljs.core.first.call(null,seq__20022_20036__$1);goog.style.setStyle(n_20042,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20043 = cljs.core.next.call(null,seq__20022_20036__$1);
var G__20044 = null;
var G__20045 = (0);
var G__20046 = (0);
seq__20022_20026 = G__20043;
chunk__20023_20027 = G__20044;
count__20024_20028 = G__20045;
i__20025_20029 = G__20046;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20047){
var content = cljs.core.first(arglist__20047);
arglist__20047 = cljs.core.next(arglist__20047);
var name = cljs.core.first(arglist__20047);
var value = cljs.core.rest(arglist__20047);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20052_20056 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20053_20057 = null;var count__20054_20058 = (0);var i__20055_20059 = (0);while(true){
if((i__20055_20059 < count__20054_20058))
{var n_20060 = cljs.core._nth.call(null,chunk__20053_20057,i__20055_20059);n_20060.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20061 = seq__20052_20056;
var G__20062 = chunk__20053_20057;
var G__20063 = count__20054_20058;
var G__20064 = (i__20055_20059 + (1));
seq__20052_20056 = G__20061;
chunk__20053_20057 = G__20062;
count__20054_20058 = G__20063;
i__20055_20059 = G__20064;
continue;
}
} else
{var temp__4126__auto___20065 = cljs.core.seq.call(null,seq__20052_20056);if(temp__4126__auto___20065)
{var seq__20052_20066__$1 = temp__4126__auto___20065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20052_20066__$1))
{var c__4408__auto___20067 = cljs.core.chunk_first.call(null,seq__20052_20066__$1);{
var G__20068 = cljs.core.chunk_rest.call(null,seq__20052_20066__$1);
var G__20069 = c__4408__auto___20067;
var G__20070 = cljs.core.count.call(null,c__4408__auto___20067);
var G__20071 = (0);
seq__20052_20056 = G__20068;
chunk__20053_20057 = G__20069;
count__20054_20058 = G__20070;
i__20055_20059 = G__20071;
continue;
}
} else
{var n_20072 = cljs.core.first.call(null,seq__20052_20066__$1);n_20072.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20073 = cljs.core.next.call(null,seq__20052_20066__$1);
var G__20074 = null;
var G__20075 = (0);
var G__20076 = (0);
seq__20052_20056 = G__20073;
chunk__20053_20057 = G__20074;
count__20054_20058 = G__20075;
i__20055_20059 = G__20076;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20077){
var content = cljs.core.first(arglist__20077);
arglist__20077 = cljs.core.next(arglist__20077);
var name = cljs.core.first(arglist__20077);
var value = cljs.core.rest(arglist__20077);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20082_20086 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20083_20087 = null;var count__20084_20088 = (0);var i__20085_20089 = (0);while(true){
if((i__20085_20089 < count__20084_20088))
{var n_20090 = cljs.core._nth.call(null,chunk__20083_20087,i__20085_20089);n_20090.removeAttribute(cljs.core.name.call(null,name));
{
var G__20091 = seq__20082_20086;
var G__20092 = chunk__20083_20087;
var G__20093 = count__20084_20088;
var G__20094 = (i__20085_20089 + (1));
seq__20082_20086 = G__20091;
chunk__20083_20087 = G__20092;
count__20084_20088 = G__20093;
i__20085_20089 = G__20094;
continue;
}
} else
{var temp__4126__auto___20095 = cljs.core.seq.call(null,seq__20082_20086);if(temp__4126__auto___20095)
{var seq__20082_20096__$1 = temp__4126__auto___20095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20082_20096__$1))
{var c__4408__auto___20097 = cljs.core.chunk_first.call(null,seq__20082_20096__$1);{
var G__20098 = cljs.core.chunk_rest.call(null,seq__20082_20096__$1);
var G__20099 = c__4408__auto___20097;
var G__20100 = cljs.core.count.call(null,c__4408__auto___20097);
var G__20101 = (0);
seq__20082_20086 = G__20098;
chunk__20083_20087 = G__20099;
count__20084_20088 = G__20100;
i__20085_20089 = G__20101;
continue;
}
} else
{var n_20102 = cljs.core.first.call(null,seq__20082_20096__$1);n_20102.removeAttribute(cljs.core.name.call(null,name));
{
var G__20103 = cljs.core.next.call(null,seq__20082_20096__$1);
var G__20104 = null;
var G__20105 = (0);
var G__20106 = (0);
seq__20082_20086 = G__20103;
chunk__20083_20087 = G__20104;
count__20084_20088 = G__20105;
i__20085_20089 = G__20106;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20108 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20108,(0),null);var v = cljs.core.nth.call(null,vec__20108,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20109_SHARP_){var attr = attrs__$1.item(p1__20109_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20116_20122 = cljs.core.seq.call(null,styles);var chunk__20117_20123 = null;var count__20118_20124 = (0);var i__20119_20125 = (0);while(true){
if((i__20119_20125 < count__20118_20124))
{var vec__20120_20126 = cljs.core._nth.call(null,chunk__20117_20123,i__20119_20125);var name_20127 = cljs.core.nth.call(null,vec__20120_20126,(0),null);var value_20128 = cljs.core.nth.call(null,vec__20120_20126,(1),null);domina.set_style_BANG_.call(null,content,name_20127,value_20128);
{
var G__20129 = seq__20116_20122;
var G__20130 = chunk__20117_20123;
var G__20131 = count__20118_20124;
var G__20132 = (i__20119_20125 + (1));
seq__20116_20122 = G__20129;
chunk__20117_20123 = G__20130;
count__20118_20124 = G__20131;
i__20119_20125 = G__20132;
continue;
}
} else
{var temp__4126__auto___20133 = cljs.core.seq.call(null,seq__20116_20122);if(temp__4126__auto___20133)
{var seq__20116_20134__$1 = temp__4126__auto___20133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20116_20134__$1))
{var c__4408__auto___20135 = cljs.core.chunk_first.call(null,seq__20116_20134__$1);{
var G__20136 = cljs.core.chunk_rest.call(null,seq__20116_20134__$1);
var G__20137 = c__4408__auto___20135;
var G__20138 = cljs.core.count.call(null,c__4408__auto___20135);
var G__20139 = (0);
seq__20116_20122 = G__20136;
chunk__20117_20123 = G__20137;
count__20118_20124 = G__20138;
i__20119_20125 = G__20139;
continue;
}
} else
{var vec__20121_20140 = cljs.core.first.call(null,seq__20116_20134__$1);var name_20141 = cljs.core.nth.call(null,vec__20121_20140,(0),null);var value_20142 = cljs.core.nth.call(null,vec__20121_20140,(1),null);domina.set_style_BANG_.call(null,content,name_20141,value_20142);
{
var G__20143 = cljs.core.next.call(null,seq__20116_20134__$1);
var G__20144 = null;
var G__20145 = (0);
var G__20146 = (0);
seq__20116_20122 = G__20143;
chunk__20117_20123 = G__20144;
count__20118_20124 = G__20145;
i__20119_20125 = G__20146;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20153_20159 = cljs.core.seq.call(null,attrs);var chunk__20154_20160 = null;var count__20155_20161 = (0);var i__20156_20162 = (0);while(true){
if((i__20156_20162 < count__20155_20161))
{var vec__20157_20163 = cljs.core._nth.call(null,chunk__20154_20160,i__20156_20162);var name_20164 = cljs.core.nth.call(null,vec__20157_20163,(0),null);var value_20165 = cljs.core.nth.call(null,vec__20157_20163,(1),null);domina.set_attr_BANG_.call(null,content,name_20164,value_20165);
{
var G__20166 = seq__20153_20159;
var G__20167 = chunk__20154_20160;
var G__20168 = count__20155_20161;
var G__20169 = (i__20156_20162 + (1));
seq__20153_20159 = G__20166;
chunk__20154_20160 = G__20167;
count__20155_20161 = G__20168;
i__20156_20162 = G__20169;
continue;
}
} else
{var temp__4126__auto___20170 = cljs.core.seq.call(null,seq__20153_20159);if(temp__4126__auto___20170)
{var seq__20153_20171__$1 = temp__4126__auto___20170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20153_20171__$1))
{var c__4408__auto___20172 = cljs.core.chunk_first.call(null,seq__20153_20171__$1);{
var G__20173 = cljs.core.chunk_rest.call(null,seq__20153_20171__$1);
var G__20174 = c__4408__auto___20172;
var G__20175 = cljs.core.count.call(null,c__4408__auto___20172);
var G__20176 = (0);
seq__20153_20159 = G__20173;
chunk__20154_20160 = G__20174;
count__20155_20161 = G__20175;
i__20156_20162 = G__20176;
continue;
}
} else
{var vec__20158_20177 = cljs.core.first.call(null,seq__20153_20171__$1);var name_20178 = cljs.core.nth.call(null,vec__20158_20177,(0),null);var value_20179 = cljs.core.nth.call(null,vec__20158_20177,(1),null);domina.set_attr_BANG_.call(null,content,name_20178,value_20179);
{
var G__20180 = cljs.core.next.call(null,seq__20153_20171__$1);
var G__20181 = null;
var G__20182 = (0);
var G__20183 = (0);
seq__20153_20159 = G__20180;
chunk__20154_20160 = G__20181;
count__20155_20161 = G__20182;
i__20156_20162 = G__20183;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20188_20192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20189_20193 = null;var count__20190_20194 = (0);var i__20191_20195 = (0);while(true){
if((i__20191_20195 < count__20190_20194))
{var node_20196 = cljs.core._nth.call(null,chunk__20189_20193,i__20191_20195);goog.dom.classes.add(node_20196,class$);
{
var G__20197 = seq__20188_20192;
var G__20198 = chunk__20189_20193;
var G__20199 = count__20190_20194;
var G__20200 = (i__20191_20195 + (1));
seq__20188_20192 = G__20197;
chunk__20189_20193 = G__20198;
count__20190_20194 = G__20199;
i__20191_20195 = G__20200;
continue;
}
} else
{var temp__4126__auto___20201 = cljs.core.seq.call(null,seq__20188_20192);if(temp__4126__auto___20201)
{var seq__20188_20202__$1 = temp__4126__auto___20201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20188_20202__$1))
{var c__4408__auto___20203 = cljs.core.chunk_first.call(null,seq__20188_20202__$1);{
var G__20204 = cljs.core.chunk_rest.call(null,seq__20188_20202__$1);
var G__20205 = c__4408__auto___20203;
var G__20206 = cljs.core.count.call(null,c__4408__auto___20203);
var G__20207 = (0);
seq__20188_20192 = G__20204;
chunk__20189_20193 = G__20205;
count__20190_20194 = G__20206;
i__20191_20195 = G__20207;
continue;
}
} else
{var node_20208 = cljs.core.first.call(null,seq__20188_20202__$1);goog.dom.classes.add(node_20208,class$);
{
var G__20209 = cljs.core.next.call(null,seq__20188_20202__$1);
var G__20210 = null;
var G__20211 = (0);
var G__20212 = (0);
seq__20188_20192 = G__20209;
chunk__20189_20193 = G__20210;
count__20190_20194 = G__20211;
i__20191_20195 = G__20212;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20217_20221 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20218_20222 = null;var count__20219_20223 = (0);var i__20220_20224 = (0);while(true){
if((i__20220_20224 < count__20219_20223))
{var node_20225 = cljs.core._nth.call(null,chunk__20218_20222,i__20220_20224);goog.dom.classes.remove(node_20225,class$);
{
var G__20226 = seq__20217_20221;
var G__20227 = chunk__20218_20222;
var G__20228 = count__20219_20223;
var G__20229 = (i__20220_20224 + (1));
seq__20217_20221 = G__20226;
chunk__20218_20222 = G__20227;
count__20219_20223 = G__20228;
i__20220_20224 = G__20229;
continue;
}
} else
{var temp__4126__auto___20230 = cljs.core.seq.call(null,seq__20217_20221);if(temp__4126__auto___20230)
{var seq__20217_20231__$1 = temp__4126__auto___20230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20217_20231__$1))
{var c__4408__auto___20232 = cljs.core.chunk_first.call(null,seq__20217_20231__$1);{
var G__20233 = cljs.core.chunk_rest.call(null,seq__20217_20231__$1);
var G__20234 = c__4408__auto___20232;
var G__20235 = cljs.core.count.call(null,c__4408__auto___20232);
var G__20236 = (0);
seq__20217_20221 = G__20233;
chunk__20218_20222 = G__20234;
count__20219_20223 = G__20235;
i__20220_20224 = G__20236;
continue;
}
} else
{var node_20237 = cljs.core.first.call(null,seq__20217_20231__$1);goog.dom.classes.remove(node_20237,class$);
{
var G__20238 = cljs.core.next.call(null,seq__20217_20231__$1);
var G__20239 = null;
var G__20240 = (0);
var G__20241 = (0);
seq__20217_20221 = G__20238;
chunk__20218_20222 = G__20239;
count__20219_20223 = G__20240;
i__20220_20224 = G__20241;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20246_20250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20247_20251 = null;var count__20248_20252 = (0);var i__20249_20253 = (0);while(true){
if((i__20249_20253 < count__20248_20252))
{var node_20254 = cljs.core._nth.call(null,chunk__20247_20251,i__20249_20253);goog.dom.classes.toggle(node_20254,class$);
{
var G__20255 = seq__20246_20250;
var G__20256 = chunk__20247_20251;
var G__20257 = count__20248_20252;
var G__20258 = (i__20249_20253 + (1));
seq__20246_20250 = G__20255;
chunk__20247_20251 = G__20256;
count__20248_20252 = G__20257;
i__20249_20253 = G__20258;
continue;
}
} else
{var temp__4126__auto___20259 = cljs.core.seq.call(null,seq__20246_20250);if(temp__4126__auto___20259)
{var seq__20246_20260__$1 = temp__4126__auto___20259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20246_20260__$1))
{var c__4408__auto___20261 = cljs.core.chunk_first.call(null,seq__20246_20260__$1);{
var G__20262 = cljs.core.chunk_rest.call(null,seq__20246_20260__$1);
var G__20263 = c__4408__auto___20261;
var G__20264 = cljs.core.count.call(null,c__4408__auto___20261);
var G__20265 = (0);
seq__20246_20250 = G__20262;
chunk__20247_20251 = G__20263;
count__20248_20252 = G__20264;
i__20249_20253 = G__20265;
continue;
}
} else
{var node_20266 = cljs.core.first.call(null,seq__20246_20260__$1);goog.dom.classes.toggle(node_20266,class$);
{
var G__20267 = cljs.core.next.call(null,seq__20246_20260__$1);
var G__20268 = null;
var G__20269 = (0);
var G__20270 = (0);
seq__20246_20250 = G__20267;
chunk__20247_20251 = G__20268;
count__20248_20252 = G__20269;
i__20249_20253 = G__20270;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20279__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20275_20280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20276_20281 = null;var count__20277_20282 = (0);var i__20278_20283 = (0);while(true){
if((i__20278_20283 < count__20277_20282))
{var node_20284 = cljs.core._nth.call(null,chunk__20276_20281,i__20278_20283);goog.dom.classes.set(node_20284,classes_20279__$1);
{
var G__20285 = seq__20275_20280;
var G__20286 = chunk__20276_20281;
var G__20287 = count__20277_20282;
var G__20288 = (i__20278_20283 + (1));
seq__20275_20280 = G__20285;
chunk__20276_20281 = G__20286;
count__20277_20282 = G__20287;
i__20278_20283 = G__20288;
continue;
}
} else
{var temp__4126__auto___20289 = cljs.core.seq.call(null,seq__20275_20280);if(temp__4126__auto___20289)
{var seq__20275_20290__$1 = temp__4126__auto___20289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20275_20290__$1))
{var c__4408__auto___20291 = cljs.core.chunk_first.call(null,seq__20275_20290__$1);{
var G__20292 = cljs.core.chunk_rest.call(null,seq__20275_20290__$1);
var G__20293 = c__4408__auto___20291;
var G__20294 = cljs.core.count.call(null,c__4408__auto___20291);
var G__20295 = (0);
seq__20275_20280 = G__20292;
chunk__20276_20281 = G__20293;
count__20277_20282 = G__20294;
i__20278_20283 = G__20295;
continue;
}
} else
{var node_20296 = cljs.core.first.call(null,seq__20275_20290__$1);goog.dom.classes.set(node_20296,classes_20279__$1);
{
var G__20297 = cljs.core.next.call(null,seq__20275_20290__$1);
var G__20298 = null;
var G__20299 = (0);
var G__20300 = (0);
seq__20275_20280 = G__20297;
chunk__20276_20281 = G__20298;
count__20277_20282 = G__20299;
i__20278_20283 = G__20300;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20305_20309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20306_20310 = null;var count__20307_20311 = (0);var i__20308_20312 = (0);while(true){
if((i__20308_20312 < count__20307_20311))
{var node_20313 = cljs.core._nth.call(null,chunk__20306_20310,i__20308_20312);goog.dom.setTextContent(node_20313,value);
{
var G__20314 = seq__20305_20309;
var G__20315 = chunk__20306_20310;
var G__20316 = count__20307_20311;
var G__20317 = (i__20308_20312 + (1));
seq__20305_20309 = G__20314;
chunk__20306_20310 = G__20315;
count__20307_20311 = G__20316;
i__20308_20312 = G__20317;
continue;
}
} else
{var temp__4126__auto___20318 = cljs.core.seq.call(null,seq__20305_20309);if(temp__4126__auto___20318)
{var seq__20305_20319__$1 = temp__4126__auto___20318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20305_20319__$1))
{var c__4408__auto___20320 = cljs.core.chunk_first.call(null,seq__20305_20319__$1);{
var G__20321 = cljs.core.chunk_rest.call(null,seq__20305_20319__$1);
var G__20322 = c__4408__auto___20320;
var G__20323 = cljs.core.count.call(null,c__4408__auto___20320);
var G__20324 = (0);
seq__20305_20309 = G__20321;
chunk__20306_20310 = G__20322;
count__20307_20311 = G__20323;
i__20308_20312 = G__20324;
continue;
}
} else
{var node_20325 = cljs.core.first.call(null,seq__20305_20319__$1);goog.dom.setTextContent(node_20325,value);
{
var G__20326 = cljs.core.next.call(null,seq__20305_20319__$1);
var G__20327 = null;
var G__20328 = (0);
var G__20329 = (0);
seq__20305_20309 = G__20326;
chunk__20306_20310 = G__20327;
count__20307_20311 = G__20328;
i__20308_20312 = G__20329;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20334_20338 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20335_20339 = null;var count__20336_20340 = (0);var i__20337_20341 = (0);while(true){
if((i__20337_20341 < count__20336_20340))
{var node_20342 = cljs.core._nth.call(null,chunk__20335_20339,i__20337_20341);goog.dom.forms.setValue(node_20342,value);
{
var G__20343 = seq__20334_20338;
var G__20344 = chunk__20335_20339;
var G__20345 = count__20336_20340;
var G__20346 = (i__20337_20341 + (1));
seq__20334_20338 = G__20343;
chunk__20335_20339 = G__20344;
count__20336_20340 = G__20345;
i__20337_20341 = G__20346;
continue;
}
} else
{var temp__4126__auto___20347 = cljs.core.seq.call(null,seq__20334_20338);if(temp__4126__auto___20347)
{var seq__20334_20348__$1 = temp__4126__auto___20347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20334_20348__$1))
{var c__4408__auto___20349 = cljs.core.chunk_first.call(null,seq__20334_20348__$1);{
var G__20350 = cljs.core.chunk_rest.call(null,seq__20334_20348__$1);
var G__20351 = c__4408__auto___20349;
var G__20352 = cljs.core.count.call(null,c__4408__auto___20349);
var G__20353 = (0);
seq__20334_20338 = G__20350;
chunk__20335_20339 = G__20351;
count__20336_20340 = G__20352;
i__20337_20341 = G__20353;
continue;
}
} else
{var node_20354 = cljs.core.first.call(null,seq__20334_20348__$1);goog.dom.forms.setValue(node_20354,value);
{
var G__20355 = cljs.core.next.call(null,seq__20334_20348__$1);
var G__20356 = null;
var G__20357 = (0);
var G__20358 = (0);
seq__20334_20338 = G__20355;
chunk__20335_20339 = G__20356;
count__20336_20340 = G__20357;
i__20337_20341 = G__20358;
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
{var value_20369 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20365_20370 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20366_20371 = null;var count__20367_20372 = (0);var i__20368_20373 = (0);while(true){
if((i__20368_20373 < count__20367_20372))
{var node_20374 = cljs.core._nth.call(null,chunk__20366_20371,i__20368_20373);node_20374.innerHTML = value_20369;
{
var G__20375 = seq__20365_20370;
var G__20376 = chunk__20366_20371;
var G__20377 = count__20367_20372;
var G__20378 = (i__20368_20373 + (1));
seq__20365_20370 = G__20375;
chunk__20366_20371 = G__20376;
count__20367_20372 = G__20377;
i__20368_20373 = G__20378;
continue;
}
} else
{var temp__4126__auto___20379 = cljs.core.seq.call(null,seq__20365_20370);if(temp__4126__auto___20379)
{var seq__20365_20380__$1 = temp__4126__auto___20379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20365_20380__$1))
{var c__4408__auto___20381 = cljs.core.chunk_first.call(null,seq__20365_20380__$1);{
var G__20382 = cljs.core.chunk_rest.call(null,seq__20365_20380__$1);
var G__20383 = c__4408__auto___20381;
var G__20384 = cljs.core.count.call(null,c__4408__auto___20381);
var G__20385 = (0);
seq__20365_20370 = G__20382;
chunk__20366_20371 = G__20383;
count__20367_20372 = G__20384;
i__20368_20373 = G__20385;
continue;
}
} else
{var node_20386 = cljs.core.first.call(null,seq__20365_20380__$1);node_20386.innerHTML = value_20369;
{
var G__20387 = cljs.core.next.call(null,seq__20365_20380__$1);
var G__20388 = null;
var G__20389 = (0);
var G__20390 = (0);
seq__20365_20370 = G__20387;
chunk__20366_20371 = G__20388;
count__20367_20372 = G__20389;
i__20368_20373 = G__20390;
continue;
}
}
} else
{}
}
break;
}
}catch (e20364){if((e20364 instanceof Error))
{var e_20391 = e20364;domina.replace_children_BANG_.call(null,content,value_20369);
} else
{throw e20364;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20398_20402 = cljs.core.seq.call(null,children);var chunk__20399_20403 = null;var count__20400_20404 = (0);var i__20401_20405 = (0);while(true){
if((i__20401_20405 < count__20400_20404))
{var child_20406 = cljs.core._nth.call(null,chunk__20399_20403,i__20401_20405);frag.appendChild(child_20406);
{
var G__20407 = seq__20398_20402;
var G__20408 = chunk__20399_20403;
var G__20409 = count__20400_20404;
var G__20410 = (i__20401_20405 + (1));
seq__20398_20402 = G__20407;
chunk__20399_20403 = G__20408;
count__20400_20404 = G__20409;
i__20401_20405 = G__20410;
continue;
}
} else
{var temp__4126__auto___20411 = cljs.core.seq.call(null,seq__20398_20402);if(temp__4126__auto___20411)
{var seq__20398_20412__$1 = temp__4126__auto___20411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20398_20412__$1))
{var c__4408__auto___20413 = cljs.core.chunk_first.call(null,seq__20398_20412__$1);{
var G__20414 = cljs.core.chunk_rest.call(null,seq__20398_20412__$1);
var G__20415 = c__4408__auto___20413;
var G__20416 = cljs.core.count.call(null,c__4408__auto___20413);
var G__20417 = (0);
seq__20398_20402 = G__20414;
chunk__20399_20403 = G__20415;
count__20400_20404 = G__20416;
i__20401_20405 = G__20417;
continue;
}
} else
{var child_20418 = cljs.core.first.call(null,seq__20398_20412__$1);frag.appendChild(child_20418);
{
var G__20419 = cljs.core.next.call(null,seq__20398_20412__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20398_20402 = G__20419;
chunk__20399_20403 = G__20420;
count__20400_20404 = G__20421;
i__20401_20405 = G__20422;
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
return (function (p1__20392_SHARP_,p2__20393_SHARP_){return f.call(null,p1__20392_SHARP_,p2__20393_SHARP_);
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
{if((function (){var G__20424 = list_thing;if(G__20424)
{var bit__4302__auto__ = (G__20424.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20424.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20424);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20424);
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
{if((function (){var G__20425 = content;if(G__20425)
{var bit__4302__auto__ = (G__20425.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20425.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20425.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20425);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20425);
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
{if((function (){var G__20426 = content;if(G__20426)
{var bit__4302__auto__ = (G__20426.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20426.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20426.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20426);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20426);
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
