import React, { useState, useEffect } from 'react';

function Analytics() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    // Simulate loading analytics data from an API
    setTimeout(() => {
      // Mock data for analytics
      const data = {
        itemsListed: {
          total: 45,
          market: 32,
          donations: 13,
          trend: '+12% from last month'
        },
        engagementMetrics: {
          views: 1250,
          inquiries: 87,
          responses: 72,
          responsesRate: '82.8%'
        },
        salesMetrics: {
          completed: 18,
          pending: 5,
          cancelled: 2,
          totalValue: '$3,250'
        },
        donationImpact: {
          itemsDonated: 10,
          beneficiaries: 4,
          estimatedValue: '$850',
          materialsSaved: '~500kg'
        },
        popularCategories: [
          { name: 'Bricks', count: 12, percentage: 26.7 },
          { name: 'Tiles', count: 9, percentage: 20 },
          { name: 'Lumber', count: 7, percentage: 15.6 },
          { name: 'Paint', count: 6, percentage: 13.3 },
          { name: 'Fixtures', count: 5, percentage: 11.1 }
        ],
        monthlyActivity: [
          { month: 'Jan', listings: 8, sales: 5, donations: 2 },
          { month: 'Feb', listings: 12, sales: 7, donations: 3 },
          { month: 'Mar', listings: 14, sales: 6, donations: 5 },
          { month: 'Apr', listings: 11, sales: 8, donations: 3 }
        ]
      };
      
      setAnalyticsData(data);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="p-6 text-center">Loading analytics data...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        
        {/* Time range selector */}
        <div className="flex rounded-md overflow-hidden border">
          <button 
            className={`px-3 py-1 text-sm ${timeRange === 'week' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={`px-3 py-1 text-sm ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={`px-3 py-1 text-sm ${timeRange === 'year' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500 mb-1">Items Listed</h3>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">{analyticsData.itemsListed.total}</p>
              <p className="text-xs text-green-500">{analyticsData.itemsListed.trend}</p>
            </div>
            <div className="text-right text-sm">
              <div>Market: {analyticsData.itemsListed.market}</div>
              <div>Donations: {analyticsData.itemsListed.donations}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500 mb-1">Engagement</h3>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">{analyticsData.engagementMetrics.views}</p>
              <p className="text-xs">Total Views</p>
            </div>
            <div className="text-right text-sm">
              <div>Inquiries: {analyticsData.engagementMetrics.inquiries}</div>
              <div>Response Rate: {analyticsData.engagementMetrics.responsesRate}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500 mb-1">Sales</h3>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">{analyticsData.salesMetrics.completed}</p>
              <p className="text-xs">Completed Sales</p>
            </div>
            <div className="text-right text-sm">
              <div>Total Value: {analyticsData.salesMetrics.totalValue}</div>
              <div>Pending: {analyticsData.salesMetrics.pending}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500 mb-1">Donation Impact</h3>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">{analyticsData.donationImpact.itemsDonated}</p>
              <p className="text-xs">Items Donated</p>
            </div>
            <div className="text-right text-sm">
              <div>Est. Value: {analyticsData.donationImpact.estimatedValue}</div>
              <div>Material Saved: {analyticsData.donationImpact.materialsSaved}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium mb-4">Monthly Activity</h2>
          <div className="h-64 flex items-end justify-between px-2">
            {analyticsData.monthlyActivity.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col items-center space-y-1 mb-2">
                  <div className="h-32 flex items-end space-x-1">
                    <div 
                      className="w-4 bg-blue-500 rounded-t" 
                      style={{ height: `${(item.listings/15) * 100}%` }}
                      title={`Listings: ${item.listings}`}
                    ></div>
                    <div 
                      className="w-4 bg-green-500 rounded-t" 
                      style={{ height: `${(item.sales/15) * 100}%` }}
                      title={`Sales: ${item.sales}`}
                    ></div>
                    <div 
                      className="w-4 bg-purple-500 rounded-t" 
                      style={{ height: `${(item.donations/15) * 100}%` }}
                      title={`Donations: ${item.donations}`}
                    ></div>
                  </div>
                </div>
                <span className="text-xs font-medium">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
              <span className="text-xs">Listings</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
              <span className="text-xs">Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded mr-1"></div>
              <span className="text-xs">Donations</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium mb-4">Popular Categories</h2>
          <div className="space-y-3">
            {analyticsData.popularCategories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{category.name}</span>
                  <span>{category.count} items ({category.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Environmental Impact */}
      <div className="bg-white p-4 rounded-lg shadow border">
        <h2 className="text-lg font-medium mb-4">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-green-50 rounded-lg">
            <span className="text-4xl font-bold block text-green-600">~{analyticsData.donationImpact.materialsSaved}</span>
            <span className="text-sm text-gray-600">Construction Material Saved</span>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <span className="text-4xl font-bold block text-blue-600">{analyticsData.itemsListed.total}</span>
            <span className="text-sm text-gray-600">Items Repurposed</span>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <span className="text-4xl font-bold block text-purple-600">{analyticsData.donationImpact.beneficiaries}</span>
            <span className="text-sm text-gray-600">Projects Supported</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;