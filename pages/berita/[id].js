import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { Component }  from 'react';

// export const getStaticPaths = async () => {
//   const res = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=f11ad12345f6462a82aa2c6499251dfa');
//   const data = await res.json();

//   const paths = data.articles.map(berita => {
//     return {
//       params: { id: berita.title }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=f11ad12345f6462a82aa2c6499251dfa/' + id);
//   const data = await res.json()

//   return {
//     props: { porosBerita: data }
//   }
// }

const BeritaContent = () => {
  return (
    <>
      <Head>
        <title>Berita | POROS Organization</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LIST TODO */}
      {/* - TITLE
          - PUBLISH AT WHEN
          - DESCRIPTION
          - IMAGE
          - CONTENT */}

      {/* Start here */}
      <section className='font-monts'>
        <div className={styles.porosBerita__header_frame}>
          <div className={styles.porosBerita__header_background}>
            <button className={styles.porosBerita__header_maintagbox}><p>FOSS</p></button>
            <h1 className={styles.porosBerita__header_title}>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
            <h2 className={styles.porosBerita__header_subtitle}>urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam</h2>
            <p className={styles.porosBerita__header_writer}>Oleh : Lorem Ipsum</p>
          </div>
        </div>
        <div className={styles.porosBerita__content_container}>
          <p className={styles.porosBerita__content_article}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.<br/><br/>Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.<br/><br/>
          </p>
          <p className={styles.porosBerita__content_prominent}>
            "Mollis pretium lorem primis senectus habitasse"<br/>
          </p>
          <p className={styles.porosBerita__content_article}>
            <div className={styles.porosBerita__content_pict_frame}>
              <img className={styles.porosBerita__content_pict} src='https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2018/08/P90315983-highRes.jpg'/>
            </div>
            Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum. Dignissim lacus convallis massa mauris enim ad mattis magnis senectus montes, mollis taciti phasellus accumsan bibendum semper blandit suspendisse faucibus nibh est, metus lobortis morbi cras magna vivamus per risus fermentum. Dapibus imperdiet praesent magnis ridiculus congue gravida curabitur dictum sagittis, enim et magna sit inceptos sodales parturient pharetra mollis, aenean vel nostra tellus commodo pretium sapien sociosqu. urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad.<br/><br/>Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.
          </p>
        </div>
        <br/>
        <div className={styles.porosBerita__content_footer_frame}>
          <button><div className={styles.porosBerita__content_tags_minor}>FOSS</div></button>
          <button><div className={styles.porosBerita__content_tags_minor}>POROS</div></button>
          <button><div className={styles.porosBerita__content_tags_minor}>LOREM</div></button>
        </div>
        <br/>
        <div className={styles.porosBerita__content_footer_frame}>
          <button className={styles.porosBerita__content_button_large}>
            <div className={styles.porosBerita__content_writer_pic_frame}>
              <img src='https://manofmany.com/wp-content/uploads/2020/07/Mia-Khalifa-3.jpg' className={styles.porosBerita__content_writer_pic}/>
            </div>
            <div className={styles.porosBerita__content_writer_frame}>
              <p className={styles.porosBerita__content_writer_name}>Lorem Ipsum Dolor</p>
              <p className={styles.porosBerita__content_writer_desc}>Writer for POROS FILKOM</p>
            </div>
          </button>
          <div className={styles.porosBerita__content_writer_socmed_frame}>
            <button className={styles.porosBerita__content_writer_socmed}>
              <img src='https://github.com/Briiad/poros-informations-frontend/blob/punyaEvan/styles/resourceEvan/Facebook.svg'/>
            </button>
          </div>
        </div>
        {/* <h1 className={`text-red-500 ${styles.porosBerita__header_title}`}> Halo </h1> */}
      </section>
    </>
  );
}
export default BeritaContent;