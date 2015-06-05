// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.mount');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.mount.make_sequential = (function make_sequential(v){if((v == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return v;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){if(cljs.core.truth_((function (){var and__3627__auto__ = path;if(cljs.core.truth_(and__3627__auto__))
{return paths;
} else
{return and__3627__auto__;
}
})()))
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));
} else
{if(cljs.core.truth_(path))
{var temp__4126__auto__ = cljs.core.not_empty.call(null,clustermap.components.mount.make_sequential.call(null,path));if(cljs.core.truth_(temp__4126__auto__))
{var sp = temp__4126__auto__;return cljs.core.get_in.call(null,cursor,sp);
} else
{return null;
}
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_.call(null,paths))
{var iter__4377__auto__ = (function iter__28822(s__28823){return (new cljs.core.LazySeq(null,(function (){var s__28823__$1 = s__28823;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28823__$1);if(temp__4126__auto__)
{var s__28823__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28823__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28823__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28825 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28824 = (0);while(true){
if((i__28824 < size__4376__auto__))
{var path__$1 = cljs.core._nth.call(null,c__4375__auto__,i__28824);cljs.core.chunk_append.call(null,b__28825,(function (){var temp__4126__auto____$1 = cljs.core.not_empty.call(null,clustermap.components.mount.make_sequential.call(null,path__$1));if(cljs.core.truth_(temp__4126__auto____$1))
{var sp = temp__4126__auto____$1;return cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1));
} else
{return null;
}
})());
{
var G__28834 = (i__28824 + (1));
i__28824 = G__28834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28825),iter__28822.call(null,cljs.core.chunk_rest.call(null,s__28823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28825),null);
}
} else
{var path__$1 = cljs.core.first.call(null,s__28823__$2);return cljs.core.cons.call(null,(function (){var temp__4126__auto____$1 = cljs.core.not_empty.call(null,clustermap.components.mount.make_sequential.call(null,path__$1));if(cljs.core.truth_(temp__4126__auto____$1))
{var sp = temp__4126__auto____$1;return cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1));
} else
{return null;
}
})(),iter__28822.call(null,cljs.core.rest.call(null,s__28823__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,paths);
} else
{if(cljs.core.map_QMARK_.call(null,paths))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__28826(s__28827){return (new cljs.core.LazySeq(null,(function (){var s__28827__$1 = s__28827;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28827__$1);if(temp__4126__auto__)
{var s__28827__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28827__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28827__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28829 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28828 = (0);while(true){
if((i__28828 < size__4376__auto__))
{var vec__28832 = cljs.core._nth.call(null,c__4375__auto__,i__28828);var key = cljs.core.nth.call(null,vec__28832,(0),null);var path__$1 = cljs.core.nth.call(null,vec__28832,(1),null);cljs.core.chunk_append.call(null,b__28829,(function (){var temp__4126__auto____$1 = cljs.core.not_empty.call(null,clustermap.components.mount.make_sequential.call(null,path__$1));if(cljs.core.truth_(temp__4126__auto____$1))
{var sp = temp__4126__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,sp)], null);
} else
{return null;
}
})());
{
var G__28835 = (i__28828 + (1));
i__28828 = G__28835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28829),iter__28826.call(null,cljs.core.chunk_rest.call(null,s__28827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28829),null);
}
} else
{var vec__28833 = cljs.core.first.call(null,s__28827__$2);var key = cljs.core.nth.call(null,vec__28833,(0),null);var path__$1 = cljs.core.nth.call(null,vec__28833,(1),null);return cljs.core.cons.call(null,(function (){var temp__4126__auto____$1 = cljs.core.not_empty.call(null,clustermap.components.mount.make_sequential.call(null,path__$1));if(cljs.core.truth_(temp__4126__auto____$1))
{var sp = temp__4126__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,sp)], null);
} else
{return null;
}
})(),iter__28826.call(null,cljs.core.rest.call(null,s__28827__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,paths);
})());
} else
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"what are those paths ? :",paths),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));

}
}
}
}
}
});
clustermap.components.mount.extract_paths = (function extract_paths(cname,path,paths,cursor){var x = clustermap.components.mount.extract_paths_STAR_.call(null,path,paths,cursor);if(cljs.core.truth_(x))
{return x;
} else
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: nil cursor",cname,path,paths], null)));
return null;

}
});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (cname,f,value,p__28836){var map__28838 = p__28836;var map__28838__$1 = ((cljs.core.seq_QMARK_.call(null,map__28838))?cljs.core.apply.call(null,cljs.core.hash_map,map__28838):map__28838);var options = map__28838__$1;var paths = cljs.core.get.call(null,map__28838__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path = cljs.core.get.call(null,map__28838__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target = cljs.core.get.call(null,map__28838__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);var cursor_fn = cljs.core.partial.call(null,clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"paths","paths",-1807389588)),new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"fn","fn",-1175266204),cursor_fn);if(cljs.core.truth_(target__$1))
{return om.core.root.call(null,f,value,options__$1);
} else
{return console.log(("component: <"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cname)+"> can't mount : can't find target: <"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target__$1)+">"));
}
};
var mount = function (cname,f,value,var_args){
var p__28836 = null;if (arguments.length > 3) {
  p__28836 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__28836);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__28839){
var cname = cljs.core.first(arglist__28839);
arglist__28839 = cljs.core.next(arglist__28839);
var f = cljs.core.first(arglist__28839);
arglist__28839 = cljs.core.next(arglist__28839);
var value = cljs.core.first(arglist__28839);
var p__28836 = cljs.core.rest(arglist__28839);
return mount__delegate(cname,f,value,p__28836);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__28840){var map__28842 = p__28840;var map__28842__$1 = ((cljs.core.seq_QMARK_.call(null,map__28842))?cljs.core.apply.call(null,cljs.core.hash_map,map__28842):map__28842);var target = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"target","target",253001721));var name = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"name","name",1843675177));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(name.call(null,target)):target);if(cljs.core.truth_(target__$1))
{return om.core.detach_root.call(null,target__$1);
} else
{return console.log(("component: <"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"> can't unmount : can't find target: <"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target__$1)+">"));
}
};
var unmount = function (var_args){
var p__28840 = null;if (arguments.length > 0) {
  p__28840 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__28840);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__28843){
var p__28840 = cljs.core.seq(arglist__28843);
return unmount__delegate(p__28840);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
