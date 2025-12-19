import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const team = [
  {
    name: 'Uzak Dinmukhambet',
    age: 23,
    role: 'CEO & Founder',
    shortDescription: 'Full-Stack Developer & Visionary Leader',
    description: 'Full-stack developer and founder with a passion for leveraging AI to solve complex software development challenges. Uzak is the inspiration and driving force behind TAI, combining technical expertise with innovative thinking.',
    education: [
      { level: 'Secondary', school: 'Gymnasium №18' },
      { level: 'Bachelor', school: 'AUES' },
    ],
    image: '/b09aada2-54d2-444c-84b1-1f768d509f34.jpg',
    contacts: {
      vk: 'https://vk.com/dextergenius',
      email: 'd_uzak@kbtu.kz',
    },
  },
  {
    name: 'Bekbolat Adilzhan',
    role: 'Backend Developer',
    shortDescription: 'AI/ML Infrastructure Specialist',
    description: 'Expert backend engineer specializing in AI/ML infrastructure and scalable systems. Bekbolat is the architect of TAI\'s core analysis engine, designing and implementing the sophisticated algorithms that power our code analysis.',
    education: [
      { level: 'Secondary', school: 'NIS (Nazarbayev Intellectual School)' },
      { level: 'Bachelor', school: 'AITU (Astana IT University)' },
    ],
    image: '/image.png',
    contacts: {
      email: 'a_bekbolat@kbtu.kz',
    },
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600">
            The brilliant minds behind TAI, dedicated to making software development safer and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  {member.age && (
                    <span className="text-slate-600 text-lg">{member.age}</span>
                  )}
                </div>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  {member.role}
                </div>
                {member.shortDescription && (
                  <p className="text-sm text-cyan-600 font-medium mb-4">
                    {member.shortDescription}
                  </p>
                )}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.description}
                </p>

                {member.education && (
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-3 text-sm">Education</h4>
                    <div className="space-y-2">
                      {member.education.map((edu, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="text-cyan-600 font-medium">{edu.level}:</span>
                          <span className="text-slate-600 ml-2">{edu.school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {member.contacts?.vk && (
                    <a
                      href={member.contacts.vk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white transition-all flex items-center justify-center"
                      title="VK"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {member.contacts?.email && (
                    <a
                      href={`mailto:${member.contacts.email}`}
                      className="w-10 h-10 rounded-full bg-cyan-100 hover:bg-cyan-600 text-cyan-600 hover:text-white transition-all flex items-center justify-center"
                      title={member.contacts.email}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
