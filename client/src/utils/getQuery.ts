export const getQuery = (query: string) =>{
    const queries = query.slice(1).split('&')
    return {session: queries[0], name: queries[1]}
}