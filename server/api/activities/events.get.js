import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { data, error } = await client
    .from('events')
    .select('*,events_teachers(id,teachers(id,name,alias,role,description))')
  return data
})