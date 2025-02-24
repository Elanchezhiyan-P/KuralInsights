import React, { useEffect } from "react";
import { KuralRow } from "../types";
import { FaBook, FaTags, FaAlignJustify, FaParagraph } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./KuralDisplay.css";

interface KuralDisplayProps {
  kural: KuralRow;
}

const KuralDisplay: React.FC<KuralDisplayProps> = ({ kural }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      document.body.classList.add("animate-fade-in");
    }
  }, [inView]);

  return (
    <div className="container py-5" ref={ref}>
      <div className="card mb-5 shadow-lg border-0 rounded-3 bg-light">
        <div className="card-body">
          {/* Kural Text */}
          <blockquote className="blockquote text-center mb-4">
            <span
              className="h4 text-dark font-weight-bold"
              dangerouslySetInnerHTML={{ __html: kural.Kural }}
            />
          </blockquote>

          {/* Transliteration Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Transliteration</p>
            <p className="text-muted">
              {kural.Transliteration ?? "Not available"}
            </p>
          </div>

          {/* Explanation Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Explanation</p>
            <p className="text-muted">{kural.Vilakam ?? "Not available"}</p>
          </div>

          {/* Couplet Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Couplet</p>
            <p className="text-muted">{kural.Couplet ?? "Not available"}</p>
          </div>

          {/* Kalaingar Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Kalaingar</p>
            <p className="text-muted">
              {kural.Kalaingar_Urai ?? "Not available"}
            </p>
          </div>

          {/* Parimezhalagar Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Parimezhalagar</p>
            <p className="text-muted">
              {kural.Parimezhalagar_Urai ?? "Not available"}
            </p>
          </div>

          {/* Solomon Pappaiya Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Solomon Pappaiya</p>
            <p className="text-muted">
              {kural.Solomon_Pappaiya ?? "Not available"}
            </p>
          </div>

          {/* Varadharajanar Section */}
          <div className="mb-4">
            <p className="h5 font-weight-bold text-teal">Varadharajanar</p>
            <p className="text-muted">
              {kural.M_Varadharajanar ?? "Not available"}
            </p>
          </div>

          {/* Info Cards */}
          <div className="row">
            {/* Athigaram and Section in Cards */}
            <div className="col-md-6 mb-4">
              <div className="card p-4 border-light shadow-lg rounded-3 bg-light-blue hover-card">
                <h5 className="card-title text-teal font-weight-bold">
                  <FaBook /> Athigaram
                </h5>
                <p className="card-text text-muted">
                  {kural.Athigaram ?? "Not available"}
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card p-4 border-light shadow-lg rounded-3 bg-light-pink hover-card">
                <h5 className="card-title text-teal font-weight-bold">
                  <FaTags /> Section
                </h5>
                <p className="card-text text-muted">
                  {kural.Section ?? "Not available"}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Paal and Iyal in Cards */}
            <div className="col-md-6 mb-4">
              <div className="card p-4 border-light shadow-lg rounded-3 bg-light-green hover-card">
                <h5 className="card-title text-teal font-weight-bold">
                  <FaAlignJustify /> Paal
                </h5>
                <p className="card-text text-muted">
                  {kural.Paal ?? "Not available"}
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card p-4 border-light shadow-lg rounded-3 bg-light-yellow hover-card">
                <h5 className="card-title text-teal font-weight-bold">
                  <FaParagraph /> Iyal
                </h5>
                <p className="card-text text-muted">
                  {kural.Iyal ?? "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuralDisplay;
