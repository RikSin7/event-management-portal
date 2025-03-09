import { useState, useEffect } from "react";
import eventsData from "../data/data.json";

function useRSVP(eventId) {
  const [qrData, setQrData] = useState(null);
  const [myEvent, setMyEvent] = useState(null); // Store event dynamically

  useEffect(() => {
    const storedEvent = localStorage.getItem(`myEvent-${eventId}`);
    const storedQR = localStorage.getItem(`qrData-${eventId}`);

    if (storedEvent) {
      const parsedEvent = JSON.parse(storedEvent);
      setMyEvent(parsedEvent);

      //Set QR code if RSVP was confirmed before
      if (parsedEvent?.rsvpStatus) {
        setQrData(storedQR);
      }
    } else {
      const foundEvent = eventsData.find((e) => e.id === Number(eventId));
      if (foundEvent) {
        setMyEvent(foundEvent); // Load from data.json if not in localStorage
      }
    }
  }, [eventId]);

  const handleRSVP = () => {
    if (!myEvent || myEvent?.rsvpStatus || myEvent?.seatsAvailable <= 0) return;

    const updatedEvent = {
      ...myEvent,
      seatsAvailable: myEvent?.seatsAvailable - 1,
      rsvpStatus: true,
    };

    const qrCodeData = JSON.stringify({
      eventId: myEvent?.id,
      title: myEvent?.title,
      date: myEvent?.date,
      location: myEvent?.location,
    });

    setMyEvent(updatedEvent);
    setQrData(qrCodeData);

    localStorage.setItem(`myEvent-${eventId}`, JSON.stringify(updatedEvent));
    localStorage.setItem(`qrData-${eventId}`, qrCodeData);
  };

  const handleCancelRSVP = () => {
    if (!myEvent || !myEvent?.rsvpStatus) return;

    const updatedEvent = {
      ...myEvent,
      seatsAvailable: myEvent?.seatsAvailable + 1,
      rsvpStatus: false,
    };

    setMyEvent(updatedEvent);
    setQrData(null);

    localStorage.setItem(`myEvent-${eventId}`, JSON.stringify(updatedEvent));
    localStorage.removeItem(`qrData-${eventId}`);
  };

  return {
    qrData,
    myEvent,
    handleRSVP,
    handleCancelRSVP,
  };
}

export default useRSVP;
