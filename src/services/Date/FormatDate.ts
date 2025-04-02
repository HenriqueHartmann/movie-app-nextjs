class FormatDate {
    static exec(dateString: string): string {
        const date = new Date(dateString);
    
        if (isNaN(date.getTime())) {
            console.error("Invalid date format:", dateString);
            return dateString;
        }
    
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    }
}

export default FormatDate
