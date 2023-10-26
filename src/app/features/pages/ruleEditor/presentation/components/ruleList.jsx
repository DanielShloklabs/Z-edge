import React from "react";
import "../../../../../common/styles/ruleListStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";

const RuleList = ({ ruleList, onRuleClick }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`ruleList ${isDarkMode ? "dark" : ""}`}>
      <div className={`ruleListHeader ${isDarkMode ? "dark" : ""}`}>Rules</div>
      <div className="ruleListContent">
        {ruleList.map((rule,index) => (
          <li key={index} onClick={() => onRuleClick(rule)}>{rule.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RuleList;
