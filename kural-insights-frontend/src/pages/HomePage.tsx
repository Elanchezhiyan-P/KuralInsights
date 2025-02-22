import React, { useState, useEffect } from "react";
import axios from "axios";
import { KuralRow, KuralResponse } from "../types";
import KuralDisplay from "../components/KuralDisplay";
import Loader from "../components/loader/Loader";

const HomePage: React.FC = () => {
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
      } catch (error) {
        console.error("Error fetching Kural data", error);
      }
    };

    fetchKuralData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center mb-4">
        <h1>Thirukkural (திருக்குறள்)</h1>
      </div>
      {kuralData ? <KuralDisplay kural={kuralData} /> : <Loader />}
    </div>
  );
};

export default HomePage;
