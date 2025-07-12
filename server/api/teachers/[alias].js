import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const alias = event.context.params.alias
  const { data } = await client
    .from('teachers')
    .select('id,alias,description,role,name')
    .eq('alias', alias)
    .single()
  return data
})
