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

function renderMainFragment ( root, component, target ) {
	var ifBlock_0_anchor = document.createComment( "#if frameworkInspector" );
	target.appendChild( ifBlock_0_anchor );
	
	function getBlock_0 ( root ) {
		if ( root.frameworkInspector ) return renderIfBlock_0_0;
		return null;
	}
	
	var currentBlock_0 = getBlock_0( root );
	var ifBlock_0 = currentBlock_0 && currentBlock_0( root, component, target, ifBlock_0_anchor );
	
	var text = document.createTextNode( "\n\n" );
	target.appendChild( text );
	
	var ifBlock_1_anchor = document.createComment( "#if !frameworkInspector" );
	target.appendChild( ifBlock_1_anchor );
	
	function getBlock_1 ( root ) {
		if ( !root.frameworkInspector ) return renderIfBlock_1_0;
		return null;
	}
	
	var currentBlock_1 = getBlock_1( root );
	var ifBlock_1 = currentBlock_1 && currentBlock_1( root, component, target, ifBlock_1_anchor );

	return {
		update: function ( changed, root ) {
			var _currentBlock_0 = currentBlock_0;
			currentBlock_0 = getBlock_0( root );
			if ( _currentBlock_0 === currentBlock_0 && ifBlock_0) {
				ifBlock_0.update( changed, root );
			} else {
				if ( ifBlock_0 ) ifBlock_0.teardown( true );
				ifBlock_0 = currentBlock_0 && currentBlock_0( root, component, target, ifBlock_0_anchor );
			}
			
			var _currentBlock_1 = currentBlock_1;
			currentBlock_1 = getBlock_1( root );
			if ( _currentBlock_1 === currentBlock_1 && ifBlock_1) {
				ifBlock_1.update( changed, root );
			} else {
				if ( ifBlock_1 ) ifBlock_1.teardown( true );
				ifBlock_1 = currentBlock_1 && currentBlock_1( root, component, target, ifBlock_1_anchor );
			}
		},

		teardown: function ( detach ) {
			if ( detach ) ifBlock_0_anchor.parentNode.removeChild( ifBlock_0_anchor );
			
			if ( ifBlock_0 ) ifBlock_0.teardown( detach );
			
			if ( detach ) text.parentNode.removeChild( text );
			
			if ( detach ) ifBlock_1_anchor.parentNode.removeChild( ifBlock_1_anchor );
			
			if ( ifBlock_1 ) ifBlock_1.teardown( detach );
		}
	};
}

function renderIfBlock_1_0 ( root, component, target, anchor ) {
	var h1 = document.createElement( 'h1' );
	
	h1.appendChild( document.createTextNode( "Hello " ) );
	
	var text1 = document.createTextNode( root.world );
	h1.appendChild( text1 );
	
	h1.appendChild( document.createTextNode( "!" ) );
	
	anchor.parentNode.insertBefore( h1, anchor )

	return {
		update: function ( changed, root ) {
			text1.data = root.world;
		},

		teardown: function ( detach ) {
			if ( detach ) h1.parentNode.removeChild( h1 );
		}
	};
}

function renderIfBlock_0_0 ( root, component, target, anchor ) {
	var div = document.createElement( 'div' );
	div.style.cssText = "border: " + ( root.border );
	
	var span = document.createElement( 'span' );
	
	span.appendChild( document.createTextNode( "(Built with Svelte)" ) );
	
	div.appendChild( span )
	
	div.appendChild( document.createTextNode( "\n\t" ) );
	
	var h1 = document.createElement( 'h1' );
	
	h1.appendChild( document.createTextNode( "Hello " ) );
	
	var text3 = document.createTextNode( root.world );
	h1.appendChild( text3 );
	
	h1.appendChild( document.createTextNode( "!" ) );
	
	div.appendChild( h1 )
	
	anchor.parentNode.insertBefore( div, anchor )

	return {
		update: function ( changed, root ) {
			div.style.cssText = "border: " + ( root.border );
			
			text3.data = root.world;
		},

		teardown: function ( detach ) {
			if ( detach ) div.parentNode.removeChild( div );
			
			
			
			
		}
	};
}

function Svelte ( options ) {
	var component = this;
	var state = Object.assign( template.data(), options.data );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
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

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return key ? state[ key ] : state;
	};

	this.set = function set ( newState ) {
		var oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this.observe = function ( key, callback, options ) {
		var group = ( options && options.defer ) ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( !options || options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel: function () {
				var index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		var handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				var index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );
template.onteardown.call( this );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	var mainFragment = renderMainFragment( state, this, options.target );
	
	if ( options.parent ) {
		options.parent.__renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call( this );
	}
}

export default Svelte;