import React, { useState, useRef,Fragment } from "react";
import SignatureCanvas from 'react-signature-canvas'

function SignaturePad(){

const [openModel, setOpenModal] = useState(false);
const sigCanvas = useRef();
const [penColor, setPenColor] = useState("black");
const colors = ["black", "green", "red", "purple", "yellow", "blue", "pink", "orange"]
const [imageURL, setImageURL] = useState(null);


const create = () => {
  const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
  setImageURL(URL);
  setOpenModal(false);
};
  // {
  //   imageUrl && (
  //     <>
  //       <img src={imageUrl} alt="signature" className="signature" />
  //     </>
  //   )
  // }


  //Pad to Draw Signature
  return (
    <Fragment>
      <div className="sigPad__penColors">
        <p>Pen Color:</p>
        {colors.map((color) => (
          <span
          key={color}
          style={{
            backgroundColor: color,
            border: `${color === penColor ? `2px solid ${color}` : ""}`,
          }}
          onClick={() => setPenColor(color)}
          ></span>
        ))}
      </div>

      <div className="sigPadContainer">
        <SignatureCanvas penColor={penColor}
        canvasProps={{ className: "sigCanvas" }} 
        ref={sigCanvas}
        />
        <hr/>
        <button onClick={() => sigCanvas.current.clear()}>Clear</button>
        <button className="create" onClick={create}>
              Create
        </button>
      </div>
    </Fragment>
  );
 }

 export default SignaturePad;