var Ve = Object.create;
var pe = Object.defineProperty;
var He = Object.getOwnPropertyDescriptor;
var Ye = Object.getOwnPropertyNames;
var Ze = Object.getPrototypeOf,
  Xe = Object.prototype.hasOwnProperty;
var de = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var et = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of Ye(t))
      !Xe.call(e, i) &&
        i !== n &&
        pe(e, i, {
          get: () => t[i],
          enumerable: !(r = He(t, i)) || r.enumerable,
        });
  return e;
};
var he = (e, t, n) => (
  (n = e != null ? Ve(Ze(e)) : {}),
  et(
    t || !e || !e.__esModule
      ? pe(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var _e = de((fn, Re) => {
  "use strict";
  function u(e) {
    if (!(this instanceof u)) return new u(e);
    this._ = e;
  }
  var f = u.prototype;
  function be(e, t) {
    var n = 0;
    for (n; n < e; n++) t(n);
  }
  function tt(e, t) {
    be(t.length, function (n) {
      e(t[n], n, t);
    });
  }
  function L(e, t, n) {
    return (
      tt(function (r, i, o) {
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
  function nt(e) {
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
  function rt(e, t) {
    var n = { v: 0, buf: t };
    return (
      be(e, function () {
        n = { v: (n.v << 1) | it(n.buf), buf: nt(n.buf) };
      }),
      n
    );
  }
  function it(e) {
    return e[0] >> 7;
  }
  function ot(e) {
    return L(
      function (t, n) {
        return t + n;
      },
      0,
      e
    );
  }
  function at(e, t) {
    return L(
      function (n, r) {
        return n || (e(r) ? r : n);
      },
      null,
      t
    );
  }
  function we() {
    return typeof Buffer < "u";
  }
  function ut() {
    if (u._supportsSet !== void 0) return u._supportsSet;
    var e = typeof Set < "u";
    return (u._supportsSet = e), e;
  }
  function V() {
    if (!we())
      throw new Error(
        "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
      );
  }
  function Ee(e) {
    V();
    var t = ot(e);
    if (t % 8 !== 0)
      throw new Error(
        "The bits [" +
          e.join(", ") +
          "] add up to " +
          t +
          " which is not an even number of bytes; the total should be divisible by 8"
      );
    var n = t / 8,
      r = at(function (i) {
        return i > 48;
      }, e);
    if (r)
      throw new Error(
        r + " bit range requested exceeds 48 bit (6 byte) Number max."
      );
    return new u(function (i, o) {
      var a = n + o;
      return a > i.length
        ? b(o, n.toString() + " bytes")
        : h(
            a,
            L(
              function (s, c) {
                var l = rt(c, s.buf);
                return { coll: s.coll.concat(l.v), buf: l.buf };
              },
              { coll: [], buf: i.slice(o, a) },
              e
            ).coll
          );
    });
  }
  function st(e) {
    V();
    var t = {},
      n = 0,
      r = B(function (a) {
        if (R(a)) {
          var s = a;
          if (s.length !== 2)
            throw new Error(
              "[" +
                s.join(", ") +
                "] should be length 2, got length " +
                s.length
            );
          if ((T(s[0]), k(s[1]), Object.prototype.hasOwnProperty.call(t, s[0])))
            throw new Error("duplicate key in bitSeqObj: " + s[0]);
          return (t[s[0]] = !0), n++, s;
        } else return k(a), [null, a];
      }, e);
    if (n < 1)
      throw new Error(
        "bitSeqObj expects at least one named pair, got [" + e.join(", ") + "]"
      );
    var i = B(function (a) {
        return a[0];
      }, r),
      o = B(function (a) {
        return a[1];
      }, r);
    return Ee(o).map(function (a) {
      var s = B(function (c, l) {
        return [c, a[l]];
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
    return new u(function (n, r) {
      return (
        V(),
        r + t > n.length
          ? b(r, t + " bytes for " + e)
          : h(r + t, n.slice(r, r + t))
      );
    });
  }
  function ft(e) {
    return E("buffer", e).map(function (t) {
      return Buffer.from(t);
    });
  }
  function ct(e, t) {
    return E("string", t).map(function (n) {
      return n.toString(e);
    });
  }
  function lt(e) {
    return typeof e == "number" && Math.floor(e) === e;
  }
  function H(e, t) {
    if (!lt(t) || t < 0 || t > 6)
      throw new Error(e + " requires integer length in range [0, 6].");
  }
  function N(e) {
    return (
      H("uintBE", e),
      E("uintBE(" + e + ")", e).map(function (t) {
        return t.readUIntBE(0, e);
      })
    );
  }
  function D(e) {
    return (
      H("uintLE", e),
      E("uintLE(" + e + ")", e).map(function (t) {
        return t.readUIntLE(0, e);
      })
    );
  }
  function K(e) {
    return (
      H("intBE", e),
      E("intBE(" + e + ")", e).map(function (t) {
        return t.readIntBE(0, e);
      })
    );
  }
  function z(e) {
    return (
      H("intLE", e),
      E("intLE(" + e + ")", e).map(function (t) {
        return t.readIntLE(0, e);
      })
    );
  }
  function gt() {
    return E("floatBE", 4).map(function (e) {
      return e.readFloatBE(0);
    });
  }
  function pt() {
    return E("floatLE", 4).map(function (e) {
      return e.readFloatLE(0);
    });
  }
  function dt() {
    return E("doubleBE", 8).map(function (e) {
      return e.readDoubleBE(0);
    });
  }
  function ht() {
    return E("doubleLE", 8).map(function (e) {
      return e.readDoubleLE(0);
    });
  }
  function mt(e) {
    return Array.prototype.slice.call(e);
  }
  function M(e) {
    return e instanceof u;
  }
  function R(e) {
    return {}.toString.call(e) === "[object Array]";
  }
  function W(e) {
    return we() && Buffer.isBuffer(e);
  }
  function h(e, t) {
    return { status: !0, index: e, value: t, furthest: -1, expected: [] };
  }
  function b(e, t) {
    return (
      R(t) || (t = [t]),
      { status: !1, index: -1, value: null, furthest: e, expected: t }
    );
  }
  function w(e, t) {
    if (!t || e.furthest > t.furthest) return e;
    var n = e.furthest === t.furthest ? vt(e.expected, t.expected) : t.expected;
    return {
      status: e.status,
      index: e.index,
      value: e.value,
      furthest: t.furthest,
      expected: n,
    };
  }
  var J = {};
  function xe(e, t) {
    if (W(e)) return { offset: t, line: -1, column: -1 };
    e in J || (J[e] = {});
    for (var n = J[e], r = 0, i = 0, o = 0, a = t; a >= 0; ) {
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
    var s = r + i,
      c = t - o;
    return (
      (n[t] = { line: s, lineStart: o }),
      { offset: t, line: s + 1, column: c + 1 }
    );
  }
  function vt(e, t) {
    if (ut() && Array.from) {
      for (var n = new Set(e), r = 0; r < t.length; r++) n.add(t[r]);
      var i = Array.from(n);
      return i.sort(), i;
    }
    for (var o = {}, a = 0; a < e.length; a++) o[e[a]] = !0;
    for (var s = 0; s < t.length; s++) o[t[s]] = !0;
    var c = [];
    for (var l in o) ({}).hasOwnProperty.call(o, l) && c.push(l);
    return c.sort(), c;
  }
  function _(e) {
    if (!M(e)) throw new Error("not a parser: " + e);
  }
  function Y(e, t) {
    return typeof e == "string" ? e.charAt(t) : e[t];
  }
  function yt(e) {
    if (!R(e)) throw new Error("not an array: " + e);
  }
  function k(e) {
    if (typeof e != "number") throw new Error("not a number: " + e);
  }
  function bt(e) {
    if (!(e instanceof RegExp)) throw new Error("not a regexp: " + e);
    for (var t = Se(e), n = 0; n < t.length; n++) {
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
  var wt = 2,
    Et = 3,
    j = 8,
    xt = j * 5,
    Pt = j * 4,
    ve = "  ";
  function G(e, t) {
    return new Array(t + 1).join(e);
  }
  function St(e) {
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
  function Bt(e, t) {
    var n = e.length,
      r = [],
      i = 0;
    if (n <= t) return [e.slice()];
    for (var o = 0; o < n; o++)
      r[i] || r.push([]), r[i].push(e[o]), (o + 1) % t === 0 && i++;
    return r;
  }
  function ye(e, t, n, r) {
    return { from: e - t > 0 ? e - t : 0, to: e + n > r ? r : e + n };
  }
  function jt(e) {
    return e.from === 0 && e.to === 1
      ? { from: e.from, to: e.to }
      : { from: e.from / j, to: Math.floor(e.to / j) };
  }
  function Ot(e, t) {
    var n = t.index,
      r = n.offset,
      i = 1,
      o,
      a,
      s,
      c,
      l;
    if (r === e.length) return "Got the end of the input";
    if (W(e)) {
      var g = r - (r % j),
        p = r - g,
        d = ye(g, xt, Pt + j, e.length),
        m = e.slice(d.from, d.to),
        y = Bt(m.toJSON().data, j),
        A = B(function (S) {
          return B(function (ie) {
            return U(ie.toString(16), 2, "0");
          }, S);
        }, y);
      (c = jt(d)),
        (a = g / j),
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
        (a = n.line - 1),
        (c = ye(a, wt, Et, P.length)),
        (s = P.slice(c.from, c.to)),
        (l = c.to.toString().length);
    }
    var Je = a - c.from;
    W(e) &&
      ((l = ((c.to > 0 ? c.to - 1 : c.to) * 8).toString(16).length),
      l < 2 && (l = 2));
    var Ge = L(
      function (S, ie, oe) {
        var ge = oe === Je,
          Qe = ge ? "> " : ve,
          ae;
        return (
          W(e)
            ? (ae = U(((c.from + oe) * 8).toString(16), l, "0"))
            : (ae = U((c.from + oe + 1).toString(), l, " ")),
          [].concat(
            S,
            [Qe + ae + " | " + ie],
            ge ? [ve + G(" ", l) + " | " + U("", o, " ") + G("^", i)] : []
          )
        );
      },
      [],
      s
    );
    return Ge.join(`
`);
  }
  function Pe(e, t) {
    return [
      `
`,
      "-- PARSING FAILED " + G("-", 50),
      `

`,
      Ot(e, t),
      `

`,
      St(t.expected),
      `
`,
    ].join("");
  }
  function Se(e) {
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
  function Lt(e) {
    return RegExp("^(?:" + e.source + ")", Se(e));
  }
  function Z() {
    for (var e = [].slice.call(arguments), t = e.length, n = 0; n < t; n += 1)
      _(e[n]);
    return u(function (r, i) {
      for (var o, a = new Array(t), s = 0; s < t; s += 1) {
        if (((o = w(e[s]._(r, i), o)), !o.status)) return o;
        (a[s] = o.value), (i = o.index);
      }
      return w(h(i, a), o);
    });
  }
  function $t() {
    for (
      var e = {}, t = 0, n = mt(arguments), r = n.length, i = 0;
      i < r;
      i += 1
    ) {
      var o = n[i];
      if (!M(o)) {
        if (R(o)) {
          var a = o.length === 2 && typeof o[0] == "string" && M(o[1]);
          if (a) {
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
    return u(function (c, l) {
      for (var g, p = {}, d = 0; d < r; d += 1) {
        var m, y;
        if (
          (R(n[d]) ? ((m = n[d][0]), (y = n[d][1])) : ((m = null), (y = n[d])),
          (g = w(y._(c, l), g)),
          !g.status)
        )
          return g;
        m && (p[m] = g.value), (l = g.index);
      }
      return w(h(l, p), g);
    });
  }
  function $() {
    var e = [].slice.call(arguments);
    if (e.length === 0) throw new Error("seqMap needs at least one argument");
    var t = e.pop();
    return (
      O(t),
      Z.apply(null, e).map(function (n) {
        return t.apply(null, n);
      })
    );
  }
  function It(e) {
    var t = {};
    for (var n in e)
      ({}).hasOwnProperty.call(e, n) &&
        (function (r) {
          var i = function () {
            return e[r](t);
          };
          t[r] = Oe(i);
        })(n);
    return t;
  }
  function X() {
    var e = [].slice.call(arguments),
      t = e.length;
    if (t === 0) return ee("zero alternates");
    for (var n = 0; n < t; n += 1) _(e[n]);
    return u(function (r, i) {
      for (var o, a = 0; a < e.length; a += 1)
        if (((o = w(e[a]._(r, i), o)), o.status)) return o;
      return o;
    });
  }
  function Be(e, t) {
    return se(e, t).or(I([]));
  }
  function se(e, t) {
    _(e), _(t);
    var n = t.then(e).many();
    return $(e, n, function (r, i) {
      return [r].concat(i);
    });
  }
  f.parse = function (e) {
    if (typeof e != "string" && !W(e))
      throw new Error(
        ".parse must be called with a string or Buffer as its argument"
      );
    var t = this.skip(ce)._(e, 0),
      n;
    return (
      t.status
        ? (n = { status: !0, value: t.value })
        : (n = { status: !1, index: xe(e, t.furthest), expected: t.expected }),
      delete J[e],
      n
    );
  };
  f.tryParse = function (e) {
    var t = this.parse(e);
    if (t.status) return t.value;
    var n = Pe(e, t),
      r = new Error(n);
    throw ((r.type = "ParsimmonError"), (r.result = t), r);
  };
  f.assert = function (e, t) {
    return this.chain(function (n) {
      return e(n) ? I(n) : ee(t);
    });
  };
  f.or = function (e) {
    return X(this, e);
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
      _(e),
      Z(this, e).map(function (t) {
        return t[1];
      })
    );
  };
  f.many = function () {
    var e = this;
    return u(function (t, n) {
      for (var r = [], i = void 0; ; )
        if (((i = w(e._(t, n), i)), i.status)) {
          if (n === i.index)
            throw new Error(
              "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
            );
          (n = i.index), r.push(i.value);
        } else return w(h(n, r), i);
    });
  };
  f.tieWith = function (e) {
    return (
      T(e),
      this.map(function (t) {
        if ((yt(t), t.length)) {
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
      k(e),
      k(t),
      u(function (r, i) {
        for (var o = [], a = void 0, s = void 0, c = 0; c < e; c += 1)
          if (((a = n._(r, i)), (s = w(a, s)), a.status))
            (i = a.index), o.push(a.value);
          else return s;
        for (; c < t && ((a = n._(r, i)), (s = w(a, s)), a.status); c += 1)
          (i = a.index), o.push(a.value);
        return w(h(i, o), s);
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
    return u(function (n, r) {
      var i = t._(n, r);
      return i.status ? w(h(i.index, e(i.value)), i) : i;
    });
  };
  f.contramap = function (e) {
    O(e);
    var t = this;
    return u(function (n, r) {
      var i = t.parse(e(n.slice(r)));
      return i.status ? h(r + n.length, i.value) : i;
    });
  };
  f.promap = function (e, t) {
    return O(e), O(t), this.contramap(e).map(t);
  };
  f.skip = function (e) {
    return Z(this, e).map(function (t) {
      return t[0];
    });
  };
  f.mark = function () {
    return $(C, this, C, function (e, t, n) {
      return { start: e, value: t, end: n };
    });
  };
  f.node = function (e) {
    return $(C, this, C, function (t, n, r) {
      return { name: e, value: n, start: t, end: r };
    });
  };
  f.sepBy = function (e) {
    return Be(this, e);
  };
  f.sepBy1 = function (e) {
    return se(this, e);
  };
  f.lookahead = function (e) {
    return this.skip(Q(e));
  };
  f.notFollowedBy = function (e) {
    return this.skip(je(e));
  };
  f.desc = function (e) {
    R(e) || (e = [e]);
    var t = this;
    return u(function (n, r) {
      var i = t._(n, r);
      return i.status || (i.expected = e), i;
    });
  };
  f.fallback = function (e) {
    return this.or(I(e));
  };
  f.ap = function (e) {
    return $(e, this, function (t, n) {
      return t(n);
    });
  };
  f.chain = function (e) {
    var t = this;
    return u(function (n, r) {
      var i = t._(n, r);
      if (!i.status) return i;
      var o = e(i.value);
      return w(o._(n, i.index), i);
    });
  };
  function F(e) {
    T(e);
    var t = "'" + e + "'";
    return u(function (n, r) {
      var i = r + e.length,
        o = n.slice(r, i);
      return o === e ? h(i, o) : b(r, t);
    });
  }
  function At(e) {
    if ((V(), k(e), e > 255))
      throw new Error(
        "Value specified to byte constructor (" +
          e +
          "=0x" +
          e.toString(16) +
          ") is larger in value than a single byte."
      );
    var t = (e > 15 ? "0x" : "0x0") + e.toString(16);
    return u(function (n, r) {
      var i = Y(n, r);
      return i === e ? h(r + 1, i) : b(r, t);
    });
  }
  function x(e, t) {
    bt(e), arguments.length >= 2 ? k(t) : (t = 0);
    var n = Lt(e),
      r = "" + e;
    return u(function (i, o) {
      var a = n.exec(i.slice(o));
      if (a) {
        if (0 <= t && t <= a.length) {
          var s = a[0],
            c = a[t];
          return h(o + s.length, c);
        }
        var l = "valid match group (0 to " + a.length + ") in " + r;
        return b(o, l);
      }
      return b(o, r);
    });
  }
  function I(e) {
    return u(function (t, n) {
      return h(n, e);
    });
  }
  function ee(e) {
    return u(function (t, n) {
      return b(n, e);
    });
  }
  function Q(e) {
    if (M(e))
      return u(function (t, n) {
        var r = e._(t, n);
        return (r.index = n), (r.value = ""), r;
      });
    if (typeof e == "string") return Q(F(e));
    if (e instanceof RegExp) return Q(x(e));
    throw new Error("not a string, regexp, or parser: " + e);
  }
  function je(e) {
    return (
      _(e),
      u(function (t, n) {
        var r = e._(t, n),
          i = t.slice(n, r.index);
        return r.status ? b(n, 'not "' + i + '"') : h(n, null);
      })
    );
  }
  function te(e) {
    return (
      O(e),
      u(function (t, n) {
        var r = Y(t, n);
        return n < t.length && e(r)
          ? h(n + 1, r)
          : b(n, "a character/byte matching " + e);
      })
    );
  }
  function Rt(e) {
    for (var t = e.split(""), n = 0; n < t.length; n++) t[n] = "'" + t[n] + "'";
    return te(function (r) {
      return e.indexOf(r) >= 0;
    }).desc(t);
  }
  function _t(e) {
    return te(function (t) {
      return e.indexOf(t) < 0;
    }).desc("none of '" + e + "'");
  }
  function kt(e) {
    return u(e(h, b));
  }
  function Wt(e, t) {
    return te(function (n) {
      return e <= n && n <= t;
    }).desc(e + "-" + t);
  }
  function Tt(e) {
    return (
      O(e),
      u(function (t, n) {
        for (var r = n; r < t.length && e(Y(t, r)); ) r++;
        return h(r, t.slice(n, r));
      })
    );
  }
  function Oe(e, t) {
    arguments.length < 2 && ((t = e), (e = void 0));
    var n = u(function (r, i) {
      return (n._ = t()._), n._(r, i);
    });
    return e ? n.desc(e) : n;
  }
  function fe() {
    return ee("fantasy-land/empty");
  }
  f.concat = f.or;
  f.empty = fe;
  f.of = I;
  f["fantasy-land/ap"] = f.ap;
  f["fantasy-land/chain"] = f.chain;
  f["fantasy-land/concat"] = f.concat;
  f["fantasy-land/empty"] = f.empty;
  f["fantasy-land/of"] = f.of;
  f["fantasy-land/map"] = f.map;
  var C = u(function (e, t) {
      return h(t, xe(e, t));
    }),
    Mt = u(function (e, t) {
      return t >= e.length ? b(t, "any character/byte") : h(t + 1, Y(e, t));
    }),
    Ct = u(function (e, t) {
      return h(e.length, e.slice(t));
    }),
    ce = u(function (e, t) {
      return t < e.length ? b(t, "EOF") : h(t, null);
    }),
    Ft = x(/[0-9]/).desc("a digit"),
    qt = x(/[0-9]*/).desc("optional digits"),
    Nt = x(/[a-z]/i).desc("a letter"),
    Dt = x(/[a-z]*/i).desc("optional letters"),
    Kt = x(/\s*/).desc("optional whitespace"),
    zt = x(/\s+/).desc("whitespace"),
    Le = F("\r"),
    $e = F(`
`),
    Ie = F(`\r
`),
    Ae = X(Ie, $e, Le).desc("newline"),
    Ut = X(Ae, ce);
  u.all = Ct;
  u.alt = X;
  u.any = Mt;
  u.cr = Le;
  u.createLanguage = It;
  u.crlf = Ie;
  u.custom = kt;
  u.digit = Ft;
  u.digits = qt;
  u.empty = fe;
  u.end = Ut;
  u.eof = ce;
  u.fail = ee;
  u.formatError = Pe;
  u.index = C;
  u.isParser = M;
  u.lazy = Oe;
  u.letter = Nt;
  u.letters = Dt;
  u.lf = $e;
  u.lookahead = Q;
  u.makeFailure = b;
  u.makeSuccess = h;
  u.newline = Ae;
  u.noneOf = _t;
  u.notFollowedBy = je;
  u.of = I;
  u.oneOf = Rt;
  u.optWhitespace = Kt;
  u.Parser = u;
  u.range = Wt;
  u.regex = x;
  u.regexp = x;
  u.sepBy = Be;
  u.sepBy1 = se;
  u.seq = Z;
  u.seqMap = $;
  u.seqObj = $t;
  u.string = F;
  u.succeed = I;
  u.takeWhile = Tt;
  u.test = te;
  u.whitespace = zt;
  u["fantasy-land/empty"] = fe;
  u["fantasy-land/of"] = I;
  u.Binary = {
    bitSeq: Ee,
    bitSeqObj: st,
    byte: At,
    buffer: ft,
    encodedString: ct,
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
    floatBE: gt(),
    floatLE: pt(),
    doubleBE: dt(),
    doubleLE: ht(),
  };
  Re.exports = u;
});
var qe = de((pn, Fe) => {
  Fe.exports = q;
  q.flatten = q;
  q.unflatten = Ce;
  function Te(e) {
    return (
      e &&
      e.constructor &&
      typeof e.constructor.isBuffer == "function" &&
      e.constructor.isBuffer(e)
    );
  }
  function Me(e) {
    return e;
  }
  function q(e, t) {
    t = t || {};
    let n = t.delimiter || ".",
      r = t.maxDepth,
      i = t.transformKey || Me,
      o = {};
    function a(s, c, l) {
      (l = l || 1),
        Object.keys(s).forEach(function (g) {
          let p = s[g],
            d = t.safe && Array.isArray(p),
            m = Object.prototype.toString.call(p),
            y = Te(p),
            A = m === "[object Object]" || m === "[object Array]",
            P = c ? c + n + i(g) : i(g);
          if (!d && !y && A && Object.keys(p).length && (!t.maxDepth || l < r))
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
      i = t.transformKey || Me,
      o = {};
    if (Te(e) || Object.prototype.toString.call(e) !== "[object Object]")
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
          : c(p, g, q(e[p], t));
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
        y[d] = Ce(e[g], t);
      }),
      o
    );
  }
});
function ue(e) {
  return (t) => (n) => e({ settings: t, env: n });
}
function me(e) {
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
var v = he(_e(), 1),
  Jt = v.default.createLanguage({
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
        (t, n, r, i, o, a) => ({
          messageId: o,
          position: {
            start: { line: i.line, character: i.column },
            end: { line: a.line, character: a.column },
          },
        })
      );
    },
  });
function ke(e) {
  try {
    return Jt.entry.tryParse(e);
  } catch {
    return [];
  }
}
var We = {
  messageReferenceMatchers: [async (e) => ke(e.documentText)],
  extractMessageOptions: [{ callback: (e) => `{t("${e}")}` }],
  documentSelectors: [
    { language: "javascript" },
    { language: "typescript" },
    { language: "svelte" },
  ],
};
var re = he(qe(), 1);
var Ne = (e) => {
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
var ne = {},
  le = {};
function De() {
  let e = Object.values(ne);
  return (
    e
      .sort(
        (t, n) =>
          e.filter((r) => r === t).length - e.filter((r) => r === n).length
      )
      .pop() ?? 2
  );
}
var Gt = ue(({ settings: e, env: t }) => ({
  id: "inlang.plugin-i18next",
  async config() {
    me(e);
    let n = {
      variableReferencePattern: ["{{", "}}"],
      ignore: [],
      format: { nested: !1 },
      ...e,
    };
    return {
      languages: await Qt({ $fs: t.$fs, settings: n }),
      readResources: (r) => Vt({ ...r, $fs: t.$fs, settings: n }),
      writeResources: (r) => Zt({ ...r, $fs: t.$fs, settings: n }),
      ideExtension: We,
    };
  },
}));
async function Qt(e) {
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
async function Vt(e) {
  let t = [];
  for (let n of e.config.languages) {
    let r = {
      type: "Resource",
      languageTag: { type: "LanguageTag", name: n },
      body: [],
    };
    if (typeof e.settings.pathPattern != "string")
      for (let [i, o] of Object.entries(e.settings.pathPattern)) {
        let a = await Ke(o, n, e.$fs);
        a &&
          (r.body = [
            ...r.body,
            ...ze(
              a,
              n,
              e.settings.variableReferencePattern,
              e.settings.format.nested,
              i
            ),
          ]);
      }
    else {
      let i = await Ke(e.settings.pathPattern, n, e.$fs);
      r.body = [
        ...r.body,
        ...ze(
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
async function Ke(e, t, n) {
  let r = e.replace("{language}", t);
  try {
    let i = await n.readFile(r, { encoding: "utf-8" });
    return (
      (ne[r] = Ne(i)),
      (le[r] = i.endsWith(`
`)),
      JSON.parse(i)
    );
  } catch (i) {
    if (i.code === "ENOENT") return;
    throw i;
  }
}
function ze(e, t, n, r, i) {
  let o = r
    ? (0, re.flatten)(e, {
        transformKey: function (a) {
          return a.replace(".", "\\u002E");
        },
      })
    : e;
  return o !== void 0
    ? Object.entries(o).map((a) => {
        if (typeof a[1] != "string")
          throw new Error(
            "You configured a flattened key project. If you have nested keys please add 'format: { nested: true }' to the pluginSettings"
          );
        return Ht(a[0], a[1], n, i);
      })
    : [];
}
function Ht(e, t, n, r) {
  return {
    type: "Message",
    id: {
      type: "Identifier",
      name: r ? r + "." + e.replace("\\u002E", ".") : e.replace("\\u002E", "."),
    },
    pattern: Yt(t, n),
  };
}
function Yt(e, t) {
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
async function Zt(e) {
  for (let t of e.resources) {
    let n = t.languageTag.name;
    if (typeof e.settings.pathPattern != "string")
      for (let [r, i] of Object.entries(e.settings.pathPattern)) {
        let o = i.replace("{language}", n).split("/").slice(0, -1).join("/");
        try {
          await e.$fs.readdir(o);
        } catch {
          console.log(n, i, r), await e.$fs.mkdir(o);
        }
        let a = t.body
          .filter((s) => s.id.name.split(".")[0] === r)
          .map((s) => ({
            ...s,
            id: { ...s.id, name: s.id.name.replace(r + ".", "") },
          }));
        if (a.length !== 0) {
          let s = i.replace("{language}", n);
          await e.$fs.writeFile(
            s,
            Ue(
              a,
              ne[s] ?? De(),
              le[s],
              e.settings.format.nested,
              e.settings.variableReferencePattern
            )
          );
        }
      }
    else {
      let r = e.settings.pathPattern.replace("{language}", n);
      await e.$fs.writeFile(
        r,
        Ue(
          t.body,
          ne[r] ?? De(),
          le[r],
          e.settings.format.nested,
          e.settings.variableReferencePattern
        )
      );
    }
  }
}
function Ue(e, t, n, r, i) {
  let o = {};
  for (let a of e) {
    let s =
      a.id.name.slice(-1) === "."
        ? a.id.name.replace(/.$/, "\\u002E")
        : a.id.name;
    o[s] = Xt(a.pattern, i);
  }
  return (
    r &&
      (o = (0, re.unflatten)(o, {
        transformKey: function (a) {
          return a.replace("\\u002E", ".");
        },
        object: !0,
      })),
    JSON.stringify(o, void 0, t) +
      (n
        ? `
`
        : "")
  );
}
function Xt(e, t) {
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
export { Gt as default };
//! DON'T TOP-LEVEL IMPORT ESBUILD PLUGINS. USE DYNAMIC IMPORTS.
//! See https://github.com/inlang/inlang/issues/486
