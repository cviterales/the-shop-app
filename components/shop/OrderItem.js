import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Card from "../UI/Card";

import CartItem from "./CartItem";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? "Hide Details" : "Show Details" }
        onPress={() => {
          setShowDetails((showDetails) => !showDetails);
        }}
      />
      {showDetails && (
        <View style={styles.detailsItem}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};
const styles = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "#888",
  },
  detailsItem: {
    width: '100%',
  }
});
export default OrderItem;
