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
var opt_wrapper_23700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_23702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23702,opt_wrapper_23700,table_section_wrapper_23701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_23700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_23701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23701,cell_wrapper_23702,table_section_wrapper_23701,table_section_wrapper_23701]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__23707 = cljs.core.seq.call(null,tbody);var chunk__23708 = null;var count__23709 = (0);var i__23710 = (0);while(true){
if((i__23710 < count__23709))
{var child = cljs.core._nth.call(null,chunk__23708,i__23710);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23711 = seq__23707;
var G__23712 = chunk__23708;
var G__23713 = count__23709;
var G__23714 = (i__23710 + (1));
seq__23707 = G__23711;
chunk__23708 = G__23712;
count__23709 = G__23713;
i__23710 = G__23714;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23707);if(temp__4126__auto__)
{var seq__23707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23707__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23707__$1);{
var G__23715 = cljs.core.chunk_rest.call(null,seq__23707__$1);
var G__23716 = c__4408__auto__;
var G__23717 = cljs.core.count.call(null,c__4408__auto__);
var G__23718 = (0);
seq__23707 = G__23715;
chunk__23708 = G__23716;
count__23709 = G__23717;
i__23710 = G__23718;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__23707__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23719 = cljs.core.next.call(null,seq__23707__$1);
var G__23720 = null;
var G__23721 = (0);
var G__23722 = (0);
seq__23707 = G__23719;
chunk__23708 = G__23720;
count__23709 = G__23721;
i__23710 = G__23722;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__23724 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__23724,(0),null);var start_wrap = cljs.core.nth.call(null,vec__23724,(1),null);var end_wrap = cljs.core.nth.call(null,vec__23724,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__23725 = wrapper.lastChild;
var G__23726 = (level - (1));
wrapper = G__23725;
level = G__23726;
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
domina.DomContent = (function (){var obj23728 = {};return obj23728;
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
log_debug.cljs$lang$applyTo = (function (arglist__23729){
var mesg = cljs.core.seq(arglist__23729);
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
log.cljs$lang$applyTo = (function (arglist__23730){
var mesg = cljs.core.seq(arglist__23730);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23731){
var contents = cljs.core.seq(arglist__23731);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__23732_SHARP_){return p1__23732_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__23733_SHARP_,p2__23734_SHARP_){return goog.dom.insertChildAt(p1__23733_SHARP_,p2__23734_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23736_SHARP_,p2__23735_SHARP_){return goog.dom.insertSiblingBefore(p2__23735_SHARP_,p1__23736_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23738_SHARP_,p2__23737_SHARP_){return goog.dom.insertSiblingAfter(p2__23737_SHARP_,p1__23738_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__23740_SHARP_,p2__23739_SHARP_){return goog.dom.replaceNode(p2__23739_SHARP_,p1__23740_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23745_23749 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23746_23750 = null;var count__23747_23751 = (0);var i__23748_23752 = (0);while(true){
if((i__23748_23752 < count__23747_23751))
{var n_23753 = cljs.core._nth.call(null,chunk__23746_23750,i__23748_23752);goog.style.setStyle(n_23753,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23754 = seq__23745_23749;
var G__23755 = chunk__23746_23750;
var G__23756 = count__23747_23751;
var G__23757 = (i__23748_23752 + (1));
seq__23745_23749 = G__23754;
chunk__23746_23750 = G__23755;
count__23747_23751 = G__23756;
i__23748_23752 = G__23757;
continue;
}
} else
{var temp__4126__auto___23758 = cljs.core.seq.call(null,seq__23745_23749);if(temp__4126__auto___23758)
{var seq__23745_23759__$1 = temp__4126__auto___23758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23745_23759__$1))
{var c__4408__auto___23760 = cljs.core.chunk_first.call(null,seq__23745_23759__$1);{
var G__23761 = cljs.core.chunk_rest.call(null,seq__23745_23759__$1);
var G__23762 = c__4408__auto___23760;
var G__23763 = cljs.core.count.call(null,c__4408__auto___23760);
var G__23764 = (0);
seq__23745_23749 = G__23761;
chunk__23746_23750 = G__23762;
count__23747_23751 = G__23763;
i__23748_23752 = G__23764;
continue;
}
} else
{var n_23765 = cljs.core.first.call(null,seq__23745_23759__$1);goog.style.setStyle(n_23765,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23766 = cljs.core.next.call(null,seq__23745_23759__$1);
var G__23767 = null;
var G__23768 = (0);
var G__23769 = (0);
seq__23745_23749 = G__23766;
chunk__23746_23750 = G__23767;
count__23747_23751 = G__23768;
i__23748_23752 = G__23769;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23770){
var content = cljs.core.first(arglist__23770);
arglist__23770 = cljs.core.next(arglist__23770);
var name = cljs.core.first(arglist__23770);
var value = cljs.core.rest(arglist__23770);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23775_23779 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23776_23780 = null;var count__23777_23781 = (0);var i__23778_23782 = (0);while(true){
if((i__23778_23782 < count__23777_23781))
{var n_23783 = cljs.core._nth.call(null,chunk__23776_23780,i__23778_23782);n_23783.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23784 = seq__23775_23779;
var G__23785 = chunk__23776_23780;
var G__23786 = count__23777_23781;
var G__23787 = (i__23778_23782 + (1));
seq__23775_23779 = G__23784;
chunk__23776_23780 = G__23785;
count__23777_23781 = G__23786;
i__23778_23782 = G__23787;
continue;
}
} else
{var temp__4126__auto___23788 = cljs.core.seq.call(null,seq__23775_23779);if(temp__4126__auto___23788)
{var seq__23775_23789__$1 = temp__4126__auto___23788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23775_23789__$1))
{var c__4408__auto___23790 = cljs.core.chunk_first.call(null,seq__23775_23789__$1);{
var G__23791 = cljs.core.chunk_rest.call(null,seq__23775_23789__$1);
var G__23792 = c__4408__auto___23790;
var G__23793 = cljs.core.count.call(null,c__4408__auto___23790);
var G__23794 = (0);
seq__23775_23779 = G__23791;
chunk__23776_23780 = G__23792;
count__23777_23781 = G__23793;
i__23778_23782 = G__23794;
continue;
}
} else
{var n_23795 = cljs.core.first.call(null,seq__23775_23789__$1);n_23795.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23796 = cljs.core.next.call(null,seq__23775_23789__$1);
var G__23797 = null;
var G__23798 = (0);
var G__23799 = (0);
seq__23775_23779 = G__23796;
chunk__23776_23780 = G__23797;
count__23777_23781 = G__23798;
i__23778_23782 = G__23799;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23800){
var content = cljs.core.first(arglist__23800);
arglist__23800 = cljs.core.next(arglist__23800);
var name = cljs.core.first(arglist__23800);
var value = cljs.core.rest(arglist__23800);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23805_23809 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23806_23810 = null;var count__23807_23811 = (0);var i__23808_23812 = (0);while(true){
if((i__23808_23812 < count__23807_23811))
{var n_23813 = cljs.core._nth.call(null,chunk__23806_23810,i__23808_23812);n_23813.removeAttribute(cljs.core.name.call(null,name));
{
var G__23814 = seq__23805_23809;
var G__23815 = chunk__23806_23810;
var G__23816 = count__23807_23811;
var G__23817 = (i__23808_23812 + (1));
seq__23805_23809 = G__23814;
chunk__23806_23810 = G__23815;
count__23807_23811 = G__23816;
i__23808_23812 = G__23817;
continue;
}
} else
{var temp__4126__auto___23818 = cljs.core.seq.call(null,seq__23805_23809);if(temp__4126__auto___23818)
{var seq__23805_23819__$1 = temp__4126__auto___23818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23805_23819__$1))
{var c__4408__auto___23820 = cljs.core.chunk_first.call(null,seq__23805_23819__$1);{
var G__23821 = cljs.core.chunk_rest.call(null,seq__23805_23819__$1);
var G__23822 = c__4408__auto___23820;
var G__23823 = cljs.core.count.call(null,c__4408__auto___23820);
var G__23824 = (0);
seq__23805_23809 = G__23821;
chunk__23806_23810 = G__23822;
count__23807_23811 = G__23823;
i__23808_23812 = G__23824;
continue;
}
} else
{var n_23825 = cljs.core.first.call(null,seq__23805_23819__$1);n_23825.removeAttribute(cljs.core.name.call(null,name));
{
var G__23826 = cljs.core.next.call(null,seq__23805_23819__$1);
var G__23827 = null;
var G__23828 = (0);
var G__23829 = (0);
seq__23805_23809 = G__23826;
chunk__23806_23810 = G__23827;
count__23807_23811 = G__23828;
i__23808_23812 = G__23829;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__23831 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__23831,(0),null);var v = cljs.core.nth.call(null,vec__23831,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__23832_SHARP_){var attr = attrs__$1.item(p1__23832_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23839_23845 = cljs.core.seq.call(null,styles);var chunk__23840_23846 = null;var count__23841_23847 = (0);var i__23842_23848 = (0);while(true){
if((i__23842_23848 < count__23841_23847))
{var vec__23843_23849 = cljs.core._nth.call(null,chunk__23840_23846,i__23842_23848);var name_23850 = cljs.core.nth.call(null,vec__23843_23849,(0),null);var value_23851 = cljs.core.nth.call(null,vec__23843_23849,(1),null);domina.set_style_BANG_.call(null,content,name_23850,value_23851);
{
var G__23852 = seq__23839_23845;
var G__23853 = chunk__23840_23846;
var G__23854 = count__23841_23847;
var G__23855 = (i__23842_23848 + (1));
seq__23839_23845 = G__23852;
chunk__23840_23846 = G__23853;
count__23841_23847 = G__23854;
i__23842_23848 = G__23855;
continue;
}
} else
{var temp__4126__auto___23856 = cljs.core.seq.call(null,seq__23839_23845);if(temp__4126__auto___23856)
{var seq__23839_23857__$1 = temp__4126__auto___23856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23839_23857__$1))
{var c__4408__auto___23858 = cljs.core.chunk_first.call(null,seq__23839_23857__$1);{
var G__23859 = cljs.core.chunk_rest.call(null,seq__23839_23857__$1);
var G__23860 = c__4408__auto___23858;
var G__23861 = cljs.core.count.call(null,c__4408__auto___23858);
var G__23862 = (0);
seq__23839_23845 = G__23859;
chunk__23840_23846 = G__23860;
count__23841_23847 = G__23861;
i__23842_23848 = G__23862;
continue;
}
} else
{var vec__23844_23863 = cljs.core.first.call(null,seq__23839_23857__$1);var name_23864 = cljs.core.nth.call(null,vec__23844_23863,(0),null);var value_23865 = cljs.core.nth.call(null,vec__23844_23863,(1),null);domina.set_style_BANG_.call(null,content,name_23864,value_23865);
{
var G__23866 = cljs.core.next.call(null,seq__23839_23857__$1);
var G__23867 = null;
var G__23868 = (0);
var G__23869 = (0);
seq__23839_23845 = G__23866;
chunk__23840_23846 = G__23867;
count__23841_23847 = G__23868;
i__23842_23848 = G__23869;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23876_23882 = cljs.core.seq.call(null,attrs);var chunk__23877_23883 = null;var count__23878_23884 = (0);var i__23879_23885 = (0);while(true){
if((i__23879_23885 < count__23878_23884))
{var vec__23880_23886 = cljs.core._nth.call(null,chunk__23877_23883,i__23879_23885);var name_23887 = cljs.core.nth.call(null,vec__23880_23886,(0),null);var value_23888 = cljs.core.nth.call(null,vec__23880_23886,(1),null);domina.set_attr_BANG_.call(null,content,name_23887,value_23888);
{
var G__23889 = seq__23876_23882;
var G__23890 = chunk__23877_23883;
var G__23891 = count__23878_23884;
var G__23892 = (i__23879_23885 + (1));
seq__23876_23882 = G__23889;
chunk__23877_23883 = G__23890;
count__23878_23884 = G__23891;
i__23879_23885 = G__23892;
continue;
}
} else
{var temp__4126__auto___23893 = cljs.core.seq.call(null,seq__23876_23882);if(temp__4126__auto___23893)
{var seq__23876_23894__$1 = temp__4126__auto___23893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23876_23894__$1))
{var c__4408__auto___23895 = cljs.core.chunk_first.call(null,seq__23876_23894__$1);{
var G__23896 = cljs.core.chunk_rest.call(null,seq__23876_23894__$1);
var G__23897 = c__4408__auto___23895;
var G__23898 = cljs.core.count.call(null,c__4408__auto___23895);
var G__23899 = (0);
seq__23876_23882 = G__23896;
chunk__23877_23883 = G__23897;
count__23878_23884 = G__23898;
i__23879_23885 = G__23899;
continue;
}
} else
{var vec__23881_23900 = cljs.core.first.call(null,seq__23876_23894__$1);var name_23901 = cljs.core.nth.call(null,vec__23881_23900,(0),null);var value_23902 = cljs.core.nth.call(null,vec__23881_23900,(1),null);domina.set_attr_BANG_.call(null,content,name_23901,value_23902);
{
var G__23903 = cljs.core.next.call(null,seq__23876_23894__$1);
var G__23904 = null;
var G__23905 = (0);
var G__23906 = (0);
seq__23876_23882 = G__23903;
chunk__23877_23883 = G__23904;
count__23878_23884 = G__23905;
i__23879_23885 = G__23906;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23911_23915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23912_23916 = null;var count__23913_23917 = (0);var i__23914_23918 = (0);while(true){
if((i__23914_23918 < count__23913_23917))
{var node_23919 = cljs.core._nth.call(null,chunk__23912_23916,i__23914_23918);goog.dom.classes.add(node_23919,class$);
{
var G__23920 = seq__23911_23915;
var G__23921 = chunk__23912_23916;
var G__23922 = count__23913_23917;
var G__23923 = (i__23914_23918 + (1));
seq__23911_23915 = G__23920;
chunk__23912_23916 = G__23921;
count__23913_23917 = G__23922;
i__23914_23918 = G__23923;
continue;
}
} else
{var temp__4126__auto___23924 = cljs.core.seq.call(null,seq__23911_23915);if(temp__4126__auto___23924)
{var seq__23911_23925__$1 = temp__4126__auto___23924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23911_23925__$1))
{var c__4408__auto___23926 = cljs.core.chunk_first.call(null,seq__23911_23925__$1);{
var G__23927 = cljs.core.chunk_rest.call(null,seq__23911_23925__$1);
var G__23928 = c__4408__auto___23926;
var G__23929 = cljs.core.count.call(null,c__4408__auto___23926);
var G__23930 = (0);
seq__23911_23915 = G__23927;
chunk__23912_23916 = G__23928;
count__23913_23917 = G__23929;
i__23914_23918 = G__23930;
continue;
}
} else
{var node_23931 = cljs.core.first.call(null,seq__23911_23925__$1);goog.dom.classes.add(node_23931,class$);
{
var G__23932 = cljs.core.next.call(null,seq__23911_23925__$1);
var G__23933 = null;
var G__23934 = (0);
var G__23935 = (0);
seq__23911_23915 = G__23932;
chunk__23912_23916 = G__23933;
count__23913_23917 = G__23934;
i__23914_23918 = G__23935;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23940_23944 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23941_23945 = null;var count__23942_23946 = (0);var i__23943_23947 = (0);while(true){
if((i__23943_23947 < count__23942_23946))
{var node_23948 = cljs.core._nth.call(null,chunk__23941_23945,i__23943_23947);goog.dom.classes.remove(node_23948,class$);
{
var G__23949 = seq__23940_23944;
var G__23950 = chunk__23941_23945;
var G__23951 = count__23942_23946;
var G__23952 = (i__23943_23947 + (1));
seq__23940_23944 = G__23949;
chunk__23941_23945 = G__23950;
count__23942_23946 = G__23951;
i__23943_23947 = G__23952;
continue;
}
} else
{var temp__4126__auto___23953 = cljs.core.seq.call(null,seq__23940_23944);if(temp__4126__auto___23953)
{var seq__23940_23954__$1 = temp__4126__auto___23953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23940_23954__$1))
{var c__4408__auto___23955 = cljs.core.chunk_first.call(null,seq__23940_23954__$1);{
var G__23956 = cljs.core.chunk_rest.call(null,seq__23940_23954__$1);
var G__23957 = c__4408__auto___23955;
var G__23958 = cljs.core.count.call(null,c__4408__auto___23955);
var G__23959 = (0);
seq__23940_23944 = G__23956;
chunk__23941_23945 = G__23957;
count__23942_23946 = G__23958;
i__23943_23947 = G__23959;
continue;
}
} else
{var node_23960 = cljs.core.first.call(null,seq__23940_23954__$1);goog.dom.classes.remove(node_23960,class$);
{
var G__23961 = cljs.core.next.call(null,seq__23940_23954__$1);
var G__23962 = null;
var G__23963 = (0);
var G__23964 = (0);
seq__23940_23944 = G__23961;
chunk__23941_23945 = G__23962;
count__23942_23946 = G__23963;
i__23943_23947 = G__23964;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23969_23973 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23970_23974 = null;var count__23971_23975 = (0);var i__23972_23976 = (0);while(true){
if((i__23972_23976 < count__23971_23975))
{var node_23977 = cljs.core._nth.call(null,chunk__23970_23974,i__23972_23976);goog.dom.classes.toggle(node_23977,class$);
{
var G__23978 = seq__23969_23973;
var G__23979 = chunk__23970_23974;
var G__23980 = count__23971_23975;
var G__23981 = (i__23972_23976 + (1));
seq__23969_23973 = G__23978;
chunk__23970_23974 = G__23979;
count__23971_23975 = G__23980;
i__23972_23976 = G__23981;
continue;
}
} else
{var temp__4126__auto___23982 = cljs.core.seq.call(null,seq__23969_23973);if(temp__4126__auto___23982)
{var seq__23969_23983__$1 = temp__4126__auto___23982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23969_23983__$1))
{var c__4408__auto___23984 = cljs.core.chunk_first.call(null,seq__23969_23983__$1);{
var G__23985 = cljs.core.chunk_rest.call(null,seq__23969_23983__$1);
var G__23986 = c__4408__auto___23984;
var G__23987 = cljs.core.count.call(null,c__4408__auto___23984);
var G__23988 = (0);
seq__23969_23973 = G__23985;
chunk__23970_23974 = G__23986;
count__23971_23975 = G__23987;
i__23972_23976 = G__23988;
continue;
}
} else
{var node_23989 = cljs.core.first.call(null,seq__23969_23983__$1);goog.dom.classes.toggle(node_23989,class$);
{
var G__23990 = cljs.core.next.call(null,seq__23969_23983__$1);
var G__23991 = null;
var G__23992 = (0);
var G__23993 = (0);
seq__23969_23973 = G__23990;
chunk__23970_23974 = G__23991;
count__23971_23975 = G__23992;
i__23972_23976 = G__23993;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24002__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__23998_24003 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23999_24004 = null;var count__24000_24005 = (0);var i__24001_24006 = (0);while(true){
if((i__24001_24006 < count__24000_24005))
{var node_24007 = cljs.core._nth.call(null,chunk__23999_24004,i__24001_24006);goog.dom.classes.set(node_24007,classes_24002__$1);
{
var G__24008 = seq__23998_24003;
var G__24009 = chunk__23999_24004;
var G__24010 = count__24000_24005;
var G__24011 = (i__24001_24006 + (1));
seq__23998_24003 = G__24008;
chunk__23999_24004 = G__24009;
count__24000_24005 = G__24010;
i__24001_24006 = G__24011;
continue;
}
} else
{var temp__4126__auto___24012 = cljs.core.seq.call(null,seq__23998_24003);if(temp__4126__auto___24012)
{var seq__23998_24013__$1 = temp__4126__auto___24012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23998_24013__$1))
{var c__4408__auto___24014 = cljs.core.chunk_first.call(null,seq__23998_24013__$1);{
var G__24015 = cljs.core.chunk_rest.call(null,seq__23998_24013__$1);
var G__24016 = c__4408__auto___24014;
var G__24017 = cljs.core.count.call(null,c__4408__auto___24014);
var G__24018 = (0);
seq__23998_24003 = G__24015;
chunk__23999_24004 = G__24016;
count__24000_24005 = G__24017;
i__24001_24006 = G__24018;
continue;
}
} else
{var node_24019 = cljs.core.first.call(null,seq__23998_24013__$1);goog.dom.classes.set(node_24019,classes_24002__$1);
{
var G__24020 = cljs.core.next.call(null,seq__23998_24013__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23998_24003 = G__24020;
chunk__23999_24004 = G__24021;
count__24000_24005 = G__24022;
i__24001_24006 = G__24023;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24028_24032 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24029_24033 = null;var count__24030_24034 = (0);var i__24031_24035 = (0);while(true){
if((i__24031_24035 < count__24030_24034))
{var node_24036 = cljs.core._nth.call(null,chunk__24029_24033,i__24031_24035);goog.dom.setTextContent(node_24036,value);
{
var G__24037 = seq__24028_24032;
var G__24038 = chunk__24029_24033;
var G__24039 = count__24030_24034;
var G__24040 = (i__24031_24035 + (1));
seq__24028_24032 = G__24037;
chunk__24029_24033 = G__24038;
count__24030_24034 = G__24039;
i__24031_24035 = G__24040;
continue;
}
} else
{var temp__4126__auto___24041 = cljs.core.seq.call(null,seq__24028_24032);if(temp__4126__auto___24041)
{var seq__24028_24042__$1 = temp__4126__auto___24041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24028_24042__$1))
{var c__4408__auto___24043 = cljs.core.chunk_first.call(null,seq__24028_24042__$1);{
var G__24044 = cljs.core.chunk_rest.call(null,seq__24028_24042__$1);
var G__24045 = c__4408__auto___24043;
var G__24046 = cljs.core.count.call(null,c__4408__auto___24043);
var G__24047 = (0);
seq__24028_24032 = G__24044;
chunk__24029_24033 = G__24045;
count__24030_24034 = G__24046;
i__24031_24035 = G__24047;
continue;
}
} else
{var node_24048 = cljs.core.first.call(null,seq__24028_24042__$1);goog.dom.setTextContent(node_24048,value);
{
var G__24049 = cljs.core.next.call(null,seq__24028_24042__$1);
var G__24050 = null;
var G__24051 = (0);
var G__24052 = (0);
seq__24028_24032 = G__24049;
chunk__24029_24033 = G__24050;
count__24030_24034 = G__24051;
i__24031_24035 = G__24052;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24057_24061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24058_24062 = null;var count__24059_24063 = (0);var i__24060_24064 = (0);while(true){
if((i__24060_24064 < count__24059_24063))
{var node_24065 = cljs.core._nth.call(null,chunk__24058_24062,i__24060_24064);goog.dom.forms.setValue(node_24065,value);
{
var G__24066 = seq__24057_24061;
var G__24067 = chunk__24058_24062;
var G__24068 = count__24059_24063;
var G__24069 = (i__24060_24064 + (1));
seq__24057_24061 = G__24066;
chunk__24058_24062 = G__24067;
count__24059_24063 = G__24068;
i__24060_24064 = G__24069;
continue;
}
} else
{var temp__4126__auto___24070 = cljs.core.seq.call(null,seq__24057_24061);if(temp__4126__auto___24070)
{var seq__24057_24071__$1 = temp__4126__auto___24070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24057_24071__$1))
{var c__4408__auto___24072 = cljs.core.chunk_first.call(null,seq__24057_24071__$1);{
var G__24073 = cljs.core.chunk_rest.call(null,seq__24057_24071__$1);
var G__24074 = c__4408__auto___24072;
var G__24075 = cljs.core.count.call(null,c__4408__auto___24072);
var G__24076 = (0);
seq__24057_24061 = G__24073;
chunk__24058_24062 = G__24074;
count__24059_24063 = G__24075;
i__24060_24064 = G__24076;
continue;
}
} else
{var node_24077 = cljs.core.first.call(null,seq__24057_24071__$1);goog.dom.forms.setValue(node_24077,value);
{
var G__24078 = cljs.core.next.call(null,seq__24057_24071__$1);
var G__24079 = null;
var G__24080 = (0);
var G__24081 = (0);
seq__24057_24061 = G__24078;
chunk__24058_24062 = G__24079;
count__24059_24063 = G__24080;
i__24060_24064 = G__24081;
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
{var value_24092 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24088_24093 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24089_24094 = null;var count__24090_24095 = (0);var i__24091_24096 = (0);while(true){
if((i__24091_24096 < count__24090_24095))
{var node_24097 = cljs.core._nth.call(null,chunk__24089_24094,i__24091_24096);node_24097.innerHTML = value_24092;
{
var G__24098 = seq__24088_24093;
var G__24099 = chunk__24089_24094;
var G__24100 = count__24090_24095;
var G__24101 = (i__24091_24096 + (1));
seq__24088_24093 = G__24098;
chunk__24089_24094 = G__24099;
count__24090_24095 = G__24100;
i__24091_24096 = G__24101;
continue;
}
} else
{var temp__4126__auto___24102 = cljs.core.seq.call(null,seq__24088_24093);if(temp__4126__auto___24102)
{var seq__24088_24103__$1 = temp__4126__auto___24102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24088_24103__$1))
{var c__4408__auto___24104 = cljs.core.chunk_first.call(null,seq__24088_24103__$1);{
var G__24105 = cljs.core.chunk_rest.call(null,seq__24088_24103__$1);
var G__24106 = c__4408__auto___24104;
var G__24107 = cljs.core.count.call(null,c__4408__auto___24104);
var G__24108 = (0);
seq__24088_24093 = G__24105;
chunk__24089_24094 = G__24106;
count__24090_24095 = G__24107;
i__24091_24096 = G__24108;
continue;
}
} else
{var node_24109 = cljs.core.first.call(null,seq__24088_24103__$1);node_24109.innerHTML = value_24092;
{
var G__24110 = cljs.core.next.call(null,seq__24088_24103__$1);
var G__24111 = null;
var G__24112 = (0);
var G__24113 = (0);
seq__24088_24093 = G__24110;
chunk__24089_24094 = G__24111;
count__24090_24095 = G__24112;
i__24091_24096 = G__24113;
continue;
}
}
} else
{}
}
break;
}
}catch (e24087){if((e24087 instanceof Error))
{var e_24114 = e24087;domina.replace_children_BANG_.call(null,content,value_24092);
} else
{throw e24087;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24121_24125 = cljs.core.seq.call(null,children);var chunk__24122_24126 = null;var count__24123_24127 = (0);var i__24124_24128 = (0);while(true){
if((i__24124_24128 < count__24123_24127))
{var child_24129 = cljs.core._nth.call(null,chunk__24122_24126,i__24124_24128);frag.appendChild(child_24129);
{
var G__24130 = seq__24121_24125;
var G__24131 = chunk__24122_24126;
var G__24132 = count__24123_24127;
var G__24133 = (i__24124_24128 + (1));
seq__24121_24125 = G__24130;
chunk__24122_24126 = G__24131;
count__24123_24127 = G__24132;
i__24124_24128 = G__24133;
continue;
}
} else
{var temp__4126__auto___24134 = cljs.core.seq.call(null,seq__24121_24125);if(temp__4126__auto___24134)
{var seq__24121_24135__$1 = temp__4126__auto___24134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24121_24135__$1))
{var c__4408__auto___24136 = cljs.core.chunk_first.call(null,seq__24121_24135__$1);{
var G__24137 = cljs.core.chunk_rest.call(null,seq__24121_24135__$1);
var G__24138 = c__4408__auto___24136;
var G__24139 = cljs.core.count.call(null,c__4408__auto___24136);
var G__24140 = (0);
seq__24121_24125 = G__24137;
chunk__24122_24126 = G__24138;
count__24123_24127 = G__24139;
i__24124_24128 = G__24140;
continue;
}
} else
{var child_24141 = cljs.core.first.call(null,seq__24121_24135__$1);frag.appendChild(child_24141);
{
var G__24142 = cljs.core.next.call(null,seq__24121_24135__$1);
var G__24143 = null;
var G__24144 = (0);
var G__24145 = (0);
seq__24121_24125 = G__24142;
chunk__24122_24126 = G__24143;
count__24123_24127 = G__24144;
i__24124_24128 = G__24145;
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
return (function (p1__24115_SHARP_,p2__24116_SHARP_){return f.call(null,p1__24115_SHARP_,p2__24116_SHARP_);
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
{if((function (){var G__24147 = list_thing;if(G__24147)
{var bit__4302__auto__ = (G__24147.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24147.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24147);
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
{if((function (){var G__24148 = content;if(G__24148)
{var bit__4302__auto__ = (G__24148.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24148.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24148);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24148);
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
{if((function (){var G__24149 = content;if(G__24149)
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
