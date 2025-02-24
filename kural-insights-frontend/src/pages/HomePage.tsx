import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import "./HomePage.css";
import { KuralResponse, KuralRow } from "../types";
import axios from "axios";
import KuralDisplay from "../components/KuralDisplay";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [kuralData, setKuralData] = useState<KuralRow | null>(null);

  const getRandomOffset = () => {
    return Math.floor(Math.random() * 1330) + 1;
  };

  useEffect(() => {
    const fetchKuralData = async () => {
      const randomOffset = getRandomOffset();
      try {
        const response = await axios.get<KuralResponse>(
          `https://datasets-server.huggingface.co/rows?dataset=Selvakumarduraipandian%2FThirukural&config=default&split=train&offset=${randomOffset}&length=1`
        );
        setKuralData(response.data.rows[0]?.row || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Kural data", error);
      }
    };

    fetchKuralData();
  }, []);

  return (
    <div
      className="home-container d-flex justify-content-center align-items-center"
      style={{ flexGrow: 1 }}
    >
      {loading ? <Loader /> : kuralData && <KuralDisplay kural={kuralData} />}
    </div>
  );
};

export default Home;
