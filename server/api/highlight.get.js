import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { data } = await client
    .from('highlights')
    .select('id,ads,courses(id,name,alias,location,schedule,description)')
  return data;
});