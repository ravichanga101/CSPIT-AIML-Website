import HomeSlider from '@/components/HomeSlider';
import AboutUs from '@/components/AboutUs';
import BestPractices from '@/components/BestPractices';
import VisionMission from '@/components/VisionMission';
import Certifications from '@/components/Certifications';
import StudentChapter from '@/components/StudentChapter';
import MajorRecruiters from '@/components/MajorRecruiters';
import CareerDevelopment from '@/components/CareerDevelopment';
import Testimonials from '@/components/Testimonials';
import StudentClubs from '@/components/StudentClubs';
import StudentAchievements from '@/components/StudentAchievements';
import FacultyAchievements from '@/components/FacultyAchievements';
import Gallery from '@/components/Gallery';
import ContactUs from '@/components/ContactUs';
import { getImagesFromFolder } from '@/lib/getImages';

export default function Home() {
  // ONE shared folder for both the hero slider and the gallery.
  // Just drop images into public/img/photos — no code changes needed!
  const photos = getImagesFromFolder('img/photos');

  return (
    <>
      <HomeSlider images={photos} />
      <AboutUs />
      <BestPractices />
      <VisionMission />

      <Certifications />
      <StudentChapter />
      <MajorRecruiters />
      <CareerDevelopment />
      <Testimonials />
      <StudentClubs />
      <FacultyAchievements />
      <StudentAchievements />
      <Gallery images={photos} />
      <ContactUs />
    </>
  );
}
