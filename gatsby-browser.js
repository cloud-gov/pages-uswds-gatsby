module.exports = {
	onClientEntry: () => {
		try {
		  require('uswds_polyfills');
		} catch (e) {
		  // do nothing
		}
	}
};