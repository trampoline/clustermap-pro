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
var G__22736__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22735 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22735,(0),null);var body = cljs.core.nthnext.call(null,vec__22735,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22736 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22736__delegate.call(this,args);};
G__22736.cljs$lang$maxFixedArity = 0;
G__22736.cljs$lang$applyTo = (function (arglist__22737){
var args = cljs.core.seq(arglist__22737);
return G__22736__delegate(args);
});
G__22736.cljs$core$IFn$_invoke$arity$variadic = G__22736__delegate;
return G__22736;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__22742(s__22743){return (new cljs.core.LazySeq(null,(function (){var s__22743__$1 = s__22743;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22743__$1);if(temp__4126__auto__)
{var s__22743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22743__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22743__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22745 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22744 = (0);while(true){
if((i__22744 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__22744);cljs.core.chunk_append.call(null,b__22745,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22746 = (i__22744 + (1));
i__22744 = G__22746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22745),iter__22742.call(null,cljs.core.chunk_rest.call(null,s__22743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22745),null);
}
} else
{var args = cljs.core.first.call(null,s__22743__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22742.call(null,cljs.core.rest.call(null,s__22743__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__22751(s__22752){return (new cljs.core.LazySeq(null,(function (){var s__22752__$1 = s__22752;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22752__$1);if(temp__4126__auto__)
{var s__22752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22752__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22752__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22754 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22753 = (0);while(true){
if((i__22753 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__22753);cljs.core.chunk_append.call(null,b__22754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22755 = (i__22753 + (1));
i__22753 = G__22755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22754),iter__22751.call(null,cljs.core.chunk_rest.call(null,s__22752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22754),null);
}
} else
{var style = cljs.core.first.call(null,s__22752__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22751.call(null,cljs.core.rest.call(null,s__22752__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__22756){
var styles = cljs.core.seq(arglist__22756);
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
sablono.core.link_to22757 = (function() { 
var link_to22757__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22757 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22757__delegate.call(this,url,content);};
link_to22757.cljs$lang$maxFixedArity = 1;
link_to22757.cljs$lang$applyTo = (function (arglist__22758){
var url = cljs.core.first(arglist__22758);
var content = cljs.core.rest(arglist__22758);
return link_to22757__delegate(url,content);
});
link_to22757.cljs$core$IFn$_invoke$arity$variadic = link_to22757__delegate;
return link_to22757;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22757);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22759 = (function() { 
var mail_to22759__delegate = function (e_mail,p__22760){var vec__22762 = p__22760;var content = cljs.core.nth.call(null,vec__22762,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22759 = function (e_mail,var_args){
var p__22760 = null;if (arguments.length > 1) {
  p__22760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22759__delegate.call(this,e_mail,p__22760);};
mail_to22759.cljs$lang$maxFixedArity = 1;
mail_to22759.cljs$lang$applyTo = (function (arglist__22763){
var e_mail = cljs.core.first(arglist__22763);
var p__22760 = cljs.core.rest(arglist__22763);
return mail_to22759__delegate(e_mail,p__22760);
});
mail_to22759.cljs$core$IFn$_invoke$arity$variadic = mail_to22759__delegate;
return mail_to22759;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22759);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22764 = (function unordered_list22764(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__22769(s__22770){return (new cljs.core.LazySeq(null,(function (){var s__22770__$1 = s__22770;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22770__$1);if(temp__4126__auto__)
{var s__22770__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22770__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22770__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22772 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22771 = (0);while(true){
if((i__22771 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22771);cljs.core.chunk_append.call(null,b__22772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22773 = (i__22771 + (1));
i__22771 = G__22773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22772),iter__22769.call(null,cljs.core.chunk_rest.call(null,s__22770__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22772),null);
}
} else
{var x = cljs.core.first.call(null,s__22770__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22769.call(null,cljs.core.rest.call(null,s__22770__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22764);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22774 = (function ordered_list22774(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__22779(s__22780){return (new cljs.core.LazySeq(null,(function (){var s__22780__$1 = s__22780;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22780__$1);if(temp__4126__auto__)
{var s__22780__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22780__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22780__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22782 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22781 = (0);while(true){
if((i__22781 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22781);cljs.core.chunk_append.call(null,b__22782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22783 = (i__22781 + (1));
i__22781 = G__22783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),iter__22779.call(null,cljs.core.chunk_rest.call(null,s__22780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),null);
}
} else
{var x = cljs.core.first.call(null,s__22780__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22779.call(null,cljs.core.rest.call(null,s__22780__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22774);
/**
* Create an image element.
*/
sablono.core.image22784 = (function() {
var image22784 = null;
var image22784__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22784__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22784 = function(src,alt){
switch(arguments.length){
case 1:
return image22784__1.call(this,src);
case 2:
return image22784__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22784.cljs$core$IFn$_invoke$arity$1 = image22784__1;
image22784.cljs$core$IFn$_invoke$arity$2 = image22784__2;
return image22784;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22784);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22785_SHARP_,p2__22786_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22785_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22786_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22787_SHARP_,p2__22788_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22787_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22788_SHARP_));
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
sablono.core.color_field22789 = (function() {
var color_field22789 = null;
var color_field22789__1 = (function (name__5127__auto__){return color_field22789.call(null,name__5127__auto__,null);
});
var color_field22789__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field22789 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field22789__1.call(this,name__5127__auto__);
case 2:
return color_field22789__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22789.cljs$core$IFn$_invoke$arity$1 = color_field22789__1;
color_field22789.cljs$core$IFn$_invoke$arity$2 = color_field22789__2;
return color_field22789;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22789);
/**
* Creates a date input field.
*/
sablono.core.date_field22790 = (function() {
var date_field22790 = null;
var date_field22790__1 = (function (name__5127__auto__){return date_field22790.call(null,name__5127__auto__,null);
});
var date_field22790__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field22790 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field22790__1.call(this,name__5127__auto__);
case 2:
return date_field22790__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22790.cljs$core$IFn$_invoke$arity$1 = date_field22790__1;
date_field22790.cljs$core$IFn$_invoke$arity$2 = date_field22790__2;
return date_field22790;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22790);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22791 = (function() {
var datetime_field22791 = null;
var datetime_field22791__1 = (function (name__5127__auto__){return datetime_field22791.call(null,name__5127__auto__,null);
});
var datetime_field22791__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field22791 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field22791__1.call(this,name__5127__auto__);
case 2:
return datetime_field22791__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22791.cljs$core$IFn$_invoke$arity$1 = datetime_field22791__1;
datetime_field22791.cljs$core$IFn$_invoke$arity$2 = datetime_field22791__2;
return datetime_field22791;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22791);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22792 = (function() {
var datetime_local_field22792 = null;
var datetime_local_field22792__1 = (function (name__5127__auto__){return datetime_local_field22792.call(null,name__5127__auto__,null);
});
var datetime_local_field22792__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field22792 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22792__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field22792__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22792.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22792__1;
datetime_local_field22792.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22792__2;
return datetime_local_field22792;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22792);
/**
* Creates a email input field.
*/
sablono.core.email_field22793 = (function() {
var email_field22793 = null;
var email_field22793__1 = (function (name__5127__auto__){return email_field22793.call(null,name__5127__auto__,null);
});
var email_field22793__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field22793 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field22793__1.call(this,name__5127__auto__);
case 2:
return email_field22793__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22793.cljs$core$IFn$_invoke$arity$1 = email_field22793__1;
email_field22793.cljs$core$IFn$_invoke$arity$2 = email_field22793__2;
return email_field22793;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22793);
/**
* Creates a file input field.
*/
sablono.core.file_field22794 = (function() {
var file_field22794 = null;
var file_field22794__1 = (function (name__5127__auto__){return file_field22794.call(null,name__5127__auto__,null);
});
var file_field22794__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field22794 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field22794__1.call(this,name__5127__auto__);
case 2:
return file_field22794__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22794.cljs$core$IFn$_invoke$arity$1 = file_field22794__1;
file_field22794.cljs$core$IFn$_invoke$arity$2 = file_field22794__2;
return file_field22794;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22794);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22795 = (function() {
var hidden_field22795 = null;
var hidden_field22795__1 = (function (name__5127__auto__){return hidden_field22795.call(null,name__5127__auto__,null);
});
var hidden_field22795__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field22795 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field22795__1.call(this,name__5127__auto__);
case 2:
return hidden_field22795__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22795.cljs$core$IFn$_invoke$arity$1 = hidden_field22795__1;
hidden_field22795.cljs$core$IFn$_invoke$arity$2 = hidden_field22795__2;
return hidden_field22795;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22795);
/**
* Creates a month input field.
*/
sablono.core.month_field22796 = (function() {
var month_field22796 = null;
var month_field22796__1 = (function (name__5127__auto__){return month_field22796.call(null,name__5127__auto__,null);
});
var month_field22796__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field22796 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field22796__1.call(this,name__5127__auto__);
case 2:
return month_field22796__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22796.cljs$core$IFn$_invoke$arity$1 = month_field22796__1;
month_field22796.cljs$core$IFn$_invoke$arity$2 = month_field22796__2;
return month_field22796;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22796);
/**
* Creates a number input field.
*/
sablono.core.number_field22797 = (function() {
var number_field22797 = null;
var number_field22797__1 = (function (name__5127__auto__){return number_field22797.call(null,name__5127__auto__,null);
});
var number_field22797__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field22797 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field22797__1.call(this,name__5127__auto__);
case 2:
return number_field22797__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22797.cljs$core$IFn$_invoke$arity$1 = number_field22797__1;
number_field22797.cljs$core$IFn$_invoke$arity$2 = number_field22797__2;
return number_field22797;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22797);
/**
* Creates a password input field.
*/
sablono.core.password_field22798 = (function() {
var password_field22798 = null;
var password_field22798__1 = (function (name__5127__auto__){return password_field22798.call(null,name__5127__auto__,null);
});
var password_field22798__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field22798 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field22798__1.call(this,name__5127__auto__);
case 2:
return password_field22798__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22798.cljs$core$IFn$_invoke$arity$1 = password_field22798__1;
password_field22798.cljs$core$IFn$_invoke$arity$2 = password_field22798__2;
return password_field22798;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22798);
/**
* Creates a range input field.
*/
sablono.core.range_field22799 = (function() {
var range_field22799 = null;
var range_field22799__1 = (function (name__5127__auto__){return range_field22799.call(null,name__5127__auto__,null);
});
var range_field22799__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field22799 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field22799__1.call(this,name__5127__auto__);
case 2:
return range_field22799__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22799.cljs$core$IFn$_invoke$arity$1 = range_field22799__1;
range_field22799.cljs$core$IFn$_invoke$arity$2 = range_field22799__2;
return range_field22799;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22799);
/**
* Creates a search input field.
*/
sablono.core.search_field22800 = (function() {
var search_field22800 = null;
var search_field22800__1 = (function (name__5127__auto__){return search_field22800.call(null,name__5127__auto__,null);
});
var search_field22800__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field22800 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field22800__1.call(this,name__5127__auto__);
case 2:
return search_field22800__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22800.cljs$core$IFn$_invoke$arity$1 = search_field22800__1;
search_field22800.cljs$core$IFn$_invoke$arity$2 = search_field22800__2;
return search_field22800;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22800);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22801 = (function() {
var tel_field22801 = null;
var tel_field22801__1 = (function (name__5127__auto__){return tel_field22801.call(null,name__5127__auto__,null);
});
var tel_field22801__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field22801 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field22801__1.call(this,name__5127__auto__);
case 2:
return tel_field22801__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22801.cljs$core$IFn$_invoke$arity$1 = tel_field22801__1;
tel_field22801.cljs$core$IFn$_invoke$arity$2 = tel_field22801__2;
return tel_field22801;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22801);
/**
* Creates a text input field.
*/
sablono.core.text_field22802 = (function() {
var text_field22802 = null;
var text_field22802__1 = (function (name__5127__auto__){return text_field22802.call(null,name__5127__auto__,null);
});
var text_field22802__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field22802 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field22802__1.call(this,name__5127__auto__);
case 2:
return text_field22802__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22802.cljs$core$IFn$_invoke$arity$1 = text_field22802__1;
text_field22802.cljs$core$IFn$_invoke$arity$2 = text_field22802__2;
return text_field22802;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22802);
/**
* Creates a time input field.
*/
sablono.core.time_field22803 = (function() {
var time_field22803 = null;
var time_field22803__1 = (function (name__5127__auto__){return time_field22803.call(null,name__5127__auto__,null);
});
var time_field22803__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field22803 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field22803__1.call(this,name__5127__auto__);
case 2:
return time_field22803__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22803.cljs$core$IFn$_invoke$arity$1 = time_field22803__1;
time_field22803.cljs$core$IFn$_invoke$arity$2 = time_field22803__2;
return time_field22803;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22803);
/**
* Creates a url input field.
*/
sablono.core.url_field22804 = (function() {
var url_field22804 = null;
var url_field22804__1 = (function (name__5127__auto__){return url_field22804.call(null,name__5127__auto__,null);
});
var url_field22804__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field22804 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field22804__1.call(this,name__5127__auto__);
case 2:
return url_field22804__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22804.cljs$core$IFn$_invoke$arity$1 = url_field22804__1;
url_field22804.cljs$core$IFn$_invoke$arity$2 = url_field22804__2;
return url_field22804;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22804);
/**
* Creates a week input field.
*/
sablono.core.week_field22805 = (function() {
var week_field22805 = null;
var week_field22805__1 = (function (name__5127__auto__){return week_field22805.call(null,name__5127__auto__,null);
});
var week_field22805__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field22805 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field22805__1.call(this,name__5127__auto__);
case 2:
return week_field22805__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22805.cljs$core$IFn$_invoke$arity$1 = week_field22805__1;
week_field22805.cljs$core$IFn$_invoke$arity$2 = week_field22805__2;
return week_field22805;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22805);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22806 = (function() {
var check_box22806 = null;
var check_box22806__1 = (function (name){return check_box22806.call(null,name,null);
});
var check_box22806__2 = (function (name,checked_QMARK_){return check_box22806.call(null,name,checked_QMARK_,"true");
});
var check_box22806__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22806 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22806__1.call(this,name);
case 2:
return check_box22806__2.call(this,name,checked_QMARK_);
case 3:
return check_box22806__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22806.cljs$core$IFn$_invoke$arity$1 = check_box22806__1;
check_box22806.cljs$core$IFn$_invoke$arity$2 = check_box22806__2;
check_box22806.cljs$core$IFn$_invoke$arity$3 = check_box22806__3;
return check_box22806;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22806);
/**
* Creates a radio button.
*/
sablono.core.radio_button22807 = (function() {
var radio_button22807 = null;
var radio_button22807__1 = (function (group){return radio_button22807.call(null,group,null);
});
var radio_button22807__2 = (function (group,checked_QMARK_){return radio_button22807.call(null,group,checked_QMARK_,"true");
});
var radio_button22807__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22807 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22807__1.call(this,group);
case 2:
return radio_button22807__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22807__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22807.cljs$core$IFn$_invoke$arity$1 = radio_button22807__1;
radio_button22807.cljs$core$IFn$_invoke$arity$2 = radio_button22807__2;
radio_button22807.cljs$core$IFn$_invoke$arity$3 = radio_button22807__3;
return radio_button22807;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22807);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22808 = (function() {
var select_options22808 = null;
var select_options22808__1 = (function (coll){return select_options22808.call(null,coll,null);
});
var select_options22808__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__22817(s__22818){return (new cljs.core.LazySeq(null,(function (){var s__22818__$1 = s__22818;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22818__$1);if(temp__4126__auto__)
{var s__22818__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22818__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22818__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22820 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22819 = (0);while(true){
if((i__22819 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22819);cljs.core.chunk_append.call(null,b__22820,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22823 = x;var text = cljs.core.nth.call(null,vec__22823,(0),null);var val = cljs.core.nth.call(null,vec__22823,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22823,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22808.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22825 = (i__22819 + (1));
i__22819 = G__22825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22820),iter__22817.call(null,cljs.core.chunk_rest.call(null,s__22818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22820),null);
}
} else
{var x = cljs.core.first.call(null,s__22818__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22824 = x;var text = cljs.core.nth.call(null,vec__22824,(0),null);var val = cljs.core.nth.call(null,vec__22824,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22824,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22808.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22817.call(null,cljs.core.rest.call(null,s__22818__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options22808 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22808__1.call(this,coll);
case 2:
return select_options22808__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22808.cljs$core$IFn$_invoke$arity$1 = select_options22808__1;
select_options22808.cljs$core$IFn$_invoke$arity$2 = select_options22808__2;
return select_options22808;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22808);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22826 = (function() {
var drop_down22826 = null;
var drop_down22826__2 = (function (name,options){return drop_down22826.call(null,name,options,null);
});
var drop_down22826__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22826 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22826__2.call(this,name,options);
case 3:
return drop_down22826__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22826.cljs$core$IFn$_invoke$arity$2 = drop_down22826__2;
drop_down22826.cljs$core$IFn$_invoke$arity$3 = drop_down22826__3;
return drop_down22826;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22826);
/**
* Creates a text area element.
*/
sablono.core.text_area22827 = (function() {
var text_area22827 = null;
var text_area22827__1 = (function (name){return text_area22827.call(null,name,null);
});
var text_area22827__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22827 = function(name,value){
switch(arguments.length){
case 1:
return text_area22827__1.call(this,name);
case 2:
return text_area22827__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22827.cljs$core$IFn$_invoke$arity$1 = text_area22827__1;
text_area22827.cljs$core$IFn$_invoke$arity$2 = text_area22827__2;
return text_area22827;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22827);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22828 = (function label22828(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22828);
/**
* Creates a submit button.
*/
sablono.core.submit_button22829 = (function submit_button22829(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22829);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22830 = (function reset_button22830(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22830);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22831 = (function() { 
var form_to22831__delegate = function (p__22832,body){var vec__22834 = p__22832;var method = cljs.core.nth.call(null,vec__22834,(0),null);var action = cljs.core.nth.call(null,vec__22834,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22831 = function (p__22832,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22831__delegate.call(this,p__22832,body);};
form_to22831.cljs$lang$maxFixedArity = 1;
form_to22831.cljs$lang$applyTo = (function (arglist__22835){
var p__22832 = cljs.core.first(arglist__22835);
var body = cljs.core.rest(arglist__22835);
return form_to22831__delegate(p__22832,body);
});
form_to22831.cljs$core$IFn$_invoke$arity$variadic = form_to22831__delegate;
return form_to22831;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22831);
