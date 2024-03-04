import React from "react";
import Setting from "../screens/Setting";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/ChatList";
import ChatSetting from "../screens/ChatSetting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../screens/Chat";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitle: "",
          headerBackTitle: "Back",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ChatSetting"
        component={ChatSetting}
        options={{
          headerTitle: "Settings",
          headerBackTitle: "Back",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
