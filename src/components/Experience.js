import React from 'react';

function Experience() {
  return (
    <section id="experience" className="bg-white text-gray-800 px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <h3 className="text-xl font-semibold">System Engineer – TCS (India)</h3>
      <p className="text-sm italic mb-2">Aug 2021 – Dec 2023</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Automated ETL pipelines using SQL and Python; reduced data latency by 30%.</li>
        <li>Built GPU-accelerated ML data pipelines with RAPIDS, Dask & SageMaker.</li>
        <li>Led LLM prompt engineering, log classification & benchmarking pipelines.</li>
        <li>Integrated Kubernetes & Docker Compose for scalable distributed inference.</li>
      </ul>
    </section>
  );
}

export default Experience;
