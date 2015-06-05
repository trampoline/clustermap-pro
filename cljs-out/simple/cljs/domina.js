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
var opt_wrapper_20698 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20700,opt_wrapper_20698,table_section_wrapper_20699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20698,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20699,cell_wrapper_20700,table_section_wrapper_20699,table_section_wrapper_20699]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20705 = cljs.core.seq.call(null,tbody);var chunk__20706 = null;var count__20707 = (0);var i__20708 = (0);while(true){
if((i__20708 < count__20707))
{var child = cljs.core._nth.call(null,chunk__20706,i__20708);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20709 = seq__20705;
var G__20710 = chunk__20706;
var G__20711 = count__20707;
var G__20712 = (i__20708 + (1));
seq__20705 = G__20709;
chunk__20706 = G__20710;
count__20707 = G__20711;
i__20708 = G__20712;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20705);if(temp__4126__auto__)
{var seq__20705__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20705__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20705__$1);{
var G__20713 = cljs.core.chunk_rest.call(null,seq__20705__$1);
var G__20714 = c__4408__auto__;
var G__20715 = cljs.core.count.call(null,c__4408__auto__);
var G__20716 = (0);
seq__20705 = G__20713;
chunk__20706 = G__20714;
count__20707 = G__20715;
i__20708 = G__20716;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20705__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20717 = cljs.core.next.call(null,seq__20705__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20705 = G__20717;
chunk__20706 = G__20718;
count__20707 = G__20719;
i__20708 = G__20720;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20722 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20722,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20722,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20722,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20723 = wrapper.lastChild;
var G__20724 = (level - (1));
wrapper = G__20723;
level = G__20724;
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
domina.DomContent = (function (){var obj20726 = {};return obj20726;
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
log_debug.cljs$lang$applyTo = (function (arglist__20727){
var mesg = cljs.core.seq(arglist__20727);
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
log.cljs$lang$applyTo = (function (arglist__20728){
var mesg = cljs.core.seq(arglist__20728);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20729){
var contents = cljs.core.seq(arglist__20729);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20730_SHARP_){return p1__20730_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20731_SHARP_,p2__20732_SHARP_){return goog.dom.insertChildAt(p1__20731_SHARP_,p2__20732_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20734_SHARP_,p2__20733_SHARP_){return goog.dom.insertSiblingBefore(p2__20733_SHARP_,p1__20734_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20736_SHARP_,p2__20735_SHARP_){return goog.dom.insertSiblingAfter(p2__20735_SHARP_,p1__20736_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20738_SHARP_,p2__20737_SHARP_){return goog.dom.replaceNode(p2__20737_SHARP_,p1__20738_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20743_20747 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20744_20748 = null;var count__20745_20749 = (0);var i__20746_20750 = (0);while(true){
if((i__20746_20750 < count__20745_20749))
{var n_20751 = cljs.core._nth.call(null,chunk__20744_20748,i__20746_20750);goog.style.setStyle(n_20751,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20752 = seq__20743_20747;
var G__20753 = chunk__20744_20748;
var G__20754 = count__20745_20749;
var G__20755 = (i__20746_20750 + (1));
seq__20743_20747 = G__20752;
chunk__20744_20748 = G__20753;
count__20745_20749 = G__20754;
i__20746_20750 = G__20755;
continue;
}
} else
{var temp__4126__auto___20756 = cljs.core.seq.call(null,seq__20743_20747);if(temp__4126__auto___20756)
{var seq__20743_20757__$1 = temp__4126__auto___20756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20743_20757__$1))
{var c__4408__auto___20758 = cljs.core.chunk_first.call(null,seq__20743_20757__$1);{
var G__20759 = cljs.core.chunk_rest.call(null,seq__20743_20757__$1);
var G__20760 = c__4408__auto___20758;
var G__20761 = cljs.core.count.call(null,c__4408__auto___20758);
var G__20762 = (0);
seq__20743_20747 = G__20759;
chunk__20744_20748 = G__20760;
count__20745_20749 = G__20761;
i__20746_20750 = G__20762;
continue;
}
} else
{var n_20763 = cljs.core.first.call(null,seq__20743_20757__$1);goog.style.setStyle(n_20763,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20764 = cljs.core.next.call(null,seq__20743_20757__$1);
var G__20765 = null;
var G__20766 = (0);
var G__20767 = (0);
seq__20743_20747 = G__20764;
chunk__20744_20748 = G__20765;
count__20745_20749 = G__20766;
i__20746_20750 = G__20767;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20768){
var content = cljs.core.first(arglist__20768);
arglist__20768 = cljs.core.next(arglist__20768);
var name = cljs.core.first(arglist__20768);
var value = cljs.core.rest(arglist__20768);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20773_20777 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20774_20778 = null;var count__20775_20779 = (0);var i__20776_20780 = (0);while(true){
if((i__20776_20780 < count__20775_20779))
{var n_20781 = cljs.core._nth.call(null,chunk__20774_20778,i__20776_20780);n_20781.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20782 = seq__20773_20777;
var G__20783 = chunk__20774_20778;
var G__20784 = count__20775_20779;
var G__20785 = (i__20776_20780 + (1));
seq__20773_20777 = G__20782;
chunk__20774_20778 = G__20783;
count__20775_20779 = G__20784;
i__20776_20780 = G__20785;
continue;
}
} else
{var temp__4126__auto___20786 = cljs.core.seq.call(null,seq__20773_20777);if(temp__4126__auto___20786)
{var seq__20773_20787__$1 = temp__4126__auto___20786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20773_20787__$1))
{var c__4408__auto___20788 = cljs.core.chunk_first.call(null,seq__20773_20787__$1);{
var G__20789 = cljs.core.chunk_rest.call(null,seq__20773_20787__$1);
var G__20790 = c__4408__auto___20788;
var G__20791 = cljs.core.count.call(null,c__4408__auto___20788);
var G__20792 = (0);
seq__20773_20777 = G__20789;
chunk__20774_20778 = G__20790;
count__20775_20779 = G__20791;
i__20776_20780 = G__20792;
continue;
}
} else
{var n_20793 = cljs.core.first.call(null,seq__20773_20787__$1);n_20793.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20794 = cljs.core.next.call(null,seq__20773_20787__$1);
var G__20795 = null;
var G__20796 = (0);
var G__20797 = (0);
seq__20773_20777 = G__20794;
chunk__20774_20778 = G__20795;
count__20775_20779 = G__20796;
i__20776_20780 = G__20797;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20798){
var content = cljs.core.first(arglist__20798);
arglist__20798 = cljs.core.next(arglist__20798);
var name = cljs.core.first(arglist__20798);
var value = cljs.core.rest(arglist__20798);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20803_20807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20804_20808 = null;var count__20805_20809 = (0);var i__20806_20810 = (0);while(true){
if((i__20806_20810 < count__20805_20809))
{var n_20811 = cljs.core._nth.call(null,chunk__20804_20808,i__20806_20810);n_20811.removeAttribute(cljs.core.name.call(null,name));
{
var G__20812 = seq__20803_20807;
var G__20813 = chunk__20804_20808;
var G__20814 = count__20805_20809;
var G__20815 = (i__20806_20810 + (1));
seq__20803_20807 = G__20812;
chunk__20804_20808 = G__20813;
count__20805_20809 = G__20814;
i__20806_20810 = G__20815;
continue;
}
} else
{var temp__4126__auto___20816 = cljs.core.seq.call(null,seq__20803_20807);if(temp__4126__auto___20816)
{var seq__20803_20817__$1 = temp__4126__auto___20816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20803_20817__$1))
{var c__4408__auto___20818 = cljs.core.chunk_first.call(null,seq__20803_20817__$1);{
var G__20819 = cljs.core.chunk_rest.call(null,seq__20803_20817__$1);
var G__20820 = c__4408__auto___20818;
var G__20821 = cljs.core.count.call(null,c__4408__auto___20818);
var G__20822 = (0);
seq__20803_20807 = G__20819;
chunk__20804_20808 = G__20820;
count__20805_20809 = G__20821;
i__20806_20810 = G__20822;
continue;
}
} else
{var n_20823 = cljs.core.first.call(null,seq__20803_20817__$1);n_20823.removeAttribute(cljs.core.name.call(null,name));
{
var G__20824 = cljs.core.next.call(null,seq__20803_20817__$1);
var G__20825 = null;
var G__20826 = (0);
var G__20827 = (0);
seq__20803_20807 = G__20824;
chunk__20804_20808 = G__20825;
count__20805_20809 = G__20826;
i__20806_20810 = G__20827;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20829 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20829,(0),null);var v = cljs.core.nth.call(null,vec__20829,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20830_SHARP_){var attr = attrs__$1.item(p1__20830_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20837_20843 = cljs.core.seq.call(null,styles);var chunk__20838_20844 = null;var count__20839_20845 = (0);var i__20840_20846 = (0);while(true){
if((i__20840_20846 < count__20839_20845))
{var vec__20841_20847 = cljs.core._nth.call(null,chunk__20838_20844,i__20840_20846);var name_20848 = cljs.core.nth.call(null,vec__20841_20847,(0),null);var value_20849 = cljs.core.nth.call(null,vec__20841_20847,(1),null);domina.set_style_BANG_.call(null,content,name_20848,value_20849);
{
var G__20850 = seq__20837_20843;
var G__20851 = chunk__20838_20844;
var G__20852 = count__20839_20845;
var G__20853 = (i__20840_20846 + (1));
seq__20837_20843 = G__20850;
chunk__20838_20844 = G__20851;
count__20839_20845 = G__20852;
i__20840_20846 = G__20853;
continue;
}
} else
{var temp__4126__auto___20854 = cljs.core.seq.call(null,seq__20837_20843);if(temp__4126__auto___20854)
{var seq__20837_20855__$1 = temp__4126__auto___20854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20837_20855__$1))
{var c__4408__auto___20856 = cljs.core.chunk_first.call(null,seq__20837_20855__$1);{
var G__20857 = cljs.core.chunk_rest.call(null,seq__20837_20855__$1);
var G__20858 = c__4408__auto___20856;
var G__20859 = cljs.core.count.call(null,c__4408__auto___20856);
var G__20860 = (0);
seq__20837_20843 = G__20857;
chunk__20838_20844 = G__20858;
count__20839_20845 = G__20859;
i__20840_20846 = G__20860;
continue;
}
} else
{var vec__20842_20861 = cljs.core.first.call(null,seq__20837_20855__$1);var name_20862 = cljs.core.nth.call(null,vec__20842_20861,(0),null);var value_20863 = cljs.core.nth.call(null,vec__20842_20861,(1),null);domina.set_style_BANG_.call(null,content,name_20862,value_20863);
{
var G__20864 = cljs.core.next.call(null,seq__20837_20855__$1);
var G__20865 = null;
var G__20866 = (0);
var G__20867 = (0);
seq__20837_20843 = G__20864;
chunk__20838_20844 = G__20865;
count__20839_20845 = G__20866;
i__20840_20846 = G__20867;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20874_20880 = cljs.core.seq.call(null,attrs);var chunk__20875_20881 = null;var count__20876_20882 = (0);var i__20877_20883 = (0);while(true){
if((i__20877_20883 < count__20876_20882))
{var vec__20878_20884 = cljs.core._nth.call(null,chunk__20875_20881,i__20877_20883);var name_20885 = cljs.core.nth.call(null,vec__20878_20884,(0),null);var value_20886 = cljs.core.nth.call(null,vec__20878_20884,(1),null);domina.set_attr_BANG_.call(null,content,name_20885,value_20886);
{
var G__20887 = seq__20874_20880;
var G__20888 = chunk__20875_20881;
var G__20889 = count__20876_20882;
var G__20890 = (i__20877_20883 + (1));
seq__20874_20880 = G__20887;
chunk__20875_20881 = G__20888;
count__20876_20882 = G__20889;
i__20877_20883 = G__20890;
continue;
}
} else
{var temp__4126__auto___20891 = cljs.core.seq.call(null,seq__20874_20880);if(temp__4126__auto___20891)
{var seq__20874_20892__$1 = temp__4126__auto___20891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20874_20892__$1))
{var c__4408__auto___20893 = cljs.core.chunk_first.call(null,seq__20874_20892__$1);{
var G__20894 = cljs.core.chunk_rest.call(null,seq__20874_20892__$1);
var G__20895 = c__4408__auto___20893;
var G__20896 = cljs.core.count.call(null,c__4408__auto___20893);
var G__20897 = (0);
seq__20874_20880 = G__20894;
chunk__20875_20881 = G__20895;
count__20876_20882 = G__20896;
i__20877_20883 = G__20897;
continue;
}
} else
{var vec__20879_20898 = cljs.core.first.call(null,seq__20874_20892__$1);var name_20899 = cljs.core.nth.call(null,vec__20879_20898,(0),null);var value_20900 = cljs.core.nth.call(null,vec__20879_20898,(1),null);domina.set_attr_BANG_.call(null,content,name_20899,value_20900);
{
var G__20901 = cljs.core.next.call(null,seq__20874_20892__$1);
var G__20902 = null;
var G__20903 = (0);
var G__20904 = (0);
seq__20874_20880 = G__20901;
chunk__20875_20881 = G__20902;
count__20876_20882 = G__20903;
i__20877_20883 = G__20904;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20909_20913 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20910_20914 = null;var count__20911_20915 = (0);var i__20912_20916 = (0);while(true){
if((i__20912_20916 < count__20911_20915))
{var node_20917 = cljs.core._nth.call(null,chunk__20910_20914,i__20912_20916);goog.dom.classes.add(node_20917,class$);
{
var G__20918 = seq__20909_20913;
var G__20919 = chunk__20910_20914;
var G__20920 = count__20911_20915;
var G__20921 = (i__20912_20916 + (1));
seq__20909_20913 = G__20918;
chunk__20910_20914 = G__20919;
count__20911_20915 = G__20920;
i__20912_20916 = G__20921;
continue;
}
} else
{var temp__4126__auto___20922 = cljs.core.seq.call(null,seq__20909_20913);if(temp__4126__auto___20922)
{var seq__20909_20923__$1 = temp__4126__auto___20922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20909_20923__$1))
{var c__4408__auto___20924 = cljs.core.chunk_first.call(null,seq__20909_20923__$1);{
var G__20925 = cljs.core.chunk_rest.call(null,seq__20909_20923__$1);
var G__20926 = c__4408__auto___20924;
var G__20927 = cljs.core.count.call(null,c__4408__auto___20924);
var G__20928 = (0);
seq__20909_20913 = G__20925;
chunk__20910_20914 = G__20926;
count__20911_20915 = G__20927;
i__20912_20916 = G__20928;
continue;
}
} else
{var node_20929 = cljs.core.first.call(null,seq__20909_20923__$1);goog.dom.classes.add(node_20929,class$);
{
var G__20930 = cljs.core.next.call(null,seq__20909_20923__$1);
var G__20931 = null;
var G__20932 = (0);
var G__20933 = (0);
seq__20909_20913 = G__20930;
chunk__20910_20914 = G__20931;
count__20911_20915 = G__20932;
i__20912_20916 = G__20933;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20938_20942 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20939_20943 = null;var count__20940_20944 = (0);var i__20941_20945 = (0);while(true){
if((i__20941_20945 < count__20940_20944))
{var node_20946 = cljs.core._nth.call(null,chunk__20939_20943,i__20941_20945);goog.dom.classes.remove(node_20946,class$);
{
var G__20947 = seq__20938_20942;
var G__20948 = chunk__20939_20943;
var G__20949 = count__20940_20944;
var G__20950 = (i__20941_20945 + (1));
seq__20938_20942 = G__20947;
chunk__20939_20943 = G__20948;
count__20940_20944 = G__20949;
i__20941_20945 = G__20950;
continue;
}
} else
{var temp__4126__auto___20951 = cljs.core.seq.call(null,seq__20938_20942);if(temp__4126__auto___20951)
{var seq__20938_20952__$1 = temp__4126__auto___20951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20938_20952__$1))
{var c__4408__auto___20953 = cljs.core.chunk_first.call(null,seq__20938_20952__$1);{
var G__20954 = cljs.core.chunk_rest.call(null,seq__20938_20952__$1);
var G__20955 = c__4408__auto___20953;
var G__20956 = cljs.core.count.call(null,c__4408__auto___20953);
var G__20957 = (0);
seq__20938_20942 = G__20954;
chunk__20939_20943 = G__20955;
count__20940_20944 = G__20956;
i__20941_20945 = G__20957;
continue;
}
} else
{var node_20958 = cljs.core.first.call(null,seq__20938_20952__$1);goog.dom.classes.remove(node_20958,class$);
{
var G__20959 = cljs.core.next.call(null,seq__20938_20952__$1);
var G__20960 = null;
var G__20961 = (0);
var G__20962 = (0);
seq__20938_20942 = G__20959;
chunk__20939_20943 = G__20960;
count__20940_20944 = G__20961;
i__20941_20945 = G__20962;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20967_20971 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20968_20972 = null;var count__20969_20973 = (0);var i__20970_20974 = (0);while(true){
if((i__20970_20974 < count__20969_20973))
{var node_20975 = cljs.core._nth.call(null,chunk__20968_20972,i__20970_20974);goog.dom.classes.toggle(node_20975,class$);
{
var G__20976 = seq__20967_20971;
var G__20977 = chunk__20968_20972;
var G__20978 = count__20969_20973;
var G__20979 = (i__20970_20974 + (1));
seq__20967_20971 = G__20976;
chunk__20968_20972 = G__20977;
count__20969_20973 = G__20978;
i__20970_20974 = G__20979;
continue;
}
} else
{var temp__4126__auto___20980 = cljs.core.seq.call(null,seq__20967_20971);if(temp__4126__auto___20980)
{var seq__20967_20981__$1 = temp__4126__auto___20980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20967_20981__$1))
{var c__4408__auto___20982 = cljs.core.chunk_first.call(null,seq__20967_20981__$1);{
var G__20983 = cljs.core.chunk_rest.call(null,seq__20967_20981__$1);
var G__20984 = c__4408__auto___20982;
var G__20985 = cljs.core.count.call(null,c__4408__auto___20982);
var G__20986 = (0);
seq__20967_20971 = G__20983;
chunk__20968_20972 = G__20984;
count__20969_20973 = G__20985;
i__20970_20974 = G__20986;
continue;
}
} else
{var node_20987 = cljs.core.first.call(null,seq__20967_20981__$1);goog.dom.classes.toggle(node_20987,class$);
{
var G__20988 = cljs.core.next.call(null,seq__20967_20981__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20967_20971 = G__20988;
chunk__20968_20972 = G__20989;
count__20969_20973 = G__20990;
i__20970_20974 = G__20991;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21000__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20996_21001 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20997_21002 = null;var count__20998_21003 = (0);var i__20999_21004 = (0);while(true){
if((i__20999_21004 < count__20998_21003))
{var node_21005 = cljs.core._nth.call(null,chunk__20997_21002,i__20999_21004);goog.dom.classes.set(node_21005,classes_21000__$1);
{
var G__21006 = seq__20996_21001;
var G__21007 = chunk__20997_21002;
var G__21008 = count__20998_21003;
var G__21009 = (i__20999_21004 + (1));
seq__20996_21001 = G__21006;
chunk__20997_21002 = G__21007;
count__20998_21003 = G__21008;
i__20999_21004 = G__21009;
continue;
}
} else
{var temp__4126__auto___21010 = cljs.core.seq.call(null,seq__20996_21001);if(temp__4126__auto___21010)
{var seq__20996_21011__$1 = temp__4126__auto___21010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20996_21011__$1))
{var c__4408__auto___21012 = cljs.core.chunk_first.call(null,seq__20996_21011__$1);{
var G__21013 = cljs.core.chunk_rest.call(null,seq__20996_21011__$1);
var G__21014 = c__4408__auto___21012;
var G__21015 = cljs.core.count.call(null,c__4408__auto___21012);
var G__21016 = (0);
seq__20996_21001 = G__21013;
chunk__20997_21002 = G__21014;
count__20998_21003 = G__21015;
i__20999_21004 = G__21016;
continue;
}
} else
{var node_21017 = cljs.core.first.call(null,seq__20996_21011__$1);goog.dom.classes.set(node_21017,classes_21000__$1);
{
var G__21018 = cljs.core.next.call(null,seq__20996_21011__$1);
var G__21019 = null;
var G__21020 = (0);
var G__21021 = (0);
seq__20996_21001 = G__21018;
chunk__20997_21002 = G__21019;
count__20998_21003 = G__21020;
i__20999_21004 = G__21021;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21026_21030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21027_21031 = null;var count__21028_21032 = (0);var i__21029_21033 = (0);while(true){
if((i__21029_21033 < count__21028_21032))
{var node_21034 = cljs.core._nth.call(null,chunk__21027_21031,i__21029_21033);goog.dom.setTextContent(node_21034,value);
{
var G__21035 = seq__21026_21030;
var G__21036 = chunk__21027_21031;
var G__21037 = count__21028_21032;
var G__21038 = (i__21029_21033 + (1));
seq__21026_21030 = G__21035;
chunk__21027_21031 = G__21036;
count__21028_21032 = G__21037;
i__21029_21033 = G__21038;
continue;
}
} else
{var temp__4126__auto___21039 = cljs.core.seq.call(null,seq__21026_21030);if(temp__4126__auto___21039)
{var seq__21026_21040__$1 = temp__4126__auto___21039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21026_21040__$1))
{var c__4408__auto___21041 = cljs.core.chunk_first.call(null,seq__21026_21040__$1);{
var G__21042 = cljs.core.chunk_rest.call(null,seq__21026_21040__$1);
var G__21043 = c__4408__auto___21041;
var G__21044 = cljs.core.count.call(null,c__4408__auto___21041);
var G__21045 = (0);
seq__21026_21030 = G__21042;
chunk__21027_21031 = G__21043;
count__21028_21032 = G__21044;
i__21029_21033 = G__21045;
continue;
}
} else
{var node_21046 = cljs.core.first.call(null,seq__21026_21040__$1);goog.dom.setTextContent(node_21046,value);
{
var G__21047 = cljs.core.next.call(null,seq__21026_21040__$1);
var G__21048 = null;
var G__21049 = (0);
var G__21050 = (0);
seq__21026_21030 = G__21047;
chunk__21027_21031 = G__21048;
count__21028_21032 = G__21049;
i__21029_21033 = G__21050;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21055_21059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21056_21060 = null;var count__21057_21061 = (0);var i__21058_21062 = (0);while(true){
if((i__21058_21062 < count__21057_21061))
{var node_21063 = cljs.core._nth.call(null,chunk__21056_21060,i__21058_21062);goog.dom.forms.setValue(node_21063,value);
{
var G__21064 = seq__21055_21059;
var G__21065 = chunk__21056_21060;
var G__21066 = count__21057_21061;
var G__21067 = (i__21058_21062 + (1));
seq__21055_21059 = G__21064;
chunk__21056_21060 = G__21065;
count__21057_21061 = G__21066;
i__21058_21062 = G__21067;
continue;
}
} else
{var temp__4126__auto___21068 = cljs.core.seq.call(null,seq__21055_21059);if(temp__4126__auto___21068)
{var seq__21055_21069__$1 = temp__4126__auto___21068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055_21069__$1))
{var c__4408__auto___21070 = cljs.core.chunk_first.call(null,seq__21055_21069__$1);{
var G__21071 = cljs.core.chunk_rest.call(null,seq__21055_21069__$1);
var G__21072 = c__4408__auto___21070;
var G__21073 = cljs.core.count.call(null,c__4408__auto___21070);
var G__21074 = (0);
seq__21055_21059 = G__21071;
chunk__21056_21060 = G__21072;
count__21057_21061 = G__21073;
i__21058_21062 = G__21074;
continue;
}
} else
{var node_21075 = cljs.core.first.call(null,seq__21055_21069__$1);goog.dom.forms.setValue(node_21075,value);
{
var G__21076 = cljs.core.next.call(null,seq__21055_21069__$1);
var G__21077 = null;
var G__21078 = (0);
var G__21079 = (0);
seq__21055_21059 = G__21076;
chunk__21056_21060 = G__21077;
count__21057_21061 = G__21078;
i__21058_21062 = G__21079;
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
{var value_21090 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21086_21091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21087_21092 = null;var count__21088_21093 = (0);var i__21089_21094 = (0);while(true){
if((i__21089_21094 < count__21088_21093))
{var node_21095 = cljs.core._nth.call(null,chunk__21087_21092,i__21089_21094);node_21095.innerHTML = value_21090;
{
var G__21096 = seq__21086_21091;
var G__21097 = chunk__21087_21092;
var G__21098 = count__21088_21093;
var G__21099 = (i__21089_21094 + (1));
seq__21086_21091 = G__21096;
chunk__21087_21092 = G__21097;
count__21088_21093 = G__21098;
i__21089_21094 = G__21099;
continue;
}
} else
{var temp__4126__auto___21100 = cljs.core.seq.call(null,seq__21086_21091);if(temp__4126__auto___21100)
{var seq__21086_21101__$1 = temp__4126__auto___21100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21086_21101__$1))
{var c__4408__auto___21102 = cljs.core.chunk_first.call(null,seq__21086_21101__$1);{
var G__21103 = cljs.core.chunk_rest.call(null,seq__21086_21101__$1);
var G__21104 = c__4408__auto___21102;
var G__21105 = cljs.core.count.call(null,c__4408__auto___21102);
var G__21106 = (0);
seq__21086_21091 = G__21103;
chunk__21087_21092 = G__21104;
count__21088_21093 = G__21105;
i__21089_21094 = G__21106;
continue;
}
} else
{var node_21107 = cljs.core.first.call(null,seq__21086_21101__$1);node_21107.innerHTML = value_21090;
{
var G__21108 = cljs.core.next.call(null,seq__21086_21101__$1);
var G__21109 = null;
var G__21110 = (0);
var G__21111 = (0);
seq__21086_21091 = G__21108;
chunk__21087_21092 = G__21109;
count__21088_21093 = G__21110;
i__21089_21094 = G__21111;
continue;
}
}
} else
{}
}
break;
}
}catch (e21085){if((e21085 instanceof Error))
{var e_21112 = e21085;domina.replace_children_BANG_.call(null,content,value_21090);
} else
{throw e21085;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21119_21123 = cljs.core.seq.call(null,children);var chunk__21120_21124 = null;var count__21121_21125 = (0);var i__21122_21126 = (0);while(true){
if((i__21122_21126 < count__21121_21125))
{var child_21127 = cljs.core._nth.call(null,chunk__21120_21124,i__21122_21126);frag.appendChild(child_21127);
{
var G__21128 = seq__21119_21123;
var G__21129 = chunk__21120_21124;
var G__21130 = count__21121_21125;
var G__21131 = (i__21122_21126 + (1));
seq__21119_21123 = G__21128;
chunk__21120_21124 = G__21129;
count__21121_21125 = G__21130;
i__21122_21126 = G__21131;
continue;
}
} else
{var temp__4126__auto___21132 = cljs.core.seq.call(null,seq__21119_21123);if(temp__4126__auto___21132)
{var seq__21119_21133__$1 = temp__4126__auto___21132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21119_21133__$1))
{var c__4408__auto___21134 = cljs.core.chunk_first.call(null,seq__21119_21133__$1);{
var G__21135 = cljs.core.chunk_rest.call(null,seq__21119_21133__$1);
var G__21136 = c__4408__auto___21134;
var G__21137 = cljs.core.count.call(null,c__4408__auto___21134);
var G__21138 = (0);
seq__21119_21123 = G__21135;
chunk__21120_21124 = G__21136;
count__21121_21125 = G__21137;
i__21122_21126 = G__21138;
continue;
}
} else
{var child_21139 = cljs.core.first.call(null,seq__21119_21133__$1);frag.appendChild(child_21139);
{
var G__21140 = cljs.core.next.call(null,seq__21119_21133__$1);
var G__21141 = null;
var G__21142 = (0);
var G__21143 = (0);
seq__21119_21123 = G__21140;
chunk__21120_21124 = G__21141;
count__21121_21125 = G__21142;
i__21122_21126 = G__21143;
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
return (function (p1__21113_SHARP_,p2__21114_SHARP_){return f.call(null,p1__21113_SHARP_,p2__21114_SHARP_);
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
{if((function (){var G__21145 = list_thing;if(G__21145)
{var bit__4302__auto__ = (G__21145.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21145.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21145.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21145);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21145);
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
{if((function (){var G__21146 = content;if(G__21146)
{var bit__4302__auto__ = (G__21146.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21146.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21146.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21146);
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
{if((function (){var G__21147 = content;if(G__21147)
{var bit__4302__auto__ = (G__21147.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21147.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21147);
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
