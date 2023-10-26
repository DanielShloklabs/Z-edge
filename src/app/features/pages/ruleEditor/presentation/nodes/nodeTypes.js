import CustomAdd4OperatorNode from "./customAdd4OperatorNode";
import CustomConstantNode from "./customConstantNode";
import CustomNode from "./customNode";
import CustomOperatorNode from "./customOperatorNode";
import CustomOutputNode from "./customOutputNode";

const nodeTypes = {
  customNode: CustomNode,
  customOperatorNode: CustomOperatorNode,
  customOutputNode: CustomOutputNode,
  customConstantNode: CustomConstantNode,
  customAdd4OperatorNode: CustomAdd4OperatorNode,
};

export default nodeTypes;
