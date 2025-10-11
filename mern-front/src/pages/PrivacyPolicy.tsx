import React, { useState } from 'react'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/termsandservice.css'

export default function PrivacyPolicy() {

    const navigate: NavigateFunction = useNavigate()

    const [openModel, setOpenModel] = useState<boolean>(false)
    const [openModelSignUp, setOpenModelSignUp] = useState<boolean>(false)

    return (
        <div className='flex flex-col justify-left items-start '>
            <nav className='pl-40 pr-40 pt-4 pb-4 border-b-3 border-green-500 w-full flex justify-between items-center'>
                <img src={logo} alt="" className='h-12 cursor-pointer' onClick={() => { navigate('/') }} />
                <div className='flex gap-5 items-center justify-center'>
                    <button onClick={() => { setOpenModel(true) }} className='flex items-center text-sm gap-2 text-gray-500 cursor-pointer'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5' />write</button>
                    <button onClick={() => { setOpenModelSignUp(true) }} className='bg-green-700 text-white text-sm rounded-4xl pl-3 pr-3 pt-1.5 pb-1.5 cursor-pointer'>Sign up</button>
                    <button onClick={() => { setOpenModel(true) }} className='text-gray-500 text-sm cursor-pointer'>Sign in</button>
                </div>
            </nav>

            <h1 className='pl-40 pr-40 border-b border-gray-100 w-full cursor-pointer font-medium text-xl pt-3.5 pb-3.5' onClick={() => { navigate('/') }}>currents. policy</h1>

            <div className='pl-40 pr-40 flex justify-center gap-24'>
                <div className='flex flex-col mt-19'>
                    <div className='h-15 w-15 bg-gradient-to-bl from bg-green-400 to-green-700 rounded-sm mb-5 flex justify-center items-center'>
                        <p id='lable' className='text-3xl font-bold ml-3 text-white'>Cu</p>
                    </div>
                    <p className='text-gray-400 font-medium text-sm'>Terms of Service, Rules, and Policies</p>
                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='mt-15 text-5xl font-bold tracking-tighter'>currents. Privacy Policy</h1>
                    <p className='text-2xl text-gray-400 mt-2'>Effective: March 24, 2022</p>
                    <p className='text-sm text-gray-400 mt-1.5 border-b border-gray-100 pb-5'>11 min read · Sep 2, 2020</p>
                    <p id='terms-tenses' className='mt-4 text-xl leading-8 '>
                        <span className='italic font-black tracking-tighter'>You can see our previous Privacy Policy here.</span> <br />
                        <br />
                        This Privacy Policy explains how Currents Corporation ("Currents," "we," or "us") collects, uses, and discloses information about you. This Privacy Policy applies when you use our websites, mobile applications, and other online products and services that link to this Privacy Policy (collectively, our "Services"), contact our customer service team, engage with us on social media, or otherwise interact with us.
                        <br /><br />
                        We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or providing you with a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.
                        <br /><br />
                        We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, purchase a membership, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, display name, username, bio, email address, business information, your content, including your avatar image, photos, posts, responses, and series published by you, and any other information you choose to provide.
                        <br /><br />
                        In some cases, we may also collect information you provide about others, such as when you purchase a Currents membership as a gift for someone. We will use this information to fulfill your request and will not send communications to your contacts unrelated to your request, unless they separately consent to receive communications from us or otherwise engage with us.

                        We do not collect payment information through our Services. We rely on third parties to process payments in connection with our Services. Any information you provide to facilitate such a payment is subject to the third-party payment processor’s privacy policy, and we encourage you to review this policy before you provide any information to the payment processor.
                    </p>
                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Information We Collect from Other Sources</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        We obtain information from third-party sources. For example, we may collect information about you from social networks, accounting services providers and data analytics providers. Additionally, if you create or log into your Currents account through a third-party platform (such as Apple, Facebook, Google, or Twitter), we will have access to certain information from that platform, such as your name, lists of friends or followers, birthday, and profile picture, in accordance with the authorization procedures determined by such platform.                        <br /><br />
                        Your use of the Services must comply with our Rules.
                        <br /><br />
                        You may need to register for an account to access some or all of our Services. Help us keep your account protected. Safeguard your password to the account, and keep your account information current. We recommend that you do not share your password with others.
                        <br /><br />
                        If you’re accepting these Terms and using the Services on behalf of someone else (such as another person or entity), you represent that you’re authorized to do so, and in that case the words “you” or “your” in these Terms include that other person or entity.
                        <br /><br />
                        To use our Services, you must be at least 13 years old.
                        <br /><br />
                        If you use the Services to access, collect, or use personal information about other Currents users ("Personal Information"), you agree to do so in compliance with applicable laws. You further agree not to sell any Personal Information, where the term "sell" has the meaning given to it under applicable laws.
                        <br /><br />
                        For Personal Information you provide to us (e.g. as a Newsletter Editor), you represent and warrant that you have lawfully collected the Personal Information and that you or a third party has provided all required notices and collected all required consents before collecting the Personal Information. You further represent and warrant that Currents's use of such Personal Information in accordance with the purposes for which you provided us the Personal Information will not violate, misappropriate or infringe any rights of another (including intellectual property rights or privacy rights) and will not cause us to violate any applicable laws.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>THIRD-PARTY EMBEDS</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        Currents does not host some of the content displayed on our Services. Users have the ability to post content that is actually hosted by a third party, but is embedded in our pages (an "Embed"). When you interact with an Embed, it can send information about your interaction to the hosting third party just as if you were visiting the third party's site directly. For example, when you load a Currents post page with a YouTube video Embed and watch the video, YouTube receives information about your activity, such as your IP address and how much of the video you watch. Currents does not control what information third parties collect through Embeds or what they do with the information. This Privacy Policy does not apply to information collected through Embeds. The privacy policy belonging to the third party hosting the Embed applies to any information the Embed collects, and we recommend you review that policy before interacting with the Embed.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>TRANSFER OF INFORMATION TO THE UNITED STATES AND OTHER COUNTRIES</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        Currents is headquartered in the United States, and we have operations and service providers in the United States and other countries. Therefore, we and our service providers may transfer your personal information to, or store or access it in, jurisdictions that may not provide levels of data protection that are equivalent to those of your home jurisdiction. For example, we transfer personal data to Amazon Web Services, one of our service providers that processes personal information for us in various data center locations across the globe, including those listed here. We will take steps to ensure that your personal information receives an adequate level of protection in the jurisdictions in which we process it.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Termination</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        You're free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with or without notice.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Communications Preferences</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        You may opt out of receiving certain communications from us, such as digests, newsletters, and activity notifications, by following the instructions in those communications or through your account’s Settings page. If you opt out, we may still send you administrative emails, such as those about your account or our ongoing business relations.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>YOUR CALIFORNIA PRIVACY RIGHTS</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        The California Consumer Privacy Act or “CCPA” (Cal. Civ. Code § 1798.100 et seq.) affords consumers residing in California certain rights with respect to their personal information. If you are a California resident, this section applies to you.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Disclaimers — Service is "As Is"</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        Currents aims to give you great Services but there are some things we can't guarantee. Your use of our Services is at your sole risk. You understand that our Services and any content posted or shared by users on the Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In addition, Currents doesn't represent or warrant that our Services are accurate, complete, reliable, current or error-free. No advice or information obtained from Currents or through the Services will create any warranty or representation not expressly made in this paragraph. Currents may provide information about third-party products, services, activities or events, or we may allow third parties to make their content and information available on or through our Services (collectively, "Third-Party Content"). We do not control or endorse, and we make no representations or warranties regarding, any Third-Party Content. You access and use Third-Party Content at your own risk. Some locations don't allow the disclaimers in this paragraph and so they might not apply to you.
                    </p>

                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
Subject to certain limitations, you have the right to (1) request to know more about the categories and specific pieces of personal information we collect, use, and disclose about you, (2) request deletion of your personal information, (3) opt out of any sales of your personal information, if we engage in that activity in the future, and (4) not be discriminated against for exercising these rights. You may make these requests by emailing us at privacy@currents.com or by completing this webform. We will verify a webform request by asking you to provide identifying information. We will not discriminate against you if you exercise your rights under the CCPA.                        <br /><br />
                        In countries where exclusions or limitations of liability are allowed, Currents and Currents Parties won't be liable for:
                        <br /><br />
If we receive your request from an authorized agent, we may ask for evidence that you have provided such agent with a power of attorney or that the agent otherwise has valid written authority to submit requests to exercise rights on your behalf. This may include requiring you to verify your identity. If you are an authorized agent seeking to make a request, please contact us.                        <br /><br />
                        (b) Other than for the types of liability we can't limit by law (as described in this section), we limit the total liability of Currents and the other Currents Parties for any claim arising out of or relating to these Terms or our Services, regardless of the form of the action, to the greater of $50.00 USD or the amount paid by you to use our Services.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Resolving Disputes; Binding Arbitration</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        We want to address your concerns without needing a formal legal case. Before filing a claim against Currents, you agree to contact us and attempt to resolve the claim informally by sending a written notice of your claim by email at legal@currents.com or by certified mail addressed to Currents Corporation, 3500 South DuPont Highway Suite IQ-101 Dover, DE 19901. The notice must (a) include your name, residence address, email address, and telephone number; (b) describe the nature and basis of the claim; and (c) set forth the specific relief sought. Our notice to you will be sent to the email address associated with your online account and will contain the information described above. If we can't resolve matters within thirty (30) days after any notice is sent, either party may initiate a formal proceeding.
                        <br /><br />
                        Please read the following section carefully because it requires you to arbitrate certain disputes and claims with Currents and limits the manner in which you can seek relief from us, unless you opt out of arbitration by following the instructions set forth below. No class or representative actions or arbitrations are allowed under this arbitration provision. In addition, arbitration precludes you from suing in court or having a jury trial.
                        <br /><br />
                        (a) <span className='font-bold'>No Representative Actions.</span> You and Currents agree that any dispute arising out of or related to these Terms or our Services is personal to you and Currents and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class action or any other type of representative proceeding.
                        <br /><br />
                        (b) <span className='font-bold'>Arbitration of Disputes.</span> Except for small claims disputes in which you or Currents seeks to bring an individual action in small claims court located in the county where you reside or disputes in which you or Currents seeks injunctive or other equitable relief for the alleged infringement or misappropriation of intellectual property, you and Currents waive your rights to a jury trial and to have any other dispute arising out of or related to these Terms or our Services, including claims related to privacy and data security, (collectively, "Disputes") resolved in court. All Disputes submitted to JAMS will be resolved through confidential, binding arbitration before one arbitrator. Arbitration proceedings will be held in San Francisco, California unless you're a consumer, in which case you may elect to hold the arbitration in your county of residence. For purposes of this section a "consumer" means a person using the Services for personal, family or household purposes. You and Currents agree that Disputes will be held in accordance with the JAMS Streamlined Arbitration Rules and Procedures ("JAMS Rules"). The most recent version of the JAMS Rules are available on the JAMS website and are incorporated into these Terms by reference. You either acknowledge and agree that you have read and understand the JAMS Rules or waive your opportunity to read the JAMS Rules and waive any claim that the JAMS Rules are unfair or should not apply for any reason.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Governing Law and Venue</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        These Terms and any dispute that arises between you and Currents will be governed by California law except for its conflict of law principles. Any dispute between the parties that's not subject to arbitration or can't be heard in small claims court will be resolved in the state or federal courts of California and the United States, respectively, sitting in San Francisco, California.
                        <br /><br />
                        Some countries have laws that require agreements to be governed by the local laws of the consumer's country. This paragraph doesn't override those laws.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Amendments</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        We may make changes to these Terms from time to time. If we make changes, we'll provide you with notice of them by sending an email to the email address associated with your account, offering an in-product notification, or updating the date at the top of these Terms. Unless we say otherwise in our notice, the amended Terms will be effective immediately, and your continued use of our Services after we provide such notice will confirm your acceptance of the changes. If you don't agree to the amended Terms, you must stop using our Services.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>ADDITIONAL DISCLOSURES FOR INDIVIDUALS IN EUROPE</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        If you are located in the European Economic Area ("EEA"), the United Kingdom, or Switzerland, you have certain rights and protections under applicable law regarding the processing of your personal data, and this section applies to you.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Legal Basis for Processing</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        When we process your personal data, we will do so in reliance on the following lawful bases:
                        <br /><br />
                        • To perform our responsibilities under our contract with you (e.g., providing the products and services you requested).
                        <br /><br />
                        • When we have a legitimate interest in processing your personal data to operate our business or protect our interests (e.g., to provide, maintain, and improve our products and services, conduct data analytics, and communicate with you).
                        <br /><br />
                        • To comply with our legal obligations (e.g., to maintain a record of your consents and track those who have opted out of non-administrative communications).
                        <br /><br />
                        • When we have your consent to do so (e.g., when you opt in to receive non-administrative communications from us). When consent is the legal basis for our processing your personal data, you may withdraw such consent at any time.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Data Retention</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        We store personal data associated with your account for as long as your account remains active. If you close your account, we will delete your account data within 14 days. We store other personal data for as long as necessary to carry out the purposes for which we originally collected it and for other legitimate business purposes, including to meet our legal, regulatory, or other compliance obligations.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Data Subject Requests</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        Subject to certain limitations, you have the right to request access to the personal data we hold about you and to receive your data in a portable format, the right to ask that your personal data be corrected or erased, and the right to object to, or request that we restrict, certain processing. To exercise your rights:
                        <br /><br />
                        • If you sign up for a Currents account, you may at any time request an export of your personal information from the Settings page, or by going to Settings and then selecting Account within our app.
                        <br /><br />
                        • You may correct information associated with your account from the Settings page, or by going to Settings and then selecting Account within our app, and the Customize Your Interests page to update your interests.
                        <br /><br />
                        • You may withdraw consent by deleting your account at any time through the Settings page, or by going to Settings and then selecting Account within our app (except to the extent Currents is prevented by law from deleting your information).
                        <br /><br />
                        • You may object at any time to the use of your personal data by contacting privacy@currents.com.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Questions or Complaints</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        If you have a concern about our processing of personal data that we are not able to resolve, you have the right to lodge a complaint with the Data Protection Authority where you reside. Contact details for your Data Protection Authority can be found using the links below:
                        <br /><br />
                        <strong>For individuals in the EEA:</strong><br />
                        <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://edpb.europa.eu/about-edpb/board/members_en</a>
                        <br /><br />
                        <strong>For individuals in the UK:</strong><br />
                        <a href="https://ico.org.uk/global/contact-us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://ico.org.uk/global/contact-us/</a>
                        <br /><br />
                        <strong>For individuals in Switzerland:</strong><br />
                        <a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html</a>
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>CONTACT US</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@currents.com" className="text-blue-600 underline hover:text-blue-800">privacy@currents.com</a>.
                        <br /><br />
                        If you are from the EEA or the United Kingdom and have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@currents.com" className="text-blue-600 underline hover:text-blue-800">privacy@currents.com</a> or our privacy representatives as follows:
                        <br /><br />
                        <strong>Privacy representative for EEA</strong><br />
                        Unit 3D North Point House<br />
                        North Point Business Park<br />
                        New Mallow Road<br />
                        Cork T23AT2P<br />
                        Ireland
                        <br /><br />
                        <strong>Privacy representative for the United Kingdom</strong><br />
                        37 Albert Embankment<br />
                        London SE1 7TL<br />
                        United Kingdom
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Severability</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Miscellaneous</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 mb-16'>
                        Currents's failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word "including" will be interpreted to mean "including without limitation." Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.
                    </p>
                </div>
            </div>

            {/* Sign in modal */}
            {openModel && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20'></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-sm z-30 flex justify-center items-center flex-col' id='modal-card'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setOpenModel(false) }} alt="" />
                        <h1 className='text-3xl'>Welcome back.</h1>
                        <div className="flex flex-col gap-4 mt-8 mb-8">
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-6' alt="" />Sign in with Google</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-7' alt="" />Sign in with Facebook</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5.5' alt="" />Sign in with Email</button>
                        </div>
                        <div id="sign-up" className='flex gap-1 mb-5'>
                            <p>No account?</p>
                            <a href='#' onClick={() => { setOpenModelSignUp(true); setOpenModel(false); }} className='underline underline-offset-4'>Create one</a>
                        </div>
                        <div id="help" className='flex gap-1 mb-5'>
                            <p>Forgot email or trouble signing in? </p>
                            <Link to='/help-center' className='underline underline-offset-4'>Get help</Link>
                        </div>
                        <p id='modal-footer' className='text-gray-500'>By clicking "Sign in", you accept Currents's <Link to='/terms-service' className='underline underline-offset-4'>Terms of Service</Link> and <Link to='' className='underline underline-offset-4'>Privacy Policy</Link>.</p>
                    </div>
                </div>
            )}

            {/* Sign up modal */}
            {openModelSignUp && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20'></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-sm z-30 flex justify-center items-center flex-col' id='modal-card'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setOpenModelSignUp(false) }} alt="" />
                        <h1 className='text-3xl'>Join Currents.</h1>
                        <div className="flex flex-col gap-4 mt-8 mb-8">
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-6' alt="" />Sign up with Google</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-7' alt="" />Sign up with Facebook</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5.5' alt="" />Sign up with Email</button>
                        </div>
                        <div id="sign-up" className='flex gap-1 mb-5'>
                            <p>Already have an account?</p>
                            <a href='#' onClick={() => { setOpenModel(true); setOpenModelSignUp(false) }} className='underline underline-offset-4'>Sign in</a>
                        </div>
                        <p id='modal-footer' className='text-gray-500'>By clicking "Sign up", you accept Currents's <Link to='/terms-service' className='underline underline-offset-4'>Terms of Service</Link> and <Link to='' className='underline underline-offset-4'>Privacy Policy</Link>.</p>
                    </div>

                </div>
            )}

            <div id='terms-page' className='flex justify-center items-center border-t border-t-gray-200 w-full gap-5 -mt-2.5 pt-5 pb-5'>
                <Link className='text-gray-500' to="/home">Help</Link>
                <Link className='text-gray-500' to="/home">Status</Link>
                <Link className='text-gray-500' to="/home">About</Link>
                <Link className='text-gray-500' to="/home">Careers</Link>
                <Link className='text-gray-500' to="/home">Press</Link>
                <Link className='text-gray-500' to="/home">Status</Link>
                <Link className='text-gray-500' to="/home">Privacy</Link>
                <Link className='text-gray-500' to="/home">Rules</Link>
                <Link className='text-gray-500' to="/home">Terms</Link>
            </div>
        </div>
    )
}
