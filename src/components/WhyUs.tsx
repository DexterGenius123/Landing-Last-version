import { CheckCircle, Zap, Users, TrendingUp, Award, Headphones } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Analyze your entire codebase in seconds with our optimized AI engine. No waiting, no delays.',
  },
  {
    icon: Award,
    title: 'Industry Leading Accuracy',
    description: '97% accuracy rate with minimal false positives. Trust our AI to catch real issues.',
  },
  {
    icon: Users,
    title: 'Easy Integration',
    description: 'Works seamlessly with your existing tools and workflow. Setup takes less than 5 minutes.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Our AI learns and improves continuously, adapting to your codebase and team patterns.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 customer support team ready to help you get the most out of TAI.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Trusted by leading companies worldwide. Reduce bugs by 70% on average.',
  },
];

const testimonials = [
  {
    company: 'Kolesa',
    logo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=200&fit=crop',
    feedback: 'Kolesa has been instrumental in guiding TAI\'s development in the right direction. Their insights and feedback have shaped our product into what it is today.',
    author: 'Alexander Nagorny',
    position: 'Advisor at Kolesa.kz',
    additionalFeedback: 'I really like what TAI is doing. I\'m looking forward to seeing the impressive results they\'ll deliver in the future.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Us Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Choose TAI?
            </h2>
            <p className="text-xl text-slate-600">
              We combine cutting-edge AI technology with user-focused design to deliver the best code analysis experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="border-t border-slate-200 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              Leading companies rely on TAI to maintain their code quality and security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-cyan-100 shadow-md">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {testimonial.company}
                    </h3>
                    <p className="text-slate-600">
                      {testimonial.author} • {testimonial.position}
                    </p>
                  </div>
                </div>

                <blockquote className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-blue-500 pl-6 mb-4">
                  "{testimonial.feedback}"
                </blockquote>

                {testimonial.additionalFeedback && (
                  <blockquote className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                    "{testimonial.additionalFeedback}"
                  </blockquote>
                )}

                <div className="flex mt-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <p className="text-lg font-semibold mb-2">Trusted Advisors</p>
            <p className="text-4xl font-bold">Kolesa.kz</p>
            <p className="text-blue-100 mt-4">
              Helping us guide TAI's development in the right direction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
