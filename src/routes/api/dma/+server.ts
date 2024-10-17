import '@abraham/reflection';
import { json } from '@sveltejs/kit';
import container from '$lib/server/di';
import { IDMARepository } from '$lib/server/applogic';

export async function GET() {
	return json(await container.resolve<IDMARepository>(IDMARepository.name).getData());
}
