// const hello = async () => Promise.resolve("Hello, World!");

exports.handler = async (event, context) => {
	try {
		// const body = await hello();
		return {
			statusCode: 200,
			body: JSON.stringify("Hello, World!"),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: err.toSting(),
		};
	}
};