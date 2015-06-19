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
var G__38503__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__38502 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__38502,(0),null);var body = cljs.core.nthnext.call(null,vec__38502,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__38503 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38503__delegate.call(this,args);};
G__38503.cljs$lang$maxFixedArity = 0;
G__38503.cljs$lang$applyTo = (function (arglist__38504){
var args = cljs.core.seq(arglist__38504);
return G__38503__delegate(args);
});
G__38503.cljs$core$IFn$_invoke$arity$variadic = G__38503__delegate;
return G__38503;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__12290__auto__ = (function iter__38509(s__38510){return (new cljs.core.LazySeq(null,(function (){var s__38510__$1 = s__38510;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38510__$1);if(temp__4126__auto__)
{var s__38510__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38510__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__38510__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__38512 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__38511 = (0);while(true){
if((i__38511 < size__12289__auto__))
{var args = cljs.core._nth.call(null,c__12288__auto__,i__38511);cljs.core.chunk_append.call(null,b__38512,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__38513 = (i__38511 + (1));
i__38511 = G__38513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38512),iter__38509.call(null,cljs.core.chunk_rest.call(null,s__38510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38512),null);
}
} else
{var args = cljs.core.first.call(null,s__38510__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__38509.call(null,cljs.core.rest.call(null,s__38510__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__12290__auto__ = (function iter__38518(s__38519){return (new cljs.core.LazySeq(null,(function (){var s__38519__$1 = s__38519;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38519__$1);if(temp__4126__auto__)
{var s__38519__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38519__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__38519__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__38521 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__38520 = (0);while(true){
if((i__38520 < size__12289__auto__))
{var style = cljs.core._nth.call(null,c__12288__auto__,i__38520);cljs.core.chunk_append.call(null,b__38521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__38522 = (i__38520 + (1));
i__38520 = G__38522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38521),iter__38518.call(null,cljs.core.chunk_rest.call(null,s__38519__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38521),null);
}
} else
{var style = cljs.core.first.call(null,s__38519__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__38518.call(null,cljs.core.rest.call(null,s__38519__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__38523){
var styles = cljs.core.seq(arglist__38523);
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
sablono.core.link_to38524 = (function() { 
var link_to38524__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to38524 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38524__delegate.call(this,url,content);};
link_to38524.cljs$lang$maxFixedArity = 1;
link_to38524.cljs$lang$applyTo = (function (arglist__38525){
var url = cljs.core.first(arglist__38525);
var content = cljs.core.rest(arglist__38525);
return link_to38524__delegate(url,content);
});
link_to38524.cljs$core$IFn$_invoke$arity$variadic = link_to38524__delegate;
return link_to38524;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38524);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38526 = (function() { 
var mail_to38526__delegate = function (e_mail,p__38527){var vec__38529 = p__38527;var content = cljs.core.nth.call(null,vec__38529,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__11552__auto__ = content;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38526 = function (e_mail,var_args){
var p__38527 = null;if (arguments.length > 1) {
  p__38527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38526__delegate.call(this,e_mail,p__38527);};
mail_to38526.cljs$lang$maxFixedArity = 1;
mail_to38526.cljs$lang$applyTo = (function (arglist__38530){
var e_mail = cljs.core.first(arglist__38530);
var p__38527 = cljs.core.rest(arglist__38530);
return mail_to38526__delegate(e_mail,p__38527);
});
mail_to38526.cljs$core$IFn$_invoke$arity$variadic = mail_to38526__delegate;
return mail_to38526;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38526);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38531 = (function unordered_list38531(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__12290__auto__ = (function iter__38536(s__38537){return (new cljs.core.LazySeq(null,(function (){var s__38537__$1 = s__38537;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38537__$1);if(temp__4126__auto__)
{var s__38537__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38537__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__38537__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__38539 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__38538 = (0);while(true){
if((i__38538 < size__12289__auto__))
{var x = cljs.core._nth.call(null,c__12288__auto__,i__38538);cljs.core.chunk_append.call(null,b__38539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__38540 = (i__38538 + (1));
i__38538 = G__38540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38539),iter__38536.call(null,cljs.core.chunk_rest.call(null,s__38537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38539),null);
}
} else
{var x = cljs.core.first.call(null,s__38537__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__38536.call(null,cljs.core.rest.call(null,s__38537__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38531);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38541 = (function ordered_list38541(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__12290__auto__ = (function iter__38546(s__38547){return (new cljs.core.LazySeq(null,(function (){var s__38547__$1 = s__38547;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38547__$1);if(temp__4126__auto__)
{var s__38547__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38547__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__38547__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__38549 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__38548 = (0);while(true){
if((i__38548 < size__12289__auto__))
{var x = cljs.core._nth.call(null,c__12288__auto__,i__38548);cljs.core.chunk_append.call(null,b__38549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__38550 = (i__38548 + (1));
i__38548 = G__38550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38549),iter__38546.call(null,cljs.core.chunk_rest.call(null,s__38547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38549),null);
}
} else
{var x = cljs.core.first.call(null,s__38547__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__38546.call(null,cljs.core.rest.call(null,s__38547__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38541);
/**
* Create an image element.
*/
sablono.core.image38551 = (function() {
var image38551 = null;
var image38551__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image38551__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image38551 = function(src,alt){
switch(arguments.length){
case 1:
return image38551__1.call(this,src);
case 2:
return image38551__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38551.cljs$core$IFn$_invoke$arity$1 = image38551__1;
image38551.cljs$core$IFn$_invoke$arity$2 = image38551__2;
return image38551;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38551);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__38552_SHARP_,p2__38553_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38552_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38553_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__38554_SHARP_,p2__38555_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38554_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38555_SHARP_));
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
sablono.core.color_field38556 = (function() {
var color_field38556 = null;
var color_field38556__1 = (function (name__13040__auto__){return color_field38556.call(null,name__13040__auto__,null);
});
var color_field38556__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13040__auto__,value__13041__auto__);
});
color_field38556 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return color_field38556__1.call(this,name__13040__auto__);
case 2:
return color_field38556__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field38556.cljs$core$IFn$_invoke$arity$1 = color_field38556__1;
color_field38556.cljs$core$IFn$_invoke$arity$2 = color_field38556__2;
return color_field38556;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38556);
/**
* Creates a date input field.
*/
sablono.core.date_field38557 = (function() {
var date_field38557 = null;
var date_field38557__1 = (function (name__13040__auto__){return date_field38557.call(null,name__13040__auto__,null);
});
var date_field38557__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13040__auto__,value__13041__auto__);
});
date_field38557 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return date_field38557__1.call(this,name__13040__auto__);
case 2:
return date_field38557__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field38557.cljs$core$IFn$_invoke$arity$1 = date_field38557__1;
date_field38557.cljs$core$IFn$_invoke$arity$2 = date_field38557__2;
return date_field38557;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38557);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field38558 = (function() {
var datetime_field38558 = null;
var datetime_field38558__1 = (function (name__13040__auto__){return datetime_field38558.call(null,name__13040__auto__,null);
});
var datetime_field38558__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13040__auto__,value__13041__auto__);
});
datetime_field38558 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return datetime_field38558__1.call(this,name__13040__auto__);
case 2:
return datetime_field38558__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field38558.cljs$core$IFn$_invoke$arity$1 = datetime_field38558__1;
datetime_field38558.cljs$core$IFn$_invoke$arity$2 = datetime_field38558__2;
return datetime_field38558;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38558);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field38559 = (function() {
var datetime_local_field38559 = null;
var datetime_local_field38559__1 = (function (name__13040__auto__){return datetime_local_field38559.call(null,name__13040__auto__,null);
});
var datetime_local_field38559__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13040__auto__,value__13041__auto__);
});
datetime_local_field38559 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return datetime_local_field38559__1.call(this,name__13040__auto__);
case 2:
return datetime_local_field38559__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field38559.cljs$core$IFn$_invoke$arity$1 = datetime_local_field38559__1;
datetime_local_field38559.cljs$core$IFn$_invoke$arity$2 = datetime_local_field38559__2;
return datetime_local_field38559;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38559);
/**
* Creates a email input field.
*/
sablono.core.email_field38560 = (function() {
var email_field38560 = null;
var email_field38560__1 = (function (name__13040__auto__){return email_field38560.call(null,name__13040__auto__,null);
});
var email_field38560__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13040__auto__,value__13041__auto__);
});
email_field38560 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return email_field38560__1.call(this,name__13040__auto__);
case 2:
return email_field38560__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field38560.cljs$core$IFn$_invoke$arity$1 = email_field38560__1;
email_field38560.cljs$core$IFn$_invoke$arity$2 = email_field38560__2;
return email_field38560;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38560);
/**
* Creates a file input field.
*/
sablono.core.file_field38561 = (function() {
var file_field38561 = null;
var file_field38561__1 = (function (name__13040__auto__){return file_field38561.call(null,name__13040__auto__,null);
});
var file_field38561__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13040__auto__,value__13041__auto__);
});
file_field38561 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return file_field38561__1.call(this,name__13040__auto__);
case 2:
return file_field38561__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field38561.cljs$core$IFn$_invoke$arity$1 = file_field38561__1;
file_field38561.cljs$core$IFn$_invoke$arity$2 = file_field38561__2;
return file_field38561;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38561);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field38562 = (function() {
var hidden_field38562 = null;
var hidden_field38562__1 = (function (name__13040__auto__){return hidden_field38562.call(null,name__13040__auto__,null);
});
var hidden_field38562__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13040__auto__,value__13041__auto__);
});
hidden_field38562 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return hidden_field38562__1.call(this,name__13040__auto__);
case 2:
return hidden_field38562__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38562.cljs$core$IFn$_invoke$arity$1 = hidden_field38562__1;
hidden_field38562.cljs$core$IFn$_invoke$arity$2 = hidden_field38562__2;
return hidden_field38562;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38562);
/**
* Creates a month input field.
*/
sablono.core.month_field38563 = (function() {
var month_field38563 = null;
var month_field38563__1 = (function (name__13040__auto__){return month_field38563.call(null,name__13040__auto__,null);
});
var month_field38563__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13040__auto__,value__13041__auto__);
});
month_field38563 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return month_field38563__1.call(this,name__13040__auto__);
case 2:
return month_field38563__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field38563.cljs$core$IFn$_invoke$arity$1 = month_field38563__1;
month_field38563.cljs$core$IFn$_invoke$arity$2 = month_field38563__2;
return month_field38563;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38563);
/**
* Creates a number input field.
*/
sablono.core.number_field38564 = (function() {
var number_field38564 = null;
var number_field38564__1 = (function (name__13040__auto__){return number_field38564.call(null,name__13040__auto__,null);
});
var number_field38564__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13040__auto__,value__13041__auto__);
});
number_field38564 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return number_field38564__1.call(this,name__13040__auto__);
case 2:
return number_field38564__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field38564.cljs$core$IFn$_invoke$arity$1 = number_field38564__1;
number_field38564.cljs$core$IFn$_invoke$arity$2 = number_field38564__2;
return number_field38564;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38564);
/**
* Creates a password input field.
*/
sablono.core.password_field38565 = (function() {
var password_field38565 = null;
var password_field38565__1 = (function (name__13040__auto__){return password_field38565.call(null,name__13040__auto__,null);
});
var password_field38565__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13040__auto__,value__13041__auto__);
});
password_field38565 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return password_field38565__1.call(this,name__13040__auto__);
case 2:
return password_field38565__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38565.cljs$core$IFn$_invoke$arity$1 = password_field38565__1;
password_field38565.cljs$core$IFn$_invoke$arity$2 = password_field38565__2;
return password_field38565;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38565);
/**
* Creates a range input field.
*/
sablono.core.range_field38566 = (function() {
var range_field38566 = null;
var range_field38566__1 = (function (name__13040__auto__){return range_field38566.call(null,name__13040__auto__,null);
});
var range_field38566__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13040__auto__,value__13041__auto__);
});
range_field38566 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return range_field38566__1.call(this,name__13040__auto__);
case 2:
return range_field38566__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field38566.cljs$core$IFn$_invoke$arity$1 = range_field38566__1;
range_field38566.cljs$core$IFn$_invoke$arity$2 = range_field38566__2;
return range_field38566;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38566);
/**
* Creates a search input field.
*/
sablono.core.search_field38567 = (function() {
var search_field38567 = null;
var search_field38567__1 = (function (name__13040__auto__){return search_field38567.call(null,name__13040__auto__,null);
});
var search_field38567__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13040__auto__,value__13041__auto__);
});
search_field38567 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return search_field38567__1.call(this,name__13040__auto__);
case 2:
return search_field38567__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field38567.cljs$core$IFn$_invoke$arity$1 = search_field38567__1;
search_field38567.cljs$core$IFn$_invoke$arity$2 = search_field38567__2;
return search_field38567;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38567);
/**
* Creates a tel input field.
*/
sablono.core.tel_field38568 = (function() {
var tel_field38568 = null;
var tel_field38568__1 = (function (name__13040__auto__){return tel_field38568.call(null,name__13040__auto__,null);
});
var tel_field38568__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13040__auto__,value__13041__auto__);
});
tel_field38568 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return tel_field38568__1.call(this,name__13040__auto__);
case 2:
return tel_field38568__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field38568.cljs$core$IFn$_invoke$arity$1 = tel_field38568__1;
tel_field38568.cljs$core$IFn$_invoke$arity$2 = tel_field38568__2;
return tel_field38568;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38568);
/**
* Creates a text input field.
*/
sablono.core.text_field38569 = (function() {
var text_field38569 = null;
var text_field38569__1 = (function (name__13040__auto__){return text_field38569.call(null,name__13040__auto__,null);
});
var text_field38569__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13040__auto__,value__13041__auto__);
});
text_field38569 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return text_field38569__1.call(this,name__13040__auto__);
case 2:
return text_field38569__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38569.cljs$core$IFn$_invoke$arity$1 = text_field38569__1;
text_field38569.cljs$core$IFn$_invoke$arity$2 = text_field38569__2;
return text_field38569;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38569);
/**
* Creates a time input field.
*/
sablono.core.time_field38570 = (function() {
var time_field38570 = null;
var time_field38570__1 = (function (name__13040__auto__){return time_field38570.call(null,name__13040__auto__,null);
});
var time_field38570__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13040__auto__,value__13041__auto__);
});
time_field38570 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return time_field38570__1.call(this,name__13040__auto__);
case 2:
return time_field38570__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field38570.cljs$core$IFn$_invoke$arity$1 = time_field38570__1;
time_field38570.cljs$core$IFn$_invoke$arity$2 = time_field38570__2;
return time_field38570;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38570);
/**
* Creates a url input field.
*/
sablono.core.url_field38571 = (function() {
var url_field38571 = null;
var url_field38571__1 = (function (name__13040__auto__){return url_field38571.call(null,name__13040__auto__,null);
});
var url_field38571__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13040__auto__,value__13041__auto__);
});
url_field38571 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return url_field38571__1.call(this,name__13040__auto__);
case 2:
return url_field38571__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field38571.cljs$core$IFn$_invoke$arity$1 = url_field38571__1;
url_field38571.cljs$core$IFn$_invoke$arity$2 = url_field38571__2;
return url_field38571;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38571);
/**
* Creates a week input field.
*/
sablono.core.week_field38572 = (function() {
var week_field38572 = null;
var week_field38572__1 = (function (name__13040__auto__){return week_field38572.call(null,name__13040__auto__,null);
});
var week_field38572__2 = (function (name__13040__auto__,value__13041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13040__auto__,value__13041__auto__);
});
week_field38572 = function(name__13040__auto__,value__13041__auto__){
switch(arguments.length){
case 1:
return week_field38572__1.call(this,name__13040__auto__);
case 2:
return week_field38572__2.call(this,name__13040__auto__,value__13041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field38572.cljs$core$IFn$_invoke$arity$1 = week_field38572__1;
week_field38572.cljs$core$IFn$_invoke$arity$2 = week_field38572__2;
return week_field38572;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38572);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box38573 = (function() {
var check_box38573 = null;
var check_box38573__1 = (function (name){return check_box38573.call(null,name,null);
});
var check_box38573__2 = (function (name,checked_QMARK_){return check_box38573.call(null,name,checked_QMARK_,"true");
});
var check_box38573__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box38573 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box38573__1.call(this,name);
case 2:
return check_box38573__2.call(this,name,checked_QMARK_);
case 3:
return check_box38573__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box38573.cljs$core$IFn$_invoke$arity$1 = check_box38573__1;
check_box38573.cljs$core$IFn$_invoke$arity$2 = check_box38573__2;
check_box38573.cljs$core$IFn$_invoke$arity$3 = check_box38573__3;
return check_box38573;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38573);
/**
* Creates a radio button.
*/
sablono.core.radio_button38574 = (function() {
var radio_button38574 = null;
var radio_button38574__1 = (function (group){return radio_button38574.call(null,group,null);
});
var radio_button38574__2 = (function (group,checked_QMARK_){return radio_button38574.call(null,group,checked_QMARK_,"true");
});
var radio_button38574__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button38574 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button38574__1.call(this,group);
case 2:
return radio_button38574__2.call(this,group,checked_QMARK_);
case 3:
return radio_button38574__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button38574.cljs$core$IFn$_invoke$arity$1 = radio_button38574__1;
radio_button38574.cljs$core$IFn$_invoke$arity$2 = radio_button38574__2;
radio_button38574.cljs$core$IFn$_invoke$arity$3 = radio_button38574__3;
return radio_button38574;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38574);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options38575 = (function() {
var select_options38575 = null;
var select_options38575__1 = (function (coll){return select_options38575.call(null,coll,null);
});
var select_options38575__2 = (function (coll,selected){var iter__12290__auto__ = (function iter__38584(s__38585){return (new cljs.core.LazySeq(null,(function (){var s__38585__$1 = s__38585;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38585__$1);if(temp__4126__auto__)
{var s__38585__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38585__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__38585__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__38587 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__38586 = (0);while(true){
if((i__38586 < size__12289__auto__))
{var x = cljs.core._nth.call(null,c__12288__auto__,i__38586);cljs.core.chunk_append.call(null,b__38587,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38590 = x;var text = cljs.core.nth.call(null,vec__38590,(0),null);var val = cljs.core.nth.call(null,vec__38590,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__38590,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options38575.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__38592 = (i__38586 + (1));
i__38586 = G__38592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38587),iter__38584.call(null,cljs.core.chunk_rest.call(null,s__38585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38587),null);
}
} else
{var x = cljs.core.first.call(null,s__38585__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38591 = x;var text = cljs.core.nth.call(null,vec__38591,(0),null);var val = cljs.core.nth.call(null,vec__38591,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__38591,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options38575.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__38584.call(null,cljs.core.rest.call(null,s__38585__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,coll);
});
select_options38575 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options38575__1.call(this,coll);
case 2:
return select_options38575__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options38575.cljs$core$IFn$_invoke$arity$1 = select_options38575__1;
select_options38575.cljs$core$IFn$_invoke$arity$2 = select_options38575__2;
return select_options38575;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38575);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down38593 = (function() {
var drop_down38593 = null;
var drop_down38593__2 = (function (name,options){return drop_down38593.call(null,name,options,null);
});
var drop_down38593__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down38593 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down38593__2.call(this,name,options);
case 3:
return drop_down38593__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down38593.cljs$core$IFn$_invoke$arity$2 = drop_down38593__2;
drop_down38593.cljs$core$IFn$_invoke$arity$3 = drop_down38593__3;
return drop_down38593;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38593);
/**
* Creates a text area element.
*/
sablono.core.text_area38594 = (function() {
var text_area38594 = null;
var text_area38594__1 = (function (name){return text_area38594.call(null,name,null);
});
var text_area38594__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area38594 = function(name,value){
switch(arguments.length){
case 1:
return text_area38594__1.call(this,name);
case 2:
return text_area38594__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area38594.cljs$core$IFn$_invoke$arity$1 = text_area38594__1;
text_area38594.cljs$core$IFn$_invoke$arity$2 = text_area38594__2;
return text_area38594;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38594);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label38595 = (function label38595(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38595);
/**
* Creates a submit button.
*/
sablono.core.submit_button38596 = (function submit_button38596(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38596);
/**
* Creates a form reset button.
*/
sablono.core.reset_button38597 = (function reset_button38597(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38597);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to38598 = (function() { 
var form_to38598__delegate = function (p__38599,body){var vec__38601 = p__38599;var method = cljs.core.nth.call(null,vec__38601,(0),null);var action = cljs.core.nth.call(null,vec__38601,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to38598 = function (p__38599,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to38598__delegate.call(this,p__38599,body);};
form_to38598.cljs$lang$maxFixedArity = 1;
form_to38598.cljs$lang$applyTo = (function (arglist__38602){
var p__38599 = cljs.core.first(arglist__38602);
var body = cljs.core.rest(arglist__38602);
return form_to38598__delegate(p__38599,body);
});
form_to38598.cljs$core$IFn$_invoke$arity$variadic = form_to38598__delegate;
return form_to38598;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38598);

//# sourceMappingURL=core.js.map