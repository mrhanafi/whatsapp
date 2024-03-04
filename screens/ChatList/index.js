import React from "react";
import { Button, Text, View } from "react-native";
import style from "./style";

const ChatList = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Chat List page</Text>
      <Button
        title="go to settings"
        onPress={() => navigation.navigate("ChatSetting")}
      />
      <Button title="go to Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default ChatList;
