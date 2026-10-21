import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import EventsPage from './pages/EventsPage'
import ExperienceDetailPage from './pages/ExperienceDetailPage'
import ExperiencesPage from './pages/ExperiencesPage'
import FaqPage from './pages/FaqPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import OffersPage from './pages/OffersPage'
import SalesPage from './pages/SalesPage'
import StayDetailPage from './pages/StayDetailPage'
import StaysPage from './pages/StaysPage'
import WeddingDetailPage from './pages/WeddingDetailPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/stays', element: <StaysPage /> },
      { path: '/stays/:slug', element: <StayDetailPage /> },
      { path: '/experiences', element: <ExperiencesPage /> },
      { path: '/experiences/:slug', element: <ExperienceDetailPage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:slug', element: <WeddingDetailPage /> },
      { path: '/offers', element: <OffersPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/location', element: <LocationPage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/villas-for-sale', element: <SalesPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
