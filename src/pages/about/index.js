import RootLayout from "@/components/Layouts/RootLayout";
import Navbar from "@/components/shared/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2>This is About Page.</h2>
      </div>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
