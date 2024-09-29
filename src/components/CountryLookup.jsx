"use client";

import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCounty] = useState("");
  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch("http://ip-api.com/json/")
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCounty(response);
    };
    getCountry()
  }, []);
  return <div>{country}</div>;
};

export default CountryLookup;
