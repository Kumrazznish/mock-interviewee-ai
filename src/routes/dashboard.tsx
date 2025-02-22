import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/interview-pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);

  const { userId } = useAuth();

  useEffect(() => {
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) =>
          doc.data()
        ) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "Something went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex w-full items-center justify-between">
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock interview"
        />

        <Link to={"/generate/create"}>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all"
          >
            <Plus className="w-5 h-5" /> Add new
          </Button>
        </Link>
      </div>

      <Separator className="my-8 border-blue-600" />

      <div className="grid md:grid-cols-3 gap-4 py-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-24 md:h-32 rounded-md bg-gray-200" />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewPin key={interview.id} data={interview} />
          ))
        ) : (
          <div className="md:col-span-3 w-full flex flex-grow items-center justify-center h-96 flex-col">
            <img
              src="/svg/not-found.svg"
              className="w-44 h-44 object-contain"
              alt="No Data Found"
            />

            <h2 className="text-lg font-semibold text-gray-700">No Data Found</h2>

            <p className="w-full md:w-96 text-center text-sm text-gray-500 mt-4">
              There is no available data to show. Please add some new mock interviews
            </p>

            <Link to={"/generate/create"} className="mt-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all">
                <Plus className="w-5 h-5" /> Add New
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};