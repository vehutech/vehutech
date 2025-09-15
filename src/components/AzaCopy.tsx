import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard } from "lucide-react";

interface copyAzaProp {
    accountNumber: string
    businessName: string
}

export default function CopyAzaLandingPage({ accountNumber, businessName }: copyAzaProp ) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Aza copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{businessName}</CardTitle>
          <p className="text-sm text-gray-500 text-center">Powered by CopyAza</p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg font-semibold mb-4">Aza: {accountNumber}</p>
          <Button
            onClick={copyToClipboard}
            className="w-full bg-green-600 hover:bg-green-700"
            aria-label="Copy account number to clipboard"
          >
            <Clipboard className="mr-2 h-4 w-4" /> Copy Aza
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}