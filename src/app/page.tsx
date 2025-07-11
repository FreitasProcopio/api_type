import SelectedSection from "./components/SelectedSection";
import {getAbout, getFAQs } from "@/services/api";

export default async function Home() {
  const [about, faqs] = await Promise.all([
    getAbout(),
    getFAQs(),
  ]);
  return <SelectedSection abouts={about} faqs={faqs} />;
}
