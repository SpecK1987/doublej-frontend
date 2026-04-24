import { useEffect, useState } from "react";
import { API, authHeader } from "../../utils/api";

export default function NewOrder() {
  const [step, setStep] = useState(1);

  const [pickupLocation, setPickup] = useState("");
  const [deliveryLocation, setDelivery] = useState("");
  const [goodsType, setGoodsType] =
