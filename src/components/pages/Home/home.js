import Section1Hero from "../../SectionsHome/Section1/Sectino1Hero";
import Section2 from "../../SectionsHome/Section2/section2";
import Section4Services from "../../SectionsHome/Section4/Section4Services";
import Section5clinet from "../../SectionsHome/Section5/Section5Client";
import Section6Deiffrent from "../../SectionsHome/Section6/Section6Diffrent";
import Section7Frequently from "../../SectionsHome/Section7/Section7Frequently";
import Section3QuickTransfers from "../../SectionsHome/Sections3/Section3QuickTransfers";
import Section8Footer from "../../SectionsHome/Section8/Section8footer";

function Home() {
  return (
    <>
      <Section1Hero></Section1Hero>
      <hr />
      <Section2></Section2>
      <Section3QuickTransfers></Section3QuickTransfers>
      <Section4Services></Section4Services>
      <Section5clinet></Section5clinet>
      <Section6Deiffrent></Section6Deiffrent>
      <Section7Frequently></Section7Frequently>
      <Section8Footer></Section8Footer>
    </>
  );
}

export default Home;
