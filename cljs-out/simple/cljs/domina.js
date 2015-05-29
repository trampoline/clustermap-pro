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
var opt_wrapper_23702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_23704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23704,opt_wrapper_23702,table_section_wrapper_23703,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_23702,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_23703,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23703,cell_wrapper_23704,table_section_wrapper_23703,table_section_wrapper_23703]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__23709 = cljs.core.seq.call(null,tbody);var chunk__23710 = null;var count__23711 = (0);var i__23712 = (0);while(true){
if((i__23712 < count__23711))
{var child = cljs.core._nth.call(null,chunk__23710,i__23712);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23713 = seq__23709;
var G__23714 = chunk__23710;
var G__23715 = count__23711;
var G__23716 = (i__23712 + (1));
seq__23709 = G__23713;
chunk__23710 = G__23714;
count__23711 = G__23715;
i__23712 = G__23716;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23709);if(temp__4126__auto__)
{var seq__23709__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23709__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23709__$1);{
var G__23717 = cljs.core.chunk_rest.call(null,seq__23709__$1);
var G__23718 = c__4408__auto__;
var G__23719 = cljs.core.count.call(null,c__4408__auto__);
var G__23720 = (0);
seq__23709 = G__23717;
chunk__23710 = G__23718;
count__23711 = G__23719;
i__23712 = G__23720;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__23709__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23721 = cljs.core.next.call(null,seq__23709__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23709 = G__23721;
chunk__23710 = G__23722;
count__23711 = G__23723;
i__23712 = G__23724;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__23726 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__23726,(0),null);var start_wrap = cljs.core.nth.call(null,vec__23726,(1),null);var end_wrap = cljs.core.nth.call(null,vec__23726,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__23727 = wrapper.lastChild;
var G__23728 = (level - (1));
wrapper = G__23727;
level = G__23728;
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
domina.DomContent = (function (){var obj23730 = {};return obj23730;
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
log_debug.cljs$lang$applyTo = (function (arglist__23731){
var mesg = cljs.core.seq(arglist__23731);
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
log.cljs$lang$applyTo = (function (arglist__23732){
var mesg = cljs.core.seq(arglist__23732);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23733){
var contents = cljs.core.seq(arglist__23733);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__23734_SHARP_){return p1__23734_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__23735_SHARP_,p2__23736_SHARP_){return goog.dom.insertChildAt(p1__23735_SHARP_,p2__23736_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23738_SHARP_,p2__23737_SHARP_){return goog.dom.insertSiblingBefore(p2__23737_SHARP_,p1__23738_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23740_SHARP_,p2__23739_SHARP_){return goog.dom.insertSiblingAfter(p2__23739_SHARP_,p1__23740_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__23742_SHARP_,p2__23741_SHARP_){return goog.dom.replaceNode(p2__23741_SHARP_,p1__23742_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23747_23751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23748_23752 = null;var count__23749_23753 = (0);var i__23750_23754 = (0);while(true){
if((i__23750_23754 < count__23749_23753))
{var n_23755 = cljs.core._nth.call(null,chunk__23748_23752,i__23750_23754);goog.style.setStyle(n_23755,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23756 = seq__23747_23751;
var G__23757 = chunk__23748_23752;
var G__23758 = count__23749_23753;
var G__23759 = (i__23750_23754 + (1));
seq__23747_23751 = G__23756;
chunk__23748_23752 = G__23757;
count__23749_23753 = G__23758;
i__23750_23754 = G__23759;
continue;
}
} else
{var temp__4126__auto___23760 = cljs.core.seq.call(null,seq__23747_23751);if(temp__4126__auto___23760)
{var seq__23747_23761__$1 = temp__4126__auto___23760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23747_23761__$1))
{var c__4408__auto___23762 = cljs.core.chunk_first.call(null,seq__23747_23761__$1);{
var G__23763 = cljs.core.chunk_rest.call(null,seq__23747_23761__$1);
var G__23764 = c__4408__auto___23762;
var G__23765 = cljs.core.count.call(null,c__4408__auto___23762);
var G__23766 = (0);
seq__23747_23751 = G__23763;
chunk__23748_23752 = G__23764;
count__23749_23753 = G__23765;
i__23750_23754 = G__23766;
continue;
}
} else
{var n_23767 = cljs.core.first.call(null,seq__23747_23761__$1);goog.style.setStyle(n_23767,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23768 = cljs.core.next.call(null,seq__23747_23761__$1);
var G__23769 = null;
var G__23770 = (0);
var G__23771 = (0);
seq__23747_23751 = G__23768;
chunk__23748_23752 = G__23769;
count__23749_23753 = G__23770;
i__23750_23754 = G__23771;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23772){
var content = cljs.core.first(arglist__23772);
arglist__23772 = cljs.core.next(arglist__23772);
var name = cljs.core.first(arglist__23772);
var value = cljs.core.rest(arglist__23772);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23777_23781 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23778_23782 = null;var count__23779_23783 = (0);var i__23780_23784 = (0);while(true){
if((i__23780_23784 < count__23779_23783))
{var n_23785 = cljs.core._nth.call(null,chunk__23778_23782,i__23780_23784);n_23785.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23786 = seq__23777_23781;
var G__23787 = chunk__23778_23782;
var G__23788 = count__23779_23783;
var G__23789 = (i__23780_23784 + (1));
seq__23777_23781 = G__23786;
chunk__23778_23782 = G__23787;
count__23779_23783 = G__23788;
i__23780_23784 = G__23789;
continue;
}
} else
{var temp__4126__auto___23790 = cljs.core.seq.call(null,seq__23777_23781);if(temp__4126__auto___23790)
{var seq__23777_23791__$1 = temp__4126__auto___23790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23777_23791__$1))
{var c__4408__auto___23792 = cljs.core.chunk_first.call(null,seq__23777_23791__$1);{
var G__23793 = cljs.core.chunk_rest.call(null,seq__23777_23791__$1);
var G__23794 = c__4408__auto___23792;
var G__23795 = cljs.core.count.call(null,c__4408__auto___23792);
var G__23796 = (0);
seq__23777_23781 = G__23793;
chunk__23778_23782 = G__23794;
count__23779_23783 = G__23795;
i__23780_23784 = G__23796;
continue;
}
} else
{var n_23797 = cljs.core.first.call(null,seq__23777_23791__$1);n_23797.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23798 = cljs.core.next.call(null,seq__23777_23791__$1);
var G__23799 = null;
var G__23800 = (0);
var G__23801 = (0);
seq__23777_23781 = G__23798;
chunk__23778_23782 = G__23799;
count__23779_23783 = G__23800;
i__23780_23784 = G__23801;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23802){
var content = cljs.core.first(arglist__23802);
arglist__23802 = cljs.core.next(arglist__23802);
var name = cljs.core.first(arglist__23802);
var value = cljs.core.rest(arglist__23802);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23807_23811 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23808_23812 = null;var count__23809_23813 = (0);var i__23810_23814 = (0);while(true){
if((i__23810_23814 < count__23809_23813))
{var n_23815 = cljs.core._nth.call(null,chunk__23808_23812,i__23810_23814);n_23815.removeAttribute(cljs.core.name.call(null,name));
{
var G__23816 = seq__23807_23811;
var G__23817 = chunk__23808_23812;
var G__23818 = count__23809_23813;
var G__23819 = (i__23810_23814 + (1));
seq__23807_23811 = G__23816;
chunk__23808_23812 = G__23817;
count__23809_23813 = G__23818;
i__23810_23814 = G__23819;
continue;
}
} else
{var temp__4126__auto___23820 = cljs.core.seq.call(null,seq__23807_23811);if(temp__4126__auto___23820)
{var seq__23807_23821__$1 = temp__4126__auto___23820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23807_23821__$1))
{var c__4408__auto___23822 = cljs.core.chunk_first.call(null,seq__23807_23821__$1);{
var G__23823 = cljs.core.chunk_rest.call(null,seq__23807_23821__$1);
var G__23824 = c__4408__auto___23822;
var G__23825 = cljs.core.count.call(null,c__4408__auto___23822);
var G__23826 = (0);
seq__23807_23811 = G__23823;
chunk__23808_23812 = G__23824;
count__23809_23813 = G__23825;
i__23810_23814 = G__23826;
continue;
}
} else
{var n_23827 = cljs.core.first.call(null,seq__23807_23821__$1);n_23827.removeAttribute(cljs.core.name.call(null,name));
{
var G__23828 = cljs.core.next.call(null,seq__23807_23821__$1);
var G__23829 = null;
var G__23830 = (0);
var G__23831 = (0);
seq__23807_23811 = G__23828;
chunk__23808_23812 = G__23829;
count__23809_23813 = G__23830;
i__23810_23814 = G__23831;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__23833 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__23833,(0),null);var v = cljs.core.nth.call(null,vec__23833,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__23834_SHARP_){var attr = attrs__$1.item(p1__23834_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23841_23847 = cljs.core.seq.call(null,styles);var chunk__23842_23848 = null;var count__23843_23849 = (0);var i__23844_23850 = (0);while(true){
if((i__23844_23850 < count__23843_23849))
{var vec__23845_23851 = cljs.core._nth.call(null,chunk__23842_23848,i__23844_23850);var name_23852 = cljs.core.nth.call(null,vec__23845_23851,(0),null);var value_23853 = cljs.core.nth.call(null,vec__23845_23851,(1),null);domina.set_style_BANG_.call(null,content,name_23852,value_23853);
{
var G__23854 = seq__23841_23847;
var G__23855 = chunk__23842_23848;
var G__23856 = count__23843_23849;
var G__23857 = (i__23844_23850 + (1));
seq__23841_23847 = G__23854;
chunk__23842_23848 = G__23855;
count__23843_23849 = G__23856;
i__23844_23850 = G__23857;
continue;
}
} else
{var temp__4126__auto___23858 = cljs.core.seq.call(null,seq__23841_23847);if(temp__4126__auto___23858)
{var seq__23841_23859__$1 = temp__4126__auto___23858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23841_23859__$1))
{var c__4408__auto___23860 = cljs.core.chunk_first.call(null,seq__23841_23859__$1);{
var G__23861 = cljs.core.chunk_rest.call(null,seq__23841_23859__$1);
var G__23862 = c__4408__auto___23860;
var G__23863 = cljs.core.count.call(null,c__4408__auto___23860);
var G__23864 = (0);
seq__23841_23847 = G__23861;
chunk__23842_23848 = G__23862;
count__23843_23849 = G__23863;
i__23844_23850 = G__23864;
continue;
}
} else
{var vec__23846_23865 = cljs.core.first.call(null,seq__23841_23859__$1);var name_23866 = cljs.core.nth.call(null,vec__23846_23865,(0),null);var value_23867 = cljs.core.nth.call(null,vec__23846_23865,(1),null);domina.set_style_BANG_.call(null,content,name_23866,value_23867);
{
var G__23868 = cljs.core.next.call(null,seq__23841_23859__$1);
var G__23869 = null;
var G__23870 = (0);
var G__23871 = (0);
seq__23841_23847 = G__23868;
chunk__23842_23848 = G__23869;
count__23843_23849 = G__23870;
i__23844_23850 = G__23871;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23878_23884 = cljs.core.seq.call(null,attrs);var chunk__23879_23885 = null;var count__23880_23886 = (0);var i__23881_23887 = (0);while(true){
if((i__23881_23887 < count__23880_23886))
{var vec__23882_23888 = cljs.core._nth.call(null,chunk__23879_23885,i__23881_23887);var name_23889 = cljs.core.nth.call(null,vec__23882_23888,(0),null);var value_23890 = cljs.core.nth.call(null,vec__23882_23888,(1),null);domina.set_attr_BANG_.call(null,content,name_23889,value_23890);
{
var G__23891 = seq__23878_23884;
var G__23892 = chunk__23879_23885;
var G__23893 = count__23880_23886;
var G__23894 = (i__23881_23887 + (1));
seq__23878_23884 = G__23891;
chunk__23879_23885 = G__23892;
count__23880_23886 = G__23893;
i__23881_23887 = G__23894;
continue;
}
} else
{var temp__4126__auto___23895 = cljs.core.seq.call(null,seq__23878_23884);if(temp__4126__auto___23895)
{var seq__23878_23896__$1 = temp__4126__auto___23895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23878_23896__$1))
{var c__4408__auto___23897 = cljs.core.chunk_first.call(null,seq__23878_23896__$1);{
var G__23898 = cljs.core.chunk_rest.call(null,seq__23878_23896__$1);
var G__23899 = c__4408__auto___23897;
var G__23900 = cljs.core.count.call(null,c__4408__auto___23897);
var G__23901 = (0);
seq__23878_23884 = G__23898;
chunk__23879_23885 = G__23899;
count__23880_23886 = G__23900;
i__23881_23887 = G__23901;
continue;
}
} else
{var vec__23883_23902 = cljs.core.first.call(null,seq__23878_23896__$1);var name_23903 = cljs.core.nth.call(null,vec__23883_23902,(0),null);var value_23904 = cljs.core.nth.call(null,vec__23883_23902,(1),null);domina.set_attr_BANG_.call(null,content,name_23903,value_23904);
{
var G__23905 = cljs.core.next.call(null,seq__23878_23896__$1);
var G__23906 = null;
var G__23907 = (0);
var G__23908 = (0);
seq__23878_23884 = G__23905;
chunk__23879_23885 = G__23906;
count__23880_23886 = G__23907;
i__23881_23887 = G__23908;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23913_23917 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23914_23918 = null;var count__23915_23919 = (0);var i__23916_23920 = (0);while(true){
if((i__23916_23920 < count__23915_23919))
{var node_23921 = cljs.core._nth.call(null,chunk__23914_23918,i__23916_23920);goog.dom.classes.add(node_23921,class$);
{
var G__23922 = seq__23913_23917;
var G__23923 = chunk__23914_23918;
var G__23924 = count__23915_23919;
var G__23925 = (i__23916_23920 + (1));
seq__23913_23917 = G__23922;
chunk__23914_23918 = G__23923;
count__23915_23919 = G__23924;
i__23916_23920 = G__23925;
continue;
}
} else
{var temp__4126__auto___23926 = cljs.core.seq.call(null,seq__23913_23917);if(temp__4126__auto___23926)
{var seq__23913_23927__$1 = temp__4126__auto___23926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23913_23927__$1))
{var c__4408__auto___23928 = cljs.core.chunk_first.call(null,seq__23913_23927__$1);{
var G__23929 = cljs.core.chunk_rest.call(null,seq__23913_23927__$1);
var G__23930 = c__4408__auto___23928;
var G__23931 = cljs.core.count.call(null,c__4408__auto___23928);
var G__23932 = (0);
seq__23913_23917 = G__23929;
chunk__23914_23918 = G__23930;
count__23915_23919 = G__23931;
i__23916_23920 = G__23932;
continue;
}
} else
{var node_23933 = cljs.core.first.call(null,seq__23913_23927__$1);goog.dom.classes.add(node_23933,class$);
{
var G__23934 = cljs.core.next.call(null,seq__23913_23927__$1);
var G__23935 = null;
var G__23936 = (0);
var G__23937 = (0);
seq__23913_23917 = G__23934;
chunk__23914_23918 = G__23935;
count__23915_23919 = G__23936;
i__23916_23920 = G__23937;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23942_23946 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23943_23947 = null;var count__23944_23948 = (0);var i__23945_23949 = (0);while(true){
if((i__23945_23949 < count__23944_23948))
{var node_23950 = cljs.core._nth.call(null,chunk__23943_23947,i__23945_23949);goog.dom.classes.remove(node_23950,class$);
{
var G__23951 = seq__23942_23946;
var G__23952 = chunk__23943_23947;
var G__23953 = count__23944_23948;
var G__23954 = (i__23945_23949 + (1));
seq__23942_23946 = G__23951;
chunk__23943_23947 = G__23952;
count__23944_23948 = G__23953;
i__23945_23949 = G__23954;
continue;
}
} else
{var temp__4126__auto___23955 = cljs.core.seq.call(null,seq__23942_23946);if(temp__4126__auto___23955)
{var seq__23942_23956__$1 = temp__4126__auto___23955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23942_23956__$1))
{var c__4408__auto___23957 = cljs.core.chunk_first.call(null,seq__23942_23956__$1);{
var G__23958 = cljs.core.chunk_rest.call(null,seq__23942_23956__$1);
var G__23959 = c__4408__auto___23957;
var G__23960 = cljs.core.count.call(null,c__4408__auto___23957);
var G__23961 = (0);
seq__23942_23946 = G__23958;
chunk__23943_23947 = G__23959;
count__23944_23948 = G__23960;
i__23945_23949 = G__23961;
continue;
}
} else
{var node_23962 = cljs.core.first.call(null,seq__23942_23956__$1);goog.dom.classes.remove(node_23962,class$);
{
var G__23963 = cljs.core.next.call(null,seq__23942_23956__$1);
var G__23964 = null;
var G__23965 = (0);
var G__23966 = (0);
seq__23942_23946 = G__23963;
chunk__23943_23947 = G__23964;
count__23944_23948 = G__23965;
i__23945_23949 = G__23966;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23971_23975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23972_23976 = null;var count__23973_23977 = (0);var i__23974_23978 = (0);while(true){
if((i__23974_23978 < count__23973_23977))
{var node_23979 = cljs.core._nth.call(null,chunk__23972_23976,i__23974_23978);goog.dom.classes.toggle(node_23979,class$);
{
var G__23980 = seq__23971_23975;
var G__23981 = chunk__23972_23976;
var G__23982 = count__23973_23977;
var G__23983 = (i__23974_23978 + (1));
seq__23971_23975 = G__23980;
chunk__23972_23976 = G__23981;
count__23973_23977 = G__23982;
i__23974_23978 = G__23983;
continue;
}
} else
{var temp__4126__auto___23984 = cljs.core.seq.call(null,seq__23971_23975);if(temp__4126__auto___23984)
{var seq__23971_23985__$1 = temp__4126__auto___23984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23971_23985__$1))
{var c__4408__auto___23986 = cljs.core.chunk_first.call(null,seq__23971_23985__$1);{
var G__23987 = cljs.core.chunk_rest.call(null,seq__23971_23985__$1);
var G__23988 = c__4408__auto___23986;
var G__23989 = cljs.core.count.call(null,c__4408__auto___23986);
var G__23990 = (0);
seq__23971_23975 = G__23987;
chunk__23972_23976 = G__23988;
count__23973_23977 = G__23989;
i__23974_23978 = G__23990;
continue;
}
} else
{var node_23991 = cljs.core.first.call(null,seq__23971_23985__$1);goog.dom.classes.toggle(node_23991,class$);
{
var G__23992 = cljs.core.next.call(null,seq__23971_23985__$1);
var G__23993 = null;
var G__23994 = (0);
var G__23995 = (0);
seq__23971_23975 = G__23992;
chunk__23972_23976 = G__23993;
count__23973_23977 = G__23994;
i__23974_23978 = G__23995;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24004__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24000_24005 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24001_24006 = null;var count__24002_24007 = (0);var i__24003_24008 = (0);while(true){
if((i__24003_24008 < count__24002_24007))
{var node_24009 = cljs.core._nth.call(null,chunk__24001_24006,i__24003_24008);goog.dom.classes.set(node_24009,classes_24004__$1);
{
var G__24010 = seq__24000_24005;
var G__24011 = chunk__24001_24006;
var G__24012 = count__24002_24007;
var G__24013 = (i__24003_24008 + (1));
seq__24000_24005 = G__24010;
chunk__24001_24006 = G__24011;
count__24002_24007 = G__24012;
i__24003_24008 = G__24013;
continue;
}
} else
{var temp__4126__auto___24014 = cljs.core.seq.call(null,seq__24000_24005);if(temp__4126__auto___24014)
{var seq__24000_24015__$1 = temp__4126__auto___24014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24000_24015__$1))
{var c__4408__auto___24016 = cljs.core.chunk_first.call(null,seq__24000_24015__$1);{
var G__24017 = cljs.core.chunk_rest.call(null,seq__24000_24015__$1);
var G__24018 = c__4408__auto___24016;
var G__24019 = cljs.core.count.call(null,c__4408__auto___24016);
var G__24020 = (0);
seq__24000_24005 = G__24017;
chunk__24001_24006 = G__24018;
count__24002_24007 = G__24019;
i__24003_24008 = G__24020;
continue;
}
} else
{var node_24021 = cljs.core.first.call(null,seq__24000_24015__$1);goog.dom.classes.set(node_24021,classes_24004__$1);
{
var G__24022 = cljs.core.next.call(null,seq__24000_24015__$1);
var G__24023 = null;
var G__24024 = (0);
var G__24025 = (0);
seq__24000_24005 = G__24022;
chunk__24001_24006 = G__24023;
count__24002_24007 = G__24024;
i__24003_24008 = G__24025;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24030_24034 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24031_24035 = null;var count__24032_24036 = (0);var i__24033_24037 = (0);while(true){
if((i__24033_24037 < count__24032_24036))
{var node_24038 = cljs.core._nth.call(null,chunk__24031_24035,i__24033_24037);goog.dom.setTextContent(node_24038,value);
{
var G__24039 = seq__24030_24034;
var G__24040 = chunk__24031_24035;
var G__24041 = count__24032_24036;
var G__24042 = (i__24033_24037 + (1));
seq__24030_24034 = G__24039;
chunk__24031_24035 = G__24040;
count__24032_24036 = G__24041;
i__24033_24037 = G__24042;
continue;
}
} else
{var temp__4126__auto___24043 = cljs.core.seq.call(null,seq__24030_24034);if(temp__4126__auto___24043)
{var seq__24030_24044__$1 = temp__4126__auto___24043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24030_24044__$1))
{var c__4408__auto___24045 = cljs.core.chunk_first.call(null,seq__24030_24044__$1);{
var G__24046 = cljs.core.chunk_rest.call(null,seq__24030_24044__$1);
var G__24047 = c__4408__auto___24045;
var G__24048 = cljs.core.count.call(null,c__4408__auto___24045);
var G__24049 = (0);
seq__24030_24034 = G__24046;
chunk__24031_24035 = G__24047;
count__24032_24036 = G__24048;
i__24033_24037 = G__24049;
continue;
}
} else
{var node_24050 = cljs.core.first.call(null,seq__24030_24044__$1);goog.dom.setTextContent(node_24050,value);
{
var G__24051 = cljs.core.next.call(null,seq__24030_24044__$1);
var G__24052 = null;
var G__24053 = (0);
var G__24054 = (0);
seq__24030_24034 = G__24051;
chunk__24031_24035 = G__24052;
count__24032_24036 = G__24053;
i__24033_24037 = G__24054;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24059_24063 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24060_24064 = null;var count__24061_24065 = (0);var i__24062_24066 = (0);while(true){
if((i__24062_24066 < count__24061_24065))
{var node_24067 = cljs.core._nth.call(null,chunk__24060_24064,i__24062_24066);goog.dom.forms.setValue(node_24067,value);
{
var G__24068 = seq__24059_24063;
var G__24069 = chunk__24060_24064;
var G__24070 = count__24061_24065;
var G__24071 = (i__24062_24066 + (1));
seq__24059_24063 = G__24068;
chunk__24060_24064 = G__24069;
count__24061_24065 = G__24070;
i__24062_24066 = G__24071;
continue;
}
} else
{var temp__4126__auto___24072 = cljs.core.seq.call(null,seq__24059_24063);if(temp__4126__auto___24072)
{var seq__24059_24073__$1 = temp__4126__auto___24072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24059_24073__$1))
{var c__4408__auto___24074 = cljs.core.chunk_first.call(null,seq__24059_24073__$1);{
var G__24075 = cljs.core.chunk_rest.call(null,seq__24059_24073__$1);
var G__24076 = c__4408__auto___24074;
var G__24077 = cljs.core.count.call(null,c__4408__auto___24074);
var G__24078 = (0);
seq__24059_24063 = G__24075;
chunk__24060_24064 = G__24076;
count__24061_24065 = G__24077;
i__24062_24066 = G__24078;
continue;
}
} else
{var node_24079 = cljs.core.first.call(null,seq__24059_24073__$1);goog.dom.forms.setValue(node_24079,value);
{
var G__24080 = cljs.core.next.call(null,seq__24059_24073__$1);
var G__24081 = null;
var G__24082 = (0);
var G__24083 = (0);
seq__24059_24063 = G__24080;
chunk__24060_24064 = G__24081;
count__24061_24065 = G__24082;
i__24062_24066 = G__24083;
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
{var value_24094 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24090_24095 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24091_24096 = null;var count__24092_24097 = (0);var i__24093_24098 = (0);while(true){
if((i__24093_24098 < count__24092_24097))
{var node_24099 = cljs.core._nth.call(null,chunk__24091_24096,i__24093_24098);node_24099.innerHTML = value_24094;
{
var G__24100 = seq__24090_24095;
var G__24101 = chunk__24091_24096;
var G__24102 = count__24092_24097;
var G__24103 = (i__24093_24098 + (1));
seq__24090_24095 = G__24100;
chunk__24091_24096 = G__24101;
count__24092_24097 = G__24102;
i__24093_24098 = G__24103;
continue;
}
} else
{var temp__4126__auto___24104 = cljs.core.seq.call(null,seq__24090_24095);if(temp__4126__auto___24104)
{var seq__24090_24105__$1 = temp__4126__auto___24104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24090_24105__$1))
{var c__4408__auto___24106 = cljs.core.chunk_first.call(null,seq__24090_24105__$1);{
var G__24107 = cljs.core.chunk_rest.call(null,seq__24090_24105__$1);
var G__24108 = c__4408__auto___24106;
var G__24109 = cljs.core.count.call(null,c__4408__auto___24106);
var G__24110 = (0);
seq__24090_24095 = G__24107;
chunk__24091_24096 = G__24108;
count__24092_24097 = G__24109;
i__24093_24098 = G__24110;
continue;
}
} else
{var node_24111 = cljs.core.first.call(null,seq__24090_24105__$1);node_24111.innerHTML = value_24094;
{
var G__24112 = cljs.core.next.call(null,seq__24090_24105__$1);
var G__24113 = null;
var G__24114 = (0);
var G__24115 = (0);
seq__24090_24095 = G__24112;
chunk__24091_24096 = G__24113;
count__24092_24097 = G__24114;
i__24093_24098 = G__24115;
continue;
}
}
} else
{}
}
break;
}
}catch (e24089){if((e24089 instanceof Error))
{var e_24116 = e24089;domina.replace_children_BANG_.call(null,content,value_24094);
} else
{throw e24089;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24123_24127 = cljs.core.seq.call(null,children);var chunk__24124_24128 = null;var count__24125_24129 = (0);var i__24126_24130 = (0);while(true){
if((i__24126_24130 < count__24125_24129))
{var child_24131 = cljs.core._nth.call(null,chunk__24124_24128,i__24126_24130);frag.appendChild(child_24131);
{
var G__24132 = seq__24123_24127;
var G__24133 = chunk__24124_24128;
var G__24134 = count__24125_24129;
var G__24135 = (i__24126_24130 + (1));
seq__24123_24127 = G__24132;
chunk__24124_24128 = G__24133;
count__24125_24129 = G__24134;
i__24126_24130 = G__24135;
continue;
}
} else
{var temp__4126__auto___24136 = cljs.core.seq.call(null,seq__24123_24127);if(temp__4126__auto___24136)
{var seq__24123_24137__$1 = temp__4126__auto___24136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24123_24137__$1))
{var c__4408__auto___24138 = cljs.core.chunk_first.call(null,seq__24123_24137__$1);{
var G__24139 = cljs.core.chunk_rest.call(null,seq__24123_24137__$1);
var G__24140 = c__4408__auto___24138;
var G__24141 = cljs.core.count.call(null,c__4408__auto___24138);
var G__24142 = (0);
seq__24123_24127 = G__24139;
chunk__24124_24128 = G__24140;
count__24125_24129 = G__24141;
i__24126_24130 = G__24142;
continue;
}
} else
{var child_24143 = cljs.core.first.call(null,seq__24123_24137__$1);frag.appendChild(child_24143);
{
var G__24144 = cljs.core.next.call(null,seq__24123_24137__$1);
var G__24145 = null;
var G__24146 = (0);
var G__24147 = (0);
seq__24123_24127 = G__24144;
chunk__24124_24128 = G__24145;
count__24125_24129 = G__24146;
i__24126_24130 = G__24147;
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
return (function (p1__24117_SHARP_,p2__24118_SHARP_){return f.call(null,p1__24117_SHARP_,p2__24118_SHARP_);
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
{if((function (){var G__24149 = list_thing;if(G__24149)
{var bit__4302__auto__ = (G__24149.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24149.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24149.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24149);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24149);
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
{if((function (){var G__24150 = content;if(G__24150)
{var bit__4302__auto__ = (G__24150.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24150.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24150);
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
{if((function (){var G__24151 = content;if(G__24151)
{var bit__4302__auto__ = (G__24151.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24151.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24151.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24151);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24151);
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
