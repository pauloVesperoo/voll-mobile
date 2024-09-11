import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicos from 'react-native-vector-icons/Ionicons';
import Consultas from "./Consultas";
import Principal from "./Principal";

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Principal"
            component={Principal}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicos name="home"/>
                )
            }}
            />
            <Tab.Screen
            name="Consultas"
            component={Consultas}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicos name="calendar"/>
                )
            }}
            />
        </Tab.Navigator>
    )
}