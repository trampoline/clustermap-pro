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
var opt_wrapper_20915 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20916 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20917 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20917,opt_wrapper_20915,table_section_wrapper_20916,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20916,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20916,cell_wrapper_20917,table_section_wrapper_20916,table_section_wrapper_20916]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20922 = cljs.core.seq.call(null,tbody);var chunk__20923 = null;var count__20924 = (0);var i__20925 = (0);while(true){
if((i__20925 < count__20924))
{var child = cljs.core._nth.call(null,chunk__20923,i__20925);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20926 = seq__20922;
var G__20927 = chunk__20923;
var G__20928 = count__20924;
var G__20929 = (i__20925 + (1));
seq__20922 = G__20926;
chunk__20923 = G__20927;
count__20924 = G__20928;
i__20925 = G__20929;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20922);if(temp__4126__auto__)
{var seq__20922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20922__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20922__$1);{
var G__20930 = cljs.core.chunk_rest.call(null,seq__20922__$1);
var G__20931 = c__4408__auto__;
var G__20932 = cljs.core.count.call(null,c__4408__auto__);
var G__20933 = (0);
seq__20922 = G__20930;
chunk__20923 = G__20931;
count__20924 = G__20932;
i__20925 = G__20933;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20922__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20934 = cljs.core.next.call(null,seq__20922__$1);
var G__20935 = null;
var G__20936 = (0);
var G__20937 = (0);
seq__20922 = G__20934;
chunk__20923 = G__20935;
count__20924 = G__20936;
i__20925 = G__20937;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20939 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20939,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20939,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20939,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20940 = wrapper.lastChild;
var G__20941 = (level - (1));
wrapper = G__20940;
level = G__20941;
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
domina.DomContent = (function (){var obj20943 = {};return obj20943;
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
log_debug.cljs$lang$applyTo = (function (arglist__20944){
var mesg = cljs.core.seq(arglist__20944);
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
log.cljs$lang$applyTo = (function (arglist__20945){
var mesg = cljs.core.seq(arglist__20945);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20946){
var contents = cljs.core.seq(arglist__20946);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20947_SHARP_){return p1__20947_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20948_SHARP_,p2__20949_SHARP_){return goog.dom.insertChildAt(p1__20948_SHARP_,p2__20949_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20951_SHARP_,p2__20950_SHARP_){return goog.dom.insertSiblingBefore(p2__20950_SHARP_,p1__20951_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20953_SHARP_,p2__20952_SHARP_){return goog.dom.insertSiblingAfter(p2__20952_SHARP_,p1__20953_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20955_SHARP_,p2__20954_SHARP_){return goog.dom.replaceNode(p2__20954_SHARP_,p1__20955_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20960_20964 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20961_20965 = null;var count__20962_20966 = (0);var i__20963_20967 = (0);while(true){
if((i__20963_20967 < count__20962_20966))
{var n_20968 = cljs.core._nth.call(null,chunk__20961_20965,i__20963_20967);goog.style.setStyle(n_20968,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20969 = seq__20960_20964;
var G__20970 = chunk__20961_20965;
var G__20971 = count__20962_20966;
var G__20972 = (i__20963_20967 + (1));
seq__20960_20964 = G__20969;
chunk__20961_20965 = G__20970;
count__20962_20966 = G__20971;
i__20963_20967 = G__20972;
continue;
}
} else
{var temp__4126__auto___20973 = cljs.core.seq.call(null,seq__20960_20964);if(temp__4126__auto___20973)
{var seq__20960_20974__$1 = temp__4126__auto___20973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20960_20974__$1))
{var c__4408__auto___20975 = cljs.core.chunk_first.call(null,seq__20960_20974__$1);{
var G__20976 = cljs.core.chunk_rest.call(null,seq__20960_20974__$1);
var G__20977 = c__4408__auto___20975;
var G__20978 = cljs.core.count.call(null,c__4408__auto___20975);
var G__20979 = (0);
seq__20960_20964 = G__20976;
chunk__20961_20965 = G__20977;
count__20962_20966 = G__20978;
i__20963_20967 = G__20979;
continue;
}
} else
{var n_20980 = cljs.core.first.call(null,seq__20960_20974__$1);goog.style.setStyle(n_20980,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20981 = cljs.core.next.call(null,seq__20960_20974__$1);
var G__20982 = null;
var G__20983 = (0);
var G__20984 = (0);
seq__20960_20964 = G__20981;
chunk__20961_20965 = G__20982;
count__20962_20966 = G__20983;
i__20963_20967 = G__20984;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20985){
var content = cljs.core.first(arglist__20985);
arglist__20985 = cljs.core.next(arglist__20985);
var name = cljs.core.first(arglist__20985);
var value = cljs.core.rest(arglist__20985);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20990_20994 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20991_20995 = null;var count__20992_20996 = (0);var i__20993_20997 = (0);while(true){
if((i__20993_20997 < count__20992_20996))
{var n_20998 = cljs.core._nth.call(null,chunk__20991_20995,i__20993_20997);n_20998.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20999 = seq__20990_20994;
var G__21000 = chunk__20991_20995;
var G__21001 = count__20992_20996;
var G__21002 = (i__20993_20997 + (1));
seq__20990_20994 = G__20999;
chunk__20991_20995 = G__21000;
count__20992_20996 = G__21001;
i__20993_20997 = G__21002;
continue;
}
} else
{var temp__4126__auto___21003 = cljs.core.seq.call(null,seq__20990_20994);if(temp__4126__auto___21003)
{var seq__20990_21004__$1 = temp__4126__auto___21003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20990_21004__$1))
{var c__4408__auto___21005 = cljs.core.chunk_first.call(null,seq__20990_21004__$1);{
var G__21006 = cljs.core.chunk_rest.call(null,seq__20990_21004__$1);
var G__21007 = c__4408__auto___21005;
var G__21008 = cljs.core.count.call(null,c__4408__auto___21005);
var G__21009 = (0);
seq__20990_20994 = G__21006;
chunk__20991_20995 = G__21007;
count__20992_20996 = G__21008;
i__20993_20997 = G__21009;
continue;
}
} else
{var n_21010 = cljs.core.first.call(null,seq__20990_21004__$1);n_21010.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21011 = cljs.core.next.call(null,seq__20990_21004__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20990_20994 = G__21011;
chunk__20991_20995 = G__21012;
count__20992_20996 = G__21013;
i__20993_20997 = G__21014;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21015){
var content = cljs.core.first(arglist__21015);
arglist__21015 = cljs.core.next(arglist__21015);
var name = cljs.core.first(arglist__21015);
var value = cljs.core.rest(arglist__21015);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21020_21024 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21021_21025 = null;var count__21022_21026 = (0);var i__21023_21027 = (0);while(true){
if((i__21023_21027 < count__21022_21026))
{var n_21028 = cljs.core._nth.call(null,chunk__21021_21025,i__21023_21027);n_21028.removeAttribute(cljs.core.name.call(null,name));
{
var G__21029 = seq__21020_21024;
var G__21030 = chunk__21021_21025;
var G__21031 = count__21022_21026;
var G__21032 = (i__21023_21027 + (1));
seq__21020_21024 = G__21029;
chunk__21021_21025 = G__21030;
count__21022_21026 = G__21031;
i__21023_21027 = G__21032;
continue;
}
} else
{var temp__4126__auto___21033 = cljs.core.seq.call(null,seq__21020_21024);if(temp__4126__auto___21033)
{var seq__21020_21034__$1 = temp__4126__auto___21033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21020_21034__$1))
{var c__4408__auto___21035 = cljs.core.chunk_first.call(null,seq__21020_21034__$1);{
var G__21036 = cljs.core.chunk_rest.call(null,seq__21020_21034__$1);
var G__21037 = c__4408__auto___21035;
var G__21038 = cljs.core.count.call(null,c__4408__auto___21035);
var G__21039 = (0);
seq__21020_21024 = G__21036;
chunk__21021_21025 = G__21037;
count__21022_21026 = G__21038;
i__21023_21027 = G__21039;
continue;
}
} else
{var n_21040 = cljs.core.first.call(null,seq__21020_21034__$1);n_21040.removeAttribute(cljs.core.name.call(null,name));
{
var G__21041 = cljs.core.next.call(null,seq__21020_21034__$1);
var G__21042 = null;
var G__21043 = (0);
var G__21044 = (0);
seq__21020_21024 = G__21041;
chunk__21021_21025 = G__21042;
count__21022_21026 = G__21043;
i__21023_21027 = G__21044;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21046 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21046,(0),null);var v = cljs.core.nth.call(null,vec__21046,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21047_SHARP_){var attr = attrs__$1.item(p1__21047_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21054_21060 = cljs.core.seq.call(null,styles);var chunk__21055_21061 = null;var count__21056_21062 = (0);var i__21057_21063 = (0);while(true){
if((i__21057_21063 < count__21056_21062))
{var vec__21058_21064 = cljs.core._nth.call(null,chunk__21055_21061,i__21057_21063);var name_21065 = cljs.core.nth.call(null,vec__21058_21064,(0),null);var value_21066 = cljs.core.nth.call(null,vec__21058_21064,(1),null);domina.set_style_BANG_.call(null,content,name_21065,value_21066);
{
var G__21067 = seq__21054_21060;
var G__21068 = chunk__21055_21061;
var G__21069 = count__21056_21062;
var G__21070 = (i__21057_21063 + (1));
seq__21054_21060 = G__21067;
chunk__21055_21061 = G__21068;
count__21056_21062 = G__21069;
i__21057_21063 = G__21070;
continue;
}
} else
{var temp__4126__auto___21071 = cljs.core.seq.call(null,seq__21054_21060);if(temp__4126__auto___21071)
{var seq__21054_21072__$1 = temp__4126__auto___21071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21054_21072__$1))
{var c__4408__auto___21073 = cljs.core.chunk_first.call(null,seq__21054_21072__$1);{
var G__21074 = cljs.core.chunk_rest.call(null,seq__21054_21072__$1);
var G__21075 = c__4408__auto___21073;
var G__21076 = cljs.core.count.call(null,c__4408__auto___21073);
var G__21077 = (0);
seq__21054_21060 = G__21074;
chunk__21055_21061 = G__21075;
count__21056_21062 = G__21076;
i__21057_21063 = G__21077;
continue;
}
} else
{var vec__21059_21078 = cljs.core.first.call(null,seq__21054_21072__$1);var name_21079 = cljs.core.nth.call(null,vec__21059_21078,(0),null);var value_21080 = cljs.core.nth.call(null,vec__21059_21078,(1),null);domina.set_style_BANG_.call(null,content,name_21079,value_21080);
{
var G__21081 = cljs.core.next.call(null,seq__21054_21072__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__21054_21060 = G__21081;
chunk__21055_21061 = G__21082;
count__21056_21062 = G__21083;
i__21057_21063 = G__21084;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21091_21097 = cljs.core.seq.call(null,attrs);var chunk__21092_21098 = null;var count__21093_21099 = (0);var i__21094_21100 = (0);while(true){
if((i__21094_21100 < count__21093_21099))
{var vec__21095_21101 = cljs.core._nth.call(null,chunk__21092_21098,i__21094_21100);var name_21102 = cljs.core.nth.call(null,vec__21095_21101,(0),null);var value_21103 = cljs.core.nth.call(null,vec__21095_21101,(1),null);domina.set_attr_BANG_.call(null,content,name_21102,value_21103);
{
var G__21104 = seq__21091_21097;
var G__21105 = chunk__21092_21098;
var G__21106 = count__21093_21099;
var G__21107 = (i__21094_21100 + (1));
seq__21091_21097 = G__21104;
chunk__21092_21098 = G__21105;
count__21093_21099 = G__21106;
i__21094_21100 = G__21107;
continue;
}
} else
{var temp__4126__auto___21108 = cljs.core.seq.call(null,seq__21091_21097);if(temp__4126__auto___21108)
{var seq__21091_21109__$1 = temp__4126__auto___21108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21091_21109__$1))
{var c__4408__auto___21110 = cljs.core.chunk_first.call(null,seq__21091_21109__$1);{
var G__21111 = cljs.core.chunk_rest.call(null,seq__21091_21109__$1);
var G__21112 = c__4408__auto___21110;
var G__21113 = cljs.core.count.call(null,c__4408__auto___21110);
var G__21114 = (0);
seq__21091_21097 = G__21111;
chunk__21092_21098 = G__21112;
count__21093_21099 = G__21113;
i__21094_21100 = G__21114;
continue;
}
} else
{var vec__21096_21115 = cljs.core.first.call(null,seq__21091_21109__$1);var name_21116 = cljs.core.nth.call(null,vec__21096_21115,(0),null);var value_21117 = cljs.core.nth.call(null,vec__21096_21115,(1),null);domina.set_attr_BANG_.call(null,content,name_21116,value_21117);
{
var G__21118 = cljs.core.next.call(null,seq__21091_21109__$1);
var G__21119 = null;
var G__21120 = (0);
var G__21121 = (0);
seq__21091_21097 = G__21118;
chunk__21092_21098 = G__21119;
count__21093_21099 = G__21120;
i__21094_21100 = G__21121;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21126_21130 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21127_21131 = null;var count__21128_21132 = (0);var i__21129_21133 = (0);while(true){
if((i__21129_21133 < count__21128_21132))
{var node_21134 = cljs.core._nth.call(null,chunk__21127_21131,i__21129_21133);goog.dom.classes.add(node_21134,class$);
{
var G__21135 = seq__21126_21130;
var G__21136 = chunk__21127_21131;
var G__21137 = count__21128_21132;
var G__21138 = (i__21129_21133 + (1));
seq__21126_21130 = G__21135;
chunk__21127_21131 = G__21136;
count__21128_21132 = G__21137;
i__21129_21133 = G__21138;
continue;
}
} else
{var temp__4126__auto___21139 = cljs.core.seq.call(null,seq__21126_21130);if(temp__4126__auto___21139)
{var seq__21126_21140__$1 = temp__4126__auto___21139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21126_21140__$1))
{var c__4408__auto___21141 = cljs.core.chunk_first.call(null,seq__21126_21140__$1);{
var G__21142 = cljs.core.chunk_rest.call(null,seq__21126_21140__$1);
var G__21143 = c__4408__auto___21141;
var G__21144 = cljs.core.count.call(null,c__4408__auto___21141);
var G__21145 = (0);
seq__21126_21130 = G__21142;
chunk__21127_21131 = G__21143;
count__21128_21132 = G__21144;
i__21129_21133 = G__21145;
continue;
}
} else
{var node_21146 = cljs.core.first.call(null,seq__21126_21140__$1);goog.dom.classes.add(node_21146,class$);
{
var G__21147 = cljs.core.next.call(null,seq__21126_21140__$1);
var G__21148 = null;
var G__21149 = (0);
var G__21150 = (0);
seq__21126_21130 = G__21147;
chunk__21127_21131 = G__21148;
count__21128_21132 = G__21149;
i__21129_21133 = G__21150;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21155_21159 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21156_21160 = null;var count__21157_21161 = (0);var i__21158_21162 = (0);while(true){
if((i__21158_21162 < count__21157_21161))
{var node_21163 = cljs.core._nth.call(null,chunk__21156_21160,i__21158_21162);goog.dom.classes.remove(node_21163,class$);
{
var G__21164 = seq__21155_21159;
var G__21165 = chunk__21156_21160;
var G__21166 = count__21157_21161;
var G__21167 = (i__21158_21162 + (1));
seq__21155_21159 = G__21164;
chunk__21156_21160 = G__21165;
count__21157_21161 = G__21166;
i__21158_21162 = G__21167;
continue;
}
} else
{var temp__4126__auto___21168 = cljs.core.seq.call(null,seq__21155_21159);if(temp__4126__auto___21168)
{var seq__21155_21169__$1 = temp__4126__auto___21168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21155_21169__$1))
{var c__4408__auto___21170 = cljs.core.chunk_first.call(null,seq__21155_21169__$1);{
var G__21171 = cljs.core.chunk_rest.call(null,seq__21155_21169__$1);
var G__21172 = c__4408__auto___21170;
var G__21173 = cljs.core.count.call(null,c__4408__auto___21170);
var G__21174 = (0);
seq__21155_21159 = G__21171;
chunk__21156_21160 = G__21172;
count__21157_21161 = G__21173;
i__21158_21162 = G__21174;
continue;
}
} else
{var node_21175 = cljs.core.first.call(null,seq__21155_21169__$1);goog.dom.classes.remove(node_21175,class$);
{
var G__21176 = cljs.core.next.call(null,seq__21155_21169__$1);
var G__21177 = null;
var G__21178 = (0);
var G__21179 = (0);
seq__21155_21159 = G__21176;
chunk__21156_21160 = G__21177;
count__21157_21161 = G__21178;
i__21158_21162 = G__21179;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21184_21188 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21185_21189 = null;var count__21186_21190 = (0);var i__21187_21191 = (0);while(true){
if((i__21187_21191 < count__21186_21190))
{var node_21192 = cljs.core._nth.call(null,chunk__21185_21189,i__21187_21191);goog.dom.classes.toggle(node_21192,class$);
{
var G__21193 = seq__21184_21188;
var G__21194 = chunk__21185_21189;
var G__21195 = count__21186_21190;
var G__21196 = (i__21187_21191 + (1));
seq__21184_21188 = G__21193;
chunk__21185_21189 = G__21194;
count__21186_21190 = G__21195;
i__21187_21191 = G__21196;
continue;
}
} else
{var temp__4126__auto___21197 = cljs.core.seq.call(null,seq__21184_21188);if(temp__4126__auto___21197)
{var seq__21184_21198__$1 = temp__4126__auto___21197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21184_21198__$1))
{var c__4408__auto___21199 = cljs.core.chunk_first.call(null,seq__21184_21198__$1);{
var G__21200 = cljs.core.chunk_rest.call(null,seq__21184_21198__$1);
var G__21201 = c__4408__auto___21199;
var G__21202 = cljs.core.count.call(null,c__4408__auto___21199);
var G__21203 = (0);
seq__21184_21188 = G__21200;
chunk__21185_21189 = G__21201;
count__21186_21190 = G__21202;
i__21187_21191 = G__21203;
continue;
}
} else
{var node_21204 = cljs.core.first.call(null,seq__21184_21198__$1);goog.dom.classes.toggle(node_21204,class$);
{
var G__21205 = cljs.core.next.call(null,seq__21184_21198__$1);
var G__21206 = null;
var G__21207 = (0);
var G__21208 = (0);
seq__21184_21188 = G__21205;
chunk__21185_21189 = G__21206;
count__21186_21190 = G__21207;
i__21187_21191 = G__21208;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21217__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21213_21218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21214_21219 = null;var count__21215_21220 = (0);var i__21216_21221 = (0);while(true){
if((i__21216_21221 < count__21215_21220))
{var node_21222 = cljs.core._nth.call(null,chunk__21214_21219,i__21216_21221);goog.dom.classes.set(node_21222,classes_21217__$1);
{
var G__21223 = seq__21213_21218;
var G__21224 = chunk__21214_21219;
var G__21225 = count__21215_21220;
var G__21226 = (i__21216_21221 + (1));
seq__21213_21218 = G__21223;
chunk__21214_21219 = G__21224;
count__21215_21220 = G__21225;
i__21216_21221 = G__21226;
continue;
}
} else
{var temp__4126__auto___21227 = cljs.core.seq.call(null,seq__21213_21218);if(temp__4126__auto___21227)
{var seq__21213_21228__$1 = temp__4126__auto___21227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21213_21228__$1))
{var c__4408__auto___21229 = cljs.core.chunk_first.call(null,seq__21213_21228__$1);{
var G__21230 = cljs.core.chunk_rest.call(null,seq__21213_21228__$1);
var G__21231 = c__4408__auto___21229;
var G__21232 = cljs.core.count.call(null,c__4408__auto___21229);
var G__21233 = (0);
seq__21213_21218 = G__21230;
chunk__21214_21219 = G__21231;
count__21215_21220 = G__21232;
i__21216_21221 = G__21233;
continue;
}
} else
{var node_21234 = cljs.core.first.call(null,seq__21213_21228__$1);goog.dom.classes.set(node_21234,classes_21217__$1);
{
var G__21235 = cljs.core.next.call(null,seq__21213_21228__$1);
var G__21236 = null;
var G__21237 = (0);
var G__21238 = (0);
seq__21213_21218 = G__21235;
chunk__21214_21219 = G__21236;
count__21215_21220 = G__21237;
i__21216_21221 = G__21238;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21243_21247 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21244_21248 = null;var count__21245_21249 = (0);var i__21246_21250 = (0);while(true){
if((i__21246_21250 < count__21245_21249))
{var node_21251 = cljs.core._nth.call(null,chunk__21244_21248,i__21246_21250);goog.dom.setTextContent(node_21251,value);
{
var G__21252 = seq__21243_21247;
var G__21253 = chunk__21244_21248;
var G__21254 = count__21245_21249;
var G__21255 = (i__21246_21250 + (1));
seq__21243_21247 = G__21252;
chunk__21244_21248 = G__21253;
count__21245_21249 = G__21254;
i__21246_21250 = G__21255;
continue;
}
} else
{var temp__4126__auto___21256 = cljs.core.seq.call(null,seq__21243_21247);if(temp__4126__auto___21256)
{var seq__21243_21257__$1 = temp__4126__auto___21256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21243_21257__$1))
{var c__4408__auto___21258 = cljs.core.chunk_first.call(null,seq__21243_21257__$1);{
var G__21259 = cljs.core.chunk_rest.call(null,seq__21243_21257__$1);
var G__21260 = c__4408__auto___21258;
var G__21261 = cljs.core.count.call(null,c__4408__auto___21258);
var G__21262 = (0);
seq__21243_21247 = G__21259;
chunk__21244_21248 = G__21260;
count__21245_21249 = G__21261;
i__21246_21250 = G__21262;
continue;
}
} else
{var node_21263 = cljs.core.first.call(null,seq__21243_21257__$1);goog.dom.setTextContent(node_21263,value);
{
var G__21264 = cljs.core.next.call(null,seq__21243_21257__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__21243_21247 = G__21264;
chunk__21244_21248 = G__21265;
count__21245_21249 = G__21266;
i__21246_21250 = G__21267;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21272_21276 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21273_21277 = null;var count__21274_21278 = (0);var i__21275_21279 = (0);while(true){
if((i__21275_21279 < count__21274_21278))
{var node_21280 = cljs.core._nth.call(null,chunk__21273_21277,i__21275_21279);goog.dom.forms.setValue(node_21280,value);
{
var G__21281 = seq__21272_21276;
var G__21282 = chunk__21273_21277;
var G__21283 = count__21274_21278;
var G__21284 = (i__21275_21279 + (1));
seq__21272_21276 = G__21281;
chunk__21273_21277 = G__21282;
count__21274_21278 = G__21283;
i__21275_21279 = G__21284;
continue;
}
} else
{var temp__4126__auto___21285 = cljs.core.seq.call(null,seq__21272_21276);if(temp__4126__auto___21285)
{var seq__21272_21286__$1 = temp__4126__auto___21285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21272_21286__$1))
{var c__4408__auto___21287 = cljs.core.chunk_first.call(null,seq__21272_21286__$1);{
var G__21288 = cljs.core.chunk_rest.call(null,seq__21272_21286__$1);
var G__21289 = c__4408__auto___21287;
var G__21290 = cljs.core.count.call(null,c__4408__auto___21287);
var G__21291 = (0);
seq__21272_21276 = G__21288;
chunk__21273_21277 = G__21289;
count__21274_21278 = G__21290;
i__21275_21279 = G__21291;
continue;
}
} else
{var node_21292 = cljs.core.first.call(null,seq__21272_21286__$1);goog.dom.forms.setValue(node_21292,value);
{
var G__21293 = cljs.core.next.call(null,seq__21272_21286__$1);
var G__21294 = null;
var G__21295 = (0);
var G__21296 = (0);
seq__21272_21276 = G__21293;
chunk__21273_21277 = G__21294;
count__21274_21278 = G__21295;
i__21275_21279 = G__21296;
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
{var value_21307 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21303_21308 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21304_21309 = null;var count__21305_21310 = (0);var i__21306_21311 = (0);while(true){
if((i__21306_21311 < count__21305_21310))
{var node_21312 = cljs.core._nth.call(null,chunk__21304_21309,i__21306_21311);node_21312.innerHTML = value_21307;
{
var G__21313 = seq__21303_21308;
var G__21314 = chunk__21304_21309;
var G__21315 = count__21305_21310;
var G__21316 = (i__21306_21311 + (1));
seq__21303_21308 = G__21313;
chunk__21304_21309 = G__21314;
count__21305_21310 = G__21315;
i__21306_21311 = G__21316;
continue;
}
} else
{var temp__4126__auto___21317 = cljs.core.seq.call(null,seq__21303_21308);if(temp__4126__auto___21317)
{var seq__21303_21318__$1 = temp__4126__auto___21317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21303_21318__$1))
{var c__4408__auto___21319 = cljs.core.chunk_first.call(null,seq__21303_21318__$1);{
var G__21320 = cljs.core.chunk_rest.call(null,seq__21303_21318__$1);
var G__21321 = c__4408__auto___21319;
var G__21322 = cljs.core.count.call(null,c__4408__auto___21319);
var G__21323 = (0);
seq__21303_21308 = G__21320;
chunk__21304_21309 = G__21321;
count__21305_21310 = G__21322;
i__21306_21311 = G__21323;
continue;
}
} else
{var node_21324 = cljs.core.first.call(null,seq__21303_21318__$1);node_21324.innerHTML = value_21307;
{
var G__21325 = cljs.core.next.call(null,seq__21303_21318__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__21303_21308 = G__21325;
chunk__21304_21309 = G__21326;
count__21305_21310 = G__21327;
i__21306_21311 = G__21328;
continue;
}
}
} else
{}
}
break;
}
}catch (e21302){if((e21302 instanceof Error))
{var e_21329 = e21302;domina.replace_children_BANG_.call(null,content,value_21307);
} else
{throw e21302;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21336_21340 = cljs.core.seq.call(null,children);var chunk__21337_21341 = null;var count__21338_21342 = (0);var i__21339_21343 = (0);while(true){
if((i__21339_21343 < count__21338_21342))
{var child_21344 = cljs.core._nth.call(null,chunk__21337_21341,i__21339_21343);frag.appendChild(child_21344);
{
var G__21345 = seq__21336_21340;
var G__21346 = chunk__21337_21341;
var G__21347 = count__21338_21342;
var G__21348 = (i__21339_21343 + (1));
seq__21336_21340 = G__21345;
chunk__21337_21341 = G__21346;
count__21338_21342 = G__21347;
i__21339_21343 = G__21348;
continue;
}
} else
{var temp__4126__auto___21349 = cljs.core.seq.call(null,seq__21336_21340);if(temp__4126__auto___21349)
{var seq__21336_21350__$1 = temp__4126__auto___21349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21336_21350__$1))
{var c__4408__auto___21351 = cljs.core.chunk_first.call(null,seq__21336_21350__$1);{
var G__21352 = cljs.core.chunk_rest.call(null,seq__21336_21350__$1);
var G__21353 = c__4408__auto___21351;
var G__21354 = cljs.core.count.call(null,c__4408__auto___21351);
var G__21355 = (0);
seq__21336_21340 = G__21352;
chunk__21337_21341 = G__21353;
count__21338_21342 = G__21354;
i__21339_21343 = G__21355;
continue;
}
} else
{var child_21356 = cljs.core.first.call(null,seq__21336_21350__$1);frag.appendChild(child_21356);
{
var G__21357 = cljs.core.next.call(null,seq__21336_21350__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21336_21340 = G__21357;
chunk__21337_21341 = G__21358;
count__21338_21342 = G__21359;
i__21339_21343 = G__21360;
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
return (function (p1__21330_SHARP_,p2__21331_SHARP_){return f.call(null,p1__21330_SHARP_,p2__21331_SHARP_);
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
{if((function (){var G__21362 = list_thing;if(G__21362)
{var bit__4302__auto__ = (G__21362.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21362.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21362.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21362);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21362);
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
{if((function (){var G__21363 = content;if(G__21363)
{var bit__4302__auto__ = (G__21363.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21363.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21363);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21363);
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
{if((function (){var G__21364 = content;if(G__21364)
{var bit__4302__auto__ = (G__21364.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21364.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21364);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21364);
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
