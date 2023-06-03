import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Contacts from "expo-contacts";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ContactsAccess() {
  const [contact, setContact] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [Email, setEmail] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        setContact(contact);
        if (data.length > 0) {
          const contact = data[0];
          setContact(data);
          console.log(data);
        }
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (contact) {
    text = JSON.stringify(contact);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Contacts Module Example</Text>
          <Text>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
