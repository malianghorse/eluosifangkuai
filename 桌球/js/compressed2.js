function l(a) {
	throw a;
}
var p = true, q = null, s = false;
function aa() {
	return function() {
	};
}
function ba(a) {
	return function() {
		return this[a];
	};
}
function ca(a) {
	return function() {
		return a;
	};
}
var t, A = this;
function fa(a, c) {
	for ( var b = a.split("."), d = c || A, e; e = b.shift();)
		if (d[e])
			d = d[e];
		else
			return q;
	return d;
}
function ga() {
}
function ha(a) {
	var c = typeof a;
	if (c == "object")
		if (a) {
			if (a instanceof Array || !(a instanceof Object)
					&& Object.prototype.toString.call(a) == "[object Array]"
					|| typeof a.length == "number"
					&& typeof a.splice != "undefined"
					&& typeof a.propertyIsEnumerable != "undefined"
					&& !a.propertyIsEnumerable("splice"))
				return "array";
			if (!(a instanceof Object)
					&& (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined"
							&& typeof a.propertyIsEnumerable != "undefined"
							&& !a.propertyIsEnumerable("call")))
				return "function";
		} else
			return "null";
	else if (c == "function" && typeof a.call == "undefined")
		return "object";
	return c;
}
function ia(a) {
	var c = ha(a);
	return c == "array" || c == "object" && typeof a.length == "number";
}
function ja(a) {
	return typeof a == "string";
}
function ka(a) {
	return typeof a == "number";
}
function la(a) {
	return a[ma] || (a[ma] = ++na);
}
var ma = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), na = 0;
function oa(a, c) {
	var b = c || A;
	if (arguments.length > 2) {
		var d = Array.prototype.slice.call(arguments, 2);
		return function() {
			var e = Array.prototype.slice.call(arguments);
			Array.prototype.unshift.apply(e, d);
			return a.apply(b, e);
		};
	} else;
		return function() {
			return a.apply(b, arguments);
		};
}
function pa(a) {
	var c = Array.prototype.slice.call(arguments, 1);
	return function() {
		var b = Array.prototype.slice.call(arguments);
		b.unshift.apply(b, c);
		return a.apply(this, b);
	};
}
var qa = Date.now || function() {
	return +new Date;
};
function G(a, c) {
	function b() {
	}
	b.prototype = c.prototype;
	a.ud = c.prototype;
	a.prototype = new b;
};
function ra(a) {
	for ( var c = 1; c < arguments.length; c++) {
		var b = String(arguments[c]).replace(/\$/g, "$$$$");
		a = a.replace(/\%s/, b);
	}
	return a;
}
function sa(a, c) {
	if (c)
		return a.replace(ta, "&amp;").replace(ua, "&lt;").replace(va, "&gt;")
				.replace(wa, "&quot;");
	else {
		if (!xa.test(a))
			return a;
		if (a.indexOf("&") != -1)
			a = a.replace(ta, "&amp;");
		if (a.indexOf("<") != -1)
			a = a.replace(ua, "&lt;");
		if (a.indexOf(">") != -1)
			a = a.replace(va, "&gt;");
		if (a.indexOf('"') != -1)
			a = a.replace(wa, "&quot;");
		return a;
	}
}
var ta = /&/g, ua = /</g, va = />/g, wa = /\"/g, xa = /[&<>\"]/;
function ya(a, c) {
	for ( var b = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(
			"."), e = String(c).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
			.split("."), f = Math.max(d.length, e.length), g = 0; b == 0
			&& g < f; g++) {
		var h = d[g] || "", i = e[g] || "", j = RegExp("(\\d*)(\\D*)", "g"), k = RegExp(
				"(\\d*)(\\D*)", "g");
		do {
			var m = j.exec(h) || [ "", "", "" ], n = k.exec(i)
					|| [ "", "", "" ];
			if (m[0].length == 0 && n[0].length == 0)
				break;
			b = za(m[1].length == 0 ? 0 : parseInt(m[1], 10),
					n[1].length == 0 ? 0 : parseInt(n[1], 10))
					|| za(m[2].length == 0, n[2].length == 0) || za(m[2], n[2]);
		} while (b == 0);
	}
	return b;
}
function za(a, c) {
	if (a < c)
		return -1;
	else if (a > c)
		return 1;
	return 0;
};
function Aa(a) {
	this.stack = Error().stack || "";
	if (a)
		this.message = String(a);
}
G(Aa, Error);
Aa.prototype.name = "CustomError";
function Ca(a, c) {
	c.unshift(a);
	Aa.call(this, ra.apply(q, c));
	c.shift();
	this.Vh = a;
}
G(Ca, Aa);
Ca.prototype.name = "AssertionError";
function Da(a, c) {
	if (!a) {
		var b = Array.prototype.slice.call(arguments, 2), d = "Assertion failed";
		if (c) {
			d += ": " + c;
			var e = b;
		}
		l(new Ca("" + d, e || []));
	}
	return a;
}
function Ea(a) {
	l(new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(
			arguments, 1)));
};
var Fa = Array.prototype, Ga = Fa.indexOf ? function(a, c, b) {
	Da(a.length != q);
	return Fa.indexOf.call(a, c, b);
} : function(a, c, b) {
	b = b == q ? 0 : b < 0 ? Math.max(0, a.length + b) : b;
	if (ja(a)) {
		if (!ja(c) || c.length != 1)
			return -1;
		return a.indexOf(c, b);
	}
	for (b = b; b < a.length; b++)
		if (b in a && a[b] === c)
			return b;
	return -1;
}, Ha = Fa.forEach ? function(a, c, b) {
	Da(a.length != q);
	Fa.forEach.call(a, c, b);
} : function(a, c, b) {
	for ( var d = a.length, e = ja(a) ? a.split("") : a, f = 0; f < d; f++)
		f in e && c.call(b, e[f], f, a);
};
function Ia(a) {
	if (ha(a) != "array")
		for ( var c = a.length - 1; c >= 0; c--)
			delete a[c];
	a.length = 0;
}
function Ja(a, c) {
	Da(a.length != q);
	return Fa.splice.call(a, c, 1).length == 1;
}
function Ka(a, c, b) {
	a: {
		for ( var d = a.length, e = ja(a) ? a.split("") : a, f = 0; f < d; f++)
			if (f in e && c.call(b, e[f], f, a)) {
				c = f;
				break a;
			}
		c = -1;
	}
	if (c >= 0) {
		Ja(a, c);
		return p;
	}
	return s;
}
function La() {
	return Fa.concat.apply(Fa, arguments);
}
function Ma(a, c) {
	return a > c ? 1 : a < c ? -1 : 0;
};
var Na, Oa, Pa, Qa;
function Ra() {
	return A.navigator ? A.navigator.userAgent : q;
}
Qa = Pa = Oa = Na = s;
var Sa;
if (Sa = Ra()) {
	var Ta = A.navigator;
	Na = Sa.indexOf("Opera") == 0;
	Oa = !Na && Sa.indexOf("MSIE") != -1;
	Pa = !Na && Sa.indexOf("WebKit") != -1;
	Qa = !Na && !Pa && Ta.product == "Gecko";
}
var Ua = Oa, Va = Qa, Wa = Pa, Xa = A.navigator, Ya = (Xa && Xa.platform || "")
		.indexOf("Mac") != -1, Za;
