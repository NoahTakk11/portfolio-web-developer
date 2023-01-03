import PageLayout from '../components/PageLayout'
import AboutMe from '../components/AboutMe'
import Neon from '../components/Neon'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



export default function Home() {
  return (



    <PageLayout title="Gonzalo Gabriel Villavicencio">
      <div className="top-0">

        <section id="neon">
          <Neon></Neon>
        </section>

        <section className="text-center font-bold text-2xl py-24 px-28 my-40 text-[#61d7dc] w-full leading-normal">
          <p className="font-audiowide">"We do not dare many things because they are difficult, but they are difficult because we do not dare to do them."<span className='uppercase ml-3'>Séneca</span></p>
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>


      </div>

    </PageLayout>





  )


}
