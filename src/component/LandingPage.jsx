import { Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Footer } from "./Footer";

export const LandingPage = ({ setCurrentPath }) => (
  <div className="min-h-screen flex flex-col">
    <section className="relative overflow-hidden bg-blue-600">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-20 md:py-32 flex flex-col items-center text-center z-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 bg-opacity-20 rounded-full blur-2xl"></div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Manage Tickets with Ease
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl">
            The ultimate ticket management platform that brings your team
            together. Track, manage, and resolve tickets seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setCurrentPath("/auth/signup")}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold "
            >
              Get Started
            </button>
            <button
              onClick={() => setCurrentPath("/auth/login")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Login
            </button>
          </div>

        
        </div>
      </div>

      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="#F8F9FA"
        />
      </svg>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage tickets efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              desc: "Quick ticket creation and resolution",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Secure & Private",
              desc: "Enterprise-grade security for your data",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Team Collaboration",
              desc: "Work together seamlessly",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Analytics",
              desc: "Track progress with insights",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "10K+", label: "Tickets Resolved" },
            { number: "99.9%", label: "Uptime" },
            { number: "4.9/5", label: "User Rating" },
          ].map((stat, index) => (
            <div key={index} className="p-8">
              <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
