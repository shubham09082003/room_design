import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog , closeDialog , originalImage , aiImage }) {
  return (
    <AlertDialog open={openDialog} onOpenChange={closeDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
          <ReactBeforeSliderComponent
                firstImage={{
                    imageUrl : originalImage
                }}
                secondImage={{
                    imageUrl : aiImage
                }}
            />

            <Button onClick={() => closeDialog()}>Close</Button>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
