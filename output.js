//Tue Aug 27 2024 04:53:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a4) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
      return typeof a6;
    } : function (a6) {
      return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
    };
    return b(a4);
  }
  function c(a4, a5) {
    var a7 = "undefined" != typeof Symbol && a4[Symbol.iterator] || a4["@@iterator"];
    if (!a7) {
      if (Array.isArray(a4) || (a7 = d(a4)) || a5 && a4 && "number" == typeof a4.length) {
        a7 && (a4 = a7);
        var a8 = 0,
          a9 = function () {};
        return {
          s: a9,
          n: function () {
            var ag = {
              done: !0
            };
            return a8 >= a4.length ? ag : {
              done: !1,
              value: a4[a8++]
            };
          },
          e: function (af) {
            throw af;
          },
          f: a9
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var aa,
      ab = !0,
      ac = !1;
    return {
      s: function () {
        a7 = a7.call(a4);
      },
      n: function () {
        var ah = a7.next();
        ab = ah.done;
        return ah;
      },
      e: function (ag) {
        ac = !0;
        aa = ag;
      },
      f: function () {
        try {
          ab || null == a7.return || a7.return();
        } finally {
          if (ac) {
            throw aa;
          }
        }
      }
    };
  }
  function d(a4, a5) {
    if (a4) {
      if ("string" == typeof a4) {
        return f(a4, a5);
      }
      var a6 = {}.toString.call(a4).slice(8, -1);
      "Object" === a6 && a4.constructor && (a6 = a4.constructor.name);
      return "Map" === a6 || "Set" === a6 ? Array.from(a4) : "Arguments" === a6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a6) ? f(a4, a5) : void 0;
    }
  }
  function f(a4, a5) {
    (null == a5 || a5 > a4.length) && (a5 = a4.length);
    for (var a6 = 0, a7 = Array(a5); a6 < a5; a6++) {
      a7[a6] = a4[a6];
    }
    return a7;
  }
  function g() {
    'use strict';

    g = function () {
      return a6;
    };
    var a5,
      a6 = {},
      a7 = Object.prototype,
      a8 = a7.hasOwnProperty,
      a9 = Object.defineProperty || function (aB, aC, aD) {
        aB[aC] = aD.value;
      },
      aa = "function" == typeof Symbol ? Symbol : {},
      ab = aa.iterator || "@@iterator",
      ac = aa.asyncIterator || "@@asyncIterator",
      ad = aa.toStringTag || "@@toStringTag";
    function ae(aB, aC, aD) {
      var aG = {
        value: aD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aB, aC, aG);
      return aB[aC];
    }
    try {
      ae({}, "");
    } catch (aC) {
      ae = function (aE, aF, aG) {
        return aE[aF] = aG;
      };
    }
    function af(aE, aF, aG, aH) {
      var aI = aF && aF.prototype instanceof am ? aF : am,
        aJ = Object.create(aI.prototype),
        aK = new az(aH || []);
      a9(aJ, "_invoke", {
        value: av(aE, aG, aK)
      });
      return aJ;
    }
    function ag(aE, aF, aG) {
      try {
        return {
          type: "normal",
          arg: aE.call(aF, aG)
        };
      } catch (aL) {
        var aI = {};
        aI.type = "throw";
        aI.arg = aL;
        return aI;
      }
    }
    a6.wrap = af;
    var ah = "suspendedStart",
      ai = "suspendedYield",
      aj = "executing",
      ak = "completed",
      al = {};
    function am() {}
    function an() {}
    function ao() {}
    var ap = {};
    ae(ap, ab, function () {
      return this;
    });
    var aq = Object.getPrototypeOf,
      ar = aq && aq(aq(aA([])));
    ar && ar !== a7 && a8.call(ar, ab) && (ap = ar);
    ao.prototype = am.prototype = Object.create(ap);
    var as = ao.prototype;
    function at(aE) {
      ["next", "throw", "return"].forEach(function (aH) {
        ae(aE, aH, function (aK) {
          return this._invoke(aH, aK);
        });
      });
    }
    function au(aE, aF) {
      function aI(aJ, aK, aL, aM) {
        var aO = ag(aE[aJ], aE, aK);
        if ("throw" !== aO.type) {
          var aP = aO.arg,
            aQ = aP.value;
          return aQ && "object" == b(aQ) && a8.call(aQ, "__await") ? aF.resolve(aQ.__await).then(function (aS) {
            aI("next", aS, aL, aM);
          }, function (aS) {
            aI("throw", aS, aL, aM);
          }) : aF.resolve(aQ).then(function (aS) {
            aP.value = aS;
            aL(aP);
          }, function (aS) {
            return aI("throw", aS, aL, aM);
          });
        }
        aM(aO.arg);
      }
      var aH;
      a9(this, "_invoke", {
        value: function (aJ, aK) {
          function aM() {
            return new aF(function (aP, aQ) {
              aI(aJ, aK, aP, aQ);
            });
          }
          return aH = aH ? aH.then(aM, aM) : aM();
        }
      });
    }
    function av(aE, aF, aG) {
      var aI = ah;
      return function (aK, aL) {
        if (aI === aj) {
          throw Error("Generator is already running");
        }
        if (aI === ak) {
          if ("throw" === aK) {
            throw aL;
          }
          var aO = {
            value: a5,
            done: !0
          };
          return aO;
        }
        for (aG.method = aK, aG.arg = aL;;) {
          var aP = aG.delegate;
          if (aP) {
            var aQ = aw(aP, aG);
            if (aQ) {
              if (aQ === al) {
                continue;
              }
              return aQ;
            }
          }
          if ("next" === aG.method) {
            aG.sent = aG._sent = aG.arg;
          } else {
            if ("throw" === aG.method) {
              if (aI === ah) {
                throw aI = ak, aG.arg;
              }
              aG.dispatchException(aG.arg);
            } else {
              "return" === aG.method && aG.abrupt("return", aG.arg);
            }
          }
          aI = aj;
          var aR = ag(aE, aF, aG);
          if ("normal" === aR.type) {
            if (aI = aG.done ? ak : ai, aR.arg === al) {
              continue;
            }
            var aS = {};
            aS.value = aR.arg;
            aS.done = aG.done;
            return aS;
          }
          "throw" === aR.type && (aI = ak, aG.method = "throw", aG.arg = aR.arg);
        }
      };
    }
    function aw(aE, aF) {
      var aI = aF.method,
        aJ = aE.iterator[aI];
      if (aJ === a5) {
        aF.delegate = null;
        "throw" === aI && aE.iterator.return && (aF.method = "return", aF.arg = a5, aw(aE, aF), "throw" === aF.method) || "return" !== aI && (aF.method = "throw", aF.arg = new TypeError("The iterator does not provide a '" + aI + "' method"));
        return al;
      }
      var aK = ag(aJ, aE.iterator, aF.arg);
      if ("throw" === aK.type) {
        aF.method = "throw";
        aF.arg = aK.arg;
        aF.delegate = null;
        return al;
      }
      var aL = aK.arg;
      return aL ? aL.done ? (aF[aE.resultName] = aL.value, aF.next = aE.nextLoc, "return" !== aF.method && (aF.method = "next", aF.arg = a5), aF.delegate = null, al) : aL : (aF.method = "throw", aF.arg = new TypeError("iterator result is not an object"), aF.delegate = null, al);
    }
    function ax(aE) {
      var aF = {
        tryLoc: aE[0]
      };
      var aG = aF;
      1 in aE && (aG.catchLoc = aE[1]);
      2 in aE && (aG.finallyLoc = aE[2], aG.afterLoc = aE[3]);
      this.tryEntries.push(aG);
    }
    function ay(aE) {
      var aF = aE.completion || {};
      aF.type = "normal";
      delete aF.arg;
      aE.completion = aF;
    }
    function az(aE) {
      var aG = {
        tryLoc: "root"
      };
      this.tryEntries = [aG];
      aE.forEach(ax, this);
      this.reset(!0);
    }
    function aA(aE) {
      if (aE || "" === aE) {
        var aG = aE[ab];
        if (aG) {
          return aG.call(aE);
        }
        if ("function" == typeof aE.next) {
          return aE;
        }
        if (!isNaN(aE.length)) {
          var aH = -1,
            aI = function aK() {
              for (; ++aH < aE.length;) {
                if (a8.call(aE, aH)) {
                  aK.value = aE[aH];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a5;
              aK.done = !0;
              return aK;
            };
          return aI.next = aI;
        }
      }
      throw new TypeError(b(aE) + " is not iterable");
    }
    an.prototype = ao;
    a9(as, "constructor", {
      value: ao,
      configurable: !0
    });
    a9(ao, "constructor", {
      value: an,
      configurable: !0
    });
    an.displayName = ae(ao, ad, "GeneratorFunction");
    a6.isGeneratorFunction = function (aE) {
      var aF = "function" == typeof aE && aE.constructor;
      return !!aF && (aF === an || "GeneratorFunction" === (aF.displayName || aF.name));
    };
    a6.mark = function (aE) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aE, ao) : (aE.__proto__ = ao, ae(aE, ad, "GeneratorFunction"));
      aE.prototype = Object.create(as);
      return aE;
    };
    a6.awrap = function (aE) {
      var aF = {
        __await: aE
      };
      return aF;
    };
    at(au.prototype);
    ae(au.prototype, ac, function () {
      return this;
    });
    a6.AsyncIterator = au;
    a6.async = function (aE, aF, aG, aH, aI) {
      void 0 === aI && (aI = Promise);
      var aK = new au(af(aE, aF, aG, aH), aI);
      return a6.isGeneratorFunction(aF) ? aK : aK.next().then(function (aL) {
        return aL.done ? aL.value : aK.next();
      });
    };
    at(as);
    ae(as, ad, "Generator");
    ae(as, ab, function () {
      return this;
    });
    ae(as, "toString", function () {
      return "[object Generator]";
    });
    a6.keys = function (aE) {
      var aF = Object(aE),
        aG = [];
      for (var aH in aF) aG.push(aH);
      aG.reverse();
      return function aJ() {
        for (; aG.length;) {
          var aK = aG.pop();
          if (aK in aF) {
            aJ.value = aK;
            aJ.done = !1;
            return aJ;
          }
        }
        aJ.done = !0;
        return aJ;
      };
    };
    a6.values = aA;
    az.prototype = {
      constructor: az,
      reset: function (aE) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a5, this.done = !1, this.delegate = null, this.method = "next", this.arg = a5, this.tryEntries.forEach(ay), !aE) {
          for (var aF in this) "t" === aF.charAt(0) && a8.call(this, aF) && !isNaN(+aF.slice(1)) && (this[aF] = a5);
        }
      },
      stop: function () {
        this.done = !0;
        var aF = this.tryEntries[0].completion;
        if ("throw" === aF.type) {
          throw aF.arg;
        }
        return this.rval;
      },
      dispatchException: function (aE) {
        if (this.done) {
          throw aE;
        }
        var aG = this;
        function aM(aN, aO) {
          aJ.type = "throw";
          aJ.arg = aE;
          aG.next = aN;
          aO && (aG.method = "next", aG.arg = a5);
          return !!aO;
        }
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH],
            aJ = aI.completion;
          if ("root" === aI.tryLoc) {
            return aM("end");
          }
          if (aI.tryLoc <= this.prev) {
            var aK = a8.call(aI, "catchLoc"),
              aL = a8.call(aI, "finallyLoc");
            if (aK && aL) {
              if (this.prev < aI.catchLoc) {
                return aM(aI.catchLoc, !0);
              }
              if (this.prev < aI.finallyLoc) {
                return aM(aI.finallyLoc);
              }
            } else {
              if (aK) {
                if (this.prev < aI.catchLoc) {
                  return aM(aI.catchLoc, !0);
                }
              } else {
                if (!aL) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aI.finallyLoc) {
                  return aM(aI.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aE, aF) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc <= this.prev && a8.call(aI, "finallyLoc") && this.prev < aI.finallyLoc) {
            var aJ = aI;
            break;
          }
        }
        aJ && ("break" === aE || "continue" === aE) && aJ.tryLoc <= aF && aF <= aJ.finallyLoc && (aJ = null);
        var aK = aJ ? aJ.completion : {};
        aK.type = aE;
        aK.arg = aF;
        return aJ ? (this.method = "next", this.next = aJ.finallyLoc, al) : this.complete(aK);
      },
      complete: function (aE, aF) {
        if ("throw" === aE.type) {
          throw aE.arg;
        }
        "break" === aE.type || "continue" === aE.type ? this.next = aE.arg : "return" === aE.type ? (this.rval = this.arg = aE.arg, this.method = "return", this.next = "end") : "normal" === aE.type && aF && (this.next = aF);
        return al;
      },
      finish: function (aE) {
        for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
          var aG = this.tryEntries[aF];
          if (aG.finallyLoc === aE) {
            this.complete(aG.completion, aG.afterLoc);
            ay(aG);
            return al;
          }
        }
      },
      catch: function (aE) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc === aE) {
            var aJ = aI.completion;
            if ("throw" === aJ.type) {
              var aK = aJ.arg;
              ay(aI);
            }
            return aK;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aE, aF, aG) {
        this.delegate = {
          iterator: aA(aE),
          resultName: aF,
          nextLoc: aG
        };
        "next" === this.method && (this.arg = a5);
        return al;
      }
    };
    return a6;
  }
  function h(a4, a5, a6, a7, a8, a9, aa) {
    try {
      var ab = a4[a9](aa),
        ac = ab.value;
    } catch (af) {
      return void a6(af);
    }
    ab.done ? a5(ac) : Promise.resolve(ac).then(a7, a8);
  }
  function i(a4) {
    return function () {
      var a7 = this,
        a8 = arguments;
      return new Promise(function (a9, aa) {
        var ac = a4.apply(a7, a8);
        function ad(af) {
          h(ac, a9, aa, ad, ae, "next", af);
        }
        function ae(af) {
          h(ac, a9, aa, ad, ae, "throw", af);
        }
        ad(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = void 0,
    l = "",
    m = "64",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "10019",
    w = "",
    x = "",
    y = "FR*r!isE5W";
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function a6() {
      var a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at;
      return g().wrap(function (au) {
        for (;;) {
          switch (au.prev = au.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                au.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              au.next = 5;
              return a2("先去boxjs填写账号密码");
            case 5:
              return au.abrupt("return");
            case 6:
              au.next = 8;
              return a0();
            case 8:
              k = au.sent;
              a8 = j.split(" ");
              a9 = c(a8);
              au.prev = 11;
              a9.s();
            case 13:
              if ((aa = a9.n()).done) {
                au.next = 126;
                break;
              }
              ab = aa.value;
              console.log("随机生成UA");
              ac = Y();
              n = ac.ua;
              o = ac.commonUa;
              p = ac.uuid;
              console.log(n);
              console.log(o);
              t = ab.split("&")[0];
              u = ab.split("&")[1];
              console.log("用户：".concat(t, "开始任务"));
              console.log("获取sessionId");
              au.next = 28;
              return H("/api/account/init");
            case 28:
              ad = au.sent;
              w = ad.data.session.id;
              console.log(w);
              console.log("获取signature_key");
              au.next = 34;
              return B("/web/init?client_id=".concat(v));
            case 34:
              ae = au.sent;
              l = ae.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              au.next = 40;
              return D("/web/oauth/credential_auth");
            case 40:
              if (af = au.sent, af.data) {
                au.next = 44;
                break;
              }
              console.log(af.message);
              return au.abrupt("continue", 124);
            case 44:
              ag = af.data.authorization_code.code;
              console.log(ag);
              console.log("登录");
              au.next = 49;
              return H("/api/zbtxz/login", "check_token=&code=".concat(ag, "&token=&type=-1&union_id="));
            case 49:
              ah = au.sent;
              console.log("登录成功");
              s = ah.data.session.account_id;
              w = ah.data.session.id;
              au.next = 55;
              return F("/api/app_feature_switch/list");
            case 55:
              ai = au.sent;
              console.log("进入app：".concat(ai.message));
              console.log("————————————");
              console.log("阅读抽奖");
              q = "";
              console.log("获取登录cookie");
              au.next = 63;
              return J("/prod-api/user-read/app/login?id=".concat(s, "&sessionId=").concat(w, "&deviceId=").concat(p));
            case 63:
              if (q = au.sent, q) {
                au.next = 66;
                break;
              }
              return au.abrupt("continue", 124);
            case 66:
              console.log(q);
              au.next = 69;
              return L("/prod-api/user-read/list/".concat(X()));
            case 69:
              if (aj = au.sent, aj.data.completedCount != aj.data.sum) {
                au.next = 74;
                break;
              }
              console.log("阅读已经完成");
              au.next = 104;
              break;
            case 74:
              ak = c(aj.data.articleIsReadList);
              au.prev = 75;
              ak.s();
            case 77:
              if ((al = ak.n()).done) {
                au.next = 96;
                break;
              }
              if (am = al.value, console.log("文章：".concat(am.title)), !am.isRead) {
                au.next = 83;
                break;
              }
              console.log("已阅读");
              return au.abrupt("continue", 94);
            case 83:
              au.next = 85;
              return F("/api/article/detail?id=".concat(am.newsId));
            case 85:
              au.sent;
              au.next = 88;
              return F("/api/article/read_time?channel_article_id=".concat(am.newsId, "&is_end=true&read_time=7934"));
            case 88:
              au.sent;
              an = JSON.stringify({
                timestamp: Date.now(),
                articleId: am.id,
                accountId: s
              });
              au.next = 92;
              return L("/prod-api/already-read/article/new?signature=".concat(T(an)), an);
            case 92:
              ao = au.sent;
              console.log("阅读：".concat(ao.msg));
            case 94:
              au.next = 77;
              break;
            case 96:
              au.next = 101;
              break;
            case 98:
              au.prev = 98;
              au.t0 = au.catch(75);
              ak.e(au.t0);
            case 101:
              au.prev = 101;
              ak.f();
              return au.finish(101);
            case 104:
              au.next = 106;
              return L("/prod-api/user-read-count/count/".concat(X()));
            case 106:
              ap = au.sent;
              r = "";
              au.next = 110;
              return N("/tzrb/user/loginWC?accountId=".concat(s, "&sessionId=").concat(w));
            case 110:
              r = au.sent;
              console.log("获取抽奖cookie");
              console.log(r);
              au.next = 115;
              return P("/tzrb/awardUpgrade/list?activityId=67");
            case 115:
              aq = au.sent;
              ar = aq.data;
              as = g().mark(function aE() {
                var aG, aH;
                return g().wrap(function (aJ) {
                  for (;;) {
                    switch (aJ.prev = aJ.next) {
                      case 0:
                        aJ.next = 2;
                        return R("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        aG = aJ.sent;
                        aH = ar.findIndex(function (aL) {
                          return aL.id == aG.data;
                        });
                        -1 != aH ? (console.log("抽奖获得：".concat(ar[aH].title)), x += "用户：".concat(t, " 抽奖获得：").concat(ar[aH].title, "\n")) : console.log(JSON.stringify(aG));
                      case 5:
                      case "end":
                        return aJ.stop();
                    }
                  }
                }, aE);
              });
              at = 0;
            case 119:
              if (!(at < ap.data)) {
                au.next = 124;
                break;
              }
              return au.delegateYield(as(), "t1", 121);
            case 121:
              at++;
              au.next = 119;
              break;
            case 124:
              au.next = 13;
              break;
            case 126:
              au.next = 131;
              break;
            case 128:
              au.prev = 128;
              au.t2 = au.catch(11);
              a9.e(au.t2);
            case 131:
              au.prev = 131;
              a9.f();
              return au.finish(131);
            case 134:
              if (!x) {
                au.next = 137;
                break;
              }
              au.next = 137;
              return a2(x);
            case 137:
            case "end":
              return au.stop();
          }
        }
      }, a6, null, [[11, 128, 131, 134], [75, 98, 101, 104]]);
    }));
    return A.apply(this, arguments);
  }
  function B(a4) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://passport.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": W(),
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  }
                };
                $.get(ac, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(aj));
                            } catch (ao) {
                              $.logErr(ao, ai);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return C.apply(this, arguments);
  }
  function D(a4) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a5(a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U();
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://passport.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  },
                  body: a8.body
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (am) {
                              $.logErr(am, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return E.apply(this, arguments);
  }
  function F(a4) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a5(a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = V(a6);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": w,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  }
                };
                $.get(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !ag) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ai));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ah);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, af, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return G.apply(this, arguments);
  }
  function H(a4, a5) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a5(a6, a7) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = V(a6);
              return aa.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://vapp.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a9.time,
                    "X-SESSION-ID": w,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SIGNATURE": a9.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  },
                  body: a7
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ah) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(aj));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ai);
                          case 14:
                            ak.prev = 14;
                            ab();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a5);
    }));
    return I.apply(this, arguments);
  }
  function J(a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://xmt.taizhou.com.cn".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 16;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ag).code) {
                              ah.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ag).msg);
                            x += "用户：".concat(t, " ").concat(JSON.parse(ag).msg, "\n");
                            a9("");
                            return ah.abrupt("return");
                          case 13:
                            q = $.isNode() ? af.headers["set-cookie"][0] : af.headers["set-cookie"] || af.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            a9(q);
                          case 16:
                            ah.next = 21;
                            break;
                          case 18:
                            ah.prev = 18;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 21:
                            ah.prev = 21;
                            a9();
                            return ah.finish(21);
                          case 24:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 18, 21, 24]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return K.apply(this, arguments);
  }
  function L(a4) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a5(a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://xmt.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            a9();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a5);
    }));
    return M.apply(this, arguments);
  }
  function N(a4) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://srv-app.taizhou.com.cn".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: r,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 11;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            r = $.isNode() ? ai.headers["set-cookie"][0] : ai.headers["set-cookie"] || ai.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ab(r);
                          case 11:
                            al.next = 16;
                            break;
                          case 13:
                            al.prev = 13;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 16:
                            al.prev = 16;
                            ab();
                            return al.finish(16);
                          case 19:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 13, 16, 19]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return O.apply(this, arguments);
  }
  function P(a4) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a6(a7) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: r,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ae = {
                  url: "https://srv-app.taizhou.com.cn".concat(a7),
                  headers: ad
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return Q.apply(this, arguments);
  }
  function R(a4, a5) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a5(a6, a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://srv-app.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: r,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: a7
                };
                $.post(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return S.apply(this, arguments);
  }
  function T(a4) {
    var a5 = k.loadSM2();
    return a5.doEncrypt(a4, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function U() {
    var a6 = new (k.loadJSEncrypt())();
    a6.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = a6.encrypt(u);
    var a8 = W(),
      a9 = "client_id=".concat(v, "&password=").concat(u, "&phone_number=").concat(t),
      aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = k.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(aa, l),
      ac = CryptoJS.enc.Hex.stringify(ab);
    var a7 = {};
    a7.uuid = a8;
    a7.signature = ac;
    a7.body = a9;
    return a7;
  }
  function V(a4) {
    var a5 = W(),
      a6 = Date.now();
    a4.indexOf("?") > 0 && (a4 = a4.substring(0, a4.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a7 = CryptoJS.SHA256("".concat(a4, "&&").concat(w, "&&").concat(a5, "&&").concat(a6, "&&").concat(y, "&&").concat(m)).toString(),
      a8 = {
        uuid: a5,
        time: a6,
        signature: a7
      };
    return a8;
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0,
        a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function X() {
    var a4 = new Date(),
      a5 = a4.getFullYear(),
      a6 = String(a4.getMonth() + 1).padStart(2, "0"),
      a7 = String(a4.getDate()).padStart(2, "0");
    return "".concat(a5).concat(a6).concat(a7);
  }
  function Y() {
    var a4 = "6.0.2",
      a5 = W(),
      a6 = Z(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a7 = "Xiaomi " + a6,
      a8 = "Android",
      a9 = "".concat(a8.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a4, ";1.0;null;").concat(a6),
      aa = "".concat(a4, ";").concat(a5, ";").concat(a7, ";").concat(a8, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      ab = {
        ua: a9,
        commonUa: aa,
        uuid: a5
      };
    return ab;
  }
  function Z(a4) {
    return a4[Math.floor(Math.random() * a4.length)];
  }
  function a0() {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function a5() {
      var a6;
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (a6 = $.getdata("Utils_Code") || "", !a6 || !Object.keys(a6).length) {
                a8.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a6);
              return a8.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a8.abrupt("return", new Promise(function () {
                var ac = i(g().mark(function ad(ae) {
                  return g().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ai) {
                            $.setdata(ai, "Utils_Code");
                            eval(ai);
                            console.log("✅ Utils加载成功, 请继续");
                            ae(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ad);
                }));
                return function (ae) {
                  return ac.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return a1.apply(this, arguments);
  }
  function a2(a4) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a5(a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              if (!$.isNode()) {
                a7.next = 5;
                break;
              }
              a7.next = 3;
              return notify.sendNotify($.name, a6);
            case 3:
              a7.next = 6;
              break;
            case 5:
              $.msg($.name, "", a6);
            case 6:
            case "end":
              return a7.stop();
          }
        }
      }, a5);
    }));
    return a3.apply(this, arguments);
  }
  i(g().mark(function a4() {
    return g().wrap(function (a6) {
      for (;;) {
        switch (a6.prev = a6.next) {
          case 0:
            a6.next = 2;
            return z();
          case 2:
          case "end":
            return a6.stop();
        }
      }
    }, a4);
  }))().catch(function (a5) {
    $.log(a5);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}