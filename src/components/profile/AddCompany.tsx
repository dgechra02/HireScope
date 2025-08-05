//@ts-nocheck
'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";

export default function AddCompany() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [logo, setLogo] = useState("");

  async function handleCreate(e : FormEvent) {
    e.preventDefault();
    const company = {
      name,
      desc,
    };
    
    const res = await fetch("http://localhost:3000/api/company", {
        method : "POST", 
        body : JSON.stringify(company)
    })      
    const data = await res.json();
    console.log("compnay data ; ", data);   

    console.log("company adding status : ", data.message)
}
  return (
    <Card className="w-full max-w-sm absolute top-50">
      <CardHeader>
        <CardTitle>Add New Company</CardTitle>
        <CardDescription>
          Enter your company title, description and logo.
        </CardDescription>
        <CardAction>
          <Button variant="link">Add </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                type="text"
                placeholder="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Company Description</Label>
              <Input id="description" type="text" required placeholder="description" value={desc}
                onChange={(e) => setDesc(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={handleCreate}>
          sumbit
        </Button>
      </CardFooter>
    </Card>
  );
}
