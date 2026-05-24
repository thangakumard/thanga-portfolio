import React from 'react'
import { assets,infoList, toolsData } from '../assets/assets'
const About = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
        <h2 className='text-center text-5xl font-Ovo' >About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-start gap-10 my-10'>
            <div className='w-72 sm:w-96 rounded-3xl max-w-none'>
               <img src={assets.user_image} alt='' className='w-full rounded-3xl'></img>
            </div>
            <div className='flex-1'>
                <p className='mb-4 max-w-2xl font-Ovo'>
                    Software Engineer with 15+ years of experience designing, building, and operating large-scale distributed systems across e-commerce, messaging, SaaS, and data platforms — serving hundreds of millions of users globally. Proven track record delivering mission-critical backend systems in Java, Python, and Node.js, with deep expertise in microservices architecture, distributed caching (Redis), pub/sub systems (Kafka, RabbitMQ), and multi-region deployments. Equally at home across the full stack, with strong command of modern frontend frameworks (Next.js, React, TypeScript, Tailwind CSS) and cloud platforms (AWS, Azure).
                </p>
                <p className='mb-4 max-w-2xl font-Ovo'>
                    Experienced owning platforms end-to-end — from RESTful API design and NoSQL datastores to pixel-perfect frontends — while driving observability, reliability, and incident response through tools like Kibana and Grafana. Led the design and rollout of internal AI Agent automation leveraging Claude and GPT-4 — enabling intelligent code analysis, automated test generation, and on-demand documentation retrieval that measurably accelerated the team’s release and deployment velocity. Skilled at defining multi-quarter technical roadmaps, leading cross-functional initiatives, and mentoring engineering teams.
                </p>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    Passionate about engineering excellence at scale — solving complex distributed systems challenges, optimizing performance, and building real-time personalized platforms that drive measurable user engagement and business impact.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, title, description}, index) => (
                        <li className='border border-gray-400 rounded-xl p-6 cursor-pointer 
                        transition-all hover:bg-gray-100 hover:-translate-y-1 shadow-none hover:shadow-[4px_4px_0_#000000] duration-500' key={index}>
                            <img className='w-7 mt-3' src={icon} alt={title}></img>
                            <h3 className='my-4 font-semibold text-gray-700 font-Ovo'>{title}</h3>
                            <p className='text-gray-600 text-sm font-Ovo'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I Use</h4>
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