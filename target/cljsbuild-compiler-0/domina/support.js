goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
var div__20013 = document.createElement("div");
var test_html__20014 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div__20013.innerHTML = test_html__20014;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div__20013.firstChild.nodeType,3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div__20013.getElementsByTagName("tbody").length,0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div__20013.getElementsByTagName("link").length,0);
