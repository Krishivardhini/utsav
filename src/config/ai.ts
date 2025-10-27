// AI Configuration
export const AI_CONFIG = {
  // OpenAI API Configuration
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || '',
  OPENAI_ENDPOINT: import.meta.env.VITE_AI_ENDPOINT || 'https://api.openai.com/v1/chat/completions',
  
  // AI Model Configuration
  MODEL: 'gpt-3.5-turbo',
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  
  // Enhanced fallback responses when API is not available
  FALLBACK_RESPONSES: {
    budget: `I can help you with budget planning! For a typical Indian wedding, here's a comprehensive breakdown:

**Major Categories:**
• Venue & Decorations: 40-50% of total budget
• Catering & Food: 20-25%
• Photography & Videography: 10-15%
• Attire & Jewelry: 8-12%
• Music & Entertainment: 5-8%
• Transportation: 3-5%
• Miscellaneous: 5-10%

**Location-Specific Tips:**
• Metro cities (Mumbai, Delhi, Bangalore): 15-20% higher costs
• Tier-2 cities: Standard pricing
• Destination weddings: Add 25-30% for logistics

**Money-Saving Tips:**
• Book venues 6-12 months in advance
• Consider off-season dates (monsoon/winter)
• Bundle services with the same vendor
• DIY decorations for smaller elements

What's your estimated budget range and location? I can provide more specific recommendations!`,

    venue: `I'd love to suggest perfect venues for your special day! To give you the best recommendations, please share:

**Essential Details:**
• Preferred city/area
• Guest count (approximate)
• Budget range
• Wedding style (traditional, modern, fusion, destination)
• Preferred season/month
• Indoor/outdoor preference

**Popular Venue Types:**
• **Palaces & Heritage Hotels**: Royal, traditional feel
• **Resorts & Hotels**: All-inclusive packages
• **Banquet Halls**: Cost-effective, customizable
• **Garden Venues**: Natural, outdoor beauty
• **Destination Venues**: Beach, hill stations, exotic locations

**Questions to Consider:**
• Do you need accommodation for guests?
• Is parking important?
• Any specific cultural requirements?
• Accessibility needs?

Share these details and I'll provide curated venue suggestions that match your vision and budget!`,

    timeline: `I can create a customized wedding planning timeline for you! Here's a comprehensive approach:

**12-18 Months Before:**
• Set overall budget and guest list
• Book main venue and major vendors
• Choose wedding date (consider auspicious dates)
• Start dress shopping and fittings
• Research and shortlist photographers

**6-12 Months Before:**
• Finalize catering menu and tastings
• Book photographer/videographer
• Order wedding invitations
• Plan ceremony details and rituals
• Book transportation and accommodation

**3-6 Months Before:**
• Send out invitations
• Schedule hair/makeup trials
• Plan rehearsal dinner
• Finalize music and entertainment
• Book honeymoon

**1-3 Months Before:**
• Confirm all vendor details
• Create day-of timeline
• Pack for honeymoon
• Plan guest seating arrangements

**1 Month Before:**
• Final vendor confirmations
• Create emergency contact list
• Plan backup arrangements
• Relax and enjoy the process!

**What's your wedding date?** I'll create a personalized timeline with specific tasks and deadlines!`,

    vendor: `I can help you find the perfect vendors for your wedding! Here's a comprehensive guide:

**Essential Vendors:**
• **Photographer/Videographer**: Capture precious moments
• **Caterer**: Food and beverage services
• **Decorator/Florist**: Venue decoration and floral arrangements
• **Makeup Artist**: Bridal and family makeup
• **DJ/Band**: Music and entertainment
• **Transportation**: Guest and couple transport

**Additional Services:**
• **Wedding Planner**: Full coordination services
• **Mehndi Artist**: Traditional henna designs
• **Choreographer**: Dance performances
• **Security**: Event security and crowd management
• **Valet Parking**: Guest convenience

**Vendor Selection Tips:**
• Check portfolios and reviews
• Compare quotes from 3-5 vendors
• Ask for references from recent weddings
• Ensure they have proper licenses
• Book popular vendors 6-12 months in advance

**What type of vendor are you looking for?** Share your location, budget, and specific needs for personalized recommendations!`,

    style: `I can help you discover your perfect wedding style! Let's explore different themes:

**Traditional Styles:**
• **Classic Indian**: Red and gold, traditional ceremonies
• **South Indian**: Kanjeevaram sarees, temple ceremonies
• **North Indian**: Lehenga choli, grand celebrations
• **Bengali**: Red and white, cultural rituals

**Modern Styles:**
• **Contemporary**: Clean lines, neutral colors
• **Fusion**: Mix of traditional and modern elements
• **Minimalist**: Simple, elegant, understated
• **Rustic**: Natural elements, outdoor settings

**Theme-Based Styles:**
• **Garden/Outdoor**: Natural, floral, fresh
• **Vintage**: Classic, timeless, elegant
• **Destination**: Beach, mountains, exotic locations
• **Cultural**: Region-specific traditions

**What's your vision?** Tell me about your personality, favorite colors, and the atmosphere you want to create!`,

    default: `I'm your AI wedding planning assistant, here to help with every aspect of your special day! I can assist with:

**Planning & Organization:**
• Budget planning and cost optimization
• Timeline creation and task management
• Vendor recommendations and reviews
• Venue selection and booking

**Design & Style:**
• Wedding theme and style consultation
• Color palette and decoration ideas
• Attire and jewelry suggestions
• Photography and videography planning

**Cultural & Traditional:**
• Ceremony planning and rituals
• Regional customs and traditions
• Family and guest management
• Religious and cultural considerations

**Logistics & Coordination:**
• Guest list and invitation management
• Transportation and accommodation
• Catering and menu planning
• Day-of coordination

**What would you like help with?** The more specific you are, the better I can assist you!`
  }
};

