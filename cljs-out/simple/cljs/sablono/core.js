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
var G__21304__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__21303 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__21303,(0),null);var body = cljs.core.nthnext.call(null,vec__21303,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__21304 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21304__delegate.call(this,args);};
G__21304.cljs$lang$maxFixedArity = 0;
G__21304.cljs$lang$applyTo = (function (arglist__21305){
var args = cljs.core.seq(arglist__21305);
return G__21304__delegate(args);
});
G__21304.cljs$core$IFn$_invoke$arity$variadic = G__21304__delegate;
return G__21304;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__21310(s__21311){return (new cljs.core.LazySeq(null,(function (){var s__21311__$1 = s__21311;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21311__$1);if(temp__4126__auto__)
{var s__21311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21311__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21311__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21313 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21312 = (0);while(true){
if((i__21312 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__21312);cljs.core.chunk_append.call(null,b__21313,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__21314 = (i__21312 + (1));
i__21312 = G__21314;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21313),iter__21310.call(null,cljs.core.chunk_rest.call(null,s__21311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21313),null);
}
} else
{var args = cljs.core.first.call(null,s__21311__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__21310.call(null,cljs.core.rest.call(null,s__21311__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__21319(s__21320){return (new cljs.core.LazySeq(null,(function (){var s__21320__$1 = s__21320;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21320__$1);if(temp__4126__auto__)
{var s__21320__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21320__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21320__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21322 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21321 = (0);while(true){
if((i__21321 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__21321);cljs.core.chunk_append.call(null,b__21322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__21323 = (i__21321 + (1));
i__21321 = G__21323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21322),iter__21319.call(null,cljs.core.chunk_rest.call(null,s__21320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21322),null);
}
} else
{var style = cljs.core.first.call(null,s__21320__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__21319.call(null,cljs.core.rest.call(null,s__21320__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__21324){
var styles = cljs.core.seq(arglist__21324);
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
sablono.core.link_to21325 = (function() { 
var link_to21325__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to21325 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to21325__delegate.call(this,url,content);};
link_to21325.cljs$lang$maxFixedArity = 1;
link_to21325.cljs$lang$applyTo = (function (arglist__21326){
var url = cljs.core.first(arglist__21326);
var content = cljs.core.rest(arglist__21326);
return link_to21325__delegate(url,content);
});
link_to21325.cljs$core$IFn$_invoke$arity$variadic = link_to21325__delegate;
return link_to21325;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21325);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to21327 = (function() { 
var mail_to21327__delegate = function (e_mail,p__21328){var vec__21330 = p__21328;var content = cljs.core.nth.call(null,vec__21330,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to21327 = function (e_mail,var_args){
var p__21328 = null;if (arguments.length > 1) {
  p__21328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to21327__delegate.call(this,e_mail,p__21328);};
mail_to21327.cljs$lang$maxFixedArity = 1;
mail_to21327.cljs$lang$applyTo = (function (arglist__21331){
var e_mail = cljs.core.first(arglist__21331);
var p__21328 = cljs.core.rest(arglist__21331);
return mail_to21327__delegate(e_mail,p__21328);
});
mail_to21327.cljs$core$IFn$_invoke$arity$variadic = mail_to21327__delegate;
return mail_to21327;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21327);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list21332 = (function unordered_list21332(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__21337(s__21338){return (new cljs.core.LazySeq(null,(function (){var s__21338__$1 = s__21338;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21338__$1);if(temp__4126__auto__)
{var s__21338__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21338__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21338__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21340 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21339 = (0);while(true){
if((i__21339 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21339);cljs.core.chunk_append.call(null,b__21340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21341 = (i__21339 + (1));
i__21339 = G__21341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21340),iter__21337.call(null,cljs.core.chunk_rest.call(null,s__21338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21340),null);
}
} else
{var x = cljs.core.first.call(null,s__21338__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21337.call(null,cljs.core.rest.call(null,s__21338__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21332);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list21342 = (function ordered_list21342(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__21347(s__21348){return (new cljs.core.LazySeq(null,(function (){var s__21348__$1 = s__21348;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21348__$1);if(temp__4126__auto__)
{var s__21348__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21348__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21348__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21350 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21349 = (0);while(true){
if((i__21349 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21349);cljs.core.chunk_append.call(null,b__21350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21351 = (i__21349 + (1));
i__21349 = G__21351;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21350),iter__21347.call(null,cljs.core.chunk_rest.call(null,s__21348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21350),null);
}
} else
{var x = cljs.core.first.call(null,s__21348__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21347.call(null,cljs.core.rest.call(null,s__21348__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21342);
/**
* Create an image element.
*/
sablono.core.image21352 = (function() {
var image21352 = null;
var image21352__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image21352__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image21352 = function(src,alt){
switch(arguments.length){
case 1:
return image21352__1.call(this,src);
case 2:
return image21352__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image21352.cljs$core$IFn$_invoke$arity$1 = image21352__1;
image21352.cljs$core$IFn$_invoke$arity$2 = image21352__2;
return image21352;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21352);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__21353_SHARP_,p2__21354_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21353_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21354_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__21355_SHARP_,p2__21356_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21355_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21356_SHARP_));
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
sablono.core.color_field21357 = (function() {
var color_field21357 = null;
var color_field21357__1 = (function (name__5127__auto__){return color_field21357.call(null,name__5127__auto__,null);
});
var color_field21357__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field21357 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field21357__1.call(this,name__5127__auto__);
case 2:
return color_field21357__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field21357.cljs$core$IFn$_invoke$arity$1 = color_field21357__1;
color_field21357.cljs$core$IFn$_invoke$arity$2 = color_field21357__2;
return color_field21357;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21357);
/**
* Creates a date input field.
*/
sablono.core.date_field21358 = (function() {
var date_field21358 = null;
var date_field21358__1 = (function (name__5127__auto__){return date_field21358.call(null,name__5127__auto__,null);
});
var date_field21358__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field21358 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field21358__1.call(this,name__5127__auto__);
case 2:
return date_field21358__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field21358.cljs$core$IFn$_invoke$arity$1 = date_field21358__1;
date_field21358.cljs$core$IFn$_invoke$arity$2 = date_field21358__2;
return date_field21358;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21358);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field21359 = (function() {
var datetime_field21359 = null;
var datetime_field21359__1 = (function (name__5127__auto__){return datetime_field21359.call(null,name__5127__auto__,null);
});
var datetime_field21359__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field21359 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field21359__1.call(this,name__5127__auto__);
case 2:
return datetime_field21359__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field21359.cljs$core$IFn$_invoke$arity$1 = datetime_field21359__1;
datetime_field21359.cljs$core$IFn$_invoke$arity$2 = datetime_field21359__2;
return datetime_field21359;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21359);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field21360 = (function() {
var datetime_local_field21360 = null;
var datetime_local_field21360__1 = (function (name__5127__auto__){return datetime_local_field21360.call(null,name__5127__auto__,null);
});
var datetime_local_field21360__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field21360 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field21360__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field21360__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field21360.cljs$core$IFn$_invoke$arity$1 = datetime_local_field21360__1;
datetime_local_field21360.cljs$core$IFn$_invoke$arity$2 = datetime_local_field21360__2;
return datetime_local_field21360;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21360);
/**
* Creates a email input field.
*/
sablono.core.email_field21361 = (function() {
var email_field21361 = null;
var email_field21361__1 = (function (name__5127__auto__){return email_field21361.call(null,name__5127__auto__,null);
});
var email_field21361__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field21361 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field21361__1.call(this,name__5127__auto__);
case 2:
return email_field21361__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field21361.cljs$core$IFn$_invoke$arity$1 = email_field21361__1;
email_field21361.cljs$core$IFn$_invoke$arity$2 = email_field21361__2;
return email_field21361;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21361);
/**
* Creates a file input field.
*/
sablono.core.file_field21362 = (function() {
var file_field21362 = null;
var file_field21362__1 = (function (name__5127__auto__){return file_field21362.call(null,name__5127__auto__,null);
});
var file_field21362__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field21362 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field21362__1.call(this,name__5127__auto__);
case 2:
return file_field21362__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field21362.cljs$core$IFn$_invoke$arity$1 = file_field21362__1;
file_field21362.cljs$core$IFn$_invoke$arity$2 = file_field21362__2;
return file_field21362;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21362);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field21363 = (function() {
var hidden_field21363 = null;
var hidden_field21363__1 = (function (name__5127__auto__){return hidden_field21363.call(null,name__5127__auto__,null);
});
var hidden_field21363__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field21363 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field21363__1.call(this,name__5127__auto__);
case 2:
return hidden_field21363__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field21363.cljs$core$IFn$_invoke$arity$1 = hidden_field21363__1;
hidden_field21363.cljs$core$IFn$_invoke$arity$2 = hidden_field21363__2;
return hidden_field21363;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21363);
/**
* Creates a month input field.
*/
sablono.core.month_field21364 = (function() {
var month_field21364 = null;
var month_field21364__1 = (function (name__5127__auto__){return month_field21364.call(null,name__5127__auto__,null);
});
var month_field21364__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field21364 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field21364__1.call(this,name__5127__auto__);
case 2:
return month_field21364__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field21364.cljs$core$IFn$_invoke$arity$1 = month_field21364__1;
month_field21364.cljs$core$IFn$_invoke$arity$2 = month_field21364__2;
return month_field21364;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21364);
/**
* Creates a number input field.
*/
sablono.core.number_field21365 = (function() {
var number_field21365 = null;
var number_field21365__1 = (function (name__5127__auto__){return number_field21365.call(null,name__5127__auto__,null);
});
var number_field21365__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field21365 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field21365__1.call(this,name__5127__auto__);
case 2:
return number_field21365__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field21365.cljs$core$IFn$_invoke$arity$1 = number_field21365__1;
number_field21365.cljs$core$IFn$_invoke$arity$2 = number_field21365__2;
return number_field21365;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21365);
/**
* Creates a password input field.
*/
sablono.core.password_field21366 = (function() {
var password_field21366 = null;
var password_field21366__1 = (function (name__5127__auto__){return password_field21366.call(null,name__5127__auto__,null);
});
var password_field21366__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field21366 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field21366__1.call(this,name__5127__auto__);
case 2:
return password_field21366__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field21366.cljs$core$IFn$_invoke$arity$1 = password_field21366__1;
password_field21366.cljs$core$IFn$_invoke$arity$2 = password_field21366__2;
return password_field21366;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21366);
/**
* Creates a range input field.
*/
sablono.core.range_field21367 = (function() {
var range_field21367 = null;
var range_field21367__1 = (function (name__5127__auto__){return range_field21367.call(null,name__5127__auto__,null);
});
var range_field21367__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field21367 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field21367__1.call(this,name__5127__auto__);
case 2:
return range_field21367__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field21367.cljs$core$IFn$_invoke$arity$1 = range_field21367__1;
range_field21367.cljs$core$IFn$_invoke$arity$2 = range_field21367__2;
return range_field21367;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21367);
/**
* Creates a search input field.
*/
sablono.core.search_field21368 = (function() {
var search_field21368 = null;
var search_field21368__1 = (function (name__5127__auto__){return search_field21368.call(null,name__5127__auto__,null);
});
var search_field21368__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field21368 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field21368__1.call(this,name__5127__auto__);
case 2:
return search_field21368__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field21368.cljs$core$IFn$_invoke$arity$1 = search_field21368__1;
search_field21368.cljs$core$IFn$_invoke$arity$2 = search_field21368__2;
return search_field21368;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21368);
/**
* Creates a tel input field.
*/
sablono.core.tel_field21369 = (function() {
var tel_field21369 = null;
var tel_field21369__1 = (function (name__5127__auto__){return tel_field21369.call(null,name__5127__auto__,null);
});
var tel_field21369__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field21369 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field21369__1.call(this,name__5127__auto__);
case 2:
return tel_field21369__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field21369.cljs$core$IFn$_invoke$arity$1 = tel_field21369__1;
tel_field21369.cljs$core$IFn$_invoke$arity$2 = tel_field21369__2;
return tel_field21369;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21369);
/**
* Creates a text input field.
*/
sablono.core.text_field21370 = (function() {
var text_field21370 = null;
var text_field21370__1 = (function (name__5127__auto__){return text_field21370.call(null,name__5127__auto__,null);
});
var text_field21370__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field21370 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field21370__1.call(this,name__5127__auto__);
case 2:
return text_field21370__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field21370.cljs$core$IFn$_invoke$arity$1 = text_field21370__1;
text_field21370.cljs$core$IFn$_invoke$arity$2 = text_field21370__2;
return text_field21370;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21370);
/**
* Creates a time input field.
*/
sablono.core.time_field21371 = (function() {
var time_field21371 = null;
var time_field21371__1 = (function (name__5127__auto__){return time_field21371.call(null,name__5127__auto__,null);
});
var time_field21371__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field21371 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field21371__1.call(this,name__5127__auto__);
case 2:
return time_field21371__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field21371.cljs$core$IFn$_invoke$arity$1 = time_field21371__1;
time_field21371.cljs$core$IFn$_invoke$arity$2 = time_field21371__2;
return time_field21371;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21371);
/**
* Creates a url input field.
*/
sablono.core.url_field21372 = (function() {
var url_field21372 = null;
var url_field21372__1 = (function (name__5127__auto__){return url_field21372.call(null,name__5127__auto__,null);
});
var url_field21372__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field21372 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field21372__1.call(this,name__5127__auto__);
case 2:
return url_field21372__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field21372.cljs$core$IFn$_invoke$arity$1 = url_field21372__1;
url_field21372.cljs$core$IFn$_invoke$arity$2 = url_field21372__2;
return url_field21372;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21372);
/**
* Creates a week input field.
*/
sablono.core.week_field21373 = (function() {
var week_field21373 = null;
var week_field21373__1 = (function (name__5127__auto__){return week_field21373.call(null,name__5127__auto__,null);
});
var week_field21373__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field21373 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field21373__1.call(this,name__5127__auto__);
case 2:
return week_field21373__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field21373.cljs$core$IFn$_invoke$arity$1 = week_field21373__1;
week_field21373.cljs$core$IFn$_invoke$arity$2 = week_field21373__2;
return week_field21373;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21373);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box21374 = (function() {
var check_box21374 = null;
var check_box21374__1 = (function (name){return check_box21374.call(null,name,null);
});
var check_box21374__2 = (function (name,checked_QMARK_){return check_box21374.call(null,name,checked_QMARK_,"true");
});
var check_box21374__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box21374 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box21374__1.call(this,name);
case 2:
return check_box21374__2.call(this,name,checked_QMARK_);
case 3:
return check_box21374__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box21374.cljs$core$IFn$_invoke$arity$1 = check_box21374__1;
check_box21374.cljs$core$IFn$_invoke$arity$2 = check_box21374__2;
check_box21374.cljs$core$IFn$_invoke$arity$3 = check_box21374__3;
return check_box21374;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21374);
/**
* Creates a radio button.
*/
sablono.core.radio_button21375 = (function() {
var radio_button21375 = null;
var radio_button21375__1 = (function (group){return radio_button21375.call(null,group,null);
});
var radio_button21375__2 = (function (group,checked_QMARK_){return radio_button21375.call(null,group,checked_QMARK_,"true");
});
var radio_button21375__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button21375 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button21375__1.call(this,group);
case 2:
return radio_button21375__2.call(this,group,checked_QMARK_);
case 3:
return radio_button21375__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button21375.cljs$core$IFn$_invoke$arity$1 = radio_button21375__1;
radio_button21375.cljs$core$IFn$_invoke$arity$2 = radio_button21375__2;
radio_button21375.cljs$core$IFn$_invoke$arity$3 = radio_button21375__3;
return radio_button21375;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21375);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options21376 = (function() {
var select_options21376 = null;
var select_options21376__1 = (function (coll){return select_options21376.call(null,coll,null);
});
var select_options21376__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__21385(s__21386){return (new cljs.core.LazySeq(null,(function (){var s__21386__$1 = s__21386;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21386__$1);if(temp__4126__auto__)
{var s__21386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21386__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21386__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21388 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21387 = (0);while(true){
if((i__21387 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21387);cljs.core.chunk_append.call(null,b__21388,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21391 = x;var text = cljs.core.nth.call(null,vec__21391,(0),null);var val = cljs.core.nth.call(null,vec__21391,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21391,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21376.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__21393 = (i__21387 + (1));
i__21387 = G__21393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21388),iter__21385.call(null,cljs.core.chunk_rest.call(null,s__21386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21388),null);
}
} else
{var x = cljs.core.first.call(null,s__21386__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21392 = x;var text = cljs.core.nth.call(null,vec__21392,(0),null);var val = cljs.core.nth.call(null,vec__21392,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21392,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21376.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__21385.call(null,cljs.core.rest.call(null,s__21386__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options21376 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options21376__1.call(this,coll);
case 2:
return select_options21376__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options21376.cljs$core$IFn$_invoke$arity$1 = select_options21376__1;
select_options21376.cljs$core$IFn$_invoke$arity$2 = select_options21376__2;
return select_options21376;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21376);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down21394 = (function() {
var drop_down21394 = null;
var drop_down21394__2 = (function (name,options){return drop_down21394.call(null,name,options,null);
});
var drop_down21394__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down21394 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down21394__2.call(this,name,options);
case 3:
return drop_down21394__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down21394.cljs$core$IFn$_invoke$arity$2 = drop_down21394__2;
drop_down21394.cljs$core$IFn$_invoke$arity$3 = drop_down21394__3;
return drop_down21394;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21394);
/**
* Creates a text area element.
*/
sablono.core.text_area21395 = (function() {
var text_area21395 = null;
var text_area21395__1 = (function (name){return text_area21395.call(null,name,null);
});
var text_area21395__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area21395 = function(name,value){
switch(arguments.length){
case 1:
return text_area21395__1.call(this,name);
case 2:
return text_area21395__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area21395.cljs$core$IFn$_invoke$arity$1 = text_area21395__1;
text_area21395.cljs$core$IFn$_invoke$arity$2 = text_area21395__2;
return text_area21395;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21395);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label21396 = (function label21396(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21396);
/**
* Creates a submit button.
*/
sablono.core.submit_button21397 = (function submit_button21397(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21397);
/**
* Creates a form reset button.
*/
sablono.core.reset_button21398 = (function reset_button21398(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21398);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to21399 = (function() { 
var form_to21399__delegate = function (p__21400,body){var vec__21402 = p__21400;var method = cljs.core.nth.call(null,vec__21402,(0),null);var action = cljs.core.nth.call(null,vec__21402,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to21399 = function (p__21400,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to21399__delegate.call(this,p__21400,body);};
form_to21399.cljs$lang$maxFixedArity = 1;
form_to21399.cljs$lang$applyTo = (function (arglist__21403){
var p__21400 = cljs.core.first(arglist__21403);
var body = cljs.core.rest(arglist__21403);
return form_to21399__delegate(p__21400,body);
});
form_to21399.cljs$core$IFn$_invoke$arity$variadic = form_to21399__delegate;
return form_to21399;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21399);
