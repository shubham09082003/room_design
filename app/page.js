import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div>
        <Link path="/dashboard">
          <Button>Move to Dashboard</Button>
        </Link>
    </div>
  )
}
  