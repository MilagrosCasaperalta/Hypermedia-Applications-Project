import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

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
    ),
      types (
        id,
        name,
        alias,
        description
      )
    `)
    return data
})