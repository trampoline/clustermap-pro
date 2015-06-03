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
var G__22151__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22150 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22150,(0),null);var body = cljs.core.nthnext.call(null,vec__22150,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22151 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22151__delegate.call(this,args);};
G__22151.cljs$lang$maxFixedArity = 0;
G__22151.cljs$lang$applyTo = (function (arglist__22152){
var args = cljs.core.seq(arglist__22152);
return G__22151__delegate(args);
});
G__22151.cljs$core$IFn$_invoke$arity$variadic = G__22151__delegate;
return G__22151;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__22157(s__22158){return (new cljs.core.LazySeq(null,(function (){var s__22158__$1 = s__22158;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22158__$1);if(temp__4126__auto__)
{var s__22158__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22158__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22158__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22160 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22159 = (0);while(true){
if((i__22159 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__22159);cljs.core.chunk_append.call(null,b__22160,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22161 = (i__22159 + (1));
i__22159 = G__22161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22160),iter__22157.call(null,cljs.core.chunk_rest.call(null,s__22158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22160),null);
}
} else
{var args = cljs.core.first.call(null,s__22158__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22157.call(null,cljs.core.rest.call(null,s__22158__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__22166(s__22167){return (new cljs.core.LazySeq(null,(function (){var s__22167__$1 = s__22167;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22167__$1);if(temp__4126__auto__)
{var s__22167__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22167__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22167__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22169 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22168 = (0);while(true){
if((i__22168 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__22168);cljs.core.chunk_append.call(null,b__22169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22170 = (i__22168 + (1));
i__22168 = G__22170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22169),iter__22166.call(null,cljs.core.chunk_rest.call(null,s__22167__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22169),null);
}
} else
{var style = cljs.core.first.call(null,s__22167__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22166.call(null,cljs.core.rest.call(null,s__22167__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__22171){
var styles = cljs.core.seq(arglist__22171);
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
sablono.core.link_to22172 = (function() { 
var link_to22172__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22172 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22172__delegate.call(this,url,content);};
link_to22172.cljs$lang$maxFixedArity = 1;
link_to22172.cljs$lang$applyTo = (function (arglist__22173){
var url = cljs.core.first(arglist__22173);
var content = cljs.core.rest(arglist__22173);
return link_to22172__delegate(url,content);
});
link_to22172.cljs$core$IFn$_invoke$arity$variadic = link_to22172__delegate;
return link_to22172;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22172);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22174 = (function() { 
var mail_to22174__delegate = function (e_mail,p__22175){var vec__22177 = p__22175;var content = cljs.core.nth.call(null,vec__22177,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22174 = function (e_mail,var_args){
var p__22175 = null;if (arguments.length > 1) {
  p__22175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22174__delegate.call(this,e_mail,p__22175);};
mail_to22174.cljs$lang$maxFixedArity = 1;
mail_to22174.cljs$lang$applyTo = (function (arglist__22178){
var e_mail = cljs.core.first(arglist__22178);
var p__22175 = cljs.core.rest(arglist__22178);
return mail_to22174__delegate(e_mail,p__22175);
});
mail_to22174.cljs$core$IFn$_invoke$arity$variadic = mail_to22174__delegate;
return mail_to22174;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22174);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22179 = (function unordered_list22179(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__22184(s__22185){return (new cljs.core.LazySeq(null,(function (){var s__22185__$1 = s__22185;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22185__$1);if(temp__4126__auto__)
{var s__22185__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22185__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22185__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22187 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22186 = (0);while(true){
if((i__22186 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22186);cljs.core.chunk_append.call(null,b__22187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22188 = (i__22186 + (1));
i__22186 = G__22188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22187),iter__22184.call(null,cljs.core.chunk_rest.call(null,s__22185__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22187),null);
}
} else
{var x = cljs.core.first.call(null,s__22185__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22184.call(null,cljs.core.rest.call(null,s__22185__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22179);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22189 = (function ordered_list22189(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__22194(s__22195){return (new cljs.core.LazySeq(null,(function (){var s__22195__$1 = s__22195;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22195__$1);if(temp__4126__auto__)
{var s__22195__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22195__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22195__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22197 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22196 = (0);while(true){
if((i__22196 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22196);cljs.core.chunk_append.call(null,b__22197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22198 = (i__22196 + (1));
i__22196 = G__22198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22197),iter__22194.call(null,cljs.core.chunk_rest.call(null,s__22195__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22197),null);
}
} else
{var x = cljs.core.first.call(null,s__22195__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22194.call(null,cljs.core.rest.call(null,s__22195__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22189);
/**
* Create an image element.
*/
sablono.core.image22199 = (function() {
var image22199 = null;
var image22199__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22199__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22199 = function(src,alt){
switch(arguments.length){
case 1:
return image22199__1.call(this,src);
case 2:
return image22199__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22199.cljs$core$IFn$_invoke$arity$1 = image22199__1;
image22199.cljs$core$IFn$_invoke$arity$2 = image22199__2;
return image22199;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22199);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22200_SHARP_,p2__22201_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22200_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22201_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22202_SHARP_,p2__22203_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22202_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22203_SHARP_));
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
sablono.core.color_field22204 = (function() {
var color_field22204 = null;
var color_field22204__1 = (function (name__5127__auto__){return color_field22204.call(null,name__5127__auto__,null);
});
var color_field22204__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field22204 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field22204__1.call(this,name__5127__auto__);
case 2:
return color_field22204__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22204.cljs$core$IFn$_invoke$arity$1 = color_field22204__1;
color_field22204.cljs$core$IFn$_invoke$arity$2 = color_field22204__2;
return color_field22204;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22204);
/**
* Creates a date input field.
*/
sablono.core.date_field22205 = (function() {
var date_field22205 = null;
var date_field22205__1 = (function (name__5127__auto__){return date_field22205.call(null,name__5127__auto__,null);
});
var date_field22205__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field22205 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field22205__1.call(this,name__5127__auto__);
case 2:
return date_field22205__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22205.cljs$core$IFn$_invoke$arity$1 = date_field22205__1;
date_field22205.cljs$core$IFn$_invoke$arity$2 = date_field22205__2;
return date_field22205;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22205);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22206 = (function() {
var datetime_field22206 = null;
var datetime_field22206__1 = (function (name__5127__auto__){return datetime_field22206.call(null,name__5127__auto__,null);
});
var datetime_field22206__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field22206 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field22206__1.call(this,name__5127__auto__);
case 2:
return datetime_field22206__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22206.cljs$core$IFn$_invoke$arity$1 = datetime_field22206__1;
datetime_field22206.cljs$core$IFn$_invoke$arity$2 = datetime_field22206__2;
return datetime_field22206;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22206);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22207 = (function() {
var datetime_local_field22207 = null;
var datetime_local_field22207__1 = (function (name__5127__auto__){return datetime_local_field22207.call(null,name__5127__auto__,null);
});
var datetime_local_field22207__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field22207 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22207__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field22207__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22207.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22207__1;
datetime_local_field22207.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22207__2;
return datetime_local_field22207;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22207);
/**
* Creates a email input field.
*/
sablono.core.email_field22208 = (function() {
var email_field22208 = null;
var email_field22208__1 = (function (name__5127__auto__){return email_field22208.call(null,name__5127__auto__,null);
});
var email_field22208__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field22208 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field22208__1.call(this,name__5127__auto__);
case 2:
return email_field22208__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22208.cljs$core$IFn$_invoke$arity$1 = email_field22208__1;
email_field22208.cljs$core$IFn$_invoke$arity$2 = email_field22208__2;
return email_field22208;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22208);
/**
* Creates a file input field.
*/
sablono.core.file_field22209 = (function() {
var file_field22209 = null;
var file_field22209__1 = (function (name__5127__auto__){return file_field22209.call(null,name__5127__auto__,null);
});
var file_field22209__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field22209 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field22209__1.call(this,name__5127__auto__);
case 2:
return file_field22209__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22209.cljs$core$IFn$_invoke$arity$1 = file_field22209__1;
file_field22209.cljs$core$IFn$_invoke$arity$2 = file_field22209__2;
return file_field22209;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22209);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22210 = (function() {
var hidden_field22210 = null;
var hidden_field22210__1 = (function (name__5127__auto__){return hidden_field22210.call(null,name__5127__auto__,null);
});
var hidden_field22210__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field22210 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field22210__1.call(this,name__5127__auto__);
case 2:
return hidden_field22210__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22210.cljs$core$IFn$_invoke$arity$1 = hidden_field22210__1;
hidden_field22210.cljs$core$IFn$_invoke$arity$2 = hidden_field22210__2;
return hidden_field22210;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22210);
/**
* Creates a month input field.
*/
sablono.core.month_field22211 = (function() {
var month_field22211 = null;
var month_field22211__1 = (function (name__5127__auto__){return month_field22211.call(null,name__5127__auto__,null);
});
var month_field22211__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field22211 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field22211__1.call(this,name__5127__auto__);
case 2:
return month_field22211__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22211.cljs$core$IFn$_invoke$arity$1 = month_field22211__1;
month_field22211.cljs$core$IFn$_invoke$arity$2 = month_field22211__2;
return month_field22211;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22211);
/**
* Creates a number input field.
*/
sablono.core.number_field22212 = (function() {
var number_field22212 = null;
var number_field22212__1 = (function (name__5127__auto__){return number_field22212.call(null,name__5127__auto__,null);
});
var number_field22212__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field22212 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field22212__1.call(this,name__5127__auto__);
case 2:
return number_field22212__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22212.cljs$core$IFn$_invoke$arity$1 = number_field22212__1;
number_field22212.cljs$core$IFn$_invoke$arity$2 = number_field22212__2;
return number_field22212;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22212);
/**
* Creates a password input field.
*/
sablono.core.password_field22213 = (function() {
var password_field22213 = null;
var password_field22213__1 = (function (name__5127__auto__){return password_field22213.call(null,name__5127__auto__,null);
});
var password_field22213__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field22213 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field22213__1.call(this,name__5127__auto__);
case 2:
return password_field22213__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22213.cljs$core$IFn$_invoke$arity$1 = password_field22213__1;
password_field22213.cljs$core$IFn$_invoke$arity$2 = password_field22213__2;
return password_field22213;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22213);
/**
* Creates a range input field.
*/
sablono.core.range_field22214 = (function() {
var range_field22214 = null;
var range_field22214__1 = (function (name__5127__auto__){return range_field22214.call(null,name__5127__auto__,null);
});
var range_field22214__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field22214 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field22214__1.call(this,name__5127__auto__);
case 2:
return range_field22214__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22214.cljs$core$IFn$_invoke$arity$1 = range_field22214__1;
range_field22214.cljs$core$IFn$_invoke$arity$2 = range_field22214__2;
return range_field22214;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22214);
/**
* Creates a search input field.
*/
sablono.core.search_field22215 = (function() {
var search_field22215 = null;
var search_field22215__1 = (function (name__5127__auto__){return search_field22215.call(null,name__5127__auto__,null);
});
var search_field22215__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field22215 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field22215__1.call(this,name__5127__auto__);
case 2:
return search_field22215__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22215.cljs$core$IFn$_invoke$arity$1 = search_field22215__1;
search_field22215.cljs$core$IFn$_invoke$arity$2 = search_field22215__2;
return search_field22215;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22215);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22216 = (function() {
var tel_field22216 = null;
var tel_field22216__1 = (function (name__5127__auto__){return tel_field22216.call(null,name__5127__auto__,null);
});
var tel_field22216__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field22216 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field22216__1.call(this,name__5127__auto__);
case 2:
return tel_field22216__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22216.cljs$core$IFn$_invoke$arity$1 = tel_field22216__1;
tel_field22216.cljs$core$IFn$_invoke$arity$2 = tel_field22216__2;
return tel_field22216;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22216);
/**
* Creates a text input field.
*/
sablono.core.text_field22217 = (function() {
var text_field22217 = null;
var text_field22217__1 = (function (name__5127__auto__){return text_field22217.call(null,name__5127__auto__,null);
});
var text_field22217__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field22217 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field22217__1.call(this,name__5127__auto__);
case 2:
return text_field22217__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22217.cljs$core$IFn$_invoke$arity$1 = text_field22217__1;
text_field22217.cljs$core$IFn$_invoke$arity$2 = text_field22217__2;
return text_field22217;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22217);
/**
* Creates a time input field.
*/
sablono.core.time_field22218 = (function() {
var time_field22218 = null;
var time_field22218__1 = (function (name__5127__auto__){return time_field22218.call(null,name__5127__auto__,null);
});
var time_field22218__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field22218 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field22218__1.call(this,name__5127__auto__);
case 2:
return time_field22218__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22218.cljs$core$IFn$_invoke$arity$1 = time_field22218__1;
time_field22218.cljs$core$IFn$_invoke$arity$2 = time_field22218__2;
return time_field22218;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22218);
/**
* Creates a url input field.
*/
sablono.core.url_field22219 = (function() {
var url_field22219 = null;
var url_field22219__1 = (function (name__5127__auto__){return url_field22219.call(null,name__5127__auto__,null);
});
var url_field22219__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field22219 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field22219__1.call(this,name__5127__auto__);
case 2:
return url_field22219__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22219.cljs$core$IFn$_invoke$arity$1 = url_field22219__1;
url_field22219.cljs$core$IFn$_invoke$arity$2 = url_field22219__2;
return url_field22219;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22219);
/**
* Creates a week input field.
*/
sablono.core.week_field22220 = (function() {
var week_field22220 = null;
var week_field22220__1 = (function (name__5127__auto__){return week_field22220.call(null,name__5127__auto__,null);
});
var week_field22220__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field22220 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field22220__1.call(this,name__5127__auto__);
case 2:
return week_field22220__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22220.cljs$core$IFn$_invoke$arity$1 = week_field22220__1;
week_field22220.cljs$core$IFn$_invoke$arity$2 = week_field22220__2;
return week_field22220;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22220);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22221 = (function() {
var check_box22221 = null;
var check_box22221__1 = (function (name){return check_box22221.call(null,name,null);
});
var check_box22221__2 = (function (name,checked_QMARK_){return check_box22221.call(null,name,checked_QMARK_,"true");
});
var check_box22221__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22221 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22221__1.call(this,name);
case 2:
return check_box22221__2.call(this,name,checked_QMARK_);
case 3:
return check_box22221__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22221.cljs$core$IFn$_invoke$arity$1 = check_box22221__1;
check_box22221.cljs$core$IFn$_invoke$arity$2 = check_box22221__2;
check_box22221.cljs$core$IFn$_invoke$arity$3 = check_box22221__3;
return check_box22221;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22221);
/**
* Creates a radio button.
*/
sablono.core.radio_button22222 = (function() {
var radio_button22222 = null;
var radio_button22222__1 = (function (group){return radio_button22222.call(null,group,null);
});
var radio_button22222__2 = (function (group,checked_QMARK_){return radio_button22222.call(null,group,checked_QMARK_,"true");
});
var radio_button22222__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22222 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22222__1.call(this,group);
case 2:
return radio_button22222__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22222__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22222.cljs$core$IFn$_invoke$arity$1 = radio_button22222__1;
radio_button22222.cljs$core$IFn$_invoke$arity$2 = radio_button22222__2;
radio_button22222.cljs$core$IFn$_invoke$arity$3 = radio_button22222__3;
return radio_button22222;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22222);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22223 = (function() {
var select_options22223 = null;
var select_options22223__1 = (function (coll){return select_options22223.call(null,coll,null);
});
var select_options22223__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__22232(s__22233){return (new cljs.core.LazySeq(null,(function (){var s__22233__$1 = s__22233;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22233__$1);if(temp__4126__auto__)
{var s__22233__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22233__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22233__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22235 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22234 = (0);while(true){
if((i__22234 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22234);cljs.core.chunk_append.call(null,b__22235,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22238 = x;var text = cljs.core.nth.call(null,vec__22238,(0),null);var val = cljs.core.nth.call(null,vec__22238,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22238,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22223.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22240 = (i__22234 + (1));
i__22234 = G__22240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22235),iter__22232.call(null,cljs.core.chunk_rest.call(null,s__22233__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22235),null);
}
} else
{var x = cljs.core.first.call(null,s__22233__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22239 = x;var text = cljs.core.nth.call(null,vec__22239,(0),null);var val = cljs.core.nth.call(null,vec__22239,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22239,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22223.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22232.call(null,cljs.core.rest.call(null,s__22233__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options22223 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22223__1.call(this,coll);
case 2:
return select_options22223__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22223.cljs$core$IFn$_invoke$arity$1 = select_options22223__1;
select_options22223.cljs$core$IFn$_invoke$arity$2 = select_options22223__2;
return select_options22223;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22223);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22241 = (function() {
var drop_down22241 = null;
var drop_down22241__2 = (function (name,options){return drop_down22241.call(null,name,options,null);
});
var drop_down22241__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22241 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22241__2.call(this,name,options);
case 3:
return drop_down22241__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22241.cljs$core$IFn$_invoke$arity$2 = drop_down22241__2;
drop_down22241.cljs$core$IFn$_invoke$arity$3 = drop_down22241__3;
return drop_down22241;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22241);
/**
* Creates a text area element.
*/
sablono.core.text_area22242 = (function() {
var text_area22242 = null;
var text_area22242__1 = (function (name){return text_area22242.call(null,name,null);
});
var text_area22242__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22242 = function(name,value){
switch(arguments.length){
case 1:
return text_area22242__1.call(this,name);
case 2:
return text_area22242__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22242.cljs$core$IFn$_invoke$arity$1 = text_area22242__1;
text_area22242.cljs$core$IFn$_invoke$arity$2 = text_area22242__2;
return text_area22242;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22242);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22243 = (function label22243(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22243);
/**
* Creates a submit button.
*/
sablono.core.submit_button22244 = (function submit_button22244(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22244);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22245 = (function reset_button22245(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22245);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22246 = (function() { 
var form_to22246__delegate = function (p__22247,body){var vec__22249 = p__22247;var method = cljs.core.nth.call(null,vec__22249,(0),null);var action = cljs.core.nth.call(null,vec__22249,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22246 = function (p__22247,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22246__delegate.call(this,p__22247,body);};
form_to22246.cljs$lang$maxFixedArity = 1;
form_to22246.cljs$lang$applyTo = (function (arglist__22250){
var p__22247 = cljs.core.first(arglist__22250);
var body = cljs.core.rest(arglist__22250);
return form_to22246__delegate(p__22247,body);
});
form_to22246.cljs$core$IFn$_invoke$arity$variadic = form_to22246__delegate;
return form_to22246;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22246);
