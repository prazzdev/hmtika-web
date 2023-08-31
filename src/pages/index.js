import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import ProfileSect from '@/components/ProfileSect'
import EventSect from '@/components/EventSect'

export default function Home() {
  return (
    <Layout pageTitle=''>
    <div data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out">
        <Hero />
        <ProfileSect />
        <EventSect />
      </div>
    </Layout>
  )
}