// Helper function to get AI response
export const getAIResponse = async (message: string): Promise<string> => {
  // Check if OpenAI API key is available
  if (!AI_CONFIG.OPENAI_API_KEY) {
    return getFallbackResponse(message);
  }

  try {
    const response = await fetch(AI_CONFIG.OPENAI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_CONFIG.MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI wedding planning assistant specializing in Indian weddings. Provide practical, culturally-aware advice about wedding planning, budgeting, venues, vendors, and timelines. Be encouraging and supportive in your responses.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: AI_CONFIG.MAX_TOKENS,
        temperature: AI_CONFIG.TEMPERATURE,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || getFallbackResponse(message);
  } catch (error) {
    console.error('AI API Error:', error);
    return getFallbackResponse(message);
  }
};

// Get fallback response based on message content
const getFallbackResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Budget and cost-related queries
  if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('price') || 
      lowerMessage.includes('money') || lowerMessage.includes('expensive') || lowerMessage.includes('cheap') ||
      lowerMessage.includes('affordable') || lowerMessage.includes('costly')) {
    return AI_CONFIG.FALLBACK_RESPONSES.budget;
  }
  
  // Venue and location-related queries
  if (lowerMessage.includes('venue') || lowerMessage.includes('location') || lowerMessage.includes('place') ||
      lowerMessage.includes('hall') || lowerMessage.includes('resort') || lowerMessage.includes('hotel') ||
      lowerMessage.includes('palace') || lowerMessage.includes('garden') || lowerMessage.includes('outdoor')) {
    return AI_CONFIG.FALLBACK_RESPONSES.venue;
  }
  
  // Timeline and planning-related queries
  if (lowerMessage.includes('timeline') || lowerMessage.includes('schedule') || lowerMessage.includes('planning') ||
      lowerMessage.includes('when') || lowerMessage.includes('time') || lowerMessage.includes('months') ||
      lowerMessage.includes('days') || lowerMessage.includes('deadline') || lowerMessage.includes('timeline')) {
    return AI_CONFIG.FALLBACK_RESPONSES.timeline;
  }
  
  // Vendor and service-related queries
  if (lowerMessage.includes('vendor') || lowerMessage.includes('supplier') || lowerMessage.includes('photographer') || 
      lowerMessage.includes('caterer') || lowerMessage.includes('makeup') || lowerMessage.includes('decorator') ||
      lowerMessage.includes('dj') || lowerMessage.includes('music') || lowerMessage.includes('transport') ||
      lowerMessage.includes('florist') || lowerMessage.includes('mehndi') || lowerMessage.includes('choreographer')) {
    return AI_CONFIG.FALLBACK_RESPONSES.vendor;
  }
  
  // Style and theme-related queries
  if (lowerMessage.includes('style') || lowerMessage.includes('theme') || lowerMessage.includes('design') ||
      lowerMessage.includes('color') || lowerMessage.includes('decor') || lowerMessage.includes('traditional') ||
      lowerMessage.includes('modern') || lowerMessage.includes('fusion') || lowerMessage.includes('dress') ||
      lowerMessage.includes('attire') || lowerMessage.includes('outfit') || lowerMessage.includes('look')) {
    return AI_CONFIG.FALLBACK_RESPONSES.style;
  }
  
  // Default response for general queries
  return AI_CONFIG.FALLBACK_RESPONSES.default;
};
