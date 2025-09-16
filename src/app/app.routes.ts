import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Faq } from './pages/faq/faq';
import { Institutions } from './pages/institutions/institutions';
import { MemberBenefits } from './pages/member-benefits/member-benefits';
import { ResidencyCalculator } from './pages/residency-calculator/residency-calculator';
import { RoadToResidencyGuide } from './pages/road-to-residency-guide/road-to-residency-guide';
import { Search } from './pages/search/search';
import { Specialities } from './pages/specialities/specialities';
import { VacantPositions } from './pages/vacant-positions/vacant-positions';
import { VideoSeries } from './pages/video-series/video-series';
import { InstitutionDetail } from './pages/institution-detail/institution-detail';
import { SpecialityDetail } from './pages/speciality-detail/speciality-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'faq',
    component: Faq
  },
  {
    path: 'institutions',
    component: Institutions
  },
  {
    path: 'institutions/:id',
    component: InstitutionDetail
  },
  {
    path: 'member-benefits',
    component: MemberBenefits
  },
  {
    path: 'residency-calculator',
    component: ResidencyCalculator
  },
  {
    path: 'road-to-residency-guide',
    component: RoadToResidencyGuide
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: 'specialities',
    component: Specialities
  },
  {
    path: 'specialities/:id',
    component: SpecialityDetail
  },
  {
    path: 'vacant-positions',
    component: VacantPositions
  },
  {
    path: 'video-series',
    component: VideoSeries
  },
];
