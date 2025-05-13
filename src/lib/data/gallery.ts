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
        name: 'Meetings & Events',
        slug: 'meetings',
        description: 'Professional gatherings, workshops, conferences, and networking events from my career journey.'
    },
    {
        name: 'Drone Hobbies',
        slug: 'drone',
        description: 'Aerial photography and videos taken with my drone during adventures.'
    }
];

// Gallery items
const items: Array<GalleryItem> = [
    // Meetings & Events - sorted by date, most recent first    
    {
        label: 'PETRONAS Core AI Collaboration',
        src: '/gallery-personal/petronas-ai.JPG',
        description: 'I participated in small group discussions at KL Convec that explored how AI is being integrated into the future of E&P.',
        category: 'meetings',
        date: new Date('2025-03-15'),
        type: 'image'
    },    
    {
        label: 'PETRONAS Monthly Strategy Alignment',
        src: '/gallery-personal/petronas-monthlymeeting.JPG',
        description: 'I supported the team by presenting key metrics and contributing to discussions during the monthly strategy meeting at PETRONAS UTDI. Power BI dashboards I created were used to visualize our OPEX/CAPEX projects and align our digital transformation with MPM goals.',
        category: 'meetings',
        date: new Date(2025, 3, 10),
        type: 'image'
    },
    {
        label: 'KL Summit 20',
        src: '/gallery-personal/convec-KLSUMMIT.JPG',
        description: 'At the prestigious KL Summit, key insights on worlds leading markets and the future of energy were shared. The event was a hub for industry leaders and innovators, fostering discussions on the latest trends.',
        category: 'meetings',
        date: new Date(2025, 1, 20),
        type: 'image'
    },
    {
        label: 'Department of Statistics Malaysia: Data Collaboration Workshop',
        src: '/gallery-personal/dosm-meet-1.JPG',
        description: 'During the workshop with DOSM, a framework for implementing data analytics for KDNK statistics was shared. Conversations between government officials and private sector helped improve the statistics process.',
        category: 'meetings',
        date: new Date(2025, 0, 25),
        type: 'image'
    },
    {
        label: 'PETRONAS myPROdata Output Review',
        src: '/gallery-personal/petronas-meet-PD.JPG',
        description: 'PETRONAS myPROdata is a web-based platform offering greater access and transparency to Malaysia’s E&P data. In this meeting, insights were gained and a Power BI dashboard was created to visualize the data more effectively.',
        category: 'meetings',
        date: new Date(2025, 2, 5),
        type: 'image'
    },
    {
        label: 'Upstream Digital Booth',
        src: '/gallery-personal/petronas-convec-event.JPG',
        description: 'The Upstream Digital booth at the PETRONAS Convec event was managed by the UDT department, and I assisted with handling data tasks. This provided an opportunity to engage with energy stakeholders and connect with petroleum engineering peers.',
        category: 'meetings',
        date: new Date(2024, 11, 12),
        type: 'image'
    },
    {
        label: 'PETRONAS Bridge: Section Discussion',
        src: '/gallery-personal/petronas-bridge.JPG',
        description: 'Visited the iconic Petronas Bridge, enjoying the views while discussing with colleagues the importance of staying updated on our project timelines. It was a refreshing break that sparked valuable conversations.',
        category: 'meetings',
        date: new Date(2024, 10, 18),
        type: 'image'
    },
    {
        label: 'PETRONAS MotoGP Event',
        src: '/gallery-personal/petronas-motoGP.JPG',
        description: 'Stopped by the PETRONAS MotoGP booth at the event, checking out the latest tech.',
        category: 'meetings',
        date: new Date(2024, 11, 3),
        type: 'image'
    },    
    {
        label: 'PETRONAS Digital Workplace Experience',
        src: '/gallery-personal/petronas-office.JPG',
        description: 'In the UTDI office, where ideas flow and collaboration is key to moving things forward.',
        category: 'meetings',
        date: new Date(2024, 9, 14),
        type: 'image'
    },    
    {
        label: 'PETRONAS UTDI Office',
        src: '/gallery-personal/petronas-office-2.JPG',
        description: 'A moment in the meeting room, where data is turned into visuals with Power BI and some scoresheets that tell a clearer flow and top view.',
        category: 'meetings',
        date: new Date(2024, 9, 20),
        type: 'image'
    },
    {
        label: 'Digital Day',
        src: '/gallery-personal/petronas-pdd-1.JPG',
        description: 'At PETRONAS Digital Day, the focus was on innovations shaping a sustainable future, with a strong emphasis on digital solutions driving zero-emission goals in the energy sector. It was an eye-opening experience on how technology is accelerating the shift to cleaner, greener energy.',
        category: 'meetings',
        date: new Date(2024, 8, 5),
        type: 'image'
    },
    {
        label: 'Digital Day - 2',
        src: '/gallery-personal/petronas-pdd-2.JPG',
        description: 'PETRONAS Digital Day revealed how the latest digital advancements are subtly reshaping the energy sector. Its clear that technology is no longer just a tool, but a key player in driving the move toward zero emissions.',
        category: 'meetings',
        date: new Date(2024, 8, 6),
        type: 'image'
    },    
    {
        label: 'PETRONAS Research Centre: Data Science Lab',
        src: '/gallery-personal/petronas-PRC.JPG',
        description: 'The Data Science Lab at PRC serves as the backbone of analytical exploration, where complex algorithms and data models are crafted to tackle real-world challenges in energy management. Its here that raw data is refined.',
        category: 'meetings',
        date: new Date(2024, 7, 22),
        type: 'image'
    },
    {
        label: 'PETRONAS Hari Raya Celebration',
        src: '/gallery-personal/petronas-raya.JPG',
        description: 'Hung out with friends at PETRONAS Hari Raya, just enjoying the vibe and spending time together. Simple, but memorable moments.',
        category: 'meetings',
        date: new Date(2024, 4, 15),
        type: 'image'
    },
    {
        label: 'UTDI Retreat',
        src: '/gallery-personal/petronas-retreat.JPG',
        description: 'Spent time at the retreat in Johor, focused on team-building and discussing key strategies for the future. It was a chance to step back, reflect, and align on our Petroleum Management blueprint.',
        category: 'meetings',
        date: new Date(2024, 6, 28),
        type: 'image'
    },
    {
        label: 'Upstream Digital Transformation Summit',
        src: '/gallery-personal/petronas-upstreamdigital.JPG',
        description: 'After the retreat in Johor, the UTDI team proudly displayed a huge poster, celebrating our achievements and the journey we have taken together. It was a nice reminder of the teams hard work and growth.',
        category: 'meetings',
        date: new Date(2024, 5, 17),
        type: 'image'
    },
    {
        label: 'Bukit Antarabangsa: City in the Clouds',
        src: '',
        description: 'A stunning bird\'s-eye view of Bukit Antarabangsa, where lush greenery seamlessly blends with Kuala Lumpur\'s urban landscape. This aerial footage captures the hill\'s serene beauty and the city\'s sprawling skyline below, offering a unique perspective of both nature and metropolis.',
        category: 'drone',
        date: new Date(2025, 5, 13),
        type: 'video',
        videoId: 'UB1EoLxWDAw',
        autoplay: true,
        videoFormat: 'standard'
    },
    {
        label: 'Hibiscus Haven: Port Dickson',
        src: '',
        description: 'Experience the vibrant charm of Hibiscus Port Dickson, where turquoise waters meet golden shores. This aerial journey captures the serene beauty of the coastline, with the iconic hibiscus landmark standing tall against the backdrop of a perfect seaside escape.',
        category: 'drone',
        date: new Date(2025, 4, 12),
        type: 'video',
        videoId: '5gXKRptw8o0',
        autoplay: true,
        videoFormat: 'vertical'
    },
    {
        label: 'Bukit Senaling Unveiled',
        src: '',
        description: 'Ascend to new heights with a captivating aerial view of Bukit Senaling. From its dense jungle to sweeping vistas, this video reveals the hidden gems of this tranquil hill, offering a fresh perspective of nature\'s untouched beauty.',
        category: 'drone',
        date: new Date(2025, 4, 11),
        type: 'video',
        videoId: 'TscIzE10OtA',
        autoplay: false,
        videoFormat: 'horizontal'
    },
    {
        label: 'Island Escape in Sabah',
        src: '',
        description: 'A hidden gem in Sabah, this aerial view reveals the island\'s pristine beauty, from its sparkling shores to lush greenery. A perfect getaway captured from the sky.',
        category: 'drone',
        date: new Date(2025, 4, 10),
        type: 'video',
        videoId: 'GMEfI6tBrOU',
        autoplay: false,
        videoFormat: 'vertical'
    },
    {
        label: 'Empowering YBK\'s Story',
        src: '',
        description: 'Created as part of a side project to enhance Yayasan Basmi Kemiskinan\'s marketing, this drone video highlights students\' practice sessions from a stunning aerial perspective, showcasing their passion and determination to succeed.',
        category: 'drone',
        date: new Date(2025, 4, 9),
        type: 'video',
        videoId: 'e9qoEBQmKjI',
        autoplay: false,
        videoFormat: 'standard'
    },
    {
        label: 'Tranquility of the Paddy Fields',
        src: '',
        description: 'A serene aerial journey over vibrant paddy fields, captured during a family visit to the village after Hari Raya Korban. A harmonious blend of natural beauty and cherished moments.',
        category: 'drone',
        date: new Date(2025, 4, 8),
        type: 'video',
        videoId: 'Z8V1shjZqRc',
        autoplay: false,
        videoFormat: 'standard'
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