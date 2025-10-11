import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Brain, BarChart3, Code2, LineChart } from "lucide-react";

const AiUserJourney: React.FC = () => {
  return (
    <section id="/projects/ai-user-journey" className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 text-white py-32 px-6 md:px-20 text-center">
        <ScrollAnimation delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            AI-Powered User Journey
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            Enhancing user experiences through predictive analytics, personalization, 
            and real-time behavioral insights — powered by advanced AI and data science.
          </p>
        </ScrollAnimation>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <ScrollAnimation delay={150}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="AI Journey Dashboard"
              className="rounded-3xl shadow-lg md:w-1/2 h-80 object-cover"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The <strong>AI-Powered User Journey</strong> is a smart analytics
                and personalization system designed to enhance customer experiences
                across web and mobile platforms. Using behavioral data, machine
                learning, and predictive modeling, it helps businesses understand
                user intent, optimize content, and improve engagement metrics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By integrating AI models with a real-time analytics dashboard,
                marketing and product teams can visualize customer journeys,
                predict conversion patterns, and deliver hyper-personalized experiences.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Technology Stack */}
      <div className="bg-white py-20">
        <ScrollAnimation delay={200}>
          <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              <div className="bg-sky-100 rounded-2xl p-6 shadow-md">
                <Brain className="w-10 h-10 text-sky-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-700 text-sm">
                  TensorFlow, PyTorch, and scikit-learn models for user behavior prediction and NLP.
                </p>
              </div>
              <div className="bg-indigo-100 rounded-2xl p-6 shadow-md">
                <Code2 className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Front-End
                </h3>
                <p className="text-gray-700 text-sm">
                  React.js with Redux Toolkit and Tailwind CSS for an intuitive, responsive UI.
                </p>
              </div>
              <div className="bg-purple-100 rounded-2xl p-6 shadow-md">
                <BarChart3 className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Visualization
                </h3>
                <p className="text-gray-700 text-sm">
                  Chart.js and D3.js for interactive journey analytics and real-time dashboards.
                </p>
              </div>
              <div className="bg-pink-100 rounded-2xl p-6 shadow-md">
                <LineChart className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Backend & APIs
                </h3>
                <p className="text-gray-700 text-sm">
                  Node.js, Express, and MongoDB for scalable data pipelines and RESTful APIs.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <ScrollAnimation delay={250}>
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="User Dashboard"
              className="rounded-2xl shadow-md object-cover h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80"
              alt="AI Data Model"
              className="rounded-2xl shadow-md object-cover h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="Analytics Report"
              className="rounded-2xl shadow-md object-cover h-64"
            />
          </div>
        </ScrollAnimation>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 text-center">
        <ScrollAnimation delay={300}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Intelligent User Experiences?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let’s bring AI and analytics to your digital products and create smarter engagement journeys.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch →
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AiUserJourney;
