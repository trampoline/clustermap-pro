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
var opt_wrapper_20531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20533 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20533,opt_wrapper_20531,table_section_wrapper_20532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20531,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20532,cell_wrapper_20533,table_section_wrapper_20532,table_section_wrapper_20532]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20538 = cljs.core.seq.call(null,tbody);var chunk__20539 = null;var count__20540 = (0);var i__20541 = (0);while(true){
if((i__20541 < count__20540))
{var child = cljs.core._nth.call(null,chunk__20539,i__20541);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20542 = seq__20538;
var G__20543 = chunk__20539;
var G__20544 = count__20540;
var G__20545 = (i__20541 + (1));
seq__20538 = G__20542;
chunk__20539 = G__20543;
count__20540 = G__20544;
i__20541 = G__20545;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20538);if(temp__4126__auto__)
{var seq__20538__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20538__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20538__$1);{
var G__20546 = cljs.core.chunk_rest.call(null,seq__20538__$1);
var G__20547 = c__4408__auto__;
var G__20548 = cljs.core.count.call(null,c__4408__auto__);
var G__20549 = (0);
seq__20538 = G__20546;
chunk__20539 = G__20547;
count__20540 = G__20548;
i__20541 = G__20549;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20538__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20550 = cljs.core.next.call(null,seq__20538__$1);
var G__20551 = null;
var G__20552 = (0);
var G__20553 = (0);
seq__20538 = G__20550;
chunk__20539 = G__20551;
count__20540 = G__20552;
i__20541 = G__20553;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20555 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20555,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20555,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20555,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20556 = wrapper.lastChild;
var G__20557 = (level - (1));
wrapper = G__20556;
level = G__20557;
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
domina.DomContent = (function (){var obj20559 = {};return obj20559;
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
log_debug.cljs$lang$applyTo = (function (arglist__20560){
var mesg = cljs.core.seq(arglist__20560);
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
log.cljs$lang$applyTo = (function (arglist__20561){
var mesg = cljs.core.seq(arglist__20561);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20562){
var contents = cljs.core.seq(arglist__20562);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20563_SHARP_){return p1__20563_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20564_SHARP_,p2__20565_SHARP_){return goog.dom.insertChildAt(p1__20564_SHARP_,p2__20565_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20567_SHARP_,p2__20566_SHARP_){return goog.dom.insertSiblingBefore(p2__20566_SHARP_,p1__20567_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20569_SHARP_,p2__20568_SHARP_){return goog.dom.insertSiblingAfter(p2__20568_SHARP_,p1__20569_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20571_SHARP_,p2__20570_SHARP_){return goog.dom.replaceNode(p2__20570_SHARP_,p1__20571_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20576_20580 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20577_20581 = null;var count__20578_20582 = (0);var i__20579_20583 = (0);while(true){
if((i__20579_20583 < count__20578_20582))
{var n_20584 = cljs.core._nth.call(null,chunk__20577_20581,i__20579_20583);goog.style.setStyle(n_20584,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20585 = seq__20576_20580;
var G__20586 = chunk__20577_20581;
var G__20587 = count__20578_20582;
var G__20588 = (i__20579_20583 + (1));
seq__20576_20580 = G__20585;
chunk__20577_20581 = G__20586;
count__20578_20582 = G__20587;
i__20579_20583 = G__20588;
continue;
}
} else
{var temp__4126__auto___20589 = cljs.core.seq.call(null,seq__20576_20580);if(temp__4126__auto___20589)
{var seq__20576_20590__$1 = temp__4126__auto___20589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20576_20590__$1))
{var c__4408__auto___20591 = cljs.core.chunk_first.call(null,seq__20576_20590__$1);{
var G__20592 = cljs.core.chunk_rest.call(null,seq__20576_20590__$1);
var G__20593 = c__4408__auto___20591;
var G__20594 = cljs.core.count.call(null,c__4408__auto___20591);
var G__20595 = (0);
seq__20576_20580 = G__20592;
chunk__20577_20581 = G__20593;
count__20578_20582 = G__20594;
i__20579_20583 = G__20595;
continue;
}
} else
{var n_20596 = cljs.core.first.call(null,seq__20576_20590__$1);goog.style.setStyle(n_20596,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20597 = cljs.core.next.call(null,seq__20576_20590__$1);
var G__20598 = null;
var G__20599 = (0);
var G__20600 = (0);
seq__20576_20580 = G__20597;
chunk__20577_20581 = G__20598;
count__20578_20582 = G__20599;
i__20579_20583 = G__20600;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20601){
var content = cljs.core.first(arglist__20601);
arglist__20601 = cljs.core.next(arglist__20601);
var name = cljs.core.first(arglist__20601);
var value = cljs.core.rest(arglist__20601);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20606_20610 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20607_20611 = null;var count__20608_20612 = (0);var i__20609_20613 = (0);while(true){
if((i__20609_20613 < count__20608_20612))
{var n_20614 = cljs.core._nth.call(null,chunk__20607_20611,i__20609_20613);n_20614.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20615 = seq__20606_20610;
var G__20616 = chunk__20607_20611;
var G__20617 = count__20608_20612;
var G__20618 = (i__20609_20613 + (1));
seq__20606_20610 = G__20615;
chunk__20607_20611 = G__20616;
count__20608_20612 = G__20617;
i__20609_20613 = G__20618;
continue;
}
} else
{var temp__4126__auto___20619 = cljs.core.seq.call(null,seq__20606_20610);if(temp__4126__auto___20619)
{var seq__20606_20620__$1 = temp__4126__auto___20619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20606_20620__$1))
{var c__4408__auto___20621 = cljs.core.chunk_first.call(null,seq__20606_20620__$1);{
var G__20622 = cljs.core.chunk_rest.call(null,seq__20606_20620__$1);
var G__20623 = c__4408__auto___20621;
var G__20624 = cljs.core.count.call(null,c__4408__auto___20621);
var G__20625 = (0);
seq__20606_20610 = G__20622;
chunk__20607_20611 = G__20623;
count__20608_20612 = G__20624;
i__20609_20613 = G__20625;
continue;
}
} else
{var n_20626 = cljs.core.first.call(null,seq__20606_20620__$1);n_20626.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20627 = cljs.core.next.call(null,seq__20606_20620__$1);
var G__20628 = null;
var G__20629 = (0);
var G__20630 = (0);
seq__20606_20610 = G__20627;
chunk__20607_20611 = G__20628;
count__20608_20612 = G__20629;
i__20609_20613 = G__20630;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20631){
var content = cljs.core.first(arglist__20631);
arglist__20631 = cljs.core.next(arglist__20631);
var name = cljs.core.first(arglist__20631);
var value = cljs.core.rest(arglist__20631);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20636_20640 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20637_20641 = null;var count__20638_20642 = (0);var i__20639_20643 = (0);while(true){
if((i__20639_20643 < count__20638_20642))
{var n_20644 = cljs.core._nth.call(null,chunk__20637_20641,i__20639_20643);n_20644.removeAttribute(cljs.core.name.call(null,name));
{
var G__20645 = seq__20636_20640;
var G__20646 = chunk__20637_20641;
var G__20647 = count__20638_20642;
var G__20648 = (i__20639_20643 + (1));
seq__20636_20640 = G__20645;
chunk__20637_20641 = G__20646;
count__20638_20642 = G__20647;
i__20639_20643 = G__20648;
continue;
}
} else
{var temp__4126__auto___20649 = cljs.core.seq.call(null,seq__20636_20640);if(temp__4126__auto___20649)
{var seq__20636_20650__$1 = temp__4126__auto___20649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20636_20650__$1))
{var c__4408__auto___20651 = cljs.core.chunk_first.call(null,seq__20636_20650__$1);{
var G__20652 = cljs.core.chunk_rest.call(null,seq__20636_20650__$1);
var G__20653 = c__4408__auto___20651;
var G__20654 = cljs.core.count.call(null,c__4408__auto___20651);
var G__20655 = (0);
seq__20636_20640 = G__20652;
chunk__20637_20641 = G__20653;
count__20638_20642 = G__20654;
i__20639_20643 = G__20655;
continue;
}
} else
{var n_20656 = cljs.core.first.call(null,seq__20636_20650__$1);n_20656.removeAttribute(cljs.core.name.call(null,name));
{
var G__20657 = cljs.core.next.call(null,seq__20636_20650__$1);
var G__20658 = null;
var G__20659 = (0);
var G__20660 = (0);
seq__20636_20640 = G__20657;
chunk__20637_20641 = G__20658;
count__20638_20642 = G__20659;
i__20639_20643 = G__20660;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20662 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20662,(0),null);var v = cljs.core.nth.call(null,vec__20662,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__20663_SHARP_){var attr = attrs__$1.item(p1__20663_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20670_20676 = cljs.core.seq.call(null,styles);var chunk__20671_20677 = null;var count__20672_20678 = (0);var i__20673_20679 = (0);while(true){
if((i__20673_20679 < count__20672_20678))
{var vec__20674_20680 = cljs.core._nth.call(null,chunk__20671_20677,i__20673_20679);var name_20681 = cljs.core.nth.call(null,vec__20674_20680,(0),null);var value_20682 = cljs.core.nth.call(null,vec__20674_20680,(1),null);domina.set_style_BANG_.call(null,content,name_20681,value_20682);
{
var G__20683 = seq__20670_20676;
var G__20684 = chunk__20671_20677;
var G__20685 = count__20672_20678;
var G__20686 = (i__20673_20679 + (1));
seq__20670_20676 = G__20683;
chunk__20671_20677 = G__20684;
count__20672_20678 = G__20685;
i__20673_20679 = G__20686;
continue;
}
} else
{var temp__4126__auto___20687 = cljs.core.seq.call(null,seq__20670_20676);if(temp__4126__auto___20687)
{var seq__20670_20688__$1 = temp__4126__auto___20687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20670_20688__$1))
{var c__4408__auto___20689 = cljs.core.chunk_first.call(null,seq__20670_20688__$1);{
var G__20690 = cljs.core.chunk_rest.call(null,seq__20670_20688__$1);
var G__20691 = c__4408__auto___20689;
var G__20692 = cljs.core.count.call(null,c__4408__auto___20689);
var G__20693 = (0);
seq__20670_20676 = G__20690;
chunk__20671_20677 = G__20691;
count__20672_20678 = G__20692;
i__20673_20679 = G__20693;
continue;
}
} else
{var vec__20675_20694 = cljs.core.first.call(null,seq__20670_20688__$1);var name_20695 = cljs.core.nth.call(null,vec__20675_20694,(0),null);var value_20696 = cljs.core.nth.call(null,vec__20675_20694,(1),null);domina.set_style_BANG_.call(null,content,name_20695,value_20696);
{
var G__20697 = cljs.core.next.call(null,seq__20670_20688__$1);
var G__20698 = null;
var G__20699 = (0);
var G__20700 = (0);
seq__20670_20676 = G__20697;
chunk__20671_20677 = G__20698;
count__20672_20678 = G__20699;
i__20673_20679 = G__20700;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20707_20713 = cljs.core.seq.call(null,attrs);var chunk__20708_20714 = null;var count__20709_20715 = (0);var i__20710_20716 = (0);while(true){
if((i__20710_20716 < count__20709_20715))
{var vec__20711_20717 = cljs.core._nth.call(null,chunk__20708_20714,i__20710_20716);var name_20718 = cljs.core.nth.call(null,vec__20711_20717,(0),null);var value_20719 = cljs.core.nth.call(null,vec__20711_20717,(1),null);domina.set_attr_BANG_.call(null,content,name_20718,value_20719);
{
var G__20720 = seq__20707_20713;
var G__20721 = chunk__20708_20714;
var G__20722 = count__20709_20715;
var G__20723 = (i__20710_20716 + (1));
seq__20707_20713 = G__20720;
chunk__20708_20714 = G__20721;
count__20709_20715 = G__20722;
i__20710_20716 = G__20723;
continue;
}
} else
{var temp__4126__auto___20724 = cljs.core.seq.call(null,seq__20707_20713);if(temp__4126__auto___20724)
{var seq__20707_20725__$1 = temp__4126__auto___20724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20707_20725__$1))
{var c__4408__auto___20726 = cljs.core.chunk_first.call(null,seq__20707_20725__$1);{
var G__20727 = cljs.core.chunk_rest.call(null,seq__20707_20725__$1);
var G__20728 = c__4408__auto___20726;
var G__20729 = cljs.core.count.call(null,c__4408__auto___20726);
var G__20730 = (0);
seq__20707_20713 = G__20727;
chunk__20708_20714 = G__20728;
count__20709_20715 = G__20729;
i__20710_20716 = G__20730;
continue;
}
} else
{var vec__20712_20731 = cljs.core.first.call(null,seq__20707_20725__$1);var name_20732 = cljs.core.nth.call(null,vec__20712_20731,(0),null);var value_20733 = cljs.core.nth.call(null,vec__20712_20731,(1),null);domina.set_attr_BANG_.call(null,content,name_20732,value_20733);
{
var G__20734 = cljs.core.next.call(null,seq__20707_20725__$1);
var G__20735 = null;
var G__20736 = (0);
var G__20737 = (0);
seq__20707_20713 = G__20734;
chunk__20708_20714 = G__20735;
count__20709_20715 = G__20736;
i__20710_20716 = G__20737;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20742_20746 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20743_20747 = null;var count__20744_20748 = (0);var i__20745_20749 = (0);while(true){
if((i__20745_20749 < count__20744_20748))
{var node_20750 = cljs.core._nth.call(null,chunk__20743_20747,i__20745_20749);goog.dom.classes.add(node_20750,class$);
{
var G__20751 = seq__20742_20746;
var G__20752 = chunk__20743_20747;
var G__20753 = count__20744_20748;
var G__20754 = (i__20745_20749 + (1));
seq__20742_20746 = G__20751;
chunk__20743_20747 = G__20752;
count__20744_20748 = G__20753;
i__20745_20749 = G__20754;
continue;
}
} else
{var temp__4126__auto___20755 = cljs.core.seq.call(null,seq__20742_20746);if(temp__4126__auto___20755)
{var seq__20742_20756__$1 = temp__4126__auto___20755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20742_20756__$1))
{var c__4408__auto___20757 = cljs.core.chunk_first.call(null,seq__20742_20756__$1);{
var G__20758 = cljs.core.chunk_rest.call(null,seq__20742_20756__$1);
var G__20759 = c__4408__auto___20757;
var G__20760 = cljs.core.count.call(null,c__4408__auto___20757);
var G__20761 = (0);
seq__20742_20746 = G__20758;
chunk__20743_20747 = G__20759;
count__20744_20748 = G__20760;
i__20745_20749 = G__20761;
continue;
}
} else
{var node_20762 = cljs.core.first.call(null,seq__20742_20756__$1);goog.dom.classes.add(node_20762,class$);
{
var G__20763 = cljs.core.next.call(null,seq__20742_20756__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20742_20746 = G__20763;
chunk__20743_20747 = G__20764;
count__20744_20748 = G__20765;
i__20745_20749 = G__20766;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20771_20775 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20772_20776 = null;var count__20773_20777 = (0);var i__20774_20778 = (0);while(true){
if((i__20774_20778 < count__20773_20777))
{var node_20779 = cljs.core._nth.call(null,chunk__20772_20776,i__20774_20778);goog.dom.classes.remove(node_20779,class$);
{
var G__20780 = seq__20771_20775;
var G__20781 = chunk__20772_20776;
var G__20782 = count__20773_20777;
var G__20783 = (i__20774_20778 + (1));
seq__20771_20775 = G__20780;
chunk__20772_20776 = G__20781;
count__20773_20777 = G__20782;
i__20774_20778 = G__20783;
continue;
}
} else
{var temp__4126__auto___20784 = cljs.core.seq.call(null,seq__20771_20775);if(temp__4126__auto___20784)
{var seq__20771_20785__$1 = temp__4126__auto___20784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20771_20785__$1))
{var c__4408__auto___20786 = cljs.core.chunk_first.call(null,seq__20771_20785__$1);{
var G__20787 = cljs.core.chunk_rest.call(null,seq__20771_20785__$1);
var G__20788 = c__4408__auto___20786;
var G__20789 = cljs.core.count.call(null,c__4408__auto___20786);
var G__20790 = (0);
seq__20771_20775 = G__20787;
chunk__20772_20776 = G__20788;
count__20773_20777 = G__20789;
i__20774_20778 = G__20790;
continue;
}
} else
{var node_20791 = cljs.core.first.call(null,seq__20771_20785__$1);goog.dom.classes.remove(node_20791,class$);
{
var G__20792 = cljs.core.next.call(null,seq__20771_20785__$1);
var G__20793 = null;
var G__20794 = (0);
var G__20795 = (0);
seq__20771_20775 = G__20792;
chunk__20772_20776 = G__20793;
count__20773_20777 = G__20794;
i__20774_20778 = G__20795;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20800_20804 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20801_20805 = null;var count__20802_20806 = (0);var i__20803_20807 = (0);while(true){
if((i__20803_20807 < count__20802_20806))
{var node_20808 = cljs.core._nth.call(null,chunk__20801_20805,i__20803_20807);goog.dom.classes.toggle(node_20808,class$);
{
var G__20809 = seq__20800_20804;
var G__20810 = chunk__20801_20805;
var G__20811 = count__20802_20806;
var G__20812 = (i__20803_20807 + (1));
seq__20800_20804 = G__20809;
chunk__20801_20805 = G__20810;
count__20802_20806 = G__20811;
i__20803_20807 = G__20812;
continue;
}
} else
{var temp__4126__auto___20813 = cljs.core.seq.call(null,seq__20800_20804);if(temp__4126__auto___20813)
{var seq__20800_20814__$1 = temp__4126__auto___20813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20800_20814__$1))
{var c__4408__auto___20815 = cljs.core.chunk_first.call(null,seq__20800_20814__$1);{
var G__20816 = cljs.core.chunk_rest.call(null,seq__20800_20814__$1);
var G__20817 = c__4408__auto___20815;
var G__20818 = cljs.core.count.call(null,c__4408__auto___20815);
var G__20819 = (0);
seq__20800_20804 = G__20816;
chunk__20801_20805 = G__20817;
count__20802_20806 = G__20818;
i__20803_20807 = G__20819;
continue;
}
} else
{var node_20820 = cljs.core.first.call(null,seq__20800_20814__$1);goog.dom.classes.toggle(node_20820,class$);
{
var G__20821 = cljs.core.next.call(null,seq__20800_20814__$1);
var G__20822 = null;
var G__20823 = (0);
var G__20824 = (0);
seq__20800_20804 = G__20821;
chunk__20801_20805 = G__20822;
count__20802_20806 = G__20823;
i__20803_20807 = G__20824;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20833__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20829_20834 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20830_20835 = null;var count__20831_20836 = (0);var i__20832_20837 = (0);while(true){
if((i__20832_20837 < count__20831_20836))
{var node_20838 = cljs.core._nth.call(null,chunk__20830_20835,i__20832_20837);goog.dom.classes.set(node_20838,classes_20833__$1);
{
var G__20839 = seq__20829_20834;
var G__20840 = chunk__20830_20835;
var G__20841 = count__20831_20836;
var G__20842 = (i__20832_20837 + (1));
seq__20829_20834 = G__20839;
chunk__20830_20835 = G__20840;
count__20831_20836 = G__20841;
i__20832_20837 = G__20842;
continue;
}
} else
{var temp__4126__auto___20843 = cljs.core.seq.call(null,seq__20829_20834);if(temp__4126__auto___20843)
{var seq__20829_20844__$1 = temp__4126__auto___20843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20829_20844__$1))
{var c__4408__auto___20845 = cljs.core.chunk_first.call(null,seq__20829_20844__$1);{
var G__20846 = cljs.core.chunk_rest.call(null,seq__20829_20844__$1);
var G__20847 = c__4408__auto___20845;
var G__20848 = cljs.core.count.call(null,c__4408__auto___20845);
var G__20849 = (0);
seq__20829_20834 = G__20846;
chunk__20830_20835 = G__20847;
count__20831_20836 = G__20848;
i__20832_20837 = G__20849;
continue;
}
} else
{var node_20850 = cljs.core.first.call(null,seq__20829_20844__$1);goog.dom.classes.set(node_20850,classes_20833__$1);
{
var G__20851 = cljs.core.next.call(null,seq__20829_20844__$1);
var G__20852 = null;
var G__20853 = (0);
var G__20854 = (0);
seq__20829_20834 = G__20851;
chunk__20830_20835 = G__20852;
count__20831_20836 = G__20853;
i__20832_20837 = G__20854;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20859_20863 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20860_20864 = null;var count__20861_20865 = (0);var i__20862_20866 = (0);while(true){
if((i__20862_20866 < count__20861_20865))
{var node_20867 = cljs.core._nth.call(null,chunk__20860_20864,i__20862_20866);goog.dom.setTextContent(node_20867,value);
{
var G__20868 = seq__20859_20863;
var G__20869 = chunk__20860_20864;
var G__20870 = count__20861_20865;
var G__20871 = (i__20862_20866 + (1));
seq__20859_20863 = G__20868;
chunk__20860_20864 = G__20869;
count__20861_20865 = G__20870;
i__20862_20866 = G__20871;
continue;
}
} else
{var temp__4126__auto___20872 = cljs.core.seq.call(null,seq__20859_20863);if(temp__4126__auto___20872)
{var seq__20859_20873__$1 = temp__4126__auto___20872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20859_20873__$1))
{var c__4408__auto___20874 = cljs.core.chunk_first.call(null,seq__20859_20873__$1);{
var G__20875 = cljs.core.chunk_rest.call(null,seq__20859_20873__$1);
var G__20876 = c__4408__auto___20874;
var G__20877 = cljs.core.count.call(null,c__4408__auto___20874);
var G__20878 = (0);
seq__20859_20863 = G__20875;
chunk__20860_20864 = G__20876;
count__20861_20865 = G__20877;
i__20862_20866 = G__20878;
continue;
}
} else
{var node_20879 = cljs.core.first.call(null,seq__20859_20873__$1);goog.dom.setTextContent(node_20879,value);
{
var G__20880 = cljs.core.next.call(null,seq__20859_20873__$1);
var G__20881 = null;
var G__20882 = (0);
var G__20883 = (0);
seq__20859_20863 = G__20880;
chunk__20860_20864 = G__20881;
count__20861_20865 = G__20882;
i__20862_20866 = G__20883;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20888_20892 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20889_20893 = null;var count__20890_20894 = (0);var i__20891_20895 = (0);while(true){
if((i__20891_20895 < count__20890_20894))
{var node_20896 = cljs.core._nth.call(null,chunk__20889_20893,i__20891_20895);goog.dom.forms.setValue(node_20896,value);
{
var G__20897 = seq__20888_20892;
var G__20898 = chunk__20889_20893;
var G__20899 = count__20890_20894;
var G__20900 = (i__20891_20895 + (1));
seq__20888_20892 = G__20897;
chunk__20889_20893 = G__20898;
count__20890_20894 = G__20899;
i__20891_20895 = G__20900;
continue;
}
} else
{var temp__4126__auto___20901 = cljs.core.seq.call(null,seq__20888_20892);if(temp__4126__auto___20901)
{var seq__20888_20902__$1 = temp__4126__auto___20901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20888_20902__$1))
{var c__4408__auto___20903 = cljs.core.chunk_first.call(null,seq__20888_20902__$1);{
var G__20904 = cljs.core.chunk_rest.call(null,seq__20888_20902__$1);
var G__20905 = c__4408__auto___20903;
var G__20906 = cljs.core.count.call(null,c__4408__auto___20903);
var G__20907 = (0);
seq__20888_20892 = G__20904;
chunk__20889_20893 = G__20905;
count__20890_20894 = G__20906;
i__20891_20895 = G__20907;
continue;
}
} else
{var node_20908 = cljs.core.first.call(null,seq__20888_20902__$1);goog.dom.forms.setValue(node_20908,value);
{
var G__20909 = cljs.core.next.call(null,seq__20888_20902__$1);
var G__20910 = null;
var G__20911 = (0);
var G__20912 = (0);
seq__20888_20892 = G__20909;
chunk__20889_20893 = G__20910;
count__20890_20894 = G__20911;
i__20891_20895 = G__20912;
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
{var value_20923 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20919_20924 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20920_20925 = null;var count__20921_20926 = (0);var i__20922_20927 = (0);while(true){
if((i__20922_20927 < count__20921_20926))
{var node_20928 = cljs.core._nth.call(null,chunk__20920_20925,i__20922_20927);node_20928.innerHTML = value_20923;
{
var G__20929 = seq__20919_20924;
var G__20930 = chunk__20920_20925;
var G__20931 = count__20921_20926;
var G__20932 = (i__20922_20927 + (1));
seq__20919_20924 = G__20929;
chunk__20920_20925 = G__20930;
count__20921_20926 = G__20931;
i__20922_20927 = G__20932;
continue;
}
} else
{var temp__4126__auto___20933 = cljs.core.seq.call(null,seq__20919_20924);if(temp__4126__auto___20933)
{var seq__20919_20934__$1 = temp__4126__auto___20933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20919_20934__$1))
{var c__4408__auto___20935 = cljs.core.chunk_first.call(null,seq__20919_20934__$1);{
var G__20936 = cljs.core.chunk_rest.call(null,seq__20919_20934__$1);
var G__20937 = c__4408__auto___20935;
var G__20938 = cljs.core.count.call(null,c__4408__auto___20935);
var G__20939 = (0);
seq__20919_20924 = G__20936;
chunk__20920_20925 = G__20937;
count__20921_20926 = G__20938;
i__20922_20927 = G__20939;
continue;
}
} else
{var node_20940 = cljs.core.first.call(null,seq__20919_20934__$1);node_20940.innerHTML = value_20923;
{
var G__20941 = cljs.core.next.call(null,seq__20919_20934__$1);
var G__20942 = null;
var G__20943 = (0);
var G__20944 = (0);
seq__20919_20924 = G__20941;
chunk__20920_20925 = G__20942;
count__20921_20926 = G__20943;
i__20922_20927 = G__20944;
continue;
}
}
} else
{}
}
break;
}
}catch (e20918){if((e20918 instanceof Error))
{var e_20945 = e20918;domina.replace_children_BANG_.call(null,content,value_20923);
} else
{throw e20918;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20952_20956 = cljs.core.seq.call(null,children);var chunk__20953_20957 = null;var count__20954_20958 = (0);var i__20955_20959 = (0);while(true){
if((i__20955_20959 < count__20954_20958))
{var child_20960 = cljs.core._nth.call(null,chunk__20953_20957,i__20955_20959);frag.appendChild(child_20960);
{
var G__20961 = seq__20952_20956;
var G__20962 = chunk__20953_20957;
var G__20963 = count__20954_20958;
var G__20964 = (i__20955_20959 + (1));
seq__20952_20956 = G__20961;
chunk__20953_20957 = G__20962;
count__20954_20958 = G__20963;
i__20955_20959 = G__20964;
continue;
}
} else
{var temp__4126__auto___20965 = cljs.core.seq.call(null,seq__20952_20956);if(temp__4126__auto___20965)
{var seq__20952_20966__$1 = temp__4126__auto___20965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20952_20966__$1))
{var c__4408__auto___20967 = cljs.core.chunk_first.call(null,seq__20952_20966__$1);{
var G__20968 = cljs.core.chunk_rest.call(null,seq__20952_20966__$1);
var G__20969 = c__4408__auto___20967;
var G__20970 = cljs.core.count.call(null,c__4408__auto___20967);
var G__20971 = (0);
seq__20952_20956 = G__20968;
chunk__20953_20957 = G__20969;
count__20954_20958 = G__20970;
i__20955_20959 = G__20971;
continue;
}
} else
{var child_20972 = cljs.core.first.call(null,seq__20952_20966__$1);frag.appendChild(child_20972);
{
var G__20973 = cljs.core.next.call(null,seq__20952_20966__$1);
var G__20974 = null;
var G__20975 = (0);
var G__20976 = (0);
seq__20952_20956 = G__20973;
chunk__20953_20957 = G__20974;
count__20954_20958 = G__20975;
i__20955_20959 = G__20976;
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
return (function (p1__20946_SHARP_,p2__20947_SHARP_){return f.call(null,p1__20946_SHARP_,p2__20947_SHARP_);
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
{if((function (){var G__20978 = list_thing;if(G__20978)
{var bit__4302__auto__ = (G__20978.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20978.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20978.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20978);
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
{if((function (){var G__20979 = content;if(G__20979)
{var bit__4302__auto__ = (G__20979.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20979.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20979);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20979);
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
{if((function (){var G__20980 = content;if(G__20980)
{var bit__4302__auto__ = (G__20980.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20980.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20980.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20980);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20980);
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
