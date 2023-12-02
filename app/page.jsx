import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Create and Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Elevate your content creation journey with our platform offering unique
        and stimulating prompts
    </p>

    <Feed />
  </section>
);

export default Home;
