import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('highlights')
    .select(`
      id,
      ads,
      activities (
        id,
        name,
        alias,
        location,
        schedule,
        types (
          id,
          name,
          alias,
          description
        ),
        teachers_activities (
          id,
          teachers (
            id,
            name,
            role,
            alias,
            description
          )
        )
      )
    `)
    return data
})