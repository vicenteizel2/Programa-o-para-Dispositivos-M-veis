import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View, ScrollView, Alert } from "react-native";

export default function App() {
  const alerta = () => {
    Alert.alert("GOL DO LIVERPOOOOOOL !");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Liverpool Football Club</Text>
      <Text style={styles.info}>Idade: 133</Text>
      <Text style={styles.info}>País: Inglaterra</Text>
      <Text style={styles.info}>Cidade: Liverpool</Text>
      <Text style={styles.info}>Apelido: Reds</Text>
      <Text style={styles.info}>You'll Never Walk Alone !!!</Text>

      <Image
        style={styles.image}
        source={{ uri: "https://yt3.googleusercontent.com/PKM1Q5b-5xSCNN-uhLBADnPMeweaERe-u9tk4D0Pehvw5HMIbul7JY_64JDzadUCigZTQK0iNQ=s900-c-k-c0x00ffffff-no-rj" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://images2.minutemediacdn.com/image/upload/c_crop,w_5760,h_3240,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/liverpool_fc_on_si/01jjeep823qpv0eh97qv.jpg" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46tZY4nzvBhDcAjXm6_SbaKYPq2rh38JbBw&s" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://a.espncdn.com/photo/2023/0307/r1140915_1296x729_16-9.jpg" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/acquiadam/2022-06/anfield-general-view-170622.jpg?itok=sbcBzGtZ" }}
      />

      <Button title="GOL" onPress={alerta} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ec4401",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
});