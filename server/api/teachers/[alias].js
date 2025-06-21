import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const alias = event.context.params.alias
  const { data, error } = await client
    .from('teachers')
    .select(`
      id,
      alias,
      description,
      role,
      name,
      activities:
      teachers_activities (
        activities (
          id,
          name,
          alias,
          start_time
        )
      )
    `)
    .eq('alias', alias).single()


    console.log(data)
        return data
})