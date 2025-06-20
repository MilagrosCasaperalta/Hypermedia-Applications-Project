import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data } = await client
    .from('highlights')
    .select(`
      id,
      ads,
      t_id,
      activities (
        name,
        alias,
        start_time
      )
    `)
    return data
})