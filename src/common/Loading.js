import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

const Loading = (loading = false) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#eee",
        justifyContent: "space-evenly",
      }}
    >
      <Spinner animation="border" role="status">
        {loading && (
          <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
        )}
        {loading && <span className="sr-only">Loading Data from Server</span>}
      </Spinner>
    </div>
  );
};

export default Loading;
