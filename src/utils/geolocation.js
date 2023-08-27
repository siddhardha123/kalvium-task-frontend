export const getCurrentGeolocation = async () => {
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return { latitude, longitude };
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error('Geolocation is not available in this browser.');
    }
  };
  
  