import FaqPage from './(website)/faq/page';
import WebsiteLayout from './(website)/layout';
import PropertyMenu from './(website)/trench/property-menu';
import TrenchHero from './(website)/trench/trenchHero';

export default function Home() {
  return (
    <WebsiteLayout>
      <TrenchHero />
      <PropertyMenu />
      <FaqPage />
    </WebsiteLayout>
  );
}
