import { Bug, Zap, Lock, BarChart3, GitBranch, Clock } from 'lucide-react';

const features = [
  {
    icon: Bug,
    title: 'Bug Detection',
    description: 'Automatically identify and classify bugs in your codebase with advanced pattern recognition and machine learning algorithms.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description: 'Get instant feedback as you code. Our AI analyzes your code in real-time, providing immediate insights and suggestions.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Security Scanning',
    description: 'Detect security vulnerabilities and potential exploits before they become critical issues in production environments.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Reports',
    description: 'Comprehensive analytics and reporting on code quality, error patterns, and improvement suggestions over time.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Integration',
    description: 'Seamlessly integrate with your existing workflow. Works with GitHub, GitLab, Bitbucket, and popular CI/CD tools.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Historical Tracking',
    description: 'Track code quality metrics over time and see how your codebase evolves with detailed historical data and trends.',
    color: 'from-teal-500 to-blue-500',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to maintain high-quality, bug-free code in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to revolutionize your development workflow?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust TAI to keep their code clean and bug-free.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
