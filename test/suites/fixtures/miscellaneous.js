/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 21:51
 * To change this template use File | Settings | File Templates.
 */

describe( "Random string generator", function(){

	it( "returns a string of specified length", function(){
		var characterLength = 96,
			randomString = purify.fixture.generateRandomString( characterLength );

		expect( randomString.length ).toBe( characterLength );
	} );

} );