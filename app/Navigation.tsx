import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { large, useBreakpoint } from '@/constants/BreakPoints';


const Navigation = () => {
  const params = useLocalSearchParams();

  const showDrawerToggleForBreakPoint = (breakpoint: 'large' | 'medium'): boolean => {
    return breakpoint !== large;
  };
  
  const breakpoint = useBreakpoint();
  const showDrawerToggle: boolean = showDrawerToggleForBreakPoint(breakpoint);

  const renderInsightContent = () => {
    if (params.Title === 'INSIGHT') {
      return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Text className='text-3xl font-bold mb-6'>I - Insight</Text>
          
          <Text className='text-2xl font-bold mb-8'>
            Gain insight into the{'\n'}
            patient's perceptions and{'\n'}
            experiences.
          </Text>

          <Text className='text-lg mb-6'>
            Work to establish trust and safety: Sit down. Demonstrate active listening.
            Use non-threatening body language. Make sure the physical space feels safe and
            comfortable.
          </Text>

          <Text className='text-lg mb-6'>
            Recognize the signs of re-traumatization or emotional distress.¹
          </Text>

          <Text className='text-lg mb-6'>
            Acknowledge that trauma or difficult experiences surrounding health care is common with a
            statement like:
          </Text>

          <Text className='text-lg italic mb-6 ml-4'>
            "Hospital stays can be hard for many people, especially if they have had difficult
            experiences in the past."
          </Text>

          <Text className='text-lg mb-4'>
            Ask open-ended questions in a safe and sensitive manner, such as:
          </Text>

          <Text className='text-lg italic mb-2 ml-4'>
            "Is there anything we should know to help make your time here more comfortable and
            make you feel safe?"
          </Text>

          <Text className='text-lg italic mb-6 ml-4'>
            "Have you had any experiences receiving health care that would be important for me to
            know?"
          </Text>

          <Text className='text-lg mb-4'>
            If a patient discloses a trauma or difficult experiences, respond empathetically, for instance:
          </Text>

          <Text className='text-lg italic mb-2 ml-4'>"Thank you for trusting me with this."</Text>
          <Text className='text-lg italic mb-2 ml-4'>"I can see how hurtful that must have been for you."</Text>
          <Text className='text-lg italic mb-6 ml-4'>"I believe your experience."</Text>

          <Text className='text-sm italic mb-10'>
            ¹ sudden anxiousness, restlessness, fear, avoidance, social isolation, despair, fatigue, physical reactions (such as putting up their hands),
            and an inability to control emotions.
          </Text>
        </ScrollView>
      );
    }
   else if (params.Title === 'NAVIGATE') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>N - Navigate</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Navigate emotions that{'\n'}
          may arise in response{'\n'}
          to difficult experiences{'\n'}
          or trauma.
        </Text>

        <Text className='text-lg mb-6'>
          Hold space for your patient's emotions. Be present. Be nonjudgemental in your response.
        </Text>

        <Text className='text-lg mb-6'>
          Stay attune to your own reactions and monitor for your own secondary trauma or distress. If necessary,
          bring in support.
        </Text>

        <Text className='text-lg mb-6'>
          Normalize that difficult experiences can impact one's health and stress response. (i.e. "We would
          expect anyone in your shoes to respond this way to what you have been through.")
        </Text>

        <Text className='text-lg mb-4'>
          Empathize with patients using supportive statements, such as:
        </Text>

        <Text className='text-lg font-bold mb-2 ml-4'>Naming:</Text>
        <Text className='text-lg italic mb-4 ml-8'>
          "That sounds like a really difficult time in your life"
        </Text>

        <Text className='text-lg font-bold mb-2 ml-4'>Understand:</Text>
        <Text className='text-lg italic mb-4 ml-8'>
          "I can't imagine how overwhelming this must be for you."
        </Text>

        <Text className='text-lg font-bold mb-2 ml-4'>Respect:</Text>
        <Text className='text-lg italic mb-2 ml-8'>
          "You've taken a really tough experience in your life and have used it to empower
          yourself and others."
        </Text>
        <Text className='text-lg italic mb-4 ml-8'>
          "You have done a great job advocating for your needs."
        </Text>

        <Text className='text-lg font-bold mb-2 ml-4'>Support:</Text>
        <Text className='text-lg italic mb-2 ml-8'>
          "I will work with your team to help support you the best we can through this."
        </Text>
        <Text className='text-lg italic mb-4 ml-8'>
          "I wish I could take the pain away."
        </Text>

        <Text className='text-lg font-bold mb-2 ml-4'>Explore:</Text>
        <Text className='text-lg italic mb-2 ml-8'>
          "If you feel comfortable, can you describe how this experience impacts your time here?"
        </Text>
        <Text className='text-lg italic mb-8 ml-8'>
          "Help me understand how your experiences impact how you view your hospital stay."
        </Text>
      </ScrollView>
    );
  } else if (params.Title === 'FOCUS') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>F - Focus</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Focus and collaborate{'\n'}
          on specific ways to{'\n'}
          support the patient's{'\n'}
          care.
        </Text>

        <Text className='text-lg mb-4'>
          Inquire about patient's needs; do not assume, by asking questions like:
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>
          "How can we best support you?"
        </Text>
        <Text className='text-lg italic mb-2 ml-4'>
          "What worked in the past? What did not work?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "What changes can we make?"
        </Text>

        <Text className='text-lg mb-4'>
          Build consensus on the next steps, for instance:
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>
          "This is what I have so far for steps we can take, does this make sense?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "How can we adjust our next steps to meet your needs?"
        </Text>

        <Text className='text-lg mb-4'>
          Build trust through transparency about limitations
        </Text>

        <Text className='text-lg italic mb-6 ml-4'>
          "We will do our best to help you, but we may be limited in these ways..."
        </Text>
      </ScrollView>
    );
  } else if (params.Title === 'OUTREACH') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>O - Outreach</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Outreach with{'\n'}
          other team{'\n'}
          members to{'\n'}
          support{'\n'}
          patient.
        </Text>

        <Text className='text-lg mb-4'>
          If necessary, ask the patient if you can share their experiences and plan of care with the rest
          of the care team, by asking questions like:
        </Text>

        <Text className='text-lg italic mb-4 ml-4'>
          "Based on what you have shared, a social worker on our team's job is to help connect
          you with resources, do I have your permission to loop them in?"
        </Text>
        <Text className='text-lg italic mb-2 ml-4'>
          "Can I discuss this with the rest of your care team to make sure we can do everything
          we can for you?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "Is there anything you want me to leave out?"
        </Text>

        <Text className='text-lg mb-6'>
          Consider patient safety and privacy. Be thoughtful whether it is necessary to document any
          disclosures. Offer to record-block or to make notes private in the electronic health record.
          Reach out to your program director for guidance.
        </Text>

        <Text className='text-lg italic mb-6 ml-4'>
          "I need to write down our plan to take care of you in your health records. If there's
          something you don't want me to write or if there's someone you don't want to see this,
          just tell me. I'll do my best to help, but sometimes I may need to share certain things
          with our team to make sure we take the best care of you."
        </Text>
      </ScrollView>
    );
  } else if (params.Title === 'RESOURCES') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>R - Resources</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Connect patient to{'\n'}
          resources with support{'\n'}
          from an interdisciplinary{'\n'}
          team.
        </Text>

        <Text className='text-lg mb-4'>
          Empower patient to strengthen existing support systems, by asking questions
          like:
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>
          "Can you tell me about people in your life who help support you?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "What has helped you move forward in the past?"
        </Text>

        <Text className='text-lg mb-4'>
          If available, connect to peer support. For example:
        </Text>

        <Text className='text-lg italic mb-6 ml-4'>
          "Would you like me to help you find support from others who have been
          through what you have been through?"
        </Text>

        <Text className='text-lg mb-4'>
          If available, connect to hospital, community, and national resources, for
          instance:
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>
          "We have spiritual support available; would this be of interest to you?"
        </Text>
        <Text className='text-lg italic mb-2 ml-4'>
          "Your neighborhood has a program that may be helpful, would you like to
          learn more?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "There is a national hotline number that you can call when you are ready,
          would you like me to write it down?"
        </Text>
      </ScrollView>
    );
  }
  else if (params.Title === 'MONITOR') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>M - Monitor</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Monitor any actions{'\n'}
          taken.
        </Text>

        <Text className='text-lg mb-4'>
          Define actionable steps to check–in with patient and care team about plan of care,
          for instance:
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>
          "How often should we touch base to make sure our plan is working for you?"
        </Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "With my schedule, I can touch base with you in the morning. Does that work?"
        </Text>

        <Text className='text-lg mb-6'>
          Incorporate the plan of care into your assessment and plan and make it a central
          part of your daily thought process.
        </Text>

        <Text className='text-lg mb-4'>
          Be transparent about any limitations to your ability to respond.
        </Text>

        <Text className='text-lg italic mb-6 ml-4'>
          "I may not see you regularly throughout the day, but I am working closely
          with the team to make sure we are doing our best to care for you."
        </Text>

        <Text className='text-lg mb-4'>
          Get patient feedback on your plan and make feasible adjustments.
        </Text>

        <Text className='text-lg italic mb-2 ml-4'>"Is it what you expected?"</Text>
        <Text className='text-lg italic mb-6 ml-4'>
          "How can we adjust our next steps to meet your needs?"
        </Text>
      </ScrollView>
    );
  } else if (params.Title === 'ENGAGE SUPPORT') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>E - Engage Long-Term Support</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Engage support to continue{'\n'}
          empowering the patient in the long{'\n'}
          term.
        </Text>

        <Text className='text-lg mb-4'>
          Empower patient to involve and engage their support system as
          they transition out of the hospital.
        </Text>

        <Text className='text-lg italic mb-6 ml-4'>
          "Would it be helpful to have your mother, who you've identified
          as your main support, participate in our discharge conversations
          to learn about all that we have accomplished together?"
        </Text>

        <Text className='text-lg mb-6'>
          Collaborate with an interdisciplinary team and the patient to find a
          supportive healthcare provider who aligns with the patient's
          follow-up care goals.
        </Text>

        <Text className='text-lg mb-6'>
          If possible, facilitate a smooth transition between the inpatient
          team and the follow-up provider.
        </Text>
      </ScrollView>
    );
  } else if (params.Title === 'DEBRIEF') {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text className='text-3xl font-bold mb-6'>D - Debrief</Text>
        
        <Text className='text-2xl font-bold mb-8'>
          Debrief with team members{'\n'}
          and self.
        </Text>

        <Text className='text-lg mb-6'>
          Set aside time with the interdisciplinary care team to discuss successes and
          areas for improvement regarding the patient's care plan.
        </Text>

        <Text className='text-lg mb-6'>
          Acknowledge the impact of secondary trauma² and utilize available
          institutional resources to support the care team.
        </Text>

        <Text className='text-lg mb-6'>
          Using insights gained from patient stories and experiences, feel empowered
          to connect with institutional leaders or mentors to advocate for more
          trauma-informed institutional policies and processes.
        </Text>

        <Text className='text-lg mb-6'>
          Most importantly, take time to reflect and prioritize your mental health.
          Lean on your support system and engage in your preferred coping strategies
          to manage your own work-related stress or distress.
        </Text>
      </ScrollView>
    );
  }
  return (
    <View className='flex items-center justify-center flex-1'>
      <Text className='text-2xl font-bold'>{params.Title}</Text>
      <Text className='text-2xl font-bold'>{params.Description}</Text>
    </View>
  );
};

  if (showDrawerToggle) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <TouchableOpacity 
            className='bg-[#8544B8] w-28 items-center justify-center rounded-full mt-4 mb-6' 
            onPress={() => router.back()}
          >
            <Text className='text-background py-3'>Go Back</Text>
          </TouchableOpacity>
          
          {renderInsightContent()}
        </View>
      </SafeAreaView>
    )
  } else {
    // Desktop version remains the same
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <TouchableOpacity 
            style={{ 
              backgroundColor: '#8544B8', 
              width: 150, 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: 20,
              marginTop: 16,
              marginBottom: 24
            }} 
            onPress={() => router.back()}
          >
            <Text style={{color: '#FFF', paddingVertical: 10}}>Go Back</Text>
          </TouchableOpacity>
          
          {renderInsightContent()}
        </View>
      </SafeAreaView>
    )
  }
}

export default Navigation
