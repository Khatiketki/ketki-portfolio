import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 text-gray-900 px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-semibold">AI Code Optimizer</h3>
          <p>LLM-based smart code reviewer using LangChain + SageMaker, optimized inference speed by 20%.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">RAG-Powered Medical Query Assistant</h3>
          <p>Built RAG app using llama-index and HuggingFace to improve healthcare triage response relevance.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Automated Syslog Data Processing</h3>
          <p>Log classification and anomaly detection pipeline with Tableau dashboard for real-time monitoring.</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
