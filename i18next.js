var Ue = Object.create;
var le = Object.defineProperty;
var Qe = Object.getOwnPropertyDescriptor;
var Ge = Object.getOwnPropertyNames;
var Je = Object.getPrototypeOf,
  Ve = Object.prototype.hasOwnProperty;
var ge = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Ye = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of Ge(t))
      !Ve.call(e, i) &&
        i !== n &&
        le(e, i, {
          get: () => t[i],
          enumerable: !(r = Qe(t, i)) || r.enumerable,
        });
  return e;
};
var pe = (e, t, n) => (
  (n = e != null ? Ue(Je(e)) : {}),
  Ye(
    t || !e || !e.__esModule
      ? le(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var Ae = ge((on, $e) => {
  "use strict";
  function a(e) {
    if (!(this instanceof a)) return new a(e);
    this._ = e;
  }
  var f = a.prototype;
  function ve(e, t) {
    var n = 0;
    for (n; n < e; n++) t(n);
  }
  function Ze(e, t) {
    ve(t.length, function (n) {
      e(t[n], n, t);
    });
  }
  function L(e, t, n) {
    return (
      Ze(function (r, i, o) {
        t = e(t, r, i, o);
      }, n),
      t
    );
  }
  function B(e, t) {
    return L(
      function (n, r, i, o) {
        return n.concat([e(r, i, o)]);
      },
      [],
      t
    );
  }
  function He(e) {
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
      B(function (n) {
        return ((n << 1) & 65535) >> 8;
      }, t)
    );
  }
  function Xe(e, t) {
    var n = { v: 0, buf: t };
    return (
      ve(e, function () {
        n = { v: (n.v << 1) | et(n.buf), buf: He(n.buf) };
      }),
      n
    );
  }
  function et(e) {
    return e[0] >> 7;
  }
  function tt(e) {
    return L(
      function (t, n) {
        return t + n;
      },
      0,
      e
    );
  }
  function nt(e, t) {
    return L(
      function (n, r) {
        return n || (e(r) ? r : n);
      },
      null,
      t
    );
  }
  function ye() {
    return typeof Buffer < "u";
  }
  function rt() {
    if (a._supportsSet !== void 0) return a._supportsSet;
    var e = typeof Set < "u";
    return (a._supportsSet = e), e;
  }
  function V() {
    if (!ye())
      throw new Error(
        "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
      );
  }
  function we(e) {
    V();
    var t = tt(e);
    if (t % 8 !== 0)
      throw new Error(
        "The bits [" +
          e.join(", ") +
          "] add up to " +
          t +
          " which is not an even number of bytes; the total should be divisible by 8"
      );
    var n = t / 8,
      r = nt(function (i) {
        return i > 48;
      }, e);
    if (r)
      throw new Error(
        r + " bit range requested exceeds 48 bit (6 byte) Number max."
      );
    return new a(function (i, o) {
      var u = n + o;
      return u > i.length
        ? w(o, n.toString() + " bytes")
        : h(
            u,
            L(
              function (s, c) {
                var l = Xe(c, s.buf);
                return { coll: s.coll.concat(l.v), buf: l.buf };
              },
              { coll: [], buf: i.slice(o, u) },
              e
            ).coll
          );
    });
  }
  function it(e) {
    V();
    var t = {},
      n = 0,
      r = B(function (u) {
        if (R(u)) {
          var s = u;
          if (s.length !== 2)
            throw new Error(
              "[" +
                s.join(", ") +
                "] should be length 2, got length " +
                s.length
            );
          if ((T(s[0]), _(s[1]), Object.prototype.hasOwnProperty.call(t, s[0])))
            throw new Error("duplicate key in bitSeqObj: " + s[0]);
          return (t[s[0]] = !0), n++, s;
        } else return _(u), [null, u];
      }, e);
    if (n < 1)
      throw new Error(
        "bitSeqObj expects at least one named pair, got [" + e.join(", ") + "]"
      );
    var i = B(function (u) {
        return u[0];
      }, r),
      o = B(function (u) {
        return u[1];
      }, r);
    return we(o).map(function (u) {
      var s = B(function (c, l) {
        return [c, u[l]];
      }, i);
      return L(
        function (c, l) {
          return l[0] !== null && (c[l[0]] = l[1]), c;
        },
        {},
        s
      );
    });
  }
  function E(e, t) {
    return new a(function (n, r) {
      return (
        V(),
        r + t > n.length
          ? w(r, t + " bytes for " + e)
          : h(r + t, n.slice(r, r + t))
      );
    });
  }
  function ot(e) {
    return E("buffer", e).map(function (t) {
      return Buffer.from(t);
    });
  }
  function at(e, t) {
    return E("string", t).map(function (n) {
      return n.toString(e);
    });
  }
  function ut(e) {
    return typeof e == "number" && Math.floor(e) === e;
  }
  function Y(e, t) {
    if (!ut(t) || t < 0 || t > 6)
      throw new Error(e + " requires integer length in range [0, 6].");
  }
  function N(e) {
    return (
      Y("uintBE", e),
      E("uintBE(" + e + ")", e).map(function (t) {
        return t.readUIntBE(0, e);
      })
    );
  }
  function D(e) {
    return (
      Y("uintLE", e),
      E("uintLE(" + e + ")", e).map(function (t) {
        return t.readUIntLE(0, e);
      })
    );
  }
  function K(e) {
    return (
      Y("intBE", e),
      E("intBE(" + e + ")", e).map(function (t) {
        return t.readIntBE(0, e);
      })
    );
  }
  function z(e) {
    return (
      Y("intLE", e),
      E("intLE(" + e + ")", e).map(function (t) {
        return t.readIntLE(0, e);
      })
    );
  }
  function st() {
    return E("floatBE", 4).map(function (e) {
      return e.readFloatBE(0);
    });
  }
  function ft() {
    return E("floatLE", 4).map(function (e) {
      return e.readFloatLE(0);
    });
  }
  function ct() {
    return E("doubleBE", 8).map(function (e) {
      return e.readDoubleBE(0);
    });
  }
  function lt() {
    return E("doubleLE", 8).map(function (e) {
      return e.readDoubleLE(0);
    });
  }
  function gt(e) {
    return Array.prototype.slice.call(e);
  }
  function M(e) {
    return e instanceof a;
  }
  function R(e) {
    return {}.toString.call(e) === "[object Array]";
  }
  function W(e) {
    return ye() && Buffer.isBuffer(e);
  }
  function h(e, t) {
    return { status: !0, index: e, value: t, furthest: -1, expected: [] };
  }
  function w(e, t) {
    return (
      R(t) || (t = [t]),
      { status: !1, index: -1, value: null, furthest: e, expected: t }
    );
  }
  function b(e, t) {
    if (!t || e.furthest > t.furthest) return e;
    var n = e.furthest === t.furthest ? pt(e.expected, t.expected) : t.expected;
    return {
      status: e.status,
      index: e.index,
      value: e.value,
      furthest: t.furthest,
      expected: n,
    };
  }
  var Q = {};
  function be(e, t) {
    if (W(e)) return { offset: t, line: -1, column: -1 };
    e in Q || (Q[e] = {});
    for (var n = Q[e], r = 0, i = 0, o = 0, u = t; u >= 0; ) {
      if (u in n) {
        (r = n[u].line), o === 0 && (o = n[u].lineStart);
        break;
      }
      (e.charAt(u) ===
        `
` ||
        (e.charAt(u) === "\r" &&
          e.charAt(u + 1) !==
            `
`)) &&
        (i++, o === 0 && (o = u + 1)),
        u--;
    }
    var s = r + i,
      c = t - o;
    return (
      (n[t] = { line: s, lineStart: o }),
      { offset: t, line: s + 1, column: c + 1 }
    );
  }
  function pt(e, t) {
    if (rt() && Array.from) {
      for (var n = new Set(e), r = 0; r < t.length; r++) n.add(t[r]);
      var i = Array.from(n);
      return i.sort(), i;
    }
    for (var o = {}, u = 0; u < e.length; u++) o[e[u]] = !0;
    for (var s = 0; s < t.length; s++) o[t[s]] = !0;
    var c = [];
    for (var l in o) ({}).hasOwnProperty.call(o, l) && c.push(l);
    return c.sort(), c;
  }
  function k(e) {
    if (!M(e)) throw new Error("not a parser: " + e);
  }
  function Z(e, t) {
    return typeof e == "string" ? e.charAt(t) : e[t];
  }
  function dt(e) {
    if (!R(e)) throw new Error("not an array: " + e);
  }
  function _(e) {
    if (typeof e != "number") throw new Error("not a number: " + e);
  }
  function ht(e) {
    if (!(e instanceof RegExp)) throw new Error("not a regexp: " + e);
    for (var t = xe(e), n = 0; n < t.length; n++) {
      var r = t.charAt(n);
      if (r !== "i" && r !== "m" && r !== "u" && r !== "s")
        throw new Error('unsupported regexp flag "' + r + '": ' + e);
    }
  }
  function O(e) {
    if (typeof e != "function") throw new Error("not a function: " + e);
  }
  function T(e) {
    if (typeof e != "string") throw new Error("not a string: " + e);
  }
  var mt = 2,
    vt = 3,
    j = 8,
    yt = j * 5,
    wt = j * 4,
    he = "  ";
  function G(e, t) {
    return new Array(t + 1).join(e);
  }
  function bt(e) {
    return e.length === 1
      ? `Expected:

` + e[0]
      : `Expected one of the following: 

` + e.join(", ");
  }
  function U(e, t, n) {
    var r = t - e.length;
    return r <= 0 ? e : G(n, r) + e;
  }
  function Et(e, t) {
    var n = e.length,
      r = [],
      i = 0;
    if (n <= t) return [e.slice()];
    for (var o = 0; o < n; o++)
      r[i] || r.push([]), r[i].push(e[o]), (o + 1) % t === 0 && i++;
    return r;
  }
  function me(e, t, n, r) {
    return { from: e - t > 0 ? e - t : 0, to: e + n > r ? r : e + n };
  }
  function xt(e) {
    return e.from === 0 && e.to === 1
      ? { from: e.from, to: e.to }
      : { from: e.from / j, to: Math.floor(e.to / j) };
  }
  function Pt(e, t) {
    var n = t.index,
      r = n.offset,
      i = 1,
      o,
      u,
      s,
      c,
      l;
    if (r === e.length) return "Got the end of the input";
    if (W(e)) {
      var g = r - (r % j),
        p = r - g,
        d = me(g, yt, wt + j, e.length),
        m = e.slice(d.from, d.to),
        y = Et(m.toJSON().data, j),
        A = B(function (S) {
          return B(function (re) {
            return U(re.toString(16), 2, "0");
          }, S);
        }, y);
      (c = xt(d)),
        (u = g / j),
        (o = p * 3),
        p >= 4 && (o += 1),
        (i = 2),
        (s = B(function (S) {
          return S.length <= 4
            ? S.join(" ")
            : S.slice(0, 4).join(" ") + "  " + S.slice(4).join(" ");
        }, A)),
        (l = ((c.to > 0 ? c.to - 1 : c.to) * 8).toString(16).length),
        l < 2 && (l = 2);
    } else {
      var P = e.split(/\r\n|[\n\r\u2028\u2029]/);
      (o = n.column - 1),
        (u = n.line - 1),
        (c = me(u, mt, vt, P.length)),
        (s = P.slice(c.from, c.to)),
        (l = c.to.toString().length);
    }
    var De = u - c.from;
    W(e) &&
      ((l = ((c.to > 0 ? c.to - 1 : c.to) * 8).toString(16).length),
      l < 2 && (l = 2));
    var Ke = L(
      function (S, re, ie) {
        var ce = ie === De,
          ze = ce ? "> " : he,
          oe;
        return (
          W(e)
            ? (oe = U(((c.from + ie) * 8).toString(16), l, "0"))
            : (oe = U((c.from + ie + 1).toString(), l, " ")),
          [].concat(
            S,
            [ze + oe + " | " + re],
            ce ? [he + G(" ", l) + " | " + U("", o, " ") + G("^", i)] : []
          )
        );
      },
      [],
      s
    );
    return Ke.join(`
`);
  }
  function Ee(e, t) {
    return [
      `
`,
      "-- PARSING FAILED " + G("-", 50),
      `

`,
      Pt(e, t),
      `

`,
      bt(t.expected),
      `
`,
    ].join("");
  }
  function xe(e) {
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
  function St(e) {
    return RegExp("^(?:" + e.source + ")", xe(e));
  }
  function H() {
    for (var e = [].slice.call(arguments), t = e.length, n = 0; n < t; n += 1)
      k(e[n]);
    return a(function (r, i) {
      for (var o, u = new Array(t), s = 0; s < t; s += 1) {
        if (((o = b(e[s]._(r, i), o)), !o.status)) return o;
        (u[s] = o.value), (i = o.index);
      }
      return b(h(i, u), o);
    });
  }
  function Bt() {
    for (
      var e = {}, t = 0, n = gt(arguments), r = n.length, i = 0;
      i < r;
      i += 1
    ) {
      var o = n[i];
      if (!M(o)) {
        if (R(o)) {
          var u = o.length === 2 && typeof o[0] == "string" && M(o[1]);
          if (u) {
            var s = o[0];
            if (Object.prototype.hasOwnProperty.call(e, s))
              throw new Error("seqObj: duplicate key " + s);
            (e[s] = !0), t++;
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
    return a(function (c, l) {
      for (var g, p = {}, d = 0; d < r; d += 1) {
        var m, y;
        if (
          (R(n[d]) ? ((m = n[d][0]), (y = n[d][1])) : ((m = null), (y = n[d])),
          (g = b(y._(c, l), g)),
          !g.status)
        )
          return g;
        m && (p[m] = g.value), (l = g.index);
      }
      return b(h(l, p), g);
    });
  }
  function I() {
    var e = [].slice.call(arguments);
    if (e.length === 0) throw new Error("seqMap needs at least one argument");
    var t = e.pop();
    return (
      O(t),
      H.apply(null, e).map(function (n) {
        return t.apply(null, n);
      })
    );
  }
  function jt(e) {
    var t = {};
    for (var n in e)
      ({}).hasOwnProperty.call(e, n) &&
        (function (r) {
          var i = function () {
            return e[r](t);
          };
          t[r] = Be(i);
        })(n);
    return t;
  }
  function X() {
    var e = [].slice.call(arguments),
      t = e.length;
    if (t === 0) return ee("zero alternates");
    for (var n = 0; n < t; n += 1) k(e[n]);
    return a(function (r, i) {
      for (var o, u = 0; u < e.length; u += 1)
        if (((o = b(e[u]._(r, i), o)), o.status)) return o;
      return o;
    });
  }
  function Pe(e, t) {
    return ue(e, t).or($([]));
  }
  function ue(e, t) {
    k(e), k(t);
    var n = t.then(e).many();
    return I(e, n, function (r, i) {
      return [r].concat(i);
    });
  }
  f.parse = function (e) {
    if (typeof e != "string" && !W(e))
      throw new Error(
        ".parse must be called with a string or Buffer as its argument"
      );
    var t = this.skip(fe)._(e, 0),
      n;
    return (
      t.status
        ? (n = { status: !0, value: t.value })
        : (n = { status: !1, index: be(e, t.furthest), expected: t.expected }),
      delete Q[e],
      n
    );
  };
  f.tryParse = function (e) {
    var t = this.parse(e);
    if (t.status) return t.value;
    var n = Ee(e, t),
      r = new Error(n);
    throw ((r.type = "ParsimmonError"), (r.result = t), r);
  };
  f.assert = function (e, t) {
    return this.chain(function (n) {
      return e(n) ? $(n) : ee(t);
    });
  };
  f.or = function (e) {
    return X(this, e);
  };
  f.trim = function (e) {
    return this.wrap(e, e);
  };
  f.wrap = function (e, t) {
    return I(e, this, t, function (n, r) {
      return r;
    });
  };
  f.thru = function (e) {
    return e(this);
  };
  f.then = function (e) {
    return (
      k(e),
      H(this, e).map(function (t) {
        return t[1];
      })
    );
  };
  f.many = function () {
    var e = this;
    return a(function (t, n) {
      for (var r = [], i = void 0; ; )
        if (((i = b(e._(t, n), i)), i.status)) {
          if (n === i.index)
            throw new Error(
              "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
            );
          (n = i.index), r.push(i.value);
        } else return b(h(n, r), i);
    });
  };
  f.tieWith = function (e) {
    return (
      T(e),
      this.map(function (t) {
        if ((dt(t), t.length)) {
          T(t[0]);
          for (var n = t[0], r = 1; r < t.length; r++) T(t[r]), (n += e + t[r]);
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
      a(function (r, i) {
        for (var o = [], u = void 0, s = void 0, c = 0; c < e; c += 1)
          if (((u = n._(r, i)), (s = b(u, s)), u.status))
            (i = u.index), o.push(u.value);
          else return s;
        for (; c < t && ((u = n._(r, i)), (s = b(u, s)), u.status); c += 1)
          (i = u.index), o.push(u.value);
        return b(h(i, o), s);
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
    return I(this.times(e), this.many(), function (t, n) {
      return t.concat(n);
    });
  };
  f.map = function (e) {
    O(e);
    var t = this;
    return a(function (n, r) {
      var i = t._(n, r);
      return i.status ? b(h(i.index, e(i.value)), i) : i;
    });
  };
  f.contramap = function (e) {
    O(e);
    var t = this;
    return a(function (n, r) {
      var i = t.parse(e(n.slice(r)));
      return i.status ? h(r + n.length, i.value) : i;
    });
  };
  f.promap = function (e, t) {
    return O(e), O(t), this.contramap(e).map(t);
  };
  f.skip = function (e) {
    return H(this, e).map(function (t) {
      return t[0];
    });
  };
  f.mark = function () {
    return I(q, this, q, function (e, t, n) {
      return { start: e, value: t, end: n };
    });
  };
  f.node = function (e) {
    return I(q, this, q, function (t, n, r) {
      return { name: e, value: n, start: t, end: r };
    });
  };
  f.sepBy = function (e) {
    return Pe(this, e);
  };
  f.sepBy1 = function (e) {
    return ue(this, e);
  };
  f.lookahead = function (e) {
    return this.skip(J(e));
  };
  f.notFollowedBy = function (e) {
    return this.skip(Se(e));
  };
  f.desc = function (e) {
    R(e) || (e = [e]);
    var t = this;
    return a(function (n, r) {
      var i = t._(n, r);
      return i.status || (i.expected = e), i;
    });
  };
  f.fallback = function (e) {
    return this.or($(e));
  };
  f.ap = function (e) {
    return I(e, this, function (t, n) {
      return t(n);
    });
  };
  f.chain = function (e) {
    var t = this;
    return a(function (n, r) {
      var i = t._(n, r);
      if (!i.status) return i;
      var o = e(i.value);
      return b(o._(n, i.index), i);
    });
  };
  function C(e) {
    T(e);
    var t = "'" + e + "'";
    return a(function (n, r) {
      var i = r + e.length,
        o = n.slice(r, i);
      return o === e ? h(i, o) : w(r, t);
    });
  }
  function Ot(e) {
    if ((V(), _(e), e > 255))
      throw new Error(
        "Value specified to byte constructor (" +
          e +
          "=0x" +
          e.toString(16) +
          ") is larger in value than a single byte."
      );
    var t = (e > 15 ? "0x" : "0x0") + e.toString(16);
    return a(function (n, r) {
      var i = Z(n, r);
      return i === e ? h(r + 1, i) : w(r, t);
    });
  }
  function x(e, t) {
    ht(e), arguments.length >= 2 ? _(t) : (t = 0);
    var n = St(e),
      r = "" + e;
    return a(function (i, o) {
      var u = n.exec(i.slice(o));
      if (u) {
        if (0 <= t && t <= u.length) {
          var s = u[0],
            c = u[t];
          return h(o + s.length, c);
        }
        var l = "valid match group (0 to " + u.length + ") in " + r;
        return w(o, l);
      }
      return w(o, r);
    });
  }
  function $(e) {
    return a(function (t, n) {
      return h(n, e);
    });
  }
  function ee(e) {
    return a(function (t, n) {
      return w(n, e);
    });
  }
  function J(e) {
    if (M(e))
      return a(function (t, n) {
        var r = e._(t, n);
        return (r.index = n), (r.value = ""), r;
      });
    if (typeof e == "string") return J(C(e));
    if (e instanceof RegExp) return J(x(e));
    throw new Error("not a string, regexp, or parser: " + e);
  }
  function Se(e) {
    return (
      k(e),
      a(function (t, n) {
        var r = e._(t, n),
          i = t.slice(n, r.index);
        return r.status ? w(n, 'not "' + i + '"') : h(n, null);
      })
    );
  }
  function te(e) {
    return (
      O(e),
      a(function (t, n) {
        var r = Z(t, n);
        return n < t.length && e(r)
          ? h(n + 1, r)
          : w(n, "a character/byte matching " + e);
      })
    );
  }
  function Lt(e) {
    for (var t = e.split(""), n = 0; n < t.length; n++) t[n] = "'" + t[n] + "'";
    return te(function (r) {
      return e.indexOf(r) >= 0;
    }).desc(t);
  }
  function It(e) {
    return te(function (t) {
      return e.indexOf(t) < 0;
    }).desc("none of '" + e + "'");
  }
  function $t(e) {
    return a(e(h, w));
  }
  function At(e, t) {
    return te(function (n) {
      return e <= n && n <= t;
    }).desc(e + "-" + t);
  }
  function Rt(e) {
    return (
      O(e),
      a(function (t, n) {
        for (var r = n; r < t.length && e(Z(t, r)); ) r++;
        return h(r, t.slice(n, r));
      })
    );
  }
  function Be(e, t) {
    arguments.length < 2 && ((t = e), (e = void 0));
    var n = a(function (r, i) {
      return (n._ = t()._), n._(r, i);
    });
    return e ? n.desc(e) : n;
  }
  function se() {
    return ee("fantasy-land/empty");
  }
  f.concat = f.or;
  f.empty = se;
  f.of = $;
  f["fantasy-land/ap"] = f.ap;
  f["fantasy-land/chain"] = f.chain;
  f["fantasy-land/concat"] = f.concat;
  f["fantasy-land/empty"] = f.empty;
  f["fantasy-land/of"] = f.of;
  f["fantasy-land/map"] = f.map;
  var q = a(function (e, t) {
      return h(t, be(e, t));
    }),
    kt = a(function (e, t) {
      return t >= e.length ? w(t, "any character/byte") : h(t + 1, Z(e, t));
    }),
    _t = a(function (e, t) {
      return h(e.length, e.slice(t));
    }),
    fe = a(function (e, t) {
      return t < e.length ? w(t, "EOF") : h(t, null);
    }),
    Wt = x(/[0-9]/).desc("a digit"),
    Tt = x(/[0-9]*/).desc("optional digits"),
    Mt = x(/[a-z]/i).desc("a letter"),
    qt = x(/[a-z]*/i).desc("optional letters"),
    Ct = x(/\s*/).desc("optional whitespace"),
    Ft = x(/\s+/).desc("whitespace"),
    je = C("\r"),
    Oe = C(`
`),
    Le = C(`\r
`),
    Ie = X(Le, Oe, je).desc("newline"),
    Nt = X(Ie, fe);
  a.all = _t;
  a.alt = X;
  a.any = kt;
  a.cr = je;
  a.createLanguage = jt;
  a.crlf = Le;
  a.custom = $t;
  a.digit = Wt;
  a.digits = Tt;
  a.empty = se;
  a.end = Nt;
  a.eof = fe;
  a.fail = ee;
  a.formatError = Ee;
  a.index = q;
  a.isParser = M;
  a.lazy = Be;
  a.letter = Mt;
  a.letters = qt;
  a.lf = Oe;
  a.lookahead = J;
  a.makeFailure = w;
  a.makeSuccess = h;
  a.newline = Ie;
  a.noneOf = It;
  a.notFollowedBy = Se;
  a.of = $;
  a.oneOf = Lt;
  a.optWhitespace = Ct;
  a.Parser = a;
  a.range = At;
  a.regex = x;
  a.regexp = x;
  a.sepBy = Pe;
  a.sepBy1 = ue;
  a.seq = H;
  a.seqMap = I;
  a.seqObj = Bt;
  a.string = C;
  a.succeed = $;
  a.takeWhile = Rt;
  a.test = te;
  a.whitespace = Ft;
  a["fantasy-land/empty"] = se;
  a["fantasy-land/of"] = $;
  a.Binary = {
    bitSeq: we,
    bitSeqObj: it,
    byte: Ot,
    buffer: ot,
    encodedString: at,
    uintBE: N,
    uint8BE: N(1),
    uint16BE: N(2),
    uint32BE: N(4),
    uintLE: D,
    uint8LE: D(1),
    uint16LE: D(2),
    uint32LE: D(4),
    intBE: K,
    int8BE: K(1),
    int16BE: K(2),
    int32BE: K(4),
    intLE: z,
    int8LE: z(1),
    int16LE: z(2),
    int32LE: z(4),
    floatBE: st(),
    floatLE: ft(),
    doubleBE: ct(),
    doubleLE: lt(),
  };
  $e.exports = a;
});
var qe = ge((fn, Me) => {
  Me.exports = F;
  F.flatten = F;
  F.unflatten = Te;
  function _e(e) {
    return (
      e &&
      e.constructor &&
      typeof e.constructor.isBuffer == "function" &&
      e.constructor.isBuffer(e)
    );
  }
  function We(e) {
    return e;
  }
  function F(e, t) {
    t = t || {};
    let n = t.delimiter || ".",
      r = t.maxDepth,
      i = t.transformKey || We,
      o = {};
    function u(s, c, l) {
      (l = l || 1),
        Object.keys(s).forEach(function (g) {
          let p = s[g],
            d = t.safe && Array.isArray(p),
            m = Object.prototype.toString.call(p),
            y = _e(p),
            A = m === "[object Object]" || m === "[object Array]",
            P = c ? c + n + i(g) : i(g);
          if (!d && !y && A && Object.keys(p).length && (!t.maxDepth || l < r))
            return u(p, P, l + 1);
          o[P] = p;
        });
    }
    return u(e), o;
  }
  function Te(e, t) {
    t = t || {};
    let n = t.delimiter || ".",
      r = t.overwrite || !1,
      i = t.transformKey || We,
      o = {};
    if (_e(e) || Object.prototype.toString.call(e) !== "[object Object]")
      return e;
    function s(g) {
      let p = Number(g);
      return isNaN(p) || g.indexOf(".") !== -1 || t.object ? g : p;
    }
    function c(g, p, d) {
      return Object.keys(d).reduce(function (m, y) {
        return (m[g + n + y] = d[y]), m;
      }, p);
    }
    function l(g) {
      let p = Object.prototype.toString.call(g),
        d = p === "[object Array]",
        m = p === "[object Object]";
      if (g) {
        if (d) return !g.length;
        if (m) return !Object.keys(g).length;
      } else return !0;
    }
    return (
      (e = Object.keys(e).reduce(function (g, p) {
        let d = Object.prototype.toString.call(e[p]);
        return !(d === "[object Object]" || d === "[object Array]") || l(e[p])
          ? ((g[p] = e[p]), g)
          : c(p, g, F(e[p], t));
      }, {})),
      Object.keys(e).forEach(function (g) {
        let p = g.split(n).map(i),
          d = s(p.shift()),
          m = s(p[0]),
          y = o;
        for (; m !== void 0; ) {
          if (d === "__proto__") return;
          let A = Object.prototype.toString.call(y[d]),
            P = A === "[object Object]" || A === "[object Array]";
          if (!r && !P && typeof y[d] < "u") return;
          ((r && !P) || (!r && y[d] == null)) &&
            (y[d] = typeof m == "number" && !t.object ? [] : {}),
            (y = y[d]),
            p.length > 0 && ((d = s(p.shift())), (m = s(p[0])));
        }
        y[d] = Te(e[g], t);
      }),
      o
    );
  }
});
function ae(e) {
  return (t) => (n) => e({ settings: t, env: n });
}
function de(e) {
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
          "A prefix of pathPatterm includes an '.'. Use a string without dot notations. An example would be 'common'."
        );
    }
}
var v = pe(Ae(), 1),
  Dt = v.default.createLanguage({
    entry: (e) =>
      v.default
        .alt(e.FunctionCall, v.default.any)
        .many()
        .map((t) => t.filter((n) => typeof n == "object")),
    stringLiteral: (e) =>
      v.default.alt(e.doubleQuotedString, e.singleQuotedString),
    doubleQuotedString: () =>
      v.default
        .string('"')
        .then(v.default.regex(/[^"]*/))
        .skip(v.default.string('"')),
    singleQuotedString: () =>
      v.default
        .string("'")
        .then(v.default.regex(/[^']*/))
        .skip(v.default.string("'")),
    FunctionCall: function (e) {
      return v.default.seqMap(
        v.default.regex(/[^a-zA-Z0-9]/),
        v.default.string("t"),
        v.default.string("("),
        v.default.index,
        e.stringLiteral,
        v.default.index,
        v.default.regex(/[^)]*/),
        v.default.string(")"),
        (t, n, r, i, o, u) => ({
          messageId: o,
          position: {
            start: { line: i.line, character: i.column },
            end: { line: u.line, character: u.column },
          },
        })
      );
    },
  });
function Re(e) {
  try {
    return Dt.entry.tryParse(e);
  } catch {
    return [];
  }
}
var ke = {
  messageReferenceMatchers: [async (e) => Re(e.documentText)],
  extractMessageOptions: [{ callback: (e) => `{t("${e}")}` }],
  documentSelectors: [
    { language: "javascript" },
    { language: "typescript" },
    { language: "svelte" },
  ],
};
var ne = pe(qe(), 1),
  Kt = ae(({ settings: e, env: t }) => ({
    id: "inlang.plugin-i18next",
    async config() {
      de(e);
      let n = {
        variableReferencePattern: ["{{", "}}"],
        ignore: [],
        format: { space: 2, nested: !1, endsWithNewLine: !0 },
        ...e,
      };
      return {
        languages: await zt({ $fs: t.$fs, settings: n }),
        readResources: (r) => Ut({ ...r, $fs: t.$fs, settings: n }),
        writeResources: (r) => Jt({ ...r, $fs: t.$fs, settings: n }),
        ideExtension: ke,
      };
    },
  }));
async function zt(e) {
  let t = [];
  if (typeof e.settings.pathPattern != "string")
    for (let n of Object.values(e.settings.pathPattern)) {
      let [r] = n.split("{language}");
      if (r === void 0)
        throw new Error("pathPattern must contain {language} placeholder");
      let i = await e.$fs.readdir(r);
      for (let o of i)
        (await Promise.resolve(
          e.$fs
            .readFile(n.replace("{language}", o))
            .then(() => !0)
            .catch(() => !1)
        )) && t.push(o);
    }
  else {
    let [n] = e.settings.pathPattern.split("{language}");
    if (n === void 0)
      throw new Error("pathPattern must contain {language} placeholder");
    let r = await e.$fs.readdir(n);
    for (let i of r)
      i.endsWith(".json") &&
        e.settings.ignore?.some((o) => o === i) === !1 &&
        t.push(i.replace(".json", ""));
  }
  return [...new Set(t)];
}
async function Ut(e) {
  let t = [];
  for (let n of e.config.languages) {
    let r = {
      type: "Resource",
      languageTag: { type: "LanguageTag", name: n },
      body: [],
    };
    if (typeof e.settings.pathPattern != "string")
      for (let [i, o] of Object.entries(e.settings.pathPattern)) {
        let u = await Ce(o, n, e.$fs);
        u &&
          (r.body = [
            ...r.body,
            ...Fe(
              u,
              n,
              e.settings.variableReferencePattern,
              e.settings.format.nested,
              i
            ),
          ]);
      }
    else {
      let i = await Ce(e.settings.pathPattern, n, e.$fs);
      r.body = [
        ...r.body,
        ...Fe(
          i,
          n,
          e.settings.variableReferencePattern,
          e.settings.format.nested
        ),
      ];
    }
    t.push(r);
  }
  return t;
}
async function Ce(e, t, n) {
  let r = e.replace("{language}", t);
  try {
    let i = await n.readFile(r, { encoding: "utf-8" });
    return JSON.parse(i);
  } catch (i) {
    if (i.code === "ENOENT") return;
    throw i;
  }
}
function Fe(e, t, n, r, i) {
  let o = r
    ? (0, ne.flatten)(e, {
        transformKey: function (u) {
          return u.replace(".", "\\u002E");
        },
      })
    : e;
  return o !== void 0
    ? Object.entries(o).map((u) => {
        if (typeof u[1] != "string")
          throw new Error(
            "You configured a flattened key project. If you have nested keys please add 'format: { nested: true }' to the pluginSettings"
          );
        return Qt(u[0], u[1], n, i);
      })
    : [];
}
function Qt(e, t, n, r) {
  return {
    type: "Message",
    id: {
      type: "Identifier",
      name: r ? r + "." + e.replace("\\u002E", ".") : e.replace("\\u002E", "."),
    },
    pattern: Gt(t, n),
  };
}
function Gt(e, t) {
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
async function Jt(e) {
  for (let t of e.resources) {
    let n = t.languageTag.name;
    if (typeof e.settings.pathPattern != "string")
      for (let [r, i] of Object.entries(e.settings.pathPattern)) {
        let o = i.replace("{language}", n).split("/").slice(0, -1).join("/");
        console.log(o);
        try {
          await e.$fs.readdir(o);
        } catch {
          await e.$fs.mkdir(o);
        }
        let u = t.body
          .filter((s) => s.id.name.split(".")[0] === r)
          .map((s) => ({
            ...s,
            id: { ...s.id, name: s.id.name.replace(r + ".", "") },
          }));
        u.length !== 0 &&
          (await e.$fs.writeFile(
            i.replace("{language}", n),
            Ne(u, e.settings.format, e.settings.variableReferencePattern)
          ));
      }
    else
      await e.$fs.writeFile(
        e.settings.pathPattern.replace("{language}", n),
        Ne(t.body, e.settings.format, e.settings.variableReferencePattern)
      );
  }
}
function Ne(e, t, n) {
  let r = {};
  for (let i of e) {
    let o =
      i.id.name.slice(-1) === "."
        ? i.id.name.replace(/.$/, "\\u002E")
        : i.id.name;
    r[o] = Vt(i.pattern, n);
  }
  return (
    t?.nested &&
      (r = (0, ne.unflatten)(r, {
        transformKey: function (i) {
          return i.replace("\\u002E", ".");
        },
        object: !0,
      })),
    JSON.stringify(r, void 0, t.space) +
      (t.endsWithNewLine
        ? `
`
        : "")
  );
}
function Vt(e, t) {
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
export { Kt as default };
//! DON'T TOP-LEVEL IMPORT ESBUILD PLUGINS. USE DYNAMIC IMPORTS.
//! See https://github.com/inlang/inlang/issues/486
