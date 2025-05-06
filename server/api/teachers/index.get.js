import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data } = await client.from("teacher").select("id, name")
    console.log(data)
    return data
})