(function(e) {
  function t(t) {
    for (
      var r, a, c = t[0], i = t[1], s = t[2], l = 0, f = [];
      l < c.length;
      l++
    )
      (a = c[l]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    d && d(t);
    while (f.length) f.shift()();
    return u.push.apply(u, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    u = [];
  function c(e) {
    return (
      i.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      {
        "chunk-ad231e24": "0a064b50",
        about: "495efd4b",
        "chunk-2d0b257b": "7aa67692",
        "chunk-612cd08c": "d26d6c87",
        "chunk-4671f6ee": "2c662e0c",
      }[e] +
      ".js"
    );
  }
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(e) {
    var t = [],
      n = {
        "chunk-ad231e24": 1,
        about: 1,
        "chunk-612cd08c": 1,
        "chunk-4671f6ee": 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function(t, n) {
            for (
              var r =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  {
                    "chunk-ad231e24": "f3c1b6ae",
                    about: "8c3b68be",
                    "chunk-2d0b257b": "31d6cfe0",
                    "chunk-612cd08c": "cf60f0e5",
                    "chunk-4671f6ee": "fae4c610",
                  }[e] +
                  ".css",
                o = i.p + r,
                u = document.getElementsByTagName("link"),
                c = 0;
              c < u.length;
              c++
            ) {
              var s = u[c],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === r || l === o)) return t();
            }
            var f = document.getElementsByTagName("style");
            for (c = 0; c < f.length; c++) {
              (s = f[c]), (l = s.getAttribute("data-href"));
              if (l === r || l === o) return t();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = t),
              (d.onerror = function(t) {
                var r = (t && t.target && t.target.src) || o,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = r),
                  delete a[e],
                  d.parentNode.removeChild(d),
                  n(u);
              }),
              (d.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d);
          }).then(function() {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var u = new Promise(function(t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = u));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          (l.src = c(e));
        var f = new Error();
        s = function(t) {
          (l.onerror = l.onload = null), clearTimeout(d);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = r),
                (f.request = a),
                n[1](f);
            }
            o[e] = void 0;
          }
        };
        var d = setTimeout(function() {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/Tugas-Project-3-Pendataan-Bansos-Frontend-JS-Project/"),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var f = 0; f < s.length; f++) t(s[f]);
  var d = l;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "034f": function(e, t, n) {
    "use strict";
    n("85ec");
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-app",
          [
            n("Dialog"),
            n(
              "v-main",
              { staticClass: "grey lighten-2" },
              [
                n(
                  "v-slide-x-transition",
                  { attrs: { "leave-absolute": "" } },
                  [n("router-view")],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      o = [],
      u =
        (n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        {
          name: "App",
          components: {
            Dialog: function() {
              return Promise.all([n.e("chunk-ad231e24"), n.e("about")]).then(
                n.bind(null, "3f7a")
              );
            },
          },
        }),
      c = u,
      i = (n("034f"), n("2877")),
      s = n("6544"),
      l = n.n(s),
      f = n("7496"),
      d = n("f6c4"),
      p = n("0789"),
      h = Object(i["a"])(c, a, o, !1, null, null, null),
      m = h.exports;
    l()(h, { VApp: f["a"], VMain: d["a"], VSlideXTransition: p["e"] });
    var b = n("8c4f");
    r["a"].use(b["a"]);
    var v = [
        {
          path: "/",
          name: "Home",
          meta: { title: "Formulir pendataan bansos" },
          component: function() {
            return Promise.all([
              n.e("chunk-ad231e24"),
              n.e("chunk-612cd08c"),
              n.e("chunk-4671f6ee"),
            ]).then(n.bind(null, "c109"));
          },
        },
        {
          path: "/info",
          name: "Info",
          meta: { title: "Info" },
          props: !0,
          component: function() {
            return Promise.all([
              n.e("chunk-ad231e24"),
              n.e("chunk-2d0b257b"),
              n.e("chunk-4671f6ee"),
            ]).then(n.bind(null, "2469"));
          },
        },
        { path: "*", redirect: "/" },
      ],
      g = new b["a"]({
        mode: "history",
        base: "/Tugas-Project-3-Pendataan-Bansos-Frontend-JS-Project/",
        routes: v,
      }),
      y = g,
      k = n("f309"),
      w = n("fcf4");
    r["a"].use(k["a"]);
    var P = new k["a"]({
        theme: {
          options: { customProperties: !0 },
          themes: {
            light: {
              primary: "#1E88E5",
              secondary: "#FFD026",
              accent: "#16A75C",
              placeholder: w["a"].grey.base,
            },
          },
        },
      }),
      S = n("2f62"),
      j = {
        namespaced: !0,
        state: { status: !1 },
        mutations: {
          setStatus: function(e, t) {
            e.status = t;
          },
        },
        actions: {
          setStatus: function(e, t) {
            var n = e.commit;
            n("setStatus", t);
          },
        },
        getters: {
          status: function(e) {
            return e.status;
          },
        },
      };
    r["a"].use(S["a"]);
    var O = new S["a"].Store({ modules: { dialog: j } });
    (r["a"].config.productionTip = !1),
      new r["a"]({
        router: y,
        vuetify: P,
        store: O,
        render: function(e) {
          return e(m);
        },
        created: function() {
          if (sessionStorage.redirect) {
            var e = sessionStorage.redirect;
            delete sessionStorage.redirect, this.$router.push(e);
          }
        },
      }).$mount("#app");
  },
  "85ec": function(e, t, n) {},
});
//# sourceMappingURL=app.c5a1659f.js.map
