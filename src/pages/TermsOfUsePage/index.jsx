import { useEffect } from 'react'

const TermsOfUsePage = () => {
  useEffect(() => {
    document.title = "Terms of Use | Cipher Labs"
    document.getElementsByTagName("META")[2].content="Explore the terms governing the use of Cipher Labs' services and platform. Understand your rights, responsibilities, and the guidelines that ensure our community's safety and integrity. Here si the Privacy Policy page meta tags:";
  }, [])

  return (
    <section className="flex flex-col gap-4 py-[82px] lg:py-[189px] text-primary w-1/2 sm:w-2/3 lg:w-2/5 mx-auto px-[22px] text-justify">
      <section className="flex flex-col gap-4">
        <p className="text-4xl lg:text-5xl font-black">Terms Of Use</p>
        <p className="text-base">Last Updated: August 1, 2023</p>
        <p className="text-base">1. Introduction</p>
        <p className="text-base">
          Welcome to Cipher Labs. These Terms of Service ("Terms") are a
          contract governing your use of the various products, services, and
          features (collectively referred to as our "Services") and are agreed
          upon between you (an individual or organisation) and Cipher Labs. By
          accessing, browsing, or otherwise using any part of our Services, you
          agree to be bound by these Terms. You represent and warrant that you
          are of legal age to form a binding contract and are not a person
          barred from receiving services under the laws of any applicable
          jurisdiction.
        </p>
        <p className="text-base">
          Our mission is to revolutionise DeFi through the crafting of
          innovative tools, contributing actively towards governance in key Web3
          ecosystems, and focusing on the development of software for crypto
          trading. Our Services are designed to offer an advanced, intuitive,
          and secure experience, with access to detailed analytics for improved
          trading decision-making.
        </p>
        <p className="text-base">
          These Terms are subject to change at our sole discretion. We will
          notify you of any material changes via the Services, email, or other
          similar means. Your continued use of Services after such updates
          confirm your acceptance of the changes and the revised Terms.
        </p>
        <p className="text-base">
          Additionally, your use of our Services is governed by our Privacy
          Policy, which is incorporated into these Terms by this reference. Your
          agreement to these Terms also signifies your consent and agreement to
          our Privacy Policy.
        </p>
        <p className="text-base">
          IMPORTANT: Please review these Terms carefully, especially the
          disclaimers in Section 9 and the arbitration provision in Section 14,
          which requires you to resolve any disputes with us individually
          through final and binding arbitration.
        </p>
        <p className="text-base">
          Please refrain from using our Services if you do not agree to these
          Terms, and contact us at support@cipherlabs.xyz if you have any
          questions.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">2. Acceptance of Terms</p>
        <p className="text-base">
          By accessing, browsing, or otherwise using the Cipher Labs website or
          any of our Services, you acknowledge that you have read, understood,
          and agreed to be bound by these Terms. If you do not agree to all
          these Terms, you are not authorised to use the website and Services.
        </p>
        <p className="text-base">
          You represent and warrant that you are of legal age to form a binding
          contract and are not a person barred from receiving services under the
          laws of any applicable jurisdiction. If you are using or opening an
          account on the website on behalf of a company, entity, or organisation
          (collectively "Subscribing Organization"), then you represent and
          warrant that you are an authorised representative of that Subscribing
          Organization with the authority to bind such organisation to these
          Terms; and agree to be bound by these Terms on behalf of such
          Subscribing Organization.
        </p>
        <p className="text-base">
          The use of our Services is also governed by our Privacy Policy, which
          is incorporated into these Terms by this reference. Your agreement to
          these Terms also signifies your consent and agreement to our Privacy
          Policy.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">3. Eligibility</p>
        <p className="text-base">
          Our Services are intended only for users who are at least 18 years old
          and are of legal age to form a binding contract under the laws of
          their jurisdiction. By accessing or using our Services, you represent
          and warrant that you are at least 18 years old, of legal age in your
          jurisdiction, and fully able and competent to enter into and abide by
          these Terms.
        </p>
        <p className="text-base">
          Cipher Labs Services are not available to persons under the age of 18
          or to any users previously suspended or removed from the Services by
          Cipher Labs. If you are using the Services on behalf of a company,
          entity, or organisation, you represent and warrant that you are an
          authorised representative with the authority to bind that organisation
          to these Terms and that you agree to these Terms on behalf of that
          organisation.
        </p>
        <p className="text-base">
          We may, in our sole discretion, refuse to offer the Services to any
          person or entity and change the eligibility criteria at any time. You
          are solely responsible for ensuring that these Terms are in compliance
          with all laws, rules, and regulations applicable to you, and the right
          to access the Services is revoked where these Terms or use of the
          Services is prohibited or conflicts with any applicable law, rule, or
          regulation.
        </p>
        <p className="text-base">
          If you are not eligible to use our Services, or if you do not agree to
          these Terms, then please do not use our Services. Your use of our
          Services in any way means that you agree to all of these Terms, which
          will remain in effect while you use the Services.
        </p>
        <p className="text-base">
          Please note that these Terms do not create any third-party beneficiary
          rights in any individual or entity that is not a party to these Terms.
          You may not assign your rights or obligations under these Terms
          without Cipher Labs’ prior written consent.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">4. API Key Usage</p>
        <p className="text-base">
          At Cipher Labs, we take your privacy and the security of your data
          very seriously. As part of our services, we may need to utilise your
          API keys to deliver certain functionalities, such as accessing your
          Trading Journal information and providing relevant analytics.
        </p>
        <p className="text-base">
          When you provide your API keys, they are used strictly to interact
          with your account on the respective blockchain or trading platform, to
          fetch information about your trades, and to display your trading
          statistics on our platform. These keys are not stored or recorded on
          our servers in any form.
        </p>
        <p className="text-base">
          We assure you that the API keys you provide are utilised in a
          read-only mode. This means they are not capable of executing trades,
          making withdrawals, or performing any other transactional operations.
          Their function is strictly limited to fetching information necessary
          for the trading journal feature of our platform. In the unlikely event
          that these API keys are obtained by an unauthorised party, the risk is
          limited to that party's ability to view or close your trades. However,
          we have implemented robust security measures to prevent such an
          occurrence. It is important to understand that you retain control over
          these API keys and can revoke them anytime from the respective
          blockchain or trading platform.
        </p>
        <p className="text-base">
          Please ensure that you only enter your API keys in the designated
          areas on our website and that you never share them via email or other
          means. Remember, our staff will never ask you for your API keys. By
          providing us with your API keys, you agree to their use as described
          above. If you do not agree with or feel uncomfortable with this usage,
          you may choose not to use the specific features that require your API
          keys.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">5. Services and Usage</p>
        <p className="text-base">
          Our Services at Cipher Labs are designed to provide a comprehensive
          suite of tools for users in the blockchain and crypto trading space.
          The primary features we offer include, but are not limited to:
        </p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>
            Trading Journal: This tool allows users to record, track, and
            analyse their trading activities in a systematic and organised
            manner. The Trading Journal fetches trade-related data from the
            user's account on the relevant trading platforms using the API keys
            provided by the user.
          </li>
          <li>
            Analytics Dashboard: The Analytics Dashboard provides users in-depth
            analytics and insights about a platform's trading activities. This
            includes, but is not limited to, data visualisations, trend
            analysis, and other metrics that can aid in making informed trading
            decisions.
          </li>
        </ul>
        <p className="text-base">
          <span className="font-bold">Acceptable Use</span>: You agree to use
          our Services only for lawful purposes and in a way that does not
          infringe the rights of, restrict or inhibit anyone else's use and
          enjoyment of the website. You must not use our Services to:
        </p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>
            Misrepresent your identity or affiliation with any person or
            organisation.
          </li>
          <li>
            Send, knowingly receive, upload, download, use, or re-use any
            material that does not comply with these Terms.
          </li>
          <li>
            Transmit or procure the sending of any unsolicited or unauthorised
            advertising or promotional material.
          </li>
          <li>
            Knowingly transmit any data, send or upload any material that
            contains viruses or any other harmful programs or similar computer
            code designed to adversely affect the operation of any computer
            software or hardware.
          </li>
        </ul>
        <p className="text-base">
          <span className="font-bold">Unacceptable Use</span>: Our Services
          should not be used in any way that causes, or may be likely to cause,
          the website, or access to it, to be interrupted, damaged, or impaired
          in any way. Unacceptable use includes but is not limited to:
        </p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>
            Attempting to gain unauthorised access to the Services, the server
            on which the website is stored, or any server, computer, or database
            connected to the website.
          </li>
          <li>
            Attacking the website via a denial-of-service attack or a
            distributed denial-of-service attack.
          </li>
          <li>
            Attempting to reverse-engineer or replicate the functionality of our
            Services for the purpose of creating a competitive service.
          </li>
        </ul>
        <p className="text-base">
          By using our Services, you agree to adhere to these guidelines for
          acceptable and unacceptable use. Failure to comply with these
          guidelines may result in the termination or suspension of your access
          to our Services at our sole discretion.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">6. User Accountability</p>
        <p className="text-base">
          Cipher Labs values the integrity of its Services and expects the same
          from its users. By using the Services, you agree to abide by the
          following conduct guidelines:
        </p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>
            You must comply with all applicable laws and regulations in using
            the Services.
          </li>
          <li>
            You must not engage in fraudulent activities or actions that could
            interfere with the Services or negatively affect other users’
            ability to use the Services.
          </li>
          <li>
            You must not upload, post, transmit or otherwise distribute
            information that infringes upon another person's intellectual
            property rights or other proprietary, contractual or fiduciary
            rights or obligations.
          </li>
          <li>
            You must not impersonate another person or entity or falsify or
            delete any author attributions, legal or other proper notices or
            proprietary designations or labels of the origin or source of
            software or other material.
          </li>
          <li>
            You must not use the Services for any illegal purpose or in
            violation of any local, state, national, or international law,
            including, without limitation, laws governing intellectual property
            and other proprietary rights and data protection and privacy.
          </li>
        </ul>
        <p className="text-base">
          Violations of any of the user conduct rules may result in immediate
          termination of your access to the Services without notice at Cipher
          Labs' sole discretion. In such a case, you may be prohibited from
          accessing and using the Services in the future.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">7. Intellectual Property Rights</p>
        <p className="text-base">
          All the content and materials available on Cipher Labs, including but
          not limited to text, graphics, website name, code, images, and logos,
          are the intellectual property of Cipher Labs and are protected by
          applicable copyright and trademark law. Any inappropriate use,
          including but not limited to the reproduction, distribution, display,
          or transmission of any content on this site, is strictly prohibited
          unless specifically authorised by Cipher Labs.
        </p>
        <p className="text-base">
          The Cipher Labs name, the Cipher Labs logo, and all related names,
          logos, product and service names, designs, and slogans are trademarks
          of Cipher Labs or its affiliates or licensors. You must not use such
          marks without the prior written permission of Cipher Labs. All other
          names, logos, product and service names, designs, and slogans on this
          website are the trademarks of their respective owners.
        </p>
        <p className="text-base">
          We respect the intellectual property rights of others and request that
          you do the same. If you believe that any material available on or
          through our Services infringes upon any copyright you own or control,
          please immediately notify us at legal@cipherlabs.xyz.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">8. Third-Party Links</p>
        <p className="text-base">
          For your convenience, our Services may provide links or pointers to
          third-party sites. We make no representations about any other websites
          that may be accessed from our Services. If you choose to access such
          sites, you do so at your own risk. Cipher Labs has no control over the
          contents of any such third-party sites and accepts no responsibility
          for them or any loss or damage arising from your use of them. You are
          subject to any terms and conditions of such third-party sites.
        </p>
        <p className="text-base">
          Such links do not imply our endorsement or association with the linked
          site or the third-party entities. You should carefully review their
          privacy statements and other conditions of use. We reserve the right
          to terminate a link to a third-party site at any time, and the fact
          that we provide such a link does not mean that we endorse, authorise,
          or sponsor that site, nor does it mean that we are affiliated with the
          third-party site's owners or sponsors.
        </p>
        <p className="text-base">
          Please note that these third-party sites may send their own cookies to
          users, collect data, solicit personal information, and generate their
          own privacy and customer policies. Cipher Labs, Inc. is not
          responsible and cannot be held liable for the content and activities
          of these sites. Therefore, we strongly advise you to review the
          Privacy Policies and Terms of Use of these sites before using them.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">9. Disclaimers</p>
        <p className="text-base">
          Cipher Labs, Inc. offers its Services on an “as is” and “as available”
          basis. Other than what is expressly stated in these Terms, no explicit
          promises about the Services, their functionality, reliability,
          quality, availability, suitability to meet your specific needs or
          their uninterrupted or error-free operation are made. We also do not
          guarantee the accuracy, timeliness, or completeness of any
          information, data, or results provided by the Services.
        </p>
        <p className="text-base">
          Furthermore, all results stemming from hypothetical, simulated
          performance tests and quantitative modelling inherently bear
          limitations. Since these results do not represent actual trading and
          the trades have not been executed, the outcomes may over- or
          under-compensate for the impact of certain market factors, such as
          lack of liquidity. Simulated trading programs and quantitative
          analysis, in general, are designed with the benefit of hindsight.
          Therefore, no representation is being made that any account will or is
          likely to achieve profit or losses similar to those shown.
        </p>
        <p className="text-base">
          Cipher Labs and its Services do not provide financial, investment, or
          trading advice, and you should not regard any of the Services' content
          as such. We do not recommend that any specific security, portfolio of
          securities, transaction or investment strategy is suitable for any
          specific person. We urge you to conduct your own due diligence and
          consult with a financial advisor before making any investment
          decisions. All users should assume that all information provided
          regarding companies, investments, assets, and markets is untrustworthy
          unless verified by their own independent research.
        </p>
        <p className="text-base">
          Investing in securities and/or crypto assets is highly risky. You may
          lose some or all of the money invested. Additionally, engaging in
          margin transactions could lead to losses exceeding the amount
          invested. Past performance of any security and/or crypto assets or
          strategy does not guarantee future results. Trading results can never
          be guaranteed. Future returns are not guaranteed, and a loss of
          original capital may occur.
        </p>
        <p className="text-base">
          None of the content published in the Services constitutes a
          recommendation that any particular security, portfolio of securities,
          transaction, or investment strategy suits any specific person. You
          should seek advice from an independent financial advisor. The
          investments and services described herein and through the Services may
          not be suitable for all investors and may not be suitable for you or
          your situation. All content provided by the Services is for
          informational, educational, and entertainment purposes only.
        </p>
        <p className="text-base">
          The information provided through the Services does not constitute
          investment advice, financial advice, trading advice, or any other sort
          of advice. The Services and any associated media may contain
          inaccuracies, typographical errors, and other errors. You understand
          that you are using any and all information available here at your own
          risk.
        </p>
        <p className="text-base">
          The Services may be made available or accessed in connection with
          third-party services and content (including advertising) with
          different terms of use and privacy policies. We do not endorse these
          third-party services and content and are not responsible or liable for
          any of their products or services. Your access to the Services using
          these applications or devices is subject to the terms of service and
          privacy policies of these third parties.
        </p>
        <p className="text-base">
          In addition to these disclaimers, we are not providing any financial
          or investment advice or services via the Services and should not be
          relied upon as a substitute for consultations with qualified
          professionals who are familiar with your individual needs. Please
          consult your accountant, tax advisor, stockbroker, and/or financial
          advisor as necessary.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">10. Limitation of Liability</p>
        <p className="text-base">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CIPHER LABS,
          ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES,
          BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR
          PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
          USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR
          ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii)
          ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (iii) ANY
          CONTENT OBTAINED FROM THE SERVICES; AND (iv) UNAUTHORIZED ACCESS, USE
          OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON
          WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL
          THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF
          SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE
          FAILED OF ITS ESSENTIAL PURPOSE.
        </p>
        <p className="text-base">
          Your sole and exclusive right and remedy in case of dissatisfaction
          with the services or any other grievance shall be your termination and
          discontinuation of access to or use of the services.
        </p>
        <p className="text-base">
          As some jurisdictions do not allow the exclusion or the limitation of
          liability for consequential or incidental damages, in such
          jurisdictions, our liability shall be limited to the maximum extent
          permitted by law.
        </p>
        <p className="text-base">
          This limitation of liability section applies whether the alleged
          liability is based on contract, tort, negligence, strict liability, or
          any other basis, even if Cipher Labs has been advised of the
          possibility of such damage.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">11. Indemnification</p>
        <p className="text-base">
          You agree to defend, indemnify, and hold harmless Cipher Labs, its
          parent company, officers, directors, employees, and agents, from and
          against any claims, liabilities, damages, losses, and expenses,
          including, without limitation, reasonable legal and accounting fees,
          arising out of or in any way connected with your access to or use of
          the Services or your violation of these Terms.
        </p>
        <p className="text-base">
          This includes any third-party claims, actions, or demands, including
          without limitation reasonable legal and accounting fees, alleging or
          resulting from your use of our Services, your conduct, your violation
          of these Terms, or your violation of any third-party rights, including
          without limitation, any trademark, copyright, property, or privacy
          rights.
        </p>
        <p className="text-base">
          In the event of such a claim, we will provide notice of the claim,
          suit, or action to the contact information we have for your account.
          You will cooperate as fully and reasonably required in Cipher Labs’
          defence of any claim. Cipher Labs reserves the right, at its own
          expense, to assume the exclusive defence and control of any matter
          otherwise subject to indemnification by you, and you will not, in any
          event, settle any claim without the prior written consent of Cipher
          Labs.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">12. Termination</p>
        <p className="text-base">
          Cipher Labs reserves the right, in its sole discretion, to terminate
          or suspend your access to all or any part of our Services at any time
          for any reason, including but not limited to:
        </p>
        <ul className="text-base list-disc ml-10 list-outside">
          <li>Your violation of these Terms;</li>
          <li>Your failure to pay any fees due for our Services;</li>
          <li>Suspected or actual illegal activity;</li>
          <li>A request by law enforcement or other government agencies;</li>
          <li>Extended periods of inactivity on your part;</li>
          <li>Technical or security issues or problems;</li>
          <li>Engagement in fraudulent or illegal activities;</li>
          <li>
            Non-compliance with any rules, regulations, laws, or terms that
            apply to your use of the Services.
          </li>
        </ul>
        <p className="text-base">
          Upon termination, you will no longer have access to the Services, and
          we may remove and discard any content you have submitted to the
          Services. Furthermore, you agree that we will not be liable to you or
          any third party for the termination of your access to our Services.
        </p>
        <p className="text-base">
          Termination of your access to and use of our Services does not relieve
          you of any obligations arising or accruing prior to such termination
          or limit any liability you otherwise may have to Cipher Labs or any
          third party, including, without limitation, any indemnity obligations
          contained herein. The introduction, Acceptance of Terms, Eligibility,
          Intellectual Property Rights, User Accountability, Limitation of
          Liability, Indemnification, and Dispute Resolution provisions of these
          Terms shall survive any such termination or expiration.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">13. Governing Law</p>
        <p className="text-base">
          These Terms are governed by and construed in accordance with the laws
          of the State of New South Wales, Australia, without giving effect to
          any principles of conflicts of law. You agree to the personal
          jurisdiction by and venue in the state and federal courts in Sydney,
          New South Wales, Australia, and waive any objection to such
          jurisdiction or venue.
        </p>
        <p className="text-base">
          The foregoing provision may not apply to you depending on the laws in
          your jurisdiction. This Governing Law section shall survive any
          termination of your use of the Cipher Labs Services.
        </p>
        <p className="text-base">
          In the event that Cipher Labs may lawfully exclude any implied
          conditions or warranties to the extent permissible by law, we
          expressly disclaim any liability for breach of those conditions or
          warranties. In jurisdictions where exclusions for implied conditions
          or warranties are not allowed, Cipher Labs' liability will at all
          times be limited to the maximum extent permitted by law.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">14. Dispute Resolution</p>
        <p className="text-base">
          In the event of a dispute arising out of or relating to these Terms,
          including any question regarding its existence, validity, or
          termination, the parties shall first seek settlement of that dispute
          by mediation in accordance with the Australian Centre for
          International Commercial Arbitration (ACICA) Mediation Rules, which
          are deemed to be incorporated by reference into this clause.
        </p>
        <p className="text-base">
          If the dispute is not settled by mediation within 30 days of the
          commencement of the mediation, or such further period as the parties
          shall agree in writing, the dispute shall be referred to and finally
          resolved by arbitration under the ACICA Arbitration Rules. The
          arbitral tribunal shall consist of a sole arbitrator, to be appointed
          by the Chairman of ACICA. The seat, or legal place, of arbitration,
          shall be Sydney, New South Wales, Australia.
        </p>
        <p className="text-base">
          The language to be used in the mediation and the arbitration shall be
          English. The governing law of these Terms shall be the substantive law
          of New South Wales, Australia. Judgment upon the award rendered by the
          arbitrator(s) may be entered in any court having jurisdiction thereof.
        </p>
        <p className="text-base">
          Please note that this dispute resolution provision does not preclude
          you from bringing issues to the attention of federal, state, or local
          agencies. These agencies can, if the law allows, seek relief on your
          behalf.
        </p>
        <p className="text-base">
          Notwithstanding any provision in these Terms, we agree that if we make
          any future change to this arbitration provision (other than a change
          to any notice address, website link, or telephone number provided
          herein), that change will not apply to any dispute of which we had
          written notice on the effective date of the change.
        </p>
        <p className="text-base">
          You agree that, by entering into these Terms, you and Cipher Labs are
          each waiving the right to a trial by jury or to participate in a class
          action. Your rights will be determined by a neutral arbitrator, not a
          judge or jury. The Federal Arbitration Act governs the interpretation
          and enforcement of this Dispute Resolution provision.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">15. Changes to Terms of Use</p>
        <p className="text-base">
          Cipher Labs reserves the right, in its sole discretion, to modify or
          replace these Terms of Use at any time. If we make changes that are
          material, we will provide you with reasonable advance notice of these
          changes, such as by sending an email to the email address associated
          with your account, providing notice through the Services, or posting a
          notice on our website.
        </p>
        <p className="text-base">
          The updated Terms of Use will be effective as of the time of posting
          or such later date as may be specified in the updated Terms of Use. By
          continuing to access or use the Services after the effective date of
          any modifications to the Terms of Use, you agree to be bound by the
          updated Terms of Use. If you do not agree to the updated Terms of Use,
          you should stop using the Services immediately.
        </p>
        <p className="text-base">
          It is your responsibility to check the Terms of Use periodically for
          changes. Your continued use of the Services following the posting of
          any changes to the Terms of Use constitutes acceptance of those
          changes.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-base">16. Contact Information</p>
        <p className="text-base">
          If you have any questions about these Terms, please contact Cipher
          Labs at support@cipherlabs.xyz or write to us at:
        </p>
        <p className="text-base">
          Cipher Labs <br/>
          55 Bridge St <br/>
          Sydney, NSW 2000 <br/>
          Australia
        </p>
      </section>
    </section>
  );
};

export default TermsOfUsePage;
