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
var opt_wrapper_20930 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20931 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20932 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20932,opt_wrapper_20930,table_section_wrapper_20931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20930,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20931,cell_wrapper_20932,table_section_wrapper_20931,table_section_wrapper_20931]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20937 = cljs.core.seq.call(null,tbody);var chunk__20938 = null;var count__20939 = (0);var i__20940 = (0);while(true){
if((i__20940 < count__20939))
{var child = cljs.core._nth.call(null,chunk__20938,i__20940);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20941 = seq__20937;
var G__20942 = chunk__20938;
var G__20943 = count__20939;
var G__20944 = (i__20940 + (1));
seq__20937 = G__20941;
chunk__20938 = G__20942;
count__20939 = G__20943;
i__20940 = G__20944;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20937);if(temp__4126__auto__)
{var seq__20937__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20937__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20937__$1);{
var G__20945 = cljs.core.chunk_rest.call(null,seq__20937__$1);
var G__20946 = c__4408__auto__;
var G__20947 = cljs.core.count.call(null,c__4408__auto__);
var G__20948 = (0);
seq__20937 = G__20945;
chunk__20938 = G__20946;
count__20939 = G__20947;
i__20940 = G__20948;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20937__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20949 = cljs.core.next.call(null,seq__20937__$1);
var G__20950 = null;
var G__20951 = (0);
var G__20952 = (0);
seq__20937 = G__20949;
chunk__20938 = G__20950;
count__20939 = G__20951;
i__20940 = G__20952;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20954 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20954,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20954,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20954,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20955 = wrapper.lastChild;
var G__20956 = (level - (1));
wrapper = G__20955;
level = G__20956;
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
domina.DomContent = (function (){var obj20958 = {};return obj20958;
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
log_debug.cljs$lang$applyTo = (function (arglist__20959){
var mesg = cljs.core.seq(arglist__20959);
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
log.cljs$lang$applyTo = (function (arglist__20960){
var mesg = cljs.core.seq(arglist__20960);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20961){
var contents = cljs.core.seq(arglist__20961);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20962_SHARP_){return p1__20962_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20963_SHARP_,p2__20964_SHARP_){return goog.dom.insertChildAt(p1__20963_SHARP_,p2__20964_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20966_SHARP_,p2__20965_SHARP_){return goog.dom.insertSiblingBefore(p2__20965_SHARP_,p1__20966_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20968_SHARP_,p2__20967_SHARP_){return goog.dom.insertSiblingAfter(p2__20967_SHARP_,p1__20968_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20970_SHARP_,p2__20969_SHARP_){return goog.dom.replaceNode(p2__20969_SHARP_,p1__20970_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20975_20979 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20976_20980 = null;var count__20977_20981 = (0);var i__20978_20982 = (0);while(true){
if((i__20978_20982 < count__20977_20981))
{var n_20983 = cljs.core._nth.call(null,chunk__20976_20980,i__20978_20982);goog.style.setStyle(n_20983,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20984 = seq__20975_20979;
var G__20985 = chunk__20976_20980;
var G__20986 = count__20977_20981;
var G__20987 = (i__20978_20982 + (1));
seq__20975_20979 = G__20984;
chunk__20976_20980 = G__20985;
count__20977_20981 = G__20986;
i__20978_20982 = G__20987;
continue;
}
} else
{var temp__4126__auto___20988 = cljs.core.seq.call(null,seq__20975_20979);if(temp__4126__auto___20988)
{var seq__20975_20989__$1 = temp__4126__auto___20988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20975_20989__$1))
{var c__4408__auto___20990 = cljs.core.chunk_first.call(null,seq__20975_20989__$1);{
var G__20991 = cljs.core.chunk_rest.call(null,seq__20975_20989__$1);
var G__20992 = c__4408__auto___20990;
var G__20993 = cljs.core.count.call(null,c__4408__auto___20990);
var G__20994 = (0);
seq__20975_20979 = G__20991;
chunk__20976_20980 = G__20992;
count__20977_20981 = G__20993;
i__20978_20982 = G__20994;
continue;
}
} else
{var n_20995 = cljs.core.first.call(null,seq__20975_20989__$1);goog.style.setStyle(n_20995,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20996 = cljs.core.next.call(null,seq__20975_20989__$1);
var G__20997 = null;
var G__20998 = (0);
var G__20999 = (0);
seq__20975_20979 = G__20996;
chunk__20976_20980 = G__20997;
count__20977_20981 = G__20998;
i__20978_20982 = G__20999;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21000){
var content = cljs.core.first(arglist__21000);
arglist__21000 = cljs.core.next(arglist__21000);
var name = cljs.core.first(arglist__21000);
var value = cljs.core.rest(arglist__21000);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21005_21009 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21006_21010 = null;var count__21007_21011 = (0);var i__21008_21012 = (0);while(true){
if((i__21008_21012 < count__21007_21011))
{var n_21013 = cljs.core._nth.call(null,chunk__21006_21010,i__21008_21012);n_21013.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21014 = seq__21005_21009;
var G__21015 = chunk__21006_21010;
var G__21016 = count__21007_21011;
var G__21017 = (i__21008_21012 + (1));
seq__21005_21009 = G__21014;
chunk__21006_21010 = G__21015;
count__21007_21011 = G__21016;
i__21008_21012 = G__21017;
continue;
}
} else
{var temp__4126__auto___21018 = cljs.core.seq.call(null,seq__21005_21009);if(temp__4126__auto___21018)
{var seq__21005_21019__$1 = temp__4126__auto___21018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21005_21019__$1))
{var c__4408__auto___21020 = cljs.core.chunk_first.call(null,seq__21005_21019__$1);{
var G__21021 = cljs.core.chunk_rest.call(null,seq__21005_21019__$1);
var G__21022 = c__4408__auto___21020;
var G__21023 = cljs.core.count.call(null,c__4408__auto___21020);
var G__21024 = (0);
seq__21005_21009 = G__21021;
chunk__21006_21010 = G__21022;
count__21007_21011 = G__21023;
i__21008_21012 = G__21024;
continue;
}
} else
{var n_21025 = cljs.core.first.call(null,seq__21005_21019__$1);n_21025.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21026 = cljs.core.next.call(null,seq__21005_21019__$1);
var G__21027 = null;
var G__21028 = (0);
var G__21029 = (0);
seq__21005_21009 = G__21026;
chunk__21006_21010 = G__21027;
count__21007_21011 = G__21028;
i__21008_21012 = G__21029;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21030){
var content = cljs.core.first(arglist__21030);
arglist__21030 = cljs.core.next(arglist__21030);
var name = cljs.core.first(arglist__21030);
var value = cljs.core.rest(arglist__21030);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21035_21039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21036_21040 = null;var count__21037_21041 = (0);var i__21038_21042 = (0);while(true){
if((i__21038_21042 < count__21037_21041))
{var n_21043 = cljs.core._nth.call(null,chunk__21036_21040,i__21038_21042);n_21043.removeAttribute(cljs.core.name.call(null,name));
{
var G__21044 = seq__21035_21039;
var G__21045 = chunk__21036_21040;
var G__21046 = count__21037_21041;
var G__21047 = (i__21038_21042 + (1));
seq__21035_21039 = G__21044;
chunk__21036_21040 = G__21045;
count__21037_21041 = G__21046;
i__21038_21042 = G__21047;
continue;
}
} else
{var temp__4126__auto___21048 = cljs.core.seq.call(null,seq__21035_21039);if(temp__4126__auto___21048)
{var seq__21035_21049__$1 = temp__4126__auto___21048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21035_21049__$1))
{var c__4408__auto___21050 = cljs.core.chunk_first.call(null,seq__21035_21049__$1);{
var G__21051 = cljs.core.chunk_rest.call(null,seq__21035_21049__$1);
var G__21052 = c__4408__auto___21050;
var G__21053 = cljs.core.count.call(null,c__4408__auto___21050);
var G__21054 = (0);
seq__21035_21039 = G__21051;
chunk__21036_21040 = G__21052;
count__21037_21041 = G__21053;
i__21038_21042 = G__21054;
continue;
}
} else
{var n_21055 = cljs.core.first.call(null,seq__21035_21049__$1);n_21055.removeAttribute(cljs.core.name.call(null,name));
{
var G__21056 = cljs.core.next.call(null,seq__21035_21049__$1);
var G__21057 = null;
var G__21058 = (0);
var G__21059 = (0);
seq__21035_21039 = G__21056;
chunk__21036_21040 = G__21057;
count__21037_21041 = G__21058;
i__21038_21042 = G__21059;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21061 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21061,(0),null);var v = cljs.core.nth.call(null,vec__21061,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21062_SHARP_){var attr = attrs__$1.item(p1__21062_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21069_21075 = cljs.core.seq.call(null,styles);var chunk__21070_21076 = null;var count__21071_21077 = (0);var i__21072_21078 = (0);while(true){
if((i__21072_21078 < count__21071_21077))
{var vec__21073_21079 = cljs.core._nth.call(null,chunk__21070_21076,i__21072_21078);var name_21080 = cljs.core.nth.call(null,vec__21073_21079,(0),null);var value_21081 = cljs.core.nth.call(null,vec__21073_21079,(1),null);domina.set_style_BANG_.call(null,content,name_21080,value_21081);
{
var G__21082 = seq__21069_21075;
var G__21083 = chunk__21070_21076;
var G__21084 = count__21071_21077;
var G__21085 = (i__21072_21078 + (1));
seq__21069_21075 = G__21082;
chunk__21070_21076 = G__21083;
count__21071_21077 = G__21084;
i__21072_21078 = G__21085;
continue;
}
} else
{var temp__4126__auto___21086 = cljs.core.seq.call(null,seq__21069_21075);if(temp__4126__auto___21086)
{var seq__21069_21087__$1 = temp__4126__auto___21086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21069_21087__$1))
{var c__4408__auto___21088 = cljs.core.chunk_first.call(null,seq__21069_21087__$1);{
var G__21089 = cljs.core.chunk_rest.call(null,seq__21069_21087__$1);
var G__21090 = c__4408__auto___21088;
var G__21091 = cljs.core.count.call(null,c__4408__auto___21088);
var G__21092 = (0);
seq__21069_21075 = G__21089;
chunk__21070_21076 = G__21090;
count__21071_21077 = G__21091;
i__21072_21078 = G__21092;
continue;
}
} else
{var vec__21074_21093 = cljs.core.first.call(null,seq__21069_21087__$1);var name_21094 = cljs.core.nth.call(null,vec__21074_21093,(0),null);var value_21095 = cljs.core.nth.call(null,vec__21074_21093,(1),null);domina.set_style_BANG_.call(null,content,name_21094,value_21095);
{
var G__21096 = cljs.core.next.call(null,seq__21069_21087__$1);
var G__21097 = null;
var G__21098 = (0);
var G__21099 = (0);
seq__21069_21075 = G__21096;
chunk__21070_21076 = G__21097;
count__21071_21077 = G__21098;
i__21072_21078 = G__21099;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21106_21112 = cljs.core.seq.call(null,attrs);var chunk__21107_21113 = null;var count__21108_21114 = (0);var i__21109_21115 = (0);while(true){
if((i__21109_21115 < count__21108_21114))
{var vec__21110_21116 = cljs.core._nth.call(null,chunk__21107_21113,i__21109_21115);var name_21117 = cljs.core.nth.call(null,vec__21110_21116,(0),null);var value_21118 = cljs.core.nth.call(null,vec__21110_21116,(1),null);domina.set_attr_BANG_.call(null,content,name_21117,value_21118);
{
var G__21119 = seq__21106_21112;
var G__21120 = chunk__21107_21113;
var G__21121 = count__21108_21114;
var G__21122 = (i__21109_21115 + (1));
seq__21106_21112 = G__21119;
chunk__21107_21113 = G__21120;
count__21108_21114 = G__21121;
i__21109_21115 = G__21122;
continue;
}
} else
{var temp__4126__auto___21123 = cljs.core.seq.call(null,seq__21106_21112);if(temp__4126__auto___21123)
{var seq__21106_21124__$1 = temp__4126__auto___21123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21106_21124__$1))
{var c__4408__auto___21125 = cljs.core.chunk_first.call(null,seq__21106_21124__$1);{
var G__21126 = cljs.core.chunk_rest.call(null,seq__21106_21124__$1);
var G__21127 = c__4408__auto___21125;
var G__21128 = cljs.core.count.call(null,c__4408__auto___21125);
var G__21129 = (0);
seq__21106_21112 = G__21126;
chunk__21107_21113 = G__21127;
count__21108_21114 = G__21128;
i__21109_21115 = G__21129;
continue;
}
} else
{var vec__21111_21130 = cljs.core.first.call(null,seq__21106_21124__$1);var name_21131 = cljs.core.nth.call(null,vec__21111_21130,(0),null);var value_21132 = cljs.core.nth.call(null,vec__21111_21130,(1),null);domina.set_attr_BANG_.call(null,content,name_21131,value_21132);
{
var G__21133 = cljs.core.next.call(null,seq__21106_21124__$1);
var G__21134 = null;
var G__21135 = (0);
var G__21136 = (0);
seq__21106_21112 = G__21133;
chunk__21107_21113 = G__21134;
count__21108_21114 = G__21135;
i__21109_21115 = G__21136;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21141_21145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21142_21146 = null;var count__21143_21147 = (0);var i__21144_21148 = (0);while(true){
if((i__21144_21148 < count__21143_21147))
{var node_21149 = cljs.core._nth.call(null,chunk__21142_21146,i__21144_21148);goog.dom.classes.add(node_21149,class$);
{
var G__21150 = seq__21141_21145;
var G__21151 = chunk__21142_21146;
var G__21152 = count__21143_21147;
var G__21153 = (i__21144_21148 + (1));
seq__21141_21145 = G__21150;
chunk__21142_21146 = G__21151;
count__21143_21147 = G__21152;
i__21144_21148 = G__21153;
continue;
}
} else
{var temp__4126__auto___21154 = cljs.core.seq.call(null,seq__21141_21145);if(temp__4126__auto___21154)
{var seq__21141_21155__$1 = temp__4126__auto___21154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21141_21155__$1))
{var c__4408__auto___21156 = cljs.core.chunk_first.call(null,seq__21141_21155__$1);{
var G__21157 = cljs.core.chunk_rest.call(null,seq__21141_21155__$1);
var G__21158 = c__4408__auto___21156;
var G__21159 = cljs.core.count.call(null,c__4408__auto___21156);
var G__21160 = (0);
seq__21141_21145 = G__21157;
chunk__21142_21146 = G__21158;
count__21143_21147 = G__21159;
i__21144_21148 = G__21160;
continue;
}
} else
{var node_21161 = cljs.core.first.call(null,seq__21141_21155__$1);goog.dom.classes.add(node_21161,class$);
{
var G__21162 = cljs.core.next.call(null,seq__21141_21155__$1);
var G__21163 = null;
var G__21164 = (0);
var G__21165 = (0);
seq__21141_21145 = G__21162;
chunk__21142_21146 = G__21163;
count__21143_21147 = G__21164;
i__21144_21148 = G__21165;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21170_21174 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21171_21175 = null;var count__21172_21176 = (0);var i__21173_21177 = (0);while(true){
if((i__21173_21177 < count__21172_21176))
{var node_21178 = cljs.core._nth.call(null,chunk__21171_21175,i__21173_21177);goog.dom.classes.remove(node_21178,class$);
{
var G__21179 = seq__21170_21174;
var G__21180 = chunk__21171_21175;
var G__21181 = count__21172_21176;
var G__21182 = (i__21173_21177 + (1));
seq__21170_21174 = G__21179;
chunk__21171_21175 = G__21180;
count__21172_21176 = G__21181;
i__21173_21177 = G__21182;
continue;
}
} else
{var temp__4126__auto___21183 = cljs.core.seq.call(null,seq__21170_21174);if(temp__4126__auto___21183)
{var seq__21170_21184__$1 = temp__4126__auto___21183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21170_21184__$1))
{var c__4408__auto___21185 = cljs.core.chunk_first.call(null,seq__21170_21184__$1);{
var G__21186 = cljs.core.chunk_rest.call(null,seq__21170_21184__$1);
var G__21187 = c__4408__auto___21185;
var G__21188 = cljs.core.count.call(null,c__4408__auto___21185);
var G__21189 = (0);
seq__21170_21174 = G__21186;
chunk__21171_21175 = G__21187;
count__21172_21176 = G__21188;
i__21173_21177 = G__21189;
continue;
}
} else
{var node_21190 = cljs.core.first.call(null,seq__21170_21184__$1);goog.dom.classes.remove(node_21190,class$);
{
var G__21191 = cljs.core.next.call(null,seq__21170_21184__$1);
var G__21192 = null;
var G__21193 = (0);
var G__21194 = (0);
seq__21170_21174 = G__21191;
chunk__21171_21175 = G__21192;
count__21172_21176 = G__21193;
i__21173_21177 = G__21194;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21199_21203 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21200_21204 = null;var count__21201_21205 = (0);var i__21202_21206 = (0);while(true){
if((i__21202_21206 < count__21201_21205))
{var node_21207 = cljs.core._nth.call(null,chunk__21200_21204,i__21202_21206);goog.dom.classes.toggle(node_21207,class$);
{
var G__21208 = seq__21199_21203;
var G__21209 = chunk__21200_21204;
var G__21210 = count__21201_21205;
var G__21211 = (i__21202_21206 + (1));
seq__21199_21203 = G__21208;
chunk__21200_21204 = G__21209;
count__21201_21205 = G__21210;
i__21202_21206 = G__21211;
continue;
}
} else
{var temp__4126__auto___21212 = cljs.core.seq.call(null,seq__21199_21203);if(temp__4126__auto___21212)
{var seq__21199_21213__$1 = temp__4126__auto___21212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21199_21213__$1))
{var c__4408__auto___21214 = cljs.core.chunk_first.call(null,seq__21199_21213__$1);{
var G__21215 = cljs.core.chunk_rest.call(null,seq__21199_21213__$1);
var G__21216 = c__4408__auto___21214;
var G__21217 = cljs.core.count.call(null,c__4408__auto___21214);
var G__21218 = (0);
seq__21199_21203 = G__21215;
chunk__21200_21204 = G__21216;
count__21201_21205 = G__21217;
i__21202_21206 = G__21218;
continue;
}
} else
{var node_21219 = cljs.core.first.call(null,seq__21199_21213__$1);goog.dom.classes.toggle(node_21219,class$);
{
var G__21220 = cljs.core.next.call(null,seq__21199_21213__$1);
var G__21221 = null;
var G__21222 = (0);
var G__21223 = (0);
seq__21199_21203 = G__21220;
chunk__21200_21204 = G__21221;
count__21201_21205 = G__21222;
i__21202_21206 = G__21223;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21232__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21228_21233 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21229_21234 = null;var count__21230_21235 = (0);var i__21231_21236 = (0);while(true){
if((i__21231_21236 < count__21230_21235))
{var node_21237 = cljs.core._nth.call(null,chunk__21229_21234,i__21231_21236);goog.dom.classes.set(node_21237,classes_21232__$1);
{
var G__21238 = seq__21228_21233;
var G__21239 = chunk__21229_21234;
var G__21240 = count__21230_21235;
var G__21241 = (i__21231_21236 + (1));
seq__21228_21233 = G__21238;
chunk__21229_21234 = G__21239;
count__21230_21235 = G__21240;
i__21231_21236 = G__21241;
continue;
}
} else
{var temp__4126__auto___21242 = cljs.core.seq.call(null,seq__21228_21233);if(temp__4126__auto___21242)
{var seq__21228_21243__$1 = temp__4126__auto___21242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21228_21243__$1))
{var c__4408__auto___21244 = cljs.core.chunk_first.call(null,seq__21228_21243__$1);{
var G__21245 = cljs.core.chunk_rest.call(null,seq__21228_21243__$1);
var G__21246 = c__4408__auto___21244;
var G__21247 = cljs.core.count.call(null,c__4408__auto___21244);
var G__21248 = (0);
seq__21228_21233 = G__21245;
chunk__21229_21234 = G__21246;
count__21230_21235 = G__21247;
i__21231_21236 = G__21248;
continue;
}
} else
{var node_21249 = cljs.core.first.call(null,seq__21228_21243__$1);goog.dom.classes.set(node_21249,classes_21232__$1);
{
var G__21250 = cljs.core.next.call(null,seq__21228_21243__$1);
var G__21251 = null;
var G__21252 = (0);
var G__21253 = (0);
seq__21228_21233 = G__21250;
chunk__21229_21234 = G__21251;
count__21230_21235 = G__21252;
i__21231_21236 = G__21253;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21258_21262 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21259_21263 = null;var count__21260_21264 = (0);var i__21261_21265 = (0);while(true){
if((i__21261_21265 < count__21260_21264))
{var node_21266 = cljs.core._nth.call(null,chunk__21259_21263,i__21261_21265);goog.dom.setTextContent(node_21266,value);
{
var G__21267 = seq__21258_21262;
var G__21268 = chunk__21259_21263;
var G__21269 = count__21260_21264;
var G__21270 = (i__21261_21265 + (1));
seq__21258_21262 = G__21267;
chunk__21259_21263 = G__21268;
count__21260_21264 = G__21269;
i__21261_21265 = G__21270;
continue;
}
} else
{var temp__4126__auto___21271 = cljs.core.seq.call(null,seq__21258_21262);if(temp__4126__auto___21271)
{var seq__21258_21272__$1 = temp__4126__auto___21271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21258_21272__$1))
{var c__4408__auto___21273 = cljs.core.chunk_first.call(null,seq__21258_21272__$1);{
var G__21274 = cljs.core.chunk_rest.call(null,seq__21258_21272__$1);
var G__21275 = c__4408__auto___21273;
var G__21276 = cljs.core.count.call(null,c__4408__auto___21273);
var G__21277 = (0);
seq__21258_21262 = G__21274;
chunk__21259_21263 = G__21275;
count__21260_21264 = G__21276;
i__21261_21265 = G__21277;
continue;
}
} else
{var node_21278 = cljs.core.first.call(null,seq__21258_21272__$1);goog.dom.setTextContent(node_21278,value);
{
var G__21279 = cljs.core.next.call(null,seq__21258_21272__$1);
var G__21280 = null;
var G__21281 = (0);
var G__21282 = (0);
seq__21258_21262 = G__21279;
chunk__21259_21263 = G__21280;
count__21260_21264 = G__21281;
i__21261_21265 = G__21282;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21287_21291 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21288_21292 = null;var count__21289_21293 = (0);var i__21290_21294 = (0);while(true){
if((i__21290_21294 < count__21289_21293))
{var node_21295 = cljs.core._nth.call(null,chunk__21288_21292,i__21290_21294);goog.dom.forms.setValue(node_21295,value);
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
{var node_21307 = cljs.core.first.call(null,seq__21287_21301__$1);goog.dom.forms.setValue(node_21307,value);
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
{var value_21322 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21318_21323 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21319_21324 = null;var count__21320_21325 = (0);var i__21321_21326 = (0);while(true){
if((i__21321_21326 < count__21320_21325))
{var node_21327 = cljs.core._nth.call(null,chunk__21319_21324,i__21321_21326);node_21327.innerHTML = value_21322;
{
var G__21328 = seq__21318_21323;
var G__21329 = chunk__21319_21324;
var G__21330 = count__21320_21325;
var G__21331 = (i__21321_21326 + (1));
seq__21318_21323 = G__21328;
chunk__21319_21324 = G__21329;
count__21320_21325 = G__21330;
i__21321_21326 = G__21331;
continue;
}
} else
{var temp__4126__auto___21332 = cljs.core.seq.call(null,seq__21318_21323);if(temp__4126__auto___21332)
{var seq__21318_21333__$1 = temp__4126__auto___21332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21318_21333__$1))
{var c__4408__auto___21334 = cljs.core.chunk_first.call(null,seq__21318_21333__$1);{
var G__21335 = cljs.core.chunk_rest.call(null,seq__21318_21333__$1);
var G__21336 = c__4408__auto___21334;
var G__21337 = cljs.core.count.call(null,c__4408__auto___21334);
var G__21338 = (0);
seq__21318_21323 = G__21335;
chunk__21319_21324 = G__21336;
count__21320_21325 = G__21337;
i__21321_21326 = G__21338;
continue;
}
} else
{var node_21339 = cljs.core.first.call(null,seq__21318_21333__$1);node_21339.innerHTML = value_21322;
{
var G__21340 = cljs.core.next.call(null,seq__21318_21333__$1);
var G__21341 = null;
var G__21342 = (0);
var G__21343 = (0);
seq__21318_21323 = G__21340;
chunk__21319_21324 = G__21341;
count__21320_21325 = G__21342;
i__21321_21326 = G__21343;
continue;
}
}
} else
{}
}
break;
}
}catch (e21317){if((e21317 instanceof Error))
{var e_21344 = e21317;domina.replace_children_BANG_.call(null,content,value_21322);
} else
{throw e21317;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21351_21355 = cljs.core.seq.call(null,children);var chunk__21352_21356 = null;var count__21353_21357 = (0);var i__21354_21358 = (0);while(true){
if((i__21354_21358 < count__21353_21357))
{var child_21359 = cljs.core._nth.call(null,chunk__21352_21356,i__21354_21358);frag.appendChild(child_21359);
{
var G__21360 = seq__21351_21355;
var G__21361 = chunk__21352_21356;
var G__21362 = count__21353_21357;
var G__21363 = (i__21354_21358 + (1));
seq__21351_21355 = G__21360;
chunk__21352_21356 = G__21361;
count__21353_21357 = G__21362;
i__21354_21358 = G__21363;
continue;
}
} else
{var temp__4126__auto___21364 = cljs.core.seq.call(null,seq__21351_21355);if(temp__4126__auto___21364)
{var seq__21351_21365__$1 = temp__4126__auto___21364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21351_21365__$1))
{var c__4408__auto___21366 = cljs.core.chunk_first.call(null,seq__21351_21365__$1);{
var G__21367 = cljs.core.chunk_rest.call(null,seq__21351_21365__$1);
var G__21368 = c__4408__auto___21366;
var G__21369 = cljs.core.count.call(null,c__4408__auto___21366);
var G__21370 = (0);
seq__21351_21355 = G__21367;
chunk__21352_21356 = G__21368;
count__21353_21357 = G__21369;
i__21354_21358 = G__21370;
continue;
}
} else
{var child_21371 = cljs.core.first.call(null,seq__21351_21365__$1);frag.appendChild(child_21371);
{
var G__21372 = cljs.core.next.call(null,seq__21351_21365__$1);
var G__21373 = null;
var G__21374 = (0);
var G__21375 = (0);
seq__21351_21355 = G__21372;
chunk__21352_21356 = G__21373;
count__21353_21357 = G__21374;
i__21354_21358 = G__21375;
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
return (function (p1__21345_SHARP_,p2__21346_SHARP_){return f.call(null,p1__21345_SHARP_,p2__21346_SHARP_);
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
{if((function (){var G__21377 = list_thing;if(G__21377)
{var bit__4302__auto__ = (G__21377.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21377.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21377.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21377);
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
{if((function (){var G__21378 = content;if(G__21378)
{var bit__4302__auto__ = (G__21378.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21378.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21378.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21378);
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
{if((function (){var G__21379 = content;if(G__21379)
{var bit__4302__auto__ = (G__21379.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21379.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21379.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21379);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21379);
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
