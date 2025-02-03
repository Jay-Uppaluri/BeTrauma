import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { large, useBreakpoint } from '@/constants/BreakPoints';

type Props = { 
    Avatar: string;
    Title: string;
    Description: string;
    Color: string;
}

const NavCard = (props: Props) => {
    const router = useRouter();

    const navigateToDetails = (Title: string, Description: string,) => {
        router.push({
          pathname: '/Navigation',
          params: { Title, Description },
        });
    };

    const breakpoint = useBreakpoint();
    const showDrawerToggle: boolean = breakpoint !== large;
    
    if (showDrawerToggle) {
        return (
            <TouchableOpacity 
                className='flex-row items-center my-5'
                onPress={() => navigateToDetails(props.Title, props.Description)}
            >
                <View className='w-16 h-16 rounded-full items-center justify-center' style={{backgroundColor: props.Color}}>
                    <Text className='text-3xl font-bold text-background'>{props.Avatar}</Text>
                </View>
        
                <View className='flex-1 ml-4'> 
                    <Text className='text-2xl italic'>{props.Title}</Text>
                    <Text className='text-xl font-bold'>{props.Description}</Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}
                onPress={() => navigateToDetails(props.Title, props.Description)}
            >
                <View style={{width: 100, height:100, borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: props.Color}}>
                    <Text style={{fontSize: 50, fontWeight: 'bold', color: "#FFF"}}>{props.Avatar}</Text>
                </View>
        
                <View style={{flex: 1, marginLeft: 30}}> 
                    <Text style={{fontSize: 30, fontStyle: 'italic'}}>{props.Title}</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{props.Description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default NavCard;