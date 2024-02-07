/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./Logo";

import React, { useState, useReducer } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Layout,
  Header,
  MainContent,
  ChartBox,
  Column,
  Footer,
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
} from "./StyledComponents";
import { summaryData } from "./summaryData";
import { reducer } from "./reducer";

const initialState = {
  summaryData: summaryData,
};

function AppLayout() {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_VALUES", payload: Number(inputValue) || 0 });
  };

  const pieChartData = [
    {
      name: "Total Tax Due",
      value: state.summaryData
        .find((item) => item.label === "Total Tax Due")
        .yearly.replace("£", ""),
      fill: "#FFA726",
    },
    {
      name: "National Insurance",
      value: state.summaryData
        .find((item) => item.label === "National Insurance")
        .yearly.replace("£", ""),
      fill: "#4FC3F7",
    },
    {
      name: "Net Wage",
      value: state.summaryData
        .find((item) => item.label === "Net Wage")
        .yearly.replace("£", ""),
      fill: "#A5D6A7",
    },
  ];

  pieChartData.forEach((slice) => {
    slice.value = parseFloat(slice.value.replace("£", ""));
  });

  <Column>
    <ChartBox>
      <h4>Financial Distribution</h4>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={pieChartData}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          label={({ name, percent, value }) => `${name}: £${value}`}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={entry.fill} fill={entry.fill} stroke="#C30CE4" />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={50}
          iconType="circle"
        />
      </PieChart>
    </ChartBox>
  </Column>;

  return (
    <Layout>
      <Header>
        <div className="logo-text-container">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h2>UK income tax calculator 💷</h2>
          </Link>
        </div>
      </Header>
      <MainContent>
        <Column>
          <div>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p style={{ margin: 0 }}>Salary £</p>
                <input
                  type="number"
                  placeholder="0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                  }}
                >
                  <button
                    style={{ backgroundColor: "lightgray" }}
                    type="button"
                    onClick={() => {
                      const isConfirmed = window.confirm(
                        "Are you sure you want to reset the UK income tax calculator?"
                      );
                      if (isConfirmed) {
                        dispatch({ type: "Reset" });
                        setInputValue(0);
                      }
                    }}
                  >
                    Reset
                  </button>

                  <button
                    style={{ backgroundColor: "blue", color: "white" }}
                    type="submit"
                    disabled={parseFloat(inputValue) <= 0}
                    title={
                      parseFloat(inputValue) <= 0
                        ? "Before you can calculate your UK income tax, enter your yearly salary and then click the button!"
                        : ""
                    }
                  >
                    Calculate My Wage
                  </button>
                </div>
              </span>
            </form>
          </div>
          <StyledTable>
            <thead>
              <StyledTr>
                <StyledTh>Pay Summary</StyledTh>
                <StyledTh>%</StyledTh>
                <StyledTh>Yearly</StyledTh>
                <StyledTh>Monthly</StyledTh>
                <StyledTh>Weekly</StyledTh>
              </StyledTr>
            </thead>
            <tbody>
              {state.summaryData.map((item, index) => (
                <StyledTr key={`${item.label}-${index}`} label={item.label}>
                  <StyledTd>{item.label}</StyledTd>
                  <StyledTd>{item.percent}</StyledTd>
                  <StyledTd>{item.yearly}</StyledTd>
                  <StyledTd>{item.monthly}</StyledTd>
                  <StyledTd>{item.weekly}</StyledTd>
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        </Column>
        <Column>
          <div>
            <ChartBox style={{ marginTop: "0", marginBottom: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>Financial Distribution</h2>
              <ResponsiveContainer width="100%" height={440}>
                <PieChart width={100} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={pieChartData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={140}
                    fill="#8884d8"
                    label={({ name, percent, value }) =>
                      `${name}: £${value} - ${Math.floor(percent * 100)}%`
                    }
                  >
                    {pieChartData.map((entry, index) => {
                      const key = `${entry.name}-${entry.value}-${index}`;

                      return <Cell key={key} fill={entry.fill} />;
                    })}
                  </Pie>
                  <Tooltip />
                  <Legend
                    verticalAlign="middle"
                    align="right"
                    width="30%"
                    layout="vertical"
                    iconSize={15}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
        </Column>
      </MainContent>
      <Footer>
        <h5>Copyright©️ Christian Amungwa</h5>
      </Footer>
    </Layout>
  );
}

export default AppLayout;
