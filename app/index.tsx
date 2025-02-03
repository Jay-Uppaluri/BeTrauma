import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import NavCard from '@/components/NavCard'
import { useBreakpoint, large } from '@/constants/BreakPoints'

const index = () => {
  const breakpoint = useBreakpoint();
  const showDrawerToggle = breakpoint !== large;

  if (showDrawerToggle) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#8544B8' }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ minHeight: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Text className='text-4xl font-bold text-[#D1CA1F]'>BE</Text>
              <Text className='text-4xl font-bold text-[#D1CA1F]'>TRAUMA</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className='flex-1 flex-row bg-background'>
                  <View style={{ width: '33%' }}>
                    <Image 
                      source={require('../assets/images/road.png')} 
                      style={{ width: '100%', height: '100%' }}
                      resizeMode='stretch'
                    />
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
                    <NavCard Avatar='I' Title='INSIGHT' Description='into patient perceptions & experiences' Color='#8544B8'/>
                    <NavCard Avatar='N' Title='NAVIGATE' Description='emotions that may arise' Color='#928E34'/>
                    <NavCard Avatar='F' Title='FOCUS' Description='on actionable steps to pressing issues' Color='#8544B8'/>
                    <NavCard Avatar='O' Title='OUTREACH' Description='to team members' Color='#928E34'/>
                    <NavCard Avatar='R' Title='RESOURCES' Description='to empower patient' Color='#8544B8'/>
                    <NavCard Avatar='M' Title='MONITOR' Description='any actions taken' Color='#928E34'/>
                    <NavCard Avatar='E' Title='ENGAGE SUPPORT' Description='to empowering the patient in the long term.' Color='#8544B8'/>
                    <NavCard Avatar='D' Title='DEBRIEF' Description='with care team and self' Color='#928E34'/>
                  </View>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </View>
        
        <View style={{ backgroundColor: '#D3CB3E' }}>
          <SafeAreaView style={{ backgroundColor: '#D3CB3E' }}>
            <View style={{ padding: 16, alignItems: 'center' }}>
              <Text className='text-xl font-bold text-[#8544B8]'>TO BUILD TRUST AND EMPOWERMENT</Text>
            </View>
          </SafeAreaView>
        </View>
      </View>
    )
  } else {
    return(
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#8544B8' }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ minHeight: 120, justifyContent: 'center', alignItems: 'center' }}>
              <Text className='text-8xl font-bold text-[#D1CA1F]'>BE</Text>
              <Text className='text-8xl font-bold text-[#D1CA1F]'>TRAUMA</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
              <View style={{ marginHorizontal: 'auto', maxWidth: 1200, flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '20%', marginTop: -10 }}>
                  <Image 
                    source={require('../assets/images/road.png')} 
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='stretch'
                  />
                </View>

                <View style={{ width: '40%', justifyContent: 'space-around', paddingLeft: 48, gap: 16 }}>
                  <NavCard Avatar='I' Title='INSIGHT' Description='into patient perceptions & experiences' Color='#8544B8'/>
                  <NavCard Avatar='N' Title='NAVIGATE' Description='emotions that may arise' Color='#928E34'/>
                  <NavCard Avatar='F' Title='FOCUS' Description='on actionable steps to pressing issues' Color='#8544B8'/>
                  <NavCard Avatar='O' Title='OUTREACH' Description='to team members' Color='#928E34'/>
                  <NavCard Avatar='R' Title='RESOURCES' Description='to empower patient' Color='#8544B8'/>
                  <NavCard Avatar='M' Title='MONITOR' Description='any actions taken' Color='#928E34'/>
                  <NavCard Avatar='E' Title='ENGAGE SUPPORT' Description='to empowering the patient in the long term.' Color='#8544B8'/>
                  <NavCard Avatar='D' Title='DEBRIEF' Description='with care team and self' Color='#928E34'/>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
        
        <View style={{ backgroundColor: '#D3CB3E' }}>
          <SafeAreaView style={{ backgroundColor: '#D3CB3E' }}>
            <View style={{ padding: 16, alignItems: 'center' }}>
              <Text className='text-xl font-bold text-[#8544B8]'>TO BUILD TRUST AND EMPOWERMENT</Text>
            </View>
          </SafeAreaView>
        </View>
      </View>
    )
  }
}

export default index