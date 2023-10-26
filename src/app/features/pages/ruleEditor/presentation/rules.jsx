import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  MarkerType,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "../../../../common/styles/rulesStyle.css";
import { useMenu } from "../../../../common/utils/menuContext";
import MiniWidgets from "../../display/presentation/components/miniWidgets";
import ConstantsBlock from "./components/constantsBlock";
import FunctionBlock from "./components/functionBlock";
import LogicBlock from "./components/logicBlock";
import MathBlock from "./components/mathBlock";
import ObjectBrowser from "./components/objectBrowser.jsx";
import RuleCanvas from "./components/ruleCanvas.jsx";
import RuleList from "./components/ruleList.jsx";
import nodeTypes from "./nodes/nodeTypes";
import edgeOptions from "./nodes/edgeOptions";

const connectionLineStyle = { stroke: "#a6a6a6" };

const Rules = () => {
  const { open } = useMenu();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const [draggedOperator, setDraggedOperator] = useState(null);
  const [draggedConstantLabel, setDraggedConstantLabel] = useState(null);
  const [draggedAdd4Operator, setdraggedAdd4Operator] = useState(null);
  const [draggedOutput, setDraggedOutput] = useState(null);
  const [nodeCount, setNodeCount] = useState(0);
  const [nodeCounts, setNodeCounts] = useState({});
  const [expandedDevices, setExpandedDevices] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSavePopupOpen, setIsSavePopupOpen] = useState(false);
  const [constantValue, setConstantValue] = useState("");
  const [saveValue, setSaveValue] = useState("");
  const [constantType, setConstantType] = useState("");
  const [bacnetData, setBacnetData] = useState({});
  const [savedRules, setSavedRules] = useState(
    JSON.parse(localStorage.getItem("savedRules")) || []
  );

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [editingNodeId, setEditingNodeId] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);

  const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;

  useEffect(() => {
    fetch(`${serverEndpoint}/fetch_bacnet_objects_properties`)
      .then((response) => response.json())
      .then((data) => {
        setBacnetData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [serverEndpoint]);

  const handleEditClick = (nodeId) => {
    setEditingNodeId(nodeId);
    setIsEditPopupOpen(true);
  };

  const onSave = () => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      const ruleName = saveValue;
      const savedRules = JSON.parse(localStorage.getItem("savedRules")) || [];
      const existingRuleIndex = savedRules.findIndex(
        (rule) => rule.name === ruleName
      );

      if (existingRuleIndex > -1) {
        savedRules[existingRuleIndex].data = flow;
        alert(`Rule Updated as: ${ruleName}`);
      } else {
        const newRule = { name: ruleName, data: flow };
        savedRules.push(newRule);
        alert(`Rule Saved as: ${ruleName}`);
      }

      localStorage.setItem("savedRules", JSON.stringify(savedRules));
      setSavedRules(savedRules);
      setIsSavePopupOpen(false);

      const calculationData = {
        ruleName: ruleName,
        nodes: [],
        edges: [],
      };

      flow.nodes.forEach((node) => {
        let nodeData = node.data;

        if (node.type === "customConstantNode") {
          nodeData = { ...nodeData, label: undefined };
        }
        calculationData.nodes.push({
          id: node.id,
          type: node.type,
          data: nodeData,
        });
      });
      flow.edges.forEach((edge) => {
        calculationData.edges.push({
          id: edge.id,
          source: edge.source,
          target: edge.target,
        });
      });

      console.log(calculationData);
      axios
        .post(`${serverEndpoint}/calculate`, calculationData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data && response.data.hasOwnProperty("result")) {
            const result = response.data.result;
            console.log(result);
            const outputNode = flow.nodes.find(
              (node) => node.type === "customOutputNode"
            );

            if (outputNode) {
              outputNode.data = {
                ...outputNode.data,
                value: result,
              };
              setNodes([...nodes, outputNode]);
            }
          }
        })
        .catch((error) => {
          console.error("Error sending data to the backend:", error);
        });
    }
  };

  // const deleteRule = (ruleIndex) => {
  //   const updatedRules = [...savedRules];
  //   updatedRules.splice(ruleIndex, 1);
  //   setSavedRules(updatedRules);
  //   localStorage.setItem("savedRules", JSON.stringify(updatedRules));
  //   alert(`Rule Deleted Successfully`);
  // };
  const onRuleClick = (rule) => {
    const { data } = rule;
    setNodes(data.nodes || []);
    setEdges(data.edges || []);
  };

  const openSavePopup = useCallback(() => {
    setIsSavePopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    setConstantValue("");
    setIsSavePopupOpen(false);
  }, []);

  const handleConstantInputChange = (event) => {
    setConstantValue(event.target.value);
  };
  const handleSaveInputChange = (event) => {
    setSaveValue(event.target.value);
  };

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();
      const pane = reactFlowWrapper.current.getBoundingClientRect();
      const menuX = event.clientX - pane.left;
      const menuY = event.clientY - pane.top;

      setContextMenu({
        id: node.id,
        top: menuY,
        left: menuX,
      });
    },
    [setContextMenu]
  );

  const closeContextMenu = () => {
    setContextMenu(null);
  };
  const onPaneClick = useCallback(() => setContextMenu(null), [setContextMenu]);

  const handleDuplicateClick = useCallback(
    (nodeId, constantType) => {
      const nodeIdParts = nodeId.split("-");
      const originalNodeId = nodeIdParts.slice(0, -1).join("-");

      if (!nodeCounts[originalNodeId]) {
        nodeCounts[originalNodeId] = 1;
      }
      nodeCounts[originalNodeId]++;
      const newCount = nodeCounts[originalNodeId];

      const newId = `${originalNodeId}-${newCount}`;
      const newLabel = `${constantType} Constant ${newCount}`;

      const duplicatedNode = {
        id: newId,
        type: "customConstantNode",
        position: { x: 0, y: 0 },
        data: {
          value: 0,
          label: newLabel,
          handleDuplicateClick: () => handleDuplicateClick(newId, constantType),
          handleEditClick: () => handleEditClick(newId),
          isConnectable: true,
        },
      };
      setNodes((prevNodes) => [...prevNodes, duplicatedNode]);
    },
    [nodeCounts, setNodes]
  );

  const createCustomNodeWithConstant = useCallback(
    (position, constantType) => {
      if (editingNodeId) {
        const updatedNodes = nodes.map((node) => {
          if (node.id === editingNodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                value: parseFloat(constantValue),
              },
            };
          }
          return node;
        });
        setNodes(updatedNodes);
        setEditingNodeId(null);
        setIsEditPopupOpen(false);
      } else {
        const newNodeId = `${constantType}-${nodeCount + 1}`;
        const customConstantNode = {
          id: newNodeId,
          type: "customConstantNode",
          position: position,
          data: {
            value: 0,
            label: `${constantType} Constant ${nodeCount + 1}`,
            handleDuplicateClick: () =>
              handleDuplicateClick(newNodeId, constantType), // Pass newNodeId
            handleEditClick: () => handleEditClick(newNodeId), // Pass newNodeId
            isConnectable: true,
          },
        };
        setNodes((prevNodes) => [...prevNodes, customConstantNode]);
      }
      setConstantType("");
      setNodeCount(nodeCount + 1);
      closePopup();
    },
    [
      editingNodeId,
      nodeCount,
      closePopup,
      nodes,
      setNodes,
      constantValue,
      handleDuplicateClick,
    ]
  );

  const toggleDevice = (deviceId) => {
    if (expandedDevices.includes(deviceId)) {
      setExpandedDevices(expandedDevices.filter((id) => id !== deviceId));
    } else {
      setExpandedDevices([...expandedDevices, deviceId]);
    }
  };

  const clearNodes = () => {
    setNodes([]);
    setEdges([]);
    setNodeCount(0);
    setNodeCounts({});
  };
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (params) => {
      setNodes([...nodes]);
      setEdges((eds) => addEdge(params, eds));
    },
    [nodes, setNodes, setEdges]
  );
  const onDragConstantNodeStart = (event, label) => {
    setDraggedConstantLabel(label);
  };
  const onDragOperatorStart = (event, operatorType) => {
    setDraggedOperator(operatorType);
  };
  const onDragAdd4OperatorStart = (event, operatorType) => {
    setdraggedAdd4Operator(operatorType);
  };
  const onDragOutputStart = (event, output) => {
    setDraggedOutput(output);
  };
  const onDragStart = (event, objectName, device_id) => {
    const deviceData = bacnetData[`device${device_id}`];
    if (deviceData) {
      event.dataTransfer.setData("application/objectName", objectName);
      event.dataTransfer.setData(
        "application/macAddress",
        deviceData.mac_address
      );

      event.dataTransfer.effectAllowed = "move";
    } else {
      console.error("Device data not found in bacnetData.");
    }
  };
  const createCustomOperatorNode = (position, operatorType) => {
    const newNodeId = `${operatorType}-${nodeCount + 1}`;
    const operatorLabel = operatorType;
    const customOperatorNode = {
      id: newNodeId,
      type: "customOperatorNode",
      position: position,
      data: {
        label: operatorLabel,
        value: 0,
      },
    };

    setNodes([...nodes, customOperatorNode]);
    setNodeCount(nodeCount + 1);
  };

  const createAdd4OperatorNode = (position, operatorType) => {
    const newNodeId = `operator-${nodeCount + 1}`;
    const operatorLabel = operatorType;
    const customOperatorNode = {
      id: newNodeId,
      type: "customAdd4OperatorNode",
      position: position,
      data: {
        label: operatorLabel,
        value: 0,
      },
    };

    setNodes([...nodes, customOperatorNode]);
    setNodeCount(nodeCount + 1);
  };
  let newOutputNodeId = "";
  const createCustomOutputNode = (position, output) => {
    newOutputNodeId = `output-${nodeCount + 1}`;
    const customOutputNode = {
      id: newOutputNodeId,
      type: "customOutputNode",
      position: position,
      data: {
        label: "Output",
        value: 0,
      },
    };

    setNodes([...nodes, customOutputNode]);
    setNodeCount(nodeCount + 1);
  };
  const onDrop = (e, mac_address) => {
    e.preventDefault();
    if (!reactFlowWrapper.current) {
      console.error("reactFlowWrapper ref is not assigned.");
      return;
    }

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const objectName = e.dataTransfer.getData("application/objectName");
    const macAddress = e.dataTransfer.getData("application/macAddress");
    console.log(macAddress);

    const position = reactFlowInstance.project({
      x: e.clientX - reactFlowBounds.left,
      y: e.clientY - reactFlowBounds.top,
    });
    console.log(draggedOperator);

    if (draggedOperator) {
      createCustomOperatorNode(position, draggedOperator);
      setDraggedOperator(null);
    } else if (draggedConstantLabel) {
      createCustomNodeWithConstant(position, draggedConstantLabel);
      setDraggedConstantLabel(null);
    } else if (draggedAdd4Operator) {
      createAdd4OperatorNode(position, draggedAdd4Operator);
      setdraggedAdd4Operator(null);
      // setDraggedOperator(null);
    } else if (draggedOutput) {
      createCustomOutputNode(position, draggedOutput);
      setDraggedOutput(null);
    } else if (objectName) {
      createCustomNode(position, objectName, macAddress);
    }
  };
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const createCustomNode = (position, objectName, mac_address) => {
    const newNodeId = `${objectName}-${mac_address}`;
    const label = objectName.replace(",", " ").toString();
    const customNode = {
      id: newNodeId,
      type: "customNode",
      position: position,
      data: {
        value: 0,
        label: label,
        isConnectable: true,
        serverEndpoint,
        mac_address,
      },
      markerEnd: {
        type: MarkerType.Arrow,
      },
      isSelected: false,
    };

    fetch(
      `${serverEndpoint}/fetch_bacnet_object_present_value?mac=${mac_address}&object_id=${label}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("Received data from server:", data);
        const presentValue = data.properties;
        customNode.data.value = presentValue;

        setNodes([...nodes, customNode]);
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error);
      });

    setNodeCount(nodeCount + 1);
    setExpandedDevices([...expandedDevices, objectName]);
  };
  const handleRefresh = () => {
    fetch(`${serverEndpoint}/fetch_bacnet_objects_properties`)
      .then((response) => response.json())
      .then((data) => {
        setBacnetData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="rules">
      {open ? (
        <div className="rulesLeft">
          <RuleList ruleList={savedRules} onRuleClick={onRuleClick} />
          <ObjectBrowser
            onDragStart={onDragStart}
            toggleDevice={toggleDevice}
            bacnetData={bacnetData}
            expandedDevices={expandedDevices}
            refresh={handleRefresh}
          />
        </div>
      ) : null}
      <RuleCanvas
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={edgeOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        connectionLineStyle={connectionLineStyle}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
        fitView
        clearNodes={clearNodes}
        openSavePopup={openSavePopup}
        reactFlowWrapper={reactFlowWrapper}
        contextMenu={contextMenu}
        nodeCount={nodeCount}
        closeContextMenu={closeContextMenu}
      />
      <MathBlock
        onDragAdd4OperatorStart={onDragAdd4OperatorStart}
        onDragOperatorStart={onDragOperatorStart}
      />
      <LogicBlock onDragOperatorStart={onDragOperatorStart} />
      <FunctionBlock />
      <ConstantsBlock
        onDragConstantNodeStart={onDragConstantNodeStart}
        onDragOutputStart={onDragOutputStart}
      />
      <MiniWidgets />
      <div className="rulesPopup">
        {isEditPopupOpen && (
          <div className="rulesConstantPopup">
            <h3>{constantType} Constant</h3>
            <input
              type="text"
              value={constantValue}
              onChange={handleConstantInputChange}
              placeholder="Enter Constant Value"
              required
            />
            <button onClick={createCustomNodeWithConstant}>Update</button>
            <button
              onClick={() => {
                setIsEditPopupOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        )}
        {isPopupOpen && (
          <div className="rulesConstantPopup">
            <h3>{constantType} Constant</h3>
            <input
              type="text"
              value={constantValue}
              onChange={handleConstantInputChange}
              placeholder="Enter Constant Value"
              required
            />
            <button
              onClick={constantValue ? createCustomNodeWithConstant : () => {}}
            >
              Create
            </button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        )}

        {isSavePopupOpen && (
          <div className="rulesSavePopup">
            <h3>Save Rule</h3>
            <input
              type="text"
              value={saveValue}
              onChange={handleSaveInputChange}
              placeholder="Enter Rule Name"
              required
            />
            <button
              onClick={() => {
                onSave();
              }}
            >
              Save
            </button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rules;
