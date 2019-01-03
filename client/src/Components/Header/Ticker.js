import React from "react";

const Ticker = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "62px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        boxSizing: "content-box",
        border: "1px solid #56667F",
        borderRadius: "4px",
        textAlign: "right",
        lineHeight: "14px",
        blockSize: "62px",
        fontSize: "12px",
        fontFeatureSettings: "normal",
        textSizeAdjust: "100%",
        boxShadow: "inset 0 -20px 0 0 #56667F",
        padding: "0px",
        margin: "0px"
      }}
    >
      <div style={{ height: "40px" }}>
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
          width="100%"
          height={36}
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          border={0}
          style={{ border: 0, margin: 0, padding: 0 }}
        />
      </div>
      <div
        style={{
          color: "#FFFFFF",
          lineHeight: "1px",
          fontWeight: 400,
          fontSize: "1px",
          boxSizing: "content-box",
          margin: "5px 6px 10px 0px",
          fontFamily: "Verdana, Tahoma, Arial, sans-serif"
        }}
      >
        powered by&nbsp;
        <a
          href="https://coinlib.io"
          target="_blank"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "1px"
          }}
        >
          Coinlib
        </a>
      </div>
    </div>
  );
};

export default Ticker