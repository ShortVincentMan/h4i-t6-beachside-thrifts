import Wave from "@/components/Wave";
import Image from "next/image";
import ourStoryImage from "../assets/ourStoryImg.png";
import storyOneImage from "../assets/story1.png";
import storyTwoImage from "../assets/story2.png";

export default function About() {
  return (
    <main className="page-container">
      <h1 className="home-page-title" aria-label="Our Story">
        <Image src={ourStoryImage} alt="Our Story" className="page-title-image page-title-image--about" priority />
      </h1>
      <section className="about-story-content" aria-label="Our story">
        <div className="about-story-image-frame about-story-image-frame--first">
          <Image src={storyOneImage} alt="Our story, part one" sizes="(max-width: 832px) 100vw, 800px" />
        </div>
        <div className="about-story-image-frame about-story-image-frame--second">
          <Image src={storyTwoImage} alt="Our story, part two" sizes="(max-width: 832px) 100vw, 800px" />
        </div>
      </section>
      <Wave />
    </main>
  );
}
