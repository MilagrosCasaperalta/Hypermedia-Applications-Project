import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const alias = event.context.params.alias
  const { data, error } = await client
    .from('activities')
    .select(`
      id,
      name,
      alias,
      type,
      location,
      description,
      start_time,
      end_time,
      teachers:
      teachers_activities (
        teachers (
          id,
          name,
          alias
        )
      )
    `)
    .eq('alias', alias).single()
    console.log(data)
    return data
})