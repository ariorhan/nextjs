import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Desc
          </p>
          <div className={styles.author}>
            <Image
              src=''
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=''
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eaque, aliquam id accusamus deserunt maxime esse illum sunt recusandae ipsam facilis officia molestiae, itaque blanditiis possimus ad ipsa est facere!
         Esse velit alias totam qui, consequatur commodi. Maxime possimus ullam vel eum. Placeat, eveniet ducimus earum exercitationem fugiat sit tempora asperiores, voluptatum perspiciatis magni sapiente aspernatur labore voluptatem ullam tempore.
         At nesciunt ratione quaerat inventore eaque veniam accusantium consequatur asperiores laudantium quis placeat eum odit obcaecati, impedit fugiat officiis qui velit mollitia quisquam suscipit molestiae, maxime sunt? Nobis, vel id!
         Atque, deleniti! Ut atque dolorem minus magnam maiores adipisci accusantium porro dolores recusandae. Hic natus voluptate expedita nobis, adipisci voluptatum molestias aliquam cum, deserunt alias velit. Nostrum doloremque quia sequi.
         Iusto mollitia sint, facere minima nam aut vero? Impedit eligendi dicta officiis, tenetur nam nesciunt expedita. Atque, quo! Dignissimos, nisi cum? Officiis consequuntur alias corporis dicta non illo dolor dolorem!
         Doloribus, a? Consectetur modi pariatur cum in sunt quis voluptatem itaque corporis quae nostrum temporibus aperiam similique, veritatis impedit illo exercitationem et delectus deleniti, totam neque. Cumque officiis obcaecati numquam.
         Labore excepturi at ullam! Esse sequi porro commodi sed, voluptate necessitatibus consectetur quam repellat, voluptates tempore a natus voluptatum, ex non beatae at veritatis fuga provident obcaecati facere dignissimos aut?
         Laboriosam, quis quibusdam eveniet amet nesciunt, sunt vitae delectus illum eos tempora recusandae aspernatur ad minus, quos iure tenetur temporibus quo explicabo. Doloribus alias rerum itaque aliquid, voluptas vel error.
         Repellendus eligendi laborum perspiciatis esse modi, eaque sunt ea. Doloribus a voluptas inventore itaque nam reiciendis incidunt velit ut deserunt eius error et autem, qui voluptatum molestiae atque, pariatur ex.
         Cum earum quo explicabo temporibus, autem maxime dolores assumenda? A similique nam obcaecati voluptatum nobis sapiente necessitatibus dolore eveniet facere vel. Reprehenderit a reiciendis voluptatum? A aut earum nulla quidem.
         Maiores nostrum quo architecto, temporibus facere eos doloremque eaque nobis. Itaque aut laboriosam unde deleniti facilis aspernatur maxime delectus quisquam repudiandae? Repellendus nobis exercitationem explicabo aliquid sed quas voluptates amet.
         Delectus vel pariatur quibusdam? Sed nihil beatae nulla vitae corrupti ratione ullam possimus quibusdam ab laboriosam aliquid, quidem vero quae sit doloribus. Esse iure quidem possimus nobis harum perspiciatis quisquam?
         In, officia quisquam repudiandae blanditiis asperiores culpa quia provident atque neque. Mollitia maxime, rerum recusandae corrupti fuga possimus doloribus natus dolorem earum, voluptates vero eaque soluta, aliquam ipsum amet ea?
         Provident deleniti atque enim error quasi, quos tempore maxime repellendus nam quaerat, ad totam ex reiciendis? Repellat esse soluta quibusdam dicta, nulla praesentium nesciunt totam voluptatem quam ad sint culpa?
         Maiores nulla non consequuntur voluptates dolore, error asperiores ipsum delectus rem dolor ex autem placeat! Temporibus praesentium quam eaque omnis voluptates rerum laborum fugiat vero, accusantium soluta earum error cum!
         Tenetur maxime nesciunt nam voluptatem, autem expedita minima amet libero vel sit in harum! Voluptate, sit? Rem obcaecati ullam aliquam suscipit illo repudiandae atque, officia impedit. Rerum sequi quam vero!
         Repellat illum, perferendis exercitationem consectetur possimus facilis cupiditate accusamus. Illo optio quia quae vero, laudantium hic maxime? Eveniet itaque expedita sit quia, cum, officia quos quisquam facilis eos odio mollitia?
         Laborum similique culpa ad suscipit ipsum repellat eum, officiis incidunt saepe non perspiciatis dolorem earum ab voluptatem, dignissimos unde quod? Dolore quaerat qui ut ad mollitia ab nobis, impedit eveniet?
         Enim numquam non, autem eligendi inventore consectetur eaque ea corporis incidunt quaerat nihil et expedita, culpa quasi cum, minus illo illum quos sequi voluptas iste iusto! Itaque necessitatibus quo ratione!
         Quasi nobis similique sapiente perferendis suscipit saepe consequuntur error aperiam magni, iure cumque nihil! Beatae eligendi fugiat ipsam doloremque! Sequi, aliquam earum officiis pariatur ducimus iure amet dolorum sit maiores!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;