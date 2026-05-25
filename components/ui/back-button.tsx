import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
const BackButton = ({ prevPage }: { prevPage: string }) => {
  return (
    <Button variant="ghost" className="gap-2 pl-2">
      <ArrowLeft className="h-4 w-4" />
      Back to {prevPage}
    </Button>
  );
};

export default BackButton;
