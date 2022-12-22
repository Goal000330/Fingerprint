import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import DeviceIntroBlock from "../components/DeviceIntroBlock/DeviceIntroBlock";
import LiveDemoBlock from "../components/LiveDemoBlock/LiveDemoBlock";
import PlatformBlock from "../components/PlatformBlock/PlatformBlock";
import UsecaseBlock from "../components/UsecaseBlock/UsecaseBlock";
import CustomerStoryBlock from "../components/CustomerStoryBlock/CustomerStoryBlock";
import WhyFingerBlock from "../components/WhyFingerBlock/WhyFingerBlock";
import ForDeveloperBlock from "../components/ForDeveloperBlock/ForDeveloperBlock";
import SecurityPrivacyBlock from "../components/SecurityPrivacyBlock/SecurityPrivacyBlock";
import PricingBlock from "../components/PricingBlock/PricingBlock";
import VidoeIntroBlock from "../components/VidoeIntroBlock/VidoeIntroBlock";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DeviceIntroBlock />
      <LiveDemoBlock />
      <PlatformBlock />
      <UsecaseBlock />
      <CustomerStoryBlock />
      <WhyFingerBlock />
      <ForDeveloperBlock />
      <SecurityPrivacyBlock />
      <PricingBlock />
      <VidoeIntroBlock />
      <Footer />
    </div>
  );
}
