export default function handler(req, res) {
	res.status(200).json({
		text: 'hello',
		req: JSON.stringify(req.headers, null, 4),
	});
}
