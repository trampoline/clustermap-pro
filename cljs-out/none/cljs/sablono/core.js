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
var G__32977__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__32976 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__32976,(0),null);var body = cljs.core.nthnext.call(null,vec__32976,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__32977 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32977__delegate.call(this,args);};
G__32977.cljs$lang$maxFixedArity = 0;
G__32977.cljs$lang$applyTo = (function (arglist__32978){
var args = cljs.core.seq(arglist__32978);
return G__32977__delegate(args);
});
G__32977.cljs$core$IFn$_invoke$arity$variadic = G__32977__delegate;
return G__32977;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__12252__auto__ = (function iter__32983(s__32984){return (new cljs.core.LazySeq(null,(function (){var s__32984__$1 = s__32984;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32984__$1);if(temp__4126__auto__)
{var s__32984__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32984__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__32984__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__32986 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__32985 = (0);while(true){
if((i__32985 < size__12251__auto__))
{var args = cljs.core._nth.call(null,c__12250__auto__,i__32985);cljs.core.chunk_append.call(null,b__32986,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__32987 = (i__32985 + (1));
i__32985 = G__32987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32986),iter__32983.call(null,cljs.core.chunk_rest.call(null,s__32984__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32986),null);
}
} else
{var args = cljs.core.first.call(null,s__32984__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32983.call(null,cljs.core.rest.call(null,s__32984__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__12252__auto__ = (function iter__32992(s__32993){return (new cljs.core.LazySeq(null,(function (){var s__32993__$1 = s__32993;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32993__$1);if(temp__4126__auto__)
{var s__32993__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32993__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__32993__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__32995 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__32994 = (0);while(true){
if((i__32994 < size__12251__auto__))
{var style = cljs.core._nth.call(null,c__12250__auto__,i__32994);cljs.core.chunk_append.call(null,b__32995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__32996 = (i__32994 + (1));
i__32994 = G__32996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32995),iter__32992.call(null,cljs.core.chunk_rest.call(null,s__32993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32995),null);
}
} else
{var style = cljs.core.first.call(null,s__32993__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__32992.call(null,cljs.core.rest.call(null,s__32993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32997){
var styles = cljs.core.seq(arglist__32997);
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
sablono.core.link_to32998 = (function() { 
var link_to32998__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to32998 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to32998__delegate.call(this,url,content);};
link_to32998.cljs$lang$maxFixedArity = 1;
link_to32998.cljs$lang$applyTo = (function (arglist__32999){
var url = cljs.core.first(arglist__32999);
var content = cljs.core.rest(arglist__32999);
return link_to32998__delegate(url,content);
});
link_to32998.cljs$core$IFn$_invoke$arity$variadic = link_to32998__delegate;
return link_to32998;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32998);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33000 = (function() { 
var mail_to33000__delegate = function (e_mail,p__33001){var vec__33003 = p__33001;var content = cljs.core.nth.call(null,vec__33003,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__11514__auto__ = content;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to33000 = function (e_mail,var_args){
var p__33001 = null;if (arguments.length > 1) {
  p__33001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to33000__delegate.call(this,e_mail,p__33001);};
mail_to33000.cljs$lang$maxFixedArity = 1;
mail_to33000.cljs$lang$applyTo = (function (arglist__33004){
var e_mail = cljs.core.first(arglist__33004);
var p__33001 = cljs.core.rest(arglist__33004);
return mail_to33000__delegate(e_mail,p__33001);
});
mail_to33000.cljs$core$IFn$_invoke$arity$variadic = mail_to33000__delegate;
return mail_to33000;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33000);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33005 = (function unordered_list33005(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__12252__auto__ = (function iter__33010(s__33011){return (new cljs.core.LazySeq(null,(function (){var s__33011__$1 = s__33011;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33011__$1);if(temp__4126__auto__)
{var s__33011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33011__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__33011__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__33013 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__33012 = (0);while(true){
if((i__33012 < size__12251__auto__))
{var x = cljs.core._nth.call(null,c__12250__auto__,i__33012);cljs.core.chunk_append.call(null,b__33013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__33014 = (i__33012 + (1));
i__33012 = G__33014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33013),iter__33010.call(null,cljs.core.chunk_rest.call(null,s__33011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33013),null);
}
} else
{var x = cljs.core.first.call(null,s__33011__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__33010.call(null,cljs.core.rest.call(null,s__33011__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33005);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33015 = (function ordered_list33015(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__12252__auto__ = (function iter__33020(s__33021){return (new cljs.core.LazySeq(null,(function (){var s__33021__$1 = s__33021;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33021__$1);if(temp__4126__auto__)
{var s__33021__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33021__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__33021__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__33023 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__33022 = (0);while(true){
if((i__33022 < size__12251__auto__))
{var x = cljs.core._nth.call(null,c__12250__auto__,i__33022);cljs.core.chunk_append.call(null,b__33023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__33024 = (i__33022 + (1));
i__33022 = G__33024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33023),iter__33020.call(null,cljs.core.chunk_rest.call(null,s__33021__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33023),null);
}
} else
{var x = cljs.core.first.call(null,s__33021__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__33020.call(null,cljs.core.rest.call(null,s__33021__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33015);
/**
* Create an image element.
*/
sablono.core.image33025 = (function() {
var image33025 = null;
var image33025__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image33025__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image33025 = function(src,alt){
switch(arguments.length){
case 1:
return image33025__1.call(this,src);
case 2:
return image33025__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33025.cljs$core$IFn$_invoke$arity$1 = image33025__1;
image33025.cljs$core$IFn$_invoke$arity$2 = image33025__2;
return image33025;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33025);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__33026_SHARP_,p2__33027_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33026_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33027_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__33028_SHARP_,p2__33029_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33028_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33029_SHARP_));
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
sablono.core.color_field33030 = (function() {
var color_field33030 = null;
var color_field33030__1 = (function (name__13002__auto__){return color_field33030.call(null,name__13002__auto__,null);
});
var color_field33030__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13002__auto__,value__13003__auto__);
});
color_field33030 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return color_field33030__1.call(this,name__13002__auto__);
case 2:
return color_field33030__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field33030.cljs$core$IFn$_invoke$arity$1 = color_field33030__1;
color_field33030.cljs$core$IFn$_invoke$arity$2 = color_field33030__2;
return color_field33030;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33030);
/**
* Creates a date input field.
*/
sablono.core.date_field33031 = (function() {
var date_field33031 = null;
var date_field33031__1 = (function (name__13002__auto__){return date_field33031.call(null,name__13002__auto__,null);
});
var date_field33031__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13002__auto__,value__13003__auto__);
});
date_field33031 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return date_field33031__1.call(this,name__13002__auto__);
case 2:
return date_field33031__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field33031.cljs$core$IFn$_invoke$arity$1 = date_field33031__1;
date_field33031.cljs$core$IFn$_invoke$arity$2 = date_field33031__2;
return date_field33031;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33031);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field33032 = (function() {
var datetime_field33032 = null;
var datetime_field33032__1 = (function (name__13002__auto__){return datetime_field33032.call(null,name__13002__auto__,null);
});
var datetime_field33032__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13002__auto__,value__13003__auto__);
});
datetime_field33032 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return datetime_field33032__1.call(this,name__13002__auto__);
case 2:
return datetime_field33032__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field33032.cljs$core$IFn$_invoke$arity$1 = datetime_field33032__1;
datetime_field33032.cljs$core$IFn$_invoke$arity$2 = datetime_field33032__2;
return datetime_field33032;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33032);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field33033 = (function() {
var datetime_local_field33033 = null;
var datetime_local_field33033__1 = (function (name__13002__auto__){return datetime_local_field33033.call(null,name__13002__auto__,null);
});
var datetime_local_field33033__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13002__auto__,value__13003__auto__);
});
datetime_local_field33033 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return datetime_local_field33033__1.call(this,name__13002__auto__);
case 2:
return datetime_local_field33033__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field33033.cljs$core$IFn$_invoke$arity$1 = datetime_local_field33033__1;
datetime_local_field33033.cljs$core$IFn$_invoke$arity$2 = datetime_local_field33033__2;
return datetime_local_field33033;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33033);
/**
* Creates a email input field.
*/
sablono.core.email_field33034 = (function() {
var email_field33034 = null;
var email_field33034__1 = (function (name__13002__auto__){return email_field33034.call(null,name__13002__auto__,null);
});
var email_field33034__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13002__auto__,value__13003__auto__);
});
email_field33034 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return email_field33034__1.call(this,name__13002__auto__);
case 2:
return email_field33034__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33034.cljs$core$IFn$_invoke$arity$1 = email_field33034__1;
email_field33034.cljs$core$IFn$_invoke$arity$2 = email_field33034__2;
return email_field33034;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33034);
/**
* Creates a file input field.
*/
sablono.core.file_field33035 = (function() {
var file_field33035 = null;
var file_field33035__1 = (function (name__13002__auto__){return file_field33035.call(null,name__13002__auto__,null);
});
var file_field33035__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13002__auto__,value__13003__auto__);
});
file_field33035 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return file_field33035__1.call(this,name__13002__auto__);
case 2:
return file_field33035__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field33035.cljs$core$IFn$_invoke$arity$1 = file_field33035__1;
file_field33035.cljs$core$IFn$_invoke$arity$2 = file_field33035__2;
return file_field33035;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33035);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field33036 = (function() {
var hidden_field33036 = null;
var hidden_field33036__1 = (function (name__13002__auto__){return hidden_field33036.call(null,name__13002__auto__,null);
});
var hidden_field33036__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13002__auto__,value__13003__auto__);
});
hidden_field33036 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return hidden_field33036__1.call(this,name__13002__auto__);
case 2:
return hidden_field33036__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33036.cljs$core$IFn$_invoke$arity$1 = hidden_field33036__1;
hidden_field33036.cljs$core$IFn$_invoke$arity$2 = hidden_field33036__2;
return hidden_field33036;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33036);
/**
* Creates a month input field.
*/
sablono.core.month_field33037 = (function() {
var month_field33037 = null;
var month_field33037__1 = (function (name__13002__auto__){return month_field33037.call(null,name__13002__auto__,null);
});
var month_field33037__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13002__auto__,value__13003__auto__);
});
month_field33037 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return month_field33037__1.call(this,name__13002__auto__);
case 2:
return month_field33037__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field33037.cljs$core$IFn$_invoke$arity$1 = month_field33037__1;
month_field33037.cljs$core$IFn$_invoke$arity$2 = month_field33037__2;
return month_field33037;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33037);
/**
* Creates a number input field.
*/
sablono.core.number_field33038 = (function() {
var number_field33038 = null;
var number_field33038__1 = (function (name__13002__auto__){return number_field33038.call(null,name__13002__auto__,null);
});
var number_field33038__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13002__auto__,value__13003__auto__);
});
number_field33038 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return number_field33038__1.call(this,name__13002__auto__);
case 2:
return number_field33038__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field33038.cljs$core$IFn$_invoke$arity$1 = number_field33038__1;
number_field33038.cljs$core$IFn$_invoke$arity$2 = number_field33038__2;
return number_field33038;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33038);
/**
* Creates a password input field.
*/
sablono.core.password_field33039 = (function() {
var password_field33039 = null;
var password_field33039__1 = (function (name__13002__auto__){return password_field33039.call(null,name__13002__auto__,null);
});
var password_field33039__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13002__auto__,value__13003__auto__);
});
password_field33039 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return password_field33039__1.call(this,name__13002__auto__);
case 2:
return password_field33039__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33039.cljs$core$IFn$_invoke$arity$1 = password_field33039__1;
password_field33039.cljs$core$IFn$_invoke$arity$2 = password_field33039__2;
return password_field33039;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33039);
/**
* Creates a range input field.
*/
sablono.core.range_field33040 = (function() {
var range_field33040 = null;
var range_field33040__1 = (function (name__13002__auto__){return range_field33040.call(null,name__13002__auto__,null);
});
var range_field33040__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13002__auto__,value__13003__auto__);
});
range_field33040 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return range_field33040__1.call(this,name__13002__auto__);
case 2:
return range_field33040__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field33040.cljs$core$IFn$_invoke$arity$1 = range_field33040__1;
range_field33040.cljs$core$IFn$_invoke$arity$2 = range_field33040__2;
return range_field33040;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33040);
/**
* Creates a search input field.
*/
sablono.core.search_field33041 = (function() {
var search_field33041 = null;
var search_field33041__1 = (function (name__13002__auto__){return search_field33041.call(null,name__13002__auto__,null);
});
var search_field33041__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13002__auto__,value__13003__auto__);
});
search_field33041 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return search_field33041__1.call(this,name__13002__auto__);
case 2:
return search_field33041__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field33041.cljs$core$IFn$_invoke$arity$1 = search_field33041__1;
search_field33041.cljs$core$IFn$_invoke$arity$2 = search_field33041__2;
return search_field33041;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33041);
/**
* Creates a tel input field.
*/
sablono.core.tel_field33042 = (function() {
var tel_field33042 = null;
var tel_field33042__1 = (function (name__13002__auto__){return tel_field33042.call(null,name__13002__auto__,null);
});
var tel_field33042__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13002__auto__,value__13003__auto__);
});
tel_field33042 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return tel_field33042__1.call(this,name__13002__auto__);
case 2:
return tel_field33042__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field33042.cljs$core$IFn$_invoke$arity$1 = tel_field33042__1;
tel_field33042.cljs$core$IFn$_invoke$arity$2 = tel_field33042__2;
return tel_field33042;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33042);
/**
* Creates a text input field.
*/
sablono.core.text_field33043 = (function() {
var text_field33043 = null;
var text_field33043__1 = (function (name__13002__auto__){return text_field33043.call(null,name__13002__auto__,null);
});
var text_field33043__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13002__auto__,value__13003__auto__);
});
text_field33043 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return text_field33043__1.call(this,name__13002__auto__);
case 2:
return text_field33043__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33043.cljs$core$IFn$_invoke$arity$1 = text_field33043__1;
text_field33043.cljs$core$IFn$_invoke$arity$2 = text_field33043__2;
return text_field33043;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33043);
/**
* Creates a time input field.
*/
sablono.core.time_field33044 = (function() {
var time_field33044 = null;
var time_field33044__1 = (function (name__13002__auto__){return time_field33044.call(null,name__13002__auto__,null);
});
var time_field33044__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13002__auto__,value__13003__auto__);
});
time_field33044 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return time_field33044__1.call(this,name__13002__auto__);
case 2:
return time_field33044__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field33044.cljs$core$IFn$_invoke$arity$1 = time_field33044__1;
time_field33044.cljs$core$IFn$_invoke$arity$2 = time_field33044__2;
return time_field33044;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33044);
/**
* Creates a url input field.
*/
sablono.core.url_field33045 = (function() {
var url_field33045 = null;
var url_field33045__1 = (function (name__13002__auto__){return url_field33045.call(null,name__13002__auto__,null);
});
var url_field33045__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13002__auto__,value__13003__auto__);
});
url_field33045 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return url_field33045__1.call(this,name__13002__auto__);
case 2:
return url_field33045__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field33045.cljs$core$IFn$_invoke$arity$1 = url_field33045__1;
url_field33045.cljs$core$IFn$_invoke$arity$2 = url_field33045__2;
return url_field33045;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33045);
/**
* Creates a week input field.
*/
sablono.core.week_field33046 = (function() {
var week_field33046 = null;
var week_field33046__1 = (function (name__13002__auto__){return week_field33046.call(null,name__13002__auto__,null);
});
var week_field33046__2 = (function (name__13002__auto__,value__13003__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13002__auto__,value__13003__auto__);
});
week_field33046 = function(name__13002__auto__,value__13003__auto__){
switch(arguments.length){
case 1:
return week_field33046__1.call(this,name__13002__auto__);
case 2:
return week_field33046__2.call(this,name__13002__auto__,value__13003__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field33046.cljs$core$IFn$_invoke$arity$1 = week_field33046__1;
week_field33046.cljs$core$IFn$_invoke$arity$2 = week_field33046__2;
return week_field33046;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33046);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box33047 = (function() {
var check_box33047 = null;
var check_box33047__1 = (function (name){return check_box33047.call(null,name,null);
});
var check_box33047__2 = (function (name,checked_QMARK_){return check_box33047.call(null,name,checked_QMARK_,"true");
});
var check_box33047__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box33047 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33047__1.call(this,name);
case 2:
return check_box33047__2.call(this,name,checked_QMARK_);
case 3:
return check_box33047__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33047.cljs$core$IFn$_invoke$arity$1 = check_box33047__1;
check_box33047.cljs$core$IFn$_invoke$arity$2 = check_box33047__2;
check_box33047.cljs$core$IFn$_invoke$arity$3 = check_box33047__3;
return check_box33047;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33047);
/**
* Creates a radio button.
*/
sablono.core.radio_button33048 = (function() {
var radio_button33048 = null;
var radio_button33048__1 = (function (group){return radio_button33048.call(null,group,null);
});
var radio_button33048__2 = (function (group,checked_QMARK_){return radio_button33048.call(null,group,checked_QMARK_,"true");
});
var radio_button33048__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button33048 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33048__1.call(this,group);
case 2:
return radio_button33048__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33048__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33048.cljs$core$IFn$_invoke$arity$1 = radio_button33048__1;
radio_button33048.cljs$core$IFn$_invoke$arity$2 = radio_button33048__2;
radio_button33048.cljs$core$IFn$_invoke$arity$3 = radio_button33048__3;
return radio_button33048;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33048);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33049 = (function() {
var select_options33049 = null;
var select_options33049__1 = (function (coll){return select_options33049.call(null,coll,null);
});
var select_options33049__2 = (function (coll,selected){var iter__12252__auto__ = (function iter__33058(s__33059){return (new cljs.core.LazySeq(null,(function (){var s__33059__$1 = s__33059;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33059__$1);if(temp__4126__auto__)
{var s__33059__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33059__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__33059__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__33061 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__33060 = (0);while(true){
if((i__33060 < size__12251__auto__))
{var x = cljs.core._nth.call(null,c__12250__auto__,i__33060);cljs.core.chunk_append.call(null,b__33061,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33064 = x;var text = cljs.core.nth.call(null,vec__33064,(0),null);var val = cljs.core.nth.call(null,vec__33064,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__33064,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options33049.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__33066 = (i__33060 + (1));
i__33060 = G__33066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33061),iter__33058.call(null,cljs.core.chunk_rest.call(null,s__33059__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33061),null);
}
} else
{var x = cljs.core.first.call(null,s__33059__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33065 = x;var text = cljs.core.nth.call(null,vec__33065,(0),null);var val = cljs.core.nth.call(null,vec__33065,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__33065,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options33049.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33058.call(null,cljs.core.rest.call(null,s__33059__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,coll);
});
select_options33049 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33049__1.call(this,coll);
case 2:
return select_options33049__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33049.cljs$core$IFn$_invoke$arity$1 = select_options33049__1;
select_options33049.cljs$core$IFn$_invoke$arity$2 = select_options33049__2;
return select_options33049;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33049);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33067 = (function() {
var drop_down33067 = null;
var drop_down33067__2 = (function (name,options){return drop_down33067.call(null,name,options,null);
});
var drop_down33067__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33067 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33067__2.call(this,name,options);
case 3:
return drop_down33067__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33067.cljs$core$IFn$_invoke$arity$2 = drop_down33067__2;
drop_down33067.cljs$core$IFn$_invoke$arity$3 = drop_down33067__3;
return drop_down33067;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33067);
/**
* Creates a text area element.
*/
sablono.core.text_area33068 = (function() {
var text_area33068 = null;
var text_area33068__1 = (function (name){return text_area33068.call(null,name,null);
});
var text_area33068__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area33068 = function(name,value){
switch(arguments.length){
case 1:
return text_area33068__1.call(this,name);
case 2:
return text_area33068__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33068.cljs$core$IFn$_invoke$arity$1 = text_area33068__1;
text_area33068.cljs$core$IFn$_invoke$arity$2 = text_area33068__2;
return text_area33068;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33068);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33069 = (function label33069(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33069);
/**
* Creates a submit button.
*/
sablono.core.submit_button33070 = (function submit_button33070(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33070);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33071 = (function reset_button33071(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33071);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33072 = (function() { 
var form_to33072__delegate = function (p__33073,body){var vec__33075 = p__33073;var method = cljs.core.nth.call(null,vec__33075,(0),null);var action = cljs.core.nth.call(null,vec__33075,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33072 = function (p__33073,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to33072__delegate.call(this,p__33073,body);};
form_to33072.cljs$lang$maxFixedArity = 1;
form_to33072.cljs$lang$applyTo = (function (arglist__33076){
var p__33073 = cljs.core.first(arglist__33076);
var body = cljs.core.rest(arglist__33076);
return form_to33072__delegate(p__33073,body);
});
form_to33072.cljs$core$IFn$_invoke$arity$variadic = form_to33072__delegate;
return form_to33072;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33072);

//# sourceMappingURL=core.js.map