import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'
import '../styles/termsandservice.css'

export default function TermsService() {

    const navigate: NavigateFunction = useNavigate()

    const [openModel, setOpenModel] = useState<boolean>(false)
    const [openModelSignUp, setOpenModelSignUp] = useState<boolean>(false)

    return (
        <div className='flex flex-col justify-left items-start '>
            <nav className='pl-40 pr-40 pt-4 pb-4 border-b-3 border-green-500 w-full flex justify-between items-center'>
                <img src={logo} alt="" className='h-12' onClick={() => { navigate('/') }} />
                <div className='flex gap-5 items-center justify-center'>
                    <button onClick={() => { setOpenModel(true) }} className='flex items-center text-sm gap-2 text-gray-500 cursor-pointer'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5' />write</button>
                    <button onClick={() => { setOpenModelSignUp(true) }} className='bg-green-700 text-white text-sm rounded-4xl pl-3 pr-3 pt-1.5 pb-1.5 cursor-pointer'>Sign up</button>
                    <button onClick={() => { setOpenModel(true) }} className='text-gray-500 text-sm cursor-pointer'>Sign in</button>
                </div>
            </nav>

            <h1 className='pl-40 pr-40 border-b border-gray-100 w-full font-medium text-xl pt-3.5 pb-3.5' onClick={() => { navigate('/') }}>currents. policy</h1>

            <div className='pl-40 pr-40 flex justify-center gap-24'>
                <div className='flex flex-col mt-19'>
                    <p className='text-gray-400 font-medium text-sm'>Terms of Service, Rules, and Policies</p>
                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='mt-15 text-5xl font-bold tracking-tighter'>currents. Terms of Service</h1>
                    <p className='text-2xl text-gray-400 mt-2'>Effective: September 1, 2020</p>
                    <p className='text-sm text-gray-400 mt-1.5 border-b border-gray-100 pb-5'>12 min read · Sep 2, 2020</p>
                    <p id='terms-tenses' className='mt-4 text-xl leading-8 '>
                        <span className='italic font-black tracking-tighter'>You can see our previous Terms here.</span> <br />
                        <br />
                        Thanks for using Currents. Our mission is to deepen people's understanding of the world and spread ideas that matter.
                        <br /><br />
                        These Terms of Service ("Terms") apply to your access to and use of the websites, mobile applications and other online products and services (collectively, the "Services") provided <span className='font-black'>by A Currents Corporation ("Currents" or "we"). By clicking your consent (e.g. "Continue," "Sign-in," or "Sign-up,") or by using our Services, you agree to these Terms, including the mandatory arbitration provision and class action waiver in the Resolving Disputes; Binding Arbitration Section.</span>
                        <br /><br />
                        Our Privacy Policy explains how we collect and use your information while our Rules outline your responsibilities when using our Services. By using our Services, you’re agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for information about how we collect, use, share and otherwise process information about you.
                        <br /><br />
                        If you have any questions about these Terms or our Services, please contact us at legal@currents.com.
                    </p>
                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Your Account and Responsibilities</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        You’re responsible for your use of the Services and any content you provide, including compliance with applicable laws. Content on the Services may be protected by others’ intellectual property rights. Please don’t copy, upload, download, or share content unless you have the right to do so.
                        <br /><br />
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

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>User Content on the Services</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        Currents may review your conduct and content for compliance with these Terms and our Rules, and reserves the right to remove any violating content.
                        <br /><br />
                        Currents reserves the right to delete or disable content alleged to be infringing the intellectual property rights of others, and to terminate accounts of repeat infringers. We respond to notices of alleged copyright infringement if they comply with the law; please report such notices using our Copyright Policy.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Rights and Ownership</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8 '>
                        You retain your rights to any content you submit, post or display on or through the Services.
                        <br /><br />
                        Unless otherwise agreed in writing, by submitting, posting, or displaying content on or through the Services, you grant Currents a nonexclusive, royalty-free, worldwide, fully paid, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your content and any name, username or likeness provided in connection with your content in all media formats and distribution methods now known or later developed on the Services.
                        <br /><br />
                        Currents needs this license because you own your content and Currents therefore can't display it across its various surfaces (i.e., mobile, web) without your permission.
                        <br /><br />
                        This type of license also is needed to distribute your content across our Services. For example, you post a story on Currents. It is reproduced as versions on both our website and app, and distributed to multiple places within Currents, such as the homepage or reading lists. A modification might be that we show a snippet of your work (and not the full post) in a preview, with attribution to you. A derivative work might be a list of top authors or quotes on Currents that uses portions of your content, again with full attribution. This license applies to our Services only, and does not grant us any permissions outside of our Services.
                        <br /><br />
                        So long as you comply with these Terms, Currents gives you a limited, personal, non-exclusive, and non-assignable license to access and use our Services.
                        <br /><br />
                        The Services are protected by copyright, trademark, and other US and foreign laws. These Terms don't grant you any right, title or interest in the Services, other users' content on the Services, or Currents trademarks, logos or other brand features.
                        <br /><br />
                        Separate and apart from the content you submit, post or display on our Services, we welcome feedback, including any comments, ideas and suggestions you have about our Services. We may use this feedback for any purpose, in our sole discretion, without any obligation to you. We may treat feedback as nonconfidential.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Termination</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        You're free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with or without notice.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Transfer and Processing Data</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        In order for us to provide our Services, you agree that we may process, transfer and store information about you in the US and other countries, where you may not have the same rights and protections as you do under local law.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Indemnification</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless Currents, and our officers, directors, agents, partners and employees (individually and collectively, the "Currents Parties") from and against any losses, liabilities, claims, demands, damages, expenses or costs ("Claims") arising out of or related to your violation, misappropriation or infringement of any rights of another (including intellectual property rights or privacy rights) or your violation of the law. You agree to promptly notify Currents Parties of any third-party Claims, cooperate with Currents Parties in defending such Claims and pay all fees, costs and expenses associated with defending such Claims (including attorneys' fees). You also agree that the Currents Parties will have control of the defense or settlement, at Currents's sole option, of any third-party Claims.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Disclaimers — Service is "As Is"</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        Currents aims to give you great Services but there are some things we can't guarantee. Your use of our Services is at your sole risk. You understand that our Services and any content posted or shared by users on the Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In addition, Currents doesn't represent or warrant that our Services are accurate, complete, reliable, current or error-free. No advice or information obtained from Currents or through the Services will create any warranty or representation not expressly made in this paragraph. Currents may provide information about third-party products, services, activities or events, or we may allow third parties to make their content and information available on or through our Services (collectively, "Third-Party Content"). We do not control or endorse, and we make no representations or warranties regarding, any Third-Party Content. You access and use Third-Party Content at your own risk. Some locations don't allow the disclaimers in this paragraph and so they might not apply to you.
                    </p>

                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Limitation of Liability</p>
                    <p id='terms-tenses' className='mt-8 text-xl leading-8'>
                        We don't exclude or limit our liability to you where it would be illegal to do so; this includes any liability for the gross negligence, fraud or intentional misconduct of Currents or the other Currents Parties in providing the Services. In countries where the following types of exclusions aren't allowed, we're responsible to you only for losses and damages that are a reasonably foreseeable result of our failure to use reasonable care and skill or our breach of our contract with you. This paragraph doesn't affect consumer rights that can't be waived or limited by any contract or agreement.
                        <br /><br />
                        In countries where exclusions or limitations of liability are allowed, Currents and Currents Parties won't be liable for:
                        <br /><br />
                        (a) Any indirect, consequential, exemplary, incidental, punitive, or special damages, or any loss of use, data or profits, under any legal theory, even if Currents or the other Currents Parties have been advised of the possibility of such damages.
                        <br /><br />
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
