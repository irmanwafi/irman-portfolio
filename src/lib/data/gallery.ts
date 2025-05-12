import Assets from './assets';
import type { Screenshot } from './types';

const title = 'Gallery';

// Define gallery categories for organization
export type GalleryCategory = {
    name: string;
    slug: string;
    description: string;
};

export type GalleryItem = Screenshot & {
    description: string;
    category: string;
    date: Date;
    type?: 'image' | 'video';
    videoId?: string;
    autoplay?: boolean;
    videoFormat?: 'horizontal' | 'vertical' | 'standard'; // For different aspect ratios
};

// Gallery categories
const categories: Array<GalleryCategory> = [
    {
        name: 'Drone Photography',
        slug: 'drone',
        description: 'Aerial photography taken with my drone during various explorations.'
    },
    {
        name: 'Project Sites',
        slug: 'project-sites',
        description: 'Photos from various project locations and workspaces.'
    },
    {
        name: 'Meetings & Events',
        slug: 'meetings',
        description: 'Professional gatherings, workshops, and networking events.'
    }
];

// Gallery items
const items: Array<GalleryItem> = [    {
        label: 'Cinematic Drone Landscapes',
        src: '',
        description: 'Beautiful cinematic drone footage over diverse landscapes and natural environments.',
        category: 'drone',
        date: new Date(2025, 5, 13),
        type: 'video',
        videoId: 'UB1EoLxWDAw',
        autoplay: true,
        videoFormat: 'standard'
    },
    {
        label: 'Aerial 1',
        src: '',
        description: 'Drone aerial footage showcasing stunning landscapes and perspectives from above.',
        category: 'drone',
        date: new Date(2025, 4, 12),
        type: 'video',
        videoId: '5gXKRptw8o0',
        autoplay: true,
        videoFormat: 'vertical'
    },
    {
        label: 'Aerial 2 - Horizontal Drone View',
        src: '',
        description: 'Wide panoramic horizontal drone footage of beautiful landscapes.',
        category: 'drone',
        date: new Date(2025, 4, 11),
        type: 'video',
        videoId: 'TscIzE10OtA',
        autoplay: false,
        videoFormat: 'horizontal'
    },
    {
        label: 'Aerial 3 - Vertical Exploration',
        src: '',
        description: 'Vertical drone footage capturing the beauty from above.',
        category: 'drone',
        date: new Date(2025, 4, 10),
        type: 'video',
        videoId: 'ibMl5YCkJLE',
        autoplay: false,
        videoFormat: 'vertical'
    },
    {
        label: 'Aerial 4 - Cinematic Flight',
        src: '',
        description: 'Extended cinematic drone footage with smooth movements and scenic views.',
        category: 'drone',
        date: new Date(2025, 4, 9),
        type: 'video',
        videoId: 'e9qoEBQmKjI',
        autoplay: false,
        videoFormat: 'standard'
    },
    {
        label: 'Aerial 5 - Landscape Survey',
        src: '',
        description: 'Professional drone survey of diverse landscapes and terrains.',
        category: 'drone',
        date: new Date(2025, 4, 8),
        type: 'video',
        videoId: 'Z8V1shjZqRc',
        autoplay: false,
        videoFormat: 'standard'
    },
    {
        label: 'Kuala Lumpur Skyline',
        src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VhbGElMjBsdW1wdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Aerial view of Kuala Lumpur skyline captured with my DJI Mini drone during sunset.',
        category: 'drone',
        date: new Date(2023, 8, 15)
    },
    {
        label: 'Data Analysis Workshop',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        description: 'Leading a data analysis workshop for PETRONAS team members, sharing insights on Power BI dashboards.',
        category: 'meetings',
        date: new Date(2023, 6, 22)
    },
    {
        label: 'Putrajaya Lake',
        src: 'https://images.unsplash.com/photo-1619879476337-16e429c8cf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHV0cmFqYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        description: 'Drone shot of Putrajaya Lake during a weekend exploration flight.',
        category: 'drone',
        date: new Date(2023, 10, 5)
    },
    {
        label: 'DOSM Office',
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        description: 'My workspace at the Department of Statistics Malaysia during the MySTEP program.',
        category: 'project-sites',
        date: new Date(2023, 1, 10)
    },
    {
        label: 'SDG Conference 2024',
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Sustainable Development Goals conference where I represented the Ministry of Foreign Affairs.',
        category: 'meetings',
        date: new Date(2024, 2, 14)
    },
    {
        label: 'UiTM Campus',
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        description: 'UiTM Shah Alam campus where I completed my bachelor\'s degree. Shot during my final semester.',
        category: 'project-sites',
        date: new Date(2024, 4, 20)
    },
    {
        label: 'Beach Drone Shot',
        src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBkcm9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Aerial view of Pantai Remis taken during a weekend drone photography session.',
        category: 'drone',
        date: new Date(2023, 7, 30)
    },
    {
        label: 'Digital Transformation Meeting',
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Strategic planning session for PETRONAS digital transformation projects where I served as an accelerator.',
        category: 'meetings',
        date: new Date(2023, 9, 12)
    },
    {
        label: 'QGIS Project Map',
        src: 'https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwcGluZyUyMHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Screenshot from my geospatial text mining final year project, showing tweet distribution across Malaysia.',
        category: 'project-sites',
        date: new Date(2024, 1, 25)
    }
];

// Function to get gallery items by category
export const getGalleryItemsByCategory = (categorySlug?: string) => {
    if (!categorySlug) return items;
    return items.filter(item => item.category === categorySlug);
};

const GalleryData = {
    title,
    categories,
    items
};

export default GalleryData;