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
var G__22374__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22373 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22373,(0),null);var body = cljs.core.nthnext.call(null,vec__22373,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22374 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22374__delegate.call(this,args);};
G__22374.cljs$lang$maxFixedArity = 0;
G__22374.cljs$lang$applyTo = (function (arglist__22375){
var args = cljs.core.seq(arglist__22375);
return G__22374__delegate(args);
});
G__22374.cljs$core$IFn$_invoke$arity$variadic = G__22374__delegate;
return G__22374;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__22380(s__22381){return (new cljs.core.LazySeq(null,(function (){var s__22381__$1 = s__22381;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22381__$1);if(temp__4126__auto__)
{var s__22381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22381__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22381__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22383 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22382 = (0);while(true){
if((i__22382 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__22382);cljs.core.chunk_append.call(null,b__22383,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22384 = (i__22382 + (1));
i__22382 = G__22384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22383),iter__22380.call(null,cljs.core.chunk_rest.call(null,s__22381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22383),null);
}
} else
{var args = cljs.core.first.call(null,s__22381__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22380.call(null,cljs.core.rest.call(null,s__22381__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__22389(s__22390){return (new cljs.core.LazySeq(null,(function (){var s__22390__$1 = s__22390;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22390__$1);if(temp__4126__auto__)
{var s__22390__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22390__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22390__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22392 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22391 = (0);while(true){
if((i__22391 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__22391);cljs.core.chunk_append.call(null,b__22392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22393 = (i__22391 + (1));
i__22391 = G__22393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22392),iter__22389.call(null,cljs.core.chunk_rest.call(null,s__22390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22392),null);
}
} else
{var style = cljs.core.first.call(null,s__22390__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22389.call(null,cljs.core.rest.call(null,s__22390__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__22394){
var styles = cljs.core.seq(arglist__22394);
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
sablono.core.link_to22395 = (function() { 
var link_to22395__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22395 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22395__delegate.call(this,url,content);};
link_to22395.cljs$lang$maxFixedArity = 1;
link_to22395.cljs$lang$applyTo = (function (arglist__22396){
var url = cljs.core.first(arglist__22396);
var content = cljs.core.rest(arglist__22396);
return link_to22395__delegate(url,content);
});
link_to22395.cljs$core$IFn$_invoke$arity$variadic = link_to22395__delegate;
return link_to22395;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22395);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22397 = (function() { 
var mail_to22397__delegate = function (e_mail,p__22398){var vec__22400 = p__22398;var content = cljs.core.nth.call(null,vec__22400,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22397 = function (e_mail,var_args){
var p__22398 = null;if (arguments.length > 1) {
  p__22398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22397__delegate.call(this,e_mail,p__22398);};
mail_to22397.cljs$lang$maxFixedArity = 1;
mail_to22397.cljs$lang$applyTo = (function (arglist__22401){
var e_mail = cljs.core.first(arglist__22401);
var p__22398 = cljs.core.rest(arglist__22401);
return mail_to22397__delegate(e_mail,p__22398);
});
mail_to22397.cljs$core$IFn$_invoke$arity$variadic = mail_to22397__delegate;
return mail_to22397;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22397);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22402 = (function unordered_list22402(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__22407(s__22408){return (new cljs.core.LazySeq(null,(function (){var s__22408__$1 = s__22408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22408__$1);if(temp__4126__auto__)
{var s__22408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22408__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22408__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22410 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22409 = (0);while(true){
if((i__22409 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22409);cljs.core.chunk_append.call(null,b__22410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22411 = (i__22409 + (1));
i__22409 = G__22411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22410),iter__22407.call(null,cljs.core.chunk_rest.call(null,s__22408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22410),null);
}
} else
{var x = cljs.core.first.call(null,s__22408__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22407.call(null,cljs.core.rest.call(null,s__22408__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22402);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22412 = (function ordered_list22412(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__22417(s__22418){return (new cljs.core.LazySeq(null,(function (){var s__22418__$1 = s__22418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22418__$1);if(temp__4126__auto__)
{var s__22418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22418__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22418__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22420 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22419 = (0);while(true){
if((i__22419 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22419);cljs.core.chunk_append.call(null,b__22420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22421 = (i__22419 + (1));
i__22419 = G__22421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22420),iter__22417.call(null,cljs.core.chunk_rest.call(null,s__22418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22420),null);
}
} else
{var x = cljs.core.first.call(null,s__22418__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22417.call(null,cljs.core.rest.call(null,s__22418__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22412);
/**
* Create an image element.
*/
sablono.core.image22422 = (function() {
var image22422 = null;
var image22422__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22422__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22422 = function(src,alt){
switch(arguments.length){
case 1:
return image22422__1.call(this,src);
case 2:
return image22422__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22422.cljs$core$IFn$_invoke$arity$1 = image22422__1;
image22422.cljs$core$IFn$_invoke$arity$2 = image22422__2;
return image22422;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22422);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22423_SHARP_,p2__22424_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22423_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22424_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22425_SHARP_,p2__22426_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22425_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22426_SHARP_));
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
sablono.core.color_field22427 = (function() {
var color_field22427 = null;
var color_field22427__1 = (function (name__5127__auto__){return color_field22427.call(null,name__5127__auto__,null);
});
var color_field22427__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field22427 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field22427__1.call(this,name__5127__auto__);
case 2:
return color_field22427__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22427.cljs$core$IFn$_invoke$arity$1 = color_field22427__1;
color_field22427.cljs$core$IFn$_invoke$arity$2 = color_field22427__2;
return color_field22427;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22427);
/**
* Creates a date input field.
*/
sablono.core.date_field22428 = (function() {
var date_field22428 = null;
var date_field22428__1 = (function (name__5127__auto__){return date_field22428.call(null,name__5127__auto__,null);
});
var date_field22428__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field22428 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field22428__1.call(this,name__5127__auto__);
case 2:
return date_field22428__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22428.cljs$core$IFn$_invoke$arity$1 = date_field22428__1;
date_field22428.cljs$core$IFn$_invoke$arity$2 = date_field22428__2;
return date_field22428;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22428);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22429 = (function() {
var datetime_field22429 = null;
var datetime_field22429__1 = (function (name__5127__auto__){return datetime_field22429.call(null,name__5127__auto__,null);
});
var datetime_field22429__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field22429 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field22429__1.call(this,name__5127__auto__);
case 2:
return datetime_field22429__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22429.cljs$core$IFn$_invoke$arity$1 = datetime_field22429__1;
datetime_field22429.cljs$core$IFn$_invoke$arity$2 = datetime_field22429__2;
return datetime_field22429;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22429);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22430 = (function() {
var datetime_local_field22430 = null;
var datetime_local_field22430__1 = (function (name__5127__auto__){return datetime_local_field22430.call(null,name__5127__auto__,null);
});
var datetime_local_field22430__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field22430 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22430__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field22430__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22430.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22430__1;
datetime_local_field22430.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22430__2;
return datetime_local_field22430;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22430);
/**
* Creates a email input field.
*/
sablono.core.email_field22431 = (function() {
var email_field22431 = null;
var email_field22431__1 = (function (name__5127__auto__){return email_field22431.call(null,name__5127__auto__,null);
});
var email_field22431__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field22431 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field22431__1.call(this,name__5127__auto__);
case 2:
return email_field22431__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22431.cljs$core$IFn$_invoke$arity$1 = email_field22431__1;
email_field22431.cljs$core$IFn$_invoke$arity$2 = email_field22431__2;
return email_field22431;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22431);
/**
* Creates a file input field.
*/
sablono.core.file_field22432 = (function() {
var file_field22432 = null;
var file_field22432__1 = (function (name__5127__auto__){return file_field22432.call(null,name__5127__auto__,null);
});
var file_field22432__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field22432 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field22432__1.call(this,name__5127__auto__);
case 2:
return file_field22432__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22432.cljs$core$IFn$_invoke$arity$1 = file_field22432__1;
file_field22432.cljs$core$IFn$_invoke$arity$2 = file_field22432__2;
return file_field22432;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22432);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22433 = (function() {
var hidden_field22433 = null;
var hidden_field22433__1 = (function (name__5127__auto__){return hidden_field22433.call(null,name__5127__auto__,null);
});
var hidden_field22433__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field22433 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field22433__1.call(this,name__5127__auto__);
case 2:
return hidden_field22433__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22433.cljs$core$IFn$_invoke$arity$1 = hidden_field22433__1;
hidden_field22433.cljs$core$IFn$_invoke$arity$2 = hidden_field22433__2;
return hidden_field22433;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22433);
/**
* Creates a month input field.
*/
sablono.core.month_field22434 = (function() {
var month_field22434 = null;
var month_field22434__1 = (function (name__5127__auto__){return month_field22434.call(null,name__5127__auto__,null);
});
var month_field22434__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field22434 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field22434__1.call(this,name__5127__auto__);
case 2:
return month_field22434__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22434.cljs$core$IFn$_invoke$arity$1 = month_field22434__1;
month_field22434.cljs$core$IFn$_invoke$arity$2 = month_field22434__2;
return month_field22434;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22434);
/**
* Creates a number input field.
*/
sablono.core.number_field22435 = (function() {
var number_field22435 = null;
var number_field22435__1 = (function (name__5127__auto__){return number_field22435.call(null,name__5127__auto__,null);
});
var number_field22435__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field22435 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field22435__1.call(this,name__5127__auto__);
case 2:
return number_field22435__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22435.cljs$core$IFn$_invoke$arity$1 = number_field22435__1;
number_field22435.cljs$core$IFn$_invoke$arity$2 = number_field22435__2;
return number_field22435;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22435);
/**
* Creates a password input field.
*/
sablono.core.password_field22436 = (function() {
var password_field22436 = null;
var password_field22436__1 = (function (name__5127__auto__){return password_field22436.call(null,name__5127__auto__,null);
});
var password_field22436__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field22436 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field22436__1.call(this,name__5127__auto__);
case 2:
return password_field22436__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22436.cljs$core$IFn$_invoke$arity$1 = password_field22436__1;
password_field22436.cljs$core$IFn$_invoke$arity$2 = password_field22436__2;
return password_field22436;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22436);
/**
* Creates a range input field.
*/
sablono.core.range_field22437 = (function() {
var range_field22437 = null;
var range_field22437__1 = (function (name__5127__auto__){return range_field22437.call(null,name__5127__auto__,null);
});
var range_field22437__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field22437 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field22437__1.call(this,name__5127__auto__);
case 2:
return range_field22437__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22437.cljs$core$IFn$_invoke$arity$1 = range_field22437__1;
range_field22437.cljs$core$IFn$_invoke$arity$2 = range_field22437__2;
return range_field22437;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22437);
/**
* Creates a search input field.
*/
sablono.core.search_field22438 = (function() {
var search_field22438 = null;
var search_field22438__1 = (function (name__5127__auto__){return search_field22438.call(null,name__5127__auto__,null);
});
var search_field22438__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field22438 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field22438__1.call(this,name__5127__auto__);
case 2:
return search_field22438__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22438.cljs$core$IFn$_invoke$arity$1 = search_field22438__1;
search_field22438.cljs$core$IFn$_invoke$arity$2 = search_field22438__2;
return search_field22438;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22438);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22439 = (function() {
var tel_field22439 = null;
var tel_field22439__1 = (function (name__5127__auto__){return tel_field22439.call(null,name__5127__auto__,null);
});
var tel_field22439__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field22439 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field22439__1.call(this,name__5127__auto__);
case 2:
return tel_field22439__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22439.cljs$core$IFn$_invoke$arity$1 = tel_field22439__1;
tel_field22439.cljs$core$IFn$_invoke$arity$2 = tel_field22439__2;
return tel_field22439;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22439);
/**
* Creates a text input field.
*/
sablono.core.text_field22440 = (function() {
var text_field22440 = null;
var text_field22440__1 = (function (name__5127__auto__){return text_field22440.call(null,name__5127__auto__,null);
});
var text_field22440__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field22440 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field22440__1.call(this,name__5127__auto__);
case 2:
return text_field22440__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22440.cljs$core$IFn$_invoke$arity$1 = text_field22440__1;
text_field22440.cljs$core$IFn$_invoke$arity$2 = text_field22440__2;
return text_field22440;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22440);
/**
* Creates a time input field.
*/
sablono.core.time_field22441 = (function() {
var time_field22441 = null;
var time_field22441__1 = (function (name__5127__auto__){return time_field22441.call(null,name__5127__auto__,null);
});
var time_field22441__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field22441 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field22441__1.call(this,name__5127__auto__);
case 2:
return time_field22441__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22441.cljs$core$IFn$_invoke$arity$1 = time_field22441__1;
time_field22441.cljs$core$IFn$_invoke$arity$2 = time_field22441__2;
return time_field22441;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22441);
/**
* Creates a url input field.
*/
sablono.core.url_field22442 = (function() {
var url_field22442 = null;
var url_field22442__1 = (function (name__5127__auto__){return url_field22442.call(null,name__5127__auto__,null);
});
var url_field22442__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field22442 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field22442__1.call(this,name__5127__auto__);
case 2:
return url_field22442__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22442.cljs$core$IFn$_invoke$arity$1 = url_field22442__1;
url_field22442.cljs$core$IFn$_invoke$arity$2 = url_field22442__2;
return url_field22442;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22442);
/**
* Creates a week input field.
*/
sablono.core.week_field22443 = (function() {
var week_field22443 = null;
var week_field22443__1 = (function (name__5127__auto__){return week_field22443.call(null,name__5127__auto__,null);
});
var week_field22443__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field22443 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field22443__1.call(this,name__5127__auto__);
case 2:
return week_field22443__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22443.cljs$core$IFn$_invoke$arity$1 = week_field22443__1;
week_field22443.cljs$core$IFn$_invoke$arity$2 = week_field22443__2;
return week_field22443;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22443);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22444 = (function() {
var check_box22444 = null;
var check_box22444__1 = (function (name){return check_box22444.call(null,name,null);
});
var check_box22444__2 = (function (name,checked_QMARK_){return check_box22444.call(null,name,checked_QMARK_,"true");
});
var check_box22444__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22444 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22444__1.call(this,name);
case 2:
return check_box22444__2.call(this,name,checked_QMARK_);
case 3:
return check_box22444__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22444.cljs$core$IFn$_invoke$arity$1 = check_box22444__1;
check_box22444.cljs$core$IFn$_invoke$arity$2 = check_box22444__2;
check_box22444.cljs$core$IFn$_invoke$arity$3 = check_box22444__3;
return check_box22444;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22444);
/**
* Creates a radio button.
*/
sablono.core.radio_button22445 = (function() {
var radio_button22445 = null;
var radio_button22445__1 = (function (group){return radio_button22445.call(null,group,null);
});
var radio_button22445__2 = (function (group,checked_QMARK_){return radio_button22445.call(null,group,checked_QMARK_,"true");
});
var radio_button22445__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22445 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22445__1.call(this,group);
case 2:
return radio_button22445__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22445__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22445.cljs$core$IFn$_invoke$arity$1 = radio_button22445__1;
radio_button22445.cljs$core$IFn$_invoke$arity$2 = radio_button22445__2;
radio_button22445.cljs$core$IFn$_invoke$arity$3 = radio_button22445__3;
return radio_button22445;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22445);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22446 = (function() {
var select_options22446 = null;
var select_options22446__1 = (function (coll){return select_options22446.call(null,coll,null);
});
var select_options22446__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__22455(s__22456){return (new cljs.core.LazySeq(null,(function (){var s__22456__$1 = s__22456;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22456__$1);if(temp__4126__auto__)
{var s__22456__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22456__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22456__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22458 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22457 = (0);while(true){
if((i__22457 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22457);cljs.core.chunk_append.call(null,b__22458,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22461 = x;var text = cljs.core.nth.call(null,vec__22461,(0),null);var val = cljs.core.nth.call(null,vec__22461,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22461,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22446.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22463 = (i__22457 + (1));
i__22457 = G__22463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22458),iter__22455.call(null,cljs.core.chunk_rest.call(null,s__22456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22458),null);
}
} else
{var x = cljs.core.first.call(null,s__22456__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22462 = x;var text = cljs.core.nth.call(null,vec__22462,(0),null);var val = cljs.core.nth.call(null,vec__22462,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22462,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22446.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22455.call(null,cljs.core.rest.call(null,s__22456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options22446 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22446__1.call(this,coll);
case 2:
return select_options22446__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22446.cljs$core$IFn$_invoke$arity$1 = select_options22446__1;
select_options22446.cljs$core$IFn$_invoke$arity$2 = select_options22446__2;
return select_options22446;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22446);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22464 = (function() {
var drop_down22464 = null;
var drop_down22464__2 = (function (name,options){return drop_down22464.call(null,name,options,null);
});
var drop_down22464__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22464 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22464__2.call(this,name,options);
case 3:
return drop_down22464__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22464.cljs$core$IFn$_invoke$arity$2 = drop_down22464__2;
drop_down22464.cljs$core$IFn$_invoke$arity$3 = drop_down22464__3;
return drop_down22464;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22464);
/**
* Creates a text area element.
*/
sablono.core.text_area22465 = (function() {
var text_area22465 = null;
var text_area22465__1 = (function (name){return text_area22465.call(null,name,null);
});
var text_area22465__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22465 = function(name,value){
switch(arguments.length){
case 1:
return text_area22465__1.call(this,name);
case 2:
return text_area22465__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22465.cljs$core$IFn$_invoke$arity$1 = text_area22465__1;
text_area22465.cljs$core$IFn$_invoke$arity$2 = text_area22465__2;
return text_area22465;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22465);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22466 = (function label22466(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22466);
/**
* Creates a submit button.
*/
sablono.core.submit_button22467 = (function submit_button22467(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22467);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22468 = (function reset_button22468(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22468);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22469 = (function() { 
var form_to22469__delegate = function (p__22470,body){var vec__22472 = p__22470;var method = cljs.core.nth.call(null,vec__22472,(0),null);var action = cljs.core.nth.call(null,vec__22472,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22469 = function (p__22470,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22469__delegate.call(this,p__22470,body);};
form_to22469.cljs$lang$maxFixedArity = 1;
form_to22469.cljs$lang$applyTo = (function (arglist__22473){
var p__22470 = cljs.core.first(arglist__22473);
var body = cljs.core.rest(arglist__22473);
return form_to22469__delegate(p__22470,body);
});
form_to22469.cljs$core$IFn$_invoke$arity$variadic = form_to22469__delegate;
return form_to22469;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22469);
