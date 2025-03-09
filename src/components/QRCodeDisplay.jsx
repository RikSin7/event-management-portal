import { QRCodeCanvas } from "qrcode.react";

function QRCodeDisplay({ data }) {
  return (
    <div className="mt-2 text-center">
      <h3 className="text-lg font-semibold">Your QR Code</h3>
      <QRCodeCanvas value={data} size={150} className="mx-auto mt-2" />
    </div>
  );
}

export default QRCodeDisplay;
