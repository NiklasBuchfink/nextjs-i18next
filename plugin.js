var Ye = Object.create;
var me = Object.defineProperty;
var et = Object.getOwnPropertyDescriptor;
var tt = Object.getOwnPropertyNames;
var nt = Object.getPrototypeOf,
  rt = Object.prototype.hasOwnProperty;
var ye = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var it = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of tt(t))
      !rt.call(e, i) &&
        i !== n &&
        me(e, i, {
          get: () => t[i],
          enumerable: !(r = et(t, i)) || r.enumerable,
        });
  return e;
};
var ve = (e, t, n) => (
  (n = e != undefined ? Ye(nt(e)) : {}),
  it(
    t || !e || !e.__esModule
      ? me(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var Te = ye((dn, We) => {
  "use strict";
  function s(e) {
    if (!(this instanceof s)) return new s(e);
    this._ = e;
  }
  var f = s.prototype;
  function xe(e, t) {
    var n = 0;
    for (n; n < e; n++) t(n);
  }
  function ot(e, t) {
    xe(t.length, function (n) {
      e(t[n], n, t);
    });
  }
  function L(e, t, n) {
    return (
      ot(function (r, i, o) {
        t = e(t, r, i, o);
      }, n),
      t
    );
  }
  function j(e, t) {
    return L(
      function (n, r, i, o) {
        return [...n, e(r, i, o)];
      },
      [],
      t
    );
  }
  function at(e) {
    var t = L(
      function (n, r, i, o) {
        return n.concat(
          i === o.length - 1
            ? Buffer.from([r, 0]).readUInt16BE(0)
            : o.readUInt16BE(i)
        );
      },
      [],
      e
    );
    return Buffer.from(
      j(function (n) {
        return ((n << 1) & 65535) >> 8;
      }, t)
    );
  }
  function st(e, t) {
    var n = { v: 0, buf: t };
    return (
      xe(e, function () {
        n = { v: (n.v << 1) | ut(n.buf), buf: at(n.buf) };
      }),
      n
    );
  }
  function ut(e) {
    return e[0] >> 7;
  }
  function ft(e) {
    return L(
      function (t, n) {
        return t + n;
      },
      0,
      e
    );
  }
  function ct(e, t) {
    return L(
      function (n, r) {
        return n || (e(r) ? r : n);
      },
      null,
      t
    );
  }
  function Pe() {
    return typeof Buffer < "u";
  }
  function lt() {
    if (s._supportsSet !== void 0) return s._supportsSet;
    var e = typeof Set < "u";
    return (s._supportsSet = e), e;
  }
  function Z() {
    if (!Pe())
      throw new Error(
        "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
      );
  }
  function Se(e) {
    Z();
    var t = ft(e);
    if (t % 8 !== 0)
      throw new Error(
        "The bits [" +
          e.join(", ") +
          "] add up to " +
          t +
          " which is not an even number of bytes; the total should be divisible by 8"
      );
    var n = t / 8,
      r = ct(function (i) {
        return i > 48;
      }, e);
    if (r)
      throw new Error(
        r + " bit range requested exceeds 48 bit (6 byte) Number max."
      );
    return new s(function (i, o) {
      var a = n + o;
      return a > i.length
        ? b(o, n.toString() + " bytes")
        : m(
            a,
            L(
              function (u, c) {
                var l = st(c, u.buf);
                return { coll: u.coll.concat(l.v), buf: l.buf };
              },
              { coll: [], buf: i.slice(o, a) },
              e
            ).coll
          );
    });
  }
  function gt(e) {
    Z();
    var t = {},
      n = 0,
      r = j(function (a) {
        if (I(a)) {
          var u = a;
          if (u.length !== 2)
            throw new Error(
              "[" +
                u.join(", ") +
                "] should be length 2, got length " +
                u.length
            );
          if ((F(u[0]), _(u[1]), Object.prototype.hasOwnProperty.call(t, u[0])))
            throw new Error("duplicate key in bitSeqObj: " + u[0]);
          return (t[u[0]] = !0), n++, u;
        } else return _(a), [null, a];
      }, e);
    if (n < 1)
      throw new Error(
        "bitSeqObj expects at least one named pair, got [" + e.join(", ") + "]"
      );
    var i = j(function (a) {
        return a[0];
      }, r),
      o = j(function (a) {
        return a[1];
      }, r);
    return Se(o).map(function (a) {
      var u = j(function (c, l) {
        return [c, a[l]];
      }, i);
      return L(
        function (c, l) {
          return l[0] !== null && (c[l[0]] = l[1]), c;
        },
        {},
        u
      );
    });
  }
  function E(e, t) {
    return new s(function (n, r) {
      return (
        Z(),
        r + t > n.length
          ? b(r, t + " bytes for " + e)
          : m(r + t, n.slice(r, r + t))
      );
    });
  }
  function pt(e) {
    return E("buffer", e).map(function (t) {
      return Buffer.from(t);
    });
  }
  function dt(e, t) {
    return E("string", t).map(function (n) {
      return n.toString(e);
    });
  }
  function ht(e) {
    return typeof e == "number" && Math.floor(e) === e;
  }
  function X(e, t) {
    if (!ht(t) || t < 0 || t > 6)
      throw new Error(e + " requires integer length in range [0, 6].");
  }
  function K(e) {
    return (
      X("uintBE", e),
      E("uintBE(" + e + ")", e).map(function (t) {
        return t.readUIntBE(0, e);
      })
    );
  }
  function z(e) {
    return (
      X("uintLE", e),
      E("uintLE(" + e + ")", e).map(function (t) {
        return t.readUIntLE(0, e);
      })
    );
  }
  function U(e) {
    return (
      X("intBE", e),
      E("intBE(" + e + ")", e).map(function (t) {
        return t.readIntBE(0, e);
      })
    );
  }
  function J(e) {
    return (
      X("intLE", e),
      E("intLE(" + e + ")", e).map(function (t) {
        return t.readIntLE(0, e);
      })
    );
  }
  function mt() {
    return E("floatBE", 4).map(function (e) {
      return e.readFloatBE(0);
    });
  }
  function yt() {
    return E("floatLE", 4).map(function (e) {
      return e.readFloatLE(0);
    });
  }
  function vt() {
    return E("doubleBE", 8).map(function (e) {
      return e.readDoubleBE(0);
    });
  }
  function bt() {
    return E("doubleLE", 8).map(function (e) {
      return e.readDoubleLE(0);
    });
  }
  function wt(e) {
    return Array.prototype.slice.call(e);
  }
  function M(e) {
    return e instanceof s;
  }
  function I(e) {
    return {}.toString.call(e) === "[object Array]";
  }
  function N(e) {
    return Pe() && Buffer.isBuffer(e);
  }
  function m(e, t) {
    return { status: !0, index: e, value: t, furthest: -1, expected: [] };
  }
  function b(e, t) {
    return (
      I(t) || (t = [t]),
      { status: !1, index: -1, value: null, furthest: e, expected: t }
    );
  }
  function w(e, t) {
    if (!t || e.furthest > t.furthest) return e;
    var n = e.furthest === t.furthest ? Et(e.expected, t.expected) : t.expected;
    return {
      status: e.status,
      index: e.index,
      value: e.value,
      furthest: t.furthest,
      expected: n,
    };
  }
  var G = {};
  function je(e, t) {
    if (N(e)) return { offset: t, line: -1, column: -1 };
    e in G || (G[e] = {});
    for (var n = G[e], r = 0, i = 0, o = 0, a = t; a >= 0; ) {
      if (a in n) {
        (r = n[a].line), o === 0 && (o = n[a].lineStart);
        break;
      }
      (e.charAt(a) ===
        `
` ||
        (e.charAt(a) === "\r" &&
          e.charAt(a + 1) !==
            `
`)) &&
        (i++, o === 0 && (o = a + 1)),
        a--;
    }
    var u = r + i,
      c = t - o;
    return (
      (n[t] = { line: u, lineStart: o }),
      { offset: t, line: u + 1, column: c + 1 }
    );
  }
  function Et(e, t) {
    if (lt() && Array.from) {
      for (var n = new Set(e), r = 0; r < t.length; r++) n.add(t[r]);
      var i = [...n];
      return i.sort(), i;
    }
    for (var o = {}, a = 0; a < e.length; a++) o[e[a]] = !0;
    for (var u = 0; u < t.length; u++) o[t[u]] = !0;
    var c = [];
    for (var l in o) ({}).hasOwnProperty.call(o, l) && c.push(l);
    return c.sort(), c;
  }
  function k(e) {
    if (!M(e)) throw new Error("not a parser: " + e);
  }
  function Y(e, t) {
    return typeof e == "string" ? e.charAt(t) : e[t];
  }
  function xt(e) {
    if (!I(e)) throw new Error("not an array: " + e);
  }
  function _(e) {
    if (typeof e != "number") throw new Error("not a number: " + e);
  }
  function Pt(e) {
    if (!(e instanceof RegExp)) throw new Error("not a regexp: " + e);
    for (var t = Oe(e), n = 0; n < t.length; n++) {
      var r = t.charAt(n);
      if (r !== "i" && r !== "m" && r !== "u" && r !== "s")
        throw new Error('unsupported regexp flag "' + r + '": ' + e);
    }
  }
  function O(e) {
    if (typeof e != "function") throw new Error("not a function: " + e);
  }
  function F(e) {
    if (typeof e != "string") throw new Error("not a string: " + e);
  }
  var St = 2,
    jt = 3,
    B = 8,
    Bt = B * 5,
    Ot = B * 4,
    we = "  ";
  function Q(e, t) {
    return new Array(t + 1).join(e);
  }
  function Lt(e) {
    return e.length === 1
      ? `Expected:

` + e[0]
      : `Expected one of the following:

` + e.join(", ");
  }
  function V(e, t, n) {
    var r = t - e.length;
    return r <= 0 ? e : Q(n, r) + e;
  }
  function $t(e, t) {
    var n = e.length,
      r = [],
      i = 0;
    if (n <= t) return [[...e]];
    for (var o = 0; o < n; o++)
      r[i] || r.push([]), r[i].push(e[o]), (o + 1) % t === 0 && i++;
    return r;
  }
  function Ee(e, t, n, r) {
    return { from: e - t > 0 ? e - t : 0, to: e + n > r ? r : e + n };
  }
  function Rt(e) {
    return e.from === 0 && e.to === 1
      ? { from: e.from, to: e.to }
      : { from: e.from / B, to: Math.floor(e.to / B) };
  }
  function At(e, t) {
    var n = t.index,
      r = n.offset,
      i = 1,
      o,
      a,
      u,
      c,
      l;
    if (r === e.length) return "Got the end of the input";
    if (N(e)) {
      var g = r - (r % B),
        p = r - g,
        d = Ee(g, Bt, Ot + B, e.length),
        y = e.slice(d.from, d.to),
        v = $t(y.toJSON().data, B),
        A = j(function (S) {
          return j(function (se) {
            return V(se.toString(16), 2, "0");
          }, S);
        }, v);
      (c = Rt(d)),
        (a = g / B),
        (o = p * 3),
        p >= 4 && (o += 1),
        (i = 2),
        (u = j(function (S) {
          return S.length <= 4
            ? S.join(" ")
            : S.slice(0, 4).join(" ") + "  " + S.slice(4).join(" ");
        }, A)),
        (l = ((c.to > 0 ? c.to - 1 : c.to) * 8).toString(16).length),
        l < 2 && (l = 2);
    } else {
      var P = e.split(/\r\n|[\n\r\u2028\u2029]/);
      (o = n.column - 1),
        (a = n.line - 1),
        (c = Ee(a, St, jt, P.length)),
        (u = P.slice(c.from, c.to)),
        (l = c.to.toString().length);
    }
    var He = a - c.from;
    N(e) &&
      ((l = ((c.to > 0 ? c.to - 1 : c.to) * 8).toString(16).length),
      l < 2 && (l = 2));
    var Ze = L(
      function (S, se, ue) {
        var he = ue === He,
          Xe = he ? "> " : we,
          fe;
        return (
          N(e)
            ? (fe = V(((c.from + ue) * 8).toString(16), l, "0"))
            : (fe = V((c.from + ue + 1).toString(), l, " ")),
          [].concat(
            S,
            [Xe + fe + " | " + se],
            he ? [we + Q(" ", l) + " | " + V("", o, " ") + Q("^", i)] : []
          )
        );
      },
      [],
      u
    );
    return Ze.join(`
`);
  }
  function Be(e, t) {
    return [
      `
`,
      "-- PARSING FAILED " + Q("-", 50),
      `

`,
      At(e, t),
      `

`,
      Lt(t.expected),
      `
`,
    ].join("");
  }
  function Oe(e) {
    return e.flags !== void 0
      ? e.flags
      : [
          e.global ? "g" : "",
          e.ignoreCase ? "i" : "",
          e.multiline ? "m" : "",
          e.unicode ? "u" : "",
          e.sticky ? "y" : "",
        ].join("");
  }
  function It(e) {
    return RegExp("^(?:" + e.source + ")", Oe(e));
  }
  function ee() {
    for (var e = [].slice.call(arguments), t = e.length, n = 0; n < t; n += 1)
      k(e[n]);
    return s(function (r, i) {
      for (var o, a = new Array(t), u = 0; u < t; u += 1) {
        if (((o = w(e[u]._(r, i), o)), !o.status)) return o;
        (a[u] = o.value), (i = o.index);
      }
      return w(m(i, a), o);
    });
  }
  function kt() {
    for (
      var e = {}, t = 0, n = wt(arguments), r = n.length, i = 0;
      i < r;
      i += 1
    ) {
      var o = n[i];
      if (!M(o)) {
        if (I(o)) {
          var a = o.length === 2 && typeof o[0] == "string" && M(o[1]);
          if (a) {
            var u = o[0];
            if (Object.prototype.hasOwnProperty.call(e, u))
              throw new Error("seqObj: duplicate key " + u);
            (e[u] = !0), t++;
            continue;
          }
        }
        throw new Error(
          "seqObj arguments must be parsers or [string, parser] array pairs."
        );
      }
    }
    if (t === 0)
      throw new Error("seqObj expects at least one named parser, found zero");
    return s(function (c, l) {
      for (var g, p = {}, d = 0; d < r; d += 1) {
        var y, v;
        if (
          (I(n[d]) ? ((y = n[d][0]), (v = n[d][1])) : ((y = null), (v = n[d])),
          (g = w(v._(c, l), g)),
          !g.status)
        )
          return g;
        y && (p[y] = g.value), (l = g.index);
      }
      return w(m(l, p), g);
    });
  }
  function $() {
    var e = [].slice.call(arguments);
    if (e.length === 0) throw new Error("seqMap needs at least one argument");
    var t = e.pop();
    return (
      O(t),
      ee.apply(null, e).map(function (n) {
        return t.apply(null, n);
      })
    );
  }
  function _t(e) {
    var t = {};
    for (var n in e)
      ({}).hasOwnProperty.call(e, n) &&
        (function (r) {
          var i = function () {
            return e[r](t);
          };
          t[r] = Re(i);
        })(n);
    return t;
  }
  function te() {
    var e = [].slice.call(arguments),
      t = e.length;
    if (t === 0) return ne("zero alternates");
    for (var n = 0; n < t; n += 1) k(e[n]);
    return s(function (r, i) {
      for (var o, a = 0; a < e.length; a += 1)
        if (((o = w(e[a]._(r, i), o)), o.status)) return o;
      return o;
    });
  }
  function Le(e, t) {
    return le(e, t).or(R([]));
  }
  function le(e, t) {
    k(e), k(t);
    var n = t.then(e).many();
    return $(e, n, function (r, i) {
      return [r].concat(i);
    });
  }
  f.parse = function (e) {
    if (typeof e != "string" && !N(e))
      throw new Error(
        ".parse must be called with a string or Buffer as its argument"
      );
    var t = this.skip(pe)._(e, 0),
      n;
    return (
      t.status
        ? (n = { status: !0, value: t.value })
        : (n = { status: !1, index: je(e, t.furthest), expected: t.expected }),
      delete G[e],
      n
    );
  };
  f.tryParse = function (e) {
    var t = this.parse(e);
    if (t.status) return t.value;
    var n = Be(e, t),
      r = new Error(n);
    throw ((r.type = "ParsimmonError"), (r.result = t), r);
  };
  f.assert = function (e, t) {
    return this.chain(function (n) {
      return e(n) ? R(n) : ne(t);
    });
  };
  f.or = function (e) {
    return te(this, e);
  };
  f.trim = function (e) {
    return this.wrap(e, e);
  };
  f.wrap = function (e, t) {
    return $(e, this, t, function (n, r) {
      return r;
    });
  };
  f.thru = function (e) {
    return e(this);
  };
  f.then = function (e) {
    return (
      k(e),
      ee(this, e).map(function (t) {
        return t[1];
      })
    );
  };
  f.many = function () {
    var e = this;
    return s(function (t, n) {
      for (var r = [], i = void 0; ; )
        if (((i = w(e._(t, n), i)), i.status)) {
          if (n === i.index)
            throw new Error(
              "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
            );
          (n = i.index), r.push(i.value);
        } else return w(m(n, r), i);
    });
  };
  f.tieWith = function (e) {
    return (
      F(e),
      this.map(function (t) {
        if ((xt(t), t.length)) {
          F(t[0]);
          for (var n = t[0], r = 1; r < t.length; r++) F(t[r]), (n += e + t[r]);
          return n;
        } else return "";
      })
    );
  };
  f.tie = function () {
    return this.tieWith("");
  };
  f.times = function (e, t) {
    var n = this;
    return (
      arguments.length < 2 && (t = e),
      _(e),
      _(t),
      s(function (r, i) {
        for (var o = [], a = void 0, u = void 0, c = 0; c < e; c += 1)
          if (((a = n._(r, i)), (u = w(a, u)), a.status))
            (i = a.index), o.push(a.value);
          else return u;
        for (; c < t && ((a = n._(r, i)), (u = w(a, u)), a.status); c += 1)
          (i = a.index), o.push(a.value);
        return w(m(i, o), u);
      })
    );
  };
  f.result = function (e) {
    return this.map(function () {
      return e;
    });
  };
  f.atMost = function (e) {
    return this.times(0, e);
  };
  f.atLeast = function (e) {
    return $(this.times(e), this.many(), function (t, n) {
      return t.concat(n);
    });
  };
  f.map = function (e) {
    O(e);
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      return i.status ? w(m(i.index, e(i.value)), i) : i;
    });
  };
  f.contramap = function (e) {
    O(e);
    var t = this;
    return s(function (n, r) {
      var i = t.parse(e(n.slice(r)));
      return i.status ? m(r + n.length, i.value) : i;
    });
  };
  f.promap = function (e, t) {
    return O(e), O(t), this.contramap(e).map(t);
  };
  f.skip = function (e) {
    return ee(this, e).map(function (t) {
      return t[0];
    });
  };
  f.mark = function () {
    return $(q, this, q, function (e, t, n) {
      return { start: e, value: t, end: n };
    });
  };
  f.node = function (e) {
    return $(q, this, q, function (t, n, r) {
      return { name: e, value: n, start: t, end: r };
    });
  };
  f.sepBy = function (e) {
    return Le(this, e);
  };
  f.sepBy1 = function (e) {
    return le(this, e);
  };
  f.lookahead = function (e) {
    return this.skip(H(e));
  };
  f.notFollowedBy = function (e) {
    return this.skip($e(e));
  };
  f.desc = function (e) {
    I(e) || (e = [e]);
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      return i.status || (i.expected = e), i;
    });
  };
  f.fallback = function (e) {
    return this.or(R(e));
  };
  f.ap = function (e) {
    return $(e, this, function (t, n) {
      return t(n);
    });
  };
  f.chain = function (e) {
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      if (!i.status) return i;
      var o = e(i.value);
      return w(o._(n, i.index), i);
    });
  };
  function C(e) {
    F(e);
    var t = "'" + e + "'";
    return s(function (n, r) {
      var i = r + e.length,
        o = n.slice(r, i);
      return o === e ? m(i, o) : b(r, t);
    });
  }
  function Wt(e) {
    if ((Z(), _(e), e > 255))
      throw new Error(
        "Value specified to byte constructor (" +
          e +
          "=0x" +
          e.toString(16) +
          ") is larger in value than a single byte."
      );
    var t = (e > 15 ? "0x" : "0x0") + e.toString(16);
    return s(function (n, r) {
      var i = Y(n, r);
      return i === e ? m(r + 1, i) : b(r, t);
    });
  }
  function x(e, t) {
    Pt(e), arguments.length >= 2 ? _(t) : (t = 0);
    var n = It(e),
      r = "" + e;
    return s(function (i, o) {
      var a = n.exec(i.slice(o));
      if (a) {
        if (0 <= t && t <= a.length) {
          var u = a[0],
            c = a[t];
          return m(o + u.length, c);
        }
        var l = "valid match group (0 to " + a.length + ") in " + r;
        return b(o, l);
      }
      return b(o, r);
    });
  }
  function R(e) {
    return s(function (t, n) {
      return m(n, e);
    });
  }
  function ne(e) {
    return s(function (t, n) {
      return b(n, e);
    });
  }
  function H(e) {
    if (M(e))
      return s(function (t, n) {
        var r = e._(t, n);
        return (r.index = n), (r.value = ""), r;
      });
    if (typeof e == "string") return H(C(e));
    if (e instanceof RegExp) return H(x(e));
    throw new Error("not a string, regexp, or parser: " + e);
  }
  function $e(e) {
    return (
      k(e),
      s(function (t, n) {
        var r = e._(t, n),
          i = t.slice(n, r.index);
        return r.status ? b(n, 'not "' + i + '"') : m(n, null);
      })
    );
  }
  function re(e) {
    return (
      O(e),
      s(function (t, n) {
        var r = Y(t, n);
        return n < t.length && e(r)
          ? m(n + 1, r)
          : b(n, "a character/byte matching " + e);
      })
    );
  }
  function Tt(e) {
    for (var t = e.split(""), n = 0; n < t.length; n++) t[n] = "'" + t[n] + "'";
    return re(function (r) {
      return e.includes(r);
    }).desc(t);
  }
  function Nt(e) {
    return re(function (t) {
      return !e.includes(t);
    }).desc("none of '" + e + "'");
  }
  function Ft(e) {
    return s(e(m, b));
  }
  function Mt(e, t) {
    return re(function (n) {
      return e <= n && n <= t;
    }).desc(e + "-" + t);
  }
  function qt(e) {
    return (
      O(e),
      s(function (t, n) {
        for (var r = n; r < t.length && e(Y(t, r)); ) r++;
        return m(r, t.slice(n, r));
      })
    );
  }
  function Re(e, t) {
    arguments.length < 2 && ((t = e), (e = void 0));
    var n = s(function (r, i) {
      return (n._ = t()._), n._(r, i);
    });
    return e ? n.desc(e) : n;
  }
  function ge() {
    return ne("fantasy-land/empty");
  }
  f.concat = f.or;
  f.empty = ge;
  f.of = R;
  f["fantasy-land/ap"] = f.ap;
  f["fantasy-land/chain"] = f.chain;
  f["fantasy-land/concat"] = f.concat;
  f["fantasy-land/empty"] = f.empty;
  f["fantasy-land/of"] = f.of;
  f["fantasy-land/map"] = f.map;
  var q = s(function (e, t) {
      return m(t, je(e, t));
    }),
    Ct = s(function (e, t) {
      return t >= e.length ? b(t, "any character/byte") : m(t + 1, Y(e, t));
    }),
    Dt = s(function (e, t) {
      return m(e.length, e.slice(t));
    }),
    pe = s(function (e, t) {
      return t < e.length ? b(t, "EOF") : m(t, null);
    }),
    Kt = x(/[0-9]/).desc("a digit"),
    zt = x(/[0-9]*/).desc("optional digits"),
    Ut = x(/[a-z]/i).desc("a letter"),
    Jt = x(/[a-z]*/i).desc("optional letters"),
    Vt = x(/\s*/).desc("optional whitespace"),
    Gt = x(/\s+/).desc("whitespace"),
    Ae = C("\r"),
    Ie = C(`
`),
    ke = C(`\r
`),
    _e = te(ke, Ie, Ae).desc("newline"),
    Qt = te(_e, pe);
  s.all = Dt;
  s.alt = te;
  s.any = Ct;
  s.cr = Ae;
  s.createLanguage = _t;
  s.crlf = ke;
  s.custom = Ft;
  s.digit = Kt;
  s.digits = zt;
  s.empty = ge;
  s.end = Qt;
  s.eof = pe;
  s.fail = ne;
  s.formatError = Be;
  s.index = q;
  s.isParser = M;
  s.lazy = Re;
  s.letter = Ut;
  s.letters = Jt;
  s.lf = Ie;
  s.lookahead = H;
  s.makeFailure = b;
  s.makeSuccess = m;
  s.newline = _e;
  s.noneOf = Nt;
  s.notFollowedBy = $e;
  s.of = R;
  s.oneOf = Tt;
  s.optWhitespace = Vt;
  s.Parser = s;
  s.range = Mt;
  s.regex = x;
  s.regexp = x;
  s.sepBy = Le;
  s.sepBy1 = le;
  s.seq = ee;
  s.seqMap = $;
  s.seqObj = kt;
  s.string = C;
  s.succeed = R;
  s.takeWhile = qt;
  s.test = re;
  s.whitespace = Gt;
  s["fantasy-land/empty"] = ge;
  s["fantasy-land/of"] = R;
  s.Binary = {
    bitSeq: Se,
    bitSeqObj: gt,
    byte: Wt,
    buffer: pt,
    encodedString: dt,
    uintBE: K,
    uint8BE: K(1),
    uint16BE: K(2),
    uint32BE: K(4),
    uintLE: z,
    uint8LE: z(1),
    uint16LE: z(2),
    uint32LE: z(4),
    intBE: U,
    int8BE: U(1),
    int16BE: U(2),
    int32BE: U(4),
    intLE: J,
    int8LE: J(1),
    int16LE: J(2),
    int32LE: J(4),
    floatBE: mt(),
    floatLE: yt(),
    doubleBE: vt(),
    doubleLE: bt(),
  };
  We.exports = s;
});
var Ke = ye((vn, De) => {
  De.exports = D;
  D.flatten = D;
  D.unflatten = Ce;
  function Me(e) {
    return (
      e &&
      e.constructor &&
      typeof e.constructor.isBuffer == "function" &&
      e.constructor.isBuffer(e)
    );
  }
  function qe(e) {
    return e;
  }
  function D(e, t) {
    t = t || {};
    let n = t.delimiter || ".",
      r = t.maxDepth,
      i = t.transformKey || qe,
      o = {};
    function a(u, c, l) {
      (l = l || 1),
        Object.keys(u).forEach(function (g) {
          let p = u[g],
            d = t.safe && Array.isArray(p),
            y = Object.prototype.toString.call(p),
            v = Me(p),
            A = y === "[object Object]" || y === "[object Array]",
            P = c ? c + n + i(g) : i(g);
          if (!d && !v && A && Object.keys(p).length && (!t.maxDepth || l < r))
            return a(p, P, l + 1);
          o[P] = p;
        });
    }
    return a(e), o;
  }
  function Ce(e, t) {
    t = t || {};
    let n = t.delimiter || ".",
      r = t.overwrite || !1,
      i = t.transformKey || qe,
      o = {};
    if (Me(e) || Object.prototype.toString.call(e) !== "[object Object]")
      return e;
    function u(g) {
      let p = Number(g);
      return isNaN(p) || g.includes(".") || t.object ? g : p;
    }
    function c(g, p, d) {
      return Object.keys(d).reduce(function (y, v) {
        return (y[g + n + v] = d[v]), y;
      }, p);
    }
    function l(g) {
      let p = Object.prototype.toString.call(g),
        d = p === "[object Array]",
        y = p === "[object Object]";
      if (g) {
        if (d) return !g.length;
        if (y) return !Object.keys(g).length;
      } else return !0;
    }
    return (
      (e = Object.keys(e).reduce(function (g, p) {
        let d = Object.prototype.toString.call(e[p]);
        return !(d === "[object Object]" || d === "[object Array]") || l(e[p])
          ? ((g[p] = e[p]), g)
          : c(p, g, D(e[p], t));
      }, {})),
      Object.keys(e).forEach(function (g) {
        let p = g.split(n).map(i),
          d = u(p.shift()),
          y = u(p[0]),
          v = o;
        for (; y !== void 0; ) {
          if (d === "__proto__") return;
          let A = Object.prototype.toString.call(v[d]),
            P = A === "[object Object]" || A === "[object Array]";
          if (!r && !P && typeof v[d] < "u") return;
          ((r && !P) || (!r && v[d] == undefined)) &&
            (v[d] = typeof y == "number" && !t.object ? [] : {}),
            (v = v[d]),
            p.length > 0 && ((d = u(p.shift())), (y = u(p[0])));
        }
        v[d] = Ce(e[g], t);
      }),
      o
    );
  }
});
function ce(e) {
  return (t) => (n) => e({ settings: t, env: n });
}
function be(e) {
  if (typeof e.pathPattern == "string") {
    if (e.pathPattern.includes("{language}") === !1)
      throw new Error(
        "The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'."
      );
    if (e.pathPattern.endsWith(".json") === !1)
      throw new Error(
        "The pathPattern setting must end with '.json'. An example would be './resources/{language}.json'."
      );
  } else
    for (let [t, n] of Object.entries(e.pathPattern)) {
      if (n === void 0 || n.includes("{language}") === !1)
        throw new Error(
          "The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'."
        );
      if (n.endsWith(".json") === !1)
        throw new Error(
          "The pathPattern setting must end with '.json'. An example would be './resources/{language}.json'."
        );
      if (t.includes("."))
        throw new Error(
          "A prefix of pathPattern includes an '.'. Use a string without dot notations. An example would be 'common'."
        );
    }
}
var h = ve(Te(), 1),
  Ht = (e) =>
    h.default.createLanguage({
      entry: (t) =>
        h.default
          .alt(t.FunctionCall, h.default.any)
          .many()
          .map((n) => n.filter((r) => typeof r == "object")),
      stringLiteral: (t) =>
        h.default.alt(t.doubleQuotedString, t.singleQuotedString),
      doubleQuotedString: () =>
        h.default
          .string('"')
          .then(h.default.regex(/[^"]*/))
          .skip(h.default.string('"')),
      singleQuotedString: () =>
        h.default
          .string("'")
          .then(h.default.regex(/[^']*/))
          .skip(h.default.string("'")),
      whitespace: () => h.default.optWhitespace,
      colon: (t) => h.default.string(":").trim(t.whitespace),
      comma: (t) => h.default.string(",").trim(t.whitespace),
      nsValue: (t) =>
        h.default
          .seq(
            t.whitespace,
            h.default.string("ns").trim(t.whitespace).skip(t.colon),
            t.stringLiteral.trim(t.whitespace)
          )
          .map(([, , n]) => `${n}`),
      FunctionCall: function (t) {
        return h.default.seqMap(
          h.default.regex(/[^a-zA-Z0-9]/),
          h.default.string("t"),
          h.default.string("("),
          h.default.index,
          t.stringLiteral,
          h.default.index,
          h.default.regex(/[^)]*/),
          h.default.string(")"),
          (n, r, i, o, a, u, c) => {
            let g = t.comma
              .then(h.default.string("{"))
              .trim(t.whitespace)
              .then(t.nsValue)
              .skip(h.default.string("}"))
              .skip(h.default.regex(/[^)]*/))
              .trim(t.whitespace)
              .parse(c).value;
            return (
              typeof e.pathPattern == "object" &&
                (g
                  ? (a = g + ":" + a)
                  : a.includes(":") ||
                    (a = Object.keys(e.pathPattern)[0] + ":" + a)),
              {
                messageId: a,
                position: {
                  start: { line: o.line, character: o.column },
                  end: { line: u.line, character: u.column },
                },
              }
            );
          }
        );
      },
    });
function Ne(e, t) {
  try {
    return Ht(t).entry.tryParse(e);
  } catch {
    return [];
  }
}
var Fe = (e) => ({
  messageReferenceMatchers: [async (t) => Ne(t.documentText, e)],
  extractMessageOptions: [{ callback: (t) => `{t("${t}")}` }],
  documentSelectors: [
    { language: "javascript" },
    { language: "typescript" },
    { language: "svelte" },
  ],
});
var ae = ve(Ke(), 1);
var ze = (e) => {
    let t = JSON.parse(e);
    if (e !== "{}") {
      for (let n of Object.values(t)) if (typeof n == "object") return !0;
      return !1;
    }
  },
  Ue = (e) => {
    let t = [
      { spacing: 1, regex: /^{\n {1}[^ ]+.*$/m },
      { spacing: 2, regex: /^{\n {2}[^ ]+.*$/m },
      { spacing: 3, regex: /^{\n {3}[^ ]+.*$/m },
      { spacing: 4, regex: /^{\n {4}[^ ]+.*$/m },
      { spacing: 6, regex: /^{\n {6}[^ ]+.*$/m },
      { spacing: 8, regex: /^{\n {8}[^ ]+.*$/m },
      { spacing: "	", regex: /^{\n\t[^ ]+.*$/m },
    ];
    for (let { spacing: n, regex: r } of t) if (r.test(e)) return n;
  };
function W(e, t, n) {
  return e.replace(new RegExp(Zt(t), "g"), n);
}
function Zt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var ie = {},
  T = {},
  de = {};
function Je() {
  let e = Object.values(ie);
  return (
    e
      .sort(
        (t, n) =>
          e.filter((r) => r === t).length - e.filter((r) => r === n).length
      )
      .pop() ?? 2
  );
}
function oe() {
  let e = Object.values(T);
  return (
    e
      .sort(
        (t, n) =>
          e.filter((r) => r === t).length - e.filter((r) => r === n).length
      )
      .pop() ?? !1
  );
}
var Xt = ce(({ settings: e, env: t }) => ({
  id: "inlang.plugin-i18next",
  async config() {
    be(e);
    let n = { variableReferencePattern: ["{{", "}}"], ignore: [], ...e };
    return {
      languages: await Yt({ $fs: t.$fs, settings: n }),
      readResources: (r) => en({ ...r, $fs: t.$fs, settings: n }),
      writeResources: (r) => rn({ ...r, $fs: t.$fs, settings: n }),
      ideExtension: Fe(n),
    };
  },
}));
async function Yt(e) {
  let t = [];
  if (typeof e.settings.pathPattern != "string")
    for (let n of Object.values(e.settings.pathPattern)) {
      let [r] = n.split("{language}"),
        i = await e.$fs.readdir(r);
      for (let o of i)
        (await Promise.resolve(
          e.$fs
            .readFile(n.replace("{language}", o))
            .then(() => !0)
            .catch(() => !1)
        )) && t.push(o);
    }
  else {
    let [n] = e.settings.pathPattern.split("{language}"),
      r = await e.$fs.readdir(n);
    for (let i of r)
      i.endsWith(".json") &&
        e.settings.ignore?.some((o) => o === i) === !1 &&
        t.push(i.replace(".json", ""));
  }
  return [...new Set(t)];
}
async function en(e) {
  let t = [];
  for (let n of e.config.languages) {
    let r = {
      type: "Resource",
      languageTag: { type: "LanguageTag", name: n },
      body: [],
    };
    if (typeof e.settings.pathPattern != "string")
      for (let [i, o] of Object.entries(e.settings.pathPattern)) {
        let a = await Ve(o, n, e.$fs);
        a &&
          (r.body = [
            ...r.body,
            ...Ge(
              a,
              e.settings.variableReferencePattern,
              T[o.replace("{language}", n)] ?? oe(),
              i
            ),
          ]);
      }
    else {
      let i = await Ve(e.settings.pathPattern, n, e.$fs);
      r.body = [
        ...r.body,
        ...Ge(
          i,
          e.settings.variableReferencePattern,
          T[e.settings.pathPattern.replace("{language}", n)] ?? oe()
        ),
      ];
    }
    t.push(r);
  }
  return t;
}
async function Ve(e, t, n) {
  let r = e.replace("{language}", t);
  try {
    let i = await n.readFile(r, { encoding: "utf-8" });
    return (
      (ie[r] = Ue(i)),
      (T[r] = ze(i)),
      (de[r] = i.endsWith(`
`)),
      JSON.parse(i)
    );
  } catch (i) {
    if (i.code === "FileNotFound" || i.code === "ENOENT") return;
    throw i;
  }
}
function Ge(e, t, n, r) {
  let i = n
    ? (0, ae.flatten)(e, {
        transformKey: function (o) {
          return W(o, ".", "u002E");
        },
      })
    : e;
  return i !== void 0 ? Object.entries(i).map((o) => tn(o[0], o[1], t, r)) : [];
}
function tn(e, t, n, r) {
  return {
    type: "Message",
    id: {
      type: "Identifier",
      name: r ? r + ":" + W(e, "u002E", ".") : W(e, "u002E", "."),
    },
    pattern: nn(t, n),
  };
}
function nn(e, t) {
  let n = t[1]
    ? new RegExp(`(\\${t[0]}[^\\${t[1]}]+\\${t[1]})`, "g")
    : new RegExp(`(${t}\\w+)`, "g");
  return {
    type: "Pattern",
    elements: e
      .split(n)
      .filter((i) => i !== "")
      .map((i) =>
        n.test(i)
          ? {
              type: "Placeholder",
              body: {
                type: "VariableReference",
                name: t[1]
                  ? i.slice(t[0].length, -t[1].length)
                  : i.slice(t[0].length),
              },
            }
          : { type: "Text", value: i }
      ),
  };
}
async function rn(e) {
  for (let t of e.resources) {
    let n = t.languageTag.name,
      r = e.settings.pathPattern;
    if (typeof r == "object") {
      let i = {};
      for (let [o, a] of Object.entries(e.settings.pathPattern)) {
        let u = a.replace("{language}", n).split("/").slice(0, -1).join("/");
        try {
          await e.$fs.readdir(u);
        } catch {
          await e.$fs.mkdir(u);
        }
        i[o] = [];
      }
      for (let o of t.body) {
        let a = o.id.name.includes(":")
          ? o.id.name.split(":")[0]
          : Object.keys(r)[0];
        a in i &&
          i[a].push({
            ...o,
            id: { ...o.id, name: o.id.name.replace(a + ":", "") },
          });
      }
      for (let [o, a] of Object.entries(i))
        if (a.length !== 0) {
          let u = r[o].replace("{language}", n);
          await e.$fs.writeFile(
            u,
            Qe(
              a,
              ie[u] ?? Je(),
              de[u],
              T[u] ?? oe(),
              e.settings.variableReferencePattern
            )
          );
        }
    } else if (typeof r == "string") {
      let i = r.replace("{language}", n);
      await e.$fs.writeFile(
        i,
        Qe(
          t.body,
          ie[i] ?? Je(),
          de[i],
          T[i] ?? oe(),
          e.settings.variableReferencePattern
        )
      );
    }
  }
}
function Qe(e, t, n, r, i) {
  let o = {};
  for (let a of e) {
    let u = W(a.id.name, "..", "u002E.");
    u.slice(-1) === "." && (u = u.replace(/.$/, "u002E")),
      (o[u] = on(a.pattern, i));
  }
  return (
    r && (o = (0, ae.unflatten)(o, { object: !0 })),
    W(JSON.stringify(o, void 0, t), "u002E", ".") +
      (n
        ? `
`
        : "")
  );
}
function on(e, t) {
  let n = [];
  for (let r of e.elements)
    switch (r.type) {
      case "Text":
        n.push(r.value);
        break;
      case "Placeholder":
        n.push(t[1] ? `${t[0]}${r.body.name}${t[1]}` : `${t[0]}${r.body.name}`);
        break;
      default:
        throw new Error(`Unknown message pattern element of type: ${r?.type}`);
    }
  return n.join("");
}
export { Xt as default };
//! DON'T TOP-LEVEL IMPORT ESBUILD PLUGINS. USE DYNAMIC IMPORTS.
//! See https://github.com/inlang/inlang/issues/486
