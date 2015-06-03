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
var G__21237__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__21236 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__21236,(0),null);var body = cljs.core.nthnext.call(null,vec__21236,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__21237 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21237__delegate.call(this,args);};
G__21237.cljs$lang$maxFixedArity = 0;
G__21237.cljs$lang$applyTo = (function (arglist__21238){
var args = cljs.core.seq(arglist__21238);
return G__21237__delegate(args);
});
G__21237.cljs$core$IFn$_invoke$arity$variadic = G__21237__delegate;
return G__21237;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__21243(s__21244){return (new cljs.core.LazySeq(null,(function (){var s__21244__$1 = s__21244;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21244__$1);if(temp__4126__auto__)
{var s__21244__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21244__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21244__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21246 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21245 = (0);while(true){
if((i__21245 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__21245);cljs.core.chunk_append.call(null,b__21246,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__21247 = (i__21245 + (1));
i__21245 = G__21247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21246),iter__21243.call(null,cljs.core.chunk_rest.call(null,s__21244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21246),null);
}
} else
{var args = cljs.core.first.call(null,s__21244__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__21243.call(null,cljs.core.rest.call(null,s__21244__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__21252(s__21253){return (new cljs.core.LazySeq(null,(function (){var s__21253__$1 = s__21253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21253__$1);if(temp__4126__auto__)
{var s__21253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21253__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21253__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21255 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21254 = (0);while(true){
if((i__21254 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__21254);cljs.core.chunk_append.call(null,b__21255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__21256 = (i__21254 + (1));
i__21254 = G__21256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21255),iter__21252.call(null,cljs.core.chunk_rest.call(null,s__21253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21255),null);
}
} else
{var style = cljs.core.first.call(null,s__21253__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__21252.call(null,cljs.core.rest.call(null,s__21253__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__21257){
var styles = cljs.core.seq(arglist__21257);
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
sablono.core.link_to21258 = (function() { 
var link_to21258__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to21258 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to21258__delegate.call(this,url,content);};
link_to21258.cljs$lang$maxFixedArity = 1;
link_to21258.cljs$lang$applyTo = (function (arglist__21259){
var url = cljs.core.first(arglist__21259);
var content = cljs.core.rest(arglist__21259);
return link_to21258__delegate(url,content);
});
link_to21258.cljs$core$IFn$_invoke$arity$variadic = link_to21258__delegate;
return link_to21258;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21258);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to21260 = (function() { 
var mail_to21260__delegate = function (e_mail,p__21261){var vec__21263 = p__21261;var content = cljs.core.nth.call(null,vec__21263,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to21260 = function (e_mail,var_args){
var p__21261 = null;if (arguments.length > 1) {
  p__21261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to21260__delegate.call(this,e_mail,p__21261);};
mail_to21260.cljs$lang$maxFixedArity = 1;
mail_to21260.cljs$lang$applyTo = (function (arglist__21264){
var e_mail = cljs.core.first(arglist__21264);
var p__21261 = cljs.core.rest(arglist__21264);
return mail_to21260__delegate(e_mail,p__21261);
});
mail_to21260.cljs$core$IFn$_invoke$arity$variadic = mail_to21260__delegate;
return mail_to21260;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21260);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list21265 = (function unordered_list21265(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__21270(s__21271){return (new cljs.core.LazySeq(null,(function (){var s__21271__$1 = s__21271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21271__$1);if(temp__4126__auto__)
{var s__21271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21271__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21271__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21273 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21272 = (0);while(true){
if((i__21272 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21272);cljs.core.chunk_append.call(null,b__21273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21274 = (i__21272 + (1));
i__21272 = G__21274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21273),iter__21270.call(null,cljs.core.chunk_rest.call(null,s__21271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21273),null);
}
} else
{var x = cljs.core.first.call(null,s__21271__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21270.call(null,cljs.core.rest.call(null,s__21271__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21265);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list21275 = (function ordered_list21275(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__21280(s__21281){return (new cljs.core.LazySeq(null,(function (){var s__21281__$1 = s__21281;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21281__$1);if(temp__4126__auto__)
{var s__21281__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21281__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21281__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21283 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21282 = (0);while(true){
if((i__21282 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21282);cljs.core.chunk_append.call(null,b__21283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21284 = (i__21282 + (1));
i__21282 = G__21284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21283),iter__21280.call(null,cljs.core.chunk_rest.call(null,s__21281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21283),null);
}
} else
{var x = cljs.core.first.call(null,s__21281__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21280.call(null,cljs.core.rest.call(null,s__21281__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21275);
/**
* Create an image element.
*/
sablono.core.image21285 = (function() {
var image21285 = null;
var image21285__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image21285__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image21285 = function(src,alt){
switch(arguments.length){
case 1:
return image21285__1.call(this,src);
case 2:
return image21285__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image21285.cljs$core$IFn$_invoke$arity$1 = image21285__1;
image21285.cljs$core$IFn$_invoke$arity$2 = image21285__2;
return image21285;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21285);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__21286_SHARP_,p2__21287_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21286_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21287_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__21288_SHARP_,p2__21289_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21288_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21289_SHARP_));
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
sablono.core.color_field21290 = (function() {
var color_field21290 = null;
var color_field21290__1 = (function (name__5127__auto__){return color_field21290.call(null,name__5127__auto__,null);
});
var color_field21290__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field21290 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field21290__1.call(this,name__5127__auto__);
case 2:
return color_field21290__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field21290.cljs$core$IFn$_invoke$arity$1 = color_field21290__1;
color_field21290.cljs$core$IFn$_invoke$arity$2 = color_field21290__2;
return color_field21290;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21290);
/**
* Creates a date input field.
*/
sablono.core.date_field21291 = (function() {
var date_field21291 = null;
var date_field21291__1 = (function (name__5127__auto__){return date_field21291.call(null,name__5127__auto__,null);
});
var date_field21291__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field21291 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field21291__1.call(this,name__5127__auto__);
case 2:
return date_field21291__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field21291.cljs$core$IFn$_invoke$arity$1 = date_field21291__1;
date_field21291.cljs$core$IFn$_invoke$arity$2 = date_field21291__2;
return date_field21291;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21291);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field21292 = (function() {
var datetime_field21292 = null;
var datetime_field21292__1 = (function (name__5127__auto__){return datetime_field21292.call(null,name__5127__auto__,null);
});
var datetime_field21292__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field21292 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field21292__1.call(this,name__5127__auto__);
case 2:
return datetime_field21292__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field21292.cljs$core$IFn$_invoke$arity$1 = datetime_field21292__1;
datetime_field21292.cljs$core$IFn$_invoke$arity$2 = datetime_field21292__2;
return datetime_field21292;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21292);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field21293 = (function() {
var datetime_local_field21293 = null;
var datetime_local_field21293__1 = (function (name__5127__auto__){return datetime_local_field21293.call(null,name__5127__auto__,null);
});
var datetime_local_field21293__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field21293 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field21293__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field21293__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field21293.cljs$core$IFn$_invoke$arity$1 = datetime_local_field21293__1;
datetime_local_field21293.cljs$core$IFn$_invoke$arity$2 = datetime_local_field21293__2;
return datetime_local_field21293;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21293);
/**
* Creates a email input field.
*/
sablono.core.email_field21294 = (function() {
var email_field21294 = null;
var email_field21294__1 = (function (name__5127__auto__){return email_field21294.call(null,name__5127__auto__,null);
});
var email_field21294__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field21294 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field21294__1.call(this,name__5127__auto__);
case 2:
return email_field21294__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field21294.cljs$core$IFn$_invoke$arity$1 = email_field21294__1;
email_field21294.cljs$core$IFn$_invoke$arity$2 = email_field21294__2;
return email_field21294;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21294);
/**
* Creates a file input field.
*/
sablono.core.file_field21295 = (function() {
var file_field21295 = null;
var file_field21295__1 = (function (name__5127__auto__){return file_field21295.call(null,name__5127__auto__,null);
});
var file_field21295__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field21295 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field21295__1.call(this,name__5127__auto__);
case 2:
return file_field21295__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field21295.cljs$core$IFn$_invoke$arity$1 = file_field21295__1;
file_field21295.cljs$core$IFn$_invoke$arity$2 = file_field21295__2;
return file_field21295;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21295);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field21296 = (function() {
var hidden_field21296 = null;
var hidden_field21296__1 = (function (name__5127__auto__){return hidden_field21296.call(null,name__5127__auto__,null);
});
var hidden_field21296__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field21296 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field21296__1.call(this,name__5127__auto__);
case 2:
return hidden_field21296__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field21296.cljs$core$IFn$_invoke$arity$1 = hidden_field21296__1;
hidden_field21296.cljs$core$IFn$_invoke$arity$2 = hidden_field21296__2;
return hidden_field21296;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21296);
/**
* Creates a month input field.
*/
sablono.core.month_field21297 = (function() {
var month_field21297 = null;
var month_field21297__1 = (function (name__5127__auto__){return month_field21297.call(null,name__5127__auto__,null);
});
var month_field21297__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field21297 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field21297__1.call(this,name__5127__auto__);
case 2:
return month_field21297__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field21297.cljs$core$IFn$_invoke$arity$1 = month_field21297__1;
month_field21297.cljs$core$IFn$_invoke$arity$2 = month_field21297__2;
return month_field21297;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21297);
/**
* Creates a number input field.
*/
sablono.core.number_field21298 = (function() {
var number_field21298 = null;
var number_field21298__1 = (function (name__5127__auto__){return number_field21298.call(null,name__5127__auto__,null);
});
var number_field21298__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field21298 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field21298__1.call(this,name__5127__auto__);
case 2:
return number_field21298__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field21298.cljs$core$IFn$_invoke$arity$1 = number_field21298__1;
number_field21298.cljs$core$IFn$_invoke$arity$2 = number_field21298__2;
return number_field21298;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21298);
/**
* Creates a password input field.
*/
sablono.core.password_field21299 = (function() {
var password_field21299 = null;
var password_field21299__1 = (function (name__5127__auto__){return password_field21299.call(null,name__5127__auto__,null);
});
var password_field21299__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field21299 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field21299__1.call(this,name__5127__auto__);
case 2:
return password_field21299__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field21299.cljs$core$IFn$_invoke$arity$1 = password_field21299__1;
password_field21299.cljs$core$IFn$_invoke$arity$2 = password_field21299__2;
return password_field21299;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21299);
/**
* Creates a range input field.
*/
sablono.core.range_field21300 = (function() {
var range_field21300 = null;
var range_field21300__1 = (function (name__5127__auto__){return range_field21300.call(null,name__5127__auto__,null);
});
var range_field21300__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field21300 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field21300__1.call(this,name__5127__auto__);
case 2:
return range_field21300__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field21300.cljs$core$IFn$_invoke$arity$1 = range_field21300__1;
range_field21300.cljs$core$IFn$_invoke$arity$2 = range_field21300__2;
return range_field21300;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21300);
/**
* Creates a search input field.
*/
sablono.core.search_field21301 = (function() {
var search_field21301 = null;
var search_field21301__1 = (function (name__5127__auto__){return search_field21301.call(null,name__5127__auto__,null);
});
var search_field21301__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field21301 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field21301__1.call(this,name__5127__auto__);
case 2:
return search_field21301__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field21301.cljs$core$IFn$_invoke$arity$1 = search_field21301__1;
search_field21301.cljs$core$IFn$_invoke$arity$2 = search_field21301__2;
return search_field21301;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21301);
/**
* Creates a tel input field.
*/
sablono.core.tel_field21302 = (function() {
var tel_field21302 = null;
var tel_field21302__1 = (function (name__5127__auto__){return tel_field21302.call(null,name__5127__auto__,null);
});
var tel_field21302__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field21302 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field21302__1.call(this,name__5127__auto__);
case 2:
return tel_field21302__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field21302.cljs$core$IFn$_invoke$arity$1 = tel_field21302__1;
tel_field21302.cljs$core$IFn$_invoke$arity$2 = tel_field21302__2;
return tel_field21302;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21302);
/**
* Creates a text input field.
*/
sablono.core.text_field21303 = (function() {
var text_field21303 = null;
var text_field21303__1 = (function (name__5127__auto__){return text_field21303.call(null,name__5127__auto__,null);
});
var text_field21303__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field21303 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field21303__1.call(this,name__5127__auto__);
case 2:
return text_field21303__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field21303.cljs$core$IFn$_invoke$arity$1 = text_field21303__1;
text_field21303.cljs$core$IFn$_invoke$arity$2 = text_field21303__2;
return text_field21303;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21303);
/**
* Creates a time input field.
*/
sablono.core.time_field21304 = (function() {
var time_field21304 = null;
var time_field21304__1 = (function (name__5127__auto__){return time_field21304.call(null,name__5127__auto__,null);
});
var time_field21304__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field21304 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field21304__1.call(this,name__5127__auto__);
case 2:
return time_field21304__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field21304.cljs$core$IFn$_invoke$arity$1 = time_field21304__1;
time_field21304.cljs$core$IFn$_invoke$arity$2 = time_field21304__2;
return time_field21304;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21304);
/**
* Creates a url input field.
*/
sablono.core.url_field21305 = (function() {
var url_field21305 = null;
var url_field21305__1 = (function (name__5127__auto__){return url_field21305.call(null,name__5127__auto__,null);
});
var url_field21305__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field21305 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field21305__1.call(this,name__5127__auto__);
case 2:
return url_field21305__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field21305.cljs$core$IFn$_invoke$arity$1 = url_field21305__1;
url_field21305.cljs$core$IFn$_invoke$arity$2 = url_field21305__2;
return url_field21305;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21305);
/**
* Creates a week input field.
*/
sablono.core.week_field21306 = (function() {
var week_field21306 = null;
var week_field21306__1 = (function (name__5127__auto__){return week_field21306.call(null,name__5127__auto__,null);
});
var week_field21306__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field21306 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field21306__1.call(this,name__5127__auto__);
case 2:
return week_field21306__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field21306.cljs$core$IFn$_invoke$arity$1 = week_field21306__1;
week_field21306.cljs$core$IFn$_invoke$arity$2 = week_field21306__2;
return week_field21306;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21306);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box21307 = (function() {
var check_box21307 = null;
var check_box21307__1 = (function (name){return check_box21307.call(null,name,null);
});
var check_box21307__2 = (function (name,checked_QMARK_){return check_box21307.call(null,name,checked_QMARK_,"true");
});
var check_box21307__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box21307 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box21307__1.call(this,name);
case 2:
return check_box21307__2.call(this,name,checked_QMARK_);
case 3:
return check_box21307__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box21307.cljs$core$IFn$_invoke$arity$1 = check_box21307__1;
check_box21307.cljs$core$IFn$_invoke$arity$2 = check_box21307__2;
check_box21307.cljs$core$IFn$_invoke$arity$3 = check_box21307__3;
return check_box21307;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21307);
/**
* Creates a radio button.
*/
sablono.core.radio_button21308 = (function() {
var radio_button21308 = null;
var radio_button21308__1 = (function (group){return radio_button21308.call(null,group,null);
});
var radio_button21308__2 = (function (group,checked_QMARK_){return radio_button21308.call(null,group,checked_QMARK_,"true");
});
var radio_button21308__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button21308 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button21308__1.call(this,group);
case 2:
return radio_button21308__2.call(this,group,checked_QMARK_);
case 3:
return radio_button21308__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button21308.cljs$core$IFn$_invoke$arity$1 = radio_button21308__1;
radio_button21308.cljs$core$IFn$_invoke$arity$2 = radio_button21308__2;
radio_button21308.cljs$core$IFn$_invoke$arity$3 = radio_button21308__3;
return radio_button21308;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21308);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options21309 = (function() {
var select_options21309 = null;
var select_options21309__1 = (function (coll){return select_options21309.call(null,coll,null);
});
var select_options21309__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__21318(s__21319){return (new cljs.core.LazySeq(null,(function (){var s__21319__$1 = s__21319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21319__$1);if(temp__4126__auto__)
{var s__21319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21319__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21319__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21321 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21320 = (0);while(true){
if((i__21320 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__21320);cljs.core.chunk_append.call(null,b__21321,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21324 = x;var text = cljs.core.nth.call(null,vec__21324,(0),null);var val = cljs.core.nth.call(null,vec__21324,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21324,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21309.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__21326 = (i__21320 + (1));
i__21320 = G__21326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21321),iter__21318.call(null,cljs.core.chunk_rest.call(null,s__21319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21321),null);
}
} else
{var x = cljs.core.first.call(null,s__21319__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21325 = x;var text = cljs.core.nth.call(null,vec__21325,(0),null);var val = cljs.core.nth.call(null,vec__21325,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21325,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21309.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__21318.call(null,cljs.core.rest.call(null,s__21319__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options21309 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options21309__1.call(this,coll);
case 2:
return select_options21309__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options21309.cljs$core$IFn$_invoke$arity$1 = select_options21309__1;
select_options21309.cljs$core$IFn$_invoke$arity$2 = select_options21309__2;
return select_options21309;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21309);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down21327 = (function() {
var drop_down21327 = null;
var drop_down21327__2 = (function (name,options){return drop_down21327.call(null,name,options,null);
});
var drop_down21327__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down21327 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down21327__2.call(this,name,options);
case 3:
return drop_down21327__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down21327.cljs$core$IFn$_invoke$arity$2 = drop_down21327__2;
drop_down21327.cljs$core$IFn$_invoke$arity$3 = drop_down21327__3;
return drop_down21327;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21327);
/**
* Creates a text area element.
*/
sablono.core.text_area21328 = (function() {
var text_area21328 = null;
var text_area21328__1 = (function (name){return text_area21328.call(null,name,null);
});
var text_area21328__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area21328 = function(name,value){
switch(arguments.length){
case 1:
return text_area21328__1.call(this,name);
case 2:
return text_area21328__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area21328.cljs$core$IFn$_invoke$arity$1 = text_area21328__1;
text_area21328.cljs$core$IFn$_invoke$arity$2 = text_area21328__2;
return text_area21328;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21328);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label21329 = (function label21329(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21329);
/**
* Creates a submit button.
*/
sablono.core.submit_button21330 = (function submit_button21330(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21330);
/**
* Creates a form reset button.
*/
sablono.core.reset_button21331 = (function reset_button21331(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21331);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to21332 = (function() { 
var form_to21332__delegate = function (p__21333,body){var vec__21335 = p__21333;var method = cljs.core.nth.call(null,vec__21335,(0),null);var action = cljs.core.nth.call(null,vec__21335,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to21332 = function (p__21333,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to21332__delegate.call(this,p__21333,body);};
form_to21332.cljs$lang$maxFixedArity = 1;
form_to21332.cljs$lang$applyTo = (function (arglist__21336){
var p__21333 = cljs.core.first(arglist__21336);
var body = cljs.core.rest(arglist__21336);
return form_to21332__delegate(p__21333,body);
});
form_to21332.cljs$core$IFn$_invoke$arity$variadic = form_to21332__delegate;
return form_to21332;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21332);
