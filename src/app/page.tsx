import Link from 'next/link';
import { LightbulbIcon, CodeIcon, EyeIcon, GitGraphIcon, WaypointsIcon, UsersIcon, SparklesIcon, Share2Icon, LayoutDashboardIcon, PaletteIcon, BarChart3Icon, ImageUpIcon } from 'lucide-react';

const features = [
  {
    icon: LightbulbIcon,
    title: "AI-powered App Generation",
    description: "Instantly generate complex fullstack applications from natural language prompts using Gemini 3.0."
  },
  {
    icon: CodeIcon,
    title: "Interactive Code Editor",
    description: "Edit and refine your generated code in a feature-rich, in-browser IDE with intelligent suggestions."
  },
  {
    icon: EyeIcon,
    title: "Real-time Preview",
    description: "See your application come to life instantly with a live, interactive preview as you build."
  },
  {
    icon: GitGraphIcon,
    title: "Version Control/Checkpoints",
    description: "Never lose progress. Automatically save checkpoints and manage versions of your project."
  },
  {
    icon: ImageUpIcon, // A more generic icon for multi-modal input
    title: "Multi-modal Input Support",
    description: "Input ideas using text, images, or even URLs, and watch Gemini 3.0 bring them to life."
  },
  {
    icon: UsersIcon,
    title: "Collaborative Workspace",
    description: "Invite your team to build together in a real-time collaborative environment."
  },
  {
    icon: SparklesIcon,
    title: "AI Feature Integration",
    description: "Drag-and-drop pre-built AI components like recommendation engines, chatbots, and more."
  },
  {
    icon: Share2Icon, // Represents sharing/deployment
    title: "Deployment to Git",
    description: "Seamlessly deploy your projects directly to GitHub or other Git providers."
  },
  {
    icon: LayoutDashboardIcon, // Represents a library of templates
    title: "Template Library",
    description: "Jumpstart your projects with a vast library of professionally designed templates."
  },
  {
    icon: PaletteIcon,
    title: "Customizable UI Themes",
    description: "Personalize your app's look and feel with a wide range of customizable themes."
  },
  {
    icon: LayoutDashboardIcon,
    title: "User Dashboard",
    description: "Manage all your projects, settings, and team members from a centralized dashboard."
  },
  {
    icon: BarChart3Icon,
    title: "Usage Analytics",
    description: "Gain insights into your app's performance and user engagement with built-in analytics."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black">
        {/* Subtle background gradient circles for visual interest */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-6">
            Unleash the Future of App Development with Gemini 3.0
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Harness the power of Google's most advanced LLM to generate, edit, and deploy fullstack applications in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Building for Free
            </Link>
            <Link
              href="/learn-more"
              className="px-8 py-3 bg-gray-700 text-gray-200 font-semibold rounded-full shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 border border-gray-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Experience Unprecedented Productivity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 ease-in-out group"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-tr from-purple-800 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of developers revolutionizing their workflow with Gemini 3.0 and bring your boldest ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up for Free
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Tailwind's @layer base for custom animations - this would typically be in globals.css */}
      {/* For demonstration purposes, I'm including a placeholder for where the animation definitions would go. */}
      {/*
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      */}
    </div>
  );
}