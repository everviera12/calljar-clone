import CarouselImages from "@/components/CarouselImages";
import RootLayout from "@/components/Layouts/RootLayout";
import HeroHeader from "@/components/UI/HeroHeader";
import { calljar_image } from "@/public";

export default function Home() {
  return (
    <RootLayout>
      <HeroHeader
        heroheaderclasses="bg-white"
        infoTitle={{
          title: `Call JAR to learn about your Medicare options`,
          titleclasses: "text-[46px] font-bold text-JarBlue-2 w-auto lg:text-[56px] md:w-[544px] xl:w-[655px]"
        }}
        infoText={{
          text: "Monday–Friday, 9:00 am–5:00 pm PST",
          textclasses: "text-JarGray-1"
        }}
        infoLinks={{
          link_url_1: "tel:+18888165972",
          link_url_2: "/find-agent",
          link_url_3: "/shop-online",
          link_label_1: "Call us at 1 (888) 816-5972 TTY: 711",
          link_label_2: "Find an Agent",
          link_label_3: "Shop Online",
          buttonscontainer: "w-[350px]"
        }}
        infoImage={{
          image: calljar_image,
          width: 450,
          height: 450,
          alt: "calljar-image",
        }}
      />

      <div className="py-16 space-y-5 text-JarGray-1 font-semibold text-lg bg-white w-full text-center">
        <span>Health Plan Partners we work with</span>
        <CarouselImages />
      </div>

      <div>
        <h2>Working with a JAR agent means getting superior service, resources and options.</h2>
        <p>Having an experienced, knowledgeable licensed insurance agent on your side can make all the difference in finding the best Medicare Advantage plan for you.</p>
      </div>
    </RootLayout>
  );
}
