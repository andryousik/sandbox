import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactFlow, { addEdge, useNodesState, useEdgesState, MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import "./EditContainer.css";

const COMPONENT_TYPES = {
  heater: { label: "🔥 Heater", color: "#FF5733" },
  fan: { label: "🌬️ Fan", color: "#33A1FF" },
  solar: { label: "☀️ Solar battery", color: "#FFD700" },
};

const EditContainer = () => {
  const { id } = useParams(); // Получаем ID контейнера из URL
  const storageKey = `diagram-${id}`;

  const initialNodes = JSON.parse(localStorage.getItem(`${storageKey}-nodes`)) || [];
  const initialEdges = JSON.parse(localStorage.getItem(`${storageKey}-edges`)) || [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeProperties, setNodeProperties] = useState({ power: "", efficiency: "" });

  useEffect(() => {
    localStorage.setItem(`${storageKey}-nodes`, JSON.stringify(nodes));
    localStorage.setItem(`${storageKey}-edges`, JSON.stringify(edges));
  }, [nodes, edges]);

  const generateId = () => `id-${Date.now()}-${Math.floor(Math.random() * 100)}`;

  const addNode = (type) => {
    const newNode = {
      id: generateId(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: COMPONENT_TYPES[type].label, type, power: "", efficiency: "" },
      style: {
        background: COMPONENT_TYPES[type].color,
        border: "2px solid black",
        padding: 10,
        borderRadius: 5,
        color: "#fff",
        fontWeight: "bold",
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelectedNode = () => {
    if (!selectedNode) return;
    setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
    setEdges((eds) => eds.filter((edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id));
    setSelectedNode(null);
  };

  const saveDiagram = () => {
    localStorage.setItem(`${storageKey}-nodes`, JSON.stringify(nodes));
    localStorage.setItem(`${storageKey}-edges`, JSON.stringify(edges));
    alert("Diagram saved!");
  };

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setNodeProperties({ power: node.data.power || "", efficiency: node.data.efficiency || "" });
  };

  const updateNodeProperties = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, ...nodeProperties } }
          : node
      )
    );
    setSelectedNode(null);
  };

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    
    <div className="edit-container">
      <h2>Editing Container {id}</h2>
      <div className="control-panel-flow">
        <button onClick={() => addNode("heater")}>Add heater 🔥</button>
        <button onClick={() => addNode("fan")}>Add fan 🌬️</button>
        <button onClick={() => addNode("solar")}>Add solar battery ☀️</button>
        <button onClick={deleteSelectedNode} disabled={!selectedNode}>
          Delete selected
        </button>
        <button onClick={saveDiagram}>Save</button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {selectedNode && (
        <div className="edit-menu">
          <h3>Editing: {selectedNode.data.label}</h3>
          <label>
            Power (W):
            <input type="number" value={nodeProperties.power} onChange={(e) => setNodeProperties({ ...nodeProperties, power: e.target.value })} />
          </label>
          <label>
            Effectiveness (%):
            <input type="number" value={nodeProperties.efficiency} onChange={(e) => setNodeProperties({ ...nodeProperties, efficiency: e.target.value })} />
          </label>
          <button onClick={updateNodeProperties}>Save changes</button>
        </div>
      )}
    </div>
  );
};

export default EditContainer;
