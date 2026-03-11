
export const ContactInfoApi = {
    host: "https://api.pranalyticx.com/platform/",
    contactEndpoint: "/api/v1/contact/send",
    sendContactMessage: async (formData) => {
        try {
            const response = await fetch(ContactInfoApi.host + ContactInfoApi.contactEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to send contact message:", error);
            throw error;
        }
    }
};