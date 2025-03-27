import React from "react";

const Overview = () => {
  // Sample data (would typically come from backend)
  const adPerformance = {
    totalImpressions: 45670,
    totalClicks: 2340,
    engagementRate: 5.12,
  };

  const messageInsights = {
    totalMessages: 1250,
    messageTypes: [
      { type: "Sent", percentage: 65 },
      { type: "Received", percentage: 35 },
    ],
    responseTimes: [
      { timeRange: "< 1 hour", percentage: 45 },
      { timeRange: "1-24 hours", percentage: 35 },
      { timeRange: "> 24 hours", percentage: 20 },
    ],
  };

  const recentPosts = [
    {
      id: 1,
      image: "/api/placeholder/300/200",
      views: 12450,
      engagementRate: 4.8,
    },
    {
      id: 2,
      image: "/api/placeholder/300/200",
      views: 9870,
      engagementRate: 3.9,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Vendor Dashboard</h1>
      </header>

      {/* Ad Performance Overview */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Total Impressions
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {adPerformance.totalImpressions}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Total Clicks
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {adPerformance.totalClicks}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.488 9H18.5a.5.5 0 01-.5-.5V7.5a.5.5 0 01.5-.5h1.987a9.015 9.015 0 00-1.487-4.657"
              />
            </svg>
            Engagement Rate
          </h2>
          <p className="text-3xl font-bold text-purple-600">
            {adPerformance.engagementRate}%
          </p>
        </div>
      </section>

      {/* Message Insights */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Total Messages */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Messages</h2>
          <p className="text-3xl font-bold text-blue-600">
            {messageInsights.totalMessages}
          </p>
        </div>

        {/* Message Types */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Message Types</h2>
          {messageInsights.messageTypes.map((type) => (
            <div key={type.type} className="mb-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{type.type}</span>
                <span>{type.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${type.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Times */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Response Times</h2>
          {messageInsights.responseTimes.map((time) => (
            <div key={time.timeRange} className="mb-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{time.timeRange}</span>
                <span>{time.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${time.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt="Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Views</span>
                  <span>{post.views}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Engagement Rate</span>
                  <span>{post.engagementRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;