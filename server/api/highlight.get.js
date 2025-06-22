import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

const { data, error } = await client
  .from('highlights')
  .select(`
    id,
    ads,
    a_id,
    activities (
      name,
      alias,
      start_time
    )
  `);
console.log(data)
    return data
})