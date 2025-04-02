class HttpRequest {
    static async get(url: string, options: object = {}): Promise<any> {
        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                let errorBody;
                try {
                    errorBody = await response.json(); // Try parsing JSON
                } catch {
                    errorBody = await response.text(); // Fallback to text if JSON fails
                }

                throw {
                    message: `Request error: ${response.status}`,
                    status: response.status,
                    body: errorBody
                };
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
