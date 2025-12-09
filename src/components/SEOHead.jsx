import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Get page info based on current route
    const getPageInfo = () => {
      const path = location.pathname;
      
      if (path === '/') {
        return {
          title: title || 'Piyush Giri | Full Stack Developer',
          description: description || 'Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
          keywords: keywords || 'Piyush Giri, Full Stack Developer, React, Node.js, JavaScript'
        };
      }
      
      if (path === '/about') {
        return {
          title: title || 'About - Piyush Giri',
          description: description || 'Learn about Piyush Giri, Full Stack Developer with experience at Efinz and Emveto.',
          keywords: keywords || 'About Piyush Giri, Full Stack Developer, Experience'
        };
      }
      
      if (path === '/projects') {
        return {
          title: title || 'Projects - Piyush Giri',
          description: description || 'Explore projects by Piyush Giri including Zipp, Shrinkr, and CLI Todo app.',
          keywords: keywords || 'Piyush Giri Projects, React Projects, Full Stack Projects'
        };
      }

      if (path === '/skills') {
        return {
          title: title || 'Skills - Piyush Giri',
          description: description || 'Technical skills: React, Node.js, MongoDB, JavaScript, TypeScript, and more.',
          keywords: keywords || 'Piyush Giri Skills, React, Node.js, MongoDB, JavaScript'
        };
      }

      if (path === '/experience') {
        return {
          title: title || 'Experience - Piyush Giri',
          description: description || 'Professional experience at Efinz and Emveto as Full Stack Developer.',
          keywords: keywords || 'Piyush Giri Experience, Efinz, Emveto, Full Stack Developer'
        };
      }
      
      // Default fallback
      return {
        title: title || 'Piyush Giri | Full Stack Developer',
        description: description || 'Full Stack Developer portfolio showcasing projects and skills.',
        keywords: keywords || 'Piyush Giri, Developer, Portfolio'
      };
    };

    const pageInfo = getPageInfo();

    // Update page title
    document.title = pageInfo.title;

    // Update meta tags if they exist
    const updateMeta = (name, content) => {
      const meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) meta.content = content;
    };

    updateMeta('description', pageInfo.description);
    updateMeta('keywords', pageInfo.keywords);

  }, [location.pathname, title, description, keywords]);

  return null; // This component doesn't render anything
};

export default SEOHead;