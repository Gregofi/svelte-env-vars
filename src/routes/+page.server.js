import { env } from "$env/dynamic/private";

if (!env.API_URL) {
  throw new Error('API_URL is not defined in the environment variables');
}

export const load = async ({ }) => {
  console.log('Loading page...');
}
