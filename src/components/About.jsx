import React, { useState } from 'react'
import { assets, infoList, toolsData } from '../assets/assets'
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => setActiveIndex(prev => (prev === index ? null : index));
  const activeDetail = activeIndex !== null ? infoList[activeIndex].detail : null;
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
        <h2 className='text-center text-5xl font-Ovo' >About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-start gap-10 my-10'>
            <div className='w-72 sm:w-96 rounded-3xl max-w-none'>
               <img src={assets.user_image} alt='' className='w-full rounded-3xl'></img>
            </div>
            <div className='flex-1 w-full'>
                <p className='mb-4 max-w-2xl font-Ovo'>
                    Software Engineer with 15+ years of experience designing, building, and operating large-scale distributed systems across e-commerce, messaging, SaaS, and data platforms — serving hundreds of millions of users globally. Proven track record delivering mission-critical backend systems in Java, Python, and Node.js, with deep expertise in microservices architecture, distributed caching (Redis), pub/sub systems (Kafka, RabbitMQ), and multi-region deployments. Equally at home across the full stack, with strong command of modern frontend frameworks (Next.js, React, TypeScript, Tailwind CSS) and cloud platforms (AWS, Azure).
                </p>
                <p className='mb-4 max-w-2xl font-Ovo'>
                    Experienced owning platforms end-to-end — from RESTful API design and NoSQL datastores to pixel-perfect frontends — while driving observability, reliability, and incident response through tools like Kibana and Grafana. Led the design and rollout of internal AI Agent automation leveraging Claude and GPT-4 — enabling intelligent code analysis, automated test generation, and on-demand documentation retrieval that measurably accelerated the team&rsquo;s release and deployment velocity. Skilled at defining multi-quarter technical roadmaps, leading cross-functional initiatives, and mentoring engineering teams.
                </p>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    Passionate about engineering excellence at scale — solving complex distributed systems challenges, optimizing performance, and building real-time personalized platforms that drive measurable user engagement and business impact.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({ icon, title, description, detail }, index) => (
                        <li key={index} className='flex flex-col'>
                            <div className={`flex-1 border rounded-xl p-6 transition-all duration-300 shadow-none
                                hover:-translate-y-1 hover:shadow-[4px_4px_0_#000000] cursor-default
                                ${activeIndex === index ? 'border-gray-800' : 'border-gray-400 hover:bg-gray-100'}`}
                            >
                                <img className='w-7 mt-3' src={icon} alt={title} />
                                <h3 className='my-4 font-semibold text-gray-700 font-Ovo'>{title}</h3>
                                <p className='text-gray-600 text-sm font-Ovo'>{description}</p>
                                {detail && (
                                    <button
                                        onClick={() => toggle(index)}
                                        className='flex items-center gap-1 mt-4 text-sm font-medium text-gray-700'
                                    >
                                        {activeIndex === index ? 'Read less' : 'Read more'}
                                        <span className={`transition-transform duration-300 inline-block
                                            ${activeIndex === index ? 'rotate-90' : ''}`}>
                                            →
                                        </span>
                                    </button>
                                )}
                            </div>
                            {detail && (
                                <div className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out
                                    ${activeIndex === index ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <div className='border border-gray-300 rounded-xl bg-gray-50'>
                                        <div className='flex items-center justify-between px-5 py-3 border-b border-gray-200'>
                                            <span className='text-sm font-semibold text-gray-700'>{detail.heading}</span>
                                            <button
                                                onClick={() => setActiveIndex(null)}
                                                className='text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none'
                                                aria-label='Close'
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        {Array.isArray(detail.body) ? (
                                            <ul className='px-5 py-4 space-y-1'>
                                                {detail.body.map(({ label, value }, i) => (
                                                    <li key={i} className='text-sm text-gray-600 font-Ovo'>
                                                        <span className='font-semibold text-gray-700'>{label}:</span> {value}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className='px-5 py-4 text-sm text-gray-600 font-Ovo leading-relaxed'>
                                                {detail.body}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className={`hidden sm:block overflow-hidden transition-all duration-500 ease-in-out
                    ${activeDetail ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                >
                    {activeDetail && (
                        <div className='border border-gray-300 rounded-xl bg-gray-50'>
                            <div className='flex items-center justify-between px-5 py-3 border-b border-gray-200'>
                                <span className='text-sm font-semibold text-gray-700'>{activeDetail.heading}</span>
                                <button
                                    onClick={() => setActiveIndex(null)}
                                    className='text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none'
                                    aria-label='Close'
                                >
                                    ✕
                                </button>
                            </div>
                            {Array.isArray(activeDetail.body) ? (
                                <ul className='px-5 py-4 space-y-1'>
                                    {activeDetail.body.map(({ label, value }, i) => (
                                        <li key={i} className='text-sm text-gray-600 font-Ovo'>
                                            <span className='font-semibold text-gray-700'>{label}:</span> {value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='px-5 py-4 text-sm text-gray-600 font-Ovo leading-relaxed'>
                                    {activeDetail.body}
                                </p>
                            )}
                        </div>
                    )}
                </div>
                <div className='flex items-center gap-4 my-8'>
                    <span className='flex-1 h-px bg-gray-200'></span>
                    <h4 className='text-sm font-semibold uppercase tracking-widest text-gray-500 font-Ovo'>Tools I Use</h4>
                    <span className='flex-1 h-px bg-gray-200'></span>
                </div>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 shadow-none hover:shadow-[4px_4px_0_#000000] duration-500' key={index}>
                            <img className='w-5 sm:w-7' src={tool} alt='Tool'></img>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About