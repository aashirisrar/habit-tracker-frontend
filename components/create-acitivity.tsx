"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import { useState } from "react";
import { useAtom } from "jotai";
import { fetchActivitiesAtom } from "@/state/atoms";

const formSchema = z.object({
  title: z.string(),
  details: z.string(),
});

export function CreateActivity() {
  const [, fetchActivities] = useAtom(fetchActivitiesAtom);
  const [open, setOpen] = useState(false);
  const [genderplaceholder] = useState("Select an icon");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const id = sessionStorage.getItem("userId");
      values.owner_id = id;
      const resp = await axios.post("api/activity/create-activity", values);
      fetchActivities(id);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="gap-x-1"
          onClick={() => setOpen(true)}
        >
          <PlusCircleIcon size={18} />
          Create Activity
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Activity</DialogTitle>
          <DialogDescription>Add your Activity details.</DialogDescription>
        </DialogHeader>
        <div className="grid py-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g read literature"
                        className="col-span-3"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={genderplaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="💪">💪 Exercise</SelectItem>
                        <SelectItem value="📚">📚 Books</SelectItem>
                        <SelectItem value="🏃">🏃 Running</SelectItem>
                        <SelectItem value="🚴">🚴 Biking</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit">Create Activity</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
