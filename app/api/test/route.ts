export async function GET(request: Request) {
	const res = { message: 'This is api template' };

	return Response.json({ res });
}
