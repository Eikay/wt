

(function( $ ){

	$.fn.rebindDynamic = function() {

		var that = this;
			
		return $(this).each(function(){
			return $(this).clickable().on('click', function(){
				var target = $(this).attr('data-target');
				var args   = $(this).attr('data-target-args');

				App.load( target, JSON.parse( args ), 'swap-left');

				return this;
			});
		});
	};

})( $ );

(function( $ ){

	$.fn.keypadDisplay = function( char, memo ) {

		var that = this;

		return $(this).each(function(){

			keypadDisplay( char, this );

			return this;
		});

		function evaluatekeypadInput( currentValue, input ) {
			if (input.toUpperCase() == 'C') {
				return currentValue.substring( 0, currentValue.length - 1 );
			}

			else if (input.toUpperCase() == 'A') {
				return '';
			}

			else 
				return currentValue + '' + input;
		}

		function keypadDisplay( char, led ) {
			
			var display = memo('display') || '';

			display = evaluatekeypadInput( display, char );
			memo( 'display', display );

			$(led).val( display );
			// $(led).val(formatDisplay( display ));
		}

		function stringReverse( str ) {
			return str.split('').reverse().join('');
		}

		function formatDisplay( led ) {
			// just ref
			reduce = Array.prototype.reduce;

			// make sure it is a string 
			led = stringReverse(led + '');

			var counter = 0;

			return stringReverse(reduce.call( led, function( memo, c ){

				memo += c;

				if (++counter % 3 == 0) {
					memo += ',';
				}

				return memo;

			}, ''));
		}
	}

})( $ );

(function( App ){

	App.createMemo = function( init ) {

		var pool = init || {};
		
		return function( key, value ) {
			if (key == void(0))
				return pool;

			else if (key != void(0) && value == void(0)) 
				return pool[ key ];

			else
				return pool[ key ] = value;
		};	
	}
	
})( App );

(function( App ){

	var storage = window.localStorage;

	App.storage = function( key, value ) {

		if (key != void(0) && value == void(0)) 
			return JSON.parse(storage.getItem( key ));

		else
			storage.setItem( key, JSON.stringify( value ));

	};

})( App );

(function( App ){
	
	var items = App.storage( "orderItems" ) || {};

	var order = {

		getItem: function( id ) {
			return items[ id ];
		},

		all: function() {
			return items;
		},

		setItem: function( id, count ) {
			id = parseInt( id );
			items[ id ] = parseInt( count );
			App.storage( "orderItems", items );
		},

		addItem: function( id, count ) {
			id = parseInt( id );

			if (items[ id ] == void(0)) 
				items[ id ] = 0;

			items[ id ] += parseInt( count );
			App.storage( "orderItems", items );
		},

		removeItem: function( id, count ) {
			delete items[ id ];
			App.storage( "orderItems", items );
		},
	};	

	App.order = order;

})( App );