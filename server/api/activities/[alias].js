import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const alias = event.context.params.alias
const { data: typeData } = await client
  .from('types')
  .select('id')
  .eq('alias', alias)
  .single();

const { data, error } = await client
  .from('activities')
  .select(`
    id,
    name,
    alias,
    location,
    schedule,
    teachers:
    teachers_activities (
      teachers (
        id,
        name,
        alias
      )
    )
  `)
  .eq('type', typeData.id)
    return data
})