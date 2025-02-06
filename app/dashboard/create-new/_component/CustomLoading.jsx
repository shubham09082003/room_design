import React from "react";
import {
  AlertDialog,
  AlertDialogContent
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>    
      <AlertDialogContent>
        <div className="bg-white flex justify-center my-10 items-center">
            <Image src={'/loading.gif'} alt="loading" width={100} height={100}/>
            <h2 className="text-2xl font-bold">Regenerating your room design... Don't refresh the page</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;
