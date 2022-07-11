import Head from "next/head";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Subjects from "../components/Subjects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lumos Tutors</title>
      </Head>
      <Navbar />
      <div className="mx-auto mt-24 w-full max-w-6xl px-8">
        <Landing />
        <hr className="my-12 border border-dashed border-gray-200" />
        {/* What we teach */}
        <Subjects />
        <hr className="my-12 border border-dashed border-gray-200" />
        {/* Testimonials */}
        <Testimonials />
        {/* Contact */}
      </div>
      <Contact />
    </>
  );
}
