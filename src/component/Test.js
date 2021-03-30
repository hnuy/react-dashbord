import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
  const [profile, setProfile] = useState([]);
  const test = async () => {
    const result = await axios.get("http://localhost:8000/books");
    setProfile(result.data);
  };
  test();
  return <div>Result is {profile.map((e) => e.name)}
  </div>;
}
