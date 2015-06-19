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
var opt_wrapper_40063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_40065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40065,opt_wrapper_40063,table_section_wrapper_40064,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_40063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_40064,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40064,cell_wrapper_40065,table_section_wrapper_40064,table_section_wrapper_40064]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__11540__auto__ = div.firstChild;if(cljs.core.truth_(and__11540__auto__))
{return div.firstChild.childNodes;
} else
{return and__11540__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__40070 = cljs.core.seq.call(null,tbody);var chunk__40071 = null;var count__40072 = (0);var i__40073 = (0);while(true){
if((i__40073 < count__40072))
{var child = cljs.core._nth.call(null,chunk__40071,i__40073);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40074 = seq__40070;
var G__40075 = chunk__40071;
var G__40076 = count__40072;
var G__40077 = (i__40073 + (1));
seq__40070 = G__40074;
chunk__40071 = G__40075;
count__40072 = G__40076;
i__40073 = G__40077;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40070);if(temp__4126__auto__)
{var seq__40070__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40070__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__40070__$1);{
var G__40078 = cljs.core.chunk_rest.call(null,seq__40070__$1);
var G__40079 = c__12321__auto__;
var G__40080 = cljs.core.count.call(null,c__12321__auto__);
var G__40081 = (0);
seq__40070 = G__40078;
chunk__40071 = G__40079;
count__40072 = G__40080;
i__40073 = G__40081;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__40070__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40082 = cljs.core.next.call(null,seq__40070__$1);
var G__40083 = null;
var G__40084 = (0);
var G__40085 = (0);
seq__40070 = G__40082;
chunk__40071 = G__40083;
count__40072 = G__40084;
i__40073 = G__40085;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__40087 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__40087,(0),null);var start_wrap = cljs.core.nth.call(null,vec__40087,(1),null);var end_wrap = cljs.core.nth.call(null,vec__40087,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__40088 = wrapper.lastChild;
var G__40089 = (level - (1));
wrapper = G__40088;
level = G__40089;
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
if(cljs.core.truth_((function (){var and__11540__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__11540__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__11540__auto__;
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
domina.DomContent = (function (){var obj40091 = {};return obj40091;
})();
domina.nodes = (function nodes(content){if((function (){var and__11540__auto__ = content;if(and__11540__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__11540__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__12188__auto__ = (((content == null))?null:content);return (function (){var or__11552__auto__ = (domina.nodes[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.nodes["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__11540__auto__ = nodeseq;if(and__11540__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__11540__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__12188__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__11552__auto__ = (domina.single_node[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.single_node["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__11540__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__11540__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__11540__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__40092){
var mesg = cljs.core.seq(arglist__40092);
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
log.cljs$lang$applyTo = (function (arglist__40093){
var mesg = cljs.core.seq(arglist__40093);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40094){
var contents = cljs.core.seq(arglist__40094);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__40095_SHARP_){return p1__40095_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__40096_SHARP_,p2__40097_SHARP_){return goog.dom.insertChildAt(p1__40096_SHARP_,p2__40097_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40099_SHARP_,p2__40098_SHARP_){return goog.dom.insertSiblingBefore(p2__40098_SHARP_,p1__40099_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40101_SHARP_,p2__40100_SHARP_){return goog.dom.insertSiblingAfter(p2__40100_SHARP_,p1__40101_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__40103_SHARP_,p2__40102_SHARP_){return goog.dom.replaceNode(p2__40102_SHARP_,p1__40103_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40108_40112 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40109_40113 = null;var count__40110_40114 = (0);var i__40111_40115 = (0);while(true){
if((i__40111_40115 < count__40110_40114))
{var n_40116 = cljs.core._nth.call(null,chunk__40109_40113,i__40111_40115);goog.style.setStyle(n_40116,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40117 = seq__40108_40112;
var G__40118 = chunk__40109_40113;
var G__40119 = count__40110_40114;
var G__40120 = (i__40111_40115 + (1));
seq__40108_40112 = G__40117;
chunk__40109_40113 = G__40118;
count__40110_40114 = G__40119;
i__40111_40115 = G__40120;
continue;
}
} else
{var temp__4126__auto___40121 = cljs.core.seq.call(null,seq__40108_40112);if(temp__4126__auto___40121)
{var seq__40108_40122__$1 = temp__4126__auto___40121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40108_40122__$1))
{var c__12321__auto___40123 = cljs.core.chunk_first.call(null,seq__40108_40122__$1);{
var G__40124 = cljs.core.chunk_rest.call(null,seq__40108_40122__$1);
var G__40125 = c__12321__auto___40123;
var G__40126 = cljs.core.count.call(null,c__12321__auto___40123);
var G__40127 = (0);
seq__40108_40112 = G__40124;
chunk__40109_40113 = G__40125;
count__40110_40114 = G__40126;
i__40111_40115 = G__40127;
continue;
}
} else
{var n_40128 = cljs.core.first.call(null,seq__40108_40122__$1);goog.style.setStyle(n_40128,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40129 = cljs.core.next.call(null,seq__40108_40122__$1);
var G__40130 = null;
var G__40131 = (0);
var G__40132 = (0);
seq__40108_40112 = G__40129;
chunk__40109_40113 = G__40130;
count__40110_40114 = G__40131;
i__40111_40115 = G__40132;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40133){
var content = cljs.core.first(arglist__40133);
arglist__40133 = cljs.core.next(arglist__40133);
var name = cljs.core.first(arglist__40133);
var value = cljs.core.rest(arglist__40133);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40138_40142 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40139_40143 = null;var count__40140_40144 = (0);var i__40141_40145 = (0);while(true){
if((i__40141_40145 < count__40140_40144))
{var n_40146 = cljs.core._nth.call(null,chunk__40139_40143,i__40141_40145);n_40146.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40147 = seq__40138_40142;
var G__40148 = chunk__40139_40143;
var G__40149 = count__40140_40144;
var G__40150 = (i__40141_40145 + (1));
seq__40138_40142 = G__40147;
chunk__40139_40143 = G__40148;
count__40140_40144 = G__40149;
i__40141_40145 = G__40150;
continue;
}
} else
{var temp__4126__auto___40151 = cljs.core.seq.call(null,seq__40138_40142);if(temp__4126__auto___40151)
{var seq__40138_40152__$1 = temp__4126__auto___40151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40138_40152__$1))
{var c__12321__auto___40153 = cljs.core.chunk_first.call(null,seq__40138_40152__$1);{
var G__40154 = cljs.core.chunk_rest.call(null,seq__40138_40152__$1);
var G__40155 = c__12321__auto___40153;
var G__40156 = cljs.core.count.call(null,c__12321__auto___40153);
var G__40157 = (0);
seq__40138_40142 = G__40154;
chunk__40139_40143 = G__40155;
count__40140_40144 = G__40156;
i__40141_40145 = G__40157;
continue;
}
} else
{var n_40158 = cljs.core.first.call(null,seq__40138_40152__$1);n_40158.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40159 = cljs.core.next.call(null,seq__40138_40152__$1);
var G__40160 = null;
var G__40161 = (0);
var G__40162 = (0);
seq__40138_40142 = G__40159;
chunk__40139_40143 = G__40160;
count__40140_40144 = G__40161;
i__40141_40145 = G__40162;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40163){
var content = cljs.core.first(arglist__40163);
arglist__40163 = cljs.core.next(arglist__40163);
var name = cljs.core.first(arglist__40163);
var value = cljs.core.rest(arglist__40163);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40168_40172 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40169_40173 = null;var count__40170_40174 = (0);var i__40171_40175 = (0);while(true){
if((i__40171_40175 < count__40170_40174))
{var n_40176 = cljs.core._nth.call(null,chunk__40169_40173,i__40171_40175);n_40176.removeAttribute(cljs.core.name.call(null,name));
{
var G__40177 = seq__40168_40172;
var G__40178 = chunk__40169_40173;
var G__40179 = count__40170_40174;
var G__40180 = (i__40171_40175 + (1));
seq__40168_40172 = G__40177;
chunk__40169_40173 = G__40178;
count__40170_40174 = G__40179;
i__40171_40175 = G__40180;
continue;
}
} else
{var temp__4126__auto___40181 = cljs.core.seq.call(null,seq__40168_40172);if(temp__4126__auto___40181)
{var seq__40168_40182__$1 = temp__4126__auto___40181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40168_40182__$1))
{var c__12321__auto___40183 = cljs.core.chunk_first.call(null,seq__40168_40182__$1);{
var G__40184 = cljs.core.chunk_rest.call(null,seq__40168_40182__$1);
var G__40185 = c__12321__auto___40183;
var G__40186 = cljs.core.count.call(null,c__12321__auto___40183);
var G__40187 = (0);
seq__40168_40172 = G__40184;
chunk__40169_40173 = G__40185;
count__40170_40174 = G__40186;
i__40171_40175 = G__40187;
continue;
}
} else
{var n_40188 = cljs.core.first.call(null,seq__40168_40182__$1);n_40188.removeAttribute(cljs.core.name.call(null,name));
{
var G__40189 = cljs.core.next.call(null,seq__40168_40182__$1);
var G__40190 = null;
var G__40191 = (0);
var G__40192 = (0);
seq__40168_40172 = G__40189;
chunk__40169_40173 = G__40190;
count__40170_40174 = G__40191;
i__40171_40175 = G__40192;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__40194 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__40194,(0),null);var v = cljs.core.nth.call(null,vec__40194,(1),null);if(cljs.core.truth_((function (){var and__11540__auto__ = k;if(cljs.core.truth_(and__11540__auto__))
{return v;
} else
{return and__11540__auto__;
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
return (function (p1__40195_SHARP_){var attr = attrs__$1.item(p1__40195_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40202_40208 = cljs.core.seq.call(null,styles);var chunk__40203_40209 = null;var count__40204_40210 = (0);var i__40205_40211 = (0);while(true){
if((i__40205_40211 < count__40204_40210))
{var vec__40206_40212 = cljs.core._nth.call(null,chunk__40203_40209,i__40205_40211);var name_40213 = cljs.core.nth.call(null,vec__40206_40212,(0),null);var value_40214 = cljs.core.nth.call(null,vec__40206_40212,(1),null);domina.set_style_BANG_.call(null,content,name_40213,value_40214);
{
var G__40215 = seq__40202_40208;
var G__40216 = chunk__40203_40209;
var G__40217 = count__40204_40210;
var G__40218 = (i__40205_40211 + (1));
seq__40202_40208 = G__40215;
chunk__40203_40209 = G__40216;
count__40204_40210 = G__40217;
i__40205_40211 = G__40218;
continue;
}
} else
{var temp__4126__auto___40219 = cljs.core.seq.call(null,seq__40202_40208);if(temp__4126__auto___40219)
{var seq__40202_40220__$1 = temp__4126__auto___40219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40202_40220__$1))
{var c__12321__auto___40221 = cljs.core.chunk_first.call(null,seq__40202_40220__$1);{
var G__40222 = cljs.core.chunk_rest.call(null,seq__40202_40220__$1);
var G__40223 = c__12321__auto___40221;
var G__40224 = cljs.core.count.call(null,c__12321__auto___40221);
var G__40225 = (0);
seq__40202_40208 = G__40222;
chunk__40203_40209 = G__40223;
count__40204_40210 = G__40224;
i__40205_40211 = G__40225;
continue;
}
} else
{var vec__40207_40226 = cljs.core.first.call(null,seq__40202_40220__$1);var name_40227 = cljs.core.nth.call(null,vec__40207_40226,(0),null);var value_40228 = cljs.core.nth.call(null,vec__40207_40226,(1),null);domina.set_style_BANG_.call(null,content,name_40227,value_40228);
{
var G__40229 = cljs.core.next.call(null,seq__40202_40220__$1);
var G__40230 = null;
var G__40231 = (0);
var G__40232 = (0);
seq__40202_40208 = G__40229;
chunk__40203_40209 = G__40230;
count__40204_40210 = G__40231;
i__40205_40211 = G__40232;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40239_40245 = cljs.core.seq.call(null,attrs);var chunk__40240_40246 = null;var count__40241_40247 = (0);var i__40242_40248 = (0);while(true){
if((i__40242_40248 < count__40241_40247))
{var vec__40243_40249 = cljs.core._nth.call(null,chunk__40240_40246,i__40242_40248);var name_40250 = cljs.core.nth.call(null,vec__40243_40249,(0),null);var value_40251 = cljs.core.nth.call(null,vec__40243_40249,(1),null);domina.set_attr_BANG_.call(null,content,name_40250,value_40251);
{
var G__40252 = seq__40239_40245;
var G__40253 = chunk__40240_40246;
var G__40254 = count__40241_40247;
var G__40255 = (i__40242_40248 + (1));
seq__40239_40245 = G__40252;
chunk__40240_40246 = G__40253;
count__40241_40247 = G__40254;
i__40242_40248 = G__40255;
continue;
}
} else
{var temp__4126__auto___40256 = cljs.core.seq.call(null,seq__40239_40245);if(temp__4126__auto___40256)
{var seq__40239_40257__$1 = temp__4126__auto___40256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40239_40257__$1))
{var c__12321__auto___40258 = cljs.core.chunk_first.call(null,seq__40239_40257__$1);{
var G__40259 = cljs.core.chunk_rest.call(null,seq__40239_40257__$1);
var G__40260 = c__12321__auto___40258;
var G__40261 = cljs.core.count.call(null,c__12321__auto___40258);
var G__40262 = (0);
seq__40239_40245 = G__40259;
chunk__40240_40246 = G__40260;
count__40241_40247 = G__40261;
i__40242_40248 = G__40262;
continue;
}
} else
{var vec__40244_40263 = cljs.core.first.call(null,seq__40239_40257__$1);var name_40264 = cljs.core.nth.call(null,vec__40244_40263,(0),null);var value_40265 = cljs.core.nth.call(null,vec__40244_40263,(1),null);domina.set_attr_BANG_.call(null,content,name_40264,value_40265);
{
var G__40266 = cljs.core.next.call(null,seq__40239_40257__$1);
var G__40267 = null;
var G__40268 = (0);
var G__40269 = (0);
seq__40239_40245 = G__40266;
chunk__40240_40246 = G__40267;
count__40241_40247 = G__40268;
i__40242_40248 = G__40269;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40274_40278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40275_40279 = null;var count__40276_40280 = (0);var i__40277_40281 = (0);while(true){
if((i__40277_40281 < count__40276_40280))
{var node_40282 = cljs.core._nth.call(null,chunk__40275_40279,i__40277_40281);goog.dom.classes.add(node_40282,class$);
{
var G__40283 = seq__40274_40278;
var G__40284 = chunk__40275_40279;
var G__40285 = count__40276_40280;
var G__40286 = (i__40277_40281 + (1));
seq__40274_40278 = G__40283;
chunk__40275_40279 = G__40284;
count__40276_40280 = G__40285;
i__40277_40281 = G__40286;
continue;
}
} else
{var temp__4126__auto___40287 = cljs.core.seq.call(null,seq__40274_40278);if(temp__4126__auto___40287)
{var seq__40274_40288__$1 = temp__4126__auto___40287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40274_40288__$1))
{var c__12321__auto___40289 = cljs.core.chunk_first.call(null,seq__40274_40288__$1);{
var G__40290 = cljs.core.chunk_rest.call(null,seq__40274_40288__$1);
var G__40291 = c__12321__auto___40289;
var G__40292 = cljs.core.count.call(null,c__12321__auto___40289);
var G__40293 = (0);
seq__40274_40278 = G__40290;
chunk__40275_40279 = G__40291;
count__40276_40280 = G__40292;
i__40277_40281 = G__40293;
continue;
}
} else
{var node_40294 = cljs.core.first.call(null,seq__40274_40288__$1);goog.dom.classes.add(node_40294,class$);
{
var G__40295 = cljs.core.next.call(null,seq__40274_40288__$1);
var G__40296 = null;
var G__40297 = (0);
var G__40298 = (0);
seq__40274_40278 = G__40295;
chunk__40275_40279 = G__40296;
count__40276_40280 = G__40297;
i__40277_40281 = G__40298;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40303_40307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40304_40308 = null;var count__40305_40309 = (0);var i__40306_40310 = (0);while(true){
if((i__40306_40310 < count__40305_40309))
{var node_40311 = cljs.core._nth.call(null,chunk__40304_40308,i__40306_40310);goog.dom.classes.remove(node_40311,class$);
{
var G__40312 = seq__40303_40307;
var G__40313 = chunk__40304_40308;
var G__40314 = count__40305_40309;
var G__40315 = (i__40306_40310 + (1));
seq__40303_40307 = G__40312;
chunk__40304_40308 = G__40313;
count__40305_40309 = G__40314;
i__40306_40310 = G__40315;
continue;
}
} else
{var temp__4126__auto___40316 = cljs.core.seq.call(null,seq__40303_40307);if(temp__4126__auto___40316)
{var seq__40303_40317__$1 = temp__4126__auto___40316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40303_40317__$1))
{var c__12321__auto___40318 = cljs.core.chunk_first.call(null,seq__40303_40317__$1);{
var G__40319 = cljs.core.chunk_rest.call(null,seq__40303_40317__$1);
var G__40320 = c__12321__auto___40318;
var G__40321 = cljs.core.count.call(null,c__12321__auto___40318);
var G__40322 = (0);
seq__40303_40307 = G__40319;
chunk__40304_40308 = G__40320;
count__40305_40309 = G__40321;
i__40306_40310 = G__40322;
continue;
}
} else
{var node_40323 = cljs.core.first.call(null,seq__40303_40317__$1);goog.dom.classes.remove(node_40323,class$);
{
var G__40324 = cljs.core.next.call(null,seq__40303_40317__$1);
var G__40325 = null;
var G__40326 = (0);
var G__40327 = (0);
seq__40303_40307 = G__40324;
chunk__40304_40308 = G__40325;
count__40305_40309 = G__40326;
i__40306_40310 = G__40327;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40332_40336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40333_40337 = null;var count__40334_40338 = (0);var i__40335_40339 = (0);while(true){
if((i__40335_40339 < count__40334_40338))
{var node_40340 = cljs.core._nth.call(null,chunk__40333_40337,i__40335_40339);goog.dom.classes.toggle(node_40340,class$);
{
var G__40341 = seq__40332_40336;
var G__40342 = chunk__40333_40337;
var G__40343 = count__40334_40338;
var G__40344 = (i__40335_40339 + (1));
seq__40332_40336 = G__40341;
chunk__40333_40337 = G__40342;
count__40334_40338 = G__40343;
i__40335_40339 = G__40344;
continue;
}
} else
{var temp__4126__auto___40345 = cljs.core.seq.call(null,seq__40332_40336);if(temp__4126__auto___40345)
{var seq__40332_40346__$1 = temp__4126__auto___40345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40332_40346__$1))
{var c__12321__auto___40347 = cljs.core.chunk_first.call(null,seq__40332_40346__$1);{
var G__40348 = cljs.core.chunk_rest.call(null,seq__40332_40346__$1);
var G__40349 = c__12321__auto___40347;
var G__40350 = cljs.core.count.call(null,c__12321__auto___40347);
var G__40351 = (0);
seq__40332_40336 = G__40348;
chunk__40333_40337 = G__40349;
count__40334_40338 = G__40350;
i__40335_40339 = G__40351;
continue;
}
} else
{var node_40352 = cljs.core.first.call(null,seq__40332_40346__$1);goog.dom.classes.toggle(node_40352,class$);
{
var G__40353 = cljs.core.next.call(null,seq__40332_40346__$1);
var G__40354 = null;
var G__40355 = (0);
var G__40356 = (0);
seq__40332_40336 = G__40353;
chunk__40333_40337 = G__40354;
count__40334_40338 = G__40355;
i__40335_40339 = G__40356;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40365__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__40361_40366 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40362_40367 = null;var count__40363_40368 = (0);var i__40364_40369 = (0);while(true){
if((i__40364_40369 < count__40363_40368))
{var node_40370 = cljs.core._nth.call(null,chunk__40362_40367,i__40364_40369);goog.dom.classes.set(node_40370,classes_40365__$1);
{
var G__40371 = seq__40361_40366;
var G__40372 = chunk__40362_40367;
var G__40373 = count__40363_40368;
var G__40374 = (i__40364_40369 + (1));
seq__40361_40366 = G__40371;
chunk__40362_40367 = G__40372;
count__40363_40368 = G__40373;
i__40364_40369 = G__40374;
continue;
}
} else
{var temp__4126__auto___40375 = cljs.core.seq.call(null,seq__40361_40366);if(temp__4126__auto___40375)
{var seq__40361_40376__$1 = temp__4126__auto___40375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40361_40376__$1))
{var c__12321__auto___40377 = cljs.core.chunk_first.call(null,seq__40361_40376__$1);{
var G__40378 = cljs.core.chunk_rest.call(null,seq__40361_40376__$1);
var G__40379 = c__12321__auto___40377;
var G__40380 = cljs.core.count.call(null,c__12321__auto___40377);
var G__40381 = (0);
seq__40361_40366 = G__40378;
chunk__40362_40367 = G__40379;
count__40363_40368 = G__40380;
i__40364_40369 = G__40381;
continue;
}
} else
{var node_40382 = cljs.core.first.call(null,seq__40361_40376__$1);goog.dom.classes.set(node_40382,classes_40365__$1);
{
var G__40383 = cljs.core.next.call(null,seq__40361_40376__$1);
var G__40384 = null;
var G__40385 = (0);
var G__40386 = (0);
seq__40361_40366 = G__40383;
chunk__40362_40367 = G__40384;
count__40363_40368 = G__40385;
i__40364_40369 = G__40386;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40391_40395 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40392_40396 = null;var count__40393_40397 = (0);var i__40394_40398 = (0);while(true){
if((i__40394_40398 < count__40393_40397))
{var node_40399 = cljs.core._nth.call(null,chunk__40392_40396,i__40394_40398);goog.dom.setTextContent(node_40399,value);
{
var G__40400 = seq__40391_40395;
var G__40401 = chunk__40392_40396;
var G__40402 = count__40393_40397;
var G__40403 = (i__40394_40398 + (1));
seq__40391_40395 = G__40400;
chunk__40392_40396 = G__40401;
count__40393_40397 = G__40402;
i__40394_40398 = G__40403;
continue;
}
} else
{var temp__4126__auto___40404 = cljs.core.seq.call(null,seq__40391_40395);if(temp__4126__auto___40404)
{var seq__40391_40405__$1 = temp__4126__auto___40404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40391_40405__$1))
{var c__12321__auto___40406 = cljs.core.chunk_first.call(null,seq__40391_40405__$1);{
var G__40407 = cljs.core.chunk_rest.call(null,seq__40391_40405__$1);
var G__40408 = c__12321__auto___40406;
var G__40409 = cljs.core.count.call(null,c__12321__auto___40406);
var G__40410 = (0);
seq__40391_40395 = G__40407;
chunk__40392_40396 = G__40408;
count__40393_40397 = G__40409;
i__40394_40398 = G__40410;
continue;
}
} else
{var node_40411 = cljs.core.first.call(null,seq__40391_40405__$1);goog.dom.setTextContent(node_40411,value);
{
var G__40412 = cljs.core.next.call(null,seq__40391_40405__$1);
var G__40413 = null;
var G__40414 = (0);
var G__40415 = (0);
seq__40391_40395 = G__40412;
chunk__40392_40396 = G__40413;
count__40393_40397 = G__40414;
i__40394_40398 = G__40415;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40420_40424 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40421_40425 = null;var count__40422_40426 = (0);var i__40423_40427 = (0);while(true){
if((i__40423_40427 < count__40422_40426))
{var node_40428 = cljs.core._nth.call(null,chunk__40421_40425,i__40423_40427);goog.dom.forms.setValue(node_40428,value);
{
var G__40429 = seq__40420_40424;
var G__40430 = chunk__40421_40425;
var G__40431 = count__40422_40426;
var G__40432 = (i__40423_40427 + (1));
seq__40420_40424 = G__40429;
chunk__40421_40425 = G__40430;
count__40422_40426 = G__40431;
i__40423_40427 = G__40432;
continue;
}
} else
{var temp__4126__auto___40433 = cljs.core.seq.call(null,seq__40420_40424);if(temp__4126__auto___40433)
{var seq__40420_40434__$1 = temp__4126__auto___40433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40420_40434__$1))
{var c__12321__auto___40435 = cljs.core.chunk_first.call(null,seq__40420_40434__$1);{
var G__40436 = cljs.core.chunk_rest.call(null,seq__40420_40434__$1);
var G__40437 = c__12321__auto___40435;
var G__40438 = cljs.core.count.call(null,c__12321__auto___40435);
var G__40439 = (0);
seq__40420_40424 = G__40436;
chunk__40421_40425 = G__40437;
count__40422_40426 = G__40438;
i__40423_40427 = G__40439;
continue;
}
} else
{var node_40440 = cljs.core.first.call(null,seq__40420_40434__$1);goog.dom.forms.setValue(node_40440,value);
{
var G__40441 = cljs.core.next.call(null,seq__40420_40434__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40420_40424 = G__40441;
chunk__40421_40425 = G__40442;
count__40422_40426 = G__40443;
i__40423_40427 = G__40444;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__11540__auto__ = allows_inner_html_QMARK_;if(and__11540__auto__)
{var and__11540__auto____$1 = (function (){var or__11552__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__11540__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var value_40455 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40451_40456 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40452_40457 = null;var count__40453_40458 = (0);var i__40454_40459 = (0);while(true){
if((i__40454_40459 < count__40453_40458))
{var node_40460 = cljs.core._nth.call(null,chunk__40452_40457,i__40454_40459);node_40460.innerHTML = value_40455;
{
var G__40461 = seq__40451_40456;
var G__40462 = chunk__40452_40457;
var G__40463 = count__40453_40458;
var G__40464 = (i__40454_40459 + (1));
seq__40451_40456 = G__40461;
chunk__40452_40457 = G__40462;
count__40453_40458 = G__40463;
i__40454_40459 = G__40464;
continue;
}
} else
{var temp__4126__auto___40465 = cljs.core.seq.call(null,seq__40451_40456);if(temp__4126__auto___40465)
{var seq__40451_40466__$1 = temp__4126__auto___40465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40451_40466__$1))
{var c__12321__auto___40467 = cljs.core.chunk_first.call(null,seq__40451_40466__$1);{
var G__40468 = cljs.core.chunk_rest.call(null,seq__40451_40466__$1);
var G__40469 = c__12321__auto___40467;
var G__40470 = cljs.core.count.call(null,c__12321__auto___40467);
var G__40471 = (0);
seq__40451_40456 = G__40468;
chunk__40452_40457 = G__40469;
count__40453_40458 = G__40470;
i__40454_40459 = G__40471;
continue;
}
} else
{var node_40472 = cljs.core.first.call(null,seq__40451_40466__$1);node_40472.innerHTML = value_40455;
{
var G__40473 = cljs.core.next.call(null,seq__40451_40466__$1);
var G__40474 = null;
var G__40475 = (0);
var G__40476 = (0);
seq__40451_40456 = G__40473;
chunk__40452_40457 = G__40474;
count__40453_40458 = G__40475;
i__40454_40459 = G__40476;
continue;
}
}
} else
{}
}
break;
}
}catch (e40450){if((e40450 instanceof Error))
{var e_40477 = e40450;domina.replace_children_BANG_.call(null,content,value_40455);
} else
{throw e40450;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__11540__auto__ = bubble;if(cljs.core.truth_(and__11540__auto__))
{return (value == null);
} else
{return and__11540__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__11552__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40484_40488 = cljs.core.seq.call(null,children);var chunk__40485_40489 = null;var count__40486_40490 = (0);var i__40487_40491 = (0);while(true){
if((i__40487_40491 < count__40486_40490))
{var child_40492 = cljs.core._nth.call(null,chunk__40485_40489,i__40487_40491);frag.appendChild(child_40492);
{
var G__40493 = seq__40484_40488;
var G__40494 = chunk__40485_40489;
var G__40495 = count__40486_40490;
var G__40496 = (i__40487_40491 + (1));
seq__40484_40488 = G__40493;
chunk__40485_40489 = G__40494;
count__40486_40490 = G__40495;
i__40487_40491 = G__40496;
continue;
}
} else
{var temp__4126__auto___40497 = cljs.core.seq.call(null,seq__40484_40488);if(temp__4126__auto___40497)
{var seq__40484_40498__$1 = temp__4126__auto___40497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40484_40498__$1))
{var c__12321__auto___40499 = cljs.core.chunk_first.call(null,seq__40484_40498__$1);{
var G__40500 = cljs.core.chunk_rest.call(null,seq__40484_40498__$1);
var G__40501 = c__12321__auto___40499;
var G__40502 = cljs.core.count.call(null,c__12321__auto___40499);
var G__40503 = (0);
seq__40484_40488 = G__40500;
chunk__40485_40489 = G__40501;
count__40486_40490 = G__40502;
i__40487_40491 = G__40503;
continue;
}
} else
{var child_40504 = cljs.core.first.call(null,seq__40484_40498__$1);frag.appendChild(child_40504);
{
var G__40505 = cljs.core.next.call(null,seq__40484_40498__$1);
var G__40506 = null;
var G__40507 = (0);
var G__40508 = (0);
seq__40484_40488 = G__40505;
chunk__40485_40489 = G__40506;
count__40486_40490 = G__40507;
i__40487_40491 = G__40508;
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
return (function (p1__40478_SHARP_,p2__40479_SHARP_){return f.call(null,p1__40478_SHARP_,p2__40479_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__11540__auto__ = obj;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__11540__auto____$1)
{return obj.length;
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
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
{if((function (){var G__40510 = list_thing;if(G__40510)
{var bit__12215__auto__ = (G__40510.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12215__auto__) || (G__40510.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40510.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40510);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40510);
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
{if((function (){var G__40511 = content;if(G__40511)
{var bit__12215__auto__ = (G__40511.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12215__auto__) || (G__40511.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40511);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40511);
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
{if((function (){var G__40512 = content;if(G__40512)
{var bit__12215__auto__ = (G__40512.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12215__auto__) || (G__40512.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40512.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40512);
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

//# sourceMappingURL=domina.js.map