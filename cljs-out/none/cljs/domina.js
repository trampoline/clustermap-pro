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
var opt_wrapper_37709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_37711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_37711,opt_wrapper_37709,table_section_wrapper_37710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_37709,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_37710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_37710,cell_wrapper_37711,table_section_wrapper_37710,table_section_wrapper_37710]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__11502__auto__ = div.firstChild;if(cljs.core.truth_(and__11502__auto__))
{return div.firstChild.childNodes;
} else
{return and__11502__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__37716 = cljs.core.seq.call(null,tbody);var chunk__37717 = null;var count__37718 = (0);var i__37719 = (0);while(true){
if((i__37719 < count__37718))
{var child = cljs.core._nth.call(null,chunk__37717,i__37719);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37720 = seq__37716;
var G__37721 = chunk__37717;
var G__37722 = count__37718;
var G__37723 = (i__37719 + (1));
seq__37716 = G__37720;
chunk__37717 = G__37721;
count__37718 = G__37722;
i__37719 = G__37723;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37716);if(temp__4126__auto__)
{var seq__37716__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37716__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__37716__$1);{
var G__37724 = cljs.core.chunk_rest.call(null,seq__37716__$1);
var G__37725 = c__12283__auto__;
var G__37726 = cljs.core.count.call(null,c__12283__auto__);
var G__37727 = (0);
seq__37716 = G__37724;
chunk__37717 = G__37725;
count__37718 = G__37726;
i__37719 = G__37727;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37716__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37728 = cljs.core.next.call(null,seq__37716__$1);
var G__37729 = null;
var G__37730 = (0);
var G__37731 = (0);
seq__37716 = G__37728;
chunk__37717 = G__37729;
count__37718 = G__37730;
i__37719 = G__37731;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__37733 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37733,(0),null);var start_wrap = cljs.core.nth.call(null,vec__37733,(1),null);var end_wrap = cljs.core.nth.call(null,vec__37733,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__37734 = wrapper.lastChild;
var G__37735 = (level - (1));
wrapper = G__37734;
level = G__37735;
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
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__11502__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__11502__auto__;
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
domina.DomContent = (function (){var obj37737 = {};return obj37737;
})();
domina.nodes = (function nodes(content){if((function (){var and__11502__auto__ = content;if(and__11502__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__11502__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__12150__auto__ = (((content == null))?null:content);return (function (){var or__11514__auto__ = (domina.nodes[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.nodes["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__11502__auto__ = nodeseq;if(and__11502__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__11502__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__12150__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__11514__auto__ = (domina.single_node[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.single_node["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__11502__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__11502__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__11502__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__37738){
var mesg = cljs.core.seq(arglist__37738);
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
log.cljs$lang$applyTo = (function (arglist__37739){
var mesg = cljs.core.seq(arglist__37739);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37740){
var contents = cljs.core.seq(arglist__37740);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37741_SHARP_){return p1__37741_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37742_SHARP_,p2__37743_SHARP_){return goog.dom.insertChildAt(p1__37742_SHARP_,p2__37743_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37745_SHARP_,p2__37744_SHARP_){return goog.dom.insertSiblingBefore(p2__37744_SHARP_,p1__37745_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37747_SHARP_,p2__37746_SHARP_){return goog.dom.insertSiblingAfter(p2__37746_SHARP_,p1__37747_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37749_SHARP_,p2__37748_SHARP_){return goog.dom.replaceNode(p2__37748_SHARP_,p1__37749_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37754_37758 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37755_37759 = null;var count__37756_37760 = (0);var i__37757_37761 = (0);while(true){
if((i__37757_37761 < count__37756_37760))
{var n_37762 = cljs.core._nth.call(null,chunk__37755_37759,i__37757_37761);goog.style.setStyle(n_37762,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37763 = seq__37754_37758;
var G__37764 = chunk__37755_37759;
var G__37765 = count__37756_37760;
var G__37766 = (i__37757_37761 + (1));
seq__37754_37758 = G__37763;
chunk__37755_37759 = G__37764;
count__37756_37760 = G__37765;
i__37757_37761 = G__37766;
continue;
}
} else
{var temp__4126__auto___37767 = cljs.core.seq.call(null,seq__37754_37758);if(temp__4126__auto___37767)
{var seq__37754_37768__$1 = temp__4126__auto___37767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37754_37768__$1))
{var c__12283__auto___37769 = cljs.core.chunk_first.call(null,seq__37754_37768__$1);{
var G__37770 = cljs.core.chunk_rest.call(null,seq__37754_37768__$1);
var G__37771 = c__12283__auto___37769;
var G__37772 = cljs.core.count.call(null,c__12283__auto___37769);
var G__37773 = (0);
seq__37754_37758 = G__37770;
chunk__37755_37759 = G__37771;
count__37756_37760 = G__37772;
i__37757_37761 = G__37773;
continue;
}
} else
{var n_37774 = cljs.core.first.call(null,seq__37754_37768__$1);goog.style.setStyle(n_37774,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37775 = cljs.core.next.call(null,seq__37754_37768__$1);
var G__37776 = null;
var G__37777 = (0);
var G__37778 = (0);
seq__37754_37758 = G__37775;
chunk__37755_37759 = G__37776;
count__37756_37760 = G__37777;
i__37757_37761 = G__37778;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37779){
var content = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var name = cljs.core.first(arglist__37779);
var value = cljs.core.rest(arglist__37779);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37784_37788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37785_37789 = null;var count__37786_37790 = (0);var i__37787_37791 = (0);while(true){
if((i__37787_37791 < count__37786_37790))
{var n_37792 = cljs.core._nth.call(null,chunk__37785_37789,i__37787_37791);n_37792.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37793 = seq__37784_37788;
var G__37794 = chunk__37785_37789;
var G__37795 = count__37786_37790;
var G__37796 = (i__37787_37791 + (1));
seq__37784_37788 = G__37793;
chunk__37785_37789 = G__37794;
count__37786_37790 = G__37795;
i__37787_37791 = G__37796;
continue;
}
} else
{var temp__4126__auto___37797 = cljs.core.seq.call(null,seq__37784_37788);if(temp__4126__auto___37797)
{var seq__37784_37798__$1 = temp__4126__auto___37797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37784_37798__$1))
{var c__12283__auto___37799 = cljs.core.chunk_first.call(null,seq__37784_37798__$1);{
var G__37800 = cljs.core.chunk_rest.call(null,seq__37784_37798__$1);
var G__37801 = c__12283__auto___37799;
var G__37802 = cljs.core.count.call(null,c__12283__auto___37799);
var G__37803 = (0);
seq__37784_37788 = G__37800;
chunk__37785_37789 = G__37801;
count__37786_37790 = G__37802;
i__37787_37791 = G__37803;
continue;
}
} else
{var n_37804 = cljs.core.first.call(null,seq__37784_37798__$1);n_37804.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37805 = cljs.core.next.call(null,seq__37784_37798__$1);
var G__37806 = null;
var G__37807 = (0);
var G__37808 = (0);
seq__37784_37788 = G__37805;
chunk__37785_37789 = G__37806;
count__37786_37790 = G__37807;
i__37787_37791 = G__37808;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37809){
var content = cljs.core.first(arglist__37809);
arglist__37809 = cljs.core.next(arglist__37809);
var name = cljs.core.first(arglist__37809);
var value = cljs.core.rest(arglist__37809);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37814_37818 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37815_37819 = null;var count__37816_37820 = (0);var i__37817_37821 = (0);while(true){
if((i__37817_37821 < count__37816_37820))
{var n_37822 = cljs.core._nth.call(null,chunk__37815_37819,i__37817_37821);n_37822.removeAttribute(cljs.core.name.call(null,name));
{
var G__37823 = seq__37814_37818;
var G__37824 = chunk__37815_37819;
var G__37825 = count__37816_37820;
var G__37826 = (i__37817_37821 + (1));
seq__37814_37818 = G__37823;
chunk__37815_37819 = G__37824;
count__37816_37820 = G__37825;
i__37817_37821 = G__37826;
continue;
}
} else
{var temp__4126__auto___37827 = cljs.core.seq.call(null,seq__37814_37818);if(temp__4126__auto___37827)
{var seq__37814_37828__$1 = temp__4126__auto___37827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37814_37828__$1))
{var c__12283__auto___37829 = cljs.core.chunk_first.call(null,seq__37814_37828__$1);{
var G__37830 = cljs.core.chunk_rest.call(null,seq__37814_37828__$1);
var G__37831 = c__12283__auto___37829;
var G__37832 = cljs.core.count.call(null,c__12283__auto___37829);
var G__37833 = (0);
seq__37814_37818 = G__37830;
chunk__37815_37819 = G__37831;
count__37816_37820 = G__37832;
i__37817_37821 = G__37833;
continue;
}
} else
{var n_37834 = cljs.core.first.call(null,seq__37814_37828__$1);n_37834.removeAttribute(cljs.core.name.call(null,name));
{
var G__37835 = cljs.core.next.call(null,seq__37814_37828__$1);
var G__37836 = null;
var G__37837 = (0);
var G__37838 = (0);
seq__37814_37818 = G__37835;
chunk__37815_37819 = G__37836;
count__37816_37820 = G__37837;
i__37817_37821 = G__37838;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37840 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37840,(0),null);var v = cljs.core.nth.call(null,vec__37840,(1),null);if(cljs.core.truth_((function (){var and__11502__auto__ = k;if(cljs.core.truth_(and__11502__auto__))
{return v;
} else
{return and__11502__auto__;
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
return (function (p1__37841_SHARP_){var attr = attrs__$1.item(p1__37841_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37848_37854 = cljs.core.seq.call(null,styles);var chunk__37849_37855 = null;var count__37850_37856 = (0);var i__37851_37857 = (0);while(true){
if((i__37851_37857 < count__37850_37856))
{var vec__37852_37858 = cljs.core._nth.call(null,chunk__37849_37855,i__37851_37857);var name_37859 = cljs.core.nth.call(null,vec__37852_37858,(0),null);var value_37860 = cljs.core.nth.call(null,vec__37852_37858,(1),null);domina.set_style_BANG_.call(null,content,name_37859,value_37860);
{
var G__37861 = seq__37848_37854;
var G__37862 = chunk__37849_37855;
var G__37863 = count__37850_37856;
var G__37864 = (i__37851_37857 + (1));
seq__37848_37854 = G__37861;
chunk__37849_37855 = G__37862;
count__37850_37856 = G__37863;
i__37851_37857 = G__37864;
continue;
}
} else
{var temp__4126__auto___37865 = cljs.core.seq.call(null,seq__37848_37854);if(temp__4126__auto___37865)
{var seq__37848_37866__$1 = temp__4126__auto___37865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37848_37866__$1))
{var c__12283__auto___37867 = cljs.core.chunk_first.call(null,seq__37848_37866__$1);{
var G__37868 = cljs.core.chunk_rest.call(null,seq__37848_37866__$1);
var G__37869 = c__12283__auto___37867;
var G__37870 = cljs.core.count.call(null,c__12283__auto___37867);
var G__37871 = (0);
seq__37848_37854 = G__37868;
chunk__37849_37855 = G__37869;
count__37850_37856 = G__37870;
i__37851_37857 = G__37871;
continue;
}
} else
{var vec__37853_37872 = cljs.core.first.call(null,seq__37848_37866__$1);var name_37873 = cljs.core.nth.call(null,vec__37853_37872,(0),null);var value_37874 = cljs.core.nth.call(null,vec__37853_37872,(1),null);domina.set_style_BANG_.call(null,content,name_37873,value_37874);
{
var G__37875 = cljs.core.next.call(null,seq__37848_37866__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37848_37854 = G__37875;
chunk__37849_37855 = G__37876;
count__37850_37856 = G__37877;
i__37851_37857 = G__37878;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37885_37891 = cljs.core.seq.call(null,attrs);var chunk__37886_37892 = null;var count__37887_37893 = (0);var i__37888_37894 = (0);while(true){
if((i__37888_37894 < count__37887_37893))
{var vec__37889_37895 = cljs.core._nth.call(null,chunk__37886_37892,i__37888_37894);var name_37896 = cljs.core.nth.call(null,vec__37889_37895,(0),null);var value_37897 = cljs.core.nth.call(null,vec__37889_37895,(1),null);domina.set_attr_BANG_.call(null,content,name_37896,value_37897);
{
var G__37898 = seq__37885_37891;
var G__37899 = chunk__37886_37892;
var G__37900 = count__37887_37893;
var G__37901 = (i__37888_37894 + (1));
seq__37885_37891 = G__37898;
chunk__37886_37892 = G__37899;
count__37887_37893 = G__37900;
i__37888_37894 = G__37901;
continue;
}
} else
{var temp__4126__auto___37902 = cljs.core.seq.call(null,seq__37885_37891);if(temp__4126__auto___37902)
{var seq__37885_37903__$1 = temp__4126__auto___37902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37885_37903__$1))
{var c__12283__auto___37904 = cljs.core.chunk_first.call(null,seq__37885_37903__$1);{
var G__37905 = cljs.core.chunk_rest.call(null,seq__37885_37903__$1);
var G__37906 = c__12283__auto___37904;
var G__37907 = cljs.core.count.call(null,c__12283__auto___37904);
var G__37908 = (0);
seq__37885_37891 = G__37905;
chunk__37886_37892 = G__37906;
count__37887_37893 = G__37907;
i__37888_37894 = G__37908;
continue;
}
} else
{var vec__37890_37909 = cljs.core.first.call(null,seq__37885_37903__$1);var name_37910 = cljs.core.nth.call(null,vec__37890_37909,(0),null);var value_37911 = cljs.core.nth.call(null,vec__37890_37909,(1),null);domina.set_attr_BANG_.call(null,content,name_37910,value_37911);
{
var G__37912 = cljs.core.next.call(null,seq__37885_37903__$1);
var G__37913 = null;
var G__37914 = (0);
var G__37915 = (0);
seq__37885_37891 = G__37912;
chunk__37886_37892 = G__37913;
count__37887_37893 = G__37914;
i__37888_37894 = G__37915;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37920_37924 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37921_37925 = null;var count__37922_37926 = (0);var i__37923_37927 = (0);while(true){
if((i__37923_37927 < count__37922_37926))
{var node_37928 = cljs.core._nth.call(null,chunk__37921_37925,i__37923_37927);goog.dom.classes.add(node_37928,class$);
{
var G__37929 = seq__37920_37924;
var G__37930 = chunk__37921_37925;
var G__37931 = count__37922_37926;
var G__37932 = (i__37923_37927 + (1));
seq__37920_37924 = G__37929;
chunk__37921_37925 = G__37930;
count__37922_37926 = G__37931;
i__37923_37927 = G__37932;
continue;
}
} else
{var temp__4126__auto___37933 = cljs.core.seq.call(null,seq__37920_37924);if(temp__4126__auto___37933)
{var seq__37920_37934__$1 = temp__4126__auto___37933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37920_37934__$1))
{var c__12283__auto___37935 = cljs.core.chunk_first.call(null,seq__37920_37934__$1);{
var G__37936 = cljs.core.chunk_rest.call(null,seq__37920_37934__$1);
var G__37937 = c__12283__auto___37935;
var G__37938 = cljs.core.count.call(null,c__12283__auto___37935);
var G__37939 = (0);
seq__37920_37924 = G__37936;
chunk__37921_37925 = G__37937;
count__37922_37926 = G__37938;
i__37923_37927 = G__37939;
continue;
}
} else
{var node_37940 = cljs.core.first.call(null,seq__37920_37934__$1);goog.dom.classes.add(node_37940,class$);
{
var G__37941 = cljs.core.next.call(null,seq__37920_37934__$1);
var G__37942 = null;
var G__37943 = (0);
var G__37944 = (0);
seq__37920_37924 = G__37941;
chunk__37921_37925 = G__37942;
count__37922_37926 = G__37943;
i__37923_37927 = G__37944;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37949_37953 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37950_37954 = null;var count__37951_37955 = (0);var i__37952_37956 = (0);while(true){
if((i__37952_37956 < count__37951_37955))
{var node_37957 = cljs.core._nth.call(null,chunk__37950_37954,i__37952_37956);goog.dom.classes.remove(node_37957,class$);
{
var G__37958 = seq__37949_37953;
var G__37959 = chunk__37950_37954;
var G__37960 = count__37951_37955;
var G__37961 = (i__37952_37956 + (1));
seq__37949_37953 = G__37958;
chunk__37950_37954 = G__37959;
count__37951_37955 = G__37960;
i__37952_37956 = G__37961;
continue;
}
} else
{var temp__4126__auto___37962 = cljs.core.seq.call(null,seq__37949_37953);if(temp__4126__auto___37962)
{var seq__37949_37963__$1 = temp__4126__auto___37962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37949_37963__$1))
{var c__12283__auto___37964 = cljs.core.chunk_first.call(null,seq__37949_37963__$1);{
var G__37965 = cljs.core.chunk_rest.call(null,seq__37949_37963__$1);
var G__37966 = c__12283__auto___37964;
var G__37967 = cljs.core.count.call(null,c__12283__auto___37964);
var G__37968 = (0);
seq__37949_37953 = G__37965;
chunk__37950_37954 = G__37966;
count__37951_37955 = G__37967;
i__37952_37956 = G__37968;
continue;
}
} else
{var node_37969 = cljs.core.first.call(null,seq__37949_37963__$1);goog.dom.classes.remove(node_37969,class$);
{
var G__37970 = cljs.core.next.call(null,seq__37949_37963__$1);
var G__37971 = null;
var G__37972 = (0);
var G__37973 = (0);
seq__37949_37953 = G__37970;
chunk__37950_37954 = G__37971;
count__37951_37955 = G__37972;
i__37952_37956 = G__37973;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37978_37982 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37979_37983 = null;var count__37980_37984 = (0);var i__37981_37985 = (0);while(true){
if((i__37981_37985 < count__37980_37984))
{var node_37986 = cljs.core._nth.call(null,chunk__37979_37983,i__37981_37985);goog.dom.classes.toggle(node_37986,class$);
{
var G__37987 = seq__37978_37982;
var G__37988 = chunk__37979_37983;
var G__37989 = count__37980_37984;
var G__37990 = (i__37981_37985 + (1));
seq__37978_37982 = G__37987;
chunk__37979_37983 = G__37988;
count__37980_37984 = G__37989;
i__37981_37985 = G__37990;
continue;
}
} else
{var temp__4126__auto___37991 = cljs.core.seq.call(null,seq__37978_37982);if(temp__4126__auto___37991)
{var seq__37978_37992__$1 = temp__4126__auto___37991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37978_37992__$1))
{var c__12283__auto___37993 = cljs.core.chunk_first.call(null,seq__37978_37992__$1);{
var G__37994 = cljs.core.chunk_rest.call(null,seq__37978_37992__$1);
var G__37995 = c__12283__auto___37993;
var G__37996 = cljs.core.count.call(null,c__12283__auto___37993);
var G__37997 = (0);
seq__37978_37982 = G__37994;
chunk__37979_37983 = G__37995;
count__37980_37984 = G__37996;
i__37981_37985 = G__37997;
continue;
}
} else
{var node_37998 = cljs.core.first.call(null,seq__37978_37992__$1);goog.dom.classes.toggle(node_37998,class$);
{
var G__37999 = cljs.core.next.call(null,seq__37978_37992__$1);
var G__38000 = null;
var G__38001 = (0);
var G__38002 = (0);
seq__37978_37982 = G__37999;
chunk__37979_37983 = G__38000;
count__37980_37984 = G__38001;
i__37981_37985 = G__38002;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38011__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38007_38012 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38008_38013 = null;var count__38009_38014 = (0);var i__38010_38015 = (0);while(true){
if((i__38010_38015 < count__38009_38014))
{var node_38016 = cljs.core._nth.call(null,chunk__38008_38013,i__38010_38015);goog.dom.classes.set(node_38016,classes_38011__$1);
{
var G__38017 = seq__38007_38012;
var G__38018 = chunk__38008_38013;
var G__38019 = count__38009_38014;
var G__38020 = (i__38010_38015 + (1));
seq__38007_38012 = G__38017;
chunk__38008_38013 = G__38018;
count__38009_38014 = G__38019;
i__38010_38015 = G__38020;
continue;
}
} else
{var temp__4126__auto___38021 = cljs.core.seq.call(null,seq__38007_38012);if(temp__4126__auto___38021)
{var seq__38007_38022__$1 = temp__4126__auto___38021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38007_38022__$1))
{var c__12283__auto___38023 = cljs.core.chunk_first.call(null,seq__38007_38022__$1);{
var G__38024 = cljs.core.chunk_rest.call(null,seq__38007_38022__$1);
var G__38025 = c__12283__auto___38023;
var G__38026 = cljs.core.count.call(null,c__12283__auto___38023);
var G__38027 = (0);
seq__38007_38012 = G__38024;
chunk__38008_38013 = G__38025;
count__38009_38014 = G__38026;
i__38010_38015 = G__38027;
continue;
}
} else
{var node_38028 = cljs.core.first.call(null,seq__38007_38022__$1);goog.dom.classes.set(node_38028,classes_38011__$1);
{
var G__38029 = cljs.core.next.call(null,seq__38007_38022__$1);
var G__38030 = null;
var G__38031 = (0);
var G__38032 = (0);
seq__38007_38012 = G__38029;
chunk__38008_38013 = G__38030;
count__38009_38014 = G__38031;
i__38010_38015 = G__38032;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38037_38041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38038_38042 = null;var count__38039_38043 = (0);var i__38040_38044 = (0);while(true){
if((i__38040_38044 < count__38039_38043))
{var node_38045 = cljs.core._nth.call(null,chunk__38038_38042,i__38040_38044);goog.dom.setTextContent(node_38045,value);
{
var G__38046 = seq__38037_38041;
var G__38047 = chunk__38038_38042;
var G__38048 = count__38039_38043;
var G__38049 = (i__38040_38044 + (1));
seq__38037_38041 = G__38046;
chunk__38038_38042 = G__38047;
count__38039_38043 = G__38048;
i__38040_38044 = G__38049;
continue;
}
} else
{var temp__4126__auto___38050 = cljs.core.seq.call(null,seq__38037_38041);if(temp__4126__auto___38050)
{var seq__38037_38051__$1 = temp__4126__auto___38050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38037_38051__$1))
{var c__12283__auto___38052 = cljs.core.chunk_first.call(null,seq__38037_38051__$1);{
var G__38053 = cljs.core.chunk_rest.call(null,seq__38037_38051__$1);
var G__38054 = c__12283__auto___38052;
var G__38055 = cljs.core.count.call(null,c__12283__auto___38052);
var G__38056 = (0);
seq__38037_38041 = G__38053;
chunk__38038_38042 = G__38054;
count__38039_38043 = G__38055;
i__38040_38044 = G__38056;
continue;
}
} else
{var node_38057 = cljs.core.first.call(null,seq__38037_38051__$1);goog.dom.setTextContent(node_38057,value);
{
var G__38058 = cljs.core.next.call(null,seq__38037_38051__$1);
var G__38059 = null;
var G__38060 = (0);
var G__38061 = (0);
seq__38037_38041 = G__38058;
chunk__38038_38042 = G__38059;
count__38039_38043 = G__38060;
i__38040_38044 = G__38061;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38066_38070 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38067_38071 = null;var count__38068_38072 = (0);var i__38069_38073 = (0);while(true){
if((i__38069_38073 < count__38068_38072))
{var node_38074 = cljs.core._nth.call(null,chunk__38067_38071,i__38069_38073);goog.dom.forms.setValue(node_38074,value);
{
var G__38075 = seq__38066_38070;
var G__38076 = chunk__38067_38071;
var G__38077 = count__38068_38072;
var G__38078 = (i__38069_38073 + (1));
seq__38066_38070 = G__38075;
chunk__38067_38071 = G__38076;
count__38068_38072 = G__38077;
i__38069_38073 = G__38078;
continue;
}
} else
{var temp__4126__auto___38079 = cljs.core.seq.call(null,seq__38066_38070);if(temp__4126__auto___38079)
{var seq__38066_38080__$1 = temp__4126__auto___38079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38066_38080__$1))
{var c__12283__auto___38081 = cljs.core.chunk_first.call(null,seq__38066_38080__$1);{
var G__38082 = cljs.core.chunk_rest.call(null,seq__38066_38080__$1);
var G__38083 = c__12283__auto___38081;
var G__38084 = cljs.core.count.call(null,c__12283__auto___38081);
var G__38085 = (0);
seq__38066_38070 = G__38082;
chunk__38067_38071 = G__38083;
count__38068_38072 = G__38084;
i__38069_38073 = G__38085;
continue;
}
} else
{var node_38086 = cljs.core.first.call(null,seq__38066_38080__$1);goog.dom.forms.setValue(node_38086,value);
{
var G__38087 = cljs.core.next.call(null,seq__38066_38080__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__38066_38070 = G__38087;
chunk__38067_38071 = G__38088;
count__38068_38072 = G__38089;
i__38069_38073 = G__38090;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__11502__auto__ = allows_inner_html_QMARK_;if(and__11502__auto__)
{var and__11502__auto____$1 = (function (){var or__11514__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__11502__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__11502__auto____$1;
}
} else
{return and__11502__auto__;
}
})()))
{var value_38101 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38097_38102 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38098_38103 = null;var count__38099_38104 = (0);var i__38100_38105 = (0);while(true){
if((i__38100_38105 < count__38099_38104))
{var node_38106 = cljs.core._nth.call(null,chunk__38098_38103,i__38100_38105);node_38106.innerHTML = value_38101;
{
var G__38107 = seq__38097_38102;
var G__38108 = chunk__38098_38103;
var G__38109 = count__38099_38104;
var G__38110 = (i__38100_38105 + (1));
seq__38097_38102 = G__38107;
chunk__38098_38103 = G__38108;
count__38099_38104 = G__38109;
i__38100_38105 = G__38110;
continue;
}
} else
{var temp__4126__auto___38111 = cljs.core.seq.call(null,seq__38097_38102);if(temp__4126__auto___38111)
{var seq__38097_38112__$1 = temp__4126__auto___38111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38097_38112__$1))
{var c__12283__auto___38113 = cljs.core.chunk_first.call(null,seq__38097_38112__$1);{
var G__38114 = cljs.core.chunk_rest.call(null,seq__38097_38112__$1);
var G__38115 = c__12283__auto___38113;
var G__38116 = cljs.core.count.call(null,c__12283__auto___38113);
var G__38117 = (0);
seq__38097_38102 = G__38114;
chunk__38098_38103 = G__38115;
count__38099_38104 = G__38116;
i__38100_38105 = G__38117;
continue;
}
} else
{var node_38118 = cljs.core.first.call(null,seq__38097_38112__$1);node_38118.innerHTML = value_38101;
{
var G__38119 = cljs.core.next.call(null,seq__38097_38112__$1);
var G__38120 = null;
var G__38121 = (0);
var G__38122 = (0);
seq__38097_38102 = G__38119;
chunk__38098_38103 = G__38120;
count__38099_38104 = G__38121;
i__38100_38105 = G__38122;
continue;
}
}
} else
{}
}
break;
}
}catch (e38096){if((e38096 instanceof Error))
{var e_38123 = e38096;domina.replace_children_BANG_.call(null,content,value_38101);
} else
{throw e38096;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__11502__auto__ = bubble;if(cljs.core.truth_(and__11502__auto__))
{return (value == null);
} else
{return and__11502__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__11514__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38130_38134 = cljs.core.seq.call(null,children);var chunk__38131_38135 = null;var count__38132_38136 = (0);var i__38133_38137 = (0);while(true){
if((i__38133_38137 < count__38132_38136))
{var child_38138 = cljs.core._nth.call(null,chunk__38131_38135,i__38133_38137);frag.appendChild(child_38138);
{
var G__38139 = seq__38130_38134;
var G__38140 = chunk__38131_38135;
var G__38141 = count__38132_38136;
var G__38142 = (i__38133_38137 + (1));
seq__38130_38134 = G__38139;
chunk__38131_38135 = G__38140;
count__38132_38136 = G__38141;
i__38133_38137 = G__38142;
continue;
}
} else
{var temp__4126__auto___38143 = cljs.core.seq.call(null,seq__38130_38134);if(temp__4126__auto___38143)
{var seq__38130_38144__$1 = temp__4126__auto___38143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38130_38144__$1))
{var c__12283__auto___38145 = cljs.core.chunk_first.call(null,seq__38130_38144__$1);{
var G__38146 = cljs.core.chunk_rest.call(null,seq__38130_38144__$1);
var G__38147 = c__12283__auto___38145;
var G__38148 = cljs.core.count.call(null,c__12283__auto___38145);
var G__38149 = (0);
seq__38130_38134 = G__38146;
chunk__38131_38135 = G__38147;
count__38132_38136 = G__38148;
i__38133_38137 = G__38149;
continue;
}
} else
{var child_38150 = cljs.core.first.call(null,seq__38130_38144__$1);frag.appendChild(child_38150);
{
var G__38151 = cljs.core.next.call(null,seq__38130_38144__$1);
var G__38152 = null;
var G__38153 = (0);
var G__38154 = (0);
seq__38130_38134 = G__38151;
chunk__38131_38135 = G__38152;
count__38132_38136 = G__38153;
i__38133_38137 = G__38154;
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
return (function (p1__38124_SHARP_,p2__38125_SHARP_){return f.call(null,p1__38124_SHARP_,p2__38125_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__11502__auto__ = obj;if(cljs.core.truth_(and__11502__auto__))
{var and__11502__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__11502__auto____$1)
{return obj.length;
} else
{return and__11502__auto____$1;
}
} else
{return and__11502__auto__;
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
{if((function (){var G__38156 = list_thing;if(G__38156)
{var bit__12177__auto__ = (G__38156.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12177__auto__) || (G__38156.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38156);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38156);
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
{if((function (){var G__38157 = content;if(G__38157)
{var bit__12177__auto__ = (G__38157.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12177__auto__) || (G__38157.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38157.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38157);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38157);
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
{if((function (){var G__38158 = content;if(G__38158)
{var bit__12177__auto__ = (G__38158.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__12177__auto__) || (G__38158.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38158.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38158);
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