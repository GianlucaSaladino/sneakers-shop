import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function FooterComponent() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: GS Sneakers
      </div>
    </MDBFooter>
  );
}
