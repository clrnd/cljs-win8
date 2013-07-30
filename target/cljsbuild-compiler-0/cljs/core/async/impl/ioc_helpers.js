goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 4;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return ((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]) === "\uFDD0:finished");
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if((void 0 === cljs.core.async.impl.ioc_helpers.t4842))
{goog.provide('cljs.core.async.impl.ioc_helpers.t4842');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t4842 = (function (f,fn_handler,meta4843){
this.f = f;
this.fn_handler = fn_handler;
this.meta4843 = meta4843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t4842.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t4842.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t4842";
cljs.core.async.impl.ioc_helpers.t4842.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.ioc-helpers/t4842");
});
cljs.core.async.impl.ioc_helpers.t4842.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t4842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t4842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t4842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4844){
var self__ = this;
return self__.meta4843;
});
cljs.core.async.impl.ioc_helpers.t4842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4844,meta4843__$1){
var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t4842(self__.f,self__.fn_handler,meta4843__$1));
});
} else
{}
return (new cljs.core.async.impl.ioc_helpers.t4842(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_4847_4849 = state;
(statearr_4847_4849[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_4847_4849[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
})));
if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;
var statearr_4848_4850 = state;
(statearr_4848_4850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_4848_4850[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return "\uFDD0:recur";
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){
var statearr_4853_4855 = state;
(statearr_4853_4855[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_4853_4855[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
})));
if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;
var statearr_4854_4856 = state;
(statearr_4854_4856[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_4854_4856[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return "\uFDD0:recur";
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__4857){
var map__4862 = p__4857;
var map__4862__$1 = ((cljs.core.seq_QMARK_.call(null,map__4862))?cljs.core.apply.call(null,cljs.core.hash_map,map__4862):map__4862);
var opts = map__4862__$1;
var statearr_4863_4866 = state;
(statearr_4863_4866[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_4864_4867 = state;
(statearr_4864_4867[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;
var statearr_4865_4868 = state;
(statearr_4865_4868[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return "\uFDD0:recur";
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__4857 = null;
if (arguments.length > 3) {
  p__4857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this, state, cont_block, ports, p__4857);
};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__4869){
var state = cljs.core.first(arglist__4869);
arglist__4869 = cljs.core.next(arglist__4869);
var cont_block = cljs.core.first(arglist__4869);
arglist__4869 = cljs.core.next(arglist__4869);
var ports = cljs.core.first(arglist__4869);
var p__4857 = cljs.core.rest(arglist__4869);
return ioc_alts_BANG___delegate(state, cont_block, ports, p__4857);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){
return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});
