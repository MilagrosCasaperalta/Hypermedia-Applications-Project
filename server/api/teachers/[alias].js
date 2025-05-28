import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const id = event.context.params.id
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
          name
        )
      )
    `)
    .eq('alias', id).single()
        return data
})