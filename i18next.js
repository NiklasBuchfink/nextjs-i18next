var Xt = Object.create;
var Ke = Object.defineProperty;
var Yt = Object.getOwnPropertyDescriptor;
var en = Object.getOwnPropertyNames;
var tn = Object.getPrototypeOf,
  nn = Object.prototype.hasOwnProperty;
var Je = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var rn = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of en(t))
      !nn.call(e, i) &&
        i !== n &&
        Ke(e, i, {
          get: () => t[i],
          enumerable: !(r = Yt(t, i)) || r.enumerable,
        });
  return e;
};
var Ve = (e, t, n) => (
  (n = e != undefined ? Xt(tn(e)) : {}),
  rn(
    t || !e || !e.__esModule
      ? Ke(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var St = Je((q, M) => {
  var an = 200,
    at = "__lodash_hash_undefined__",
    on = 800,
    un = 16,
    ot = 9007199254740991,
    ut = "[object Arguments]",
    sn = "[object Array]",
    fn = "[object AsyncFunction]",
    cn = "[object Boolean]",
    ln = "[object Date]",
    gn = "[object Error]",
    st = "[object Function]",
    pn = "[object GeneratorFunction]",
    dn = "[object Map]",
    hn = "[object Number]",
    mn = "[object Null]",
    ft = "[object Object]",
    vn = "[object Proxy]",
    yn = "[object RegExp]",
    bn = "[object Set]",
    wn = "[object String]",
    _n = "[object Undefined]",
    En = "[object WeakMap]",
    xn = "[object ArrayBuffer]",
    Sn = "[object DataView]",
    Pn = "[object Float32Array]",
    Tn = "[object Float64Array]",
    On = "[object Int8Array]",
    Bn = "[object Int16Array]",
    An = "[object Int32Array]",
    In = "[object Uint8Array]",
    $n = "[object Uint8ClampedArray]",
    Rn = "[object Uint16Array]",
    Cn = "[object Uint32Array]",
    jn = /[\\^$.*+?()[\]{}|]/g,
    Ln = /^\[object .+?Constructor\]$/,
    Mn = /^(?:0|[1-9]\d*)$/,
    p = {};
  p[Pn] = p[Tn] = p[On] = p[Bn] = p[An] = p[In] = p[$n] = p[Rn] = p[Cn] = !0;
  p[ut] =
    p[sn] =
    p[xn] =
    p[cn] =
    p[Sn] =
    p[ln] =
    p[gn] =
    p[st] =
    p[dn] =
    p[hn] =
    p[ft] =
    p[yn] =
    p[bn] =
    p[wn] =
    p[En] =
      !1;
  var ct =
      typeof globalThis == "object" &&
      globalThis &&
      globalThis.Object === Object &&
      globalThis,
    Nn = typeof self == "object" && self && self.Object === Object && self,
    H = ct || Nn || Function("return this")(),
    lt = typeof q == "object" && q && !q.nodeType && q,
    U = lt && typeof M == "object" && M && !M.nodeType && M,
    gt = U && U.exports === lt,
    Ae = gt && ct.process,
    Qe = (function () {
      try {
        var e = U && U.require && U.require("util").types;
        return e || (Ae && Ae.binding && Ae.binding("util"));
      } catch {}
    })(),
    Ze = Qe && Qe.isTypedArray;
  function Dn(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  function Fn(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  function zn(e) {
    return function (t) {
      return e(t);
    };
  }
  function Wn(e, t) {
    return e?.[t];
  }
  function qn(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var Un = Array.prototype,
    Gn = Function.prototype,
    te = Object.prototype,
    Ie = H["__core-js_shared__"],
    ne = Gn.toString,
    E = te.hasOwnProperty,
    Xe = (function () {
      var e = /[^.]+$/.exec((Ie && Ie.keys && Ie.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })(),
    pt = te.toString,
    Hn = ne.call(Object),
    Kn = RegExp(
      "^" +
        ne
          .call(E)
          .replace(jn, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Y = gt ? H.Buffer : void 0,
    Ye = H.Symbol,
    et = H.Uint8Array,
    tt = Y ? Y.allocUnsafe : void 0,
    dt = qn(Object.getPrototypeOf, Object),
    nt = Object.create,
    Jn = te.propertyIsEnumerable,
    Vn = Un.splice,
    A = Ye ? Ye.toStringTag : void 0,
    ee = (function () {
      try {
        var e = Me(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    kn = Y ? Y.isBuffer : void 0,
    rt = Math.max,
    Qn = Date.now,
    ht = Me(H, "Map"),
    G = Me(Object, "create"),
    Zn = (function () {
      function e() {}
      return function (t) {
        if (!$(t)) return {};
        if (nt) return nt(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })();
  function I(e) {
    var t = -1,
      n = e == undefined ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function Xn() {
    (this.__data__ = G ? G(null) : {}), (this.size = 0);
  }
  function Yn(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  function er(e) {
    var t = this.__data__;
    if (G) {
      var n = t[e];
      return n === at ? void 0 : n;
    }
    return E.call(t, e) ? t[e] : void 0;
  }
  function tr(e) {
    var t = this.__data__;
    return G ? t[e] !== void 0 : E.call(t, e);
  }
  function nr(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = G && t === void 0 ? at : t),
      this
    );
  }
  I.prototype.clear = Xn;
  I.prototype.delete = Yn;
  I.prototype.get = er;
  I.prototype.has = tr;
  I.prototype.set = nr;
  function x(e) {
    var t = -1,
      n = e == undefined ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function rr() {
    (this.__data__ = []), (this.size = 0);
  }
  function ir(e) {
    var t = this.__data__,
      n = re(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Vn.call(t, n, 1), --this.size, !0;
  }
  function ar(e) {
    var t = this.__data__,
      n = re(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function or(e) {
    return re(this.__data__, e) > -1;
  }
  function ur(e, t) {
    var n = this.__data__,
      r = re(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  x.prototype.clear = rr;
  x.prototype.delete = ir;
  x.prototype.get = ar;
  x.prototype.has = or;
  x.prototype.set = ur;
  function N(e) {
    var t = -1,
      n = e == undefined ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function sr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new I(),
        map: new (ht || x)(),
        string: new I(),
      });
  }
  function fr(e) {
    var t = ae(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function cr(e) {
    return ae(this, e).get(e);
  }
  function lr(e) {
    return ae(this, e).has(e);
  }
  function gr(e, t) {
    var n = ae(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  N.prototype.clear = sr;
  N.prototype.delete = fr;
  N.prototype.get = cr;
  N.prototype.has = lr;
  N.prototype.set = gr;
  function D(e) {
    var t = (this.__data__ = new x(e));
    this.size = t.size;
  }
  function pr() {
    (this.__data__ = new x()), (this.size = 0);
  }
  function dr(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function hr(e) {
    return this.__data__.get(e);
  }
  function mr(e) {
    return this.__data__.has(e);
  }
  function vr(e, t) {
    var n = this.__data__;
    if (n instanceof x) {
      var r = n.__data__;
      if (!ht || r.length < an - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new N(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  D.prototype.clear = pr;
  D.prototype.delete = dr;
  D.prototype.get = hr;
  D.prototype.has = mr;
  D.prototype.set = vr;
  function yr(e, t) {
    var n = je(e),
      r = !n && Ce(e),
      i = !n && !r && bt(e),
      a = !n && !r && !i && _t(e),
      o = n || r || i || a,
      u = o ? Fn(e.length, String) : [],
      f = u.length;
    for (var l in e)
      (t || E.call(e, l)) &&
        !(
          o &&
          (l == "length" ||
            (i && (l == "offset" || l == "parent")) ||
            (a && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
            vt(l, f))
        ) &&
        u.push(l);
    return u;
  }
  function $e(e, t, n) {
    ((n !== void 0 && !oe(e[t], n)) || (n === void 0 && !(t in e))) &&
      Le(e, t, n);
  }
  function br(e, t, n) {
    var r = e[t];
    (!(E.call(e, t) && oe(r, n)) || (n === void 0 && !(t in e))) && Le(e, t, n);
  }
  function re(e, t) {
    for (var n = e.length; n--; ) if (oe(e[n][0], t)) return n;
    return -1;
  }
  function Le(e, t, n) {
    t == "__proto__" && ee
      ? ee(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var wr = Cr();
  function ie(e) {
    return e == undefined
      ? e === void 0
        ? _n
        : mn
      : A && A in Object(e)
      ? jr(e)
      : zr(e);
  }
  function it(e) {
    return K(e) && ie(e) == ut;
  }
  function _r(e) {
    if (!$(e) || Dr(e)) return !1;
    var t = De(e) ? Kn : Ln;
    return t.test(Gr(e));
  }
  function Er(e) {
    return K(e) && wt(e.length) && !!p[ie(e)];
  }
  function xr(e) {
    if (!$(e)) return Fr(e);
    var t = yt(e),
      n = [];
    for (var r in e) (r == "constructor" && (t || !E.call(e, r))) || n.push(r);
    return n;
  }
  function mt(e, t, n, r, i) {
    e !== t &&
      wr(
        t,
        function (a, o) {
          if ((i || (i = new D()), $(a))) Sr(e, t, o, n, mt, r, i);
          else {
            var u = r ? r(Re(e, o), a, o + "", e, t, i) : void 0;
            u === void 0 && (u = a), $e(e, o, u);
          }
        },
        Et
      );
  }
  function Sr(e, t, n, r, i, a, o) {
    var u = Re(e, n),
      f = Re(t, n),
      l = o.get(f);
    if (l) {
      $e(e, n, l);
      return;
    }
    var g = a ? a(u, f, n + "", e, t, o) : void 0,
      b = g === void 0;
    if (b) {
      var m = je(f),
        w = !m && bt(f),
        P = !m && !w && _t(f);
      (g = f),
        m || w || P
          ? je(u)
            ? (g = u)
            : Hr(u)
            ? (g = Ir(u))
            : w
            ? ((b = !1), (g = Or(f, !0)))
            : P
            ? ((b = !1), (g = Ar(f, !0)))
            : (g = [])
          : Kr(f) || Ce(f)
          ? ((g = u), Ce(u) ? (g = Jr(u)) : (!$(u) || De(u)) && (g = Lr(f)))
          : (b = !1);
    }
    b && (o.set(f, g), i(g, f, r, a, o), o.delete(f)), $e(e, n, g);
  }
  function Pr(e, t) {
    return qr(Wr(e, t, xt), e + "");
  }
  var Tr = ee
    ? function (e, t) {
        return ee(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kr(t),
          writable: !0,
        });
      }
    : xt;
  function Or(e, t) {
    if (t) return [...e];
    var n = e.length,
      r = tt ? tt(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function Br(e) {
    var t = new e.constructor(e.byteLength);
    return new et(t).set(new et(e)), t;
  }
  function Ar(e, t) {
    var n = t ? Br(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  function Ir(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  function $r(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var a = -1, o = t.length; ++a < o; ) {
      var u = t[a],
        f = r ? r(n[u], e[u], u, n, e) : void 0;
      f === void 0 && (f = e[u]), i ? Le(n, u, f) : br(n, u, f);
    }
    return n;
  }
  function Rr(e) {
    return Pr(function (t, n) {
      var r = -1,
        i = n.length,
        a = i > 1 ? n[i - 1] : void 0,
        o = i > 2 ? n[2] : void 0;
      for (
        a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0,
          o && Mr(n[0], n[1], o) && ((a = i < 3 ? void 0 : a), (i = 1)),
          t = Object(t);
        ++r < i;

      ) {
        var u = n[r];
        u && e(t, u, r, a);
      }
      return t;
    });
  }
  function Cr(e) {
    return function (t, n, r) {
      for (var i = -1, a = Object(t), o = r(t), u = o.length; u--; ) {
        var f = o[e ? u : ++i];
        if (n(a[f], f, a) === !1) break;
      }
      return t;
    };
  }
  function ae(e, t) {
    var n = e.__data__;
    return Nr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Me(e, t) {
    var n = Wn(e, t);
    return _r(n) ? n : void 0;
  }
  function jr(e) {
    var t = E.call(e, A),
      n = e[A];
    try {
      e[A] = void 0;
      var r = !0;
    } catch {}
    var i = pt.call(e);
    return r && (t ? (e[A] = n) : delete e[A]), i;
  }
  function Lr(e) {
    return typeof e.constructor == "function" && !yt(e) ? Zn(dt(e)) : {};
  }
  function vt(e, t) {
    var n = typeof e;
    return (
      (t = t ?? ot),
      !!t &&
        (n == "number" || (n != "symbol" && Mn.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  function Mr(e, t, n) {
    if (!$(n)) return !1;
    var r = typeof t;
    return (r == "number" ? Ne(n) && vt(t, n.length) : r == "string" && t in n)
      ? oe(n[t], e)
      : !1;
  }
  function Nr(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function Dr(e) {
    return !!Xe && Xe in e;
  }
  function yt(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || te;
    return e === n;
  }
  function Fr(e) {
    var t = [];
    if (e != undefined) for (var n in Object(e)) t.push(n);
    return t;
  }
  function zr(e) {
    return pt.call(e);
  }
  function Wr(e, t, n) {
    return (
      (t = rt(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, i = -1, a = rt(r.length - t, 0), o = Array(a);
          ++i < a;

        )
          o[i] = r[t + i];
        i = -1;
        for (var u = Array(t + 1); ++i < t; ) u[i] = r[i];
        return (u[t] = n(o)), Dn(e, this, u);
      }
    );
  }
  function Re(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  var qr = Ur(Tr);
  function Ur(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = Qn(),
        i = un - (r - n);
      if (((n = r), i > 0)) {
        if (++t >= on) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function Gr(e) {
    if (e != undefined) {
      try {
        return ne.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  function oe(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Ce = it(
      (function () {
        return arguments;
      })()
    )
      ? it
      : function (e) {
          return K(e) && E.call(e, "callee") && !Jn.call(e, "callee");
        },
    je = Array.isArray;
  function Ne(e) {
    return e != undefined && wt(e.length) && !De(e);
  }
  function Hr(e) {
    return K(e) && Ne(e);
  }
  var bt = kn || Qr;
  function De(e) {
    if (!$(e)) return !1;
    var t = ie(e);
    return t == st || t == pn || t == fn || t == vn;
  }
  function wt(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ot;
  }
  function $(e) {
    var t = typeof e;
    return e != undefined && (t == "object" || t == "function");
  }
  function K(e) {
    return e != undefined && typeof e == "object";
  }
  function Kr(e) {
    if (!K(e) || ie(e) != ft) return !1;
    var t = dt(e);
    if (t === null) return !0;
    var n = E.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && ne.call(n) == Hn;
  }
  var _t = Ze ? zn(Ze) : Er;
  function Jr(e) {
    return $r(e, Et(e));
  }
  function Et(e) {
    return Ne(e) ? yr(e, !0) : xr(e);
  }
  var Vr = Rr(function (e, t, n) {
    mt(e, t, n);
  });
  function kr(e) {
    return function () {
      return e;
    };
  }
  function xt(e) {
    return e;
  }
  function Qr() {
    return !1;
  }
  M.exports = Vr;
});
var qt = Je((oa, Wt) => {
  "use strict";
  function s(e) {
    if (!(this instanceof s)) return new s(e);
    this._ = e;
  }
  var c = s.prototype;
  function Bt(e, t) {
    var n = 0;
    for (n; n < e; n++) t(n);
  }
  function Zr(e, t) {
    Bt(t.length, function (n) {
      e(t[n], n, t);
    });
  }
  function C(e, t, n) {
    return (
      Zr(function (r, i, a) {
        t = e(t, r, i, a);
      }, n),
      t
    );
  }
  function O(e, t) {
    return C(
      function (n, r, i, a) {
        return [...n, e(r, i, a)];
      },
      [],
      t
    );
  }
  function Xr(e) {
    var t = C(
      function (n, r, i, a) {
        return n.concat(
          i === a.length - 1
            ? Buffer.from([r, 0]).readUInt16BE(0)
            : a.readUInt16BE(i)
        );
      },
      [],
      e
    );
    return Buffer.from(
      O(function (n) {
        return ((n << 1) & 65535) >> 8;
      }, t)
    );
  }
  function Yr(e, t) {
    var n = { v: 0, buf: t };
    return (
      Bt(e, function () {
        n = { v: (n.v << 1) | ei(n.buf), buf: Xr(n.buf) };
      }),
      n
    );
  }
  function ei(e) {
    return e[0] >> 7;
  }
  function ti(e) {
    return C(
      function (t, n) {
        return t + n;
      },
      0,
      e
    );
  }
  function ni(e, t) {
    return C(
      function (n, r) {
        return n || (e(r) ? r : n);
      },
      null,
      t
    );
  }
  function At() {
    return typeof Buffer < "u";
  }
  function ri() {
    if (s._supportsSet !== void 0) return s._supportsSet;
    var e = typeof Set < "u";
    return (s._supportsSet = e), e;
  }
  function me() {
    if (!At())
      throw new Error(
        "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
      );
  }
  function It(e) {
    me();
    var t = ti(e);
    if (t % 8 !== 0)
      throw new Error(
        "The bits [" +
          e.join(", ") +
          "] add up to " +
          t +
          " which is not an even number of bytes; the total should be divisible by 8"
      );
    var n = t / 8,
      r = ni(function (i) {
        return i > 48;
      }, e);
    if (r)
      throw new Error(
        r + " bit range requested exceeds 48 bit (6 byte) Number max."
      );
    return new s(function (i, a) {
      var o = n + a;
      return o > i.length
        ? v(a, n.toString() + " bytes")
        : d(
            o,
            C(
              function (u, f) {
                var l = Yr(f, u.buf);
                return { coll: u.coll.concat(l.v), buf: l.buf };
              },
              { coll: [], buf: i.slice(a, o) },
              e
            ).coll
          );
    });
  }
  function ii(e) {
    me();
    var t = {},
      n = 0,
      r = O(function (o) {
        if (F(o)) {
          var u = o;
          if (u.length !== 2)
            throw new Error(
              "[" +
                u.join(", ") +
                "] should be length 2, got length " +
                u.length
            );
          if ((V(u[0]), W(u[1]), Object.prototype.hasOwnProperty.call(t, u[0])))
            throw new Error("duplicate key in bitSeqObj: " + u[0]);
          return (t[u[0]] = !0), n++, u;
        } else return W(o), [null, o];
      }, e);
    if (n < 1)
      throw new Error(
        "bitSeqObj expects at least one named pair, got [" + e.join(", ") + "]"
      );
    var i = O(function (o) {
        return o[0];
      }, r),
      a = O(function (o) {
        return o[1];
      }, r);
    return It(a).map(function (o) {
      var u = O(function (f, l) {
        return [f, o[l]];
      }, i);
      return C(
        function (f, l) {
          return l[0] !== null && (f[l[0]] = l[1]), f;
        },
        {},
        u
      );
    });
  }
  function _(e, t) {
    return new s(function (n, r) {
      return (
        me(),
        r + t > n.length
          ? v(r, t + " bytes for " + e)
          : d(r + t, n.slice(r, r + t))
      );
    });
  }
  function ai(e) {
    return _("buffer", e).map(function (t) {
      return Buffer.from(t);
    });
  }
  function oi(e, t) {
    return _("string", t).map(function (n) {
      return n.toString(e);
    });
  }
  function ui(e) {
    return typeof e == "number" && Math.floor(e) === e;
  }
  function ve(e, t) {
    if (!ui(t) || t < 0 || t > 6)
      throw new Error(e + " requires integer length in range [0, 6].");
  }
  function se(e) {
    return (
      ve("uintBE", e),
      _("uintBE(" + e + ")", e).map(function (t) {
        return t.readUIntBE(0, e);
      })
    );
  }
  function fe(e) {
    return (
      ve("uintLE", e),
      _("uintLE(" + e + ")", e).map(function (t) {
        return t.readUIntLE(0, e);
      })
    );
  }
  function ce(e) {
    return (
      ve("intBE", e),
      _("intBE(" + e + ")", e).map(function (t) {
        return t.readIntBE(0, e);
      })
    );
  }
  function le(e) {
    return (
      ve("intLE", e),
      _("intLE(" + e + ")", e).map(function (t) {
        return t.readIntLE(0, e);
      })
    );
  }
  function si() {
    return _("floatBE", 4).map(function (e) {
      return e.readFloatBE(0);
    });
  }
  function fi() {
    return _("floatLE", 4).map(function (e) {
      return e.readFloatLE(0);
    });
  }
  function ci() {
    return _("doubleBE", 8).map(function (e) {
      return e.readDoubleBE(0);
    });
  }
  function li() {
    return _("doubleLE", 8).map(function (e) {
      return e.readDoubleLE(0);
    });
  }
  function gi(e) {
    return Array.prototype.slice.call(e);
  }
  function k(e) {
    return e instanceof s;
  }
  function F(e) {
    return {}.toString.call(e) === "[object Array]";
  }
  function J(e) {
    return At() && Buffer.isBuffer(e);
  }
  function d(e, t) {
    return { status: !0, index: e, value: t, furthest: -1, expected: [] };
  }
  function v(e, t) {
    return (
      F(t) || (t = [t]),
      { status: !1, index: -1, value: null, furthest: e, expected: t }
    );
  }
  function y(e, t) {
    if (!t || e.furthest > t.furthest) return e;
    var n = e.furthest === t.furthest ? pi(e.expected, t.expected) : t.expected;
    return {
      status: e.status,
      index: e.index,
      value: e.value,
      furthest: t.furthest,
      expected: n,
    };
  }
  var pe = {};
  function $t(e, t) {
    if (J(e)) return { offset: t, line: -1, column: -1 };
    e in pe || (pe[e] = {});
    for (var n = pe[e], r = 0, i = 0, a = 0, o = t; o >= 0; ) {
      if (o in n) {
        (r = n[o].line), a === 0 && (a = n[o].lineStart);
        break;
      }
      (e.charAt(o) ===
        `
` ||
        (e.charAt(o) === "\r" &&
          e.charAt(o + 1) !==
            `
`)) &&
        (i++, a === 0 && (a = o + 1)),
        o--;
    }
    var u = r + i,
      f = t - a;
    return (
      (n[t] = { line: u, lineStart: a }),
      { offset: t, line: u + 1, column: f + 1 }
    );
  }
  function pi(e, t) {
    if (ri() && Array.from) {
      for (var n = new Set(e), r = 0; r < t.length; r++) n.add(t[r]);
      var i = [...n];
      return i.sort(), i;
    }
    for (var a = {}, o = 0; o < e.length; o++) a[e[o]] = !0;
    for (var u = 0; u < t.length; u++) a[t[u]] = !0;
    var f = [];
    for (var l in a) ({}).hasOwnProperty.call(a, l) && f.push(l);
    return f.sort(), f;
  }
  function z(e) {
    if (!k(e)) throw new Error("not a parser: " + e);
  }
  function ye(e, t) {
    return typeof e == "string" ? e.charAt(t) : e[t];
  }
  function di(e) {
    if (!F(e)) throw new Error("not an array: " + e);
  }
  function W(e) {
    if (typeof e != "number") throw new Error("not a number: " + e);
  }
  function hi(e) {
    if (!(e instanceof RegExp)) throw new Error("not a regexp: " + e);
    for (var t = Ct(e), n = 0; n < t.length; n++) {
      var r = t.charAt(n);
      if (r !== "i" && r !== "m" && r !== "u" && r !== "s")
        throw new Error('unsupported regexp flag "' + r + '": ' + e);
    }
  }
  function R(e) {
    if (typeof e != "function") throw new Error("not a function: " + e);
  }
  function V(e) {
    if (typeof e != "string") throw new Error("not a string: " + e);
  }
  var mi = 2,
    vi = 3,
    B = 8,
    yi = B * 5,
    bi = B * 4,
    Tt = "  ";
  function de(e, t) {
    return new Array(t + 1).join(e);
  }
  function wi(e) {
    return e.length === 1
      ? `Expected:

` + e[0]
      : `Expected one of the following: 

` + e.join(", ");
  }
  function ge(e, t, n) {
    var r = t - e.length;
    return r <= 0 ? e : de(n, r) + e;
  }
  function _i(e, t) {
    var n = e.length,
      r = [],
      i = 0;
    if (n <= t) return [[...e]];
    for (var a = 0; a < n; a++)
      r[i] || r.push([]), r[i].push(e[a]), (a + 1) % t === 0 && i++;
    return r;
  }
  function Ot(e, t, n, r) {
    return { from: e - t > 0 ? e - t : 0, to: e + n > r ? r : e + n };
  }
  function Ei(e) {
    return e.from === 0 && e.to === 1
      ? { from: e.from, to: e.to }
      : { from: e.from / B, to: Math.floor(e.to / B) };
  }
  function xi(e, t) {
    var n = t.index,
      r = n.offset,
      i = 1,
      a,
      o,
      u,
      f,
      l;
    if (r === e.length) return "Got the end of the input";
    if (J(e)) {
      var g = r - (r % B),
        b = r - g,
        m = Ot(g, yi, bi + B, e.length),
        w = e.slice(m.from, m.to),
        P = _i(w.toJSON().data, B),
        Vt = O(function (T) {
          return O(function (Pe) {
            return ge(Pe.toString(16), 2, "0");
          }, T);
        }, P);
      (f = Ei(m)),
        (o = g / B),
        (a = b * 3),
        b >= 4 && (a += 1),
        (i = 2),
        (u = O(function (T) {
          return T.length <= 4
            ? T.join(" ")
            : T.slice(0, 4).join(" ") + "  " + T.slice(4).join(" ");
        }, Vt)),
        (l = ((f.to > 0 ? f.to - 1 : f.to) * 8).toString(16).length),
        l < 2 && (l = 2);
    } else {
      var Ge = e.split(/\r\n|[\n\r\u2028\u2029]/);
      (a = n.column - 1),
        (o = n.line - 1),
        (f = Ot(o, mi, vi, Ge.length)),
        (u = Ge.slice(f.from, f.to)),
        (l = f.to.toString().length);
    }
    var kt = o - f.from;
    J(e) &&
      ((l = ((f.to > 0 ? f.to - 1 : f.to) * 8).toString(16).length),
      l < 2 && (l = 2));
    var Qt = C(
      function (T, Pe, Te) {
        var He = Te === kt,
          Zt = He ? "> " : Tt,
          Oe;
        return (
          J(e)
            ? (Oe = ge(((f.from + Te) * 8).toString(16), l, "0"))
            : (Oe = ge((f.from + Te + 1).toString(), l, " ")),
          [].concat(
            T,
            [Zt + Oe + " | " + Pe],
            He ? [Tt + de(" ", l) + " | " + ge("", a, " ") + de("^", i)] : []
          )
        );
      },
      [],
      u
    );
    return Qt.join(`
`);
  }
  function Rt(e, t) {
    return [
      `
`,
      "-- PARSING FAILED " + de("-", 50),
      `

`,
      xi(e, t),
      `

`,
      wi(t.expected),
      `
`,
    ].join("");
  }
  function Ct(e) {
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
  function Si(e) {
    return RegExp("^(?:" + e.source + ")", Ct(e));
  }
  function be() {
    for (var e = [].slice.call(arguments), t = e.length, n = 0; n < t; n += 1)
      z(e[n]);
    return s(function (r, i) {
      for (var a, o = new Array(t), u = 0; u < t; u += 1) {
        if (((a = y(e[u]._(r, i), a)), !a.status)) return a;
        (o[u] = a.value), (i = a.index);
      }
      return y(d(i, o), a);
    });
  }
  function Pi() {
    for (
      var e = {}, t = 0, n = gi(arguments), r = n.length, i = 0;
      i < r;
      i += 1
    ) {
      var a = n[i];
      if (!k(a)) {
        if (F(a)) {
          var o = a.length === 2 && typeof a[0] == "string" && k(a[1]);
          if (o) {
            var u = a[0];
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
    return s(function (f, l) {
      for (var g, b = {}, m = 0; m < r; m += 1) {
        var w, P;
        if (
          (F(n[m]) ? ((w = n[m][0]), (P = n[m][1])) : ((w = null), (P = n[m])),
          (g = y(P._(f, l), g)),
          !g.status)
        )
          return g;
        w && (b[w] = g.value), (l = g.index);
      }
      return y(d(l, b), g);
    });
  }
  function j() {
    var e = [].slice.call(arguments);
    if (e.length === 0) throw new Error("seqMap needs at least one argument");
    var t = e.pop();
    return (
      R(t),
      be.apply(null, e).map(function (n) {
        return t.apply(null, n);
      })
    );
  }
  function Ti(e) {
    var t = {};
    for (var n in e)
      ({}).hasOwnProperty.call(e, n) &&
        (function (r) {
          var i = function () {
            return e[r](t);
          };
          t[r] = Mt(i);
        })(n);
    return t;
  }
  function we() {
    var e = [].slice.call(arguments),
      t = e.length;
    if (t === 0) return _e("zero alternates");
    for (var n = 0; n < t; n += 1) z(e[n]);
    return s(function (r, i) {
      for (var a, o = 0; o < e.length; o += 1)
        if (((a = y(e[o]._(r, i), a)), a.status)) return a;
      return a;
    });
  }
  function jt(e, t) {
    return We(e, t).or(L([]));
  }
  function We(e, t) {
    z(e), z(t);
    var n = t.then(e).many();
    return j(e, n, function (r, i) {
      return [r].concat(i);
    });
  }
  c.parse = function (e) {
    if (typeof e != "string" && !J(e))
      throw new Error(
        ".parse must be called with a string or Buffer as its argument"
      );
    var t = this.skip(Ue)._(e, 0),
      n;
    return (
      t.status
        ? (n = { status: !0, value: t.value })
        : (n = { status: !1, index: $t(e, t.furthest), expected: t.expected }),
      delete pe[e],
      n
    );
  };
  c.tryParse = function (e) {
    var t = this.parse(e);
    if (t.status) return t.value;
    var n = Rt(e, t),
      r = new Error(n);
    throw ((r.type = "ParsimmonError"), (r.result = t), r);
  };
  c.assert = function (e, t) {
    return this.chain(function (n) {
      return e(n) ? L(n) : _e(t);
    });
  };
  c.or = function (e) {
    return we(this, e);
  };
  c.trim = function (e) {
    return this.wrap(e, e);
  };
  c.wrap = function (e, t) {
    return j(e, this, t, function (n, r) {
      return r;
    });
  };
  c.thru = function (e) {
    return e(this);
  };
  c.then = function (e) {
    return (
      z(e),
      be(this, e).map(function (t) {
        return t[1];
      })
    );
  };
  c.many = function () {
    var e = this;
    return s(function (t, n) {
      for (var r = [], i = void 0; ; )
        if (((i = y(e._(t, n), i)), i.status)) {
          if (n === i.index)
            throw new Error(
              "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
            );
          (n = i.index), r.push(i.value);
        } else return y(d(n, r), i);
    });
  };
  c.tieWith = function (e) {
    return (
      V(e),
      this.map(function (t) {
        if ((di(t), t.length)) {
          V(t[0]);
          for (var n = t[0], r = 1; r < t.length; r++) V(t[r]), (n += e + t[r]);
          return n;
        } else return "";
      })
    );
  };
  c.tie = function () {
    return this.tieWith("");
  };
  c.times = function (e, t) {
    var n = this;
    return (
      arguments.length < 2 && (t = e),
      W(e),
      W(t),
      s(function (r, i) {
        for (var a = [], o = void 0, u = void 0, f = 0; f < e; f += 1)
          if (((o = n._(r, i)), (u = y(o, u)), o.status))
            (i = o.index), a.push(o.value);
          else return u;
        for (; f < t && ((o = n._(r, i)), (u = y(o, u)), o.status); f += 1)
          (i = o.index), a.push(o.value);
        return y(d(i, a), u);
      })
    );
  };
  c.result = function (e) {
    return this.map(function () {
      return e;
    });
  };
  c.atMost = function (e) {
    return this.times(0, e);
  };
  c.atLeast = function (e) {
    return j(this.times(e), this.many(), function (t, n) {
      return t.concat(n);
    });
  };
  c.map = function (e) {
    R(e);
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      return i.status ? y(d(i.index, e(i.value)), i) : i;
    });
  };
  c.contramap = function (e) {
    R(e);
    var t = this;
    return s(function (n, r) {
      var i = t.parse(e(n.slice(r)));
      return i.status ? d(r + n.length, i.value) : i;
    });
  };
  c.promap = function (e, t) {
    return R(e), R(t), this.contramap(e).map(t);
  };
  c.skip = function (e) {
    return be(this, e).map(function (t) {
      return t[0];
    });
  };
  c.mark = function () {
    return j(Q, this, Q, function (e, t, n) {
      return { start: e, value: t, end: n };
    });
  };
  c.node = function (e) {
    return j(Q, this, Q, function (t, n, r) {
      return { name: e, value: n, start: t, end: r };
    });
  };
  c.sepBy = function (e) {
    return jt(this, e);
  };
  c.sepBy1 = function (e) {
    return We(this, e);
  };
  c.lookahead = function (e) {
    return this.skip(he(e));
  };
  c.notFollowedBy = function (e) {
    return this.skip(Lt(e));
  };
  c.desc = function (e) {
    F(e) || (e = [e]);
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      return i.status || (i.expected = e), i;
    });
  };
  c.fallback = function (e) {
    return this.or(L(e));
  };
  c.ap = function (e) {
    return j(e, this, function (t, n) {
      return t(n);
    });
  };
  c.chain = function (e) {
    var t = this;
    return s(function (n, r) {
      var i = t._(n, r);
      if (!i.status) return i;
      var a = e(i.value);
      return y(a._(n, i.index), i);
    });
  };
  function Z(e) {
    V(e);
    var t = "'" + e + "'";
    return s(function (n, r) {
      var i = r + e.length,
        a = n.slice(r, i);
      return a === e ? d(i, a) : v(r, t);
    });
  }
  function Oi(e) {
    if ((me(), W(e), e > 255))
      throw new Error(
        "Value specified to byte constructor (" +
          e +
          "=0x" +
          e.toString(16) +
          ") is larger in value than a single byte."
      );
    var t = (e > 15 ? "0x" : "0x0") + e.toString(16);
    return s(function (n, r) {
      var i = ye(n, r);
      return i === e ? d(r + 1, i) : v(r, t);
    });
  }
  function S(e, t) {
    hi(e), arguments.length >= 2 ? W(t) : (t = 0);
    var n = Si(e),
      r = "" + e;
    return s(function (i, a) {
      var o = n.exec(i.slice(a));
      if (o) {
        if (0 <= t && t <= o.length) {
          var u = o[0],
            f = o[t];
          return d(a + u.length, f);
        }
        var l = "valid match group (0 to " + o.length + ") in " + r;
        return v(a, l);
      }
      return v(a, r);
    });
  }
  function L(e) {
    return s(function (t, n) {
      return d(n, e);
    });
  }
  function _e(e) {
    return s(function (t, n) {
      return v(n, e);
    });
  }
  function he(e) {
    if (k(e))
      return s(function (t, n) {
        var r = e._(t, n);
        return (r.index = n), (r.value = ""), r;
      });
    if (typeof e == "string") return he(Z(e));
    if (e instanceof RegExp) return he(S(e));
    throw new Error("not a string, regexp, or parser: " + e);
  }
  function Lt(e) {
    return (
      z(e),
      s(function (t, n) {
        var r = e._(t, n),
          i = t.slice(n, r.index);
        return r.status ? v(n, 'not "' + i + '"') : d(n, null);
      })
    );
  }
  function Ee(e) {
    return (
      R(e),
      s(function (t, n) {
        var r = ye(t, n);
        return n < t.length && e(r)
          ? d(n + 1, r)
          : v(n, "a character/byte matching " + e);
      })
    );
  }
  function Bi(e) {
    for (var t = e.split(""), n = 0; n < t.length; n++) t[n] = "'" + t[n] + "'";
    return Ee(function (r) {
      return e.includes(r);
    }).desc(t);
  }
  function Ai(e) {
    return Ee(function (t) {
      return !e.includes(t);
    }).desc("none of '" + e + "'");
  }
  function Ii(e) {
    return s(e(d, v));
  }
  function $i(e, t) {
    return Ee(function (n) {
      return e <= n && n <= t;
    }).desc(e + "-" + t);
  }
  function Ri(e) {
    return (
      R(e),
      s(function (t, n) {
        for (var r = n; r < t.length && e(ye(t, r)); ) r++;
        return d(r, t.slice(n, r));
      })
    );
  }
  function Mt(e, t) {
    arguments.length < 2 && ((t = e), (e = void 0));
    var n = s(function (r, i) {
      return (n._ = t()._), n._(r, i);
    });
    return e ? n.desc(e) : n;
  }
  function qe() {
    return _e("fantasy-land/empty");
  }
  c.concat = c.or;
  c.empty = qe;
  c.of = L;
  c["fantasy-land/ap"] = c.ap;
  c["fantasy-land/chain"] = c.chain;
  c["fantasy-land/concat"] = c.concat;
  c["fantasy-land/empty"] = c.empty;
  c["fantasy-land/of"] = c.of;
  c["fantasy-land/map"] = c.map;
  var Q = s(function (e, t) {
      return d(t, $t(e, t));
    }),
    Ci = s(function (e, t) {
      return t >= e.length ? v(t, "any character/byte") : d(t + 1, ye(e, t));
    }),
    ji = s(function (e, t) {
      return d(e.length, e.slice(t));
    }),
    Ue = s(function (e, t) {
      return t < e.length ? v(t, "EOF") : d(t, null);
    }),
    Li = S(/[0-9]/).desc("a digit"),
    Mi = S(/[0-9]*/).desc("optional digits"),
    Ni = S(/[a-z]/i).desc("a letter"),
    Di = S(/[a-z]*/i).desc("optional letters"),
    Fi = S(/\s*/).desc("optional whitespace"),
    zi = S(/\s+/).desc("whitespace"),
    Nt = Z("\r"),
    Dt = Z(`
`),
    Ft = Z(`\r
`),
    zt = we(Ft, Dt, Nt).desc("newline"),
    Wi = we(zt, Ue);
  s.all = ji;
  s.alt = we;
  s.any = Ci;
  s.cr = Nt;
  s.createLanguage = Ti;
  s.crlf = Ft;
  s.custom = Ii;
  s.digit = Li;
  s.digits = Mi;
  s.empty = qe;
  s.end = Wi;
  s.eof = Ue;
  s.fail = _e;
  s.formatError = Rt;
  s.index = Q;
  s.isParser = k;
  s.lazy = Mt;
  s.letter = Ni;
  s.letters = Di;
  s.lf = Dt;
  s.lookahead = he;
  s.makeFailure = v;
  s.makeSuccess = d;
  s.newline = zt;
  s.noneOf = Ai;
  s.notFollowedBy = Lt;
  s.of = L;
  s.oneOf = Bi;
  s.optWhitespace = Fi;
  s.Parser = s;
  s.range = $i;
  s.regex = S;
  s.regexp = S;
  s.sepBy = jt;
  s.sepBy1 = We;
  s.seq = be;
  s.seqMap = j;
  s.seqObj = Pi;
  s.string = Z;
  s.succeed = L;
  s.takeWhile = Ri;
  s.test = Ee;
  s.whitespace = zi;
  s["fantasy-land/empty"] = qe;
  s["fantasy-land/of"] = L;
  s.Binary = {
    bitSeq: It,
    bitSeqObj: ii,
    byte: Oi,
    buffer: ai,
    encodedString: oi,
    uintBE: se,
    uint8BE: se(1),
    uint16BE: se(2),
    uint32BE: se(4),
    uintLE: fe,
    uint8LE: fe(1),
    uint16LE: fe(2),
    uint32LE: fe(4),
    intBE: ce,
    int8BE: ce(1),
    int16BE: ce(2),
    int32BE: ce(4),
    intLE: le,
    int8LE: le(1),
    int16LE: le(2),
    int32LE: le(4),
    floatBE: si(),
    floatLE: fi(),
    doubleBE: ci(),
    doubleLE: li(),
  };
  Wt.exports = s;
});
function Be(e) {
  return (t) => (n) => e({ settings: t, env: n });
}
function ke(e) {
  if (e.pathPattern === void 0)
    throw new Error(
      "The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'."
    );
  if (e.pathPattern.includes("{language}") === !1)
    throw new Error(
      "The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'."
    );
  if (e.pathPattern.endsWith(".json") === !1)
    throw new Error(
      "The pathPattern setting must end with '.json'. An example would be './resources/{language}.json'."
    );
}
var Jt = Ve(St(), 1);
var Fe = (e, t, n, r) => {
    !t || t.length === 0
      ? (e[n] = r)
      : t.length === 1
      ? (e[t[0]] = { [n]: r })
      : (e[t[0]] || (e[t[0]] = {}), Fe(e[t[0]], t.slice(1), n, r));
  },
  ze = (e) => {
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
  },
  ue = (e, t = [], n) => {
    let r = [];
    if (typeof e == "string")
      r.push({
        text: e,
        parentKeys: t.length > 1 ? t.slice(0, -1) : void 0,
        id: n ? n + "." + t.join(".") : t.join("."),
        keyName: t.at(-1),
      });
    else if (typeof e == "object" && e !== null) {
      for (let i in e)
        if (e.hasOwnProperty(i)) {
          let a = [...t, i],
            o = ue(e[i], a, n);
          r.push(...o);
        }
    }
    return r;
  };
async function Pt(e) {
  return await Promise.resolve(
    e.$fs
      .readdir(e.path)
      .then(() => !0)
      .catch(() => !1)
  );
}
var h = Ve(qt(), 1),
  qi = h.default.createLanguage({
    entry: (e) =>
      h.default
        .alt(e.FunctionCall, h.default.any)
        .many()
        .map((t) => t.filter((n) => typeof n == "object")),
    stringLiteral: (e) =>
      h.default.alt(e.doubleQuotedString, e.singleQuotedString),
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
    FunctionCall: function (e) {
      return h.default.seqMap(
        h.default.regex(/[^a-zA-Z0-9]/),
        h.default.string("t"),
        h.default.string("("),
        h.default.index,
        e.stringLiteral,
        h.default.index,
        h.default.regex(/[^)]*/),
        h.default.string(")"),
        (t, n, r, i, a, o) => ({
          messageId: a,
          position: {
            start: { line: i.line, character: i.column },
            end: { line: o.line, character: o.column },
          },
        })
      );
    },
  });
function Ut(e) {
  try {
    return qi.entry.tryParse(e);
  } catch {
    return [];
  }
}
var Gt = {
  messageReferenceMatchers: [async (e) => Ut(e.documentText)],
  extractMessageOptions: [{ callback: (e) => `{t("${e}")}` }],
  documentSelectors: [
    { language: "javascript" },
    { language: "typescript" },
    { language: "svelte" },
  ],
};
var xe,
  X = {},
  Se = {};
function Ht() {
  let e = Object.values(X);
  return (
    e
      .sort(
        (t, n) =>
          e.filter((r) => r === t).length - e.filter((r) => r === n).length
      )
      .pop() ?? 2
  );
}
var Ui = Be(({ settings: e, env: t }) => ({
  id: "inlang.plugin-i18next",
  async config() {
    ke(e);
    let n = { ignore: [], variableReferencePattern: ["{", "}"], ...e };
    return (
      (xe = e.pathPattern.endsWith("/*.json")),
      {
        languages: await Gi({ $fs: t.$fs, settings: n }),
        readResources: (r) => Hi({ ...r, $fs: t.$fs, settings: n }),
        writeResources: (r) => Vi({ ...r, $fs: t.$fs, settings: n }),
        ideExtension: Gt,
      }
    );
  },
}));
async function Gi(e) {
  let [t] = e.settings.pathPattern.split("{language}");
  if (t === void 0)
    throw new Error("pathPattern must contain {language} placeholder");
  let n = await e.$fs.readdir(t),
    r = [];
  for (let i of n)
    (await Pt({ path: t + i, $fs: e.$fs }))
      ? r.push(i)
      : i.endsWith(".json") &&
        e.settings.ignore?.some((o) => o === i) === !1 &&
        r.push(i.replace(".json", ""));
  return r;
}
async function Hi(e) {
  let t = [];
  for (let n of e.config.languages) {
    let r = [],
      i = e.settings.pathPattern.replace("{language}", n);
    try {
      if (xe) {
        let a = `${i.replace("/*.json", "")}`,
          o = await e.$fs.readdir(a);
        for (let u of o) {
          if (e.settings.ignore?.some((l) => l === u) === !0) continue;
          let f = await e.$fs.readFile(`${a}/${u}`, { encoding: "utf-8" });
          (Se[`${a}/${u}`] = f.endsWith(`
`)),
            (X[`${a}/${u}`] = ze(f)),
            (r = [...r, ...ue(JSON.parse(f), [], u)]);
        }
      } else {
        let a = await e.$fs.readFile(i, { encoding: "utf-8" });
        (Se[`${i}`] = a.endsWith(`
`)),
          (X[`${i}`] = ze(a)),
          (r = ue(JSON.parse(a)));
      }
      t.push(Ki(r, n, e.settings.variableReferencePattern));
    } catch (a) {
      if (a.code === "ENOENT") continue;
      throw a;
    }
  }
  return t;
}
function Ki(e, t, n) {
  return {
    type: "Resource",
    languageTag: { type: "LanguageTag", name: t },
    body: e.map((r) => Ji(r, n)),
  };
}
function Ji(e, t) {
  return {
    type: "Message",
    metadata: {
      fileName: e.fileName,
      keyName: e.keyName,
      parentKeys: e.parentKeys,
    },
    id: { type: "Identifier", name: e.id },
    pattern: Qi(e.text, t),
  };
}
async function Vi(e) {
  for (let t of e.resources) {
    let n = e.settings.pathPattern.replace("{language}", t.languageTag.name);
    if (xe === !1)
      await e.$fs.writeFile(
        n,
        Kt(t, X[n] ?? Ht(), Se[n], e.settings.variableReferencePattern)
      );
    else if (xe) {
      try {
        let [i] = n.split(t.languageTag.name);
        await e.$fs.mkdir(i);
      } catch {}
      let r = new Set(t.body.map((i) => i.metadata?.fileName));
      for (let i of r) {
        let a = t.body
            .filter((f) => f.id.name.startsWith(i))
            .map((f) => ({
              ...f,
              id: { ...f.id, name: f.id.name.replace(`${i}.`, "") },
            })),
          o = { type: t.type, languageTag: t.languageTag, body: a },
          u = n.replace("*", i);
        await e.$fs.writeFile(
          u,
          Kt(o, X[u] ?? Ht(), Se[u], e.settings.variableReferencePattern)
        );
      }
    } else throw new Error("None-exhaustive if statement in writeResources");
  }
}
function Kt(e, t, n, r) {
  let i = {};
  for (let a of e.body) {
    let o = {},
      u = ki(a.pattern, r);
    a.metadata?.keyName
      ? Fe(o, a.metadata.parentKeys, a.metadata.keyName, u)
      : a.metadata?.fileName
      ? (o[a.id.name.split(".").slice(1).join(".")] = u)
      : (o[a.id.name] = u),
      (0, Jt.default)(i, o);
  }
  return (
    JSON.stringify(i, void 0, t) +
    (n
      ? `
`
      : "")
  );
}
function ki(e, t) {
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
function Qi(e, t) {
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
export { Ui as default };
//! DON'T TOP-LEVEL IMPORT ESBUILD PLUGINS. USE DYNAMIC IMPORTS.
//! See https://github.com/inlang/inlang/issues/486
