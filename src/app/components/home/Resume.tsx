"use client";
import React from 'react';

// Types
interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

interface Skill {
  category: string;
  technologies: string;
}

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  date: string;
}

interface Project {
  title: string;
  description: string[];
}

const Resume: React.FC = () => {
  const contactInfo: ContactInfo = {
    email: "gayathri532k@gmail.com",
    phone: "9363209663",
    location: "J.p Nagar, 5th Phase, Bangalore, Karnataka - 560078",
    linkedin: "linkedin.com/in/gayathri-s-627915lb"
  };

  const skills: Skill[] = [
    {
      category: "Frontend Technologies:",
      technologies: "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass, Tailwind CSS, Bootstrap"
    },
    {
      category: "State Management:",
      technologies: "Redux, Context API"
    },
    {
      category: "Animations:",
      technologies: "Framer Motion, GSAP, React Three Fiber (R3F)"
    },
    {
      category: "Backend Technologies:",
      technologies: "Node.js, Express.js, MongoDB, REST APIs, Mongoose"
    },
    {
      category: "Tools:",
      technologies: "Git, GitHub, Bitbucket, Git Bash, Postman, Swagger, Visual Studio Code"
    },
    {
      category: "Design & Prototyping:",
      technologies: "Figma, Adobe XD, Photoshop, Illustrator"
    }
  ];

  const workExperience: WorkExperience[] = [
    {
      title: "Senior Software Engineer",
      company: "Cloudrevel Innovation Pvt. Ltd.",
      duration: "09/2023 - Present",
      responsibilities: [
        "Developed and maintained web applications using React.js and Next.js, ensuring high responsiveness and performance.",
        "Integrated RESTful APIs for dynamic data rendering and real-time state management.",
        "Created reusable components and optimized rendering performance.",
        "Conducted unit and integration testing to ensure stability and bug-free UI functionality.",
        "Worked closely with designers to convert Figma/Adobe XD mockups into fully functional user interfaces.",
        "Troubleshooted websites to identify and fix performance bottlenecks and user interface issues.",
        "Contributed to cross-team code reviews, ensuring scalable and maintainable codebases."
      ]
    },
    {
      title: "Software Engineer",
      company: "Biztechnosys Infotech Pvt. Ltd.",
      duration: "07/2022 - 07/2023",
      responsibilities: [
        "Designed and developed dynamic web applications using React.js and Redux, focusing on scalable architecture.",
        "Used responsive design techniques to ensure seamless functionality across all devices and browsers.",
        "Built reusable UI components and frontend libraries for maintainability.",
        "Collaborated with cross-functional teams, including designers and backend developers, to deliver efficient and user-friendly features.",
        "Integrated various third-party APIs and services to extend application capabilities."
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "Agramsoft",
      duration: "10/2020 - 07/2022",
      responsibilities: [
        "Implemented responsive layouts and styles using CSS3, Tailwind CSS, and preprocessors to adapt UIs across all devices.",
        "Developed user interfaces with ReactJS components, focusing on component reusability and user experience (UX).",
        "Followed design mockups strictly and ensured cross-browser compatibility.",
        "Worked closely with UI/UX designers to build interactive and intuitive interfaces."
      ]
    }
  ];

  const education: Education = {
    institution: "Sacred Heart College - Tirupattur, India",
    degree: "Bachelor of Science:",
    field: "Computer Science",
    date: "04/2020"
  };

  const projects: Project[] = [
    {
      title: "Zlaata Technology – Luxury Fashion E-commerce & Marketing Platform",
      description: [
        "Led the end-to-end development and successfully delivered a responsive e-commerce and digital marketing website with an admin panel using Next.js - from planning to deployment.",
        "Built fully responsive, dynamic UIs using Tailwind CSS, Framer Motion, and GSAP, enhancing user experience with smooth animations and scroll effects.",
        "Troubleshot and resolved complex animation and scroll-trigger issues in GSAP, ensuring seamless transitions and optimal performance.",
        "Integrated RESTful APIs for displaying real-time content with a data-driven, seamless user interface."
      ]
    },
    {
      title: "Cloudgate, SwiftRevel, LCode Technologies, Rugr – Fintech Platforms",
      description: [
        "Worked on fintech-focused projects including Cloudgate, SwiftRevel, LCode Technologies, and Rugr — each aiming to enhance digital finance accessibility and infrastructure.",
        "Developed fully responsive user interfaces using Next.js, React.js, Bootstrap, Tailwind CSS, GSAP, Framer Motion, and npm packages.",
        "Integrated RESTful APIs for real-time data exchange across core modules like payments, banking, DNS services, payroll, and user onboarding.",
        "Implemented interactive animations and transitions using GSAP and Framer Motion to enhance visual feedback and user experience in complex financial dashboards.",
        "Developed immersive 3D scroll-based animations using React Three Fiber, simulating digital camera movements and dynamic scene transitions.",
        "Delivered both public-facing websites and admin dashboards, maintaining cross-browser compatibility and mobile-first design principles."
      ]
    },
    {
      title: "Let's Dine – Phase 1 & 2",
      description: [
        "Developed a restaurant web app enabling users to browse menus, order food, and reserve tables online.",
        "Integrated real-time booking and live order tracking features for enhanced user convenience.",
        "Built responsive UI components using React.js and Bootstrap for seamless performance across devices.",
        "Implemented clean, modular code structure for scalable development across both phases."
      ]
    },
    {
      title: "SupportHub, MyHinez, Project Management, MyHub, MyRecruit – Internal Enterprise Platforms",
      description: [
        "Contributed to internal enterprise products such as SupportHub (ticketing system), MyHinez (HRMS), Project Management tool, and MyHub (Asset Management System).",
        "SupportHub: Built a ticketing system with dashboard views and role-based access control for efficient customer query handling.",
        "MyHinez: Designed secure modules for employee data, payroll, attendance, leave tracking, and performance reviews.",
        "Project Management Tool: Developed real-time task tracking, deadline reminders, and team productivity features.",
        "MyHub: Implemented responsive tracking and reporting components for managing the entire asset lifecycle.",
        "MyRecruit - Allows recruiters to create and manage job postings, track candidate applications, and streamline communication across teams.",
        "Delivered scalable, modular frontend components with REST API integration and mobile-friendly UIs across all internal tools. Offered scalable and user-friendly admin panels for each tool, with performance and security in business environments"
      ]
    }
  ];

  const Section: React.FC<{ 
    title: string; 
    children: React.ReactNode; 
  }> = ({ title, children, }) => (
    <div className="mb-6 lg:mb-8">
      <p
      style={{ fontFamily: 'Verdana', color: '#002147' }}
      className="text-base font-semibold text-[#002147] mb-3 lg:text-xl border-b border-gray-200 pb-1">
        {title}
      </p>
      <div className="text-xs lg:text-sm text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  );

  const PrintButton: React.FC = () => (
    <button
      onClick={() => window.print()}
      className="group fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out print:hidden z-50 font-medium text-sm flex items-center gap-2 border border-blue-500/20"
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
      }}
    >
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          Save as PDF
        </span>
        <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
          Download Now
        </span>
      </span>
    </button>
  );


  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:py-8"
     style={{ fontFamily: 'Verdana'}}
    >
      <div className="max-w-4xl shadow-lg border border-gray-200 mx-auto bg-white print:shadow-none print:border-none">
        <div className=" sm:p-6 lg:p-10">
          {/* Header */}
          <header
          //  style={{ fontFamily: 'Verdana', }}
           className="mb-6 lg:mb-8 lg:ml-3 lg:mt-5">
            <p
             style={{ fontFamily: 'Verdana', color: '#002147' }}
             className="text-xl sm:text-2xl lg:text-4xl font-semibold  tracking-normal mb-1">
              Gayathri Subramani
            </p>
            <p className="text-lg sm:text-base text-black mb-3">
              Senior Software Engineer
            </p>
            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <div className="flex flex-wrap items-center gap-1">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <span className="hidden sm:inline">|</span>
                <span className="sm:ml-1">{contactInfo.phone}</span>
              </div>
              <p className='mb-1'>{contactInfo.location}</p>
              <p>
                <span className="font-medium">LinkedIn:</span>{' '}
                <a 
                  href={`https://${contactInfo.linkedin}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.linkedin}
                </a>
              </p>
            </div>
          </header>

          {/* Professional Summary */}
          <Section title="Professional Summary"  >
            <p>
              Worked as a Frontend Developer with 4+ years of experience in building responsive, 
              high-performance web applications using{' '}
              <span className="font-semibold text-slate-800">React.js, Next.js</span>, 
              Tailwind CSS, and modern JavaScript. Skilled at collaborating with cross-functional 
              teams, creating reusable components, and integrating REST APIs. Motivated to contribute 
              to innovative projects that prioritize user experience, scalability, and clean, 
              maintainable code while continuously growing as a frontend specialist.
            </p>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold text-slate-800">{skill.category}</span>{' '}
                  {skill.technologies}
                </div>
              ))}
            </div>
          </Section>

          {/* Work History */}
          <Section title="Work History">
            <div className="space-y-4 lg:space-y-6">
              {workExperience.map((job, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div className="mb-1 sm:mb-0">
                      <span className="font-semibold text-slate-800">{job.title}</span>
                      <span className="text-blue-600 ml-1">| {job.company}</span>
                    </div>
                    <span className="text-xs italic text-slate-500 sm:text-right">
                      {job.duration}
                    </span>
                  </div>
                  <ul className="list-disc ml-4 space-y-1">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold text-slate-800 mb-0">{education.institution}</p>
                <p>
                  <span className="font-semibold">{education.degree}</span> {education.field}
                </p>
              </div>
              <span className="text-xs italic text-slate-500 mt-1 sm:mt-0">
                {education.date}
              </span>
            </div>
          </Section>

          {/* Projects */}
          <Section title="Projects">
            <div className="space-y-4 lg:space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <span
                  style={{ fontFamily: 'Verdana',  }}
                   className= "mb-2 text-md font-semibold text-black">
                    {project.title}
                  </span>
                  <ul className="list-disc ml-4 space-y-1">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {desc.split(/(\*\*.*?\*\*)/).map((part, partIdx) => 
                          part.startsWith('**') && part.endsWith('**') ? (
                            <span key={partIdx} className="font-semibold text-slate-800">
                              {part.slice(2, -2)}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>

      <PrintButton />

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          @page {
            margin: 0.5in;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;