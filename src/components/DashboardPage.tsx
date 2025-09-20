// import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
// import { Progress } from './ui/progress';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Activity,
  Droplets, 
  // Sun, 
  Thermometer,
  // Wind,
  Zap,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, AreaChart, Area } from 'recharts';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  // Mock data for charts
  const energyData = [
    { name: 'Jan', production: 450, consumption: 380 },
    { name: 'Feb', production: 520, consumption: 420 },
    { name: 'Mar', production: 680, consumption: 510 },
    { name: 'Apr', production: 750, consumption: 580 },
    { name: 'May', production: 890, consumption: 650 },
    { name: 'Jun', production: 950, consumption: 720 }
  ];

  const irrigationData = [
    { name: 'Zone A', efficiency: 95 },
    { name: 'Zone B', efficiency: 87 },
    { name: 'Zone C', efficiency: 92 },
    { name: 'Zone D', efficiency: 89 },
    { name: 'Zone E', efficiency: 96 }
  ];

  const cropHealthData = [
    { name: 'Excellent', value: 45, color: '#22c55e' },
    { name: 'Good', value: 35, color: '#84cc16' },
    { name: 'Fair', value: 15, color: '#f59e0b' },
    { name: 'Poor', value: 5, color: '#ef4444' }
  ];

  const waterUsageData = [
    { time: '00:00', usage: 45 },
    { time: '04:00', usage: 35 },
    { time: '08:00', usage: 78 },
    { time: '12:00', usage: 95 },
    { time: '16:00', usage: 85 },
    { time: '20:00', usage: 62 }
  ];

  const features = [
    {
      icon: <Activity className="h-6 w-6 text-green-500" />,
      title: "Real-time Monitoring",
      description: "Live data streams from all sensors and systems"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "AI-powered insights and predictive modeling"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      title: "Smart Alerts",
      description: "Proactive notifications for optimal farm management"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-accent" />,
      title: "Mobile Access",
      description: "Full platform access from any device, anywhere"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Platform Preview
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Experience the{' '}
              <span className="text-primary">Climexa AI Dashboard</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get a glimpse of our comprehensive platform that puts the power of AI-driven 
              agriculture at your fingertips. Monitor, analyze, and optimize your farm operations 
              with unprecedented precision and insight.
            </p>
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="text-base"
            >
              Request Full Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Live Dashboard Mockup */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Live Dashboard Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time monitoring and control of all your farm systems from a single, 
              intuitive interface.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <h3 className="text-xl font-semibold">XYZ Farm - Overview</h3>
                <p className="text-sm text-muted-foreground">Last updated: 2 minutes ago</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Systems Online</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Energy Production</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">8.4 kW</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>+12% vs yesterday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">Water Usage</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">1,250 L</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingDown className="h-3 w-3 text-green-500" />
                      <span>-8% vs target</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-5 w-5 text-destructive" />
                    <span className="text-sm font-medium">Temperature</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">24°C</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <span>Optimal range</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">System Health</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <span>All systems operational</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Energy Production Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <LineChart className="h-5 w-5" />
                    <span>Energy Production vs Consumption</span>
                  </CardTitle>
                  <CardDescription>Monthly energy metrics (kWh)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={energyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Line type="monotone" dataKey="production" stroke="#22c55e" strokeWidth={2} />
                        <Line type="monotone" dataKey="consumption" stroke="#3b82f6" strokeWidth={2} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Irrigation Efficiency Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Irrigation Zone Efficiency</span>
                  </CardTitle>
                  <CardDescription>Water usage efficiency by zone (%)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={irrigationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="efficiency" fill="#4a90a4" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Crop Health Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5" />
                    <span>Crop Health Distribution</span>
                  </CardTitle>
                  <CardDescription>Overall crop health status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={cropHealthData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {cropHealthData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {cropHealthData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Water Usage Pattern */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Daily Water Usage Pattern</span>
                  </CardTitle>
                  <CardDescription>Hourly water consumption (liters)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={waterUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Area type="monotone" dataKey="usage" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Platform Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dashboard provides comprehensive monitoring and control capabilities 
              across all aspects of your agricultural operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Access Anywhere, Anytime
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our responsive platform works seamlessly across all devices, ensuring you can 
              monitor and manage your farm operations from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Monitor className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Desktop Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Full-featured dashboard with advanced analytics and comprehensive data visualization 
                  for detailed farm management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Tablet className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Tablet Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimized tablet experience perfect for field use, with touch-friendly controls 
                  and essential monitoring capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Smartphone className="h-12 w-12 text-accent" />
                </div>
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  On-the-go monitoring with critical alerts, quick controls, and offline capabilities 
                  for continuous farm oversight.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to See the Full Platform?
            </h2>
            <p className="text-lg opacity-90">
              Schedule a personalized demo to explore all features and see how 
              Climexa AI can transform your agricultural operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-base"
              >
                Schedule Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('solutions')}
                className="text-base border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}