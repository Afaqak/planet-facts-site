import Head from 'next/head';
import Main from '../components/main';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Planets Fact site</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div
        className='font-mono relative min-h-screen
        bg-background-stars bg-cover bg-center bg-no-repeat bg-fixed
    bg-[#070722]'
      >
        <Navbar />
        <motion.div
          variants={pageEnter}
          initial='hidden'
          animate='show'
        >
          <Main planet={'Earth'} />
        </motion.div>
      </div>
    </div>
  );
}

const pageEnter = {
  show: { opacity: 1, transition: { duration: 1.2 } },
  hidden: { opacity: 0 },
};
