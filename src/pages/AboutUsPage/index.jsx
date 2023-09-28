import kagan from "/imgs/landing/team members/kagan.png";
import barrett from "/imgs/landing/team members/barrett.png";
import amir from "/imgs/landing/team members/amir.png";
import ronald from "/imgs/landing/team members/ronald.png";
import socialIcon from "/imgs/landing/social icon.png";

const AboutUsPage = () => {
  return (
    <section className="flex flex-col gap-8 py-[82px] lg:py-[189px] text-primary w-1/2 sm:w-2/3 lg:w-2/5 mx-auto px-[22px] text-justify">
      <p className="text-[28px] lg:text-5xl font-black">Welcome to Cipher Labs:</p>
      <section className="flex flex-col gap-4">
        <p className="text-lg md:text-2xl font-black">
          Your Trading Edge in the DeFi World
        </p>
        <p className="text-base italic">
          At Cipher Labs, we are craftsmen with a deep dedication to serving
          traders. Harnessing Web3 technologies, our mission is to redefine the
          DeFi trading landscape. Whether it's advanced trading tools or active
          participation in governance on premier DeFi derivatives exchanges,
          consider us your primary experts for bespoke software development
          designed to enhance your trading experiences.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Our Mission</p>
        <p className="text-base">
          To empower traders in the crypto derivatives market with
          state-of-the-art tools and analytics. We're committed to innovation,
          aiming to make trading more accessible, more profitable, and more
          secure for everyone.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Our Vision</p>
        <p className="text-base">
          Our vision is to become a leading provider of trading tools and
          analytics in the DeFi space. We're working towards a future where
          traders have all the resources they need at their fingertips, enabling
          them to make informed decisions with ease and confidence.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Our Values</p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>
            Innovation: We&apos;re always looking for better ways to solve
            problems.
          </li>
          <li>Integrity: We believe in transparent and ethical practices.</li>
          <li>
            Excellence: Our focus is on delivering the highest quality
            solutions.
          </li>
          <li>
            Community: We&apos;re not just a company; we&apos;re part of a
            larger ecosystem and take our role in it seriously.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Team</p>
        <p className="text-base">Meet the Core Team Behind Cipher Labs:</p>
        <p className="text-base">
          Under the leadership of our founder Kagan, who spearheads most of the
          product development and design, our team of four combines expertise as
          traders, designers, full-stack engineers, project managers, and
          business strategists. This compact yet diverse skill set allows us to
          provide a holistic approach to DeFi trading solutions. By harnessing
          our collective insights, we tackle challenges from multiple angles,
          consistently innovating to enhance your trading experience.
        </p>
      </section>
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-8 text-base mt-14 mb-12">
        <div className="flex flex-col gap-[21px] items-center justify-between text-center">
          <img src={kagan} />
          <div className="flex flex-col gap-[10px] items-center">
            <div>
              <p className="text-[#FFF] font-bold">Kagan Powell</p>
              <p className="text-primary">Founder</p>
            </div>
            <a href="https://www.linkedin.com/in/kagan-powell-236a3914/" target="_blank" rel="noreferrer">
              <img src={socialIcon} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[21px] items-center justify-between text-center">
          <img src={barrett} />
          <div className="flex flex-col gap-[10px] items-center">
            <div>
              <p className="text-[#FFF] font-bold">Barrett Ovens</p>
              <p className="text-primary">Project Management</p>
            </div>
            <a href="https://www.linkedin.com/in/barrett-ovens-610a8534/" target="_blank" rel="noreferrer">
              <img src={socialIcon} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[21px] items-center justify-between text-center">
          <img src={amir} />
          <div className="flex flex-col gap-[10px] items-center">
            <div>
              <p className="text-[#FFF] font-bold">Amir Harambasic</p>
              <p className="text-primary">Engineer</p>
            </div>
            <a href="https://www.linkedin.com/in/amir-harambasic/" target="_blank" rel="noreferrer">
              <img src={socialIcon} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[21px] items-center justify-between text-center">
          <img src={ronald} />
          <div className="flex flex-col gap-[10px] items-center">
            <div>
              <p className="text-[#FFF] font-bold">Ronald Jason</p>
              <p className="text-primary">Engineer</p>
            </div>
            <a href="https://www.linkedin.com/in/ronald-jason-91692b266/" target="_blank" rel="noreferrer">
              <img src={socialIcon} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Milestones</p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>Secured a grant for building an MVP trading journal for dYdX.</li>
          <li>
            Upcoming: Looking to further extend our partnership with dYdX for
            their v4 release on the COSMOS ecosystem.
          </li>
          <li>
            In Development: An effective momentum indicator focused on
            identifying reversal patterns.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">How We Work</p>
        <p className="text-base">
          We start with comprehensive market research to identify gaps in the
          current tooling landscape. Then, through agile development practices,
          we create bespoke solutions tailored to meet the specific needs of
          crypto traders.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">FAQs</p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>What platforms do you support?</li>
          <ul className="list-disc ml-10 list-outside">
            <li>
              Currently, we&apos;re focused on dYdX but are planning to expand
              to Vertex next.
            </li>
          </ul>
          <li>Can I delegate my dYdX voting power to Cipher Labs?</li>
          <ul className="list-disc ml-10 list-outside">
            <li>
              Yes, we are an endorsed delegate for dYdX and you can delegate
              your voting power to{" "}
              <a
                className="text-green"
                href="https://cipherlabs.eth"
                target="_blank"
                rel="noreferrer"
              >
                cipherlabs.eth
              </a>
            </li>
          </ul>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-4xl font-black">Contact Information</p>
        <p className="text-base">
          For any inquiries, feel free to contact us:{" "}
          <a
            className="text-green"
            href="mailto:kagan@cipherlabs.xyz"
            target="_blank"
            rel="noreferrer"
          >
            hello@cipherlabs.xyz
          </a>
        </p>
      </section>
    </section>
  );
};

export default AboutUsPage;
