// Update in your api.ts file
export const submitContactForm = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      // This will use the correct URL in both dev and production
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? '' 
        : 'http://localhost:3000';
      
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  };