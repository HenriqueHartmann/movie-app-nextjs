class HttpRequest {
    static async get(url: string, options: object = {}): Promise<any> {
        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                throw new Error(`Request error: ${response.status}`)
            }
    
            const data = await response.json()
            
            return data
        } catch (error) {
            console.error("Request error:", error);
            throw error
        }
    }
}

export default HttpRequest
