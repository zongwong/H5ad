! function(t, e) {
	"function" == typeof define && define.amd ? define(function() {
		return e(t)
	}) : e(t)
}(this, function(t) {
	var e = function() {
		function e(t) {
			return null == t ? String(t) : X[G.call(t)] || "object"
		}

		function n(t) {
			return "function" == e(t)
		}

		function i(t) {
			return null != t && t == t.window
		}

		function r(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}

		function o(t) {
			return "object" == e(t)
		}

		function a(t) {
			return o(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
		}

		function s(t) {
			var e = !!t && "length" in t && t.length,
				n = S.type(t);
			return "function" != n && !i(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
		}

		function c(t) {
			return O.call(t, function(t) {
				return null != t
			})
		}

		function u(t) {
			return t.length > 0 ? S.fn.concat.apply([], t) : t
		}

		function l(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}

		function f(t) {
			return t in F ? F[t] : F[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}

		function h(t, e) {
			return "number" != typeof e || D[l(t)] ? e : e + "px"
		}

		function d(t) {
			var e, n;
			return A[t] || (e = P.createElement(t), P.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), A[t] = n), A[t]
		}

		function p(t) {
			return "children" in t ? L.call(t.children) : S.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}

		function m(t, e) {
			var n, i = t ? t.length : 0;
			for(n = 0; i > n; n++) this[n] = t[n];
			this.length = i, this.selector = e || ""
		}

		function g(t, e, n) {
			for(T in e) n && (a(e[T]) || tt(e[T])) ? (a(e[T]) && !a(t[T]) && (t[T] = {}), tt(e[T]) && !tt(t[T]) && (t[T] = []), g(t[T], e[T], n)) : e[T] !== C && (t[T] = e[T])
		}

		function v(t, e) {
			return null == e ? S(t) : S(t).filter(e)
		}

		function y(t, e, i, r) {
			return n(e) ? e.call(t, i, r) : e
		}

		function b(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}

		function x(t, e) {
			var n = t.className || "",
				i = n && n.baseVal !== C;
			return e === C ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
		}

		function w(t) {
			try {
				return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t
			} catch(e) {
				return t
			}
		}

		function E(t, e) {
			e(t);
			for(var n = 0, i = t.childNodes.length; i > n; n++) E(t.childNodes[n], e)
		}
		var C, T, S, j, _, N, $ = [],
			k = $.concat,
			O = $.filter,
			L = $.slice,
			P = t.document,
			A = {},
			F = {},
			D = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			M = /^\s*<(\w+|!)[^>]*>/,
			I = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			H = /^(?:body|html)$/i,
			R = /([A-Z])/g,
			q = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			K = ["after", "prepend", "before", "append"],
			z = P.createElement("table"),
			B = P.createElement("tr"),
			V = {
				tr: P.createElement("tbody"),
				tbody: z,
				thead: z,
				tfoot: z,
				td: B,
				th: B,
				"*": P.createElement("div")
			},
			U = /complete|loaded|interactive/,
			J = /^[\w-]*$/,
			X = {},
			G = X.toString,
			W = {},
			Y = P.createElement("div"),
			Q = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				for: "htmlFor",
				class: "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			tt = Array.isArray || function(t) {
				return t instanceof Array
			};
		return W.matches = function(t, e) {
			if(!e || !t || 1 !== t.nodeType) return !1;
			var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if(n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = Y).appendChild(t), i = ~W.qsa(r, e).indexOf(t), o && Y.removeChild(t), i
		}, _ = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, N = function(t) {
			return O.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, W.fragment = function(t, e, n) {
			var i, r, o;
			return I.test(t) && (i = S(P.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(Z, "<$1></$2>")), e === C && (e = M.test(t) && RegExp.$1), e in V || (e = "*"), o = V[e], o.innerHTML = "" + t, i = S.each(L.call(o.childNodes), function() {
				o.removeChild(this)
			})), a(n) && (r = S(i), S.each(n, function(t, e) {
				q.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
			})), i
		}, W.Z = function(t, e) {
			return new m(t, e)
		}, W.isZ = function(t) {
			return t instanceof W.Z
		}, W.init = function(t, e) {
			var i;
			if(!t) return W.Z();
			if("string" == typeof t)
				if(t = t.trim(), "<" == t[0] && M.test(t)) i = W.fragment(t, RegExp.$1, e), t = null;
				else {
					if(e !== C) return S(e).find(t);
					i = W.qsa(P, t)
				}
			else {
				if(n(t)) return S(P).ready(t);
				if(W.isZ(t)) return t;
				if(tt(t)) i = c(t);
				else if(o(t)) i = [t], t = null;
				else if(M.test(t)) i = W.fragment(t.trim(), RegExp.$1, e), t = null;
				else {
					if(e !== C) return S(e).find(t);
					i = W.qsa(P, t)
				}
			}
			return W.Z(i, t)
		}, S = function(t, e) {
			return W.init(t, e)
		}, S.extend = function(t) {
			var e, n = L.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				g(t, n, e)
			}), t
		}, W.qsa = function(t, e) {
			var n, i = "#" == e[0],
				r = !i && "." == e[0],
				o = i || r ? e.slice(1) : e,
				a = J.test(o);
			return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : L.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, S.contains = P.documentElement.contains ? function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for(; e && (e = e.parentNode);)
				if(e === t) return !0;
			return !1
		}, S.type = e, S.isFunction = n, S.isWindow = i, S.isArray = tt, S.isPlainObject = a, S.isEmptyObject = function(t) {
			var e;
			for(e in t) return !1;
			return !0
		}, S.isNumeric = function(t) {
			var e = Number(t),
				n = typeof t;
			return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
		}, S.inArray = function(t, e, n) {
			return $.indexOf.call(e, t, n)
		}, S.camelCase = _, S.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function() {}, S.map = function(t, e) {
			var n, i, r, o = [];
			if(s(t))
				for(i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
			else
				for(r in t) n = e(t[r], r), null != n && o.push(n);
			return u(o)
		}, S.each = function(t, e) {
			var n, i;
			if(s(t)) {
				for(n = 0; n < t.length; n++)
					if(e.call(t[n], n, t[n]) === !1) return t
			} else
				for(i in t)
					if(e.call(t[i], i, t[i]) === !1) return t; return t
		}, S.grep = function(t, e) {
			return O.call(t, e)
		}, t.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			X["[object " + e + "]"] = e.toLowerCase()
		}), S.fn = {
			constructor: W.Z,
			length: 0,
			forEach: $.forEach,
			reduce: $.reduce,
			push: $.push,
			sort: $.sort,
			splice: $.splice,
			indexOf: $.indexOf,
			concat: function() {
				var t, e, n = [];
				for(t = 0; t < arguments.length; t++) e = arguments[t], n[t] = W.isZ(e) ? e.toArray() : e;
				return k.apply(W.isZ(this) ? this.toArray() : this, n)
			},
			map: function(t) {
				return S(S.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return S(L.apply(this, arguments))
			},
			ready: function(t) {
				return U.test(P.readyState) && P.body ? t(S) : P.addEventListener("DOMContentLoaded", function() {
					t(S)
				}, !1), this
			},
			get: function(t) {
				return t === C ? L.call(this) : this[t >= 0 ? t : t + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return $.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return n(t) ? this.not(this.not(t)) : S(O.call(this, function(e) {
					return W.matches(e, t)
				}))
			},
			add: function(t, e) {
				return S(N(this.concat(S(t, e))))
			},
			is: function(t) {
				return this.length > 0 && W.matches(this[0], t)
			},
			not: function(t) {
				var e = [];
				if(n(t) && t.call !== C) this.each(function(n) {
					t.call(this, n) || e.push(this)
				});
				else {
					var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? L.call(t) : S(t);
					this.forEach(function(t) {
						i.indexOf(t) < 0 && e.push(t)
					})
				}
				return S(e)
			},
			has: function(t) {
				return this.filter(function() {
					return o(t) ? S.contains(this, t) : S(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !o(t) ? t : S(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !o(t) ? t : S(t)
			},
			find: function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? S(t).filter(function() {
					var t = this;
					return $.some.call(n, function(e) {
						return S.contains(e, t)
					})
				}) : 1 == this.length ? S(W.qsa(this[0], t)) : this.map(function() {
					return W.qsa(this, t)
				}) : S()
			},
			closest: function(t, e) {
				var n = [],
					i = "object" == typeof t && S(t);
				return this.each(function(o, a) {
					for(; a && !(i ? i.indexOf(a) >= 0 : W.matches(a, t));) a = a !== e && !r(a) && a.parentNode;
					a && n.indexOf(a) < 0 && n.push(a)
				}), S(n)
			},
			parents: function(t) {
				for(var e = [], n = this; n.length > 0;) n = S.map(n, function(t) {
					return(t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return v(e, t)
			},
			parent: function(t) {
				return v(N(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return v(this.map(function() {
					return p(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return this.contentDocument || L.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return v(this.map(function(t, e) {
					return O.call(p(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return S.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var e = n(t);
				if(this[0] && !e) var i = S(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(n) {
					S(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if(this[0]) {
					S(this[0]).before(t = S(t));
					for(var e;
						(e = t.children()).length;) t = e.first();
					S(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var e = n(t);
				return this.each(function(n) {
					var i = S(this),
						r = i.contents(),
						o = e ? t.call(this, n) : t;
					r.length ? r.wrapAll(o) : i.append(o)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					S(this).replaceWith(S(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(t) {
				return this.each(function() {
					var e = S(this);
					(t === C ? "none" == e.css("display") : t) ? e.show(): e.hide()
				})
			},
			prev: function(t) {
				return S(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return S(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = this.innerHTML;
					S(this).empty().append(y(this, t, e, n))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = y(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this.pluck("textContent").join("") : null
			},
			attr: function(t, e) {
				var n;
				return "string" != typeof t || 1 in arguments ? this.each(function(n) {
					if(1 === this.nodeType)
						if(o(t))
							for(T in t) b(this, T, t[T]);
						else b(this, t, y(this, e, n, this.getAttribute(t)))
				}) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : C
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						b(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = Q[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = y(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			removeProp: function(t) {
				return t = Q[t] || t, this.each(function() {
					delete this[t]
				})
			},
			data: function(t, e) {
				var n = "data-" + t.replace(R, "-$1").toLowerCase(),
					i = 1 in arguments ? this.attr(n, e) : this.attr(n);
				return null !== i ? w(i) : C
			},
			val: function(t) {
				return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
					this.value = y(this, t, e, this.value)
				})) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(e) {
				if(e) return this.each(function(t) {
					var n = S(this),
						i = y(this, e, t, n.offset()),
						r = n.offsetParent().offset(),
						o = {
							top: i.top - r.top,
							left: i.left - r.left
						};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
				if(!this.length) return null;
				if(P.documentElement !== this[0] && !S.contains(P.documentElement, this[0])) return {
					top: 0,
					left: 0
				};
				var n = this[0].getBoundingClientRect();
				return {
					left: n.left + t.pageXOffset,
					top: n.top + t.pageYOffset,
					width: Math.round(n.width),
					height: Math.round(n.height)
				}
			},
			css: function(t, n) {
				if(arguments.length < 2) {
					var i = this[0];
					if("string" == typeof t) {
						if(!i) return;
						return i.style[_(t)] || getComputedStyle(i, "").getPropertyValue(t)
					}
					if(tt(t)) {
						if(!i) return;
						var r = {},
							o = getComputedStyle(i, "");
						return S.each(t, function(t, e) {
							r[e] = i.style[_(e)] || o.getPropertyValue(e)
						}), r
					}
				}
				var a = "";
				if("string" == e(t)) n || 0 === n ? a = l(t) + ":" + h(t, n) : this.each(function() {
					this.style.removeProperty(l(t))
				});
				else
					for(T in t) t[T] || 0 === t[T] ? a += l(T) + ":" + h(T, t[T]) + ";" : this.each(function() {
						this.style.removeProperty(l(T))
					});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return !!t && $.some.call(this, function(t) {
					return this.test(x(t))
				}, f(t))
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if("className" in this) {
						j = [];
						var n = x(this),
							i = y(this, t, e, n);
						i.split(/\s+/g).forEach(function(t) {
							S(this).hasClass(t) || j.push(t)
						}, this), j.length && x(this, n + (n ? " " : "") + j.join(" "))
					}
				}) : this
			},
			removeClass: function(t) {
				return this.each(function(e) {
					if("className" in this) {
						if(t === C) return x(this, "");
						j = x(this), y(this, t, e, j).split(/\s+/g).forEach(function(t) {
							j = j.replace(f(t), " ")
						}), x(this, j.trim())
					}
				})
			},
			toggleClass: function(t, e) {
				return t ? this.each(function(n) {
					var i = S(this),
						r = y(this, t, n, x(this));
					r.split(/\s+/g).forEach(function(t) {
						(e === C ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
					})
				}) : this
			},
			scrollTop: function(t) {
				if(this.length) {
					var e = "scrollTop" in this[0];
					return t === C ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft: function(t) {
				if(this.length) {
					var e = "scrollLeft" in this[0];
					return t === C ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position: function() {
				if(this.length) {
					var t = this[0],
						e = this.offsetParent(),
						n = this.offset(),
						i = H.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, i.top += parseFloat(S(e[0]).css("border-top-width")) || 0, i.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
						top: n.top - i.top,
						left: n.left - i.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var t = this.offsetParent || P.body; t && !H.test(t.nodeName) && "static" == S(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			S.fn[t] = function(n) {
				var o, a = this[0];
				return n === C ? i(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
					a = S(this), a.css(t, y(this, n, e, a[t]()))
				})
			}
		}), K.forEach(function(n, i) {
			var r = i % 2;
			S.fn[n] = function() {
				var n, o, a = S.map(arguments, function(t) {
						var i = [];
						return n = e(t), "array" == n ? (t.forEach(function(t) {
							return t.nodeType !== C ? i.push(t) : S.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(W.fragment(t)))
						}), i) : "object" == n || null == t ? t : W.fragment(t)
					}),
					s = this.length > 1;
				return a.length < 1 ? this : this.each(function(e, n) {
					o = r ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
					var c = S.contains(P.documentElement, o);
					a.forEach(function(e) {
						if(s) e = e.cloneNode(!0);
						else if(!o) return S(e).remove();
						o.insertBefore(e, n), c && E(e, function(e) {
							if(!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
								var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
								n.eval.call(n, e.innerHTML)
							}
						})
					})
				})
			}, S.fn[r ? n + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
				return S(t)[n](this), this
			}
		}), W.Z.prototype = m.prototype = S.fn, W.uniq = N, W.deserializeValue = w, S.zepto = W, S
	}();
	return t.Zepto = e, void 0 === t.$ && (t.$ = e),
		function(e) {
			function n(t) {
				return t._zid || (t._zid = d++)
			}

			function i(t, e, i, a) {
				if(e = r(e), e.ns) var s = o(e.ns);
				return(v[n(t)] || []).filter(function(t) {
					return t && (!e.e || t.e == e.e) && (!e.ns || s.test(t.ns)) && (!i || n(t.fn) === n(i)) && (!a || t.sel == a)
				})
			}

			function r(t) {
				var e = ("" + t).split(".");
				return {
					e: e[0],
					ns: e.slice(1).sort().join(" ")
				}
			}

			function o(t) {
				return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
			}

			function a(t, e) {
				return t.del && !b && t.e in x || !!e
			}

			function s(t) {
				return w[t] || b && x[t] || t
			}

			function c(t, i, o, c, u, f, d) {
				var p = n(t),
					m = v[p] || (v[p] = []);
				i.split(/\s/).forEach(function(n) {
					if("ready" == n) return e(document).ready(o);
					var i = r(n);
					i.fn = o, i.sel = u, i.e in w && (o = function(t) {
						var n = t.relatedTarget;
						return !n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
					}), i.del = f;
					var p = f || o;
					i.proxy = function(e) {
						if(e = l(e), !e.isImmediatePropagationStopped()) {
							e.data = c;
							var n = p.apply(t, e._args == h ? [e] : [e].concat(e._args));
							return n === !1 && (e.preventDefault(), e.stopPropagation()), n
						}
					}, i.i = m.length, m.push(i), "addEventListener" in t && t.addEventListener(s(i.e), i.proxy, a(i, d))
				})
			}

			function u(t, e, r, o, c) {
				var u = n(t);
				(e || "").split(/\s/).forEach(function(e) {
					i(t, e, r, o).forEach(function(e) {
						delete v[u][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, c))
					})
				})
			}

			function l(t, n) {
				return(n || !t.isDefaultPrevented) && (n || (n = t), e.each(S, function(e, i) {
					var r = n[e];
					t[e] = function() {
						return this[i] = E, r && r.apply(n, arguments)
					}, t[i] = C
				}), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)), t
			}

			function f(t) {
				var e, n = {
					originalEvent: t
				};
				for(e in t) T.test(e) || t[e] === h || (n[e] = t[e]);
				return l(n, t)
			}
			var h, d = 1,
				p = Array.prototype.slice,
				m = e.isFunction,
				g = function(t) {
					return "string" == typeof t
				},
				v = {},
				y = {},
				b = "onfocusin" in t,
				x = {
					focus: "focusin",
					blur: "focusout"
				},
				w = {
					mouseenter: "mouseover",
					mouseleave: "mouseout"
				};
			y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = {
				add: c,
				remove: u
			}, e.proxy = function(t, i) {
				var r = 2 in arguments && p.call(arguments, 2);
				if(m(t)) {
					var o = function() {
						return t.apply(i, r ? r.concat(p.call(arguments)) : arguments)
					};
					return o._zid = n(t), o
				}
				if(g(i)) return r ? (r.unshift(t[i], t), e.proxy.apply(null, r)) : e.proxy(t[i], t);
				throw new TypeError("expected function")
			}, e.fn.bind = function(t, e, n) {
				return this.on(t, e, n)
			}, e.fn.unbind = function(t, e) {
				return this.off(t, e)
			}, e.fn.one = function(t, e, n, i) {
				return this.on(t, e, n, i, 1)
			};
			var E = function() {
					return !0
				},
				C = function() {
					return !1
				},
				T = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
				S = {
					preventDefault: "isDefaultPrevented",
					stopImmediatePropagation: "isImmediatePropagationStopped",
					stopPropagation: "isPropagationStopped"
				};
			e.fn.delegate = function(t, e, n) {
				return this.on(e, t, n)
			}, e.fn.undelegate = function(t, e, n) {
				return this.off(e, t, n)
			}, e.fn.live = function(t, n) {
				return e(document.body).delegate(this.selector, t, n), this
			}, e.fn.die = function(t, n) {
				return e(document.body).undelegate(this.selector, t, n), this
			}, e.fn.on = function(t, n, i, r, o) {
				var a, s, l = this;
				return t && !g(t) ? (e.each(t, function(t, e) {
					l.on(t, n, i, e, o)
				}), l) : (g(n) || m(r) || r === !1 || (r = i, i = n, n = h), (r === h || i === !1) && (r = i, i = h), r === !1 && (r = C), l.each(function(l, h) {
					o && (a = function(t) {
						return u(h, t.type, r), r.apply(this, arguments)
					}), n && (s = function(t) {
						var i, o = e(t.target).closest(n, h).get(0);
						return o && o !== h ? (i = e.extend(f(t), {
							currentTarget: o,
							liveFired: h
						}), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
					}), c(h, t, r, i, n, s || a)
				}))
			}, e.fn.off = function(t, n, i) {
				var r = this;
				return t && !g(t) ? (e.each(t, function(t, e) {
					r.off(t, n, e)
				}), r) : (g(n) || m(i) || i === !1 || (i = n, n = h), i === !1 && (i = C), r.each(function() {
					u(this, t, i, n)
				}))
			}, e.fn.trigger = function(t, n) {
				return t = g(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function() {
					t.type in x && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
				})
			}, e.fn.triggerHandler = function(t, n) {
				var r, o;
				return this.each(function(a, s) {
					r = f(g(t) ? e.Event(t) : t), r._args = n, r.target = s, e.each(i(s, t.type || t), function(t, e) {
						return o = e.proxy(r), !r.isImmediatePropagationStopped() && void 0
					})
				}), o
			}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
				e.fn[t] = function(e) {
					return 0 in arguments ? this.bind(t, e) : this.trigger(t)
				}
			}), e.Event = function(t, e) {
				g(t) || (e = t, t = e.type);
				var n = document.createEvent(y[t] || "Events"),
					i = !0;
				if(e)
					for(var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
				return n.initEvent(t, i, !0), l(n)
			}
		}(e),
		function(e) {
			function n(t, n, i) {
				var r = e.Event(n);
				return e(t).trigger(r, i), !r.isDefaultPrevented()
			}

			function i(t, e, i, r) {
				return t.global ? n(e || x, i, r) : void 0
			}

			function r(t) {
				t.global && 0 === e.active++ && i(t, null, "ajaxStart")
			}

			function o(t) {
				t.global && !--e.active && i(t, null, "ajaxStop")
			}

			function a(t, e) {
				var n = e.context;
				return e.beforeSend.call(n, t, e) !== !1 && i(e, n, "ajaxBeforeSend", [t, e]) !== !1 && void i(e, n, "ajaxSend", [t, e])
			}

			function s(t, e, n, r) {
				var o = n.context,
					a = "success";
				n.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), i(n, o, "ajaxSuccess", [e, n, t]), u(a, e, n)
			}

			function c(t, e, n, r, o) {
				var a = r.context;
				r.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), i(r, a, "ajaxError", [n, r, t || e]), u(e, n, r)
			}

			function u(t, e, n) {
				var r = n.context;
				n.complete.call(r, e, t), i(n, r, "ajaxComplete", [e, n]), o(n)
			}

			function l(t, e, n) {
				if(n.dataFilter == f) return t;
				var i = n.context;
				return n.dataFilter.call(i, t, e)
			}

			function f() {}

			function h(t) {
				return t && (t = t.split(";", 2)[0]), t && (t == S ? "html" : t == T ? "json" : E.test(t) ? "script" : C.test(t) && "xml") || "text"
			}

			function d(t, e) {
				return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
			}

			function p(t) {
				t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = d(t.url, t.data), t.data = void 0)
			}

			function m(t, n, i, r) {
				return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), {
					url: t,
					data: n,
					success: i,
					dataType: r
				}
			}

			function g(t, n, i, r) {
				var o, a = e.isArray(n),
					s = e.isPlainObject(n);
				e.each(n, function(n, c) {
					o = e.type(c), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? t.add(c.name, c.value) : "array" == o || !i && "object" == o ? g(t, c, i, n) : t.add(n, c)
				})
			}
			var v, y, b = +new Date,
				x = t.document,
				w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
				E = /^(?:text|application)\/javascript/i,
				C = /^(?:text|application)\/xml/i,
				T = "application/json",
				S = "text/html",
				j = /^\s*$/,
				_ = x.createElement("a");
			_.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, i) {
				if(!("type" in n)) return e.ajax(n);
				var r, o, u = n.jsonpCallback,
					l = (e.isFunction(u) ? u() : u) || "Zepto" + b++,
					f = x.createElement("script"),
					h = t[l],
					d = function(t) {
						e(f).triggerHandler("error", t || "abort")
					},
					p = {
						abort: d
					};
				return i && i.promise(p), e(f).on("load error", function(a, u) {
					clearTimeout(o), e(f).off().remove(), "error" != a.type && r ? s(r[0], p, n, i) : c(null, u || "error", p, n, i), t[l] = h, r && e.isFunction(h) && h(r[0]), h = r = void 0
				}), a(p, n) === !1 ? (d("abort"), p) : (t[l] = function() {
					r = arguments
				}, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), x.head.appendChild(f), n.timeout > 0 && (o = setTimeout(function() {
					d("timeout")
				}, n.timeout)), p)
			}, e.ajaxSettings = {
				type: "GET",
				beforeSend: f,
				success: f,
				error: f,
				complete: f,
				context: null,
				global: !0,
				xhr: function() {
					return new t.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript, application/x-javascript",
					json: T,
					xml: "application/xml, text/xml",
					html: S,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0,
				dataFilter: f
			}, e.ajax = function(n) {
				var i, o, u = e.extend({}, n || {}),
					m = e.Deferred && e.Deferred();
				for(v in e.ajaxSettings) void 0 === u[v] && (u[v] = e.ajaxSettings[v]);
				r(u), u.crossDomain || (i = x.createElement("a"), i.href = u.url, i.href = i.href, u.crossDomain = _.protocol + "//" + _.host != i.protocol + "//" + i.host), u.url || (u.url = t.location.toString()), (o = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, o)), p(u);
				var g = u.dataType,
					b = /\?.+=\?/.test(u.url);
				if(b && (g = "jsonp"), u.cache !== !1 && (n && n.cache === !0 || "script" != g && "jsonp" != g) || (u.url = d(u.url, "_=" + Date.now())), "jsonp" == g) return b || (u.url = d(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(u, m);
				var w, E = u.accepts[g],
					C = {},
					T = function(t, e) {
						C[t.toLowerCase()] = [t, e]
					},
					S = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : t.location.protocol,
					N = u.xhr(),
					$ = N.setRequestHeader;
				if(m && m.promise(N), u.crossDomain || T("X-Requested-With", "XMLHttpRequest"), T("Accept", E || "*/*"), (E = u.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(E)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && T("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)
					for(y in u.headers) T(y, u.headers[y]);
				if(N.setRequestHeader = T, N.onreadystatechange = function() {
						if(4 == N.readyState) {
							N.onreadystatechange = f, clearTimeout(w);
							var t, n = !1;
							if(N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == S) {
								if(g = g || h(u.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response;
								else {
									t = N.responseText;
									try {
										t = l(t, g, u), "script" == g ? (0, eval)(t) : "xml" == g ? t = N.responseXML : "json" == g && (t = j.test(t) ? null : e.parseJSON(t))
									} catch(t) {
										n = t
									}
									if(n) return c(n, "parsererror", N, u, m)
								}
								s(t, N, u, m)
							} else c(N.statusText || null, N.status ? "error" : "abort", N, u, m)
						}
					}, a(N, u) === !1) return N.abort(), c(null, "abort", N, u, m), N;
				var k = !("async" in u) || u.async;
				if(N.open(u.type, u.url, k, u.username, u.password), u.xhrFields)
					for(y in u.xhrFields) N[y] = u.xhrFields[y];
				for(y in C) $.apply(N, C[y]);
				return u.timeout > 0 && (w = setTimeout(function() {
					N.onreadystatechange = f, N.abort(), c(null, "timeout", N, u, m)
				}, u.timeout)), N.send(u.data ? u.data : null), N
			}, e.get = function() {
				return e.ajax(m.apply(null, arguments))
			}, e.post = function() {
				var t = m.apply(null, arguments);
				return t.type = "POST", e.ajax(t)
			}, e.getJSON = function() {
				var t = m.apply(null, arguments);
				return t.dataType = "json", e.ajax(t)
			}, e.fn.load = function(t, n, i) {
				if(!this.length) return this;
				var r, o = this,
					a = t.split(/\s/),
					s = m(t, n, i),
					c = s.success;
				return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(t) {
					o.html(r ? e("<div>").html(t.replace(w, "")).find(r) : t), c && c.apply(o, arguments)
				}, e.ajax(s), this
			};
			var N = encodeURIComponent;
			e.param = function(t, n) {
				var i = [];
				return i.add = function(t, n) {
					e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n))
				}, g(i, t, n), i.join("&").replace(/%20/g, "+")
			}
		}(e),
		function(t) {
			t.fn.serializeArray = function() {
				var e, n, i = [],
					r = function(t) {
						return t.forEach ? t.forEach(r) : void i.push({
							name: e,
							value: t
						})
					};
				return this[0] && t.each(this[0].elements, function(i, o) {
					n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
				}), i
			}, t.fn.serialize = function() {
				var t = [];
				return this.serializeArray().forEach(function(e) {
					t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
				}), t.join("&")
			}, t.fn.submit = function(e) {
				if(0 in arguments) this.bind("submit", e);
				else if(this.length) {
					var n = t.Event("submit");
					this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
				}
				return this
			}
		}(e),
		function() {
			try {
				getComputedStyle(void 0)
			} catch(n) {
				var e = getComputedStyle;
				t.getComputedStyle = function(t, n) {
					try {
						return e(t, n)
					} catch(t) {
						return null
					}
				}
			}
		}(), e
}),
function(t, e, n) {
	function i(t) {
		this.opts = n.extend(!0, {}, r, t), this.doing = !1, this.init()
	}
	var r = {
		rotateNum: 5,
		body: "",
		disabledHandler: function() {},
		clickCallback: function() {},
		KinerLotteryHandler: function(t) {}
	};
	i.prototype.setOpts = function(t) {
		this.opts = n.extend(!0, {}, r, t), this.init()
	}, i.prototype.init = function() {
		var t = this;
		this.defNum = 360 * this.opts.rotateNum, n("body").on("click", ".KinerLotteryBtn", function() {
			if(n(this).hasClass("start") && !t.doing) t.opts.clickCallback.call(t);
			else {
				var e = n(this).hasClass("no-start") ? "noStart" : n(this).hasClass("completed") ? "completed" : "illegal";
				t.opts.disabledHandler(e)
			}
		}), n(this.opts.body).find(".KinerLotteryContent").get(0).addEventListener("webkitTransitionEnd", function() {
			t.doing = !1;
			var e = parseInt(n(t.opts.body).attr("data-deg"));
			0 == t.opts.direction ? n(t.opts.body).find(".KinerLotteryContent").css({
				"-webkit-transition": "none",
				transition: "none",
				"-webkit-transform": "rotate(" + e + "deg) translateZ(0)",
				transform: "rotate(" + e + "deg) translateZ(0)"
			}) : n(t.opts.body).find(".KinerLotteryContent").css({
				"-webkit-transition": "none",
				transition: "none",
				"-webkit-transform": "rotate(" + -e + "deg) translateZ(0)",
				transform: "rotate(" + -e + "deg) translateZ(0)"
			}), n(t.opts.body).attr("data-deg", e), t.opts.KinerLotteryHandler(e)
		})
	}, i.prototype.goKinerLottery = function(t) {
		if(!this.doing) {
			var e = t + this.defNum,
				i = 0 == this.opts.direction ? e : -e;
			this.doing = !0, n(this.opts.body).find(".KinerLotteryBtn").addClass("doing"), n(this.opts.body).find(".KinerLotteryContent").css({
				"-webkit-transition": "all 5s",
				transition: "all 5s",
				"-webkit-transform": "rotate(" + i + "deg) translateZ(0)",
				transform: "rotate(" + i + "deg) translateZ(0)"
			}), n(this.opts.body).attr("data-deg", t)
		}
	}, t.KinerLottery = i
}(window, document, $), $(function() {
	var t = navigator.userAgent.toLowerCase();
	$(".wrap").on("click", "a", function() {
		t.match(/alipay/i) && ($(this).removeAttr("href"), t.match(/android/i) ? ($(".wechat_tip").attr("class", "wechat_tip android"), $(".wechat_tip span").html("在浏览器中打开")) : ($(".wechat_tip").attr("class", "wechat_tip ios"), $(".wechat_tip span").html("在Safari中打开")), $(".wechat_tip").show())
	}), $(".wrap").on("click", ".wechat_tip", function() {
		$(this).hide()
	})
}), $(function() {
	setInterval(function() {
		var t = $(".slide_show li:first-child").height() + parseInt($(".slide_show li:first-child").css("margin-bottom"));
		$(".slide_show").attr("style", "-webkit-transform:translate3d(0,-" + t + "px,0);transform:translate3d(0,-" + t + "px,0);-webkit-transition:all 1s;transition:all 1s;");
		var e = function() {
			$(".slide_show")[0].removeEventListener("webkitTransitionEnd", e), $(".slide_show").attr("style", "-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);");
			var t = $(".slide_show li:first-child");
			$(".slide_show").append(t)
		};
		$(".slide_show")[0].addEventListener("webkitTransitionEnd", e)
	}, 1500)
});
var envConfig = {
		env: "prod",
		count: "",
		landing: "",
		imgHost: "img/20170928/"
	},
	_qStr = {};
if(location.search.indexOf("?") != -1) {
	var str = location.search.substr(1);
	strs = str.split("&");
	for(var i = 0; i < strs.length; i++) {
		var arr = strs[i].split("=");
		_qStr[arr[0]] = decodeURI(arr[1])
	}
}
if(!localStorage.sessionid) {
	$.get(envConfig.count + "/channel/get/session?pid=" + _qStr.pid + "&extend=" + _qStr.extend,function(res){
		res = JSON.parse(res);
		localStorage.sessionid = res.data.sessionid;
	})
}
var eid = _qStr.extend || 0,
	pid = _qStr.pid || 0;
$(function() {
	$(".wrap").on("click", ".download", function() {
		var t = (new Date).getTime(),
		e = {
			ad_load_time_start: window.ti_start,
			ad_load_time_end: t,
			extend_id: eid,
			user_session_id: localStorage.sessionid
		};
		var postUrl = "/channel/addata/download?ad_load_time_start=" + window.ti_start + "&ad_load_time_end=" + t + "&extend_id=" + eid + "&user_session_id=" +localStorage.sessionid;
		for(var i in _qStr){
			postUrl += "&" + i + "=" + _qStr[i];
		}
		$.each(_qStr, function(t, n) {
			"extend" != t && "pid" != t && (e[t] = n)
		}),$.get(envConfig.count + postUrl,function(t){
			"0000" == t.code && (localStorage.uuid = t.data.uuid)
		});
		document.location.href = decodeURIComponent(_qStr.downloadUrl).replace("*****",".");
	})
}), window.onload = function() {
	var t = (new Date).getTime(),
		e = {
			ad_load_time_start: window.ti_start,
			ad_load_time_end: t,
			extend_id: eid,
			user_session_id: localStorage.sessionid
		};
	var postUrl = "/channel/addata/view?ad_load_time_start=" + window.ti_start + "&ad_load_time_end=" + t + "&extend_id=" + eid + "&user_session_id=" +localStorage.sessionid;
	for(var i in _qStr){
		postUrl += "&" + i + "=" + _qStr[i];
	}
	$.each(_qStr, function(t, n) {
		"extend" != t && "pid" != t && (e[t] = n)
	}),$.get(envConfig.count + postUrl,function(t){
		"0000" == t.code && (localStorage.uuid = t.data.uuid)
	})
};
var _hmt = _hmt || [];
! function() {
}();
var tsE = "webkitTransitionEnd";
$(function() {
	$(".wrap").on("click", ".pop_win .close", function() {
		$(".pop_win").hide()
	})
});
var load = {
		rotateFn: function(t) {
			return goodsObj[t]
		},
		resetFun: function() {
			$(".turntable_box .KinerLotteryBtn").addClass("start"), $(".pop_win").hide()
		},
		rnd: function(t, e) {
			var n = Math.floor(Math.random() * (e - t + 1) + t);
			return n
		}
	},
	KinerLottery = new KinerLottery({
		rotateNum: 8,
		body: ".turntable_box",
		direction: 0,
		clickCallback: function() {
			var t = [30, 90, 150, 210, 270, 330],
				e = load.rnd(0, t.length - 1);
			this.goKinerLottery(t[e])
		},
		KinerLotteryHandler: function(t) {
			var e = load.rotateFn(t);
			$(".pop_win").show(), $(".pop_win .text em").html("0元拍" + e.itemT), $(".pop_win img").attr("src", envConfig.imgHost + e.Image)
		}
	});