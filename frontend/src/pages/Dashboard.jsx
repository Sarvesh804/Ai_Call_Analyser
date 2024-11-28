import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "../components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { BarComp } from "@/components/BarComp";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary elements

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const [AIdata, setAIdata] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Function to group data by employee and calculate average satisfaction score
  const processAIdata = (data) => {
    const employeeData = data.reduce((acc, item) => {
      const { eid, satisfaction_score, sentiment_analysis } = item;
      if (!acc[eid]) {
        acc[eid] = {
          eid,
          satisfaction_scores: [],
          sentiment_counts: { positive: 0, neutral: 0, negative: 0 },
        };
      }

      // Add satisfaction score
      acc[eid].satisfaction_scores.push(satisfaction_score);

      // Increment sentiment analysis counts
      acc[eid].sentiment_counts[sentiment_analysis] += 1;

      return acc;
    }, {});

    // Calculate the average satisfaction score for each employee
    Object.keys(employeeData).forEach((eid) => {
      const scores = employeeData[eid].satisfaction_scores;
      const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      employeeData[eid].average_satisfaction = avgScore;
    });

    return Object.values(employeeData); // Return array of employee data
  };

  // Fetch AI data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ai-call-analyser-backend.vercel.app/api/data/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const processedData = processAIdata(data.data);
        setAIdata(processedData);

        if (user && user.role === "employee") {
          const currentEmployee = processedData.find(emp => emp.eid === user.eid);
          setSelectedEmployee(currentEmployee);
        } else {
          setSelectedEmployee(processedData[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleEmployeeSelect = (eid) => {
    const employee = AIdata.find((emp) => emp.eid === eid);
    setSelectedEmployee(employee);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const sentimentData = selectedEmployee
    ? {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [
        {
          label: "Sentiment Analysis",
          data: [
            selectedEmployee.sentiment_counts.positive,
            selectedEmployee.sentiment_counts.neutral,
            selectedEmployee.sentiment_counts.negative,
          ],
          backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
        },
      ],
    }
    : null;

  return (
    <div className="dashboard-container p-6">
      <div className="user-profile flex items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-semibold">{user.eid}</h2>
          <p className="text-sm text-gray-600">{user.role}</p>
          {user.role === "employee" && <p className="text-sm text-gray-600">{user.phone}</p>}
        </div>
      </div>

      <div className="employee-section mb-8">
        <Select
          onValueChange={handleEmployeeSelect}
          value={selectedEmployee ? selectedEmployee.eid : undefined}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an employee" />
          </SelectTrigger>
          <SelectContent>
            {AIdata && AIdata.length > 0 ? (
              user.role === "manager" ? (
                AIdata.map((employee) => (
                  <SelectItem key={employee.eid} value={employee.eid}>
                    {employee.eid}
                  </SelectItem>
                ))
              ) : (
                <SelectItem key={user.eid} value={user.eid}>
                  {user.eid}
                </SelectItem>
              )
            ) : (
              <SelectItem disabled>No employees available</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>

      {selectedEmployee && (
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>{selectedEmployee.name} (Employee ID: {selectedEmployee.eid})</CardTitle>
            <p>{selectedEmployee.remarks}</p>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium">Average Satisfaction Score:</p>
              <Progress value={selectedEmployee.average_satisfaction} className="w-3/4 ml-4" />
              <span>{selectedEmployee.average_satisfaction.toFixed(2)}%</span>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedEmployee && (
        <div className="chart-section mb-8 mt-20  flex justify-around">
          <div className="flex-col items-center justify-center w-[500px]">
            <h3>Sentiment Analysis Distribution</h3>
            {sentimentData && <Pie data={sentimentData} />}

          </div>
          {/* <div className="flex-col items-center justify-around w-[500px]">
            <h3>Sentiment Analysis Distribution</h3>
            {<BarComp />}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
