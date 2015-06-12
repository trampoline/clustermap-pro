// Compiled by ClojureScript 0.0-2356
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__26468__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26467 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26467,(0),null);var body = cljs.core.nthnext.call(null,vec__26467,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26468 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26468__delegate.call(this,args);};
G__26468.cljs$lang$maxFixedArity = 0;
G__26468.cljs$lang$applyTo = (function (arglist__26469){
var args = cljs.core.seq(arglist__26469);
return G__26468__delegate(args);
});
G__26468.cljs$core$IFn$_invoke$arity$variadic = G__26468__delegate;
return G__26468;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__26474(s__26475){return (new cljs.core.LazySeq(null,(function (){var s__26475__$1 = s__26475;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26475__$1);if(temp__4126__auto__)
{var s__26475__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26475__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26475__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26477 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26476 = (0);while(true){
if((i__26476 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__26476);cljs.core.chunk_append.call(null,b__26477,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26478 = (i__26476 + (1));
i__26476 = G__26478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26477),iter__26474.call(null,cljs.core.chunk_rest.call(null,s__26475__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26477),null);
}
} else
{var args = cljs.core.first.call(null,s__26475__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26474.call(null,cljs.core.rest.call(null,s__26475__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){if(cljs.core.truth_(element))
{return React.renderToString(element);
} else
{return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){if(cljs.core.truth_(element))
{return React.renderToStaticMarkup(element);
} else
{return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__26483(s__26484){return (new cljs.core.LazySeq(null,(function (){var s__26484__$1 = s__26484;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26484__$1);if(temp__4126__auto__)
{var s__26484__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26484__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26484__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26486 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26485 = (0);while(true){
if((i__26485 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__26485);cljs.core.chunk_append.call(null,b__26486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26487 = (i__26485 + (1));
i__26485 = G__26487;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26486),iter__26483.call(null,cljs.core.chunk_rest.call(null,s__26484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26486),null);
}
} else
{var style = cljs.core.first.call(null,s__26484__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26483.call(null,cljs.core.rest.call(null,s__26484__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__26488){
var styles = cljs.core.seq(arglist__26488);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26489 = (function() { 
var link_to26489__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26489 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26489__delegate.call(this,url,content);};
link_to26489.cljs$lang$maxFixedArity = 1;
link_to26489.cljs$lang$applyTo = (function (arglist__26490){
var url = cljs.core.first(arglist__26490);
var content = cljs.core.rest(arglist__26490);
return link_to26489__delegate(url,content);
});
link_to26489.cljs$core$IFn$_invoke$arity$variadic = link_to26489__delegate;
return link_to26489;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26489);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26491 = (function() { 
var mail_to26491__delegate = function (e_mail,p__26492){var vec__26494 = p__26492;var content = cljs.core.nth.call(null,vec__26494,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26491 = function (e_mail,var_args){
var p__26492 = null;if (arguments.length > 1) {
  p__26492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26491__delegate.call(this,e_mail,p__26492);};
mail_to26491.cljs$lang$maxFixedArity = 1;
mail_to26491.cljs$lang$applyTo = (function (arglist__26495){
var e_mail = cljs.core.first(arglist__26495);
var p__26492 = cljs.core.rest(arglist__26495);
return mail_to26491__delegate(e_mail,p__26492);
});
mail_to26491.cljs$core$IFn$_invoke$arity$variadic = mail_to26491__delegate;
return mail_to26491;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26491);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26496 = (function unordered_list26496(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__26501(s__26502){return (new cljs.core.LazySeq(null,(function (){var s__26502__$1 = s__26502;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26502__$1);if(temp__4126__auto__)
{var s__26502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26502__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26502__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26504 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26503 = (0);while(true){
if((i__26503 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26503);cljs.core.chunk_append.call(null,b__26504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26505 = (i__26503 + (1));
i__26503 = G__26505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26504),iter__26501.call(null,cljs.core.chunk_rest.call(null,s__26502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26504),null);
}
} else
{var x = cljs.core.first.call(null,s__26502__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26501.call(null,cljs.core.rest.call(null,s__26502__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26496);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26506 = (function ordered_list26506(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__26511(s__26512){return (new cljs.core.LazySeq(null,(function (){var s__26512__$1 = s__26512;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26512__$1);if(temp__4126__auto__)
{var s__26512__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26512__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26512__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26514 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26513 = (0);while(true){
if((i__26513 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26513);cljs.core.chunk_append.call(null,b__26514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26515 = (i__26513 + (1));
i__26513 = G__26515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26514),iter__26511.call(null,cljs.core.chunk_rest.call(null,s__26512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26514),null);
}
} else
{var x = cljs.core.first.call(null,s__26512__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26511.call(null,cljs.core.rest.call(null,s__26512__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26506);
/**
* Create an image element.
*/
sablono.core.image26516 = (function() {
var image26516 = null;
var image26516__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26516__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26516 = function(src,alt){
switch(arguments.length){
case 1:
return image26516__1.call(this,src);
case 2:
return image26516__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26516.cljs$core$IFn$_invoke$arity$1 = image26516__1;
image26516.cljs$core$IFn$_invoke$arity$2 = image26516__2;
return image26516;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26516);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26517_SHARP_,p2__26518_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26517_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26518_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26519_SHARP_,p2__26520_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26519_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26520_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field26521 = (function() {
var color_field26521 = null;
var color_field26521__1 = (function (name__5127__auto__){return color_field26521.call(null,name__5127__auto__,null);
});
var color_field26521__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field26521 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field26521__1.call(this,name__5127__auto__);
case 2:
return color_field26521__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26521.cljs$core$IFn$_invoke$arity$1 = color_field26521__1;
color_field26521.cljs$core$IFn$_invoke$arity$2 = color_field26521__2;
return color_field26521;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26521);
/**
* Creates a date input field.
*/
sablono.core.date_field26522 = (function() {
var date_field26522 = null;
var date_field26522__1 = (function (name__5127__auto__){return date_field26522.call(null,name__5127__auto__,null);
});
var date_field26522__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field26522 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field26522__1.call(this,name__5127__auto__);
case 2:
return date_field26522__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26522.cljs$core$IFn$_invoke$arity$1 = date_field26522__1;
date_field26522.cljs$core$IFn$_invoke$arity$2 = date_field26522__2;
return date_field26522;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26522);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26523 = (function() {
var datetime_field26523 = null;
var datetime_field26523__1 = (function (name__5127__auto__){return datetime_field26523.call(null,name__5127__auto__,null);
});
var datetime_field26523__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field26523 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field26523__1.call(this,name__5127__auto__);
case 2:
return datetime_field26523__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26523.cljs$core$IFn$_invoke$arity$1 = datetime_field26523__1;
datetime_field26523.cljs$core$IFn$_invoke$arity$2 = datetime_field26523__2;
return datetime_field26523;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26523);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26524 = (function() {
var datetime_local_field26524 = null;
var datetime_local_field26524__1 = (function (name__5127__auto__){return datetime_local_field26524.call(null,name__5127__auto__,null);
});
var datetime_local_field26524__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field26524 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26524__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field26524__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26524.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26524__1;
datetime_local_field26524.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26524__2;
return datetime_local_field26524;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26524);
/**
* Creates a email input field.
*/
sablono.core.email_field26525 = (function() {
var email_field26525 = null;
var email_field26525__1 = (function (name__5127__auto__){return email_field26525.call(null,name__5127__auto__,null);
});
var email_field26525__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field26525 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field26525__1.call(this,name__5127__auto__);
case 2:
return email_field26525__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26525.cljs$core$IFn$_invoke$arity$1 = email_field26525__1;
email_field26525.cljs$core$IFn$_invoke$arity$2 = email_field26525__2;
return email_field26525;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26525);
/**
* Creates a file input field.
*/
sablono.core.file_field26526 = (function() {
var file_field26526 = null;
var file_field26526__1 = (function (name__5127__auto__){return file_field26526.call(null,name__5127__auto__,null);
});
var file_field26526__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field26526 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field26526__1.call(this,name__5127__auto__);
case 2:
return file_field26526__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26526.cljs$core$IFn$_invoke$arity$1 = file_field26526__1;
file_field26526.cljs$core$IFn$_invoke$arity$2 = file_field26526__2;
return file_field26526;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26526);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26527 = (function() {
var hidden_field26527 = null;
var hidden_field26527__1 = (function (name__5127__auto__){return hidden_field26527.call(null,name__5127__auto__,null);
});
var hidden_field26527__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field26527 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field26527__1.call(this,name__5127__auto__);
case 2:
return hidden_field26527__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26527.cljs$core$IFn$_invoke$arity$1 = hidden_field26527__1;
hidden_field26527.cljs$core$IFn$_invoke$arity$2 = hidden_field26527__2;
return hidden_field26527;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26527);
/**
* Creates a month input field.
*/
sablono.core.month_field26528 = (function() {
var month_field26528 = null;
var month_field26528__1 = (function (name__5127__auto__){return month_field26528.call(null,name__5127__auto__,null);
});
var month_field26528__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field26528 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field26528__1.call(this,name__5127__auto__);
case 2:
return month_field26528__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26528.cljs$core$IFn$_invoke$arity$1 = month_field26528__1;
month_field26528.cljs$core$IFn$_invoke$arity$2 = month_field26528__2;
return month_field26528;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26528);
/**
* Creates a number input field.
*/
sablono.core.number_field26529 = (function() {
var number_field26529 = null;
var number_field26529__1 = (function (name__5127__auto__){return number_field26529.call(null,name__5127__auto__,null);
});
var number_field26529__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field26529 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field26529__1.call(this,name__5127__auto__);
case 2:
return number_field26529__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26529.cljs$core$IFn$_invoke$arity$1 = number_field26529__1;
number_field26529.cljs$core$IFn$_invoke$arity$2 = number_field26529__2;
return number_field26529;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26529);
/**
* Creates a password input field.
*/
sablono.core.password_field26530 = (function() {
var password_field26530 = null;
var password_field26530__1 = (function (name__5127__auto__){return password_field26530.call(null,name__5127__auto__,null);
});
var password_field26530__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field26530 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field26530__1.call(this,name__5127__auto__);
case 2:
return password_field26530__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26530.cljs$core$IFn$_invoke$arity$1 = password_field26530__1;
password_field26530.cljs$core$IFn$_invoke$arity$2 = password_field26530__2;
return password_field26530;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26530);
/**
* Creates a range input field.
*/
sablono.core.range_field26531 = (function() {
var range_field26531 = null;
var range_field26531__1 = (function (name__5127__auto__){return range_field26531.call(null,name__5127__auto__,null);
});
var range_field26531__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field26531 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field26531__1.call(this,name__5127__auto__);
case 2:
return range_field26531__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26531.cljs$core$IFn$_invoke$arity$1 = range_field26531__1;
range_field26531.cljs$core$IFn$_invoke$arity$2 = range_field26531__2;
return range_field26531;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26531);
/**
* Creates a search input field.
*/
sablono.core.search_field26532 = (function() {
var search_field26532 = null;
var search_field26532__1 = (function (name__5127__auto__){return search_field26532.call(null,name__5127__auto__,null);
});
var search_field26532__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field26532 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field26532__1.call(this,name__5127__auto__);
case 2:
return search_field26532__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26532.cljs$core$IFn$_invoke$arity$1 = search_field26532__1;
search_field26532.cljs$core$IFn$_invoke$arity$2 = search_field26532__2;
return search_field26532;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26532);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26533 = (function() {
var tel_field26533 = null;
var tel_field26533__1 = (function (name__5127__auto__){return tel_field26533.call(null,name__5127__auto__,null);
});
var tel_field26533__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field26533 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field26533__1.call(this,name__5127__auto__);
case 2:
return tel_field26533__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26533.cljs$core$IFn$_invoke$arity$1 = tel_field26533__1;
tel_field26533.cljs$core$IFn$_invoke$arity$2 = tel_field26533__2;
return tel_field26533;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26533);
/**
* Creates a text input field.
*/
sablono.core.text_field26534 = (function() {
var text_field26534 = null;
var text_field26534__1 = (function (name__5127__auto__){return text_field26534.call(null,name__5127__auto__,null);
});
var text_field26534__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field26534 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field26534__1.call(this,name__5127__auto__);
case 2:
return text_field26534__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26534.cljs$core$IFn$_invoke$arity$1 = text_field26534__1;
text_field26534.cljs$core$IFn$_invoke$arity$2 = text_field26534__2;
return text_field26534;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26534);
/**
* Creates a time input field.
*/
sablono.core.time_field26535 = (function() {
var time_field26535 = null;
var time_field26535__1 = (function (name__5127__auto__){return time_field26535.call(null,name__5127__auto__,null);
});
var time_field26535__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field26535 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field26535__1.call(this,name__5127__auto__);
case 2:
return time_field26535__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26535.cljs$core$IFn$_invoke$arity$1 = time_field26535__1;
time_field26535.cljs$core$IFn$_invoke$arity$2 = time_field26535__2;
return time_field26535;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26535);
/**
* Creates a url input field.
*/
sablono.core.url_field26536 = (function() {
var url_field26536 = null;
var url_field26536__1 = (function (name__5127__auto__){return url_field26536.call(null,name__5127__auto__,null);
});
var url_field26536__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field26536 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field26536__1.call(this,name__5127__auto__);
case 2:
return url_field26536__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26536.cljs$core$IFn$_invoke$arity$1 = url_field26536__1;
url_field26536.cljs$core$IFn$_invoke$arity$2 = url_field26536__2;
return url_field26536;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26536);
/**
* Creates a week input field.
*/
sablono.core.week_field26537 = (function() {
var week_field26537 = null;
var week_field26537__1 = (function (name__5127__auto__){return week_field26537.call(null,name__5127__auto__,null);
});
var week_field26537__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field26537 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field26537__1.call(this,name__5127__auto__);
case 2:
return week_field26537__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26537.cljs$core$IFn$_invoke$arity$1 = week_field26537__1;
week_field26537.cljs$core$IFn$_invoke$arity$2 = week_field26537__2;
return week_field26537;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26537);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26538 = (function() {
var check_box26538 = null;
var check_box26538__1 = (function (name){return check_box26538.call(null,name,null);
});
var check_box26538__2 = (function (name,checked_QMARK_){return check_box26538.call(null,name,checked_QMARK_,"true");
});
var check_box26538__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26538 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26538__1.call(this,name);
case 2:
return check_box26538__2.call(this,name,checked_QMARK_);
case 3:
return check_box26538__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26538.cljs$core$IFn$_invoke$arity$1 = check_box26538__1;
check_box26538.cljs$core$IFn$_invoke$arity$2 = check_box26538__2;
check_box26538.cljs$core$IFn$_invoke$arity$3 = check_box26538__3;
return check_box26538;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26538);
/**
* Creates a radio button.
*/
sablono.core.radio_button26539 = (function() {
var radio_button26539 = null;
var radio_button26539__1 = (function (group){return radio_button26539.call(null,group,null);
});
var radio_button26539__2 = (function (group,checked_QMARK_){return radio_button26539.call(null,group,checked_QMARK_,"true");
});
var radio_button26539__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26539 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26539__1.call(this,group);
case 2:
return radio_button26539__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26539__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26539.cljs$core$IFn$_invoke$arity$1 = radio_button26539__1;
radio_button26539.cljs$core$IFn$_invoke$arity$2 = radio_button26539__2;
radio_button26539.cljs$core$IFn$_invoke$arity$3 = radio_button26539__3;
return radio_button26539;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26539);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26540 = (function() {
var select_options26540 = null;
var select_options26540__1 = (function (coll){return select_options26540.call(null,coll,null);
});
var select_options26540__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__26549(s__26550){return (new cljs.core.LazySeq(null,(function (){var s__26550__$1 = s__26550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26550__$1);if(temp__4126__auto__)
{var s__26550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26550__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26550__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26552 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26551 = (0);while(true){
if((i__26551 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26551);cljs.core.chunk_append.call(null,b__26552,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26555 = x;var text = cljs.core.nth.call(null,vec__26555,(0),null);var val = cljs.core.nth.call(null,vec__26555,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26555,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26540.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26557 = (i__26551 + (1));
i__26551 = G__26557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26552),iter__26549.call(null,cljs.core.chunk_rest.call(null,s__26550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26552),null);
}
} else
{var x = cljs.core.first.call(null,s__26550__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26556 = x;var text = cljs.core.nth.call(null,vec__26556,(0),null);var val = cljs.core.nth.call(null,vec__26556,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26556,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26540.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26549.call(null,cljs.core.rest.call(null,s__26550__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options26540 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26540__1.call(this,coll);
case 2:
return select_options26540__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26540.cljs$core$IFn$_invoke$arity$1 = select_options26540__1;
select_options26540.cljs$core$IFn$_invoke$arity$2 = select_options26540__2;
return select_options26540;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26540);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26558 = (function() {
var drop_down26558 = null;
var drop_down26558__2 = (function (name,options){return drop_down26558.call(null,name,options,null);
});
var drop_down26558__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26558 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26558__2.call(this,name,options);
case 3:
return drop_down26558__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26558.cljs$core$IFn$_invoke$arity$2 = drop_down26558__2;
drop_down26558.cljs$core$IFn$_invoke$arity$3 = drop_down26558__3;
return drop_down26558;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26558);
/**
* Creates a text area element.
*/
sablono.core.text_area26559 = (function() {
var text_area26559 = null;
var text_area26559__1 = (function (name){return text_area26559.call(null,name,null);
});
var text_area26559__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26559 = function(name,value){
switch(arguments.length){
case 1:
return text_area26559__1.call(this,name);
case 2:
return text_area26559__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26559.cljs$core$IFn$_invoke$arity$1 = text_area26559__1;
text_area26559.cljs$core$IFn$_invoke$arity$2 = text_area26559__2;
return text_area26559;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26559);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26560 = (function label26560(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26560);
/**
* Creates a submit button.
*/
sablono.core.submit_button26561 = (function submit_button26561(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26561);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26562 = (function reset_button26562(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26562);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26563 = (function() { 
var form_to26563__delegate = function (p__26564,body){var vec__26566 = p__26564;var method = cljs.core.nth.call(null,vec__26566,(0),null);var action = cljs.core.nth.call(null,vec__26566,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26563 = function (p__26564,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26563__delegate.call(this,p__26564,body);};
form_to26563.cljs$lang$maxFixedArity = 1;
form_to26563.cljs$lang$applyTo = (function (arglist__26567){
var p__26564 = cljs.core.first(arglist__26567);
var body = cljs.core.rest(arglist__26567);
return form_to26563__delegate(p__26564,body);
});
form_to26563.cljs$core$IFn$_invoke$arity$variadic = form_to26563__delegate;
return form_to26563;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26563);
