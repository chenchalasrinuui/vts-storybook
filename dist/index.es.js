import je from "react";
function ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, ee = {};
var ye;
function Ie() {
  if (ye) return ee;
  ye = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(l, d, u) {
    var _ = null;
    if (u !== void 0 && (_ = "" + u), d.key !== void 0 && (_ = "" + d.key), "key" in d) {
      u = {};
      for (var v in d)
        v !== "key" && (u[v] = d[v]);
    } else u = d;
    return d = u.ref, {
      $$typeof: t,
      type: l,
      key: _,
      ref: d !== void 0 ? d : null,
      props: u
    };
  }
  return ee.Fragment = b, ee.jsx = y, ee.jsxs = y, ee;
}
var re = {};
var me;
function $e() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case z:
          return "Profiler";
        case M:
          return "StrictMode";
        case F:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case j:
            return "Portal";
          case k:
            return e.displayName || "Context";
          case I:
            return (e._context.displayName || "Context") + ".Consumer";
          case a:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return n = e.displayName || null, n !== null ? n : t(e.type) || "Memo";
          case U:
            n = e._payload, e = e._init;
            try {
              return t(e(n));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function y(e) {
      try {
        b(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), b(e);
      }
    }
    function l(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === U)
        return "<...>";
      try {
        var n = t(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var e = V.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (G.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, n) {
      function s() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function P() {
      var e = t(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function O(e, n, s, i, h, p) {
      var c = s.ref;
      return e = {
        $$typeof: $,
        type: e,
        key: n,
        props: s,
        _owner: i
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: P
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, n, s, i, h, p) {
      var c = n.children;
      if (c !== void 0)
        if (i)
          if (W(c)) {
            for (i = 0; i < c.length; i++)
              R(c[i]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(c);
      if (G.call(n, "key")) {
        c = t(e);
        var m = Object.keys(n).filter(function(E) {
          return E !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", r[c + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          c,
          m,
          c
        ), r[c + i] = !0);
      }
      if (c = null, s !== void 0 && (y(s), c = "" + s), _(n) && (y(n.key), c = "" + n.key), "key" in n) {
        s = {};
        for (var g in n)
          g !== "key" && (s[g] = n[g]);
      } else s = n;
      return c && v(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        c,
        s,
        d(),
        h,
        p
      );
    }
    function R(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === U && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === $;
    }
    var w = je, $ = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.client.reference"), V = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, W = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, q = {}, B = w.react_stack_bottom_frame.bind(
      w,
      u
    )(), X = J(l(u)), r = {};
    re.Fragment = C, re.jsx = function(e, n, s) {
      var i = 1e4 > V.recentlyCreatedOwnerStacks++;
      return T(
        e,
        n,
        s,
        !1,
        i ? Error("react-stack-top-frame") : B,
        i ? J(l(e)) : X
      );
    }, re.jsxs = function(e, n, s) {
      var i = 1e4 > V.recentlyCreatedOwnerStacks++;
      return T(
        e,
        n,
        s,
        !0,
        i ? Error("react-stack-top-frame") : B,
        i ? J(l(e)) : X
      );
    };
  })()), re;
}
var he;
function Me() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ne.exports = Ie() : ne.exports = $e()), ne.exports;
}
var f = Me(), oe = { exports: {} }, ae = { exports: {} }, x = {};
var be;
function Ye() {
  if (be) return x;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, b = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, y = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, l = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, d = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, _ = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, v = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, P = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, O = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, T = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, R = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, A = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, w = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, $ = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, M = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, z = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function I(a) {
    if (typeof a == "object" && a !== null) {
      var F = a.$$typeof;
      switch (F) {
        case b:
          switch (a = a.type, a) {
            case P:
            case O:
            case l:
            case u:
            case d:
            case R:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case v:
                case T:
                case $:
                case w:
                case _:
                  return a;
                default:
                  return F;
              }
          }
        case y:
          return F;
      }
    }
  }
  function k(a) {
    return I(a) === O;
  }
  return x.AsyncMode = P, x.ConcurrentMode = O, x.ContextConsumer = v, x.ContextProvider = _, x.Element = b, x.ForwardRef = T, x.Fragment = l, x.Lazy = $, x.Memo = w, x.Portal = y, x.Profiler = u, x.StrictMode = d, x.Suspense = R, x.isAsyncMode = function(a) {
    return k(a) || I(a) === P;
  }, x.isConcurrentMode = k, x.isContextConsumer = function(a) {
    return I(a) === v;
  }, x.isContextProvider = function(a) {
    return I(a) === _;
  }, x.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === b;
  }, x.isForwardRef = function(a) {
    return I(a) === T;
  }, x.isFragment = function(a) {
    return I(a) === l;
  }, x.isLazy = function(a) {
    return I(a) === $;
  }, x.isMemo = function(a) {
    return I(a) === w;
  }, x.isPortal = function(a) {
    return I(a) === y;
  }, x.isProfiler = function(a) {
    return I(a) === u;
  }, x.isStrictMode = function(a) {
    return I(a) === d;
  }, x.isSuspense = function(a) {
    return I(a) === R;
  }, x.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === l || a === O || a === u || a === d || a === R || a === A || typeof a == "object" && a !== null && (a.$$typeof === $ || a.$$typeof === w || a.$$typeof === _ || a.$$typeof === v || a.$$typeof === T || a.$$typeof === C || a.$$typeof === M || a.$$typeof === z || a.$$typeof === j);
  }, x.typeOf = I, x;
}
var S = {};
var Ee;
function Ne() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, b = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, y = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, l = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, d = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, _ = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, v = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, P = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, O = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, T = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, R = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, A = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, w = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, $ = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, M = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, z = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function I(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === l || o === O || o === u || o === d || o === R || o === A || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === w || o.$$typeof === _ || o.$$typeof === v || o.$$typeof === T || o.$$typeof === C || o.$$typeof === M || o.$$typeof === z || o.$$typeof === j);
    }
    function k(o) {
      if (typeof o == "object" && o !== null) {
        var D = o.$$typeof;
        switch (D) {
          case b:
            var te = o.type;
            switch (te) {
              case P:
              case O:
              case l:
              case u:
              case d:
              case R:
                return te;
              default:
                var ve = te && te.$$typeof;
                switch (ve) {
                  case v:
                  case T:
                  case $:
                  case w:
                  case _:
                    return ve;
                  default:
                    return D;
                }
            }
          case y:
            return D;
        }
      }
    }
    var a = P, F = O, Z = v, Q = _, U = b, K = T, H = l, V = $, G = w, W = y, J = u, N = d, q = R, B = !1;
    function X(o) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(o) || k(o) === P;
    }
    function r(o) {
      return k(o) === O;
    }
    function e(o) {
      return k(o) === v;
    }
    function n(o) {
      return k(o) === _;
    }
    function s(o) {
      return typeof o == "object" && o !== null && o.$$typeof === b;
    }
    function i(o) {
      return k(o) === T;
    }
    function h(o) {
      return k(o) === l;
    }
    function p(o) {
      return k(o) === $;
    }
    function c(o) {
      return k(o) === w;
    }
    function m(o) {
      return k(o) === y;
    }
    function g(o) {
      return k(o) === u;
    }
    function E(o) {
      return k(o) === d;
    }
    function Y(o) {
      return k(o) === R;
    }
    S.AsyncMode = a, S.ConcurrentMode = F, S.ContextConsumer = Z, S.ContextProvider = Q, S.Element = U, S.ForwardRef = K, S.Fragment = H, S.Lazy = V, S.Memo = G, S.Portal = W, S.Profiler = J, S.StrictMode = N, S.Suspense = q, S.isAsyncMode = X, S.isConcurrentMode = r, S.isContextConsumer = e, S.isContextProvider = n, S.isElement = s, S.isForwardRef = i, S.isFragment = h, S.isLazy = p, S.isMemo = c, S.isPortal = m, S.isProfiler = g, S.isStrictMode = E, S.isSuspense = Y, S.isValidElementType = I, S.typeOf = k;
  })()), S;
}
var Te;
function we() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Ye() : ae.exports = Ne()), ae.exports;
}
var se, ge;
function qe() {
  if (ge) return se;
  ge = 1;
  var t = Object.getOwnPropertySymbols, b = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function l(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var _ = {}, v = 0; v < 10; v++)
        _["_" + String.fromCharCode(v)] = v;
      var P = Object.getOwnPropertyNames(_).map(function(T) {
        return _[T];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        O[T] = T;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return se = d() ? Object.assign : function(u, _) {
    for (var v, P = l(u), O, T = 1; T < arguments.length; T++) {
      v = Object(arguments[T]);
      for (var R in v)
        b.call(v, R) && (P[R] = v[R]);
      if (t) {
        O = t(v);
        for (var A = 0; A < O.length; A++)
          y.call(v, O[A]) && (P[O[A]] = v[O[A]]);
      }
    }
    return P;
  }, se;
}
var ce, _e;
function pe() {
  if (_e) return ce;
  _e = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = t, ce;
}
var ue, Re;
function Ae() {
  return Re || (Re = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var fe, xe;
function De() {
  if (xe) return fe;
  xe = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var b = /* @__PURE__ */ pe(), y = {}, l = /* @__PURE__ */ Ae();
    t = function(u) {
      var _ = "Warning: " + u;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function d(u, _, v, P, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in u)
        if (l(u, T)) {
          var R;
          try {
            if (typeof u[T] != "function") {
              var A = Error(
                (P || "React class") + ": " + v + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            R = u[T](_, T, P, v, null, b);
          } catch ($) {
            R = $;
          }
          if (R && !(R instanceof Error) && t(
            (P || "React class") + ": type specification of " + v + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in y)) {
            y[R.message] = !0;
            var w = O ? O() : "";
            t(
              "Failed " + v + " type: " + R.message + (w ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, fe = d, fe;
}
var le, Se;
function Le() {
  if (Se) return le;
  Se = 1;
  var t = we(), b = qe(), y = /* @__PURE__ */ pe(), l = /* @__PURE__ */ Ae(), d = /* @__PURE__ */ De(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(v) {
    var P = "Warning: " + v;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function _() {
    return null;
  }
  return le = function(v, P) {
    var O = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function R(r) {
      var e = r && (O && r[O] || r[T]);
      if (typeof e == "function")
        return e;
    }
    var A = "<<anonymous>>", w = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: z(),
      arrayOf: I,
      element: k(),
      elementType: a(),
      instanceOf: F,
      node: K(),
      objectOf: Q,
      oneOf: Z,
      oneOfType: U,
      shape: V,
      exact: G
    };
    function $(r, e) {
      return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
    }
    function j(r, e) {
      this.message = r, this.data = e && typeof e == "object" ? e : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function C(r) {
      if (process.env.NODE_ENV !== "production")
        var e = {}, n = 0;
      function s(h, p, c, m, g, E, Y) {
        if (m = m || A, E = E || c, Y !== y) {
          if (P) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = m + ":" + c;
            !e[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            n < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + m + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), e[D] = !0, n++);
          }
        }
        return p[c] == null ? h ? p[c] === null ? new j("The " + g + " `" + E + "` is marked as required " + ("in `" + m + "`, but its value is `null`.")) : new j("The " + g + " `" + E + "` is marked as required in " + ("`" + m + "`, but its value is `undefined`.")) : null : r(p, c, m, g, E);
      }
      var i = s.bind(null, !1);
      return i.isRequired = s.bind(null, !0), i;
    }
    function M(r) {
      function e(n, s, i, h, p, c) {
        var m = n[s], g = N(m);
        if (g !== r) {
          var E = q(m);
          return new j(
            "Invalid " + h + " `" + p + "` of type " + ("`" + E + "` supplied to `" + i + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return C(e);
    }
    function z() {
      return C(_);
    }
    function I(r) {
      function e(n, s, i, h, p) {
        if (typeof r != "function")
          return new j("Property `" + p + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var c = n[s];
        if (!Array.isArray(c)) {
          var m = N(c);
          return new j("Invalid " + h + " `" + p + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected an array."));
        }
        for (var g = 0; g < c.length; g++) {
          var E = r(c, g, i, h, p + "[" + g + "]", y);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return C(e);
    }
    function k() {
      function r(e, n, s, i, h) {
        var p = e[n];
        if (!v(p)) {
          var c = N(p);
          return new j("Invalid " + i + " `" + h + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(r);
    }
    function a() {
      function r(e, n, s, i, h) {
        var p = e[n];
        if (!t.isValidElementType(p)) {
          var c = N(p);
          return new j("Invalid " + i + " `" + h + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(r);
    }
    function F(r) {
      function e(n, s, i, h, p) {
        if (!(n[s] instanceof r)) {
          var c = r.name || A, m = X(n[s]);
          return new j("Invalid " + h + " `" + p + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected ") + ("instance of `" + c + "`."));
        }
        return null;
      }
      return C(e);
    }
    function Z(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), _;
      function e(n, s, i, h, p) {
        for (var c = n[s], m = 0; m < r.length; m++)
          if ($(c, r[m]))
            return null;
        var g = JSON.stringify(r, function(Y, o) {
          var D = q(o);
          return D === "symbol" ? String(o) : o;
        });
        return new j("Invalid " + h + " `" + p + "` of value `" + String(c) + "` " + ("supplied to `" + i + "`, expected one of " + g + "."));
      }
      return C(e);
    }
    function Q(r) {
      function e(n, s, i, h, p) {
        if (typeof r != "function")
          return new j("Property `" + p + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var c = n[s], m = N(c);
        if (m !== "object")
          return new j("Invalid " + h + " `" + p + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected an object."));
        for (var g in c)
          if (l(c, g)) {
            var E = r(c, g, i, h, p + "." + g, y);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return C(e);
    }
    function U(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var e = 0; e < r.length; e++) {
        var n = r[e];
        if (typeof n != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(n) + " at index " + e + "."
          ), _;
      }
      function s(i, h, p, c, m) {
        for (var g = [], E = 0; E < r.length; E++) {
          var Y = r[E], o = Y(i, h, p, c, m, y);
          if (o == null)
            return null;
          o.data && l(o.data, "expectedType") && g.push(o.data.expectedType);
        }
        var D = g.length > 0 ? ", expected one of type [" + g.join(", ") + "]" : "";
        return new j("Invalid " + c + " `" + m + "` supplied to " + ("`" + p + "`" + D + "."));
      }
      return C(s);
    }
    function K() {
      function r(e, n, s, i, h) {
        return W(e[n]) ? null : new j("Invalid " + i + " `" + h + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return C(r);
    }
    function H(r, e, n, s, i) {
      return new j(
        (r || "React class") + ": " + e + " type `" + n + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function V(r) {
      function e(n, s, i, h, p) {
        var c = n[s], m = N(c);
        if (m !== "object")
          return new j("Invalid " + h + " `" + p + "` of type `" + m + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var g in r) {
          var E = r[g];
          if (typeof E != "function")
            return H(i, h, p, g, q(E));
          var Y = E(c, g, i, h, p + "." + g, y);
          if (Y)
            return Y;
        }
        return null;
      }
      return C(e);
    }
    function G(r) {
      function e(n, s, i, h, p) {
        var c = n[s], m = N(c);
        if (m !== "object")
          return new j("Invalid " + h + " `" + p + "` of type `" + m + "` " + ("supplied to `" + i + "`, expected `object`."));
        var g = b({}, n[s], r);
        for (var E in g) {
          var Y = r[E];
          if (l(r, E) && typeof Y != "function")
            return H(i, h, p, E, q(Y));
          if (!Y)
            return new j(
              "Invalid " + h + " `" + p + "` key `" + E + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(n[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var o = Y(c, E, i, h, p + "." + E, y);
          if (o)
            return o;
        }
        return null;
      }
      return C(e);
    }
    function W(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(W);
          if (r === null || v(r))
            return !0;
          var e = R(r);
          if (e) {
            var n = e.call(r), s;
            if (e !== r.entries) {
              for (; !(s = n.next()).done; )
                if (!W(s.value))
                  return !1;
            } else
              for (; !(s = n.next()).done; ) {
                var i = s.value;
                if (i && !W(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(r, e) {
      return r === "symbol" ? !0 : e ? e["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && e instanceof Symbol : !1;
    }
    function N(r) {
      var e = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : J(e, r) ? "symbol" : e;
    }
    function q(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var e = N(r);
      if (e === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return e;
    }
    function B(r) {
      var e = q(r);
      switch (e) {
        case "array":
        case "object":
          return "an " + e;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + e;
        default:
          return e;
      }
    }
    function X(r) {
      return !r.constructor || !r.constructor.name ? A : r.constructor.name;
    }
    return w.checkPropTypes = d, w.resetWarningCache = d.resetWarningCache, w.PropTypes = w, w;
  }, le;
}
var de, Oe;
function Fe() {
  if (Oe) return de;
  Oe = 1;
  var t = /* @__PURE__ */ pe();
  function b() {
  }
  function y() {
  }
  return y.resetWarningCache = b, de = function() {
    function l(_, v, P, O, T, R) {
      if (R !== t) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    l.isRequired = l;
    function d() {
      return l;
    }
    var u = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: d,
      element: l,
      elementType: l,
      instanceOf: d,
      node: l,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: y,
      resetWarningCache: b
    };
    return u.PropTypes = u, u;
  }, de;
}
var Pe;
function We() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = we(), b = !0;
    oe.exports = /* @__PURE__ */ Le()(t.isElement, b);
  } else
    oe.exports = /* @__PURE__ */ Fe()();
  return oe.exports;
}
var ze = /* @__PURE__ */ We();
const L = /* @__PURE__ */ ke(ze), ie = ({
  primary: t = !1,
  backgroundColor: b = null,
  size: y = "medium",
  label: l,
  ...d
}) => {
  const u = t ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${y}`, u].join(" "),
      style: b && { backgroundColor: b },
      ...d,
      children: l
    }
  );
};
ie.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: L.bool,
  /** What background color to use */
  backgroundColor: L.string,
  /** How large should the button be? */
  size: L.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: L.string.isRequired,
  /** Optional click handler */
  onClick: L.func
};
const Ce = ({ user: t = null, onLogin: b, onLogout: y, onCreateAccount: l }) => /* @__PURE__ */ f.jsx("header", { children: /* @__PURE__ */ f.jsxs("div", { className: "storybook-header", children: [
  /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f.jsxs("g", { fill: "none", fillRule: "evenodd", children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
          fill: "#FFF"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
          fill: "#555AB9"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
          fill: "#91BAF8"
        }
      )
    ] }) }),
    /* @__PURE__ */ f.jsx("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ f.jsx("div", { children: t ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ f.jsx("b", { children: t.name }),
      "!"
    ] }),
    /* @__PURE__ */ f.jsx(ie, { size: "small", onClick: y, label: "Log out" })
  ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(ie, { size: "small", onClick: b, label: "Log in" }),
    /* @__PURE__ */ f.jsx(ie, { primary: !0, size: "small", onClick: l, label: "Sign up" })
  ] }) })
] }) });
Ce.propTypes = {
  user: L.shape({
    name: L.string.isRequired
  }),
  onLogin: L.func.isRequired,
  onLogout: L.func.isRequired,
  onCreateAccount: L.func.isRequired
};
const Ve = () => {
  const [t, b] = je.useState();
  return /* @__PURE__ */ f.jsxs("article", { children: [
    /* @__PURE__ */ f.jsx(
      Ce,
      {
        user: t,
        onLogin: () => b({ name: "Jane Doe" }),
        onLogout: () => b(void 0),
        onCreateAccount: () => b({ name: "Jane Doe" })
      }
    ),
    /* @__PURE__ */ f.jsxs("section", { className: "storybook-page", children: [
      /* @__PURE__ */ f.jsx("h2", { children: "Pages in Storybook" }),
      /* @__PURE__ */ f.jsxs("p", { children: [
        "We recommend building UIs with a",
        " ",
        /* @__PURE__ */ f.jsx("a", { href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ f.jsx("strong", { children: "component-driven" }) }),
        " ",
        "process starting with atomic components and ending with pages."
      ] }),
      /* @__PURE__ */ f.jsx("p", { children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:" }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsx("li", { children: 'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories' }),
        /* @__PURE__ */ f.jsx("li", { children: "Assemble data in the page component from your services. You can mock these services out using Storybook." })
      ] }),
      /* @__PURE__ */ f.jsxs("p", { children: [
        "Get a guided tutorial on component-driven development at",
        " ",
        /* @__PURE__ */ f.jsx("a", { href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer", children: "Storybook tutorials" }),
        ". Read more in the",
        " ",
        /* @__PURE__ */ f.jsx("a", { href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer", children: "docs" }),
        "."
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "tip-wrapper", children: [
        /* @__PURE__ */ f.jsx("span", { className: "tip", children: "Tip" }),
        " Adjust the width of the canvas with the",
        " ",
        /* @__PURE__ */ f.jsx("svg", { width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f.jsx("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ f.jsx(
          "path",
          {
            d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
            id: "a",
            fill: "#999"
          }
        ) }) }),
        "Viewports addon in the toolbar"
      ] })
    ] })
  ] });
}, Je = ({ columns: t, data: b }) => /* @__PURE__ */ f.jsxs("table", { className: "table table-bordered table-hover", children: [
  /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsx("tr", { children: t.map((y, l) => /* @__PURE__ */ f.jsx("th", { children: y.header }, l)) }) }),
  /* @__PURE__ */ f.jsx("tbody", { children: b.length ? b.map((y, l) => /* @__PURE__ */ f.jsx("tr", { children: t.map((d, u) => /* @__PURE__ */ f.jsx("td", { children: d.render ? d.render(y[d.accessor], y) : y[d.accessor] }, u)) }, l)) : /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: t.length, className: "text-center", children: "No data available" }) }) })
] });
export {
  ie as Button,
  Ce as Header,
  Ve as Page,
  Je as Table
};
