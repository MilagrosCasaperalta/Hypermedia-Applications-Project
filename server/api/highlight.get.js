import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data, error } = await client.from('highlights').select('id,ads,courses(id,name,alias,location,schedule,description)');
  if (error) throw createError({ statusCode: 500, message: error.message });
  return data;
});