import { showFrameworkObservable, getBorder } from 'common/colored-border.js';

var template = (function () {
return {
	oncreate () {
		this.subscription = showFrameworkObservable.subscribe(
			newValue => this.set({frameworkInspector: newValue})
		);
	},

	ondestroy () {
		this.subscription.dispose();
	},

	data () {
		return {
			frameworkInspector: false,
			border: getBorder('svelte'),
		};
	},
};
}());

function create_main_fragment ( state, component ) {
	var text, if_block_1_anchor;

	var if_block = (state.frameworkInspector) && create_if_block( state, component );

	var if_block_1 = (!state.frameworkInspector) && create_if_block_1( state, component );

	return {
		create: function () {
			if ( if_block ) if_block.create();
			text = createText( "\n\n" );
			if ( if_block_1 ) if_block_1.create();
			if_block_1_anchor = createComment();
		},

		mount: function ( target, anchor ) {
			if ( if_block ) if_block.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_1 ) if_block_1.mount( target, anchor );
			insertNode( if_block_1_anchor, target, anchor );
		},

		update: function ( changed, state ) {
			if ( state.frameworkInspector ) {
				if ( if_block ) {
					if_block.update( changed, state );
				} else {
					if_block = create_if_block( state, component );
					if_block.create();
					if_block.mount( text.parentNode, text );
				}
			} else if ( if_block ) {
				if_block.unmount();
				if_block.destroy();
				if_block = null;
			}

			if ( !state.frameworkInspector ) {
				if ( if_block_1 ) {
					if_block_1.update( changed, state );
				} else {
					if_block_1 = create_if_block_1( state, component );
					if_block_1.create();
					if_block_1.mount( if_block_1_anchor.parentNode, if_block_1_anchor );
				}
			} else if ( if_block_1 ) {
				if_block_1.unmount();
				if_block_1.destroy();
				if_block_1 = null;
			}
		},

		unmount: function () {
			if ( if_block ) if_block.unmount();
			detachNode( text );
			if ( if_block_1 ) if_block_1.unmount();
			detachNode( if_block_1_anchor );
		},

		destroy: function () {
			if ( if_block ) if_block.destroy();
			if ( if_block_1 ) if_block_1.destroy();
		}
	};
}

function create_if_block ( state, component ) {
	var div, div_style_value, span, text, text_1, h1, text_2, text_3_value, text_3, text_4;

	return {
		create: function () {
			div = createElement( 'div' );
			span = createElement( 'span' );
			text = createText( "(Built with Svelte)" );
			text_1 = createText( "\n\t" );
			h1 = createElement( 'h1' );
			text_2 = createText( "Hello " );
			text_3 = createText( text_3_value = state.world );
			text_4 = createText( "!" );
			this.hydrate();
		},

		hydrate: function ( nodes ) {
			div.style.cssText = div_style_value = "border: " + ( state.border );
		},

		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
			appendNode( span, div );
			appendNode( text, span );
			appendNode( text_1, div );
			appendNode( h1, div );
			appendNode( text_2, h1 );
			appendNode( text_3, h1 );
			appendNode( text_4, h1 );
		},

		update: function ( changed, state ) {
			if ( div_style_value !== ( div_style_value = "border: " + ( state.border ) ) ) {
				div.style.cssText = div_style_value;
			}

			if ( text_3_value !== ( text_3_value = state.world ) ) {
				text_3.data = text_3_value;
			}
		},

		unmount: function () {
			detachNode( div );
		},

		destroy: noop
	};
}

function create_if_block_1 ( state, component ) {
	var h1, text, text_1_value, text_1, text_2;

	return {
		create: function () {
			h1 = createElement( 'h1' );
			text = createText( "Hello " );
			text_1 = createText( text_1_value = state.world );
			text_2 = createText( "!" );
		},

		mount: function ( target, anchor ) {
			insertNode( h1, target, anchor );
			appendNode( text, h1 );
			appendNode( text_1, h1 );
			appendNode( text_2, h1 );
		},

		update: function ( changed, state ) {
			if ( text_1_value !== ( text_1_value = state.world ) ) {
				text_1.data = text_1_value;
			}
		},

		unmount: function () {
			detachNode( h1 );
		},

		destroy: noop
	};
}

function Svelte ( options ) {
	options = options || {};
	this._state = assign( template.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment( this._state, this );

	if ( options.target ) {
		this._fragment.create();
		this._fragment.mount( options.target, null );
	}

	if ( options._root ) {
		options._root._oncreate.push( template.oncreate.bind( this ) );
	} else {
		template.oncreate.call( this );
	}
}

assign( Svelte.prototype, {
 	get: get,
 	fire: fire,
 	observe: observe,
 	on: on,
 	set: set
 });

Svelte.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = assign( {}, oldState, newState );
	dispatchObservers( this, this._observers.pre, newState, oldState );
	this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Svelte.prototype.teardown = Svelte.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );
	template.ondestroy.call( this );

	if ( detach !== false ) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	callAll(this._root._oncreate);
}

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (differs(newValue, oldValue)) {
			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.pop()();
}

function differs(a, b) {
	return a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

export default Svelte;