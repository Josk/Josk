export const resolvePath = (path) => {
    if (!path) return path
    if (typeof path !== 'string') return null
    if (path.startsWith('http')) return path

    const baseUrl = import.meta.env.BASE_URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path

    return `${baseUrl}${cleanPath}`
}
