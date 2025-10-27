import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/Navbar';
import AIChat from '@/components/AIChat';
import AIBudgetCalculator from '@/components/AIBudgetCalculator';
import AIVenueRecommendations from '@/components/AIVenueRecommendations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Calculator, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles,
  ArrowRight,
  Lightbulb,
  Target,
  Clock,
  MessageSquare,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AITools = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const aiFeatures = [
    {
      icon: Calculator,
      title: t('ai.features.budgetAdvice'),
      description: 'Get personalized budget recommendations and cost optimization tips based on your location and preferences.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: MapPin,
      title: t('ai.features.venueSuggestions'),
      description: 'Discover perfect venues based on your guest count, budget, style preferences, and location.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Calendar,
      title: t('ai.features.timelineGenerator'),
      description: 'Create a customized wedding planning timeline with tasks, deadlines, and reminders.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Users,
      title: t('ai.features.vendorRecommendations'),
      description: 'Find trusted photographers, caterers, decorators, and other vendors in your area.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('ai.title')}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('ai.subtitle')}
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <Target className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Weddings Planned</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <Lightbulb className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">AI Assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <Clock className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary">50%</p>
                <p className="text-sm text-muted-foreground">Time Saved</p>
              </div>
            </div>
          </div>
        </div>


        {/* AI Tools Tabs */}
        <div className="mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">AI Chat</span>
              </TabsTrigger>
              <TabsTrigger value="budget" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span className="hidden sm:inline">Budget</span>
              </TabsTrigger>
              <TabsTrigger value="venues" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Venues</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="h-8 w-8 text-primary" />
                  AI Wedding Planning Tools
                </h2>
                <p className="text-muted-foreground">
                  Choose from our comprehensive suite of AI-powered wedding planning tools
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiFeatures.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300"
                        onClick={() => {
                          if (feature.title.includes('Budget')) setActiveTab('budget');
                          else if (feature.title.includes('Venue')) setActiveTab('venues');
                          else setActiveTab('chat');
                        }}
                      >
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chat">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  AI Chat Assistant
                </h2>
                <p className="text-muted-foreground">
                  Ask questions, get advice, and receive personalized recommendations for your wedding planning journey.
                </p>
              </div>
              <AIChat />
            </TabsContent>

            <TabsContent value="budget">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Calculator className="h-8 w-8 text-primary" />
                  AI Budget Calculator
                </h2>
                <p className="text-muted-foreground">
                  Get personalized budget breakdowns based on your location, guest count, and preferences.
                </p>
              </div>
              <AIBudgetCalculator />
            </TabsContent>

            <TabsContent value="venues">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Building2 className="h-8 w-8 text-primary" />
                  AI Venue Recommendations
                </h2>
                <p className="text-muted-foreground">
                  Find the perfect venue based on your location, budget, and guest count.
                </p>
              </div>
              <AIVenueRecommendations />
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Plan Your Dream Wedding?</CardTitle>
              <CardDescription className="text-lg">
                Get started with our AI-powered tools and expert consultation services.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/event-planning">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AITools;
