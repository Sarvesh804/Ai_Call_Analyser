import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState([]); // State for leaderboard data
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('https://ai-call-analyser-backend.vercel.app/api/data/all'); // Fetching all call analysis data
        if (response.data.success) {
          const callData = response.data.data; // Assuming response.data.data contains the array of call records
          
          // Calculate average satisfaction scores for each distinct employee
          const averageScores = {};

          callData.forEach(({ eid, satisfaction_score }) => {
            // Initialize the employee entry if it doesn't exist
            if (!averageScores[eid]) {
              averageScores[eid] = { totalScore: 0, count: 0 };
            }

            // Accumulate score and count for the employee
            averageScores[eid].totalScore += satisfaction_score;
            averageScores[eid].count += 1;
          });

          // Transform the average scores into a usable format
          const leaderboard = Object.entries(averageScores).map(([eid, { totalScore, count }]) => ({
            employeeId: eid,
            satisfactionScore: (totalScore / count).toFixed(2), // Calculate average
          }));

          setLeaderboardData(leaderboard); // Update state with the leaderboard data
        } else {
          setError("Failed to fetch leaderboard data.");
          console.error("Failed to fetch data: ", response.data.message);
        }
      } catch (error) {
        setError("Error fetching leaderboard data.");
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Sort the leaderboard data based on average satisfaction score in descending order and assign ranks
  const sortedLeaderboardData = leaderboardData
    .sort((a, b) => b.satisfactionScore - a.satisfactionScore)
    .map((employee, index) => ({ ...employee, rank: index + 1 }));

  return (
    <Card className="m-8">
      <CardHeader>
        <CardTitle>Employee Satisfaction Leaderboard</CardTitle>
        <CardDescription>Top employees by average satisfaction score</CardDescription>
      </CardHeader>
      <CardContent>
        {error && <div className="text-red-500">{error}</div>} {/* Display error message if any */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer hover:text-primary text-center">Rank</TableHead>
              <TableHead className="cursor-pointer hover:text-primary text-center">Employee ID</TableHead>
              <TableHead className="cursor-pointer hover:text-primary text-center">Average Satisfaction Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedLeaderboardData.map((employee) => (
              <TableRow key={employee.employeeId}>
                <TableCell className="text-center">{employee.rank}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center gap-3 justify-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/download.jpeg" alt="Avatar" />
                      <AvatarFallback>{employee.employeeId}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{employee.employeeId}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{employee.satisfactionScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}
