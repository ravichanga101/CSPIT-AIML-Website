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
import Gallery from '@/components/Gallery';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <AboutUs />
      <BestPractices />
      <VisionMission />

      <Certifications />
      <StudentChapter />
      <MajorRecruiters />
      <CareerDevelopment />
      <Testimonials />
      <StudentClubs />
      <StudentAchievements />
      <Gallery />
      <ContactUs />
    </>
  );
}
