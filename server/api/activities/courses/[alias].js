import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const alias = event.context.params.alias
  const { data } = await client
    .from('courses')
    .select('*,courses_teachers(id,teachers(id,name,alias,role,description))')
    .eq('alias', alias)
    .single()
  return data
})
