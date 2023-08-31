import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import ProfileSect from '@/components/ProfileSect'
import EventSect from '@/components/EventSect'

export default function Home() {
  return (
    <Layout pageTitle=''>
      <Hero />
      <ProfileSect />
      <EventSect />
    </Layout>
  )
}
