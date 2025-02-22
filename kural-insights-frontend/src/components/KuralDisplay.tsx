import React from "react";
import { KuralRow } from "../types";

interface KuralDisplayProps {
  kural: KuralRow;
}

const KuralDisplay: React.FC<KuralDisplayProps> = ({ kural }) => {
  return (
    <div className="card mb-4 shadow-lg bg-image">
      <div className="card-body">
        <blockquote className="blockquote text-center mb-4 bg-dark text-white p-4 rounded">
          <span
            className="h5 text-primary"
            dangerouslySetInnerHTML={{ __html: kural.Kural }}
          />
        </blockquote>
        <div className="mb-3">
          <p>
            <strong>Transliteration:</strong>{" "}
            <span
              className="text-secondary"
              dangerouslySetInnerHTML={{ __html: kural.Transliteration }}
            />
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Kalaingar Explanation:</strong>{" "}
            <span className="text-success">{kural.Kalaingar_Urai}</span>
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Parimezhalagar Explanation:</strong>{" "}
            <span className="text-info">{kural.Parimezhalagar_Urai}</span>
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Solomon Pappaiya Explanation:</strong>{" "}
            <span className="text-warning">{kural.Solomon_Pappaiya}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default KuralDisplay;
