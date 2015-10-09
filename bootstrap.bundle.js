System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.to-string", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-integer", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.defined", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.string-at", ["npm:core-js@1.1.4/library/modules/$.to-integer", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.library", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.global", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var UNDEFINED = 'undefined';
  var global = module.exports = typeof window != UNDEFINED && window.Math == Math ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.core", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.def", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      core = require("npm:core-js@1.1.4/library/modules/$.core"),
      PROTOTYPE = 'prototype';
  var ctx = function(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var $def = function(type, name, source) {
    var key,
        own,
        out,
        exp,
        isGlobal = type & $def.G,
        isProto = type & $def.P,
        target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
        exports = isGlobal ? core : core[name] || (core[name] = {});
    if (isGlobal)
      source = name;
    for (key in source) {
      own = !(type & $def.F) && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      if (isGlobal && typeof target[key] != 'function')
        exp = source[key];
      else if (type & $def.B && own)
        exp = ctx(out, global);
      else if (type & $def.W && target[key] == out)
        !function(C) {
          exp = function(param) {
            return this instanceof C ? new C(param) : C(param);
          };
          exp[PROTOTYPE] = C[PROTOTYPE];
        }(out);
      else
        exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
      exports[key] = exp;
      if (isProto)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $def.F = 1;
  $def.G = 2;
  $def.S = 4;
  $def.P = 8;
  $def.B = 16;
  $def.W = 32;
  module.exports = $def;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.property-desc", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.fails", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.support-desc", ["npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.hide", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      createDesc = require("npm:core-js@1.1.4/library/modules/$.property-desc");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.support-desc") ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.redef", ["npm:core-js@1.1.4/library/modules/$.hide"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.hide");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.has", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.shared", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.uid", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.wks", ["npm:core-js@1.1.4/library/modules/$.shared", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.uid"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = require("npm:core-js@1.1.4/library/modules/$.shared")('wks'),
      Symbol = require("npm:core-js@1.1.4/library/modules/$.global").Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || require("npm:core-js@1.1.4/library/modules/$.uid"))('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iterators", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.tag", ["npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var has = require("npm:core-js@1.1.4/library/modules/$.has"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      hide(it, TAG, tag);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-create", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      IteratorPrototype = {};
  require("npm:core-js@1.1.4/library/modules/$.hide")(IteratorPrototype, require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: require("npm:core-js@1.1.4/library/modules/$.property-desc")(1, next)});
    require("npm:core-js@1.1.4/library/modules/$.tag")(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-define", ["npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.redef", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.iter-create", "npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
      $def = require("npm:core-js@1.1.4/library/modules/$.def"),
      $redef = require("npm:core-js@1.1.4/library/modules/$.redef"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      has = require("npm:core-js@1.1.4/library/modules/$.has"),
      SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
    require("npm:core-js@1.1.4/library/modules/$.iter-create")(Constructor, NAME, next);
    var createMethod = function(kind) {
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        proto = Base.prototype,
        _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        _default = _native || createMethod(DEFAULT),
        methods,
        key;
    if (_native) {
      var IteratorPrototype = require("npm:core-js@1.1.4/library/modules/$").getProto(_default.call(new Base));
      require("npm:core-js@1.1.4/library/modules/$.tag")(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
    }
    if (!LIBRARY || FORCE)
      hide(proto, SYMBOL_ITERATOR, _default);
    Iterators[NAME] = _default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        keys: IS_SET ? _default : createMethod(KEYS),
        values: DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if (FORCE)
        for (key in methods) {
          if (!(key in proto))
            $redef(proto, key, methods[key]);
        }
      else
        $def($def.P + $def.F * BUGGY, NAME, methods);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.string.iterator", ["npm:core-js@1.1.4/library/modules/$.string-at", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $at = require("npm:core-js@1.1.4/library/modules/$.string-at")(true);
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.unscope", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-step", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.cof", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iobject", ["npm:core-js@1.1.4/library/modules/$.cof"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof");
  module.exports = 0 in Object('z') ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-iobject", ["npm:core-js@1.1.4/library/modules/$.iobject", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = require("npm:core-js@1.1.4/library/modules/$.iobject"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.array.iterator", ["npm:core-js@1.1.4/library/modules/$.unscope", "npm:core-js@1.1.4/library/modules/$.iter-step", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var setUnscope = require("npm:core-js@1.1.4/library/modules/$.unscope"),
      step = require("npm:core-js@1.1.4/library/modules/$.iter-step"),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject");
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/web.dom.iterable", ["npm:core-js@1.1.4/library/modules/es6.array.iterator", "npm:core-js@1.1.4/library/modules/$.iterators"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.array.iterator");
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.a-function", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.ctx", ["npm:core-js@1.1.4/library/modules/$.a-function"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function");
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.classof", ["npm:core-js@1.1.4/library/modules/$.cof", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-object", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.an-object", ["npm:core-js@1.1.4/library/modules/$.is-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object");
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.strict-new", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-call", ["npm:core-js@1.1.4/library/modules/$.an-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-array-iter", ["npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator');
  module.exports = function(it) {
    return (Iterators.Array || Array.prototype[ITERATOR]) === it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-length", ["npm:core-js@1.1.4/library/modules/$.to-integer"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.get-iterator-method", ["npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.for-of", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.iter-call", "npm:core-js@1.1.4/library/modules/$.is-array-iter", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.to-length", "npm:core-js@1.1.4/library/modules/core.get-iterator-method"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
      call = require("npm:core-js@1.1.4/library/modules/$.iter-call"),
      isArrayIter = require("npm:core-js@1.1.4/library/modules/$.is-array-iter"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      toLength = require("npm:core-js@1.1.4/library/modules/$.to-length"),
      getIterFn = require("npm:core-js@1.1.4/library/modules/core.get-iterator-method");
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.set-proto", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.ctx"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = require("npm:core-js@1.1.4/library/modules/$").getDesc,
      isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(buggy, set) {
      try {
        set = require("npm:core-js@1.1.4/library/modules/$.ctx")(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set({}, []);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }() : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.same", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.species", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species');
  module.exports = function(C) {
    if (require("npm:core-js@1.1.4/library/modules/$.support-desc") && !(SPECIES in C))
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.invoke", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.html", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.global").document && document.documentElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.dom-create", ["npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      document = require("npm:core-js@1.1.4/library/modules/$.global").document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2/browser", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2", ["npm:process@0.11.2/browser"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.11.2/browser");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index", ["npm:process@0.11.2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.11.2");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2", ["github:jspm/nodelibs-process@0.1.2/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.2/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.task", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.invoke", "npm:core-js@1.1.4/library/modules/$.html", "npm:core-js@1.1.4/library/modules/$.dom-create", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        invoke = require("npm:core-js@1.1.4/library/modules/$.invoke"),
        html = require("npm:core-js@1.1.4/library/modules/$.html"),
        cel = require("npm:core-js@1.1.4/library/modules/$.dom-create"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if (require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScript) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })(require("github:jspm/nodelibs-process@0.1.2"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.microtask", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.task", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = require("npm:core-js@1.1.4/library/modules/$.global"),
        macrotask = require("npm:core-js@1.1.4/library/modules/$.task").set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        isNode = require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        if (domain)
          domain.enter();
        head.fn.call();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })(require("github:jspm/nodelibs-process@0.1.2"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.mix", ["npm:core-js@1.1.4/library/modules/$.redef"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $redef = require("npm:core-js@1.1.4/library/modules/$.redef");
  module.exports = function(target, src) {
    for (var key in src)
      $redef(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-detect", ["npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec) {
    if (!SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[SYMBOL_ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[SYMBOL_ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.promise", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.a-function", "npm:core-js@1.1.4/library/modules/$.strict-new", "npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.set-proto", "npm:core-js@1.1.4/library/modules/$.same", "npm:core-js@1.1.4/library/modules/$.species", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.uid", "npm:core-js@1.1.4/library/modules/$.microtask", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.mix", "npm:core-js@1.1.4/library/modules/$.tag", "npm:core-js@1.1.4/library/modules/$.core", "npm:core-js@1.1.4/library/modules/$.iter-detect", "github:jspm/nodelibs-process@0.1.2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = require("npm:core-js@1.1.4/library/modules/$"),
        LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
        $def = require("npm:core-js@1.1.4/library/modules/$.def"),
        isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
        anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
        aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function"),
        strictNew = require("npm:core-js@1.1.4/library/modules/$.strict-new"),
        forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
        setProto = require("npm:core-js@1.1.4/library/modules/$.set-proto").set,
        same = require("npm:core-js@1.1.4/library/modules/$.same"),
        species = require("npm:core-js@1.1.4/library/modules/$.species"),
        SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species'),
        RECORD = require("npm:core-js@1.1.4/library/modules/$.uid")('record'),
        asap = require("npm:core-js@1.1.4/library/modules/$.microtask"),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var useNative = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && require("npm:core-js@1.1.4/library/modules/$.support-desc")) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var isPromise = function(it) {
      return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
    };
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(react) {
          var cb = ok ? react.ok : react.fail,
              ret,
              then;
          try {
            if (cb) {
              if (!ok)
                record.h = true;
              ret = cb === true ? value : cb(value);
              if (ret === react.P) {
                react.rej(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(ret)) {
                then.call(ret, react.res, react.rej);
              } else
                react.res(ret);
            } else
              react.rej(value);
          } catch (err) {
            react.rej(err);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            if (isUnhandled(record.p)) {
              if (isNode) {
                process.emit('unhandledRejection', value, record.p);
              } else if (global.console && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise[RECORD],
          chain = record.a || record.c,
          i = 0,
          react;
      if (record.h)
        return false;
      while (chain.length > i) {
        react = chain[i++];
        if (react.fail || !isUnhandled(react.P))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!useNative) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        this[RECORD] = record;
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      require("npm:core-js@1.1.4/library/modules/$.mix")(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var S = anObject(anObject(this).constructor)[SPECIES];
          var react = {
            ok: typeof onFulfilled == 'function' ? onFulfilled : true,
            fail: typeof onRejected == 'function' ? onRejected : false
          };
          var promise = react.P = new (S != undefined ? S : P)(function(res, rej) {
            react.res = aFunction(res);
            react.rej = aFunction(rej);
          });
          var record = this[RECORD];
          record.c.push(react);
          if (record.a)
            record.a.push(react);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
    require("npm:core-js@1.1.4/library/modules/$.tag")(P, PROMISE);
    species(P);
    species(Wrapper = require("npm:core-js@1.1.4/library/modules/$.core")[PROMISE]);
    $def($def.S + $def.F * !useNative, PROMISE, {reject: function reject(r) {
        return new this(function(res, rej) {
          rej(r);
        });
      }});
    $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function(res) {
          res(x);
        });
      }});
    $def($def.S + $def.F * !(useNative && require("npm:core-js@1.1.4/library/modules/$.iter-detect")(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            values = [];
        return new C(function(res, rej) {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              C.resolve(promise).then(function(value) {
                results[index] = value;
                --remaining || res(results);
              }, rej);
            });
          else
            res(results);
        });
      },
      race: function race(iterable) {
        var C = getConstructor(this);
        return new C(function(res, rej) {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(res, rej);
          });
        });
      }
    });
  })(require("github:jspm/nodelibs-process@0.1.2"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/promise", ["npm:core-js@1.1.4/library/modules/es6.object.to-string", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.promise", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.to-string");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.promise");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Promise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.24/core-js/promise", ["npm:core-js@1.1.4/library/fn/promise"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/promise"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.register('npm:single-spa@latest/src/single-spa', ['npm:babel-runtime@5.8.24/core-js/promise'], function (_export) {
    var _Promise, appLocationToApp, unhandledRouteHandlers, mountedApp, nativeAddEventListener, urlLoader, nativeSystemGlobal, requiredLifeCycleFuncs;

    function declareChildApplication(appLocation, activeWhen) {
        if (typeof appLocation !== 'string' || appLocation.length === 0) throw new Error('The first argument must be a non-empty string \'appLocation\'');
        if (typeof activeWhen !== 'function') throw new Error('The second argument must be a function \'activeWhen\'');
        if (appLocationToApp[appLocation]) throw new Error('There is already an app declared at location ' + appLocation);

        appLocationToApp[appLocation] = {
            appLocation: appLocation,
            activeWhen: activeWhen,
            parentApp: mountedApp ? mountedApp.appLocation : null
        };

        triggerAppChange();
    }

    function addUnhandledRouteHandler(handler) {
        if (typeof handler !== 'function') {
            throw new Error('The first argument must be a handler function');
        }
        unhandledRouteHandlers.push(handler);
    }

    function updateApplicationSourceCode(appName) {
        if (!appLocationToApp[appName]) {
            throw new Error('No such app \'' + appName + '\'');
        }
        var app = appLocationToApp[appName];
        app.lifecycleFunctions.activeApplicationSourceWillUpdate().then(function (resolve) {
            //TODO reload the app
            resolve();
        }).then(app.lifecycleFunctions.activeApplicationSourceWasUpdated);
    }

    function callLifecycleFunction(app, funcName) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        return new _Promise(function (resolve) {
            callFunc(0);
            function callFunc(i) {
                var _app$lifecycles$i;

                (_app$lifecycles$i = app.lifecycles[i])[funcName].apply(_app$lifecycles$i, args).then(function () {
                    if (i === app.lifecycles.length - 1) {
                        resolve();
                    } else {
                        callFunc(++i);
                    }
                });
            }
        });
    }

    function triggerAppChange() {
        var newApp = appForCurrentURL();
        if (!newApp) {
            unhandledRouteHandlers.forEach(function (handler) {
                handler(mountedApp);
            });
            //nothing to do. Leave the app how it was
            console.warn('No app matches the url ' + window.location.toString() + ', and there are no unhandledRouteHandlers');
            return;
        }

        if (newApp !== mountedApp) {

            (mountedApp ? callLifecycleFunction(mountedApp, 'applicationWillUnmount') : new _Promise(function (resolve) {
                return resolve();
            })).then(function () {
                return cleanupDom();
            }).then(function () {
                return finishUnmountingApp(mountedApp);
            }).then(function () {
                return mountedApp ? callLifecycleFunction(mountedApp, 'applicationWasUnmounted') : new _Promise(function (resolve) {
                    return resolve();
                });
            }).then(function () {
                return newApp.scriptsLoaded ? new _Promise(function (resolve) {
                    return resolve();
                }) : loadAppForFirstTime(newApp.appLocation);
            }).then(function () {
                return callLifecycleFunction(newApp, 'applicationWillMount');
            }).then(function () {
                return appWillBeMounted(newApp);
            }).then(function () {
                return insertDomFrom(newApp);
            }).then(function () {
                return callLifecycleFunction(newApp, 'applicationWasMounted');
            }).then(function () {
                return mountedApp = newApp;
            });
        }
    }

    function cleanupDom() {
        return new _Promise(function (resolve) {
            while (document.head.childNodes.length > 0) {
                document.head.removeChild(document.head.childNodes[0]);
            }
            while (document.body.childNodes.length > 0) {
                document.body.removeChild(document.body.childNodes[0]);
            }
            resolve();
        });
    }

    function insertDomFrom(app) {
        return new _Promise(function (resolve) {
            var deepClone = true;
            var clonedAppDom = app.parsedDom.cloneNode(deepClone);

            for (var i = 0; i < clonedAppDom.attributes.length; i++) {
                var attr = clonedAppDom.attributes[i];
                document.documentElement.setAttribute(attr.name, attr.value);
            }

            var appHead = app.parsedDom.querySelector('head');
            while (appHead.childNodes.length > 0) {
                document.head.appendChild(appHead.childNodes[0]);
            }

            var appBody = app.parsedDom.querySelector('body');
            while (appBody.childNodes.length > 0) {
                document.body.appendChild(appBody.childNodes[0]);
            }

            app.parsedDom = clonedAppDom;
            resolve();
        });
    }

    function loadAppForFirstTime(appLocation) {
        return new _Promise(function (resolve, reject) {
            var currentAppSystemGlobal = window.System;
            window.System = nativeSystemGlobal;
            nativeSystemGlobal['import'](appLocation).then(function (restOfApp) {
                registerApplication(appLocation, restOfApp.publicRoot, restOfApp.pathToIndex, restOfApp.lifecycles);
                var app = appLocationToApp[appLocation];
                window.System = currentAppSystemGlobal;
                callLifecycleFunction(app, 'scriptsWillBeLoaded').then(function () {
                    return loadIndex(app);
                }).then(function () {
                    return callLifecycleFunction(app, 'scriptsWereLoaded');
                }).then(function () {
                    return resolve();
                });
            });
        });
    }

    function loadIndex(app) {
        return new _Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.addEventListener('load', htmlLoaded);
            request.open('GET', window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/' + app.publicRoot + '/' + app.pathToIndex);
            request.send();

            function htmlLoaded() {
                var parser = new DOMParser();
                var dom = parser.parseFromString(this.responseText, 'text/html');
                var isLoadingScript = false;
                var scriptsToBeLoaded = [];

                traverseNode(dom);
                app.parsedDom = dom.documentElement;
                if (app.scriptsLoaded) {
                    setTimeout(function () {
                        resolve();
                    }, 10);
                }

                function traverseNode(node) {
                    for (var i = 0; i < node.childNodes.length; i++) {
                        var child = node.childNodes[i];
                        if (child.tagName === 'SCRIPT') {
                            if (child.getAttribute('src')) {
                                child.setAttribute('src', prependURL(child.getAttribute('src'), app.publicRoot));
                            }
                            //we put the scripts onto the page as part of the scriptsLoaded lifecycle
                            scriptsToBeLoaded.push(child);
                            appendScriptTag();
                        } else if (child.tagName === 'LINK' && child.getAttribute('href')) {
                            child.setAttribute('href', prependURL(child.getAttribute('href'), app.publicRoot));
                        } else if (child.tagName === 'IMG' && child.getAttribute('src')) {
                            child.setAttribute('src', prependURL(child.getAttribute('src'), app.publicRoot));
                        }
                        traverseNode(child);
                    }
                }

                function prependURL(url, prefix) {
                    var parsedURL = document.createElement('a');
                    parsedURL.href = url;
                    var result = parsedURL.protocol + '//' + (parsedURL.hostname + ':' + parsedURL.port + '/' + prefix + '/' + parsedURL.pathname + parsedURL.search + parsedURL.hash).replace(/[\/]+/g, '/');
                    return result;
                }

                function appendScriptTag() {
                    if (isLoadingScript) {
                        return;
                    }
                    if (scriptsToBeLoaded.length === 0) {
                        app.scriptsLoaded = true;
                        if (app.parsedDom) {
                            //loading a script was the last thing we were waiting on
                            setTimeout(function () {
                                resolve();
                            }, 10);
                        }
                        return;
                    }
                    var originalScriptTag = scriptsToBeLoaded.splice(0, 1)[0];
                    //one does not simply append script tags to the dom
                    var scriptTag = document.createElement('script');
                    for (var i = 0; i < originalScriptTag.attributes.length; i++) {
                        scriptTag.setAttribute(originalScriptTag.attributes[i].nodeName, originalScriptTag.getAttribute(originalScriptTag.attributes[i].nodeName));
                    }
                    if (!scriptTag.src) {
                        scriptTag.text = originalScriptTag.text;
                    }
                    isLoadingScript = true;
                    document.head.appendChild(scriptTag);
                    if (scriptTag.src) {
                        scriptTag.onload = function () {
                            isLoadingScript = false;
                            appendScriptTag();
                        };
                    } else {
                        isLoadingScript = false;
                        appendScriptTag();
                    }
                    //normally when you appendChild, the old parent no longer has the child anymore. We have to simulate that since we're not really appending the child
                    originalScriptTag.remove();
                }
            }
        });
    }

    function registerApplication(appLocation, publicRoot, pathToIndex, lifecycles) {
        //validate
        if (typeof publicRoot !== 'string') {
            throw new Error('App ' + appLocation + ' must export a publicRoot string');
        }
        if (typeof pathToIndex !== 'string') {
            throw new Error('App ' + appLocation + ' must export a pathToIndex string');
        }
        if (typeof lifecycles !== 'object' && typeof lifecycles !== 'function') {
            throw new Error('App ' + appLocation + ' must export a \'lifecycles\' object or array of objects');
        }
        if (!Array.isArray(lifecycles)) {
            lifecycles = [lifecycles];
        }

        var _loop = function (i) {
            requiredLifeCycleFuncs.forEach(function (requiredLifeCycleFunc) {
                if (typeof lifecycles[i][requiredLifeCycleFunc] !== 'function') {
                    throw new Error('In app \'' + appLocation + '\', The lifecycle at index ' + i + ' does not have required function ' + requiredLifeCycleFunc);
                }
            });
        };

        for (var i = 0; i < lifecycles.length; i++) {
            _loop(i);
        }

        //register
        var app = appLocationToApp[appLocation];
        app.publicRoot = publicRoot;
        app.pathToIndex = pathToIndex;
        app.hashChangeFunctions = [];
        app.popStateFunctions = [];
        app.lifecycles = lifecycles;
    }

    function appForCurrentURL() {
        var appsForCurrentUrl = [];
        for (var appName in appLocationToApp) {
            var app = appLocationToApp[appName];
            if (app.activeWhen(window.location)) {
                appsForCurrentUrl.push(app);
            }
        }
        switch (appsForCurrentUrl.length) {
            case 0:
                return undefined;
            case 1:
                return appsForCurrentUrl[0];
            default:
                appNames = appsForCurrentUrl.map(function (app) {
                    return app.name;
                });
                throw new Error('The following applications all claim to own the location ' + window.location.href + ' -- ' + appnames.toString());
        }
    }

    function appWillBeMounted(app) {
        return new _Promise(function (resolve) {
            app.hashChangeFunctions.forEach(function (hashChangeFunction) {
                nativeAddEventListener('hashchange', hashChangeFunction);
            });
            app.popStateFunctions.forEach(function (popStateFunction) {
                nativeAddEventListener('popstate', popStateFunction);
            });
            resolve();
        });
    }

    function finishUnmountingApp(app) {
        return new _Promise(function (resolve) {
            if (!app) {
                resolve();
                return;
            }
            app.hashChangeFunctions.forEach(function (hashChangeFunction) {
                window.removeEventListener('hashchange', hashChangeFunction);
            });
            app.popStateFunctions.forEach(function (popStateFunction) {
                window.removeEventListener('popstate', popStateFunction);
            });
            resolve();
        });
    }

    return {
        setters: [function (_npmBabelRuntime5824CoreJsPromise) {
            _Promise = _npmBabelRuntime5824CoreJsPromise['default'];
        }],
        execute: function () {
            /* */
            'use strict';

            _export('declareChildApplication', declareChildApplication);

            _export('addUnhandledRouteHandler', addUnhandledRouteHandler);

            _export('updateApplicationSourceCode', updateApplicationSourceCode);

            appLocationToApp = {};
            unhandledRouteHandlers = [];
            mountedApp = undefined;
            nativeAddEventListener = window.addEventListener;
            urlLoader = new LoaderPolyfill();
            nativeSystemGlobal = window.System;
            requiredLifeCycleFuncs = ['scriptsWillBeLoaded', 'scriptsWereLoaded', 'applicationWillMount', 'applicationWasMounted', 'applicationWillUnmount', 'applicationWasUnmounted', 'activeApplicationSourceWillUpdate', 'activeApplicationSourceWillUpdate'];

            window.singlespa = function (element) {
                window.history.pushState(undefined, '', element.getAttribute('href'));
                setTimeout(function () {
                    triggerAppChange();
                }, 10);
                return false;
            };

            nativeAddEventListener('popstate', triggerAppChange);window.addEventListener = function (name, fn) {
                if (mountedApp) {
                    if (name === 'popstate') {
                        mountedApp.popStateFunctions.push(fn);
                    } else if (name === 'hashchange') {
                        mountedApp.hashChangeFunctions.push(fn);
                    }
                    nativeAddEventListener.apply(this, arguments);
                }
            };
        }
    };
});
System.register("npm:single-spa@latest", ["npm:single-spa@latest/src/single-spa"], function (_export) {
  "use strict";

  return {
    setters: [function (_npmSingleSpaLatestSrcSingleSpa) {
      var _exportObj = {};

      for (var _key in _npmSingleSpaLatestSrcSingleSpa) {
        if (_key !== "default") _exportObj[_key] = _npmSingleSpaLatestSrcSingleSpa[_key];
      }

      _exportObj["default"] = _npmSingleSpaLatestSrcSingleSpa["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('bootstrap.js', ['npm:single-spa@latest'], function (_export) {
  'use strict';

  var declareChildApplication;
  return {
    setters: [function (_npmSingleSpaLatest) {
      declareChildApplication = _npmSingleSpaLatest.declareChildApplication;
    }],
    execute: function () {

      declareChildApplication('/apps/jspm-with-angular-1.3.0/single-spa.config.js', function () {
        return window.location.pathname.startsWith('/legacy');
      });
      declareChildApplication('/apps/jspm-with-angular-1.4.6/single-spa.config.js', function () {
        return window.location.pathname.startsWith('/v2');
      });
      declareChildApplication('/apps/bower-angular-phonecat/single-spa.config.js', function () {
        return window.location.pathname.startsWith('/phonecat');
      });
    }
  };
});
//# sourceMappingURL=bootstrap.bundle.js.map