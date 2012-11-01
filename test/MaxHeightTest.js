describe("Max Height plugin", function() {
    it("returns the height of current div", function() {
		console.log('TESTING THE CONSOLE!!');
		/*:DOC divElement = <div style="height: 100px;"></div>*/
        expect($(this.divElement).maxHeight()).toBe(100);
    });
	
	it('returns the maximum height of multiple divs', function() {
		/*:DOC container = <form>
            <div style="height: 100px"></div>
            <div style="height: 200px"></div>
            <div style="height:  50px"></div>
           </form>
         */
        var divs = $(this.container).children('div');
		expect(200).toBe(divs.maxHeight());
	});
});