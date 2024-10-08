import '@abraham/reflection';
import { json } from '@sveltejs/kit';
import container from '$lib/server/di';
import { IDMARepository } from '$lib/server/applogic/IDMARepository';

export async function GET() {
	return json(await container.resolve<IDMARepository>(IDMARepository.name).getData());
}
