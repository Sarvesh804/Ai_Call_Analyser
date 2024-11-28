import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export function CallAnalysis() {
  const { user, isAuthenticated, isloading } = useAuth(); // Assuming user info is available in AuthContext
  const [callAnalysis, setCallAnalysis] = useState([]); // State for call analysis data
  const [employeeIds, setEmployeeIds] = useState([]); // State for unique employee IDs
  const [selectedEid, setSelectedEid] = useState("E"); // State for filtering by eid
  const [selectedCall, setSelectedCall] = useState(""); // State for filtering by call id

  useEffect(() => {
    const fetchCallData = async () => {
      try {
        const response = await axios.get('https://ai-call-analyser-backend.vercel.app/api/data/all');
        // Fetch data from the API
        console.log(response)
        if (response.data.success) {
          setCallAnalysis(response.data.data); // Set the data if the request was successful
          // Extract unique employee IDs
          const uniqueEids = [...new Set(response.data.data.map(item => item.eid))];
          setEmployeeIds(uniqueEids); // Set unique employee IDs for filtering
        } else {
          console.error("Failed to fetch data: ", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching call analysis data:", error);
      }
    };

    fetchCallData();
  }, []);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Determine if user is an employee
  const isEmployee = user.role === 'employee';

  // Filter logic
  const filteredLogs = callAnalysis.filter((log) => {
    const matchesEid = isEmployee
      ? log.eid === user.eid
      : selectedEid === 'E'
        ? true
        : log.eid === selectedEid;
    // Employees see their own data only, managers see all
    const matchesCall = selectedCall
      ? log.cid.toLowerCase().includes(selectedCall.toLowerCase()) // Check if `selectedCall` matches part of `log.cid`
      : true;

    return matchesEid && matchesCall;
  });

  return (
    <>
      <div className="filter-section mb-8 flex gap-4">
        {/* Filter by Employee ID only if user is manager */}
        {!isEmployee && (
          <Select onValueChange={setSelectedEid}>
            <SelectTrigger className="w-[200px] ml-5">
              <SelectValue placeholder="Select Employee ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="E">All Employees</SelectItem>
              {employeeIds.map((eid) => (
                <SelectItem key={eid} value={eid}>Employee {eid}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* Filter by Call ID */}
        <Input
          type="search"
          className="w-[200px]"
          value={selectedCall}
          onChange={(e) => setSelectedCall(e.target.value)}
          placeholder="Search Call"
        />
      </div>

      <Table>
        <TableCaption>A list of call analysis details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-center">Call ID</TableHead>
            <TableHead className="text-center">Employee ID</TableHead>
            {/* <TableHead className="text-center">Remarks</TableHead> */}
            <TableHead className="text-center">Satisfaction Score</TableHead>
            <TableHead className="text-center">Sentiment Analysis</TableHead>
            <TableHead className="text-center">Call Summary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLogs.map((analysis) => (
            <TableRow key={analysis._id}> {/* Use unique _id for key */}
              <TableCell className="font-medium text-center">{analysis.cid}</TableCell>
              <TableCell className="text-center">{analysis.eid}</TableCell>
              {/* <TableCell className="text-center">
                <Input defaultValue={analysis.remarks} readOnly />
              </TableCell> */}
              <TableCell className="flex justify-around items-center text-center">
                <Progress value={((analysis.satisfaction_score + 1) / 5) * 100} className="w-3/4 ml-4" /> {/* Adjusted for satisfaction_score */}
                <div>{analysis.satisfaction_score}</div>
              </TableCell>
              <TableCell className="text-center">{analysis.sentiment_analysis}</TableCell>
              <TableCell className="text-center">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>View Summary</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <h3 className="text-xl font-bold pl-5">Call Summary</h3>
                    <Textarea defaultValue={analysis.call_summary} className="m-4" readOnly />
                  </DrawerContent>
                </Drawer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