a: {
	var $a = "", ab;
	if (Na && A.opera) {
		var bb = A.opera.version;
		$a = typeof bb == "function" ? bb() : bb;
	} else {
		if (Va)
			ab = /rv\:([^\);]+)(\)|;)/;
		else if (Ua)
			ab = /MSIE\s+([^\);]+)(\)|;)/;
		else if (Wa)
			ab = /WebKit\/(\S+)/;
		if (ab) {
			var db = ab.exec(Ra());
			$a = db ? db[1] : "";
		}
	}
	if (Ua) {
		var eb, fb = A.document;
		eb = fb ? fb.documentMode : undefined;
		if (eb > parseFloat($a)) {
			Za = String(eb);
			break a;
		}
	}
	Za = $a;
}
var gb = {};
function hb(a) {
	return gb[a] || (gb[a] = ya(Za, a) >= 0);
};
var ib;
!Ua || hb("9");
Ua && hb("8");
function jb() {
}
jb.prototype.Of = s;
jb.prototype.Tb = function() {
	if (!this.Of) {
		this.Of = p;
		this.lb();
	}
};
jb.prototype.lb = aa();
function H(a, c) {
	this.type = a;
	this.currentTarget = this.target = c;
}
G(H, jb);
H.prototype.lb = function() {
	delete this.type;
	delete this.target;
	delete this.currentTarget;
};
H.prototype.mc = s;
H.prototype.fe = p;
H.prototype.stopPropagation = function() {
	this.mc = p;
};
function kb(a, c) {
	a && this.Fd(a, c);
}
G(kb, H);
t = kb.prototype;
t.target = q;
t.relatedTarget = q;
t.offsetX = 0;
t.offsetY = 0;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.button = 0;
t.keyCode = 0;
t.charCode = 0;
t.ctrlKey = s;
t.altKey = s;
t.shiftKey = s;
t.metaKey = s;
t.Ah = s;
t.Vc = q;
t.Fd = function(a, c) {
	var b = this.type = a.type;
	this.target = a.target || a.srcElement;
	this.currentTarget = c;
	var d = a.relatedTarget;
	if (d) {
		if (Va)
			try {
				d = d.nodeName && d;
			} catch (e) {
				d = q;
			}
	} else if (b == "mouseover")
		d = a.fromElement;
	else if (b == "mouseout")
		d = a.toElement;
	this.relatedTarget = d;
	this.offsetX = a.offsetX !== undefined ? a.offsetX : a.layerX;
	this.offsetY = a.offsetY !== undefined ? a.offsetY : a.layerY;
	this.clientX = a.clientX !== undefined ? a.clientX : a.pageX;
	this.clientY = a.clientY !== undefined ? a.clientY : a.pageY;
	this.screenX = a.screenX || 0;
	this.screenY = a.screenY || 0;
	this.button = a.button;
	this.keyCode = a.keyCode || 0;
	this.charCode = a.charCode || (b == "keypress" ? a.keyCode : 0);
	this.ctrlKey = a.ctrlKey;
	this.altKey = a.altKey;
	this.shiftKey = a.shiftKey;
	this.metaKey = a.metaKey;
	this.Ah = Ya ? a.metaKey : a.ctrlKey;
	this.Vc = a;
	delete this.fe;
	delete this.mc;
};
t.stopPropagation = function() {
	kb.ud.stopPropagation.call(this);
	if (this.Vc.stopPropagation)
		this.Vc.stopPropagation();
	else
		this.Vc.cancelBubble = p;
};
t.lb = function() {
	kb.ud.lb.call(this);
	this.relatedTarget = this.currentTarget = this.target = this.Vc = q;
};
function lb() {
}
var mb = 0;
t = lb.prototype;
t.key = 0;
t.Lc = s;
t.Jf = s;
t.Fd = function(a, c, b, d, e, f) {
	if (ha(a) == "function")
		this.Uf = p;
	else if (a && a.handleEvent && ha(a.handleEvent) == "function")
		this.Uf = s;
	else
		l(Error("Invalid listener argument"));
	this.Zc = a;
	this.pg = c;
	this.src = b;
	this.type = d;
	this.capture = !!e;
	this.He = f;
	this.Jf = s;
	this.key = ++mb;
	this.Lc = s;
};
t.handleEvent = function(a) {
	if (this.Uf)
		return this.Zc.call(this.He || this.src, a);
	return this.Zc.handleEvent.call(this.Zc, a);
};
function nb(a, c) {
	this.mg = c;
	this.Ub = [];
	if (a > this.mg)
		l(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
	for ( var b = 0; b < a; b++)
		this.Ub.push(this.tb ? this.tb() : {});
}
G(nb, jb);
nb.prototype.tb = q;
nb.prototype.Nf = q;
function ob(a) {
	if (a.Ub.length)
		return a.Ub.pop();
	return a.tb ? a.tb() : {};
}
function pb(a, c) {
	a.Ub.length < a.mg ? a.Ub.push(c) : qb(a, c);
}
function qb(a, c) {
	if (a.Nf)
		a.Nf(c);
	else {
		var b = ha(c);
		if (b == "object" || b == "array" || b == "function")
			if (ha(c.Tb) == "function")
				c.Tb();
			else
				for ( var d in c)
					delete c[d];
	}
}
nb.prototype.lb = function() {
	nb.ud.lb.call(this);
	for ( var a = this.Ub; a.length;)
		qb(this, a.pop());
	delete this.Ub;
};
var rb;
var sb = (rb = "ScriptEngine" in A && A.ScriptEngine() == "JScript") ? A
		.ScriptEngineMajorVersion()
		+ "."
		+ A.ScriptEngineMinorVersion()
		+ "."
		+ A.ScriptEngineBuildVersion() : "0";
var tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db;
(function() {
	function a() {
		return {
			kb : 0,
			ib : 0
		};
	}
	function c() {
		return [];
	}
	function b() {
		function n(o) {
			return g.call(n.src, n.key, o);
		}
		return n;
	}
	function d() {
		return new lb;
	}
	function e() {
		return new kb;
	}
	var f = rb && !(ya(sb, "5.7") >= 0), g;
	yb = function(n) {
		g = n;
	};
	if (f) {
		tb = function() {
			return ob(h);
		};
		ub = function(n) {
			pb(h, n);
		};
		vb = function() {
			return ob(i);
		};
		wb = function(n) {
			pb(i, n);
		};
		xb = function() {
			return ob(j);
		};
		zb = function() {
			pb(j, b());
		};
		Ab = function() {
			return ob(k);
		};
		Bb = function(n) {
			pb(k, n);
		};
		Cb = function() {
			return ob(m);
		};
		Db = function(n) {
			pb(m, n);
		};
		var h = new nb(0, 600);
		h.tb = a;
		var i = new nb(0, 600);
		i.tb = c;
		var j = new nb(0, 600);
		j.tb = b;
		var k = new nb(0, 600);
		k.tb = d;
		var m = new nb(0, 600);
		m.tb = e;
	} else {
		tb = a;
		ub = ga;
		vb = c;
		wb = ga;
		xb = b;
		zb = ga;
		Ab = d;
		Bb = ga;
		Cb = e;
		Db = ga;
	}
})();
function Eb(a, c, b) {
	for ( var d in a)
		c.call(b, a[d], d, a);
}
function Fb(a) {
	var c = 0;
	for ( var b in a)
		c++;
	return c;
}
function Gb(a) {
	var c = [], b = 0;
	for ( var d in a)
		c[b++] = d;
	for (b = c.length - 1; b >= 0; b--) {
		d = c[b];
		d in a && delete a[d];
	}
}
var Hb = [ "constructor", "hasOwnProperty", "isPrototypeOf",
		"propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
function Ib(a) {
	for ( var c, b, d = 1; d < arguments.length; d++) {
		b = arguments[d];
		for (c in b)
			a[c] = b[c];
		for ( var e = 0; e < Hb.length; e++) {
			c = Hb[e];
			if (Object.prototype.hasOwnProperty.call(b, c))
				a[c] = b[c];
		}
	}
};
var Jb = {}, Kb = {}, Lb = {}, Mb = {};
function I(a, c, b, d, e) {
	if (c)
		if (ha(c) == "array") {
			for ( var f = 0; f < c.length; f++)
				I(a, c[f], b, d, e);
			return q;
		} else {
			d = !!d;
			var g = Kb;
			c in g || (g[c] = tb());
			g = g[c];
			if (!(d in g)) {
				g[d] = tb();
				g.kb++;
			}
			g = g[d];
			var h = la(a), i;
			g.ib++;
			if (g[h]) {
				i = g[h];
				for (f = 0; f < i.length; f++) {
					g = i[f];
					if (g.Zc == b && g.He == e) {
						if (g.Lc)
							break;
						return i[f].key;
					}
				}
			} else {
				i = g[h] = vb();
				g.kb++;
			}
			f = xb();
			f.src = a;
			g = Ab();
			g.Fd(b, f, a, c, d, e);
			b = g.key;
			f.key = b;
			i.push(g);
			Jb[b] = g;
			Lb[h] || (Lb[h] = vb());
			Lb[h].push(g);
			if (a.addEventListener) {
				if (a == A || !a.Lf)
					a.addEventListener(c, f, d);
			} else
				a.attachEvent(Nb(c), f);
			return b;
		}
	else
		l(Error("Invalid event type"));
}
function Ob(a, c, b, d, e) {
	if (ha(c) == "array") {
		for ( var f = 0; f < c.length; f++)
			Ob(a, c[f], b, d, e);
		return q;
	}
	d = !!d;
	a: {
		f = Kb;
		if (c in f) {
			f = f[c];
			if (d in f) {
				f = f[d];
				a = la(a);
				if (f[a]) {
					a = f[a];
					break a;
				}
			}
		}
		a = q;
	}
	if (!a)
		return s;
	for (f = 0; f < a.length; f++)
		if (a[f].Zc == b && a[f].capture == d && a[f].He == e)
			return Pb(a[f].key);
	return s;
}
function Pb(a) {
	if (!Jb[a])
		return s;
	var c = Jb[a];
	if (c.Lc)
		return s;
	var b = c.src, d = c.type, e = c.pg, f = c.capture;
	if (b.removeEventListener) {
		if (b == A || !b.Lf)
			b.removeEventListener(d, e, f);
	} else
		b.detachEvent && b.detachEvent(Nb(d), e);
	b = la(b);
	e = Kb[d][f][b];
	if (Lb[b]) {
		var g = Lb[b], h = Ga(g, c);
		h >= 0 && Ja(g, h);
		g.length == 0 && delete Lb[b];
	}
	c.Lc = p;
	e.ng = p;
	Qb(d, f, b, e);
	delete Jb[a];
	return p;
}
function Qb(a, c, b, d) {
	if (!d.Ld)
		if (d.ng) {
			for ( var e = 0, f = 0; e < d.length; e++)
				if (d[e].Lc) {
					var g = d[e].pg;
					g.src = q;
					zb(g);
					Bb(d[e]);
				} else {
					if (e != f)
						d[f] = d[e];
					f++;
				}
			d.length = f;
			d.ng = s;
			if (f == 0) {
				wb(d);
				delete Kb[a][c][b];
				Kb[a][c].kb--;
				if (Kb[a][c].kb == 0) {
					ub(Kb[a][c]);
					delete Kb[a][c];
					Kb[a].kb--;
				}
				if (Kb[a].kb == 0) {
					ub(Kb[a]);
					delete Kb[a];
				}
			}
		}
}
function Rb(a, c, b) {
	var d = 0, e = a == q, f = c == q, g = b == q;
	b = !!b;
	if (e)
		Eb(Lb, function(i) {
			for ( var j = i.length - 1; j >= 0; j--) {
				var k = i[j];
				if ((f || c == k.type) && (g || b == k.capture)) {
					Pb(k.key);
					d++;
				}
			}
		});
	else {
		a = la(a);
		if (Lb[a]) {
			a = Lb[a];
			for (e = a.length - 1; e >= 0; e--) {
				var h = a[e];
				if ((f || c == h.type) && (g || b == h.capture)) {
					Pb(h.key);
					d++;
				}
			}
		}
	}
	return d;
}
function Nb(a) {
	if (a in Mb)
		return Mb[a];
	return Mb[a] = "on" + a;
}
function Sb(a, c, b, d, e) {
	var f = 1;
	c = la(c);
	if (a[c]) {
		a.ib--;
		a = a[c];
		if (a.Ld)
			a.Ld++;
		else
			a.Ld = 1;
		try {
			for ( var g = a.length, h = 0; h < g; h++) {
				var i = a[h];
				if (i && !i.Lc)
					f &= Tb(i, e) !== s;
			}
		} finally {
			a.Ld--;
			Qb(b, d, c, a);
		}
	}
	return Boolean(f);
}
function Tb(a, c) {
	var b = a.handleEvent(c);
	a.Jf && Pb(a.key);
	return b;
}
yb(function(a, c) {
	if (!Jb[a])
		return p;
	var b = Jb[a], d = b.type, e = Kb;
	if (!(d in e))
		return p;
	e = e[d];
	var f, g;
	if (ib === undefined)
		ib = Ua && !A.addEventListener;
	if (ib) {
		f = c || fa("window.event");
		var h = p in e, i = s in e;
		if (h) {
			if (f.keyCode < 0 || f.returnValue != undefined)
				return p;
			a: {
				var j = s;
				if (f.keyCode == 0)
					try {
						f.keyCode = -1;
						break a;
					} catch (k) {
						j = p;
					}
				if (j || f.returnValue == undefined)
					f.returnValue = p;
			}
		}
		j = Cb();
		j.Fd(f, this);
		f = p;
		try {
			if (h) {
				for ( var m = vb(), n = j.currentTarget; n; n = n.parentNode)
					m.push(n);
				g = e[p];
				g.ib = g.kb;
				for ( var o = m.length - 1; !j.mc && o >= 0 && g.ib; o--) {
					j.currentTarget = m[o];
					f &= Sb(g, m[o], d, p, j);
				}
				if (i) {
					g = e[s];
					g.ib = g.kb;
					for (o = 0; !j.mc && o < m.length && g.ib; o++) {
						j.currentTarget = m[o];;
						f &= Sb(g, m[o], d, s, j);
					}
				}
			} else
				f = Tb(b, j);
		} finally {
			if (m) {
				m.length = 0;
				wb(m);
			}
			j.Tb();
			Db(j);
		}
		return f;
	}
	d = new kb(c, this);
	try {
		f = Tb(b, d);
	} finally {
		d.Tb();
	}
	return f;
});
function Ub(a, c, b, d) {
	this.Ie = 0;
	this.Je = a.length;
	this.Sf = s;
	var e = this;
	$(document).ready(function() {
		for ( var f = 0; f < c.length; f++) {
			var g = document.createElement("audio");
			document.body.appendChild(g);
			g.setAttribute("src", c[f]);
			g.volume = 0;
			g.load();
		}
		e.og = document.createElement("div");
		$(e.og).css({
			height : "0px",
			width : "0px",
			overflow : "hidden"
		});
		for (f = 0; f < e.Je; f++) {
			g = $("<img></img>");
			$(g).unbind("load");
			$(g).bind("load", function() {
				e.Ie++;
				b(e.Ie / e.Je);
				if (e.Ie == e.Je) {
					d();
					e.Sf = p;
				}
			});
			$(g).attr("src", a[f]);
			$(g).appendTo(this.og);
		}
		setTimeout(function() {
			e.Sf || d();
		}, 3E4);
	});
};
function Vb(a) {
	return Wb(a || arguments.callee.caller, []);
}
function Wb(a, c) {
	var b = [];
	if (Ga(c, a) >= 0)
		b.push("[...circular reference...]");
	else if (a && c.length < 50) {
		b.push(Xb(a) + "(");
		for ( var d = a.arguments, e = 0; e < d.length; e++) {
			e > 0 && b.push(", ");
			var f;
			f = d[e];
			switch (typeof f) {
			case "object":
				f = f ? "object" : "null";
				break;
			case "string":
				f = f;
				break;
			case "number":
				f = String(f);
				break;
			case "boolean":
				f = f ? "true" : "false";
				break;
			case "function":
				f = (f = Xb(f)) ? f : "[fn]";
				break;
			default:
				f = typeof f;
			}
			if (f.length > 40)
				f = f.substr(0, 40) + "...";
			b.push(f);
		}
		c.push(a);
		b.push(")\n");
		try {
			b.push(Wb(a.caller, c));
		} catch (g) {
			b.push("[exception trying to get caller]\n");
		}
	} else
		a ? b.push("[...long stack...]") : b.push("[end]");
	return b.join("");
}
function Xb(a) {
	a = String(a);
	if (!Yb[a]) {
		var c = /function ([^\(]+)/.exec(a);
		Yb[a] = c ? c[1] : "[Anonymous]";
	}
	return Yb[a];
}
var Yb = {};
function Zb(a, c, b, d, e) {
	this.reset(a, c, b, d, e);
}
Zb.prototype.Dh = 0;
Zb.prototype.Qf = q;
Zb.prototype.Pf = q;
var $b = 0;
Zb.prototype.reset = function(a, c, b, d, e) {
	this.Dh = typeof e == "number" ? e : $b++;
	this.ai = d || qa();
	this.Yc = a;
	this.Yh = c;
	this.Lh = b;
	delete this.Qf;
	delete this.Pf;
};
Zb.prototype.rg = function(a) {
	this.Yc = a;
};
function ac(a) {
	this.yh = a;
}
ac.prototype.of = q;
ac.prototype.Yc = q;
ac.prototype.Rf = q;
function bc(a, c) {
	this.name = a;
	this.value = c;
}
bc.prototype.toString = ba("name");
var cc = new bc("INFO", 800), dc = new bc("CONFIG", 700);
ac.prototype.rg = function(a) {
	this.Yc = a;
};
function ec(a) {
	if (a.Yc)
		return a.Yc;
	if (a.of)
		return ec(a.of);
	Ea("Root logger has no level set.");
	return q;
}
ac.prototype.log = function(a, c, b) {
	if (a.value >= ec(this).value) {
		a = this.gh(a, c, b);
		for (c = this; c;) {
			b = c;
			var d = a;
			if (b.Rf)
				for ( var e = 0, f = void 0; f = b.Rf[e]; e++)
					f(d);
			c = c.of;
		}
	}
};
ac.prototype.gh = function(a, c, b) {
	var d = new Zb(a, String(c), this.yh);
	if (b) {
		d.Qf = b;
		var e;
		var f = arguments.callee.caller;
		try {
			var g, h = fa("window.location.href");
			g = typeof b == "string" ? {
				message : b,
				name : "Unknown error",
				lineNumber : "Not available",
				fileName : h,
				stack : "Not available"
			} : !b.lineNumber || !b.fileName || !b.stack ? {
				message : b.message,
				name : b.name,
				lineNumber : b.lineNumber || b.Kh || "Not available",
				fileName : b.fileName || b.filename || b.sourceURL || h,
				stack : b.stack || "Not available"
			} : b;
			e = "Message: " + sa(g.message) + '\nUrl: <a href="view-source:'
					+ g.fileName + '" target="_new">' + g.fileName
					+ "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n"
					+ sa(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n"
					+ sa(Vb(f) + "-> ");
		} catch (i) {
			e = "Exception trying to expose exception! You win, we lose. " + i;
		}
		d.Pf = e;
	}
	return d;
};
ac.prototype.info = function(a, c) {
	this.log(cc, a, c);
};
var fc = q;
function gc() {
	if (!fc) {
		fc = new ac("");
		fc.rg(dc);
	}
	return fc;
};
var hc = {
	Ag : ".",
	Dg : ",",
	Jg : "%",
	Bd : "0",
	Gh : "+",
	Hg : "-",
	Cg : "E",
	Lg : "\u2030",
	Eg : "\u221e",
	Ig : "NaN",
	zg : "#,##0.###",
	Qg : "#E0",
	Kg : "#,##0%",
	wg : "\u00a4#,##0.00;(\u00a4#,##0.00)",
	Bg : "USD"
}, J = hc;
J = hc;
var ic = {
	AED : "\u062f.\u0625",
	ARS : "$",
	AUD : "$",
	BDT : "\u09f3",
	BRL : "R$",
	CAD : "$",
	CHF : "Fr.",
	CLP : "$",
	CNY : "\u00a5",
	COP : "$",
	CRC : "\u20a1",
	CUP : "$",
	CZK : "K\u010d",
	DKK : "kr",
	DOP : "$",
	EGP : "\u00a3",
	EUR : "\u20ac",
	GBP : "\u00a3",
	HKD : "$",
	HRK : "kn",
	HUF : "Ft",
	IDR : "Rp",
	ILS : "\u20aa",
	INR : "Rs",
	IQD : "\u0639\u062f",
	ISK : "kr",
	JMD : "$",
	JPY : "\u00a5",
	KRW : "\u20a9",
	KWD : "\u062f.\u0643",
	LKR : "Rs",
	LVL : "Ls",
	MNT : "\u20ae",
	MXN : "$",
	MYR : "RM",
	NOK : "kr",
	NZD : "$",
	PAB : "B/.",
	PEN : "S/.",
	PHP : "P",
	PKR : "Rs.",
	PLN : "z\u0142",
	RON : "L",
	RUB : "\u0440\u0443\u0431",
	SAR : "\u0633.\u0631",
	SEK : "kr",
	SGD : "$",
	SKK : "Sk",
	SYP : "SYP",
	THB : "\u0e3f",
	TRY : "TL",
	TWD : "NT$",
	USD : "$",
	UYU : "$",
	VEF : "Bs.F",
	VND : "\u20ab",
	XAF : "FCFA",
	XCD : "$",
	YER : "YER",
	ZAR : "R"
};
function jc(a, c) {
	this.Tf = c || J.Bg;
	this.dh = ic[this.Tf];
	this.be = 40;
	this.hb = 1;
	this.kf = 3;
	this.ce = this.rd = 0;
	this.qf = this.pf = "";
	this.de = "-";
	this.lf = "";
	this.sd = 1;
	this.Ge = 3;
	this.he = this.Mf = s;
	if (typeof a == "number")
		switch (a) {
		case 1:
			kc(this, J.zg);
			break;
		case 2:
			kc(this, J.Qg);
			break;
		case 3:
			kc(this, J.Kg);
			break;
		case 4:
			kc(this, J.wg);
			break;
		default:
			l(Error("Unsupported pattern type."));
		}
	else
		kc(this, a);
}
function kc(a, c) {
	a.Zh = c.replace(/ /g, "\u00a0");
	var b = [ 0 ];
	a.pf = lc(a, c, b);
	for ( var d = b[0], e = -1, f = 0, g = 0, h = 0, i = -1, j = c.length, k = p; b[0] < j
			&& k; b[0]++)
		switch (c.charAt(b[0])) {
		case "#":
			if (g > 0)
				h++;
			else
				f++;
			i >= 0 && e < 0 && i++;
			break;
		case "0":
			if (h > 0)
				l(Error('Unexpected "0" in pattern "' + c + '"'));
			g++;
			i >= 0 && e < 0 && i++;
			break;
		case ",":
			i = 0;
			break;
		case ".":
			if (e >= 0)
				l(Error('Multiple decimal separators in pattern "' + c + '"'));
			e = f + g + h;
			break;
		case "E":
			if (a.he)
				l(Error('Multiple exponential symbols in pattern "' + c + '"'));
			a.he = p;
			for (a.ce = 0; b[0] + 1 < j && c.charAt(b[0] + 1) == "0";) {
				b[0]++;
				a.ce++;
			}
			if (f + g < 1 || a.ce < 1)
				l(Error('Malformed exponential pattern "' + c + '"'));
			k = s;
			break;
		default:
			b[0]--;
			k = s;
		}
	if (g == 0 && f > 0 && e >= 0) {
		g = e;
		g == 0 && g++;
		h = f - g;
		f = g - 1;
		g = 1;
	}
	if (e < 0 && h > 0 || e >= 0 && (e < f || e > f + g) || i == 0)
		l(Error('Malformed pattern "' + c + '"'));
	h = f + g + h;
	a.kf = e >= 0 ? h - e : 0;
	if (e >= 0) {
		a.rd = f + g - e;
		if (a.rd < 0)
			a.rd = 0;
	}
	a.hb = (e >= 0 ? e : h) - f;
	if (a.he) {
		a.be = f + a.hb;
		if (a.kf == 0 && a.hb == 0)
			a.hb = 1;
	}
	a.Ge = Math.max(0, i);
	a.Mf = e == 0 || e == h;
	d = b[0] - d;
	a.qf = lc(a, c, b);
	if (b[0] < c.length && c.charAt(b[0]) == mc) {
		b[0]++;
		a.de = lc(a, c, b);
		b[0] += d;
		a.lf = lc(a, c, b);
	} else {
		a.de = a.pf + a.de;
		a.lf += a.qf;
	}
}
function nc(a, c, b, d) {
	var e = Math.pow(10, a.kf);
	c = Math.round(c * e);
	var f = Math.floor(c / e), g = Math.floor(c - f * e), h = a.rd > 0 || g > 0, i = "";
	for (c = f; c > 1.0E20;) {
		i = "0" + i;
		c = Math.round(c / 10);
	}
	i = c + i;
	var j = J.Ag, k = J.Dg;
	c = J.Bd.charCodeAt(0);
	var m = i.length;
	if (f > 0 || b > 0) {
		for (f = m; f < b; f++)
			d.push(J.Bd);
		for (f = 0; f < m; f++) {
			d.push(String.fromCharCode(c + i.charAt(f) * 1));
			m - f > 1 && a.Ge > 0 && (m - f) % a.Ge == 1 && d.push(k);
		}
	} else
		h || d.push(J.Bd);
	if (a.Mf || h)
		d.push(j);
	b = "" + (g + e);
	for (e = b.length; b.charAt(e - 1) == "0" && e > a.rd + 1;)
		e--;
	for (f = 1; f < e; f++)
		d.push(String.fromCharCode(c + b.charAt(f) * 1));
}
function oc(a, c, b) {
	b.push(J.Cg);
	if (c < 0) {
		c = -c;
		b.push(J.Hg);
	}
	c = "" + c;
	for ( var d = c.length; d < a.ce; d++)
		b.push(J.Bd);
	b.push(c);
}
var mc = ";";
function lc(a, c, b) {
	for ( var d = "", e = s, f = c.length; b[0] < f; b[0]++) {
		var g = c.charAt(b[0]);
		if (g == "'")
			if (b[0] + 1 < f && c.charAt(b[0] + 1) == "'") {
				b[0]++;
				d += "'";
			} else
				e = !e;
		else if (e)
			d += g;
		else
			switch (g) {
			case "#":
			case "0":
			case ",":
			case ".":
			case mc:
				return d;
			case "\u00a4":
				if (b[0] + 1 < f && c.charAt(b[0] + 1) == "\u00a4") {
					b[0]++;
					d += a.Tf;
				} else
					d += a.dh;
				break;
			case "%":
				if (a.sd != 1)
					l(Error("Too many percent/permill"));
				a.sd = 100;
				d += J.Jg;
				break;
			case "\u2030":
				if (a.sd != 1)
					l(Error("Too many percent/permill"));
				a.sd = 1E3;
				d += J.Lg;
				break;
			default:
				d += g;
			}
	}
	return d;
};
!Ua || hb("9");
Ua && hb("9");
function pc(a, c) {
	this.x = a !== undefined ? a : 0;
	this.y = c !== undefined ? c : 0;
}
pc.prototype.toString = function() {
	return "(" + this.x + ", " + this.y + ")";
};
function qc(a, c) {
	this.width = a;
	this.height = c;
}
function rc(a, c) {
	if (a == c)
		return p;
	if (!a || !c)
		return s;
	return a.width == c.width && a.height == c.height;
}
qc.prototype.toString = function() {
	return "(" + this.width + " x " + this.height + ")";
};
qc.prototype.floor = function() {
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this;
};
qc.prototype.round = function() {
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this;
};
function N(a, c) {
	if (a instanceof N)
		this.Ea = a.Ea;
	else {
		var b;
		if (b = ia(a))
			a: {
				for ( var d = b = 0; d < a.length; d++) {
					if (!ia(a[d]) || b > 0 && a[d].length != b) {
						b = s;
						break a;
					}
					for ( var e = 0; e < a[d].length; e++)
						if (!ka(a[d][e])) {
							b = s;
							break a;
						}
					if (b == 0)
						b = a[d].length;
				}
				b = b != 0;
			}
		if (b) {
			if (ha(a) == "array")
				b = La(a);
			else {
				b = [];
				d = 0;
				for (e = a.length; d < e; d++)
					b[d] = a[d];
				b = b;
			}
			this.Ea = b;
		} else if (a instanceof qc)
			this.Ea = sc(a.height, a.width);
		else if (ka(a) && ka(c) && a > 0 && c > 0)
			this.Ea = sc(a, c);
		else
			l(Error("Invalid argument(s) for Matrix contructor"));
	}
	this.ma = new qc(this.Ea[0].length, this.Ea.length);
}
function tc(a, c, b) {
	for ( var d = 0; d < a.ma.height; d++)
		for ( var e = 0; e < a.ma.width; e++)
			c.call(b, a.Ea[d][e], d, e, a);
}
function uc(a, c, b) {
	var d = new N(a.ma);
	tc(a, function(e, f, g) {
		d.Ea[f][g] = c.call(b, e, f, g, a);
	});
	return d;
}
function sc(a, c) {
	for ( var b = [], d = 0; d < a; d++) {
		b[d] = [];
		for ( var e = 0; e < c; e++)
			b[d][e] = 0;
	}
	return b;
}
t = N.prototype;
t.Ea = q;
t.ma = q;
t.add = function(a) {
	if (!rc(this.ma, a.ma))
		l(Error("Matrix summation is only supported on arrays of equal size"));
	return uc(this, function(c, b, d) {
		return c + a.Ea[b][d];
	});
};
function vc(a, c, b) {
	if (!(c >= 0 && c < a.ma.height && b >= 0 && b < a.ma.width))
		return q;
	return a.Ea[c][b];
}
t.multiply = function(a) {
	if (a instanceof N) {
		if (this.ma.width != a.ma.height)
			l(Error("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns."));
		return wc(this, a);
	} else if (ka(a))
		return xc(this, a);
	else
		l(Error("A matrix can only be multiplied by a number or another matrix."));
};
t.tf = function(a) {
	if (!rc(this.ma, a.ma))
		l(Error("Matrix subtraction is only supported on arrays of equal size."));
	return uc(this, function(c, b, d) {
		return c - a.Ea[b][d];
	});
};
function yc(a) {
	return a.Ea;
}
t.toString = function() {
	var a = 0;
	tc(this, function(b) {
		b = String(b).length;
		if (b > a)
			a = b;
	});
	var c = [];
	Ha(this.Ea, function(b) {
		c.push("[ ");
		Ha(b, function(d) {
			d = String(d);
			c.push(Array(a - d.length + 1).join(" ") + d + " ");
		});
		c.push("]\n");
	});
	return c.join("");
};
function wc(a, c) {
	var b = new N(a.ma.height, c.ma.width);
	tc(b, function(d, e, f) {
		for ( var g = d = 0; g < this.ma.width; g++)
			d += vc(this, e, g) * vc(c, g, f);
		if (!(e >= 0 && e < b.ma.height && f >= 0 && f < b.ma.width))
			l(Error("Index out of bounds when setting matrix value, (" + e
					+ "," + f + ") in size (" + b.ma.height + "," + b.ma.width
					+ ")"));
		b.Ea[e][f] = d;
	}, a);
	return b;
}
function xc(a, c) {
	return uc(a, function(b) {
		return b * c;
	});
};
function zc(a, c, b, d) {
	this.uf = a;
	this.wf = c;
	this.vf = b;
	this.xf = d;
};
function Ac(a, c) {
	this.x = Number(a) || 0;
	this.y = Number(c) || 0;
}
G(Ac, pc);
Ac.prototype.add = function(a) {
	this.x += a.x;
	this.y += a.y;
	return this;
};
Ac.prototype.tf = function(a) {
	this.x -= a.x;
	this.y -= a.y;
	return this;
};
function Bc() {
}
G(Bc, jb);
t = Bc.prototype;
t.Lf = p;
t.nf = q;
t.addEventListener = function(a, c, b, d) {
	I(this, a, c, b, d);
};
t.removeEventListener = function(a, c, b, d) {
	Ob(this, a, c, b, d);
};
t.dispatchEvent = function(a) {
	a = a;
	if (ja(a))
		a = new H(a, this);
	else if (a instanceof H)
		a.target = a.target || this;
	else {
		var c = a;
		a = new H(a.type, this);
		Ib(a, c);
	}
	c = 1;
	var b, d = a.type, e = Kb;
	if (d in e) {
		e = e[d];
		d = p in e;
		var f;
		if (d) {
			b = [];
			for (f = this; f; f = f.nf)
				b.push(f);
			f = e[p];
			f.ib = f.kb;
			for ( var g = b.length - 1; !a.mc && g >= 0 && f.ib; g--) {
				a.currentTarget = b[g];
				c &= Sb(f, b[g], a.type, p, a) && a.fe != s;
			}
		}
		if (s in e) {
			f = e[s];
			f.ib = f.kb;
			if (d)
				for (g = 0; !a.mc && g < b.length && f.ib; g++) {
					a.currentTarget = b[g];
					c &= Sb(f, b[g], a.type, s, a) && a.fe != s;
				}
			else
				for (b = this; !a.mc && b && f.ib; b = b.nf) {
					a.currentTarget = b;
					c &= Sb(f, b, a.type, s, a) && a.fe != s;
				}
		}
		a = Boolean(c);
	} else
		a = p;
	return a;
};
t.lb = function() {
	Bc.ud.lb.call(this);
	Rb(this);
	this.nf = q;
};
function Cc(a, c) {
	this.Gd = a || 1;
	this.vd = c || Dc;
	this.ze = oa(this.Eh, this);
	this.Me = qa();
}
G(Cc, Bc);
Cc.prototype.enabled = s;
var Dc = A.window;
t = Cc.prototype;
t.oc = q;
t.Eh = function() {
	if (this.enabled) {
		var a = qa() - this.Me;
		if (a > 0 && a < this.Gd * 0.8)
			this.oc = this.vd.setTimeout(this.ze, this.Gd - a);
		else {
			this.dispatchEvent(Ec);
			if (this.enabled) {
				this.oc = this.vd.setTimeout(this.ze, this.Gd);
				this.Me = qa();
			}
		}
	}
};
t.start = function() {
	this.enabled = p;
	if (!this.oc) {
		this.oc = this.vd.setTimeout(this.ze, this.Gd);
		this.Me = qa();
	}
};
t.stop = function() {
	this.enabled = s;
	if (this.oc) {
		this.vd.clearTimeout(this.oc);
		this.oc = q;
	}
};
t.lb = function() {
	Cc.ud.lb.call(this);
	this.stop();
	delete this.vd;
};
var Ec = "tick";
function Fc(a, c, b, d) {
	this.top = a;
	this.right = c;
	this.bottom = b;
	this.left = d;
}
Fc.prototype.toString = function() {
	return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, "
			+ this.left + "l)";
};
function Gc(a, c, b) {
	a.style[Hc(b)] = c;
}
var Ic = {};
function Hc(a) {
	return Ic[a] || (Ic[a] = String(a).replace(/\-([a-z])/g, function(c, b) {
		return b.toUpperCase();
	}));
};
var Jc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Kc(a) {
	return a.length == 1 ? "0" + a : a;
};
function Lc() {
	this.Xe = 0;
	this.kc = [];
	this.De = this.pd = 0;
}
Lc.prototype.Ze = 0;
function Mc(a, c) {
	return a.x * c.x + a.y * c.y;
}
function Nc(a, c) {
	return new O(a.a.x * c.x + a.b.x * c.y, a.a.y * c.x + a.b.y * c.y);
}
function Oc(a, c) {
	return new O(a.x + c.x, a.y + c.y);
}
function Pc(a, c) {
	return new O(a.x - c.x, a.y - c.y);
}
function Qc(a) {
	return a > 0 ? a : -a;
}
function P(a, c) {
	return a > c ? a : c;
}
function Q(a, c, b) {
	return P(c, a < b ? a : b);
};
function O(a, c) {
	if (a === undefined)
		a = 0;
	this.x = a;
	if (c === undefined)
		c = 0;
	this.y = c;
}
t = O.prototype;
t.oa = function() {
	this.y = this.x = 0;
};
t.l = function(a, c) {
	this.x = a;
	this.y = c;
};
function S(a, c) {
	a.x = c.x;
	a.y = c.y;
}
t.yd = function() {
	return new O(this.x, this.y);
};
function Rc(a, c) {
	a.x += c.x;
	a.y += c.y;
}
function Sc(a, c) {
	a.x *= c;
	a.y *= c;
}
function Tc(a, c) {
	var b = a.x;
	a.x = c.a.x * b + c.b.x * a.y;
	a.y = c.a.y * b + c.b.y * a.y;
}
t.pc = function() {
	this.x = Math.abs(this.x);
	this.y = Math.abs(this.y);
};
function T(a) {
	return Math.sqrt(a.x * a.x + a.y * a.y);
}
function Uc(a) {
	var c = T(a);
	if (c < Number.MIN_VALUE)
		return 0;
	var b = 1 / c;
	a.x *= b;
	a.y *= b;
	return c;
}
t.Sc = function() {
	return isFinite(this.x) && isFinite(this.y);
};
function Vc() {
	this.I = new O;
	this.G = new O;
}
Vc.prototype.Sc = function() {
	var a = this.G.x, c = this.G.y;
	a = this.G.x;
	c = this.G.y;
	a -= this.I.x;
	c -= this.I.y;
	return a = (a = a >= 0 && c >= 0) && this.I.Sc() && this.G.Sc();
};
function Wc() {
}
Wc.prototype = {
	Oa : q,
	Ke : q,
	Le : 0
};
function Xc() {
}
Xc.prototype = {
	Ba : q,
	Fa : q,
	u : q,
	next : q
};
function Yc() {
}
Yc.prototype = {
	Ae : q,
	Be : q,
	rf : q
};
function Zc(a, c) {
	this.s = new Xc;
	this.t = new Xc;
	this.A = 0;
	if (!a || !c)
		this.C = this.B = q;
	else {
		this.B = a;
		this.C = c;
		this.Aa = 0;
		this.ja = Math.sqrt(this.B.ja * this.C.ja);
		this.ka = P(this.B.ka, this.C.ka);
		this.r = this.N = q;
		this.s.Fa = q;
		this.s.u = q;
		this.s.next = q;
		this.s.Ba = q;
		this.t.Fa = q;
		this.t.u = q;
		this.t.next = q;
		this.t.Ba = q;
	}
}
Zc.prototype = {
	rc : ca(q),
	Rc : ba("r"),
	Qc : aa(),
	A : 0,
	N : q,
	r : q,
	s : new Xc,
	t : new Xc,
	B : q,
	C : q,
	Aa : 0,
	ja : q,
	ka : q
};
function $c() {
}
$c.prototype.Df = ca(q);
$c.prototype.Ef = aa();
function ad(a, c) {
	this.s = new Xc;
	this.t = new Xc;
	this.A = 0;
	if (!a || !c)
		this.C = this.B = q;
	else {
		this.B = a;
		this.C = c;
		this.Aa = 0;
		this.ja = Math.sqrt(this.B.ja * this.C.ja);
		this.ka = P(this.B.ka, this.C.ka);
		this.r = this.N = q;
		this.s.Fa = q;
		this.s.u = q;
		this.s.next = q;
		this.s.Ba = q;
		this.t.Fa = q;
		this.t.u = q;
		this.t.next = q;
		this.t.Ba = q;
	}
}
G(ad, Zc);
ad.prototype.Qc = aa();
ad.prototype.rc = ca(q);
var bd = Math.PI, cd = 2 / 180 * bd, dd = 8 / 180 * bd, ed = 2 / 180 / 1;
function fd() {
}
fd.prototype = {
	Zg : 0,
	Vg : 0,
	Wg : 0,
	Ug : 0,
	Xg : q
};
function gd() {
	this.U = new fd;
	this.U.Xg = this;
}
gd.prototype = {
	l : function(a) {
		this.sf(a.Ob);
	},
	yd : function() {
		var a = new gd;
		a.sf(this.Ob);
		return a;
	},
	sf : function(a) {
		this.Ob = a;
		this.U.Zg = this.Ob & 255;
		this.U.Vg = (this.Ob & 65280) >> 8 & 255;
		this.U.Wg = (this.Ob & 16711680) >> 16 & 255;
		this.U.Ug = (this.Ob & 4278190080) >> 24 & 255;
	},
	U : new fd,
	Ob : 0
};
function hd() {
	this.position = new O;
	this.id = new gd;
}
hd.prototype = {
	jb : q,
	la : q,
	ra : q
};
function id() {
	this.Y = Array(2);
	for ( var a = 0; a < 2; a++)
		this.Y[a] = new hd;
	this.H = new O;
}
id.prototype = {
	Y : q,
	H : q,
	V : 0
};
function jd() {
	this.Eb = new O;
	this.id = new gd;
};
function kd(a, c, b, d) {
	var e = 0, f = c[0].Eb, g = c[1].Eb, h = Mc(b, c[0].Eb) - d;
	b = Mc(b, c[1].Eb) - d;
	if (h <= 0)
		a[e++] = c[0];
	if (b <= 0)
		a[e++] = c[1];
	if (h * b < 0) {
		b = h / (h - b);
		d = a[e].Eb;
		d.x = f.x + b * (g.x - f.x);
		d.y = f.y + b * (g.y - f.y);
		a[e].id = h > 0 ? c[0].id : c[1].id;
		++e;
	}
	return e;
}
function ld(a, c, b) {
	var d = a.F, e = b.Ra, f = b.F, g = a.db[c].x, h = a.db[c].y, i = g, j = a.d;
	g = j.a.x * i + j.b.x * h;
	h = j.a.y * i + j.b.y * h;
	var k = g, m = h;
	j = b.d;
	i = k * j.a.x + m * j.a.y;
	m = k * j.b.x + m * j.b.y;
	k = i;
	i = 0;
	j = Number.MAX_VALUE;
	for ( var n = 0; n < e; ++n) {
		var o = f[n];
		o = o.x * k + o.y * m;
		if (o < j) {
			j = o;
			i = n;
		}
	}
	j = a.d;
	e = a.c.x + (j.a.x * d[c].x + j.b.x * d[c].y);
	a = a.c.y + (j.a.y * d[c].x + j.b.y * d[c].y);
	j = b.d;
	c = b.c.x + (j.a.x * f[i].x + j.b.x * f[i].y);
	b = b.c.y + (j.a.y * f[i].x + j.b.y * f[i].y);
	c -= e;
	b -= a;
	return c * g + b * h;
}
function md(a, c, b, d) {
	var e = c.Ra, f = b.c.x - c.c.x, g = b.c.y - c.c.y, h = f * c.d.a.x + g
			* c.d.a.y;
	g = f * c.d.b.x + g * c.d.b.y;
	f = 0;
	for ( var i = -Number.MAX_VALUE, j = 0; j < e; ++j) {
		var k = c.db[j].x * h + c.db[j].y * g;
		if (k > i) {
			i = k;
			f = j;
		}
	}
	h = ld(c, f, b);
	if (h > 0 && d == s)
		return h;
	j = f - 1 >= 0 ? f - 1 : e - 1;
	k = ld(c, j, b);
	if (k > 0 && d == s)
		return k;
	var m = f + 1 < e ? f + 1 : 0, n = ld(c, m, b);
	if (n > 0 && d == s)
		return n;
	i = g = 0;
	if (k > h && k > n) {
		i = -1;
		g = j;
		j = k;
	} else if (n > h) {
		i = 1;
		g = m;
		j = n;
	} else {
		a[0] = f;
		return h;
	}
	for (;;) {
		f = i == -1 ? g - 1 >= 0 ? g - 1 : e - 1 : g + 1 < e ? g + 1 : 0;
		h = ld(c, f, b);
		if (h > 0 && d == s)
			return h;
		if (h > j) {
			g = f;
			j = h;
		} else
			break;
	}
	a[0] = g;
	return j;
}
var nd = new O;
function od(a, c) {
	this.s = new Xc;
	this.t = new Xc;
	this.A = 0;
	if (!a || !c)
		this.C = this.B = q;
	else {
		this.B = a;
		this.C = c;
		this.Aa = 0;
		this.ja = Math.sqrt(this.B.ja * this.C.ja);
		this.ka = P(this.B.ka, this.C.ka);
		this.r = this.N = q;
		this.s.Fa = q;
		this.s.u = q;
		this.s.next = q;
		this.s.Ba = q;
		this.t.Fa = q;
		this.t.u = q;
		this.t.next = q;
		this.t.Ba = q;
		this.wa = [ new id ];
		this.wa[0].V = 0;
		this.wa[0].Y[0].la = 0;
		this.wa[0].Y[0].ra = 0;
	}
}
Ib(od.prototype, Zc.prototype);
od.prototype.Qc = function() {
	var a = this.wa[0], c = this.B, b = this.C;
	a.V = 0;
	var d = b.c.x - c.c.x, e = b.c.y - c.c.y, f = d * d + e * e;
	c = c.n + b.n;
	if (!(f > c * c && 1)) {
		if (f < Number.MIN_VALUE) {
			f = -c;
			a.H.l(0, 1);
		} else {
			var g = Math.sqrt(f);
			f = g - c;
			c = 1 / g;
			a.H.x = c * d;
			a.H.y = c * e;
		}
		a.V = 1;
		d = a.Y[0];
		d.id.sf(0);
		d.jb = f;
		d.position.x = b.c.x - b.n * a.H.x;
		d.position.y = b.c.y - b.n * a.H.y;
	}
	this.Aa = this.wa[0].V > 0 ? 1 : 0;
};
od.prototype.rc = ba("wa");
function pd(a, c) {
	return new od(a, c);
}
function qd() {
};
function rd(a, c) {
	this.s = new Xc;
	this.t = new Xc;
	this.A = 0;
	if (!a || !c)
		this.C = this.B = q;
	else {
		this.B = a;
		this.C = c;
		this.Aa = 0;
		this.ja = Math.sqrt(this.B.ja * this.C.ja);
		this.ka = P(this.B.ka, this.C.ka);
		this.r = this.N = q;
		this.s.Fa = q;
		this.s.u = q;
		this.s.next = q;
		this.s.Ba = q;
		this.t.Fa = q;
		this.t.u = q;
		this.t.next = q;
		this.t.Ba = q;
		this.wa = [ new id ];
		if (this.B.xa != sd)
			l("Assert Failed!");
		if (this.C.xa != td)
			l("Assert Failed!");
		this.wa[0].V = 0;
		this.wa[0].Y[0].la = 0;
		this.wa[0].Y[0].ra = 0;
	}
}
Ib(rd.prototype, Zc.prototype);
rd.prototype.Qc = function() {
	a: {
		var a = this.wa[0], c = this.B, b = this.C;
		a.V = 0;
		var d, e, f;
		e = b.c.x - c.c.x;
		f = b.c.y - c.c.y;
		var g = c.d, h = e * g.a.x + f * g.a.y;
		f = e * g.b.x + f * g.b.y;
		e = h;
		var i = 0, j = -Number.MAX_VALUE;
		h = b.n;
		for (d = 0; d < c.Ra; ++d) {
			var k = c.db[d].x * (e - c.F[d].x) + c.db[d].y * (f - c.F[d].y);
			if (k > h)
				break a;
			if (k > j) {
				j = k;
				i = d;
			}
		}
		if (j < Number.MIN_VALUE) {
			a.V = 1;
			f = c.db[i];
			a.H.x = g.a.x * f.x + g.b.x * f.y;
			a.H.y = g.a.y * f.x + g.b.y * f.y;
			d = a.Y[0];
			d.id.U.Wc = i;
			d.id.U.yc = 255;
			d.id.U.ee = 255;
			d.id.U.Ce = 0;
			d.position.x = b.c.x - h * a.H.x;
			d.position.y = b.c.y - h * a.H.y;
			d.jb = j - h;
		} else {
			i = i;
			j = i + 1 < c.Ra ? i + 1 : 0;
			var m = c.F[j].x - c.F[i].x;
			k = c.F[j].y - c.F[i].y;
			var n = Math.sqrt(m * m + k * k);
			m /= n;
			k /= n;
			if (n < Number.MIN_VALUE) {
				e = e - c.F[i].x;
				f = f - c.F[i].y;
				c = Math.sqrt(e * e + f * f);
				e /= c;
				f /= c;
				if (!(c > h)) {
					a.V = 1;
					a.H.l(g.a.x * e + g.b.x * f, g.a.y * e + g.b.y * f);
					d = a.Y[0];
					d.id.U.Wc = 255;
					d.id.U.yc = i;
					d.id.U.ee = 255;
					d.id.U.Ce = 0;
					d.position.x = b.c.x - h * a.H.x;
					d.position.y = b.c.y - h * a.H.y;
					d.jb = c - h;
				}
			} else {
				var o = (e - c.F[i].x) * m + (f - c.F[i].y) * k;
				d = a.Y[0];
				d.id.U.Wc = 255;
				d.id.U.yc = 255;
				d.id.U.ee = 255;
				d.id.U.Ce = 0;
				if (o <= 0) {
					m = c.F[i].x;
					c = c.F[i].y;
					d.id.U.yc = i;
				} else if (o >= n) {
					m = c.F[j].x;
					c = c.F[j].y;
					d.id.U.yc = j;
				} else {
					m = m * o + c.F[i].x;
					c = k * o + c.F[i].y;
					d.id.U.Wc = i;
				}
				e = e - m;
				f = f - c;
				c = Math.sqrt(e * e + f * f);
				e /= c;
				f /= c;
				if (!(c > h)) {
					a.V = 1;
					a.H.l(g.a.x * e + g.b.x * f, g.a.y * e + g.b.y * f);
					d.position.x = b.c.x - h * a.H.x;
					d.position.y = b.c.y - h * a.H.y;
					d.jb = c - h;
				}
			}
		}
	}
	this.Aa = this.wa[0].V > 0 ? 1 : 0;
};
rd.prototype.rc = ba("wa");
function ud(a, c) {
	return new rd(a, c);
}
function vd() {
};
function wd(a, c) {
	this.s = new Xc;
	this.t = new Xc;
	this.A = 0;
	if (!a || !c)
		this.C = this.B = q;
	else {
		this.B = a;
		this.C = c;
		this.Aa = 0;
		this.ja = Math.sqrt(this.B.ja * this.C.ja);
		this.ka = P(this.B.ka, this.C.ka);
		this.r = this.N = q;
		this.s.Fa = q;
		this.s.u = q;
		this.s.next = q;
		this.s.Ba = q;
		this.t.Fa = q;
		this.t.u = q;
		this.t.next = q;
		this.t.Ba = q;
		this.Nd = new id;
		this.wa = [ new id ];
		this.wa[0].V = 0;
	}
}
G(wd, Zc);
wd.prototype.Qc = function() {
	for ( var a = this.wa[0], c = this.Nd.Y, b = 0; b < a.V; b++) {
		var d = c[b], e = a.Y[b];
		d.la = e.la;
		d.ra = e.ra;
		d.id = e.id.yd();
	}
	this.Nd.V = a.V;
	b = this.B;
	var f = this.C;
	var g = a.V = 0;
	c = [ g ];
	d = md(c, b, f, s);
	g = c[0];
	if (!(d > 0 && 1)) {
		var h = 0;
		c = [ h ];
		var i = md(c, f, b, s);
		h = c[0];
		if (!(i > 0 && 1)) {
			c = e = 0;
			if (i > 0.98 * d + 0.0010) {
				d = f;
				i = b;
				e = h;
				c = 1;
			} else {
				d = b;
				i = f;
				e = g;
				c = 0;
			}
			b = [ new jd, new jd ];
			f = e;
			g = i;
			var j = d.F;
			i = g.Ra;
			h = g.F;
			var k = j[f + 1 == d.Ra ? 0 : f + 1], m = k.x, n = k.y;
			k = j[f];
			m -= k.x;
			n -= k.y;
			k = m;
			m = n;
			n = -k;
			k = 1 / Math.sqrt(m * m + n * n);
			m *= k;
			n *= k;
			m = m;
			var o = n;
			k = m;
			j = d.d;
			m = j.a.x * k + j.b.x * o;
			o = j.a.y * k + j.b.y * o;
			n = m;
			m = o;
			j = g.d;
			k = n * j.a.x + m * j.a.y;
			m = n * j.b.x + m * j.b.y;
			n = k;
			o = j = 0;
			for ( var u = Number.MAX_VALUE, x = 0; x < i; ++x) {
				var v = x, D = x + 1 < i ? x + 1 : 0;
				k = h[D];
				var B = k.x, z = k.y;
				k = h[v];
				B -= k.x;
				z -= k.y;
				k = B;
				B = z;
				z = -k;
				k = 1 / Math.sqrt(B * B + z * z);
				B *= k;
				z *= k;
				k = B * n + z * m;
				if (k < u) {
					u = k;
					j = v;
					o = D;
				}
			}
			i = b[0];
			k = i.Eb;
			S(k, h[j]);
			Tc(k, g.d);
			Rc(k, g.c);
			i.id.U.ee = f;
			i.id.U.Wc = j;
			i.id.U.yc = j;
			i = b[1];
			k = i.Eb;
			S(k, h[o]);
			Tc(k, g.d);
			Rc(k, g.c);
			i.id.U.ee = f;
			i.id.U.Wc = j;
			i.id.U.yc = o;
			f = d.F;
			k = f[e];
			n = e + 1 < d.Ra ? f[e + 1] : f[0];
			g = n.x - k.x;
			h = n.y - k.y;
			m = g;
			j = d.d;
			g = j.a.x * m + j.b.x * h;
			h = j.a.y * m + j.b.y * h;
			e = 1 / Math.sqrt(g * g + h * h);
			g *= e;
			h *= e;
			e = g;
			f = h;
			m = e;
			e = f;
			f = -m;
			i = k.x;
			o = k.y;
			m = i;
			j = d.d;
			i = j.a.x * m + j.b.x * o;
			o = j.a.y * m + j.b.y * o;
			i += d.c.x;
			o += d.c.y;
			k = n.x;
			n = n.y;
			m = k;
			j = d.d;
			k = j.a.x * m + j.b.x * n;
			n = j.a.y * m + j.b.y * n;
			k += d.c.x;
			n += d.c.y;
			d = e * i + f * o;
			m = -(g * i + h * o);
			k = g * k + h * n;
			n = [ new jd, new jd ];
			i = [ new jd, new jd ];
			j = 0;
			nd.l(-g, -h);
			j = kd(n, b, nd, m);
			if (!(j < 2)) {
				nd.l(g, h);
				j = kd(i, n, nd, k);
				if (!(j < 2)) {
					c ? a.H.l(-e, -f) : a.H.l(e, f);
					for (g = b = 0; g < 2; ++g) {
						h = i[g].Eb;
						h = e * h.x + f * h.y - d;
						if (h <= 0) {
							k = a.Y[b];
							k.jb = h;
							S(k.position, i[g].Eb);
							k.id.l(i[g].id);
							k.id.U.Ce = c;
							++b;
						}
					}
					a.V = b;
				}
			}
		}
	}
	if (a.V > 0) {
		c = [ s, s ];
		for (b = 0; b < a.V; ++b) {
			d = a.Y[b];
			d.la = 0;
			d.ra = 0;
			e = d.id.key;
			for (f = 0; f < this.Nd.V; ++f)
				if (c[f] != p) {
					g = this.Nd.Y[f];
					if (g.id.key == e) {
						c[f] = p;
						d.la = g.la;
						d.ra = g.ra;
						break;
					}
				}
		}
		this.Aa = 1;
	} else
		this.Aa = 0;
};
wd.prototype.rc = ba("wa");
function xd(a, c) {
	return new wd(a, c);
}
function yd() {
};
function zd(a, c, b, d) {
	Ad[b][d].Ae = a;
	Ad[b][d].Be = c;
	Ad[b][d].rf = p;
	if (b != d) {
		Ad[d][b].Ae = a;
		Ad[d][b].Be = c;
		Ad[d][b].rf = s;
	}
}
var Ad = q, Bd = s;
function Cd(a) {
	this.Fc = new ad;
	this.J = a;
	this.Ye = s;
}
G(Cd, $c);
Cd.prototype.Df = function(a, c) {
	var b = a, d = c, e = b.p, f = d.p;
	if ((e.A & Dd) == Dd && (f.A & Dd) == Dd)
		return this.Fc;
	if (b.p == d.p)
		return this.Fc;
	a: {
		for ( var g = f.cb; g != q; g = g.next)
			if (g.Ba == e) {
				e = g.Xc.xb == s;
				break a;
			}
		e = s;
	}
	if (e)
		return this.Fc;
	e = b.Bc == d.Bc && b.Bc != 0 ? b.Bc > 0 : (b.fb & d.ab) != 0
			&& (b.ab & d.fb) != 0;
	if (e == s)
		return this.Fc;
	if (f.f == 0) {
		f = b;
		b = d;
		d = f;
	}
	b = b;
	d = d;
	f = this.J.lh;
	if (Bd == s) {
		Ad = Array(Ed);
		for (e = 0; e < Ed; e++) {
			Ad[e] = Array(Ed);
			for (g = 0; g < Ed; g++)
				Ad[e][g] = new Yc;
		}
		zd(pd, qd, td, td);
		zd(ud, vd, sd, td);
		zd(xd, yd, sd, sd);
		Bd = p;
	}
	e = b.xa;
	g = d.xa;
	var h = Ad[e][g].Ae;
	if (h)
		if (Ad[e][g].rf)
			d = h(b, d, f);
		else {
			d = h(d, b, f);
			for (b = 0; b < d.Aa; ++b) {
				f = d.rc()[b];
				f.H = new O(-f.H.x, -f.H.y);
			}
			d = d;
		}
	else
		d = q;
	if (d == q)
		return this.Fc;
	else {
		d.N = q;
		d.r = this.J.$;
		if (this.J.$ != q)
			this.J.$.N = d;
		this.J.$ = d;
		this.J.$b++;
	}
	return d;
};
Cd.prototype.Ef = function(a, c, b) {
	if (b != q)
		if (b != this.Fc)
			if (this.Ye == p)
				Fd(this, b);
			else
				b.A |= 2;
};
function Fd(a, c) {
	if (c.N)
		c.N.r = c.r;
	if (c.r)
		c.r.N = c.N;
	if (c == a.J.$)
		a.J.$ = c.r;
	if (c.Aa > 0) {
		var b = c.B.p, d = c.C.p, e = c.s, f = c.t;
		Gd(b);
		Gd(d);
		if (e.u)
			e.u.next = e.next;
		if (e.next)
			e.next.u = e.u;
		if (e == b.$)
			b.$ = e.next;
		e.u = q;
		e.next = q;
		if (f.u)
			f.u.next = f.next;
		if (f.next)
			f.next.u = f.u;
		if (f == d.$)
			d.$ = f.next;
		f.u = q;
		f.next = q;
	}
	b = a.J.lh;
	if (c.Aa > 0) {
		Gd(c.B.p);
		Gd(c.C.p);
	}
	d = Ad[c.B.xa][c.C.xa].Be;
	d(c, b);
	--a.J.$b;
};
var Hd = new (aa());
function Id() {
}
Id.prototype = {
	Ff : function() {
		this.status |= Jd;
	},
	xg : function() {
		this.status &= ~Jd;
	},
	zf : function() {
		return (this.status & Jd) == Jd;
	},
	Sg : function() {
		this.status |= Kd;
	},
	yg : function() {
		this.status &= ~Kd;
	},
	Gg : function() {
		return (this.status & Kd) == Kd;
	},
	Rg : function() {
		this.status |= Ld;
	},
	Af : function() {
		return (this.status & Ld) == Ld;
	},
	Ha : 0,
	Ia : 0,
	next : 0,
	status : 0
};
Id.prototype.Kf = q;
var Jd = 1, Kd = 2, Ld = 4;
function Md() {
}
Md.prototype = {
	Ha : 0,
	Ia : 0
};
function Nd() {
	var a = 0;
	this.cc = Array(8192);
	for (a = 0; a < 8192; ++a)
		this.cc[a] = 65535;
	this.qa = Array(8192);
	for (a = 0; a < 8192; ++a)
		this.qa[a] = new Id;
	this.Va = Array(8192);
	for (a = 0; a < 8192; ++a)
		this.Va[a] = new Md;
	for (a = 0; a < 8192; ++a) {
		this.qa[a].Ha = 65535;
		this.qa[a].Ia = 65535;
		this.qa[a].L = q;
		this.qa[a].status = 0;
		this.qa[a].next = a + 1;
	}
	this.qa[8191].next = 65535;
	this.ef = 0;
}
Nd.prototype = {
	Fg : function(a, c) {
		this.Ta = a;
		this.Ve = c;
	},
	ke : function(a, c) {
		var b = this.vg(a, c);
		if (b.zf() == s) {
			b.Ff();
			this.Va[this.Jb].Ha = b.Ha;
			this.Va[this.Jb].Ia = b.Ia;
			++this.Jb;
		}
		b.yg();
	},
	ne : function(a, c) {
		var b = Od(this, a, c);
		if (b != q) {
			if (b.zf() == s) {
				b.Ff();
				this.Va[this.Jb].Ha = b.Ha;
				this.Va[this.Jb].Ia = b.Ia;
				++this.Jb;
			}
			b.Sg();
		}
	},
	vg : function(a, c) {
		if (a > c) {
			var b = a;
			a = c;
			c = b;
		}
		b = Pd(a, c) & 8191;
		var d = Qd(this, a, c, b);
		if (d != q)
			return d;
		var e = this.Td;
		d = this.qa[e];
		this.Td = d.next;
		d.Ha = a;
		d.Ia = c;
		d.status = 0;
		d.L = q;
		d.next = this.cc[b];
		this.cc[b] = e;
		++this.ef;
		return d;
	},
	Pg : function(a, c) {
		if (a > c) {
			var b = a;
			a = c;
			c = b;
		}
		for ( var d = Pd(a, c) & 8191, e = this.cc[d], f = q; e != 65535;)
			if (this.qa[e].Ha == a && this.qa[e].Ia == c) {
				b = e;
				if (f)
					f.next = this.qa[e].next;
				else
					this.cc[d] = this.qa[e].next;
				d = this.qa[b];
				e = d.L;
				d.next = this.Td;
				d.Ha = 65535;
				d.Ia = 65535;
				d.L = q;
				d.status = 0;
				this.Td = b;
				--this.ef;
				return e;
			} else {
				f = this.qa[e];
				e = f.next;
			}
		return q;
	},
	Ta : q,
	Ve : q,
	Td : 0,
	ef : 0,
	Va : q,
	Jb : 0,
	cc : q
};
function Od(a, c, b) {
	if (c > b) {
		var d = c;
		c = b;
		b = d;
	}
	return Qd(a, c, b, Pd(c, b) & 8191);
}
function Qd(a, c, b, d) {
	for (d = a.cc[d]; d != 65535 && (a.qa[d].Ha == c && a.qa[d].Ia == b) == s;)
		d = a.qa[d].next;
	if (d == 65535)
		return q;
	return a.qa[d];
}
Nd.prototype.Pc = function() {
	var a = 0, c = 0, b = this.Ta.ya, d = [];
	for (a = 0; a < this.Jb; ++a) {
		var e = Od(this, this.Va[a].Ha, this.Va[a].Ia);
		e.xg();
		var f = b[e.Ha], g = b[e.Ia];
		if (e.Gg()) {
			e.Af() == p && this.Ve.Ef(f.L, g.L, e.L);
			this.Va[c].Ha = e.Ha;
			this.Va[c].Ia = e.Ia;
			++c;
		} else if (e.Af() == s) {
			e.Kf = this.Ve.Df(f.L, g.L);
			d.push(e.Kf);
			e.Rg();
		}
	}
	for (a = 0; a < c; ++a)
		this.Pg(this.Va[a].Ha, this.Va[a].Ia);
	this.Jb = 0;
	return d;
};
function Pd(a, c) {
	var b = c << 16 & 4294901760 | a;
	b = ~b + (b << 15 & 4294934528);
	b ^= b >> 12 & 1048575;
	b += b << 2 & 4294967292;
	b ^= b >> 4 & 268435455;
	b *= 2057;
	b ^= b >> 16 & 65535;
	return b;
};
function Rd() {
}
Rd.prototype = {
	uc : function() {
		return (this.value & 1) == 0;
	},
	Bf : function() {
		return (this.value & 1) == 1;
	},
	zd : function(a) {
		var c = this.value, b = this.K, d = this.z;
		this.value = a.value;
		this.K = a.K;
		this.z = a.z;
		a.value = c;
		a.K = b;
		a.z = d;
	},
	value : 0,
	K : 0,
	z : 0
};
function Sd() {
	this.ua = [ 0, 0 ];
	this.Ca = [ 0, 0 ];
}
Sd.prototype = {
	Rc : function() {
		return this.ua[0];
	},
	pe : function(a) {
		this.ua[0] = a;
	},
	Sc : function() {
		return this.lc != 65535;
	},
	ua : [ 0, 0 ],
	Ca : [ 0, 0 ],
	lc : 0,
	timeStamp : 0,
	L : q
};
function Td() {
	this.Md = [ 0, 0 ];
	this.ge = [ 0, 0 ];
};
function Ud(a, c) {
	this.eb = new Nd;
	this.ya = Array(8192);
	this.Sa = Array(2048);
	this.Ic = Array(1024);
	this.fc = new O;
	var b = 0;
	this.eb.Fg(this, c);
	this.ha = a;
	for (b = this.Kb = 0; b < 1024; b++)
		this.Ic[b] = 0;
	this.Sa = Array(2);
	for (b = 0; b < 2; b++) {
		this.Sa[b] = Array(2048);
		for ( var d = 0; d < 2048; d++)
			this.Sa[b][d] = new Rd;
	}
	b = a.G.x;
	d = a.G.y;
	b -= a.I.x;
	d -= a.I.y;
	this.fc.x = 65535 / b;
	this.fc.y = 65535 / d;
	for (b = 0; b < 1023; ++b) {
		d = new Sd;
		this.ya[b] = d;
		d.pe(b + 1);
		d.timeStamp = 0;
		d.lc = 65535;
		d.L = q;
	}
	d = new Sd;
	this.ya[1023] = d;
	d.pe(65535);
	d.timeStamp = 0;
	d.lc = 65535;
	d.L = q;
	this.Ud = 0;
	this.Kc = 1;
	this.Db = 0;
}
Ud.prototype = {
	tc : function(a) {
		var c, b, d, e;
		c = a.I.x;
		b = a.I.y;
		c -= this.ha.G.x;
		b -= this.ha.G.y;
		d = this.ha.I.x;
		e = this.ha.I.y;
		d -= a.G.x;
		e -= a.G.y;
		c = P(c, d);
		b = P(b, e);
		return P(c, b) < 0;
	},
	qc : function(a) {
		for ( var c = this.ya[a], b = 2 * this.Kb, d = 0; d < 2; ++d) {
			var e = this.Sa[d], f = c.ua[d], g = c.Ca[d], h = e[f].value, i = e[g].value, j = [], k = 0, m = g
					- f - 1, n, o;
			for (k = 0; k < m; k++) {
				j[k] = new Rd;
				n = j[k];
				o = e[f + 1 + k];
				n.value = o.value;
				n.K = o.K;
				n.z = o.z;
			}
			m = j.length;
			var u = f;
			for (k = 0; k < m; k++) {
				o = j[k];
				n = e[u + k];
				n.value = o.value;
				n.K = o.K;
				n.z = o.z;
			}
			j = [];
			m = b - g - 1;
			for (k = 0; k < m; k++) {
				j[k] = new Rd;
				n = j[k];
				o = e[g + 1 + k];
				n.value = o.value;
				n.K = o.K;
				n.z = o.z;
			}
			m = j.length;
			u = g - 1;
			for (k = 0; k < m; k++) {
				o = j[k];
				n = e[u + k];
				n.value = o.value;
				n.K = o.K;
				n.z = o.z;
			}
			m = b - 2;
			for (j = f; j < m; ++j) {
				k = this.ya[e[j].K];
				if (e[j].uc())
					k.ua[d] = j;
				else
					k.Ca[d] = j;
			}
			m = g - 1;
			for (f = f; f < m; ++f)
				e[f].z--;
			this.Tc([ 0 ], [ 0 ], h, i, e, b - 2, d);
		}
		for (b = 0; b < this.Db; ++b)
			this.eb.ne(a, this.Ic[b]);
		this.eb.Pc();
		this.Db = 0;
		this.me();
		c.L = q;
		c.lc = 65535;
		c.ua[0] = 65535;
		c.ua[1] = 65535;
		c.Ca[0] = 65535;
		c.Ca[1] = 65535;
		c.pe(this.Ud);
		this.Ud = a;
		--this.Kb;
	},
	Cf : function(a, c) {
		var b = 0, d = 0, e, f, g = 0, h;
		if (!(a == 65535 || 1024 <= a))
			if (c.Sc() != s) {
				var i = 2 * this.Kb, j = this.ya[a], k = new Td;
				this.le(k.Md, k.ge, c);
				var m = new Td;
				for (b = 0; b < 2; ++b) {
					m.Md[b] = this.Sa[b][j.ua[b]].value;
					m.ge[b] = this.Sa[b][j.Ca[b]].value;
				}
				for (b = 0; b < 2; ++b) {
					var n = this.Sa[b], o = j.ua[b], u = j.Ca[b], x = k.Md[b], v = k.ge[b], D = x
							- n[o].value, B = v - n[u].value;
					n[o].value = x;
					n[u].value = v;
					if (D < 0)
						for (d = o; d > 0 && x < n[d - 1].value;) {
							e = n[d];
							f = n[d - 1];
							g = f.K;
							h = this.ya[f.K];
							f.z++;
							if (f.Bf() == p) {
								this.Ad(k, h) && this.eb.ke(a, g);
								h.Ca[b]++;
								e.z++;
							} else {
								h.ua[b]++;
								e.z--;
							}
							j.ua[b]--;
							e.zd(f);
							--d;
						}
					if (B > 0)
						for (d = u; d < i - 1 && n[d + 1].value <= v;) {
							e = n[d];
							f = n[d + 1];
							g = f.K;
							h = this.ya[g];
							f.z++;
							if (f.uc() == p) {
								this.Ad(k, h) && this.eb.ke(a, g);
								h.ua[b]--;
								e.z++;
							} else {
								h.Ca[b]--;
								e.z--;
							}
							j.Ca[b]++;
							e.zd(f);
							d++;
						}
					if (D > 0)
						for (d = o; d < i - 1 && n[d + 1].value <= x;) {
							e = n[d];
							f = n[d + 1];
							g = f.K;
							h = this.ya[g];
							f.z--;
							if (f.Bf()) {
								this.Ad(m, h) && this.eb.ne(a, g);
								h.Ca[b]--;
								e.z--;
							} else {
								h.ua[b]--;
								e.z++;
							}
							j.ua[b]++;
							e.zd(f);
							d++;
						}
					if (B < 0)
						for (d = u; d > 0 && v < n[d - 1].value;) {
							e = n[d];
							f = n[d - 1];
							g = f.K;
							h = this.ya[g];
							f.z--;
							if (f.uc() == p) {
								this.Ad(m, h) && this.eb.ne(a, g);
								h.ua[b]++;
								e.z--;
							} else {
								h.Ca[b]++;
								e.z++;
							}
							j.Ca[b]--;
							e.zd(f);
							d--;
						}
				}
			}
	},
	Og : function(a, c, b) {
		var d = [], e = [];
		this.le(d, e, a);
		a = [ 0 ];
		var f = [ 0 ];
		this.Tc(a, f, d[0], e[0], this.Sa[0], 2 * this.Kb, 0);
		this.Tc(a, f, d[1], e[1], this.Sa[1], 2 * this.Kb, 1);
		for (e = d = 0; e < this.Db && d < b; ++e, ++d)
			c[e] = this.ya[this.Ic[e]].L;
		this.Db = 0;
		this.me();
		return d;
	},
	le : function(a, c, b) {
		var d = b.I.x, e = b.I.y;
		d = d < this.ha.G.x ? d : this.ha.G.x;
		e = e < this.ha.G.y ? e : this.ha.G.y;
		d = P(d, this.ha.I.x);
		e = P(e, this.ha.I.y);
		var f = b.G.x;
		b = b.G.y;
		f = f < this.ha.G.x ? f : this.ha.G.x;
		b = b < this.ha.G.y ? b : this.ha.G.y;
		f = P(f, this.ha.I.x);
		b = P(b, this.ha.I.y);
		a[0] = this.fc.x * (d - this.ha.I.x) & 65534;
		c[0] = this.fc.x * (f - this.ha.I.x) & 65535 | 1;
		a[1] = this.fc.y * (e - this.ha.I.y) & 65534;
		c[1] = this.fc.y * (b - this.ha.I.y) & 65535 | 1;
	},
	Ad : function(a, c) {
		for ( var b = 0; b < 2; ++b) {
			var d = this.Sa[b];
			if (a.Md[b] > d[c.Ca[b]].value)
				return s;
			if (a.ge[b] < d[c.ua[b]].value)
				return s;
		}
		return p;
	},
	Tc : function(a, c, b, d, e, f, g) {
		b = Vd(e, f, b);
		d = Vd(e, f, d);
		for (f = b; f < d; ++f)
			e[f].uc() && this.yf(e[f].K);
		if (b > 0) {
			f = b - 1;
			for ( var h = e[f].z; h;) {
				if (e[f].uc())
					if (b <= this.ya[e[f].K].Ca[g]) {
						this.yf(e[f].K);
						--h;
					}
				--f;
			}
		}
		a[0] = b;
		c[0] = d;
	},
	yf : function(a) {
		var c = this.ya[a];
		if (c.timeStamp < this.Kc) {
			c.timeStamp = this.Kc;
			c.lc = 1;
		} else {
			c.lc = 2;
			this.Ic[this.Db] = a;
			++this.Db;
		}
	},
	me : function() {
		if (this.Kc == 65535) {
			for ( var a = 0; a < 1024; ++a)
				this.ya[a].timeStamp = 0;
			this.Kc = 1;
		} else
			++this.Kc;
	},
	eb : new Nd,
	ya : Array(8192),
	Sa : Array(2048),
	Ic : Array(1024),
	Db : 0,
	ha : q,
	fc : new O,
	Kb : 0,
	Kc : 0
};
Ud.prototype.Pc = function() {
	return this.eb.Pc();
};
function Wd(a, c, b) {
	var d = 0, e, f = a.Ud;
	e = a.ya[f];
	a.Ud = e.Rc();
	e.lc = 0;
	e.L = b;
	b = 2 * a.Kb;
	e = [];
	var g = [];
	a.le(e, g, c);
	for (c = 0; c < 2; ++c) {
		var h = a.Sa[c], i = 0, j = 0;
		i = [ i ];
		j = [ j ];
		a.Tc(i, j, e[c], g[c], h, b, c);
		i = i[0];
		j = j[0];
		d = [];
		var k = 0, m = b - j, n, o;
		for (k = 0; k < m; k++) {
			d[k] = new Rd;
			n = d[k];
			o = h[j + k];
			n.value = o.value;
			n.K = o.K;
			n.z = o.z;
		}
		m = d.length;
		var u = j + 2;
		for (k = 0; k < m; k++) {
			o = d[k];
			n = h[u + k];
			n.value = o.value;
			n.K = o.K;
			n.z = o.z;
		}
		d = [];
		m = j - i;
		for (k = 0; k < m; k++) {
			d[k] = new Rd;
			n = d[k];
			o = h[i + k];
			n.value = o.value;
			n.K = o.K;
			n.z = o.z;
		}
		m = d.length;
		u = i + 1;
		for (k = 0; k < m; k++) {
			o = d[k];
			n = h[u + k];
			n.value = o.value;
			n.K = o.K;
			n.z = o.z;
		}
		++j;
		h[i].value = e[c];
		h[i].K = f;
		h[j].value = g[c];
		h[j].K = f;
		h[i].z = i == 0 ? 0 : h[i - 1].z;
		h[j].z = h[j - 1].z;
		for (d = i; d < j; ++d)
			h[d].z++;
		for (d = i; d < b + 2; ++d) {
			i = a.ya[h[d].K];
			if (h[d].uc())
				i.ua[c] = d;
			else
				i.Ca[c] = d;
		}
	}
	++a.Kb;
	for (b = 0; b < a.Db; ++b)
		a.eb.ke(f, a.Ic[b]);
	a.eb.Pc();
	a.Db = 0;
	a.me();
	return f;
}
function Vd(a, c, b) {
	var d = 0;
	for (c = c - 1; d <= c;) {
		var e = Math.floor((d + c) / 2);
		if (a[e].value > b)
			c = e - 1;
		else if (a[e].value < b)
			d = e + 1;
		else
			return e;
	}
	return d;
};
function V(a, c, b) {
	if (a == q)
		a = 0;
	this.a = new O;
	this.b = new O;
	if (c != q && b != q) {
		S(this.a, c);
		S(this.b, b);
	} else {
		c = Math.cos(a);
		a = Math.sin(a);
		this.a.x = c;
		this.b.x = -a;
		this.a.y = a;
		this.b.y = c;
	}
}
t = V.prototype;
t.l = function(a) {
	var c = Math.cos(a);
	a = Math.sin(a);
	this.a.x = c;
	this.b.x = -a;
	this.a.y = a;
	this.b.y = c;
};
t.yd = function() {
	return new V(0, this.a, this.b);
};
function Xd(a, c) {
	S(a.a, c.a);
	S(a.b, c.b);
}
function Yd(a, c) {
	a.a.x += c.a.x;
	a.a.y += c.a.y;
	a.b.x += c.b.x;
	a.b.y += c.b.y;
}
t.oa = function() {
	this.a.x = 0;
	this.b.x = 0;
	this.a.y = 0;
	this.b.y = 0;
};
function Zd(a, c) {
	var b = a.a.x, d = a.b.x, e = a.a.y, f = a.b.y, g = b * f - d * e;
	g = 1 / g;
	c.a.x = g * f;
	c.b.x = -g * d;
	c.a.y = -g * e;
	c.b.y = g * b;
	return c;
}
t.qe = function(a, c, b) {
	var d = this.a.x, e = this.b.x, f = this.a.y, g = this.b.y, h = d * g - e
			* f;
	h = 1 / h;
	a.x = h * (g * c - e * b);
	a.y = h * (d * b - f * c);
	return a;
};
t.pc = function() {
	this.a.pc();
	this.b.pc();
};
function $d() {
	this.da = new O(0, 0);
}
$d.prototype = {
	gb : 0,
	da : new O(0, 0),
	sc : 0
};
function ae(a, c) {
	this.d = new V;
	this.c = new O;
	this.q = a.L;
	this.ja = a.mb;
	this.ka = a.qb;
	this.p = c;
	this.aa = 65535;
	this.Ec = 0;
	this.ab = a.ab;
	this.fb = a.fb;
	this.Bc = a.xc;
}
ae.prototype.oe = aa();
ae.prototype.Rc = ba("r");
ae.prototype.qc = function() {
	if (this.aa != 65535) {
		this.p.J.Ta.qc(this.aa);
		this.aa = 65535;
	}
};
ae.prototype.re = aa();
var td = 0, sd = 2, Ed = 4;
function be(a, c, b) {
	this.d = new V;
	this.c = new O;
	this.q = a.L;
	this.ja = a.mb;
	this.ka = a.qb;
	this.p = c;
	this.aa = 65535;
	this.Ec = 0;
	this.ab = a.ab;
	this.fb = a.fb;
	this.Bc = a.xc;
	this.Pa = new O;
	this.Pa.l(a.bb.x - b.x, a.bb.y - b.y);
	this.xa = td;
	this.n = a.nc;
	Xd(this.d, this.p.d);
	a = this.d.a.x * this.Pa.x + this.d.b.x * this.Pa.y;
	c = this.d.a.y * this.Pa.x + this.d.b.y * this.Pa.y;
	this.c.x = this.p.c.x + a;
	this.c.y = this.p.c.y + c;
	this.Ec = Math.sqrt(a * a + c * c) + this.n;
	a = new Vc;
	a.I.l(this.c.x - this.n, this.c.y - this.n);
	a.G.l(this.c.x + this.n, this.c.y + this.n);
	c = this.p.J.Ta;
	this.aa = c.tc(a) ? Wd(c, a, this) : 65535;
	this.aa == 65535 && ce(this.p);
}
G(be, ae);
be.prototype.re = function(a, c, b, d) {
	Xd(this.d, d);
	this.c.x = d.a.x * this.Pa.x + d.b.x * this.Pa.y + b.x;
	this.c.y = d.a.y * this.Pa.x + d.b.y * this.Pa.y + b.y;
	if (this.aa != 65535) {
		b = a.x + (c.a.x * this.Pa.x + c.b.x * this.Pa.y);
		c = a.y + (c.a.y * this.Pa.x + c.b.y * this.Pa.y);
		d = Math.max(b, this.c.x);
		var e = Math.max(c, this.c.y);
		a = new Vc;
		a.I.l(Math.min(b, this.c.x) - this.n, Math.min(c, this.c.y) - this.n);
		a.G.l(d + this.n, e + this.n);
		b = this.p.J.Ta;
		b.tc(a) ? b.Cf(this.aa, a) : ce(this.p);
	}
};
be.prototype.oe = function(a) {
	if (this.aa != 65535) {
		a.qc(this.aa);
		var c = new Vc;
		c.I.l(this.c.x - this.n, this.c.y - this.n);
		c.G.l(this.c.x + this.n, this.c.y + this.n);
		this.aa = a.tc(c) ? Wd(a, c, this) : 65535;
		this.aa == 65535 && ce(this.p);
	}
};
function de() {
	this.Da = new V;
	this.da = new O;
	this.ia = new O;
};
function ee(a, c, b) {
	this.d = new V;
	this.c = new O;
	this.q = a.L;
	this.ja = a.mb;
	this.ka = a.qb;
	this.p = c;
	this.aa = 65535;
	this.Ec = 0;
	this.ab = a.ab;
	this.fb = a.fb;
	this.Bc = a.xc;
	this.Ja = new Vc;
	this.na = new V;
	this.za = new O;
	this.w = new de;
	var d = 0, e;
	c = new Vc;
	this.F = Array(8);
	this.ac = Array(8);
	this.db = Array(8);
	this.xa = sd;
	var f = new V(a.Ne);
	if (a.type == 1) {
		this.za.x = a.bb.x - b.x;
		this.za.y = a.bb.y - b.y;
		this.Ra = 4;
		b = a.ia.x;
		e = a.ia.y;
		d = Math.max(0, b - 0.3);
		var g = Math.max(0, e - 0.3);
		a = this.F[0] = new O;
		a.x = f.a.x * b + f.b.x * e;
		a.y = f.a.y * b + f.b.y * e;
		a = this.F[1] = new O;
		a.x = f.a.x * -b + f.b.x * e;
		a.y = f.a.y * -b + f.b.y * e;
		a = this.F[2] = new O;
		a.x = f.a.x * -b + f.b.x * -e;
		a.y = f.a.y * -b + f.b.y * -e;
		a = this.F[3] = new O;
		a.x = f.a.x * b + f.b.x * -e;
		a.y = f.a.y * b + f.b.y * -e;
		a = this.ac[0] = new O;
		a.x = f.a.x * d + f.b.x * g;
		a.y = f.a.y * d + f.b.y * g;
		a = this.ac[1] = new O;
		a.x = f.a.x * -d + f.b.x * g;
		a.y = f.a.y * -d + f.b.y * g;
		a = this.ac[2] = new O;
		a.x = f.a.x * -d + f.b.x * -g;
		a.y = f.a.y * -d + f.b.y * -g;
		a = this.ac[3] = new O;
		a.x = f.a.x * d + f.b.x * -g;
		a.y = f.a.y * d + f.b.y * -g;
	} else {
		this.Ra = a.je;
		d = a.Oc;
		e = a.je;
		for ( var h = g = 0, i = 0, j = 1 / 3, k = 0; k < e; ++k) {
			var m = d[k].x, n = d[k].y, o = k + 1 < e ? d[k + 1].x : d[0].x, u = k + 1 < e ? d[k + 1].y
					: d[0].y, x = 0.5 * ((m - 0) * (u - 0) - (n - 0) * (o - 0));
			i += x;
			g += x * j * (0 + m + o);
			h += x * j * (0 + n + u);
		}
		g *= 1 / i;
		h *= 1 / i;
		fe.l(g, h);
		g = fe.x;
		h = fe.y;
		this.za.x = a.bb.x + (f.a.x * g + f.b.x * h) - b.x;
		this.za.y = a.bb.y + (f.a.y * g + f.b.y * h) - b.y;
		for (d = 0; d < this.Ra; ++d) {
			this.F[d] = new O;
			this.ac[d] = new O;
			b = a.Oc[d].x - g;
			e = a.Oc[d].y - h;
			this.F[d].x = f.a.x * b + f.b.x * e;
			this.F[d].y = f.a.y * b + f.b.y * e;
			b = this.F[d].x;
			e = this.F[d].y;
			i = Math.sqrt(b * b + e * e);
			if (i > Number.MIN_VALUE) {
				b *= 1 / i;
				e *= 1 / i;
			}
			this.ac[d].x = this.F[d].x - 0.3 * b;
			this.ac[d].y = this.F[d].y - 0.3 * e;
		}
	}
	a = f = Number.MAX_VALUE;
	b = -Number.MAX_VALUE;
	e = -Number.MAX_VALUE;
	for (d = this.Ec = 0; d < this.Ra; ++d) {
		g = this.F[d];
		f = Math.min(f, g.x);
		a = Math.min(a, g.y);
		b = Math.max(b, g.x);
		e = Math.max(e, g.y);
		this.Ec = Math.max(this.Ec, T(g));
	}
	d = this.w.Da;
	d.a.x = 1;
	d.b.x = 0;
	d.a.y = 0;
	d.b.y = 1;
	this.w.da.l((f + b) * 0.5, (a + e) * 0.5);
	this.w.ia.l((b - f) * 0.5, (e - a) * 0.5);
	for (d = a = f = 0; d < this.Ra; ++d) {
		this.db[d] = new O;
		f = d;
		a = d + 1 < this.Ra ? d + 1 : 0;
		this.db[d].x = this.F[a].y - this.F[f].y;
		this.db[d].y = -(this.F[a].x - this.F[f].x);
		Uc(this.db[d]);
	}
	for (d = 0; d < this.Ra; ++d)
		;
	Xd(this.d, this.p.d);
	this.c.x = this.p.c.x + (this.d.a.x * this.za.x + this.d.b.x * this.za.y);
	this.c.y = this.p.c.y + (this.d.a.y * this.za.x + this.d.b.y * this.za.y);
	ge.a.x = this.d.a.x * this.w.Da.a.x + this.d.b.x * this.w.Da.a.y;
	ge.a.y = this.d.a.y * this.w.Da.a.x + this.d.b.y * this.w.Da.a.y;
	ge.b.x = this.d.a.x * this.w.Da.b.x + this.d.b.x * this.w.Da.b.y;
	ge.b.y = this.d.a.y * this.w.Da.b.x + this.d.b.y * this.w.Da.b.y;
	ge.pc();
	b = ge.a.x * this.w.ia.x + ge.b.x * this.w.ia.y;
	e = ge.a.y * this.w.ia.x + ge.b.y * this.w.ia.y;
	f = this.c.x + (this.d.a.x * this.w.da.x + this.d.b.x * this.w.da.y);
	a = this.c.y + (this.d.a.y * this.w.da.x + this.d.b.y * this.w.da.y);
	c.I.x = f - b;
	c.I.y = a - e;
	c.G.x = f + b;
	c.G.y = a + e;
	f = this.p.J.Ta;
	this.aa = f.tc(c) ? Wd(f, c, this) : 65535;
	this.aa == 65535 && ce(this.p);
}
G(ee, ae);
ee.prototype.Ja = new Vc;
ee.prototype.na = new V;
ee.prototype.re = function(a, c, b, d) {
	Xd(this.d, d);
	this.c.x = this.p.c.x + (d.a.x * this.za.x + d.b.x * this.za.y);
	this.c.y = this.p.c.y + (d.a.y * this.za.x + d.b.y * this.za.y);
	if (this.aa != 65535) {
		var e, f;
		e = c.a;
		f = c.b;
		var g = this.w.Da.a, h = this.w.Da.b;
		this.na.a.x = e.x * g.x + f.x * g.y;
		this.na.a.y = e.y * g.x + f.y * g.y;
		this.na.b.x = e.x * h.x + f.x * h.y;
		this.na.b.y = e.y * h.x + f.y * h.y;
		this.na.pc();
		e = this.za.x + this.w.da.x;
		f = this.za.y + this.w.da.y;
		g = a.x + (c.a.x * e + c.b.x * f);
		a = a.y + (c.a.y * e + c.b.y * f);
		e = this.na.a.x * this.w.ia.x + this.na.b.x * this.w.ia.y;
		f = this.na.a.y * this.w.ia.x + this.na.b.y * this.w.ia.y;
		this.Ja.I.x = g - e;
		this.Ja.I.y = a - f;
		this.Ja.G.x = g + e;
		this.Ja.G.y = a + f;
		e = d.a;
		f = d.b;
		g = this.w.Da.a;
		h = this.w.Da.b;
		this.na.a.x = e.x * g.x + f.x * g.y;
		this.na.a.y = e.y * g.x + f.y * g.y;
		this.na.b.x = e.x * h.x + f.x * h.y;
		this.na.b.y = e.y * h.x + f.y * h.y;
		this.na.pc();
		e = this.za.x + this.w.da.x;
		f = this.za.y + this.w.da.y;
		g = b.x + (d.a.x * e + d.b.x * f);
		a = b.y + (d.a.y * e + d.b.y * f);
		e = this.na.a.x * this.w.ia.x + this.na.b.x * this.w.ia.y;
		f = this.na.a.y * this.w.ia.x + this.na.b.y * this.w.ia.y;
		this.Ja.I.x = Math.min(this.Ja.I.x, g - e);
		this.Ja.I.y = Math.min(this.Ja.I.y, a - f);
		this.Ja.G.x = Math.max(this.Ja.G.x, g + e);
		this.Ja.G.y = Math.max(this.Ja.G.y, a + f);
		b = this.p.J.Ta;
		b.tc(this.Ja) ? b.Cf(this.aa, this.Ja) : ce(this.p);
	}
};
ee.prototype.oe = function(a) {
	if (this.aa != 65535) {
		a.qc(this.aa);
		var c = new V(0, Nc(this.d, this.w.Da.a), Nc(this.d, this.w.Da.b));
		c = new V(0, new O(Qc(c.a.x), Qc(c.a.y)), new O(Qc(c.b.x), Qc(c.b.y)));
		c = Nc(c, this.w.ia);
		var b = Nc(this.d, this.w.da);
		Rc(b, this.c);
		var d = new Vc;
		S(d.I, b);
		var e = d.I;
		e.x -= c.x;
		e.y -= c.y;
		S(d.G, b);
		Rc(d.G, c);
		this.aa = a.tc(d) ? Wd(a, d, this) : 65535;
		this.aa == 65535 && ce(this.p);
	}
};
var fe = new O, ge = new V;
function he(a, c) {
	this.qg = new V;
	this.c = new O;
	S(this.c, a.position);
	this.ff = new O;
	S(this.ff, this.c);
	var b = 0, d, e;
	this.A = 0;
	this.o = a.rotation;
	this.d = new V(0);
	this.d.l(this.o);
	this.ig = this.o;
	this.J = c;
	this.th = Q(1 - a.Wf, 0, 1);
	this.kh = Q(1 - a.Gf, 0, 1);
	this.ed = new O(0, 0);
	this.Ma = this.kg = 0;
	var f = Array(64);
	for (b = 0; b < 64; b++)
		f[b] = new $d;
	this.nd = 0;
	this.Gb = new O(0, 0);
	for (b = 0; b < 64; ++b) {
		d = a.Nc[b];
		if (d == q)
			break;
		e = f[b];
		var g = d, h = e;
		h.da = new O(0, 0);
		if (g.Sb == 0) {
			h.gb = 0;
			h.da.l(0, 0);
			h.sc = 0;
		}
		switch (g.type) {
		case td:
			h.gb = g.Sb * bd * g.nc * g.nc;
			h.da.l(0, 0);
			h.sc = 0.5 * h.gb * g.nc * g.nc;
			break;
		case 1:
			h.gb = 4 * g.Sb * g.ia.x * g.ia.y;
			h.da.l(0, 0);
			h.sc = h.gb / 3 * Mc(g.ia, g.ia);
			break;
		case sd:
			h = h;
			var i = g.Oc, j = g.je;
			g = g.Sb;
			var k = new O;
			k.oa();
			for ( var m = 0, n = 0, o = new O(0, 0), u = 1 / 3, x = 0; x < j; ++x) {
				var v = o, D = i[x], B = x + 1 < j ? i[x + 1] : i[0], z = Pc(D,
						v), C = Pc(B, v), R = z.x * C.y - z.y * C.x, E = 0.5 * R;
				m += E;
				var M = new O;
				S(M, v);
				Rc(M, D);
				Rc(M, B);
				Sc(M, u * E);
				Rc(k, M);
				D = v.x;
				v = v.y;
				B = z.x;
				z = z.y;
				E = C.x;
				C = C.y;
				n += R
						* (u
								* (0.25 * (B * B + E * B + E * E) + (D * B + D
										* E)) + 0.5 * D * D + (u
								* (0.25 * (z * z + C * z + C * C) + (v * z + v
										* C)) + 0.5 * v * v));
			}
			h.gb = g * m;
			Sc(k, 1 / m);
			h.da = k;
			n = g * (n - m * Mc(k, k));
			h.sc = n;
			break;
		default:
			h.gb = 0;
			h.da.l(0, 0);
			h.sc = 0;
		}
		this.Ma += e.gb;
		this.Gb.x += e.gb * (d.bb.x + e.da.x);
		this.Gb.y += e.gb * (d.bb.y + e.da.y);
		++this.nd;
	}
	if (this.Ma > 0) {
		Sc(this.Gb, 1 / this.Ma);
		Rc(this.c, Nc(this.d, this.Gb));
	} else
		this.A |= Dd;
	for (b = this.$c = 0; b < this.nd; ++b) {
		d = a.Nc[b];
		e = f[b];
		this.$c += e.sc;
		d = Pc(Oc(d.bb, e.da), this.Gb);
		this.$c += e.gb * Mc(d, d);
	}
	this.f = this.Ma > 0 ? 1 / this.Ma : 0;
	if (this.$c > 0 && a.Bh == s)
		this.m = 1 / this.$c;
	else
		this.m = this.$c = 0;
	this.e = Oc(a.ih, new O(-a.we * this.Gb.y, a.we * this.Gb.x));
	this.g = a.we;
	this.jc = this.r = this.N = this.$ = this.cb = q;
	for (b = 0; b < this.nd; ++b) {
		d = a.Nc[b];
		a: {
			e = d;
			f = this.Gb;
			switch (e.type) {
			case td:
				e = new be(e, this, f);
				break a;
			case 1:
			case sd:
				e = new ee(e, this, f);
				break a;
			}
			e = q;
		}
		e.r = this.jc;
		this.jc = e;
	}
	this.Jc = 0;
	if (a.bh)
		this.A |= ie;
	if (a.hh)
		this.A |= je;
	if (this.A & je || this.f == 0) {
		this.e.l(0, 0);
		this.g = 0;
	}
	this.q = a.L;
}
function Gd(a) {
	a.A &= ~je;
	a.Jc = 0;
}
he.prototype.Rc = ba("r");
function ce(a) {
	a.A |= ke;
	a.e.oa();
	a.g = 0;
	for (a = a.jc; a != q; a = a.r)
		a.qc();
}
var Dd = 1, ke = 2, je = 8, ie = 16;
function le() {
	this.Jd = new O;
	this.Kd = new O;
}
le.prototype = {
	la : q,
	ra : q,
	td : q,
	mf : q,
	tg : q,
	jb : q,
	ie : q
};
function me() {
	this.H = new O;
	this.Y = Array(2);
	for ( var a = 0; a < 2; a++)
		this.Y[a] = new le;
}
me.prototype = {
	lg : q,
	Za : q,
	$a : q,
	mb : q,
	qb : q,
	V : 0
};
function ne(a, c, b) {
	this.Zb = [];
	this.Oe = b;
	b = 0;
	var d, e;
	for (b = this.Yb = 0; b < c; ++b)
		this.Yb += a[b].Aa;
	for (b = 0; b < this.Yb; b++)
		this.Zb[b] = new me;
	var f = 0;
	for (b = 0; b < c; ++b) {
		var g = a[b], h = g.B.p, i = g.C.p, j = g.Aa, k = g.rc(), m = g.ja;
		g = g.ka;
		for ( var n = h.e.x, o = h.e.y, u = i.e.x, x = i.e.y, v = h.g, D = i.g, B = 0; B < j; ++B) {
			var z = k[B], C = z.H.x, R = z.H.y, E = this.Zb[f];
			E.Za = h;
			E.$a = i;
			E.lg = z;
			E.H.x = C;
			E.H.y = R;
			E.V = z.V;
			E.mb = m;
			E.qb = g;
			for ( var M = 0; M < E.V; ++M) {
				var K = z.Y[M], U = E.Y[M];
				U.la = K.la;
				U.ra = K.ra;
				U.jb = K.jb;
				var da = K.position.x - h.c.x, ea = K.position.y - h.c.y, F = K.position.x
						- i.c.x;
				K = K.position.y - i.c.y;
				d = U.Jd;
				e = h.d;
				d.x = da * e.a.x + ea * e.a.y;
				d.y = da * e.b.x + ea * e.b.y;
				d = U.Kd;
				e = i.d;
				d.x = F * e.a.x + K * e.a.y;
				d.y = F * e.b.x + K * e.b.y;
				d = da * da + ea * ea;
				e = F * F + K * K;
				var y = da * C + ea * R, r = F * C + K * R, w = h.f + i.f;
				w += h.m * (d - y * y) + i.m * (e - r * r);
				U.mf = 1 / w;
				r = R;
				w = -C;
				y = da * r + ea * w;
				r = F * r + K * w;
				w = h.f + i.f;
				w += h.m * (d - y * y) + i.m * (e - r * r);
				U.tg = 1 / w;
				U.ie = 0;
				if (U.jb > 0)
					U.ie = -60 * U.jb;
				da = E.H.x * (u + -D * K - n - -v * ea) + E.H.y
						* (x + D * F - o - v * da);
				if (da < -30)
					U.ie += -E.qb * da;
			}
			++f;
		}
	}
}
ne.prototype = {
	Ng : function() {
		for ( var a, c, b = 0; b < this.Yb; ++b) {
			var d = this.Zb[b], e = d.Za, f = d.$a, g = e.f, h = e.m, i = f.f, j = f.m, k = d.H.x, m = d.H.y, n = m, o = -k, u = 0, x = 0;
			if (oe) {
				x = d.V;
				for (u = 0; u < x; ++u) {
					var v = d.Y[u], D = v.la * k + v.ra * n, B = v.la * m
							+ v.ra * o;
					c = e.d;
					a = v.Jd;
					var z = c.a.x * a.x + c.b.x * a.y, C = c.a.y * a.x + c.b.y
							* a.y;
					c = f.d;
					a = v.Kd;
					var R = c.a.x * a.x + c.b.x * a.y;
					a = c.a.y * a.x + c.b.y * a.y;
					e.g -= h * (z * B - C * D);
					e.e.x -= g * D;
					e.e.y -= g * B;
					f.g += j * (R * B - a * D);
					f.e.x += i * D;
					f.e.y += i * B;
					v.td = 0;
				}
			} else {
				x = d.V;
				for (u = 0; u < x; ++u) {
					e = d.Y[u];
					e.la = 0;
					e.ra = 0;
					e.td = 0;
				}
			}
		}
	},
	sb : function() {
		for ( var a = 0, c, b, d, e, f, g, h, i, j = 0; j < this.Yb; ++j) {
			var k = this.Zb[j], m = k.Za, n = k.$a, o = m.g, u = m.e, x = n.g, v = n.e, D = m.f, B = m.m, z = n.f, C = n.m, R = k.H.x, E = k.H.y, M = E, K = -R, U = k.V;
			for (a = 0; a < U; ++a) {
				c = k.Y[a];
				f = m.d;
				g = c.Jd;
				b = f.a.x * g.x + f.b.x * g.y;
				d = f.a.y * g.x + f.b.y * g.y;
				f = n.d;
				g = c.Kd;
				e = f.a.x * g.x + f.b.x * g.y;
				f = f.a.y * g.x + f.b.y * g.y;
				g = v.x + -x * f - u.x - -o * d;
				h = v.y + x * e - u.y - o * b;
				g = -c.mf * (g * R + h * E - c.ie);
				h = P(c.la + g, 0);
				g = h - c.la;
				i = g * R;
				g = g * E;
				u.x -= D * i;
				u.y -= D * g;
				o -= B * (b * g - d * i);
				v.x += z * i;
				v.y += z * g;
				x += C * (e * g - f * i);
				c.la = h;
				g = v.x + -x * f - u.x - -o * d;
				h = v.y + x * e - u.y - o * b;
				g = c.tg * -(g * M + h * K);
				h = k.mb * c.la;
				h = Q(c.ra + g, -h, h);
				g = h - c.ra;
				i = g * M;
				g = g * K;
				u.x -= D * i;
				u.y -= D * g;
				o -= B * (b * g - d * i);
				v.x += z * i;
				v.y += z * g;
				x += C * (e * g - f * i);
				c.ra = h;
			}
			m.g = o;
			n.g = x;
		}
	},
	rb : function(a) {
		for ( var c = 0, b, d, e = 0; e < this.Yb; ++e) {
			for ( var f = this.Zb[e], g = f.Za, h = f.$a, i = g.c, j = g.o, k = h.c, m = h.o, n = g.f, o = g.m, u = h.f, x = h.m, v = f.H.x, D = f.H.y, B = f.V, z = 0; z < B; ++z) {
				var C = f.Y[z];
				b = g.d;
				d = C.Jd;
				var R = b.a.x * d.x + b.b.x * d.y, E = b.a.y * d.x + b.b.y
						* d.y;
				b = h.d;
				d = C.Kd;
				var M = b.a.x * d.x + b.b.x * d.y;
				b = b.a.y * d.x + b.b.y * d.y;
				d = (k.x + M - (i.x + R)) * v + (k.y + b - (i.y + E)) * D
						+ C.jb;
				c = c < d ? c : d;
				d = -C.mf * a * Q(d + 0.15, -6, 0);
				var K = C.td;
				C.td = P(K + d, 0);
				d = C.td - K;
				C = d * v;
				d = d * D;
				i.x -= n * C;
				i.y -= n * d;
				j -= o * (R * d - E * C);
				g.d.l(j);
				k.x += u * C;
				k.y += u * d;
				m += x * (M * d - b * C);
				h.d.l(m);
			}
			g.o = j;
			h.o = m;
		}
		return c >= -0.15;
	},
	Mg : function() {
		for ( var a = 0; a < this.Yb; ++a)
			for ( var c = this.Zb[a], b = c.lg, d = 0; d < c.V; ++d) {
				var e = b.Y[d], f = c.Y[d];
				e.la = f.la;
				e.ra = f.ra;
			}
	},
	Oe : q,
	Zb : [],
	Yb : 0
};
function pe(a, c, b, d) {
	var e = 0;
	this.Oh = a;
	this.Ph = c;
	this.Qh = b;
	this.Cb = this.$b = this.La = 0;
	this.ub = Array(a);
	for (e = 0; e < a; e++)
		this.ub[e] = q;
	this.We = Array(c);
	for (e = 0; e < c; e++)
		this.We[e] = q;
	this.hd = Array(b);
	for (e = 0; e < b; e++)
		this.hd[e] = q;
	this.Oe = d;
}
pe.prototype.qe = function(a, c) {
	var b = 0, d;
	for (b = 0; b < this.La; ++b) {
		d = this.ub[b];
		if (d.f != 0) {
			Rc(d.e, new O(a.Oa * Oc(c, new O(d.f * d.ed.x, d.f * d.ed.y)).x,
					a.Oa * Oc(c, new O(d.f * d.ed.x, d.f * d.ed.y)).y));
			d.g += a.Oa * d.m * d.kg;
			Sc(d.e, d.th);
			d.g *= d.kh;
			S(d.ff, d.c);
			d.ig = d.o;
		}
	}
	var e = new ne(this.We, this.$b, this.Oe);
	e.Ng();
	for (b = 0; b < this.Cb; ++b)
		this.hd[b].Nb();
	for (b = 0; b < a.Le; ++b) {
		e.sb();
		for (d = 0; d < this.Cb; ++d)
			this.hd[d].sb(a);
	}
	for (b = 0; b < this.La; ++b) {
		d = this.ub[b];
		if (d.f != 0) {
			d.c.x += a.Oa * d.e.x;
			d.c.y += a.Oa * d.e.y;
			d.o += a.Oa * d.g;
			d.d.l(d.o);
		}
	}
	for (b = 0; b < this.Cb; ++b)
		;
	if (qe)
		for (re = 0; re < a.Le; ++re) {
			d = e.rb(0.2);
			var f = p;
			for (b = 0; b < this.Cb; ++b) {
				var g = this.hd[b].rb();
				f = f && g;
			}
			if (d && f)
				break;
		}
	e.Mg();
	for (b = 0; b < this.La; ++b) {
		d = this.ub[b];
		if (d.f != 0) {
			d.d.l(d.o);
			e = d;
			e.qg.l(e.ig);
			for (f = e.jc; f != q; f = f.r)
				f.re(e.ff, e.qg, e.c, e.d);
			d.ed.l(0, 0);
			d.kg = 0;
		}
	}
};
var re = 0;
function W() {
}
W.prototype = {
	Ba : q,
	Xc : q,
	u : q,
	next : q
};
function se(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
}
se.prototype = {
	Rc : ba("r"),
	Nb : aa(),
	sb : aa(),
	rb : ca(s),
	xa : 0,
	N : q,
	r : q,
	s : new W,
	t : new W,
	k : q,
	h : q,
	nb : q,
	xb : q,
	q : q
};
function te(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.Ka = new V;
	this.sa = new V;
	this.ta = new V;
	this.Ya = new V;
	this.i = new O;
	this.j = new O;
	this.Wa = new O;
	this.Lb = new V;
	var c, b, d;
	c = this.k.d;
	b = a.Pb.x - this.k.c.x;
	d = a.Pb.y - this.k.c.y;
	this.i.x = b * c.a.x + d * c.a.y;
	this.i.y = b * c.b.x + d * c.b.y;
	c = this.h.d;
	b = a.Pb.x - this.h.c.x;
	d = a.Pb.y - this.h.c.y;
	this.j.x = b * c.a.x + d * c.a.y;
	this.j.y = b * c.b.x + d * c.b.y;
	this.ag = this.h.o - this.k.o;
	this.Wa.l(0, 0);
	this.ea = this.v = this.fa = 0;
	this.bf = a.Mh;
	this.hf = a.bi;
	this.gg = a.Xh;
	this.df = a.xh;
	this.zb = a.eh;
	this.Ac = a.fh;
}
Ib(te.prototype, se.prototype);
function ue(a) {
	return a.h.o - a.k.o;
}
new V;
t = te.prototype;
t.sa = new V;
t.ta = new V;
t.Ya = new V;
t.Nb = function() {
	var a = this.k, c = this.h, b;
	b = a.d;
	var d = b.a.x * this.i.x + b.b.x * this.i.y, e = b.a.y * this.i.x + b.b.y
			* this.i.y;
	b = c.d;
	var f = b.a.x * this.j.x + b.b.x * this.j.y;
	b = b.a.y * this.j.x + b.b.y * this.j.y;
	var g = a.f, h = c.f, i = a.m, j = c.m;
	this.sa.a.x = g + h;
	this.sa.b.x = 0;
	this.sa.a.y = 0;
	this.sa.b.y = g + h;
	this.ta.a.x = i * e * e;
	this.ta.b.x = -i * d * e;
	this.ta.a.y = -i * d * e;
	this.ta.b.y = i * d * d;
	this.Ya.a.x = j * b * b;
	this.Ya.b.x = -j * f * b;
	this.Ya.a.y = -j * f * b;
	this.Ya.b.y = j * f * f;
	Xd(this.Ka, this.sa);
	Yd(this.Ka, this.ta);
	Yd(this.Ka, this.Ya);
	Zd(this.Ka, this.Lb);
	this.Na = 1 / (i + j);
	if (this.Ac == s)
		this.fa = 0;
	if (this.zb) {
		var k = c.o - a.o - this.ag;
		if (Qc(this.hf - this.bf) < 2 * cd)
			this.R = 3;
		else if (k <= this.bf) {
			if (this.R != 1)
				this.v = 0;
			this.R = 1;
		} else if (k >= this.hf) {
			if (this.R != 2)
				this.v = 0;
			this.R = 2;
		} else
			this.v = this.R = 0;
	} else
		this.v = 0;
	if (oe) {
		a.e.x -= g * this.Wa.x;
		a.e.y -= g * this.Wa.y;
		a.g -= i * (d * this.Wa.y - e * this.Wa.x + this.fa + this.v);
		c.e.x += h * this.Wa.x;
		c.e.y += h * this.Wa.y;
		c.g += j * (f * this.Wa.y - b * this.Wa.x + this.fa + this.v);
	} else {
		this.Wa.oa();
		this.v = this.fa = 0;
	}
	this.ea = 0;
};
t.sb = function(a) {
	var c = this.k, b = this.h, d;
	d = c.d;
	var e = d.a.x * this.i.x + d.b.x * this.i.y, f = d.a.y * this.i.x + d.b.y
			* this.i.y;
	d = b.d;
	var g = d.a.x * this.j.x + d.b.x * this.j.y;
	d = d.a.y * this.j.x + d.b.y * this.j.y;
	var h = b.e.x + -b.g * d - c.e.x - -c.g * f, i = b.e.y + b.g * g - c.e.y
			- c.g * e, j = -(this.Lb.a.x * h + this.Lb.b.x * i);
	h = -(this.Lb.a.y * h + this.Lb.b.y * i);
	this.Wa.x += j;
	this.Wa.y += h;
	c.e.x -= c.f * j;
	c.e.y -= c.f * h;
	c.g -= c.m * (e * h - f * j);
	b.e.x += b.f * j;
	b.e.y += b.f * h;
	b.g += b.m * (g * h - d * j);
	if (this.Ac && this.R != 3) {
		e = -this.Na * (b.g - c.g - this.df);
		f = this.fa;
		this.fa = Q(this.fa + e, -a.Oa * this.gg, a.Oa * this.gg);
		e = this.fa - f;
		c.g -= c.m * e;
		b.g += b.m * e;
	}
	if (this.zb && this.R != 0) {
		e = -this.Na * (b.g - c.g);
		if (this.R == 3)
			this.v += e;
		else if (this.R == 1) {
			a = this.v;
			this.v = P(this.v + e, 0);
			e = this.v - a;
		} else if (this.R == 2) {
			a = this.v;
			this.v = this.v + e < 0 ? this.v + e : 0;
			e = this.v - a;
		}
		c.g -= c.m * e;
		b.g += b.m * e;
	}
};
t.rb = function() {
	var a, c = this.k, b = this.h, d = 0;
	d = c.d;
	var e = d.a.x * this.i.x + d.b.x * this.i.y, f = d.a.y * this.i.x + d.b.y
			* this.i.y;
	d = b.d;
	a = d.a.x * this.j.x + d.b.x * this.j.y;
	var g = d.a.y * this.j.x + d.b.y * this.j.y, h = b.c.x + a - (c.c.x + e), i = b.c.y
			+ g - (c.c.y + f);
	d = Math.sqrt(h * h + i * i);
	var j = c.f, k = b.f, m = c.m, n = b.m;
	this.sa.a.x = j + k;
	this.sa.b.x = 0;
	this.sa.a.y = 0;
	this.sa.b.y = j + k;
	this.ta.a.x = m * f * f;
	this.ta.b.x = -m * e * f;
	this.ta.a.y = -m * e * f;
	this.ta.b.y = m * e * e;
	this.Ya.a.x = n * g * g;
	this.Ya.b.x = -n * a * g;
	this.Ya.a.y = -n * a * g;
	this.Ya.b.y = n * a * a;
	Xd(this.Ka, this.sa);
	Yd(this.Ka, this.ta);
	Yd(this.Ka, this.Ya);
	this.Ka.qe(ve, -h, -i);
	h = ve.x;
	i = ve.y;
	c.c.x -= c.f * h;
	c.c.y -= c.f * i;
	c.o -= c.m * (e * i - f * h);
	c.d.l(c.o);
	b.c.x += b.f * h;
	b.c.y += b.f * i;
	b.o += b.m * (a * i - g * h);
	b.d.l(b.o);
	e = 0;
	if (this.zb && this.R != 0) {
		a = b.o - c.o - this.ag;
		f = 0;
		if (this.R == 3) {
			a = Q(a, -dd, dd);
			f = -this.Na * a;
			e = Qc(a);
		} else if (this.R == 1) {
			a = a - this.bf;
			e = P(0, -a);
			a = Q(a + cd, -dd, 0);
			f = -this.Na * a;
			a = this.ea;
			this.ea = P(this.ea + f, 0);
			f = this.ea - a;
		} else if (this.R == 2) {
			a = a - this.hf;
			e = P(0, a);
			a = Q(a - cd, 0, dd);
			f = -this.Na * a;
			a = this.ea;
			this.ea = this.ea + f < 0 ? this.ea + f : 0;
			f = this.ea - a;
		}
		c.o -= c.m * f;
		c.d.l(c.o);
		b.o += b.m * f;
		b.d.l(b.o);
	}
	return d <= 0.15 && e <= cd;
};
var ve = new O;
function we() {
	this.O = new O;
	this.P = new O;
}
we.prototype = {
	O : new O,
	ba : q,
	P : new O,
	ca : q,
	oa : function() {
		this.O.oa();
		this.ba = 0;
		this.P.oa();
		this.ca = 0;
	},
	l : function(a, c, b, d) {
		S(this.O, a);
		this.ba = c;
		S(this.P, b);
		this.ca = d;
	},
	xd : function(a, c, b, d) {
		return this.O.x * a.x + this.O.y * a.y + this.ba * c
				+ (this.P.x * b.x + this.P.y * b.y) + this.ca * d;
	}
};
function xe(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.i = new O;
	this.j = new O;
	this.va = new O;
	this.pb = new O;
	this.Q = new we;
	this.D = new we;
	var c, b, d;
	c = this.k.d;
	b = a.Pb.x - this.k.c.x;
	d = a.Pb.y - this.k.c.y;
	this.i.l(b * c.a.x + d * c.a.y, b * c.b.x + d * c.b.y);
	c = this.h.d;
	b = a.Pb.x - this.h.c.x;
	d = a.Pb.y - this.h.c.y;
	this.j.l(b * c.a.x + d * c.a.y, b * c.b.x + d * c.b.y);
	c = this.k.d;
	b = a.axis.x;
	d = a.axis.y;
	this.va.l(b * c.a.x + d * c.a.y, b * c.b.x + d * c.b.y);
	this.pb.x = -this.va.y;
	this.pb.y = this.va.x;
	this.qh = this.h.o - this.k.o;
	this.Q.oa();
	this.Pd = this.Pe = this.Ib = this.ld = 0;
	this.D.oa();
	this.ea = this.v = this.fa = this.Na = 0;
	this.cf = a.Nh;
	this.jf = a.ci;
	this.fg = a.Wh;
	this.df = a.xh;
	this.zb = a.eh;
	this.Ac = a.fh;
}
Ib(xe.prototype, se.prototype);
function ye(a) {
	var c = a.k, b = a.h, d;
	d = c.d;
	var e = d.a.x * a.i.x + d.b.x * a.i.y, f = d.a.y * a.i.x + d.b.y * a.i.y;
	d = b.d;
	e = b.c.x + (d.a.x * a.j.x + d.b.x * a.j.y) - (c.c.x + e);
	b = b.c.y + (d.a.y * a.j.x + d.b.y * a.j.y) - (c.c.y + f);
	d = c.d;
	return (d.a.x * a.va.x + d.b.x * a.va.y) * e
			+ (d.a.y * a.va.x + d.b.y * a.va.y) * b;
}
xe.prototype.Nb = function() {
	var a = this.k, c = this.h, b;
	b = a.d;
	var d = b.a.x * this.i.x + b.b.x * this.i.y, e = b.a.y * this.i.x + b.b.y
			* this.i.y;
	b = c.d;
	var f = b.a.x * this.j.x + b.b.x * this.j.y, g = b.a.y * this.j.x + b.b.y
			* this.j.y, h = a.f, i = c.f, j = a.m, k = c.m;
	b = a.d;
	var m = b.a.x * this.pb.x + b.b.x * this.pb.y;
	b = b.a.y * this.pb.x + b.b.y * this.pb.y;
	var n = c.c.x + f - a.c.x, o = c.c.y + g - a.c.y;
	this.Q.O.x = -m;
	this.Q.O.y = -b;
	this.Q.P.x = m;
	this.Q.P.y = b;
	this.Q.ba = -(n * b - o * m);
	this.Q.ca = f * b - g * m;
	this.ld = h + j * this.Q.ba * this.Q.ba + i + k * this.Q.ca * this.Q.ca;
	this.ld = 1 / this.ld;
	this.Pe = 1 / (j + k);
	if (this.zb || this.Ac) {
		b = a.d;
		m = b.a.x * this.va.x + b.b.x * this.va.y;
		b = b.a.y * this.va.x + b.b.y * this.va.y;
		this.D.O.x = -m;
		this.D.O.y = -b;
		this.D.P.x = m;
		this.D.P.y = b;
		this.D.ba = -(n * b - o * m);
		this.D.ca = f * b - g * m;
		this.Na = h + j * this.D.ba * this.D.ba + i + k * this.D.ca * this.D.ca;
		this.Na = 1 / this.Na;
		if (this.zb) {
			d = m * (n - d) + b * (o - e);
			if (Qc(this.jf - this.cf) < 0.3)
				this.R = 3;
			else if (d <= this.cf) {
				if (this.R != 1)
					this.v = 0;
				this.R = 1;
			} else if (d >= this.jf) {
				if (this.R != 2)
					this.v = 0;
				this.R = 2;
			} else
				this.v = this.R = 0;
		}
	}
	if (this.Ac == s)
		this.fa = 0;
	if (this.zb == s)
		this.v = 0;
	if (oe) {
		d = this.Ib * this.Q.O.y + (this.fa + this.v) * this.D.O.y;
		e = this.Ib * this.Q.P.x + (this.fa + this.v) * this.D.P.x;
		f = this.Ib * this.Q.P.y + (this.fa + this.v) * this.D.P.y;
		g = this.Ib * this.Q.ba - this.Pd + (this.fa + this.v) * this.D.ba;
		n = this.Ib * this.Q.ca + this.Pd + (this.fa + this.v) * this.D.ca;
		a.e.x += h * (this.Ib * this.Q.O.x + (this.fa + this.v) * this.D.O.x);
		a.e.y += h * d;
		a.g += j * g;
		c.e.x += i * e;
		c.e.y += i * f;
		c.g += k * n;
	} else
		this.fa = this.v = this.Pd = this.Ib = 0;
	this.ea = 0;
};
xe.prototype.sb = function(a) {
	var c = this.k, b = this.h, d = c.f, e = b.f, f = c.m, g = b.m, h = -this.ld
			* this.Q.xd(c.e, c.g, b.e, b.g);
	this.Ib += h;
	c.e.x += d * h * this.Q.O.x;
	c.e.y += d * h * this.Q.O.y;
	c.g += f * h * this.Q.ba;
	b.e.x += e * h * this.Q.P.x;
	b.e.y += e * h * this.Q.P.y;
	b.g += g * h * this.Q.ca;
	h = -this.Pe * (b.g - c.g);
	this.Pd += h;
	c.g -= f * h;
	b.g += g * h;
	if (this.Ac && this.R != 3) {
		h = -this.Na * (this.D.xd(c.e, c.g, b.e, b.g) - this.df);
		var i = this.fa;
		this.fa = Q(this.fa + h, -a.Oa * this.fg, a.Oa * this.fg);
		h = this.fa - i;
		c.e.x += d * h * this.D.O.x;
		c.e.y += d * h * this.D.O.y;
		c.g += f * h * this.D.ba;
		b.e.x += e * h * this.D.P.x;
		b.e.y += e * h * this.D.P.y;
		b.g += g * h * this.D.ca;
	}
	if (this.zb && this.R != 0) {
		h = -this.Na * this.D.xd(c.e, c.g, b.e, b.g);
		if (this.R == 3)
			this.v += h;
		else if (this.R == 1) {
			a = this.v;
			this.v = P(this.v + h, 0);
			h = this.v - a;
		} else if (this.R == 2) {
			a = this.v;
			this.v = this.v + h < 0 ? this.v + h : 0;
			h = this.v - a;
		}
		c.e.x += d * h * this.D.O.x;
		c.e.y += d * h * this.D.O.y;
		c.g += f * h * this.D.ba;
		b.e.x += e * h * this.D.P.x;
		b.e.y += e * h * this.D.P.y;
		b.g += g * h * this.D.ca;
	}
};
xe.prototype.rb = function() {
	var a, c, b = this.k, d = this.h, e = b.f, f = d.f, g = b.m, h = d.m, i;
	i = b.d;
	var j = i.a.x * this.i.x + i.b.x * this.i.y, k = i.a.y * this.i.x + i.b.y
			* this.i.y;
	i = d.d;
	a = i.a.x * this.j.x + i.b.x * this.j.y;
	i = i.a.y * this.j.x + i.b.y * this.j.y;
	j = b.c.x + j;
	k = b.c.y + k;
	a = d.c.x + a;
	i = d.c.y + i;
	a = a - j;
	j = i - k;
	i = b.d;
	var m = (i.a.x * this.pb.x + i.b.x * this.pb.y) * a
			+ (i.a.y * this.pb.x + i.b.y * this.pb.y) * j;
	m = Q(m, -6, 6);
	c = -this.ld * m;
	b.c.x += e * c * this.Q.O.x;
	b.c.y += e * c * this.Q.O.y;
	b.o += g * c * this.Q.ba;
	d.c.x += f * c * this.Q.P.x;
	d.c.y += f * c * this.Q.P.y;
	d.o += h * c * this.Q.ca;
	m = Qc(m);
	c = d.o - b.o - this.qh;
	c = Q(c, -dd, dd);
	var n = -this.Pe * c;
	b.o -= b.m * n;
	b.d.l(b.o);
	d.o += d.m * n;
	d.d.l(d.o);
	n = Qc(c);
	if (this.zb && this.R != 0) {
		i = b.d;
		j = i.a.x * this.i.x + i.b.x * this.i.y;
		k = i.a.y * this.i.x + i.b.y * this.i.y;
		i = d.d;
		a = i.a.x * this.j.x + i.b.x * this.j.y;
		i = i.a.y * this.j.x + i.b.y * this.j.y;
		j = b.c.x + j;
		k = b.c.y + k;
		a = d.c.x + a;
		i = d.c.y + i;
		a = a - j;
		j = i - k;
		i = b.d;
		i = (i.a.x * this.va.x + i.b.x * this.va.y) * a
				+ (i.a.y * this.va.x + i.b.y * this.va.y) * j;
		a = 0;
		if (this.R == 3) {
			a = Q(i, -6, 6);
			a = -this.Na * a;
			m = P(m, Qc(c));
		} else if (this.R == 1) {
			a = i - this.cf;
			m = P(m, -a);
			a = Q(a + 0.15, -6, 0);
			a = -this.Na * a;
			c = this.ea;
			this.ea = P(this.ea + a, 0);
			a = this.ea - c;
		} else if (this.R == 2) {
			a = i - this.jf;
			m = P(m, a);
			a = Q(a - 0.15, 0, 6);
			a = -this.Na * a;
			c = this.ea;
			this.ea = this.ea + a < 0 ? this.ea + a : 0;
			a = this.ea - c;
		}
		b.c.x += e * a * this.D.O.x;
		b.c.y += e * a * this.D.O.y;
		b.o += g * a * this.D.ba;
		b.d.l(b.o);
		d.c.x += f * a * this.D.P.x;
		d.c.y += f * a * this.D.P.y;
		d.o += h * a * this.D.ca;
		d.d.l(d.o);
	}
	return m <= 0.15 && n <= cd;
};
function ze(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.Ka = new V;
	this.sa = new V;
	this.ta = new V;
	this.ob = new O;
	this.qd = new O;
	this.X = new O;
	this.Lb = new V;
	this.Od = new O;
	S(this.qd, a.target);
	var c = this.qd.x - this.h.c.x, b = this.qd.y - this.h.c.y;
	this.ob.x = c * this.h.d.a.x + b * this.h.d.a.y;
	this.ob.y = c * this.h.d.b.x + b * this.h.d.b.y;
	this.cg = a.Sh;
	this.X.oa();
	b = this.h.Ma;
	var d = 2 * bd * a.Jh;
	c = 2 * b * a.Ih * d;
	b = b * d * d;
	this.Vd = 1 / (c + a.ug * b);
	this.Yf = a.ug * b / (c + a.ug * b);
}
Ib(ze.prototype, se.prototype);
ze.prototype.Nb = function() {
	var a = this.h, c;
	c = a.d;
	var b = c.a.x * this.ob.x + c.b.x * this.ob.y;
	c = c.a.y * this.ob.x + c.b.y * this.ob.y;
	var d = a.f, e = a.m;
	this.sa.a.x = d;
	this.sa.b.x = 0;
	this.sa.a.y = 0;
	this.sa.b.y = d;
	this.ta.a.x = e * c * c;
	this.ta.b.x = -e * b * c;
	this.ta.a.y = -e * b * c;
	this.ta.b.y = e * b * b;
	Xd(this.Ka, this.sa);
	Yd(this.Ka, this.ta);
	this.Ka.a.x += this.Vd;
	this.Ka.b.y += this.Vd;
	Zd(this.Ka, this.Lb);
	this.Od.x = a.c.x + b - this.qd.x;
	this.Od.y = a.c.y + c - this.qd.y;
	a.g *= 0.98;
	var f = this.X.x, g = this.X.y;
	a.e.x += d * f;
	a.e.y += d * g;
	a.g += e * (b * g - c * f);
};
ze.prototype.sb = function(a) {
	var c = this.h, b;
	b = c.d;
	var d = b.a.x * this.ob.x + b.b.x * this.ob.y, e = b.a.y * this.ob.x
			+ b.b.y * this.ob.y, f = c.e.x + -c.g * e, g = c.e.y + c.g * d;
	b = this.Lb;
	f = f + this.Yf * a.Ke * this.Od.x + this.Vd * this.X.x;
	var h = g + this.Yf * a.Ke * this.Od.y + this.Vd * this.X.y;
	g = -(b.a.x * f + b.b.x * h);
	h = -(b.a.y * f + b.b.y * h);
	b = this.X.x;
	f = this.X.y;
	this.X.x += g;
	this.X.y += h;
	g = T(this.X);
	g > a.Oa * this.cg && Sc(this.X, a.Oa * this.cg / g);
	g = this.X.x - b;
	h = this.X.y - f;
	c.e.x += c.f * g;
	c.e.y += c.f * h;
	c.g += c.m * (d * h - e * g);
};
ze.prototype.rb = ca(p);
function Ae(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.i = new O;
	this.j = new O;
	this.ga = new O;
	var c, b, d;
	c = this.k.d;
	b = a.Qb.x - this.k.c.x;
	d = a.Qb.y - this.k.c.y;
	this.i.x = b * c.a.x + d * c.a.y;
	this.i.y = b * c.b.x + d * c.b.y;
	c = this.h.d;
	b = a.Rb.x - this.h.c.x;
	d = a.Rb.y - this.h.c.y;
	this.j.x = b * c.a.x + d * c.a.y;
	this.j.y = b * c.b.x + d * c.b.y;
	b = a.Rb.x - a.Qb.x;
	d = a.Rb.y - a.Qb.y;
	this.sh = Math.sqrt(b * b + d * d);
	this.X = 0;
}
Ib(Ae.prototype, se.prototype);
Ae.prototype.Nb = function() {
	var a;
	a = this.k.d;
	var c = a.a.x * this.i.x + a.b.x * this.i.y, b = a.a.y * this.i.x + a.b.y
			* this.i.y;
	a = this.h.d;
	var d = a.a.x * this.j.x + a.b.x * this.j.y;
	a = a.a.y * this.j.x + a.b.y * this.j.y;
	this.ga.x = this.h.c.x + d - this.k.c.x - c;
	this.ga.y = this.h.c.y + a - this.k.c.y - b;
	var e = Math.sqrt(this.ga.x * this.ga.x + this.ga.y * this.ga.y);
	e > 0.15 ? Sc(this.ga, 1 / e) : this.ga.oa();
	e = c * this.ga.y - b * this.ga.x;
	var f = d * this.ga.y - a * this.ga.x;
	this.Ma = this.k.f + this.k.m * e * e + this.h.f + this.h.m * f * f;
	this.Ma = 1 / this.Ma;
	if (oe) {
		e = this.X * this.ga.x;
		f = this.X * this.ga.y;
		this.k.e.x -= this.k.f * e;
		this.k.e.y -= this.k.f * f;
		this.k.g -= this.k.m * (c * f - b * e);
		this.h.e.x += this.h.f * e;
		this.h.e.y += this.h.f * f;
		this.h.g += this.h.m * (d * f - a * e);
	} else
		this.X = 0;
};
Ae.prototype.sb = function() {
	var a;
	a = this.k.d;
	var c = a.a.x * this.i.x + a.b.x * this.i.y, b = a.a.y * this.i.x + a.b.y
			* this.i.y;
	a = this.h.d;
	var d = a.a.x * this.j.x + a.b.x * this.j.y;
	a = a.a.y * this.j.x + a.b.y * this.j.y;
	var e = -this.Ma
			* (this.ga.x
					* (this.h.e.x + -this.h.g * a - (this.k.e.x + -this.k.g * b)) + this.ga.y
					* (this.h.e.y + this.h.g * d - (this.k.e.y + this.k.g * c)));
	this.X += e;
	var f = e * this.ga.x;
	e = e * this.ga.y;
	this.k.e.x -= this.k.f * f;
	this.k.e.y -= this.k.f * e;
	this.k.g -= this.k.m * (c * e - b * f);
	this.h.e.x += this.h.f * f;
	this.h.e.y += this.h.f * e;
	this.h.g += this.h.m * (d * e - a * f);
};
Ae.prototype.rb = function() {
	var a;
	a = this.k.d;
	var c = a.a.x * this.i.x + a.b.x * this.i.y, b = a.a.y * this.i.x + a.b.y
			* this.i.y;
	a = this.h.d;
	var d = a.a.x * this.j.x + a.b.x * this.j.y;
	a = a.a.y * this.j.x + a.b.y * this.j.y;
	var e = this.h.c.x + d - this.k.c.x - c, f = this.h.c.y + a - this.k.c.y
			- b, g = Math.sqrt(e * e + f * f);
	e /= g;
	f /= g;
	g = g - this.sh;
	g = Q(g, -6, 6);
	var h = -this.Ma * g;
	this.ga.l(e, f);
	e = h * this.ga.x;
	f = h * this.ga.y;
	this.k.c.x -= this.k.f * e;
	this.k.c.y -= this.k.f * f;
	this.k.o -= this.k.m * (c * f - b * e);
	this.h.c.x += this.h.f * e;
	this.h.c.y += this.h.f * f;
	this.h.o += this.h.m * (d * f - a * e);
	this.k.d.l(this.k.o);
	this.h.d.l(this.h.o);
	return Qc(g) < 0.15;
};
function Be(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.Ab = new O;
	this.Bb = new O;
	this.i = new O;
	this.j = new O;
	this.S = new O;
	this.T = new O;
	var c, b, d;
	this.Ua = this.k.J.ph;
	this.Ab.x = a.Ee.x - this.Ua.c.x;
	this.Ab.y = a.Ee.y - this.Ua.c.y;
	this.Bb.x = a.Fe.x - this.Ua.c.x;
	this.Bb.y = a.Fe.y - this.Ua.c.y;
	c = this.k.d;
	b = a.Qb.x - this.k.c.x;
	d = a.Qb.y - this.k.c.y;
	this.i.x = b * c.a.x + d * c.a.y;
	this.i.y = b * c.b.x + d * c.b.y;
	c = this.h.d;
	b = a.Rb.x - this.h.c.x;
	d = a.Rb.y - this.h.c.y;
	this.j.x = b * c.a.x + d * c.a.y;
	this.j.y = b * c.b.x + d * c.b.y;
	this.Z = a.Ch;
	b = a.Ee.x - a.Qb.x;
	d = a.Ee.y - a.Qb.y;
	c = Math.sqrt(b * b + d * d);
	b = a.Fe.x - a.Rb.x;
	d = a.Fe.y - a.Rb.y;
	c = P(0.5 * Ce, c);
	b = P(0.5 * Ce, Math.sqrt(b * b + d * d));
	this.bd = c + this.Z * b;
	this.dg = Q(a.Th, c, this.bd - this.Z * Ce);
	this.eg = Q(a.Uh, b, (this.bd - Ce) / this.Z);
	this.ec = this.dc = this.md = 0;
}
Ib(Be.prototype, se.prototype);
Be.prototype.Nb = function() {
	var a = this.k, c = this.h, b;
	b = a.d;
	var d = b.a.x * this.i.x + b.b.x * this.i.y, e = b.a.y * this.i.x + b.b.y
			* this.i.y;
	b = c.d;
	var f = b.a.x * this.j.x + b.b.x * this.j.y;
	b = b.a.y * this.j.x + b.b.y * this.j.y;
	var g = c.c.x + f, h = c.c.y + b, i = this.Ua.c.x + this.Bb.x, j = this.Ua.c.y
			+ this.Bb.y;
	this.S.l(a.c.x + d - (this.Ua.c.x + this.Ab.x), a.c.y + e
			- (this.Ua.c.y + this.Ab.y));
	this.T.l(g - i, h - j);
	g = T(this.S);
	h = T(this.T);
	g > 0.15 ? Sc(this.S, 1 / g) : this.S.oa();
	h > 0.15 ? Sc(this.T, 1 / h) : this.T.oa();
	if (g < this.dg)
		this.dc = this.$e = 0;
	else {
		this.$e = 2;
		this.Wd = 0;
	}
	if (h < this.eg)
		this.ec = this.af = 0;
	else {
		this.af = 2;
		this.Xd = 0;
	}
	g = d * this.S.y - e * this.S.x;
	h = f * this.T.y - b * this.T.x;
	this.jd = a.f + a.m * g * g;
	this.kd = c.f + c.m * h * h;
	this.Zd = this.jd + this.Z * this.Z * this.kd;
	this.jd = 1 / this.jd;
	this.kd = 1 / this.kd;
	this.Zd = 1 / this.Zd;
	g = (-this.md - this.dc) * this.S.x;
	h = (-this.md - this.dc) * this.S.y;
	i = (-this.Z * this.md - this.ec) * this.T.x;
	j = (-this.Z * this.md - this.ec) * this.T.y;
	a.e.x += a.f * g;
	a.e.y += a.f * h;
	a.g += a.m * (d * h - e * g);
	c.e.x += c.f * i;
	c.e.y += c.f * j;
	c.g += c.m * (f * j - b * i);
};
Be.prototype.sb = function() {
	var a = this.k, c = this.h, b;
	b = a.d;
	var d = b.a.x * this.i.x + b.b.x * this.i.y, e = b.a.y * this.i.x + b.b.y
			* this.i.y;
	b = c.d;
	var f = b.a.x * this.j.x + b.b.x * this.j.y;
	b = b.a.y * this.j.x + b.b.y * this.j.y;
	var g, h, i, j;
	g = a.e.x + -a.g * e;
	h = a.e.y + a.g * d;
	i = c.e.x + -c.g * b;
	j = c.e.y + c.g * f;
	g = -(this.S.x * g + this.S.y * h) - this.Z * (this.T.x * i + this.T.y * j);
	j = -this.Zd * g;
	this.md += j;
	g = -j * this.S.x;
	h = -j * this.S.y;
	i = -this.Z * j * this.T.x;
	j = -this.Z * j * this.T.y;
	a.e.x += a.f * g;
	a.e.y += a.f * h;
	a.g += a.m * (d * h - e * g);
	c.e.x += c.f * i;
	c.e.y += c.f * j;
	c.g += c.m * (f * j - b * i);
	if (this.$e == 2) {
		g = a.e.x + -a.g * e;
		h = a.e.y + a.g * d;
		g = -(this.S.x * g + this.S.y * h);
		j = -this.jd * g;
		g = this.dc;
		this.dc = P(0, this.dc + j);
		j = this.dc - g;
		g = -j * this.S.x;
		h = -j * this.S.y;
		a.e.x += a.f * g;
		a.e.y += a.f * h;
		a.g += a.m * (d * h - e * g);
	}
	if (this.af == 2) {
		i = c.e.x + -c.g * b;
		j = c.e.y + c.g * f;
		g = -(this.T.x * i + this.T.y * j);
		j = -this.kd * g;
		g = this.ec;
		this.ec = P(0, this.ec + j);
		j = this.ec - g;
		i = -j * this.T.x;
		j = -j * this.T.y;
		c.e.x += c.f * i;
		c.e.y += c.f * j;
		c.g += c.m * (f * j - b * i);
	}
};
Be.prototype.rb = function() {
	var a = this.k, c = this.h, b, d = this.Ua.c.x + this.Ab.x, e = this.Ua.c.y
			+ this.Ab.y, f = this.Ua.c.x + this.Bb.x, g = this.Ua.c.y
			+ this.Bb.y, h, i, j, k, m, n, o, u = 0;
	b = a.d;
	h = b.a.x * this.i.x + b.b.x * this.i.y;
	i = b.a.y * this.i.x + b.b.y * this.i.y;
	b = c.d;
	j = b.a.x * this.j.x + b.b.x * this.j.y;
	b = b.a.y * this.j.x + b.b.y * this.j.y;
	k = a.c.x + h;
	m = a.c.y + i;
	n = c.c.x + j;
	o = c.c.y + b;
	this.S.l(k - d, m - e);
	this.T.l(n - f, o - g);
	k = T(this.S);
	m = T(this.T);
	k > 0.15 ? Sc(this.S, 1 / k) : this.S.oa();
	m > 0.15 ? Sc(this.T, 1 / m) : this.T.oa();
	k = this.bd - k - this.Z * m;
	u = P(u, Math.abs(k));
	k = Q(k, -6, 6);
	o = -this.Zd * k;
	k = -o * this.S.x;
	m = -o * this.S.y;
	n = -this.Z * o * this.T.x;
	o = -this.Z * o * this.T.y;
	a.c.x += a.f * k;
	a.c.y += a.f * m;
	a.o += a.m * (h * m - i * k);
	c.c.x += c.f * n;
	c.c.y += c.f * o;
	c.o += c.m * (j * o - b * n);
	a.d.l(a.o);
	c.d.l(c.o);
	if (this.$e == 2) {
		b = a.d;
		h = b.a.x * this.i.x + b.b.x * this.i.y;
		i = b.a.y * this.i.x + b.b.y * this.i.y;
		k = a.c.x + h;
		m = a.c.y + i;
		this.S.l(k - d, m - e);
		k = T(this.S);
		if (k > 0.15) {
			this.S.x *= 1 / k;
			this.S.y *= 1 / k;
		} else
			this.S.oa();
		k = this.dg - k;
		u = P(u, -k);
		k = Q(k + 0.15, -6, 0);
		o = -this.jd * k;
		d = this.Wd;
		this.Wd = P(0, this.Wd + o);
		o = this.Wd - d;
		k = -o * this.S.x;
		m = -o * this.S.y;
		a.c.x += a.f * k;
		a.c.y += a.f * m;
		a.o += a.m * (h * m - i * k);
		a.d.l(a.o);
	}
	if (this.af == 2) {
		b = c.d;
		j = b.a.x * this.j.x + b.b.x * this.j.y;
		b = b.a.y * this.j.x + b.b.y * this.j.y;
		n = c.c.x + j;
		o = c.c.y + b;
		this.T.l(n - f, o - g);
		m = T(this.T);
		if (m > 0.15) {
			this.T.x *= 1 / m;
			this.T.y *= 1 / m;
		} else
			this.T.oa();
		k = this.eg - m;
		u = P(u, -k);
		k = Q(k + 0.15, -6, 0);
		o = -this.kd * k;
		d = this.Xd;
		this.Xd = P(0, this.Xd + o);
		o = this.Xd - d;
		n = -o * this.T.x;
		o = -o * this.T.y;
		c.c.x += c.f * n;
		c.c.y += c.f * o;
		c.o += c.m * (j * o - b * n);
		c.d.l(c.o);
	}
	return u < 0.15;
};
var Ce = 30;
function De(a) {
	this.s = new W;
	this.t = new W;
	this.xa = a.type;
	this.r = this.N = q;
	this.k = a.Za;
	this.h = a.$a;
	this.xb = a.vc;
	this.nb = s;
	this.q = a.L;
	this.Ab = new O;
	this.Bb = new O;
	this.i = new O;
	this.j = new O;
	this.W = new we;
	this.Hc = this.hc = this.Gc = this.gc = q;
	var c, b;
	this.nh = a.Hd.k;
	this.k = a.Hd.h;
	if (a.Hd.xa == 1) {
		this.gc = a.Hd;
		S(this.Ab, this.gc.i);
		S(this.i, this.gc.j);
		c = ue(this.gc);
	} else {
		this.Gc = a.Hd;
		S(this.Ab, this.Gc.i);
		S(this.i, this.Gc.j);
		c = ye(this.Gc);
	}
	this.oh = a.Id.k;
	this.h = a.Id.h;
	if (a.Id.xa == 1) {
		this.hc = a.Id;
		S(this.Bb, this.hc.i);
		S(this.j, this.hc.j);
		b = ue(this.hc);
	} else {
		this.Hc = a.Id;
		S(this.Bb, this.Hc.i);
		S(this.j, this.Hc.j);
		b = ye(this.Hc);
	}
	this.Z = a.Ch;
	this.bd = c + this.Z * b;
	this.X = 0;
}
Ib(De.prototype, se.prototype);
De.prototype.Nb = function() {
	var a = this.nh, c = this.oh, b = this.k, d = this.h, e, f, g, h = 0;
	this.W.oa();
	if (this.gc) {
		this.W.ba = -1;
		h += b.m;
	} else {
		g = a.d;
		e = this.Gc.va;
		a = g.a.x * e.x + g.b.x * e.y;
		e = g.a.y * e.x + g.b.y * e.y;
		g = b.d;
		f = g.a.x * this.i.x + g.b.x * this.i.y;
		g = g.a.y * this.i.x + g.b.y * this.i.y;
		f = f * e - g * a;
		this.W.O.l(-a, -e);
		this.W.ba = -f;
		h += b.f + b.m * f * f;
	}
	if (this.hc) {
		this.W.ca = -this.Z;
		h += this.Z * this.Z * d.m;
	} else {
		g = c.d;
		e = this.Hc.va;
		a = g.a.x * e.x + g.b.x * e.y;
		e = g.a.y * e.x + g.b.y * e.y;
		g = d.d;
		f = g.a.x * this.j.x + g.b.x * this.j.y;
		g = g.a.y * this.j.x + g.b.y * this.j.y;
		f = f * e - g * a;
		this.W.P.l(-this.Z * a, -this.Z * e);
		this.W.ca = -this.Z * f;
		h += this.Z * this.Z * (d.f + d.m * f * f);
	}
	this.Ma = 1 / h;
	b.e.x += b.f * this.X * this.W.O.x;
	b.e.y += b.f * this.X * this.W.O.y;
	b.g += b.m * this.X * this.W.ba;
	d.e.x += d.f * this.X * this.W.P.x;
	d.e.y += d.f * this.X * this.W.P.y;
	d.g += d.m * this.X * this.W.ca;
};
De.prototype.sb = function() {
	var a = this.k, c = this.h, b = -this.Ma * this.W.xd(a.e, a.g, c.e, c.g);
	this.X += b;
	a.e.x += a.f * b * this.W.O.x;
	a.e.y += a.f * b * this.W.O.y;
	a.g += a.m * b * this.W.ba;
	c.e.x += c.f * b * this.W.P.x;
	c.e.y += c.f * b * this.W.P.y;
	c.g += c.m * b * this.W.ca;
};
De.prototype.rb = function() {
	var a = this.k, c = this.h, b = -this.Ma
			* (this.bd - ((this.gc ? ue(this.gc) : ye(this.Gc)) + this.Z
					* (this.hc ? ue(this.hc) : ye(this.Hc))));
	a.c.x += a.f * b * this.W.O.x;
	a.c.y += a.f * b * this.W.O.y;
	a.o += a.m * b * this.W.ba;
	c.c.x += c.f * b * this.W.P.x;
	c.c.y += c.f * b * this.W.P.y;
	c.o += c.m * b * this.W.ca;
	a.d.l(a.o);
	c.d.l(c.o);
	return p;
};
function Ee(a, c, b) {
	this.$d = new Wc;
	this.zc = new Cd(this);
	this.bg = q;
	this.Hh = Hd;
	this.cb = this.$ = this.vb = q;
	this.Cb = this.$b = this.La = 0;
	this.Rd = q;
	this.jh = b;
	this.mh = c;
	this.zc.J = this;
	this.Ta = new Ud(a, this.zc);
	this.ph = Fe(this, new Ge);
	this.Vf = [];
	this.sg = s;
}
function Fe(a, c) {
	var b = new he(c, a);
	b.N = q;
	if (b.r = a.vb)
		a.vb.N = b;
	a.vb = b;
	++a.La;
	return b;
}
function He(a, c) {
	if (!(c.A & 32)) {
		if (c.N)
			c.N.r = c.r;
		if (c.r)
			c.r.N = c.N;
		if (c == a.vb)
			a.vb = c.r;
		c.A |= 32;
		--a.La;
		c.N = q;
		c.r = a.Rd;
		a.Rd = c;
	}
}
function Ie(a) {
	a.zc.Ye = p;
	for ( var c = a.Rd; c;) {
		var b = c;
		c = c.r;
		for ( var d = b.cb; d;) {
			var e = d;
			d = d.next;
			var f = a;
			e = e.Xc;
			var g = e.xb;
			if (e.N)
				e.N.r = e.r;
			if (e.r)
				e.r.N = e.N;
			if (e == f.cb)
				f.cb = e.r;
			var h = e.k, i = e.h;
			Gd(h);
			Gd(i);
			if (e.s.u)
				e.s.u.next = e.s.next;
			if (e.s.next)
				e.s.next.u = e.s.u;
			if (e.s == h.cb)
				h.cb = e.s.next;
			e.s.u = q;
			e.s.next = q;
			if (e.t.u)
				e.t.u.next = e.t.next;
			if (e.t.next)
				e.t.next.u = e.t.u;
			if (e.t == i.cb)
				i.cb = e.t.next;
			e.t.u = q;
			e.t.next = q;
			--f.Cb;
			if (g == s)
				for (e = (h.nd < i.nd ? h : i).jc; e; e = e.r)
					e.oe(f.Ta);
		}
		for (b = b.jc; b;) {
			d = b;
			b = b.r;
			d.aa != 65535 && d.p.J.Ta.qc(d.aa);
		}
	}
	a.Rd = q;
	a.zc.Ye = s;
}
Ee.prototype.Tc = function(a, c, b) {
	var d = [];
	a = this.Ta.Og(a, d, b);
	for (b = 0; b < a; ++b)
		c[b] = d[b];
	return a;
};
var qe = 1, oe = 1;
function Ge() {
	this.Nc = [];
	this.L = q;
	for ( var a = 0; a < 64; a++)
		this.Nc[a] = q;
	this.position = new O(0, 0);
	this.rotation = 0;
	this.ih = new O(0, 0);
	this.Gf = this.Wf = this.we = 0;
	this.bh = p;
	this.Bh = this.hh = s;
}
function Je(a, c) {
	for ( var b = 0; b < 64; ++b)
		if (a.Nc[b] == q) {
			a.Nc[b] = c;
			break;
		}
};
function Ke() {
	this.type = -1;
	this.L = q;
	this.bb = new O(0, 0);
	this.Ne = 0;
	this.mb = 0.2;
	this.Sb = this.qb = 0;
	this.ab = 1;
	this.fb = 65535;
	this.xc = 0;
}
Ke.prototype.ab = 0;
Ke.prototype.fb = 0;
Ke.prototype.xc = 0;
function Le() {
	this.type = -1;
	this.L = q;
	this.bb = new O(0, 0);
	this.Ne = 0;
	this.mb = 0.2;
	this.Sb = this.qb = 0;
	this.ab = 1;
	this.fb = 65535;
	this.xc = 0;
	this.Oc = Array(8);
	this.type = sd;
	for ( var a = this.je = 0; a < 8; a++)
		this.Oc[a] = new O;
}
G(Le, Ke);
function Me(a, c) {
	a.je = c.length;
	for ( var b = 0; b < c.length; b++)
		a.Oc[b].l(c[b][0], c[b][1]);
};
function Ne() {
	this.type = -1;
	this.L = q;
	this.bb = new O(0, 0);
	this.Ne = 0;
	this.mb = 0.2;
	this.Sb = this.qb = 0;
	this.ab = 1;
	this.fb = 65535;
	this.xc = 0;
	this.type = td;
	this.nc = 1;
}
G(Ne, Ke);
function Oe(a, c, b, d, e) {
	H.call(this, c, e);
	this.wd = a;
	this.Hf = b;
	this.If = d;
}
G(Oe, H);
function Pe(a, c) {
	H.call(this, Qe, c);
	this.xe = a;
}
G(Pe, H);
var Qe = "eightball.PocketDropEvent.TYPE";
function Re(a, c, b) {
	this.zh = a;
	this.Re = c;
	this.wh = b;
	this.od = 0;
};
function Se(a, c, b) {
	this.bc = this.Dc = this.Hb = q;
	this.ae = 0;
	this.Cc = p;
	this.wc = this.Wb = q;
	this.Se = 0;
	this.Te = 0.12;
	this.ad = -1;
	this.te = s;
	this.M = {};
	this.$f = new Lc;
	this.Sd = [];
	var d = this, e = gc();
	this.ue = this.Dd = s;
	this.cd = new Image;
	this.cd.onload = function() {
		Te(d);
	};
	this.cd.src = "images/cue.png";
	this.Xf = new Image;
	this.Xf.src = "images/ballvignette.png";
	this.Qe = {};
	for ( var f = 1; f <= 15; f++) {
		var g = new Image;
		g.src = "images/num" + f + ".png";
		this.Qe[f] = g;
	}
	this.Ue = new Image;
	this.Ue.src = "images/bombstamp.png";
	this.wb = a;
	this.yb = c;
	this.gf = b;
	this.Xb = this.wb.getContext("2d");
	this.pa = this.yb.getContext("2d");
	this.ic = this.gf.getContext("2d");
	this.wb.setAttribute("width", Ue * 2 + X * 4);
	this.wb.setAttribute("height", Ve * 2 + X * 4);
	this.gf.setAttribute("width", Ue * 2 + X * 4);
	this.gf.setAttribute("height", Ve * 2 + X * 4);
	this.Ga = new O(Ue + X * 2, Ve + X * 2);
	We(this);
	this.Xb.translate(this.Ga.x, this.Ga.y);
	this.ic.translate(this.Ga.x, this.Ga.y + 6);
	this.fd = s;
	$(this.yb).mousedown(function() {
		if (d.Hb && d.M[0]) {
			d.fd = p;
			d.Dc = d.Hb;
			d.bc = new zc(d.M[0].c.x, d.M[0].c.y, d.Dc.x, d.Dc.y);
			d.dispatchEvent(new H(Xe, d));
		}
	});
	$(this.yb).mouseup(function() {
		d.fd = s;
		if (d.Cc && d.ae > 0.01) {
			Ye(d);
			if (d.bc && d.M[0]) {
				var h = new O(d.bc.vf - d.bc.uf, d.bc.xf - d.bc.wf);
				Uc(h);
				Sc(h, 800 * d.ae + 100);
				d.dispatchEvent(new Oe(T(h), "CUESTICK", -1, -1, d));
				d.ue = p;
				S(d.M[0].e, h);
				Gd(d.M[0]);
			}
			Te(d);
			d.dispatchEvent(new H(Ze, d));
		}
	});
	$(this.yb)
			.mousemove(
					function(h) {
						if (d.Cc) {
							h = new Ac(h.pageX, h.pageY);
							var i = new Ac($(d.wb).offset().left, $(d.wb)
									.offset().top);
							h = h.tf(i);
							d.Hb = h.tf(d.Ga);
							if (d.fd) {
								h = new zc(d.Dc.x, d.Dc.y, d.Hb.x, d.Hb.y);
								i = h.vf - h.uf;
								var j = h.xf - h.wf;
								i = Math.min(Math.sqrt(i * i + j * j), $e);
								j = af(d, d.bc);
								h = af(d, h);
								d.ae = i == 0 ? 0 : i / $e;
								e.info("Allowed Angle Range: "
										+ Math.round(j - 90) + " to "
										+ Math.round(j + 90));
								e.info("Strike Angle: " + Math.round(h));
								e.info("Strike Power: " + d.ae);
								Te(d, d.Dc, i);
							} else
								Te(d, d.Hb, 0);
						}
					});
	$(this.yb).mouseleave(function() {
		d.Hb = q;
		d.fd = s;
	});
	this.Fb = new Cc(bf);
	I(this.Fb, Ec, this.$g, undefined, this);
	this.Fb.start();
}
G(Se, Bc);
function cf(a) {
	if (a.Fb)
		a.Fb.enabled || a.Fb.start();
}
Se.prototype.pause = function() {
	this.Fb && this.Fb.enabled && this.Fb.stop();
};
function Ye(a) {
	var c = new Cc(50);
	I(c, Ec, function() {
		var b = this.yb;
		ja("display") ? Gc(b, "none", "display") : Eb("display", pa(Gc, b));
		c.Tb();
	}, undefined, a);
	c.start();
	a.Cc = s;
}
function df(a) {
	var c = a.yb;
	ja("display") ? Gc(c, "block", "display") : Eb("display", pa(Gc, c));
	a.Cc = p;
	ef(a);
	Te(a, a.Hb, 0);
}
function Te(a, c, b) {
	if (a.cd != q && a.cd.complete) {
		a.pa.setTransform(1, 0, 0, 1, 0, 0);
		a.pa.clearRect(0, 0, a.yb.width, a.yb.height);
		a.Wb = q;
		if (a.Cc && c && a.M[0]) {
			var d = gf(a, a.M[0].c.x, a.M[0].c.y), e = Math.round(d.x);
			d = Math.round(d.y);
			var f = c.x - a.M[0].c.x, g = a.M[0].c.y - c.y, h = Math
					.atan2(g, f)
					* -1 + Math.PI;
			g = Math.sqrt(Math.pow(Math.abs(a.M[0].c.x - c.x), 2)
					+ Math.pow(g, 2)) / 5;
			f = f / g;
			c = (c.y - a.M[0].c.y) / g;
			a.pa.lineWidth = 2;
			a.pa.fillStyle = a.fd ? a.pa.strokeStyle = hf
					: a.pa.strokeStyle = jf;
			var i, j, k, m;
			if (a.wc == q) {
				var n = gf(a, 0, 0);
				a.wc = new Fc(n.y - 180, n.x + 380, n.y + 180, n.x - 380);
			}
			for (n = 4; n < g; n++) {
				k = e + f * n;
				m = d + c * n;
				if (n % 2 == 0) {
					for ( var o = 1; o < 15; o++)
						if (o in a.M) {
							i = gf(a, a.M[o].c.x, a.M[o].c.y);
							i = Math.sqrt(Math.pow(i.x - k, 2)
									+ Math.pow(i.y - m, 2));
							if (i <= kf + 10) {
								j = p;
								break;
							}
						}
					if (!j
							&& (k < a.wc.left || k > a.wc.right || m < a.wc.top || m > a.wc.bottom))
						j = p;
					if (j)
						break;
					else {
						a.pa.beginPath();
						a.pa.moveTo(k, m);
					}
				} else {
					a.pa.lineTo(k, m);
					a.pa.stroke();
				}
			}
			if (g > 4) {
				a.pa.beginPath();
				a.pa.arc(k, m, 4, 0, 2 * Math.PI, s);
				a.pa.fill();
			}
			a.pa.translate(e, d);
			a.pa.rotate(h);
			a.pa.drawImage(a.cd, lf + b, mf);
		}
	}
}
function gf(a, c, b) {
	if (a.Wb == q) {
		a.Wb = new Ac($(a.wb).offset().left, $(a.wb).offset().top);
		a.Wb.x += a.wb.width / 2;
		a.Wb.y += a.wb.height / 2;
	}
	return {
		x : a.Wb.x + c,
		y : a.Wb.y + b
	};
}
function af(a, c) {
	var b = Math.atan2(c.xf - c.wf, c.uf - c.vf) * -1 * 180 / Math.PI;
	if (b < 0)
		b = 360 - b * -1;
	return b;
}
function We(a) {
	var c = new Vc;
	c.I.l(-1E3, -1E3);
	c.G.l(1E3, 1E3);
	a.J = new Ee(c, new O(0, 0), p);
	c = a.J;
	var b = a.Ga, d = new Ge;
	d.qb = 1;
	d.mb = 1;
	var e, f;
	e = new Le;
	f = [ [ -b.x, -b.y + X * 2.5 ], [ -b.x + X * 2, -b.y + X * 4.5 ],
			[ -b.x + X * 2, b.y - X * 4.5 ], [ -b.x, b.y - X * 2.5 ] ];
	Me(e, f);
	Je(d, e);
	e = new Le;
	f = yc((new N(f)).multiply(nf)).reverse();
	Me(e, f);
	Je(d, e);
	f = [ [ -b.x + X * 2.3, -b.y ], [ -b.x + X * 4.5, -b.y + X * 2 ],
			[ -X * 2.3, -b.y + X * 2 ], [ -X * 1.5, -b.y ] ].reverse();
	e = new Le;
	Me(e, f);
	Je(d, e);
	e = new Le;
	f = yc((new N(f)).multiply(nf)).reverse();
	Me(e, f);
	Je(d, e);
	e = new Le;
	f = yc((new N(f)).multiply(of));
	Me(e, f);
	Je(d, e);
	e = new Le;
	f = yc((new N(f)).multiply(nf)).reverse();
	Me(e, f);
	Je(d, e);
	d.L = [ pf ];
	Fe(c, d);
	c = a.J;
	b = a.Ga;
	d = Array(6);
	e = [ [ b.x - 21, b.y - 21 ] ];
	d[0] = qf(c, e[0][0], e[0][1]);
	e = yc((new N(e)).multiply(nf));
	d[1] = qf(c, e[0][0], e[0][1]);
	e = yc((new N(e)).multiply(of));
	d[2] = qf(c, e[0][0], e[0][1]);
	e = yc((new N(e)).multiply(nf));
	d[3] = qf(c, e[0][0], e[0][1]);
	e[0][0] = 0;
	e[0][1] = b.y - 12;
	d[4] = qf(c, e[0][0], e[0][1]);
	e = yc((new N(e)).multiply(of));
	d[5] = qf(c, e[0][0], e[0][1]);
	a.Dd = p;
	rf(a);
	sf(a);
}
function sf(a) {
	ef(a);
	for ( var c = kf, b = 1, d = 0; d < 5; d++)
		for ( var e = d + 1, f = 0.5 * Ue + d * c * Math.sqrt(3), g = -d * c, h = 0; h < e; h++) {
			a.M[b] = tf(a, b, f, g + h * c * 2);
			b++;
		}
}
function ef(a) {
	a.M[0] || (a.M[0] = tf(a, 0, -0.5 * Ue, 0));
}
function rf(a) {
	Eb(a.M, function(c) {
		He(this.J, c);
	}, a);
	Gb(a.M);
	Ia(a.Sd);
	Ie(a.J);
}
function tf(a, c, b, d) {
	var e = new Ne;
	e.Sb = 5;
	e.nc = kf;
	e.qb = 0.95;
	e.mb = 0.2;
	var f = new Ge;
	Je(f, e);
	f.position.l(b, d);
	f.Wf = 0.018;
	f.Gf = 0.12;
	f.L = [ uf, c, new Ac(kf, kf), new Ac(28 - kf, 28 - kf) ];
	return Fe(a.J, f);
}
function vf(a) {
	var c = a.M[a.ad];
	Eb(a.M, function(b) {
		Rc(b.e, new O(b.c.x - c.c.x, b.c.y - c.c.y));
		Gd(b);
	}, a);
	c.c.l(5E3, 5E3);
	Ye(a);
	delete a.M[a.ad];
}
Se.prototype.$g = function() {
	var a = this.$f, c = qa();
	if (a.Ze > 0) {
		var b = c - a.Ze;
		b /= 1E3;
		a.Xe++;
		if (a.kc.length < 10) {
			a.kc.push(b);
			a.pd += b;
			a.De = a.Xe / a.pd;
		} else {
			var d = a.Xe % a.kc.length;
			a.pd -= a.kc[d];
			a.kc[d] = b;
			a.pd += a.kc[d];
			a.De = a.kc.length / a.pd;
		}
	}
	a.Ze = c;
	a = this.J;
	c = 1 / 30;
	var e, f;
	a.$d.Oa = c;
	a.$d.Le = 1;
	a.$d.Ke = c > 0 ? 1 / c : 0;
	a.hg = 0;
	b = a.zc;
	for (d = b.J.$; d != q;) {
		var g = d;
		d = d.r;
		g.A & 2 && Fd(b, g);
	}
	Ie(a);
	var h;
	for (b = a.zc.J.$; b != q; b = b.r)
		if (!((b.B.p.A & je) == je && (b.C.p.A & je) == je)) {
			d = b.Aa;
			b.Qc();
			g = b.Aa;
			if (d == 0 && g > 0) {
				d = b.B.p;
				g = b.C.p;
				h = b.s;
				e = b.t;
				h.Fa = b;
				h.Ba = g;
				h.u = q;
				h.next = d.$;
				if (h.next != q)
					h.next.u = b.s;
				d.$ = b.s;
				e.Fa = b;
				e.Ba = d;
				e.u = q;
				e.next = g.$;
				if (e.next != q)
					e.next.u = e;
				g.$ = e;
			} else if (d > 0 && g == 0) {
				d = b.B.p;
				g = b.C.p;
				h = b.s;
				e = b.t;
				if (h.u)
					h.u.next = h.next;
				if (h.next)
					h.next.u = h.u;
				if (h == d.$)
					d.$ = h.next;
				h.u = q;
				h.next = q;
				if (e.u)
					e.u.next = e.next;
				if (e.next)
					e.next.u = e.u;
				if (e == g.$)
					g.$ = e.next;
				e.u = q;
				e.next = q;
			}
		}
	b = new pe(a.La, a.$b, a.Cb, a.Rh);
	for (e = a.vb; e != q; e = e.r)
		e.A &= -5;
	for (d = a.$; d != q; d = d.r)
		d.A &= -2;
	for (d = a.cb; d != q; d = d.r)
		d.nb = s;
	d = Array(a.La);
	for (g = 0; g < a.La; g++)
		d[g] = q;
	for (g = a.vb; g != q; g = g.r)
		if (!(g.A & (Dd | 4 | je | ke))) {
			h = b;
			h.La = 0;
			h.$b = 0;
			h = h.Cb = 0;
			d[h++] = g;
			for (g.A |= 4; h > 0;) {
				f = e = d[--h];
				b.ub[b.La++] = f;
				e.A &= ~je;
				if (!(e.A & Dd)) {
					for ( var i = e.$; i != q; i = i.next)
						if (!(i.Fa.A & 1)) {
							f = i.Fa;
							b.We[b.$b++] = f;
							i.Fa.A |= 1;
							f = i.Ba;
							if (!(f.A & 4)) {
								d[h++] = f;
								f.A |= 4;
							}
						}
					for (e = e.cb; e != q; e = e.next)
						if (e.Xc.nb != p) {
							f = e.Xc;
							b.hd[b.Cb++] = f;
							e.Xc.nb = p;
							f = e.Ba;
							if (!(f.A & 4)) {
								d[h++] = f;
								f.A |= 4;
							}
						}
				}
			}
			b.qe(a.$d, a.mh);
			a.hg = P(a.hg, re);
			if (a.jh) {
				h = a;
				e = b;
				f = c;
				i = 0;
				var j = void 0, k = Number.MAX_VALUE, m = ed * ed;
				for (i = 0; i < e.La; ++i) {
					j = e.ub[i];
					if (j.f != 0) {
						if ((j.A & ie) == 0)
							k = j.Jc = 0;
						if ((j.A & ie) == 0 || j.g * j.g > m
								|| Mc(j.e, j.e) > 0.09)
							k = j.Jc = 0;
						else {
							j.Jc += f;
							k = k < j.Jc ? k : j.Jc;
						}
					}
				}
				if (k >= 0.5) {
					for (i = 0; i < e.La; ++i) {
						j = e.ub[i];
						j.A |= je;
					}
					e = p;
				} else
					e = s;
				h.sg = e;
			}
			for (h = 0; h < b.La; ++h) {
				e = b.ub[h];
				if (e.A & Dd)
					e.A &= -5;
				if ((e.A & ke) == ke && a.bg)
					if (a.bg.Fh(e) == 1) {
						He(a, e);
						b.ub[h] = q;
					}
			}
		}
	a.Vf = a.Ta.Pc();
	if (this.M[this.ad] || !this.J.sg) {
		this.Xb.clearRect(-this.Ga.x, -this.Ga.y, 2 * this.Ga.x, 2 * this.Ga.y);
		this.ic.clearRect(-this.Ga.x, -this.Ga.y - 6, 2 * this.Ga.x,
				2 * this.Ga.y);
		wf(this);
		xf(this, this.J.Vf);
		yf(this);
	}
};
function xf(a, c) {
	var b = 0, d = 0, e = -1, f = -1, g = 0;
	Ha(c, function(j) {
		var k = q, m = q;
		if (j.B.p.q == zf) {
			k = j.B.p;
			m = j.C.p;
		} else if (j.C.p.q == zf) {
			k = j.C.p;
			m = j.B.p;
		}
		if (k != q) {
			k = k;
			m = m;
			He(a.J, m);
			var n = m.q[1];
			delete a.M[n];
			a.Sd.push(new Re(n, m.c, k.c));
			a.dispatchEvent(new Pe(n, a));
		}
		k = [ j.B.p.q[0], j.C.p.q[0] ];
		Da(k.length != q);
		Fa.sort.call(k, Ma);
		if (k[0] == uf) {
			e = j.B.p.q[1];
			if (k[1] == uf) {
				d++;
				f = j.C.p.q[1];
				g += T(j.B.p.e);
				g += T(j.C.p.e);
			} else if (k[1] == pf) {
				b++;
				g += T(j.B.p.e);
				g += T(j.C.p.e);
			}
		}
	});
	var h = b > 0 || d > 0 ? g / (2 * (d + b)) : 0;
	if (d > 0) {
		var i = "BALL";
		if (a.Dd) {
			i = "BREAK";
			a.Dd = s;
		} else if (a.ue) {
			i = "CUEBALL";
			a.ue = s;
		}
		a.dispatchEvent(new Oe(h, i, e, f, a));
	}
	b > 0 && a.dispatchEvent(new Oe(h, "WALL", e, f, a));
}
function wf(a) {
	for (Ha(a.Sd, a.Tg, a); Ka(a.Sd, function(d) {
		return d.od >= 5;
	});)
		;
	for ( var c = a.J.vb; c; c = c.r) {
		var b = c.q;
		if (b)
			switch (b[0]) {
			case uf:
				Af(a, c);
			}
	}
}
Se.prototype.Tg = function(a) {
	a.od++;
	if (a.od >= 5)
		a.Re.l(5E3, 5E3);
	else {
		var c = a.wh.yd(), b = a.Re;
		c.x -= b.x;
		c.y -= b.y;
		Sc(c, a.od / 5);
		Rc(c, a.Re);
		var d;
		b = Bf[a.zh];
		a: {
			var e = b.match(Jc);
			if (e) {
				d = Number(e[1]);
				var f = Number(e[2]);
				e = Number(e[3]);
				if (d >= 0 && d <= 255 && f >= 0 && f <= 255 && e >= 0
						&& e <= 255) {
					d = [ d, f, e ];
					break a;
				}
			}
			d = [];
		}
		if (!d.length)
			l(Error(b + " is not a valid RGB color"));
		d = d;
		a = a.od / 5;
		b = [ 0, 0, 0 ];
		f = a;
		f = Math.min(Math.max(f, 0), 1);
		d = [ Math.round(f * b[0] + (1 - f) * d[0]),
				Math.round(f * b[1] + (1 - f) * d[1]),
				Math.round(f * b[2] + (1 - f) * d[2]) ];
		b = this.Xb;
		e = d[0];
		f = d[1];
		d = d[2];
		e = Number(e);
		f = Number(f);
		d = Number(d);
		if (isNaN(e) || e < 0 || e > 255 || isNaN(f) || f < 0 || f > 255
				|| isNaN(d) || d < 0 || d > 255)
			l(Error('"(' + e + "," + f + "," + d
					+ '") is not a valid RGB color'));
		e = Kc(e.toString(16));
		f = Kc(f.toString(16));
		d = Kc(d.toString(16));
		b.fillStyle = "#" + e + f + d;
		this.Xb.beginPath();
		this.Xb.arc(c.x, c.y, kf * (1 - 0.5 * a), 0, 2 * Math.PI, s);
		this.Xb.fill();
	}
};
function Af(a, c) {
	var b = c.jc, d = a.Xb, e = c.q[1], f = a.ad == e;
	d.fillStyle = f ? a.te ? "rgba(237,218,193,0.5)" : Cf : Bf[e];
	d.beginPath();
	d.arc(b.c.x, b.c.y, b.n, 0, 2 * Math.PI, s);
	d.fill();
	if (e > 0) {
		var g = new Ac(0, 0), h = new Ac(0, 0);
		d.save();
		d.beginPath();
		d.arc(b.c.x, b.c.y, b.n, 0, Math.PI * 2, p);
		d.clip();
		c.q[2].x += c.e.x * 0.03;
		c.q[2].y += c.e.y * 0.03;
		var i = b.n - c.q[2].x, j = b.n - c.q[2].y, k = Math.sqrt(Math
				.pow(i, 2)
				+ Math.pow(j, 2));
		i = Math.atan2(j, i);
		if (k > b.n * 3) {
			c.q[2].x = c.q[3].x;
			c.q[2].y = c.q[3].y;
		}
		g.x = c.c.x + c.q[2].x - b.n;
		g.y = c.c.y + c.q[2].y - b.n;
		c.q[3].x = c.q[2].x + Math.sin(Math.PI * 2.5 - i) * b.n * 2.7;
		c.q[3].y = c.q[2].y + Math.cos(Math.PI * 2.5 - i) * b.n * 2.7;
		h.x = c.c.x + c.q[3].x - b.n;
		h.y = c.c.y + c.q[3].y - b.n;
		if (!f && e > 8) {
			d.fillStyle = Bf[0];
			j = new Ac(0, 0);
			var m = new Ac(0, 0), n = new Ac(0, 0), o = new Ac(0, 0);
			j.x = c.q[2].x + Math.sin(Math.PI * -0.7 - i) * b.n + c.c.x - b.n;
			j.y = c.q[2].y + Math.cos(Math.PI * -0.7 - i) * b.n + c.c.y - b.n;
			m.x = c.q[2].x + Math.sin(Math.PI * -0.7 - i) * b.n * 2 + c.c.x
					- b.n;
			m.y = c.q[2].y + Math.cos(Math.PI * -0.7 - i) * b.n * 2 + c.c.y
					- b.n;
			n.x = c.q[3].x + Math.sin(Math.PI * 0.7 - i) * b.n * 2 + c.c.x
					- b.n;
			n.y = c.q[3].y + Math.cos(Math.PI * 0.7 - i) * b.n * 2 + c.c.y
					- b.n;
			o.x = c.q[3].x + Math.sin(Math.PI * 0.7 - i) * b.n + c.c.x - b.n;
			o.y = c.q[3].y + Math.cos(Math.PI * 0.7 - i) * b.n + c.c.y - b.n;
			d.beginPath();
			d.moveTo(j.x, j.y);
			d.lineTo(m.x, m.y);
			d.lineTo(n.x, n.y);
			d.lineTo(o.x, o.y);
			d.fill();
			j.x = c.q[2].x + Math.sin(Math.PI * -0.3 - i) * b.n + c.c.x - b.n;
			j.y = c.q[2].y + Math.cos(Math.PI * -0.3 - i) * b.n + c.c.y - b.n;
			m.x = c.q[2].x + Math.sin(Math.PI * -0.3 - i) * b.n * 2 + c.c.x
					- b.n;
			m.y = c.q[2].y + Math.cos(Math.PI * -0.3 - i) * b.n * 2 + c.c.y
					- b.n;
			n.x = c.q[3].x + Math.sin(Math.PI * 0.3 - i) * b.n * 2 + c.c.x
					- b.n;
			n.y = c.q[3].y + Math.cos(Math.PI * 0.3 - i) * b.n * 2 + c.c.y
					- b.n;
			o.x = c.q[3].x + Math.sin(Math.PI * 0.3 - i) * b.n + c.c.x - b.n;
			o.y = c.q[3].y + Math.cos(Math.PI * 0.3 - i) * b.n + c.c.y - b.n;
			d.beginPath();
			d.moveTo(j.x, j.y);
			d.lineTo(m.x, m.y);
			d.lineTo(n.x, n.y);
			d.lineTo(o.x, o.y);
			d.fill();
		}
		if (f) {
			d.drawImage(a.Ue, g.x - 6, g.y - 6);
			k > b.n && d.drawImage(a.Ue, h.x - 6, h.y - 6);
		} else {
			d.drawImage(a.Qe[e], g.x - 4, g.y - 4);
			k > b.n && d.drawImage(a.Qe[e], h.x - 4, h.y - 4);
		}
		d.restore();
	}
	d.drawImage(a.Xf, b.c.x - b.n - 2, b.c.y - b.n - 2);
	if (f) {
		a.Se += a.Te;
		d = a.ic.createRadialGradient(b.c.x, b.c.y, 0, b.c.x, b.c.y, 32);
		d.addColorStop(0.2, "rgba(255,234,136," + Math.abs(Math.sin(a.Se))
				+ ")");
		d.addColorStop(0.8, "rgba(255,234,136,0.0)");
		a.ic.fillStyle = d;
		a.ic.beginPath();
		a.ic.arc(b.c.x, b.c.y, 32, 0, 2 * Math.PI, s);
		a.ic.fill();
	}
}
function Df(a, c) {
	a.te = s;
	a.ad = c;
	a.Se = 0;
	a.Te = 0.12;
}
function yf(a) {
	var c = 0, b = 0, d = Fb(a.M);
	Eb(a.M, function(e) {
		var f = T(e.e);
		if (f == 0) {
			b++;
			c++;
		} else if (f < 10) {
			S(e.e, new O);
			b++;
			c++;
		} else
			f < 20 && c++;
	}, a);
	if (!a.Cc)
		if (b == d || c == d && a.M[0] && T(a.M[0].e) == 0) {
			a.dispatchEvent(new H(Ef, a));
			df(a);
		}
}
function qf(a, c, b) {
	var d = new Ne;
	d.nc = 7;
	var e = new Ge;
	Je(e, d);
	e.position.l(c, b);
	e.L = [ zf ];
	return Fe(a, e);
}
var pf = "table", zf = "pocket", uf = "ball", Ef = "cueStopped", Xe = "CUESTICK_HIT_START", Ze = "CUESTICK_HIT_STOP", jf = "rgb(232,208,176)", Cf = "rgb(40,37,29)", hf = "rgb(178,55,17)", Bf = {
	1 : "rgb(250,164,25)",
	9 : "rgb(250,164,25)",
	2 : "rgb(35,45,101)",
	10 : "rgb(35,45,101)",
	3 : "rgb(192,66,57)",
	11 : "rgb(192,66,57)",
	4 : "rgb(80,46,67)",
	12 : "rgb(80,46,67)",
	5 : "rgb(236,89,37)",
	13 : "rgb(236,89,37)",
	6 : "rgb(48,65,37)",
	14 : "rgb(48,65,37)",
	7 : "rgb(117,36,32)",
	15 : "rgb(117,36,32)",
	8 : "rgb(34,34,34)",
	0 : jf
}, nf = new N([ [ -1, 0 ], [ 0, 1 ] ]), of = new N([ [ -1, 0 ], [ 0, -1 ] ]), bf = 1E3 / 60, $e = 175, mf = -15, lf = 7, Ve = 192, Ue = 396, kf = 14, X = 10;
var Ff = /\s*;\s*/;
function Gf(a, c, b, d, e) {
	if (/[;=\s]/.test(a))
		l(Error('Invalid cookie name "' + a + '"'));
	if (/[;\r\n]/.test(c))
		l(Error('Invalid cookie value "' + c + '"'));
	b !== undefined || (b = -1);
	e = e ? ";domain=" + e : "";
	d = d ? ";path=" + d : "";
	b = b < 0 ? "" : b == 0 ? ";expires="
			+ (new Date(1970, 1, 1)).toUTCString() : ";expires="
			+ (new Date(qa() + b * 1E3)).toUTCString();
	document.cookie = a + "=" + c + e + d + b;
}
function Hf(a, c) {
	for ( var b = a + "=", d = (document.cookie || "").split(Ff), e = 0, f; f = d[e]; e++)
		if (f.indexOf(b) == 0)
			return f.substr(b.length);
	return c;
};
function If(a) {
	this.Qa = q;
	this.uh = a;
	Hf(Jf, Kf) == Kf && Lf(this);
}
function Lf(a) {
	Mf(a);
	a.Qa = document.createElement("audio");
	a.Qa.setAttribute("src", a.uh);
	a.Qa.setAttribute("loop", "loop");
	a.Qa.play();
	document.body.appendChild(a.Qa);
	Gf(Jf, Kf, 31536E4);
}
function Mf(a) {
	if (a.Qa) {
		a.Qa.pause();
		a.Qa.parentNode.removeChild(a.Qa);
		a.Qa = q;
	}
}
var Jf = "eightball.Music.musicOn", Kf = "on";
function Y(a, c) {
	this.Qd = [];
	this.vh = c;
	this.dd = 0;
	this.rh = navigator.userAgent.toLowerCase().indexOf("webkit") > -1;
	for ( var b = 0; b <= c; b++) {
		var d = document.createElement("audio");
		document.body.appendChild(d);
		this.Qd[b] = d;
		this.Qd[b].location = a;
		d = d;
		d.setAttribute("src", a);
		d.load();
	}
}
Y.prototype.play = function() {
	this.dd++;
	if (this.dd >= this.vh)
		this.dd = 0;
	var a = this.Qd[this.dd];
	if (this.rh) {
		a.setAttribute("src", this.Qd[this.dd].location);
		a.load();
	}
	a.play();
	return a;
};
function Nf() {
	this.jg = [];
	this.gd = Hf(Of, Pf) == Pf;
}
Nf.prototype.add = function(a, c) {
	this.jg[a] = c;
};
Nf.prototype.play = function(a) {
	if (this.gd)
		return this.jg[a].play();
};
var Of = "eightball.SoundEffectManager.soundOn", Pf = "on";
function Qf(a) {
	this.Mb = q;
	this.Yd = a;
	this.Zf = s;
	I(this.Yd, Qe, this.Yg, undefined, this);
	I(a, "BALL", this.ve, undefined, this);
	I(a, "CUEBALL", this.ve, undefined, this);
	I(a, "BREAK", this.ve, undefined, this);
	this.reset();
}
G(Qf, Bc);
t = Qf.prototype;
t.reset = function() {
	if (this.Mb) {
		this.Mb.Tb();
		this.Xa = Rf;
	}
	this.ye = Sf + 2;
	this.Uc = this.Zf ? 1 : Math.floor(Math.random() * 15) + 1;
	this.Cd = this.se = s;
	var a = this.Yd;
	a.Dd = p;
	rf(a);
	sf(a);
	cf(this.Yd);
	Df(this.Yd, -1);
	this.Xa = Rf;
	Z(this, Tf);
	this.Mc = 0;
	Z(this, Uf);
	this.Ed = Hf(Vf, "500");
	Z(this, Wf);
	this.Vb = Xf;
	Z(this, Yf);
};
t.start = function() {
	if (this.Mb) {
		this.Mb.Tb();
		this.Xa = Rf;
		Z(this, Tf);
	}
	this.Mb = new Cc(1E3);
	this.Mb.start();
	I(this.Mb, Ec, this.ah, undefined, this);
	this.Vb = Zf;
};
function $f(a) {
	if (a.Vb == Zf) {
		a.Vb = ag;
		Z(a, bg);
	} else if (a.Vb == ag) {
		a.Vb = Zf;
		Z(a, cg);
	}
}
t.ah = function() {
	if (this.Vb == Zf) {
		this.Xa--;
		if (this.Cd) {
			this.ye--;
			Z(this, dg);
			if (this.ye <= 0) {
				this.Xa -= 30;
				if (this.Xa < 10)
					this.Xa = 10;
				Z(this, eg);
				this.Cd = s;
			}
		}
		if (this.Xa <= 0) {
			this.Xa = 0;
			Z(this, Tf);
			this.Mb.stop();
			this.Vb = fg;
			Z(this, gg);
		} else
			Z(this, Tf);
	}
};
function Z(a, c) {
	a.dispatchEvent(new H(c, a));
}
t.Yg = function(a) {
	if (a.xe != 0) {
		gc().info("Pocket drop: " + a.xe);
		this.Mc += 100;
		Z(this, Uf);
		if (this.Mc > this.Ed) {
			this.Ed = this.Mc;
			Gf(Vf, this.Ed, 7776E3);
			Z(this, Wf);
		}
	}
	if (this.se && a.xe == this.Uc) {
		this.Cd = s;
		this.Xa += 30;
		Z(this, hg);
	}
};
t.ve = function(a) {
	if (!this.se)
		if (a.Hf == 0 && a.If == this.Uc || a.If == 0 && a.Hf == this.Uc) {
			this.Cd = this.se = p;
			Z(this, ig);
		}
};
var Xf = "ready", Zf = "started", ag = "paused", fg = "ended", Yf = "ready", bg = "pause", cg = "resume", gg = "end", Tf = "tick", Uf = "score", Wf = "highscore", ig = "bombactivated", dg = "bombtick", hg = "bombdeactivated", eg = "bombexploded", Rf = 120, Sf = 30, Vf = "eightball.Game.highScore";
function jg() {
	var a = Ra();
	return a && a.indexOf("Mac") != -1;
}
function kg(a) {
	function c() {
		h.gd ? $("#soundsbuttonon").fadeIn(200) : $("#soundsbuttonon").fadeOut(
				200);
	}
	function b() {
		g.Qa != q ? $("#musicbuttonon").fadeIn(200) : $("#musicbuttonon")
				.fadeOut(200);
	}
	function d() {
		var r = $(window).width(), w = $(window).height(), L = F;
		L.pa.canvas.width = r;
		L.pa.canvas.height = w;
		Te(L);
	}
	function e() {
		n.fadeIn(1E3);
		$("#bombicon").hide();
		$("#bombsecondstens").hide();
		$("#bombsecondsones").hide();
		$("#boom").hide();
		var r = 0;
		o
				.delay(800)
				.fadeIn(
						400,
						function() {
							if (!da) {
								ea = h.play("typing");
								var w = setInterval(
										function() {
											u
													.html("Mission #1146<br/>To: Agent 008<br/>From: Cue<br/><br/><br/>The International Billiards Tournament is being infil- trated by the terrorist organization CHALK.<br/><br/>Do not let them win! Sink as  many balls as possible before the timer runs out."
															.substr(0, r));
											r++;
											if (r > 247) {
												clearInterval(w);
												ea && ea.pause();
											}
										}, 10);
							}
						});
	}
	function f(r) {
		K = r;
		var w = r % 60, L = Math.floor(w / 10);
		w = w % 10;
		i.html(Math.floor(r / 60));
		j.html(L);
		k.html(w);
		r = 1 + Math.floor((r - 1) / 4);
		if (r != E) {
			E = r;
			m.width(Math.min(7 * r, 210));
		}
	}
	jg() && $("#timers .digit").css("line-height", "62px");
	$("#vignette").delay(500).fadeIn(1E3);
	$("#game").delay(500).fadeIn(1E3);
	$("#gamecontrolsdisplay").delay(500).fadeIn(1E3, function() {
		b();
		c();
	});
	$("#gamecontrolsclick").delay(500).fadeIn(1E3);
	$("#cue_canvas").delay(500).fadeIn(1E3);
	var g = new If("sounds/theme.mp4"), h = new Nf;
	h.add("break", new Y("sounds/break.mp3", 1));
	h.add("cuestick", new Y("sounds/cuestick.mp3", 1));
	h.add("ball", new Y("sounds/clack.mp3", 5));
	h.add("quietball", new Y("sounds/clackquiet.mp3", 2));
	h.add("wall", new Y("sounds/wall.mp3", 3));
	h.add("quietwall", new Y("sounds/wallquiet.mp3", 2));
	h.add("cuehit", new Y("sounds/cuehit.mp3", 1));
	h.add("pocket", new Y("sounds/pocket.mp3", 2));
	h.add("typing", new Y("sounds/typing.mp3", 1));
	h.add("activate", new Y("sounds/activate.mp3", 1));
	h.add("deactivate", new Y("sounds/deactivate.mp3", 1));
	h.add("bombtickslow", new Y("sounds/bombtickslow.mp3", 1));
	h.add("bombtick", new Y("sounds/bombtick.mp3", 1));
	h.add("bombtickfast", new Y("sounds/bombtickfast.mp3", 1));
	h.add("explode", new Y("sounds/explode.mp3", 1));
	window.$h = h;
	var i = $("#minutesremaining"), j = $("#secondsremainingtens"), k = $("#secondsremainingones"), m = $("#progress"), n = $("#overlay"), o = $("#start"), u = $("#startmessage"), x = $("#pauseclick"), v = $("#resume"), D = $("#gameover"), B = $("#startoverclick"), z = $("canvas#demo_canvas")[0], C = $("canvas#cue_canvas")[0], R = $("canvas#shadow_canvas")[0], E = 29, M = s, K = 0, U = s, da = s, ea = q;
	if (a)
		e = function() {
			y.start();
		};
	D.click(function() {
		D.fadeOut(400);
		y.reset();
	});
	B.click(function() {
		y.reset();
	});
	o
			.click(function() {
				o.fadeOut(100);
				n.fadeOut(400);
				y.start();
				da = p;
				ea && ea.pause();
				u
						.html("Mission #1146<br/>To: Agent 008<br/>From: Cue<br/><br/><br/>The International Billiards Tournament is being infil- trated by the terrorist organization CHALK.<br/><br/>Do not let them win! Sink as  many balls as possible before the timer runs out.");
			});
	x.click(function() {
		$f(y);
		F.pause();
		n.fadeIn(400);
		v.fadeIn(400);
		if (U = g.Qa != q) {
			Mf(g);
			Gf(Jf, "off", 31536E4);
		}
	});
	v.click(function() {
		n.fadeOut(400);
		v.fadeOut(400, function() {
			$f(y);
			cf(F);
		});
		U && Lf(g);
	});
	$("#gameoverfacebook")
			.click(
					function(r) {
						r.stopPropagation();
						//window
								//.open("http://www.facebook.com/sharer.php?u=http%3A%2F%2Fagent8ball.com&t=I%20just%20scored%20"
										//+ y.Mc
										//+ "%20points%20on%20Agent%20008%20Ball!");
					});
	$("#gameovertwitter")
			.click(
					function(r) {
						r.stopPropagation();
						//window
								//.open("http://twitter.com/home?status=I%20just%20scored%20"
										//+ y.Mc
										//+ "%20points%20on%20Agent008Ball!%20http%3A%2F%2Fagent8ball.com%20%23html5");
					});
	var F = new Se(z, C, R), y = new Qf(F);
	I(y, Tf, function() {
		if (!M) {
			f(y.Xa);
			var r;
			r = new jc("#,###.##");
			var w = F.$f.De;
			if (isNaN(w))
				r = J.Ig;
			else {
				var L = [], Ba = w < 0 || w == 0 && 1 / w < 0;
				L.push(Ba ? r.de : r.pf);
				if (isFinite(w)) {
					w *= Ba ? -1 : 1;
					w *= r.sd;
					if (r.he) {
						w = w;
						if (w == 0) {
							nc(r, w, r.hb, L);
							oc(r, 0, L);
						} else {
							var cb = Math.floor(Math.log(w) / Math.log(10));
							w /= Math.pow(10, cb);
							var ff = r.hb;
							if (r.be > 1 && r.be > r.hb) {
								for (; cb % r.be != 0;) {
									w *= 10;
									cb--;
								}
								ff = 1;
							} else if (r.hb < 1) {
								cb++;
								w /= 10;
							} else {
								cb -= r.hb - 1;
								w *= Math.pow(10, r.hb - 1);
							}
							nc(r, w, ff, L);
							oc(r, cb, L);
						}
					} else
						nc(r, w, r.hb, L);
				} else
					L.push(J.Eg);
				L.push(Ba ? r.lf : r.qf);
				r = L.join("");
			}
			gc().info("FPS: " + r);
		}
	});
	I(y, Uf, function() {
		var r = y.Mc;
		if (r == 0)
			r = "00";
		$("#score").html(r);
		$("#gameoverscore").html(r);
	});
	I(y, Wf, function() {
		$("#bestscore").html(y.Ed);
	});
	I(y, Yf, e);
	I(y, gg, function() {
		n.fadeIn(500);
		D.fadeIn(400);
		F.pause();
	});
	I(y, ig, function() {
		$("#bombicon").fadeIn(200);
		$("#bombsecondstens").fadeIn(200);
		$("#bombsecondsones").fadeIn(200);
		h.play("activate");
		Df(F, y.Uc);
	});
	I(y, dg, function() {
		var r = y.ye % 60;
		if (r > 30)
			r = 30;
		var w = Math.floor(r / 10), L = r % 10;
		$("#bombsecondstens").html(String(w));
		$("#bombsecondsones").html(String(L));
		if (r > 19)
			h.play("bombtickslow");
		else if (r <= 10)
			h.play("bombtickfast");
		else
			r >= 1 && h.play("bombtick");
		if (r == 19 || r == 10)
			F.Te += 0.12;
	});
	I(y, hg, function() {
		h.play("deactivate");
		$("#bombicon").fadeOut(1200);
		$("#bombsecondstens").fadeOut(1200);
		$("#bombsecondsones").fadeOut(1200);
		var r = K, w = setInterval(function() {
			if (r >= y.Xa) {
				clearInterval(w);
				M = s;
			} else {
				r++;
				f(r);
			}
		}, 50);
	});
	I(y, eg, function() {
		h.play("explode");
		F.te = p;
		$("#bombicon").fadeOut(1200);
		$("#bombsecondstens").fadeOut(1200);
		$("#bombsecondsones").fadeOut(1200);
		setTimeout(function() {
			var L, Ba = F.M[y.Uc];
			if (L = Ba ? Ba.c : q) {
				Ba = Math.min(Math.max(L.x + 300, -60), 660);
				L = Math.min(Math.max(L.y + 88, -60), 250);
				vf(F);
				document.getElementById("boom").style.left = Ba + "px";
				document.getElementById("boom").style.top = L + "px";
				$("#boom").show();
			}
		}, 1500);
		M = p;
		var r = K, w = setInterval(function() {
			if (r < y.Xa) {
				clearInterval(w);
				M = s;
			} else {
				r--;
				f(r);
			}
		}, 50);
	});
	I(F, Xe, function() {
		$("#gamecontrolsclick").hide();
	});
	I(F, Ze, function() {
		$("#gamecontrolsclick").show();
	});
	I(F, "CUESTICK", function() {
		h.play("cuestick");
	});
	I(F, "BREAK", function() {
		h.play("break");
	});
	I(F, "CUEBALL", function() {
		h.play("cuehit");
	});
	I(F, "BALL", function(r) {
		gc().info("velocity: " + r.wd);
		if (r.wd > 80)
			h.play("ball");
		else
			r.wd > 20 && h.play("quietball");
	});
	I(F, "WALL", function(r) {
		if (r.wd > 120)
			h.play("wall");
		else
			r.wd > 40 && h.play("quietwall");
	});
	I(F, Qe, function() {
		h.play("pocket");
	});
	y.reset();
	$(window).resize(d);
	d();
	$(window).keypress(function(r) {
		r.which == 114 && y.reset();
	});
	$(window).keypress(function(r) {
		if (r.which == 98) {
			y.Zf = p;
			y.reset();
		}
	});
	$("#instructionsclick").click(function() {
		$f(y);
		F.pause();
		n.fadeIn(500);
		$("#howtoplay").fadeIn(200);
		$("#cue_canvas").fadeOut(200);
	});
	$("#howtoplay").click(function() {
		$f(y);
		cf(F);
		n.fadeOut(200);
		$("#howtoplay").fadeOut(200);
		$("#cue_canvas").fadeIn(200);
	});
	$("#musicbuttonclick").click(function() {
		if (g.Qa != q) {
			Mf(g);
			Gf(Jf, "off", 31536E4);
		} else
			Lf(g);
		b();
	});
	$("#soundsbuttonclick").click(function() {
		h.gd = !h.gd;
		h.gd ? Gf(Of, Pf) : Gf(Of, "off");
		c();
	});
	b();
	c();
	$(".soundtest").click(function() {
		h.play(this.id);
	});
}
var lg = "loadApp".split("."), mg = A;
!(lg[0] in mg) && mg.execScript && mg.execScript("var " + lg[0]);
for ( var ng; lg.length && (ng = lg.shift());)
	if (!lg.length && kg !== undefined)
		mg[ng] = kg;
	else
		mg = mg[ng] ? mg[ng] : mg[ng] = {};
$(document).ready(
		function() {
			function a(e) {
				$("#loadingpg").width(237 * e);
			}
			function c() {
				$("#loadingbg").delay(500).fadeOut(700, loadApp);
			}
			$("body").each(function() {
				this.onselectstart = ca(s);
				this.unselectable = "on";
				jQuery(this).css("-moz-user-select", "none");
				jQuery(this).css("-webkit-user-select", "none");
			});
			var b = [ "images/ballvignette.png", "images/bestscore.png",
					"images/bombicon.png", "images/bombstamp.png",
					"images/boom.png", "images/cue.png",
					"images/gamefacebook.png", "images/gamefacebookover.png",
					"images/gameover.png", "images/gametwitter.png",
					"images/gametwitterover.png", "images/howtoplay.png",
					"images/instructions.png", "images/letter.png",
					"images/lightoff.png", "images/lighton.png",
					"images/loading.jpg", "images/loadingbg.png",
					"images/num1.png", "images/num10.png", "images/num11.png",
					"images/num12.png", "images/num13.png", "images/num14.png",
					"images/num15.png", "images/num2.png", "images/num3.png",
					"images/num4.png", "images/num5.png", "images/num6.png",
					"images/num7.png", "images/num8.png", "images/num9.png",
					"images/pause.png", "images/pixellab.png",
					"images/pixellabover.png", "images/progressbg.png",
					"images/progressunit.png", "images/score.png",
					"images/smalllogo.png", "images/speaker.png",
					"images/start.png", "images/startover.png",
					"images/startoverlay.png", "images/suspended.png",
					"images/table.jpg", "images/tableborder.png",
					"images/timerbg.png", "images/timeremaining.png",
					"images/transparent.png", "images/triangle.png",
					"images/vignette.png", "images/wood.jpg" ], d = [
					"sounds/theme.mp4", "sounds/typing.mp3" ];
			$("#loadingbg").delay(500).fadeIn(700);
			setTimeout(function() {
				new Ub(b, d, a, c);
			}, 1500);
		});