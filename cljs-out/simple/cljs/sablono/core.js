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
var G__26535__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26534 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26534,(0),null);var body = cljs.core.nthnext.call(null,vec__26534,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26535 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26535__delegate.call(this,args);};
G__26535.cljs$lang$maxFixedArity = 0;
G__26535.cljs$lang$applyTo = (function (arglist__26536){
var args = cljs.core.seq(arglist__26536);
return G__26535__delegate(args);
});
G__26535.cljs$core$IFn$_invoke$arity$variadic = G__26535__delegate;
return G__26535;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__26541(s__26542){return (new cljs.core.LazySeq(null,(function (){var s__26542__$1 = s__26542;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26542__$1);if(temp__4126__auto__)
{var s__26542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26542__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26542__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26544 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26543 = (0);while(true){
if((i__26543 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__26543);cljs.core.chunk_append.call(null,b__26544,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26545 = (i__26543 + (1));
i__26543 = G__26545;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26544),iter__26541.call(null,cljs.core.chunk_rest.call(null,s__26542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26544),null);
}
} else
{var args = cljs.core.first.call(null,s__26542__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26541.call(null,cljs.core.rest.call(null,s__26542__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__26550(s__26551){return (new cljs.core.LazySeq(null,(function (){var s__26551__$1 = s__26551;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26551__$1);if(temp__4126__auto__)
{var s__26551__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26551__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26551__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26553 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26552 = (0);while(true){
if((i__26552 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__26552);cljs.core.chunk_append.call(null,b__26553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26554 = (i__26552 + (1));
i__26552 = G__26554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26553),iter__26550.call(null,cljs.core.chunk_rest.call(null,s__26551__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26553),null);
}
} else
{var style = cljs.core.first.call(null,s__26551__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26550.call(null,cljs.core.rest.call(null,s__26551__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26555){
var styles = cljs.core.seq(arglist__26555);
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
sablono.core.link_to26556 = (function() { 
var link_to26556__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26556 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26556__delegate.call(this,url,content);};
link_to26556.cljs$lang$maxFixedArity = 1;
link_to26556.cljs$lang$applyTo = (function (arglist__26557){
var url = cljs.core.first(arglist__26557);
var content = cljs.core.rest(arglist__26557);
return link_to26556__delegate(url,content);
});
link_to26556.cljs$core$IFn$_invoke$arity$variadic = link_to26556__delegate;
return link_to26556;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26556);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26558 = (function() { 
var mail_to26558__delegate = function (e_mail,p__26559){var vec__26561 = p__26559;var content = cljs.core.nth.call(null,vec__26561,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26558 = function (e_mail,var_args){
var p__26559 = null;if (arguments.length > 1) {
  p__26559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26558__delegate.call(this,e_mail,p__26559);};
mail_to26558.cljs$lang$maxFixedArity = 1;
mail_to26558.cljs$lang$applyTo = (function (arglist__26562){
var e_mail = cljs.core.first(arglist__26562);
var p__26559 = cljs.core.rest(arglist__26562);
return mail_to26558__delegate(e_mail,p__26559);
});
mail_to26558.cljs$core$IFn$_invoke$arity$variadic = mail_to26558__delegate;
return mail_to26558;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26558);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26563 = (function unordered_list26563(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__26568(s__26569){return (new cljs.core.LazySeq(null,(function (){var s__26569__$1 = s__26569;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26569__$1);if(temp__4126__auto__)
{var s__26569__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26569__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26569__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26571 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26570 = (0);while(true){
if((i__26570 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26570);cljs.core.chunk_append.call(null,b__26571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26572 = (i__26570 + (1));
i__26570 = G__26572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26571),iter__26568.call(null,cljs.core.chunk_rest.call(null,s__26569__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26571),null);
}
} else
{var x = cljs.core.first.call(null,s__26569__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26568.call(null,cljs.core.rest.call(null,s__26569__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26563);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26573 = (function ordered_list26573(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__26578(s__26579){return (new cljs.core.LazySeq(null,(function (){var s__26579__$1 = s__26579;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26579__$1);if(temp__4126__auto__)
{var s__26579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26579__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26579__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26581 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26580 = (0);while(true){
if((i__26580 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26580);cljs.core.chunk_append.call(null,b__26581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26582 = (i__26580 + (1));
i__26580 = G__26582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26581),iter__26578.call(null,cljs.core.chunk_rest.call(null,s__26579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26581),null);
}
} else
{var x = cljs.core.first.call(null,s__26579__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26578.call(null,cljs.core.rest.call(null,s__26579__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26573);
/**
* Create an image element.
*/
sablono.core.image26583 = (function() {
var image26583 = null;
var image26583__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26583__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26583 = function(src,alt){
switch(arguments.length){
case 1:
return image26583__1.call(this,src);
case 2:
return image26583__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26583.cljs$core$IFn$_invoke$arity$1 = image26583__1;
image26583.cljs$core$IFn$_invoke$arity$2 = image26583__2;
return image26583;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26583);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26584_SHARP_,p2__26585_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26584_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26585_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26586_SHARP_,p2__26587_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26586_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26587_SHARP_));
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
sablono.core.color_field26588 = (function() {
var color_field26588 = null;
var color_field26588__1 = (function (name__5127__auto__){return color_field26588.call(null,name__5127__auto__,null);
});
var color_field26588__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field26588 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field26588__1.call(this,name__5127__auto__);
case 2:
return color_field26588__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26588.cljs$core$IFn$_invoke$arity$1 = color_field26588__1;
color_field26588.cljs$core$IFn$_invoke$arity$2 = color_field26588__2;
return color_field26588;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26588);
/**
* Creates a date input field.
*/
sablono.core.date_field26589 = (function() {
var date_field26589 = null;
var date_field26589__1 = (function (name__5127__auto__){return date_field26589.call(null,name__5127__auto__,null);
});
var date_field26589__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field26589 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field26589__1.call(this,name__5127__auto__);
case 2:
return date_field26589__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26589.cljs$core$IFn$_invoke$arity$1 = date_field26589__1;
date_field26589.cljs$core$IFn$_invoke$arity$2 = date_field26589__2;
return date_field26589;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26589);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26590 = (function() {
var datetime_field26590 = null;
var datetime_field26590__1 = (function (name__5127__auto__){return datetime_field26590.call(null,name__5127__auto__,null);
});
var datetime_field26590__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field26590 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field26590__1.call(this,name__5127__auto__);
case 2:
return datetime_field26590__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26590.cljs$core$IFn$_invoke$arity$1 = datetime_field26590__1;
datetime_field26590.cljs$core$IFn$_invoke$arity$2 = datetime_field26590__2;
return datetime_field26590;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26590);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26591 = (function() {
var datetime_local_field26591 = null;
var datetime_local_field26591__1 = (function (name__5127__auto__){return datetime_local_field26591.call(null,name__5127__auto__,null);
});
var datetime_local_field26591__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field26591 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26591__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field26591__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26591.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26591__1;
datetime_local_field26591.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26591__2;
return datetime_local_field26591;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26591);
/**
* Creates a email input field.
*/
sablono.core.email_field26592 = (function() {
var email_field26592 = null;
var email_field26592__1 = (function (name__5127__auto__){return email_field26592.call(null,name__5127__auto__,null);
});
var email_field26592__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field26592 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field26592__1.call(this,name__5127__auto__);
case 2:
return email_field26592__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26592.cljs$core$IFn$_invoke$arity$1 = email_field26592__1;
email_field26592.cljs$core$IFn$_invoke$arity$2 = email_field26592__2;
return email_field26592;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26592);
/**
* Creates a file input field.
*/
sablono.core.file_field26593 = (function() {
var file_field26593 = null;
var file_field26593__1 = (function (name__5127__auto__){return file_field26593.call(null,name__5127__auto__,null);
});
var file_field26593__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field26593 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field26593__1.call(this,name__5127__auto__);
case 2:
return file_field26593__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26593.cljs$core$IFn$_invoke$arity$1 = file_field26593__1;
file_field26593.cljs$core$IFn$_invoke$arity$2 = file_field26593__2;
return file_field26593;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26593);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26594 = (function() {
var hidden_field26594 = null;
var hidden_field26594__1 = (function (name__5127__auto__){return hidden_field26594.call(null,name__5127__auto__,null);
});
var hidden_field26594__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field26594 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field26594__1.call(this,name__5127__auto__);
case 2:
return hidden_field26594__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26594.cljs$core$IFn$_invoke$arity$1 = hidden_field26594__1;
hidden_field26594.cljs$core$IFn$_invoke$arity$2 = hidden_field26594__2;
return hidden_field26594;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26594);
/**
* Creates a month input field.
*/
sablono.core.month_field26595 = (function() {
var month_field26595 = null;
var month_field26595__1 = (function (name__5127__auto__){return month_field26595.call(null,name__5127__auto__,null);
});
var month_field26595__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field26595 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field26595__1.call(this,name__5127__auto__);
case 2:
return month_field26595__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26595.cljs$core$IFn$_invoke$arity$1 = month_field26595__1;
month_field26595.cljs$core$IFn$_invoke$arity$2 = month_field26595__2;
return month_field26595;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26595);
/**
* Creates a number input field.
*/
sablono.core.number_field26596 = (function() {
var number_field26596 = null;
var number_field26596__1 = (function (name__5127__auto__){return number_field26596.call(null,name__5127__auto__,null);
});
var number_field26596__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field26596 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field26596__1.call(this,name__5127__auto__);
case 2:
return number_field26596__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26596.cljs$core$IFn$_invoke$arity$1 = number_field26596__1;
number_field26596.cljs$core$IFn$_invoke$arity$2 = number_field26596__2;
return number_field26596;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26596);
/**
* Creates a password input field.
*/
sablono.core.password_field26597 = (function() {
var password_field26597 = null;
var password_field26597__1 = (function (name__5127__auto__){return password_field26597.call(null,name__5127__auto__,null);
});
var password_field26597__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field26597 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field26597__1.call(this,name__5127__auto__);
case 2:
return password_field26597__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26597.cljs$core$IFn$_invoke$arity$1 = password_field26597__1;
password_field26597.cljs$core$IFn$_invoke$arity$2 = password_field26597__2;
return password_field26597;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26597);
/**
* Creates a range input field.
*/
sablono.core.range_field26598 = (function() {
var range_field26598 = null;
var range_field26598__1 = (function (name__5127__auto__){return range_field26598.call(null,name__5127__auto__,null);
});
var range_field26598__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field26598 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field26598__1.call(this,name__5127__auto__);
case 2:
return range_field26598__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26598.cljs$core$IFn$_invoke$arity$1 = range_field26598__1;
range_field26598.cljs$core$IFn$_invoke$arity$2 = range_field26598__2;
return range_field26598;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26598);
/**
* Creates a search input field.
*/
sablono.core.search_field26599 = (function() {
var search_field26599 = null;
var search_field26599__1 = (function (name__5127__auto__){return search_field26599.call(null,name__5127__auto__,null);
});
var search_field26599__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field26599 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field26599__1.call(this,name__5127__auto__);
case 2:
return search_field26599__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26599.cljs$core$IFn$_invoke$arity$1 = search_field26599__1;
search_field26599.cljs$core$IFn$_invoke$arity$2 = search_field26599__2;
return search_field26599;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26599);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26600 = (function() {
var tel_field26600 = null;
var tel_field26600__1 = (function (name__5127__auto__){return tel_field26600.call(null,name__5127__auto__,null);
});
var tel_field26600__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field26600 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field26600__1.call(this,name__5127__auto__);
case 2:
return tel_field26600__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26600.cljs$core$IFn$_invoke$arity$1 = tel_field26600__1;
tel_field26600.cljs$core$IFn$_invoke$arity$2 = tel_field26600__2;
return tel_field26600;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26600);
/**
* Creates a text input field.
*/
sablono.core.text_field26601 = (function() {
var text_field26601 = null;
var text_field26601__1 = (function (name__5127__auto__){return text_field26601.call(null,name__5127__auto__,null);
});
var text_field26601__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field26601 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field26601__1.call(this,name__5127__auto__);
case 2:
return text_field26601__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26601.cljs$core$IFn$_invoke$arity$1 = text_field26601__1;
text_field26601.cljs$core$IFn$_invoke$arity$2 = text_field26601__2;
return text_field26601;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26601);
/**
* Creates a time input field.
*/
sablono.core.time_field26602 = (function() {
var time_field26602 = null;
var time_field26602__1 = (function (name__5127__auto__){return time_field26602.call(null,name__5127__auto__,null);
});
var time_field26602__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field26602 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field26602__1.call(this,name__5127__auto__);
case 2:
return time_field26602__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26602.cljs$core$IFn$_invoke$arity$1 = time_field26602__1;
time_field26602.cljs$core$IFn$_invoke$arity$2 = time_field26602__2;
return time_field26602;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26602);
/**
* Creates a url input field.
*/
sablono.core.url_field26603 = (function() {
var url_field26603 = null;
var url_field26603__1 = (function (name__5127__auto__){return url_field26603.call(null,name__5127__auto__,null);
});
var url_field26603__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field26603 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field26603__1.call(this,name__5127__auto__);
case 2:
return url_field26603__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26603.cljs$core$IFn$_invoke$arity$1 = url_field26603__1;
url_field26603.cljs$core$IFn$_invoke$arity$2 = url_field26603__2;
return url_field26603;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26603);
/**
* Creates a week input field.
*/
sablono.core.week_field26604 = (function() {
var week_field26604 = null;
var week_field26604__1 = (function (name__5127__auto__){return week_field26604.call(null,name__5127__auto__,null);
});
var week_field26604__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field26604 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field26604__1.call(this,name__5127__auto__);
case 2:
return week_field26604__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26604.cljs$core$IFn$_invoke$arity$1 = week_field26604__1;
week_field26604.cljs$core$IFn$_invoke$arity$2 = week_field26604__2;
return week_field26604;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26604);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26605 = (function() {
var check_box26605 = null;
var check_box26605__1 = (function (name){return check_box26605.call(null,name,null);
});
var check_box26605__2 = (function (name,checked_QMARK_){return check_box26605.call(null,name,checked_QMARK_,"true");
});
var check_box26605__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26605 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26605__1.call(this,name);
case 2:
return check_box26605__2.call(this,name,checked_QMARK_);
case 3:
return check_box26605__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26605.cljs$core$IFn$_invoke$arity$1 = check_box26605__1;
check_box26605.cljs$core$IFn$_invoke$arity$2 = check_box26605__2;
check_box26605.cljs$core$IFn$_invoke$arity$3 = check_box26605__3;
return check_box26605;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26605);
/**
* Creates a radio button.
*/
sablono.core.radio_button26606 = (function() {
var radio_button26606 = null;
var radio_button26606__1 = (function (group){return radio_button26606.call(null,group,null);
});
var radio_button26606__2 = (function (group,checked_QMARK_){return radio_button26606.call(null,group,checked_QMARK_,"true");
});
var radio_button26606__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26606 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26606__1.call(this,group);
case 2:
return radio_button26606__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26606__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26606.cljs$core$IFn$_invoke$arity$1 = radio_button26606__1;
radio_button26606.cljs$core$IFn$_invoke$arity$2 = radio_button26606__2;
radio_button26606.cljs$core$IFn$_invoke$arity$3 = radio_button26606__3;
return radio_button26606;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26606);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26607 = (function() {
var select_options26607 = null;
var select_options26607__1 = (function (coll){return select_options26607.call(null,coll,null);
});
var select_options26607__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__26616(s__26617){return (new cljs.core.LazySeq(null,(function (){var s__26617__$1 = s__26617;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26617__$1);if(temp__4126__auto__)
{var s__26617__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26617__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26617__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26619 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26618 = (0);while(true){
if((i__26618 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26618);cljs.core.chunk_append.call(null,b__26619,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26622 = x;var text = cljs.core.nth.call(null,vec__26622,(0),null);var val = cljs.core.nth.call(null,vec__26622,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26622,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26607.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26624 = (i__26618 + (1));
i__26618 = G__26624;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26619),iter__26616.call(null,cljs.core.chunk_rest.call(null,s__26617__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26619),null);
}
} else
{var x = cljs.core.first.call(null,s__26617__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26623 = x;var text = cljs.core.nth.call(null,vec__26623,(0),null);var val = cljs.core.nth.call(null,vec__26623,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26623,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26607.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26616.call(null,cljs.core.rest.call(null,s__26617__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options26607 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26607__1.call(this,coll);
case 2:
return select_options26607__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26607.cljs$core$IFn$_invoke$arity$1 = select_options26607__1;
select_options26607.cljs$core$IFn$_invoke$arity$2 = select_options26607__2;
return select_options26607;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26607);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26625 = (function() {
var drop_down26625 = null;
var drop_down26625__2 = (function (name,options){return drop_down26625.call(null,name,options,null);
});
var drop_down26625__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26625 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26625__2.call(this,name,options);
case 3:
return drop_down26625__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26625.cljs$core$IFn$_invoke$arity$2 = drop_down26625__2;
drop_down26625.cljs$core$IFn$_invoke$arity$3 = drop_down26625__3;
return drop_down26625;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26625);
/**
* Creates a text area element.
*/
sablono.core.text_area26626 = (function() {
var text_area26626 = null;
var text_area26626__1 = (function (name){return text_area26626.call(null,name,null);
});
var text_area26626__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26626 = function(name,value){
switch(arguments.length){
case 1:
return text_area26626__1.call(this,name);
case 2:
return text_area26626__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26626.cljs$core$IFn$_invoke$arity$1 = text_area26626__1;
text_area26626.cljs$core$IFn$_invoke$arity$2 = text_area26626__2;
return text_area26626;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26626);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26627 = (function label26627(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26627);
/**
* Creates a submit button.
*/
sablono.core.submit_button26628 = (function submit_button26628(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26628);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26629 = (function reset_button26629(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26629);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26630 = (function() { 
var form_to26630__delegate = function (p__26631,body){var vec__26633 = p__26631;var method = cljs.core.nth.call(null,vec__26633,(0),null);var action = cljs.core.nth.call(null,vec__26633,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26630 = function (p__26631,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26630__delegate.call(this,p__26631,body);};
form_to26630.cljs$lang$maxFixedArity = 1;
form_to26630.cljs$lang$applyTo = (function (arglist__26634){
var p__26631 = cljs.core.first(arglist__26634);
var body = cljs.core.rest(arglist__26634);
return form_to26630__delegate(p__26631,body);
});
form_to26630.cljs$core$IFn$_invoke$arity$variadic = form_to26630__delegate;
return form_to26630;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26630);
