"use client";

import { useState } from "react";

const page = () => {

    const [first, setFirst] = useState("hello");


  return (
    <div>{first}</div>
  )
}

export default page