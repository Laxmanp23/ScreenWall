export const loadUnsplaceWall = async () => {
    try {
      const response = await fetch('https://niketgroup.in/api/get_wallpapers.php');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error loading wallpapers:', error);
      throw error;
    }
  };