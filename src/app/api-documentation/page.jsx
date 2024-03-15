"use client"
import SwaggerUI from "swagger-ui-react";
import 'swagger-ui-react/swagger-ui.css';
import { useEffect, useState } from 'react';

export default function ApiDocs() {
  const [swaggerSpec, setSwaggerSpec] = useState(null);

  useEffect(() => {
    fetch('/swagger.json')
      .then((response) => response.json())
      .then((json) => setSwaggerSpec(json));
  }, []);

  return swaggerSpec ? <SwaggerUI spec={swaggerSpec} /> : <p>Loading...</p>;
}


