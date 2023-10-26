import React from "react";
import "../../../../../common/styles/miniWidgetsStyle.css";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import CalculateIcon from "@mui/icons-material/Calculate";
import { TbLogicXnor } from "react-icons/tb";
import { AiOutlineFunction } from "react-icons/ai";
import { LuTextCursorInput } from "react-icons/lu";
import { useMenu } from "../../../../../common/utils/menuContext";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useLocation } from "react-router-dom";

const MiniWidgets = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const {
    setWidgetOpen,
    setMathBlockOpen,
    setLogicBlockOpen,
    setFunctionBlockOpen,
    setConstantsBlockOpen,
  } = useMenu();
  return (
    <div className={`miniWidgets ${isDarkMode ? "dark" : ""}`}>
      <div className={`miniWidgetMenu ${isDarkMode ? "dark" : ""}`}>
        {location.pathname === "/" ? (
          <WidgetsTwoToneIcon
            className={`miniWidgetIcon ${isDarkMode ? "dark" : ""}`}
            onClick={() => setWidgetOpen((prevOpen) => !prevOpen)}
          />
        ) : (
          <>
            <CalculateIcon
              className={`miniWidgetIcon ${isDarkMode ? "dark" : ""}`}
              onClick={() =>
                setMathBlockOpen((prevOpen) => !prevOpen) ||
                setLogicBlockOpen(false) ||
                setFunctionBlockOpen(false) ||
                setConstantsBlockOpen(false)
              }
            />
            <TbLogicXnor
              size={24}
              className={`miniWidgetIcon ${isDarkMode ? "dark" : ""}`}
              onClick={() =>
                setLogicBlockOpen((prevOpen) => !prevOpen) ||
                setMathBlockOpen(false) ||
                setFunctionBlockOpen(false) ||
                setConstantsBlockOpen(false)
              }
            />
            <AiOutlineFunction
              size={24}
              className={`miniWidgetIcon ${isDarkMode ? "dark" : ""}`}
              onClick={() =>
                setFunctionBlockOpen((prevOpen) => !prevOpen) ||
                setMathBlockOpen(false) ||
                setLogicBlockOpen(false) ||
                setConstantsBlockOpen(false)
              }
            />
            <LuTextCursorInput
              size={24}
              className={`miniWidgetIcon ${isDarkMode ? "dark" : ""}`}
              onClick={() =>
                setConstantsBlockOpen((prevOpen) => !prevOpen) ||
                setMathBlockOpen(false) ||
                setLogicBlockOpen(false) ||
                setFunctionBlockOpen(false)
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MiniWidgets;
