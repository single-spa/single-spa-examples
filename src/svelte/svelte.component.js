import { showFrameworkObservable, getBorder } from 'common/colored-border.js';

var template = (function () {
return {
	onrender () {
		this.subscription = showFrameworkObservable.subscribe(
			newValue => this.set({frameworkInspector: newValue})
		);
	},

	onteardown () {
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

function renderMainFragment ( root, component ) {
	var ifBlock_anchor = createComment( "#if frameworkInspector" );
	
	function getBlock ( root ) {
		if ( root.frameworkInspector ) return renderIfBlock_0;
		return null;
	}
	
	var currentBlock = getBlock( root );
	var ifBlock = currentBlock && currentBlock( root, component );
	
	var text = createText( "\n\n" );
	var ifBlock1_anchor = createComment( "#if !frameworkInspector" );
	
	function getBlock1 ( root ) {
		if ( !root.frameworkInspector ) return renderIfBlock1_0;
		return null;
	}
	
	var currentBlock1 = getBlock1( root );
	var ifBlock1 = currentBlock1 && currentBlock1( root, component );

	return {
		mount: function ( target, anchor ) {
			insertNode( ifBlock_anchor, target, anchor );
			if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			insertNode( text, target, anchor );
			insertNode( ifBlock1_anchor, target, anchor );
			if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
		},
		
		update: function ( changed, root ) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock( root );
			if ( _currentBlock === currentBlock && ifBlock) {
				ifBlock.update( changed, root );
			} else {
				if ( ifBlock ) ifBlock.teardown( true );
				ifBlock = currentBlock && currentBlock( root, component );
				if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			}
			
			var _currentBlock1 = currentBlock1;
			currentBlock1 = getBlock1( root );
			if ( _currentBlock1 === currentBlock1 && ifBlock1) {
				ifBlock1.update( changed, root );
			} else {
				if ( ifBlock1 ) ifBlock1.teardown( true );
				ifBlock1 = currentBlock1 && currentBlock1( root, component );
				if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
			}
		},
		
		teardown: function ( detach ) {
			if ( ifBlock ) ifBlock.teardown( detach );
			if ( ifBlock1 ) ifBlock1.teardown( detach );
			
			if ( detach ) {
				detachNode( ifBlock_anchor );
				detachNode( text );
				detachNode( ifBlock1_anchor );
			}
		}
	};
}

function renderIfBlock1_0 ( root, component ) {
	var h1 = createElement( 'h1' );
	
	appendNode( createText( "Hello " ), h1 );
	var text1 = createText( root.world );
	appendNode( text1, h1 );
	appendNode( createText( "!" ), h1 );

	return {
		mount: function ( target, anchor ) {
			insertNode( h1, target, anchor );
		},
		
		update: function ( changed, root ) {
			text1.data = root.world;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( h1 );
			}
		}
	};
}

function renderIfBlock_0 ( root, component ) {
	var div = createElement( 'div' );
	div.style.cssText = "border: " + ( root.border );
	
	var span = createElement( 'span' );
	
	appendNode( span, div );
	appendNode( createText( "(Built with Svelte)" ), span );
	appendNode( createText( "\n\t" ), div );
	
	var h1 = createElement( 'h1' );
	
	appendNode( h1, div );
	appendNode( createText( "Hello " ), h1 );
	var text3 = createText( root.world );
	appendNode( text3, h1 );
	appendNode( createText( "!" ), h1 );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			div.style.cssText = "border: " + ( root.border );
			
			text3.data = root.world;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function Svelte ( options ) {
	options = options || {};
	
	this._state = Object.assign( template.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	if ( options._root ) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call( this );
	}
}

Svelte.prototype.get = function get( key ) {
 	return key ? this._state[ key ] : this._state;
 };

Svelte.prototype.fire = function fire( eventName, data ) {
 	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
 	if ( !handlers ) return;
 
 	for ( var i = 0; i < handlers.length; i += 1 ) {
 		handlers[i].call( this, data );
 	}
 };

Svelte.prototype.observe = function observe( key, callback, options ) {
 	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;
 
 	( group[ key ] || ( group[ key ] = [] ) ).push( callback );
 
 	if ( !options || options.init !== false ) {
 		callback.__calling = true;
 		callback.call( this, this._state[ key ] );
 		callback.__calling = false;
 	}
 
 	return {
 		cancel: function () {
 			var index = group[ key ].indexOf( callback );
 			if ( ~index ) group[ key ].splice( index, 1 );
 		}
 	};
 };

Svelte.prototype.on = function on( eventName, handler ) {
 	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
 	handlers.push( handler );
 
 	return {
 		cancel: function () {
 			var index = handlers.indexOf( handler );
 			if ( ~index ) handlers.splice( index, 1 );
 		}
 	};
 };

Svelte.prototype.set = function set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Svelte.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );
template.onteardown.call( this );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

function dispatchObservers( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function createElement( name ) {
	return document.createElement( name );
}

function detachNode( node ) {
	node.parentNode.removeChild( node );
}

function insertNode( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function appendNode( node, target ) {
	target.appendChild( node );
}

function createText( data ) {
	return document.createTextNode( data );
}

function createComment( data ) {
	return document.createComment( data );
}

export default Svelte;