import Head from 'next/head';

export default function Metatags({
  title = 'BSCR Blog',
  description = 'Come,read and like our post',
  image = 'https://bscrproduction.vercel.app/metatag.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article"/>
      <meta property="og:url" content="https://bscrproduction.vercel.app/" />
    </Head>
  );
}