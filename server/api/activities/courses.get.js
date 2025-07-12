import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { data } = await client
    .from('courses')
    .select('*,courses_teachers(id,teachers(id,name,alias,role,description))')
  return data
})