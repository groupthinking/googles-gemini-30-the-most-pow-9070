// app/dashboard/page.tsx
import React from 'react';

// Define a type for the project data
interface Project {
  id: string;
  name: string;
  status: 'Draft' | 'Published' | 'Archived';
  lastUpdated: string;
  language: string;
}

// Dummy data for projects
const projects: Project[] = [
  { id: 'proj-001', name: 'Gemini Chatbot UI', status: 'Published', lastUpdated: '2 hours ago', language: 'TypeScript' },
  { id: 'proj-002', name: 'Multi-modal Image Gen', status: 'Draft', lastUpdated: '1 day ago', language: 'Python' },
  { id: 'proj-003', name: 'Collaborative Editor Backend', status: 'Archived', lastUpdated: '1 week ago', language: 'Go' },
  { id: 'proj-004', name: 'AI Feature Integration Demo', status: 'Published', lastUpdated: '3 days ago', language: 'TypeScript' },
  { id: 'proj-005', name: 'Version Control System', status: 'Draft', lastUpdated: '5 days ago', language: 'Rust' },
  { id: 'proj-006', name: 'Usage Analytics Dashboard', status: 'Published', lastUpdated: '1 month ago', language: 'JavaScript' },
];

// Define a type for stat card props
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
}

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ title, value, change, description, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      {icon && <div className="text-blue-500 dark:text-blue-400">{icon}</div>}
    </div>
    <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{value}</p>
    <div className="flex items-center text-sm">
      <span className={`font-medium ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
      <span className="ml-2 text-gray-600 dark:text-gray-400">{description}</span>
    </div>
  </div>
);

// Main Dashboard Page Component
export default function DashboardPage() {
  // Dummy data for stats cards
  const stats = [
    {
      title: 'Total Projects',
      value: '124',
      change: '+12%',
      description: 'since last month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Active Users',
      value: '2,450',
      change: '+5%',
      description: 'since last week',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M9 20v-2m3 2v-2m-9-1.143V17a3 3 0 01-.856-2.143m16.712 0A3 3 0 0122 17v1.857M9 17v1m3-1v1m-6-4.143V14a3 3 0 01-.856-2.143M16.712 14A3 3 0 0122 14v1.857" />
        </svg>
      ),
    },
    {
      title: 'API Calls',
      value: '87,234',
      change: '+20%',
      description: 'since yesterday',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3m0 0l3-3m-3 3v4m0 1a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
      ),
    },
    {
      title: 'Storage Used',
      value: '1.2 TB',
      change: '-2%',
      description: 'since last month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Overview of your projects and platform activity.</p>
      </header>

      {/* Stats Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Action Buttons Section */}
      <section className="flex flex-wrap gap-4 mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          New Project
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Deploy All
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Generate Report
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          View Analytics
        </button>
      </section>

      {/* Recent Projects Data Table Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Recent Projects</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Project Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Language
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${project.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : ''}
                      ${project.status === 'Draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : ''}
                      ${project.status === 'Archived' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100' : ''}
                    `}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {project.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {project.language}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Edit</a>
                    <a href="#" className="ml-4 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}