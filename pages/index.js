import Head from 'next/head'
import Landing from './Landing/Landing';
import Navbar from '../Components/Layout/TopNavbar';
import LandingIndex from './Landing/LandingIndex';

export default function Home() {
  return (
    <div>    

      <Landing>
        <LandingIndex />
      </Landing>

    </div>
  )
}
