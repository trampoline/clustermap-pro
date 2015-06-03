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
var opt_wrapper_23633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_23635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23635,opt_wrapper_23633,table_section_wrapper_23634,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_23633,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_23634,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23634,cell_wrapper_23635,table_section_wrapper_23634,table_section_wrapper_23634]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__23640 = cljs.core.seq.call(null,tbody);var chunk__23641 = null;var count__23642 = (0);var i__23643 = (0);while(true){
if((i__23643 < count__23642))
{var child = cljs.core._nth.call(null,chunk__23641,i__23643);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23644 = seq__23640;
var G__23645 = chunk__23641;
var G__23646 = count__23642;
var G__23647 = (i__23643 + (1));
seq__23640 = G__23644;
chunk__23641 = G__23645;
count__23642 = G__23646;
i__23643 = G__23647;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23640);if(temp__4126__auto__)
{var seq__23640__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23640__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23640__$1);{
var G__23648 = cljs.core.chunk_rest.call(null,seq__23640__$1);
var G__23649 = c__4408__auto__;
var G__23650 = cljs.core.count.call(null,c__4408__auto__);
var G__23651 = (0);
seq__23640 = G__23648;
chunk__23641 = G__23649;
count__23642 = G__23650;
i__23643 = G__23651;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__23640__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23652 = cljs.core.next.call(null,seq__23640__$1);
var G__23653 = null;
var G__23654 = (0);
var G__23655 = (0);
seq__23640 = G__23652;
chunk__23641 = G__23653;
count__23642 = G__23654;
i__23643 = G__23655;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__23657 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__23657,(0),null);var start_wrap = cljs.core.nth.call(null,vec__23657,(1),null);var end_wrap = cljs.core.nth.call(null,vec__23657,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__23658 = wrapper.lastChild;
var G__23659 = (level - (1));
wrapper = G__23658;
level = G__23659;
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
domina.DomContent = (function (){var obj23661 = {};return obj23661;
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
log_debug.cljs$lang$applyTo = (function (arglist__23662){
var mesg = cljs.core.seq(arglist__23662);
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
log.cljs$lang$applyTo = (function (arglist__23663){
var mesg = cljs.core.seq(arglist__23663);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23664){
var contents = cljs.core.seq(arglist__23664);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__23665_SHARP_){return p1__23665_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__23666_SHARP_,p2__23667_SHARP_){return goog.dom.insertChildAt(p1__23666_SHARP_,p2__23667_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23669_SHARP_,p2__23668_SHARP_){return goog.dom.insertSiblingBefore(p2__23668_SHARP_,p1__23669_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23671_SHARP_,p2__23670_SHARP_){return goog.dom.insertSiblingAfter(p2__23670_SHARP_,p1__23671_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__23673_SHARP_,p2__23672_SHARP_){return goog.dom.replaceNode(p2__23672_SHARP_,p1__23673_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23678_23682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23679_23683 = null;var count__23680_23684 = (0);var i__23681_23685 = (0);while(true){
if((i__23681_23685 < count__23680_23684))
{var n_23686 = cljs.core._nth.call(null,chunk__23679_23683,i__23681_23685);goog.style.setStyle(n_23686,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23687 = seq__23678_23682;
var G__23688 = chunk__23679_23683;
var G__23689 = count__23680_23684;
var G__23690 = (i__23681_23685 + (1));
seq__23678_23682 = G__23687;
chunk__23679_23683 = G__23688;
count__23680_23684 = G__23689;
i__23681_23685 = G__23690;
continue;
}
} else
{var temp__4126__auto___23691 = cljs.core.seq.call(null,seq__23678_23682);if(temp__4126__auto___23691)
{var seq__23678_23692__$1 = temp__4126__auto___23691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23678_23692__$1))
{var c__4408__auto___23693 = cljs.core.chunk_first.call(null,seq__23678_23692__$1);{
var G__23694 = cljs.core.chunk_rest.call(null,seq__23678_23692__$1);
var G__23695 = c__4408__auto___23693;
var G__23696 = cljs.core.count.call(null,c__4408__auto___23693);
var G__23697 = (0);
seq__23678_23682 = G__23694;
chunk__23679_23683 = G__23695;
count__23680_23684 = G__23696;
i__23681_23685 = G__23697;
continue;
}
} else
{var n_23698 = cljs.core.first.call(null,seq__23678_23692__$1);goog.style.setStyle(n_23698,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23699 = cljs.core.next.call(null,seq__23678_23692__$1);
var G__23700 = null;
var G__23701 = (0);
var G__23702 = (0);
seq__23678_23682 = G__23699;
chunk__23679_23683 = G__23700;
count__23680_23684 = G__23701;
i__23681_23685 = G__23702;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23703){
var content = cljs.core.first(arglist__23703);
arglist__23703 = cljs.core.next(arglist__23703);
var name = cljs.core.first(arglist__23703);
var value = cljs.core.rest(arglist__23703);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23708_23712 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23709_23713 = null;var count__23710_23714 = (0);var i__23711_23715 = (0);while(true){
if((i__23711_23715 < count__23710_23714))
{var n_23716 = cljs.core._nth.call(null,chunk__23709_23713,i__23711_23715);n_23716.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23717 = seq__23708_23712;
var G__23718 = chunk__23709_23713;
var G__23719 = count__23710_23714;
var G__23720 = (i__23711_23715 + (1));
seq__23708_23712 = G__23717;
chunk__23709_23713 = G__23718;
count__23710_23714 = G__23719;
i__23711_23715 = G__23720;
continue;
}
} else
{var temp__4126__auto___23721 = cljs.core.seq.call(null,seq__23708_23712);if(temp__4126__auto___23721)
{var seq__23708_23722__$1 = temp__4126__auto___23721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23708_23722__$1))
{var c__4408__auto___23723 = cljs.core.chunk_first.call(null,seq__23708_23722__$1);{
var G__23724 = cljs.core.chunk_rest.call(null,seq__23708_23722__$1);
var G__23725 = c__4408__auto___23723;
var G__23726 = cljs.core.count.call(null,c__4408__auto___23723);
var G__23727 = (0);
seq__23708_23712 = G__23724;
chunk__23709_23713 = G__23725;
count__23710_23714 = G__23726;
i__23711_23715 = G__23727;
continue;
}
} else
{var n_23728 = cljs.core.first.call(null,seq__23708_23722__$1);n_23728.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23729 = cljs.core.next.call(null,seq__23708_23722__$1);
var G__23730 = null;
var G__23731 = (0);
var G__23732 = (0);
seq__23708_23712 = G__23729;
chunk__23709_23713 = G__23730;
count__23710_23714 = G__23731;
i__23711_23715 = G__23732;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23733){
var content = cljs.core.first(arglist__23733);
arglist__23733 = cljs.core.next(arglist__23733);
var name = cljs.core.first(arglist__23733);
var value = cljs.core.rest(arglist__23733);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23738_23742 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23739_23743 = null;var count__23740_23744 = (0);var i__23741_23745 = (0);while(true){
if((i__23741_23745 < count__23740_23744))
{var n_23746 = cljs.core._nth.call(null,chunk__23739_23743,i__23741_23745);n_23746.removeAttribute(cljs.core.name.call(null,name));
{
var G__23747 = seq__23738_23742;
var G__23748 = chunk__23739_23743;
var G__23749 = count__23740_23744;
var G__23750 = (i__23741_23745 + (1));
seq__23738_23742 = G__23747;
chunk__23739_23743 = G__23748;
count__23740_23744 = G__23749;
i__23741_23745 = G__23750;
continue;
}
} else
{var temp__4126__auto___23751 = cljs.core.seq.call(null,seq__23738_23742);if(temp__4126__auto___23751)
{var seq__23738_23752__$1 = temp__4126__auto___23751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23738_23752__$1))
{var c__4408__auto___23753 = cljs.core.chunk_first.call(null,seq__23738_23752__$1);{
var G__23754 = cljs.core.chunk_rest.call(null,seq__23738_23752__$1);
var G__23755 = c__4408__auto___23753;
var G__23756 = cljs.core.count.call(null,c__4408__auto___23753);
var G__23757 = (0);
seq__23738_23742 = G__23754;
chunk__23739_23743 = G__23755;
count__23740_23744 = G__23756;
i__23741_23745 = G__23757;
continue;
}
} else
{var n_23758 = cljs.core.first.call(null,seq__23738_23752__$1);n_23758.removeAttribute(cljs.core.name.call(null,name));
{
var G__23759 = cljs.core.next.call(null,seq__23738_23752__$1);
var G__23760 = null;
var G__23761 = (0);
var G__23762 = (0);
seq__23738_23742 = G__23759;
chunk__23739_23743 = G__23760;
count__23740_23744 = G__23761;
i__23741_23745 = G__23762;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__23764 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__23764,(0),null);var v = cljs.core.nth.call(null,vec__23764,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__23765_SHARP_){var attr = attrs__$1.item(p1__23765_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23772_23778 = cljs.core.seq.call(null,styles);var chunk__23773_23779 = null;var count__23774_23780 = (0);var i__23775_23781 = (0);while(true){
if((i__23775_23781 < count__23774_23780))
{var vec__23776_23782 = cljs.core._nth.call(null,chunk__23773_23779,i__23775_23781);var name_23783 = cljs.core.nth.call(null,vec__23776_23782,(0),null);var value_23784 = cljs.core.nth.call(null,vec__23776_23782,(1),null);domina.set_style_BANG_.call(null,content,name_23783,value_23784);
{
var G__23785 = seq__23772_23778;
var G__23786 = chunk__23773_23779;
var G__23787 = count__23774_23780;
var G__23788 = (i__23775_23781 + (1));
seq__23772_23778 = G__23785;
chunk__23773_23779 = G__23786;
count__23774_23780 = G__23787;
i__23775_23781 = G__23788;
continue;
}
} else
{var temp__4126__auto___23789 = cljs.core.seq.call(null,seq__23772_23778);if(temp__4126__auto___23789)
{var seq__23772_23790__$1 = temp__4126__auto___23789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23772_23790__$1))
{var c__4408__auto___23791 = cljs.core.chunk_first.call(null,seq__23772_23790__$1);{
var G__23792 = cljs.core.chunk_rest.call(null,seq__23772_23790__$1);
var G__23793 = c__4408__auto___23791;
var G__23794 = cljs.core.count.call(null,c__4408__auto___23791);
var G__23795 = (0);
seq__23772_23778 = G__23792;
chunk__23773_23779 = G__23793;
count__23774_23780 = G__23794;
i__23775_23781 = G__23795;
continue;
}
} else
{var vec__23777_23796 = cljs.core.first.call(null,seq__23772_23790__$1);var name_23797 = cljs.core.nth.call(null,vec__23777_23796,(0),null);var value_23798 = cljs.core.nth.call(null,vec__23777_23796,(1),null);domina.set_style_BANG_.call(null,content,name_23797,value_23798);
{
var G__23799 = cljs.core.next.call(null,seq__23772_23790__$1);
var G__23800 = null;
var G__23801 = (0);
var G__23802 = (0);
seq__23772_23778 = G__23799;
chunk__23773_23779 = G__23800;
count__23774_23780 = G__23801;
i__23775_23781 = G__23802;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23809_23815 = cljs.core.seq.call(null,attrs);var chunk__23810_23816 = null;var count__23811_23817 = (0);var i__23812_23818 = (0);while(true){
if((i__23812_23818 < count__23811_23817))
{var vec__23813_23819 = cljs.core._nth.call(null,chunk__23810_23816,i__23812_23818);var name_23820 = cljs.core.nth.call(null,vec__23813_23819,(0),null);var value_23821 = cljs.core.nth.call(null,vec__23813_23819,(1),null);domina.set_attr_BANG_.call(null,content,name_23820,value_23821);
{
var G__23822 = seq__23809_23815;
var G__23823 = chunk__23810_23816;
var G__23824 = count__23811_23817;
var G__23825 = (i__23812_23818 + (1));
seq__23809_23815 = G__23822;
chunk__23810_23816 = G__23823;
count__23811_23817 = G__23824;
i__23812_23818 = G__23825;
continue;
}
} else
{var temp__4126__auto___23826 = cljs.core.seq.call(null,seq__23809_23815);if(temp__4126__auto___23826)
{var seq__23809_23827__$1 = temp__4126__auto___23826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23809_23827__$1))
{var c__4408__auto___23828 = cljs.core.chunk_first.call(null,seq__23809_23827__$1);{
var G__23829 = cljs.core.chunk_rest.call(null,seq__23809_23827__$1);
var G__23830 = c__4408__auto___23828;
var G__23831 = cljs.core.count.call(null,c__4408__auto___23828);
var G__23832 = (0);
seq__23809_23815 = G__23829;
chunk__23810_23816 = G__23830;
count__23811_23817 = G__23831;
i__23812_23818 = G__23832;
continue;
}
} else
{var vec__23814_23833 = cljs.core.first.call(null,seq__23809_23827__$1);var name_23834 = cljs.core.nth.call(null,vec__23814_23833,(0),null);var value_23835 = cljs.core.nth.call(null,vec__23814_23833,(1),null);domina.set_attr_BANG_.call(null,content,name_23834,value_23835);
{
var G__23836 = cljs.core.next.call(null,seq__23809_23827__$1);
var G__23837 = null;
var G__23838 = (0);
var G__23839 = (0);
seq__23809_23815 = G__23836;
chunk__23810_23816 = G__23837;
count__23811_23817 = G__23838;
i__23812_23818 = G__23839;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23844_23848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23845_23849 = null;var count__23846_23850 = (0);var i__23847_23851 = (0);while(true){
if((i__23847_23851 < count__23846_23850))
{var node_23852 = cljs.core._nth.call(null,chunk__23845_23849,i__23847_23851);goog.dom.classes.add(node_23852,class$);
{
var G__23853 = seq__23844_23848;
var G__23854 = chunk__23845_23849;
var G__23855 = count__23846_23850;
var G__23856 = (i__23847_23851 + (1));
seq__23844_23848 = G__23853;
chunk__23845_23849 = G__23854;
count__23846_23850 = G__23855;
i__23847_23851 = G__23856;
continue;
}
} else
{var temp__4126__auto___23857 = cljs.core.seq.call(null,seq__23844_23848);if(temp__4126__auto___23857)
{var seq__23844_23858__$1 = temp__4126__auto___23857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23844_23858__$1))
{var c__4408__auto___23859 = cljs.core.chunk_first.call(null,seq__23844_23858__$1);{
var G__23860 = cljs.core.chunk_rest.call(null,seq__23844_23858__$1);
var G__23861 = c__4408__auto___23859;
var G__23862 = cljs.core.count.call(null,c__4408__auto___23859);
var G__23863 = (0);
seq__23844_23848 = G__23860;
chunk__23845_23849 = G__23861;
count__23846_23850 = G__23862;
i__23847_23851 = G__23863;
continue;
}
} else
{var node_23864 = cljs.core.first.call(null,seq__23844_23858__$1);goog.dom.classes.add(node_23864,class$);
{
var G__23865 = cljs.core.next.call(null,seq__23844_23858__$1);
var G__23866 = null;
var G__23867 = (0);
var G__23868 = (0);
seq__23844_23848 = G__23865;
chunk__23845_23849 = G__23866;
count__23846_23850 = G__23867;
i__23847_23851 = G__23868;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23873_23877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23874_23878 = null;var count__23875_23879 = (0);var i__23876_23880 = (0);while(true){
if((i__23876_23880 < count__23875_23879))
{var node_23881 = cljs.core._nth.call(null,chunk__23874_23878,i__23876_23880);goog.dom.classes.remove(node_23881,class$);
{
var G__23882 = seq__23873_23877;
var G__23883 = chunk__23874_23878;
var G__23884 = count__23875_23879;
var G__23885 = (i__23876_23880 + (1));
seq__23873_23877 = G__23882;
chunk__23874_23878 = G__23883;
count__23875_23879 = G__23884;
i__23876_23880 = G__23885;
continue;
}
} else
{var temp__4126__auto___23886 = cljs.core.seq.call(null,seq__23873_23877);if(temp__4126__auto___23886)
{var seq__23873_23887__$1 = temp__4126__auto___23886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23873_23887__$1))
{var c__4408__auto___23888 = cljs.core.chunk_first.call(null,seq__23873_23887__$1);{
var G__23889 = cljs.core.chunk_rest.call(null,seq__23873_23887__$1);
var G__23890 = c__4408__auto___23888;
var G__23891 = cljs.core.count.call(null,c__4408__auto___23888);
var G__23892 = (0);
seq__23873_23877 = G__23889;
chunk__23874_23878 = G__23890;
count__23875_23879 = G__23891;
i__23876_23880 = G__23892;
continue;
}
} else
{var node_23893 = cljs.core.first.call(null,seq__23873_23887__$1);goog.dom.classes.remove(node_23893,class$);
{
var G__23894 = cljs.core.next.call(null,seq__23873_23887__$1);
var G__23895 = null;
var G__23896 = (0);
var G__23897 = (0);
seq__23873_23877 = G__23894;
chunk__23874_23878 = G__23895;
count__23875_23879 = G__23896;
i__23876_23880 = G__23897;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23902_23906 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23903_23907 = null;var count__23904_23908 = (0);var i__23905_23909 = (0);while(true){
if((i__23905_23909 < count__23904_23908))
{var node_23910 = cljs.core._nth.call(null,chunk__23903_23907,i__23905_23909);goog.dom.classes.toggle(node_23910,class$);
{
var G__23911 = seq__23902_23906;
var G__23912 = chunk__23903_23907;
var G__23913 = count__23904_23908;
var G__23914 = (i__23905_23909 + (1));
seq__23902_23906 = G__23911;
chunk__23903_23907 = G__23912;
count__23904_23908 = G__23913;
i__23905_23909 = G__23914;
continue;
}
} else
{var temp__4126__auto___23915 = cljs.core.seq.call(null,seq__23902_23906);if(temp__4126__auto___23915)
{var seq__23902_23916__$1 = temp__4126__auto___23915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23902_23916__$1))
{var c__4408__auto___23917 = cljs.core.chunk_first.call(null,seq__23902_23916__$1);{
var G__23918 = cljs.core.chunk_rest.call(null,seq__23902_23916__$1);
var G__23919 = c__4408__auto___23917;
var G__23920 = cljs.core.count.call(null,c__4408__auto___23917);
var G__23921 = (0);
seq__23902_23906 = G__23918;
chunk__23903_23907 = G__23919;
count__23904_23908 = G__23920;
i__23905_23909 = G__23921;
continue;
}
} else
{var node_23922 = cljs.core.first.call(null,seq__23902_23916__$1);goog.dom.classes.toggle(node_23922,class$);
{
var G__23923 = cljs.core.next.call(null,seq__23902_23916__$1);
var G__23924 = null;
var G__23925 = (0);
var G__23926 = (0);
seq__23902_23906 = G__23923;
chunk__23903_23907 = G__23924;
count__23904_23908 = G__23925;
i__23905_23909 = G__23926;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_23935__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__23931_23936 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23932_23937 = null;var count__23933_23938 = (0);var i__23934_23939 = (0);while(true){
if((i__23934_23939 < count__23933_23938))
{var node_23940 = cljs.core._nth.call(null,chunk__23932_23937,i__23934_23939);goog.dom.classes.set(node_23940,classes_23935__$1);
{
var G__23941 = seq__23931_23936;
var G__23942 = chunk__23932_23937;
var G__23943 = count__23933_23938;
var G__23944 = (i__23934_23939 + (1));
seq__23931_23936 = G__23941;
chunk__23932_23937 = G__23942;
count__23933_23938 = G__23943;
i__23934_23939 = G__23944;
continue;
}
} else
{var temp__4126__auto___23945 = cljs.core.seq.call(null,seq__23931_23936);if(temp__4126__auto___23945)
{var seq__23931_23946__$1 = temp__4126__auto___23945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23931_23946__$1))
{var c__4408__auto___23947 = cljs.core.chunk_first.call(null,seq__23931_23946__$1);{
var G__23948 = cljs.core.chunk_rest.call(null,seq__23931_23946__$1);
var G__23949 = c__4408__auto___23947;
var G__23950 = cljs.core.count.call(null,c__4408__auto___23947);
var G__23951 = (0);
seq__23931_23936 = G__23948;
chunk__23932_23937 = G__23949;
count__23933_23938 = G__23950;
i__23934_23939 = G__23951;
continue;
}
} else
{var node_23952 = cljs.core.first.call(null,seq__23931_23946__$1);goog.dom.classes.set(node_23952,classes_23935__$1);
{
var G__23953 = cljs.core.next.call(null,seq__23931_23946__$1);
var G__23954 = null;
var G__23955 = (0);
var G__23956 = (0);
seq__23931_23936 = G__23953;
chunk__23932_23937 = G__23954;
count__23933_23938 = G__23955;
i__23934_23939 = G__23956;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__23961_23965 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23962_23966 = null;var count__23963_23967 = (0);var i__23964_23968 = (0);while(true){
if((i__23964_23968 < count__23963_23967))
{var node_23969 = cljs.core._nth.call(null,chunk__23962_23966,i__23964_23968);goog.dom.setTextContent(node_23969,value);
{
var G__23970 = seq__23961_23965;
var G__23971 = chunk__23962_23966;
var G__23972 = count__23963_23967;
var G__23973 = (i__23964_23968 + (1));
seq__23961_23965 = G__23970;
chunk__23962_23966 = G__23971;
count__23963_23967 = G__23972;
i__23964_23968 = G__23973;
continue;
}
} else
{var temp__4126__auto___23974 = cljs.core.seq.call(null,seq__23961_23965);if(temp__4126__auto___23974)
{var seq__23961_23975__$1 = temp__4126__auto___23974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23961_23975__$1))
{var c__4408__auto___23976 = cljs.core.chunk_first.call(null,seq__23961_23975__$1);{
var G__23977 = cljs.core.chunk_rest.call(null,seq__23961_23975__$1);
var G__23978 = c__4408__auto___23976;
var G__23979 = cljs.core.count.call(null,c__4408__auto___23976);
var G__23980 = (0);
seq__23961_23965 = G__23977;
chunk__23962_23966 = G__23978;
count__23963_23967 = G__23979;
i__23964_23968 = G__23980;
continue;
}
} else
{var node_23981 = cljs.core.first.call(null,seq__23961_23975__$1);goog.dom.setTextContent(node_23981,value);
{
var G__23982 = cljs.core.next.call(null,seq__23961_23975__$1);
var G__23983 = null;
var G__23984 = (0);
var G__23985 = (0);
seq__23961_23965 = G__23982;
chunk__23962_23966 = G__23983;
count__23963_23967 = G__23984;
i__23964_23968 = G__23985;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__23990_23994 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23991_23995 = null;var count__23992_23996 = (0);var i__23993_23997 = (0);while(true){
if((i__23993_23997 < count__23992_23996))
{var node_23998 = cljs.core._nth.call(null,chunk__23991_23995,i__23993_23997);goog.dom.forms.setValue(node_23998,value);
{
var G__23999 = seq__23990_23994;
var G__24000 = chunk__23991_23995;
var G__24001 = count__23992_23996;
var G__24002 = (i__23993_23997 + (1));
seq__23990_23994 = G__23999;
chunk__23991_23995 = G__24000;
count__23992_23996 = G__24001;
i__23993_23997 = G__24002;
continue;
}
} else
{var temp__4126__auto___24003 = cljs.core.seq.call(null,seq__23990_23994);if(temp__4126__auto___24003)
{var seq__23990_24004__$1 = temp__4126__auto___24003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23990_24004__$1))
{var c__4408__auto___24005 = cljs.core.chunk_first.call(null,seq__23990_24004__$1);{
var G__24006 = cljs.core.chunk_rest.call(null,seq__23990_24004__$1);
var G__24007 = c__4408__auto___24005;
var G__24008 = cljs.core.count.call(null,c__4408__auto___24005);
var G__24009 = (0);
seq__23990_23994 = G__24006;
chunk__23991_23995 = G__24007;
count__23992_23996 = G__24008;
i__23993_23997 = G__24009;
continue;
}
} else
{var node_24010 = cljs.core.first.call(null,seq__23990_24004__$1);goog.dom.forms.setValue(node_24010,value);
{
var G__24011 = cljs.core.next.call(null,seq__23990_24004__$1);
var G__24012 = null;
var G__24013 = (0);
var G__24014 = (0);
seq__23990_23994 = G__24011;
chunk__23991_23995 = G__24012;
count__23992_23996 = G__24013;
i__23993_23997 = G__24014;
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
{var value_24025 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24021_24026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24022_24027 = null;var count__24023_24028 = (0);var i__24024_24029 = (0);while(true){
if((i__24024_24029 < count__24023_24028))
{var node_24030 = cljs.core._nth.call(null,chunk__24022_24027,i__24024_24029);node_24030.innerHTML = value_24025;
{
var G__24031 = seq__24021_24026;
var G__24032 = chunk__24022_24027;
var G__24033 = count__24023_24028;
var G__24034 = (i__24024_24029 + (1));
seq__24021_24026 = G__24031;
chunk__24022_24027 = G__24032;
count__24023_24028 = G__24033;
i__24024_24029 = G__24034;
continue;
}
} else
{var temp__4126__auto___24035 = cljs.core.seq.call(null,seq__24021_24026);if(temp__4126__auto___24035)
{var seq__24021_24036__$1 = temp__4126__auto___24035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021_24036__$1))
{var c__4408__auto___24037 = cljs.core.chunk_first.call(null,seq__24021_24036__$1);{
var G__24038 = cljs.core.chunk_rest.call(null,seq__24021_24036__$1);
var G__24039 = c__4408__auto___24037;
var G__24040 = cljs.core.count.call(null,c__4408__auto___24037);
var G__24041 = (0);
seq__24021_24026 = G__24038;
chunk__24022_24027 = G__24039;
count__24023_24028 = G__24040;
i__24024_24029 = G__24041;
continue;
}
} else
{var node_24042 = cljs.core.first.call(null,seq__24021_24036__$1);node_24042.innerHTML = value_24025;
{
var G__24043 = cljs.core.next.call(null,seq__24021_24036__$1);
var G__24044 = null;
var G__24045 = (0);
var G__24046 = (0);
seq__24021_24026 = G__24043;
chunk__24022_24027 = G__24044;
count__24023_24028 = G__24045;
i__24024_24029 = G__24046;
continue;
}
}
} else
{}
}
break;
}
}catch (e24020){if((e24020 instanceof Error))
{var e_24047 = e24020;domina.replace_children_BANG_.call(null,content,value_24025);
} else
{throw e24020;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24054_24058 = cljs.core.seq.call(null,children);var chunk__24055_24059 = null;var count__24056_24060 = (0);var i__24057_24061 = (0);while(true){
if((i__24057_24061 < count__24056_24060))
{var child_24062 = cljs.core._nth.call(null,chunk__24055_24059,i__24057_24061);frag.appendChild(child_24062);
{
var G__24063 = seq__24054_24058;
var G__24064 = chunk__24055_24059;
var G__24065 = count__24056_24060;
var G__24066 = (i__24057_24061 + (1));
seq__24054_24058 = G__24063;
chunk__24055_24059 = G__24064;
count__24056_24060 = G__24065;
i__24057_24061 = G__24066;
continue;
}
} else
{var temp__4126__auto___24067 = cljs.core.seq.call(null,seq__24054_24058);if(temp__4126__auto___24067)
{var seq__24054_24068__$1 = temp__4126__auto___24067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24054_24068__$1))
{var c__4408__auto___24069 = cljs.core.chunk_first.call(null,seq__24054_24068__$1);{
var G__24070 = cljs.core.chunk_rest.call(null,seq__24054_24068__$1);
var G__24071 = c__4408__auto___24069;
var G__24072 = cljs.core.count.call(null,c__4408__auto___24069);
var G__24073 = (0);
seq__24054_24058 = G__24070;
chunk__24055_24059 = G__24071;
count__24056_24060 = G__24072;
i__24057_24061 = G__24073;
continue;
}
} else
{var child_24074 = cljs.core.first.call(null,seq__24054_24068__$1);frag.appendChild(child_24074);
{
var G__24075 = cljs.core.next.call(null,seq__24054_24068__$1);
var G__24076 = null;
var G__24077 = (0);
var G__24078 = (0);
seq__24054_24058 = G__24075;
chunk__24055_24059 = G__24076;
count__24056_24060 = G__24077;
i__24057_24061 = G__24078;
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
return (function (p1__24048_SHARP_,p2__24049_SHARP_){return f.call(null,p1__24048_SHARP_,p2__24049_SHARP_);
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
{if((function (){var G__24080 = list_thing;if(G__24080)
{var bit__4302__auto__ = (G__24080.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24080.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24080);
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
{if((function (){var G__24081 = content;if(G__24081)
{var bit__4302__auto__ = (G__24081.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24081.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24081);
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
{if((function (){var G__24082 = content;if(G__24082)
{var bit__4302__auto__ = (G__24082.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__24082.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24082.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24082);
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
