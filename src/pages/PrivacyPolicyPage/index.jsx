import { useEffect } from 'react'

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Cipher Labs";
    document.getElementsByTagName("META")[2].content="Learn about Cipher Labs' dedication to safeguarding your personal information. Our Privacy Policy outlines the data we collect, how it's used, and the measures we take to protect it.";
  }, [])

  return (
    <section className="flex flex-col gap-4 py-[82px] lg:py-[189px] text-primary w-1/2 sm:w-2/3 lg:w-2/5 mx-auto px-[22px] text-justify">
      <section className="flex flex-col gap-4">
        <p className="text-4xl lg:text-5xl font-black">Privacy Policy</p>
        <p className="text-base">Last Updated: August 1, 2023</p>
        <p className="text-base">1. Introduction</p>
        <p className="text-base">
          Cipher Labs ("we," "our," or "us") is committed to respecting and
          protecting your privacy. This Privacy Policy details our practices
          regarding the collection, use, storage, and disclosure of personal
          information we receive when you use our services, including our
          website, its associated subdomains (collectively, our "Service"), and
          our application, Cipher Labs (the "App").
        </p>
        <p className="text-base">
          Personal information refers to data about you that is personally
          identifiable, such as your name, address, email address, or phone
          number, as well as other non-public information that is associated
          with the foregoing. We collect personal information when you use our
          Service or otherwise communicate with us.
        </p>
        <p className="text-base">
          By accessing or using our Service, you acknowledge that you have read
          this Privacy Policy and understand its contents. Your use of our
          Service and any dispute over privacy is subject to this Policy and our
          Terms of Service, including its applicable limitations on damages and
          the resolution of disputes.
        </p>
        <p className="text-base">
          Please note that this Privacy Policy does not govern the practices of
          third parties, including our partners, third-party service providers,
          and social networks, unless otherwise stated. We are not responsible
          for, and do not have any control over, the privacy practices of these
          third parties.
        </p>
        <p className="text-base">
          If you do not agree with our policies and practices, your choice is
          not to use our Service. By accessing or using our Service, you agree
          to this Privacy Policy. Your continued use of our Service after
          changes are made is deemed to be acceptance of those changes, so
          please check the policy periodically for updates.
        </p>
        <p className="text-base">
          As laws across countries and territories vary, and as we strive to
          ensure compliance with all applicable laws, our privacy policy may
          change. We encourage users to frequently check this page for any
          changes. Your continued use of the Service constitutes your acceptance
          of such changes.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2. Information We Collect</p>
        <p className="text-base">
          We collect various types of information to provide and improve our
          Service to you. The types of information we may collect include:
        </p>
        <p className="text-base">
          a. Personal Identification Information: We may collect personally
          identifiable information that you voluntarily provide to us when you
          register for an account or use certain features of our Service. This
          may include your name, email address, phone number, and other
          information that identifies you or can be used to identify you in
          combination with other information.
        </p>
        <p className="text-base">
          b. Non-Identifying Information: We may also collect non-identifying
          information about you, such as demographic information (like your age,
          gender, or location), or information about your use of our Service.
          This type of information does not identify you personally, but it may
          help us understand our user base and improve our Service.
        </p>
        <p className="text-base">
          c. Usage Data: We collect information about your interaction with our
          Service. This may include data about your computer's Internet Protocol
          address (IP address), browser type, the pages of our Service that you
          visit, the time and date of your visit, the time spent on those pages,
          and other diagnostic data.
        </p>
        <p className="text-base">
          d. Device Information: We may collect information about the device you
          use to access our Service. This could include the type of device, your
          operating system, your device's unique identifiers, and mobile network
          information.
        </p>
        <p className="text-base">
          e. Cookies and Similar Technologies: We use cookies and similar
          tracking technologies to track your activity on our Service and hold
          certain information. Cookies are files with a small amount of data
          which may include an anonymous unique identifier. You can instruct
          your browser to refuse all cookies or to indicate when a cookie is
          being sent. However, if you do not accept cookies, you may be unable
          to use some portions of our Service.
        </p>
        <p className="text-base">
          f. Payment Information: If you make a purchase or sign up for a paid
          service, we, or our third-party payment processors, may collect
          payment and billing information.
        </p>
        <p className="text-base">
          By using our Service, you agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2.1. Name and Contact Data</p>
        <p className="text-base">
          We collect your first and last name, email address, postal address,
          phone number, and other similar contact data. This information allows
          us to communicate with you, including sending messages regarding
          services, promotions, and events, and providing customer support. When
          you provide contact data, we may use it to customise our services and
          the content we deliver to you, improving your overall experience with
          our platform. Please note that by using our Service, you agree to the
          collection and use of this information in accordance with this Privacy
          Policy.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2.2. Credentials</p>
        <p className="text-base">
          We collect passwords, password hints, and similar security information
          for authentication and account access. This information is essential
          to provide a secure environment for your user account on our Service.
          It allows us to verify your identity, protect your user data, offer
          personalised settings, and keep our Service safe from unauthorised
          access and potential fraud. Please remember that it's your
          responsibility to keep your login credentials confidential to prevent
          unauthorised access to your account. We urge you not to share your
          passwords with anyone and to use strong, unique passwords for your
          accounts.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2.3. Payment Data</p>
        <p className="text-base">
          We collect data necessary to process your payment if you make
          purchases. This includes your payment instrument number (such as a
          credit card number) and the security code associated with your payment
          instrument. All payment data is stored by our payment processor, and
          you should review its privacy policies and contact the payment
          processor directly to respond to your privacy inquiries. We don’t
          store your payment information other than your zip code and country,
          which we require for billing and to comply with tax and other
          government regulations. Rest assured, your financial data is secure
          during transactions, as we use payment gateways that comply with the
          Payment Card Industry Data Security Standard (PCI-DSS).
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2.4. Automatic Information</p>
        <p className="text-base">
          When you visit our Service or use our application, we automatically
          collect certain information about your device and your usage of our
          Service or application. This includes information about your operating
          system, your IP address, your browser ID, your browsing activity, and
          other information about how you interacted with our Service or
          application. We may collect this information as a part of log files as
          well as through the use of cookies or other tracking technologies. Our
          use of cookies and other tracking technologies is discussed more below
          under the section on "Cookies and Similar Technologies".
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">3. How We Use Your Information</p>
        <p className="text-base">
          We use the information we collect from you in various ways, including:
        </p>
        <p className="text-base">
          3.1. Provide, operate, and maintain our Service;
        </p>
        <p className="text-base">
          3.2. Improve, personalise, and expand our Service;
        </p>
        <p className="text-base">
          3.3. Understand and analyse how you use our Service;
        </p>
        <p className="text-base">
          3.4. Develop new products, services, features, and functionality;
        </p>
        <p className="text-base">
          3.5. Communicate with you, either directly or through one of our
          partners, for customer service, to provide you with updates and other
          information relating to the Service, and for marketing and promotional
          purposes;
        </p>
        <p className="text-base">3.6. Process your transactions;</p>
        <p className="text-base">
          3.7. Send you text messages and push notifications;
        </p>
        <p className="text-base">3.8. Find and prevent fraud; and</p>
        <p className="text-base">
          3.9. For compliance purposes, including enforcing our Terms of Service
          or other legal rights, or as may be required by applicable laws and
          regulations or requested by any judicial process or governmental
          agency.
        </p>
        <p className="text-base">
          The personal information we collect from you may be used for the
          purposes described in this Privacy Policy or any other way we deem
          appropriate unless you are informed otherwise.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">4. Disclosure of Your Information</p>
        <p className="text-base">
          We are committed to maintaining the trust and confidence of our users.
          We want you to understand when and why we might share your personal
          information with others. Your information may be disclosed as follows:
        </p>
        <p className="text-base">
          4.1. By You: We may share your information with your consent to comply
          with legal requirements or to protect your rights and the rights of
          others.
        </p>
        <p className="text-base">
          4.2. Third-Party Service Providers: We may share your information with
          trusted third-party vendors, service providers, contractors, or agents
          who perform services for us or on our behalf and require access to
          such information to do that work. This includes entities that assist
          us in operating our website, conducting our business, or servicing
          you. These parties agree to keep this information confidential.
        </p>
        <p className="text-base">
          4.3. Business Transfers: We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </p>
        <p className="text-base">
          4.4. Legal Obligations: We may disclose your information where we are
          legally required to do so in order to comply with applicable law,
          governmental requests, a judicial proceeding, court order, or legal
          process, such as in response to a court order or a subpoena (including
          in response to public authorities to meet national security or law
          enforcement requirements).
        </p>
        <p className="text-base">
          4.5. Vital Interests and Legal Rights: We may disclose information
          about you where we believe it is necessary to investigate, prevent, or
          take action regarding potential violations of our policies, suspected
          fraud, situations involving potential threats to the safety of any
          person and illegal activities, or as evidence in litigation in which
          we are involved.
        </p>
        <p className="text-base">
          4.6. With your Consent: We may share your personal information for any
          other purpose with your consent. Please note, we do not sell, trade,
          or otherwise transfer to outside parties your personally identifiable
          information.
        </p>
        <p className="text-base">
          This Privacy Policy does not limit our use or sharing of anonymised or
          aggregated data. We reserve the right to use and share this data with
          our partners and third parties at our discretion.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">5. Cookies and Other Tracking Technologies</p>
        <p className="text-base">
          We use cookies and similar tracking technologies to collect and use
          personal information about you, including to serve interest-based
          advertising.
        </p>
        <p className="text-base">
          5.1. Cookies: "Cookies" are small files that are placed on your hard
          drive by your web browser when you visit a website. These tiny files
          are used for various reasons such as remembering your preferences and
          settings, enabling you to sign in, providing interest-based
          advertising, analysing how our services are performing, and fulfilling
          other legitimate purposes. Most web browsers are set to accept cookies
          by default. However, you can choose to set your browser to remove or
          reject browser cookies. Please note that if you choose to remove or
          reject cookies, this could affect the availability and functionality
          of our Services.
        </p>
        <p className="text-base">
          5.2. Pixel Tags/Web Beacons: A pixel tag (also known as a web beacon)
          is a piece of code embedded in our Services that collects information
          about users' engagement on that web page. The use of a pixel allows us
          to record, for example, that a user has visited a particular web page
          or clicked on a particular advertisement.
        </p>
        <p className="text-base">
          5.3. Analytics: We use Google Analytics, a service provided by Google,
          Inc., to gather information about how users engage with our Services.
          For more information about Google Analytics, please visit
          www.google.com/policies/privacy/partners/.
        </p>
        <p className="text-base">
          5.4. Social Media Features: Our Services may include social media
          features, such as the Facebook Like button and other widgets that run
          on our site. These features may collect your IP address and which page
          you are visiting on our site, and may set a cookie to enable the
          feature to function properly. Social media features and widgets are
          either hosted by a third party or hosted directly on our site. Your
          interactions with these features are governed by the privacy policy of
          the company providing them.
        </p>
        <p className="text-base">
          5.5. Advertising: We may work with third-party advertisers, search
          providers, and ad networks ("Advertisers") to learn more about your
          browsing habits and deliver targeted or interest-based advertisements
          to you. These Advertisers may place or recognise a unique cookie on
          your browser (including through the use of pixel tags). They may also
          use these technologies, along with information they collect about your
          online use, to recognise you across the devices you use, such as a
          mobile phone and a laptop, and to make decisions about the
          advertisements you see.
        </p>
        <p className="text-base">
          By using our Services, you agree to our use of these tracking
          technologies. If you don't want any information to be collected and
          used by tracking technologies, you can visit the third-party vendor or
          the Network Advertising Initiative Opt-Out page.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">6. Security of Your Information</p>
        <p className="text-base">
          We are committed to maintaining the security of your personal
          information and have measures in place to protect against the loss,
          misuse, and alteration of the information under our control. We use
          technological and administrative measures to protect your personal
          data from unauthorised access, theft, and loss.
        </p>
        <p className="text-base">
          6.1. Technological Measures: Our security measures include, but are
          not limited to, data encryption, firewalls, and secure server
          facilities. For example, when you enter sensitive information (such as
          credit card numbers) on our registration or order forms, we encrypt
          that information using secure socket layer technology (SSL).
        </p>
        <p className="text-base">
          6.2. Administrative Measures: We limit access to your personal
          information to those employees, agents, contractors, and other third
          parties who have a business need to know. They will only process your
          personal information on our instructions and are subject to a duty of
          confidentiality.
        </p>
        <p className="text-base">
          6.3. Data Retention: We retain personal information we collect from
          you where we have an ongoing legitimate business need to do so (for
          example, to provide you with a service you have requested or to comply
          with applicable legal, tax, or accounting requirements).
        </p>
        <p className="text-base">
          6.4. User Responsibility: You also have a significant role in
          protecting your information. No one can see or edit your personal
          information without knowing your username and password, so do not
          share these with others.
        </p>
        <p className="text-base">
          Please be aware, however, that no method of transmitting information
          over the Internet or storing information is completely secure.
          Accordingly, we cannot guarantee the absolute security of any
          information. We will notify you if there is a significant breach of
          the personal data that we hold.
        </p>
        <p className="text-base">
          By using our Services, you acknowledge that you understand and agree
          to assume these risks.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">7. Links to Other Websites</p>
        <p className="text-base">
          Our Service may contain links to other websites that are not operated
          by us. If you click on a third-party link, you will be directed to
          that third-party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <p className="text-base">
          We have no control over and assume no responsibility for the content,
          privacy policies, or practices of any third-party sites or services.
          Your interactions with these features are governed by the privacy
          policy of the company providing them.
        </p>
        <p className="text-base">
          Your use of third-party websites, services, or products may be subject
          to associated third-party terms of use and privacy policies or other
          agreements, which you are solely responsible for complying with.
          Cipher Labs does not endorse, approve, or sponsor third-party
          websites, services, or products.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">8. Changes to This Privacy Policy</p>
        <p className="text-base">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page, and, if
          the changes are significant, we will provide a more prominent notice
          (including, for certain services, email notification of privacy policy
          changes).
        </p>
        <p className="text-base">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page. Your continued use of the Service after the
          effective date of the Privacy Policy (or such other act as specified
          in the updated Privacy Policy) will constitute your acceptance of the
          updated Privacy Policy.
        </p>
        <p className="text-base">
          Please note that we may enforce changes to the Privacy Policy
          retroactively to comply with regulatory requirements or agreements
          with third parties.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">9. Contact Us</p>
        <p className="text-base">
        If you have any questions about this Privacy Policy, please contact us at support@cipherlabs.xyz or write to us at:
        </p>
        <p className="text-base">
          Cipher Labs <br />
          55 Bridge St <br />
          Sydney, NSW 2000 <br />
          Australia
        </p>
      </section>
    </section>
  );
};

export default PrivacyPolicyPage;
