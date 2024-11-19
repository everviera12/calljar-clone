import Image from "next/image";
import Link from "next/link";

export default function HeroHeader({
  heroheaderclasses,
  infoTitle,
  infoText,
  infoLinks,
  infoImage,
}) {
  const { image, width, height, alt, imageclasses, imagecontainer } = infoImage;
  const { buttonscontainer, link_url_1, link_classes_1, link_label_1, link_url_2, link_classes_2, link_label_2, link_url_3, link_classes_3, link_label_3} = infoLinks;
  const {titleclasses, title} = infoTitle
  const {textclasses, text} = infoText

  return (
    <section
      className={`grid justify-center gap-16 items-center py-16 px-10 lg:flex lg:flex-row lg:gap-20 ${heroheaderclasses}`}
    >
      <div className="text-center lg:text-start space-y-5">
        <h1 className={`${titleclasses}`} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={`${textclasses}`} dangerouslySetInnerHTML={{ __html: text }} />

        <div className="grid justify-center lg:justify-start">
          <div className={`grid grid-rows-2 gap-4 ${buttonscontainer}`}>
            <Link href={link_url_1} className={`row-start-1 bg-JarBlue-2 text-white py-3 px-6 rounded flex justify-center ${link_classes_1}`}> {link_label_1} </Link>
            <div className="row-start-2 grid grid-cols-2 gap-4">
              <Link href={link_url_2} className={`bg-white border border-JarBlue-2 py-3 px-6 flex justify-center rounded hover:bg-JarBlue-2 hover:border-none hover:text-white transition-all ${link_classes_2}`}> {link_label_2} </Link>
              <Link href={link_url_3} className={`bg-white border border-JarBlue-2 py-3 px-6 flex justify-center rounded hover:bg-JarBlue-2 hover:border-none hover:text-white transition-all ${link_classes_3}`}> {link_label_3} </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex justify-center ${imagecontainer}`}>
        <Image
          src={image}
          width={width}
          height={height}
          alt={alt}
          className={` ${imageclasses}`}
        />
      </div>
    </section>
  );
}
