import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import SERVER_URL from "@/serverUrl";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, {
    message: "Password must be atleast 4 chars long.",
  }),
});

function Signup() {
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/login`, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("login get error", error);
      });

    console.log("use effect was called");
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${SERVER_URL}/login`, values, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Got error while logging in", error);
      });
  }

  return (
    <main
      className="flex items-center justify-center px-5 pt-5 "
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <section className="w-80 sm:w-96 border border-black p-5 rounded-xl">
        <span className="text-3xl font-bold text-center block mb-5">Login</span>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="someone@example.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                className="bg-primarycb text-lg w-28 hover:bg-primarycb "
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
        <span className="mt-5 block text-center">
          Visiting for the first time ?{" "}
          <Link to="/signup" className="underline text-primarycb">
            Signup here
          </Link>{" "}
        </span>
      </section>
    </main>
  );
}

export default Signup;
