import HidePassword from './hide-password-icon';
import NairaCurrency from './naira-currency';
import { ICONS } from '@/constants/icons';
import LocationIcon from './location-icon';
import HousingIcon from './housing-icon';
import ChevronDown from './chevron-down';
import MailIcon from './mail-icon';
import PhoneIcon from './phone-icon';
import FacebookIcon from './facebook';
import TwitterIcon from './twitter';
import IGIcon from './instagram';
import StarIcon from './star-icon';
import ArrowDown from './arrow-down';
import BackCircle from './back-circle';
import HamburgerIcon from './hamburger-icon';
import BedIcon from './bed-icon';
import ToiletIcon from './toilet-icon';
import ArrowRight from './arrow-right';
import ArrowCurvedown from './arrow-curve-down';
import MinusIcon from './minus-icon';
import PlusIcon from './plus-icon';
import ChevronUp from './chevron-up-icon';
import Expert from './about-icons/expert';
import Users3 from './about-icons/3user';
import Integrity from './about-icons/integrity';
import Idea from './about-icons/idea';
import CloseFillIcon from './close-fill-icon';

interface IconProps {
  color: string;
  size: number;
  type: string;
}

const Icon = ({ size, color, type }: IconProps) => {
  const props = { size, color };

  switch (type) {
    case 'arrow_down':
      return <ArrowDown {...props} />;
    case ICONS.arrow_Right:
      return <ArrowRight {...props} />;
    case 'back_circle':
      return <BackCircle {...props} />;
    case ICONS.bed_icon:
      return <BedIcon {...props} />;
    case ICONS.chevron_down:
      return <ChevronDown {...props} />;
    case ICONS.chevron_up:
      return <ChevronUp {...props} />;
    case ICONS.close_fill_icon:
      return <CloseFillIcon {...props} />;
    case ICONS.curve_down_arrow:
      return <ArrowCurvedown {...props} />;
    case ICONS.hamburger_icon:
      return <HamburgerIcon {...props} />;
    case ICONS.hide_password:
      return <HidePassword {...props} />;
    case ICONS.housing_icon:
      return <HousingIcon {...props} />;
    case ICONS.naira_currency:
      return <NairaCurrency {...props} />;
    case ICONS.location_icon:
      return <LocationIcon {...props} />;
    case ICONS.mail_icon:
      return <MailIcon {...props} />;
    case ICONS.minus_icon:
      return <MinusIcon {...props} />;
    case ICONS.phone_icon:
      return <PhoneIcon {...props} />;
    case ICONS.fb_icon:
      return <FacebookIcon {...props} />;
    case ICONS.toilet_icon:
      return <ToiletIcon {...props} />;
    case ICONS.twitter_icon:
      return <TwitterIcon {...props} />;
    case ICONS.ig_icon:
      return <IGIcon {...props} />;
    case ICONS.star_icon:
      return <StarIcon {...props} />;
    case ICONS.plus_icon:
      return <PlusIcon {...props} />;
    case 'expert':
      return <Expert {...props} />;
    case '3users':
      return <Users3 {...props} />;
    case 'integrity':
      return <Integrity {...props} />;
    case 'idea':
      return <Idea {...props} />;
    default:
      return <p>Pick an Icon Type</p>;
  }
};

export default Icon;
