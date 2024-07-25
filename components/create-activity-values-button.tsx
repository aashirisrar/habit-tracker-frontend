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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import { useState } from "react";
import { useAtom } from "jotai";
import { fetchActivityValuesaAtom } from "@/state/atoms";
import { useParams } from "next/navigation";

const formSchema = z.object({
  date: z.string(),
  count: z.string(),
  habit_id: z.number(),
});

export function CreateActivityValuesButton({ id }: any) {
  const [open, setOpen] = useState(false);
  const [, fetchActivity] = useAtom(fetchActivityValuesaAtom);
  const params = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      count: "",
      habit_id: id,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const resp = await axios.post(
        "/api/values/create-activity-values",
        values
      );
      setOpen(false);
      fetchActivity(params.activityid);
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
          Record Activity
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Activity Values</DialogTitle>
          <DialogDescription>Add your Activity details.</DialogDescription>
        </DialogHeader>
        <div className="grid py-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date:</FormLabel>
                    <FormControl>
                      <Input
                        className="col-span-3"
                        {...field}
                        required
                        type="date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="count"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Count:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g 1"
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
                name="habit_id"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormLabel>Habit ID:</FormLabel>
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
              <div className="flex justify-end">
                <Button type="submit">Create Activity Values</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
